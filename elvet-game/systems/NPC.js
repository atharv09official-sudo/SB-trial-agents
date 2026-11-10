/**
 * ELiVET Game Engine — NPC System (Anatomically Proportioned Business Executive)
 * Features tailored blazer, lapels, silk tie, cuffs, natural seated pose,
 * and emotive 3D-to-2D projected dialogue HUD.
 */

import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

export const NPC_STATES = {
  IDLE: 'IDLE',
  REACT_POSITIVE: 'REACT_POSITIVE',
  REACT_NEGATIVE: 'REACT_NEGATIVE'
};

export class NPC {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {Object} options
   */
  constructor(scene, camera, options = {}) {
    this.scene = scene;
    this.camera = camera;
    this.name = options.name || 'Vikram Malhotra';
    this.role = options.role || 'Senior Technical Director';

    // State machine
    this.state = NPC_STATES.IDLE;
    this.stateTimer = 0;

    // Root NPC group
    this.root = new THREE.Group();
    this.root.name = `NPC_${this.name}`;
    this.scene.add(this.root);

    // Mesh references for procedural gestures
    this.parts = {};
    this.speechBubbleEl = document.getElementById('npc-speech-bubble');
    this.speechTextEl = document.getElementById('npc-speech-text');

    this._screenPos = new THREE.Vector3();
    this._buildRealisticNPCMesh();
  }

