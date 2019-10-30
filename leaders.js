const baseLeaderSkill = Object.freeze({
  // Boolean values
  bigBoard: false,
  noSkyfall:  false,
  minOrbMatch: 3,
  // Don Chan/Soprano's Drumming.
  drumEffect: false,
  // If nonzero, overrides all other time.
  fixedTime: 0,
  // Multiplicative values
  hp: (monster, team, isMultiplayer) => {
    return 1;
  },
  atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  // Recovery multiplier applied to monsters before comboing.
  rcv: (monster, team, isMultiplayer) => {
    return 1;
  },
  // Recovery multiplier as a result of matching combos.
  rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  resist: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer, opponent) => {
    return 1;
  },
  drop: (isMultiplayer) => {
    return 1;
  },
  coins: 1,
  exp: 1,
  // Additive values
  plusCombo: (team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 0;
  },
  timeExtend: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 0;
  },
  heal: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 0;
  },
  // True pings are all in the same value.
  trueBonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 0;
  },
  // Concatenating values.
  bonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer, awakeningsActive) => {
    return [];
  },
  // Returns a separate ping of damage per leader.
  counter: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return [];
  },
});

function copyBaseLeader() {
  return Object.assign({}, baseLeaderSkill);
}

function createLeaderSkill(configs) {
  return Object.assign(copyBaseLeader(), configs);
}

function combineLeaderSkills(ls1, ls2) {
  // console.log(ls1);
  // console.log(ls2);
  return {
    // Boolean values
    bigBoard: ls1.bigBoard || ls2.bigBoard,
    noSkyfall: ls1.noSkyfall || ls2.noSkyfall,
    minOrbMatch: Math.max(ls1.minOrbMatch, ls2.minOrbMatch),
    // Don Chan/Soprano's Drumming.
    drumEffect: ls1.drumEffect || ls2.drumEffect,
    // If nonzero, overrides all other time.
    fixedTime: (ls1.fixedTime && ls2.fixedTime) ? Math.min(ls1.fixedTime, ls2.fixedTime) : ls1.fixedTime || ls2.fixedTime,
    // Multiplicative values
    hp: (...args) => {
      return ls1.hp(...args) * ls2.hp(...args);
    },
    atk: (...args) => {
      return ls1.atk(...args) * ls2.atk(...args);
    },
    rcv: (...args) => {
      return ls1.rcv(...args) * ls2.rcv(...args);
    },
    rcvPost: (...args) => {
      return ls1.rcvPost(...args) * ls2.rcvPost(...args);
    },
    shield: (...args) => {
      return ls1.shield(...args) * ls2.shield(...args);
    },
    drop: (...args) => {
      return ls1.drop(...args) * ls2.drop(...args);
    },
    coins: ls1.coins * ls2.coins,
    exp: ls1.exp * ls2.exp,
    damageMult: (...args) => {
      return ls1.damageMult(...args) * ls2.damageMult(...args);
    },
    // Additive values
    plusCombo: (...args) => {
      return ls1.plusCombo(...args) + ls2.plusCombo(...args);
    },
    timeExtend: (...args) => {
      return ls1.timeExtend(...args) + ls2.timeExtend(...args);
    },
    heal: (...args) => {
      return ls1.timeExtend(...args) + ls2.timeExtend(...args);
    },
    // Concatenating comboContainer.
    trueBonusAttack: (...args) => {
      return ls1.trueBonusAttack(...args) + ls2.trueBonusAttack(...args);
    },
    bonusAttack: (...args) => {
      return [...ls1.bonusAttack(...args), ...ls2.bonusAttack(...args)];
    },
    // Returns a separate ping of damage per leader.
    counter: (...args) => {
      return [...ls1.counter(...args), ...ls2.counter(...args)];
    },
  }
}

// ATTRIBUTE_FLAG_PAIRS = [
//   [0, 1 << 0],  // Fire
//   [1, 1 << 1],  // Water
//   [2, 1 << 2],  // Wood
//   [3, 1 << 3],  // Light
//   [4, 1 << 4],  // Dark
// ];

