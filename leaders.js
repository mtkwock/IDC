const baseLeaderSkill = Object.freeze({
  // Boolean values
  bigBoard: () => {
    return false;
  },
  noSkyfall: () => {
    return false;
  },
  minOrbMatch: () => {
    return 3;
  },
  // Don Chan/Soprano's Drumming.
  drumEffect: () => {
    return false;
  },
  // If nonzero, overrides all other time.
  fixedTime: () => {
    return 0;
  },
  // Multiplicative values
  hp: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  // Recovery multiplier applied to monsters before comboing.
  rcv: (monster, team, percentHp, skillUsed, isMultiplayer) => {
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
  coins: () => {
    return 1;
  },
  exp: () => {
    return 1;
  },
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
  // Concatenating values.
  trueBonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return [];
  },
  bonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return [];
  },
  // Returns a separate ping of damage per leader.
  counter: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return [];
  },
});

function copyBase() {
  return Object.assign({}, baseLeaderSkill);
}

function createLeaderSkill(configs) {
  return Object.assign(copyBase(), configs);
}

function idxsFromBits(bits) {
  const idxs = [];
  for (let idx = 0; bits >> idx; idx++) {
    if (bits >> idx && 1) {
      idxs.push(idx);
    }
  }
  return idxs;
}

function combineLeaderSkills(ls1, ls2) {
  // console.log(ls1);
  // console.log(ls2);
  return {
    // Boolean values
    bigBoard: () => {
      return ls1.bigBoard() || ls2.bigBoard();
    },
    noSkyfall: () => {
      return ls1.noSkyfall() || ls2.noSkyfall();
    },
    minOrbMatch: () => {
      return Math.max(ls1.minOrbMatch(), l2.minOrbMatch());
    },
    // Don Chan/Soprano's Drumming.
    drumEffect: () => {
      return ls1.drumEffect() || ls2.drumEffect();
    },
    // If nonzero, overrides all other time.
    fixedTime: () => {
      const fs1 = ls1.fixedTime();
      const fs2 = ls2.fixedTime();
      if (fs1 && fs2) {
        return Math.min(fs1, fs2);
      }
      return fs1 || fs2;
    },
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
    coins: () => {
      return ls1.coins() * ls2.coins();
    },
    exp: () => {
      return ls1.exp() * ls2.exp();
    },
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
      return [...ls1.trueBonusAttack(...args), ...ls2.trueBonusAttack(...args)];
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

// 3 is red and blue
// 1 red
// 2 blue
// 4 green
// 8 light
// 16 dark
// 32 heart
// 64 jammer
// 128 poison
// 256 mortal poison
const COLOR_ORDER = 'rbgldhjpmo';

ATTRIBUTE_FLAG_PAIRS = [
  [0, 1 << 0],  // Fire
  [1, 1 << 1],  // Water
  [2, 1 << 2],  // Wood
  [3, 1 << 3],  // Light
  [4, 1 << 4],  // Dark
];


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

// IDs 116 and 138 are combinations of leader skills.
function multipleLeaderSkills(params) {
  let [first, remaining] = params;
  let ls = getLeaderSkillEffects(first);
  if (!remaining.length) {
    remaining = [remaining];
  }
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
        for (const combo of comboContainer.combos[COLOR_ORDER[attr]]) {
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

  const monsterMatchesAttributeOrType = (monster) => {
    const monsterAttributes = [monster.getCard().attribute, monster.getCard().subattribute];
    const hasAttribute = monsterAttributes.some((attribute) => appliedAttributes.has(attribute));
    const hasType = monster.getCard().types.some((type) => appliedTypes.has(type));
    return hasAttribute || hasType;
  }

  if (attrResistBits || resistance) {
    console.warn('Attribute and Passive Resistance not implemented');
  }

  return createLeaderSkill({
    hp: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return monsterMatchesAttributeOrType(monster) ? hpMult : 1;
    },
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return monsterMatchesAttributeOrType(ping.source) ? atkMult : 1;
    },
    rcv: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return monsterMatchesAttributeOrType(monster) ? rcvMult : 1;
    },
  });
}

// 167
function atkRcvScalingFromLinkedOrbs(params) {
  const [attrBits, minMatch, atk100base, rcv100base, remaining] = params;
  let atk100scale = 0;
  let rcv100scale = 0;
  let maxMatch = minMatch;
  if (remaining) {
    [atk100scale, rcv100scale, maxMatch] = remaining;
  }
  const attrs = idxsFromBits(attrBits);

  function getHighest(comboContainer) {
    let highest = 0;
    for (const attr of attrs) {
      for (const combo of comboContainer.combos[COLOR_ORDER[attr]]) {
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
        return comboContainer.combos[COLOR_ORDER[attrNumber]].some(
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
  const [attrBits, typeBits, minThreshPercent, aboveAtk100, aboveShield100, remaining] = params;
  const aboveAtk = (aboveAtk100 / 100) || 1;
  const aboveDamageMult = 1 - (aboveShield100 / 100);
  let maxThreshPercent = 100;
  let belowAtk = 1;
  let belowDamageMult = 1;
  if (remaining) {
    maxThreshPercent = params[5];
    belowAtk = (params[6] / 100) || 1;
    belowDamageMult = 1 - (params[6] / 100);
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let multiplier = 1;
      if (percentHp >= minThreshPercent) {
        multiplier *= aboveAtk;
      }
      if (percentHp < maxThreshPercent) {
        multiplier *= belowAtk;
      }
      return multiplier;
    },
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      let multiplier = 1;
      if (percentHp >= minThreshPercent) {
        multiplier *= aboveDamageMult;
      }
      if (percentHp < maxThreshPercent) {
        multiplier *= belowDamageMult;
      }
      return multiplier;

    }
  })
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
  leaderSkill.bigBoard = () => true;
  return leaderSkill
}

// 194
function atkAndCombosFromRainbow(params) {
  const [attrBits, minColors, atk100, comboBonus] = params;
  const attrs = idxsFromBits(attrBits);

  function didActivate(monsters, comboContainer) {
    // First find relevant colors that were matched.
    return matchedAttr = attrs.filter((attr) => {
      return comboContainer[COLOR_ORDER[attr]].length > 0;
    }).filter((attr) => {
      // Then find if the team attacked with those colors.
      return attr > 4 || team.some((monster) => {
        return (
            ((monster.attribute || monster.getCard().attribute) == attr) ||
            (monster.getCard().subattribute == attr));
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
        for (const combo of comboContainer.combos[COLOR_ORDER[attr]]) {
          if (combo.count > minLinked) {
            return [damage];
          }
        }
      }
      return [];
    }
  })
}

const LEADER_SKILL_GENERATORS = {
  116: multipleLeaderSkills,
  119: atkScalingFromLinkedOrbs,
  129: baseStatFromAttributeType,
  138: multipleLeaderSkills,
  159: atkScalingFromLinkedOrbs,
  167: atkRcvScalingFromLinkedOrbs,
  182: atkShieldFromLinkedOrbs,
  186: bigBoardAndBaseStatFromAttributeType,
  194: atkAndCombosFromRainbow,
  200: trueBonusFromLinkedOrbs,
}

function getLeaderSkillEffects(leaderSkillId) {
  const modelLeaderSkill = vm.model.playerSkills[leaderSkillId];
  if (!(modelLeaderSkill.internalEffectId in LEADER_SKILL_GENERATORS)) {
    console.warn(`Leader Skill ID ${leaderSkillId} not implemented, assuming no LS`);
    return copyBase();
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

// testVoniaLs();