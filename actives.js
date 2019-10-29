const baseActiveSkill = Object.freeze({
  noSkyfall: false,
  massAttack: false,
  defenseBreakPercent: 0,
  plusCombo: 0,
  // Set attribute of monster.
  selfAttribute: -1, // If >= 0, set to attribute, -1 is ignore.
  enemyAttribute: -1, // Same as above.
  ignoreAttributeAbsorb: false,
  ignoreDamageAbsorb: false,
  ignoreVoid: false,
  suicideTo: 100,
  rcvBurst: 1,
  haste: () => 0,
  healFromDamage: 0,
  timeExtend: 0, // If magnitude above 10, it is a percentage multiplier.
  // Returns an array of pings.
  // Attribute -1 is true.
  // This also accounts for gravities.
  damage: (source, team, awakeningsActive, isMultiplayer, enemy, currentHp, maxHp) => {
    return [];
  },
  // Scales based on awakenings, monster attribute, or monster type.
  // multiplayer impacts awakenings.
  burst: (monster, team, awakeningsActive, isMultiplayer) => {
    return 1;
  },
  // Immediate heals.  Can be flat, monster scaling, or team HP scaling.
  heal: (monster, idc) => {
    return 0;
  },
  // Heal over time effects e.g. Kuroyuri.
  autoHeal: (idc) => {
    return 0;
  },
  damageMult: (enemy, team, awakeningsActive, isMultiplayer) => {
    return 1;
  },
  enhance: (comboContainer) => {
    return;
  },
  // Unimplemented.
  delay: 0,
  unlock: false,
});

function copyBaseActive() {
  return Object.assign({}, baseActiveSkill);
}

function createActiveSkill(configs) {
  return Object.assign(copyBaseActive(), configs);
}

function combineActiveSkills(as1, as2) {
  return {
    noSkyfall: as1.noSkyfall || as2.noSkyfall,
    massAttack: as1.massAttack || as2.massAttack,
    defenseBreakPercent: as1.defenseBreakPercent || as2.defenseBreakPercent,
    plusCombo: as1.plusCombo || as2.plusCombo,
    selfAttribute: as1.selfAttribute > -1 ? as1.selfAttribute : as2.selfAttribute,
    enemyAttribute: as1.enemyAttribute > -1 ? as1.enemyAttribute : as2.enemyAttribute,
    ignoreAttributeAbsorb: as1.ignoreAttributeAbsorb || as2.ignoreAttributeAbsorb,
    ignoreDamageAbsorb: as1.ignoreDamageAbsorb || as2.ignoreDamageAbsorb,
    ignoreVoid: as1.ignoreVoid || as2.ignoreVoid,
    suicideTo: (as1.suicideTo * as2.suicideTo) / 100,
    rcvBurst: as1.rcvBurst * as2.rcvBurst,
    healFromDamage: as1.healFromDamage + as2.healFromDamage,
    timeExtend: as1.timeExtend || as2.timeExtend,
    haste: () => as1.haste() + as2.haste(),
    damage: (...args) => {
      return as1.damage(...args).concat(as2.damage(...args));
    },
    burst: (...args) => {
      return as1.burst(...args) * as2.burst(...args);
    },
    heal: (...args) => {
      return as1.heal(...args) + as2.heal(...args);
    },
    autoHeal: (...args) => {
      return as1.autoHeal(...args) + as2.autoHeal(...args); 
    },
    damageMult: (...args) => {
      return as1.damageMult(...args) * as2.damageMult(...args);
    },
    enhance: (...args) => {
      as1.enhance(...args);
      as2.enhance(...args);
    },
    delay: as1.delay + as2.delay,
    unlock: as1.unlock + as2.unlock,
  };
}

// 0
function scalingAttackToAllEnemies(params) {
  const [attr, atk100] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.attribute = attr;
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100 / 100, Round.UP)
      ping.ignoreCombo = true;
      return [ping];
    },
  });
}

// 1
function flatAttackToAllEnemies(params) {
  const [attr, damage] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      ping.amount = damage;
      ping.ignoreCombo = true;
      return [ping];
    }
  })
}

// 2
function scalingAttackToSingleEnemy(params) {
  const [atk100base, atk100max] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = source.getAttribute();
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100base, Round.UP);
      ping.ignoreCombo = true;

      if (atk100max != atk100base) {
        console.warn('Unhandled possible scaling in Effect 2');
      }

      return [ping];
    },
  });
}


