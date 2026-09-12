/**
 * GROOG - STEP 06: SKILLS & TRAINING (PAINEL DE AÇO)
 */
import { GroogMath } from '../engine/groog-math.js';
import { I18N } from '../engine/i18n.js';

export const SkillsComponent = {
  render(char) {
    const skills = char.skills || [];
    const a = char.attributes;
    const s = char.secondary;

    const totalPts = skills.reduce((acc, sk) => acc + (sk.points || 0), 0);

    const getAttrVal = (attrKey) => {
      const k = (attrKey || 'DX').toUpperCase();
      if (k === 'ST') return a.st;
      if (k === 'DX') return a.dx;
      if (k === 'IQ') return a.iq;
      if (k === 'HT') return a.ht;
      if (k === 'PER') return a.iq + (s.perMod || 0);
      if (k === 'WILL' || k === 'VONT') return a.iq + (s.willMod || 0);
      return a.dx;
    };

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <span class="brass-plaque">PERÍCIAS & TREINAMENTO</span>
            <small style="display: block; color: var(--accent-primary); font-family: var(--font-mono); margin-top: 4px;">TOTAL: ${totalPts} PTS</small>
          </div>
          <button class="btn-chrono primary" id="btn-add-skill">+ ADICIONAR</button>
        </div>

        <div id="skills-list">
          ${skills.map((sk, i) => {
            const attrVal = getAttrVal(sk.attr);
            const finalNH = GroogMath.getSkillFinalNH(attrVal, sk.difficulty || 'A', sk.points || 1);
            const rel = GroogMath.getSkillRelativeLevel(sk.difficulty || 'A', sk.points || 1);
            const relStr = rel >= 0 ? `+${rel}` : `${rel}`;

            return `
              <div style="background: #0b0e14; border: 1.5px solid var(--chassis-border); border-radius: 8px; padding: 12px; margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <input type="text" class="chrono-input sk-name" data-idx="${i}" value="${sk.name}" placeholder="Nome da perícia" style="font-weight: 700; flex: 1; margin-right: 8px;">
                  <div class="nixie-display" style="padding: 4px 10px; min-width: 70px; text-align: center;">
                    <span class="nixie-val" style="font-size: 1.6rem;">${finalNH}</span>
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1.2fr auto; gap: 8px; align-items: center;">
                  <select class="chrono-input sk-attr" data-idx="${i}" style="font-size: 0.85rem; padding: 6px;">
                    <option value="DX" ${sk.attr === 'DX' ? 'selected' : ''}>DX (${a.dx})</option>
                    <option value="IQ" ${sk.attr === 'IQ' ? 'selected' : ''}>IQ (${a.iq})</option>
                    <option value="HT" ${sk.attr === 'HT' ? 'selected' : ''}>HT (${a.ht})</option>
                    <option value="ST" ${sk.attr === 'ST' ? 'selected' : ''}>ST (${a.st})</option>
                    <option value="Per" ${sk.attr === 'Per' ? 'selected' : ''}>Per</option>
                    <option value="Will" ${sk.attr === 'Will' ? 'selected' : ''}>Vont</option>
                  </select>

                  <select class="chrono-input sk-diff" data-idx="${i}" style="font-size: 0.85rem; padding: 6px;">
                    <option value="E" ${sk.difficulty === 'E' ? 'selected' : ''}>Fácil</option>
                    <option value="A" ${sk.difficulty === 'A' ? 'selected' : ''}>Média</option>
                    <option value="H" ${sk.difficulty === 'H' ? 'selected' : ''}>Difícil</option>
                    <option value="VH" ${sk.difficulty === 'VH' ? 'selected' : ''}>M.Difícil</option>
                  </select>

                  <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
                    <button class="btn-stepper-heavy" style="min-width:32px; height:36px; font-size:1.1rem;" data-action="sk-pts-dec" data-idx="${i}">-</button>
                    <span style="font-family: var(--font-mono); font-weight: bold; width: 34px; text-align: center; color: var(--accent-primary); font-size: 1rem;">${sk.points}p</span>
                    <button class="btn-stepper-heavy" style="min-width:32px; height:36px; font-size:1.1rem;" data-action="sk-pts-inc" data-idx="${i}">+</button>
                  </div>

                  <button class="btn-chrono btn-del-sk" data-idx="${i}" style="color: var(--status-alert); padding: 8px 10px; min-height: 36px;">✕</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    document.getElementById('btn-add-skill')?.addEventListener('click', () => {
      char.skills = char.skills || [];
      char.skills.push({ name: 'Nova Perícia', attr: 'DX', difficulty: 'A', points: 2 });
      onUpdate();
    });

    document.querySelectorAll('.sk-name').forEach(inp => {
      inp.onchange = (e) => { char.skills[parseInt(e.target.dataset.idx)].name = e.target.value; onUpdate(); };
    });
    document.querySelectorAll('.sk-attr').forEach(sel => {
      sel.onchange = (e) => { char.skills[parseInt(e.target.dataset.idx)].attr = e.target.value; onUpdate(); };
    });
    document.querySelectorAll('.sk-diff').forEach(sel => {
      sel.onchange = (e) => { char.skills[parseInt(e.target.dataset.idx)].difficulty = e.target.value; onUpdate(); };
    });

    document.querySelectorAll('[data-action="sk-pts-inc"]').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.idx);
        const cur = char.skills[idx].points || 1;
        if (cur === 1) char.skills[idx].points = 2;
        else if (cur === 2) char.skills[idx].points = 4;
        else char.skills[idx].points = cur + 4;
        onUpdate();
      };
    });

    document.querySelectorAll('[data-action="sk-pts-dec"]').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.idx);
        const cur = char.skills[idx].points || 1;
        if (cur > 4) char.skills[idx].points = cur - 4;
        else if (cur === 4) char.skills[idx].points = 2;
        else if (cur === 2) char.skills[idx].points = 1;
        onUpdate();
      };
    });

    document.querySelectorAll('.btn-del-sk').forEach(btn => {
      btn.onclick = () => { char.skills.splice(parseInt(btn.dataset.idx), 1); onUpdate(); };
    });
  }
};
