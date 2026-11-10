/**
 * ELiVET 3D Browser Game Engine — Main Entry Point
 * Orchestrates Three.js rendering, physics, player controller, NPC state machine,
 * Web Audio sound synthesis, keyboard hotkeys, 3D raycasting pointer interactions,
 * interactive physical room lighting switches, and AI checkpoint evaluation loop.
 */

import * as THREE from 'three';
import { PhysicsSystem } from './systems/Physics.js';
import { Player } from './systems/Player.js';
import { AIBridge } from './systems/AIBridge.js';
import { InterviewRoom } from './scenes/InterviewRoom.js';
import { OfficeFloor } from './scenes/OfficeFLoor.js';
import { Wardrobe } from './scenes/Wardrobe.js';

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  _ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (this.muted) return;
    this._ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  /**
   * Tactile Mechanical Light Switch Audio Click
   */
  playSwitchClick(isOn = true) {
    if (this.muted) return;
    this._ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // High frequency contact snap
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(isOn ? 1200 : 850, now);
    snapOsc.frequency.exponentialRampToValueAtTime(140, now + 0.035);

    snapGain.gain.setValueAtTime(0.2, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    snapOsc.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snapOsc.start(now);
    snapOsc.stop(now + 0.04);

    // Resonant mechanical rocker housing thud
    const clackOsc = this.ctx.createOscillator();
    const clackGain = this.ctx.createGain();
    clackOsc.type = 'sine';
    clackOsc.frequency.setValueAtTime(isOn ? 240 : 180, now + 0.006);
    clackOsc.frequency.exponentialRampToValueAtTime(65, now + 0.055);

    clackGain.gain.setValueAtTime(0.15, now + 0.006);
    clackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    clackOsc.connect(clackGain);
    clackGain.connect(this.ctx.destination);
    clackOsc.start(now + 0.006);
    clackOsc.stop(now + 0.06);
  }

  playScoreSound(score) {
    if (this.muted) return;
    this._ensureContext();
    if (!this.ctx) return;

    if (score >= 7) {
      // Harmonic Victory Arpeggio (C5 - E5 - G5 - C6)
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.08;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.3);
      });
    } else if (score >= 4) {
      // Gentle warm tone
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(554.37, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } else {
      // Low advisory buzz
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    }
  }
}

class ELiVETGame {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.totalScore = 0;
    this.streakCount = 0;
    this.currentScenario = null;
    this.weakTags = [];
    this.scenarioStep = 1;
    this.isEvaluating = false;

    // 1. Audio Synthesizer
    this.audio = new AudioSynthesizer();

    // 2. Core Three.js Engine Setup
    this._initThree();

    // 3. Systems Setup
    this.physics = new PhysicsSystem();
    this.aiBridge = new AIBridge();
    this.player = new Player(this.scene, this.camera, this.physics);

    // 4. Scene Management
    this.activeScene = null;
    this.sceneName = 'interview_room';

    // 5. Performance Monitoring
    this.fpsCounter = {
      frames: 0,
      lastTime: performance.now(),
      fps: 60
    };

    // 6. Raycasting 3D Pointer Interaction
    this._initRaycasting();

    // 7. Wire UI & Start
    this._initUI();
    this._initKeyboardHotkeys();
    this.loadScene(this.sceneName);

