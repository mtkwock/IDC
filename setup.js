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
// const COLOR_ORDER = 'rbgldhjpmou';
const COLORS = 'rbgldhjpmou';

function idxsFromBits(bits) {
  const idxs = [];
  for (let idx = 0; bits >> idx; idx++) {
    if (bits >> idx & 1) {
      idxs.push(idx);
    }
  }
  return idxs;
}

const BORDER_COLOR = '1px solid white';

const Attribute = {
  FIRE: 0,
  WATER: 1,
  WOOD: 2,
  LIGHT: 3,
  DARK: 4,
};

const AttributeToName = {
  0: 'Fire',
  1: 'Water',
  2: 'Wood',
  3: 'Light',
  4: 'Dark',
};
AttributeToName[-1] = 'Fixed';

const TypeToName = {
  0: 'Evo',
  1: 'Balanced',
  2: 'Physical',
  3: 'Healer',
  4: 'Dragon',
  5: 'God',
  6: 'Attacker',
  7: 'Devil',
  8: 'Machine',
  9: 'UNKNOWN1',
  10: 'UNKNOWN2',
  11: 'UNKNOWN3',
  12: 'Awakening',
  13: 'UNKNOWN4',
  14: 'Enhanced',
  15: 'Redeemable',
};
TypeToName[-1] = 'None';

// 11x 1-slot Latents
// 22 2-slot
const Latent = {
  HP: 0, ATK: 1, RCV: 2,
  TIME: 3,
  AUTOHEAL: 4,
  RESIST_FIRE: 5, RESIST_WATER: 6, RESIST_WOOD: 7,
  RESIST_LIGHT: 8, RESIST_DARK: 9,
  SDR: 10,
  ALL_STATS: 11,
  EVO: 12, AWOKEN: 13, ENHANCED: 14, REDEEMABLE: 15,

  GOD: 16, DRAGON: 17, DEVIL: 18, MACHINE: 19,
  BALANCED: 20, ATTACKER: 21, PHYSICAL: 22, HEALER: 23,

  HP_PLUS: 24, ATK_PLUS: 25, RCV_PLUS: 26,
  TIME_PLUS: 27,
  RESIST_FIRE_PLUS: 28,
  RESIST_WATER_PLUS: 29,
  RESIST_WOOD_PLUS: 30,
  RESIST_LIGHT_PLUS: 31,
  RESIST_DARK_PLUS: 32,
};

// These awakenings cost 2 slots.
const LatentSuper = new Set([
  Latent.EVO, Latent.AWOKEN, Latent.ENHANCED, Latent.REDEEMABLE,
  Latent.GOD, Latent.DRAGON, Latent.DEVIL, Latent.MACHINE,
  Latent.BALANCED, Latent.ATTACKER, Latent.PHYSICAL, Latent.HEALER,

  Latent.ALL_STATS, Latent.HP_PLUS, Latent.ATK_PLUS,
  Latent.RCV_PLUS, Latent.TIME_PLUS,
  Latent.RESIST_FIRE_PLUS, Latent.RESIST_WATER_PLUS, Latent.RESIST_WOOD_PLUS,
  Latent.RESIST_LIGHT_PLUS, Latent.RESIST_DARK_PLUS,
]);

const IdcAwakening = {
  HP: 1, ATK: 2, RCV: 3,
  RESIST_FIRE: 4, RESIST_WATER: 5, RESIST_WOOD: 6, RESIST_LIGHT: 7, RESIST_DARK: 8,
  AUTOHEAL: 9,
  RESIST_BIND: 10, RESIST_BLIND: 11, RESIST_JAMMER: 12, RESIST_POISON: 13,
  OE_FIRE: 14, OE_WATER: 15, OE_WOOD: 16, OE_LIGHT: 17, OE_DARK: 18,
  TIME: 19,
  RECOVER_BIND: 20,
  SKILL_BOOST: 21,
  ROW_FIRE: 22, ROW_WATER: 23, ROW_WOOD: 24, ROW_LIGHT: 25, ROW_DARK: 26,
  TPA: 27,
  SBR: 28,
  OE_HEART: 29,
  MULTIBOOST: 30,
  DRAGON: 31, GOD: 32, DEVIL: 33, MACHINE: 34,
  BALANCED: 35, ATTACKER: 36, PHYSICAL: 37, HEALER: 38,
  EVO: 39, AWAKENING: 40, ENHANCED: 41, REDEEMABLE: 42,
  COMBO_7: 43,
  GUARD_BREAK: 44,
  BONUS_ATTACK: 45,
  TEAM_HP: 46, TEAM_RCV: 47,
  VDP: 48,
  AWOKEN_ASSIST: 49,
  BONUS_ATTACK_SUPER: 50,
  SKILL_CHARGE: 51,
  RESIST_BIND_PLUS: 52,
  TIME_PLUS: 53,
  RESIST_CLOUD: 54, RESIST_TAPE: 55,
  SKILL_BOOST_PLUS: 56,
  HP_GREATER: 57, HP_LESSER: 58,
  L_GUARD: 59, L_UNLOCK: 60,
  COMBO_10: 61, COMBO_ORB: 62,
  VOICE: 63,
  SOLOBOOST: 64,
  HP_MINUS: 65, ATK_MINUS: 66, RCV_MINUS: 67,
  RESIST_BLIND_PLUS: 68, RESIST_POISON_PLUS: 69, RESIST_JAMMER_PLUS: 70,
  JAMMER_BOOST: 71, POISON_BOOST: 72,
};

