/**
 * GROOG - STEPS 04 & 05: TRAITS (ADVANTAGES & DISADVANTAGES)
 */
export const TraitsComponent = {
  renderAdvantages(char) {
    const adv = char.advantages || [];
    const total = adv.reduce((acc, a) => acc + (a.points || 0), 0);

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <span class="brass-plaque">VANTAGENS & QUALIDADES</span>
            <small style="display: block; color: var(--accent-primary); font-family: var(--font-mono); margin-top: 4px;">TOTAL: +${total} PTS</small>
          </div>
          <button class="btn-chrono primary" id="btn-add-adv">+ ADICIONAR</button>
        </div>

        <div id="adv-list">
          ${adv.map((a, i) => `
            <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-left: 3px solid var(--accent-primary); border-radius: 6px; padding: 10px; margin-bottom: 10px;">
              <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                <input type="text" class="chrono-input adv-name" data-idx="${i}" value="${a.name}" placeholder="Nome da vantagem" style="flex: 3;">
                <input type="number" class="chrono-input adv-pts" data-idx="${i}" value="${a.points}" placeholder="Pts" style="flex: 1; text-align: center;">
                <button class="btn-chrono btn-del-adv" data-idx="${i}" style="color: var(--status-alert); padding: 8px 12px;">✕</button>
              </div>
              <input type="text" class="chrono-input adv-desc" data-idx="${i}" value="${a.desc || ''}" placeholder="Descrição ou efeitos..." style="font-size: 0.85rem; min-height: 38px;">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderDisadvantages(char) {
    const disad = char.disadvantages || [];
    const quirks = char.quirks || [];
    const disTotal = disad.reduce((acc, d) => acc + (d.points || 0), 0);
    const qTotal = quirks.reduce((acc, q) => acc + (q.points || 0), 0);
    const grandTotal = disTotal + qTotal;
    const limit = char.disadvantageLimit || 75;

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <span class="brass-plaque">DESVANTAGENS & PECULIARIDADES</span>
            <small style="display: block; color: ${Math.abs(grandTotal) > limit ? 'var(--status-alert)' : 'var(--accent-primary)'}; font-family: var(--font-mono); margin-top: 4px;">
              TOTAL: ${grandTotal} / -${limit} PTS
            </small>
          </div>
          <button class="btn-chrono primary" id="btn-add-disad">+ ADICIONAR</button>
        </div>

        <div id="disad-list">
          ${disad.map((d, i) => `
            <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-left: 3px solid var(--status-alert); border-radius: 6px; padding: 10px; margin-bottom: 10px;">
              <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                <input type="text" class="chrono-input disad-name" data-idx="${i}" value="${d.name}" placeholder="Nome da desvantagem" style="flex: 3;">
                <input type="number" class="chrono-input disad-pts" data-idx="${i}" value="${d.points}" placeholder="-Pts" style="flex: 1; text-align: center;">
                <button class="btn-chrono btn-del-disad" data-idx="${i}" style="color: var(--status-alert); padding: 8px 12px;">✕</button>
              </div>
              <input type="text" class="chrono-input disad-desc" data-idx="${i}" value="${d.desc || ''}" placeholder="Autocontrole (ex: 12), gatilho ou restrição..." style="font-size: 0.85rem; min-height: 38px;">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate, mode) {
    if (mode === 'adv') {
      document.getElementById('btn-add-adv')?.addEventListener('click', () => {
        char.advantages = char.advantages || [];
        char.advantages.push({ name: 'Nova Vantagem', points: 10, desc: '' });
        onUpdate();
      });

      document.querySelectorAll('.adv-name').forEach(inp => {
        inp.onchange = (e) => { char.advantages[parseInt(e.target.dataset.idx)].name = e.target.value; onUpdate(); };
      });
      document.querySelectorAll('.adv-pts').forEach(inp => {
        inp.onchange = (e) => { char.advantages[parseInt(e.target.dataset.idx)].points = parseInt(e.target.value) || 0; onUpdate(); };
      });
      document.querySelectorAll('.adv-desc').forEach(inp => {
        inp.onchange = (e) => { char.advantages[parseInt(e.target.dataset.idx)].desc = e.target.value; onUpdate(); };
      });
      document.querySelectorAll('.btn-del-adv').forEach(btn => {
        btn.onclick = () => { char.advantages.splice(parseInt(btn.dataset.idx), 1); onUpdate(); };
      });
    }

    if (mode === 'disad') {
      document.getElementById('btn-add-disad')?.addEventListener('click', () => {
        char.disadvantages = char.disadvantages || [];
        char.disadvantages.push({ name: 'Nova Desvantagem', points: -10, desc: '' });
        onUpdate();
      });

      document.querySelectorAll('.disad-name').forEach(inp => {
        inp.onchange = (e) => { char.disadvantages[parseInt(e.target.dataset.idx)].name = e.target.value; onUpdate(); };
      });
      document.querySelectorAll('.disad-pts').forEach(inp => {
        inp.onchange = (e) => { char.disadvantages[parseInt(e.target.dataset.idx)].points = parseInt(e.target.value) || 0; onUpdate(); };
      });
      document.querySelectorAll('.disad-desc').forEach(inp => {
        inp.onchange = (e) => { char.disadvantages[parseInt(e.target.dataset.idx)].desc = e.target.value; onUpdate(); };
      });
      document.querySelectorAll('.btn-del-disad').forEach(btn => {
        btn.onclick = () => { char.disadvantages.splice(parseInt(btn.dataset.idx), 1); onUpdate(); };
      });
    }
  }
};
