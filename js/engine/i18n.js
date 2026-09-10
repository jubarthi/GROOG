/**
 * GROOG - INTERNATIONALIZATION DICTIONARY (PT-BR & EN)
 * Complete terminology translation for GURPS/GROOG rules and UI.
 */

export const I18N = {
  currentLang: 'pt',

  dict: {
    pt: {
      // Header & System
      systemTitle: "GROOG - SISTEMA TÁTICO",
      systemSubtitle: "CALCULADORA & MOTOR DE PERSONAGENS",
      pointsSpent: "GASTOS",
      pointsRemaining: "RESTANTES",
      pointsBudget: "ORÇAMENTO DO MESTRE",
      disadLimit: "TETO DESVANTAGENS",
      themeBtn: "TEMA",
      langBtn: "IDIO",
      saveBtn: "SALVAR",
      loadBtn: "CARREGAR",
      exportBtn: "EXPORTAR",

      // Tabs
      tabDossier: "01 DOSSIÊ",
      tabBiometrics: "02 BIOMETRIA",
      tabCombat: "03 DEFESA & CARGA",
      tabTraits: "04 TRAÇOS & PODERES",
      tabSkills: "05 TREINAMENTO",
      tabArsenal: "06 ARSENAL",
      tabSheet: "07 FICHA FINAL",

      // Dossier
      charName: "NOME DO PERSONAGEM",
      playerName: "JOGADOR / OPERADOR",
      concept: "CONCEITO / OCUPAÇÃO",
      age: "IDADE",
      birthday: "DATA / LOCAL DE NASCIMENTO",
      heightWeight: "ALTURA & PESO",
      appearance: "APARÊNCIA FÍSICA",
      techLevel: "NÍVEL TECNOLÓGICO (NT)",
      campaignTL: "NT DA CAMPANHA",
      wealth: "RIQUEZA",
      status: "STATUS SOCIAL",

      // Biometrics / Attributes
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

      // Combat & Load
      dodge: "ESQUIVA EFETIVA",
      parry: "APARAR BASE",
      block: "BLOQUEIO",
      dr: "RESISTÊNCIA A DANO (RD)",
      encumbrance: "NÍVEL DE CARGA",
      totalWeight: "PESO TOTAL CARREGADO",

      // Traits & Skills
      advantages: "VANTAGENS & QUALIDADES",
      disadvantages: "DESVANTAGENS & PECULIARIDADES",
      addTrait: "+ ADICIONAR TRAÇO",
      addSkill: "+ ADICIONAR PERÍCIA",
      skillName: "PERÍCIA",
      skillAttr: "ATRIBUTO BASE",
      skillDiff: "DIFICULDADE",
      skillPts: "PONTOS",
      skillNH: "NH FINAL (3d6)",

      // Difficulties
      diffEasy: "Fácil (F)",
      diffAvg: "Média (M)",
      diffHard: "Difícil (D)",
      diffVHard: "Muito Difícil (MD)",

      // Status messages
      savedSuccess: "PERSONAGEM SALVO COM SUCESSO!",
      overBudgetWarn: "ALERTA: ORÇAMENTO DE PONTOS EXCEDIDO!",
      disadExceededWarn: "ALERTA: TETO DE DESVANTAGENS EXCEDIDO!"
    },

    en: {
      // Header & System
      systemTitle: "GROOG - TACTICAL SYSTEM",
      systemSubtitle: "CHARACTER ENGINE & CALCULATOR",
      pointsSpent: "SPENT",
      pointsRemaining: "REMAINING",
      pointsBudget: "GM POINT BUDGET",
      disadLimit: "DISAD LIMIT",
      themeBtn: "THEME",
      langBtn: "LANG",
      saveBtn: "SAVE",
      loadBtn: "LOAD",
      exportBtn: "EXPORT",

      // Tabs
      tabDossier: "01 DOSSIER",
      tabBiometrics: "02 BIOMETRICS",
      tabCombat: "03 DEFENSE & LOAD",
      tabTraits: "04 TRAITS & POWERS",
      tabSkills: "05 SKILLS & TRAINING",
      tabArsenal: "06 ARSENAL",
      tabSheet: "07 FINAL DOSSIER",

      // Dossier
      charName: "CHARACTER NAME",
      playerName: "PLAYER / OPERATOR",
      concept: "CONCEPT / OCCUPATION",
      age: "AGE",
      birthday: "DATE / BIRTHPLACE",
      heightWeight: "HEIGHT & WEIGHT",
      appearance: "PHYSICAL APPEARANCE",
      techLevel: "TECH LEVEL (TL)",
      campaignTL: "CAMPAIGN TL",
      wealth: "WEALTH LEVEL",
      status: "SOCIAL STATUS",

      // Biometrics / Attributes
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

      // Combat & Load
      dodge: "EFFECTIVE DODGE",
      parry: "BASE PARRY",
      block: "BLOCK DEFENSE",
      dr: "DAMAGE RESISTANCE (DR)",
      encumbrance: "ENCUMBRANCE LEVEL",
      totalWeight: "TOTAL CARRIED WEIGHT",

      // Traits & Skills
      advantages: "ADVANTAGES & PERKS",
      disadvantages: "DISADVANTAGES & QUIRKS",
      addTrait: "+ ADD TRAIT",
      addSkill: "+ ADD SKILL",
      skillName: "SKILL NAME",
      skillAttr: "BASE ATTR",
      skillDiff: "DIFFICULTY",
      skillPts: "POINTS",
      skillNH: "FINAL SL (3d6)",

      // Difficulties
      diffEasy: "Easy (E)",
      diffAvg: "Average (A)",
      diffHard: "Hard (H)",
      diffVHard: "Very Hard (VH)",

      // Status messages
      savedSuccess: "OPERATOR PROFILE SAVED SUCCESSFULLY!",
      overBudgetWarn: "ALERT: CHARACTER POINTS BUDGET EXCEEDED!",
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
