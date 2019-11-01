const baseActiveSkill = Object.freeze({
  description: '[Unknown] ',
  swap: 0, // Index of sub to swap to lead.
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
  burst: null,
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
    description: Array.isArray(as1.description) ? as1.description.concat(as2.description) : [as1.description, as2.description],
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
    burst: as1.burst || as2.burst,
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
    description: `Mass ${atk100 / 100}x ${AttributeToName[attr]} Attack.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100 / 100, Round.UP)
      ping.isActive = true;
      return [ping];
    },
  });
}

// 1
function flatAttackToAllEnemies(params) {
  const [attr, damage] = params;

  return createActiveSkill({
    description: `Mass ${numberWithCommas(damage)} ${AttributeToName[attr]} Attack.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      ping.amount = damage;
      ping.isActive = true;
      return [ping];
    }
  })
}

// 2
function scalingAttackToSingleEnemy(params) {
  const [atk100base, atk100max] = params;

  return createActiveSkill({
    description: `${atk100base / 100}${atk100max ? '-' +  atk100max / 100: ''}x Self-Attribute Attack.`,
    damage: (source, team, awakeningsActive, isMultiplayer) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = source.getAttribute();
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100base, Round.UP);
      ping.isActive = true;

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
    description: `${shieldPercent}% Shield.`,
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
    description: `${percentGravity}% Gravity.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = -1;
      ping.amount = Math.floor(enemy.currentHp * percentGravity / 100);
      ping.isActive = true;
      return [ping];
    },
  });
}

// 8
function flatHeal(params) {
  const [amount] = params;

  return createActiveSkill({
    description: `Flat ${amount} Heal.`,
    heal: () => amount,
  });
}

// 18
function delay(params) {
  const [turns] = params;
  return createActiveSkill({
    description: `${turns}-turn Delay.`,
    delay: turns,
  });
}

// 19
function defenseBreak(params) {
  const [turns, defenseBreakPercent] = params;

  return createActiveSkill({
    description: `${defenseBreakPercent}% Defense Break for ${turns} turn(s).`,
    defenseBreakPercent: defenseBreakPercent,
  });
}

// 35
function scalingAttackAndHeal(params) {
  const [atk100, drain100] = params;

  return createActiveSkill({
    description: `${atk100 / 100}x Self-Attribute Attack and heal ${drain100}%.`,
    healFromDamage: drain100 / 100,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = source.getAttribute();
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100 / 100, Round.UP);
      ping.isActive = true;
      return [ping];
    },
  });
}

// 37
function scalingAttackToOneEnemy(params) {
  const [attr, atk100] = params;
  return createActiveSkill({
    description: `Single-Target ${atk100/100}x ${AttributeToName[attr]} Attack.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(atk100 / 100, Round.UP);
      ping.isActive = true;
      return [ping];
    },
  });
}

