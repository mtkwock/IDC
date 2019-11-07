const baseLeaderSkill = Object.freeze({
  // Boolean values
  bigBoard: false,
  noSkyfall:  false,
  ignorePoison: false,
  minOrbMatch: 3,
  resolve: 101,
  // Don Chan/Soprano's Drumming.
  drumEffect: false,
  // If nonzero, overrides all other time.
  fixedTime: 0,
  timeExtend: 0,
  // Multiplicative values
  hp: (monster, team, isMultiplayer) => 1,
  atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer, healing) => 1,
  // Recovery multiplier applied to monsters before comboing.
  rcv: (monster, team, isMultiplayer) => 1,
  // Recovery multiplier as a result of matching combos.
  rcvPost: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => 1,
  damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer, healing) => 1,
  resist: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer, opponent) => 1,
  drop: (isMultiplayer) => 1,
  drop: 1,
  coins: 1,
  exp: 1,
  // Additive values
  plusCombo: (team, percentHp, comboContainer, skillUsed, isMultiplayer) => 0,
  heal: (rcv) => 0,
  // True pings are all in the same value.
  trueBonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => 0,
  // Concatenating values.
  bonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer, awakeningsActive) => [],
  // Returns a separate ping of damage per leader.
  counter: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer) => [],
  // wtf
  awokenBindClear: (healing) => 0,
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
    ignorePoison: ls1.ignorePoison || ls2.ignorePoison,
    minOrbMatch: Math.max(ls1.minOrbMatch, ls2.minOrbMatch),
    resolve: Math.min(ls1.resolve, ls2.resolve),
    // Don Chan/Soprano's Drumming.
    drumEffect: ls1.drumEffect || ls2.drumEffect,
    // If nonzero, overrides all other time.
    fixedTime: (ls1.fixedTime && ls2.fixedTime) ? Math.min(ls1.fixedTime, ls2.fixedTime) : ls1.fixedTime || ls2.fixedTime,
    timeExtend: ls1.timeExtend + ls2.timeExtend,
    // Multiplicative values
    hp: (...args) => ls1.hp(...args) * ls2.hp(...args),
    atk: (...args) => ls1.atk(...args) * ls2.atk(...args),
    rcv: (...args) => ls1.rcv(...args) * ls2.rcv(...args),
    rcvPost: (...args) => ls1.rcvPost(...args) * ls2.rcvPost(...args),
    shield: (...args) => ls1.shield(...args) * ls2.shield(...args),
    drop: (...args) => ls1.drop(...args) * ls2.drop(...args),
    coins: ls1.coins * ls2.coins,
    exp: ls1.exp * ls2.exp,
    damageMult: (...args) => ls1.damageMult(...args) * ls2.damageMult(...args),
    // Additive values
    plusCombo: (...args) => ls1.plusCombo(...args) + ls2.plusCombo(...args),
    heal: (...args) => ls1.heal(...args) + ls2.heal(...args),
    awokenBindClear: (...args) => ls1.awokenBindClear(...args) + ls2.awokenBindClear(...args),
    // Concatenating comboContainer.
    trueBonusAttack: (...args) => ls1.trueBonusAttack(...args) + ls2.trueBonusAttack(...args),
    bonusAttack: (...args) => [...ls1.bonusAttack(...args), ...ls2.bonusAttack(...args)],
    // Returns a separate ping of damage per leader.
    counter: (...args) => [...ls1.counter(...args), ...ls2.counter(...args)],
  }
}

// ATTRIBUTE_FLAG_PAIRS = [
//   [0, 1 << 0],  // Fire
//   [1, 1 << 1],  // Water
//   [2, 1 << 2],  // Wood
//   [3, 1 << 3],  // Light
//   [4, 1 << 4],  // Dark
// ];

// 11
function atkFromAttribute(params) {
  const [attr, atk100] = params;

  return createLeaderSkill({
    atk: (monster) => {
      return isAttribute(monster, attr) ? atk100 / 100 : 1;
    },
  });
}

// 12
function bonusAttackScale(params) {
  const scale = params[0] / 100;

  return createLeaderSkill({
    bonusAttack: (monster, team, percentHp, comboContainer, skillUsed, isMultiplayer, awakeningsActive) => {
      return [monster.getAtk(isMultiplayer, awakeningsActive) * scale];
    },
  });
}

// 13
function autoheal(params) {
  const [heal100] = params;

  return createLeaderSkill({
    heal: (rcv) => (rcv * heal100 / 100),
  });
}

// 14
function resolve(params) {
  const [resolveMinPercent, UNKNOWN] = params;
  return createLeaderSkill({
    resolve: resolveMinPercent,
  });
}

// 15
function pureTimeExtend(params) {
  const [centiSeconds] = params;
  return createLeaderSkill({
    timeExtend: centiSeconds / 100,
  });
}

// 16
function shieldAgainstAll(params) {
  const [shield100] = params;
  return createLeaderSkill({
    damageMult: () => (1 - shield100 / 100),
  });
}

