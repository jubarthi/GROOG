/**
 * GROOG - COMPONENT 03: COMBAT DEFENSES, HIT LOCATIONS & DYNAMIC ENCUMBRANCE
 */
import { GroogMath } from '../engine/groog-math.js';
import { I18N } from '../engine/i18n.js';

export const CombatLoadComponent = {
  render(char) {
    const a = char.attributes;
    const s = char.secondary;

    // Derived physics
    const basicLift = GroogMath.getBasicLift(a.st);
    const basicSpeed = GroogMath.getBasicSpeed(a.dx, a.ht, s.speedMod);
    const basicMove = GroogMath.getBasicMove(basicSpeed, s.moveMod);

    // Sum inventory weight
    const totalWeight = (char.equipment || []).reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const roundedWeight = Math.round(totalWeight * 10) / 10;

    // Encumbrance calculation
    const enc = GroogMath.getEncumbrance(roundedWeight, basicLift);
    const hasCombatReflexes = (char.advantages || []).some(ad => ad.name.toLowerCase().includes('reflexos em combate') || ad.name.toLowerCase().includes('combat reflexes'));
    const mobility = GroogMath.getEffectiveMobility(basicMove, basicSpeed, enc, hasCombatReflexes);

    return `
      <div class="hud-frame-chamfer hud-section">
        <div class="section-header">
          <div class="section-title">${I18N.t('tabCombat')} - DEFESAS ATIVAS & CARGA DINÂMICA</div>
          <div class="telemetry-badge"><span class="badge-num">003</span><span class="badge-label">CARGA</span><span class="badge-val">${enc.name}</span></div>
        </div>

        <!-- ACTIVE DEFENSES CARDS -->
        <div class="grid-4col" style="margin-bottom: 20px;">
          
          <div class="hud-panel" style="padding: 12px; text-align: center; border-color: var(--accent-primary);">
            <span class="form-label">${I18N.t('dodge')}</span>
            <div style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 900; color: var(--status-ready); text-shadow: 0 0 10px rgba(0,255,170,0.5);">
              ${mobility.effectiveDodge}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Penalidade Carga: ${enc.dodgePenalty} ${hasCombatReflexes ? '| +1 CR' : ''}</span>
          </div>

          <div class="hud-panel" style="padding: 12px; text-align: center;">
            <span class="form-label">${I18N.t('parry')}</span>
            <div style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 900; color: var(--neon-white);">
              ${Math.floor(a.dx / 2) + 3 + (hasCombatReflexes ? 1 : 0)}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Base (Arma / 2 + 3)</span>
          </div>

          <div class="hud-panel" style="padding: 12px; text-align: center;">
            <span class="form-label">${I18N.t('block')}</span>
            <div style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 900; color: var(--neon-white);">
              ${Math.floor(a.dx / 2) + 3 + (hasCombatReflexes ? 1 : 0)}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Com Escudo (+DB)</span>
          </div>

          <div class="hud-panel" style="padding: 12px; text-align: center;">
            <span class="form-label">DESLOCAMENTO ATUAL</span>
            <div style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 900; color: var(--accent-primary);">
              ${mobility.effectiveMove} <small style="font-size: 1rem;">m/s</small>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Fator: ${enc.moveFactor * 100}% do DB</span>
          </div>

        </div>

        <!-- DYNAMIC ENCUMBRANCE TABLE -->
        <div class="hud-panel" style="padding: 14px; margin-bottom: 20px;">
          <div class="section-title" style="margin-bottom: 8px;">MONITOR DE CARGA & TRANSPORTE DE EQUIPAMENTO</div>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 0.9rem; color: var(--text-main);">
              Peso Total em Mochila / Corpo: <strong style="color: var(--neon-white); font-family: var(--font-mono); font-size: 1.1rem;">${roundedWeight} kg</strong>
            </span>
            <span style="font-size: 0.85rem; color: var(--accent-primary); font-family: var(--font-mono);">
              Base de Carga (1x BC): ${basicLift} kg
            </span>
          </div>

          <div class="hud-progress-bar" style="height: 14px; margin-bottom: 12px;">
            <div class="hud-progress-fill" style="width: ${Math.min(100, (roundedWeight / (basicLift * 10 || 1)) * 100)}%; background: ${enc.level >= 3 ? 'var(--status-alert)' : enc.level >= 1 ? 'var(--status-warn)' : 'var(--accent-primary)'};"></div>
          </div>

          <table class="hud-table">
            <thead>
              <tr>
                <th>Nível de Carga</th>
                <th>Limite de Peso</th>
                <th>Deslocamento</th>
                <th>Penalidade Esquiva</th>
              </tr>
            </thead>
            <tbody>
              <tr style="${enc.level === 0 ? 'background: rgba(var(--accent-primary-rgb), 0.2); font-weight: bold;' : ''}">
                <td>Nenhuma (0)</td>
                <td>Até ${basicLift * 1} kg</td>
                <td>${basicMove} m/s (100%)</td>
                <td>0</td>
              </tr>
              <tr style="${enc.level === 1 ? 'background: rgba(var(--accent-primary-rgb), 0.2); font-weight: bold;' : ''}">
                <td>Leve (1)</td>
                <td>Até ${basicLift * 2} kg</td>
                <td>${Math.max(1, Math.floor(basicMove * 0.8))} m/s (80%)</td>
                <td>-1</td>
              </tr>
              <tr style="${enc.level === 2 ? 'background: rgba(var(--accent-primary-rgb), 0.2); font-weight: bold;' : ''}">
                <td>Média (2)</td>
                <td>Até ${basicLift * 3} kg</td>
                <td>${Math.max(1, Math.floor(basicMove * 0.6))} m/s (60%)</td>
                <td>-2</td>
              </tr>
              <tr style="${enc.level === 3 ? 'background: rgba(var(--accent-primary-rgb), 0.2); font-weight: bold;' : ''}">
                <td>Pesada (3)</td>
                <td>Até ${basicLift * 6} kg</td>
                <td>${Math.max(1, Math.floor(basicMove * 0.4))} m/s (40%)</td>
                <td>-3</td>
              </tr>
              <tr style="${enc.level === 4 ? 'background: rgba(var(--accent-primary-rgb), 0.2); font-weight: bold;' : ''}">
                <td>Muito Pesada (4)</td>
                <td>Até ${basicLift * 10} kg</td>
                <td>${Math.max(1, Math.floor(basicMove * 0.2))} m/s (20%)</td>
                <td>-4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- HIT LOCATION DAMAGE RESISTANCE (RD) -->
        <div class="hud-panel" style="padding: 14px;">
          <div class="section-title" style="margin-bottom: 8px;">RESISTÊNCIA A DANO (RD) POR REGIÃO ANATÔMICA</div>
          <div class="grid-4col">
            <div><label class="form-label">CRÂNIO / CABEÇA</label><input type="number" class="hud-input" value="4" placeholder="RD"></div>
            <div><label class="form-label">TRONCO (COLETE)</label><input type="number" class="hud-input" value="12" placeholder="RD"></div>
            <div><label class="form-label">BRAÇOS</label><input type="number" class="hud-input" value="2" placeholder="RD"></div>
            <div><label class="form-label">PERNAS</label><input type="number" class="hud-input" value="2" placeholder="RD"></div>
          </div>
        </div>

      </div>
    `;
  },

  bindEvents(char, onUpdate) {}
};
