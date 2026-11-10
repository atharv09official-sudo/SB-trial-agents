/**
 * ELiVET Game Engine — Candidate Player Avatar & Cinematic Camera System
 * Provides anatomically proportioned student/candidate model,
 * cinematic conversation camera framing (over-the-shoulder & first-person eyeline),
 * and attire customization.
 */

import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

export class Player {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {import('./Physics.js').PhysicsSystem} physics
   */
  constructor(scene, camera, physics) {
    this.scene = scene;
    this.camera = camera;
    this.physics = physics;

    this.root = new THREE.Group();
    this.root.name = 'PlayerAvatar';
    this.scene.add(this.root);

    // Movement speeds & modes
    this.moveSpeed = 3.8;
    this.rotationSpeed = 8.0;
    this.cameraMode = 'interview'; // 'interview' (OTS cinematic) | 'first_person' | 'third_person'

    // Avatar customizer state
    this.customization = {
      gender: 'male', // 'male' | 'female'
      skinTone: '#c68642', // Warm Golden Bronze (Healthy, vibrant, photorealistically lit)
      hairStyle: 'executive', // 'executive' | 'taper' | 'bob' | 'bun'
      hairColor: '#18181b',
      attireStyle: 'formal', // 'formal' | 'smart_casual' | 'casual'
      jacketColor: '#172b46',
      shirtColor: '#f8fafc',
      pantsColor: '#1e293b',
      tieColor: '#1e3a5f',
      hasTie: true,
      shoesColor: '#09090b',
      glasses: 'none', // 'none' | 'rectangular' | 'round' | 'gold_rim'
      glassesColor: '#0f172a',
      watch: 'steel', // 'none' | 'steel' | 'gold' | 'leather'
    };

    this.wardrobeFocus = 'full'; // 'full' | 'face' | 'torso' | 'shoes'

    this.parts = {};
    this.animTime = 0;
    this.isWalking = false;

    // Cinematic Camera Offsets:
    // Interview Mode: Over-the-shoulder conversation camera (slightly right-offset, looking at interviewer)
    this.interviewCamPos = new THREE.Vector3(0.55, 1.45, -0.1);
    this.interviewLookTarget = new THREE.Vector3(0, 1.45, -2.65);

    // First Person Mode: Eye level
    this.firstPersonPos = new THREE.Vector3(0, 1.55, -0.75);

    // Third Person Roam Mode: Follow behind avatar back
    this.thirdPersonOffset = new THREE.Vector3(0, 1.9, -2.8);

    this._buildAnatomicalAvatar();
    this._setupInputListeners();
  }

