/**
 * ELiVET Game Engine — Scene: Photorealistic Luxury Virtual Wardrobe & Styling Studio
 * Features high-key studio lighting, grand Hollywood illuminated vanity mirror,
 * rotating presentation pedestal, bespoke brass clothing racks with clickable garments,
 * luxury shoe & accessory display shelving, Wardrobe Consultant NPC (Priya Sen),
 * and interactive 3D lighting switches.
 */

import * as THREE from 'three';
import { NPC } from '../systems/NPC.js';
import { TextureGenerator } from '../systems/TextureGenerator.js';

export class Wardrobe {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {import('../systems/Physics.js').PhysicsSystem} physics
   * @param {import('../systems/Player.js').Player} [player]
   */
  constructor(scene, camera, physics, player = null) {
    this.scene = scene;
    this.camera = camera;
    this.physics = physics;
    this.player = player;

    this.group = new THREE.Group();
    this.group.name = 'Scene_VirtualWardrobe';
    this.scene.add(this.group);

    this.npc = null;
    this.lights = [];
    this.disposables = [];

    // Lighting States
    this.ceilingLightsOn = true;
    this.vanityLightsOn = true;
    this.sunlightOn = true;
    this.nightModeOn = false;

    // Interactive 3D Objects Registry for Raycasting
    this.clickableObjects = [];

    // Studio Background & Clear Atmospheric Haze
    this.originalBg = this.scene.background;
    this.scene.background = new THREE.Color(0x1e293b); // Rich modern luxury studio dark-slate tone

    this.originalFog = this.scene.fog;
    this.scene.fog = null; // Crystal-clear showcase studio view (no obscuring fog!)

    this._buildArchitecture();
    this._buildHollywoodVanityMirror();
    this._buildClothingRacks();
    this._buildAccessoryShelves();
    this._buildPhysicalLightSwitch();
    this._setupStudioLighting();
    this._spawnConsultantNPC();
  }

  /**
   * Studio Architecture: Polished chevron hardwood floor, warm alabaster walls,
   * presentation turntable pedestal with glowing cyan LED halo
   */
  _buildArchitecture() {
    const roomW = 12;
    const roomD = 12;
    const roomH = 4.5;

    // 1. Polished Hardwood Parquet Floor
    const floorGeo = new THREE.PlaneGeometry(roomW, roomD);
    const floorTex = TextureGenerator.createWoodFloorTexture();
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.28,
      metalness: 0.15
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);
    this.disposables.push(floorGeo, floorTex, floorMat);

    this.physics.setBoundaries(-roomW / 2 + 0.5, roomW / 2 - 0.5, -roomD / 2 + 0.5, roomD / 2 - 0.5);