// 12
function bonusAttackScale(params) {
  const scale = params[0] / 100;

  return createLeaderSkill({
    bonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer, awakeningsActive) => {
      return [monster.getAtk(isMultiplayer, awakeningsActive) * scale];
    },
  });
}

// 15
function pureTimeExtend(params) {
  const [centiSeconds] = params;
  return createLeaderSkill({
    timeExtend: () => centiSeconds / 100,
  });
}

// 44
function atkRcvFromMinHp(params) {
  const [thresh, flag1, flag2, atkRcv100] = params;
  let includeAtk = false;
  let includeRcv = false;
  if (flag1 == 1) {
    includeAtk = true;
  }
  if (flag2 == 2) {
    includeRcv = true;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return includeAtk && percentHp >= thresh ? atkRcv100 / 100 : 1;
    },
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return includeRcv && percentHp >= thresh ? atkRcv100 / 100 : 1;
    },
  });
}

// 61
function atkScalingFromMatchedColors(params) {
  let [attrBits, minColors, atk100base, atk100scale, maxColors] = params;
  atk100scale = atk100scale || 0;
  maxColors = maxColors || minColors;
  const attrs = idxsFromBits(attrBits);

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let matchedColors = 0;
      for (const c of attrs) {
        if (comboContainer.combos[COLORS[c]].length > 0) {
          matchedColors++;
        }
      }
      if (matchedColors < minColors) {
        return 1;
      }
      if (matchedColors > maxColors) {
        matchedColors = maxColors;
      }
      return ((matchedColors - minColors) * atk100scale + atk100base) / 100;
    },
  });
}

// 66
function atkBoostFromMinCombos(params) {
  const [minCombo, atk100] = params;
  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let totalCombos = 0;
      for (const c in comboContainer.combos) {
        totalCombos += comboContainer.combos[c].length;
      }
      totalCombos += comboContainer.bonusCombos;
      return totalCombos >= minCombo ? atk100 / 100 : 1;
    },
  });
}

// 98
function atkScalingFromCombos(params) {
  const [minCombo, atk100base, atk100scale, maxCombo] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let count = comboContainer.comboCount();
      if (count < minCombo) {
        return 1;
      }
      if (count > maxCombo) {
        count = maxCombo;
      }

      return ((count - minCombo) * atk100scale + atk100base) / 100;
    },
  });
}

/**
 * 0: "Evo"
 * 1: "Balanced"
 * 2: "Physical"
 * 3: "Healer"
 * 4: "Dragon"
 * 5: "God"
 * 6: "Attacker"
 * 7: "Devil"
 * 8: "Machine"
 * 9: "UNKNOWN9"
 * 10: "UNKNOWN10"
 * 11: "UNKNOWN11"
 * 12: "Awakening"
 * 13: "UNKNOWN13"
 * 14: "Enhance"
 * 15: "Redeemable"
 **/

// 101
function atkBoostFromExactCombos(params) {
  const [comboRequirement, atk100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let totalCombos = 0;
      for (const c in comboContainer.combos) {
        totalCombos += comboContainer.combos[c].length;
      }
      totalCombos += comboContainer.bonusCombos;
      return totalCombos == comboRequirement ? atk100 / 100 : 1;
    },
  });
}

// IDs 116 and 138 are combinations of leader skills.
function multipleLeaderSkills(params) {
  let [first, ...remaining] = params;
  let ls = getLeaderSkillEffects(first);
  for (const leaderSkillId of remaining) {
    ls = combineLeaderSkills(ls, getLeaderSkillEffects(leaderSkillId));
  }
  return ls;
}

// 119 + 159
// For leader skills that scale damage based on linked-orbs matched.
// Each has a minimum and a maximum that can be applied.
function atkScalingFromLinkedOrbs(params) {
  const [attrBits, minMatch, atk100base] = params;
  let atk100scale = 0;
  let maxMatch = minMatch;
  if (params.length > 3) {
    atk100scale = params[3];
    maxMatch = params[4];
  }
  const attrs = idxsFromBits(attrBits);

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let highest = 0;
      for (const attr of attrs) {
        for (const combo of comboContainer.combos[COLORS[attr]]) {
          if (combo.count > highest) {
            highest = combo.count;
          }
        }
      }

      if (highest < minMatch) {
        return 1;
      }
      if (highest > maxMatch) {
        highest = maxMatch;
      }
      return (atk100base + (highest - minMatch) * atk100scale) / 100;
    },
  })
}

