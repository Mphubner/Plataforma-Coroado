import { ZONES, SQUARES, PATH } from './jornada-data';

const TW = 78, TH = 39, TD = 17;

export function isoXY(c: number, r: number) {
  return { x: (c - r) * TW / 2, y: (c + r) * TH / 2 };
}

function lighten(hex: string, f: number) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.min(255, Math.round(r + (255 - r) * f))},${Math.min(255, Math.round(g + (255 - g) * f))},${Math.min(255, Math.round(b + (255 - b) * f))})`;
}

function darken(hex: string, f: number) {
  if (!hex.startsWith('#')) return hex;
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.round(r * (1 - f))},${Math.round(g * (1 - f))},${Math.round(b * (1 - f))})`;
}

const ZPAL = [
  ['#1d4ed8', '#1e3a8a', '#1e40af'],
  ['#047857', '#064e3b', '#065f46'],
  ['#b45309', '#78350f', '#92400e'],
  ['#b91c1c', '#7f1d1d', '#991b1b'],
];

export function sqStyle(idx: number) {
  const sq = SQUARES[idx], z = sq.zone, p = ZPAL[z];
  const base = { top: p[0], lft: p[1], rgt: p[2], h: 1, glow: null as string | null, lbl: null as string | null };
  if (sq.t === 'start') return { ...base, top: '#b8860b', lft: '#5a3d00', rgt: '#8a5c00', h: 1.7, glow: '#C9922A', lbl: '🏁' };
  if (sq.t === 'final') return { ...base, top: '#C9922A', lft: '#7a5a18', rgt: '#9e7020', h: 2.4, glow: '#FFD700', lbl: '👑' };
  if (sq.t === 'ms') return { ...base, top: lighten(p[0], .22), lft: p[1], rgt: p[2], h: 1.6, glow: ZONES[z].col, lbl: ZONES[z].em };
  if (sq.t === 'bl') return { ...base, top: '#047857', lft: '#064e3b', rgt: '#065f46', h: 1.15, glow: '#10b981', lbl: '✨' };
  if (sq.t === 'rv') return { ...base, top: '#7f1d1d', lft: '#450a0a', rgt: '#6b1212', h: 0.65, glow: null, lbl: '🌀' };
  if (sq.t === 'ch') return { ...base, top: lighten(p[0], .14), lft: p[1], rgt: p[2], h: 1.3, glow: ZONES[z].col + '77', lbl: '⚡' };
  return base;
}

export function drawTile(ctx: CanvasRenderingContext2D, idx: number, c: number, r: number) {
  const { x, y } = isoXY(c, r);
  const { top, lft, rgt, h, glow, lbl } = sqStyle(idx);
  const dep = TD * h;
  if (glow) { ctx.shadowColor = glow; ctx.shadowBlur = 22; }
  ctx.strokeStyle = 'rgba(0,0,0,.5)'; ctx.lineWidth = .9;
  
  // top face
  ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + TW / 2, y + TH / 2);
  ctx.lineTo(x, y + TH); ctx.lineTo(x - TW / 2, y + TH / 2);
  ctx.closePath(); ctx.fillStyle = top; ctx.fill(); ctx.stroke();
  ctx.shadowBlur = 0;
  
  // left face
  ctx.beginPath();
  ctx.moveTo(x - TW / 2, y + TH / 2); ctx.lineTo(x, y + TH);
  ctx.lineTo(x, y + TH + dep); ctx.lineTo(x - TW / 2, y + TH / 2 + dep);
  ctx.closePath(); ctx.fillStyle = lft; ctx.fill(); ctx.stroke();
  
  // right face
  ctx.beginPath();
  ctx.moveTo(x + TW / 2, y + TH / 2); ctx.lineTo(x, y + TH);
  ctx.lineTo(x, y + TH + dep); ctx.lineTo(x + TW / 2, y + TH / 2 + dep);
  ctx.closePath(); ctx.fillStyle = rgt; ctx.fill(); ctx.stroke();
  
  // label emoji
  if (lbl) {
    ctx.font = (TH * .52) + 'px sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(lbl, x, y + TH / 2 - 1);
  }
  
  // square number
  ctx.fillStyle = 'rgba(255,255,255,.22)';
  ctx.font = 'bold ' + (TH * .22) + 'px "DM Sans",sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText((idx + 1).toString(), x, y + TH * .8);
}