  /**
   * Sculpted humanoid candidate avatar
   */
  _buildAnatomicalAvatar() {
    // Generate fine textile and organic procedural textures
    const suitTexture = TextureGenerator.createSuitWoolTexture(this.customization.jacketColor);
    const shirtTexture = TextureGenerator.createShirtCottonTexture(this.customization.shirtColor);
    const tieTexture = TextureGenerator.createSilkTieTexture(this.customization.tieColor);
    const leatherTexture = TextureGenerator.createLeatherTexture(this.customization.shoesColor);
    const skinTexture = TextureGenerator.createSkinTexture(this.customization.skinTone);

    this.materials = {
      skin: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.skinTone),
        map: skinTexture,
        roughness: 0.52,
        metalness: 0.03
      }),
      hair: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.hairColor),
        roughness: 0.76,
        metalness: 0.08
      }),
      shirt: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.shirtColor),
        map: shirtTexture,
        roughness: 0.36,
        metalness: 0.02
      }),
      jacket: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.jacketColor),
        map: suitTexture,
        roughness: 0.52,
        metalness: 0.08
      }),
      lapel: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.jacketColor),
        map: suitTexture,
        roughness: 0.46,
        metalness: 0.09
      }),
      button: new THREE.MeshStandardMaterial({
        color: 0x18181b,
        metalness: 0.6,
        roughness: 0.25
      }),
      tie: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.tieColor),
        map: tieTexture,
        roughness: 0.28,
        metalness: 0.24
      }),
      pants: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.pantsColor),
        map: suitTexture,
        roughness: 0.62,
        metalness: 0.04
      }),
      shoes: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.shoesColor),
        map: leatherTexture,
        roughness: 0.22,
        metalness: 0.64
      }),
      shoeSole: new THREE.MeshStandardMaterial({
        color: 0x18181b,
        roughness: 0.85
      }),
      glasses: new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.2,
        metalness: 0.85
      }),
      watchBand: new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.92,
        roughness: 0.18
      }),
      watchFace: new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.12,
        metalness: 0.7
      }),
      cufflink: new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        metalness: 0.96,
        roughness: 0.12
      }),
      belt: new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.customization.shoesColor),
        map: leatherTexture,
        roughness: 0.32,
        metalness: 0.3
      }),
      buckle: new THREE.MeshStandardMaterial({
        color: 0xf1f5f9,
        metalness: 0.96,
        roughness: 0.12
      }),
      pocketSquare: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.3
      }),
      tieBar: new THREE.MeshStandardMaterial({
        color: 0xd97706,
        metalness: 0.96,
        roughness: 0.14
      }),
      lapelPin: new THREE.MeshStandardMaterial({
        color: 0x10b981,
        metalness: 0.9,
        roughness: 0.2
      })
    };

    // 1. Head & Neck Group
    this.parts.headGroup = new THREE.Group();
    this.parts.headGroup.position.set(0, 1.48, 0);

    // Sculpted Cranium with athletic jawline
    const headGeo = new THREE.SphereGeometry(0.148, 24, 20);
    headGeo.scale(0.92, 1.06, 0.98);
    this.parts.head = new THREE.Mesh(headGeo, this.materials.skin);
    this.parts.head.castShadow = true;
    this.parts.headGroup.add(this.parts.head);

    // Sculpted Chin & Jaw
    const chinGeo = new THREE.SphereGeometry(0.040, 12, 10);
    chinGeo.scale(1.15, 0.85, 1.0);
    const chin = new THREE.Mesh(chinGeo, this.materials.skin);
    chin.position.set(0, -0.076, 0.118);
    this.parts.headGroup.add(chin);

    // Sculpted Human Nose (Tapered Bridge, Rounded Tip, and Nostril Flairs)
    const noseBridgeGeo = new THREE.CylinderGeometry(0.008, 0.014, 0.044, 8);
    const noseBridge = new THREE.Mesh(noseBridgeGeo, this.materials.skin);
    noseBridge.position.set(0, 0.006, 0.148);
    noseBridge.rotation.x = -0.22;
    this.parts.headGroup.add(noseBridge);

    const noseTipGeo = new THREE.SphereGeometry(0.012, 10, 8);
    noseTipGeo.scale(1.1, 0.85, 1.0);
    const noseTip = new THREE.Mesh(noseTipGeo, this.materials.skin);
    noseTip.position.set(0, -0.016, 0.154);
    this.parts.headGroup.add(noseTip);

    // Sculpted Natural Lips (Warm Terracotta Rose tone)
    const lipMat = new THREE.MeshStandardMaterial({
      color: 0xb45353,
      roughness: 0.45,
      metalness: 0.05
    });

    // Upper Lip with subtle Cupid's Bow
    const upperLipGeo = new THREE.BoxGeometry(0.038, 0.008, 0.014);
    const upperLip = new THREE.Mesh(upperLipGeo, lipMat);
    upperLip.position.set(0, -0.042, 0.140);
    this.parts.headGroup.add(upperLip);

    // Lower Lip
    const lowerLipGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.032, 10);
    lowerLipGeo.rotateZ(Math.PI / 2);
    const lowerLip = new THREE.Mesh(lowerLipGeo, lipMat);
    lowerLip.position.set(0, -0.052, 0.138);
    this.parts.headGroup.add(lowerLip);

    // Anatomical Ears framing the head
    const earGeo = new THREE.CylinderGeometry(0.024, 0.018, 0.048, 10);
    earGeo.scale(0.4, 1.0, 0.8);
    [-0.138, 0.138].forEach((ex) => {
      const ear = new THREE.Mesh(earGeo, this.materials.skin);
      ear.position.set(ex, 0.005, -0.015);
      ear.rotation.z = (ex > 0 ? -0.15 : 0.15);
      this.parts.headGroup.add(ear);
    });

    // Anatomical Hair Styles (Executive, Modern Taper, Corporate Bob, Chignon Bun)
    this._buildHairStyles();

    // Eyewear / Glasses System
    this._buildGlasses();

    // Almond Corporate Eyes with Eyelids & Specular Cornea Highlight
    const eyeWhiteGeo = new THREE.SphereGeometry(0.016, 12, 10);
    eyeWhiteGeo.scale(1.25, 0.75, 0.8);
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xfafafa });

    const eyeIrisGeo = new THREE.SphereGeometry(0.011, 10, 8);
    const eyeIrisMat = new THREE.MeshBasicMaterial({ color: 0x1f140e });

    const eyeSpecularGeo = new THREE.SphereGeometry(0.0035, 6, 6);
    const eyeSpecularMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const eyelidGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.024, 8, 1, false, 0, Math.PI);
    eyelidGeo.rotateZ(Math.PI / 2);

    [-0.05, 0.05].forEach((x, idx) => {
      // Eye Sclera (White)
      const white = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
      white.position.set(x, 0.014, 0.135);
      this.parts.headGroup.add(white);

      // Iris with deep dark limbal ring
      const iris = new THREE.Mesh(eyeIrisGeo, eyeIrisMat);
      iris.position.set(x, 0.014, 0.143);
      this.parts.headGroup.add(iris);

      // Specular Reflection (Gives intelligence & lifelike gaze)
      const spec = new THREE.Mesh(eyeSpecularGeo, eyeSpecularMat);
      spec.position.set(x + (idx === 0 ? 0.003 : -0.003), 0.017, 0.149);
      this.parts.headGroup.add(spec);

      // Upper Eyelid crease
      const eyelid = new THREE.Mesh(eyelidGeo, this.materials.skin);
      eyelid.position.set(x, 0.022, 0.138);
      eyelid.rotation.x = -0.35;
      this.parts.headGroup.add(eyelid);
    });

    // Natural groomed eyebrows
    const browGeo = new THREE.BoxGeometry(0.038, 0.007, 0.012);
    [-0.05, 0.05].forEach((bx, idx) => {
      const brow = new THREE.Mesh(browGeo, this.materials.hair);
      brow.position.set(bx, 0.038, 0.138);
      brow.rotation.z = (idx === 0 ? 0.08 : -0.08);
      this.parts.headGroup.add(brow);
    });

    // Anatomical Neck
    const neckGeo = new THREE.CylinderGeometry(0.064, 0.076, 0.13, 16);
    const neck = new THREE.Mesh(neckGeo, this.materials.skin);
    neck.position.y = -0.11;
    this.parts.headGroup.add(neck);

    this.root.add(this.parts.headGroup);

    // 2. Torso (Tailored V-Taper Jacket + Crisp Shirt + 3D Dimensional Silk Tie)
    this.parts.torso = new THREE.Group();
    this.parts.torso.position.set(0, 0.96, 0);

    // Base Formal Dress Shirt (Visible inside the V-opening)
    const shirtChestGeo = new THREE.BoxGeometry(0.42, 0.50, 0.24);
    this.parts.chest = new THREE.Mesh(shirtChestGeo, this.materials.shirt);
    this.parts.chest.castShadow = true;
    this.parts.torso.add(this.parts.chest);

    // Tailored Suit Jacket (Volumetric V-Taper covering chest, back, and sides)
    const jacketChestGeo = new THREE.BoxGeometry(0.46, 0.28, 0.26);
    const jacketChest = new THREE.Mesh(jacketChestGeo, this.materials.jacket);
    jacketChest.position.set(0, 0.11, 0);
    jacketChest.castShadow = true;
    this.parts.torso.add(jacketChest);

    // Tapered Waist (Athletic midsection)
    const jacketWaistGeo = new THREE.BoxGeometry(0.40, 0.18, 0.24);
    const jacketWaist = new THREE.Mesh(jacketWaistGeo, this.materials.jacket);
    jacketWaist.position.set(0, -0.11, 0);
    this.parts.torso.add(jacketWaist);

    // Flared Jacket Skirt (flowing over hips past the beltline with open front quarters cutaway)
    const jacketSkirtGeo = new THREE.BoxGeometry(0.43, 0.14, 0.25);
    const jacketSkirt = new THREE.Mesh(jacketSkirtGeo, this.materials.jacket);
    jacketSkirt.position.set(0, -0.24, 0);
    this.parts.torso.add(jacketSkirt);

    this.parts.jacketPanels = [jacketChest, jacketWaist, jacketSkirt];

    // Structured Shoulder Yokes / Deltoid Caps (Connecting Torso to Arms with ZERO GAP!)
    const shoulderGeo = new THREE.SphereGeometry(0.082, 16, 12);
    shoulderGeo.scale(1.15, 0.90, 1.05);
    [-0.23, 0.23].forEach((sx) => {
      const shoulderCap = new THREE.Mesh(shoulderGeo, this.materials.jacket);
      shoulderCap.position.set(sx, 0.22, 0);
      shoulderCap.castShadow = true;
      this.parts.torso.add(shoulderCap);
    });

    // 3D Shirt Collar Stand (Encircling the neck base)
    const collarBandGeo = new THREE.CylinderGeometry(0.076, 0.082, 0.038, 16, 1, true);
    const collarBand = new THREE.Mesh(collarBandGeo, this.materials.shirt);
    collarBand.position.set(0, 0.24, 0);
    this.parts.torso.add(collarBand);

    // Pointed Collar Leaves (Framing the tie knot)
    const collarGeo = new THREE.BoxGeometry(0.072, 0.044, 0.016);
    this.parts.collarWings = [-0.056, 0.056].map((cx, idx) => {
      const collar = new THREE.Mesh(collarGeo, this.materials.shirt);
      collar.position.set(cx, 0.22, 0.138);
      collar.rotation.z = (idx === 0 ? -0.28 : 0.28);
      collar.rotation.y = (idx === 0 ? 0.12 : -0.12);
      this.parts.torso.add(collar);
      return collar;
    });

    // Volumetric 3D Notched Lapels (Crisp 90-degree notch seam with dimensional depth)
    const lapelGeo = new THREE.BoxGeometry(0.082, 0.28, 0.022);
    this.parts.lapels = [-0.098, 0.098].map((lx) => {
      const lapel = new THREE.Mesh(lapelGeo, this.materials.lapel);
      lapel.position.set(lx, 0.09, 0.144);
      lapel.rotation.z = (lx > 0 ? -0.18 : 0.18);
      lapel.rotation.y = (lx > 0 ? -0.06 : 0.06);
      this.parts.torso.add(lapel);
      return lapel;
    });

    // Dual Corporate Suit Buttons
    const buttonGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.008, 10);
    buttonGeo.rotateX(Math.PI / 2);
    this.parts.jacketButtons = [-0.04, -0.14].map((y) => {
      const button = new THREE.Mesh(buttonGeo, this.materials.button);
      button.position.set(0.06, y, 0.146);
      this.parts.torso.add(button);
      return button;
    });

    // 3D Dimensional Silk Tie:
    // Triangular Windsor knot nested snugly beneath shirt collar
    const knotGeo = new THREE.CylinderGeometry(0.038, 0.026, 0.045, 6);
    knotGeo.scale(1.0, 1.0, 0.7);
    const tieKnot = new THREE.Mesh(knotGeo, this.materials.tie);
    tieKnot.position.set(0, 0.20, 0.144);
    this.parts.torso.add(tieKnot);

    // Tapered tie blade with center crease, flowing down to touch belt buckle
    const tieBladeGeo = new THREE.BoxGeometry(0.054, 0.28, 0.014);
    this.parts.tie = new THREE.Mesh(tieBladeGeo, this.materials.tie);
    this.parts.tie.position.set(0, 0.04, 0.142);
    this.parts.torso.add(this.parts.tie);

    // Arrow tip pointing precisely at belt buckle center (The Tie Length Rule!)
    const tieTipGeo = new THREE.ConeGeometry(0.027, 0.042, 4);
    tieTipGeo.rotateZ(Math.PI);
    const tieTip = new THREE.Mesh(tieTipGeo, this.materials.tie);
    tieTip.position.set(0, -0.12, 0.142);
    this.parts.torso.add(tieTip);

    // Tie Clip / Metallic Tie Bar
    const tieBarGeo = new THREE.BoxGeometry(0.044, 0.008, 0.012);
    this.parts.tieBar = new THREE.Mesh(tieBarGeo, this.materials.tieBar);
    this.parts.tieBar.position.set(0, 0.03, 0.152);
    this.parts.torso.add(this.parts.tieBar);

    // Breast Welt Pocket with Presidential-Fold White Silk Pocket Square
    const pocketWeltGeo = new THREE.BoxGeometry(0.062, 0.014, 0.014);
    const pocketWelt = new THREE.Mesh(pocketWeltGeo, this.materials.jacket);
    pocketWelt.position.set(-0.13, 0.135, 0.142);
    this.parts.torso.add(pocketWelt);

    const pocketGeo = new THREE.BoxGeometry(0.052, 0.014, 0.008);
    this.parts.pocketSquare = new THREE.Mesh(pocketGeo, this.materials.pocketSquare);
    this.parts.pocketSquare.position.set(-0.13, 0.146, 0.145);
    this.parts.torso.add(this.parts.pocketSquare);

    // Lapel Pin / Placement Crest Badge
    const pinGeo = new THREE.CylinderGeometry(0.011, 0.011, 0.006, 10);
    pinGeo.rotateX(Math.PI / 2);
    this.parts.lapelPin = new THREE.Mesh(pinGeo, this.materials.lapelPin);
    this.parts.lapelPin.position.set(-0.125, 0.185, 0.158);
    this.parts.torso.add(this.parts.lapelPin);

    // Leather Belt & Metallic Frame Buckle (The Belt & Shoe Rule)
    const beltGeo = new THREE.BoxGeometry(0.406, 0.042, 0.246);
    this.parts.belt = new THREE.Mesh(beltGeo, this.materials.belt);
    this.parts.belt.position.set(0, -0.19, 0);
    this.parts.torso.add(this.parts.belt);

    const buckleGeo = new THREE.BoxGeometry(0.062, 0.050, 0.016);
    this.parts.buckle = new THREE.Mesh(buckleGeo, this.materials.buckle);
    this.parts.buckle.position.set(0, -0.19, 0.135);
    this.parts.torso.add(this.parts.buckle);

    this.root.add(this.parts.torso);

    // 3. Anatomical Arms & Hands (Pivot Limb Groups rooted at Shoulders)
    const buildArmLimb = (isLeft) => {
      const armGroup = new THREE.Group();
      armGroup.position.set(isLeft ? -0.24 : 0.24, 1.18, 0);

      // Upper arm sleeve tapering smoothly toward elbow
      const upperSleeveGeo = new THREE.CylinderGeometry(0.068, 0.058, 0.24, 14);
      const upperSleeve = new THREE.Mesh(upperSleeveGeo, this.materials.jacket);
      upperSleeve.position.set(0, -0.12, 0);
      upperSleeve.castShadow = true;
      armGroup.add(upperSleeve);

      // Forearm sleeve tapering toward wrist
      const foreSleeveGeo = new THREE.CylinderGeometry(0.058, 0.050, 0.22, 14);
      const foreSleeve = new THREE.Mesh(foreSleeveGeo, this.materials.jacket);
      foreSleeve.position.set(0, -0.33, 0);
      foreSleeve.castShadow = true;
      armGroup.add(foreSleeve);

      // 1/4" Exposed Crisp Shirt Cuff (The Golden Sleeve Ratio Rule)
      const cuffGeo = new THREE.CylinderGeometry(0.053, 0.048, 0.038, 14);
      const cuff = new THREE.Mesh(cuffGeo, this.materials.shirt);
      cuff.position.set(0, -0.45, 0);
      armGroup.add(cuff);

      // Metallic Cufflink on outer sleeve
      const cufflinkGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.008, 8);
      cufflinkGeo.rotateZ(Math.PI / 2);
      const cufflink = new THREE.Mesh(cufflinkGeo, this.materials.cufflink);
      cufflink.position.set(isLeft ? -0.052 : 0.052, -0.45, 0);
      armGroup.add(cufflink);

      // Modelled Hand (Palm, Curled Fingers, and Angled Thumb)
      const handGroup = new THREE.Group();
      handGroup.position.set(0, -0.51, 0);

      const palmGeo = new THREE.BoxGeometry(0.042, 0.056, 0.024);
      const palm = new THREE.Mesh(palmGeo, this.materials.skin);
      palm.castShadow = true;
      handGroup.add(palm);

      // Relaxed resting fingers
      const fingersGeo = new THREE.BoxGeometry(0.038, 0.046, 0.018);
      const fingers = new THREE.Mesh(fingersGeo, this.materials.skin);
      fingers.position.set(0, -0.042, 0.002);
      handGroup.add(fingers);

      // Natural resting thumb
      const thumbGeo = new THREE.CylinderGeometry(0.010, 0.008, 0.036, 8);
      thumbGeo.rotateZ(isLeft ? 0.45 : -0.45);
      const thumb = new THREE.Mesh(thumbGeo, this.materials.skin);
      thumb.position.set(isLeft ? 0.024 : -0.024, -0.012, 0.012);
      handGroup.add(thumb);

      armGroup.add(handGroup);

      return { armGroup, upperSleeve, foreSleeve, cuff };
    };

    const leftArmData = buildArmLimb(true);
    this.parts.leftArm = leftArmData.armGroup;
    this.parts.leftUpperSleeve = leftArmData.upperSleeve;
    this.parts.leftForeSleeve = leftArmData.foreSleeve;
    this.parts.leftCuff = leftArmData.cuff;
    this.root.add(this.parts.leftArm);

    const rightArmData = buildArmLimb(false);
    this.parts.rightArm = rightArmData.armGroup;
    this.parts.rightUpperSleeve = rightArmData.upperSleeve;
    this.parts.rightForeSleeve = rightArmData.foreSleeve;
    this.parts.rightCuff = rightArmData.cuff;
    this.root.add(this.parts.rightArm);

    // Luxury Executive Wristwatch on Left Arm
    this._buildWatch();

    // 4. Tailored Formal Trousers & Cap-Toe Oxfords (Pivot Limb Groups rooted at Hips)
    const buildLegLimb = (isLeft) => {
      const legGroup = new THREE.Group();
      legGroup.position.set(isLeft ? -0.115 : 0.115, 0.72, 0);

      // Tailored thigh trousers with crisp front crease
      const thighGeo = new THREE.CylinderGeometry(0.086, 0.076, 0.36, 14);
      const thigh = new THREE.Mesh(thighGeo, this.materials.pants);
      thigh.position.set(0, -0.18, 0);
      thigh.castShadow = true;
      legGroup.add(thigh);

      // Tailored lower leg slacks
      const shinGeo = new THREE.CylinderGeometry(0.076, 0.065, 0.34, 14);
      const shin = new THREE.Mesh(shinGeo, this.materials.pants);
      shin.position.set(0, -0.50, 0);
      shin.castShadow = true;
      legGroup.add(shin);

      // Sculpted Cap-Toe Oxford Shoe
      const shoeGroup = new THREE.Group();
      shoeGroup.position.set(0, -0.68, 0.03);

      // Welt sole (Thin dark welt border)
      const soleGeo = new THREE.BoxGeometry(0.122, 0.018, 0.244);
      const sole = new THREE.Mesh(soleGeo, this.materials.shoeSole);
      sole.position.set(0, 0.009, 0);
      shoeGroup.add(sole);

      // Raised Stacked Leather Heel
      const heelGeo = new THREE.BoxGeometry(0.114, 0.024, 0.074);
      const heel = new THREE.Mesh(heelGeo, this.materials.shoeSole);
      heel.position.set(0, 0.024, -0.078);
      shoeGroup.add(heel);

      // High-Shine Buffed Leather Upper (Instep and vamp)
      const vampGeo = new THREE.BoxGeometry(0.116, 0.068, 0.22);
      const vamp = new THREE.Mesh(vampGeo, this.materials.shoes);
      vamp.position.set(0, 0.046, -0.006);
      vamp.castShadow = true;
      shoeGroup.add(vamp);

      // Distinctive Cap-Toe Stitched Front Cap
      const toeCapGeo = new THREE.BoxGeometry(0.118, 0.048, 0.078);
      const toeCap = new THREE.Mesh(toeCapGeo, this.materials.shoes);
      toeCap.position.set(0, 0.036, 0.082);
      shoeGroup.add(toeCap);

      legGroup.add(shoeGroup);

      return { legGroup, thigh, shin, shoeGroup };
    };

    const leftLegData = buildLegLimb(true);
    this.parts.leftLeg = leftLegData.legGroup;
    this.parts.leftThigh = leftLegData.thigh;
    this.parts.leftShin = leftLegData.shin;
    this.root.add(this.parts.leftLeg);

    const rightLegData = buildLegLimb(false);
    this.parts.rightLeg = rightLegData.legGroup;
    this.parts.rightThigh = rightLegData.thigh;
    this.parts.rightShin = rightLegData.shin;
    this.root.add(this.parts.rightLeg);

    this.setAttire(this.customization.attireStyle);
  }

  /**
   * Anatomically sculpted hairstyles
   */
  _buildHairStyles() {
    const hairRoot = new THREE.Group();
    hairRoot.name = 'HairRoot';
    this.parts.headGroup.add(hairRoot);

    // 1. Executive slick short
    const execGeo = new THREE.SphereGeometry(0.162, 14, 12);
    execGeo.scale(0.95, 0.72, 1.0);
    const execMesh = new THREE.Mesh(execGeo, this.materials.hair);
    execMesh.position.set(0, 0.07, -0.015);
    hairRoot.add(execMesh);

    // 2. Modern clean taper
    const taperGeo = new THREE.SphereGeometry(0.158, 14, 12);
    taperGeo.scale(0.92, 0.78, 0.98);
    const taperMesh = new THREE.Mesh(taperGeo, this.materials.hair);
    taperMesh.position.set(0, 0.08, -0.01);
    taperMesh.visible = false;
    hairRoot.add(taperMesh);

    // 3. Corporate Bob Cut
    const bobGroup = new THREE.Group();
    bobGroup.visible = false;
    const bobTopGeo = new THREE.SphereGeometry(0.165, 14, 12);
    bobTopGeo.scale(0.96, 0.76, 1.02);
    const bobTop = new THREE.Mesh(bobTopGeo, this.materials.hair);
    bobTop.position.set(0, 0.07, -0.01);
    bobGroup.add(bobTop);

    // Side drape locks down to jawline
    const lockGeo = new THREE.CylinderGeometry(0.024, 0.035, 0.16, 8);
    [-0.13, 0.13].forEach((lx) => {
      const lock = new THREE.Mesh(lockGeo, this.materials.hair);
      lock.position.set(lx, -0.01, 0.02);
      bobGroup.add(lock);
    });
    hairRoot.add(bobGroup);

    // 4. Executive Chignon / Tied Bun
    const bunGroup = new THREE.Group();
    bunGroup.visible = false;
    const bunBaseGeo = new THREE.SphereGeometry(0.16, 14, 12);
    bunBaseGeo.scale(0.94, 0.72, 0.98);
    const bunBase = new THREE.Mesh(bunBaseGeo, this.materials.hair);
    bunBase.position.set(0, 0.07, -0.015);
    bunGroup.add(bunBase);

    const bunNodeGeo = new THREE.SphereGeometry(0.065, 10, 8);
    const bunNode = new THREE.Mesh(bunNodeGeo, this.materials.hair);
    bunNode.position.set(0, 0.06, -0.16);
    bunGroup.add(bunNode);
    hairRoot.add(bunGroup);

    this.parts.hairStyles = {
      executive: execMesh,
      taper: taperMesh,
      bob: bobGroup,
      bun: bunGroup
    };
  }

  /**
   * Eyewear / Glasses Frames
   */
  _buildGlasses() {
    const glassesGroup = new THREE.Group();
    glassesGroup.name = 'GlassesGroup';
    glassesGroup.position.set(0, 0.005, 0.14);

    // Rectangular style
    const rectGroup = new THREE.Group();
    rectGroup.name = 'Glasses_Rectangular';

    const rimGeo = new THREE.BoxGeometry(0.046, 0.03, 0.008);
    const leftRim = new THREE.Mesh(rimGeo, this.materials.glasses);
    leftRim.position.set(-0.052, 0, 0);
    rectGroup.add(leftRim);

    const rightRim = new THREE.Mesh(rimGeo, this.materials.glasses);
    rightRim.position.set(0.052, 0, 0);
    rectGroup.add(rightRim);

    const bridgeGeo = new THREE.BoxGeometry(0.024, 0.006, 0.006);
    const bridge = new THREE.Mesh(bridgeGeo, this.materials.glasses);
    bridge.position.set(0, 0.005, 0);
    rectGroup.add(bridge);

    const templeGeo = new THREE.BoxGeometry(0.006, 0.006, 0.12);
    const leftTemple = new THREE.Mesh(templeGeo, this.materials.glasses);
    leftTemple.position.set(-0.076, 0.005, -0.06);
    rectGroup.add(leftTemple);

    const rightTemple = new THREE.Mesh(templeGeo, this.materials.glasses);
    rightTemple.position.set(0.076, 0.005, -0.06);
    rectGroup.add(rightTemple);

    glassesGroup.add(rectGroup);

    // Round titanium style
    const roundGroup = new THREE.Group();
    roundGroup.name = 'Glasses_Round';
    roundGroup.visible = false;
    const torusGeo = new THREE.TorusGeometry(0.02, 0.004, 8, 16);
    const leftRound = new THREE.Mesh(torusGeo, this.materials.glasses);
    leftRound.position.set(-0.052, 0, 0);
    roundGroup.add(leftRound);

    const rightRound = new THREE.Mesh(torusGeo, this.materials.glasses);
    rightRound.position.set(0.052, 0, 0);
    roundGroup.add(rightRound);

    const roundBridge = new THREE.Mesh(bridgeGeo, this.materials.glasses);
    roundBridge.position.set(0, 0.005, 0);
    roundGroup.add(roundBridge);

    const leftRoundTemple = new THREE.Mesh(templeGeo, this.materials.glasses);
    leftRoundTemple.position.set(-0.074, 0.005, -0.06);
    roundGroup.add(leftRoundTemple);

    const rightRoundTemple = new THREE.Mesh(templeGeo, this.materials.glasses);
    rightRoundTemple.position.set(0.074, 0.005, -0.06);
    roundGroup.add(rightRoundTemple);

    glassesGroup.add(roundGroup);

    glassesGroup.visible = false;
    this.parts.glassesGroup = glassesGroup;
    this.parts.glassesRect = rectGroup;
    this.parts.glassesRound = roundGroup;
    this.parts.headGroup.add(glassesGroup);
  }

  /**
   * Wristwatch accessory
   */
  _buildWatch() {
    const watchGroup = new THREE.Group();
    watchGroup.name = 'WatchGroup';
    watchGroup.position.set(0, -0.16, 0);

    const bandGeo = new THREE.CylinderGeometry(0.057, 0.057, 0.035, 12);
    const band = new THREE.Mesh(bandGeo, this.materials.watchBand);
    watchGroup.add(band);

    const faceGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.012, 12);
    faceGeo.rotateX(Math.PI / 2);
    const face = new THREE.Mesh(faceGeo, this.materials.watchFace);
    face.position.set(0, 0, 0.058);
    watchGroup.add(face);

    this.parts.watchGroup = watchGroup;
    this.parts.leftArm.add(watchGroup);
  }

  /**
   * Attire style switcher
   */
  setAttire(style) {
    this.customization.attireStyle = style;

    if (style === 'formal') {
      this.materials.shirt.color.set(this.customization.shirtColor || '#f8fafc');
      this.materials.jacket.color.set(this.customization.jacketColor || '#172b46');
      if (this.materials.lapel) this.materials.lapel.color.set(this.customization.jacketColor || '#172b46');
      this.materials.pants.color.set(this.customization.pantsColor || '#1e293b');
      this.materials.tie.color.set(this.customization.tieColor || '#1e3a5f');
      if (this.parts.tie) this.parts.tie.visible = (this.customization.hasTie !== false);
      if (this.parts.jacketPanels) this.parts.jacketPanels.forEach((part) => { part.visible = true; });
      if (this.parts.lapels) this.parts.lapels.forEach((part) => { part.visible = true; });
      if (this.parts.jacketButtons) this.parts.jacketButtons.forEach((part) => { part.visible = true; });
      if (this.parts.leftUpperSleeve) this.parts.leftUpperSleeve.material = this.materials.jacket;
      if (this.parts.leftForeSleeve) this.parts.leftForeSleeve.material = this.materials.jacket;
      if (this.parts.rightUpperSleeve) this.parts.rightUpperSleeve.material = this.materials.jacket;
      if (this.parts.rightForeSleeve) this.parts.rightForeSleeve.material = this.materials.jacket;
      if (this.parts.leftCuff) this.parts.leftCuff.visible = true;
      if (this.parts.rightCuff) this.parts.rightCuff.visible = true;
      if (this.parts.belt) this.parts.belt.visible = true;
      if (this.parts.buckle) this.parts.buckle.visible = true;
      if (this.parts.pocketSquare) this.parts.pocketSquare.visible = true;
      if (this.parts.tieBar) this.parts.tieBar.visible = (this.customization.hasTie !== false);
      if (this.parts.lapelPin) this.parts.lapelPin.visible = true;
    } else if (style === 'smart_casual') {
      this.materials.shirt.color.set(this.customization.shirtColor || '#0284c7');
      this.materials.pants.color.set(this.customization.pantsColor || '#d4a373');
      if (this.parts.tie) this.parts.tie.visible = false;
      if (this.parts.jacketPanels) this.parts.jacketPanels.forEach((part) => { part.visible = false; });
      if (this.parts.lapels) this.parts.lapels.forEach((part) => { part.visible = false; });
      if (this.parts.jacketButtons) this.parts.jacketButtons.forEach((part) => { part.visible = false; });
      if (this.parts.leftUpperSleeve) this.parts.leftUpperSleeve.material = this.materials.shirt;
      if (this.parts.leftForeSleeve) this.parts.leftForeSleeve.material = this.materials.shirt;
      if (this.parts.rightUpperSleeve) this.parts.rightUpperSleeve.material = this.materials.shirt;
      if (this.parts.rightForeSleeve) this.parts.rightForeSleeve.material = this.materials.shirt;
      if (this.parts.leftCuff) this.parts.leftCuff.visible = false;
      if (this.parts.rightCuff) this.parts.rightCuff.visible = false;
      if (this.parts.belt) this.parts.belt.visible = true;
      if (this.parts.buckle) this.parts.buckle.visible = true;
      if (this.parts.pocketSquare) this.parts.pocketSquare.visible = false;
      if (this.parts.tieBar) this.parts.tieBar.visible = false;
      if (this.parts.lapelPin) this.parts.lapelPin.visible = false;
    } else if (style === 'casual') {
      this.materials.shirt.color.set(this.customization.shirtColor || '#334155');
      this.materials.pants.color.set(this.customization.pantsColor || '#2563eb');
      if (this.parts.tie) this.parts.tie.visible = false;
      if (this.parts.jacketPanels) this.parts.jacketPanels.forEach((part) => { part.visible = false; });
      if (this.parts.lapels) this.parts.lapels.forEach((part) => { part.visible = false; });
      if (this.parts.jacketButtons) this.parts.jacketButtons.forEach((part) => { part.visible = false; });
      if (this.parts.leftUpperSleeve) this.parts.leftUpperSleeve.material = this.materials.shirt;
      if (this.parts.leftForeSleeve) this.parts.leftForeSleeve.material = this.materials.shirt;
      if (this.parts.rightUpperSleeve) this.parts.rightUpperSleeve.material = this.materials.shirt;
      if (this.parts.rightForeSleeve) this.parts.rightForeSleeve.material = this.materials.shirt;
      if (this.parts.leftCuff) this.parts.leftCuff.visible = false;
      if (this.parts.rightCuff) this.parts.rightCuff.visible = false;
      if (this.parts.belt) this.parts.belt.visible = false;
      if (this.parts.buckle) this.parts.buckle.visible = false;
      if (this.parts.pocketSquare) this.parts.pocketSquare.visible = false;
      if (this.parts.tieBar) this.parts.tieBar.visible = false;
      if (this.parts.lapelPin) this.parts.lapelPin.visible = false;
    }
  }

  /**
   * Skin tone palette switcher
   */
  setSkinTone(hex) {
    this.customization.skinTone = hex;
    this.materials.skin.color.set(hex);
  }

  /**
   * Hair Color switcher
   */
  setHairColor(hex) {
    this.customization.hairColor = hex;
    this.materials.hair.color.set(hex);
  }

  /**
   * Hairstyle switcher
   */
  setHairStyle(style) {
    this.customization.hairStyle = style;
    if (this.parts.hairStyles) {
      Object.keys(this.parts.hairStyles).forEach((key) => {
        this.parts.hairStyles[key].visible = (key === style);
      });
    }
  }

  /**
   * Suit Jacket / Blazer color switcher
   */
  setJacketColor(hex) {
    this.customization.jacketColor = hex;
    this.materials.jacket.color.set(hex);
    if (this.materials.lapel) this.materials.lapel.color.set(hex);
  }

  /**
   * Shirt color switcher
   */
  setShirtColor(hex) {
    this.customization.shirtColor = hex;
    this.materials.shirt.color.set(hex);
  }

  /**
   * Trousers color switcher
   */
  setPantsColor(hex) {
    this.customization.pantsColor = hex;
    this.materials.pants.color.set(hex);
  }

  /**
   * Tie color switcher
   */
  setTieColor(hex) {
    this.customization.tieColor = hex;
    this.materials.tie.color.set(hex);
  }

  /**
   * Tie visibility switcher
   */
  setTieVisibility(visible) {
    this.customization.hasTie = visible;
    if (this.parts.tie) {
      this.parts.tie.visible = (visible && this.customization.attireStyle === 'formal');
    }
    if (this.parts.tieBar) {
      this.parts.tieBar.visible = (visible && this.customization.attireStyle === 'formal');
    }
  }

  /**
   * Shoes color switcher (auto-harmonizes Belt color)
   */
  setShoesColor(hex) {
    this.customization.shoesColor = hex;
    this.materials.shoes.color.set(hex);
    if (this.materials.belt) {
      this.materials.belt.color.set(hex);
    }
  }

  /**
   * Eyewear / Glasses switcher
   */
  setGlasses(type, colorHex = '#0f172a') {
    this.customization.glasses = type;
    this.customization.glassesColor = colorHex;
    if (!this.parts.glassesGroup) return;

    if (type === 'none') {
      this.parts.glassesGroup.visible = false;
    } else if (type === 'rectangular') {
      this.parts.glassesGroup.visible = true;
      this.parts.glassesRect.visible = true;
      this.parts.glassesRound.visible = false;
      this.materials.glasses.color.set(colorHex);
      this.materials.glasses.metalness = 0.5;
    } else if (type === 'round') {
      this.parts.glassesGroup.visible = true;
      this.parts.glassesRect.visible = false;
      this.parts.glassesRound.visible = true;
      this.materials.glasses.color.set(colorHex);
      this.materials.glasses.metalness = 0.7;
    } else if (type === 'gold_rim') {
      this.parts.glassesGroup.visible = true;
      this.parts.glassesRect.visible = false;
      this.parts.glassesRound.visible = true;
      this.materials.glasses.color.setHex(0xd97706);
      this.materials.glasses.metalness = 0.95;
      this.materials.glasses.roughness = 0.15;
    }
  }

  /**
   * Wristwatch switcher
   */
  setWatch(type) {
    this.customization.watch = type;
    if (!this.parts.watchGroup) return;

    if (type === 'none') {
      this.parts.watchGroup.visible = false;
    } else if (type === 'steel') {
      this.parts.watchGroup.visible = true;
      this.materials.watchBand.color.setHex(0x94a3b8);
      this.materials.watchBand.metalness = 0.9;
      this.materials.watchBand.roughness = 0.2;
    } else if (type === 'gold') {
      this.parts.watchGroup.visible = true;
      this.materials.watchBand.color.setHex(0xeab308);
      this.materials.watchBand.metalness = 0.95;
      this.materials.watchBand.roughness = 0.15;
    } else if (type === 'leather') {
      this.parts.watchGroup.visible = true;
      this.materials.watchBand.color.setHex(0x78350f);
      this.materials.watchBand.metalness = 0.1;
      this.materials.watchBand.roughness = 0.7;
    }
  }

  /**
   * Gender / Silhouette switcher
   */
  setGender(gender) {
    this.customization.gender = gender;
    if (gender === 'female') {
      if (this.parts.torso) this.parts.torso.scale.set(0.92, 1.0, 0.92);
      if (this.parts.leftArm) this.parts.leftArm.position.x = -0.22;
      if (this.parts.rightArm) this.parts.rightArm.position.x = 0.22;
      if (this.customization.hairStyle === 'executive') {
        this.setHairStyle('bob');
      }
    } else {
      if (this.parts.torso) this.parts.torso.scale.set(1.0, 1.0, 1.0);
      if (this.parts.leftArm) this.parts.leftArm.position.x = -0.24;
      if (this.parts.rightArm) this.parts.rightArm.position.x = 0.24;
      if (this.customization.hairStyle === 'bob') {
        this.setHairStyle('executive');
      }
    }
  }

  /**
   * 1-Click Career Preset Application
   */
  applyPreset(presetKey) {
    const presets = {
      investment_banking: {
        attireStyle: 'formal',
        jacketColor: '#172b46',
        shirtColor: '#ffffff',
        pantsColor: '#172b46',
        tieColor: '#881337',
        hasTie: true,
        shoesColor: '#09090b',
        watch: 'steel',
        glasses: 'none',
        score: 100,
        label: 'Investment Banking & BFSI Tier-1',
        ruleSummary: 'Full navy two-piece suit, crisp white broadcloth, power burgundy tie, cap-toe black oxfords.'
      },
      tech_mnc: {
        attireStyle: 'formal',
        jacketColor: '#334155',
        shirtColor: '#e0f2fe',
        pantsColor: '#1e293b',
        tieColor: '#1e3a5f',
        hasTie: true,
        shoesColor: '#09090b',
        watch: 'steel',
        glasses: 'rectangular',
        score: 98,
        label: 'Big Tech MNC Technical Mock',
        ruleSummary: 'Slate charcoal tailored jacket, French sky blue shirt, sapphire silk tie, titanium executive frames.'
      },
      startup_smart: {
        attireStyle: 'smart_casual',
        jacketColor: '#172b46',
        shirtColor: '#0284c7',
        pantsColor: '#d4a373',
        tieColor: '#1e3a5f',
        hasTie: false,
        shoesColor: '#451a03',
        watch: 'leather',
        glasses: 'round',
        score: 92,
        label: 'Product Startup Culture Round',
        ruleSummary: 'Cerulean knit polo, tailored beige chinos, antique walnut derby leather shoes, smart watch band.'
      },
      campus_day1: {
        attireStyle: 'formal',
        jacketColor: '#18181b',
        shirtColor: '#ffffff',
        pantsColor: '#18181b',
        tieColor: '#1e3a8a',
        hasTie: true,
        shoesColor: '#09090b',
        watch: 'steel',
        glasses: 'none',
        score: 96,
        label: 'Day-1 Campus Placement Drive',
        ruleSummary: 'Classic obsidian formal suit, high-contrast white shirt, corporate royal blue tie, mirror-shined shoes.'
      }
    };

    const p = presets[presetKey];
    if (!p) return null;

    this.setAttire(p.attireStyle);
    this.setJacketColor(p.jacketColor);
    this.setShirtColor(p.shirtColor);
    this.setPantsColor(p.pantsColor);
    this.setTieColor(p.tieColor);
    this.setTieVisibility(p.hasTie);
    this.setShoesColor(p.shoesColor);
    this.setWatch(p.watch);
    this.setGlasses(p.glasses);

    return p;
  }

  /**
   * Smooth Turntable Rotation Controls
   */
  rotateTurntable(deltaY) {
    this.root.rotation.y += deltaY;
  }

  resetTurntable() {
    this.root.rotation.y = 0;
  }

  /**
   * Real-time Employability Attire Audit
   */
  getAttireAudit() {
    const isFormal = (this.customization.attireStyle === 'formal');
    const hasTie = this.customization.hasTie && isFormal;
    const isDarkSuit = ['#172b46', '#18181b', '#334155', '#1e293b'].includes(this.customization.jacketColor);
    const isLightShirt = ['#ffffff', '#f8fafc', '#e0f2fe', '#f3e8ff', '#fef3c7'].includes(this.customization.shirtColor);

    let score = isFormal ? 90 : 80;
    if (isFormal && hasTie) score += 6;
    if (isDarkSuit && isLightShirt) score += 4;

    const checks = [
      { name: 'Contrast Ratio', passed: (isDarkSuit && isLightShirt), desc: 'High-contrast dark jacket & white/light shirt ensures optimal corporate visibility.' },
      { name: 'Tie & Collar Alignment', passed: hasTie || !isFormal, desc: hasTie ? 'Silk tie anchored cleanly at collar tip.' : 'Open collar smart casual styling.' },
      { name: 'Leather Tone Harmony', passed: true, desc: 'Belt and footwear leather finishes harmonized.' },
      { name: 'The Sleeve Ratio Rule', passed: true, desc: '1/4" shirt cuff exposed beyond blazer sleeve.' }
    ];

    return {
      score: Math.min(score, 100),
      readiness: score >= 95 ? 'OPTIMAL CORPORATE READY' : (score >= 85 ? 'WORKPLACE ACCEPTABLE' : 'CASUAL STYLING'),
      checks
    };
  }

  /**
   * Directly set camera mode
   */
  setCameraMode(mode) {
    this.cameraMode = mode;
    this.root.visible = (mode !== 'first_person');

    if (mode === 'wardrobe') {
      this.camera.position.set(0, 1.35, 2.7);
      this.camera.lookAt(0, 1.05, 0);
    } else if (mode === 'interview') {
      this.camera.position.set(0.65, 1.42, 0.2);
      this.camera.lookAt(0, 1.42, -2.65);
    } else if (mode === 'third_person') {
      const idealOffset = this.thirdPersonOffset.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), this.root.rotation.y);
      this.camera.position.copy(this.root.position).add(idealOffset);
      this.camera.lookAt(this.root.position.clone().add(new THREE.Vector3(0, 1.35, 0)));
    }
  }

  /**
   * Cycle camera modes: 'interview' (OTS) -> 'first_person' -> 'third_person'
   */
  toggleCameraMode() {
    if (this.cameraMode === 'interview') {
      this.cameraMode = 'first_person';
      this.root.visible = false;
    } else if (this.cameraMode === 'first_person') {
      this.cameraMode = 'third_person';
      this.root.visible = true;
    } else if (this.cameraMode === 'third_person') {
      this.cameraMode = 'wardrobe';
      this.root.visible = true;
    } else {
      this.cameraMode = 'interview';
      this.root.visible = true;
    }
    return this.cameraMode;
  }

  /**
   * Keyboard and mobile input
   */
  _setupInputListeners() {
    this._keys = {};
    this.inputVector = new THREE.Vector2();

    window.addEventListener('keydown', (e) => {
      this._keys[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this._keys[e.code] = false;
    });

    const bindDpad = (id, x, y) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      const start = () => this.inputVector.set(x, y);
      const stop = () => this.inputVector.set(0, 0);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); start(); });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); stop(); });
      btn.addEventListener('mousedown', start);
      btn.addEventListener('mouseup', stop);
      btn.addEventListener('mouseleave', stop);
    };

    bindDpad('dpad-up', 0, -1);
    bindDpad('dpad-down', 0, 1);
    bindDpad('dpad-left', -1, 0);
    bindDpad('dpad-right', 1, 0);
  }

  /**
   * Position avatar in scene
   */
  teleport(x, y, z, rotationY = 0) {
    this.root.position.set(x, y, z);
    this.root.rotation.y = rotationY;
    this.physics.velocity.set(0, 0, 0);

    // Reset camera framing based on current camera mode
    if (this.cameraMode === 'wardrobe') {
      this.root.visible = true;
      this.camera.position.set(0, 1.35, 2.7);
      this.camera.lookAt(0, 1.05, 0);
    } else if (this.cameraMode === 'interview') {
      this.root.visible = true;
      this.camera.position.set(0.65, 1.42, 0.2);
      this.camera.lookAt(0, 1.42, -2.65);
    } else if (this.cameraMode === 'first_person') {
      this.root.visible = false;
    } else {
      this.root.visible = true;
    }
  }

  /**
   * Per-frame update
   */
  update(delta) {
    // In wardrobe mode, handle smooth 360-degree turntable avatar rotation with A/D or arrows
    if (this.cameraMode === 'wardrobe') {
      let rotInput = 0;
      if (this._keys['KeyA'] || this._keys['ArrowLeft']) rotInput -= 1;
      if (this._keys['KeyD'] || this._keys['ArrowRight']) rotInput += 1;
      if (this.inputVector.x !== 0) rotInput += this.inputVector.x;

      if (rotInput !== 0) {
        this.root.rotation.y += rotInput * delta * 2.5;
      }

      this._updateCamera(delta);
      return;
    }

    // 1. Gather directional input
    let moveX = 0;
    let moveZ = 0;

    if (this._keys['KeyW'] || this._keys['ArrowUp']) moveZ -= 1;
    if (this._keys['KeyS'] || this._keys['ArrowDown']) moveZ += 1;
    if (this._keys['KeyA'] || this._keys['ArrowLeft']) moveX -= 1;
    if (this._keys['KeyD'] || this._keys['ArrowRight']) moveX += 1;

    if (this.inputVector.lengthSq() > 0) {
      moveX = this.inputVector.x;
      moveZ = this.inputVector.y;
    }

    const inputDir = new THREE.Vector2(moveX, moveZ);
    if (inputDir.lengthSq() > 0) {
      inputDir.normalize();
      if (this.cameraMode === 'interview') {
        this.cameraMode = 'third_person';
      }
    }

    // Physical Kinematic Integration (acceleration, friction, collision slide)
    const kinematic = this.physics.updateKinematics(this.root.position, inputDir, delta);
    this.isWalking = kinematic.isMoving;

    if (this.isWalking && (Math.abs(this.physics.velocity.x) > 0.05 || Math.abs(this.physics.velocity.z) > 0.05)) {
      const targetRotation = Math.atan2(this.physics.velocity.x, this.physics.velocity.z);
      this.root.rotation.y = THREE.MathUtils.lerp(this.root.rotation.y, targetRotation, delta * this.rotationSpeed);

      this.animTime += delta * 10 * (kinematic.speed / 3.0);
      const legAngle = Math.sin(this.animTime) * 0.42;
      this.parts.leftLeg.rotation.x = legAngle;
      this.parts.rightLeg.rotation.x = -legAngle;
      this.parts.leftArm.rotation.x = -legAngle * 0.6;
      this.parts.rightArm.rotation.x = legAngle * 0.6;
    } else {
      this.parts.leftLeg.rotation.x *= 0.85;
      this.parts.rightLeg.rotation.x *= 0.85;
      this.parts.leftArm.rotation.x *= 0.85;
      this.parts.rightArm.rotation.x *= 0.85;

      // Realistic Candidate Micro-Breathing Idle Animation
      this.animTime += delta;
      const breath = Math.sin(this.animTime * 2.2) * 0.0035;
      if (this.parts.torso) this.parts.torso.position.y = 0.96 + breath;
      if (this.parts.headGroup) this.parts.headGroup.position.y = 1.5 + breath * 0.7;
    }

    // 2. Camera Update
    this._updateCamera(delta);
  }

  /**
   * Set dynamic camera zoom / inspection focus in wardrobe studio
   * @param {'full' | 'face' | 'torso' | 'shoes'} focus
   */
  setWardrobeFocus(focus) {
    this.wardrobeFocus = focus;
  }

  /**
   * Smooth, cinematic camera updates
   */
  _updateCamera(delta) {
    if (this.cameraMode === 'wardrobe') {
      let targetPos = new THREE.Vector3(0, 1.35, 2.7);
      let lookTarget = new THREE.Vector3(0, 1.05, 0);

      if (this.wardrobeFocus === 'face') {
        targetPos.set(0, 1.54, 0.95);
        lookTarget.set(0, 1.52, 0);
      } else if (this.wardrobeFocus === 'torso') {
        targetPos.set(0, 1.15, 1.45);
        lookTarget.set(0, 1.02, 0);
      } else if (this.wardrobeFocus === 'shoes') {
        targetPos.set(0, 0.42, 1.35);
        lookTarget.set(0, 0.16, 0);
      }

      this.camera.position.lerp(targetPos, delta * 6.0);
      this.camera.lookAt(lookTarget);
    } else if (this.cameraMode === 'interview') {
      // Cinematic Over-The-Shoulder (OTS) Framing:
      // Slightly to the right of candidate, looking directly across the desk at the interviewer!
      const targetPos = new THREE.Vector3(0.55, 1.45, 0.15);
      this.camera.position.lerp(targetPos, delta * 4.0);

      const lookTarget = new THREE.Vector3(0, 1.45, -2.65);
      this.camera.lookAt(lookTarget);
    } else if (this.cameraMode === 'first_person') {
      // Direct eyeline across desk
      const eyePos = this.root.position.clone().add(new THREE.Vector3(0, 1.55, 0.05));
      this.camera.position.copy(eyePos);

      const lookDir = new THREE.Vector3(0, 0, -4).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.root.rotation.y);
      this.camera.lookAt(eyePos.clone().add(lookDir));
    } else {
      // Third-Person Smooth Follow
      const idealOffset = this.thirdPersonOffset.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), this.root.rotation.y);
      const idealPos = this.root.position.clone().add(idealOffset);

      this.camera.position.lerp(idealPos, delta * 5.0);
      const lookTarget = this.root.position.clone().add(new THREE.Vector3(0, 1.35, 0));
      this.camera.lookAt(lookTarget);
    }
  }

  /**
   * Disposal
   */
  destroy() {
    this.scene.remove(this.root);
  }
}
