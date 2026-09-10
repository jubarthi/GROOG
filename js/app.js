/**
 * GROOG - MASTER APP CONTROLLER & REACTIVE ENGINE
 */
import { GroogMath } from './engine/groog-math.js';
import { I18N } from './engine/i18n.js';
import { StorageEngine } from './engine/storage.js';

import { DossierComponent } from './components/dossier.js';
import { BiometricsComponent } from './components/biometrics.js';
import { CombatLoadComponent } from './components/combat-load.js';
import { TraitsComponent } from './components/traits.js';
import { SkillsComponent } from './components/skills.js';
import { ArsenalComponent } from './components/arsenal.js';
import { SheetViewComponent } from './components/sheet-view.js';

class GroogApp {
  constructor() {
    this.activeTab = 'dossier';
    this.currentTheme = 'cyan';
    this.character = StorageEngine.getActiveProfile();
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupLanguage();
    this.setupHeaderEvents();
    this.render();
  }

  setupTheme() {
    const savedTheme = localStorage.getItem('groog_theme') || 'cyan';
    this.setTheme(savedTheme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    if (theme === 'cyan') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('groog_theme', theme);
  }

  cycleTheme() {
    const themes = ['cyan', 'amber', 'red', 'green'];
    const nextIdx = (themes.indexOf(this.currentTheme) + 1) % themes.length;
    this.setTheme(themes[nextIdx]);
  }

  setupLanguage() {
    const savedLang = localStorage.getItem('groog_lang') || 'pt';
    I18N.setLang(savedLang);
  }

  toggleLanguage() {
    const next = I18N.currentLang === 'pt' ? 'en' : 'pt';
    I18N.setLang(next);
    localStorage.setItem('groog_lang', next);
    this.render();
  }

  setupHeaderEvents() {
    // Theme button
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => this.cycleTheme());

    // Lang button
    document.getElementById('btn-toggle-lang')?.addEventListener('click', () => this.toggleLanguage());

    // Budget input
    const budgetInp = document.getElementById('inp-campaign-budget');
    if (budgetInp) {
      budgetInp.value = this.character.campaignBudget || 150;
      budgetInp.addEventListener('change', (e) => {
        this.character.campaignBudget = parseInt(e.target.value) || 150;
        this.onUpdate();
      });
    }

    // Save button
    document.getElementById('btn-save-char')?.addEventListener('click', () => {
      StorageEngine.saveProfile(this.character);
      this.triggerHUDPulse();
      alert(I18N.t('savedSuccess'));
    });

    // Profile manager / Load button
    document.getElementById('btn-manage-profiles')?.addEventListener('click', () => this.openProfileModal());

    // Import JSON input
    const fileInp = document.getElementById('inp-import-file');
    if (fileInp) {
      fileInp.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            try {
              const loaded = JSON.parse(ev.target.result);
              if (loaded && loaded.attributes) {
                this.character = loaded;
                StorageEngine.saveProfile(this.character);
                this.render();
                alert("Personagem importado com sucesso!");
              }
            } catch (err) {
              alert("Erro ao ler arquivo JSON de personagem.");
            }
          };
          reader.readAsText(file);
        }
      });
    }

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        if (tab) {
          this.activeTab = tab;
          this.renderTabs();
        }
      });
    });
  }

  onUpdate() {
    StorageEngine.saveProfile(this.character);
    this.renderHUD();
    this.renderActiveComponent();
    this.triggerHUDPulse();
  }

  triggerHUDPulse() {
    const hudCard = document.getElementById('main-points-card');
    if (hudCard) {
      hudCard.classList.remove('pulse-active');
      void hudCard.offsetWidth; // Trigger reflow
      hudCard.classList.add('pulse-active');
    }
  }

  renderHUD() {
    const points = GroogMath.calculatePoints(this.character);

    const elSpent = document.getElementById('val-points-spent');
    const elRem = document.getElementById('val-points-rem');
    const elDisad = document.getElementById('val-disad-spent');
    const hudCard = document.getElementById('main-points-card');

    if (elSpent) elSpent.innerText = points.totalSpent;
    if (elRem) {
      elRem.innerText = points.remaining;
      elRem.style.color = points.remaining < 0 ? 'var(--status-alert)' : 'var(--neon-white)';
      if (points.remaining < 0) {
        elRem.classList.add('glitch-warn');
      } else {
        elRem.classList.remove('glitch-warn');
      }
    }

    if (elDisad) {
      elDisad.innerText = `${points.disadvantagesTotal} / -${points.disadLimit}`;
      elDisad.style.color = points.disadExceeded ? 'var(--status-alert)' : 'var(--text-main)';
    }

    const budgetInp = document.getElementById('inp-campaign-budget');
    if (budgetInp && document.activeElement !== budgetInp) {
      budgetInp.value = this.character.campaignBudget || 150;
    }
  }

  renderTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      if (btn.dataset.tab === this.activeTab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.renderActiveComponent();
  }

  renderActiveComponent() {
    const container = document.getElementById('app-tab-content');
    if (!container) return;

    let html = '';
    const char = this.character;
    const updateCb = () => this.onUpdate();

    if (this.activeTab === 'dossier') {
      html = DossierComponent.render(char, updateCb);
    } else if (this.activeTab === 'biometrics') {
      html = BiometricsComponent.render(char, updateCb);
    } else if (this.activeTab === 'combat') {
      html = CombatLoadComponent.render(char, updateCb);
    } else if (this.activeTab === 'traits') {
      html = TraitsComponent.render(char, updateCb);
    } else if (this.activeTab === 'skills') {
      html = SkillsComponent.render(char, updateCb);
    } else if (this.activeTab === 'arsenal') {
      html = ArsenalComponent.render(char, updateCb);
    } else if (this.activeTab === 'sheet') {
      html = SheetViewComponent.render(char, updateCb);
    }

    container.innerHTML = html;

    // Bind event listeners for the rendered component
    if (this.activeTab === 'dossier') DossierComponent.bindEvents(char, updateCb);
    else if (this.activeTab === 'biometrics') BiometricsComponent.bindEvents(char, updateCb);
    else if (this.activeTab === 'combat') CombatLoadComponent.bindEvents(char, updateCb);
    else if (this.activeTab === 'traits') TraitsComponent.bindEvents(char, updateCb);
    else if (this.activeTab === 'skills') SkillsComponent.bindEvents(char, updateCb);
    else if (this.activeTab === 'arsenal') ArsenalComponent.bindEvents(char, updateCb);
    else if (this.activeTab === 'sheet') SheetViewComponent.bindEvents(char, updateCb);
  }

  render() {
    this.renderHUD();
    this.renderTabs();
  }

  openProfileModal() {
    const profiles = StorageEngine.getAllProfiles();
    const keys = Object.keys(profiles);

    const listHtml = keys.length === 0 
      ? '<p style="color: var(--text-dim); padding: 10px;">Nenhum outro operador salvo.</p>' 
      : keys.map(k => {
          const p = profiles[k];
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); border: 1px solid var(--chassis-border); padding: 8px 12px; margin-bottom: 8px;">
              <div>
                <strong style="color: var(--neon-white); font-size: 1rem;">${p.name || 'Sem nome'}</strong>
                <small style="color: var(--text-dim); display: block;">${p.concept || 'Combatente'} - ${p.campaignBudget || 150} pts</small>
              </div>
              <div style="display: flex; gap: 6px;">
                <button class="btn-tactical btn-load-slot" data-id="${k}" style="padding: 4px 8px; font-size: 0.75rem;">CARREGAR</button>
                <button class="btn-icon btn-del-slot" data-id="${k}" style="color: var(--status-alert); padding: 4px 6px;">✕</button>
              </div>
            </div>
          `;
        }).join('');

    const modalHtml = `
      <div id="groog-modal-overlay" style="position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 16px;">
        <div class="hud-frame-chamfer" style="max-width: 500px; width: 100%; padding: 20px; background: var(--bg-darkest);">
          <div class="section-header">
            <div class="section-title">GERENCIADOR DE OPERADORES</div>
            <button class="btn-icon" id="btn-close-modal">✕</button>
          </div>
          
          <div style="margin-bottom: 16px; display: flex; gap: 8px;">
            <button class="btn-tactical" id="btn-modal-new" style="flex: 1;">+ NOVO OPERADOR</button>
            <label class="btn-tactical" style="flex: 1; text-align: center; cursor: pointer;">
              📂 IMPORTAR JSON
              <input type="file" id="inp-import-file-modal" accept=".json" style="display: none;">
            </label>
          </div>

          <div style="max-height: 300px; overflow-y: auto;">
            ${listHtml}
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    document.getElementById('btn-close-modal').onclick = () => {
      document.getElementById('groog-modal-overlay').remove();
    };

    document.getElementById('btn-modal-new').onclick = () => {
      this.character = StorageEngine.createDefaultProfile();
      StorageEngine.saveProfile(this.character);
      document.getElementById('groog-modal-overlay').remove();
      this.render();
    };

    document.querySelectorAll('.btn-load-slot').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const loaded = StorageEngine.loadProfile(id);
        if (loaded) {
          this.character = loaded;
          StorageEngine.saveProfile(this.character);
          document.getElementById('groog-modal-overlay').remove();
          this.render();
        }
      };
    });

    document.querySelectorAll('.btn-del-slot').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        if (confirm("Deseja realmente excluir este operador?")) {
          StorageEngine.deleteProfile(id);
          document.getElementById('groog-modal-overlay').remove();
          this.openProfileModal();
        }
      };
    });

    document.getElementById('inp-import-file-modal').onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const loaded = JSON.parse(ev.target.result);
            if (loaded && loaded.attributes) {
              this.character = loaded;
              StorageEngine.saveProfile(this.character);
              document.getElementById('groog-modal-overlay').remove();
              this.render();
              alert("Personagem importado com sucesso!");
            }
          } catch (err) {
            alert("Arquivo JSON inválido.");
          }
        };
        reader.readAsText(file);
      }
    };
  }
}

// Boot application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.app = new GroogApp();
});
