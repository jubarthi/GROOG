/**
 * GROOG - COMPONENT 05: SKILLS & TACTICAL TRAINING
 * Automatic calculation of NH (Target 3d6 Roll) from Attribute + Difficulty + Points.
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
      <div class="hud-frame-chamfer hud-section">
        <div class="section-header">
          <div class="section-title">${I18N.t('tabSkills')} - HABILIDADES & TREINAMENTO (${totalPts} pts)</div>
          <button class="btn-tactical" id="btn-add-skill">+ ADICIONAR PERÍCIA</button>
        </div>

        <div class="hud-panel" style="padding: 12px; overflow-x: auto;">
          <table class="hud-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">${I18N.t('skillName')}</th>
                <th style="width: 90px;">${I18N.t('skillAttr')}</th>
                <th style="width: 110px;">${I18N.t('skillDiff')}</th>
                <th style="width: 110px;">${I18N.t('skillPts')}</th>
                <th style="width: 100px; text-align: center;">${I18N.t('skillNH')}</th>
                <th style="width: 40px;"></th>
              </tr>
            </thead>
            <tbody>
              ${skills.map((sk, i) => {
                const attrVal = getAttrVal(sk.attr);
                const finalNH = GroogMath.getSkillFinalNH(attrVal, sk.difficulty || 'A', sk.points || 1);
                const rel = GroogMath.getSkillRelativeLevel(sk.difficulty || 'A', sk.points || 1);
                const relStr = rel >= 0 ? `+${rel}` : `${rel}`;

                return `
                  <tr>
                    <td>
                      <input type="text" class="hud-input sk-name" data-idx="${i}" value="${sk.name}" placeholder="Nome da perícia">
                    </td>
                    <td>
                      <select class="hud-input sk-attr" data-idx="${i}">
                        <option value="DX" ${sk.attr === 'DX' ? 'selected' : ''}>DX (${a.dx})</option>
                        <option value="IQ" ${sk.attr === 'IQ' ? 'selected' : ''}>IQ (${a.iq})</option>
                        <option value="HT" ${sk.attr === 'HT' ? 'selected' : ''}>HT (${a.ht})</option>
                        <option value="ST" ${sk.attr === 'ST' ? 'selected' : ''}>ST (${a.st})</option>
                        <option value="Per" ${sk.attr === 'Per' ? 'selected' : ''}>Per (${a.iq + (s.perMod || 0)})</option>
                        <option value="Will" ${sk.attr === 'Will' ? 'selected' : ''}>Vontade (${a.iq + (s.willMod || 0)})</option>
                      </select>
                    </td>
                    <td>
                      <select class="hud-input sk-diff" data-idx="${i}">
                        <option value="E" ${sk.difficulty === 'E' ? 'selected' : ''}>Fácil (F)</option>
                        <option value="A" ${sk.difficulty === 'A' ? 'selected' : ''}>Média (M)</option>
                        <option value="H" ${sk.difficulty === 'H' ? 'selected' : ''}>Difícil (D)</option>
                        <option value="VH" ${sk.difficulty === 'VH' ? 'selected' : ''}>M.Difícil (MD)</option>
                      </select>
                    </td>
                    <td>
                      <div style="display: flex; align-items: center; gap: 4px;">
                        <button class="btn-stepper" style="width:24px; height:24px; font-size:0.9rem;" data-action="sk-pts-dec" data-idx="${i}">-</button>
                        <span style="font-family: var(--font-mono); font-weight: bold; width: 28px; text-align: center;">${sk.points}</span>
                        <button class="btn-stepper" style="width:24px; height:24px; font-size:0.9rem;" data-action="sk-pts-inc" data-idx="${i}">+</button>
                      </div>
                    </td>
                    <td style="text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 900; color: var(--accent-primary); text-shadow: 0 0 8px var(--accent-glow);">
                        ${finalNH}
                      </div>
                      <small style="color: var(--text-dim); font-size: 0.7rem;">(${sk.attr}${relStr})</small>
                    </td>
                    <td>
                      <button class="btn-icon btn-del-sk" data-idx="${i}" style="color: var(--status-alert); padding: 4px 6px;">✕</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    const addBtn = document.getElementById('btn-add-skill');
    if (addBtn) {
      addBtn.onclick = () => {
        char.skills = char.skills || [];
        char.skills.push({ name: 'Nova Perícia', attr: 'DX', difficulty: 'A', points: 2, customNH: null });
        onUpdate();
      };
    }

    document.querySelectorAll('.sk-name').forEach(inp => {
      inp.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.skills[idx].name = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('.sk-attr').forEach(sel => {
      sel.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.skills[idx].attr = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('.sk-diff').forEach(sel => {
      sel.onchange = (e) => {
        const idx = parseInt(e.target.dataset.idx);
        char.skills[idx].difficulty = e.target.value;
        onUpdate();
      };
    });

    document.querySelectorAll('[data-action="sk-pts-inc"]').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(btn.dataset.idx);
        const cur = char.skills[idx].points || 1;
        if (cur === 1) char.skills[idx].points = 2;
        else if (cur === 2) char.skills[idx].points = 4;
        else char.skills[idx].points = cur + 4;
        onUpdate();
      };
    });

    document.querySelectorAll('[data-action="sk-pts-dec"]').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(btn.dataset.idx);
        const cur = char.skills[idx].points || 1;
        if (cur > 4) char.skills[idx].points = cur - 4;
        else if (cur === 4) char.skills[idx].points = 2;
        else if (cur === 2) char.skills[idx].points = 1;
        onUpdate();
      };
    });

    document.querySelectorAll('.btn-del-sk').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(btn.dataset.idx);
        char.skills.splice(idx, 1);
        onUpdate();
      };
    });
  }
};