    // 8. Start Loop
    this.clock = new THREE.Clock();
    this._animate = this._animate.bind(this);
    requestAnimationFrame(this._animate);
  }

  /**
   * Initialize Three.js renderer, camera, and shadow map
   */
  _initThree() {
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // Enhanced High-Definition pixel ratio for razor-sharp rendering on all modern displays
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.0));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // Boosted filmic exposure for bright, radiantly illuminated corporate and studio environments
    this.renderer.toneMappingExposure = 1.32;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xa7d8fc); // Crisp radiant daylight sky blue

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  /**
   * Initialize 3D Raycasting Pointer Interaction
   * Enables clicking on 3D wall switches, lamps, and props directly in the room!
   */
  _initRaycasting() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredClickable = null;
    this.tooltipEl = document.getElementById('click-hover-tooltip');
    this.tooltipTitleEl = document.getElementById('tooltip-title');
    this.tooltipHintEl = document.getElementById('tooltip-hint');

    // Pointer move: hover detection
    window.addEventListener('pointermove', (e) => {
      // If hovering over 2D UI interactive buttons, cancel 3D hover
      if (e.target && e.target.closest && e.target.closest('.interactive')) {
        this._hideTooltip();
        return;
      }

      if (!this.activeScene || !this.activeScene.getClickableObjects) return;
      const clickableList = this.activeScene.getClickableObjects();
      if (!clickableList || clickableList.length === 0) {
        this._hideTooltip();
        return;
      }

      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Collect target meshes
      const targetMeshes = clickableList.map((item) => item.mesh).filter(Boolean);
      const intersects = this.raycaster.intersectObjects(targetMeshes, true);

      if (intersects.length > 0) {
        const hit = intersects[0];
        // Match hit mesh to clickable item definition
        const found = clickableList.find((item) => {
          if (item.mesh === hit.object) return true;
          let p = hit.object.parent;
          while (p) {
            if (p === item.mesh) return true;
            p = p.parent;
          }
          return false;
        });

        if (found) {
          this.hoveredClickable = found;
          this.canvas.style.cursor = 'pointer';
          this._showTooltip(e.clientX, e.clientY, found.name, found.hint);
          return;
        }
      }

      this._hideTooltip();
    });

    // Pointer down / drag / click: raycast trigger & 3D canvas avatar turntable rotation
    let isCanvasDragging = false;
    let dragStartX = 0;
    let didDragSignificantly = false;

    this.canvas.addEventListener('pointerdown', (e) => {
      if (e.target && e.target.closest && e.target.closest('.interactive')) return;
      isCanvasDragging = true;
      dragStartX = e.clientX;
      didDragSignificantly = false;
      this.canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (isCanvasDragging && this.player) {
        const deltaX = e.clientX - dragStartX;
        dragStartX = e.clientX;
        if (Math.abs(deltaX) > 0.4) {
          didDragSignificantly = true;
          // Natural direct orbit: dragging right rotates model to face right, dragging left rotates model to face left
          this.player.rotateTurntable(deltaX * 0.012);
        }
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (isCanvasDragging) {
        isCanvasDragging = false;
        this.canvas.style.cursor = 'default';
      }

      // If it wasn't a drag, handle raycast interaction click
      if (!didDragSignificantly && this.hoveredClickable && this.hoveredClickable.onClick) {
        if (e.target && e.target.closest && e.target.closest('.interactive')) return;
        const newState = this.hoveredClickable.onClick();
        this.audio.playSwitchClick(newState !== false);
        this._syncLightingHUD();
      }
    });
  }

  _showTooltip(x, y, title, hint) {
    if (!this.tooltipEl) return;
    if (this.tooltipTitleEl) this.tooltipTitleEl.textContent = title || 'Interactive Switch';
    if (this.tooltipHintEl) this.tooltipHintEl.textContent = hint || 'Click to toggle';
    this.tooltipEl.style.left = `${x}px`;
    this.tooltipEl.style.top = `${y}px`;
    this.tooltipEl.classList.add('visible');
  }

  _hideTooltip() {
    this.hoveredClickable = null;
    this.canvas.style.cursor = 'default';
    if (this.tooltipEl) {
      this.tooltipEl.classList.remove('visible');
    }
  }

  /**
   * Switch between 3D scenes (InterviewRoom, OfficeFloor, Wardrobe)
   */
  loadScene(sceneKey) {
    if (this.activeScene) {
      this.activeScene.destroy();
      this.physics.clear();
      this.activeScene = null;
    }

    this.sceneName = sceneKey;
    this.scenarioStep = 1;

    // Update Map Quick-Travel Active Button & Dropdown sync
    document.querySelectorAll('.map-travel-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.scene === sceneKey);
    });
    const sceneSelect = document.getElementById('scene-select');
    if (sceneSelect) sceneSelect.value = sceneKey;

    // Toggle Office Minimap / Radar HUD (Active exclusively on office_floor)
    const minimapHud = document.getElementById('office-minimap-hud');
    if (minimapHud) {
      minimapHud.classList.toggle('hidden', sceneKey !== 'office_floor');
    }

    // Update Speaker Name Tag
    const speakerEl = document.getElementById('npc-speaker-name');
    if (speakerEl) {
      if (sceneKey === 'interview_room') speakerEl.textContent = 'Vikram Malhotra';
      else if (sceneKey === 'office_floor') speakerEl.textContent = 'Aditi Sharma';
      else speakerEl.textContent = 'Priya Sen';
    }

    if (sceneKey === 'interview_room') {
      this.activeScene = new InterviewRoom(this.scene, this.camera, this.physics);
      this.player.setCameraMode('interview');
      const camText = document.getElementById('cam-mode-text');
      if (camText) camText.textContent = 'Cinematic';
      document.body.classList.remove('studio-open');
    } else if (sceneKey === 'office_floor') {
      this.activeScene = new OfficeFloor(this.scene, this.camera, this.physics);
      this.player.setCameraMode('third_person');
      const camText = document.getElementById('cam-mode-text');
      if (camText) camText.textContent = '3rd Person';
      document.body.classList.remove('studio-open');
    } else if (sceneKey === 'wardrobe') {
      this.activeScene = new Wardrobe(this.scene, this.camera, this.physics, this.player);
      this.player.setCameraMode('wardrobe');
      const camText = document.getElementById('cam-mode-text');
      if (camText) camText.textContent = 'Showcase';

      // Automatically open the wardrobe panel in wardrobe scene & dock dialogue card
      const wardrobePanel = document.getElementById('wardrobe-panel');
      if (wardrobePanel) {
        wardrobePanel.classList.add('open');
        document.body.classList.add('studio-open');
      }

      const scenarioPanel = document.getElementById('scenario-panel');
      const dockText = document.getElementById('dock-btn-text');
      if (scenarioPanel) scenarioPanel.classList.add('compact-hud');
      if (dockText) dockText.textContent = '⏶ Expand';
    }

    // Teleport player to scene spawn point
    const spawn = this.activeScene.getPlayerSpawn();
    this.player.teleport(spawn.x, spawn.y, spawn.z, spawn.rotationY);

    // Sync HUD lighting buttons to active scene
    this._syncLightingHUD();

    // Sync Map Ambient Status Header
    this._updateMapAmbientHeader(sceneKey);

    // Load first scenario for this environment
    this.startScenario(this.aiBridge.getScenario(sceneKey));
  }

  /**
   * Update top ambient header bar with map-specific telemetry, objectives, and interlocutor profile
   */
  _updateMapAmbientHeader(sceneKey) {
    const iconEl = document.getElementById('ambient-map-icon');
    const titleEl = document.getElementById('ambient-map-title');
    const subtitleEl = document.getElementById('ambient-map-subtitle');
    const roundEl = document.getElementById('ambient-round-text');
    const objEl = document.getElementById('ambient-objective-text');
    const teleIcon = document.getElementById('ambient-telemetry-icon');
    const teleVal = document.getElementById('ambient-telemetry-val');
    const teleLbl = document.getElementById('ambient-telemetry-lbl');
    const npcAvatar = document.getElementById('npc-persona-avatar');
    const npcName = document.getElementById('npc-persona-name');
    const npcRole = document.getElementById('npc-persona-role');
    const npcDot = document.getElementById('npc-sentiment-dot');

    if (sceneKey === 'interview_room') {
      if (iconEl) iconEl.textContent = 'LOC';
      if (titleEl) titleEl.textContent = 'EXECUTIVE BOARDROOM';
      if (subtitleEl) subtitleEl.textContent = 'Technical & HR Mock Round 1';
      if (roundEl) roundEl.textContent = `ROUND ${this.scenarioStep} / 3 • ARCHITECTURE`;
      if (objEl) objEl.textContent = 'Demonstrate technical problem ownership and structured STAR methodology.';
      if (teleIcon) teleIcon.textContent = '';
      if (teleVal) teleVal.textContent = '72 BPM';
      if (teleLbl) teleLbl.textContent = 'Composure: Calm';
      if (npcAvatar) npcAvatar.textContent = 'VM';
      if (npcName) npcName.textContent = 'Mr. Vikram Malhotra';
      if (npcRole) npcRole.textContent = 'Senior Tech Director';
      if (npcDot) {
        npcDot.style.background = '#38bdf8';
        npcDot.title = 'Live Interlocutor Sentiment: Neutral / Evaluating';
      }
    } else if (sceneKey === 'office_floor') {
      if (iconEl) iconEl.textContent = 'LOC';
      if (titleEl) titleEl.textContent = 'CORPORATE OPEN FLOOR';
      if (subtitleEl) subtitleEl.textContent = 'Sprint 14 Standup & Alignment';
      if (roundEl) roundEl.textContent = 'SPRINT 14 • COLLABORATION';
      if (objEl) objEl.textContent = 'Walk to Colleague Aditi Sharma (Near Whiteboard) to review pull requests.';
      if (teleIcon) teleIcon.textContent = '';
      if (teleVal) teleVal.textContent = '88% Synergy';
      if (teleLbl) teleLbl.textContent = 'Team Rapport';
      if (npcAvatar) npcAvatar.textContent = 'AS';
      if (npcName) npcName.textContent = 'Aditi Sharma';
      if (npcRole) npcRole.textContent = 'Staff Solutions Architect';
      if (npcDot) {
        npcDot.style.background = '#10b981';
        npcDot.title = 'Live Interlocutor Sentiment: Collaborative / Attentive';
      }
    } else if (sceneKey === 'wardrobe') {
      if (iconEl) iconEl.textContent = 'LOC';
      if (titleEl) titleEl.textContent = 'CANDIDATE STYLING STUDIO';
      if (subtitleEl) subtitleEl.textContent = 'Tier-1 Placement Dress Code Audit';
      if (roundEl) roundEl.textContent = 'THE 4 GOLDEN RULES OF ATTIRE';
      if (objEl) objEl.textContent = 'Harmonize suit lapels, tie ratio, and leather footwear for campus day-1.';
      if (teleIcon) teleIcon.textContent = '';
      if (teleVal) teleVal.textContent = '98% Fit';
      if (teleLbl) teleLbl.textContent = 'Placement Ready';
      if (npcAvatar) npcAvatar.textContent = 'PS';
      if (npcName) npcName.textContent = 'Priya Sen';
      if (npcRole) npcRole.textContent = 'Wardrobe Consultant';
      if (npcDot) {
        npcDot.style.background = '#f59e0b';
        npcDot.title = 'Live Interlocutor Sentiment: Stylistic Advisory';
      }
    }
  }

  /**
   * Tactical Office Radar Canvas Rendering (Displays player orientation and Colleague Aditi's position)
   */
  _renderOfficeMinimap() {
    if (this.sceneName !== 'office_floor') return;
    const canvas = document.getElementById('minimap-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const radarRadius = 58;

    ctx.clearRect(0, 0, w, h);

    // 1. Draw Range Rings
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.22)';
    ctx.lineWidth = 1;
    [18, 38, radarRadius].forEach((r) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 2. Draw Crosshairs
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.16)';
    ctx.beginPath();
    ctx.moveTo(cx - radarRadius, cy);
    ctx.lineTo(cx + radarRadius, cy);
    ctx.moveTo(cx, cy - radarRadius);
    ctx.lineTo(cx, cy + radarRadius);
    ctx.stroke();

    // 3. Rotating Radar Sweep Beam
    this._radarSweepAngle = (this._radarSweepAngle || 0) + 0.045;
    const sweepEndAngle = this._radarSweepAngle;
    const sweepStartAngle = sweepEndAngle - 0.5;

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radarRadius);
    grad.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
    grad.addColorStop(1, 'rgba(16, 185, 129, 0.02)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radarRadius, sweepStartAngle, sweepEndAngle);
    ctx.closePath();
    ctx.fill();

    // 4. Sweep Leading Edge Line
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.85)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(sweepEndAngle) * radarRadius, cy + Math.sin(sweepEndAngle) * radarRadius);
    ctx.stroke();

    // 5. Positions & Distance Calculation
    const px = this.player ? this.player.root.position.x : 0;
    const pz = this.player ? this.player.root.position.z : 0;
    const yaw = this.player ? this.player.root.rotation.y : 0;

    // NPC Aditi Sharma is placed at (0, 0, -6.8)
    const nx = 0;
    const nz = -6.8;

    const dx = nx - px;
    const dz = nz - pz;
    const dist = Math.hypot(dx, dz);

    const distLabel = document.getElementById('minimap-target-text');
    if (distLabel) {
      distLabel.textContent = `Aditi: ${dist.toFixed(1)}m`;
    }

    // Scale: 1 meter in 3D = 7 pixels on radar
    const scale = 7;
    const relX = dx * scale;
    const relZ = dz * scale;

    // Plot NPC Marker
    const npcRadarDist = Math.hypot(relX, relZ);
    let npcCanvasX = cx + relX;
    let npcCanvasY = cy + relZ;

    // Clamp inside radar boundary if farther away
    if (npcRadarDist > radarRadius - 5) {
      const angle = Math.atan2(relZ, relX);
      npcCanvasX = cx + Math.cos(angle) * (radarRadius - 5);
      npcCanvasY = cy + Math.sin(angle) * (radarRadius - 5);
    }

    // NPC Ping Glow Aura
    ctx.fillStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.beginPath();
    ctx.arc(npcCanvasX, npcCanvasY, 7, 0, Math.PI * 2);
    ctx.fill();

    // NPC Center Dot
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(npcCanvasX, npcCanvasY, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // 6. Draw Player Marker at Center (Cyan Arrow pointing in facing direction)
    ctx.save();
    ctx.translate(cx, cy);
    // Three.js yaw rotation mapping to 2D canvas coordinates
    ctx.rotate(-yaw + Math.PI);

    // Cyan Directional Chevron
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(0, -6.5);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 2);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  /**
   * Synchronize HUD light button states with active 3D room
   */
  _syncLightingHUD() {
    if (!this.activeScene || !this.activeScene.getLightingState) return;
    const state = this.activeScene.getLightingState();

    const ceilingBtn = document.getElementById('btn-toggle-ceiling');
    const pillCeiling = document.getElementById('pill-ceiling');
    if (ceilingBtn && pillCeiling) {
      ceilingBtn.classList.toggle('active', state.ceilingLightsOn);
      ceilingBtn.classList.toggle('inactive', !state.ceilingLightsOn);
      pillCeiling.className = state.ceilingLightsOn ? 'switch-pill on' : 'switch-pill off';
      pillCeiling.textContent = state.ceilingLightsOn ? 'ON' : 'OFF';
    }

    const deskBtn = document.getElementById('btn-toggle-desklamp');
    const pillDesk = document.getElementById('pill-desklamp');
    if (deskBtn && pillDesk) {
      deskBtn.classList.toggle('active', state.deskLampOn);
      deskBtn.classList.toggle('inactive', !state.deskLampOn);
      pillDesk.className = state.deskLampOn ? 'switch-pill on' : 'switch-pill off';
      pillDesk.textContent = state.deskLampOn ? 'ON' : 'OFF';
    }

    const sunBtn = document.getElementById('btn-toggle-sunlight');
    const pillSun = document.getElementById('pill-sunlight');
    if (sunBtn && pillSun) {
      sunBtn.classList.toggle('active', state.sunlightOn);
      sunBtn.classList.toggle('inactive', !state.sunlightOn);
      pillSun.className = state.sunlightOn ? 'switch-pill on' : 'switch-pill off';
      pillSun.textContent = state.sunlightOn ? 'ON' : 'OFF';
    }

    const nightBtn = document.getElementById('btn-toggle-nightmode');
    const pillNight = document.getElementById('pill-nightmode');
    if (nightBtn && pillNight) {
      nightBtn.classList.toggle('active', state.nightModeOn);
      nightBtn.classList.toggle('inactive', !state.nightModeOn);
      pillNight.className = state.nightModeOn ? 'switch-pill on' : 'switch-pill off';
      pillNight.textContent = state.nightModeOn ? 'ON' : 'OFF';
    }
  }

  /**
   * Update live attire placement audit & HUD indicators
   */
  _updateAttireAuditUI() {
    if (!this.player || !this.player.getAttireAudit) return;
    const audit = this.player.getAttireAudit();

    // 1. Update chip in wardrobe studio
    const chip = document.getElementById('avatar-readiness-chip');
    if (chip) {
      chip.textContent = `${audit.score}% READY`;
      chip.className = `readiness-chip ${audit.score >= 95 ? 'optimal' : ''}`;
    }

    // 2. Update HUD pill in top bar
    const hudVal = document.getElementById('hud-attire-val');
    if (hudVal) {
      hudVal.textContent = `${audit.score}% Ready`;
    }

    // 3. Update audit list checklist
    const auditList = document.getElementById('attire-audit-list');
    if (auditList && audit.checks) {
      auditList.innerHTML = audit.checks.map(c => `
        <li class="audit-item ${c.passed ? 'pass' : 'warn'}">
          <span class="audit-icon">${c.passed ? '✓' : '⚠️'}</span>
          <div>
            <strong>${c.name}:</strong>
            <span>${c.desc}</span>
          </div>
        </li>
      `).join('');
    }
  }

  /**
   * Set live advice text in consultant insight card
   */
  setConsultantTip(text) {
    const tipEl = document.getElementById('consultant-tip-text');
    if (tipEl) {
      tipEl.style.opacity = '0';
      setTimeout(() => {
        tipEl.textContent = text;
        tipEl.style.opacity = '1';
      }, 120);
    }
  }

  /**
   * Populate official workplace certification dossier modal
   */
  _populateDossierModal() {
    if (!this.player) return;
    const audit = this.player.getAttireAudit ? this.player.getAttireAudit() : { score: 98 };
    const c = this.player.customization || {};

    const scoreEl = document.getElementById('dossier-score-num');
    if (scoreEl) scoreEl.textContent = `${audit.score}%`;

    const suitEl = document.getElementById('dossier-suit-val');
    if (suitEl) {
      const chip = document.getElementById('jacket-val-chip');
      suitEl.textContent = chip ? chip.textContent : 'Executive Navy';
    }

    const shirtEl = document.getElementById('dossier-shirt-val');
    if (shirtEl) {
      const chip = document.getElementById('shirt-val-chip');
      shirtEl.textContent = chip ? chip.textContent : 'Crisp White';
    }

    const tieEl = document.getElementById('dossier-tie-val');
    if (tieEl) {
      tieEl.textContent = c.hasTie ? 'Corporate Silk Tie (Harmonized)' : 'Smart Casual Open Collar';
    }

    const leatherEl = document.getElementById('dossier-leather-val');
    if (leatherEl) {
      const chip = document.getElementById('shoes-val-chip');
      leatherEl.textContent = `${chip ? chip.textContent : 'Black Oxford'} & Matched Belt`;
    }
  }

  /**
   * Bind DOM UI controls to engine systems
   */
  _initUI() {
    // 1a. Map Quick-Travel Group Buttons
    document.querySelectorAll('.map-travel-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        const target = btn.dataset.scene;
        if (target && target !== this.sceneName) {
          this.loadScene(target);
        }
      });
    });

    // 1b. Scene selector dropdown (fallback & sync)
    const sceneSelect = document.getElementById('scene-select');
    if (sceneSelect) {
      sceneSelect.value = this.sceneName;
      sceneSelect.addEventListener('change', (e) => {
        this.audio.playClick();
        this.loadScene(e.target.value);
      });
    }

    // 1c. Placement Guide & Controls Modal
    const helpModal = document.getElementById('help-modal');
    const helpToggleBtn = document.getElementById('help-toggle-btn');
    const helpCloseBtn = document.getElementById('help-close-btn');
    const helpGotitBtn = document.getElementById('help-gotit-btn');

    const toggleHelp = () => {
      this.audio.playClick();
      if (helpModal) helpModal.classList.toggle('active');
    };

    if (helpToggleBtn) helpToggleBtn.addEventListener('click', toggleHelp);
    if (helpCloseBtn) helpCloseBtn.addEventListener('click', toggleHelp);
    if (helpGotitBtn) helpGotitBtn.addEventListener('click', toggleHelp);

    // 1d. Lighting Atmosphere Preset Selector
    const lightingSelect = document.getElementById('lighting-select');
    if (lightingSelect) {
      lightingSelect.addEventListener('change', (e) => {
        this.audio.playClick();
        document.querySelectorAll('.tuner-btn').forEach((b) => {
          b.classList.toggle('active', b.dataset.light === e.target.value);
        });
        if (this.activeScene && this.activeScene.setLightingPreset) {
          this.activeScene.setLightingPreset(e.target.value);
        }
      });
    }

    // 1e. Studio Lighting & Atmosphere Quick-Tuner Bar inside Candidate Studio
    document.querySelectorAll('.tuner-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.tuner-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const preset = btn.dataset.light;
        if (lightingSelect) lightingSelect.value = preset;

        if (this.activeScene && this.activeScene.setLightingPreset) {
          this.activeScene.setLightingPreset(preset);
        }
      });
    });

    // 1c. Dialogue Dock / Compact HUD Toggle
    const dockBtn = document.getElementById('scenario-dock-btn');
    const dockText = document.getElementById('dock-btn-text');
    const scenarioPanel = document.getElementById('scenario-panel');
    if (dockBtn && scenarioPanel) {
      dockBtn.addEventListener('click', () => {
        this.audio.playClick();
        scenarioPanel.classList.toggle('compact-hud');
        const isCompact = scenarioPanel.classList.contains('compact-hud');
        if (dockText) dockText.textContent = isCompact ? '⏶ Expand' : '⏷ Dock';
      });
    }

    // 2. Camera Mode Toggle (Cinematic OTS -> 1st Person -> 3rd Person)
    const camBtn = document.getElementById('cam-toggle-btn');
    const camText = document.getElementById('cam-mode-text');
    if (camBtn) {
      if (camText) camText.textContent = 'Cinematic';
      camBtn.addEventListener('click', () => {
        this.audio.playClick();
        const mode = this.player.toggleCameraMode();
        if (camText) {
          if (mode === 'interview') camText.textContent = 'Cinematic';
          else if (mode === 'first_person') camText.textContent = '1st Person';
          else if (mode === 'wardrobe') camText.textContent = 'Showcase';
          else camText.textContent = '3rd Person';
        }
        camBtn.classList.toggle('glass-btn-active', mode === 'interview');
      });
    }

    // 3. Candidate Character & Wardrobe Studio Panel Toggle
    const wardrobeBtn = document.getElementById('wardrobe-toggle-btn');
    const wardrobePanel = document.getElementById('wardrobe-panel');
    const wardrobeClose = document.getElementById('wardrobe-close-btn');
    if (wardrobeBtn && wardrobePanel) {
      wardrobeBtn.addEventListener('click', () => {
        this.audio.playClick();
        wardrobePanel.classList.toggle('open');
        document.body.classList.toggle('studio-open', wardrobePanel.classList.contains('open'));
        this._updateAttireAuditUI();
      });
    }
    if (wardrobeClose && wardrobePanel) {
      wardrobeClose.addEventListener('click', () => {
        this.audio.playClick();
        wardrobePanel.classList.remove('open');
        document.body.classList.remove('studio-open');
      });
    }

    // Camera Framing Inspector (Full / Torso / Face / Shoes)
    const setFramingUI = (focus) => {
      document.querySelectorAll('.framing-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.focus === focus);
      });
      if (this.player && this.player.setWardrobeFocus) {
        this.player.setWardrobeFocus(focus);
      }
    };

    document.querySelectorAll('.framing-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        setFramingUI(btn.dataset.focus);
      });
    });

    // Save Outfit to Local Profile
    const saveBtn = document.getElementById('btn-save-outfit');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.audio.playClick();
        if (this.player && this.player.customization) {
          localStorage.setItem('elivet_candidate_attire', JSON.stringify(this.player.customization));
          saveBtn.textContent = '✓';
          setTimeout(() => { saveBtn.textContent = '💾'; }, 1500);
          this.setConsultantTip('Tailored ensemble saved to your Student Placement Profile!');
        }
      });
    }

    // Open & Close Attire Certification Dossier Modal
    const dossierModal = document.getElementById('attire-dossier-modal');
    const openDossierBtn = document.getElementById('btn-open-dossier');
    const closeDossierBtn = document.getElementById('dossier-close-btn');
    const confirmDossierBtn = document.getElementById('dossier-confirm-btn');
    const printDossierBtn = document.getElementById('dossier-print-btn');

    if (openDossierBtn && dossierModal) {
      openDossierBtn.addEventListener('click', () => {
        this.audio.playClick();
        this._populateDossierModal();
        dossierModal.classList.add('open');
      });
    }

    const closeDossier = () => {
      this.audio.playClick();
      if (dossierModal) dossierModal.classList.remove('open');
    };

    if (closeDossierBtn) closeDossierBtn.addEventListener('click', closeDossier);
    if (confirmDossierBtn) confirmDossierBtn.addEventListener('click', closeDossier);
    if (printDossierBtn) printDossierBtn.addEventListener('click', () => window.print());

    // Tab Navigation with Cinematic Auto-Zoom
    document.querySelectorAll('.studio-tab-btn').forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.studio-tab-btn').forEach((b) => b.classList.remove('active'));
        document.querySelectorAll('.studio-tab-pane').forEach((p) => p.classList.remove('active'));

        tabBtn.classList.add('active');
        const targetPane = document.getElementById(tabBtn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');

        // Cinematic auto-zoom to relevant body section
        if (tabBtn.dataset.tab === 'tab-face') setFramingUI('face');
        else if (tabBtn.dataset.tab === 'tab-outfit') setFramingUI('torso');
        else if (tabBtn.dataset.tab === 'tab-accessories') setFramingUI('shoes');
        else if (tabBtn.dataset.tab === 'tab-presets') setFramingUI('full');
      });
    });

    // Silhouette & Gender Switcher
    document.querySelectorAll('.gender-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.gender-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setGender(btn.dataset.gender);
        this.setConsultantTip(`${btn.dataset.gender === 'female' ? 'Female Executive' : 'Male Candidate'} silhouette tailored.`);
        this._updateAttireAuditUI();
      });
    });

    // Attire Category Cards
    const attireSelect = document.getElementById('attire-style-select');
    document.querySelectorAll('.attire-card-btn').forEach((cardBtn) => {
      cardBtn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.attire-card-btn').forEach((b) => b.classList.remove('active'));
        cardBtn.classList.add('active');
        const style = cardBtn.dataset.style;
        this.player.setAttire(style);
        if (attireSelect) attireSelect.value = style;
        this.setConsultantTip(style === 'formal'
          ? 'Business Formal suit provides the highest authority for panel and client interviews.'
          : (style === 'smart_casual' ? 'Smart Casual polo & chinos is ideal for startup culture and product rounds.' : 'Tech Interview casual styling applied.'));
        this._updateAttireAuditUI();
      });
    });
    if (attireSelect) {
      attireSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        this.player.setAttire(val);
        document.querySelectorAll('.attire-card-btn').forEach((b) => {
          b.classList.toggle('active', b.dataset.style === val);
        });
        this._updateAttireAuditUI();
      });
    }

    // Jacket Color Swatches
    document.querySelectorAll('#jacket-swatches .swatch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('#jacket-swatches .swatch-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setJacketColor(btn.dataset.color);
        const chip = document.getElementById('jacket-val-chip');
        if (chip) chip.textContent = btn.dataset.name || btn.dataset.color;
        this.setConsultantTip(`${btn.dataset.name || 'Jacket'} tailored blazer selected. Contrast pairing with lighter shirt recommended.`);
        this._updateAttireAuditUI();
      });
    });

    // Shirt Color Swatches
    document.querySelectorAll('#shirt-swatches .swatch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('#shirt-swatches .swatch-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setShirtColor(btn.dataset.color);
        const chip = document.getElementById('shirt-val-chip');
        if (chip) chip.textContent = btn.dataset.name || btn.dataset.color;
        this.setConsultantTip(`${btn.dataset.name || 'Shirt'} provides high contrast framing your face clearly on video calls.`);
        this._updateAttireAuditUI();
      });
    });

    // Tie Toggle & Tie Color Swatches
    const tieToggleBtn = document.getElementById('tie-toggle-btn');
    if (tieToggleBtn) {
      tieToggleBtn.addEventListener('click', () => {
        this.audio.playClick();
        tieToggleBtn.classList.toggle('active');
        const isOn = tieToggleBtn.classList.contains('active');
        tieToggleBtn.innerHTML = `<span class="toggle-indicator"></span> Tie ${isOn ? 'ON' : 'OFF'}`;
        this.player.setTieVisibility(isOn);
        this.setConsultantTip(isOn ? 'Tie anchored cleanly at collar tip with metallic tie bar.' : 'Open collar smart casual styling applied.');
        this._updateAttireAuditUI();
      });
    }

    document.querySelectorAll('#tie-swatches .swatch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('#tie-swatches .swatch-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setTieColor(btn.dataset.color);
        this.player.setTieVisibility(true);
        if (tieToggleBtn) {
          tieToggleBtn.classList.add('active');
          tieToggleBtn.innerHTML = '<span class="toggle-indicator"></span> Tie ON';
        }
        this.setConsultantTip(`${btn.dataset.name || 'Tie'} selected. Tip aligns precisely at the belt buckle center.`);
        this._updateAttireAuditUI();
      });
    });

    // Pants Color Swatches
    document.querySelectorAll('#pants-swatches .swatch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('#pants-swatches .swatch-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setPantsColor(btn.dataset.color);
        const chip = document.getElementById('pants-val-chip');
        if (chip) chip.textContent = btn.dataset.name || btn.dataset.color;
        this.setConsultantTip(`Trousers set to ${btn.dataset.name || btn.dataset.color}. Clean drape with no break.`);
        this._updateAttireAuditUI();
      });
    });

    // Skin Tone Swatches
    document.querySelectorAll('.palette-swatches .swatch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.palette-swatches .swatch-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setSkinTone(btn.dataset.skin);
        const chip = document.getElementById('skin-val-chip');
        if (chip) chip.textContent = btn.dataset.name || btn.dataset.skin;
      });
    });

    // Hairstyle Selector
    document.querySelectorAll('.hair-style-grid .pill-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.hair-style-grid .pill-option-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setHairStyle(btn.dataset.hairstyle);
        this.setConsultantTip(`${btn.textContent.trim()} grooming applied. Clean facial silhouette framed.`);
      });
    });

    // Hair Color Swatches
    document.querySelectorAll('#hair-swatches .swatch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('#hair-swatches .swatch-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setHairColor(btn.dataset.color);
        const chip = document.getElementById('haircolor-val-chip');
        if (chip) chip.textContent = btn.dataset.name || btn.dataset.color;
      });
    });

    // Footwear Cards
    document.querySelectorAll('.shoes-card-grid .shoe-card-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.shoes-card-grid .shoe-card-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setShoesColor(btn.dataset.color);
        const chip = document.getElementById('shoes-val-chip');
        if (chip) chip.textContent = btn.dataset.name;
        this.setConsultantTip(`${btn.dataset.name} finish selected. Belt leather tone automatically synchronized (Belt & Shoe Rule).`);
        this._updateAttireAuditUI();
      });
    });

    // Eyewear Selector
    document.querySelectorAll('.eyewear-grid .pill-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.eyewear-grid .pill-option-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setGlasses(btn.dataset.glasses);
        this.setConsultantTip(`Eyewear updated to ${btn.textContent.trim()}. Anti-reflective executive frames project analytical depth.`);
      });
    });

    // Wristwatch Selector
    document.querySelectorAll('.watch-grid .pill-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        document.querySelectorAll('.watch-grid .pill-option-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.setWatch(btn.dataset.watch);
        this.setConsultantTip(`Wristwatch set to ${btn.textContent.trim()}. Subtly conveys punctuality and executive presence.`);
      });
    });

    // 1-Click Career Presets
    document.querySelectorAll('.preset-card-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        const presetKey = btn.dataset.preset;
        const preset = this.player.applyPreset(presetKey);
        if (preset) {
          // Sync all tab UI buttons with the applied preset
          document.querySelectorAll('.attire-card-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.style === preset.attireStyle);
          });
          document.querySelectorAll('#jacket-swatches .swatch-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.color.toLowerCase() === preset.jacketColor.toLowerCase());
          });
          document.querySelectorAll('#shirt-swatches .swatch-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.color.toLowerCase() === preset.shirtColor.toLowerCase());
          });
          document.querySelectorAll('#tie-swatches .swatch-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.color.toLowerCase() === preset.tieColor.toLowerCase());
          });
          document.querySelectorAll('.shoes-card-grid .shoe-card-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.color.toLowerCase() === preset.shoesColor.toLowerCase());
          });
          document.querySelectorAll('.watch-grid .pill-option-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.watch === preset.watch);
          });
          document.querySelectorAll('.eyewear-grid .pill-option-btn').forEach((b) => {
            b.classList.toggle('active', b.dataset.glasses === preset.glasses);
          });

          this.setConsultantTip(`Preset applied: ${preset.label}. ${preset.ruleSummary}`);
          this._updateAttireAuditUI();
        }
      });
    });

    // Turntable Dock Controls (↺ rotates avatar to screen left, ↻ rotates avatar to screen right)
    const rotLeft = document.getElementById('turntable-left-btn');
    const rotReset = document.getElementById('turntable-reset-btn');
    const rotRight = document.getElementById('turntable-right-btn');
    if (rotLeft) rotLeft.addEventListener('click', () => { this.audio.playClick(); this.player.rotateTurntable(-Math.PI / 4); });
    if (rotReset) rotReset.addEventListener('click', () => { this.audio.playClick(); this.player.resetTurntable(); });
    if (rotRight) rotRight.addEventListener('click', () => { this.audio.playClick(); this.player.rotateTurntable(Math.PI / 4); });

    // 6. Audio Toggle
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        this.audio.muted = !this.audio.muted;
        audioBtn.textContent = this.audio.muted ? '🔇 Muted' : '🔊 SFX';
        audioBtn.classList.toggle('glass-btn-active', !this.audio.muted);
      });
    }

    // 7. Interactive Lighting Buttons on HUD
    const lightingToggleBtn = document.getElementById('lighting-toggle-btn');
    const lightingMenu = document.getElementById('lighting-switches');
    const lightingCloseBtn = document.getElementById('lighting-close-btn');

    if (lightingToggleBtn && lightingMenu) {
      lightingToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.audio.playClick();
        const isHidden = lightingMenu.classList.contains('hidden');
        lightingMenu.classList.toggle('hidden', !isHidden);
        lightingToggleBtn.classList.toggle('glass-btn-active', isHidden);
      });
    }

    if (lightingCloseBtn && lightingMenu) {
      lightingCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.audio.playClick();
        lightingMenu.classList.add('hidden');
        if (lightingToggleBtn) lightingToggleBtn.classList.remove('glass-btn-active');
      });
    }

    // Dismiss lighting popover on outside click
    document.addEventListener('click', (e) => {
      if (lightingMenu && !lightingMenu.classList.contains('hidden')) {
        if (!lightingMenu.contains(e.target) && (!lightingToggleBtn || !lightingToggleBtn.contains(e.target))) {
          lightingMenu.classList.add('hidden');
          if (lightingToggleBtn) lightingToggleBtn.classList.remove('glass-btn-active');
        }
      }
    });

    const ceilingBtn = document.getElementById('btn-toggle-ceiling');
    if (ceilingBtn) {
      ceilingBtn.addEventListener('click', () => {
        if (this.activeScene && this.activeScene.toggleCeilingLights) {
          const state = this.activeScene.toggleCeilingLights();
          this.audio.playSwitchClick(state);
          this._syncLightingHUD();
        }
      });
    }

    const deskLampBtn = document.getElementById('btn-toggle-desklamp');
    if (deskLampBtn) {
      deskLampBtn.addEventListener('click', () => {
        if (this.activeScene && this.activeScene.toggleDeskLamp) {
          const state = this.activeScene.toggleDeskLamp();
          this.audio.playSwitchClick(state);
          this._syncLightingHUD();
        }
      });
    }

    const sunlightBtn = document.getElementById('btn-toggle-sunlight');
    if (sunlightBtn) {
      sunlightBtn.addEventListener('click', () => {
        if (this.activeScene && this.activeScene.toggleSunlight) {
          const state = this.activeScene.toggleSunlight();
          this.audio.playSwitchClick(state);
          this._syncLightingHUD();
        }
      });
    }

    const nightModeBtn = document.getElementById('btn-toggle-nightmode');
    if (nightModeBtn) {
      nightModeBtn.addEventListener('click', () => {
        if (this.activeScene && this.activeScene.toggleNightMode) {
          const state = this.activeScene.toggleNightMode();
          this.audio.playSwitchClick(state);
          this._syncLightingHUD();
        }
      });
    }

    // 8. Choice buttons (A, B, C)
    const choiceButtons = document.querySelectorAll('.choice-btn');
    choiceButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const choice = btn.dataset.choice;
        if (choice && !this.isEvaluating) {
          this.audio.playClick();
          this.handlePlayerChoice(choice);
        }
      });
    });

    // 9. Checkpoint modal 'Continue' button
    const nextBtn = document.getElementById('modal-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.audio.playClick();
        this.advanceToNextScenario();
      });
    }

    // Initial Attire Audit and UI synchronization
    this._updateAttireAuditUI();
  }

  /**
   * Keyboard Hotkeys:
   * 1, 2, 3 or A, B, C to pick choices
   * C to toggle camera
   * T to toggle wardrobe panel
   * L to toggle ceiling lights
   * J to toggle desk lamp
   * K to toggle sunlight
   * N to toggle night mode
   * Space / Enter to advance modal
   */
  _initKeyboardHotkeys() {
    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      const modal = document.getElementById('checkpoint-modal');
      const isModalActive = modal && modal.classList.contains('active');

      if (isModalActive) {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          this.audio.playClick();
          this.advanceToNextScenario();
        }
        return;
      }

      // Camera toggle: C
      if (e.code === 'KeyC') {
        const camBtn = document.getElementById('cam-toggle-btn');
        if (camBtn) camBtn.click();
        return;
      }

      // Wardrobe drawer: T
      if (e.code === 'KeyT') {
        const wardrobeBtn = document.getElementById('wardrobe-toggle-btn');
        if (wardrobeBtn) wardrobeBtn.click();
        return;
      }

      // Escape key closes modals, menus, and drawers
      if (e.code === 'Escape') {
        const lightingMenu = document.getElementById('lighting-switches');
        const lightingToggleBtn = document.getElementById('lighting-toggle-btn');
        if (lightingMenu && !lightingMenu.classList.contains('hidden')) {
          lightingMenu.classList.add('hidden');
          if (lightingToggleBtn) lightingToggleBtn.classList.remove('glass-btn-active');
          return;
        }
        const wardrobePanel = document.getElementById('wardrobe-panel');
        if (wardrobePanel) wardrobePanel.classList.remove('open');
        const helpModal = document.getElementById('help-modal');
        if (helpModal) helpModal.classList.remove('active');
        const dossierModal = document.getElementById('attire-dossier-modal');
        if (dossierModal) dossierModal.classList.remove('open');
        return;
      }

      // Placement Guide hotkey: H
      if (e.code === 'KeyH') {
        const helpModal = document.getElementById('help-modal');
        if (helpModal) helpModal.classList.toggle('active');
        return;
      }

      // Lighting hotkeys
      if (e.code === 'KeyL') {
        const btn = document.getElementById('btn-toggle-ceiling');
        if (btn) btn.click();
        return;
      }
      if (e.code === 'KeyJ') {
        const btn = document.getElementById('btn-toggle-desklamp');
        if (btn) btn.click();
        return;
      }
      if (e.code === 'KeyK') {
        const btn = document.getElementById('btn-toggle-sunlight');
        if (btn) btn.click();
        return;
      }
      if (e.code === 'KeyN') {
        const btn = document.getElementById('btn-toggle-nightmode');
        if (btn) btn.click();
        return;
      }

      // Choice hotkeys: 1, 2, 3 or A, B, C
      if (!this.isEvaluating) {
        if (e.code === 'Digit1' || e.code === 'KeyA') {
          this.audio.playClick();
          this.handlePlayerChoice('A');
        } else if (e.code === 'Digit2' || e.code === 'KeyB') {
          this.audio.playClick();
          this.handlePlayerChoice('B');
        } else if (e.code === 'Digit3') {
          this.audio.playClick();
          this.handlePlayerChoice('C');
        }
      }
    });
  }

  /**
   * Display scenario situation & choices on HUD
   */
  startScenario(scenario) {
    if (!scenario) return;
    this.currentScenario = scenario;
    this.isEvaluating = false;

    const idLabel = document.getElementById('scenario-id-label');
    const stepLabel = document.getElementById('scenario-step-indicator');
    const sitText = document.getElementById('situation-text');
    const aLabel = document.getElementById('choice-a-label');
    const bLabel = document.getElementById('choice-b-label');
    const cLabel = document.getElementById('choice-c-label');

    if (idLabel) idLabel.textContent = scenario.id;
    if (stepLabel) stepLabel.textContent = `Scenario ${this.scenarioStep}`;
    if (sitText) sitText.textContent = scenario.situation;
    if (aLabel) aLabel.textContent = scenario.choiceA;
    if (bLabel) bLabel.textContent = scenario.choiceB;
    if (cLabel) cLabel.textContent = scenario.choiceC;

    // Update Speaker Interlocutor Header in Scenario Panel
    const avatarEl = document.getElementById('scenario-avatar-emoji');
    const nameEl = document.getElementById('scenario-speaker-name');
    const roleEl = document.getElementById('scenario-speaker-role');
    const toneEl = document.getElementById('scenario-tone-badge');

    if (this.sceneName === 'interview_room') {
      if (avatarEl) avatarEl.textContent = '👔';
      if (nameEl) nameEl.textContent = 'Vikram Malhotra';
      if (roleEl) roleEl.textContent = 'Senior Technical Director';
      if (toneEl) toneEl.textContent = 'STAR Inquiring';
    } else if (this.sceneName === 'office_floor') {
      if (avatarEl) avatarEl.textContent = '👩‍💻';
      if (nameEl) nameEl.textContent = 'Aditi Sharma';
      if (roleEl) roleEl.textContent = 'Staff Solutions Architect';
      if (toneEl) toneEl.textContent = 'Sprint Standup';
    } else {
      if (avatarEl) avatarEl.textContent = '🪞';
      if (nameEl) nameEl.textContent = 'Priya Sen';
      if (roleEl) roleEl.textContent = 'Placement Style Consultant';
      if (toneEl) toneEl.textContent = 'Dress Code Audit';
    }

    // Clean candidate dialogue choices without pre-evaluation spoiler badges
    ['choice-a-badge', 'choice-b-badge', 'choice-c-badge'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = '';
        el.style.display = 'none';
        el.className = 'choice-category-badge';
      }
    });

    // NPC prompt dialogue
    if (this.activeScene && this.activeScene.npc) {
      this.activeScene.npc.say('Review the scenario and choose your best response.');
    }
  }

  /**
   * Process candidate choice and query AI Checkpoint evaluation
   */
  async handlePlayerChoice(choiceLetter) {
    if (this.isEvaluating || !this.currentScenario) return;
    this.isEvaluating = true;

    // Reveal pedagogical choice evaluation tags post-selection
    if (this.currentScenario && this.currentScenario.scores) {
      const revealBadge = (badgeId, score) => {
        const el = document.getElementById(badgeId);
        if (!el) return;
        el.style.display = 'inline-block';
        if (score >= 8) {
          el.textContent = 'STAR Recommended';
          el.className = 'choice-category-badge star';
        } else if (score <= 3) {
          el.textContent = 'Avoidable Pitfall';
          el.className = 'choice-category-badge avoidable';
        } else {
          el.textContent = 'Suboptimal Choice';
          el.className = 'choice-category-badge shortcut';
        }
      };
      revealBadge('choice-a-badge', this.currentScenario.scores.A || 5);
      revealBadge('choice-b-badge', this.currentScenario.scores.B || 5);
      revealBadge('choice-c-badge', this.currentScenario.scores.C || 5);
    }

    // Visual selection feedback on choice buttons
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((b) => {
      b.classList.remove('selected');
      if (b.dataset.choice === choiceLetter) {
        b.classList.add('selected');
      }
    });

    const requestPayload = {
      scene: this.sceneName,
      scenario_id: this.currentScenario.id,
      player_choice: choiceLetter,
      score_so_far: this.totalScore,
      weak_tags: this.weakTags
    };

    // AI Checkpoint Call
    const evaluation = await this.aiBridge.evaluateChoice(requestPayload);

    // Apply NPC 3D reaction
    if (this.activeScene && this.activeScene.npc) {
      this.activeScene.npc.react(evaluation.npc_reaction, evaluation.feedback);
    }

    // Audio SFX
    const delta = evaluation.score_delta || 0;
    this.audio.playScoreSound(delta);

    // Update cumulative score & streak
    this.totalScore += delta;
    if (delta >= 7) {
      this.streakCount++;
    } else {
      this.streakCount = 0;
    }
    this._updateScoreHUD();

    // Show Checkpoint Feedback Modal
    this._showCheckpointModal(evaluation);

    // Track next scenario recommendation
    this._pendingNextScenario = evaluation.next_scenario;
  }

  /**
   * Update top HUD score and streak badges
   */
  _updateScoreHUD() {
    const scoreEl = document.getElementById('hud-score');
    const streakEl = document.getElementById('hud-streak-val');
    if (scoreEl) scoreEl.textContent = this.totalScore;
    if (streakEl) streakEl.textContent = this.streakCount;
  }

  /**
   * Render Feedback Card Modal
   */
  _showCheckpointModal(evaluation) {
    const modal = document.getElementById('checkpoint-modal');
    if (!modal) return;

    const scoreCircle = document.getElementById('modal-score-circle');
    const titleEl = document.getElementById('modal-feedback-title');
    const textEl = document.getElementById('modal-feedback-text');
    const tipEl = document.getElementById('modal-tip-text');
    const ribbonEl = document.getElementById('modal-grade-ribbon');
    const xpEl = document.getElementById('modal-xp-val');
    const streakEl = document.getElementById('modal-streak-val');

    const scoreDelta = evaluation.score_delta || 0;
    if (scoreCircle) {
      scoreCircle.textContent = (scoreDelta > 0 ? `+${scoreDelta}` : `${scoreDelta}`);
      scoreCircle.className = `score-circle ${scoreDelta >= 7 ? 'positive' : scoreDelta >= 4 ? 'neutral' : 'negative'}`;
    }

    if (ribbonEl) {
      if (scoreDelta >= 8) {
        ribbonEl.textContent = '🏆 GRADE A+ • OUTSTANDING STAR';
        ribbonEl.className = 'modal-grade-ribbon grade-a';
      } else if (scoreDelta >= 4) {
        ribbonEl.textContent = '⚡ GRADE B • DEVELOPING';
        ribbonEl.className = 'modal-grade-ribbon grade-b';
      } else {
        ribbonEl.textContent = '⚠️ REVISE • AVOIDABLE BLUNDER';
        ribbonEl.className = 'modal-grade-ribbon grade-c';
      }
    }

    if (xpEl) {
      const tag = (this.currentScenario && this.currentScenario.weak_tag) ? this.currentScenario.weak_tag.replace(/_/g, ' ') : 'Placement';
      xpEl.textContent = `+${Math.max(6, scoreDelta * 2)} XP ${tag.toUpperCase()}`;
    }

    if (streakEl) {
      streakEl.textContent = `🔥 ${Math.max(1, this.streakCount)}x Multiplier Active`;
    }

    if (titleEl) {
      titleEl.textContent = scoreDelta >= 7 ? 'Outstanding Response!' : scoreDelta >= 4 ? 'Good Foundation' : 'Room for Growth';
    }
    if (textEl) textEl.textContent = evaluation.feedback;
    if (tipEl) tipEl.textContent = evaluation.tip;

    modal.classList.add('active');
  }

  _hideCheckpointModal() {
    const modal = document.getElementById('checkpoint-modal');
    if (modal) modal.classList.remove('active');
  }

  /**
   * Advance to next scenario or loop scene bank
   */
  advanceToNextScenario() {
    this._hideCheckpointModal();
    this.scenarioStep++;

    if (this._pendingNextScenario) {
      const next = this.aiBridge.getScenario(this.sceneName, this._pendingNextScenario);
      this.startScenario(next);
    } else {
      // Loop back or reset
      this.scenarioStep = 1;
      this.startScenario(this.aiBridge.getScenario(this.sceneName));
    }
  }

  /**
   * Frame animation loop: Updates physics, player, NPC, and draws scene
   */
  _animate() {
    requestAnimationFrame(this._animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // 1. Update Player
    this.player.update(delta);

    // 2. Update Active Scene & NPCs
    if (this.activeScene) {
      this.activeScene.update(delta);
    }

    // 3. Render WebGL Scene
    this.renderer.render(this.scene, this.camera);

    // 4. Update Performance Counter HUD
    this._updatePerfCounter();

    // 5. Render Office Floor Radar & Proximity Telemetry
    this._renderOfficeMinimap();
  }

  /**
   * Track FPS and WebGL Draw Calls
   */
  _updatePerfCounter() {
    this.fpsCounter.frames++;
    const now = performance.now();
    if (now - this.fpsCounter.lastTime >= 1000) {
      this.fpsCounter.fps = this.fpsCounter.frames;
      this.fpsCounter.frames = 0;
      this.fpsCounter.lastTime = now;

      const drawCalls = this.renderer.info.render.calls;
      const triangles = this.renderer.info.render.triangles;
      const perfEl = document.getElementById('perf-display');
      if (perfEl) {
        perfEl.textContent = `${this.fpsCounter.fps} FPS | ${drawCalls} DC | ${triangles} Tris`;
      }
    }
  }
}

// Bootstrap when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new ELiVETGame();
});