    // 2. Center Presentation Turntable Pedestal
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, 0, 0);

    // Stepped white Calacatta marble base
    const baseGeo = new THREE.CylinderGeometry(1.5, 1.65, 0.14, 36);
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.2
    });
    const pedestal = new THREE.Mesh(baseGeo, marbleMat);
    pedestal.position.y = 0.07;
    pedestal.receiveShadow = true;
    pedestalGroup.add(pedestal);
    this.disposables.push(baseGeo, marbleMat);

    // Brushed Brass Trim Bezel
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.2 });
    const bezelGeo = new THREE.CylinderGeometry(1.52, 1.52, 0.04, 36);
    const bezel = new THREE.Mesh(bezelGeo, brassMat);
    bezel.position.y = 0.14;
    pedestalGroup.add(bezel);
    this.disposables.push(brassMat, bezelGeo);

    // Glowing Cyan LED Halo Ring beneath pedestal
    const haloGeo = new THREE.TorusGeometry(1.55, 0.025, 16, 64);
    this.haloMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.8
    });
    const halo = new THREE.Mesh(haloGeo, this.haloMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 0.03;
    pedestalGroup.add(halo);
    this.disposables.push(haloGeo, this.haloMat);

    this.group.add(pedestalGroup);

    // 3. Studio Walls (Warm Alabaster with vertical brass accents)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xfafaf9, roughness: 0.85 });
    const wallGeo = new THREE.PlaneGeometry(roomW, roomH);
    this.disposables.push(wallMat, wallGeo);

    // Back Wall
    const backWall = new THREE.Mesh(wallGeo, wallMat);
    backWall.position.set(0, roomH / 2, -roomD / 2);
    backWall.receiveShadow = true;
    this.group.add(backWall);

    // Front Wall
    const frontWall = new THREE.Mesh(wallGeo, wallMat);
    frontWall.rotation.y = Math.PI;
    frontWall.position.set(0, roomH / 2, roomD / 2);
    this.group.add(frontWall);

    // Left Wall
    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-roomW / 2, roomH / 2, 0);
    this.group.add(leftWall);

    // Right Wall
    const rightWall = new THREE.Mesh(wallGeo, wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(roomW / 2, roomH / 2, 0);
    this.group.add(rightWall);

    // Vertical Champagne Brass Wall Trims
    const trimGeo = new THREE.BoxGeometry(0.04, roomH, 0.02);
    this.disposables.push(trimGeo);
    [-4, -2, 2, 4].forEach((tx) => {
      const trim = new THREE.Mesh(trimGeo, brassMat);
      trim.position.set(tx, roomH / 2, -roomD / 2 + 0.01);
      this.group.add(trim);
    });

    // 4. Coffered Studio Ceiling with Linear Diffusers
    const ceilGeo = new THREE.PlaneGeometry(roomW, roomD);
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.9 });
    const ceiling = new THREE.Mesh(ceilGeo, ceilMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = roomH;
    this.group.add(ceiling);
    this.disposables.push(ceilGeo, ceilMat);
  }

  /**
   * Grand Hollywood Illuminated Full-Length Vanity Mirror
   * Positioned directly behind the avatar with glowing warm perimeter LED globes
   */
  _buildHollywoodVanityMirror() {
    const mirrorGroup = new THREE.Group();
    // Positioned directly behind the presentation pedestal
    mirrorGroup.position.set(0, 1.9, -2.4);

    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.95, roughness: 0.15 });

    // 1. Gilded Brass Outer Frame (3.2m wide x 3.0m high)
    const frameGeo = new THREE.BoxGeometry(3.2, 3.0, 0.1);
    const mirrorFrame = new THREE.Mesh(frameGeo, goldMat);
    mirrorFrame.castShadow = true;
    mirrorGroup.add(mirrorFrame);
    this.disposables.push(frameGeo, goldMat);

    // 2. High-Specularity Reflective Mirror Glass
    const glassGeo = new THREE.PlaneGeometry(2.88, 2.68);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x94a3b8,
      roughness: 0.05,
      metalness: 0.98,
      reflectivity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });
    const mirrorGlass = new THREE.Mesh(glassGeo, glassMat);
    mirrorGlass.position.z = 0.052;
    mirrorGroup.add(mirrorGlass);
    this.disposables.push(glassGeo, glassMat);

    // 3. 18 Glowing Hollywood Vanity Bulb Globes lining the frame perimeter
    this.vanityBulbMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfef08a,
      emissiveIntensity: 2.2,
      roughness: 0.1
    });
    this.disposables.push(this.vanityBulbMat);

    const bulbGeo = new THREE.SphereGeometry(0.045, 12, 12);
    this.disposables.push(bulbGeo);

    // Top bulbs
    for (let bx = -1.35; bx <= 1.35; bx += 0.45) {
      const bulb = new THREE.Mesh(bulbGeo, this.vanityBulbMat);
      bulb.position.set(bx, 1.35, 0.06);
      mirrorGroup.add(bulb);
    }

    // Left and Right edge bulbs
    [-1.45, 1.45].forEach((sideX) => {
      for (let by = -1.1; by <= 1.1; by += 0.45) {
        const bulb = new THREE.Mesh(bulbGeo, this.vanityBulbMat);
        bulb.position.set(sideX, by, 0.06);
        mirrorGroup.add(bulb);
      }
    });

    // Mirror Accent Backlight
    this.mirrorBacklight = new THREE.PointLight(0xfef08a, 1.8, 6.0, 2.0);
    this.mirrorBacklight.position.set(0, 0, 0.2);
    mirrorGroup.add(this.mirrorBacklight);
    this.lights.push(this.mirrorBacklight);

    this.group.add(mirrorGroup);
  }

  /**
   * Luxury Brass Garment Racks with Clickable Suits (Left Wing)
   */
  _buildClothingRacks() {
    const rackGroup = new THREE.Group();
    rackGroup.position.set(-3.6, 0, 0);

    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.2 });

    // Upright Posts & Hanging Rail
    const postGeo = new THREE.CylinderGeometry(0.025, 0.025, 2.0, 12);
    const railGeo = new THREE.CylinderGeometry(0.02, 0.02, 3.2, 12);
    const baseGeo = new THREE.BoxGeometry(0.45, 0.04, 0.12);
    this.disposables.push(postGeo, railGeo, baseGeo);

    // Front & Back vertical posts
    [-1.5, 1.5].forEach((pz) => {
      const post = new THREE.Mesh(postGeo, brassMat);
      post.position.set(0, 1.0, pz);
      post.castShadow = true;
      rackGroup.add(post);

      const foot = new THREE.Mesh(baseGeo, brassMat);
      foot.position.set(0, 0.02, pz);
      rackGroup.add(foot);
    });

    // Horizontal top hanging bar
    const bar = new THREE.Mesh(railGeo, brassMat);
    bar.rotation.x = Math.PI / 2;
    bar.position.set(0, 1.95, 0);
    rackGroup.add(bar);

    // Hanging Clickable Garments
    const garments = [
      { style: 'formal', name: 'Business Formal Suit', color: 0x1e3a5f, tieColor: 0x991b1b, z: -1.0 },
      { style: 'formal', name: 'Charcoal Executive Suit', color: 0x1f2937, tieColor: 0x0284c7, z: -0.35 },
      { style: 'smart_casual', name: 'Smart Casual Blazer & Chinos', color: 0x0284c7, tieColor: null, z: 0.35 },
      { style: 'casual', name: 'Tech Startup Polo', color: 0x0d9488, tieColor: null, z: 1.0 }
    ];

    const suitGeo = new THREE.BoxGeometry(0.12, 0.78, 0.44);
    this.disposables.push(suitGeo);

    garments.forEach(({ style, name, color, z }) => {
      const gMat = new THREE.MeshStandardMaterial({ color, roughness: 0.6 });
      const garment = new THREE.Mesh(suitGeo, gMat);
      garment.position.set(0, 1.48, z);
      garment.castShadow = true;
      rackGroup.add(garment);
      this.disposables.push(gMat);

      // Register as Clickable 3D Object
      this.clickableObjects.push({
        mesh: garment,
        name: `Wardrobe: ${name}`,
        hint: `Click to Wear [${style.toUpperCase()}]`,
        onClick: () => {
          if (this.player && this.player.setAttire) {
            this.player.setAttire(style);
            // Sync attire select dropdown & trigger UI update
            const selectEl = document.getElementById('attire-style-select');
            if (selectEl) {
              selectEl.value = style;
              selectEl.dispatchEvent(new Event('change'));
            }
          }
          return true;
        }
      });
    });

    this.group.add(rackGroup);
  }

  /**
   * Accessory & Footwear Display Shelving (Right Wing)
   */
  _buildAccessoryShelves() {
    const shelfGroup = new THREE.Group();
    shelfGroup.position.set(3.8, 0, 0);

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.4 });
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.9, roughness: 0.1 });
    this.disposables.push(woodMat, glassMat);

    // Floating Glass Shelves
    const shelfGeo = new THREE.BoxGeometry(0.65, 0.03, 3.0);
    this.disposables.push(shelfGeo);

    [0.7, 1.25, 1.8].forEach((sy) => {
      const shelf = new THREE.Mesh(shelfGeo, glassMat);
      shelf.position.set(0, sy, 0);
      shelf.receiveShadow = true;
      shelfGroup.add(shelf);
    });

    // Display Shoes (Oxford Brogues)
    const shoeGeo = new THREE.BoxGeometry(0.12, 0.08, 0.26);
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.25, metalness: 0.2 });
    this.disposables.push(shoeGeo, shoeMat);

    [-0.6, 0.6].forEach((sz) => {
      const shoeL = new THREE.Mesh(shoeGeo, shoeMat);
      shoeL.position.set(-0.08, 0.75, sz);
      shelfGroup.add(shoeL);

      const shoeR = new THREE.Mesh(shoeGeo, shoeMat);
      shoeR.position.set(0.08, 0.75, sz);
      shelfGroup.add(shoeR);
    });

    // Luxury Emerald Velvet Fitting Ottoman
    const stoolGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.45, 24);
    const velvetMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.7 });
    const stool = new THREE.Mesh(stoolGeo, velvetMat);
    stool.position.set(-1.2, 0.22, 2.2);
    stool.castShadow = true;
    shelfGroup.add(stool);
    this.disposables.push(stoolGeo, velvetMat);

    this.group.add(shelfGroup);
  }

  /**
   * Interactive Clickable 3D Light Switch (Mounted on Wall)
   */
  _buildPhysicalLightSwitch() {
    this.wallSwitchGroup = new THREE.Group();
    this.wallSwitchGroup.name = 'Interactive_WardrobeSwitch';
    this.wallSwitchGroup.position.set(-5.95, 1.5, 1.8);

    const plateMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const rockerMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    this.disposables.push(plateMat, rockerMat);

    const plateGeo = new THREE.BoxGeometry(0.025, 0.32, 0.24);
    const plate = new THREE.Mesh(plateGeo, plateMat);
    this.wallSwitchGroup.add(plate);
    this.disposables.push(plateGeo);

    // Rocker 1 (Studio Lights)
    const rockerGeo = new THREE.BoxGeometry(0.025, 0.1, 0.06);
    this.rockerCeiling = new THREE.Mesh(rockerGeo, rockerMat);
    this.rockerCeiling.position.set(0.015, 0.03, -0.05);
    this.rockerCeiling.rotation.z = 0.22;
    this.wallSwitchGroup.add(this.rockerCeiling);

    // Rocker 2 (Hollywood Vanity Mirror Lights)
    this.rockerDesk = new THREE.Mesh(rockerGeo, rockerMat);
    this.rockerDesk.position.set(0.015, 0.03, 0.05);
    this.rockerDesk.rotation.z = 0.22;
    this.wallSwitchGroup.add(this.rockerDesk);
    this.disposables.push(rockerGeo);

    // Status LEDs
    const ledGeo = new THREE.SphereGeometry(0.009, 8, 8);
    this.ledCeilingMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 1.5 });
    this.ledDeskMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 1.5 });

    const led1 = new THREE.Mesh(ledGeo, this.ledCeilingMat);
    led1.position.set(0.016, -0.06, -0.05);
    this.wallSwitchGroup.add(led1);

    const led2 = new THREE.Mesh(ledGeo, this.ledDeskMat);
    led2.position.set(0.016, -0.06, 0.05);
    this.wallSwitchGroup.add(led2);
    this.disposables.push(ledGeo, this.ledCeilingMat, this.ledDeskMat);

    // Discovery Tag
    const tagCanvas = document.createElement('canvas');
    tagCanvas.width = 256;
    tagCanvas.height = 70;
    const ctx = tagCanvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 256, 70);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 248, 62);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💡 STUDIO LIGHTS', 128, 34);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '13px monospace';
    ctx.fillText('CLICK TO TOGGLE', 128, 55);

    const tagTex = new THREE.CanvasTexture(tagCanvas);
    const tagMat = new THREE.MeshBasicMaterial({ map: tagTex });
    const tagGeo = new THREE.PlaneGeometry(0.3, 0.08);
    const tagMesh = new THREE.Mesh(tagGeo, tagMat);
    tagMesh.rotation.y = Math.PI / 2;
    tagMesh.position.set(0.016, 0.22, 0);
    this.wallSwitchGroup.add(tagMesh);
    this.disposables.push(tagTex, tagMat, tagGeo);

    this.group.add(this.wallSwitchGroup);

    this.clickableObjects.push({
      mesh: this.rockerCeiling,
      name: 'Studio Key Light Switch',
      hint: 'Click to Toggle Studio Lights [L]',
      onClick: () => this.toggleCeilingLights()
    });

    this.clickableObjects.push({
      mesh: this.rockerDesk,
      name: 'Vanity Mirror Bulbs Switch',
      hint: 'Click to Toggle Vanity Mirror [J]',
      onClick: () => this.toggleDeskLamp()
    });
  }

  /**
   * 3-Point Boutique Portrait Studio Lighting Rig
   */
  _setupStudioLighting() {
    // 1. High-Key Warm Boutique Studio Radiosity
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x64748b, 1.4);
    this.group.add(this.hemiLight);
    this.lights.push(this.hemiLight);

    // 1b. Flattering Luxury Dressing Room Ambient Fill
    this.ambientFill = new THREE.AmbientLight(0xfff7ed, 0.7);
    this.group.add(this.ambientFill);
    this.lights.push(this.ambientFill);

    // 2. Main High-CRI Portrait Key Spotlight (Focused on Center Pedestal Avatar)
    this.keySpot = new THREE.SpotLight(0xffedd5, 3.2, 14.0, Math.PI / 3.8, 0.5, 2.0);
    this.keySpot.position.set(0, 4.2, 3.2);
    this.keySpot.target.position.set(0, 1.1, 0);
    this.keySpot.castShadow = true;
    this.keySpot.shadow.mapSize.width = 2048;
    this.keySpot.shadow.mapSize.height = 2048;
    this.keySpot.shadow.bias = -0.00015;
    this.keySpot.shadow.normalBias = 0.04;
    this.group.add(this.keySpot);
    this.group.add(this.keySpot.target);
    this.lights.push(this.keySpot);

    // 3. Front Soft Fill Light
    this.fillLight = new THREE.DirectionalLight(0xffffff, 1.85);
    this.fillLight.position.set(2.5, 2.8, 3.5);
    this.fillLight.target.position.set(0, 1.0, 0);
    this.group.add(this.fillLight);
    this.group.add(this.fillLight.target);
    this.lights.push(this.fillLight);

    // 4. Cool Cyan Rim / Hair Light (Gives candidate crisp silhouette separation)
    this.rimLight = new THREE.PointLight(0x38bdf8, 1.8, 8.0, 2.0);
    this.rimLight.position.set(0, 3.4, -2.0);
    this.group.add(this.rimLight);
    this.lights.push(this.rimLight);
  }

  // ─────────────────────────────────────────────────────────────
  // LIGHTING TOGGLE METHODS (Integrated with HUD buttons & 3D switches)
  // ─────────────────────────────────────────────────────────────

  toggleCeilingLights(forceState) {
    this.ceilingLightsOn = (typeof forceState === 'boolean') ? forceState : !this.ceilingLightsOn;

    const intensity = this.ceilingLightsOn ? 3.2 : 0;
    if (this.keySpot) this.keySpot.intensity = intensity;

    if (this.rockerCeiling) {
      this.rockerCeiling.rotation.z = this.ceilingLightsOn ? 0.22 : -0.22;
    }

    if (this.ledCeilingMat) {
      const col = this.ceilingLightsOn ? 0x10b981 : 0xef4444;
      this.ledCeilingMat.color.setHex(col);
      this.ledCeilingMat.emissive.setHex(col);
    }

    return this.ceilingLightsOn;
  }

  toggleDeskLamp(forceState) {
    this.vanityLightsOn = (typeof forceState === 'boolean') ? forceState : !this.vanityLightsOn;

    if (this.vanityBulbMat) {
      this.vanityBulbMat.emissiveIntensity = this.vanityLightsOn ? 2.5 : 0.05;
      this.vanityBulbMat.color.setHex(this.vanityLightsOn ? 0xffffff : 0x475569);
    }

    if (this.mirrorBacklight) {
      this.mirrorBacklight.intensity = this.vanityLightsOn ? 2.2 : 0;
    }

    if (this.rockerDesk) {
      this.rockerDesk.rotation.z = this.vanityLightsOn ? 0.22 : -0.22;
    }

    if (this.ledDeskMat) {
      const col = this.vanityLightsOn ? 0x10b981 : 0xef4444;
      this.ledDeskMat.color.setHex(col);
      this.ledDeskMat.emissive.setHex(col);
    }

    return this.vanityLightsOn;
  }

  toggleSunlight(forceState) {
    this.sunlightOn = (typeof forceState === 'boolean') ? forceState : !this.sunlightOn;

    if (this.fillLight) {
      this.fillLight.intensity = this.sunlightOn ? 1.85 : 0.4;
    }

    if (this.hemiLight) {
      this.hemiLight.intensity = this.sunlightOn ? 1.4 : 0.6;
    }

    if (this.ambientFill) {
      this.ambientFill.intensity = this.sunlightOn ? 0.7 : 0.35;
    }

    return this.sunlightOn;
  }

  toggleNightMode(forceState) {
    this.nightModeOn = (typeof forceState === 'boolean') ? forceState : !this.nightModeOn;

    if (this.nightModeOn) {
      this.toggleSunlight(false);
      this.toggleCeilingLights(false);
      this.toggleDeskLamp(true);
      this.scene.background = new THREE.Color(0x0a0f1d);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0x1e293b);
        this.hemiLight.groundColor.setHex(0x020617);
        this.hemiLight.intensity = 0.45;
      }
      if (this.ambientFill) {
        this.ambientFill.intensity = 0.25;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x60a5fa);
        this.rimLight.intensity = 2.4;
      }
    } else {
      this.toggleSunlight(true);
      this.toggleCeilingLights(true);
      this.toggleDeskLamp(true);
      this.scene.background = new THREE.Color(0x1e293b);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0xffffff);
        this.hemiLight.groundColor.setHex(0x64748b);
        this.hemiLight.intensity = 1.4;
      }
      if (this.ambientFill) {
        this.ambientFill.intensity = 0.7;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x38bdf8);
        this.rimLight.intensity = 1.8;
      }
    }

    return this.nightModeOn;
  }

  /**
   * Interactive Lighting Mood Presets
   * @param {'daylight' | 'warm_evening' | 'focus_studio'} preset
   */
  setLightingPreset(preset) {
    if (!this.keySpot || !this.hemiLight || !this.fillLight) return;

    if (preset === 'warm_evening') {
      this.keySpot.color.setHex(0xfef08a);
      this.keySpot.intensity = 3.2;
      this.fillLight.color.setHex(0xfb923c);
      this.fillLight.intensity = 1.8;
      this.hemiLight.color.setHex(0xfef3c7);
      this.hemiLight.groundColor.setHex(0x78350f);
      this.hemiLight.intensity = 1.4;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xfef3c7);
        this.ambientFill.intensity = 0.75;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0xf59e0b);
        this.rimLight.intensity = 2.0;
      }
    } else if (preset === 'focus_studio') {
      this.keySpot.color.setHex(0xffffff);
      this.keySpot.intensity = 3.8;
      this.fillLight.color.setHex(0xe0f2fe);
      this.fillLight.intensity = 1.6;
      this.hemiLight.color.setHex(0xffffff);
      this.hemiLight.groundColor.setHex(0x334155);
      this.hemiLight.intensity = 1.25;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xffffff);
        this.ambientFill.intensity = 0.6;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x38bdf8);
        this.rimLight.intensity = 2.4;
      }
    } else {
      this.keySpot.color.setHex(0xffedd5);
      this.keySpot.intensity = 3.2;
      this.fillLight.color.setHex(0xffffff);
      this.fillLight.intensity = 1.85;
      this.hemiLight.color.setHex(0xffffff);
      this.hemiLight.groundColor.setHex(0x64748b);
      this.hemiLight.intensity = 1.4;
      if (this.ambientFill) {
        this.ambientFill.color.setHex(0xfff7ed);
        this.ambientFill.intensity = 0.7;
      }
      if (this.rimLight) {
        this.rimLight.color.setHex(0x38bdf8);
        this.rimLight.intensity = 1.8;
      }
    }
  }

  getLightingState() {
    return {
      ceilingLightsOn: this.ceilingLightsOn,
      deskLampOn: this.vanityLightsOn,
      sunlightOn: this.sunlightOn,
      nightModeOn: this.nightModeOn
    };
  }

  getClickableObjects() {
    return this.clickableObjects;
  }

  /**
   * Spawn Wardrobe Consultant NPC (Priya Sen)
   */
  _spawnConsultantNPC() {
    this.npc = new NPC(this.scene, this.camera, {
      name: 'Priya Sen',
      role: 'Executive Image & Attire Coach'
    });
    // Positioned beside the garment rail facing the player
    this.npc.setPosition(-2.2, 0, -0.6, 0.4);
  }

  /**
   * Player spawns directly in the center of the turntable pedestal facing forward
   */
  getPlayerSpawn() {
    return { x: 0, y: 0.16, z: 0, rotationY: 0 };
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
