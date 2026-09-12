/**
 * GROOG - STEP 08: CONSOLIDATED TACTICAL DOSSIER & FINAL AUDIT
 */
import { GroogMath } from '../engine/groog-math.js';
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

    const totalWeight = (char.equipment || []).reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const enc = GroogMath.getEncumbrance(totalWeight, basicLift);
    const hasCR = (char.advantages || []).some(ad => ad.name.toLowerCase().includes('reflexos em combate'));
    const mobility = GroogMath.getEffectiveMobility(basicMove, basicSpeed, enc, hasCR);

    return `
      <div class="steel-plate" id="printable-dossier">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <span class="brass-plaque">DOSSIÊ CONSOLIDADO // GROOG</span>
            <small style="display: block; color: var(--text-dim); font-family: var(--font-mono); margin-top: 4px;">${char.name || 'OPERADOR'} | ${char.concept || 'COMBATENTE'}</small>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-chrono primary" id="btn-export-json">💾 JSON</button>
            <button class="btn-chrono" id="btn-print-sheet">🖨️ PDF / A4</button>
          </div>
        </div>

        <!-- BALANCE AUDIT -->
        <div style="background: #080a0e; border: 1.5px solid ${points.remaining < 0 ? 'var(--status-alert)' : 'var(--brass-gold)'}; border-radius: 8px; padding: 12px; margin-bottom: 16px;">
          <div class="brass-plaque" style="font-size: 0.75rem; margin-bottom: 8px;">BALANÇO CONTÁBIL DE PONTOS</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-family: var(--font-mono); font-size: 0.95rem;">
            <div>Atributos: <strong>${points.attributesTotal} pts</strong></div>
            <div>Secundários: <strong>${points.secondaryTotal} pts</strong></div>
            <div>Vantagens: <strong>${points.advantagesTotal} pts</strong></div>
            <div>Desvantagens: <strong style="color: var(--status-alert);">${points.disadvantagesTotal} pts</strong></div>
            <div>Perícias: <strong>${points.skillsTotal} pts</strong></div>
            <div>Social / NT: <strong>${points.socialTotal} pts</strong></div>
            <div style="grid-column: span 2; border-top: 1px solid var(--chassis-border); padding-top: 6px; display: flex; justify-content: space-between;">
              <span>TOTAL GASTO: <strong style="color: var(--neon-white);">${points.totalSpent} / ${points.budget} pts</strong></span>
              <span>SALDO: <strong style="color: ${points.remaining < 0 ? 'var(--status-alert)' : 'var(--status-ready)'}; font-size: 1.1rem;">${points.remaining} pts</strong></span>
            </div>
          </div>
        </div>

        <!-- SUMMARY TILES -->
        <div style="background: #0b0e14; border: 1px solid var(--chassis-border); border-radius: 8px; padding: 12px; margin-bottom: 14px; font-family: var(--font-mono); line-height: 1.8;">
          <div class="brass-plaque" style="font-size: 0.75rem; margin-bottom: 6px;">BIOMETRIA & ATRIBUTOS</div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); text-align: center; background: #080a0e; padding: 6px; border-radius: 4px; margin-bottom: 8px;">
            <div><span class="meter-label">ST</span><div class="meter-value" style="font-size: 1.4rem;">${a.st}</div></div>
            <div><span class="meter-label">DX</span><div class="meter-value" style="font-size: 1.4rem;">${a.dx}</div></div>
            <div><span class="meter-label">IQ</span><div class="meter-value" style="font-size: 1.4rem;">${a.iq}</div></div>
            <div><span class="meter-label">HT</span><div class="meter-value" style="font-size: 1.4rem;">${a.ht}</div></div>
          </div>
          <div>PV: <strong>${a.st + (s.hpMod||0)}</strong> | PF: <strong>${a.ht + (s.fpMod||0)}</strong> | VONT: <strong>${a.iq + (s.willMod||0)}</strong> | PER: <strong>${a.iq + (s.perMod||0)}</strong></div>
          <div>ESQUIVA: <strong style="color: var(--status-ready);">${mobility.effectiveDodge}</strong> | DESLOCAMENTO: <strong>${mobility.effectiveMove} m/s</strong> (${enc.name})</div>
          <div>DANO: <strong>GdP ${damage.thrust} | GeB ${damage.swing}</strong> | BC: <strong>${basicLift} kg</strong></div>
        </div>

        <!-- SKILLS SUMMARY -->
        <div style="background: #0b0e14; border: 1px solid var(--chassis-border); border-radius: 8px; padding: 12px; font-family: var(--font-mono); font-size: 0.85rem;">
          <div class="brass-plaque" style="font-size: 0.75rem; margin-bottom: 6px;">PERÍCIAS CADASTRADAS</div>
          ${(char.skills || []).map(sk => {
            const attrVal = (sk.attr === 'IQ') ? a.iq : (sk.attr === 'HT') ? a.ht : (sk.attr === 'ST') ? a.st : a.dx;
            const nh = GroogMath.getSkillFinalNH(attrVal, sk.difficulty, sk.points);
            return `<div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(84,96,114,0.2); padding: 4px 0;">
              <span>${sk.name} (${sk.attr}/${sk.difficulty})</span>
              <strong style="color: var(--accent-primary); font-size: 1rem;">NH ${nh}</strong>
            </div>`;
          }).join('')}
        </div>
      </div>
    `;
  },

  bindEvents(char) {
    document.getElementById('btn-export-json')?.addEventListener('click', () => StorageEngine.exportJSON(char));
    document.getElementById('btn-print-sheet')?.addEventListener('click', () => window.print());
  }
};