// 122
function atkRcvFromSubHp(params) {
  let [maxThreshPercent, attrBits, typeBits, atk100, rcv100] = params;
  rcv100 = rcv100 || 100;
  const {atk, rcvPost} = baseStatFromAttributeType([attrBits, typeBits, 0, atk100, rcv100]);

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      if (percentHp > maxThreshPercent) {
        return 1;
      }
      return atk(ping, team, percentHp, comboContainer, skillUsed, isMultiplayer);
    },
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      if (percentHp > maxThreshPercent) {
        return 1;
      }
      return rcvPost(monster, team, percentHp, comboContainer, skillUsed, isMultiplayer);
    },
  });
}

// 124
function atkScalingFromMatchedColors(params) {
  let [attr1bit, attr2bit, attr3bit, attr4bit, attr5bit, minMatch, atk100base, atk100scale] = params;
  atk100scale = atk100scale || 0;
  const maxCounts = {};
  for (const attrBit of [attr1bit, attr2bit, attr3bit, attr4bit, attr5bit].filter((bit) => bit > 0)) {
    const attr = idxsFromBits(attrBit)[0];
    if (attr in maxCounts) {
      maxCounts[attr]++;
    } else {
      maxCounts[attr] = 1;
    }
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let total = 0;
      for (const attr in maxCounts) {
        total += Math.min(comboContainer.combos[COLORS[attr]].length, maxCounts[attr])
      }
      if (total < minMatch) {
        return 1;
      }
      return ((total - minMatch) * atk100scale + atk100base) / 100;
    },
  });
}

/**
 * 129
 * Multiplier for a monster whose attribute or type matches.
 * This also includes an optional passive resistance to attributes.
 */
function baseStatFromAttributeType(params) {
  let [attrBits, typeBits, hp100, atk100, rcv100, ...remainder] = params;
  const appliedAttributes = new Set(idxsFromBits(attrBits));
  const appliedTypes = new Set(idxsFromBits(typeBits));
  const hpMult = hp100 / 100 || 1;
  const atkMult = atk100 / 100 || 1;
  const rcvMult = rcv100 / 100 || 1;
  let attrResistBits = 0;
  let resistance = 0;
  if (remainder.length == 2) {
    attrResistBits = remainder[0];
    resistance = remainder[1];
  } else if (remainder.length == 1) {
    attrResistBits = remainder[0];
  }
  const attrsResisted = idxsFromBits(attrResistBits);

  const monsterMatchesAttributeOrType = (monster) => {
    const monsterAttributes = [monster.getCard().attribute, monster.getCard().subattribute];
    const hasAttribute = monsterAttributes.some((attribute) => appliedAttributes.has(attribute));
    const hasType = monster.getCard().types.some((type) => appliedTypes.has(type));
    return hasAttribute || hasType;
  }

  return createLeaderSkill({
    hp: (monster, team, isMultiplayer) => {
      return monsterMatchesAttributeOrType(monster) ? hpMult : 1;
    },
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return monsterMatchesAttributeOrType(ping.source) ? atkMult : 1;
    },
    rcv: (monster, team, isMultiplayer) => {
      return monsterMatchesAttributeOrType(monster) ? rcvMult : 1;
    },
    damageMult: (enemy) => {
      if (attrsResisted.includes(enemy.getAttribute())) {
        return 1 - (resistance) / 100;
      }
      return 1;
    }
  });
}

// 130
function atkRcvColorShieldFromSubHp(params) {
  const [maxThreshPercent, attrBits, typeBits, atk100, rcv100, ...remaining] = params;
  let colorsResistedBits = 0;
  let shield100 = 0;
  if (remaining.length) {
    colorsResistedBits = remaining[0];
    shield100 = remaining[1];
  }

  const {atk, rcvPost, damageMult} = baseStatFromAttributeType(
      [attrBits, typeBits, 100, atk100, rcv100, colorsResistedBits, shield100]);

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      if (percentHp > maxThreshPercent) {
        return 1;
      }
      return atk(ping, team, percentHp, comboContainer, skillUsed, isMultiplayer);
    },
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      if (percentHp > maxThreshPercent) {
        return 1;
      }
      return rcvPost(ping, team, percentHp, comboContainer, skillUsed, isMultiplayer);
    },
    damageMult: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      if (percentHp > maxThreshPercent) {
        return 1;
      }
      return damageMult(monster, team, percentHp, comboContainer, skillUsed, isMultiplayer);
    },
  });
}