// 3
function shield(params) {
  const [turnCount, shieldPercent] = params;

  return createActiveSkill({
    damageMult: () => {
      return 1 - (shieldPercent / 100);
    },
  });
}

// 4
function poison(params) {
  console.warn('Poison active not implemented');
  return copyBaseActive();
}

// 5
function changeTheWorld(params) {
  const [timeSeconds] = params;

  console.warn('CTW active not implemented');
  return copyBaseActive();
}

// 6
function gravity(params) {
  const [percentGravity] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.attribute = -1;
      ping.amount = Math.floor(enemy.currentHp * percentGravity / 100);
      ping.ignoreCombo = true;
      return [ping];
    },
  });
}

// 8
function flatHeal(params) {
  const [amount] = params;

  return createActiveSkill({
    heal: () => amount;
  });
}

// 18
function delay(params) {
  const [turns] = params;
  return createActiveSkill({
    delay: turns,
  });
}

// 19
function defenseBreak(params) {
  const [turns, defenseBreakPercent] = params;

  return createActiveSkill({
    defenseBreakPercent: defenseBreakPercent,
  });
}

// 35
function scalingAttackAndHeal(params) {
  const [atk100, drain100] = params;

  return createActiveSkill({
    healFromDamage: drain100 / 100;
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = source.getAttribute();
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100 / 100, Round.UP);
      ping.ignoreCombo = true;
      return [ping];
    },
  });
}

// 42
function flatAttackToAttribute(params) {
  const [targetAttr, attackAttr, damage] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      if (enemy.getAttribute() != targetAttr) {
        return [];
      }
      const ping = new DamagePing();
      ping.source = source;
      ping.ignoreCombo = true;
      ping.attribute = attackAttr;
      ping.amount = damage;
      return [ping];
    },
  });
}

// 50
function attrOrRcvBurst(params) {
  const [turnCount, attr, mult100] = params;

  const active = copyBaseActive();

  if (attr == 5) {
    active.rcvBurst = mult100;
  } else {
    active.burst = (monster) => {
      if (monster.getAttribute() == attr || monster.getSubattribute() == attr) {
        return mult100 / 100;
      }
      return 1;
    }
  }
  return active;
}

// 51
function massAttack(params) {
  const [turns] = params;
  return createActiveSkill({
    massAttack: true,
  });
}

// 55 + 188
function fixedDamageToOneEnemy(params) {
  const [amount] = params;

  return createActiveSkill({
    damage: (source) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = -1;
      ping.amount = amount;
      ping.ignoreCombo = true;
      return [ping];
    },
  });
}

// 56 - For our purposes, the same as single target.
function fixedDamageToAllEnemies(params) {
  return fixedDamageToOneEnemy(params);
}

// 58
function scalingAttackRandomToAllEnemies(params) {
  const [attr, minMult, maxMult] = params;

  function range() {
    return Math.random() * (maxMult - minMult) + minMult;
  }

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer) => {
      const ping = new DamagePing();
      ping.attribute = attr;
      ping.source = source;
      ping.ignoreCombo = true;
      ping.multiply(range(), Round.UP);
      return [ping];
    },
  });
}

// 59 - Effectively the same as 58 for our purposes.
function scalingAttackRandomToOneEnemy(params) {
  return scalingAttackRandomToAllEnemies(params);
}

// 62
function enhanceOrbs(params) {
  // Based on Ilmina, potency is never changed.  This is almost always 6.
  const [attr, unusedPotency] = params;

  return createActiveSkill({
    enhance: (comboContainer) => {
      for (const combo of comboContainer.combos[COLOR_ORDER[attr]]) {
        combo.enhanced = combo.count;
      }
    },
  });
}

// 71
function fullBoard(params) {
  const attrs = params.slice(0, params.length - 1);

  console.warn('Full board not implemented!');
}

// 84
function scalingAttackAndSuicideSingle(params) {
  const [attr, scaleBase, scaleMax, suicideTo] = params;

  return createActiveSkill({
    suicideTo: suicideTo || 0;
    damage: (source, team, awakeningsActive, isMultiplayer) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      ping.ignoreCombo = true;
      let scale = scaleBase;
      if (scaleBase != scaleMax) {
        scale = Math.ceil(Math.random() * (scaleMax - scaleBase)) + scaleBase;
      }
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(scale);
      return [ping];
    },
  });
}

