/**
 * ELiVET Game Engine — Procedural Realistic Texture Generator
 * Generates high-definition, photorealistic textures via HTML5 Canvas.
 * Zero external network downloads, instant load times, zero latency.
 */

import * as THREE from 'three';

export class TextureGenerator {
  /**
   * Helper to configure maximum anisotropy, mipmapping, and SRGB color space for photorealistic crispness
   */
  static _prepareTexture(texture) {
    if (texture) {
      texture.anisotropy = 16;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.colorSpace = THREE.SRGBColorSpace;
    }
    return texture;
  }

  /**
   * Realistic herringbone / dark walnut wood floor texture
   */
  static createWoodFloorTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Base warm walnut tone
    ctx.fillStyle = '#261c16';
    ctx.fillRect(0, 0, 1024, 1024);

    const plankWidth = 128;
    const plankLength = 256;

    for (let y = 0; y < 1024; y += plankWidth) {
      const rowOffset = (Math.floor(y / plankWidth) % 2) * (plankLength / 2);
      for (let x = -plankLength; x < 1024 + plankLength; x += plankLength) {
        const px = x + rowOffset;
        
        // Plank tone variation
        const toneVar = Math.sin(px * 0.05 + y * 0.1) * 12 + (Math.random() * 8 - 4);
        const r = Math.min(255, Math.max(0, 42 + toneVar));
        const g = Math.min(255, Math.max(0, 30 + toneVar * 0.8));
        const b = Math.min(255, Math.max(0, 22 + toneVar * 0.6));
        ctx.fillStyle = `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
        ctx.fillRect(px, y, plankLength - 2, plankWidth - 2);

        // Wood grain streaks
        ctx.fillStyle = 'rgba(0,0,0,0.07)';
        for (let gIdx = 0; gIdx < 6; gIdx++) {
          const gy = y + Math.random() * plankWidth;
          ctx.fillRect(px, gy, plankLength - 2, 2 + Math.random() * 3);
        }

        // Plank joint line
        ctx.fillStyle = 'rgba(10, 7, 5, 0.9)';
        ctx.fillRect(px, y + plankWidth - 2, plankLength, 2);
        ctx.fillRect(px + plankLength - 2, y, 2, plankWidth);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return this._prepareTexture(texture);
  }

  /**
   * Modern corporate window view: Panoramic skyline with glass towers & clouds
   */
  static createWindowViewTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Sky gradient (daylight horizon)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0, '#38bdf8');
    skyGrad.addColorStop(0.5, '#bae6fd');
    skyGrad.addColorStop(0.85, '#e0f2fe');
    skyGrad.addColorStop(1, '#f8fafc');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // Soft distant clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.beginPath();
    ctx.arc(200, 120, 90, 0, Math.PI * 2);
    ctx.arc(290, 100, 110, 0, Math.PI * 2);
    ctx.arc(380, 130, 80, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(700, 140, 85, 0, Math.PI * 2);
    ctx.arc(790, 110, 120, 0, Math.PI * 2);
    ctx.arc(880, 135, 75, 0, Math.PI * 2);
    ctx.fill();

    // Distant background skyscrapers (hazy blue)
    ctx.fillStyle = '#93c5fd';
    const bgTowers = [
      [50, 180, 80, 332],
      [150, 140, 100, 372],
      [280, 160, 90, 352],
      [420, 110, 120, 402],
      [580, 150, 85, 362],
      [710, 130, 110, 382],
      [860, 170, 95, 342]
    ];
    bgTowers.forEach(([x, y, w, h]) => ctx.fillRect(x, y, w, h));

    // Foreground modern glass towers
    const fgTowers = [
      { x: 100, y: 190, w: 90, h: 322, col: '#1e3a5f' },
      { x: 220, y: 150, w: 110, h: 362, col: '#0f172a' },
      { x: 360, y: 175, w: 95, h: 337, col: '#1e293b' },
      { x: 500, y: 130, w: 130, h: 382, col: '#0f172a' },
      { x: 670, y: 165, w: 105, h: 347, col: '#1e3a5f' },
      { x: 810, y: 185, w: 100, h: 327, col: '#334155' }
    ];

    fgTowers.forEach(({ x, y, w, h, col }) => {
      ctx.fillStyle = col;
      ctx.fillRect(x, y, w, h);

      // Glass window reflections
      ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
      for (let wy = y + 10; wy < y + h - 10; wy += 14) {
        for (let wx = x + 8; wx < x + w - 8; wx += 16) {
          if (Math.random() > 0.15) {
            ctx.fillRect(wx, wy, 10, 8);
          }
        }
      }
    });

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }

  /**
   * Laptop screen showing VS Code IDE with code & terminal
   */
  static createLaptopScreenTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');

    // VS Code dark theme background
    ctx.fillStyle = '#1e1e1e';
    ctx.fillRect(0, 0, 512, 320);

    // Tab bar
    ctx.fillStyle = '#2d2d2d';
    ctx.fillRect(0, 0, 512, 28);
    ctx.fillStyle = '#1e1e1e';
    ctx.fillRect(0, 0, 160, 28);
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Consolas, monospace';
    ctx.fillText('interview_solution.ts', 18, 19);

    // Sidebar
    ctx.fillStyle = '#252526';
    ctx.fillRect(0, 28, 44, 292);

    // Line numbers & Code text
    const lines = [
      { num: '1', col: '#569cd6', text: 'export async function solveProblem(input: Data) {' },
      { num: '2', col: '#9cdcfe', text: '    const result = await processPipeline(input);' },
      { num: '3', col: '#c586c0', text: '    if (!result.isValid) {' },
      { num: '4', col: '#ce9178', text: '        throw new ValidationError("Invalid payload");' },
      { num: '5', col: '#c586c0', text: '    }' },
      { num: '6', col: '#4ec9b0', text: '    return optimizePerformance(result.data);' },
      { num: '7', col: '#569cd6', text: '}' },
      { num: '8', col: '#6a9955', text: '    // STAR Method: Structured, verified, benchmarked' }
    ];

    ctx.font = '13px Consolas, monospace';
    lines.forEach(({ num, col, text }, i) => {
      const y = 56 + i * 22;
      ctx.fillStyle = '#858585';
      ctx.fillText(num, 54, y);
      ctx.fillStyle = col;
      ctx.fillText(text, 80, y);
    });

    // Integrated Terminal at bottom
    ctx.fillStyle = '#181818';
    ctx.fillRect(44, 240, 468, 80);
    ctx.fillStyle = '#4ec9b0';
    ctx.font = '11px Consolas, monospace';
    ctx.fillText('bash - elivet-candidate@workstation: ~/project', 54, 258);
    ctx.fillStyle = '#4ade80';
    ctx.fillText('✔ Tests passing: 18/18 suites (100%) [Runtime: 42ms]', 54, 280);
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('$ git push origin feature/production-ready', 54, 300);

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }

  /**
   * Contemporary framed corporate wall art
   */
  static createWallArtTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 512);

    // Geometric abstract arcs & accents
    ctx.strokeStyle = '#0ea5e9';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(256, 256, 170, 0, Math.PI * 1.5);
    ctx.stroke();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(280, 280, 110, Math.PI * 0.5, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#14b8a6';
    ctx.beginPath();
    ctx.arc(256, 256, 28, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('EXCELLENCE', 160, 460);

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }

  /**
   * Premium modular commercial carpet tile texture for open-plan office
   */
  static createOfficeCarpetTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Clean modern light slate-gray base
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 0, 512, 512);

    const tileSize = 128;
    for (let ty = 0; ty < 512; ty += tileSize) {
      for (let tx = 0; tx < 512; tx += tileSize) {
        const isAlternate = ((tx / tileSize) + (ty / tileSize)) % 2 === 0;

        // Subtle tile color nuance
        ctx.fillStyle = isAlternate ? '#475569' : '#3b4c64';
        ctx.fillRect(tx + 2, ty + 2, tileSize - 4, tileSize - 4);

        // Acoustic carpet micro-fiber texture
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        for (let i = 0; i < 60; i++) {
          const rx = tx + Math.random() * (tileSize - 6) + 3;
          const ry = ty + Math.random() * (tileSize - 6) + 3;
          ctx.fillRect(rx, ry, 2, 2);
        }

        // Seam shadow line
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.6)';
        ctx.lineWidth = 2;
        ctx.strokeRect(tx, ty, tileSize, tileSize);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);
    return this._prepareTexture(texture);
  }

  /**
   * 360-degree panoramic daylight sky and modern city skyline backdrop
   */
  static createSkyline360Texture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Bright daylight sky gradient (deep cerulean blue down to bright sun-lit horizon)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0, '#38bdf8');
    skyGrad.addColorStop(0.35, '#7dd3fc');
    skyGrad.addColorStop(0.65, '#bae6fd');
    skyGrad.addColorStop(0.88, '#e0f2fe');
    skyGrad.addColorStop(1, '#fef08a'); // Warm golden sun glow near horizon
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 2048, 512);

    // Warm Sun orb
    const sunGrad = ctx.createRadialGradient(1024, 220, 20, 1024, 220, 220);
    sunGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    sunGrad.addColorStop(0.3, 'rgba(254, 240, 138, 0.6)');
    sunGrad.addColorStop(1, 'rgba(254, 240, 138, 0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(1024, 220, 220, 0, Math.PI * 2);
    ctx.fill();

    // Cumulus Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    const cloudClusters = [
      [200, 140, 80], [320, 120, 110], [440, 145, 90],
      [1300, 150, 95], [1440, 125, 120], [1580, 150, 85],
      [1850, 130, 100]
    ];
    cloudClusters.forEach(([cx, cy, r]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Distant background skyscrapers (soft atmospheric blue)
    ctx.fillStyle = '#93c5fd';
    for (let x = 0; x < 2048; x += 60) {
      const h = 140 + Math.sin(x * 0.04) * 80 + (Math.sin(x * 0.12) * 40);
      const w = 45 + (x % 30);
      ctx.fillRect(x, 512 - h, w, h);
    }

    // Midground glass towers
    const midTowers = [
      { x: 80, w: 90, h: 260, c: '#1e3a5f' },
      { x: 230, w: 120, h: 320, c: '#0f172a' },
      { x: 410, w: 85, h: 240, c: '#1e293b' },
      { x: 550, w: 140, h: 350, c: '#0f172a' },
      { x: 740, w: 110, h: 290, c: '#1e3a5f' },
      { x: 900, w: 95, h: 270, c: '#334155' },
      { x: 1150, w: 130, h: 340, c: '#0f172a' },
      { x: 1340, w: 100, h: 280, c: '#1e3a5f' },
      { x: 1500, w: 125, h: 310, c: '#1e293b' },
      { x: 1680, w: 90, h: 250, c: '#0f172a' },
      { x: 1820, w: 140, h: 330, c: '#1e3a5f' }
    ];

    midTowers.forEach(({ x, w, h, c }) => {
      ctx.fillStyle = c;
      ctx.fillRect(x, 512 - h, w, h);

      // Glass window grid highlights
      ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
      for (let wy = 512 - h + 15; wy < 500; wy += 16) {
        for (let wx = x + 8; wx < x + w - 8; wx += 16) {
          if (Math.random() > 0.2) {
            ctx.fillRect(wx, wy, 9, 9);
          }
        }
      }
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return this._prepareTexture(texture);
  }

  /**
   * Kanban Agile Sprint Whiteboard Texture
   */
  static createKanbanBoardTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Clean white magnetic board
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 512, 256);

    // Header bar
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px system-ui, sans-serif';
    ctx.fillText('🚀 SPRINT 24 · ENGINEERING ROADMAP & PLACEMENT', 16, 28);
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(16, 38);
    ctx.lineTo(496, 38);
    ctx.stroke();

    // Column Headers
    const cols = [
      { name: 'BACKLOG', x: 20 },
      { name: 'IN PROGRESS', x: 180 },
      { name: 'VERIFIED / DONE', x: 340 }
    ];

    cols.forEach(({ name, x }) => {
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.fillText(name, x, 62);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.strokeRect(x - 6, 70, 140, 172);
    });

    // Sticky Notes (Yellow, Cyan, Emerald)
    const stickies = [
      { col: '#fef08a', text: 'STAR Framework Practice', x: 22, y: 76 },
      { col: '#fef08a', text: 'Resume ATS Benchmark', x: 22, y: 126 },
      { col: '#bae6fd', text: 'System Design Mock', x: 182, y: 76 },
      { col: '#bae6fd', text: 'Live Coding Challenge', x: 182, y: 126 },
      { col: '#a7f3d0', text: 'HR Etiquette Cleared', x: 342, y: 76 },
      { col: '#a7f3d0', text: 'Portfolio Deployed', x: 342, y: 126 }
    ];

    stickies.forEach(({ col, text, x, y }) => {
      ctx.fillStyle = col;
      ctx.fillRect(x, y, 126, 42);
      ctx.strokeStyle = 'rgba(0,0,0,0.12)';
      ctx.strokeRect(x, y, 126, 42);

      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.fillText(text, x + 8, y + 24);
    });

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }

  /**
   * Corporate glass logo sign for Office Floor Reception
   */
  static createCompanyHubSignTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');

    // Acrylic frosted glass backing
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 160);

    // Cyan glowing frame
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, 500, 148);

    // Corporate Brand Logo & Title
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.fillText('🎓 ELiVET INNOVATION LAB', 28, 55);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillText('ADVANCED ENGINEERING & EMPLOYABILITY CENTER', 28, 92);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 13px monospace';
    ctx.fillText('● SYSTEM STATUS: ONLINE · ALL PODS ACTIVE', 28, 126);

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }

  /**
   * Dual-screen secondary monitor: System Telemetry & Cloud Dashboard
   */
  static createMetricsDashboardTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');

    // Dark sleek dashboard theme
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, 512, 320);

    // Header
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 512, 34);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.fillText('📊 ELiVET Cloud Telemetry · Workstation Cluster', 16, 22);

    // KPI Cards
    const kpis = [
      { label: 'PLACEMENT SCORE', val: '94.2%', col: '#4ade80', x: 16 },
      { label: 'ALGO LATENCY', val: '18ms', col: '#38bdf8', x: 180 },
      { label: 'CODE REVIEW', val: 'PASS A+', col: '#fbbf24', x: 344 }
    ];

    kpis.forEach(({ label, val, col, x }) => {
      ctx.fillStyle = '#111827';
      ctx.fillRect(x, 46, 150, 60);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.strokeRect(x, 46, 150, 60);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px system-ui, sans-serif';
      ctx.fillText(label, x + 10, 64);

      ctx.fillStyle = col;
      ctx.font = 'bold 20px monospace';
      ctx.fillText(val, x + 10, 94);
    });

    // Real-Time Line Chart
    ctx.fillStyle = '#111827';
    ctx.fillRect(16, 120, 480, 185);
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.strokeRect(16, 120, 480, 185);

    // Chart grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let gy = 145; gy < 300; gy += 35) {
      ctx.beginPath();
      ctx.moveTo(25, gy);
      ctx.lineTo(485, gy);
      ctx.stroke();
    }

    // Glowing Cyan Graph line
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, 240);
    ctx.lineTo(90, 210);
    ctx.lineTo(160, 230);
    ctx.lineTo(240, 160);
    ctx.lineTo(320, 180);
    ctx.lineTo(400, 145);
    ctx.lineTo(475, 150);
    ctx.stroke();

    // Emerald Peak line
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, 260);
    ctx.lineTo(120, 245);
    ctx.lineTo(220, 195);
    ctx.lineTo(340, 210);
    ctx.lineTo(475, 175);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }

  /**
   * Premium worsted wool suit fabric texture (Fine diagonal twill weave with tactile micro-depth)
   */
  static createSuitWoolTexture(baseColorHex = '#172b46') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, 512, 512);

    // Fine diagonal twill weave pattern
    const step = 8;
    for (let y = 0; y < 512; y += step) {
      for (let x = 0; x < 512; x += step) {
        const isHighlight = ((x + y) / step) % 2 === 0;
        ctx.fillStyle = isHighlight ? 'rgba(255, 255, 255, 0.045)' : 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(x, y, step, step);

        // Subtle micro-fiber speckle
        if ((x * 17 + y * 23) % 7 === 0) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
          ctx.fillRect(x + 2, y + 2, 2, 2);
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 16);
    return this._prepareTexture(texture);
  }

  /**
   * Crisp executive cotton shirt broadcloth texture (Fine warp and weft weave)
   */
  static createShirtCottonTexture(baseColorHex = '#f8fafc') {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, 256, 256);

    // Subtle fine cotton threads
    const step = 4;
    for (let y = 0; y < 256; y += step) {
      ctx.fillStyle = (y % (step * 2) === 0) ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, y, 256, 1);
    }
    for (let x = 0; x < 256; x += step) {
      ctx.fillStyle = (x % (step * 2) === 0) ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.025)';
      ctx.fillRect(x, 0, 1, 256);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(24, 24);
    return this._prepareTexture(texture);
  }

  /**
   * Premium silk necktie texture (Diagonal repp twill with lustrous sheen)
   */
  static createSilkTieTexture(baseColorHex = '#1e3a5f') {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, 256, 256);

    // Diagonal silk ribbing
    const lineWidth = 6;
    for (let i = -256; i < 512; i += lineWidth * 2) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 256, 256);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(i + lineWidth, 0);
      ctx.lineTo(i + lineWidth + 256, 256);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);
    return this._prepareTexture(texture);
  }

  /**
   * Hand-burnished calfskin leather texture for shoes and formal belt
   */
  static createLeatherTexture(baseColorHex = '#09090b') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, 512, 512);

    // Subtle leather grain and surface sheen gradient
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.07)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.03)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Micro-pore leather grain
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    for (let i = 0; i < 600; i++) {
      const rx = Math.random() * 512;
      const ry = Math.random() * 512;
      const s = Math.random() * 2 + 1;
      ctx.fillRect(rx, ry, s, s);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);
    return this._prepareTexture(texture);
  }

  /**
   * Natural human skin texture (Warm epidermal tone with subtle pore micro-texture)
   */
  static createSkinTexture(baseColorHex = '#c68642') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, 512, 512);

    // Soft warm radial blush
    const radGrad = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
    radGrad.addColorStop(0, 'rgba(255, 180, 160, 0.08)');
    radGrad.addColorStop(0.7, 'rgba(230, 120, 100, 0.04)');
    radGrad.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Fine epidermal skin texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      ctx.fillRect(x, y, 1.5, 1.5);
    }

    const texture = new THREE.CanvasTexture(canvas);
    return this._prepareTexture(texture);
  }
}


