/**
 * GROOG - STEP 01: DOSSIER & IDENTIFICATION (PAINEL DE AÇO)
 */
import { I18N } from '../engine/i18n.js';

export const DossierComponent = {
  render(char) {
    const d = char.dossier || {};

    return `
      <div class="steel-plate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="brass-plaque">IDENTIFICAÇÃO DO OPERADOR</span>
          <span class="vacuum-tube-light"></span>
        </div>

        <div class="form-group-heavy">
          <label>NOME DO PERSONAGEM</label>
          <input type="text" class="chrono-input" id="inp-char-name" value="${char.name || ''}" placeholder="Ex: Sargento Miller">
        </div>

        <div class="form-group-heavy">
          <label>JOGADOR / OPERADOR</label>
          <input type="text" class="chrono-input" id="inp-player-name" value="${char.player || ''}" placeholder="Seu nome">
        </div>

        <div class="form-group-heavy">
          <label>CONCEITO / OCUPAÇÃO</label>
          <input type="text" class="chrono-input" id="inp-concept" value="${char.concept || ''}" placeholder="Ex: Explorador Temporal / Fuzileiro / Engenheiro">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group-heavy">
            <label>IDADE</label>
            <input type="number" class="chrono-input" id="inp-age" value="${d.age || 28}" style="text-align: center;">
          </div>
          <div class="form-group-heavy">
            <label>NÍVEL TECNOLÓGICO (NT)</label>
            <input type="number" class="chrono-input" id="inp-tl" value="${d.tl || 8}" style="text-align: center;">
          </div>
        </div>

        <div class="form-group-heavy">
          <label>ORIGEM / DATA / LOCAL</label>
          <input type="text" class="chrono-input" id="inp-birthday" value="${d.birthday || ''}" placeholder="Ex: 1944 / Frente Ocidental">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group-heavy">
            <label>ALTURA & PESO</label>
            <input type="text" class="chrono-input" id="inp-hw" value="${d.height || '1.80m / 80kg'}">
          </div>
          <div class="form-group-heavy">
            <label>MÃO DOMINANTE</label>
            <select class="chrono-input" id="sel-hand">
              <option value="Destro" ${d.dominantHand === 'Destro' ? 'selected' : ''}>Destro</option>
              <option value="Canhoto" ${d.dominantHand === 'Canhoto' ? 'selected' : ''}>Canhoto (-4)</option>
              <option value="Ambidestro" ${d.dominantHand === 'Ambidestro' ? 'selected' : ''}>Ambidestro</option>
            </select>
          </div>
        </div>

        <div class="form-group-heavy">
          <label>APARÊNCIA FÍSICA</label>
          <input type="text" class="chrono-input" id="inp-appearance" value="${d.appearance || ''}" placeholder="Cicatrizes, constituição, traços marcantes">
        </div>
      </div>
    `;
  },

  bindEvents(char, onUpdate) {
    const bind = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', fn);
    };

    bind('inp-char-name', (e) => { char.name = e.target.value; onUpdate(); });
    bind('inp-player-name', (e) => { char.player = e.target.value; onUpdate(); });
    bind('inp-concept', (e) => { char.concept = e.target.value; onUpdate(); });
    bind('inp-age', (e) => { char.dossier.age = parseInt(e.target.value) || 28; onUpdate(); });
    bind('inp-tl', (e) => { char.dossier.tl = parseInt(e.target.value) || 8; onUpdate(); });
    bind('inp-birthday', (e) => { char.dossier.birthday = e.target.value; onUpdate(); });
    bind('inp-hw', (e) => { char.dossier.height = e.target.value; onUpdate(); });
    bind('sel-hand', (e) => { char.dossier.dominantHand = e.target.value; onUpdate(); });
    bind('inp-appearance', (e) => { char.dossier.appearance = e.target.value; onUpdate(); });
  }
};
