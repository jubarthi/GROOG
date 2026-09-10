/**
 * GROOG - COMPONENT 07: CONSOLIDATED TACTICAL DOSSIER & POINT AUDIT
 */
import { GroogMath } from '../engine/groog-math.js';
import { I18N } from '../engine/i18n.js';
import { StorageEngine } from '../engine/storage.js';

export const SheetViewComponent = {
  render(char) {
    const a = char.attributes;
    const s = char.secondary;
    const d = char.dossier;

    const points = GroogMath.calculatePoints(char);
    const basicLift = GroogMath.getBasicLift(a.st);
    const damage = GroogMath.getDamageByST(a.st);
    const basicSpeed = GroogMath.getBasicSpeed(a.dx, a.ht, s.speedMod);
    const basicMove = GroogMath.getBasicMove(basicSpeed, s.moveMod);
    const baseDodge = GroogMath.getDodge(basicSpeed);

    const totalWeight = (char.equipment || []).reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const enc = GroogMath.getEncumbrance(totalWeight, basicLift);
    const hasCR = (char.advantages || []).some(ad => ad.name.toLowerCase().includes('reflexos em combate'));
    const mobility = GroogMath.getEffectiveMobility(basicMove, basicSpeed, enc, hasCR);

    return `
      <div class="hud-frame-chamfer hud-section" id="printable-dossier">
        <div class="section-header">
          <div>
            <div class="section-title">GROOG // DOSSIÊ TÁTICO CONSOLIDADO</div>
            <small style="color: var(--text-dim); font-family: var(--font-mono);">${char.name || 'OPERADOR'} | ${char.concept || 'COMBATENTE'}</small>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-tactical" id="btn-export-json">💾 EXPORTAR JSON</button>
            <button class="btn-tactical" id="btn-print-sheet">🖨️ IMPRIMIR / PDF</button>
          </div>
        </div>

        <!-- POINT SUMMARY AUDIT BOX -->
        <div class="hud-panel" style="padding: 14px; margin-bottom: 20px; border-color: ${points.remaining < 0 ? 'var(--status-alert)' : 'var(--accent-primary)'};">
          <div class="section-title" style="margin-bottom: 8px;">BALANÇO CONTÁBIL DE PONTOS</div>
          <div class="grid-4col" style="font-family: var(--font-mono); font-size: 0.95rem;">
            <div>Atributos: <strong>${points.attributesTotal} pts</strong></div>
            <div>Secundários: <strong>${points.secondaryTotal} pts</strong></div>
            <div>Vantagens: <strong>${points.advantagesTotal} pts</strong></div>
            <div>Desvantagens: <strong style="color: var(--status-alert);">${points.disadvantagesTotal} pts</strong></div>
            <div>Perícias: <strong>${points.skillsTotal} pts</strong></div>
            <div>Social / NT: <strong>${points.socialTotal} pts</strong></div>
            <div>Total Gasto: <strong style="color: var(--neon-white); font-size: 1.1rem;">${points.totalSpent} / ${points.budget} pts</strong></div>
            <div>Saldo: <strong style="color: ${points.remaining < 0 ? 'var(--status-alert)' : 'var(--status-ready)'}; font-size: 1.1rem;">${points.remaining} pts</strong></div>
          </div>
        </div>

        <!-- TWO COLUMN SUMMARY -->
        <div class="grid-2col">
          
          <!-- LEFT: IDENTIFICATION & CORE STATS -->
          <div class="hud-panel" style="padding: 14px;">
            <div class="section-title" style="margin-bottom: 10px;">DADOS DO OPERADOR</div>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.7;">
              <div>NOME: <strong>${char.name}</strong></div>
              <div>JOGADOR: <strong>${char.player}</strong></div>
              <div>CONCEITO: <strong>${char.concept}</strong></div>
              <div>IDADE / ORIGEM: <strong>${d.age} anos | ${d.birthday}</strong></div>
              <div>FÍSICO: <strong>${d.height || ''} | ${d.dominantHand} | NT ${d.tl}</strong></div>
            </div>

            <div class="section-title" style="margin: 16px 0 10px 0;">ATRIBUTOS & DERIVADOS</div>
            <div class="grid-4col" style="text-align: center; margin-bottom: 12px;">
              <div style="background: rgba(0,0,0,0.3); padding: 8px; border: 1px solid var(--chassis-border);">
                <span class="form-label">ST</span><strong style="font-size: 1.4rem; color: var(--neon-white);">${a.st}</strong>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 8px; border: 1px solid var(--chassis-border);">
                <span class="form-label">DX</span><strong style="font-size: 1.4rem; color: var(--neon-white);">${a.dx}</strong>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 8px; border: 1px solid var(--chassis-border);">
                <span class="form-label">IQ</span><strong style="font-size: 1.4rem; color: var(--neon-white);">${a.iq}</strong>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 8px; border: 1px solid var(--chassis-border);">
                <span class="form-label">HT</span><strong style="font-size: 1.4rem; color: var(--neon-white);">${a.ht}</strong>
              </div>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.7;">
              <div>PONTOS DE VIDA (PV): <strong>${a.st + (s.hpMod||0)}</strong> | PONTOS DE FADIGA (PF): <strong>${a.ht + (s.fpMod||0)}</strong></div>
              <div>VONTADE: <strong>${a.iq + (s.willMod||0)}</strong> | PERCEPÇÃO: <strong>${a.iq + (s.perMod||0)}</strong></div>
              <div>DANO BÁSICO: <strong>GdP ${damage.thrust} | GeB ${damage.swing}</strong></div>
              <div>BASE DE CARGA (BC): <strong>${basicLift} kg</strong></div>
              <div>ESQUIVA EFETIVA: <strong style="color: var(--status-ready);">${mobility.effectiveDodge}</strong> | DESLOCAMENTO: <strong>${mobility.effectiveMove} m/s</strong></div>
            </div>
          </div>

          <!-- RIGHT: SKILLS & GEAR -->
          <div class="hud-panel" style="padding: 14px;">
            <div class="section-title" style="margin-bottom: 8px;">LISTA DE PERÍCIAS PRINCIPAIS</div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 16px;">
              ${(char.skills || []).map(sk => {
                const attrVal = (sk.attr === 'IQ') ? a.iq : (sk.attr === 'HT') ? a.ht : (sk.attr === 'ST') ? a.st : a.dx;
                const nh = GroogMath.getSkillFinalNH(attrVal, sk.difficulty, sk.points);
                return `<div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(122,143,166,0.15); padding: 3px 0;">
                  <span>${sk.name} (${sk.attr}/${sk.difficulty}) [${sk.points} pts]</span>
                  <strong style="color: var(--accent-primary); font-size: 1rem;">NH ${nh}</strong>
                </div>`;
              }).join('')}
            </div>

            <div class="section-title" style="margin-bottom: 8px;">EQUIPAMENTO & CARGA (${Math.round(totalWeight*10)/10} kg - ${enc.name})</div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem;">
              ${(char.equipment || []).map(eq => `
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(122,143,166,0.15); padding: 3px 0;">
                  <span>${eq.name} (x${eq.qty||1})</span>
                  <span>${(eq.weight||0)*(eq.qty||1)} kg | $${(eq.cost||0)*(eq.qty||1)}</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    `;
  },

  bindEvents(char) {
    const btnExp = document.getElementById('btn-export-json');
    if (btnExp) {
      btnExp.onclick = () => StorageEngine.exportJSON(char);
    }

    const btnPrint = document.getElementById('btn-print-sheet');
    if (btnPrint) {
      btnPrint.onclick = () => window.print();
    }
  }
};
