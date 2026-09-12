/**
 * GROOG - STEP 07: ARSENAL & EQUIPMENT LOADOUT (PAINEL DE AÇO)
 */
import { GroogMath } from '../engine/groog-math.js';

export const ArsenalComponent = {
  render(char) {
    const equip = char.equipment || [];
    const totalWeight = equip.reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const roundedWeight = Math.round(totalWeight * 10) / 10;
    const basicLift = GroogMath.getBasicLift(char.attributes.st);
    const enc = GroogMath.getEncumbrance(roundedWeight, basicLift);

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <span class="brass-plaque">ARSENAL & EQUIPAMENTO</span>
            <small style="display: block; color: var(--accent-primary); font-family: var(--font-mono); margin-top: 4px;">
              PESO TOTAL: ${roundedWeight} kg (${enc.name})
            </small>
          </div>
          <button class="btn-chrono primary" id="btn-add-item">+ ADICIONAR</button>
        </div>

        <div id="equip-list">
          ${equip.map((it, i) => `
            <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 8px; padding: 10px; margin-bottom: 10px;">
              <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                <input type="text" class="chrono-input eq-name" data-idx="${i}" value="${it.name}" placeholder="Nome do item" style="flex: 3; font-weight: 700;">
                <button class="btn-chrono btn-del-eq" data-idx="${i}" style="color: var(--status-alert); padding: 8px 12px;">✕</button>
              </div>

              <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr; gap: 6px;">
                <select class="chrono-input eq-type" data-idx="${i}" style="font-size: 0.85rem; padding: 6px;">
                  <option value="Arma" ${it.type === 'Arma' ? 'selected' : ''}>Arma</option>
                  <option value="Armadura" ${it.type === 'Armadura' ? 'selected' : ''}>Armadura</option>
                  <option value="Munição" ${it.type === 'Munição' ? 'selected' : ''}>Munição</option>
                  <option value="Item" ${it.type === 'Item' ? 'selected' : ''}>Geral</option>
                </select>
                <input type="number" class="chrono-input eq-qty" data-idx="${i}" value="${it.qty || 1}" title="Quantidade" placeholder="Qtd" style="text-align: center; padding: 6px;">
                <input type="number" step="0.1" class="chrono-input eq-weight" data-idx="${i}" value="${it.weight || 0}" title="Peso (kg)" placeholder="kg" style="text-align: center; padding: 6px;">
                <input type="number" class="chrono-input eq-cost" data-idx="${i}" value="${it.cost || 0}" title="Custo ($)" placeholder="$" style="text-align: center; padding: 6px;">
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    document.getElementById('btn-add-item')?.addEventListener('click', () => {
      char.equipment = char.equipment || [];
      char.equipment.push({ name: 'Novo Equipamento', type: 'Item', qty: 1, weight: 1.0, cost: 50 });
      onUpdate();
    });

    document.querySelectorAll('.eq-name').forEach(inp => {
      inp.onchange = (e) => { char.equipment[parseInt(e.target.dataset.idx)].name = e.target.value; onUpdate(); };
    });
    document.querySelectorAll('.eq-type').forEach(sel => {
      sel.onchange = (e) => { char.equipment[parseInt(e.target.dataset.idx)].type = e.target.value; onUpdate(); };
    });
    document.querySelectorAll('.eq-qty').forEach(inp => {
      inp.onchange = (e) => { char.equipment[parseInt(e.target.dataset.idx)].qty = parseInt(e.target.value) || 1; onUpdate(); };
    });
    document.querySelectorAll('.eq-weight').forEach(inp => {
      inp.onchange = (e) => { char.equipment[parseInt(e.target.dataset.idx)].weight = parseFloat(e.target.value) || 0; onUpdate(); };
    });
    document.querySelectorAll('.eq-cost').forEach(inp => {
      inp.onchange = (e) => { char.equipment[parseInt(e.target.dataset.idx)].cost = parseInt(e.target.value) || 0; onUpdate(); };
    });
    document.querySelectorAll('.btn-del-eq').forEach(btn => {
      btn.onclick = () => { char.equipment.splice(parseInt(btn.dataset.idx), 1); onUpdate(); };
    });
  }
};
