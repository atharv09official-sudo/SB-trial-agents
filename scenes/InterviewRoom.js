/**
 * ELiVET Game Engine — Scene: Photorealistic Corporate Interview Suite
 * Fully enclosed architecture, panoramic glass window with skyline,
 * walnut executive desk, dual ergonomic mesh chairs, lit laptop, whiteboard,
 * physical ceiling troffers, architectural desk task lamp, wall sconces,
 * and an interactive wall-mounted dual rocker light switch.
 */

import * as THREE from 'three';
import { NPC } from '../systems/NPC.js';
import { TextureGenerator } from '../systems/TextureGenerator.js';

export class InterviewRoom {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {import('../systems/Physics.js').PhysicsSystem} physics
   */
  constructor(scene, camera, physics) {
    this.scene = scene;
    this.camera = camera;
    this.physics = physics;

    this.group = new THREE.Group();
    this.group.name = 'Scene_InterviewRoom';
    this.scene.add(this.group);

    this.npc = null;
    this.lights = [];
    this.disposables = [];

    // Lighting States
    this.ceilingLightsOn = true;
    this.deskLampOn = true;
    this.sunlightOn = true;
    this.nightModeOn = false;

    // Interactive 3D Objects Registry for Raycasting
    this.clickableObjects = [];

    // Bright daylight sky background (NOT DARK)
    this.originalBg = this.scene.background;
    this.originalFog = this.scene.fog;
    this.scene.background = new THREE.Color(0xa7d8fc);
    this.scene.fog = new THREE.FogExp2(0xc9dff2, 0.002);

    // Build the room components
    this._buildEnclosedArchitecture();
    this._buildFurniture();
    this._buildExecutiveDecorations();
    this._buildWallSconces();
    this._buildArchitecturalDeskLamp();
    this._buildPhysicalLightSwitch();
    this._setupCinematicLighting();
    this._spawnNPC();
  }

  /**
   * Fully enclosed room shell: Floor, 4 walls, ceiling with recessed LED panels, window with city view
   */
  _buildEnclosedArchitecture() {
    const roomW = 10;
    const roomD = 10;
    const roomH = 4.2;

    // 1. Photorealistic Hardwood Floor
    const floorGeo = new THREE.PlaneGeometry(roomW, roomD);
    const floorTex = TextureGenerator.createWoodFloorTexture();
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.35,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);
    this.disposables.push(floorGeo, floorTex, floorMat);

    // Physics Boundaries
    this.physics.setBoundaries(-roomW / 2 + 0.4, roomW / 2 - 0.4, -roomD / 2 + 0.4, roomD / 2 - 0.4);

