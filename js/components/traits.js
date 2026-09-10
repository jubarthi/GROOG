/**
 * GROOG - COMPONENT 04: TRAITS (ADVANTAGES, DISADVANTAGES, QUIRKS & PERKS)
 */
import { I18N } from '../engine/i18n.js';

export const TraitsComponent = {
  render(char) {
    const adv = char.advantages || [];
    const disad = char.disadvantages || [];
    const quirks = char.quirks || [];

    const advTotal = adv.reduce((acc, a) => acc + (a.points || 0), 0);
    const disadTotal = disad.reduce((acc, d) => acc + (d.points || 0), 0);
    const quirksTotal = quirks.reduce((acc, q) => acc + (q.points || 0), 0);

    return `
      <div class="hud-frame-chamfer hud-section">
        <div class="section-header">
          <div class="section-title">${I18N.t('tabTraits')} - VANTAGENS & DESVANTAGENS</div>
          <div class="telemetry-badge"><span class="badge-num">004</span><span class="badge-label">SALDO TRAÇOS</span><span class="badge-val">${advTotal + disadTotal + quirksTotal} pts</span></div>
        </div>

        <div class="grid-2col">
          
          <!-- ADVANTAGES & PERKS -->
          <div class="hud-panel" style="padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span class="section-title">${I18N.t('advantages')} (${advTotal} pts)</span>
              <button class="btn-tactical" id="btn-add-adv" style="padding: 4px 10px; font-size: 0.75rem;">+ ADICIONAR</button>
            </div>

            <div id="adv-list">
              ${adv.map((a, i) => `
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px; background: rgba(0,0,0,0.3); padding: 6px; border-left: 2px solid var(--accent-primary);">
                  <input type="text" class="hud-input adv-name" data-idx="${i}" value="${a.name}" placeholder="Nome da Vantagem" style="flex: 2;">
                  <input type="number" class="hud-input adv-pts" data-idx="${i}" value="${a.points}" placeholder="Pts" style="flex: 1; max-width: 65px; text-align: center;">
                  <button class="btn-icon btn-del-adv" data-idx="${i}" style="color: var(--status-alert); padding: 4px 8px;">✕</button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- DISADVANTAGES & QUIRKS -->
          <div class="hud-panel" style="padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span class="section-title">${I18N.t('disadvantages')} (${disadTotal + quirksTotal} pts)</span>
              <button class="btn-tactical" id="btn-add-disad" style="padding: 4px 10px; font-size: 0.75rem;">+ ADICIONAR</button>
            </div>

            <div id="disad-list">
              ${disad.map((d, i) => `
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px; background: rgba(0,0,0,0.3); padding: 6px; border-left: 2px solid var(--status-alert);">
                  <input type="text" class="hud-input disad-name" data-idx="${i}" value="${d.name}" placeholder="Nome da Desvantagem" style="flex: 2;">
                  <input type="number" class="hud-input disad-pts" data-idx="${i}" value="${d.points}" placeholder="-Pts" style="flex: 1; max-width: 65px; text-align: center;">
                  <button class="btn-icon btn-del-disad" data-idx="${i}" style="color: var(--status-alert); padding: 4px 8px;">✕</button>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    const addAdv = document.getElementById('btn-add-adv');
    if (addAdv) {
      addAdv.onclick = () => {
        char.advantages = char.advantages || [];
        char.advantages.push({ name: 'Nova Vantagem', points: 10, desc: '' });
        onUpdate();
      };
    }

    const addDisad = document.getElementById('btn-add-disad');
    if (addDisad) {
      addDisad.onclick = () => {
        char.disadvantages = char.disadvantages || [];
        char.disadvantages.push({ name: 'Nova Desvantagem', points: -10, desc: '' });
        onUpdate();
      };
    }

    document.querySelectorAll('.adv-name').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.advantages[idx].name = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('.adv-pts').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.advantages[idx].points = parseInt(e.target.value) || 0;
        onUpdate();
      };
    });

    document.querySelectorAll('.btn-del-adv').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(btn.dataset.idx);
        char.advantages.splice(idx, 1);
        onUpdate();
      };
    });

    document.querySelectorAll('.disad-name').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.disadvantages[idx].name = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('.disad-pts').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.disadvantages[idx].points = parseInt(e.target.value) || 0;
        onUpdate();
      };
    });

    document.querySelectorAll('.btn-del-disad').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(btn.dataset.idx);
        char.disadvantages.splice(idx, 1);
        onUpdate();
      };
    });
  }
};