// 85
// Effectively the same.
function scalingAttackAndSuicideMass(params) {
  return scalingAttackAndSuicideSingle(params);
}

// 86 - Single target
function flatAttackAndSuicideSingle(params) {
  // UNKNOWN is always 0 according to Ilmina.
  const [attr, damage, UNKNOWN, suicide100] = params;

  return createActiveSkill({
    suicideTo: suicide100 || 0,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.ignoreCombo = true;
      ping.attribute = attr;
      ping.amount = damage;
      return [ping];
    },
  });
}

// 87
function flatAttackAndSuicideMass(params) {
  return flatAttackAndSuicideSingle(params);
}

// 88
function burstForOneType(params) {
  const [turn, type, mult100] = params;

  return createActiveSkill({
    burst: (monster) => {
      if (monster.getCard().types.includes(type)) {
        return mult100 / 100;
      }
      return 1;
    },
  });
}

// 90
function burstForTwoAttributes(params) {
  const [turnCount, attr1, attr2, atk100];
  const attrs = new Set([attr1, attr2]);

  return createActiveSkill({
    burst: (monster) => {
      if (attrs.has(monster.getAttribute()) || attrs.has(monster.getSubattribute())) {
        return atk100 / 100;
      }
      return 1;
    },
  });
}

// 92
function burstForTwoTypes(params) {
  const [turnCount, type1, type2, atk100];

  return createActiveSkill({
    burst: (monster, team, awakeningsActive, isMultiplayer) => {
      if (monster.getCard().types.includes(type1) || monster.getCard().types.includes(type2)) {
        return atk100 / 100;
      }
      return 1;
    },
  })
}

// 110
function grudgeStrike(params) {
  const [isSingleTarget, attr, baseMult, maxMult, scaling] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy, currentHp, maxHp) => {
      console.warn('Grudge Strike calculations KNOWN to be off by a few points of damage, beware!');
      const ping = new DamagePing();
      ping.attribute = attr;
      ping.ignoreCombo = true;
      ping.source = source;

      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      const multiplierScale = (maxMult - baseMult) * ((1 - (currentHp - 1) / (maxHp - 1)) ** (scaling / 100));
      ping.multiply(baseMult + multiplierScale, Round.UP);
      return [ping];
    },
  });
}

// 116 and 138, but for actives.
function multipleActiveSkills(params) {
  let leaderSkill = getActiveSkillEffects(params[0]);
  for (const param of params.slice(1, params.length)) {
    leaderSkill = combineActiveSkills(leaderSkill, getActiveSkillEffects(param));
  }
  return leaderSkill;
}

// 127 - Column maker
function orbChangeColumn(params) {
  console.warn('Orb change not implemented');
  return createActiveSkill({});
}

// 144
function scalingAttackFromTeam(params) {
  const [attrBits, atk100, isSingleTarget, attr] = params;
  const attrs = idxsFromBits(attrBits);

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      for (const monster of team) {
        if (attrs.includes(monster.getAttribute())) {
          ping.amount += monster.getAtk(isMultiplayer, awakeningsActive);
        }
        if (attrs.includes(monster.getSubattribute())) {
          const baseValue = monster.getAtk(isMultiplayer, awakeningsActive);
          ping.amount += Math.ceil(baseValue * (monster.getAttribute() == monster.getSubattribute() ? 10 : 3));
        }
      }
      ping.multiply(atk100 / 100, Round.UP);
      ping.ignoreCombo = true;
      return [ping];
    },
  });
}

// 146
function haste(params) {
  const [minTurn, maxTurn] = params;

  return createActiveSkill({
    haste: () => {
      if (minTurn == maxTurn) {
        return minTurn;
      }
      return Math.floor(Math.random() * (maxTurn - minTurn)) + minTurn;
    },
  });
}