// 133
function atkRcvFromSkillUse(params) {
  const [attrBits, typeBits, atk100, rcv100] = params;
  const {atk, rcv} = baseStatFromAttributeType([attrBits, typeBits, 0, atk100, rcv100 || 0]);

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return skillUsed ? atk(ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) : 1;
    },
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return skillUsed ? rcv(monster, team, isMultiplayer) : 1;
    },
  });
}

// 136 - Currently, nothing supports triple colors.
function stackingStatboostsForAttributes(params) {
  const [attr1bit, hp100a, atk100a, rcv100a, ...remaining] = params;
  const hpA = (hp100a || 100) / 100;
  const atkA = (atk100a || 100) / 100;
  const rcvA = (rcv100a || 100) / 100;
  let [attr2bit, hp100b, atk100b, rcv100b, ...remaining2] = params;
  const hpB = (hp100b || 100) / 100;
  const atkB = (atk100b || 100) / 100;
  const rcvB = (rcv100b || 100) / 100;
  if (remaining2.length) {
    console.warn('Currently not handling 3+ attribute combos for type 136.');
  }
  const attrA = idxsFromBits(attr1bit)[0];
  const attrB = idxsFromBits(attr2bit)[0];

  function getMultiplier(monster, attrAmult, attrBmult) {
      const attr = monster.getCard().attribute;
      const subattr = monster.getCard().subattribute;
      let multiplier = 1;
      if (attr == attrA || subattr == attrA) {
        multiplier *= attrAmult;
      }
      if (attr = attrB || subattr == attrB) {
        multiplier *= attrBmult;
      }
      return multiplier;    
  }

  return createLeaderSkill({
    hp: (monster, team, isMultiplayer) => {
      return getMultiplier(monster, hpA, hpB);
    },
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return getMultiplier(ping.source, atkA, atkB);
    },
    rcv: (monster, team, isMultiplayer) => {
      return getMultiplier(monster, rcvA, rcvB);
    },
  })
}

// 155
function statBoostFromMultiplayer(params) {
  const [attrBits, typeBits, hp100, atk100, rcv100] = params;
  const {hp, atk, rcv} = baseStatFromAttributeType([attrBits, typeBits, hp100, atk100, rcv100]);
  return createLeaderSkill({
    hp: (monster, team, isMultiplayer) => {
      return isMultiplayer ? hp(monster, team, isMultiplayer) : 1;
    },
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return isMultiplayer ? atk(ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) : 1;
    },
    rcv: (monster, team, isMultiplayer) => {
      return isMultiplayer ? rcv(monster, team, isMultiplayer) : 1;
    },
  });
}

// 162
function bigBoardLeader(params) {
  return createLeaderSkill({
    bigBoard: true,
  });
}

// 163 - Exactly the same as baseStatFromAttributeType except added nosf
function noSkyfallAndBaseStatFromAttributeType(params) {
  // const [attrBits, typeBits, hp100, atk100, rcv100, ...remainder] = params;
  const leaderSkill = baseStatFromAttributeType(params);
  leaderSkill.noSkyfall = true;
  return leaderSkill;
}

// 167
function atkRcvScalingFromLinkedOrbs(params) {
  const [attrBits, minMatch, atk100base, rcv100base, ...remaining] = params;
  let atk100scale = 0;
  let rcv100scale = 0;
  let maxMatch = minMatch;
  if (remaining) {
    [atk100scale, rcv100scale, maxMatch] = remaining;
    atk100scale = atk100scale || 0;
    rcv100scale = rcv100scale || 0;
    maxMatch = maxMatch || minMatch;
  }
  const attrs = idxsFromBits(attrBits);

  function getHighest(comboContainer) {
    let highest = 0;
    for (const attr of attrs) {
      for (const combo of comboContainer.combos[COLORS[attr]]) {
        if (combo.count > highest) {
          highest = combo.count;
        }
      }
    }
    return highest;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let matched = getHighest(comboContainer);
      if (matched < minMatch) {
        return 1;
      }
      if (matched > maxMatch) {
        matched = maxMatch;
      }
      return (atk100base + (matched - minMatch) * atk100scale) / 100;
    },
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let matched = getHighest(comboContainer);
      if (matched < minMatch) {
        return 1;
      }
      if (matched > maxMatch) {
        matched = maxMatch;
      }
      return (rcv100base + (matched - minMatch) * rcv100scale) / 100;
    }
  })
}

