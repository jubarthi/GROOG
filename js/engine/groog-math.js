/**
 * GROOG - MOTOR MATEMÁTICO TÁTICO
 * Módulo puro e isolado para criação de personagens, física de combate e derivações.
 */

export const GroogMath = {
  // 1. TABELA DE DANO POR FORÇA (ST 1 a 100+)
  getDamageByST(st) {
    const val = Math.max(1, Math.floor(st));
    const table = {
      1:  { thrust: "1d-6", swing: "1d-5" },
      2:  { thrust: "1d-6", swing: "1d-5" },
      3:  { thrust: "1d-5", swing: "1d-4" },
      4:  { thrust: "1d-5", swing: "1d-4" },
      5:  { thrust: "1d-4", swing: "1d-3" },
      6:  { thrust: "1d-4", swing: "1d-3" },
      7:  { thrust: "1d-3", swing: "1d-2" },
      8:  { thrust: "1d-3", swing: "1d-2" },
      9:  { thrust: "1d-2", swing: "1d-1" },
      10: { thrust: "1d-2", swing: "1d" },
      11: { thrust: "1d-1", swing: "1d+1" },
      12: { thrust: "1d-1", swing: "1d+2" },
      13: { thrust: "1d",   swing: "2d-1" },
      14: { thrust: "1d",   swing: "2d" },
      15: { thrust: "1d+1", swing: "2d+1" },
      16: { thrust: "1d+1", swing: "2d+2" },
      17: { thrust: "1d+2", swing: "3d-1" },
      18: { thrust: "1d+2", swing: "3d" },
      19: { thrust: "2d-1", swing: "3d+1" },
      20: { thrust: "2d-1", swing: "3d+2" },
      21: { thrust: "2d",   swing: "4d-1" },
      22: { thrust: "2d",   swing: "4d" },
      23: { thrust: "2d+1", swing: "4d+1" },
      24: { thrust: "2d+1", swing: "4d+2" },
      25: { thrust: "2d+2", swing: "5d-1" },
      26: { thrust: "2d+2", swing: "5d" },
      27: { thrust: "3d-1", swing: "5d+1" },
      28: { thrust: "3d-1", swing: "5d+1" },
      29: { thrust: "3d",   swing: "5d+2" },
      30: { thrust: "3d",   swing: "5d+2" },
      35: { thrust: "4d-1", swing: "6d+1" },
      40: { thrust: "4d+1", swing: "7d-1" },
      50: { thrust: "5d+2", swing: "8d-1" },
      100:{ thrust: "11d",  swing: "13d" }
    };

    if (table[val]) return table[val];
    if (val > 30 && val < 35) return { thrust: "3d+1", swing: "6d-1" };
    if (val > 35 && val < 40) return { thrust: "4d",   swing: "6d+2" };
    if (val > 40 && val < 50) return { thrust: "4d+2", swing: "7d+1" };
    if (val > 50 && val < 100) {
      const extraD = Math.floor((val - 50) / 10);
      return { thrust: `${5 + extraD}d+2`, swing: `${8 + extraD}d-1` };
    }
    if (val >= 100) {
      const extra10 = Math.floor((val - 100) / 10);
      return { thrust: `${11 + extra10}d`, swing: `${13 + extra10}d` };
    }
    return { thrust: "1d-2", swing: "1d" };
  },

  // 2. BASE DE CARGA (BC) em kg: (ST * ST) / 10
  getBasicLift(st) {
    const raw = (st * st) / 10;
    return Math.round(raw * 10) / 10;
  },

  // 3. VELOCIDADE BÁSICA: (DX + HT) / 4
  getBasicSpeed(dx, ht, speedMod = 0) {
    return ((dx + ht) / 4) + speedMod;
  },

  // 4. DESLOCAMENTO BÁSICO (DB): floor(Velocidade Básica) + MoveMod
  getBasicMove(basicSpeed, moveMod = 0) {
    return Math.floor(basicSpeed) + moveMod;
  },

  // 5. ESQUIVA: floor(Velocidade Básica) + 3
  getDodge(basicSpeed) {
    return Math.floor(basicSpeed) + 3;
  },

  // 6. NÍVEIS DE CARGA DINÂMICA
  getEncumbrance(totalWeightKg, basicLift) {
    const bl = Math.max(0.1, basicLift);
    const ratio = totalWeightKg / bl;

    if (ratio <= 1.0) {
      return { level: 0, name: "Nenhuma (0)", mult: 1, maxWeight: bl, moveFactor: 1.0, dodgePenalty: 0 };
    } else if (ratio <= 2.0) {
      return { level: 1, name: "Leve (1)", mult: 2, maxWeight: bl * 2, moveFactor: 0.8, dodgePenalty: -1 };
    } else if (ratio <= 3.0) {
      return { level: 2, name: "Média (2)", mult: 3, maxWeight: bl * 3, moveFactor: 0.6, dodgePenalty: -2 };
    } else if (ratio <= 6.0) {
      return { level: 3, name: "Pesada (3)", mult: 6, maxWeight: bl * 6, moveFactor: 0.4, dodgePenalty: -3 };
    } else {
      return { level: 4, name: "Muito Pesada (4)", mult: 10, maxWeight: bl * 10, moveFactor: 0.2, dodgePenalty: -4 };
    }
  },

  // 7. MOBILIDADE EFETIVA EM COMBATE
  getEffectiveMobility(basicMove, basicSpeed, encumbrance, combatReflexes = false) {
    const effMove = Math.max(1, Math.floor(basicMove * encumbrance.moveFactor));
    const baseDodge = this.getDodge(basicSpeed);
    const crBonus = combatReflexes ? 1 : 0;
    const effDodge = Math.max(1, baseDodge + encumbrance.dodgePenalty + crBonus);
    return { effectiveMove: effMove, effectiveDodge: effDodge };
  },

  // 8. PROGRESSÃO DE PERÍCIAS (F, M, D, MD)
  getSkillRelativeLevel(difficulty, points) {
    if (points <= 0) return null;
    const diff = difficulty.toUpperCase();
    let baseOffset = 0;
    if (diff === 'E' || diff === 'F') baseOffset = 0;
    else if (diff === 'A' || diff === 'M') baseOffset = -1;
    else if (diff === 'H' || diff === 'D') baseOffset = -2;
    else if (diff === 'VH' || diff === 'MD') baseOffset = -3;

    if (points === 1) return baseOffset;
    if (points === 2 || points === 3) return baseOffset + 1;
    if (points >= 4) {
      const extraLevels = Math.floor((points - 4) / 4);
      return baseOffset + 2 + extraLevels;
    }
    return baseOffset;
  },

  getSkillFinalNH(attributeVal, difficulty, points) {
    const rel = this.getSkillRelativeLevel(difficulty, points);
    if (rel === null) return 0;
    return attributeVal + rel;
  },

  // 9. CONTABILIDADE COMPLETA DE PONTOS
  calculatePoints(char) {
    const stCost = (char.attributes.st - 10) * 10;
    const dxCost = (char.attributes.dx - 10) * 20;
    const iqCost = (char.attributes.iq - 10) * 20;
    const htCost = (char.attributes.ht - 10) * 10;
    const attributesTotal = stCost + dxCost + iqCost + htCost;

    const hpCost = (char.secondary.hpMod || 0) * 2;
    const fpCost = (char.secondary.fpMod || 0) * 3;
    const willCost = (char.secondary.willMod || 0) * 5;
    const perCost = (char.secondary.perMod || 0) * 5;
    const speedCost = (char.secondary.speedMod || 0) * 20;
    const moveCost = (char.secondary.moveMod || 0) * 5;
    const secondaryTotal = hpCost + fpCost + willCost + perCost + speedCost + moveCost;

    const tlCost = ((char.dossier.tl || 8) - (char.dossier.campaignTL || 8)) * 5;
    const statusCost = (char.dossier.status || 0) * 5;
    const wealthCost = char.dossier.wealthCost || 0;
    const socialTotal = tlCost + statusCost + wealthCost;

    const advantagesTotal = (char.advantages || []).reduce((acc, a) => acc + (a.points || 0), 0);
    const disadvantagesTotal = (char.disadvantages || []).reduce((acc, d) => acc + (d.points || 0), 0);
    const quirksTotal = (char.quirks || []).reduce((acc, q) => acc + (q.points || 0), 0);
    const skillsTotal = (char.skills || []).reduce((acc, s) => acc + (s.points || 0), 0);

    const totalSpent = attributesTotal + secondaryTotal + socialTotal + advantagesTotal + disadvantagesTotal + quirksTotal + skillsTotal;
    const budget = char.campaignBudget || 150;
    const remaining = budget - totalSpent;
    const disadLimit = char.disadvantageLimit || Math.floor(budget * 0.5);
    const disadExceeded = Math.abs(disadvantagesTotal + quirksTotal) > disadLimit;

    return {
      attributesTotal,
      secondaryTotal,
      socialTotal,
      advantagesTotal,
      disadvantagesTotal: disadvantagesTotal + quirksTotal,
      skillsTotal,
      totalSpent,
      budget,
      remaining,
      disadLimit,
      disadExceeded
    };
  }
};
