/**
 * GROOG - COMPONENT 01: DOSSIER (IDENTIFICATION & BACKGROUND)
 */
import { I18N } from '../engine/i18n.js';

export const DossierComponent = {
  render(char, onUpdate) {
    const d = char.dossier || {};

    return `
      <div class="hud-frame-chamfer hud-section">
        <div class="section-header">
          <div class="section-title">${I18N.t('tabDossier')} - IDENTIFICAÇÃO DO OPERADOR</div>
          <div class="telemetry-badge"><span class="badge-num">001</span><span class="badge-label">STATUS</span><span class="badge-val">ATIVO</span></div>
        </div>

        <div class="grid-2col">
          <!-- Main Personal Info -->
          <div>
            <div class="form-row">
              <label class="form-label">${I18N.t('charName')}</label>
              <input type="text" class="hud-input" id="inp-char-name" value="${char.name || ''}" placeholder="Nome do Soldado / Agente">
            </div>

            <div class="form-row">
              <label class="form-label">${I18N.t('playerName')}</label>
              <input type="text" class="hud-input" id="inp-player-name" value="${char.player || ''}" placeholder="Nome do Jogador">
            </div>

            <div class="form-row">
              <label class="form-label">${I18N.t('concept')}</label>
              <input type="text" class="hud-input" id="inp-concept" value="${char.concept || ''}" placeholder="Ex: Fuzileiro / Atirador de Elite / Engenheiro">
            </div>

            <div class="grid-2col">
              <div class="form-row">
                <label class="form-label">${I18N.t('age')}</label>
                <input type="number" class="hud-input" id="inp-age" value="${d.age || 25}">
              </div>
              <div class="form-row">
                <label class="form-label">${I18N.t('birthday')}</label>
                <input type="text" class="hud-input" id="inp-birthday" value="${d.birthday || ''}" placeholder="Ano / Local de Origem">
              </div>
            </div>
          </div>

          <!-- Secondary Physical & Social -->
          <div>
            <div class="grid-2col">
              <div class="form-row">
                <label class="form-label">${I18N.t('heightWeight')}</label>
                <input type="text" class="hud-input" id="inp-hw" value="${d.height || '1.78m'} / ${d.weight || '78kg'}">
              </div>
              <div class="form-row">
                <label class="form-label">MÃO DOMINANTE</label>
                <select class="hud-input" id="sel-hand">
                  <option value="Destro" ${d.dominantHand === 'Destro' ? 'selected' : ''}>Destro</option>
                  <option value="Canhoto" ${d.dominantHand === 'Canhoto' ? 'selected' : ''}>Canhoto (-4 sem Ambidestria)</option>
                  <option value="Ambidestro" ${d.dominantHand === 'Ambidestro' ? 'selected' : ''}>Ambidestro (Vantagem)</option>
                </select>
              </div>
            </div>

            <div class="grid-2col">
              <div class="form-row">
                <label class="form-label">${I18N.t('techLevel')}</label>
                <input type="number" class="hud-input" id="inp-tl" value="${d.tl || 8}">
              </div>
              <div class="form-row">
                <label class="form-label">${I18N.t('wealth')}</label>
                <select class="hud-input" id="sel-wealth">
                  <option value="0" ${d.wealthCost === 0 ? 'selected' : ''}>Médio ($20.000 em NT8 - 0 pts)</option>
                  <option value="10" ${d.wealthCost === 10 ? 'selected' : ''}>Confortável (2x média - 10 pts)</option>
                  <option value="20" ${d.wealthCost === 20 ? 'selected' : ''}>Rico (5x média - 20 pts)</option>
                  <option value="-10" ${d.wealthCost === -10 ? 'selected' : ''}>Batalhador (50% média - -10 pts)</option>
                  <option value="-15" ${d.wealthCost === -15 ? 'selected' : ''}>Pobre (20% média - -15 pts)</option>
                  <option value="-25" ${d.wealthCost === -25 ? 'selected' : ''}>Falido (0 bens - -25 pts)</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">${I18N.t('appearance')}</label>
              <input type="text" class="hud-input" id="inp-appearance" value="${d.appearance || ''}" placeholder="Cabelo, pele, marcas e traços físicos">
            </div>
          </div>
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
    bind('inp-age', (e) => { char.dossier.age = parseInt(e.target.value) || 25; onUpdate(); });
    bind('inp-birthday', (e) => { char.dossier.birthday = e.target.value; onUpdate(); });
    bind('inp-hw', (e) => { char.dossier.height = e.target.value; onUpdate(); });
    bind('sel-hand', (e) => { char.dossier.dominantHand = e.target.value; onUpdate(); });
    bind('inp-tl', (e) => { char.dossier.tl = parseInt(e.target.value) || 8; onUpdate(); });
    bind('sel-wealth', (e) => { char.dossier.wealthCost = parseInt(e.target.value) || 0; onUpdate(); });
    bind('inp-appearance', (e) => { char.dossier.appearance = e.target.value; onUpdate(); });
  }
};