// 169
function atkAndShieldFromMinCombos(params) {
  const [minCombos, atk100, shield] = params;

  function didActivate(comboContainer) {
    let totalCombos = 0;
    for (const c in comboContainer.combos) {
      totalCombos += comboContainer.combos[c].length;
    }
    totalCombos += comboContainer.bonusCombos;
    return totalCombos >= minCombos;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? atk100 / 100 : 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? 1 - (shield / 100) : 1;
    },
  });
}

// 170
function atkAndShieldFromMinColorMatch(params) {
  const [attrBits, minMatch, atk100, shield] = params;
  const attrs = idxsFromBits(attrBits);

  function didActivate(monsters, comboContainer) {
    let matched = 0;
    for (const attr of attrs) {
      let didMatch = false;
      if (comboContainer.combos[COLORS[attr]].length) {
        didMatch = true;
      }
      if (didMatch && attr <= 4) {
        if (monsters.every((monster) => monster.getAttribute() != attr || monster.getCard().subattribute != attr)) {
          didMatch = false;
        }
      }
      if (didMatch) {
        matched++;
      }
    }
    return matched >= minMatch;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? atk100 / 100 : 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? 1 - (shield / 100) : 1;
    },
  });
}

// 171 - Note that no monster exists with attr3 and att4 set.
function atkScalingAndShieldFromMatchedOrbs(params) {
  const [attr1bit, attr2bit, attr3bit, attr4bit, minMatch, atk100, shield] = params;
  const maxCounts = {};
  for (const attrBit of [attr1bit, attr2bit, attr3bit, attr4bit]) {
    if (attrBit) {
      const attr = idxsFromBits(attrBit)[0];
      const c = COLORS[attr];
      if (c in maxCounts) {
        maxCounts[c]++;
      } else {
        maxCounts[c] = 1;
      }
    }
  }
  function didActivate(comboContainer) {
    let total = 0;
    for (const c in maxCounts) {
      let matchedC = comboContainer.combos[c].length;
      if (matchedC > maxCounts[c]) {
        matchedC = maxCounts[c];
      }
      total += matchedC;
    }
    return total >= minMatch;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? atk100 / 100 : 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? 1 - (shield / 100) : 1;
    },
  });
}

// 177. There are unused variables right now, these may become necessaary later.
function atkBoostFromOrbsRemaining(params) {
  const [unknown1, unknown2, unknown3, unknown4, unknown5, maxRemaining, atk100, atkScale] = params;
  if (unknown1 || unknown2 || unknown3 || unknown4 || unknown5) {
    console.warn(`Unknown argument for orbs remaining exists: ${unknown1}, ${unknown2}, ${unknown3}, ${unknown4}, ${unknown5}`);
  }

  return createLeaderSkill({
    noSkyfall: true,
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let orbsRemaining = comboContainer.boardWidth * (comboContainer.boardWidth - 1);
      for (const c in comboContainer.combos) {
        // Unknown combos do not count on fixed boards since they're from actives.
        if (c == 'u') {
          continue;
        }
        for (const combo of comboContainer.combos[c]) {
          orbsRemaining -= combo.count;
        }
      }
      if (orbsRemaining < 0) {
        console.warn(`Invalid orbs reamining: ${orbsRemaining}, setting to 0`);
        orbsRemaining = 0;
      }

      if (orbsRemaining > maxRemaining) {
        return 1;
      }
      if (!atkScale) {
        return atk100 / 100;
      }
      return ((maxRemaining - orbsRemaining) * atkScale + atk100) / 100;
    },
  });
}

