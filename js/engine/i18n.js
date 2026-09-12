/**
 * GROOG - INTERNATIONALIZATION DICTIONARY (PT-BR & EN)
 */

export const I18N = {
  currentLang: 'pt',

  dict: {
    pt: {
      // Header & System
      systemTitle: "GROOG",
      systemSubtitle: "PAINEL DE AÇO // MOTOR TÁTICO",
      pointsSpent: "GASTOS",
      pointsRemaining: "RESTANTE",
      pointsBudget: "ORÇAMENTO",
      disadCeiling: "TETO DESV.",
      themeBtn: "TEMA",
      langBtn: "IDIO",
      saveBtn: "SALVAR",
      slotsBtn: "SLOTS",

      // Wizard Steps (1 to 8)
      step1Title: "01. IDENTIFICAÇÃO & ORIGEM",
      step2Title: "02. ATRIBUTOS & BIOMETRIA",
      step3Title: "03. DEFESAS & MOBILIDADE",
      step4Title: "04. VANTAGENS & QUALIDADES",
      step5Title: "05. DESVANTAGENS & PECULIARIDADES",
      step6Title: "06. TREINAMENTO & PERÍCIAS",
      step7Title: "07. ARSENAL & CARGA",
      step8Title: "08. REVISÃO & DOSSIÊ FINAL",

      // Navigation Buttons
      btnPrev: "◀ VOLTAR",
      btnNext: "AVANÇAR ▶",
      btnFinish: "CONCLUIR & SALVAR ✔",

      // Attributes
      st: "FORÇA (ST)",
      dx: "DESTREZA (DX)",
      iq: "INTELIGÊNCIA (IQ)",
      ht: "VITALIDADE (HT)",
      hp: "PONTOS DE VIDA (PV)",
      fp: "PONTOS DE FADIGA (PF)",
      will: "VONTADE",
      per: "PERCEPÇÃO",
      basicSpeed: "VELOCIDADE BÁSICA",
      basicMove: "DESLOCAMENTO (DB)",
      basicLift: "BASE DE CARGA (BC)",
      dmgThrust: "DANO PONTA (GdP)",
      dmgSwing: "DANO BALANÇO (GeB)",

      // Combat
      dodge: "ESQUIVA EFETIVA",
      parry: "APARAR",
      block: "BLOQUEIO",
      dr: "RESISTÊNCIA A DANO (RD)",
      encumbrance: "NÍVEL DE CARGA",

      // Alerts
      savedSuccess: "OPERADOR SALVO COM SUCESSO!",
      overBudgetWarn: "ALERTA: ORÇAMENTO EXCEDIDO!",
      disadExceededWarn: "ALERTA: TETO DE DESVANTAGENS EXCEDIDO!"
    },

    en: {
      // Header & System
      systemTitle: "GROOG",
      systemSubtitle: "STEEL CHASSIS // TACTICAL ENGINE",
      pointsSpent: "SPENT",
      pointsRemaining: "REMAINING",
      pointsBudget: "BUDGET",
      disadCeiling: "DISAD LIMIT",
      themeBtn: "THEME",
      langBtn: "LANG",
      saveBtn: "SAVE",
      slotsBtn: "SLOTS",

      // Wizard Steps (1 to 8)
      step1Title: "01. DOSSIER & IDENTITY",
      step2Title: "02. ATTRIBUTES & BIOMETRICS",
      step3Title: "03. DEFENSES & MOBILITY",
      step4Title: "04. ADVANTAGES & PERKS",
      step5Title: "05. DISADVANTAGES & QUIRKS",
      step6Title: "06. SKILLS & TRAINING",
      step7Title: "07. ARSENAL & LOADOUT",
      step8Title: "08. FINAL AUDIT & DOSSIER",

      // Navigation Buttons
      btnPrev: "◀ BACK",
      btnNext: "NEXT ▶",
      btnFinish: "FINISH & SAVE ✔",

      // Attributes
      st: "STRENGTH (ST)",
      dx: "DEXTERITY (DX)",
      iq: "INTELLIGENCE (IQ)",
      ht: "HEALTH (HT)",
      hp: "HIT POINTS (HP)",
      fp: "FATIGUE POINTS (FP)",
      will: "WILLPOWER",
      per: "PERCEPTION",
      basicSpeed: "BASIC SPEED",
      basicMove: "BASIC MOVE",
      basicLift: "BASIC LIFT (BL)",
      dmgThrust: "THRUST DAMAGE",
      dmgSwing: "SWING DAMAGE",

      // Combat
      dodge: "EFFECTIVE DODGE",
      parry: "PARRY",
      block: "BLOCK",
      dr: "DAMAGE RESISTANCE (DR)",
      encumbrance: "ENCUMBRANCE LEVEL",

      // Alerts
      savedSuccess: "OPERATOR SAVED SUCCESSFULLY!",
      overBudgetWarn: "ALERT: BUDGET EXCEEDED!",
      disadExceededWarn: "ALERT: DISADVANTAGE LIMIT EXCEEDED!"
    }
  },

  t(key) {
    const lang = this.currentLang || 'pt';
    return this.dict[lang][key] || key;
  },

  setLang(lang) {
    if (this.dict[lang]) {
      this.currentLang = lang;
      document.documentElement.lang = lang;
    }
  }
};