// 156
function effectFromAwakeningCount(params) {
  const [turnCount, awakening1, awakening2, awakening3, effectFlag, mult100];
  const filterSet = new Set([awakening1, awakening2, awakening3].filter((a) = !!a));
  const active = copyBaseActive();
  let factor = 0;
  function countAwakenings(team, isMultiplayer) {
    let count = 0;
    for (const monster of team) {
      count += monster.getAwakenings(isMultiplayer, filterSet).length;
    }
    return count;
  }
  if (effectFlag == 1) {
    active.heal = (monster, idc) => {
      if (!idc.effect.awakenings) {
        return 0;
      }
      return countAwakenings(idc.getActiveTeam(), idc.isMultiplayer()) * mult100;
    };
  } else if (effectFlag == 2) {
    active.burst = (monster, team, awakeningsActive, isMultiplayer) => {
      if (!awakeningsActive) {
        return 1;
      }
      return 1 + countAwakenings(team, isMultiplayer) * mult100 / 100;
    };
  } else if (effectFlag == 3) {
    active.damageMult = (enemy, team, awakeningsActive, isMultiplayer) => {
      if (!awakeningsActive) {
        return 1;
      }
      let mult = 1 - countAwakenings(team, isMultiplayer) * mult100 / 100;
      if (mult < 0) {
        mult = 0;
      }
      return mult;
    };
  } else {
    console.error('Unhandled awakening scale active effect ' + effectFlag);
  }

  return active;
}

// 160
function addCombos(params) {
  const [turnCount, combos] = params;

  return createActiveSkill({
    plusCombo: combos,
  });
}

// 161
function trueGravity(params) {
  const [percent] = params;

  return createActiveSkill({
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = -1;
      ping.ignoreCombo = true;
      ping.amount = Math.ceil(enemy.maxHp * percent / 100);
      return [ping];
    },
  });
}

// 195
function pureSuicide(params) {
  const [suicideTo] = [params];

  return createActiveSkill({
    suicideTo: suicideTo,
  });
}

const ACTIVE_SKILL_GENERATORS = {
  0: scalingAttackToAllEnemies,
  1: flatAttackToAllEnemies,
  2: scalingAttackToSingleEnemy,
  3: shield,
  4: poison,
  5: changeTheWorld,
  6: gravity,
  8: flatHeal,
  // 9: orbChange,
  // 10: orbRefresh,
  19: defenseBreak,
  18: delay,
  35: scalingAttackAndHeal,
  42: flatAttackToAttribute,
  50: attrOrRcvBurst,
  51: massAttack,
  55: fixedDamageToOneEnemy,
  56: fixedDamageToAllEnemies,
  58: scalingAttackRandomToOneEnemy,
  59: scalingAttackRandomToOneEnemy,
  // 60: countAttack
  62: enhanceOrbs,
  71: fullBoard,
  84: scalingAttackAndSuicideSingle,
  85: scalingAttackAndSuicideMass,
  86: flatAttackAndSuicideSingle,
  87: flatAttackAndSuicideMass,
  88: burstForOneType,
  90: burstForTwoAttributes,
  92: burstForTwoTypes,
  // 93: leaderSwap,
  110: grudgeStrike,
  // 115: elementalScalingAttackAndHeal,
  116: multipleActiveSkills,
  // 117: catchAllCleric,
  // 118: randomActive,
  // 126: increaseSkyfall,
  // 127: orbChangeColumn,
  // 128: orbChangeRow,
  // 132: timeExtend,
  // 140: enhanceOrbsMany,
  // 141: randomOrbSpawn,
  // 142: selfAttributeChange,
  138: multipleActiveSkills,
  // 143: scalingAttackFromTeamHp,
  144: scalingAttackFromTeam,
  // 145: scalingRecoveryFromTeam,
  146: haste,
  // 152: lockOrbs,
  // 153: enemyAttributeChange,
  156: burstFromAwakeningCount,
  160: addCombos,
  161: trueGravity,
  // 172: unlock,
  // 173: voidAbsorb,
  188: fixedDamageToOneEnemy, // This is the same as 55? Perhaps this runs faster?
  195: pureSuicide,
};

function getActiveSkillEffects(activeSkillId) {
  const modelActiveSkill = vm.model.playerSkills[activeSkillId];
  if (!(modelActiveSkill.internalEffectId in ACTIVE_SKILL_GENERATORS)) {
    console.log(`Active Effect ${activeSkillId} of type ${modelActiveSkill.internalEffectId} not implemented.`);
    return copyBaseActive();
  }
  return ACTIVE_SKILL_GENERATORS[modelActiveSkill.internalEffectId](
      modelActiveSkill.internalEffectId);
}