  /**
   * Anatomically sculpted business executive in professional tailored business suit
   */
  _buildRealisticNPCMesh() {
    const isFemale = this.name.toLowerCase().includes('priya') || this.name.toLowerCase().includes('aditi');

    // High-definition Canvas procedural textures
    const suitTexture = TextureGenerator.createSuitWoolTexture(isFemale ? '#18181b' : '#1e3a5f');
    const shirtTexture = TextureGenerator.createShirtCottonTexture(isFemale ? '#f8fafc' : '#ffffff');
    const tieTexture = TextureGenerator.createSilkTieTexture('#991b1b');
    const skinTexture = TextureGenerator.createSkinTexture(isFemale ? '#d49b6a' : '#c68642');

    const skinMat = new THREE.MeshStandardMaterial({
      color: isFemale ? 0xd49b6a : 0xc68642, // Warm refined skin tone
      map: skinTexture,
      roughness: 0.58,
      metalness: 0.04
    });

    const suitMat = new THREE.MeshStandardMaterial({
      color: isFemale ? 0x18181b : 0x1e3a5f, // Priya: obsidian tailored blazer; Vikram: executive navy
      map: suitTexture,
      roughness: 0.52,
      metalness: 0.07
    });

    const shirtMat = new THREE.MeshStandardMaterial({
      color: isFemale ? 0xf8fafc : 0xffffff,
      map: shirtTexture,
      roughness: 0.38
    });

    const tieMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b, // Deep burgundy silk tie
      map: tieTexture,
      roughness: 0.32,
      metalness: 0.22
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x18181b, // Natural dark espresso hair
      roughness: 0.82
    });

    // 1. Head & Neck
    this.parts.headGroup = new THREE.Group();
    this.parts.headGroup.position.set(0, 1.48, -0.05);

    // Cranium
    const headGeo = new THREE.SphereGeometry(isFemale ? 0.145 : 0.158, 20, 16);
    headGeo.scale(0.90, 1.06, 0.96);
    this.parts.head = new THREE.Mesh(headGeo, skinMat);
    this.parts.head.castShadow = true;
    this.parts.headGroup.add(this.parts.head);

    // Sculpted Chin & Defined Jawline
    const chinGeo = new THREE.SphereGeometry(isFemale ? 0.035 : 0.042, 12, 10);
    chinGeo.scale(1.1, 0.85, 1.0);
    const chin = new THREE.Mesh(chinGeo, skinMat);
    chin.position.set(0, isFemale ? -0.072 : -0.078, 0.12);
    this.parts.headGroup.add(chin);

    // Sculpted Human Nose (Tapered Bridge and Rounded Tip)
    const noseBridgeGeo = new THREE.CylinderGeometry(0.008, 0.013, 0.042, 8);
    const noseBridge = new THREE.Mesh(noseBridgeGeo, skinMat);
    noseBridge.position.set(0, 0.008, 0.148);
    noseBridge.rotation.x = -0.22;
    this.parts.headGroup.add(noseBridge);

    const noseTipGeo = new THREE.SphereGeometry(0.012, 10, 8);
    noseTipGeo.scale(1.1, 0.85, 1.0);
    const noseTip = new THREE.Mesh(noseTipGeo, skinMat);
    noseTip.position.set(0, -0.014, 0.155);
    this.parts.headGroup.add(noseTip);

    // Sculpted Natural Lips (Warm Terracotta Rose tone)
    const lipMat = new THREE.MeshStandardMaterial({
      color: isFemale ? 0xc25b6a : 0xaa4f4f,
      roughness: 0.44,
      metalness: 0.05
    });

    // Upper Lip
    const upperLipGeo = new THREE.BoxGeometry(isFemale ? 0.036 : 0.040, 0.008, 0.014);
    const upperLip = new THREE.Mesh(upperLipGeo, lipMat);
    upperLip.position.set(0, -0.040, 0.142);
    this.parts.headGroup.add(upperLip);

    // Lower Lip
    const lowerLipGeo = new THREE.CylinderGeometry(0.007, 0.007, isFemale ? 0.030 : 0.034, 10);
    lowerLipGeo.rotateZ(Math.PI / 2);
    const lowerLip = new THREE.Mesh(lowerLipGeo, lipMat);
    lowerLip.position.set(0, -0.050, 0.140);
    this.parts.headGroup.add(lowerLip);

    // Almond Corporate Eyes with Eyelid Hood & Specular Highlight
    const eyeWhiteGeo = new THREE.SphereGeometry(0.015, 12, 10);
    eyeWhiteGeo.scale(1.22, 0.74, 0.8);
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xfafafa });

    const eyeIrisGeo = new THREE.SphereGeometry(0.010, 10, 8);
    const eyeIrisMat = new THREE.MeshBasicMaterial({ color: 0x1a120c });

    const eyeSpecularGeo = new THREE.SphereGeometry(0.0032, 6, 6);
    const eyeSpecularMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const eyeSpacing = isFemale ? 0.048 : 0.052;
    [-eyeSpacing, eyeSpacing].forEach((x) => {
      // White sclera
      const white = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
      white.position.set(x, 0.015, 0.136);
      this.parts.headGroup.add(white);

      // Iris
      const iris = new THREE.Mesh(eyeIrisGeo, eyeIrisMat);
      iris.position.set(x, 0.015, 0.146);
      this.parts.headGroup.add(iris);

      // Specular Reflection
      const spec = new THREE.Mesh(eyeSpecularGeo, eyeSpecularMat);
      spec.position.set(x + 0.003, 0.018, 0.154);
      this.parts.headGroup.add(spec);

      // Refined Eyebrow
      const browGeo = new THREE.BoxGeometry(0.042, 0.007, 0.012);
      const brow = new THREE.Mesh(browGeo, hairMat);
      brow.position.set(x, 0.038, 0.143);
      brow.rotation.z = x > 0 ? -0.12 : 0.12;
      this.parts.headGroup.add(brow);
    });

    // Ears
    const earGeo = new THREE.CylinderGeometry(0.022, 0.016, 0.044, 8);
    earGeo.scale(0.4, 1.0, 0.8);
    [-0.134, 0.134].forEach((ex) => {
      const ear = new THREE.Mesh(earGeo, skinMat);
      ear.position.set(ex, 0.005, -0.015);
      this.parts.headGroup.add(ear);
    });

    // Neck
    const neckGeo = new THREE.CylinderGeometry(isFemale ? 0.058 : 0.068, isFemale ? 0.068 : 0.078, 0.13, 14);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.y = -0.11;
    this.parts.headGroup.add(neck);

    // Hairstyle sculpt
    if (isFemale) {
      // Elegant Corporate Bob / Updo for Priya Sen / Aditi
      const hairTopGeo = new THREE.SphereGeometry(0.156, 18, 14);
      hairTopGeo.scale(0.96, 0.78, 1.02);
      const hairTop = new THREE.Mesh(hairTopGeo, hairMat);
      hairTop.position.set(0, 0.065, -0.01);
      this.parts.headGroup.add(hairTop);

      const hairSideGeo = new THREE.CylinderGeometry(0.028, 0.038, 0.18, 8);
      [-0.125, 0.125].forEach((hx) => {
        const sideHair = new THREE.Mesh(hairSideGeo, hairMat);
        sideHair.position.set(hx, -0.015, 0.01);
        this.parts.headGroup.add(sideHair);
      });
    } else {
      // Professional Side Parting for Vikram Malhotra
      const hairGeo = new THREE.SphereGeometry(0.165, 18, 14);
      hairGeo.scale(0.94, 0.75, 1.0);
      const hair = new THREE.Mesh(hairGeo, hairMat);
      hair.position.set(0, 0.07, -0.02);
      this.parts.headGroup.add(hair);

      // Professional Titanium Wire Eyeglasses for Vikram
      const glassesGroup = new THREE.Group();
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x09090b, metalness: 0.9, roughness: 0.1 });
      const lensGeo = new THREE.BoxGeometry(0.08, 0.046, 0.008);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.45
      });

      [-0.052, 0.052].forEach((gx) => {
        const lens = new THREE.Mesh(lensGeo, lensMat);
        lens.position.set(gx, 0.02, 0.142);
        glassesGroup.add(lens);
      });

      const bridgeGeo = new THREE.BoxGeometry(0.034, 0.008, 0.008);
      const bridge = new THREE.Mesh(bridgeGeo, frameMat);
      bridge.position.set(0, 0.024, 0.143);
      glassesGroup.add(bridge);
      this.parts.headGroup.add(glassesGroup);
    }

    this.root.add(this.parts.headGroup);

    // 2. Torso (Suit Jacket + Shirt + Tie/Blouse)
    this.parts.torso = new THREE.Group();
    this.parts.torso.position.set(0, 0.92, -0.05);

    const chestGeo = new THREE.BoxGeometry(isFemale ? 0.42 : 0.48, 0.52, 0.28);
    const chest = new THREE.Mesh(chestGeo, suitMat);
    chest.castShadow = true;
    this.parts.torso.add(chest);

    // Shoulder Caps connecting torso directly to arms (ZERO GAP!)
    const shoulderGeo = new THREE.SphereGeometry(0.082, 14, 12);
    shoulderGeo.scale(1.15, 0.90, 1.05);
    const shoulderX = isFemale ? 0.22 : 0.25;
    [-shoulderX, shoulderX].forEach((sx) => {
      const cap = new THREE.Mesh(shoulderGeo, suitMat);
      cap.position.set(sx, 0.21, 0);
      cap.castShadow = true;
      this.parts.torso.add(cap);
    });

    // White Shirt / Silk Blouse Inset
    const shirtGeo = new THREE.BoxGeometry(0.18, 0.32, 0.02);
    const shirt = new THREE.Mesh(shirtGeo, shirtMat);
    shirt.position.set(0, 0.08, 0.141);
    this.parts.torso.add(shirt);

    if (!isFemale) {
      // Silk Tie for Vikram
      const tieGeo = new THREE.BoxGeometry(0.062, 0.30, 0.016);
      const tie = new THREE.Mesh(tieGeo, tieMat);
      tie.position.set(0, 0.05, 0.148);
      this.parts.torso.add(tie);

      const knotGeo = new THREE.CylinderGeometry(0.036, 0.024, 0.042, 6);
      knotGeo.scale(1.0, 1.0, 0.7);
      const knot = new THREE.Mesh(knotGeo, tieMat);
      knot.position.set(0, 0.18, 0.15);
      this.parts.torso.add(knot);
    } else {
      // Elegant gold chain & pendant for female consultant
      const pendantMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.95, roughness: 0.15 });
      const pendantGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.008, 12);
      pendantGeo.rotateX(Math.PI / 2);
      const pendant = new THREE.Mesh(pendantGeo, pendantMat);
      pendant.position.set(0, 0.12, 0.146);
      this.parts.torso.add(pendant);
    }

    // Suit Lapels (Notched Collar)
    const lapelGeo = new THREE.BoxGeometry(0.078, 0.34, 0.022);
    [-0.10, 0.10].forEach((lx) => {
      const lapel = new THREE.Mesh(lapelGeo, suitMat);
      lapel.position.set(lx, 0.08, 0.146);
      lapel.rotation.z = lx > 0 ? -0.16 : 0.16;
      this.parts.torso.add(lapel);
    });

    this.root.add(this.parts.torso);

    // 3. Arms (Connected seamlessly at shoulders, resting forward on desk)
    const armX = isFemale ? 0.24 : 0.27;
    const armGeo = new THREE.CylinderGeometry(0.062, 0.055, 0.36, 12);

    // Left Arm
    this.parts.leftArm = new THREE.Mesh(armGeo, suitMat);
    this.parts.leftArm.position.set(-armX, 1.05, 0.02);
    this.parts.leftArm.rotation.x = 0.55;
    this.parts.leftArm.rotation.z = 0.08;
    this.root.add(this.parts.leftArm);

    // Right Arm
    this.parts.rightArm = new THREE.Mesh(armGeo, suitMat);
    this.parts.rightArm.position.set(armX, 1.05, 0.02);
    this.parts.rightArm.rotation.x = 0.55;
    this.parts.rightArm.rotation.z = -0.08;
    this.root.add(this.parts.rightArm);

    // Forearms resting near desk surface
    const forearmGeo = new THREE.CylinderGeometry(0.052, 0.046, 0.32, 12);
    const leftForearm = new THREE.Mesh(forearmGeo, suitMat);
    leftForearm.position.set(-armX * 0.85, 0.88, 0.28);
    leftForearm.rotation.x = 1.35;
    leftForearm.rotation.y = 0.22;
    this.root.add(leftForearm);

    const rightForearm = new THREE.Mesh(forearmGeo, suitMat);
    rightForearm.position.set(armX * 0.85, 0.88, 0.28);
    rightForearm.rotation.x = 1.35;
    rightForearm.rotation.y = -0.22;
    this.root.add(rightForearm);

    // Hands with Fingers resting on desk
    const buildNPCHand = (isLeft) => {
      const hGroup = new THREE.Group();
      hGroup.position.set(isLeft ? -armX * 0.82 : armX * 0.82, 0.84, 0.44);

      const palmGeo = new THREE.BoxGeometry(0.075, 0.038, 0.09);
      const palm = new THREE.Mesh(palmGeo, skinMat);
      hGroup.add(palm);

      const fingerGeo = new THREE.BoxGeometry(0.068, 0.028, 0.04);
      const fingers = new THREE.Mesh(fingerGeo, skinMat);
      fingers.position.set(0, -0.004, 0.055);
      hGroup.add(fingers);

      return hGroup;
    };

    const leftHand = buildNPCHand(true);
    this.root.add(leftHand);

    const rightHand = buildNPCHand(false);
    this.root.add(rightHand);

    // 4. Seated Legs (Bent at knees into executive chair)
    const thighGeo = new THREE.BoxGeometry(0.18, 0.16, 0.44);
    const shinGeo = new THREE.BoxGeometry(0.16, 0.46, 0.16);
    const shoeGeo = new THREE.BoxGeometry(0.14, 0.09, 0.24);
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.3, metalness: 0.6 });

    [-0.14, 0.14].forEach((lx) => {
      // Upper leg (horizontal in chair)
      const thigh = new THREE.Mesh(thighGeo, suitMat);
      thigh.position.set(lx, 0.55, 0.18);
      this.root.add(thigh);

      // Lower leg (vertical down to floor)
      const shin = new THREE.Mesh(shinGeo, suitMat);
      shin.position.set(lx, 0.28, 0.38);
      this.root.add(shin);

      // Oxford shoe
      const shoe = new THREE.Mesh(shoeGeo, shoeMat);
      shoe.position.set(lx, 0.05, 0.42);
      this.root.add(shoe);
    });
  }

  /**
   * Set NPC world position and rotation
   */
  setPosition(x, y, z, rotationY = 0) {
    this.root.position.set(x, y, z);
    this.root.rotation.y = rotationY;
  }

  /**
   * Transition state and trigger gesture
   */
  setState(newState, dialogue = null) {
    this.state = newState;
    this.stateTimer = 0;

    if (dialogue) {
      this.say(dialogue);
    }
  }

  /**
   * Display floating AR speech caption projected from head
   */
  say(text, durationMs = 5000) {
    if (!this.speechBubbleEl || !this.speechTextEl) return;

    this.speechTextEl.textContent = text;
    this.speechBubbleEl.classList.add('visible');

    if (this._bubbleTimeout) clearTimeout(this._bubbleTimeout);
    this._bubbleTimeout = setTimeout(() => {
      this.speechBubbleEl.classList.remove('visible');
    }, durationMs);
  }

  /**
   * Universal reaction trigger matching AIBridge output
   */
  react(reaction, dialogue) {
    if (reaction === 'REACT_POSITIVE') {
      this.setState(NPC_STATES.REACT_POSITIVE, dialogue || 'Strong response.');
    } else if (reaction === 'REACT_NEGATIVE') {
      this.setState(NPC_STATES.REACT_NEGATIVE, dialogue || 'Needs improvement.');
    } else {
      this.setState(NPC_STATES.IDLE, dialogue || 'Understood.');
    }
  }

  /**
   * React to score evaluation:
   * Score >= 7: Positive nod + approving posture
   * Score < 4: Negative head shake + critical posture
   */
  reactToScore(score, feedbackText) {
    if (score >= 7) {
      this.setState(NPC_STATES.REACT_POSITIVE, `Strong answer. ${feedbackText}`);
    } else if (score < 4) {
      this.setState(NPC_STATES.REACT_NEGATIVE, `Note this point: ${feedbackText}`);
    } else {
      this.setState(NPC_STATES.IDLE, feedbackText);
    }
  }

  /**
   * Update gesture animations and project 3D head position to screen coordinates
   */
  update(delta) {
    this.stateTimer += delta;

    // 1. Gesture State Machine
    if (this.state === NPC_STATES.REACT_POSITIVE) {
      // Natural affirmative nod
      const nod = Math.sin(this.stateTimer * 5.5) * 0.12;
      this.parts.headGroup.rotation.x = nod;
      this.parts.headGroup.rotation.y = 0;
      this.parts.torso.rotation.x = -0.04;

      if (this.stateTimer > 3.0) {
        this.setState(NPC_STATES.IDLE);
      }
    } else if (this.state === NPC_STATES.REACT_NEGATIVE) {
      // Disapproving slow head shake
      const shake = Math.sin(this.stateTimer * 4.5) * 0.16;
      this.parts.headGroup.rotation.y = shake;
      this.parts.headGroup.rotation.x = 0.05;
      this.parts.torso.rotation.x = 0.03;

      if (this.stateTimer > 3.0) {
        this.setState(NPC_STATES.IDLE);
      }
    } else {
      // IDLE breathing subtly
      const breath = Math.sin(this.stateTimer * 1.6) * 0.02;
      this.parts.headGroup.rotation.x = breath;
      this.parts.headGroup.rotation.y = Math.sin(this.stateTimer * 0.4) * 0.03;
      this.parts.torso.rotation.x = 0;
    }

    // 2. Project 3D head location to 2D screen coordinates
    if (this.speechBubbleEl && this.speechBubbleEl.classList.contains('visible')) {
      this.parts.headGroup.getWorldPosition(this._screenPos);
      this._screenPos.y += 0.44; // Generous elevation above hair and forehead
      this._screenPos.project(this.camera);

      // Check if behind camera
      if (this._screenPos.z > 1.0) {
        this.speechBubbleEl.style.display = 'none';
      } else {
        this.speechBubbleEl.style.display = 'block';
        const x = (this._screenPos.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(this._screenPos.y * 0.5) + 0.5) * window.innerHeight;
        this.speechBubbleEl.style.left = `${Math.round(x)}px`;
        this.speechBubbleEl.style.top = `${Math.round(y)}px`;
      }
    }
  }

  /**
   * Disposal
   */
  destroy() {
    if (this.speechBubbleEl) {
      this.speechBubbleEl.classList.remove('visible');
    }
    this.scene.remove(this.root);
  }
}