// 42
function flatAttackToAttribute(params) {
  const [targetAttr, attackAttr, damage] = params;

  return createActiveSkill({
    description: `${damage} ${AttributeToName[attackAttr]} Damage to ${AttributeToName[targetAttr]} Attribute.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      if (enemy.getAttribute() != targetAttr) {
        return [];
      }
      const ping = new DamagePing();
      ping.source = source;
      ping.isActive = true;
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
    active.description = `${mult100 / 100}x RCV Burst for ${turnCount} turn(s).`;
  } else {
    active.burst = {
      attributeRestrictions: [attr],
      multiplier: mult100 / 100,
    };
    active.description = `${mult100 / 100}x ${AttributeToName[attr]} Burst for ${turnCount} turn(s).`;
  }
  return active;
}

// 51
function massAttack(params) {
  const [turns] = params;
  return createActiveSkill({
    description: `Mass attack for ${turns} turns.`,
    massAttack: true,
  });
}

// 52
function enhanceOrbs(params) {
  // Based on Ilmina, potency is never changed.  This is almost always 6.
  const [attr, unusedPotency] = params;

  return createActiveSkill({
    description: `Enhance ${AttributeToName[attr]} orbs.`,
    enhance: (comboContainer) => {
      for (const combo of comboContainer.combos[COLORS[attr]]) {
        combo.enhanced = combo.count;
      }
    },
  });
}

// 55 + 188
function fixedDamageToOneEnemy(params) {
  const [amount] = params;

  return createActiveSkill({
    description: `Fixed ${amount} damage to one enemy.`,
    damage: (source) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = -1;
      ping.amount = amount;
      ping.isActive = true;
      return [ping];
    },
  });
}

// 56 - For our purposes, the same as single target.
function fixedDamageToAllEnemies(params) {
  const as = fixedDamageToOneEnemy(params);
  as.description = as.description.replace('one enemy', 'all enemies');
  return as;
}

// 58
function scalingAttackRandomToAllEnemies(params) {
  const [attr, minMult, maxMult] = params;

  function range() {
    return Math.ceil(Math.random() * (maxMult - minMult) + minMult) / 100;
  }

  return createActiveSkill({
    description: `Mass ${minMult / 100}-${maxMult / 100}x ${AttributeToName[attr]} Attack.`,
    damage: (source, team, awakeningsActive, isMultiplayer) => {
      const ping = new DamagePing();
      ping.attribute = attr;
      ping.source = source;
      ping.isActive = true;
      ping.multiply(range(), Round.UP);
      return [ping];
    },
  });
}

// 59 - Effectively the same as 58 for our purposes.
function scalingAttackRandomToOneEnemy(params) {
  const as = scalingAttackRandomToAllEnemies(params);
  as.description = as.description.replace('Mass', 'Single Target');
  return as;
}

// 71
function fullBoard(params) {
  const attrs = params.slice(0, params.length - 1);
  // console.warn('Full board not implemented!');
  return copyBaseActive();
}

// 84
function scalingAttackAndSuicideSingle(params) {
  let [attr, scaleBase100, scaleMax100, suicideTo] = params;
  if (!suicideTo) {
    suicideTo = 0;
  }

  return createActiveSkill({
    description: `Single Target ${scaleBase100 / 100}-${scaleMax100 / 100}x ${AttributeToName[attr]} Attack. Suicide to ${suicideTo}%.`,
    suicideTo: suicideTo || 0,
    damage: (source, team, awakeningsActive, isMultiplayer) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = attr;
      ping.isActive = true;
      let scale100 = scaleBase100;
      if (scaleBase100 != scaleMax100) {
        scale100 = Math.ceil(Math.random() * (scaleMax100 - scaleBase100)) + scaleBase100;
      }
      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      ping.multiply(scale100 / 100, Round.UP);
      return [ping];
    },
  });
}

// 85
// Effectively the same.
function scalingAttackAndSuicideMass(params) {
  const as = scalingAttackAndSuicideSingle(params);
  as.description = as.description.replace('Single Target', 'Mass');
  return as;
}

// 86 - Single target
function flatAttackAndSuicideSingle(params) {
  // UNKNOWN is always 0 according to Ilmina.
  const [attr, damage, UNKNOWN, suicide100] = params;

  return createActiveSkill({
    description: `Single Target ${numberWithCommas(damage)} ${AttributeToName[attr]} Attack. Suicide to ${suicide100}`,
    suicideTo: suicide100 || 0,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.isActive = true;
      ping.attribute = attr;
      ping.amount = damage;
      return [ping];
    },
  });
}

// 87
function flatAttackAndSuicideMass(params) {
  const as = flatAttackAndSuicideSingle(params);
  as.description = as.description.replace('Single Target', 'Mass');
  return as;
}

// 88
function burstForOneType(params) {
  const [turn, type, mult100] = params;

  return createActiveSkill({
    description: `${mult100 / 100}x Burst for ${TypeToName[type]} for ${turn} turn(s).`,
    burst: {
      typeRestrictions: [type],
      multiplier: mult100 / 100,
    },
  });
}

// 90
function burstForTwoAttributes(params) {
  const [turnCount, attr1, attr2, atk100] = params;

  return createActiveSkill({
    description: `${mult100 / 100}x Burst for ${AttributeToName[attr1]} and ${attr2} for ${turnCount} turn(s).`,
    burst: {
      attributeRestrictions: [attr1, attr2],
      multiplier: atk100 / 100,
    },
  });
}

// 92
function burstForTwoTypes(params) {
  const [turnCount, type1, type2, atk100] = params;

  return createActiveSkill({
    description: `${atk100 / 100}x Burst for ${TypeToName[type1]} and ${TypeToName[type2]} for ${turnCount} turn(s).`,
    burst: {
      typeRestrictions: [type1, type2],
      multiplier: atk100 / 100,
    },
  })
}

// 110
function grudgeStrike(params) {
  const [isSingleTarget, attr, baseMult, maxMult, scaling] = params;

  return createActiveSkill({
    description: `${isSingleTarget ? 'Single Target' : 'Mass'} ${baseMult / 100}-${maxMult / 100}x ${AttributeToName[attr]} Grudge Strike.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy, currentHp, maxHp) => {
      // console.warn('Grudge Strike calculations KNOWN to be off by a few points of damage, beware!');
      const ping = new DamagePing();
      ping.attribute = attr;
      ping.isActive = true;
      ping.source = source;

      ping.amount = source.getAtk(isMultiplayer, awakeningsActive);
      const multiplierScale = (maxMult - baseMult) * ((1 - (currentHp - 1) / (maxHp)) ** (scaling / 100));
      ping.multiply(baseMult + multiplierScale, Round.NEAREST);
      return [ping];
    },
  });
}

