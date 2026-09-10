/**
 * GROOG - STORAGE & CHARACTER PERSISTENCE ENGINE
 * Multi-slot management, Auto-save (LocalStorage), JSON Import/Export.
 */

const STORAGE_KEY = 'groog_character_profiles';
const ACTIVE_ID_KEY = 'groog_active_character_id';

export const StorageEngine = {
  // Get all saved characters
  getAllProfiles() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error("Storage load error:", e);
      return {};
    }
  },

  // Save current character profile
  saveProfile(character) {
    try {
      const profiles = this.getAllProfiles();
      const id = character.id || 'char_' + Date.now();
      character.id = id;
      character.updatedAt = new Date().toISOString();
      profiles[id] = character;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
      localStorage.setItem(ACTIVE_ID_KEY, id);
      return id;
    } catch (e) {
      console.error("Storage save error:", e);
      return null;
    }
  },

  // Load specific character profile by ID
  loadProfile(id) {
    const profiles = this.getAllProfiles();
    return profiles[id] || null;
  },

  // Get active character or create default template
  getActiveProfile() {
    const activeId = localStorage.getItem(ACTIVE_ID_KEY);
    if (activeId) {
      const loaded = this.loadProfile(activeId);
      if (loaded) return loaded;
    }
    return this.createDefaultProfile();
  },

  // Delete profile
  deleteProfile(id) {
    const profiles = this.getAllProfiles();
    if (profiles[id]) {
      delete profiles[id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    }
  },

  // Export character data as downloaded JSON
  exportJSON(character) {
    const filename = `${(character.name || 'operador').toLowerCase().replace(/\s+/g, '_')}_groog.json`;
    const jsonStr = JSON.stringify(character, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Default clean character template
  createDefaultProfile() {
    return {
      id: 'char_' + Date.now(),
      name: 'Operador Tático 01',
      player: 'Jogador',
      concept: 'Operador Especial / Batedor',
      campaignBudget: 150,
      disadvantageLimit: 75,
      dossier: {
        age: 28,
        birthday: '1998 / Setor Urbano 04',
        height: '1.80m',
        weight: '82 kg',
        appearance: 'Atlético, olhar focado, cicatriz na têmpora',
        tl: 8,
        campaignTL: 8,
        wealth: 'Médio',
        wealthCost: 0,
        status: 0,
        skinTone: 'Pardo',
        hair: 'Curto militar',
        dominantHand: 'Destro'
      },
      attributes: {
        st: 11,
        dx: 12,
        iq: 11,
        ht: 11
      },
      secondary: {
        hpMod: 0,
        fpMod: 0,
        willMod: 0,
        perMod: 1,
        speedMod: 0,
        moveMod: 0
      },
      advantages: [
        { name: 'Reflexos em Combate', points: 15, desc: '+1 em todas as defesas ativas e recuperação de surpresa' },
        { name: 'Aptidão para Alta Tecnologia', points: 5, desc: 'Facilidade de operação com equipamentos modernos' }
      ],
      disadvantages: [
        { name: 'Código de Honra (Soldado)', points: -10, desc: 'Obedecer ordens e proteger os companheiros de equipe' },
        { name: 'Sentido do Dever (Companheiros)', points: -5, desc: 'Nunca abandonar um companheiro para trás' },
        { name: 'Excesso de Confiança', points: -5, desc: 'Autocontrole 12 (crê que sempre sairá vitorioso)' }
      ],
      quirks: [
        { name: 'Sempre limpa o armamento antes de dormir', points: -1 },
        { name: 'Prefere café preto frio', points: -1 }
      ],
      skills: [
        { name: 'Fuzil de Assalto', attr: 'DX', difficulty: 'E', points: 4, customNH: null },
        { name: 'Pistola', attr: 'DX', difficulty: 'E', points: 2, customNH: null },
        { name: 'Furtividade', attr: 'DX', difficulty: 'A', points: 2, customNH: null },
        { name: 'Primeiros Socorros', attr: 'IQ', difficulty: 'E', points: 2, customNH: null },
        { name: 'Sobrevivência', attr: 'Per', difficulty: 'A', points: 2, customNH: null },
        { name: 'Táticas de Combate', attr: 'IQ', difficulty: 'H', points: 4, customNH: null },
        { name: 'Combate Desarmado (Briga)', attr: 'DX', difficulty: 'E', points: 2, customNH: null }
      ],
      equipment: [
        { name: 'Fuzil Tático 5.56mm', weight: 3.6, cost: 1200, qty: 1, type: 'Arma' },
        { name: 'Carregadores Extras (x4)', weight: 2.0, cost: 120, qty: 4, type: 'Munição' },
        { name: 'Pistola 9mm', weight: 1.1, cost: 500, qty: 1, type: 'Arma' },
        { name: 'Colete Balístico Nível III (RD 12)', weight: 5.5, cost: 800, qty: 1, type: 'Armadura' },
        { name: 'Kit Médico Tático', weight: 1.5, cost: 200, qty: 1, type: 'Item' },
        { name: 'Rádio Comunicador / GPS', weight: 0.8, cost: 350, qty: 1, type: 'Eletrônico' },
        { name: 'Mochila Tática de Assalto', weight: 1.2, cost: 150, qty: 1, type: 'Carga' }
      ]
    };
  }
};