// 182, e.g. Vonia.
function atkShieldFromLinkedOrbs(params) {
  const [attrBits, minMatched, atk100, resistance] = params;
  const atkMult = atk100 / 100 || 1;
  const appliedAttributes = [];
  const damageMult = (100 - resistance) / 100;
  for (let attr = 0; attrBits >> attr; attr++) {
    if (attrBits >> attr & 1) {
      appliedAttributes.push(attr);
    }
  }

  const linkedOrbExists = (comboContainer) => {
    return appliedAttributes.some((attrNumber) => {
        return comboContainer.combos[COLORS[attrNumber]].some(
            (combo) => combo.count >= minMatched);
    });
  };

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return linkedOrbExists(comboContainer) ? atkMult : 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return linkedOrbExists(comboContainer) ? damageMult : 1;
    },
  });
}

// 183
function atkShieldFromHp(params) {
  let [attrBits, typeBits, minThreshPercent, aboveAtk100, aboveShield100, ...remaining] = params;
  minThreshPercent = minThreshPercent || 0;
  const aboveAtk = (aboveAtk100 / 100) || 1;
  const damageMult = 1 - (aboveShield100 / 100);
  let maxThreshPercent = 101;
  let belowAtk = 1;
  let rcvMult = 1;
  if (remaining) {
    maxThreshPercent = remaining[0];
    belowAtk = (remaining[1] || 100) / 100;
    rcvMult = (remaining[2] || 100) / 100;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let multiplier = 1;
      if (percentHp >= minThreshPercent) {
        multiplier *= aboveAtk;
      }
      if (percentHp <= maxThreshPercent) {
        multiplier *= belowAtk;
      }
      return multiplier;
    },
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return percentHp >= minThreshPercent || percentHp <= maxThreshPercent ? rcvMult : 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return percentHp >= minThreshPercent || percentHp <= maxThreshPercent ? damageMult : 1;
    },
  });
}

// 185, e.g. Karin Shindou [Dark Color].
function moveTimeAndBaseStatFromAttributeType(params) {
  const [ms100, attrBits, typeBits, hp100, atk100, rcv100] = params;
  const leaderSkill = baseStatFromAttributeType(
      [attrBits, typeBits, hp100, atk100, rcv100]);
  leaderSkill.timeExtend = () => (ms100 / 100);
  return leaderSkill;
}

// 186, e.g. Tifa's 7x6 + flat boost.
function bigBoardAndBaseStatFromAttributeType(params) {
  const [attrBits, typeBits, hp100, atk100, rcv100] = params;
  const leaderSkill = baseStatFromAttributeType(
      [attrBits, typeBits, hp100, atk100, rcv100]);
  leaderSkill.bigBoard = true;
  return leaderSkill
}

// 192. Note that ALL attributes must be matched for this bonus, e.g. Reiwa
function atkAndCombosFromLinkedOrbs(params) {
  const [attrBits, minLinked, atk100, comboBonus] = params;
  const requiredAttrs = idxsFromBits(attrBits);

  function didActivate(comboContainer) {
    return requiredAttrs.every((attr) => {
      return comboContainer.combos[COLORS[attr]].some((combo) => combo.count >= minLinked);
    });
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      if (!atk100) {
        return 1;
      }
      return didActivate(comboContainer) ? atk100 / 100 : 1;
    },
    plusCombo: (team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(comboContainer) ? comboBonus : 0;
    },
  });
}

// 194
function atkAndCombosFromRainbow(params) {
  const [attrBits, minColors, atk100, comboBonus] = params;
  const attrs = idxsFromBits(attrBits);

  function didActivate(monsters, comboContainer) {
    // First find relevant colors that were matched.
    return matchedAttr = attrs.filter((attr) => {
      return comboContainer[COLORS[attr]].length > 0;
    }).filter((attr) => {
      // Then find if the team attacked with those colors.
      return attr > 4 || team.some((monster) => {
        return (monster.getAttribute() == attr) || (monster.getCard().subattribute == attr);
      });
    }).length >= minColors;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return atk100 && atk100 != 100 && didActivate(team, comboContainer) ? atk100 / 100 : 1;        
    },
    plusCombo: (team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return didActivate(team, comboContainer) ? atk100 / 100 : 1;
    },
  });
}

