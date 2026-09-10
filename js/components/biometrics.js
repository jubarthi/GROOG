/**
 * GROOG - COMPONENT 02: BIOMETRICS & ATTRIBUTES (HEXAGONAL NODES & LIVE DERIVATIONS)
 */
import { GroogMath } from '../engine/groog-math.js';
import { I18N } from '../engine/i18n.js';

export const BiometricsComponent = {
  render(char) {
    const a = char.attributes;
    const s = char.secondary;

    // Mathematical Derivations
    const basicLift = GroogMath.getBasicLift(a.st);
    const damage = GroogMath.getDamageByST(a.st);
    const basicSpeed = GroogMath.getBasicSpeed(a.dx, a.ht, s.speedMod);
    const basicMove = GroogMath.getBasicMove(basicSpeed, s.moveMod);
    const baseDodge = GroogMath.getDodge(basicSpeed);

    const hpFinal = a.st + (s.hpMod || 0);
    const fpFinal = a.ht + (s.fpMod || 0);
    const willFinal = a.iq + (s.willMod || 0);
    const perFinal = a.iq + (s.perMod || 0);

    const stCost = (a.st - 10) * 10;
    const dxCost = (a.dx - 10) * 20;
    const iqCost = (a.iq - 10) * 20;
    const htCost = (a.ht - 10) * 10;

    return `
      <div class="hud-frame-chamfer hud-section">
        <div class="section-header">
          <div class="section-title">${I18N.t('tabBiometrics')} - ATRIBUTOS PRIMÁRIOS & BIOMETRIA</div>
          <div class="telemetry-badge"><span class="badge-num">002</span><span class="badge-label">TELEMETRIA</span><span class="badge-val">ONLINE</span></div>
        </div>

        <!-- 4 HEXAGONAL NODES -->
        <div class="grid-4col" style="margin-bottom: 24px;">
          
          <!-- ST (FORÇA) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div class="hex-node">
              <div class="hex-node-inner">
                <span class="attr-label">ST</span>
                <span class="attr-val">${a.st}</span>
                <span class="attr-cost">${stCost >= 0 ? '+' + stCost : stCost} pts</span>
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn-stepper" data-action="attr-dec" data-attr="st">-</button>
              <button class="btn-stepper" data-action="attr-inc" data-attr="st">+</button>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">${I18N.t('st')}</span>
          </div>

          <!-- DX (DESTREZA) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div class="hex-node">
              <div class="hex-node-inner">
                <span class="attr-label">DX</span>
                <span class="attr-val">${a.dx}</span>
                <span class="attr-cost">${dxCost >= 0 ? '+' + dxCost : dxCost} pts</span>
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn-stepper" data-action="attr-dec" data-attr="dx">-</button>
              <button class="btn-stepper" data-action="attr-inc" data-attr="dx">+</button>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">${I18N.t('dx')}</span>
          </div>

          <!-- IQ (INTELIGÊNCIA) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div class="hex-node">
              <div class="hex-node-inner">
                <span class="attr-label">IQ</span>
                <span class="attr-val">${a.iq}</span>
                <span class="attr-cost">${iqCost >= 0 ? '+' + iqCost : iqCost} pts</span>
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn-stepper" data-action="attr-dec" data-attr="iq">-</button>
              <button class="btn-stepper" data-action="attr-inc" data-attr="iq">+</button>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">${I18N.t('iq')}</span>
          </div>

          <!-- HT (VITALIDADE) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div class="hex-node">
              <div class="hex-node-inner">
                <span class="attr-label">HT</span>
                <span class="attr-val">${a.ht}</span>
                <span class="attr-cost">${htCost >= 0 ? '+' + htCost : htCost} pts</span>
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn-stepper" data-action="attr-dec" data-attr="ht">-</button>
              <button class="btn-stepper" data-action="attr-inc" data-attr="ht">+</button>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">${I18N.t('ht')}</span>
          </div>

        </div>

        <!-- DERIVED STATS & GAUGES -->
        <div class="section-title" style="margin: 16px 0 12px 0;">TELEMETRIA BIOMÉTRICA DERIVADA</div>
        
        <div class="grid-2col">
          <!-- Left Column: HP, FP, Will, Per -->
          <div class="hud-panel" style="padding: 14px;">
            
            <!-- PV (Hit Points) -->
            <div style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span class="form-label">${I18N.t('hp')}: <strong style="color: var(--neon-white); font-size: 1.1rem;">${hpFinal} PV</strong></span>
                <div style="display: flex; gap: 4px;">
                  <button class="btn-stepper" style="width:26px; height:26px; font-size:1rem;" data-action="sec-dec" data-sec="hpMod">-</button>
                  <button class="btn-stepper" style="width:26px; height:26px; font-size:1rem;" data-action="sec-inc" data-sec="hpMod">+</button>
                </div>
              </div>
              <div class="hud-progress-bar"><div class="hud-progress-fill" style="width: 100%;"></div></div>
            </div>

            <!-- PF (Fatigue Points) -->
            <div style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span class="form-label">${I18N.t('fp')}: <strong style="color: var(--neon-white); font-size: 1.1rem;">${fpFinal} PF</strong></span>
                <div style="display: flex; gap: 4px;">
                  <button class="btn-stepper" style="width:26px; height:26px; font-size:1rem;" data-action="sec-dec" data-sec="fpMod">-</button>
                  <button class="btn-stepper" style="width:26px; height:26px; font-size:1rem;" data-action="sec-inc" data-sec="fpMod">+</button>
                </div>
              </div>
              <div class="hud-progress-bar"><div class="hud-progress-fill" style="width: 100%; background: linear-gradient(90deg, #0088ff, #00ffaa);"></div></div>
            </div>

            <!-- Vontade & Percepção -->
            <div class="grid-2col">
              <div>
                <span class="form-label">${I18N.t('will')}: <strong style="color: var(--neon-white);">${willFinal}</strong></span>
                <div style="display: flex; gap: 4px; margin-top: 4px;">
                  <button class="btn-stepper" style="width:26px; height:26px;" data-action="sec-dec" data-sec="willMod">-</button>
                  <button class="btn-stepper" style="width:26px; height:26px;" data-action="sec-inc" data-sec="willMod">+</button>
                </div>
              </div>
              <div>
                <span class="form-label">${I18N.t('per')}: <strong style="color: var(--neon-white);">${perFinal}</strong></span>
                <div style="display: flex; gap: 4px; margin-top: 4px;">
                  <button class="btn-stepper" style="width:26px; height:26px;" data-action="sec-dec" data-sec="perMod">-</button>
                  <button class="btn-stepper" style="width:26px; height:26px;" data-action="sec-inc" data-sec="perMod">+</button>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Combat Physics & Movement -->
          <div class="hud-panel" style="padding: 14px;">
            <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(122,143,166,0.2);">
              <span style="color: var(--text-dim);">${I18N.t('basicLift')} [ST² / 10]:</span>
              <strong style="color: var(--neon-white); font-family: var(--font-mono);">${basicLift} kg</strong>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(122,143,166,0.2);">
              <span style="color: var(--text-dim);">${I18N.t('dmgThrust')}:</span>
              <strong style="color: var(--accent-primary); font-family: var(--font-mono); font-size: 1.1rem;">${damage.thrust}</strong>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(122,143,166,0.2);">
              <span style="color: var(--text-dim);">${I18N.t('dmgSwing')}:</span>
              <strong style="color: var(--accent-primary); font-family: var(--font-mono); font-size: 1.1rem;">${damage.swing}</strong>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(122,143,166,0.2);">
              <span style="color: var(--text-dim);">${I18N.t('basicSpeed')} [(DX+HT)/4]:</span>
              <strong style="color: var(--neon-white); font-family: var(--font-mono);">${basicSpeed.toFixed(2)}</strong>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(122,143,166,0.2);">
              <span style="color: var(--text-dim);">${I18N.t('basicMove')}:</span>
              <strong style="color: var(--neon-white); font-family: var(--font-mono);">${basicMove} m/s</strong>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 6px 0;">
              <span style="color: var(--text-dim);">${I18N.t('dodge')} (Base):</span>
              <strong style="color: var(--status-ready); font-family: var(--font-mono); font-size: 1.1rem;">${baseDodge}</strong>
            </div>
          </div>
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