export function drawRoad(ctx: CanvasRenderingContext2D) {
  const bandDefs = [
    { y0: 312, y1: 450, zi: 0 },
    { y0: 172, y1: 312, zi: 1 },
    { y0: 42, y1: 172, zi: 2 },
    { y0: -88, y1: 42, zi: 3 },
  ];
  const xExtent = 440;
  const TW2 = TW / 2, TH2 = TH / 2;

  bandDefs.forEach(({ y0, y1, zi }) => {
    const z = ZONES[zi];
    ctx.save();
    ctx.fillStyle = z.col + '0b';
    ctx.strokeStyle = z.col + '14';
    ctx.lineWidth = 1;
    const corners = [
      { x: -xExtent, y: y0 },
      { x: xExtent, y: y0 },
      { x: xExtent, y: y1 },
      { x: -xExtent, y: y1 },
    ];
    const wc = corners.map(({ x, y }) => ({
      wx: isoXY((x / TW2 + y / TH2) / 2, (y / TH2 - x / TW2) / 2).x,
      wy: isoXY((x / TW2 + y / TH2) / 2, (y / TH2 - x / TW2) / 2).y + TH2,
    }));
    ctx.beginPath();
    ctx.moveTo(wc[0].wx, wc[0].wy);
    wc.slice(1).forEach(p => ctx.lineTo(p.wx, p.wy));
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  });

  const pts = PATH.map(({ c, r }) => {
    const { x, y } = isoXY(c, r);
    return { x, y: y + TH / 2 };
  });
  
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(0,0,0,.55)'; ctx.lineWidth = TW * .6;
  catmullRom(ctx, pts); ctx.stroke();
  
  ctx.strokeStyle = '#0e0e0e'; ctx.lineWidth = TW * .46;
  catmullRom(ctx, pts); ctx.stroke();
  
  for (let z = 0; z < 4; z++) {
    const seg = pts.slice(z * 10, z * 10 + 11);
    ctx.strokeStyle = ZONES[z].col + '26'; ctx.lineWidth = TW * .28;
    catmullRom(ctx, seg); ctx.stroke();
    ctx.strokeStyle = ZONES[z].col + '16'; ctx.lineWidth = 2; ctx.setLineDash([6, 13]);
    catmullRom(ctx, seg); ctx.stroke();
  }
  ctx.setLineDash([]);
}

function catmullRom(ctx: CanvasRenderingContext2D, pts: {x: number, y: number}[]) {
  if (pts.length < 2) return;
  ctx.beginPath();
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i];
    const p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
    const cp1x = p1.x + (p2.x - p0.x) / 6, cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6, cp2y = p2.y - (p3.y - p1.y) / 6;
    if (i === 0) ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }
}

export function drawPawns(ctx: CanvasRenderingContext2D, players: any[]) {
  const byPos: Record<number, number[]> = {};
  players.forEach((p, i) => { (byPos[p.pos] = byPos[p.pos] || []).push(i); });
  
  Object.entries(byPos).forEach(([pos, pis]) => {
    const pp = Number(pos);
    const { c, r } = PATH[pp];
    const { x, y } = isoXY(c, r);
    const dep = TD * (sqStyle(pp).h || 1);
    const topCY = y + TH / 2 - dep * .5;
    
    pis.forEach((pi, oi) => {
      const off = (oi - (pis.length - 1) / 2) * 13;
      drawPawn(ctx, x + off, topCY, players[pi].color, players[pi].name[0]);
    });
  });
}