// 200
function trueBonusFromLinkedOrbs(params) {
  const [attrBits, minLinked, damage] = params;

  const attrs = idxsFromBits(attrBits);

  return createLeaderSkill({
    trueBonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      for (const attr of attrs) {
        for (const combo of comboContainer.combos[COLORS[attr]]) {
          if (combo.count > minLinked) {
            return damage;
          }
        }
      }
      return 0;
    }
  });
}

const LEADER_SKILL_GENERATORS = {
  12: bonusAttackScale,
  // 13: autoheal,
  // 14: resolve,
  15: pureTimeExtend,
  44: atkRcvFromMinHp,
  61: atkScalingFromMatchedColors,
  // 63: hpRcvFromType,
  // 64: atkRcvFromType
  // 65: baseStatFromType,
  66: atkBoostFromMinCombos,
  // 67: atkRcvFromColor,
  98: atkScalingFromCombos,
  101: atkBoostFromExactCombos,
  // 107: hpDecrease,
  116: multipleLeaderSkills,
  119: atkScalingFromLinkedOrbs,
  122: atkRcvFromSubHp,
  124: atkScalingFromMatchedColors,
  129: baseStatFromAttributeType,
  130: atkRcvColorShieldFromSubHp,
  133: atkRcvFromSkillUse,
  136: stackingStatboostsForAttributes,
  // 137: stackingStatboostsForTypes,
  138: multipleLeaderSkills,
  // 148: expMultiplier,
  // 149: rcvFromHpa,
  // 150: fiveOrbsOneEnhance,
  // 151: heartCross,
  155: statBoostFromMultiplayer,
  159: atkScalingFromLinkedOrbs,
  162: bigBoardLeader,
  163: noSkyfallAndBaseStatFromAttributeType,
  167: atkRcvScalingFromLinkedOrbs,
  169: atkAndShieldFromMinCombos,
  170: atkAndShieldFromMinColorMatch,
  171: atkScalingAndShieldFromMatchedOrbs,
  177: atkBoostFromOrbsRemaining,
  182: atkShieldFromLinkedOrbs,
  183: atkShieldFromHp,
  185: moveTimeAndBaseStatFromAttributeType,
  186: bigBoardAndBaseStatFromAttributeType,
  192: atkAndCombosFromLinkedOrbs,
  194: atkAndCombosFromRainbow,
  200: trueBonusFromLinkedOrbs,
};

function getLeaderSkillEffects(leaderSkillId) {
  const modelLeaderSkill = vm.model.playerSkills[leaderSkillId];
  if (!(modelLeaderSkill.internalEffectId in LEADER_SKILL_GENERATORS)) {
    console.warn(`Leader Skill ID ${leaderSkillId} not implemented, assuming no LS`);
    return copyBaseLeader();
  }
  return LEADER_SKILL_GENERATORS[modelLeaderSkill.internalEffectId](
      modelLeaderSkill.internalEffectArguments);
}

function testVoniaLs() {
  const id = vm.model.cards[5116].leaderSkillId;
  const voniaLs = getLeaderSkillEffects(id);

  let mockMonster = {
    getCard: () => ({
      attribute: 0, subattribute: 0, types: [1],
    }),
  };
  let mockCombos = {r: [{count: 5}, {count: 4}]}

  if (voniaLs.atk(mockMonster, null, null, mockCombos) != 1) {
    console.error('Non Dragon/Devil without 6+ should be 1');
  }

  mockCombos.r[1].count = 6;

  if (voniaLs.atk(mockMonster, null, null, mockCombos) != 5) {
    console.error('Non Dragon/Devil with 6+ should be 5');
  }

  mockMonster.getCard = () => ({
    attribute: 0, subattribute: 0, types: [4],
  });

  if (voniaLs.atk(mockMonster, null, null, mockCombos) != 15) {
    console.error('Dragon with 6+ should be 15');
  }

  mockCombos.r[1].count = 4;

  if (voniaLs.atk(mockMonster, null, null, mockCombos) != 3) {
    console.error('Dragon without 6+ should be 3');
  }
}

console.log('Leader skills initialized.');