// 17
function shieldAgainstAttr(params) {
  const [attr, shield100] = params;
  return createLeaderSkill({
    damageMult: (enemy) => (enemy.getAttribute() == attr ? (1 - shield100 / 100) : 1),
  });
}

// 22
function atkFromType(params) {
  const [type, atk100] = params;
  return createLeaderSkill({
    atk: (ping) => (isType(ping.source, type) ? atk100 / 100 : 1),
  });
}

// 23
function hpFromType(params) {
  const [type, hp100] = params;
  return createLeaderSkill({
    hp: (monster) => (isType(monster, type) ? hp100 / 100 : 1),
  });
}

// 24
function rcvFromType(params) {
  const [type, rcv100] = params;
  return createLeaderSkill({
    rcv: (monster) => (isType(monster, type) ? rcv100 / 100 : 1),
  });
}

// 26
function atkUnconditional(params) {
  const [atk100] = params;
  return createLeaderSkill({
    atk: () => atk100 / 100,
  });
}

// 28
function atkRcvFromAttr(params) {
  const [attr, mult100] = params;
  return createLeaderSkill({
    atk: (ping) => (isAttribute(ping.source, attr) ? mult100 / 100 : 1),
    rcv: (monster) => (isAttribute(monster) ? mult100 / 100 : 1),
  });
}

// 29
function baseStatFromAttr(params) {
  const [attr, mult100] = params;
  return createLeaderSkill({
    hp: (monster) => (isAttribute(monster, attr) ? mult100 / 100 : 1),
    atk: (ping) => (isAttribute(ping.source, attr) ? mult100 / 100 : 1),
    rcv: (monster) => (isAttribute(monster, attr) ? mult100 / 100 : 1),
  })
}

// 30
function hpFromTwoTypes(params) {
  const [type1, type2, hp100] = params;

  return createLeaderSkill({
    hp: (monster) => anyTypes(monster, [type1, type2]) ? hp100 / 100 : 1,
  });
}

// 31
function atkFromTwoTypes(params) {
  const [type1, type2, atk100] = params;

  return createLeaderSkill({
    atk: (ping) => anyTypes(ping.source, [type1, type2]) ? atk100 / 100 : 1,
  });
}

// 33
function drumSounds(params) {
  return createLeaderSkill({
    drumEffect: true,
  });
}

// 36
function shieldAgainstTwoAttr(params) {
  const [attr1, attr2, shield100] = params;

  return createLeaderSkill({
    damageMult: (enemy) => [attr1, attr2].includes(enemy.getAttribute()) ? 1 - shield100 / 100 : 1,
  });
}

// 38
function shieldFromHp(params) {
  const [threshold, UNKNOWN, shield100] = params;

  return createLeaderSkill({
    damageMult: (enemy, team, percentHp) => {
      const mult = 1 - shield100 / 100;
      if (threshold == 100) {
        return percentHp >= 100 ? mult : 1;
      }
      return percentHp <= threshold ? mult : 1;
    },
  });
}

// 39
function atkRcvFromSubHp(params) {
  const [thresh, atkFlag, rcvFlag, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp) => atkFlag && percentHp <= thresh ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp) => rcvFlag && percentHp <= thresh ? mult100 / 100 : 1,
  });
}

// 40
function atkFromTwoAttr(params) {
  const [attr1, attr2, atk100] = params;

  return createLeaderSkill({
    atk: (ping) => anyAttributes(ping.source, [attr1, attr2]) ? atk100 / 100 : 1,
  });
}

// 41
function counterattack(params) {
  const [chance, atk100, attr] = params;

  console.warn('Counterattack not implemented');
  return createLeaderSkill({});
}