function drawPawn(ctx: CanvasRenderingContext2D, x: number, by: number, color: string, letter: string) {
  const pH = 27, hR = 8.5;
  ctx.save(); ctx.globalAlpha = .22;
  ctx.beginPath(); ctx.ellipse(x, by + 2, 7, 3, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#000'; ctx.fill(); ctx.restore();
  
  const g1 = ctx.createLinearGradient(x - 3, by - pH, x + 3, by);
  g1.addColorStop(0, color); g1.addColorStop(1, darken(color, .45));
  ctx.beginPath();
  ctx.moveTo(x - 3, by - pH + hR); ctx.lineTo(x + 3, by - pH + hR);
  ctx.lineTo(x + 1.5, by); ctx.lineTo(x - 1.5, by); ctx.closePath();
  ctx.fillStyle = g1; ctx.fill();
  
  const g2 = ctx.createRadialGradient(x - 2, by - pH - 2, 1.5, x, by - pH, hR);
  g2.addColorStop(0, lighten(color, .35)); g2.addColorStop(1, color);
  ctx.beginPath(); ctx.arc(x, by - pH, hR, 0, Math.PI * 2);
  ctx.fillStyle = g2; ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.28)'; ctx.lineWidth = 1.2; ctx.stroke();
  
  ctx.fillStyle = 'rgba(255,255,255,.92)';
  ctx.font = 'bold 7px "DM Sans",sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(letter.toUpperCase(), x, by - pH + .5);
}

export function drawZoneLabels(ctx: CanvasRenderingContext2D) {
  const bannerPts = [
    { sy: 362, zi: 0 },
    { sy: 222, zi: 1 },
    { sy: 92, zi: 2 },
    { sy: -38, zi: 3 },
  ];
  
  bannerPts.forEach(({ sy, zi }) => {
    const z = ZONES[zi];
    const cr = sy / TH;
    const { x, y } = isoXY(cr, cr);
    ctx.save();
    
    const pw = 160, ph = 20, pr = 5;
    ctx.fillStyle = z.col + '22';
    ctx.strokeStyle = z.col + '55';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x - pw / 2, y - ph / 2, pw, ph, pr);
    ctx.fill(); ctx.stroke();
    
    ctx.font = 'bold 10px "Bebas Neue", sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = z.col;
    ctx.fillText(z.em + '  ' + z.lbl + '  —  ' + z.ds, x, y);
    ctx.restore();
  });
}

export function drawDirectionArrows(ctx: CanvasRenderingContext2D) {
  const arrows: Record<number, string> = { 0: '→', 1: '←', 2: '→', 3: '←' };
  for (let i = 0; i < 40; i++) {
    const sq = SQUARES[i];
    if (!['q', 'bl', 'rv'].includes(sq.t)) continue;
    const zone = sq.zone;
    const { c, r } = PATH[i];
    const { x, y } = isoXY(c, r);
    const topY = y + TH / 2 - TD * (sqStyle(i).h || 1) * 0.35;
    
    ctx.save();
    ctx.font = (TH * 0.32) + 'px sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.fillText(arrows[zone], x, topY);
    ctx.restore();
  }
}

export function drawZoneStrip(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const sH = 22, mg = 8, sW = (W - mg * 2) / 4;
  ctx.save();
  ZONES.forEach((z, i) => {
    const rx = mg + i * sW, ry = H - sH - mg;
    ctx.fillStyle = z.col + '18';
    ctx.strokeStyle = z.col + '44';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(rx, ry, sW - 4, sH, 4);
    else ctx.rect(rx, ry, sW - 4, sH);
    ctx.fill(); ctx.stroke();
    
    ctx.fillStyle = z.col;
    ctx.font = 'bold 9px "Bebas Neue", sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(z.em + '  ' + z.lbl, rx + (sW - 4) / 2, ry + sH / 2);
  });
  ctx.restore();
}

export function getBoardBounds() {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  PATH.forEach(({ c, r }) => {
    const { x, y } = isoXY(c, r);
    x0 = Math.min(x0, x - TW / 2); x1 = Math.max(x1, x + TW / 2);
    y0 = Math.min(y0, y - TD * 3); y1 = Math.max(y1, y + TH + TD * 2.5);
  });
  return { x0, x1, y0, y1 };
}

export const PGRID_SORTED = PATH.map((p, i) => ({ ...p, i })).sort((a, b) => (a.c + a.r) - (b.c + b.r));
