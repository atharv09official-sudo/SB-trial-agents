/**
 * ELiVET Game Engine — Scene: Photorealistic Corporate Open-Plan Office Floor
 * Features high-key natural daylight, panoramic glass curtain walls with 360° city skyline,
 * modern acoustic carpet tiles, linear ceiling LED troughs, 6 dual-monitor workstation pods,
 * Calacatta marble reception with backlit brand signage, agile Kanban board,
 * collaboration lounge with coffee bar, lush indoor ficus plants,
 * and interactive clickable 3D lighting switches.
 */

import * as THREE from 'three';
import { NPC } from '../systems/NPC.js';
import { TextureGenerator } from '../systems/TextureGenerator.js';

export class OfficeFloor {
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
    this.group.name = 'Scene_OfficeFloor';
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

    // Set bright airy background & light atmospheric aerial haze (NOT DARK!)
    this.originalBg = this.scene.background;
    this.scene.background = new THREE.Color(0xa7d8fc); // Crisp radiant daylight sky blue

    this.originalFog = this.scene.fog;
    this.scene.fog = new THREE.FogExp2(0xdbeafe, 0.007); // Soft airy daylight mist

    this._buildAtmosphericSkyline();
    this._buildArchitecture();
    this._buildWorkstationPods();
    this._buildReceptionAndBranding();
    this._buildCollaborationLounge();
    this._buildPhysicalLightSwitch();
    this._setupLighting();
    this._spawnNPC();
  }

  /**
   * 360-Degree Panoramic Daylight Skyline Cylinder (Surrounds office exterior)
   */
  _buildAtmosphericSkyline() {
    const skyGeo = new THREE.CylinderGeometry(36, 36, 26, 32, 1, true);
    const skyTex = TextureGenerator.createSkyline360Texture();
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide
    });

    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    skyMesh.position.y = 8;
    this.group.add(skyMesh);
    this.disposables.push(skyGeo, skyTex, skyMat);
  }

  /**
   * Architecture: Modular carpet tile floor, ceiling with linear LED troughs,
   * panoramic glass curtain walls, and warm wood slat accents
   */
  _buildArchitecture() {
    const roomW = 26;
    const roomD = 26;
    const roomH = 4.4;

    // 1. Modular Commercial Carpet Tile Floor
    const floorGeo = new THREE.PlaneGeometry(roomW, roomD);
    const floorTex = TextureGenerator.createOfficeCarpetTexture();
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.45,
      metalness: 0.08
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);
    this.disposables.push(floorGeo, floorTex, floorMat);

    // Physics Boundaries
    this.physics.setBoundaries(-roomW / 2 + 0.6, roomW / 2 - 0.6, -roomD / 2 + 0.6, roomD / 2 - 0.6);

    // 2. Suspended White Acoustic Grid Ceiling
    const ceilingGeo = new THREE.PlaneGeometry(roomW, roomD);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.9
    });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = roomH;
    this.group.add(ceiling);
    this.disposables.push(ceilingGeo, ceilingMat);

    // Linear Continuous LED Light Trough Fixtures across ceiling bays
    this.ceilingDiffuserMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfff7ed,
      emissiveIntensity: 1.3,
      roughness: 0.15
    });
    this.disposables.push(this.ceilingDiffuserMat);

    const troughHousingMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });
    this.disposables.push(troughHousingMat);

    const troughGeo = new THREE.BoxGeometry(0.18, 0.06, 18);
    const diffuserGeo = new THREE.PlaneGeometry(0.14, 18);
    this.disposables.push(troughGeo, diffuserGeo);

    [-6.5, -2.2, 2.2, 6.5].forEach((tx) => {
      // Housing channel
      const housing = new THREE.Mesh(troughGeo, troughHousingMat);
      housing.position.set(tx, roomH - 0.02, 0);
      this.group.add(housing);

      // Emissive glowing strip
      const strip = new THREE.Mesh(diffuserGeo, this.ceilingDiffuserMat);
      strip.rotation.x = Math.PI / 2;
      strip.position.set(tx, roomH - 0.05, 0);
      this.group.add(strip);
    });

    // 3. Walls & Curtain Windows (Floor-to-Ceiling Skyline Views!)
    const wallMullionMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85, roughness: 0.2 });
    const wallPanelMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.85 });
    const woodSlatMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.5 });
    this.disposables.push(wallMullionMat, wallPanelMat, woodSlatMat);

    // BACK WALL (Full Panoramic Window Wall revealing sunlit skyline!)
    this._buildGlassCurtainWall(0, roomH / 2, -roomD / 2, roomW, roomH, 0);

    // LEFT WALL (Full Panoramic Window Wall revealing sunlit skyline!)
    this._buildGlassCurtainWall(-roomW / 2, roomH / 2, 0, roomD, roomH, Math.PI / 2);

    // RIGHT WALL (Warm Architectural Wood Slat & Feature Wall)
    const rightWallGeo = new THREE.PlaneGeometry(roomD, roomH);
    const rightWall = new THREE.Mesh(rightWallGeo, wallPanelMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(roomW / 2, roomH / 2, 0);
    this.group.add(rightWall);
    this.disposables.push(rightWallGeo);

    // Vertical oak slats on Right Wall
    const slatGeo = new THREE.BoxGeometry(0.06, roomH, 0.05);
    this.disposables.push(slatGeo);
    for (let sz = -10; sz <= 10; sz += 0.35) {
      const slat = new THREE.Mesh(slatGeo, woodSlatMat);
      slat.position.set(roomW / 2 - 0.03, roomH / 2, sz);
      this.group.add(slat);
    }

    // FRONT WALL (Entrance Foyer with Frosted Glass Panels)
    const frontWall = new THREE.Mesh(rightWallGeo, wallPanelMat);
    frontWall.rotation.y = Math.PI;
    frontWall.position.set(0, roomH / 2, roomD / 2);
    this.group.add(frontWall);

    // Architectural Support Columns (Structural Realism)
    const colGeo = new THREE.BoxGeometry(0.8, roomH, 0.8);
    const colMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    this.disposables.push(colGeo, colMat);

    this.pillarSwitchPos = new THREE.Vector3(-2.2, 1.4, -2.0);
    [[-2.2, -2.0], [2.2, -2.0]].forEach(([cx, cz]) => {
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(cx, roomH / 2, cz);
      col.castShadow = true;
      col.receiveShadow = true;
      this.group.add(col);
      this.physics.addStaticCollider(col);
    });
  }

  /**
   * Helper to construct an architectural glass curtain wall with mullions
   */
  _buildGlassCurtainWall(x, y, z, width, height, rotY) {
    const wallGroup = new THREE.Group();
    wallGroup.position.set(x, y, z);
    wallGroup.rotation.y = rotY;

    // Translucent high-specularity glass
    const glassGeo = new THREE.PlaneGeometry(width, height);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 0.95,
      transparent: true,
      roughness: 0.05,
      metalness: 0.1,
      ior: 1.5
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    wallGroup.add(glass);
    this.disposables.push(glassGeo, glassMat);

    // Horizontal & Vertical Architectural Mullions (Dark steel framework)
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.85, roughness: 0.25 });
    this.disposables.push(frameMat);

    // Top and Bottom Rails
    const railGeo = new THREE.BoxGeometry(width, 0.12, 0.12);
    [-height / 2 + 0.06, height / 2 - 0.06].forEach((ry) => {
      const rail = new THREE.Mesh(railGeo, frameMat);
      rail.position.y = ry;
      wallGroup.add(rail);
    });
    this.disposables.push(railGeo);

    // Vertical Mullion Posts every 3.2 meters
    const mullionGeo = new THREE.BoxGeometry(0.1, height, 0.12);
    this.disposables.push(mullionGeo);
    for (let mx = -width / 2; mx <= width / 2; mx += 3.25) {
      const mullion = new THREE.Mesh(mullionGeo, frameMat);
      mullion.position.x = mx;
      wallGroup.add(mullion);
    }

    this.group.add(wallGroup);
  }

  /**
   * 6 Collaborative Workstation Pods equipped with dual monitors, keyboards,
   * ergonomic chairs, and glowing IDE / telemetry screens
   */
  _buildWorkstationPods() {
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0xede8d0, // Light Scandinavian natural oak
      roughness: 0.35,
      metalness: 0.05
    });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.9, roughness: 0.2 });
    const screenLidMat = new THREE.MeshStandardMaterial({ color: 0x09090b, metalness: 0.8, roughness: 0.3 });
    const dividerMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.7 });
    this.disposables.push(deskMat, steelMat, screenLidMat, dividerMat);

    const deskTopGeo = new THREE.BoxGeometry(2.4, 0.05, 1.1);
    const deskLegGeo = new THREE.BoxGeometry(0.06, 0.74, 1.0);
    const dividerGeo = new THREE.BoxGeometry(2.4, 0.42, 0.04);
    const monitorLidGeo = new THREE.BoxGeometry(0.56, 0.34, 0.02);
    const monitorArmGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.22, 10);
    const screenGeo = new THREE.PlaneGeometry(0.54, 0.32);
    this.disposables.push(deskTopGeo, deskLegGeo, dividerGeo, monitorLidGeo, monitorArmGeo, screenGeo);

    // Screen Textures
    const codeTex = TextureGenerator.createLaptopScreenTexture();
    const metricsTex = TextureGenerator.createMetricsDashboardTexture();
    this.screenCodeMat = new THREE.MeshBasicMaterial({ map: codeTex });
    this.screenMetricsMat = new THREE.MeshBasicMaterial({ map: metricsTex });
    this.disposables.push(codeTex, metricsTex, this.screenCodeMat, this.screenMetricsMat);

    // 6 Pod Coordinates (3 on Left Wing, 3 on Right Wing)
    const podPositions = [
      [-6.5, -5.0],
      [-6.5, 0.0],
      [-6.5, 5.0],
      [6.5, -5.0],
      [6.5, 0.0],
      [6.5, 5.0]
    ];

    podPositions.forEach(([px, pz]) => {
      const podGroup = new THREE.Group();
      podGroup.position.set(px, 0, pz);

      // Desk Surface
      const deskTop = new THREE.Mesh(deskTopGeo, deskMat);
      deskTop.position.set(0, 0.75, 0);
      deskTop.castShadow = true;
      deskTop.receiveShadow = true;
      podGroup.add(deskTop);
      this.physics.addStaticCollider(deskTop);

      // Steel Loop Legs
      [-1.1, 1.1].forEach((lx) => {
        const leg = new THREE.Mesh(deskLegGeo, steelMat);
        leg.position.set(lx, 0.37, 0);
        leg.castShadow = true;
        podGroup.add(leg);
      });

      // Acoustic Privacy Divider
      const divider = new THREE.Mesh(dividerGeo, dividerMat);
      divider.position.set(0, 0.98, -0.52);
      divider.castShadow = true;
      podGroup.add(divider);

      // DUAL MONITOR SETUP
      // Monitor 1 (Left: IDE Code Screen)
      const mon1Group = new THREE.Group();
      mon1Group.position.set(-0.35, 0.77, -0.32);
      mon1Group.rotation.y = 0.12;

      const stand1 = new THREE.Mesh(monitorArmGeo, steelMat);
      stand1.position.y = 0.11;
      mon1Group.add(stand1);

      const lid1 = new THREE.Mesh(monitorLidGeo, screenLidMat);
      lid1.position.set(0, 0.28, 0);
      lid1.castShadow = true;
      mon1Group.add(lid1);

      const disp1 = new THREE.Mesh(screenGeo, this.screenCodeMat);
      disp1.position.set(0, 0.28, 0.012);
      mon1Group.add(disp1);
      podGroup.add(mon1Group);

      // Monitor 2 (Right: Metrics Dashboard Screen)
      const mon2Group = new THREE.Group();
      mon2Group.position.set(0.35, 0.77, -0.32);
      mon2Group.rotation.y = -0.12;

      const stand2 = new THREE.Mesh(monitorArmGeo, steelMat);
      stand2.position.y = 0.11;
      mon2Group.add(stand2);

      const lid2 = new THREE.Mesh(monitorLidGeo, screenLidMat);
      lid2.position.set(0, 0.28, 0);
      lid2.castShadow = true;
      mon2Group.add(lid2);

      const disp2 = new THREE.Mesh(screenGeo, this.screenMetricsMat);
      disp2.position.set(0, 0.28, 0.012);
      mon2Group.add(disp2);
      podGroup.add(mon2Group);

      // Desk Accessories: Keyboard, Mouse, Coaster
      const kbGeo = new THREE.BoxGeometry(0.42, 0.012, 0.14);
      const kbMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 });
      const kb = new THREE.Mesh(kbGeo, kbMat);
      kb.position.set(0, 0.78, 0.08);
      podGroup.add(kb);

      const mouseGeo = new THREE.BoxGeometry(0.06, 0.018, 0.09);
      const mouse = new THREE.Mesh(mouseGeo, kbMat);
      mouse.position.set(0.32, 0.78, 0.08);
      podGroup.add(mouse);
      this.disposables.push(kbGeo, kbMat, mouseGeo);

      // Ergonomic Task Chair
      this._buildTaskChair(podGroup, 0, 0, 0.65, Math.PI);

      this.group.add(podGroup);
    });
  }

  /**
   * Helper to construct an ergonomic task chair
   */
  _buildTaskChair(parentGroup, x, y, z, rotY) {
    const chairGroup = new THREE.Group();
    chairGroup.position.set(x, y, z);
    chairGroup.rotation.y = rotY;

    const darkMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });

    // Seat
    const seatGeo = new THREE.BoxGeometry(0.48, 0.07, 0.46);
    const seat = new THREE.Mesh(seatGeo, darkMat);
    seat.position.y = 0.48;
    seat.castShadow = true;
    chairGroup.add(seat);

    // Mesh Backrest
    const backGeo = new THREE.BoxGeometry(0.44, 0.52, 0.04);
    const back = new THREE.Mesh(backGeo, darkMat);
    back.position.set(0, 0.76, -0.21);
    back.castShadow = true;
    chairGroup.add(back);

    // Column & 5-Star Caster Base
    const colGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.42, 10);
    const col = new THREE.Mesh(colGeo, chromeMat);
    col.position.y = 0.24;
    chairGroup.add(col);

    const baseGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.05, 5);
    const base = new THREE.Mesh(baseGeo, chromeMat);
    base.position.y = 0.05;
    chairGroup.add(base);

    parentGroup.add(chairGroup);
  }

  /**
   * Reception Area with Calacatta marble counter and illuminated brand sign
   */
  _buildReceptionAndBranding() {
    // 1. Calacatta White Marble Reception Counter
    const recepGeo = new THREE.BoxGeometry(4.4, 1.15, 1.2);
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.15
    });
    const reception = new THREE.Mesh(recepGeo, marbleMat);
    reception.position.set(0, 0.58, -8.2);
    reception.castShadow = true;
    reception.receiveShadow = true;
    this.group.add(reception);
    this.physics.addStaticCollider(reception);
    this.disposables.push(recepGeo, marbleMat);

    // Warm LED Underglow kickplate strip
    const kickLight = new THREE.PointLight(0x38bdf8, 1.2, 4.0);
    kickLight.position.set(0, 0.12, -7.4);
    this.group.add(kickLight);
    this.lights.push(kickLight);

    // 2. Suspended Backlit Corporate Brand Signage
    const signGeo = new THREE.PlaneGeometry(4.2, 1.3);
    const signTex = TextureGenerator.createCompanyHubSignTexture();
    const signMat = new THREE.MeshBasicMaterial({
      map: signTex,
      transparent: true
    });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 2.7, -12.4);
    this.group.add(sign);
    this.disposables.push(signGeo, signTex, signMat);

    // Hanging sign brackets
    const bracketGeo = new THREE.CylinderGeometry(0.012, 0.012, 1.2, 8);
    const brMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 });
    [-1.8, 1.8].forEach((bx) => {
      const b = new THREE.Mesh(bracketGeo, brMat);
      b.position.set(bx, 3.8, -12.4);
      this.group.add(b);
    });
    this.disposables.push(bracketGeo, brMat);
  }

  /**
   * Collaboration Lounge & Breakroom Corner (Kanban board, coffee bar, lush plants)
   */
  _buildCollaborationLounge() {
    // 1. Agile Kanban Sprint Whiteboard (Standing frame)
    const boardGroup = new THREE.Group();
    boardGroup.position.set(0, 0, 8.5);

    const frameGeo = new THREE.BoxGeometry(3.6, 2.0, 0.06);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 1.8;
    boardGroup.add(frame);

    const boardGeo = new THREE.PlaneGeometry(3.5, 1.9);
    const boardTex = TextureGenerator.createKanbanBoardTexture();
    const boardMat = new THREE.MeshBasicMaterial({ map: boardTex });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(0, 1.8, 0.035);
    boardGroup.add(board);

    // Floor standing legs
    const standLegGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.9, 10);
    [-1.7, 1.7].forEach((sx) => {
      const leg = new THREE.Mesh(standLegGeo, frameMat);
      leg.position.set(sx, 0.95, 0);
      boardGroup.add(leg);
    });

    this.group.add(boardGroup);
    this.disposables.push(frameGeo, frameMat, boardGeo, boardTex, boardMat, standLegGeo);

    // 2. High Collaboration Table & Stools
    const highTableGeo = new THREE.BoxGeometry(2.2, 0.06, 0.9);
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.4 });
    const highTable = new THREE.Mesh(highTableGeo, tableMat);
    highTable.position.set(-1.8, 1.05, 3.8);
    highTable.castShadow = true;
    this.group.add(highTable);
    this.physics.addStaticCollider(highTable);

    const tLegGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.05, 10);
    const tLegMat = new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.85 });
    [-0.95, 0.95].forEach((tx) => {
      [-0.35, 0.35].forEach((tz) => {
        const leg = new THREE.Mesh(tLegGeo, tLegMat);
        leg.position.set(-1.8 + tx, 0.52, 3.8 + tz);
        this.group.add(leg);
      });
    });
    this.disposables.push(highTableGeo, tableMat, tLegGeo, tLegMat);

    // 3. Ceramic Planters with Lush Indoor Ficus
    const potGeo = new THREE.CylinderGeometry(0.35, 0.28, 0.65, 16);
    const potMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.5 });
    const leafGeo = new THREE.SphereGeometry(0.35, 8, 8);
    this.disposables.push(potGeo, potMat, leafMat, leafGeo);

    const plantCoords = [
      [-11.5, -11.5],
      [11.5, -11.5],
      [-11.5, 11.5],
      [11.5, 11.5],
      [-2.8, -8.2],
      [2.8, -8.2]
    ];

    plantCoords.forEach(([px, pz]) => {
      const pot = new THREE.Mesh(potGeo, potMat);
      pot.position.set(px, 0.32, pz);
      pot.castShadow = true;
      this.group.add(pot);

      const plantGroup = new THREE.Group();
      plantGroup.position.set(px, 0.65, pz);
      [
        [0, 0.4, 0, 1.0],
        [-0.15, 0.68, 0.08, 0.85],
        [0.18, 0.72, -0.08, 0.8],
        [0, 0.98, 0, 0.7]
      ].forEach(([lx, ly, lz, s]) => {
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(lx, ly, lz);
        leaf.scale.set(s, s * 1.3, s);
        plantGroup.add(leaf);
      });
      this.group.add(plantGroup);
    });
  }

  /**
   * Interactive Clickable 3D Light Switch (Mounted on Central Pillar)
   */
  _buildPhysicalLightSwitch() {
    this.wallSwitchGroup = new THREE.Group();
    this.wallSwitchGroup.name = 'Interactive_OfficeSwitch';
    // Mounted at eye-level on the central column facing the player
    this.wallSwitchGroup.position.set(-2.2, 1.45, -1.58);

    const plateMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35, metalness: 0.1 });
    const rockerMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    this.disposables.push(plateMat, rockerMat);

    // Switch Faceplate
    const plateGeo = new THREE.BoxGeometry(0.24, 0.32, 0.024);
    const plate = new THREE.Mesh(plateGeo, plateMat);
    this.wallSwitchGroup.add(plate);
    this.disposables.push(plateGeo);

    // Rocker 1 (Ceiling Lights)
    const rockerGeo = new THREE.BoxGeometry(0.065, 0.1, 0.025);
    this.rockerCeiling = new THREE.Mesh(rockerGeo, rockerMat);
    this.rockerCeiling.position.set(-0.05, 0.03, 0.015);
    this.rockerCeiling.rotation.x = -0.22;
    this.wallSwitchGroup.add(this.rockerCeiling);

    // Rocker 2 (Task Workstation Screens & Accent Lights)
    this.rockerDesk = new THREE.Mesh(rockerGeo, rockerMat);
    this.rockerDesk.position.set(0.05, 0.03, 0.015);
    this.rockerDesk.rotation.x = -0.22;
    this.wallSwitchGroup.add(this.rockerDesk);
    this.disposables.push(rockerGeo);

    // Status Micro-LEDs
    const ledGeo = new THREE.SphereGeometry(0.009, 8, 8);
    this.ledCeilingMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 1.5 });
    this.ledDeskMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 1.5 });

    const led1 = new THREE.Mesh(ledGeo, this.ledCeilingMat);
    led1.position.set(-0.05, -0.06, 0.015);
    this.wallSwitchGroup.add(led1);

    const led2 = new THREE.Mesh(ledGeo, this.ledDeskMat);
    led2.position.set(0.05, -0.06, 0.015);
    this.wallSwitchGroup.add(led2);
    this.disposables.push(ledGeo, this.ledCeilingMat, this.ledDeskMat);

    // Glowing Discovery Tag
    const tagCanvas = document.createElement('canvas');
    tagCanvas.width = 256;
    tagCanvas.height = 70;
    const ctx = tagCanvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 256, 70);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 248, 62);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💡 FLOOR LIGHTS', 128, 34);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px monospace';
    ctx.fillText('CLICK TO TOGGLE', 128, 55);

    const tagTex = new THREE.CanvasTexture(tagCanvas);
    const tagMat = new THREE.MeshBasicMaterial({ map: tagTex });
    const tagGeo = new THREE.PlaneGeometry(0.28, 0.08);
    const tagMesh = new THREE.Mesh(tagGeo, tagMat);
    tagMesh.position.set(0, 0.22, 0.015);
    this.wallSwitchGroup.add(tagMesh);
    this.disposables.push(tagTex, tagMat, tagGeo);

    this.group.add(this.wallSwitchGroup);

    // Register Clickable 3D Objects for Raycasting
    this.clickableObjects.push({
      mesh: this.rockerCeiling,
      name: 'Ceiling Lights Switch',
      hint: 'Click to Toggle Floor Lights [L]',
      onClick: () => this.toggleCeilingLights()
    });

    this.clickableObjects.push({
      mesh: this.rockerDesk,
      name: 'Workstation Display Lights',
      hint: 'Click to Toggle Screens & Task Lights [J]',
      onClick: () => this.toggleDeskLamp()
    });

    this.clickableObjects.push({
      mesh: plate,
      name: 'Office Light Panel',
      hint: 'Click to Toggle Floor Lights [L]',
      onClick: () => this.toggleCeilingLights()
    });
  }

  /**
   * High-Key Natural Daylight Lighting
   */
  _setupLighting() {
    // 1. Natural Sky Hemisphere Radiosity (Crisp daylight white sky + light slate floor bounce)
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x94a3b8, 1.35);
    this.group.add(this.hemiLight);
    this.lights.push(this.hemiLight);

    // 1b. Soft Office Ambient Fill Light (Lifts hallway & workstation shadows)
    this.ambientFill = new THREE.AmbientLight(0xf8fafc, 0.65);
    this.group.add(this.ambientFill);
    this.lights.push(this.ambientFill);

    // 2. Main Window Sunlight Key Light
    this.sunLight = new THREE.DirectionalLight(0xffedd5, 2.1);
    this.sunLight.position.set(10, 12, -12);
    this.sunLight.target.position.set(0, 1, 0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.left = -16;
    this.sunLight.shadow.camera.right = 16;
    this.sunLight.shadow.camera.top = 16;
    this.sunLight.shadow.camera.bottom = -16;
    this.sunLight.shadow.bias = -0.00015;
    this.sunLight.shadow.normalBias = 0.04;
    this.sunLight.shadow.radius = 2.0;

    this.group.add(this.sunLight);
    this.group.add(this.sunLight.target);
    this.lights.push(this.sunLight);

    // 3. Overhead Workstation Spotlights (Inverse-square decay=2)
    this.spotLeft = new THREE.SpotLight(0xfffbeb, 1.75, 14.0, Math.PI / 3.5, 0.6, 2.0);
    this.spotLeft.position.set(-6.5, 4.2, 0);
    this.spotLeft.target.position.set(-6.5, 0.75, 0);
    this.group.add(this.spotLeft);
    this.group.add(this.spotLeft.target);
    this.lights.push(this.spotLeft);

    this.spotRight = new THREE.SpotLight(0xfffbeb, 1.75, 14.0, Math.PI / 3.5, 0.6, 2.0);
    this.spotRight.position.set(6.5, 4.2, 0);
    this.spotRight.target.position.set(6.5, 0.75, 0);
    this.group.add(this.spotRight);
    this.group.add(this.spotRight.target);
    this.lights.push(this.spotRight);

    // 4. Central Hallway & Reception Hub Spotlight (Illuminates roaming aisle & Aditi standup zone)
    this.spotCenter = new THREE.SpotLight(0xfffbeb, 1.9, 14.0, Math.PI / 3.2, 0.6, 2.0);
    this.spotCenter.position.set(0, 4.2, -3.5);
    this.spotCenter.target.position.set(0, 0.8, -4.5);
    this.group.add(this.spotCenter);
    this.group.add(this.spotCenter.target);
    this.lights.push(this.spotCenter);
  }

  // ─────────────────────────────────────────────────────────────
  // LIGHTING TOGGLE METHODS (Integrated with HUD buttons & 3D switches)
  // ─────────────────────────────────────────────────────────────

  toggleCeilingLights(forceState) {
    this.ceilingLightsOn = (typeof forceState === 'boolean') ? forceState : !this.ceilingLightsOn;

    const intensity = this.ceilingLightsOn ? 1.75 : 0;
    if (this.spotLeft) this.spotLeft.intensity = intensity;
    if (this.spotRight) this.spotRight.intensity = intensity;
    if (this.spotCenter) this.spotCenter.intensity = this.ceilingLightsOn ? 1.9 : 0;

    if (this.ceilingDiffuserMat) {
      this.ceilingDiffuserMat.emissiveIntensity = this.ceilingLightsOn ? 1.5 : 0.05;
      this.ceilingDiffuserMat.color.setHex(this.ceilingLightsOn ? 0xffffff : 0x475569);
    }

    if (this.rockerCeiling) {
      this.rockerCeiling.rotation.x = this.ceilingLightsOn ? -0.22 : 0.22;
    }

    if (this.ledCeilingMat) {
      const col = this.ceilingLightsOn ? 0x10b981 : 0xef4444;
      this.ledCeilingMat.color.setHex(col);
      this.ledCeilingMat.emissive.setHex(col);
    }

    return this.ceilingLightsOn;
  }

  toggleDeskLamp(forceState) {
    this.deskLampOn = (typeof forceState === 'boolean') ? forceState : !this.deskLampOn;

    // Toggle Workstation screens brightness
    if (this.screenCodeMat && this.screenMetricsMat) {
      this.screenCodeMat.opacity = this.deskLampOn ? 1.0 : 0.2;
      this.screenMetricsMat.opacity = this.deskLampOn ? 1.0 : 0.2;
    }

    if (this.rockerDesk) {
      this.rockerDesk.rotation.x = this.deskLampOn ? -0.22 : 0.22;
    }

    if (this.ledDeskMat) {
      const col = this.deskLampOn ? 0x10b981 : 0xef4444;
      this.ledDeskMat.color.setHex(col);
      this.ledDeskMat.emissive.setHex(col);
    }

    return this.deskLampOn;
  }

  toggleSunlight(forceState) {
    this.sunlightOn = (typeof forceState === 'boolean') ? forceState : !this.sunlightOn;

    if (this.sunLight) {
      this.sunLight.intensity = this.sunlightOn ? 2.1 : 0;
    }
    if (this.hemiLight) {
      this.hemiLight.intensity = this.sunlightOn ? 1.35 : 0.65;
    }
    if (this.ambientFill) {
      this.ambientFill.intensity = this.sunlightOn ? 0.65 : 0.35;
    }

    return this.sunlightOn;
  }

  toggleNightMode(forceState) {
    this.nightModeOn = (typeof forceState === 'boolean') ? forceState : !this.nightModeOn;

    if (this.nightModeOn) {
      this.toggleSunlight(false);
      this.toggleCeilingLights(false);
      this.scene.background = new THREE.Color(0x050c18);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0x1e293b);
        this.hemiLight.groundColor.setHex(0x090d16);
        this.hemiLight.intensity = 0.45;
      }
      if (this.ambientFill) {
        this.ambientFill.intensity = 0.25;
      }
    } else {
      this.toggleSunlight(true);
      this.toggleCeilingLights(true);
      this.scene.background = new THREE.Color(0xa7d8fc);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0xffffff);
        this.hemiLight.groundColor.setHex(0x94a3b8);
        this.hemiLight.intensity = 1.35;
      }
      if (this.ambientFill) {
        this.ambientFill.intensity = 0.65;
      }
    }

    return this.nightModeOn;
  }

  /**
   * Interactive Lighting Mood Presets
   * @param {'daylight' | 'warm_evening' | 'focus_studio'} preset
   */
  setLightingPreset(preset) {
    if (!this.sunLight || !this.hemiLight) return;

    if (preset === 'warm_evening') {
      this.sunLight.color.setHex(0xfb923c);
      this.sunLight.intensity = 2.1;
      this.hemiLight.color.setHex(0xfef3c7);
      this.hemiLight.groundColor.setHex(0x78350f);
      this.hemiLight.intensity = 1.4;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xfef3c7);
        this.ambientFill.intensity = 0.65;
      }
      if (this.spotLeft) this.spotLeft.color.setHex(0xfef08a);
      if (this.spotRight) this.spotRight.color.setHex(0xfef08a);
      if (this.spotCenter) this.spotCenter.color.setHex(0xfef08a);
    } else if (preset === 'focus_studio') {
      this.sunLight.color.setHex(0xffffff);
      this.sunLight.intensity = 1.3;
      this.hemiLight.color.setHex(0xe0f2fe);
      this.hemiLight.groundColor.setHex(0x334155);
      this.hemiLight.intensity = 1.2;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xffffff);
        this.ambientFill.intensity = 0.55;
      }
      if (this.spotLeft) this.spotLeft.intensity = 2.4;
      if (this.spotRight) this.spotRight.intensity = 2.4;
      if (this.spotCenter) this.spotCenter.intensity = 2.6;
    } else {
      this.sunLight.color.setHex(0xffedd5);
      this.sunLight.intensity = 2.1;
      this.hemiLight.color.setHex(0xffffff);
      this.hemiLight.groundColor.setHex(0x94a3b8);
      this.hemiLight.intensity = 1.35;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xf8fafc);
        this.ambientFill.intensity = 0.65;
      }
      if (this.spotLeft) {
        this.spotLeft.color.setHex(0xfffbeb);
        this.spotLeft.intensity = 1.75;
      }
      if (this.spotRight) {
        this.spotRight.color.setHex(0xfffbeb);
        this.spotRight.intensity = 1.75;
      }
      if (this.spotCenter) {
        this.spotCenter.color.setHex(0xfffbeb);
        this.spotCenter.intensity = 1.9;
      }
    }
  }

  getLightingState() {
    return {
      ceilingLightsOn: this.ceilingLightsOn,
      deskLampOn: this.deskLampOn,
      sunlightOn: this.sunlightOn,
      nightModeOn: this.nightModeOn
    };
  }

  getClickableObjects() {
    return this.clickableObjects;
  }

  /**
   * Spawn Colleague NPC (Senior Staff Engineer)
   */
  _spawnNPC() {
    this.npc = new NPC(this.scene, this.camera, {
      name: 'Aditi Sharma',
      role: 'Staff Solutions Architect'
    });
    // Positioned near the central collaborative reception hub
    this.npc.setPosition(0, 0, -6.8, 0);
  }

  /**
   * Spawn candidate player in the central bright hallway facing the team hub
   */
  getPlayerSpawn() {
    return { x: 0, y: 0, z: -1.8, rotationY: Math.PI };
  }

  /**
   * Per-frame update
   */
  update(delta) {
    if (this.npc) {
      this.npc.update(delta);
    }
  }

  /**
   * Clean up memory and restore background on exit
   */
  destroy() {
    this.scene.fog = this.originalFog;
    this.scene.background = this.originalBg;

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