// 43
function shieldFromAboveHp(params) {
  const [thresh, chance, shield100] = params;

  return createLeaderSkill({
    damageMult: (enemy, team, percentHp) => {
      if (chance != 100) {
        console.warn('Chance of this shield failing!');
      }
      return percentHp >= thresh ? 1 - (shield100 / 100) : 1;
    },
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

// 45
function atkRcvFromAttr(params) {
  const [attr, mult100] = params;

  return createLeaderSkill({
    atk: (ping) => isAttribute(ping.source, attr) ? mult100 / 100 : 1,
    rcv: (monster) => isAttribute(monster, attr) ? mult100 / 100 : 1,
  })
}

// 46
function hpFromTwoAttr(params) {
  const [attr1, attr2, hp100] = params;

  return createLeaderSkill({
    hp: (monster) => anyAttributes(monster, [attr1, attr2]) ? hp100 / 100 : 1,
  });
}

// 48
function hpFromAttr(params) {
  const [attr, hp100] = params;

  return createLeaderSkill({
    hp: (monster) => isAttribute(monster, attr) ? hp100 / 100 : 1,
  });
}

// 49
function rcvFromAttr(params) {
  const [attr, rcv100] = params;

  return createLeaderSkill({
    rcv: (monster) => isAttribute(monster, attr) ? rcv100 / 100 : 1,
  });
}

// 52
function dropBoost(params) {
  const [boost100] = params;
  return createLeaderSkill({
    drop: (isMultiplayer) => isMultiplayer ? boost100 / 100 : 1,
  });
}

// 54
function coinBoost(params) {
  const [coins100] = params;
  return createLeaderSkill({
    coins: coins100 / 100,
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

// 62
function atkHpFromType(params) {
  const [type, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => isType(monster, type) ? mult100 / 100 : 1,
    atk: (ping) => isType(ping.source, type) ? mult100 / 100 : 1,
  });
}

// 63
function hpRcvFromType(params) {
  const [type, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => isType(monster, type) ? mult100 / 100 : 1,
    rcv: (monster) => isType(monster, type) ? mult100 / 100 : 1,
  });
}

// 64
function atkRcvFromType(params) {
  const [type, mult100] = params;

  return createLeaderSkill({
    atk: (ping) => isType(ping.source, type) ? mult100 / 100 : 1,
    rcv: (monster) => isType(monster, type) ? mult100 / 100 : 1,
  });
}

// 65
function baseStatFromType(params) {
  const [type, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => isType(monster, type) ? mult100 / 100 : 1,
    atk: (ping) => isType(ping.source, type) ? mult100 / 100 : 1,
    rcv: (monster) => isType(monster, type) ? mult100 / 100 : 1,
  });
}

// 66
function atkBoostFromMinCombos(params) {
  const [minCombo, atk100] = params;
  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
      return comboContainer.comboCount() >= minCombo ? atk100 / 100 : 1;
    },
  });
}

// 67
function atkRcvFromAttr(params) {
  const [attr, mult100] = params;

  return createLeaderSkill({
    atk: (ping) => isAttribute(ping.source, attr) ? mult100 / 100 : 1,
    rcv: (monster) => isAttribute(monster, attr) ? mult100 / 100 : 1,
  })
}

// 69 lol
function atkFromAttrType(params) {
  const [attr, type, atk100] = params;

  return createLeaderSkill({
    atk: (ping) => (isAttribute(ping.source, attr) || isType(ping.source, type)) ? atk100 / 100 : 1,
  });
}

// 73
function atkHpFromAttrType(params) {
  const [attr, type, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => (isAttribute(monster, attr) || isType(monster, type)) ? mult100 / 100 : 1,
    atk: (ping) => (isAttribute(ping.source, attr) || isType(ping.source, type)) ? mult100 / 100 : 1,
  });
}

// 75
function atkRcvFromAttrType(params) {
  const [attr, type, mult100] = params;

  return createLeaderSkill({
    atk: (ping) => (isAttribute(ping.source, attr) || isType(ping.source, type)) ? mult100 / 100 : 1,
    rcv: (monster) => (isAttribute(monster, attr) || isType(monster, type)) ? mult100 / 100 : 1,
  });  
}

// 76
function atkRcvFromAttrType(params) {
  const [attr, type, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => (isAttribute(monster, attr) || isType(monster, type)) ? mult100 / 100 : 1,
    atk: (ping) => (isAttribute(ping.source, attr) || isType(ping.source, type)) ? mult100 / 100 : 1,
    rcv: (monster) => (isAttribute(monster, attr) || isType(monster, type)) ? mult100 / 100 : 1,
  });  
}

// 77
function atkFromTwoTypes(params) {
  const [type1, type2, atk100] = params;

  return createLeaderSkill({
    atk: (ping) => anyTypes(ping.source, [type1, type2]) ? atk100 / 100 : 1,
  });
}

// 79
function atkRcvFromTwoTypes(params) {
  const [type1, type2, mult100] = params;

  return createLeaderSkill({
    atk: (ping) => anyTypes(ping.source, [type1, type2]) ? mult100 / 100 : 1,
    rcv: (monster) => anyTypes(monster, [type1, type2]) ? mult100 / 100 : 1,
  });
}

// 94
function atkRcvFromAttrAndSubHp(params) {
  const [thresh, attr, atkFlag, rcvFlag, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp) => atkFlag && isAttribute(ping.source, attr) && percentHp <= thresh ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp) => rcvFlag && isAttribute(ping.source, attr) && percentHp <= thresh ? mult100 / 100 : 1,
  });
}

// 95
function atkRcvFromTypeAndSubHp(params) {
  const [thresh, type, atkFlag, rcvFlag, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp) => atkFlag && isType(ping.source, type) && percentHp <= thresh ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp) => rcvFlag && isType(ping.source, type) && percentHp <= thresh ? mult100 / 100 : 1,
  });
}

// 96
function atkRcvFromAttrAndAboveHp(params) {
  const [thresh, attr, atkFlag, rcvFlag, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp) => atkFlag && isAttribute(ping.source, attr) && percentHp >= thresh ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp) => rcvFlag && isAttribute(ping.source, attr) && percentHp >= thresh ? mult100 / 100 : 1,
  });
}

