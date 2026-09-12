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
    this.init();
  }

  init() {
    this.setupHeaderEvents();
    this.setupDrawerEvents();
    this.setupDiceRoller();
    this.render();
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

    document.getElementById('btn-header-avatar')?.addEventListener('click', () => this.openSheet('dossier'));
    document.getElementById('btn-save-bottom')?.addEventListener('click', () => {
      StorageEngine.saveProfile(this.character);
      alert("Ficha salva com sucesso!");
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
      titleEl.innerText = "Vantagens & Desvantagens";
      this.renderTraitsSheet(container);
    } else if (sheetId === 'skills') {
      titleEl.innerText = "Perícias & Treinamento";
      this.renderSkillsSheet(container);
    } else if (sheetId === 'equipment') {
      titleEl.innerText = "Equipamento & Carga";
      this.renderEquipmentSheet(container);
    } else if (sheetId === 'dossier') {
      titleEl.innerText = "Dossiê do Personagem";
      this.renderDossierSheet(container);
    } else if (sheetId === 'dice') {
      titleEl.innerText = "Rolador de Dados 3d6";
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
    const hasCR = (char.advantages || []).some(ad => ad.name.toLowerCase().includes('reflexos em combate'));
    const mobility = GroogMath.getEffectiveMobility(basicMove, basicSpeed, enc, hasCR);

    // 1. Header
    const ptsHeader = document.getElementById('header-pts-display');
    if (ptsHeader) ptsHeader.innerText = `[Pts: ${points.budget} / ${points.totalSpent} Gastos]`;

    // 2. Attributes Section Title
    const attrTitle = document.getElementById('attr-section-title');
    if (attrTitle) attrTitle.innerText = `Atributos Básicos (${points.attributesTotal} pts)`;

    // 3. Attribute Cards
    const setAttr = (key, val, costPer) => {
      const elVal = document.getElementById(`val-attr-${key}`);
      const elSub = document.getElementById(`sub-attr-${key}`);
      const cost = (val - 10) * costPer;
      if (elVal) elVal.innerText = `[${val}]`;
      if (elSub) elSub.innerText = `${key.toUpperCase()} ${val} [${cost >= 0 ? '+' + cost : cost} pts]`;
    };

    setAttr('st', a.st, 10);
    setAttr('dx', a.dx, 20);
    setAttr('iq', a.iq, 20);
    setAttr('ht', a.ht, 10);

    // 4. Derived Telemetry Grid
    const hpFinal = a.st + (s.hpMod || 0);
    const fpFinal = a.ht + (s.fpMod || 0);
    const willFinal = a.iq + (s.willMod || 0);
    const perFinal = a.iq + (s.perMod || 0);

    document.getElementById('der-hp').innerText = `${hpFinal}/${hpFinal}`;
    document.getElementById('der-fp').innerText = `${fpFinal}/${fpFinal}`;
    document.getElementById('der-will').innerText = `${willFinal}`;
    document.getElementById('der-per').innerText = `${perFinal}`;
    document.getElementById('der-dodge-cr').innerText = hasCR ? `${mobility.effectiveDodge}+1` : `${mobility.effectiveDodge}`;
    document.getElementById('der-speed').innerText = `${basicSpeed.toFixed(2)}`;
    document.getElementById('der-move').innerText = `${mobility.effectiveMove} m/s`;
    document.getElementById('der-dmg').innerText = `G: ${damage.swing} | I: ${damage.thrust}`;

    // 5. Drawer Summary Subtitles
    const advCount = (char.advantages || []).length;
    const disCount = (char.disadvantages || []).length;
    const traitsPts = points.advantagesTotal + points.disadvantagesTotal;
    document.getElementById('sub-trigger-traits').innerText = `(${advCount} Vant, ${disCount} Desv, ${traitsPts >= 0 ? '+' + traitsPts : traitsPts} pts)`;

    const skillCount = (char.skills || []).length;
    document.getElementById('sub-trigger-skills').innerText = `(${skillCount} aprendidas, ${points.skillsTotal} pts)`;

    document.getElementById('sub-trigger-equip').innerText = `(${roundedWeight} kg, ${enc.name})`;

    // 6. Bottom Points Pill Box
    const ptsPill = document.getElementById('val-points-remaining');
    if (ptsPill) {
      ptsPill.innerText = `[${points.remaining}]`;
      ptsPill.style.color = points.remaining < 0 ? '#f43f5e' : '#4ade80';
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
      <div style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong>Vantagens</strong>
          <button class="btn-primary-action" id="btn-sheet-add-adv" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">+ Adicionar</button>
        </div>
        ${adv.map((a, i) => `
          <div style="display: flex; gap: 6px; margin-bottom: 6px;">
            <input type="text" class="sheet-input adv-name" data-idx="${i}" value="${a.name}" placeholder="Nome da vantagem" style="flex: 3; margin-bottom: 0;">
            <input type="number" class="sheet-input adv-pts" data-idx="${i}" value="${a.points}" placeholder="Pts" style="flex: 1; margin-bottom: 0; text-align: center;">
            <button class="btn-close-sheet btn-del-adv" data-idx="${i}" style="color: red;">✕</button>
          </div>
        `).join('')}
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong>Desvantagens</strong>
          <button class="btn-primary-action" id="btn-sheet-add-disad" style="width: auto; padding: 6px 12px; font-size: 0.8rem; background: #ea580c;">+ Adicionar</button>
        </div>
        ${disad.map((d, i) => `
          <div style="display: flex; gap: 6px; margin-bottom: 6px;">
            <input type="text" class="sheet-input disad-name" data-idx="${i}" value="${d.name}" placeholder="Nome da desvantagem" style="flex: 3; margin-bottom: 0;">
            <input type="number" class="sheet-input disad-pts" data-idx="${i}" value="${d.points}" placeholder="-Pts" style="flex: 1; margin-bottom: 0; text-align: center;">
            <button class="btn-close-sheet btn-del-disad" data-idx="${i}" style="color: red;">✕</button>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('btn-sheet-add-adv')?.addEventListener('click', () => {
      this.character.advantages = this.character.advantages || [];
      this.character.advantages.push({ name: 'Nova Vantagem', points: 10 });
      this.onUpdate();
      this.renderTraitsSheet(container);
    });

    document.getElementById('btn-sheet-add-disad')?.addEventListener('click', () => {
      this.character.disadvantages = this.character.disadvantages || [];
      this.character.disadvantages.push({ name: 'Nova Desvantagem', points: -10 });
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
      if (k === 'ST') return a.st;
      if (k === 'DX') return a.dx;
      if (k === 'IQ') return a.iq;
      if (k === 'HT') return a.ht;
      if (k === 'PER') return a.iq + (s.perMod || 0);
      if (k === 'WILL') return a.iq + (s.willMod || 0);
      return a.dx;
    };

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <strong>Perícias Cadastradas</strong>
        <button class="btn-primary-action" id="btn-sheet-add-skill" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">+ Adicionar</button>
      </div>

      ${skills.map((sk, i) => {
        const attrVal = getAttrVal(sk.attr);
        const finalNH = GroogMath.getSkillFinalNH(attrVal, sk.difficulty || 'A', sk.points || 1);
        return `
          <div style="background: #f8fafc; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 8px; margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <input type="text" class="sheet-input sk-name" data-idx="${i}" value="${sk.name}" style="flex: 1; margin-bottom: 0; font-weight: 700; margin-right: 6px;">
              <strong style="font-size: 1.2rem; color: #0284c7; min-width: 45px; text-align: center;">NH ${finalNH}</strong>
              <button class="btn-close-sheet btn-del-sk" data-idx="${i}" style="color: red;">✕</button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1.2fr; gap: 6px;">
              <select class="sheet-input sk-attr" data-idx="${i}" style="margin-bottom: 0; padding: 6px;">
                <option value="DX" ${sk.attr === 'DX' ? 'selected' : ''}>DX</option>
                <option value="IQ" ${sk.attr === 'IQ' ? 'selected' : ''}>IQ</option>
                <option value="HT" ${sk.attr === 'HT' ? 'selected' : ''}>HT</option>
                <option value="ST" ${sk.attr === 'ST' ? 'selected' : ''}>ST</option>
                <option value="Per" ${sk.attr === 'Per' ? 'selected' : ''}>Per</option>
              </select>
              <select class="sheet-input sk-diff" data-idx="${i}" style="margin-bottom: 0; padding: 6px;">
                <option value="E" ${sk.difficulty === 'E' ? 'selected' : ''}>Fácil</option>
                <option value="A" ${sk.difficulty === 'A' ? 'selected' : ''}>Média</option>
                <option value="H" ${sk.difficulty === 'H' ? 'selected' : ''}>Difícil</option>
                <option value="VH" ${sk.difficulty === 'VH' ? 'selected' : ''}>M.Difícil</option>
              </select>
              <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
                <button class="btn-mini-step" data-action="sk-pts-dec" data-idx="${i}">-</button>
                <span style="font-weight: bold; width: 30px; text-align: center;">${sk.points}p</span>
                <button class="btn-mini-step" data-action="sk-pts-inc" data-idx="${i}">+</button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    `;

    document.getElementById('btn-sheet-add-skill')?.addEventListener('click', () => {
      this.character.skills = this.character.skills || [];
      this.character.skills.push({ name: 'Nova Perícia', attr: 'DX', difficulty: 'A', points: 2 });
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
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <strong>Inventário & Armas</strong>
        <button class="btn-primary-action" id="btn-sheet-add-item" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">+ Item</button>
      </div>

      ${equip.map((it, i) => `
        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 6px;">
          <input type="text" class="sheet-input eq-name" data-idx="${i}" value="${it.name}" placeholder="Item" style="flex: 3; margin-bottom: 0;">
          <input type="number" step="0.1" class="sheet-input eq-weight" data-idx="${i}" value="${it.weight || 0}" placeholder="kg" style="flex: 1; margin-bottom: 0; text-align: center;">
          <button class="btn-close-sheet btn-del-eq" data-idx="${i}" style="color: red;">✕</button>
        </div>
      `).join('')}
    `;

    document.getElementById('btn-sheet-add-item')?.addEventListener('click', () => {
      this.character.equipment = this.character.equipment || [];
      this.character.equipment.push({ name: 'Novo Item', weight: 1.0, cost: 50, qty: 1 });
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

    container.innerHTML = `
      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.8rem; font-weight: bold; color: #475569;">CONCEITO / OCUPAÇÃO</label>
        <input type="text" class="sheet-input" id="sheet-inp-concept" value="${this.character.concept || ''}">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
        <div>
          <label style="font-size: 0.8rem; font-weight: bold; color: #475569;">IDADE</label>
          <input type="number" class="sheet-input" id="sheet-inp-age" value="${d.age || 28}">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: bold; color: #475569;">NÍVEL TECNOLÓGICO (NT)</label>
          <input type="number" class="sheet-input" id="sheet-inp-tl" value="${d.tl || 8}">
        </div>
      </div>
      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.8rem; font-weight: bold; color: #475569;">ALTURA / PESO / APARÊNCIA</label>
        <input type="text" class="sheet-input" id="sheet-inp-app" value="${d.appearance || '1.80m / 80kg'}">
      </div>
      <button class="btn-primary-action" id="btn-sheet-export-json" style="margin-top: 10px;">💾 Exportar Ficha JSON</button>
    `;

    document.getElementById('sheet-inp-concept')?.addEventListener('change', (e) => { this.character.concept = e.target.value; this.onUpdate(); });
    document.getElementById('sheet-inp-age')?.addEventListener('change', (e) => { this.character.dossier.age = parseInt(e.target.value) || 28; this.onUpdate(); });
    document.getElementById('sheet-inp-tl')?.addEventListener('change', (e) => { this.character.dossier.tl = parseInt(e.target.value) || 8; this.onUpdate(); });
    document.getElementById('sheet-inp-app')?.addEventListener('change', (e) => { this.character.dossier.appearance = e.target.value; this.onUpdate(); });
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

    let verdict = (sum <= 4) ? "SUCESSO DECISIVO (CRÍTICO!)" : (sum >= 17) ? "FALHA CRÍTICA!" : "ROLAGEM NORMAL";
    let color = (sum <= 4) ? "#22c55e" : (sum >= 17) ? "#ef4444" : "#38bdf8";

    container.innerHTML = `
      <div class="dice-results-box">
        <div class="dice-cubes-row">
          <div class="die-cube">${d1}</div>
          <div class="die-cube">${d2}</div>
          <div class="die-cube">${d3}</div>
        </div>
        <div class="dice-sum-display">${sum}</div>
        <strong style="color: ${color}; font-size: 1rem; display: block; margin-top: 6px;">${verdict}</strong>
      </div>
      <button class="btn-primary-action" id="btn-roll-again" style="background: #166534; font-size: 1.1rem; padding: 14px;">🎲 ROLAR 3d6 NOVAMENTE</button>
    `;

    document.getElementById('btn-roll-again')?.addEventListener('click', () => this.renderDiceSheet(container));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new GroogMobileApp();
});
