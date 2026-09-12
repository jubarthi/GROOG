/**
 * GROOG - STEP 03: COMBAT DEFENSES & MOBILITY (PAINEL DE AÇO)
 */
import { GroogMath } from '../engine/groog-math.js';
import { I18N } from '../engine/i18n.js';

export const CombatLoadComponent = {
  render(char) {
    const a = char.attributes;
    const s = char.secondary;

    const basicLift = GroogMath.getBasicLift(a.st);
    const basicSpeed = GroogMath.getBasicSpeed(a.dx, a.ht, s.speedMod);
    const basicMove = GroogMath.getBasicMove(basicSpeed, s.moveMod);

    const totalWeight = (char.equipment || []).reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const roundedWeight = Math.round(totalWeight * 10) / 10;
    const enc = GroogMath.getEncumbrance(roundedWeight, basicLift);
    const hasCR = (char.advantages || []).some(ad => ad.name.toLowerCase().includes('reflexos em combate') || ad.name.toLowerCase().includes('combat reflexes'));
    const mobility = GroogMath.getEffectiveMobility(basicMove, basicSpeed, enc, hasCR);

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="brass-plaque">DEFESAS ATIVAS & REAÇÃO</span>
          <span class="vacuum-tube-light"></span>
        </div>

        <!-- DEFENSES CARDS -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #0b0e14; border: 2px solid var(--accent-primary); border-radius: 8px; padding: 12px; text-align: center;">
            <div class="nixie-label">${I18N.t('dodge')}</div>
            <div class="nixie-val" style="font-size: 2.4rem; color: var(--status-ready);">${mobility.effectiveDodge}</div>
            <small style="color: var(--text-dim); font-size: 0.75rem;">Penalidade Carga: ${enc.dodgePenalty}</small>
          </div>

          <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 8px; padding: 12px; text-align: center;">
            <div class="nixie-label">DESLOCAMENTO ATUAL</div>
            <div class="nixie-val" style="font-size: 2.4rem; color: var(--accent-primary);">${mobility.effectiveMove} <small style="font-size:1rem;">m/s</small></div>
            <small style="color: var(--text-dim); font-size: 0.75rem;">${enc.name}</small>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 8px; padding: 12px; text-align: center;">
            <div class="nixie-label">APARAR BASE</div>
            <div class="nixie-val" style="font-size: 2rem;">${Math.floor(a.dx / 2) + 3 + (hasCR ? 1 : 0)}</div>
            <small style="color: var(--text-dim); font-size: 0.75rem;">Arma/2 + 3</small>
          </div>

          <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 8px; padding: 12px; text-align: center;">
            <div class="nixie-label">BLOQUEIO (ESCUDO)</div>
            <div class="nixie-val" style="font-size: 2rem;">${Math.floor(a.dx / 2) + 3 + (hasCR ? 1 : 0)}</div>
            <small style="color: var(--text-dim); font-size: 0.75rem;">Escudo/2 + 3</small>
          </div>
        </div>

        <div style="margin: 16px 0 10px 0;">
          <span class="brass-plaque" style="font-size: 0.8rem;">RESISTÊNCIA A DANO (RD) POR REGIÃO</span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div><label class="nixie-label">CRÂNIO</label><input type="number" class="chrono-input" value="4" style="text-align: center;"></div>
          <div><label class="nixie-label">TRONCO (COLETE)</label><input type="number" class="chrono-input" value="12" style="text-align: center;"></div>
          <div><label class="nixie-label">BRAÇOS</label><input type="number" class="chrono-input" value="2" style="text-align: center;"></div>
          <div><label class="nixie-label">PERNAS</label><input type="number" class="chrono-input" value="2" style="text-align: center;"></div>
        </div>
      </div>
    `;
  },

  bindEvents() {}
};