// 97
function atkRcvFromTypeAndAboveHp(params) {
  const [thresh, type, atkFlag, rcvFlag, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp) => atkFlag && isType(ping.source, type) && percentHp >= thresh ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp) => rcvFlag && isType(ping.source, type) && percentHp >= thresh ? mult100 / 100 : 1,
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

// 100
function atkRcvFromSkillUse(params) {
  const [impactsAtk, impactsRcv, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed) => (impactsAtk && skillUsed) ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp, comboContainer, skillUsed) => (impactsRcv && skillUsed) ? mult100 / 100 : 1,
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
      return comboRequirement == comboContainer.comboCount() ? atk100 / 100 : 1;
    },
  });
}

// 103 - Flags are unknown atm.
function atkRcvFromMinCombos(params) {
  const [minCombos, atkFlag, rcvFlag, mult100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => (atkFlag && comboContainer.comboCount() >= minCombos) ? mult100 / 100 : 1,
    rcvPost: (monster, team, percentHp, comboContainer) => (rcvFlag && comboContainer.comboCount() >= minCombos) ? mult100 / 100 : 1,
  });
}

// 104 - 103 with color restriction
function atkRcvFromAttrMinCombos(params) {
  const [minCombos, attrBits, atkFlag, rcvFlag, mult100] = params;
  const attrs = idxsFromBits(attrBits);

  const {atk, rcvPost} = atkRcvFromMinCombos([minCombos, atkFlag, rcvFlag, mult100]);

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => anyAttributes(ping.source, attrs) ? atk(ping, team, percentHp, comboContainer) : 1,
    rcvPost: (monster, team, percentHp, comboContainer) => anyAttributes(monster, attrs) ? rcvPost(ping, team, percentHp, comboContainer) : 1,
  });
}

// 105
function atkFromDecreasedRcv(params) {
  const [rcv100, atk100] = params;
  return createLeaderSkill({
    atk: () => atk100 / 100,
    rcv: () => rcv100 / 100,
  });
}

// 106
function atkFromDecreasedHp(params) {
  const [hp100, atk100] = params;

  return createLeaderSkill({
    hp: () => hp100 / 100,
    atk: () => atk100 / 100,
  });
}

// 107
function hpDecrease(params) {
  const [hp100] = params;

  return createLeaderSkill({
    hp: () => hp100 / 100,
  });
}

// 108
function atkFromTypeDecreasedHp(params) {
  const [hp100, type, atk100] = params;

  return createLeaderSkill({
    hp: () => hp100 / 100,
    atk: (ping) => isType(ping.source, type) ? atk100 / 100 : 1,
  });
}

// 109
function atkFromLinkedOrbs(params) {
  const [attrBits, minMatch, atk100] = params;
  const attrs = idxsFromBits(attrBits);
  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => {
      return attrs.some((attr) => comboContainer.combos[COLORS[attr]].some((c) => c.count >= minMatch)) ? atk100 / 100 : 1;
    },
  });
}

// 111
function atkHpFromTwoAttr(params) {
  const [attr1, attr2, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => anyAttributes(monster, [attr1, attr2]) ? mult100 / 100 : 1,
    atk: (ping) => anyAttributes(ping.source, [attr1, attr2]) ? mult100 / 100 : 1,
  });
}