// 116 and 138, but for actives.
function multipleActiveSkills(params) {
  let as = getActiveSkillEffects(params[0]);
  for (const param of params.slice(1, params.length)) {
    as = combineActiveSkills(as, getActiveSkillEffects(param));
  }
  if (Array.isArray(as.description)) {
    const pieces = new Set(as.description);
    if (pieces.size == as.description.length) {
      as.description = as.description.join(' ');
    } else {
      let description = '';
      for (const piece of pieces) {
        const count = as.description.filter((d) => d == piece).length;
        if (count > 1) {
          description += ` ${piece.substring(0, piece.length - 1)} x${count}.`;
        } else {
          description += ' ' + piece;
        }
      }
      as.description = description.substring(1);
    }
  }
  return as;
}

// 127 - Column maker
function orbChangeColumn(params) {
  console.warn('Orb change not implemented');
  return copyBaseActive();
}

// 144
function scalingAttackFromTeam(params) {
  const [attrBits, atk100, isSingleTarget, attr] = params;
  const attrs = idxsFromBits(attrBits);

  return createActiveSkill({
    description: `${isSingleTarget ? 'Single Target' : 'Mass'} ${atk100 / 100}x Team ${attrs.map((attr) => AttributeToName[attr])} Attack.`,
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
          ping.amount += Math.ceil(baseValue / (monster.getAttribute() == monster.getSubattribute() ? 10 : 3));
        }
      }
      ping.multiply(atk100 / 100, Round.UP);
      ping.isActive = true;
      return [ping];
    },
  });
}

