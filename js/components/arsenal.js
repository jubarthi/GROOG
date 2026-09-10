/**
 * GROOG - COMPONENT 06: ARSENAL & EQUIPMENT LOADOUT
 */
import { I18N } from '../engine/i18n.js';

export const ArsenalComponent = {
  render(char) {
    const equip = char.equipment || [];
    const totalWeight = equip.reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const totalCost = equip.reduce((acc, it) => acc + ((it.cost || 0) * (it.qty || 1)), 0);

    return `
      <div class="hud-frame-chamfer hud-section">
        <div class="section-header">
          <div class="section-title">${I18N.t('tabArsenal')} - ARMAS & INVENTÁRIO TÁTICO</div>
          <button class="btn-tactical" id="btn-add-item">+ ADICIONAR ITEM</button>
        </div>

        <div class="hud-panel" style="padding: 12px; overflow-x: auto; margin-bottom: 14px;">
          <table class="hud-table">
            <thead>
              <tr>
                <th style="min-width: 160px;">ITEM / ARMA</th>
                <th style="width: 100px;">TIPO</th>
                <th style="width: 70px;">QTD</th>
                <th style="width: 90px;">PESO (kg)</th>
                <th style="width: 90px;">CUSTO ($)</th>
                <th style="width: 40px;"></th>
              </tr>
            </thead>
            <tbody>
              ${equip.map((it, i) => `
                <tr>
                  <td><input type="text" class="hud-input eq-name" data-idx="${i}" value="${it.name}" placeholder="Nome do item"></td>
                  <td>
                    <select class="hud-input eq-type" data-idx="${i}">
                      <option value="Arma" ${it.type === 'Arma' ? 'selected' : ''}>Arma</option>
                      <option value="Armadura" ${it.type === 'Armadura' ? 'selected' : ''}>Armadura</option>
                      <option value="Munição" ${it.type === 'Munição' ? 'selected' : ''}>Munição</option>
                      <option value="Eletrônico" ${it.type === 'Eletrônico' ? 'selected' : ''}>Eletrônico</option>
                      <option value="Médico" ${it.type === 'Médico' ? 'selected' : ''}>Médico</option>
                      <option value="Item" ${it.type === 'Item' ? 'selected' : ''}>Geral</option>
                    </select>
                  </td>
                  <td><input type="number" class="hud-input eq-qty" data-idx="${i}" value="${it.qty || 1}" style="text-align: center;"></td>
                  <td><input type="number" step="0.1" class="hud-input eq-weight" data-idx="${i}" value="${it.weight || 0}" style="text-align: center;"></td>
                  <td><input type="number" class="hud-input eq-cost" data-idx="${i}" value="${it.cost || 0}" style="text-align: center;"></td>
                  <td><button class="btn-icon btn-del-eq" data-idx="${i}" style="color: var(--status-alert); padding: 4px 6px;">✕</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 20px; font-family: var(--font-mono); font-size: 1rem;">
          <div>PESO TOTAL: <strong style="color: var(--neon-white);">${Math.round(totalWeight * 10) / 10} kg</strong></div>
          <div>VALOR TOTAL: <strong style="color: var(--status-ready);">$${totalCost}</strong></div>
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    const addBtn = document.getElementById('btn-add-item');
    if (addBtn) {
      addBtn.onclick = () => {
        char.equipment = char.equipment || [];
        char.equipment.push({ name: 'Novo Equipamento', type: 'Item', qty: 1, weight: 1.0, cost: 50 });
        onUpdate();
      };
    }

    document.querySelectorAll('.eq-name').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.equipment[idx].name = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('.eq-type').forEach(sel => {
      sel.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.equipment[idx].type = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('.eq-qty').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.equipment[idx].qty = parseInt(e.target.value) || 1;
        onUpdate();
      };
    });

    document.querySelectorAll('.eq-weight').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.equipment[idx].weight = parseFloat(e.target.value) || 0;
        onUpdate();
      };
    });

    document.querySelectorAll('.eq-cost').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.equipment[idx].cost = parseInt(e.target.value) || 0;
        onUpdate();
      };
    });

    document.querySelectorAll('.btn-del-eq').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(btn.dataset.idx);
        char.equipment.splice(idx, 1);
        onUpdate();
      };
    });
  }
};