// 114
function baseStatFromTwoAttr(params) {
  const [attr1, attr2, mult100] = params;

  return createLeaderSkill({
    hp: (monster) => anyAttributes(monster, [attr1, attr2]) ? mult100 / 100 : 1,
    atk: (ping) => anyAttributes(ping.source, [attr1, attr2]) ? mult100 / 100 : 1,
    rcv: (monster) => anyAttributes(monster, [attr1, attr2]) ? mult100 / 100 : 1,
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

// 121
function baseStatFromAttrType(params) {
  const [attrBits, typeBits, hp100, atk100, rcv100] = params;

  const attrs = idxsFromBits(attrBits);
  const types = idxsFromBits(typeBits);

  return createLeaderSkill({
    hp: (monster) => hp100 && (anyAttributes(monster, attrs) || anyTypes(monster, types)) ? hp100 / 100 : 1,
    atk: (ping) => atk100 && (anyAttributes(ping.source, attrs) || anyTypes(ping.source, types)) ? atk100 / 100 : 1,
    rcv: (monster) => rcv100 && (anyAttributes(monster, attrs) || anyTypes(monster, types)) ? rcv100 / 100 : 1,
  });
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

// 123
function atkFromAttrTypeAboveHp(params) {
  const [thresh, attrBits, typeBits, atk100] = params;
  const attrs = idxsFromBits(attrBits);
  const types = idxsFromBits(typeBits);

  return createLeaderSkill({
    atk: (ping, team, percentHp) => percentHp >= thresh && (anyAttributes(ping.source, attrs) || anyTypes(ping.source, types)) ? atk100 / 100 : 1,
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

// 125
function baseStateFromRequiredSubs(params) {
  const [id1, id2, id3, id4, id5, hp100, atk100, rcv100] = params;
  // Ignore 0s.
  const requiredIds = [id1, id2, id3, id4, id5].filter((id) => id > 0);

  function hasAll(team) {
    const ids = team.map(monster => monster.id);
    return requiredIds.every((id) => ids.includes(id));
  }

  return createLeaderSkill({
    hp: (monster, team) => hp100 && hasAll(team) ? hp100 / 100 : 1,
    atk: (ping, team) => atk100 && hasAll(team) ? atk100 / 100 : 1,
    rcv: (monster, team) => rcv100 && hasAll(team) ? rcv100 / 100 : 1,
  });
}

/**
 * 129
 * Multiplier for a monster whose attribute or type matches.
 * This also includes an optional passive resistance to attributes.
 */
function baseStatFromAttributeType(params) {
  let [attrBits, typeBits, hp100, atk100, rcv100, ...remainder] = params;
  const appliedAttributes = idxsFromBits(attrBits);
  const appliedTypes = idxsFromBits(typeBits);
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
    return anyAttributes(monster, appliedAttributes) || anyTypes(monster, appliedTypes);
    // const monsterAttributes = [monster.getCard().attribute, monster.getCard().subattribute];
    // const hasAttribute = monsterAttributes.some((attribute) => appliedAttributes.has(attribute));
    // const hasType = monster.getCard().types.some((type) => appliedTypes.has(type));
    // return hasAttribute || hasType;
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

// 131
function atkRcvFromAttrTypeAboveHp(params) {
  let [thresh, attrBits, typeBits, atk100, rcv100, attrsResistBits, shield100] = params;
  const attrsResisted = attrResistBits && idxsFromBits(attrResistBits);
  const attrs = idxsFromBits(attrBits);
  const types = idxsFromBits(typeBits);
  shield100 = shield100 || 0;

  return createLeaderSkill({
    atk: (ping, team, percentHp) => percentHp >= thresh && (anyAttributes(ping.source, attrs) || anyTypes(ping.source, types)) ? atk100 / 100 : 1,
    rcvPost: (monster, team, percentHp) => percentHp >= thresh && (anyAttributes(monster, attrs) || anyTypes(monster, types)) ? rcv100 / 100 : 1,
    damageMult: (enemy, team, percentHp) => percentHp >= thresh && anyAttributes(enemy, attrsResisted) ? 1 - shield100 / 100 : 1,
  });
}

// 133
function atkRcvFromAttrsTypesSkillUse(params) {
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
  let [attr2bit, hp100b, atk100b, rcv100b, ...remaining2] = remaining;
  const hpB = (hp100b || 100) / 100;
  const atkB = (atk100b || 100) / 100;
  const rcvB = (rcv100b || 100) / 100;
  if (remaining2.length) {
    console.warn('Currently not handling 3+ attribute combos for type 136.');
  }
  const attrA = idxsFromBits(attr1bit)[0];
  const attrB = idxsFromBits(attr2bit)[0];

  function getMultiplier(monster, attrAmult, attrBmult) {
    let multiplier = 1;
    if (isAttribute(monster, attrA)) {
      multiplier *= attrAmult;
    }
    if (isAttribute(monster, attrB)) {
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

// 137 - Currently, nothing supports triple types(?).
function stackingStatboostsForTypes(params) {
  const [type1bit, hp100a, atk100a, rcv100a, ...remaining] = params;
  const hpA = (hp100a || 100) / 100;
  const atkA = (atk100a || 100) / 100;
  const rcvA = (rcv100a || 100) / 100;
  let [type2bit, hp100b, atk100b, rcv100b, ...remaining2] = remaining;
  const hpB = (hp100b || 100) / 100;
  const atkB = (atk100b || 100) / 100;
  const rcvB = (rcv100b || 100) / 100;
  if (remaining2.length) {
    console.warn('Currently not handling 3+ attribute types for type 137.');
  }
  const typeA = idxsFromBits(type1bit)[0];
  const typeB = idxsFromBits(type2bit)[0];

  function getMultiplier(monster, typeAmult, typeBmult) {
    let multiplier = 1;
    if (isType(monster, typeA)) {
      multiplier *= typeAmult;
    }
    if (isType(monster, typeB)) {
      multiplier *= typeBmult;
    }
    return multiplier;    
  }

  return createLeaderSkill({
    hp: (monster) => getMultiplier(monster, hpA, hpB),
    atk: (ping) =>  getMultiplier(ping.source, atkA, atkB),
    rcv: (monster) => getMultiplier(monster, rcvA, rcvB),
  });
}

// 139
function atkFromAttrTypeHpAboveBelow(params) {
  const [attrBits, typeBits, threshA, isGreaterA, atk100a, threshB, isGreaterB, atk100b] = params;
  const attrs = idxsFromBits(attrBits);
  const types = idxsFromBits(typeBits);

  return createLeaderSkill({
    atk: (ping, team, percentHp) =>{
      if (!anyAttributes(ping.source, attrs) && !anyTypes(ping.source, types)) {
        return 1;
      }

      let multiplier = 1;
      if ((isGreaterA && percentHp >= threshA) || (!isGreaterA && percentHp <= threshA)) {
        multiplier *= atk100a / 100;
      }
      if ((isGreaterB && percentHp >= threshB) || (!isGreaterB && percentHp <= threshB)) {
        multiplier *= atk100b / 100;
      }
      return multiplier;
    },
  });
}

// 148
function expBoost(params) {
  const [exp100] = params;

  return createLeaderSkill({
    exp: exp100 / 100,
  });
}

// 149
function rcvFromHpa(params) {
  const [rcv100] = params;
  return createLeaderSkill({
    rcvPost: (ping, team, percentHp, comboContainer) => comboContainer.combos['h'].some((c) => c.count == 4) ? rcv100 / 100 : 1,
  });
}

// 150
function fiveOrbsOneEnhance(params) {
  const [UNKNOWN, atk100] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => {
      return comboContainer.combos[COLORS[ping.attribute]].some(
          (combo) => combo.count == 5 && combo.enhanced > 0) ? atk100 / 100 : 1;
    },
  });
}

// 151
function atkRcvShieldFromHeartCross(params) {
  const [atk100, maybeRcv100, shield100] = params;

  if (maybeRcv100) {
    console.error('Second argument of Heart Cross params set. Maybe Recovery? ' + String(maybeRcv100));
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => {
      if (!atk100) {
        return 1;
      }

      if (comboContainer.combos['h'].some((combo) => combo.shape == Shape.CROSS)) {
        return atk100 / 100;
      }
      return 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer) => {
      if (!shield100) {
        return 1;
      }
      if (comboContainer.combos['h'].some((combo) => combo.shape == Shape.CROSS)) {
        return 1 - shield100 / 100;
      }
      return 1;
    },
  });
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

// 157
function atkScalingFromCrossColors(params) {
  const colorToMult = {};
  for (let i = 0; i + 1 < params.length; i+=2) {
    colorToMult[params[i]] = params[i + 1] / 100;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => {
      let multiplier = 1;
      for (const attr in colorToMult) {
        multiplier *= colorToMult[attr] ** comboContainer.combos[COLORS[attr]].filter((c) => c.shape == Shape.CROSS).length;
      }
      return multiplier;
    },
  });
}

// 158
function baseStatFromAttrTypeMinMatch(params) {
  const [minMatch, attrBits, typeBits, atk100, hp100, rcv100] = params;
  const ls = baseStatFromAttrType([attrBits, typeBits, hp100, atk100, rcv100]);
  ls.minOrbMatch = minMatch;
  return ls;
}

// 162
function bigBoardLeader(params) {
  return createLeaderSkill({
    bigBoard: true,
  });
}

// 163 - Exactly the same as baseStatFromAttributeType except added nosf
function noSkyfallAndBaseStatFromAttributeType(params) {
  const leaderSkill = baseStatFromAttributeType(params);
  leaderSkill.noSkyfall = true;
  return leaderSkill;
}

// 164
function atkRcvFromColorMatches(params) {
  const [attr1, attr2, attr3, attr4, minMatch, atk100, rcv100, scale100] = params;
  const attrs = [attr1, attr2, attr3, attr4].filter(Boolean).map((attrBit) => idxsFromBits(attrBit)[0]);
  const atk = (atk100 || 100) / 100;
  const rcv = (rcv100 || 100) / 100;
  const scale = (scale100 || 0) / 100;

  function getMultiplier(team, comboContainer, base) {
    const teamAttributes = new Set();
    for (const monster of team) {
      teamAttributes.add(monster.getAttribute());
      teamAttributes.add(monster.getSubattribute());
    }
    const count = attrs
        .filter((attr) => comboContainer.combos[COLORS[attr]].length > 0)
        .filter((attr) => teamAttributes.has(attr)).length;
    if (count < minMatch) {
      return 1;
    }
    return base + (count - minMatch) * scale;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => getMultiplier(team, comboContainer, atk100),
    rcvPost: (monster, team, percentHp, comboContainer) => getMultiplier(team, comboContainer, rcv100),
  });
}

// 165
function atkRcvScalingFromOneColorMatches(params) {
  const [attrBits, minColors, atk100base, rcv100base, scale100, maxExtraColors] = params;
  const attrs = idxsFromBits(attrBits);
  const maxColors = minColors + (maxExtraColors || (attrs.length - minColors));

  function getMultiplier(team, comboContainer, base100) {
    const teamAttrs = new Set();
    for (const monster of team) {
      teamAttrs.add(monster.getAttribute());
      teamAttrs.add(monster.getSubattribute());
    }
    const c = attrs.filter((attr) => comboContainer.combos[COLORS[attr]].length > 0).filter((attr) => teamAttrs.has(attr)).length;
    if (c > maxColors) {
      c = maxColors;
    }
    if (c < minColors) {
      return 1;
    }
    return ((c - minColors) * scale100 + base100) / 100;
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => getMultiplier(team, comboContainer, atk100base),
    rcvPost: (monster, team, percentHp, comboContainer) => getMultiplier(team, comboContainer, rcv100base),
  });
}

// 166
function atkRcvScalingFromCombos(params) {
  let [minCombo, atk100, rcv100, atk100scale, rcv100scale, maxCombo] = params;
  atk100scale = atk100scale || 0;
  rcv100scale = rcv100scale || 0;
  maxCombo = maxCombo || minCombo;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => {
      let c = comboContainer.comboCount();
      if (c < minCombo) {
        return 1;
      }
      if (c > maxCombo) {
        c = maxCombo;
      }
      return (atk100 + (c - minCombo) * atk100scale) / 100;
    },
    rcvPost: (monster, team, percentHp, comboContainer) => {
      let c = comboContainer.comboCount();
      if (c < minCombo) {
        return 1;
      }
      if (c > maxCombo) {
        c = maxCombo;
      }
      return (rcv100 + (c - minCombo) * rcv100scale) / 100;
    },
  });
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
    return comboContainer.comboCount() >= minCombos;
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

// 175
function baseStatFromCollab(params) {
  const [c1, UNKNOWN1, UNKNOWN2, hp100, atk100, rcv100] = params;

  if (UNKNOWN1 || UNKNOWN2) {
    console.warn(`Unsupported params included: ${UNKNOWN1}, ${UNKNOWN2}`);
  }

  function allCollab(team) {
    return team.every((monster) => monster.getCard().collab == c1);
  }

  return createLeaderSkill({
    hp: (monster, team) => hp100 && allCollab(team) ? hp100 / 100 : 1,
    atk: (ping, team) => atk100 && allCollab(team) ? atk100 / 100 : 1,
    rcv: (monster, team) => rcv100 && allCollab(team) ? rcv100 / 100 : 1,
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

// 178
function baseStatFromAttrTypeFixedTime(params) {
  const [secondsFixed, attrBits, typeBits, hp100, atk100, rcv100] = params;
  const ls = baseStatFromAttributeType([attrBits, typeBits, hp100, atk100, rcv100]);
  ls.fixedTime = secondsFixed;
  return ls;
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
  const [s100, attrBits, typeBits, hp100, atk100, rcv100] = params;
  const leaderSkill = baseStatFromAttributeType(
      [attrBits, typeBits, hp100, atk100, rcv100]);
  leaderSkill.timeExtend = s100 / 100;
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

// 193
function atkRcvShieldFromLMatch(params) {
  const [attrBits, atk100, maybeRcv100, shield100] = params;

  const attrs = idxsFromBits(attrBits);

  if (maybeRcv100) {
    console.error('Unhandled argument 3 of L match: ' + String(maybeRcv100));
  }

  function madeL(comboContainer) {
    return attrs.some((attr) => {
      return comboContainer[COLORS[attr]].some((combo) => combo.shape == Shape.L);
    });
  }

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer) => {
      if (atk100 && madeL(comboContainer)) {
        return atk100 / 100;
      }
      return 1;
    },
    damageMult: (enemy, team, percentHp, comboContainer) => {
      if (shield100 && madeL(comboContainer)) {
        return 1 - shield100 / 100;
      }
      return 1;
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
      return comboContainer.combos[COLORS[attr]].length > 0;
    }).filter((attr) => {
      // Then find if the team attacked with those colors.
      return attr > 4 || monsters.some((monster) => {
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

// 197
function disablePoisonDamage(params) {
  return createLeaderSkill({
    ignorePoison: true,
  });
}

// 198
function atkShieldAwokenClearFromRcv(params) {
  const [healThresh, atk100, damageMult100, awokenClear] = params;

  return createLeaderSkill({
    atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer, healing) => healing >= healThresh ? (atk100 || 100) / 100 : 1,
    damageMult: (enemy, team, percentHp, comboContainer, skillUsed, isMultiplayer, healing) => healing >= healThresh ? (damageMult100 || 100) / 100 : 1,
    awokenBindClear: (healing) => healing >= healThresh ? (awokenClear || 0) : 0,
  })
}

// 199
function trueBonusFromColorMatches(params) {
  const [attrBits, minCount, damage] = params;

  const attrs = idxsFromBits(attrBits);

  return createLeaderSkill({
    trueBonusAttack: (monster, team, percentHp, comboContainer) => {
      return attrs.filter((attr) => comboContainer[COLORS[attr]].length > 0).length >= minCount ? damage : 0;
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
  0: copyBaseLeader,
  11: atkFromAttribute,
  12: bonusAttackScale,
  13: autoheal,
  14: resolve,
  15: pureTimeExtend,
  16: shieldAgainstAll,
  17: shieldAgainstAttr,
  22: atkFromType,
  23: hpFromType,
  24: rcvFromType,
  26: atkUnconditional, // Unused for any real monsters.
  28: atkRcvFromAttr,
  29: baseStatFromAttr,
  30: hpFromTwoTypes,
  31: atkFromTwoTypes,
  33: drumSounds,
  36: shieldAgainstTwoAttr,
  38: shieldFromHp,
  39: atkRcvFromSubHp,
  40: atkFromTwoAttr,
  41: counterattack, // Not yet implemented
  43: shieldFromAboveHp,
  44: atkRcvFromMinHp,
  45: atkRcvFromAttr,
  46: hpFromTwoAttr,
  48: hpFromAttr,
  49: rcvFromAttr,
  52: dropBoost,
  54: coinBoost,
  61: atkScalingFromMatchedColors,
  62: atkHpFromType,
  63: hpRcvFromType,
  64: atkRcvFromType,
  65: baseStatFromType,
  66: atkBoostFromMinCombos,
  67: atkRcvFromAttr,
  69: atkFromAttrType, // lol
  73: atkHpFromAttrType,
  75: atkRcvFromAttrType,
  76: baseStatFromAttrType,
  77: atkFromTwoTypes,
  79: atkRcvFromTwoTypes,
  94: atkRcvFromAttrAndSubHp,
  95: atkRcvFromTypeAndSubHp,
  96: atkRcvFromAttrAndAboveHp,
  97: atkRcvFromTypeAndAboveHp,
  98: atkScalingFromCombos,
  100: atkRcvFromSkillUse,
  101: atkBoostFromExactCombos,
  103: atkRcvFromMinCombos,
  104: atkRcvFromAttrMinCombos,
  105: atkFromDecreasedRcv,
  106: atkFromDecreasedHp,
  107: hpDecrease,
  108: atkFromTypeDecreasedHp,
  109: atkFromLinkedOrbs, // Am I reading this correctly?
  111: atkHpFromTwoAttr,
  114: baseStatFromTwoAttr,
  116: multipleLeaderSkills,
  119: atkScalingFromLinkedOrbs,
  121: baseStatFromAttrType,
  122: atkRcvFromSubHp,
  123: atkFromAttrTypeAboveHp,
  124: atkScalingFromMatchedColors,
  125: baseStateFromRequiredSubs,
  129: baseStatFromAttributeType,
  130: atkRcvColorShieldFromSubHp,
  131: atkRcvFromAttrTypeAboveHp,
  133: atkRcvFromAttrsTypesSkillUse,
  136: stackingStatboostsForAttributes,
  137: stackingStatboostsForTypes,
  138: multipleLeaderSkills,
  139: atkFromAttrTypeHpAboveBelow,
  148: expBoost,
  149: rcvFromHpa,
  150: fiveOrbsOneEnhance,
  151: atkRcvShieldFromHeartCross,
  155: statBoostFromMultiplayer,
  157: atkScalingFromCrossColors,
  158: baseStatFromAttrTypeMinMatch,
  159: atkScalingFromLinkedOrbs,
  162: bigBoardLeader,
  163: noSkyfallAndBaseStatFromAttributeType,
  164: atkRcvFromColorMatches,
  165: atkRcvScalingFromOneColorMatches,
  166: atkRcvScalingFromCombos,
  167: atkRcvScalingFromLinkedOrbs,
  169: atkAndShieldFromMinCombos,
  170: atkAndShieldFromMinColorMatch,
  171: atkScalingAndShieldFromMatchedOrbs,
  175: baseStatFromCollab,
  177: atkBoostFromOrbsRemaining,
  178: baseStatFromAttrTypeFixedTime,
  182: atkShieldFromLinkedOrbs,
  183: atkShieldFromHp,
  185: moveTimeAndBaseStatFromAttributeType,
  186: bigBoardAndBaseStatFromAttributeType,
  192: atkAndCombosFromLinkedOrbs,
  193: atkRcvShieldFromLMatch,
  194: atkAndCombosFromRainbow,
  197: disablePoisonDamage,
  198: atkShieldAwokenClearFromRcv,
  199: trueBonusFromColorMatches,
  200: trueBonusFromLinkedOrbs,
};

const warnedLs = new Set();

function getLeaderSkillEffects(leaderSkillId) {
  const modelLeaderSkill = vm.model.playerSkills[leaderSkillId];
  if (!(modelLeaderSkill.internalEffectId in LEADER_SKILL_GENERATORS)) {
    if (!warnedLs.has(modelLeaderSkill.internalEffectId)) {
      console.warn(`Leader Skill ID ${leaderSkillId} not implemented, assuming no LS`);
      warnedLs.add(modelLeaderSkill.internalEffectId);
    }
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