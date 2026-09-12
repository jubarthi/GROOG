/**
 * GROOG - SINGLE-SCREEN MOBILE CONTROLLER & BOTTOM SHEETS ENGINE
 */
import { GroogMath } from './engine/groog-math.js';
import { I18N } from './engine/i18n.js';
import { StorageEngine } from './engine/storage.js';

class GroogMobileApp {
  constructor() {
    this.character = StorageEngine.getActiveProfile();
    this.activeSheet = null;
    this.currentTheme = localStorage.getItem('groog_theme') || 'blue';
    this.currentLang = localStorage.getItem('groog_lang') || 'en';
    this.init();
  }

  init() {
    this.setupThemeEngine();
    this.setupLanguageEngine();
    this.setupHeaderEvents();
    this.setupDrawerEvents();
    this.setupDiceRoller();
    this.render();
  }

  setupLanguageEngine() {
    I18N.setLang(this.currentLang);
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.innerText = this.currentLang.toUpperCase();
      langBtn.addEventListener('click', () => {
        const nextLang = this.currentLang === 'en' ? 'pt' : 'en';
        this.currentLang = nextLang;
        I18N.setLang(nextLang);
        langBtn.innerText = nextLang.toUpperCase();
        this.render();
      });
    }
  }

  setupThemeEngine() {
    this.applyTheme(this.currentTheme);

    document.querySelectorAll('.theme-dot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedTheme = btn.dataset.theme;
        this.applyTheme(selectedTheme);
      });
    });
  }

  applyTheme(themeName) {
    this.currentTheme = themeName;
    localStorage.setItem('groog_theme', themeName);

    document.body.classList.remove('theme-blue', 'theme-yellow', 'theme-red', 'theme-green');
    document.body.classList.add(`theme-${themeName}`);

    document.querySelectorAll('.theme-dot-btn').forEach(btn => {
      if (btn.dataset.theme === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', '#151821');
  }

  setupHeaderEvents() {
    const nameInp = document.getElementById('inp-header-char-name');
    if (nameInp) {
      nameInp.value = this.character.name || 'Thorgrim';
      nameInp.addEventListener('change', (e) => {
        this.character.name = e.target.value;
        this.onUpdate();
      });
    }

    const budgetInp = document.getElementById('inp-header-budget');
    if (budgetInp) {
      budgetInp.value = this.character.campaignBudget || 150;
      const handleBudgetChange = (e) => {
        const val = parseInt(e.target.value);
        if (!isNaN(val) && val >= 1) {
          this.character.campaignBudget = val;
          this.onUpdate();
        }
      };
      budgetInp.addEventListener('change', handleBudgetChange);
      budgetInp.addEventListener('blur', handleBudgetChange);
    }

    document.getElementById('btn-header-avatar')?.addEventListener('click', () => this.openSheet('dossier'));
    document.getElementById('btn-save-bottom')?.addEventListener('click', () => {
      StorageEngine.saveProfile(this.character);
      alert(I18N.t('saveSuccess'));
    });
    document.getElementById('btn-dice-bottom')?.addEventListener('click', () => this.openSheet('dice'));
  }

  setupDrawerEvents() {
    document.querySelectorAll('[data-open-sheet]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const sheetId = trigger.dataset.openSheet;
        this.openSheet(sheetId);
      });
    });

    document.querySelectorAll('.btn-close-sheet, .bottom-sheet-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el) this.closeSheet();
      });
    });
  }

  openSheet(sheetId) {
    this.activeSheet = sheetId;
    const overlay = document.getElementById('bottom-sheet-overlay');
    const container = document.getElementById('sheet-dynamic-content');
    const titleEl = document.getElementById('sheet-title-text');

    if (!overlay || !container) return;

    overlay.classList.add('active');

    if (sheetId === 'traits') {
      titleEl.innerText = I18N.t('drawerTraitsTitle');
      this.renderTraitsSheet(container);
    } else if (sheetId === 'skills') {
      titleEl.innerText = I18N.t('drawerSkillsTitle');
      this.renderSkillsSheet(container);
    } else if (sheetId === 'equipment') {
      titleEl.innerText = I18N.t('drawerEquipTitle');
      this.renderEquipmentSheet(container);
    } else if (sheetId === 'dossier') {
      titleEl.innerText = I18N.t('drawerDossierTitle');
      this.renderDossierSheet(container);
    } else if (sheetId === 'dice') {
      titleEl.innerText = I18N.t('drawerDiceTitle');
      this.renderDiceSheet(container);
    }
  }

  closeSheet() {
    const overlay = document.getElementById('bottom-sheet-overlay');
    if (overlay) overlay.classList.remove('active');
    this.activeSheet = null;
  }

  onUpdate() {
    StorageEngine.saveProfile(this.character);
    this.render();
  }

  render() {
    const char = this.character;
    const a = char.attributes;
    const s = char.secondary;

    const points = GroogMath.calculatePoints(char);
    const basicLift = GroogMath.getBasicLift(a.st);
    const damage = GroogMath.getDamageByST(a.st);
    const basicSpeed = GroogMath.getBasicSpeed(a.dx, a.ht, s.speedMod);
    const basicMove = GroogMath.getBasicMove(basicSpeed, s.moveMod);

    const totalWeight = (char.equipment || []).reduce((acc, it) => acc + ((it.weight || 0) * (it.qty || 1)), 0);
    const roundedWeight = Math.round(totalWeight * 10) / 10;
    const enc = GroogMath.getEncumbrance(roundedWeight, basicLift);
    const hasCR = (char.advantages || []).some(ad => ad.name.toLowerCase().includes('reflexos em combate') || ad.name.toLowerCase().includes('combat reflexes'));
    const mobility = GroogMath.getEffectiveMobility(basicMove, basicSpeed, enc, hasCR);

    // 1. Header Display & Avatar
    const budgetHeaderInp = document.getElementById('inp-header-budget');
    if (budgetHeaderInp && document.activeElement !== budgetHeaderInp) {
      budgetHeaderInp.value = points.budget;
    }
    const spentHeaderVal = document.getElementById('val-header-spent');
    if (spentHeaderVal) spentHeaderVal.innerText = points.totalSpent;
    const unitHeaderLbl = document.getElementById('lbl-header-pts-unit');
    if (unitHeaderLbl) unitHeaderLbl.innerText = I18N.t('ptsUnit');

    const avatarBtn = document.getElementById('btn-header-avatar');
    if (avatarBtn) {
      if (char.avatar) {
        avatarBtn.innerHTML = `<img src="${char.avatar}" alt="${char.name || 'Avatar'}">`;
      } else {
        avatarBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
      }
    }

    // 2. Section Titles
    const attrTitle = document.getElementById('attr-section-title');
    if (attrTitle) attrTitle.innerText = `${I18N.t('attrSectionTitle')} (${points.attributesTotal} ${I18N.t('ptsUnit')})`;

    const teleTitle = document.getElementById('lbl-telemetry-title');
    if (teleTitle) teleTitle.innerText = I18N.t('telemetryTitle');

    // 3. Attribute Cards (PWR, AGI, COG, VIT)
    const isEn = this.currentLang === 'en';
    const tagPwr = isEn ? 'PWR' : 'FOR';
    const tagAgi = isEn ? 'AGI' : 'DES';
    const tagCog = isEn ? 'COG' : 'INT';
    const tagVit = 'VIT';

    document.getElementById('lbl-attr-pwr').innerText = I18N.t('attrPwr');
    document.getElementById('lbl-attr-agi').innerText = I18N.t('attrAgi');
    document.getElementById('lbl-attr-cog').innerText = I18N.t('attrCog');
    document.getElementById('lbl-attr-vit').innerText = I18N.t('attrVit');

    const setAttr = (key, tag, val, costPer) => {
      const elVal = document.getElementById(`val-attr-${key}`);
      const elSub = document.getElementById(`sub-attr-${key}`);
      const cost = (val - 10) * costPer;
      if (elVal) elVal.innerText = `[${val}]`;
      if (elSub) elSub.innerText = `${tag} ${val} [${cost >= 0 ? '+' + cost : cost} ${I18N.t('ptsUnit')}]`;
    };

    setAttr('st', tagPwr, a.st, 10);
    setAttr('dx', tagAgi, a.dx, 20);
    setAttr('iq', tagCog, a.iq, 20);
    setAttr('ht', tagVit, a.ht, 10);

    // 4. Derived Telemetry Grid
    const hpFinal = a.st + (s.hpMod || 0);
    const fpFinal = a.ht + (s.fpMod || 0);
    const willFinal = a.iq + (s.willMod || 0);
    const perFinal = a.iq + (s.perMod || 0);

    document.getElementById('lbl-hp').innerText = I18N.t('lblHp');
    document.getElementById('lbl-fp').innerText = I18N.t('lblFp');
    document.getElementById('lbl-will').innerText = I18N.t('lblWill');
    document.getElementById('lbl-per').innerText = I18N.t('lblPer');
    document.getElementById('lbl-dodge').innerText = I18N.t('lblDodge');
    document.getElementById('lbl-speed').innerText = I18N.t('lblSpeed');
    document.getElementById('lbl-move').innerText = I18N.t('lblMove');
    document.getElementById('lbl-damage').innerText = I18N.t('lblDamage');

    document.getElementById('der-hp').innerText = `${hpFinal}/${hpFinal}`;
    document.getElementById('der-fp').innerText = `${fpFinal}/${fpFinal}`;
    document.getElementById('der-will').innerText = `${willFinal}`;
    document.getElementById('der-per').innerText = `${perFinal}`;
    document.getElementById('der-dodge-cr').innerText = hasCR ? `${mobility.effectiveDodge}+1` : `${mobility.effectiveDodge}`;
    document.getElementById('der-speed').innerText = `${basicSpeed.toFixed(2)}`;
    document.getElementById('der-move').innerText = `${mobility.effectiveMove} m/s`;
    document.getElementById('der-dmg').innerText = `Sw: ${damage.swing} | Dir: ${damage.thrust}`;

    // 5. Drawer Summary Subtitles
    const advCount = (char.advantages || []).length;
    const disCount = (char.disadvantages || []).length;
    const traitsPts = points.advantagesTotal + points.disadvantagesTotal;
    
    document.getElementById('lbl-trigger-traits-title').innerText = I18N.t('drawerTraitsTitle');
    document.getElementById('sub-trigger-traits').innerText = `(${advCount} / ${disCount}, ${traitsPts >= 0 ? '+' + traitsPts : traitsPts} ${I18N.t('ptsUnit')})`;

    const skillCount = (char.skills || []).length;
    document.getElementById('lbl-trigger-skills-title').innerText = I18N.t('drawerSkillsTitle');
    document.getElementById('sub-trigger-skills').innerText = `(${skillCount} ${isEn ? 'learned' : 'aprendidas'}, ${points.skillsTotal} ${I18N.t('ptsUnit')})`;

    document.getElementById('lbl-trigger-equip-title').innerText = I18N.t('drawerEquipTitle');
    document.getElementById('sub-trigger-equip').innerText = `(${roundedWeight} kg, ${enc.name})`;

    // 6. Bottom Dock Elements
    document.getElementById('lbl-points-pill').innerHTML = `${I18N.t('budgetDisplay')}<br>${I18N.t('ptsRemaining')}`;
    document.getElementById('lbl-btn-save').innerText = I18N.t('btnSave');
    document.getElementById('lbl-btn-dice').innerText = I18N.t('btnDice');

    const ptsPill = document.getElementById('val-points-remaining');
    if (ptsPill) {
      ptsPill.innerText = `[${points.remaining}]`;
      ptsPill.style.color = points.remaining < 0 ? '#ff4b60' : 'var(--accent-primary)';
    }

    this.bindAttributeSteppers();
  }

  bindAttributeSteppers() {
    document.querySelectorAll('[data-attr-step]').forEach(btn => {
      btn.onclick = () => {
        const attr = btn.dataset.attr;
        const delta = parseInt(btn.dataset.attrStep);
        if (this.character.attributes[attr] + delta >= 1) {
          this.character.attributes[attr] += delta;
          this.onUpdate();
        }
      };
    });
  }

  // ================= DRAWER SHEET RENDERS =================

  renderTraitsSheet(container) {
    const adv = this.character.advantages || [];
    const disad = this.character.disadvantages || [];

    container.innerHTML = `
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <strong style="color: var(--text-primary); font-size: 1rem;">${I18N.t('headingTalents')}</strong>
          <button class="btn-primary-action" id="btn-sheet-add-adv" style="width: auto; padding: 6px 14px; font-size: 0.8rem; margin: 0;">${I18N.t('btnAdd')}</button>
        </div>
        ${adv.map((a, i) => `
          <div style="display: flex; gap: 8px; margin-bottom: 8px; align-items: center;">
            <input type="text" class="sheet-input adv-name" data-idx="${i}" value="${a.name}" placeholder="${I18N.t('headingTalents')}" style="flex: 3; margin-bottom: 0;">
            <input type="number" class="sheet-input adv-pts" data-idx="${i}" value="${a.points}" placeholder="Pts" style="flex: 1; margin-bottom: 0; text-align: center;">
            <button class="btn-close-sheet btn-del-adv" data-idx="${i}" style="color: #ff4b60;">✕</button>
          </div>
        `).join('')}
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <strong style="color: var(--text-primary); font-size: 1rem;">${I18N.t('headingFlaws')}</strong>
          <button class="btn-primary-action" id="btn-sheet-add-disad" style="width: auto; padding: 6px 14px; font-size: 0.8rem; margin: 0;">${I18N.t('btnAdd')}</button>
        </div>
        ${disad.map((d, i) => `
          <div style="display: flex; gap: 8px; margin-bottom: 8px; align-items: center;">
            <input type="text" class="sheet-input disad-name" data-idx="${i}" value="${d.name}" placeholder="${I18N.t('headingFlaws')}" style="flex: 3; margin-bottom: 0;">
            <input type="number" class="sheet-input disad-pts" data-idx="${i}" value="${d.points}" placeholder="-Pts" style="flex: 1; margin-bottom: 0; text-align: center;">
            <button class="btn-close-sheet btn-del-disad" data-idx="${i}" style="color: #ff4b60;">✕</button>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('btn-sheet-add-adv')?.addEventListener('click', () => {
      this.character.advantages = this.character.advantages || [];
      this.character.advantages.push({ name: this.currentLang === 'en' ? 'Combat Reflexes' : 'Reflexos em Combate', points: 15 });
      this.onUpdate();
      this.renderTraitsSheet(container);
    });

    document.getElementById('btn-sheet-add-disad')?.addEventListener('click', () => {
      this.character.disadvantages = this.character.disadvantages || [];
      this.character.disadvantages.push({ name: this.currentLang === 'en' ? 'Overconfidence' : 'Excesso de Confiança', points: -10 });
      this.onUpdate();
      this.renderTraitsSheet(container);
    });

    container.querySelectorAll('.adv-name').forEach(inp => {
      inp.onchange = (e) => { this.character.advantages[parseInt(e.target.dataset.idx)].name = e.target.value; this.onUpdate(); };
    });
    container.querySelectorAll('.adv-pts').forEach(inp => {
      inp.onchange = (e) => { this.character.advantages[parseInt(e.target.dataset.idx)].points = parseInt(e.target.value) || 0; this.onUpdate(); };
    });
    container.querySelectorAll('.btn-del-adv').forEach(btn => {
      btn.onclick = () => { this.character.advantages.splice(parseInt(btn.dataset.idx), 1); this.onUpdate(); this.renderTraitsSheet(container); };
    });

    container.querySelectorAll('.disad-name').forEach(inp => {
      inp.onchange = (e) => { this.character.disadvantages[parseInt(e.target.dataset.idx)].name = e.target.value; this.onUpdate(); };
    });
    container.querySelectorAll('.disad-pts').forEach(inp => {
      inp.onchange = (e) => { this.character.disadvantages[parseInt(e.target.dataset.idx)].points = parseInt(e.target.value) || 0; this.onUpdate(); };
    });
    container.querySelectorAll('.btn-del-disad').forEach(btn => {
      btn.onclick = () => { this.character.disadvantages.splice(parseInt(btn.dataset.idx), 1); this.onUpdate(); this.renderTraitsSheet(container); };
    });
  }

  renderSkillsSheet(container) {
    const skills = this.character.skills || [];
    const a = this.character.attributes;
    const s = this.character.secondary;

    const getAttrVal = (attrKey) => {
      const k = (attrKey || 'DX').toUpperCase();
      if (k === 'ST' || k === 'PWR' || k === 'FOR') return a.st;
      if (k === 'DX' || k === 'AGI' || k === 'DES') return a.dx;
      if (k === 'IQ' || k === 'COG' || k === 'INT') return a.iq;
      if (k === 'HT' || k === 'VIT') return a.ht;
      if (k === 'PER' || k === 'AWR') return a.iq + (s.perMod || 0);
      if (k === 'WILL' || k === 'RES') return a.iq + (s.willMod || 0);
      return a.dx;
    };

    const isEn = this.currentLang === 'en';
    const tagAgi = isEn ? 'AGI' : 'DES';
    const tagCog = isEn ? 'COG' : 'INT';
    const tagVit = 'VIT';
    const tagPwr = isEn ? 'PWR' : 'FOR';
    const tagAwr = isEn ? 'AWR' : 'PER';

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <strong style="color: var(--text-primary); font-size: 1rem;">${I18N.t('headingSkills')}</strong>
        <button class="btn-primary-action" id="btn-sheet-add-skill" style="width: auto; padding: 6px 14px; font-size: 0.8rem; margin: 0;">${I18N.t('btnAdd')}</button>
      </div>

      ${skills.map((sk, i) => {
        const attrVal = getAttrVal(sk.attr);
        const finalNH = GroogMath.getSkillFinalNH(attrVal, sk.difficulty || 'A', sk.points || 1);
        return `
          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); box-shadow: var(--nm-flat-sm); border-radius: 12px; padding: 10px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <input type="text" class="sheet-input sk-name" data-idx="${i}" value="${sk.name}" style="flex: 1; margin-bottom: 0; font-weight: 800; margin-right: 8px;">
              <strong style="font-size: 1.25rem; color: var(--accent-primary); font-family: var(--font-mono); min-width: 65px; text-align: center;">${I18N.t('elPrefix')} ${finalNH}</strong>
              <button class="btn-close-sheet btn-del-sk" data-idx="${i}" style="color: #ff4b60;">✕</button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1.2fr; gap: 8px; align-items: center;">
              <select class="sheet-input sk-attr" data-idx="${i}" style="margin-bottom: 0; padding: 8px;">
                <option value="AGI" ${sk.attr === 'AGI' || sk.attr === 'DX' || sk.attr === 'DES' ? 'selected' : ''}>${tagAgi}</option>
                <option value="COG" ${sk.attr === 'COG' || sk.attr === 'IQ' || sk.attr === 'INT' ? 'selected' : ''}>${tagCog}</option>
                <option value="VIT" ${sk.attr === 'VIT' || sk.attr === 'HT' ? 'selected' : ''}>${tagVit}</option>
                <option value="PWR" ${sk.attr === 'PWR' || sk.attr === 'ST' || sk.attr === 'FOR' ? 'selected' : ''}>${tagPwr}</option>
                <option value="AWR" ${sk.attr === 'AWR' || sk.attr === 'Per' ? 'selected' : ''}>${tagAwr}</option>
              </select>
              <select class="sheet-input sk-diff" data-idx="${i}" style="margin-bottom: 0; padding: 8px;">
                <option value="E" ${sk.difficulty === 'E' ? 'selected' : ''}>${isEn ? 'Easy' : 'Fácil'}</option>
                <option value="A" ${sk.difficulty === 'A' ? 'selected' : ''}>${isEn ? 'Avg' : 'Média'}</option>
                <option value="H" ${sk.difficulty === 'H' ? 'selected' : ''}>${isEn ? 'Hard' : 'Difícil'}</option>
                <option value="VH" ${sk.difficulty === 'VH' ? 'selected' : ''}>${isEn ? 'V.Hard' : 'M.Difícil'}</option>
              </select>
              <div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                <button class="btn-mini-step" data-action="sk-pts-dec" data-idx="${i}" style="width: 32px; height: 32px;">-</button>
                <span style="font-weight: 900; width: 32px; text-align: center; font-family: var(--font-mono); color: var(--text-primary);">${sk.points}p</span>
                <button class="btn-mini-step" data-action="sk-pts-inc" data-idx="${i}" style="width: 32px; height: 32px;">+</button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    `;

    document.getElementById('btn-sheet-add-skill')?.addEventListener('click', () => {
      this.character.skills = this.character.skills || [];
      this.character.skills.push({ name: this.currentLang === 'en' ? 'Tactical Firearms' : 'Armas de Fogo Táticas', attr: 'AGI', difficulty: 'E', points: 2 });
      this.onUpdate();
      this.renderSkillsSheet(container);
    });

    container.querySelectorAll('.sk-name').forEach(inp => {
      inp.onchange = (e) => { this.character.skills[parseInt(e.target.dataset.idx)].name = e.target.value; this.onUpdate(); };
    });
    container.querySelectorAll('.sk-attr').forEach(sel => {
      sel.onchange = (e) => { this.character.skills[parseInt(e.target.dataset.idx)].attr = e.target.value; this.onUpdate(); };
    });
    container.querySelectorAll('.sk-diff').forEach(sel => {
      sel.onchange = (e) => { this.character.skills[parseInt(e.target.dataset.idx)].difficulty = e.target.value; this.onUpdate(); };
    });

    container.querySelectorAll('[data-action="sk-pts-inc"]').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.idx);
        const cur = this.character.skills[idx].points || 1;
        this.character.skills[idx].points = (cur === 1) ? 2 : (cur === 2) ? 4 : cur + 4;
        this.onUpdate();
        this.renderSkillsSheet(container);
      };
    });

    container.querySelectorAll('[data-action="sk-pts-dec"]').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.idx);
        const cur = this.character.skills[idx].points || 1;
        this.character.skills[idx].points = (cur > 4) ? cur - 4 : (cur === 4) ? 2 : 1;
        this.onUpdate();
        this.renderSkillsSheet(container);
      };
    });

    container.querySelectorAll('.btn-del-sk').forEach(btn => {
      btn.onclick = () => { this.character.skills.splice(parseInt(btn.dataset.idx), 1); this.onUpdate(); this.renderSkillsSheet(container); };
    });
  }

  renderEquipmentSheet(container) {
    const equip = this.character.equipment || [];

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <strong style="color: var(--text-primary); font-size: 1rem;">${I18N.t('headingEquip')}</strong>
        <button class="btn-primary-action" id="btn-sheet-add-item" style="width: auto; padding: 6px 14px; font-size: 0.8rem; margin: 0;">${I18N.t('btnItem')}</button>
      </div>

      ${equip.map((it, i) => `
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
          <input type="text" class="sheet-input eq-name" data-idx="${i}" value="${it.name}" placeholder="Item" style="flex: 3; margin-bottom: 0;">
          <input type="number" step="0.1" class="sheet-input eq-weight" data-idx="${i}" value="${it.weight || 0}" placeholder="kg" style="flex: 1; margin-bottom: 0; text-align: center;">
          <button class="btn-close-sheet btn-del-eq" data-idx="${i}" style="color: #ff4b60;">✕</button>
        </div>
      `).join('')}
    `;

    document.getElementById('btn-sheet-add-item')?.addEventListener('click', () => {
      this.character.equipment = this.character.equipment || [];
      this.character.equipment.push({ name: this.currentLang === 'en' ? 'Tactical Blade' : 'Lâmina Tática', weight: 1.0, cost: 50, qty: 1 });
      this.onUpdate();
      this.renderEquipmentSheet(container);
    });

    container.querySelectorAll('.eq-name').forEach(inp => {
      inp.onchange = (e) => { this.character.equipment[parseInt(e.target.dataset.idx)].name = e.target.value; this.onUpdate(); };
    });
    container.querySelectorAll('.eq-weight').forEach(inp => {
      inp.onchange = (e) => { this.character.equipment[parseInt(e.target.dataset.idx)].weight = parseFloat(e.target.value) || 0; this.onUpdate(); };
    });
    container.querySelectorAll('.btn-del-eq').forEach(btn => {
      btn.onclick = () => { this.character.equipment.splice(parseInt(btn.dataset.idx), 1); this.onUpdate(); this.renderEquipmentSheet(container); };
    });
  }

  renderDossierSheet(container) {
    const d = this.character.dossier || {};
    const p = this.character.personality || {};
    const isEn = this.currentLang === 'en';

    const presets = [
      { name: 'Soldier', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Mercenary', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
      { name: 'Specialist', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
      { name: 'Cyberpunk', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
      { name: 'Infiltrator', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' },
      { name: 'Pilot', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' }
    ];

    container.innerHTML = `
      <!-- 1. HERO AVATAR SHOWCASE (AMPLIADO) -->
      <div class="dossier-hero-card">
        <div class="dossier-avatar-preview-box" id="box-dossier-avatar" title="${isEn ? 'Click to change photo' : 'Clique para trocar de foto'}">
          ${this.character.avatar 
            ? `<img src="${this.character.avatar}" alt="Avatar" class="dossier-avatar-img">` 
            : `<div class="dossier-avatar-placeholder">👤</div>`}
        </div>

        <input type="file" id="inp-avatar-file" accept="image/*" style="display: none;">
        
        <div style="display: flex; gap: 8px; margin-bottom: 10px; width: 100%;">
          <button class="btn-primary-action" id="btn-trigger-file-upload" style="margin: 0; padding: 8px 12px; font-size: 0.78rem; flex: 1;">
            📷 ${isEn ? 'Upload Photo' : 'Carregar Foto'}
          </button>
          <button class="btn-primary-action" id="btn-custom-url-prompt" style="margin: 0; padding: 8px 12px; font-size: 0.78rem; flex: 1; background: var(--bg-surface-sunken); color: var(--accent-primary); border: 1px solid var(--accent-border);">
            🌐 ${isEn ? 'Image URL' : 'Link Web'}
          </button>
        </div>

        <!-- Preset Avatars -->
        <div class="dossier-avatar-controls">
          ${presets.map((pr, i) => `
            <button class="dossier-preset-btn" data-url="${pr.url}">
              ${pr.name}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 2. CAMPAIGN BUDGET & LIMITS (DEFINED BY GM) -->
      <div class="dossier-card-section">
        <div class="dossier-section-header">
          🎯 ${I18N.t('campaignBudgetTitle')}
        </div>
        <div style="font-size: 0.72rem; color: var(--text-secondary); margin-bottom: 8px;">
          ${I18N.t('campaignBudgetSub')}
        </div>
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 10px;">
          <input type="number" class="sheet-input" id="sheet-inp-budget" value="${this.character.campaignBudget || 150}" min="1" max="9999" step="5" style="font-size: 1.1rem; font-weight: 900; font-family: var(--font-mono); color: var(--accent-primary); text-align: center; margin-bottom: 0;">
          <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-secondary);">${I18N.t('ptsUnit')}</span>
        </div>
        <div class="budget-tier-grid">
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 50 ? 'active' : ''}" data-budget="50">${I18N.t('tierAverage')}</button>
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 75 ? 'active' : ''}" data-budget="75">${I18N.t('tierCompetent')}</button>
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 100 ? 'active' : ''}" data-budget="100">${I18N.t('tierHeroic')}</button>
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 150 ? 'active' : ''}" data-budget="150">${I18N.t('tierVeteran')}</button>
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 200 ? 'active' : ''}" data-budget="200">${I18N.t('tierLegendary')}</button>
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 300 ? 'active' : ''}" data-budget="300">${I18N.t('tierSuperhuman')}</button>
          <button class="budget-tier-btn ${(this.character.campaignBudget || 150) === 500 ? 'active' : ''}" data-budget="500">${I18N.t('tierGodlike')}</button>
        </div>
      </div>

      <!-- 3. PERSONALIDADE & PSICOLOGIA -->
      <div class="dossier-card-section">
        <div class="dossier-section-header">
          🧠 ${isEn ? 'Personality & Psychological Profile' : 'Personalidade & Perfil Psicológico'}
        </div>

        <div style="margin-bottom: 10px;">
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">
            ${isEn ? 'CORE TRAITS & TEMPERAMENT' : 'TRAÇOS DE PERSONALIDADE & TEMPERAMENTO'}
          </label>
          <textarea class="sheet-input" id="sheet-inp-traits" rows="2" style="resize: vertical; line-height: 1.3;" placeholder="${isEn ? 'E.g., Pragmatic, calm under fire, observant...' : 'Ex: Focado, pragmático, observador silencioso...'}">${p.traits || ''}</textarea>
        </div>

        <div style="margin-bottom: 10px;">
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">
            ${isEn ? 'CENTRAL MOTIVATION & DRIVE' : 'MOTIVAÇÃO CENTRAL & OBJETIVO'}
          </label>
          <input type="text" class="sheet-input" id="sheet-inp-motivation" value="${p.motivation || ''}" placeholder="${isEn ? 'E.g., Seek truth about the rift' : 'Ex: Resgatar sua antiga unidade'}">
        </div>

        <div style="margin-bottom: 10px;">
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">
            ${isEn ? 'PERSONAL CODE / ETHICS' : 'CÓDIGO DE CONDUTA / ÉTICA'}
          </label>
          <input type="text" class="sheet-input" id="sheet-inp-code" value="${p.code || ''}" placeholder="${isEn ? 'Never leave an ally behind' : 'Nunca abandonar um companheiro'}">
        </div>

        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">
            ${isEn ? 'ICONIC QUOTE / MOTTO' : 'CITAÇÃO MARCANTE / LEMA'}
          </label>
          <input type="text" class="sheet-input" id="sheet-inp-quote" value="${p.quote || ''}" placeholder="${isEn ? '"Precision beats power."' : '"A precisão vence a força bruta."'}" style="font-style: italic; color: var(--accent-primary);">
        </div>
      </div>

      <!-- 3. BIOMETRIA & IDENTIFICAÇÃO -->
      <div class="dossier-card-section">
        <div class="dossier-section-header">
          🧬 ${isEn ? 'Biometrics & Identification' : 'Biometria & Identificação'}
        </div>

        <div style="margin-bottom: 10px;">
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">
            ${I18N.t('lblConcept')}
          </label>
          <input type="text" class="sheet-input" id="sheet-inp-concept" value="${this.character.concept || ''}" placeholder="${isEn ? 'E.g. Tactical Operator' : 'Ex: Veterano Batedor'}">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 10px;">
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${I18N.t('lblAge')}</label>
            <input type="number" class="sheet-input" id="sheet-inp-age" value="${d.age || 29}">
          </div>
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${isEn ? 'GENDER' : 'GÊNERO'}</label>
            <input type="text" class="sheet-input" id="sheet-inp-gender" value="${d.gender || (isEn ? 'Male' : 'Masculino')}">
          </div>
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${I18N.t('lblTl')}</label>
            <input type="number" class="sheet-input" id="sheet-inp-tl" value="${d.tl || 8}">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${isEn ? 'HEIGHT' : 'ALTURA'}</label>
            <input type="text" class="sheet-input" id="sheet-inp-height" value="${d.height || '1.82 m'}">
          </div>
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${isEn ? 'WEIGHT' : 'PESO'}</label>
            <input type="text" class="sheet-input" id="sheet-inp-weight" value="${d.weight || '84 kg'}">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${isEn ? 'EYES' : 'OLHOS'}</label>
            <input type="text" class="sheet-input" id="sheet-inp-eyes" value="${d.eyes || (isEn ? 'Grey' : 'Cinza')}">
          </div>
          <div>
            <label style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">${isEn ? 'HAIR' : 'CABELO'}</label>
            <input type="text" class="sheet-input" id="sheet-inp-hair" value="${d.hair || (isEn ? 'Black buzz' : 'Raspado')}">
          </div>
        </div>

        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--text-secondary); display: block; margin-bottom: 4px;">
            ${isEn ? 'SCARS / DISTINCTIVE MARKS' : 'CICATRIZES / MARCAS DISTINTIVAS'}
          </label>
          <input type="text" class="sheet-input" id="sheet-inp-scars" value="${d.scars || (isEn ? 'Shoulder scar' : 'Cicatriz na escápula')}">
        </div>
      </div>

      <!-- 4. AÇÕES DA FICHA -->
      <div style="display: flex; gap: 8px;">
        <button class="btn-primary-action" id="btn-sheet-export-json" style="flex: 1;">
          💾 ${I18N.t('btnExportJson')}
        </button>
      </div>
    `;

    // Bindings de Avatar
    const fileInp = document.getElementById('inp-avatar-file');
    document.getElementById('btn-trigger-file-upload')?.addEventListener('click', () => fileInp?.click());
    document.getElementById('box-dossier-avatar')?.addEventListener('click', () => fileInp?.click());

    fileInp?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (re) => {
          this.character.avatar = re.target.result;
          this.onUpdate();
          this.renderDossierSheet(container);
        };
        reader.readAsDataURL(file);
      }
    });

    document.getElementById('btn-custom-url-prompt')?.addEventListener('click', () => {
      const url = prompt(isEn ? "Paste image URL for character avatar:" : "Cole a URL da imagem para o avatar do personagem:", this.character.avatar || "");
      if (url !== null) {
        this.character.avatar = url.trim();
        this.onUpdate();
        this.renderDossierSheet(container);
      }
    });

    container.querySelectorAll('.dossier-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.character.avatar = btn.dataset.url;
        this.onUpdate();
        this.renderDossierSheet(container);
      });
    });

    // Bindings de Orçamento / Budget da Campanha
    const sheetBudgetInp = document.getElementById('sheet-inp-budget');
    sheetBudgetInp?.addEventListener('change', (e) => {
      const val = parseInt(e.target.value);
      if (!isNaN(val) && val >= 1) {
        this.character.campaignBudget = val;
        this.onUpdate();
        this.renderDossierSheet(container);
      }
    });

    container.querySelectorAll('.budget-tier-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.budget);
        if (!isNaN(val)) {
          this.character.campaignBudget = val;
          this.onUpdate();
          this.renderDossierSheet(container);
        }
      });
    });

    // Bindings de Personalidade
    this.character.personality = this.character.personality || {};
    document.getElementById('sheet-inp-traits')?.addEventListener('change', (e) => { this.character.personality.traits = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-motivation')?.addEventListener('change', (e) => { this.character.personality.motivation = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-code')?.addEventListener('change', (e) => { this.character.personality.code = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-quote')?.addEventListener('change', (e) => { this.character.personality.quote = e.target.value; this.onUpdate(); });

    // Bindings de Biometria
    this.character.dossier = this.character.dossier || {};
    document.getElementById('sheet-inp-concept')?.addEventListener('change', (e) => { this.character.concept = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-age')?.addEventListener('change', (e) => { this.character.dossier.age = parseInt(e.target.value) || 29; this.onUpdate(); });
    document.getElementById('sheet-inp-gender')?.addEventListener('change', (e) => { this.character.dossier.gender = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-tl')?.addEventListener('change', (e) => { this.character.dossier.tl = parseInt(e.target.value) || 8; this.onUpdate(); });
    document.getElementById('sheet-inp-height')?.addEventListener('change', (e) => { this.character.dossier.height = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-weight')?.addEventListener('change', (e) => { this.character.dossier.weight = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-eyes')?.addEventListener('change', (e) => { this.character.dossier.eyes = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-hair')?.addEventListener('change', (e) => { this.character.dossier.hair = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-scars')?.addEventListener('change', (e) => { this.character.dossier.scars = e.target.value; this.onUpdate(); });

    document.getElementById('btn-sheet-export-json')?.addEventListener('click', () => StorageEngine.exportJSON(this.character));
  }

  setupDiceRoller() {
    this.dice = [3, 4, 5];
  }

  renderDiceSheet(container) {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const sum = d1 + d2 + d3;

    let verdict = (sum <= 4) ? I18N.t('critSuccess') : (sum >= 17) ? I18N.t('critFailure') : I18N.t('normalRoll');
    let color = (sum <= 4) ? "var(--accent-primary)" : (sum >= 17) ? "#ff4b60" : "var(--text-primary)";

    container.innerHTML = `
      <div class="dice-results-box">
        <div class="dice-cubes-row">
          <div class="die-cube">${d1}</div>
          <div class="die-cube">${d2}</div>
          <div class="die-cube">${d3}</div>
        </div>
        <div class="dice-sum-display">${sum}</div>
        <strong style="color: ${color}; font-size: 1.05rem; display: block; margin-top: 8px; font-weight: 900; letter-spacing: 0.5px;">${verdict}</strong>
      </div>
      <button class="btn-primary-action" id="btn-roll-again" style="font-size: 1.05rem; padding: 14px;">${I18N.t('btnRollAgain')}</button>
    `;

    document.getElementById('btn-roll-again')?.addEventListener('click', () => this.renderDiceSheet(container));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new GroogMobileApp();
});