// 146
function haste(params) {
  const [minTurn, maxTurn] = params;

  return createActiveSkill({
    description: `${minTurn}-${maxTurn} Haste.`,
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
  const [turnCount, awakening1, awakening2, awakening3, effectFlag, mult100] = params;
  const awakenings = [awakening1, awakening2, awakening3].filter((a) = !!a);
  const filterSet = new Set(awakenings);
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
    active.description = `${mult100} Heal per ${awakenings.map((awk) => AwakeningToName[awk])} Awakening.`;
    active.heal = (monster, idc) => {
      if (!idc.effect.awakenings) {
        return 0;
      }
      return countAwakenings(idc.getActiveTeam(), idc.isMultiplayer()) * mult100;
    };
  } else if (effectFlag == 2) {
    active.description = `${mult100 / 100}x Burst per ${awakenings.map((awk) => AwakeningToName[awk])} Awakening.`;
    active.burst = {
      awakenings: [awakenings],
      awakeningScale: mult100 / 100,
    };
  } else if (effectFlag == 3) {
    active.description = `${mult100}% Shield per ${awakenings.map((awk) => AwakeningToName[awk])} Awakening.`;
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
    description: `+${combos}c for ${turnCount} turn(s).`,
    plusCombo: combos,
  });
}

// 161
function trueGravity(params) {
  const [percent] = params;

  return createActiveSkill({
    description: `${percent}% True Gravity.`,
    damage: (source, team, awakeningsActive, isMultiplayer, enemy) => {
      const ping = new DamagePing();
      ping.source = source;
      ping.attribute = -1;
      ping.isActive = true;
      ping.amount = Math.ceil(enemy.maxHp * percent / 100);
      return [ping];
    },
  });
}

// 195
function pureSuicide(params) {
  const [suicideTo] = [params];

  return createActiveSkill({
    description: `Suicide to ${suicideTo}%.`,
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
  18: delay,
  19: defenseBreak,
  // 20: orbChangeDouble,
  // 21: attrDamageShield,
  35: scalingAttackAndHeal,
  37: scalingAttackToOneEnemy,
  42: flatAttackToAttribute,
  50: attrOrRcvBurst,
  51: massAttack,
  52: enhanceOrbs,
  55: fixedDamageToOneEnemy,
  56: fixedDamageToAllEnemies,
  58: scalingAttackRandomToOneEnemy,
  59: scalingAttackRandomToOneEnemy,
  // 60: counterAttack
  71: fullBoard, // Does nothing right now.
  84: scalingAttackAndSuicideSingle,
  85: scalingAttackAndSuicideMass,
  86: flatAttackAndSuicideSingle,
  87: flatAttackAndSuicideMass,
  88: burstForOneType,
  90: burstForTwoAttributes,
  // 91: orbEnhanceTwo,
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
  138: multipleActiveSkills,
  // 140: enhanceOrbsMany,
  // 141: randomOrbSpawn,
  // 142: selfAttributeChange,
  // 143: scalingAttackFromTeamHp, // This doesn't exist in NA.
  144: scalingAttackFromTeam,
  // 145: scalingRecoveryFromTeam,
  146: haste,
  // 152: lockOrbs,
  // 153: enemyAttributeChange,
  // 154: multiOrbChange,
  156: effectFromAwakeningCount,
  160: addCombos,
  161: trueGravity,
  // 172: unlockOrbs,
  // 173: voidAbsorb,
  // 176: orbSpawnPattern,
  // 179: healOverTime,
  // 180: increasedEnhancedOrbChance,
  // 184: noSkyfallActive,
  188: fixedDamageToOneEnemy, // This is the same as 55? Perhaps this runs faster?
  // 189: cheaterActiveLol, // Lkali + path trace.
  // 191: voidDamageVoid,
  195: pureSuicide,
  // 196: reduceUnmatchable,
};

const warnedAs = new Set();

function getActiveSkillEffects(activeSkillId) {
  const modelActiveSkill = vm.model.playerSkills[activeSkillId];
  if (!(modelActiveSkill.internalEffectId in ACTIVE_SKILL_GENERATORS)) {
    if (!warnedAs.has(activeSkillId)) {
      console.log(`Active Effect ${activeSkillId} of type ${modelActiveSkill.internalEffectId} not implemented.`);
      warnedAs.add(activeSkillId);
    }
    return copyBaseActive();
  }
  return ACTIVE_SKILL_GENERATORS[modelActiveSkill.internalEffectId](
      modelActiveSkill.internalEffectArguments);
}