const AwakeningToPlusAwakening = new Map([
  [IdcAwakening.SKILL_BOOST, IdcAwakening.SKILL_BOOST_PLUS],
  [IdcAwakening.TIME, IdcAwakening.TIME_PLUS],
  [IdcAwakening.RESIST_BIND, IdcAwakening.RESIST_BIND_PLUS],
  [IdcAwakening.RESIST_BLIND, IdcAwakening.RESIST_BLIND_PLUS],
  [IdcAwakening.RESIST_JAMMER, IdcAwakening.RESIST_JAMMER_PLUS],
  [IdcAwakening.RESIST_POISON, IdcAwakening.RESIST_POISON_PLUS],
]);

const PlusAwakeningMultiplier = new Map([
  [IdcAwakening.SKILL_BOOST_PLUS, 2],
  [IdcAwakening.TIME_PLUS, 2],
  [IdcAwakening.RESIST_BIND_PLUS, 2],
  [IdcAwakening.RESIST_BLIND_PLUS, 5],
  [IdcAwakening.RESIST_JAMMER_PLUS, 5],
  [IdcAwakening.RESIST_POISON_PLUS, 5],
]);

const AwakeningToName = [
  'NULL',
  'HP', 'ATK', 'RCV', 'Resist Fire', 'Resist Water', 'Resist Wood', 'Resist Light', 'Resist Dark',
  'Autoheal', 'Resist Bind', 'Resist Blind', 'Resist Jammer', 'Resist Poison',
  'Fire OE', 'Water OE', 'Wood OE', 'Light OE', 'Dark OE',
  'Time',
  'Recover Bind',
  'Skill Boost',
  'Fire Row', 'Water Row', 'Wood Row', 'Light Row', 'Dark Row',
  'TPA', 'Skill-Bind Resist', 'Heart OE', 'Multiboost',
  'Dragon Killer', 'God Killer', 'Devil Killer', 'Machine Killer',
  'Balanced Killer', 'Attacker Killer', 'Physical Killer', 'Healer Killer',
  'Evo Killer', 'Awakening Killer', 'Enhanced Killer', 'Redeemable Killer',
  'Enhanced Combo', 'Guard Break', 'Bonus Attack', 'Team HP+', 'Team RCV+',
  'Damage Void Piercer', 'Awoken Assist', 'Super Bonus Attack', 'Skill Charge',
  'Resist Bind+', 'Time+', 'Resist Cloud', 'Resist Immobility', 'Skill Boost+',
  '>=80% Enhace', '<=50% Enhance', 'L-Guard', 'L-Unlock', 'Enhanced Combo+',
  'Combo Orb', 'Voice', 'Soloboost', 'HP-', 'ATK-', 'RCV-',
  'Resist Blind+', 'Resist Poison+', 'Resist Jammer+',
  'Jammer Blessing', 'Poison Blessing',
];

class DamagePing {
  constructor(source, attribute, isSub=false) {
    this.source = source;
    this.attribute = attribute;
    this.amount = 0;
    this.vdp = false;
    this.isSub = isSub;
    // Damage done to monster after considering attr, type, killers, resists, voids, absorbs.
    this.rawDamage = null;
    // Damage done to monster after considering max HP and min HP.
    this.actualDamage = null;
  }

  add(amount) {
    this.amount += amount;
  }

  multiply(multiplier, round = Round.NEAREST) {
    this.amount = round(this.amount * multiplier);
  }
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Round = {
  UP: Math.ceil,
  NEAREST: Math.round,
  DOWN: Math.floor,
  NONE: (a) => a,
};

