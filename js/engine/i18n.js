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
      campaignBudgetTitle: "Campaign Budget (Max Pts)",
      campaignBudgetSub: "Defined by GM for this adventure",
      tierAverage: "Average (50)",
      tierCompetent: "Competent (75)",
      tierHeroic: "Heroic (100)",
      tierVeteran: "Veteran (150)",
      tierLegendary: "Legendary (200)",
      tierSuperhuman: "Superhuman (300)",
      tierGodlike: "Godlike (500)",

      // View Mode (Beginner / PRO)
      modeBasic: "🔰 BEGINNER",
      modePro: "⚡ PRO",
      modeSwitchTitle: "Switch between Beginner and PRO mode",
      attrSectionTitleBasic: "Character Powers (Simplified Attributes)",
      attrSectionTitlePro: "Primary Attributes",
      attrPwrBasic: "💪 PHYSICAL POWER",
      attrPwrBasicSub: "Damage, Load & Impact",
      attrAgiBasic: "🏃 AGILITY & SPEED",
      attrAgiBasicSub: "Reflexes & Coordination",
      attrCogBasic: "🧠 MIND & LOGIC",
      attrCogBasicSub: "Intellect & Perception",
      attrVitBasic: "❤️ VITALITY & HEALTH",
      attrVitBasicSub: "Stamina & Life Energy",
      telemetryTitleBasic: "Vital Stats & Combat Performance",
      telemetryTitlePro: "Derived Telemetry",
      quickAbilitiesTitle: "Capabilities Summary",
      quickAbilitiesSub: "Tap cards below to manage details",
      gaugeHp: "Life Points",
      gaugeFp: "Energy Pool",

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
      campaignBudgetTitle: "Orçamento da Aventura (Pontos Totais)",
      campaignBudgetSub: "Definido pelo Mestre/Árbitro para a campanha",
      tierAverage: "Comum (50)",
      tierCompetent: "Competente (75)",
      tierHeroic: "Heróico (100)",
      tierVeteran: "Veterano (150)",
      tierLegendary: "Lendário (200)",
      tierSuperhuman: "Super-Humano (300)",
      tierGodlike: "Divino (500)",

      // Modo de Visualização (Iniciante / PRO)
      modeBasic: "🔰 INICIANTE",
      modePro: "⚡ PRO",
      modeSwitchTitle: "Alternar entre Modo Iniciante e Modo PRO",
      attrSectionTitleBasic: "Poderes do Personagem (Atributos Simplificados)",
      attrSectionTitlePro: "Atributos Primários",
      attrPwrBasic: "💪 FORÇA FÍSICA",
      attrPwrBasicSub: "Dano, Carga e Impacto",
      attrAgiBasic: "🏃 AGILIDADE & DESTREZA",
      attrAgiBasicSub: "Reflexos, Esquiva e Pontaria",
      attrCogBasic: "🧠 MENTE & RACIOCÍNIO",
      attrCogBasicSub: "Intelecto, Percepção e Sabedoria",
      attrVitBasic: "❤️ VIGOR & SAÚDE",
      attrVitBasicSub: "Energia, Resistência e Vida",
      telemetryTitleBasic: "Capacidades Vitais & Combate",
      telemetryTitlePro: "Telemetria & Derivadas",
      quickAbilitiesTitle: "Resumo de Capacidades",
      quickAbilitiesSub: "Clique nas seções abaixo para gerenciar",
      gaugeHp: "Pontos de Vida",
      gaugeFp: "Pontos de Fadiga / Energia",

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

