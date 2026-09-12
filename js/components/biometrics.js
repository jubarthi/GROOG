/**
 * GROOG - STEP 02: BIOMETRICS & ATTRIBUTES (PAINEL DE MOSTRADORES NIXIE)
 */
import { GroogMath } from '../engine/groog-math.js';
import { I18N } from '../engine/i18n.js';

export const BiometricsComponent = {
  render(char) {
    const a = char.attributes;
    const s = char.secondary;

    const basicLift = GroogMath.getBasicLift(a.st);
    const damage = GroogMath.getDamageByST(a.st);
    const basicSpeed = GroogMath.getBasicSpeed(a.dx, a.ht, s.speedMod);
    const basicMove = GroogMath.getBasicMove(basicSpeed, s.moveMod);
    const baseDodge = GroogMath.getDodge(basicSpeed);

    const hpFinal = a.st + (s.hpMod || 0);
    const fpFinal = a.ht + (s.fpMod || 0);
    const willFinal = a.iq + (s.willMod || 0);
    const perFinal = a.iq + (s.perMod || 0);

    const renderAttrRow = (key, label, val, costPerLevel, baseCost) => {
      const cost = (val - 10) * costPerLevel;
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 8px; padding: 10px 14px; margin-bottom: 12px;">
          <div>
            <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; color: var(--brass-light); letter-spacing: 1px;">
              ${label}
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">
              ${cost >= 0 ? '+' + cost : cost} pts (${costPerLevel} pts/nível)
            </div>
          </div>
          
          <div style="display: flex; align-items: center; gap: 10px;">
            <button class="btn-stepper-heavy" data-action="attr-dec" data-attr="${key}">-</button>
            <div class="nixie-display" style="min-width: 60px;">
              <span class="nixie-val">${val}</span>
            </div>
            <button class="btn-stepper-heavy" data-action="attr-inc" data-attr="${key}">+</button>
          </div>
        </div>
      `;
    };

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="brass-plaque">ATRIBUTOS PRIMÁRIOS</span>
          <span class="vacuum-tube-light"></span>
        </div>

        ${renderAttrRow('st', 'FORÇA (ST)', a.st, 10)}
        ${renderAttrRow('dx', 'DESTREZA (DX)', a.dx, 20)}
        ${renderAttrRow('iq', 'INTELIGÊNCIA (IQ)', a.iq, 20)}
        ${renderAttrRow('ht', 'VITALIDADE (HT)', a.ht, 10)}

        <div style="margin: 20px 0 12px 0;">
          <span class="brass-plaque" style="font-size: 0.8rem;">TELEMETRIA BIOLÓGICA DERIVADA</span>
        </div>

        <!-- PV & PF GAUGES -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
          <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 6px; padding: 10px; text-align: center;">
            <div class="nixie-label">PONTOS DE VIDA (PV)</div>
            <div class="nixie-val" style="font-size: 1.8rem; color: var(--status-ready);">${hpFinal}</div>
            <div style="display: flex; justify-content: center; gap: 6px; margin-top: 6px;">
              <button class="btn-stepper-heavy" style="min-width:38px; height:38px; font-size:1.2rem;" data-action="sec-dec" data-sec="hpMod">-</button>
              <button class="btn-stepper-heavy" style="min-width:38px; height:38px; font-size:1.2rem;" data-action="sec-inc" data-sec="hpMod">+</button>
            </div>
          </div>

          <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 6px; padding: 10px; text-align: center;">
            <div class="nixie-label">PONTOS FADIGA (PF)</div>
            <div class="nixie-val" style="font-size: 1.8rem; color: var(--accent-primary);">${fpFinal}</div>
            <div style="display: flex; justify-content: center; gap: 6px; margin-top: 6px;">
              <button class="btn-stepper-heavy" style="min-width:38px; height:38px; font-size:1.2rem;" data-action="sec-dec" data-sec="fpMod">-</button>
              <button class="btn-stepper-heavy" style="min-width:38px; height:38px; font-size:1.2rem;" data-action="sec-inc" data-sec="fpMod">+</button>
            </div>
          </div>
        </div>

        <!-- READOUTS -->
        <div style="background: #080a0e; border: 1px solid var(--chassis-border); border-radius: 6px; padding: 12px; font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.8;">
          <div style="display: flex; justify-content: space-between;"><span>VONTADE / PERCEPÇÃO:</span><strong style="color: var(--neon-white);">${willFinal} / ${perFinal}</strong></div>
          <div style="display: flex; justify-content: space-between;"><span>BASE DE CARGA (BC):</span><strong style="color: var(--accent-primary);">${basicLift} kg</strong></div>
          <div style="display: flex; justify-content: space-between;"><span>DANO GOLPE PONTA (GdP):</span><strong style="color: var(--nixie-filament);">${damage.thrust}</strong></div>
          <div style="display: flex; justify-content: space-between;"><span>DANO GOLPE BALANÇO (GeB):</span><strong style="color: var(--nixie-filament);">${damage.swing}</strong></div>
          <div style="display: flex; justify-content: space-between;"><span>VELOCIDADE / DESLOCAMENTO:</span><strong style="color: var(--neon-white);">${basicSpeed.toFixed(2)} / ${basicMove} m/s</strong></div>
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    document.querySelectorAll('[data-action="attr-inc"]').forEach(btn => {
      btn.onclick = () => {
        const attr = btn.dataset.attr;
        char.attributes[attr]++;
        onUpdate();
      };
    });

    document.querySelectorAll('[data-action="attr-dec"]').forEach(btn => {
      btn.onclick = () => {
        const attr = btn.dataset.attr;
        if (char.attributes[attr] > 1) {
          char.attributes[attr]--;
          onUpdate();
        }
      };
    });

    document.querySelectorAll('[data-action="sec-inc"]').forEach(btn => {
      btn.onclick = () => {
        const sec = btn.dataset.sec;
        char.secondary[sec] = (char.secondary[sec] || 0) + 1;
        onUpdate();
      };
    });

    document.querySelectorAll('[data-action="sec-dec"]').forEach(btn => {
      btn.onclick = () => {
        const sec = btn.dataset.sec;
        char.secondary[sec] = (char.secondary[sec] || 0) - 1;
        onUpdate();
      };
    });
  }
};
