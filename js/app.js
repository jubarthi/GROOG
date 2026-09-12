/**
 * GROOG - MASTER WIZARD CONTROLLER & CHRONO-STATE ENGINE (8 STEPS)
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

class GroogWizardApp {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 8;
    this.character = StorageEngine.getActiveProfile();
    this.currentTheme = localStorage.getItem('groog_theme') || 'steel';
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupLanguage();
    this.setupHeaderEvents();
    this.setupNavigationEvents();
    this.render();
  }

  setupTheme() {
    const saved = localStorage.getItem('groog_theme') || 'steel';
    this.setTheme(saved);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    if (theme === 'steel') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('groog_theme', theme);
  }

  cycleTheme() {
    const themes = ['steel', 'brass', 'titanium', 'radar'];
    const nextIdx = (themes.indexOf(this.currentTheme) + 1) % themes.length;
    this.setTheme(themes[nextIdx]);
  }

  setupLanguage() {
    const saved = localStorage.getItem('groog_lang') || 'pt';
    I18N.setLang(saved);
  }

  toggleLanguage() {
    const next = I18N.currentLang === 'pt' ? 'en' : 'pt';
    I18N.setLang(next);
    localStorage.setItem('groog_lang', next);
    this.render();
  }

  setupHeaderEvents() {
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => this.cycleTheme());
    document.getElementById('btn-toggle-lang')?.addEventListener('click', () => this.toggleLanguage());

    const budgetInp = document.getElementById('inp-campaign-budget');
    if (budgetInp) {
      budgetInp.value = this.character.campaignBudget || 150;
      budgetInp.addEventListener('change', (e) => {
        this.character.campaignBudget = parseInt(e.target.value) || 150;
        this.onUpdate();
      });
    }

    document.getElementById('btn-save-char')?.addEventListener('click', () => {
      StorageEngine.saveProfile(this.character);
      this.triggerNixiePulse();
      alert(I18N.t('savedSuccess'));
    });

    document.getElementById('btn-manage-profiles')?.addEventListener('click', () => this.openProfileModal());
  }

  setupNavigationEvents() {
    document.getElementById('btn-nav-prev')?.addEventListener('click', () => this.prevStep());
    document.getElementById('btn-nav-next')?.addEventListener('click', () => this.nextStep());
  }

  goToStep(step, direction = 'next') {
    if (step < 1 || step > this.totalSteps) return;
    this.currentStep = step;
    this.renderStepContent(direction);
    this.renderProgressBar();
    this.renderBottomButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.goToStep(this.currentStep + 1, 'next');
    } else {
      StorageEngine.saveProfile(this.character);
      this.triggerNixiePulse();
      alert(I18N.t('savedSuccess'));
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.goToStep(this.currentStep - 1, 'prev');
    }
  }

  onUpdate() {
    StorageEngine.saveProfile(this.character);
    this.renderHUD();
    this.triggerNixiePulse();
    this.renderStepContent();
  }

  triggerNixiePulse() {
    const elRem = document.getElementById('val-points-rem');
    if (elRem) {
      elRem.classList.remove('nixie-pulse-active');
      void elRem.offsetWidth;
      elRem.classList.add('nixie-pulse-active');
    }
  }

  renderHUD() {
    const points = GroogMath.calculatePoints(this.character);

    const elSpent = document.getElementById('val-points-spent');
    const elRem = document.getElementById('val-points-rem');
    const elDisad = document.getElementById('val-disad-spent');

    if (elSpent) elSpent.innerText = points.totalSpent;
    if (elRem) {
      elRem.innerText = points.remaining;
      elRem.style.color = points.remaining < 0 ? 'var(--status-alert)' : 'var(--nixie-filament)';
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

  renderProgressBar() {
    const pct = ((this.currentStep) / this.totalSteps) * 100;
    const bar = document.getElementById('step-bar-fill');
    const badge = document.getElementById('step-count-badge');
    const titleBadge = document.getElementById('step-title-badge');

    if (bar) bar.style.width = `${pct}%`;
    if (badge) badge.innerText = `ETAPA ${this.currentStep} DE ${this.totalSteps}`;
    if (titleBadge) {
      const stepKey = `step${this.currentStep}Title`;
      titleBadge.innerText = I18N.t(stepKey);
    }
  }

  renderBottomButtons() {
    const btnPrev = document.getElementById('btn-nav-prev');
    const btnNext = document.getElementById('btn-nav-next');

    if (btnPrev) {
      btnPrev.disabled = (this.currentStep === 1);
      btnPrev.style.opacity = (this.currentStep === 1) ? '0.4' : '1';
    }

    if (btnNext) {
      if (this.currentStep === this.totalSteps) {
        btnNext.innerText = I18N.t('btnFinish');
        btnNext.classList.add('primary');
      } else {
        btnNext.innerText = I18N.t('btnNext');
      }
    }
  }

  renderStepContent(direction = 'next') {
    const container = document.getElementById('wizard-step-content');
    if (!container) return;

    const char = this.character;
    const updateCb = () => this.onUpdate();
    let html = '';

    switch (this.currentStep) {
      case 1: html = DossierComponent.render(char); break;
      case 2: html = BiometricsComponent.render(char); break;
      case 3: html = CombatLoadComponent.render(char); break;
      case 4: html = TraitsComponent.renderAdvantages(char); break;
      case 5: html = TraitsComponent.renderDisadvantages(char); break;
      case 6: html = SkillsComponent.render(char); break;
      case 7: html = ArsenalComponent.render(char); break;
      case 8: html = SheetViewComponent.render(char); break;
    }

    container.className = `wizard-step-card ${direction === 'next' ? 'step-card-next' : 'step-card-prev'}`;
    container.innerHTML = html;

    // Bind event listeners for the rendered component
    switch (this.currentStep) {
      case 1: DossierComponent.bindEvents(char, updateCb); break;
      case 2: BiometricsComponent.bindEvents(char, updateCb); break;
      case 3: CombatLoadComponent.bindEvents(char, updateCb); break;
      case 4: TraitsComponent.bindEvents(char, updateCb, 'adv'); break;
      case 5: TraitsComponent.bindEvents(char, updateCb, 'disad'); break;
      case 6: SkillsComponent.bindEvents(char, updateCb); break;
      case 7: ArsenalComponent.bindEvents(char, updateCb); break;
      case 8: SheetViewComponent.bindEvents(char); break;
    }
  }

  render() {
    this.renderHUD();
    this.renderProgressBar();
    this.renderBottomButtons();
    this.renderStepContent();
  }

  openProfileModal() {
    const profiles = StorageEngine.getAllProfiles();
    const keys = Object.keys(profiles);

    const listHtml = keys.length === 0 
      ? '<p style="color: var(--text-dim); padding: 10px;">Nenhum outro operador salvo.</p>' 
      : keys.map(k => {
          const p = profiles[k];
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; background: #0b0e14; border: 1.5px solid var(--chassis-border); padding: 10px; margin-bottom: 8px; border-radius: 6px;">
              <div>
                <strong style="color: var(--neon-white); font-size: 1rem;">${p.name || 'Sem nome'}</strong>
                <small style="color: var(--text-dim); display: block;">${p.concept || 'Combatente'} - ${p.campaignBudget || 150} pts</small>
              </div>
              <div style="display: flex; gap: 6px;">
                <button class="btn-chrono btn-load-slot primary" data-id="${k}" style="padding: 6px 10px; font-size: 0.8rem;">CARREGAR</button>
                <button class="btn-chrono btn-del-slot" data-id="${k}" style="color: var(--status-alert); padding: 6px 10px;">✕</button>
              </div>
            </div>
          `;
        }).join('');

    const modalHtml = `
      <div id="groog-modal-overlay" style="position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 16px;">
        <div class="steel-plate" style="max-width: 480px; width: 100%; max-height: 90vh; overflow-y: auto;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <span class="brass-plaque">GERENCIADOR DE OPERADORES</span>
            <button class="btn-chrono" id="btn-close-modal" style="padding: 6px 12px;">✕</button>
          </div>
          
          <div style="margin-bottom: 16px; display: flex; gap: 8px;">
            <button class="btn-chrono primary" id="btn-modal-new" style="flex: 1;">+ NOVO OPERADOR</button>
            <label class="btn-chrono" style="flex: 1; text-align: center; cursor: pointer;">
              📂 IMPORTAR JSON
              <input type="file" id="inp-import-file-modal" accept=".json" style="display: none;">
            </label>
          </div>

          <div style="max-height: 260px; overflow-y: auto;">
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
      this.goToStep(1);
      this.render();
    };

    document.querySelectorAll('.btn-load-slot').forEach(btn => {
      btn.onclick = () => {
        const loaded = StorageEngine.loadProfile(btn.dataset.id);
        if (loaded) {
          this.character = loaded;
          StorageEngine.saveProfile(this.character);
          document.getElementById('groog-modal-overlay').remove();
          this.goToStep(1);
          this.render();
        }
      };
    });

    document.querySelectorAll('.btn-del-slot').forEach(btn => {
      btn.onclick = () => {
        if (confirm("Deseja realmente excluir este operador?")) {
          StorageEngine.deleteProfile(btn.dataset.id);
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
              this.goToStep(1);
              this.render();
              alert("Operador importado com sucesso!");
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

window.addEventListener('DOMContentLoaded', () => {
  window.app = new GroogWizardApp();
});
