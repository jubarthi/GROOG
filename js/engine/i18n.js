/**
 * GROOG - TACTICAL INTERNATIONALIZATION & SYNONYM ENGINE (EN & PT-BR)
 * 100% Legally Decoupled Terminology
 */

export const I18N = {
  currentLang: localStorage.getItem('groog_lang') || 'en',

  dict: {
    en: {
      // System & Header
      systemTitle: "GROOG",
      budgetDisplay: "BUDGET",
      spentDisplay: "SPENT",
      ptsUnit: "pts",

      // Primary Attributes (PWR, AGI, COG, VIT)
      attrSectionTitle: "Primary Attributes",
      attrPwr: "PWR • POWER",
      attrAgi: "AGI • AGILITY",
      attrCog: "COG • COGNITION",
      attrVit: "VIT • VITALITY",

      // Derived Telemetry
      telemetryTitle: "Derived Telemetry",
      lblHp: "Life Points",
      lblFp: "Energy Pool",
      lblWill: "Resolve",
      lblPer: "Awareness",
      lblDodge: "Evasion (CR)",
      lblSpeed: "Reaction Speed",
      lblMove: "Movement Pace",
      lblDamage: "Kinetic Impact (Sw | Dir)",

      // Drawers
      drawerTraitsTitle: "Talents & Flaws",
      drawerTraitsSub: "positive / negative traits",
      drawerSkillsTitle: "Proficiencies & Training",
      drawerSkillsSub: "learned disciplines",
      drawerEquipTitle: "Inventory & Loadout",
      drawerEquipSub: "carried payload",
      drawerDossierTitle: "Operator Dossier",
      drawerDiceTitle: "Tactical 3d6 Roller",

      // Buttons & Actions
      btnSave: "SAVE",
      btnDice: "ROLL 3d6",
      btnRollAgain: "🎲 ROLL 3d6 AGAIN",
      btnExportJson: "💾 Export Character JSON",
      btnAdd: "+ Add",
      btnItem: "+ Item",
      ptsRemaining: "Remaining",

      // Drawer Inner Headings
      headingTalents: "Talents & Boons",
      headingFlaws: "Flaws & Burdens",
      headingSkills: "Registered Proficiencies",
      headingEquip: "Equipment & Weapons",
      lblConcept: "CONCEPT / OCCUPATION",
      lblAge: "AGE",
      lblTl: "TECH LEVEL (TL)",
      lblAppearance: "HEIGHT / WEIGHT / LOOKS",
      elPrefix: "EL",

      // Alerts & Results
      critSuccess: "CRITICAL SUCCESS!",
      critFailure: "CRITICAL FAILURE!",
      normalRoll: "TACTICAL RESOLUTION",
      saveSuccess: "Character saved successfully in local storage!"
    },

    pt: {
      // Sistema & Cabeçalho
      systemTitle: "GROOG",
      budgetDisplay: "ORÇAMENTO",
      spentDisplay: "GASTOS",
      ptsUnit: "pts",

      // Atributos Primários (FOR, DES, INT, VIT)
      attrSectionTitle: "Atributos Primários",
      attrPwr: "FOR • FORÇA",
      attrAgi: "DES • DESTREZA",
      attrCog: "INT • COGNIÇÃO",
      attrVit: "VIT • VITALIDADE",

      // Telemetria Derivada
      telemetryTitle: "Telemetria & Derivadas",
      lblHp: "Pontos de Vida",
      lblFp: "Pontos Fadiga",
      lblWill: "Vontade",
      lblPer: "Percepção",
      lblDodge: "Esquiva (CR)",
      lblSpeed: "Velocidade Reação",
      lblMove: "Deslocamento",
      lblDamage: "Dano (Balanço | Golpe)",

      // Gavetas
      drawerTraitsTitle: "Dons & Fardos",
      drawerTraitsSub: "qualidades e limitações",
      drawerSkillsTitle: "Habilidades Técnicas",
      drawerSkillsSub: "treinamentos aprendidos",
      drawerEquipTitle: "Inventário & Carga",
      drawerEquipSub: "peso transportado",
      drawerDossierTitle: "Dossiê do Operador",
      drawerDiceTitle: "Rolador Tático 3d6",

      // Botões & Ações
      btnSave: "SALVAR",
      btnDice: "ROLAR 3d6",
      btnRollAgain: "🎲 ROLAR 3d6 NOVAMENTE",
      btnExportJson: "💾 Exportar Ficha JSON",
      btnAdd: "+ Adicionar",
      btnItem: "+ Item",
      ptsRemaining: "Restantes",

      // Conteúdo das Gavetas
      headingTalents: "Dons & Prerrogativas",
      headingFlaws: "Fardos & Vulnerabilidades",
      headingSkills: "Habilidades Cadastradas",
      headingEquip: "Inventário & Armas",
      lblConcept: "CONCEITO / OCUPAÇÃO",
      lblAge: "IDADE",
      lblTl: "NÍVEL TECNOLÓGICO (NT)",
      lblAppearance: "ALTURA / PESO / APARÊNCIA",
      elPrefix: "NE",

      // Alertas & Resultados
      critSuccess: "SUCESSO DECISIVO (CRÍTICO!)",
      critFailure: "FALHA CRÍTICA!",
      normalRoll: "ROLAGEM NORMAL",
      saveSuccess: "Ficha salva com sucesso no armazenamento local!"
    }
  },

  t(key) {
    const lang = this.currentLang || 'en';
    const dict = this.dict[lang] || this.dict.en;
    return dict[key] || key;
  },

  setLang(lang) {
    if (this.dict[lang]) {
      this.currentLang = lang;
      localStorage.setItem('groog_lang', lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }
  }
};