    // 2. Ceiling with Recessed Architectural Light Fixtures
    const ceilingGeo = new THREE.PlaneGeometry(roomW, roomD);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.95
    });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = roomH;
    this.group.add(ceiling);
    this.disposables.push(ceilingGeo, ceilingMat);

    // Architectural Recessed LED Troffer Panels (Metallic bezel frames + emissive diffusers)
    this.ceilingDiffusers = [];
    this.ceilingDiffuserMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfff7ed,
      emissiveIntensity: 1.25,
      roughness: 0.2
    });
    this.disposables.push(this.ceilingDiffuserMat);

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.2
    });
    this.disposables.push(bezelMat);

    const panelPositions = [
      [-2.2, roomH - 0.02, -2.0],
      [2.2, roomH - 0.02, -2.0],
      [-2.2, roomH - 0.02, 1.8],
      [2.2, roomH - 0.02, 1.8]
    ];

    const diffuserGeo = new THREE.PlaneGeometry(1.5, 0.75);
    const bezelOuterGeo = new THREE.BoxGeometry(1.65, 0.04, 0.9);
    this.disposables.push(diffuserGeo, bezelOuterGeo);

    panelPositions.forEach(([px, py, pz]) => {
      // Outer aluminum bezel housing
      const bezel = new THREE.Mesh(bezelOuterGeo, bezelMat);
      bezel.position.set(px, py + 0.015, pz);
      this.group.add(bezel);

      // Translucent glowing diffuser panel
      const diffuser = new THREE.Mesh(diffuserGeo, this.ceilingDiffuserMat);
      diffuser.rotation.x = Math.PI / 2;
      diffuser.position.set(px, py, pz);
      this.group.add(diffuser);
      this.ceilingDiffusers.push(diffuser);
    });

    // 3. Walls
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xede9fe, // Clean corporate off-white with subtle warm undertone
      roughness: 0.85
    });
    const accentWallMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark modern slate accent feature wall
      roughness: 0.6
    });
    this.disposables.push(wallMat, accentWallMat);

    // Back Wall (Feature Accent Wall behind interviewer)
    const backWallGeo = new THREE.PlaneGeometry(roomW, roomH);
    const backWall = new THREE.Mesh(backWallGeo, accentWallMat);
    backWall.position.set(0, roomH / 2, -roomD / 2);
    backWall.receiveShadow = true;
    this.group.add(backWall);
    this.disposables.push(backWallGeo);

    // Vertical Wood Slat Wall Accents on Back Wall
    const slatGeo = new THREE.BoxGeometry(0.06, roomH, 0.04);
    const slatMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.5 });
    for (let x = -4.5; x <= -2.5; x += 0.22) {
      const slat = new THREE.Mesh(slatGeo, slatMat);
      slat.position.set(x, roomH / 2, -roomD / 2 + 0.02);
      this.group.add(slat);
    }
    this.disposables.push(slatGeo, slatMat);

    // Front Wall (behind player / entrance wall)
    const frontWall = new THREE.Mesh(backWallGeo, wallMat);
    frontWall.rotation.y = Math.PI;
    frontWall.position.set(0, roomH / 2, roomD / 2);
    this.group.add(frontWall);

    // Left Wall
    const sideWallGeo = new THREE.PlaneGeometry(roomD, roomH);
    const leftWall = new THREE.Mesh(sideWallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-roomW / 2, roomH / 2, 0);
    this.group.add(leftWall);

    // Right Wall — Large Floor-to-Ceiling Window with Panoramic City Skyline View!
    const rightWall = new THREE.Mesh(sideWallGeo, wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(roomW / 2, roomH / 2, 0);
    this.group.add(rightWall);
    this.disposables.push(sideWallGeo);

    // Panoramic Skyline Glass Window
    const winFrameGeo = new THREE.BoxGeometry(0.12, 3.0, 6.4);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.2 });
    const winFrame = new THREE.Mesh(winFrameGeo, frameMat);
    winFrame.position.set(roomW / 2 - 0.05, 2.1, 0);
    this.group.add(winFrame);

    const winGlassGeo = new THREE.PlaneGeometry(6.2, 2.8);
    const winTex = TextureGenerator.createWindowViewTexture();
    this.winMat = new THREE.MeshBasicMaterial({
      map: winTex
    });
    const winGlass = new THREE.Mesh(winGlassGeo, this.winMat);
    winGlass.rotation.y = -Math.PI / 2;
    winGlass.position.set(roomW / 2 - 0.08, 2.1, 0);
    this.group.add(winGlass);
    this.disposables.push(winFrameGeo, frameMat, winGlassGeo, winTex, this.winMat);

    // Window Horizontal Architectural Blinds
    const blindGeo = new THREE.BoxGeometry(0.04, 0.02, 6.2);
    const blindMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    for (let by = 0.9; by <= 3.4; by += 0.28) {
      const blind = new THREE.Mesh(blindGeo, blindMat);
      blind.position.set(roomW / 2 - 0.12, by, 0);
      blind.rotation.z = 0.2;
      this.group.add(blind);
    }
    this.disposables.push(blindGeo, blindMat);

    // Floor Baseboard Trims
    const baseboardGeo = new THREE.BoxGeometry(roomW, 0.14, 0.04);
    const baseboardMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const bBack = new THREE.Mesh(baseboardGeo, baseboardMat);
    bBack.position.set(0, 0.07, -roomD / 2 + 0.02);
    this.group.add(bBack);
    this.disposables.push(baseboardGeo, baseboardMat);
  }

  /**
   * Modern Architectural Up/Down Wall Sconces
   */
  _buildWallSconces() {
    this.sconceGlowMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfde68a,
      emissiveIntensity: 1.4,
      roughness: 0.1
    });
    this.disposables.push(this.sconceGlowMat);

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      metalness: 0.9,
      roughness: 0.25
    });
    this.disposables.push(metalMat);

    const sconcePositions = [
      [-3.4, 2.35, -4.94],
      [3.4, 2.35, -4.94]
    ];

    const bodyGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.32, 16);
    const capGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.02, 16);
    this.disposables.push(bodyGeo, capGeo);

    this.sconceLights = [];

    sconcePositions.forEach(([sx, sy, sz]) => {
      const group = new THREE.Group();
      group.position.set(sx, sy, sz);

      // Matte dark cylinder fixture
      const body = new THREE.Mesh(bodyGeo, metalMat);
      group.add(body);

      // Top glowing aperture
      const topCap = new THREE.Mesh(capGeo, this.sconceGlowMat);
      topCap.position.y = 0.16;
      group.add(topCap);

      // Bottom glowing aperture
      const btmCap = new THREE.Mesh(capGeo, this.sconceGlowMat);
      btmCap.position.y = -0.16;
      group.add(btmCap);

      // Soft architectural grazing pointlight
      const sconceLight = new THREE.PointLight(0xfde68a, 0.65, 3.5, 2.0);
      sconceLight.position.set(0, 0, 0.08);
      group.add(sconceLight);
      this.sconceLights.push(sconceLight);

      this.group.add(group);
    });
  }

  /**
   * Architectural Executive Task Lamp mounted on walnut desk
   */
  _buildArchitecturalDeskLamp() {
    this.deskLampGroup = new THREE.Group();
    this.deskLampGroup.name = 'Interactive_DeskLamp';
    // Positioned on the right side of the executive desk
    this.deskLampGroup.position.set(0.95, 0.86, -1.65);

    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Polished architectural brass / gold accent
      metalness: 0.85,
      roughness: 0.2
    });
    const darkSteelMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.9,
      roughness: 0.25
    });
    this.disposables.push(brassMat, darkSteelMat);

    // 1. Heavy Weighted Circular Base
    const baseGeo = new THREE.CylinderGeometry(0.12, 0.13, 0.025, 24);
    const lampBase = new THREE.Mesh(baseGeo, darkSteelMat);
    lampBase.castShadow = true;
    lampBase.receiveShadow = true;
    this.deskLampGroup.add(lampBase);
    this.disposables.push(baseGeo);

    // 2. Clickable Push-Button Switch on Lamp Base
    const switchBtnGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.016, 16);
    this.lampSwitchBtnMat = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Glowing emerald when active
      emissive: 0x059669,
      emissiveIntensity: 0.8,
      metalness: 0.5,
      roughness: 0.2
    });
    this.deskLampSwitchBtn = new THREE.Mesh(switchBtnGeo, this.lampSwitchBtnMat);
    this.deskLampSwitchBtn.position.set(0, 0.02, 0.06);
    this.deskLampGroup.add(this.deskLampSwitchBtn);
    this.disposables.push(switchBtnGeo, this.lampSwitchBtnMat);

    // 3. Articulated Brass Arm Stem
    const armLowerGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.38, 12);
    const armLower = new THREE.Mesh(armLowerGeo, brassMat);
    armLower.position.set(-0.06, 0.19, -0.04);
    armLower.rotation.z = 0.28;
    armLower.castShadow = true;
    this.deskLampGroup.add(armLower);

    const jointGeo = new THREE.SphereGeometry(0.024, 12, 12);
    const elbowJoint = new THREE.Mesh(jointGeo, brassMat);
    elbowJoint.position.set(-0.11, 0.37, -0.04);
    this.deskLampGroup.add(elbowJoint);

    const armUpperGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.32, 12);
    const armUpper = new THREE.Mesh(armUpperGeo, brassMat);
    armUpper.position.set(-0.21, 0.44, 0.02);
    armUpper.rotation.z = -0.55;
    armUpper.castShadow = true;
    this.deskLampGroup.add(armUpper);
    this.disposables.push(armLowerGeo, jointGeo, armUpperGeo);

    // 4. Lamp Conical Shade / Hood (Clickable)
    const shadeGeo = new THREE.ConeGeometry(0.12, 0.16, 24, 1, true);
    this.deskLampShade = new THREE.Mesh(shadeGeo, darkSteelMat);
    this.deskLampShade.position.set(-0.31, 0.52, 0.08);
    this.deskLampShade.rotation.z = Math.PI * 0.72;
    this.deskLampShade.rotation.y = -0.3;
    this.deskLampShade.castShadow = true;
    this.deskLampGroup.add(this.deskLampShade);
    this.disposables.push(shadeGeo);

    // 5. Glowing Bulb inside Hood
    const bulbGeo = new THREE.SphereGeometry(0.042, 16, 16);
    this.deskLampBulbMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfef08a,
      emissiveIntensity: 1.8,
      roughness: 0.1
    });
    this.deskLampBulb = new THREE.Mesh(bulbGeo, this.deskLampBulbMat);
    this.deskLampBulb.position.set(-0.32, 0.49, 0.09);
    this.deskLampGroup.add(this.deskLampBulb);
    this.disposables.push(bulbGeo, this.deskLampBulbMat);

    // 6. Focused Spotlight casting warm cone down onto candidate pad & desk
    this.deskLampSpot = new THREE.SpotLight(0xfef08a, 1.8, 4.8, Math.PI / 4, 0.65, 2.0);
    this.deskLampSpot.position.set(0.63, 1.35, -1.56);
    this.deskLampSpot.target.position.set(-0.15, 0.85, -1.55);
    this.deskLampSpot.castShadow = true;
    this.deskLampSpot.shadow.mapSize.width = 1024;
    this.deskLampSpot.shadow.mapSize.height = 1024;
    this.deskLampSpot.shadow.bias = -0.0001;
    this.deskLampSpot.shadow.normalBias = 0.02;

    this.group.add(this.deskLampSpot);
    this.group.add(this.deskLampSpot.target);
    this.lights.push(this.deskLampSpot);

    this.group.add(this.deskLampGroup);

    // Register Clickable 3D Objects for Desk Lamp
    const lampClickHandler = () => {
      this.toggleDeskLamp();
    };

    this.clickableObjects.push({
      mesh: this.deskLampSwitchBtn,
      name: 'Desk Lamp Button',
      hint: 'Click to Toggle Desk Lamp [J]',
      onClick: lampClickHandler
    });

    this.clickableObjects.push({
      mesh: this.deskLampShade,
      name: 'Desk Lamp',
      hint: 'Click to Toggle Desk Lamp [J]',
      onClick: lampClickHandler
    });
  }

  /**
   * Wall-Mounted Dual Rocker Light Switch (Clickable in 3D)
   */
  _buildPhysicalLightSwitch() {
    this.wallSwitchGroup = new THREE.Group();
    this.wallSwitchGroup.name = 'Interactive_WallSwitch';
    // Positioned prominently on the left wall at eye height near the candidate / whiteboard
    this.wallSwitchGroup.position.set(-4.95, 1.5, -0.3);

    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // Crisp clean satin ivory plate
      metalness: 0.1,
      roughness: 0.4
    });
    const rockerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Slate rocker switch
      roughness: 0.3
    });
    this.disposables.push(plateMat, rockerMat);

    // 1. Switch Backing Bevel Plate
    const plateGeo = new THREE.BoxGeometry(0.025, 0.36, 0.26);
    this.wallSwitchPlate = new THREE.Mesh(plateGeo, plateMat);
    this.wallSwitchGroup.add(this.wallSwitchPlate);
    this.disposables.push(plateGeo);

    // Decorative Mounting Screws
    const screwGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.006, 10);
    const screwMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    [-0.14, 0.14].forEach((sy) => {
      const screw = new THREE.Mesh(screwGeo, screwMat);
      screw.rotation.z = Math.PI / 2;
      screw.position.set(0.013, sy, 0);
      this.wallSwitchGroup.add(screw);
    });
    this.disposables.push(screwGeo, screwMat);

    // 2. Rocker Switch 1 (Ceiling Downlights)
    const rockerGeo = new THREE.BoxGeometry(0.024, 0.11, 0.065);
    this.rockerCeiling = new THREE.Mesh(rockerGeo, rockerMat);
    this.rockerCeiling.position.set(0.014, 0.04, -0.05);
    this.rockerCeiling.rotation.z = 0.22; // ON angle
    this.wallSwitchGroup.add(this.rockerCeiling);

    // 3. Rocker Switch 2 (Desk Task Lamp)
    this.rockerDesk = new THREE.Mesh(rockerGeo, rockerMat);
    this.rockerDesk.position.set(0.014, 0.04, 0.05);
    this.rockerDesk.rotation.z = 0.22; // ON angle
    this.wallSwitchGroup.add(this.rockerDesk);
    this.disposables.push(rockerGeo);

    // 4. Micro Status LEDs on Switch Plate
    const ledGeo = new THREE.SphereGeometry(0.01, 10, 10);
    this.ledCeilingMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 1.5
    });
    this.ledDeskMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 1.5
    });

    const ledCeiling = new THREE.Mesh(ledGeo, this.ledCeilingMat);
    ledCeiling.position.set(0.015, -0.06, -0.05);
    this.wallSwitchGroup.add(ledCeiling);

    const ledDesk = new THREE.Mesh(ledGeo, this.ledDeskMat);
    ledDesk.position.set(0.015, -0.06, 0.05);
    this.wallSwitchGroup.add(ledDesk);
    this.disposables.push(ledGeo, this.ledCeilingMat, this.ledDeskMat);

    // 5. Visual Discovery Label Tag Above Switch
    const tagCanvas = document.createElement('canvas');
    tagCanvas.width = 256;
    tagCanvas.height = 80;
    const ctx = tagCanvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 256, 80);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 248, 72);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💡 LIGHT SWITCH', 128, 36);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px monospace';
    ctx.fillText('CLICK TO TOGGLE', 128, 60);

    const tagTex = new THREE.CanvasTexture(tagCanvas);
    const tagMat = new THREE.MeshBasicMaterial({ map: tagTex });
    const tagGeo = new THREE.PlaneGeometry(0.32, 0.1);
    const tagMesh = new THREE.Mesh(tagGeo, tagMat);
    tagMesh.rotation.y = Math.PI / 2;
    tagMesh.position.set(0.015, 0.26, 0);
    this.wallSwitchGroup.add(tagMesh);
    this.disposables.push(tagTex, tagMat, tagGeo);

    this.group.add(this.wallSwitchGroup);

    // Register Clickable 3D Objects for Wall Switch
    this.clickableObjects.push({
      mesh: this.rockerCeiling,
      name: 'Ceiling Lights Switch',
      hint: 'Click to Toggle Ceiling Lights [L]',
      onClick: () => this.toggleCeilingLights()
    });

    this.clickableObjects.push({
      mesh: this.rockerDesk,
      name: 'Desk Lamp Switch',
      hint: 'Click to Toggle Desk Lamp [J]',
      onClick: () => this.toggleDeskLamp()
    });

    this.clickableObjects.push({
      mesh: this.wallSwitchPlate,
      name: 'Room Light Switch Panel',
      hint: 'Click to Toggle Ceiling Lights [L]',
      onClick: () => this.toggleCeilingLights()
    });
  }

  /**
   * High-End Furniture: Walnut executive desk, 2 ergonomic mesh office chairs
   */
  _buildFurniture() {
    // 1. Walnut Executive Desk
    const deskTopGeo = new THREE.BoxGeometry(2.6, 0.08, 1.3);
    const deskTopMat = new THREE.MeshStandardMaterial({
      color: 0x582f0e, // Rich dark walnut
      roughness: 0.35,
      metalness: 0.05
    });
    const deskTop = new THREE.Mesh(deskTopGeo, deskTopMat);
    deskTop.position.set(0, 0.82, -1.8);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    this.group.add(deskTop);
    this.physics.addStaticCollider(deskTop);
    this.disposables.push(deskTopGeo, deskTopMat);

    // Modern Steel Sled Legs
    const sledLegGeo = new THREE.BoxGeometry(0.06, 0.82, 1.25);
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.9,
      roughness: 0.2
    });
    [-1.2, 1.2].forEach((x) => {
      const leg = new THREE.Mesh(sledLegGeo, steelMat);
      leg.position.set(x, 0.41, -1.8);
      leg.castShadow = true;
      this.group.add(leg);
    });
    this.disposables.push(sledLegGeo, steelMat);

    // Modesty Panel
    const modestyGeo = new THREE.BoxGeometry(2.3, 0.45, 0.04);
    const modesty = new THREE.Mesh(modestyGeo, steelMat);
    modesty.position.set(0, 0.55, -1.35);
    this.group.add(modesty);
    this.disposables.push(modestyGeo);

    // 2. Dual Executive Ergonomic Mesh Office Chairs
    // Chair 1: Interviewer Chair (seated behind desk facing +Z)
    this._createOfficeChair(0, 0, -2.65, 0);

    // Chair 2: Candidate Chair (in front of desk facing -Z)
    this._createOfficeChair(0, 0, -0.85, Math.PI);
  }

  /**
   * Helper to construct a modern ergonomic mesh office chair
   */
  _createOfficeChair(x, y, z, rotY) {
    const chairGroup = new THREE.Group();
    chairGroup.position.set(x, y, z);
    chairGroup.rotation.y = rotY;

    const metalMat = new THREE.MeshStandardMaterial({ color: 0x27272a, metalness: 0.8, roughness: 0.3 });
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const meshMat = new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.5 });

    // Seat cushion
    const seatGeo = new THREE.BoxGeometry(0.55, 0.08, 0.52);
    const seat = new THREE.Mesh(seatGeo, cushionMat);
    seat.position.y = 0.52;
    seat.castShadow = true;
    chairGroup.add(seat);

    // Curved ergonomic backrest
    const backGeo = new THREE.BoxGeometry(0.5, 0.65, 0.06);
    const back = new THREE.Mesh(backGeo, meshMat);
    back.position.set(0, 0.85, -0.24);
    back.rotation.x = -0.08;
    back.castShadow = true;
    chairGroup.add(back);

    // Headrest
    const headrestGeo = new THREE.BoxGeometry(0.3, 0.14, 0.06);
    const headrest = new THREE.Mesh(headrestGeo, cushionMat);
    headrest.position.set(0, 1.24, -0.26);
    chairGroup.add(headrest);

    // Armrests
    const armGeo = new THREE.BoxGeometry(0.08, 0.22, 0.32);
    [-0.3, 0.3].forEach((ax) => {
      const arm = new THREE.Mesh(armGeo, metalMat);
      arm.position.set(ax, 0.65, -0.05);
      chairGroup.add(arm);
    });

    // Hydraulic center column
    const colGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.45, 12);
    const col = new THREE.Mesh(colGeo, metalMat);
    col.position.y = 0.26;
    chairGroup.add(col);

    // 5-Star Caster Base
    const baseGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.06, 5);
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.05;
    chairGroup.add(base);

    this.group.add(chairGroup);
  }

  /**
   * Executive Workplace Accessories & Tech
   */
  _buildExecutiveDecorations() {
    // 1. High-End Ultrabook Laptop (open with illuminated VS Code IDE screen)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0.15, 0.86, -1.8);
    laptopGroup.rotation.y = -0.15;

    const alumMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });

    // Base & Keyboard
    const baseGeo = new THREE.BoxGeometry(0.42, 0.015, 0.28);
    const lapBase = new THREE.Mesh(baseGeo, alumMat);
    lapBase.castShadow = true;
    laptopGroup.add(lapBase);

    // Screen Lid (Angled at 115 degrees)
    const screenLidGeo = new THREE.BoxGeometry(0.42, 0.28, 0.012);
    const screenLid = new THREE.Mesh(screenLidGeo, alumMat);
    screenLid.position.set(0, 0.13, -0.13);
    screenLid.rotation.x = -0.35;
    laptopGroup.add(screenLid);

    // Illuminated IDE Display
    const displayGeo = new THREE.PlaneGeometry(0.39, 0.25);
    const screenTex = TextureGenerator.createLaptopScreenTexture();
    const displayMat = new THREE.MeshBasicMaterial({ map: screenTex });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.set(0, 0.13, -0.12);
    display.rotation.x = -0.35;
    laptopGroup.add(display);
    this.disposables.push(screenTex, displayMat, baseGeo, screenLidGeo, alumMat);

    // Subtle blue light emitting from laptop screen onto candidate
    this.screenLight = new THREE.PointLight(0x38bdf8, 0.65, 2.2);
    this.screenLight.position.set(0.15, 1.05, -1.7);
    this.group.add(this.screenLight);
    this.lights.push(this.screenLight);

    this.group.add(laptopGroup);

    // 2. Ceramic Coffee Mug on Leather Coaster
    const mugGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.1, 16);
    const mugMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.2 });
    const mug = new THREE.Mesh(mugGeo, mugMat);
    mug.position.set(-0.65, 0.91, -1.65);
    mug.castShadow = true;
    this.group.add(mug);
    this.disposables.push(mugGeo, mugMat);

    // 3. Candidate Leather Resume Folder & Pen
    const padGeo = new THREE.BoxGeometry(0.35, 0.015, 0.26);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.6 });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.set(-0.25, 0.87, -1.45);
    pad.rotation.y = 0.1;
    this.group.add(pad);
    this.disposables.push(padGeo, padMat);

    // 4. Whiteboard on Left Wall with crisp text
    const wbFrameGeo = new THREE.BoxGeometry(0.08, 1.6, 2.8);
    const wbFrameMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
    const wbFrame = new THREE.Mesh(wbFrameGeo, wbFrameMat);
    wbFrame.position.set(-4.95, 2.2, -1.5);
    this.group.add(wbFrame);

    const wbBoardGeo = new THREE.PlaneGeometry(2.7, 1.5);
    const wbCanvas = document.createElement('canvas');
    wbCanvas.width = 512;
    wbCanvas.height = 284;
    const ctx = wbCanvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 512, 284);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('ELiVET Technical Competency Matrix', 24, 40);
    ctx.strokeStyle = '#0ea5e9';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(24, 52);
    ctx.lineTo(488, 52);
    ctx.stroke();

    ctx.fillStyle = '#1e3a5f';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('1. STAR Framework (Situation, Task, Action, Result)', 24, 88);
    ctx.fillText('2. Problem Ownership & Independent Debugging', 24, 126);
    ctx.fillText('3. Collaborative Tone & Constructive Reviews', 24, 164);
    ctx.fillText('4. Professional Presence & Attire Standards', 24, 202);

    ctx.fillStyle = '#059669';
    ctx.font = 'bold 15px monospace';
    ctx.fillText('Status: CANDIDATE INTERVIEW IN PROGRESS', 24, 248);

    const wbTex = new THREE.CanvasTexture(wbCanvas);
    const wbMat = new THREE.MeshBasicMaterial({ map: wbTex });
    const wbBoard = new THREE.Mesh(wbBoardGeo, wbMat);
    wbBoard.rotation.y = Math.PI / 2;
    wbBoard.position.set(-4.9, 2.2, -1.5);
    this.group.add(wbBoard);
    this.disposables.push(wbFrameGeo, wbFrameMat, wbBoardGeo, wbTex, wbMat);

    // 5. Framed Corporate Wall Art on Left Wall
    const artGeo = new THREE.PlaneGeometry(1.6, 1.6);
    const artTex = TextureGenerator.createWallArtTexture();
    const artMat = new THREE.MeshBasicMaterial({ map: artTex });
    const art = new THREE.Mesh(artGeo, artMat);
    art.rotation.y = Math.PI / 2;
    art.position.set(-4.94, 2.3, 1.8);
    this.group.add(art);
    this.disposables.push(artGeo, artTex, artMat);

    // 6. Luxury Potted Ficus Plant in Terracotta Planter
    const potGeo = new THREE.CylinderGeometry(0.35, 0.28, 0.65, 16);
    const potMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.9 });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.set(-3.8, 0.32, -4.0);
    this.group.add(pot);

    const plantGroup = new THREE.Group();
    plantGroup.position.set(-3.8, 0.65, -4.0);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.4 });
    const leafGeo = new THREE.SphereGeometry(0.38, 8, 8);
    [
      [0, 0.4, 0, 1.0],
      [-0.2, 0.7, 0.1, 0.85],
      [0.2, 0.8, -0.1, 0.8],
      [0, 1.05, 0, 0.75]
    ].forEach(([lx, ly, lz, s]) => {
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(lx, ly, lz);
      leaf.scale.set(s, s * 1.3, s);
      plantGroup.add(leaf);
    });
    this.group.add(plantGroup);
    this.disposables.push(potGeo, potMat, leafGeo, leafMat);

    // 7. Physical Ambient Occlusion (AO) Ground Contact Decals
    this._addContactAODecals();
  }

  /**
   * Soft ambient occlusion contact shadows directly beneath furniture
   */
  _addContactAODecals() {
    const aoCanvas = document.createElement('canvas');
    aoCanvas.width = 128;
    aoCanvas.height = 128;
    const ctx = aoCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(64, 64, 10, 64, 64, 62);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.72)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.35)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const aoTex = new THREE.CanvasTexture(aoCanvas);
    const aoMat = new THREE.MeshBasicMaterial({
      map: aoTex,
      transparent: true,
      depthWrite: false
    });
    this.disposables.push(aoTex, aoMat);

    const createAOMesh = (x, z, sx, sz) => {
      const geo = new THREE.PlaneGeometry(1, 1);
      const mesh = new THREE.Mesh(geo, aoMat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(x, 0.006, z);
      mesh.scale.set(sx, sz, 1);
      this.group.add(mesh);
      this.disposables.push(geo);
    };

    // Under executive desk
    createAOMesh(0, -1.8, 3.2, 1.8);
    // Under interviewer chair
    createAOMesh(0, -2.65, 1.2, 1.2);
    // Under candidate chair
    createAOMesh(0, -0.85, 1.2, 1.2);
    // Under ficus plant
    createAOMesh(-3.8, -4.0, 1.1, 1.1);
  }

  /**
   * Physically Based Lighting:
   * Radiosity Hemisphere bounce + window key sunlight + physical inverse-square ceiling spotlights + screen bounce
   */
  _setupCinematicLighting() {
    // 1. Dual-Tone Radiosity Bounce (Crisp daylight sky bounce + warm slate floor reflection)
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x64748b, 1.25);
    this.group.add(this.hemiLight);
    this.lights.push(this.hemiLight);

    // 1b. Soft Corporate Ambient Fill Light (Eliminates shadow crush under desks and corners)
    this.ambientFill = new THREE.AmbientLight(0xfff7ed, 0.55);
    this.group.add(this.ambientFill);
    this.lights.push(this.ambientFill);

    // 2. Main Key Sunlight from Window (+X direction) with normalBias
    this.sunLight = new THREE.DirectionalLight(0xffedd5, 1.95);
    this.sunLight.position.set(5.5, 4.2, 0);
    this.sunLight.target.position.set(0, 0.85, -1.8);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 14;
    this.sunLight.shadow.camera.left = -4;
    this.sunLight.shadow.camera.right = 4;
    this.sunLight.shadow.camera.top = 4;
    this.sunLight.shadow.camera.bottom = -4;
    this.sunLight.shadow.bias = -0.00015;
    this.sunLight.shadow.normalBias = 0.04;
    this.sunLight.shadow.radius = 2.5;

    this.group.add(this.sunLight);
    this.group.add(this.sunLight.target);
    this.lights.push(this.sunLight);

    // 3. Overhead Ceiling Downlights (Physical Inverse-Square Law: decay = 2)
    // Primary desk downlight
    this.ceilingSpot1 = new THREE.SpotLight(0xfff7ed, 2.2, 11.0, Math.PI / 3.6, 0.7, 2.0);
    this.ceilingSpot1.position.set(0, 4.1, -1.8);
    this.ceilingSpot1.target.position.set(0, 0.82, -1.8);
    this.ceilingSpot1.castShadow = true;
    this.ceilingSpot1.shadow.mapSize.width = 1024;
    this.ceilingSpot1.shadow.mapSize.height = 1024;
    this.ceilingSpot1.shadow.bias = -0.0001;
    this.ceilingSpot1.shadow.normalBias = 0.03;
    this.group.add(this.ceilingSpot1);
    this.group.add(this.ceilingSpot1.target);
    this.lights.push(this.ceilingSpot1);

    // Secondary room downlight (fills candidate & room center)
    this.ceilingSpot2 = new THREE.SpotLight(0xffedd5, 1.75, 11.0, Math.PI / 3.6, 0.7, 2.0);
    this.ceilingSpot2.position.set(0, 4.1, 1.0);
    this.ceilingSpot2.target.position.set(0, 0.85, 0.5);
    this.ceilingSpot2.castShadow = false;
    this.group.add(this.ceilingSpot2);
    this.group.add(this.ceilingSpot2.target);
    this.lights.push(this.ceilingSpot2);

    // 4. Subtle Cool Cyan Backlight Rim
    this.rimLight = new THREE.PointLight(0x38bdf8, 0.85, 8.0, 2.0);
    this.rimLight.position.set(-2.5, 3.0, -4.2);
    this.group.add(this.rimLight);
    this.lights.push(this.rimLight);
  }

  // ─────────────────────────────────────────────────────────────
  // LIGHTING TOGGLE METHODS (Triggered by 3D Click & UI HUD)
  // ─────────────────────────────────────────────────────────────

  /**
   * Toggle Ceiling Downlights
   * @param {boolean} [forceState]
   * @returns {boolean} Current state
   */
  toggleCeilingLights(forceState) {
    this.ceilingLightsOn = (typeof forceState === 'boolean') ? forceState : !this.ceilingLightsOn;

    const intensity1 = this.ceilingLightsOn ? 2.2 : 0;
    const intensity2 = this.ceilingLightsOn ? 1.75 : 0;
    if (this.ceilingSpot1) this.ceilingSpot1.intensity = intensity1;
    if (this.ceilingSpot2) this.ceilingSpot2.intensity = intensity2;

    // Diffuser emission
    if (this.ceilingDiffuserMat) {
      this.ceilingDiffuserMat.emissiveIntensity = this.ceilingLightsOn ? 1.6 : 0.05;
      this.ceilingDiffuserMat.color.setHex(this.ceilingLightsOn ? 0xffffff : 0x334155);
    }

    // Flip 3D Rocker Switch on Wall
    if (this.rockerCeiling) {
      this.rockerCeiling.rotation.z = this.ceilingLightsOn ? 0.22 : -0.22;
    }

    // Update Wall Switch LED
    if (this.ledCeilingMat) {
      const col = this.ceilingLightsOn ? 0x10b981 : 0xef4444;
      this.ledCeilingMat.color.setHex(col);
      this.ledCeilingMat.emissive.setHex(col);
    }

    return this.ceilingLightsOn;
  }

  /**
   * Toggle Desk Task Lamp
   * @param {boolean} [forceState]
   * @returns {boolean} Current state
   */
  toggleDeskLamp(forceState) {
    this.deskLampOn = (typeof forceState === 'boolean') ? forceState : !this.deskLampOn;

    const spotIntensity = this.deskLampOn ? 2.4 : 0;
    if (this.deskLampSpot) this.deskLampSpot.intensity = spotIntensity;

    // Glowing bulb material
    if (this.deskLampBulbMat) {
      this.deskLampBulbMat.emissiveIntensity = this.deskLampOn ? 2.2 : 0.0;
      this.deskLampBulbMat.color.setHex(this.deskLampOn ? 0xffffff : 0x27272a);
    }

    // Lamp switch button LED
    if (this.lampSwitchBtnMat) {
      const col = this.deskLampOn ? 0x10b981 : 0xef4444;
      this.lampSwitchBtnMat.color.setHex(col);
      this.lampSwitchBtnMat.emissive.setHex(col);
    }

    // Flip 3D Rocker Switch on Wall
    if (this.rockerDesk) {
      this.rockerDesk.rotation.z = this.deskLampOn ? 0.22 : -0.22;
    }

    // Update Wall Switch LED
    if (this.ledDeskMat) {
      const col = this.deskLampOn ? 0x10b981 : 0xef4444;
      this.ledDeskMat.color.setHex(col);
      this.ledDeskMat.emissive.setHex(col);
    }

    return this.deskLampOn;
  }

  /**
   * Toggle Window Sunlight
   * @param {boolean} [forceState]
   * @returns {boolean} Current state
   */
  toggleSunlight(forceState) {
    this.sunlightOn = (typeof forceState === 'boolean') ? forceState : !this.sunlightOn;

    if (this.sunLight) {
      this.sunLight.intensity = this.sunlightOn ? 1.95 : 0;
    }

    if (this.hemiLight) {
      this.hemiLight.intensity = this.sunlightOn ? 1.25 : 0.55;
    }

    if (this.ambientFill) {
      this.ambientFill.intensity = this.sunlightOn ? 0.55 : 0.35;
    }

    return this.sunlightOn;
  }

  /**
   * Toggle Night / Late-Night Corporate Mode
   * Turns window sunlight off, sets cool nocturnal rim lighting, keeps desk lamp focused
   * @param {boolean} [forceState]
   * @returns {boolean} Current state
   */
  toggleNightMode(forceState) {
    this.nightModeOn = (typeof forceState === 'boolean') ? forceState : !this.nightModeOn;

    if (this.nightModeOn) {
      // Night atmosphere: dark exterior, cool moonlight bounce, dramatic desk lamp glow
      this.scene.background = new THREE.Color(0x050c18);
      this.toggleSunlight(false);
      this.toggleCeilingLights(false);
      this.toggleDeskLamp(true);

      if (this.hemiLight) {
        this.hemiLight.color.setHex(0x1e293b);
        this.hemiLight.groundColor.setHex(0x020617);
        this.hemiLight.intensity = 0.45;
      }
      if (this.ambientFill) {
        this.ambientFill.intensity = 0.2;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x60a5fa);
        this.rimLight.intensity = 1.2;
      }
    } else {
      // Restore standard corporate daylight
      this.scene.background = new THREE.Color(0xa7d8fc);
      this.toggleSunlight(true);
      this.toggleCeilingLights(true);
      this.toggleDeskLamp(true);

      if (this.hemiLight) {
        this.hemiLight.color.setHex(0xffffff);
        this.hemiLight.groundColor.setHex(0x64748b);
        this.hemiLight.intensity = 1.25;
      }
      if (this.ambientFill) {
        this.ambientFill.intensity = 0.55;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x38bdf8);
        this.rimLight.intensity = 0.85;
      }
    }

    return this.nightModeOn;
  }

  /**
   * Get Current Lighting States
   */
  getLightingState() {
    return {
      ceilingLightsOn: this.ceilingLightsOn,
      deskLampOn: this.deskLampOn,
      sunlightOn: this.sunlightOn,
      nightModeOn: this.nightModeOn
    };
  }

  /**
   * Interactive Lighting Mood Presets
   * @param {'daylight' | 'warm_evening' | 'focus_studio'} preset
   */
  setLightingPreset(preset) {
    if (!this.sunLight || !this.hemiLight || !this.ceilingSpot1) return;

    if (preset === 'warm_evening') {
      // Warm 3000K executive golden hour
      this.sunLight.color.setHex(0xfb923c);
      this.sunLight.intensity = 2.0;
      this.hemiLight.color.setHex(0xfef3c7);
      this.hemiLight.groundColor.setHex(0x78350f);
      this.hemiLight.intensity = 1.35;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xfef3c7);
        this.ambientFill.intensity = 0.6;
      }
      this.ceilingSpot1.color.setHex(0xfef08a);
      this.ceilingSpot1.intensity = 2.0;
      if (this.ceilingSpot2) {
        this.ceilingSpot2.color.setHex(0xfef08a);
        this.ceilingSpot2.intensity = 1.6;
      }
    } else if (preset === 'focus_studio') {
      // High-contrast clean spotlighting with clear fill
      this.sunLight.color.setHex(0xffffff);
      this.sunLight.intensity = 1.2;
      this.hemiLight.color.setHex(0xe0f2fe);
      this.hemiLight.groundColor.setHex(0x334155);
      this.hemiLight.intensity = 1.1;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xffffff);
        this.ambientFill.intensity = 0.5;
      }
      this.ceilingSpot1.intensity = 2.8;
      this.ceilingSpot1.color.setHex(0xffffff);
      if (this.ceilingSpot2) {
        this.ceilingSpot2.intensity = 2.2;
        this.ceilingSpot2.color.setHex(0xffffff);
      }
    } else {
      // Natural 5200K daylight corporate suite
      this.sunLight.color.setHex(0xffedd5);
      this.sunLight.intensity = 1.95;
      this.hemiLight.color.setHex(0xffffff);
      this.hemiLight.groundColor.setHex(0x64748b);
      this.hemiLight.intensity = 1.25;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xfff7ed);
        this.ambientFill.intensity = 0.55;
      }
      this.ceilingSpot1.color.setHex(0xfff7ed);
      this.ceilingSpot1.intensity = 2.2;
      if (this.ceilingSpot2) {
        this.ceilingSpot2.color.setHex(0xffedd5);
        this.ceilingSpot2.intensity = 1.75;
      }
    }
  }

  /**
   * Return array of clickable 3D objects for mouse raycasting
   */
  getClickableObjects() {
    return this.clickableObjects;
  }

  /**
   * Spawn Interviewer seated naturally in the executive chair
   */
  _spawnNPC() {
    this.npc = new NPC(this.scene, this.camera, {
      name: 'Vikram Malhotra',
      role: 'Senior Technical Director'
    });
    // Positioned seated behind the desk
    this.npc.setPosition(0, 0, -2.65, 0);
  }

  /**
   * Return ideal candidate player spawn coordinates: Seated naturally in front of desk
   */
  getPlayerSpawn() {
    return { x: 0, y: 0, z: -0.85, rotationY: Math.PI };
  }

  /**
   * Per-frame scene update
   */
  update(delta) {
    if (this.npc) {
      this.npc.update(delta);
    }
  }

  /**
   * Clean up memory on disposal
   */
  destroy() {
    this.scene.background = this.originalBg;
    this.scene.fog = this.originalFog;
    if (this.npc) {
      this.npc.destroy();
    }
    this.lights.forEach((l) => this.group.remove(l));
    this.disposables.forEach((item) => {
      if (item && item.dispose) item.dispose();
    });
    this.scene.remove(this.group);
  }
}
