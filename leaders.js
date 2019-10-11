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
  atk: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  rcv: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  // // Recovery multiplier as a result of matching combos.
  // rcvConditional: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
  //   return 1;
  // },
  damageMult: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 1;
  },
  resist: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer, opponent) => {
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
  plusCombo: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 0;
  },
  timeExtend: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
    return 0;
  },
  heal: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
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

// 144 (10010000) = Dragon & Devil

/**
0: "Evo"
1: "Balanced"
2: "Physical"
3: "Healer"
4: "Dragon"
5: "God"
6: "Attacker"
7: "Devil"
8: "Machine"
9: "UNKNOWN9"
10: "UNKNOWN10"
11: "UNKNOWN11"
12: "Awakening"
13: "UNKNOWN13"
14: "Enhance"
15: "Redeemable"
**/

/**
 * Multiplier for a monster whose attribute or type matches.
 * This also includes an optional passive resistance to attributes.
 */
function baseStatFromAttributeType(params) {
  let [attrBits, typeBits, hp100, atk100, rcv100, ...remainder] = params;
  const appliedAttributes = new Set();
  for (let attr = 0; attrBits >> attr; attr++) {
    if (attrBits >> attr & 1) {
      appliedAttributes.add(attr);
    }
  }
  const appliedTypes = new Set();
  for (let type = 0; typeBits >> type; type++) {
    if (typeBits >> type & 1) {
      appliedTypes.add(type);
    }
  }
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
    atk: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return monsterMatchesAttributeOrType(monster) ? atkMult : 1;
    },
    rcv: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return monsterMatchesAttributeOrType(monster) ? rcvMult : 1;
    },
  });
}

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
    atk: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return linkedOrbExists(comboContainer) ? atkMult : 1;
    },
    damageMult: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return linkedOrbExists(comboContainer) ? damageMult : 1;
    },
  });
}

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

const LEADER_SKILL_GENERATORS = {
  116: multipleLeaderSkills,
  129: baseStatFromAttributeType,
  138: multipleLeaderSkills,
  182: atkShieldFromLinkedOrbs,
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