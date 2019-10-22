/**
 * Written by Scarlet#1115 on Discord.
 * Please do not redistribute yet... This is stil in Alpha.
 *
 * NOTE: Only do this if you trust the creator of this file.
 *   Doing this in general can be dangrous if you don't trust
 *   the source of the code.
 *
 * This is currently meant to be pasted into console in ilmina.com.
 * 1) To open console, Right-Click anywhere on the page and click "Inspect" or "Inspect Element".
 * 2) At the top of the window or pane that was opened, click the Console tab.
 * 3) Copy this entire file and paste into Console and press "Enter."
 * 4) The tool will appear at the bottom of the page.
 *
 * To use
 * Change Monster:
 * 1) Click on the monster you wish to change on the team.
 * 2) On the left pane in the Monster field, change the ID to the monster you want.
 * 3) The left pane will control all aspects of the monster.
 *    I hope these are self-explanatory.  If not, please let me know.
 * View Monster Stats
 * 1) Click the [DEBUG] button above the monster editing pane.
 *    This will print the monster's stats in solo and multiplay in the console.
 *    NOTE: If you find an inconsistency with the game, please let me know.
 *          I want to make sure my rounding and calculations are correct.
 */

// alert('I\'ll show you the ropes!');
console.log('Ropes being shown');

if (!vm) {
  console.error('VM not yet loaded!');
}

{

const Attribute = {
  FIRE: 0,
  WATER: 1,
  WOOD: 2,
  LIGHT: 3,
  DARK: 4,
}

const AWAKENING_SCALE = 0.7;
const MONSTER_AWAKENING_SCALE = 0.43;
const AWAKENING_NUMBERS = '⓪①②③④⑤⑥⑦⑧⑨';
let teamScaling = 0.6;

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

const LATENT_HP = new Map([
  [Latent.HP, 0.015],
  [Latent.HP_PLUS, 0.045],
  [Latent.ALL_STATS, 0.03],
]);

const LATENT_ATK = new Map([
  [Latent.ATK, 0.01],
  [Latent.ATK_PLUS, 0.03],
  [Latent.ALL_STATS, 0.02],
]);

const LATENT_RCV = new Map([
  [Latent.RCV, 0.1],
  [Latent.HP_PLUS, 0.3],
  [Latent.ALL_STATS, 0.2],
]);

const LATENT_OTHER = new Map([
  [Latent.AUTOHEAL, 0.15],
  [Latent.TIME, 0.05],
  [Latent.TIME_PLUS, 0.12],
  [Latent.RESIST_FIRE, 0.01],
  [Latent.RESIST_WATER, 0.01],
  [Latent.RESIST_WOOD, 0.01],
  [Latent.RESIST_LIGHT, 0.01],
  [Latent.RESIST_DARK, 0.01],
  [Latent.RESIST_FIRE_PLUS, 0.01],
  [Latent.RESIST_WATER_PLUS, 0.01],
  [Latent.RESIST_WOOD_PLUS, 0.01],
  [Latent.RESIST_LIGHT_PLUS, 0.01],
  [Latent.RESIST_DARK_PLUS, 0.01],
]);

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

const AWAKENING_BONUS = new Map([
  [IdcAwakening.HP, 500],
  [IdcAwakening.HP_MINUS, -5000],
  [IdcAwakening.ATK, 100],
  [IdcAwakening.ATK_MINUS, -1000],
  [IdcAwakening.RCV, 200],
  [IdcAwakening.RCV, -2000],

]);

// TODO: Put all ids as constants in here so that I can access them reliably.
const Id = {
  CONTAINER: 'idc-container',
};


function annotateMonsterScaling() {
  const VALID_SCALES = new Set([0.7, 1.0, 1, 1.5]);
  for (const id in vm.model.cards) {
    const c = vm.model.cards[id];
    const [hpGrowth, atkGrowth, rcvGrowth] = [c.unknownData[2], c.unknownData[3], c.unknownData[4]];
    if (!VALID_SCALES.has(hpGrowth)) {
      console.warn(`Invalid scaling found! ${hpGrowth} Monster: ${id}`);
    } else {
      c.hpGrowth = hpGrowth;
    }
    if (!VALID_SCALES.has(atkGrowth)) {
      console.warn(`Invalid scaling found! ${atkGrowth} Monster: ${id}`);
    } else {
      c.atkGrowth = atkGrowth;
    }
    if (!VALID_SCALES.has(rcvGrowth)) {
      console.warn(`Invalid scaling found! ${rcvGrowth} Monster: ${id}`);
    } else {
      c.rcvGrowth = rcvGrowth;
    }
  }
}

function validatePlus(value) {
  if (value < 0 || value > 99) {
    console.error("Invalid Plus value: " + String(value));
    return 0;
  }
  return Math.round(value);
}

class KeyCounter {
  constructor(counts = undefined) {
    this.counts = counts || {};
  }

  count(key, add = 1) {
    if (!(key in this.counts)) {
      this.counts[key] = add;
    } else {
      this.counts[key] += add;
    }
  }

  get(key) {
    return key in this.counts ? this.counts[key] : 0;
  }
}


function calcScaleStat(card, max, min, level, growth) {
  if (level < 100) {
    const diff = max - min;
    const frac = (level - 1) / (card.maxLevel - 1);
    const added = Math.round(Math.pow(frac, growth) * diff);
    return min + added;
  } else {
    const multiplier = 1 + card.limitBreakStatGain / 100 * (level - 99) / 11;
    return Math.round(max * multiplier);
  }
}


class MonsterInstance {
  constructor(id = null) {
    // ID of this monster according to Ilmina.
    this.id = id;

    // If attribute is to >-1, this monster's attribute is changed
    // to that attribute via an active.
    this.attribute = -1;
    this.level = 1;
    this.awakenings = 0;
    this.latents = [];
    this.superAwakeningIdx = -1;
    this.hpPlus = 0;
    this.atkPlus = 0;
    this.rcvPlus = 0;

    this.inheritId = -1;
    this.inheritLevel = 1;
    this.inheritPlussed = false;

    this.card = null;

    if (this.id) {
      this.setId(this.id);
    }
  }

  toJson() {
    return {
      id: this.id,
      level: this.level,
      awakenings: this.awakenings,
      latents: [...this.latents],
      superAwakeningIdx: this.superAwakeningIdx,
      hpPlus: this.hpPlus,
      atkPlus: this.atkPlus,
      rcvPlus: this.rcvPlus,
      inheritId: this.inheritId,
      inheritLevel: this.inheritLevel,
      inheritPlussed: this.inheritPlussed,
    }
  }

  copyFrom(otherInstance) {
    this.id = otherInstance.id;
    this.level = otherInstance.level;
    this.awakenings = otherInstance.awakenings;
    this.latents = [...otherInstance.latents];
    this.superAwakeningIdx = otherInstance.superAwakeningIdx;
    this.hpPlus = otherInstance.hpPlus;
    this.atkPlus = otherInstance.atkPlus;
    this.rcvPlus = otherInstance.rcvPlus;

    this.inheritId = otherInstance.inheritId;
    this.inheritLevel = otherInstance.inheritLevel;
    this.inheritPlussed = otherInstance.inheritPlussed;
    if (otherInstance.id) {
      this.setId(otherInstance.id);
    }
  }

  swap(otherInstance) {
    const temp = new MonsterInstance();
    temp.copyFrom(this);
    this.copyFrom(otherInstance);
    otherInstance.copyFrom(temp);
  }

  setId(value) {
    if (!(value in vm.model.cards)) {
      console.warn('Invalid monster id: ' + String(value));
      return;
    }
    this.id = value;
    const c = this.getCard();

    // If the level is above the max level of the new card OR
    // the level is maxed out from previously, set the level to c's max level.
    if (this.level > c.maxLevel && !c.isLimitBreakable ||
        !this.card || this.level == this.card.maxLevel && this.level < c.maxLevel) {
      this.setLevel(c.maxLevel);
    }

    // If the awakening level is above the max level of the new card OR
    // the awakening level is maxed out from previously, set awakeing level to
    // c's max awakening level.
    if (this.awakenings > c.awakenings.length ||
        !this.card || this.awakenings == this.card.awakenings.length) {
      this.awakenings = c.awakenings.length;
    }

    // Attempt to copy the current latents.
    const latentCopy = this.latents;
    this.latents = [];
    for (const latent of latentCopy) {
      this.addLatent(latent);
    }

    // If c has the same SA as our current one, keep that.
    if (this.superAwakeningIdx > -1 && this.card) {
      const currentSa = this.card.superAwakenings[this.superAwakeningIdx];
      if (c.superAwakenings.includes(currentSa)) {
        this.superAwakeningIdx = c.superAwakenings.indexOf(currentSa);
      } else {
        this.superAwakeningIdx = -1;
      }
    } else {
      this.superAwakeningIdx = -1;
    }

    if (!CardAssets.canPlus(c)) {
      this.setHpPlus(0);
      this.setAtkPlus(0);
      this.setRcvPlus(0);
      this.inheritId = -1;
    } else {
      this.setHpPlus(99);
      this.setAtkPlus(99);
      this.setRcvPlus(99);
    }

    this.card = c;
  }

  addLatent(latent) {
    const c = this.getCard();
    // Only monsters capable of taking latent killers can take latents.
    if (!c.latentKillers.length) {
      return;
    }
    const totalSlots = [...this.latents, latent].reduce((total, latent) => {
      return total + (LatentSuper.has(latent) ? 2 : 1);
    }, 0);
    if (totalSlots > 6) return false;
    if (latent >= 16 && latent <= 23 && !c.latentKillers.includes(latent - 11)) {
      return;
    }
    this.latents.push(latent);
  }

  removeLatent(latentIdx) {
    if (latentIdx >= this.latents.length) {
      console.warn(`latent index out of range: ${latentIdx}`)
      return;
    }
    this.latents = [...this.latents.slice(0, latentIdx), ...this.latents.slice(latentIdx + 1)];
  }

  setLevel(value) {
    value = Number(value);
    if (value < 0 || value > 110) {
      console.warn('Invalid monster level: ' + String(value));
      return;
    }
    const c = this.getCard();
    if (value > c.maxLevel && !c.isLimitBreakable) {
      console.warn('Monster level exceeds max level: ' + String(value));
      return;
    }
    this.level = Math.round(value);
  }

  setHpPlus(value) {
    this.hpPlus = validatePlus(value);
  }

  setAtkPlus(value) {
    this.atkPlus = validatePlus(value);
  }

  setRcvPlus(value) {
    this.rcvPlus = validatePlus(value);
  }

  getCard() {
    return vm.model.cards[this.id];
  }

  getInheritCard() {
    if (this.inheritId == -1) {
      return null;
    }
    return vm.model.cards[this.inheritId];
  }

  isSuperAwakeningActive(isMultiplayer) {
    return (!isMultiplayer && this.level > 99 &&
      this.hpPlus == 99 && this.atkPlus == 99 && this.rcvPlus > 99);
  }

  /**
   * Gets an array of awakenings filtered by the given filterSet.
   * @param {?bool} isMultiplayer Whether this is multiplayer or not.
   * @param {?Set} filterSet A set to restrict awakenings to.
   */
  getAwakenings(isMultiplayer = false, filterSet = undefined) {
    let filterFn = (awakening) => true;
    if (filterSet) {
      filterFn = (awakening) => filterSet.has(awakening);
    }
    const c = this.getCard();
    let awakenings = c.awakenings.slice(0, this.awakenings);
    if (this.superAwakeningIdx > -1 && this.isSuperAwakeningActive(isMultiplayer)) {
      awakenings.push(c.superAwakenings[this.superAwakeningIdx]);
    }
    if (this.inheritId > -1 && vm.model.cards[this.inheritId].awakenings[0] == IdcAwakening.AWOKEN_ASSIST) {
      for (const awakening of vm.model.cards[this.inheritId].awakenings) {
        awakenings.push(awakening);
      }
    }
    return awakenings.filter(filterFn);
  }

  countAwakening(awakening, isMultiplayer = false) {
    return this.getAwakenings(isMultiplayer, new Set([awakening])).length;
  }

  getLatents(filterSet = undefined) {
    let filterFn = (awakening) => true;
    if (filterSet) {
      filterFn = (awakening) => filterSet.has(awakening);
    }
    return this.latents.filter(filterFn);
  }

  calcScaleStat(max, min, growth) {
    const card = this.getCard();
    return calcScaleStat(card, max, min, this.level, growth);
  }

  getHp(isMultiplayer = true, awakeningsActive = true) {
    const c = this.getCard();
    let hp = this.calcScaleStat(c.maxHp, c.minHp, c.hpGrowth);
    if (awakeningsActive) {
      const latentMultiplier = this
          .getLatents(new Set([Latent.HP, Latent.HP_PLUS, Latent.ALL_STATS]))
          .reduce((total, latent) => total + LATENT_HP.get(latent), 1);
      hp *= latentMultiplier;
      const awakeningAdder = this
          .getAwakenings(isMultiplayer, new Set([IdcAwakening.HP, IdcAwakening.HP_MINUS]))
          .reduce((total, awakening) => total + AWAKENING_BONUS.get(awakening), 0);
      hp += awakeningAdder;      
    }

    const plusAdder = this.hpPlus * 10;
    hp += plusAdder;

    const inherit = this.getInheritCard();
    if (inherit && c.attribute == inherit.attribute) {
      const inheritBonus = calcScaleStat(
        inherit, inherit.maxHp, inherit.minHp, this.inheritLevel, inherit.hpGrowth) + (this.inheritPlussed ? 990 : 0);
      hp += Math.round(inheritBonus * 0.1);
    }

    if (isMultiplayer) {
      const multiboostMultiplier = 1.5 ** this.countAwakening(IdcAwakening.MULTIBOOST, isMultiplayer);
      hp *= multiboostMultiplier;
    }

    return Math.max(Math.round(hp), 1);
  }

  getAtk(isMultiplayer = true, awakeningsActive = true) {
    const c = this.getCard();
    let atk = this.calcScaleStat(c.maxAtk, c.minAtk, c.atkGrowth);
    if (awakeningsActive) {
      const latentMultiplier = this
          .getLatents(new Set([Latent.ATK, Latent.ATK_PLUS, Latent.ALL_STATS]))
          .reduce((total, latent) => total + LATENT_ATK.get(latent), 1);
      atk *= latentMultiplier;
      const awakeningAdder = this
          .getAwakenings(isMultiplayer, new Set([IdcAwakening.ATK, IdcAwakening.ATK_MINUS]))
          .reduce((total, awakening) => total + AWAKENING_BONUS.get(awakening), 0);
      atk += awakeningAdder;      
    }

    const plusAdder = this.atkPlus * 5;
    atk += plusAdder;

    const inherit = this.getInheritCard();
    if (inherit && c.attribute == inherit.attribute) {
      const inheritBonus = calcScaleStat(
        inherit, inherit.maxAtk, inherit.minAtk, this.inheritLevel, inherit.atkGrowth) + (this.inheritPlussed ? 495 : 0);
      atk += Math.round(inheritBonus * 0.05);
    }

    if (isMultiplayer && awakeningsActive) {
      const multiboostMultiplier = 1.5 ** this.countAwakening(IdcAwakening.MULTIBOOST, isMultiplayer);
      atk *= multiboostMultiplier;
    }

    return Math.max(Math.round(atk), 1);
  }

  getRcv(isMultiplayer = true, awakeningsActive = true) {
    const c = this.getCard();
    let rcv = this.calcScaleStat(c.maxRcv, c.minRcv, c.rcvGrowth);
    if (awakeningsActive) {
      const latentMultiplier = this
          .getLatents(new Set([Latent.RCV, Latent.RCV_PLUS, Latent.ALL_STATS]))
          .reduce((total, latent) => total + LATENT_RCV.get(latent), 1);
      rcv *= latentMultiplier;
      const awakeningAdder = this
          .getAwakenings(isMultiplayer, new Set([IdcAwakening.RCV, IdcAwakening.RCV_MINUS]))
          .reduce((total, awakening) => total + AWAKENING_BONUS.get(awakening), 0);
      rcv += awakeningAdder;      
    }

    const plusAdder = this.rcvPlus * 3;
    rcv += plusAdder;

    const inherit = this.getInheritCard();
    if (inherit && c.attribute == inherit.attribute) {
      const inheritBonus = calcScaleStat(
        inherit, inherit.maxRcv, inherit.minRcv, this.inheritLevel, inherit.rcvGrowth) + (this.inheritPlussed ? 297 : 0);
      rcv += Math.round(inheritBonus * 0.15);
    }

    if (isMultiplayer && awakeningsActive) {
      const multiboostMultiplier = 1.5 ** this.countAwakening(IdcAwakening.MULTIBOOST, isMultiplayer);
      rcv *= multiboostMultiplier;
    }

    return Math.round(rcv);
  }

  createInheritIcon(scaling = teamScaling) {
    const inheritIcon = document.createElement('table');
    inheritIcon.style.height = `${51 * scaling}px`;
    const singleRow = document.createElement('tr');
    const iconCell = document.createElement('td');

    const inheritEl = document.createElement('a');
    inheritEl.className = 'idc-monster-icon-inherit';
    inheritEl.style.display = 'inline-block';
    inheritEl.style.backgroundRepeat = 'no-repeat';
    inheritEl.style.position = 'relative';

    const inheritAttributeEl = document.createElement('a');
    inheritAttributeEl.className = 'idc-monster-icon-inherit-attribute';
    inheritAttributeEl.style.display = 'inline-block';
    inheritAttributeEl.style.backgroundRepeat = 'no-repeat';
    inheritEl.appendChild(inheritAttributeEl);

    const inheritSubattributeEl = document.createElement('a');
    inheritSubattributeEl.className = 'idc-monster-icon-inherit-subattribute';
    inheritSubattributeEl.style.display = 'inline-block';
    inheritSubattributeEl.style.backgroundRepeat = 'no-repeat';
    inheritAttributeEl.appendChild(inheritSubattributeEl);

    iconCell.appendChild(inheritEl);
    singleRow.appendChild(iconCell);

    const detailsCell = document.createElement('td');
    // ID, level, plussed
    const inheritIdEl = document.createElement('div');
    inheritIdEl.className = 'idc-monster-icon-inherit-id';
    inheritIdEl.style.display = 'inline-block';
    inheritIdEl.style.fontSize = `${13 * scaling}`;
    detailsCell.appendChild(inheritIdEl);

    const inheritLevelEl = document.createElement('div');
    inheritLevelEl.className = 'idc-monster-icon-inherit-level';
    inheritLevelEl.style.display = 'inline-block';
    inheritLevelEl.style.fontSize = `${13 * scaling}`;
    detailsCell.appendChild(document.createElement('br'));
    detailsCell.appendChild(inheritLevelEl);

    const inheritPlusEl = document.createElement('div');
    inheritPlusEl.className = 'idc-monster-icon-inherit-plus';
    inheritPlusEl.style.display = 'inline-block';
    inheritPlusEl.style.fontSize = `${13 * scaling}`;
    detailsCell.appendChild(document.createElement('br'));
    detailsCell.appendChild(inheritPlusEl);

    singleRow.appendChild(detailsCell);
    inheritIcon.appendChild(singleRow);

    return inheritIcon;
  }

  updateInheritIcon(monsterEl, scaling = teamScaling) {
    const inheritEl = monsterEl.getElementsByClassName('idc-monster-icon-inherit')[0];
    const inheritIdEl = monsterEl.getElementsByClassName('idc-monster-icon-inherit-id')[0];
    const inheritLevelEl = monsterEl.getElementsByClassName('idc-monster-icon-inherit-level')[0];
    const inheritPlusEl = monsterEl.getElementsByClassName('idc-monster-icon-inherit-plus')[0];
    if (this.inheritId >= 0) {
      const inheritCard = this.inheritId > 0 ? this.getInheritCard() : vm.model.cards[4014];
      const inheritAttributeEl = inheritEl.getElementsByClassName('idc-monster-icon-inherit-attribute')[0];
      const inheritSubattributeEl = inheritEl.getElementsByClassName('idc-monster-icon-inherit-subattribute')[0];
      const descriptionInherit = CardAssets.getIconImageData(inheritCard);
      const descriptionInheritAttribute = CardUiAssets.getIconFrame(inheritCard.attribute, false, vm);
      const descriptionInheritSubattribute = CardUiAssets.getIconFrame(inheritCard.subattribute, true, vm);
      const halfWidth = `${51 * scaling}px`;
      inheritEl.style.width = halfWidth;
      inheritAttributeEl.style.width = halfWidth;
      inheritSubattributeEl.style.width = halfWidth;
      inheritEl.style.height = halfWidth;
      inheritAttributeEl.style.height = halfWidth;
      inheritSubattributeEl.style.height = halfWidth;
      inheritEl.style.backgroundSize = `${descriptionInherit.baseWidth / 2 * scaling}px ${descriptionInherit.baseHeight / 2 * scaling}px`;
      inheritAttributeEl.style.backgroundSize = `${512 / 2 * scaling}px ${256 / 2 * scaling}px`;
      inheritEl.style.backgroundImage = `url(${descriptionInherit.url})`;
      inheritAttributeEl.style.backgroundImage = `url(${descriptionInheritAttribute.url})`;
      inheritEl.style.backgroundPosition = `-${descriptionInherit.offsetX * 0.5 * scaling}px -${descriptionInherit.offsetY * 0.5 * scaling}px`;
      inheritAttributeEl.style.backgroundPosition = `-${descriptionInheritAttribute.offsetX * 0.5 * scaling}px -${descriptionInheritAttribute.offsetY * 0.5 * scaling}px`;
      inheritEl.style.visibility = 'visible';
      if (descriptionInheritSubattribute) {
        inheritSubattributeEl.style.backgroundSize = `${512 / 2 * scaling}px ${256 / 2 * scaling}px`;
        inheritSubattributeEl.style.backgroundImage = `url(${descriptionInheritSubattribute.url})`;
        inheritSubattributeEl.style.backgroundPosition = `-${descriptionInheritSubattribute.offsetX * 0.5 * scaling}px -${descriptionInheritSubattribute.offsetY * 0.5 * scaling}px`;      
        inheritSubattributeEl.style.visibility = 'visible';
      } else {
        inheritSubattributeEl.style.visibility = 'hidden';
      }

      inheritIdEl.innerText = this.inheritId;
      inheritLevelEl.innerText = `Lv${this.inheritLevel}`
      inheritPlusEl.innerText = this.inheritPlussed ? '+297' : '+0';

    } else {
      inheritEl.style.visibility = 'hidden';
      inheritIdEl.innerText = '';
      inheritLevelEl.innerText = '';
      inheritPlusEl.innerText = '';
    }
  }

  createLatentsIcon(scaling = teamScaling) {
    const latentsEl = document.createElement('div');
    latentsEl.style.height = `${36 * scaling * MONSTER_AWAKENING_SCALE}px`;
    // const singleRow = document.createElement('tr');

    for (let i = 0; i < 6; i++) {
      // const cell = document.createElement('td');
      const latentEl = document.createElement('a');
      latentEl.className = `idc-monster-icon-latent-${i}`;
      latentEl.style.height = `${36 * scaling * MONSTER_AWAKENING_SCALE}px`;
      latentEl.style.display = 'inline-block';
      latentEl.style.backgroundSize = `${400 * scaling * MONSTER_AWAKENING_SCALE}px ${580 * scaling * MONSTER_AWAKENING_SCALE}px`
      latentEl.style.backgroundImage = 'url(https://s3.amazonaws.com/ilmina/custom/eggs.png)';
      latentEl.style.backgroundRepeat = 'no-repeat';
      // Position should be remapped whenever the monster changes.
      // cell.appendChild(latentEl);
      // singleRow.appendChild(cell);
      latentsEl.appendChild(latentEl);
    }
    // latentsEl.appendChild(singleRow);
    this.updateLatentsIcon(latentsEl, scaling);
    return latentsEl;
  }

  updateLatentsIcon(monsterEl, scaling = teamScaling) {
    const fullScale = scaling * MONSTER_AWAKENING_SCALE;
    for (let i = 0; i < 6; i++) {
      const latentEl = monsterEl.getElementsByClassName(`idc-monster-icon-latent-${i}`)[0];
      if (i >= this.latents.length) {
        latentEl.style.opacity = '0';
        latentEl.style.width = '0.1px';
        continue;
      }
      latentEl.style.opacity = '1';
      const latent = this.latents[i];
      let offsetX, offsetY;
      if (latent < 11) {
        offsetX = (latent * 36) * fullScale;
        offsetY = 36 * fullScale;
        latentEl.style.width = `${36 * fullScale}px`;
      } else {
        const idx = latent - 11;
        offsetX = ((idx % 5) * 80 + 2) * fullScale;
        offsetY = (Math.floor(idx / 5) + 2) * 36 * fullScale;
        latentEl.style.width = `${76 * fullScale}px`;
      }
      latentEl.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
    }
  }

  createIcon(playerMode = 1, scaling = teamScaling) {
    const card = this.id ? this.getCard() : vm.model.cards[4014];
    const descriptionMonster = CardAssets.getIconImageData(card);
    const monsterEl = document.createElement('a');
    monsterEl.className = 'idc-monster-icon';
    monsterEl.style.display = 'inline-block';
    monsterEl.style.backgroundRepeat = 'no-repeat';

    const attributeEl = document.createElement('a');
    attributeEl.className = 'idc-monster-icon-attribute';
    attributeEl.style.display = 'inline-block';
    attributeEl.style.backgroundRepeat = 'no-repeat';
    monsterEl.appendChild(attributeEl);

    const subattributeEl = document.createElement('a');
    subattributeEl.className = 'idc-monster-icon-subattribute';
    subattributeEl.style.display = 'inline-block';
    subattributeEl.style.backgroundRepeat = 'no-repeat';
    attributeEl.appendChild(subattributeEl);

    // Plusses, Awakenings, Monster Level, Monster ID, Latents, Super Awakening.
    const infoContainer = document.createElement('table');
    infoContainer.setAttribute(
      'style', 'position: relative; top: -100%; height: 100%; left: 2.5%; width: 95%;')
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      const row = document.createElement('tr');
      if (rowIdx < 2) {
        row.style.height = '34%';
      }
      for (let colIdx = 0; colIdx < 2; colIdx++) {
        const cell = document.createElement('td');
        if (rowIdx == 0 && colIdx == 0) {
          // Plusses.
          const plusEl = document.createElement('div');
          plusEl.className = 'idc-monster-icon-plus';
          plusEl.setAttribute('style',
              `display: inline-block; color: yellow; font-size: ${20 * scaling}; ` +
              'text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000; ' +
              `position: relative; font-weight: ${800 * scaling}`);
          cell.appendChild(plusEl);
        } else if (rowIdx == 0 && colIdx == 1) {
          // Awakenings.
          const awakeningEl = document.createElement('div');
          awakeningEl.className = 'idc-monster-icon-awakening';
          awakeningEl.setAttribute('style', 
              'display: inline-block; position: relative; text-align: right; ' +
              `font-size: ${24 * scaling}; color: yellow; font-weight: ${800 * scaling}; width: 90%; ` +
              'text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;');
          // cell.style.float = 'right';

          cell.appendChild(awakeningEl);
        } else if (rowIdx == 1 && colIdx == 1) {
          // Super Awakening
          const saScale = 0.50;
          const superAwakeningEl = document.createElement('a');
          superAwakeningEl.className = 'idc-monster-icon-sa';
          superAwakeningEl.style.display = 'inline-block';
          superAwakeningEl.style.width = `${36 * saScale}px`;
          superAwakeningEl.style.height = `${36 * saScale}px`;
          superAwakeningEl.style.backgroundSize = `${400 * saScale}px ${580 * saScale}px`;
          superAwakeningEl.style.backgroundImage = 'url(https://s3.amazonaws.com/ilmina/custom/eggs.png)';
          superAwakeningEl.style.backgroundRepeat = 'no-repeat';
          superAwakeningEl.style.position = 'relative';
          cell.style.float = 'right';
          cell.appendChild(superAwakeningEl); 
        } else if (rowIdx == 2 && colIdx == 0) {
          // Level
          const levelEl = document.createElement('div');
          levelEl.className = 'idc-monster-icon-level';
          levelEl.setAttribute('style',
              `display: inline-block; position: relative; font-size: ${13 * scaling}; font-weight: ${800 * scaling}; `+
              'text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;')
          cell.appendChild(levelEl);
          cell.style.verticalAlign = 'bottom';
        } else if (rowIdx == 2 && colIdx == 1) {
          // ID
          const idEl = document.createElement('div');
          idEl.className = 'idc-monster-icon-id';
          idEl.setAttribute('style',
              'display: inline-block; color: white; position: relative; ' +
              `font-size: ${13 * scaling}; font-weight: ${530 * scaling}; text-align: right; ` +
              'text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;');
          cell.appendChild(idEl);
          cell.style.verticalAlign = 'bottom';
        }
        row.appendChild(cell);
      }
      infoContainer.appendChild(row);
    }
    monsterEl.appendChild(infoContainer);

    this.updateIcon(monsterEl, playerMode);

    return monsterEl;
  }

  updateIcon(monsterEl, playerMode = 1, scaling = teamScaling) {
    const card = this.id ? this.getCard() : vm.model.cards[4014];

    const fullWidth = `${102 * scaling}px`;

    const descriptionMonster = CardAssets.getIconImageData(card);
    monsterEl.style.width = fullWidth;
    monsterEl.style.height = fullWidth;
    monsterEl.style.backgroundSize = `${descriptionMonster.baseWidth * scaling}px ${descriptionMonster.baseHeight * scaling}px`;
    monsterEl.style.backgroundImage = `url(${descriptionMonster.url})`;
    monsterEl.style.backgroundPosition = `-${descriptionMonster.offsetX * scaling}px -${descriptionMonster.offsetY * scaling}px`;

    const attributeEl = monsterEl.getElementsByClassName('idc-monster-icon-attribute')[0];
    const descriptionAttribute = CardUiAssets.getIconFrame(card.attribute, false, vm);
    attributeEl.style.width = fullWidth;
    attributeEl.style.height = fullWidth;
    attributeEl.style.backgroundSize = `${512 * scaling}px ${256 * scaling}px`;
    attributeEl.style.backgroundImage = `url(${descriptionAttribute.url})`;
    attributeEl.style.backgroundPosition = `-${descriptionAttribute.offsetX * scaling}px -${descriptionAttribute.offsetY * scaling}px`;

    const descriptionSubattribute = CardUiAssets.getIconFrame(card.subattribute, true, vm);
    const subattributeEl = monsterEl.getElementsByClassName('idc-monster-icon-subattribute')[0];
    if (descriptionSubattribute) {
      subattributeEl.style.width = fullWidth;
      subattributeEl.style.height = fullWidth;
      subattributeEl.style.backgroundSize = `${512 * scaling}px ${256 * scaling}px`;
      subattributeEl.style.backgroundImage = `url(${descriptionSubattribute.url})`;
      subattributeEl.style.backgroundPosition = `-${descriptionSubattribute.offsetX * scaling}px -${descriptionSubattribute.offsetY * scaling}px`;      
      subattributeEl.style.visibility = 'visible';
    } else {
      subattributeEl.style.visibility = 'hidden';
    }

    // Plusses, Awakenings, Monster Level, Monster ID, Latents, Super Awakening.
    const plusEl = monsterEl.getElementsByClassName('idc-monster-icon-plus')[0];
    const totalPlus = this.hpPlus + this.atkPlus + this.rcvPlus;
    plusEl.innerText = `+${totalPlus}`;

    const awakeningEl = monsterEl.getElementsByClassName('idc-monster-icon-awakening')[0];
    if (this.awakenings > 0) {
      awakeningEl.innerText = AWAKENING_NUMBERS[this.awakenings]; // this.awakenings == card.awakenings.length ? '٭' : numbers[this.awakenings];
      awakeningEl.display = 'inline-block';
    } else {
      awakeningEl.display = 'none';
    }

    const superAwakeningEl = monsterEl.getElementsByClassName('idc-monster-icon-sa')[0];
    const superIconScale = 0.50;
    let awakening = 0;
    if (this.superAwakeningIdx < 0) {
        superAwakeningEl.style.display = 'none';
    } else {
      superAwakeningEl.style.display = 'inline-block';
      const awakening = card.superAwakenings[this.superAwakeningIdx];
      const [x, y] = getAwakeningOffsets(awakening);
      superAwakeningEl.style.backgroundPosition = `${x * superIconScale}px ${y * superIconScale}px`;

      if (this.level > 99 && totalPlus == 297 && playerMode == 1) {
        superAwakeningEl.style.opacity = '1.0';
      } else {
        superAwakeningEl.style.opacity = '0.5';
      }
    }
        
    const levelEl = monsterEl.getElementsByClassName('idc-monster-icon-level')[0];
    levelEl.innerText = `Lv${this.level}`;

    const idEl = monsterEl.getElementsByClassName('idc-monster-icon-id')[0];
    idEl.innerText = `${this.id}`;
  }

  getAttribute() {
    return this.attribute || this.getCard().attribute;
  }
}

MonsterInstance.fromJson = function(json) {
  monster = new MonsterInstance(json.id);
  monster.level = json.level || 1;
  monster.awakenings = json.awakenings || 0;
  monster.latents = [...(json.latents || [])];
  monster.superAwakeningIdx = json.superAwakeningIdx >= 0 ? json.superAwakeningIdx : -1;
  monster.hpPlus = json.hpPlus || 0;
  monster.atkPlus = json.atkPlus || 0;
  monster.inheritId = json.inheritId || -1;
  monster.inheritLevel = json.inheritLevel || 1;
  monster.inheritPlussed = json.inheritPlussed || false;
  return monster;
}

function testAnother() {
  const another = new MonsterInstance(2568);
  another.setLevel(110);
  another.inheritId = 4723;
  another.inheritPlussed = true;
  another.awakenings = 9;
  another.addLatent(Latent.TIME_PLUS); another.addLatent(Latent.DEVIL);
  another.addLatent(Latent.DEVIL);
  another.setHpPlus(99);
  another.setAtkPlus(99);
  another.setRcvPlus(99);
  console.log(another);
  if (another.getHp(false) != 6259) {
    throw 'Athena\'s hp is wrong.';
  }
  if (another.getAtk(false) != 4926) {
    throw 'Athena\'s atk is wrong.';
  }
  if (another.getRcv(false) != 363) {
    throw 'Athena\'s rcv is wrong.';
  }
}

function testRoche() {
  const roche = new MonsterInstance(4799);
  roche.setLevel(110);
  roche.addLatent(Latent.ATK_PLUS);
  roche.addLatent(Latent.ATK_PLUS);
  roche.addLatent(Latent.ATK_PLUS);
  roche.inheritId = 4204;
  roche.inheritLevel = 110;
  roche.inheritPlussed = true;
  roche.setHpPlus(99);
  roche.setAtkPlus(99);
  roche.setRcvPlus(99);
  roche.awakenings = 7;
  roche.superAwakeningIdx = 2;
  console.log(roche);
  if (roche.getHp() != 6698) {
    throw 'Roche\'s hp is wrong.';
  }
  if (roche.getAtk() != 5165) {
    throw 'Roche\'s atk is wrong.';
  }
  if (roche.getRcv() != 916) {
    throw 'Roche\'s rcv is wrong.';
  }
}


function getAwakeningOffsets(awakeningNumber) {
  const result = [0, -324];
  if (awakeningNumber < 0 || awakeningNumber > 81) {
    console.warn('Invalid awakening, returning unknown.');
    return result;
  }
  result[0] -= (awakeningNumber % 11) * 36;
  result[1] -= Math.floor(awakeningNumber / 11) * 36;
  return result;
}

const Shape = {
  AMORPHOUS: 0,
  L: 1,
  COLUMN: 2,
  CROSS: 3,
  BOX: 4,
  ROW: 5,
};

const LetterToShape = {
  A: Shape.AMORPHOUS,
  L: Shape.L,
  C: Shape.COLUMN,
  X: Shape.CROSS,
  B: Shape.BOX,
  R: Shape.ROW,
}

const ShapeToLetter = {
  0: 'A',
  1: 'L',
  2: 'C',
  3: 'X',
  4: 'B',
  5: 'R',
};

const LetterToAttributeName = {
  'r': 'Fire',
  'b': 'Water',
  'g': 'Wood',
  'l': 'Light',
  'd': 'Dark',
  'h': 'Heart',
  'p': 'Poison',
  'j': 'Jammer',
  'm': 'Mortal Poison',
  'o': 'Bomb',
  '?': "None",
};

class Combo {
  constructor(count, attribute, enhanced = 0, shape = Shape.AMORPHOUS) {
    this.count = count;
    this.attribute = attribute;
    if (enhanced > count) {
      console.warn(`Enhanced orbs cannot exceed orb count: ${enhanced} > ${count}`);
      enhanced = count;
    }
    this.enhanced = enhanced;
    if (shape == Shape.L && count != 5) {
      console.warn(`L-shape must have 5 orbs, got ${count}`);
      shape = shape.AMORPHOUS;
    }
    if (shape == Shape.Column && (count < 4 || count > 6)) {
      console.warn(`Small column must have 4 orbs, got ${count}`);
      shape = shape.AMORPHOUS;
    }
    if (shape == Shape.CROSS && count != 5) {
      console.warn(`Cross must have exactly 5 orbs, got ${count}`);
      shape = shape.AMORPHOUS;
    }
    if (shape == Shape.BOX && count != 9) {
      console.warn(`Box must have exactly 9 orbs, got ${count}`);
      shape = shape.AMORPHOUS;
    }
    if (shape == Shape.ROW && count < 5) {
      console.warn(`Row must have at least 5 orbs, 6 if medium, 7 if large, got ${count}`);
      shape = shape.AMORPHOUS;
    }
    this.shape = shape;
  }

  recount() {
    if (this.enhanced > this.count) {
      this.enhanced = this.count;
    }
    if (this.shape == Shape.L || this.shape == Shape.CROSS) {
      this.count = 5;
    }
    if (this.shape == Shape.BOX) {
      this.count = 9;
    }
    if (this.shape == Shape.COLUMN) {
      console.warn('TODO: Handle auto changing to column');
    }
  }
}

const COLORS = 'rbgldhjpmou';

let UserSettings = {
  indexing: 0,
}

/**
 * Command Editor syntax
 * Start with:
 *   1) XLBC - A shape to choose the colors in.
 *             Cross, L, Box, and Column
 *   2) R    - A row.  Can add any valid number of orbs after such as
 *             R10, R11, R15. Defaults to 6
 *   3) ##   - Size of this Orb match. Must be between 3 and board size inclusive.
 *   4)      - Going straight to the attributes will assume a 3-match.
 * Choose attributes
 *   Must be at least one from "rgbldhpmjo?", doing multiple will cause
 *   multiple of these to occur.
 *   e.g. 4rr will make 2x Red TPAs.
 *   Red, Blue, Green, Light, Dark, Heart, Poison, Mortal poison, Jammer, bOmb, uncolored.
 * Add Enhance
 *   e#      - This will cause # orbs to be enhanced.

 * Some examples:
 *  r        - Make a 3-match of reds.
 *  rrrr     - Make 4x 3-match of reds.
 *  4hle1    - Make a TPA of each heal and light with 1 enhanced orb.
 *  Rd       - Make a Row of 6 (on 6x5) dark orbs.
 *  R9rb     - Make a Row with 9 orbs of each red and blue.
 *  Bhg ggh  - Make a Box of hearts and greens, then two green 3-matches and one heart 3-match.
 *  Che1     - Make a Column of hearts with 1 enhanced orb.
 *  R30d     - Make a Board of 30 darks (Also has a row).

 * Deleting combos
 * Start with:
 *   1) DA  - Delete ALL combos of the given attribute(s).
 *   2) Da  - Same as above.
 *   3) D   - Delete combos of a given attribute and a give position.
 * Follow up with attributes to delete.
 *   1) Must be at least one from "rgbldhpmjou", doing multiple will cause
 *   multiple deletions to occur.
 *   2) If using DA/Da, you can use DAa/Daa to delete ALL combos that you've made.
 * Add an optional index to delete.
 *   1) #  - Will delete the #th combo, 0 or 1 indexed depending on settings.
 *   2) -# - Will delete the #th combo from the end.
 *   3) _  - No input will default to deleting the last combo.

 * Some Examples
 *  Dr     - Delete the last Red combo
 *  Dab    - Delete All Blue combos.
 *  Dald   - Delete All Light and Dark combos.
 *  Du0    - Delete the first Uncolored Combo. (Invalid if Indexed 1)
 *  Dj1    - Delete the second Jammer combo. (First if Indexed 1)
 *  Dg-2   - Delete the 2nd from last Green combo.
 *  Drb2   - Delete, from reds and blues, the 3nd combo (2nd if Indexed 1)
 */

class ComboContainer {
  constructor() {
    this.combos = {};
    for (const c of COLORS) {
      this.combos[c] = [];
    }
    this.boardWidth = 6;
    this.maxVisibleCombos = 14;
    this.bonusCombos = 0;
  }

  comboCount() {
    let total = 0;
    for (const comboArrays of Object.values(this.combos)) {
      total += comboArrays.length;
    }
    return total + this.bonusCombos;
  }

  getBoardSize() {
    return this.boardWidth * (this.boardWidth - 1);
  }

  createElement(idc) {
    const el = document.createElement('div');
    el.id = 'idc-combo-editor';
    const inputEl = document.createElement('input');
    inputEl.id = 'idc-combo-input';
    inputEl.placeholder = 'Combo Editor Commands';
    inputEl.title = 'Good luck finding out how to use this for now...';
    inputEl.onkeyup = (e) => {
      if (e.keyCode == 13) {
        const res = this.doCommands(inputEl.value);;
        inputEl.value = res.join(' ');
      }
    }
    el.appendChild(inputEl);

    for (const c of COLORS) {
      const colorTable = document.createElement('table');
      colorTable.style.fontSize = 'xx-small';
      colorTable.id = 'idc-combo-table-' + c;
      const colorTableHeader = document.createElement('tr');
      const colorTableCountRow = document.createElement('tr');
      const colorTableEnhancedRow = document.createElement('tr');
      for (let i = -1; i < this.maxVisibleCombos; i++) {
        const headerCell = document.createElement('th');
        const countCell = document.createElement('td');
        const enhancedCell = document.createElement('td');
        if (i == -1) {
          headerCell.innerText = c.toUpperCase();
          countCell.innerText = '#';
          enhancedCell.innerText = '+';
        }
        else {
          headerCell.innerText = i + UserSettings.indexing;
          const countInput = document.createElement('input');
          countInput.onblur = () => {
            const v = countInput.value;
            if (!v || Number(v) == 0) {
              if (i < this.combos[c].length) {
                this.delete(`${c}${i + UserSettings.indexing}`);
                this.reloadElement();
              }
              return;
            }
            if (v[0] == 'R') {
              let count = Number(v.substring(1));
              if (count == NaN) {
                console.warn('Invalid row input ' + v);
                countInput.value = '';
                return;
              }
              count = count || this.boardWidth;
              if (count < this.boardWidth || count == this.boardWidth + 1) {
                console.warn('Invalid row input ' + v);
                countInput.value = '';
                return;
              }
              if (i < this.combos[c].length) {
                this.combos[c][i].shape = LetterToShape['R'];
                this.combos[c][i].count = count;
                this.combos[c][i].recount();
              } else {
                this.addShape(v[0], `${v.substring(1)}${c}`);
              }
              this.reloadElement();
              return;
            }
            if ('LCXB'.indexOf(v) >= 0) {
              if (i < this.combos[c].length) {
                this.combos[c][i].shape = LetterToShape[countInput];
                this.combos[c][i].recount();
              } else {
                this.addShape(v, `${c}`);
              }
              this.reloadElement();
              return;
            }
            const maybeNumber = Number(v);
            if (maybeNumber != NaN && maybeNumber > 2 && maybeNumber <= this.getBoardSize()) {
              if (i < this.combos[c].length) {
                this.combos[c][i].shape = Shape.AMORPHOUS;
                this.combos[c][i].count = maybeNumber;
                this.combos[c][i].recount();
              } else {
                this.add(maybeNumber, c);
                this.reloadElement();
              }
              this.reloadElement();
              return;
            }
            console.log('countInput has invalid value, removing: ' + countInput.value);
            countInput.value = '';
            if (i < this.combos[c].length) {
              this.delete(`${c}${i + UserSettings.indexing}`);
              this.reloadElement();
            }
          };
          countInput.id = `idc-combo-count-${c}-${i}`;
          countInput.style.width = '20px';
          countInput.style.height = '12px';
          countCell.appendChild(countInput);
          const enhancedInput = document.createElement('input');
          enhancedInput.onblur = () => {
            if (i >= this.combos[c].length) {
              enhancedInput.value = 0;
              return;
            }
            let num = Number(enhancedInput.value);
            if (num == NaN) {
              num = 0;
            }
            const combo = this.combos[c][i];
            if (combo.count >= num) {
              combo.enhanced = num;
            } else {
              combo.enhanced = combo.count;
              enhancedInput.value = combo.count;
            }
          }
          enhancedInput.id = `idc-combo-enhanced-${c}-${i}`;
          enhancedInput.style.width = '20px';
          enhancedInput.style.height = '12px';
          enhancedCell.appendChild(enhancedInput);
        }
        colorTableHeader.appendChild(headerCell);
        colorTableCountRow.appendChild(countCell);
        colorTableEnhancedRow.appendChild(enhancedCell);
      }
      colorTable.appendChild(colorTableHeader);
      colorTable.appendChild(colorTableCountRow);
      colorTable.appendChild(colorTableEnhancedRow);

      el.appendChild(colorTable);
    }

    return el;
  }

  reloadElement() {
    for (const c in this.combos) {
      const comboArray = this.combos[c];
      for (let i = 0; i < this.maxVisibleCombos; i++) {
        const countEl = document.getElementById(`idc-combo-count-${c}-${i}`);
        const enhancedEl = document.getElementById(`idc-combo-enhanced-${c}-${i}`);
        if (i >= comboArray.length) {
          countEl.value = '';
          enhancedEl.value = '';
        } else {
          const combo = comboArray[i];
          if (combo.shape == Shape.ROW) {
            countEl.value = `R${combo.count}`;
          } else if (combo.shape == Shape.AMORPHOUS) {
            countEl.value = Number(combo.count);
          } else {
            countEl.value = ShapeToLetter[combo.shape];
          }
          enhancedEl.value = String(combo.enhanced);
        }
      }
    }
  }

  setWidth(width) {
    if (width < 5 || width > 7) {
      return false;
    }
    this.boardWidth = width;
  }

  /**
   * Execute a user input
   * e.g. 'rrbbgg Lr Bh'
   */
  doCommands(cmds) {
    cmds = cmds.split(' ')
        .map((c) => c.trim())
        .filter((c) => Boolean(c));
    let executed = 0;
    for (const i in cmds) {
      if (!this.doCommand(cmds[i])) {
        break;
      }
      executed++;
    }
    const remainingCommands = cmds.slice(executed);
    this.reloadElement();
    return remainingCommands;
  }

  /**
   * Execute a single command.
   * e.g. 'rrbbgg'
   */
  doCommand(cmd) {
    if (cmd.startsWith('Da') || cmd.startsWith('DA')) {
      return this.deleteAll(cmd.substring(2));
    }
    if (cmd.startsWith('D')) {
      return this.delete(cmd.substring(1));
    }
    if ('XCLBR'.indexOf(cmd[0]) >= 0) {
      return this.addShape(cmd[0], cmd.substring(1));
    }
    if ('123456789'.indexOf(cmd[0]) >= 0) {
      let count = cmd[0];
      cmd = cmd.substring(1);
      if ('0123456789'.indexOf(cmd[0]) >= 0) {
        count += cmd[0];
        cmd = cmd.substring(1);
      }
      if (!cmd) {
        console.warn('Needs a color to Add a Number');
        return false;
      }
      return this.add(Number(count), cmd);
    }
    if (cmd[0] in this.combos) {
      return this.add(3, cmd);
    }
    console.log('Unhandled start ' + cmd[0]);
    return false;
  }

  /**
   * Execute Delete All (DA/Da) command.
   */
  deleteAll(cmd) {
    if (cmd[0] == 'a') {
      for (const attribute in this.combos) {
        this.combos[attribute].length = 0;
      }
      return true;
    }
    // Assume to delete all color values present.
    for (const c of cmd) {
      if (!(c in this.combos)) {
        console.warn('Not valid color: ' + c);
      }
      this.combos[c].length = 0;
    }
    return true;
  }

  delete(cmd) {
    let colorsToDelete = [];
    while(cmd && cmd[0] in this.combos) {
      colorsToDelete.push(cmd[0]);
      cmd = cmd.substring(1);
    }
    let idxToDelete = 1;
    let fromEnd = true;
    if (cmd) {
      if (cmd[0] == '-') {
        fromEnd = true;
        cmd = cmd.substring(1);
      } else {
        fromEnd = false;
      }
      let num = '';
      if ('0123456789'.indexOf(cmd) >= 0) {
        num += cmd[0];
        cmd = cmd.substring(1);
        if (cmd && '0123456789'.indexOf(cmd) >= 0) {
          num += cmd[0];
          cmd = cmd.substring(1);
        }
      }
      if (num) {
        idxToDelete = Number(num);
      }
      if (cmd) {
        console.log(`Unused delete args: ${cmd}`);
      }
    }
    if (fromEnd) {
      for (const c of colorsToDelete) {
        const idx = this.combos[c].length - idxToDelete;
        if (idx >= 0) {
          this.combos[c].splice(idx, 1);
          console.log(`Deleting from ${c}, combo #${idx}`);
        } else {
          console.warn(`Index out of bounds: ${idx}`);
        }
      }
      return true;
    }
    for (const c of colorsToDelete) {
      const idx = idxToDelete - UserSettings.indexing;
      if (idx >= 0 && idx < this.combos[c].length) {
        this.combos[c].splice(idx, 1);
        console.log(`Deleting from ${c} combo #${idx}`);
      } else {
        console.warn(`Index out of bounds: ${idx}`);
      }
    }
    return true;
  }

  addShape(shape, cmd) {
    let times = 1;
    let count;
    switch (shape) {
      case 'R': // Row
        count = this.boardWidth;
        let num = '';
        if ('123456789'.indexOf(cmd[0]) >= 0) {
          num += cmd[0];
          cmd = cmd.substring(1);
          if ('1234567890'.indexOf(cmd[0]) >= 0) {
            num += cmd[0];
            cmd = cmd.substring(1);
          }
        }
        count = num ? Number(num) : this.boardWidth;
        if (count < this.boardWidth || count == this.boardWidth + 1) {
          console.log(`Invalid row count: ${count}`);
          return false;
        }
        break;
      case 'C': // Column
        count = this.boardWidth - 1;
        break;
      case 'X': // Cross
      case 'L': // L
        count = 5;
        break;
      case 'B': // Box (VDP/SFua)
        count = 9;
        break;
      default:
        console.warn('Invalid shape: ' + shape);
        return false;
    }
    
    return this.add(count, cmd, LetterToShape[shape]);
  }

  add(count, cmd, shape = Shape.AMORPHOUS) {
    if (count < 3 || count > this.boardWidth * (this.boardWidth - 1)) {
      console.warn(`Count must be at least 3 and below ${this.boardWidth * (this.boardWidth - 1)}, got ${count}`)
    }
    const colorsToAdd = [];
    while (cmd && cmd[0] in this.combos) {
      colorsToAdd.push(cmd[0]);
      cmd = cmd.substring(1);
    }
    let enhanced = 0;
    if (cmd && cmd[0] == 'e') {
      cmd = cmd.substring(1);
      let num = '';
      if ('12345679'.indexOf(cmd[0]) >= 0) {
        num += cmd[0];
        cmd = cmd.substring(1);
        if ('12345679'.indexOf(cmd[0]) >= 0) {
          num += cmd[0];
          cmd = cmd.substring(1);
        }
      }
      enhanced = num ? Number(num) : 1;
    }
    if (cmd) {
      console.warn(`Unused substring: "${cmd}"`);
    }

    if (enhanced > count) {
      console.warn(`Enhanced count ${enhanced} > orb count ${count}, setting enhanced count to orb count.`);
      enhanced = count;
    }

    for (const c of colorsToAdd) {
      const combo = new Combo(count, c, enhanced, shape);
      this.combos[c].push(combo);
    }
    return true;
  }
}

// To be loaded.
let prioritizedMonsterSearch;
let prioritizedInheritSearch;

function loadMonsterSearches() {
  prioritizedMonsterSearch = Object.values(vm.model.cards).filter((card) => {
    return Number(card.id) < 6000;
  }).sort((card1, card2) => {
    if (card2.monsterPoints != card1.monsterPoints) {
      return card2.monsterPoints - card1.monsterPoints;
    }
    return card2.id - card1.id;
  });
  prioritizedInheritSearch = prioritizedMonsterSearch.filter((card) => {
    // No idea why, but inheritanceType 3 and 7 are assistables.
    // 1, 4, and 5 are unknown
    // 0 is none
    // 2 and 6 are unassistable.
    return card.inheritanceType == 3 || card.inheritanceType == 7;
  }).sort((card1, card2) => {
    if (card1.awakenings[0] != card2.awakenings[0]) {
      if (card1.awakenings[0] == IdcAwakening.AWOKEN_ASSIST) {
        return -1;
      }
      if (card2.awakenings[0] == IdcAwakening.AWOKEN_ASSIST) {
        return 1;
      }
    }
    if (card2.monsterPoints != card1.monsterPoints) {
      return card2.monsterPoints - card1.monsterPoints;
    }
    return card2.id - card1.id;
  });
}

/**
 * Given text, finds the top maxResults monster IDs that match
 * the text in priority order:
 * 1) Exact ID
 * 2) Name Contains Substring
 * 3) Fuzzily matches (All letters are present in order in name) 
 * @param {string} text
 * @param {number=} maxResults
 * @returns {!Array<number>}
 */
function fuzzyMonsterSearch(text, maxResults = 15, searchArray = undefined) {
  searchArray = searchArray || prioritizedMonsterSearch;
  text = text.toLowerCase();
  const result = [];
  // Test for exact match.
  if (text in vm.model.cards) {
    result.push(text);
  }
  const attributes = {
    'r': 0, 'b': 1, 'g': 2, 'l': 3, 'd': 4, 'x': -1,
  };
  let attribute = -1;
  let subattribute = -2;
  let attributeText = '';
  let subattributeText = '';
  if (text.length > 2 && text[0] in attributes) {
    attribute = attributes[text[0]];
    attributeText = text.substring(1).trimLeft();
    if (attributeText.length > 2 && attributeText[0] in attributes) {
      subattribute = attributes[attributeText[0]];
      subattributeText = attributeText.substring(1).trimLeft();
    }
  }
  // Search for monsters whose substrings work.
  for (const card of searchArray) {
    if (result.length >= maxResults) {
      break;
    }
    if (card.name.toLowerCase().indexOf(text) >= 0)  {
      result.push(card.id);
    }
  }
  if (attributeText && result.length < maxResults) {
    for (const card of searchArray.filter((card) => card.attribute == attribute)) {
      key = card.id;
      if (result.includes(key)) {
        continue;
      }
      if (card.name.toLowerCase().includes(attributeText)) {
        result.push(key);
      }
      if (subattributeText &&
          result.length < maxResults &&
          card.subattribute == subattribute &&
          card.name.toLowerCase().includes(subattributeText)) {
        result.push(key);
      }
    }
  }
  // Fuzzy match with the name.
  // This prioritizes values with consecutive letters.  
  for (const card of searchArray) {
    if (result.length >= maxResults) {
      break;
    }
    if (result.includes(card.id)) {
      continue;
    }
    const name = card.name.toLowerCase();
    let currentStringIdx = -1;
    for (const c of text) {
      currentStringIdx = name.indexOf(c, currentStringIdx + 1);
      if (currentStringIdx < 0) {
        break;
      }
    }
    if (currentStringIdx >= 0) {
      result.push(card.id);
      continue;
    }
  }
  return result;
}

const Round = {
  UP: Math.ceil,
  NEAREST: Math.round,
  DOWN: Math.floor,
  NONE: (a) => a,
}

class StoredTeams {
  constructor() {
    this.teams = {};
    if (window.localStorage.idcStoredTeams) {
      this.teams = JSON.parse(window.localStorage.idcStoredTeams);
    }
  }

  loadTeam(name) {
    if (name in this.teams) {
      return this.teams[name];
    }
  }

  saveTeam(teamJson) {
    this.teams[teamJson.title] = teamJson;
    window.localStorage.idcStoredTeams = JSON.stringify(this.teams);
  }

  deleteTeam(title) {
    delete this.teams[title];
    window.localStorage.idcStoredTeams = JSON.stringify(this.teams);    
  }

  printTeams() {
    for (const teamName in this.teams) {
      console.log(`${teamName}: ${this.teams[teamName].title}`);
    }
  }

  reload(idc) {
    const old = document.getElementById('idc-save-load');
    const parent = old.parentElement;

    const newEl = this.createElement(idc);
    parent.insertBefore(newEl, old);
    parent.removeChild(old);
  }

  createElement(idc) {
    const el = document.createElement('div');
    el.id = 'idc-save-load';
    const saveEl = document.createElement('div');
    saveEl.id = 'idc-save-team';
    saveEl.innerText = 'Save Team';
    saveEl.style.fontSize = 'large';
    saveEl.onmouseover = () => saveEl.style.border = '1px solid white';
    saveEl.onmouseleave = () => saveEl.style.border = '';

    saveEl.onclick = () => {
      idc.save();
      this.reload(idc);
    }
    el.appendChild(saveEl);
    for (const teamName in this.teams) {
      const teamEl = document.createElement('div');
      const loadEl = document.createElement('div');
      loadEl.innerText = teamName;
      loadEl.style.width = '95%';
      loadEl.style.display = 'inline-block';
      loadEl.onmouseover = () => loadEl.style.border = '1px solid white';
      loadEl.onmouseleave = () => loadEl.style.border = '';
      loadEl.onclick = () => {
        idc.load(teamName);
      }
      teamEl.appendChild(loadEl);
      const deleteEl = document.createElement('a');
      deleteEl.innerText = 'x';
      deleteEl.onmouseover = () => deleteEl.style.border = '1px solid white';
      deleteEl.onmouseleave = () => deleteEl.style.border = '';
      deleteEl.onclick = () => {
        this.deleteTeam(teamName);
        this.reload(idc);
      }
      teamEl.appendChild(deleteEl);
      el.appendChild(teamEl);
    }
    return el;
  }
}

class DamagePing {
  constructor(source, attribute, isSub=false) {
    this.source = source;
    this.attribute = attribute;
    this.amount = 0;
    this.vdp = false;
    this.isSub = isSub;
  }

  add(amount) {
    this.amount += amount;
  }

  multiply(multiplier, round = Round.NEAREST) {
    this.amount = round(this.amount * multiplier);
  }
}


class Idc {
  constructor() {
    /**
     * All monsters.
     * In 1P: Length is 6
     *   0: Leader
     *   1-4: Subs
     *   5: Helper
     * In 2P: Length is 10
     *   0: P1 Leader / P2 Helper
     *   1-4: P1 subs.
     *   5: UNUSED
     *   6: P2 Helper / P2 Leader
     *   7-10: P2 subs.
     *   11: UNUSED
     * In 3P: Length is 18
     *   0: P1 Leader
     *   1-4: P1 subs
     *   5: P1 Helper
     *   6: P2 Leader
     *   7-10: P2 subs
     *   11: P2 Helper
     *   12: P3 Leader
     *   13-16: P3 Subs
     *   17: P3 Helper
     * @type {!Array<?MonsterInstance>}
     */
    this.monsters = [
        new MonsterInstance(), new MonsterInstance(), new MonsterInstance(),
        new MonsterInstance(), new MonsterInstance(), new MonsterInstance(),
        new MonsterInstance(), new MonsterInstance(), new MonsterInstance(),
        new MonsterInstance(), new MonsterInstance(), new MonsterInstance(),
        new MonsterInstance(), new MonsterInstance(), new MonsterInstance(),
        new MonsterInstance(), new MonsterInstance(), new MonsterInstance(),
    ];

    this.playerMode = 2;
    this.activeTeamIdx = 0;

    this.awakeningsActive = true;

    // Set to 7 for 7x6 and 5 for 5x4. Defaults to 6x5.
    this.boardWidth = 6;

    this.combos = new ComboContainer();

    this.monsterEditingIndex = 0;

    this.teamForm = null;

    this.title = '';

    // TODO: Consider making this into an object with structuring.
    this.description = '';

    this.saver = new StoredTeams();

    // TODO: Make this updatable.
    this.effects = {
      awakenings: true,
      burst: () => 1,
      rcvBoost: () => 1,
    }

    // TODO: Make this updatable.
    this.skillUsed = true;

  }

  getHpPercent() {
    return 100;  // TODO: Make this value changeable.
  }

  toJson() {
    return {
      playerMode: this.playerMode,
      title: this.title,
      description: this.description,
      monsters: this.monsters.map((monster) => monster.toJson()),
    };
  }

  fromJson(json) {
    this.playerMode = json.playerMode;
    this.title = json.title;
    this.description = json.description;
    this.monsters = json.monsters.map((monsterJson) => MonsterInstance.fromJson(monsterJson));
  }

  save() {
    this.saver.saveTeam(this.toJson());
  }

  load(title) {
    const teamJson = this.saver.loadTeam(title);
    if (!teamJson) {
      return;
    }
    this.fromJson(teamJson);      
    this.monsterEditingIndex = 0;
    document.getElementById('idc-team-title').value = this.title;
    document.getElementById('idc-team-description').value = this.description;
    this.reloadTeamIcons();
    this.reloadMonsterEditor();
    document.getElementById(`idc-team-mode-select${this.playerMode}`).checked = true;
  }

  getActiveTeam() {
    return this.getTeamAt(this.activeTeamIdx);
  }

  getTeamAt(teamIdx) {
    const monsters = Array(6);
    for (let i = 0; i < 6; i++) {
      monsters[i] = this.monsters[this.getMonsterIdx(teamIdx, i)];
    }
    return monsters;    
  }

  isMultiplayer() {
    return this.playerMode != 2;
  }

  getHp() {
    const monsters = this.getActiveTeam();
    const lead = getLeaderSkillEffects(monsters[0].getCard().leaderSkillId).hp;
    const helper = getLeaderSkillEffects(monsters[5].getCard().leaderSkillId).hp;
    let totalHp = 0;
    let teamHpAwakenings = 0;
    for (const monster of monsters) {
      if (!monster.id || monster.id <= 0) {
        continue;
      }
      const hpMult = (
          lead(monster, monsters, null, null, null, this.isMultiplayer()) * 
          helper(monster, monsters, null, null, null, this.isMultiplayer()));
      const hpBase = monster.getHp(this.isMultiplayer(), this.effects.awakenings);
      totalHp += Math.round(hpBase * hpMult);
      teamHpAwakenings += monster.getAwakenings(this.isMultiplayer(), new Set([IdcAwakening.TEAM_HP])).length;
    }
    if (this.playerMode == 2) {
      const helperMonsters = this.getTeamAt(this.activeTeamIdx ^ 1);
      // Handle subs
      for (let i = 1; i < 5; i++) {
        const monster = helperMonsters[i];
        if (!monster.id || monster.id <= 0) {
          continue;
        }
        const hpMult = (
            lead(monster, monsters, null, null, null, this.isMultiplayer()) * 
            helper(monster, monsters, null, null, null, this,isMultiplayer()));
        const hpBase = monster.getHp(this.isMultiplayer(), this.effects.awakenings);
        totalHp += Math.round(hpBase * hpMult);
        teamHpAwakenings += monster.getAwakenings(this.isMultiplayer(), new Set(IdcAwakening.TEAM_HP)).length;
      }
    }
    return Math.round(totalHp * (1 + 0.05 * teamHpAwakenings));
  }

  // Get all pings. Does not include
  getDamagePre() {
    let monsters = this.getActiveTeam();
    const lead = getLeaderSkillEffects(monsters[0].getCard().leaderSkillId);
    const helper = getLeaderSkillEffects(monsters[5].getCard().leaderSkillId);
    const MP = this.isMultiplayer();
    const percent = this.getHpPercent();
    function countAwakenings(awakening){
      return monsters.reduce((total, monster) => total + monster.countAwakening(awakening, MP), 0);
    }

    const enhancedCounts = {
        r: countAwakenings(IdcAwakening.OE_FIRE),
        b: countAwakenings(IdcAwakening.OE_WATER),
        g: countAwakenings(IdcAwakening.OE_WOOD),
        l: countAwakenings(IdcAwakening.OE_LIGHT),
        d: countAwakenings(IdcAwakening.OE_DARK),
        h: countAwakenings(IdcAwakening.OE_HEART),
    };

    const rowCounts = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};
    const rowCount = {
        0: countAwakenings(IdcAwakening.ROW_FIRE),
        1: countAwakenings(IdcAwakening.ROW_WATER),
        2: countAwakenings(IdcAwakening.ROW_WOOD),
        3: countAwakenings(IdcAwakening.ROW_LIGHT),
        4: countAwakenings(IdcAwakening.ROW_DARK),
        5: countAwakenings(IdcAwakening.RECOVER_BIND),
    }
    const awakeningLeaderSkill = {
      atk: (ping, team, percentHp, comboContainer, skillUsed, isMultiplayer) => {
        let multiplier = 1;
        const comboCount = comboContainer.comboCount();
        // Handle Rows.
        if (rowCounts[ping.attribute]) {
          multiplier *= 1 + 0.15 * rowCounts[ping.attribute];
        }
        // Handle 7c.
        if (comboCount >= 7) {
          multiplier *= (2 ** ping.source.countAwakening(IdcAwakening.COMBO_7, MP));
          if (comboCount >= 10) {
            // Handle 10c.
            multiplier *= (5 ** ping.source.countAwakening(IdcAwakening.COMBO_10, MP));
          }
        }
        // Handle >80%.
        if (percentHp >= 80) {
          multiplier *= (1.5 ** ping.source.countAwakening(IdcAwakening.HP_GREATER, MP));
        }
        // Handle <=50%.
        if (percentHp <= 50) {
          multiplier *= (2 ** ping.source.countAwakening(IdcAwakening.HP_LESSER, MP));
        }
        // Handle Super Bonus Attack.
        if (comboContainer.combos['h'].some((combo) => combo.shape == Shape.BOX)) {
          multiplier *= 2;
        }
        return multiplier;
      },
    };
    // Row Leader skill?
    // 7c Leader skill?
    monsters = monsters.filter((monster) => monster.id && monster.id >= 0);
    let pings = Array(2 * monsters.length);

    // Set up pings.
    for (let i = 0; i < monsters.length; i++) {
      pings[i] = new DamagePing(monsters[i], monsters[i].attribute >= 0 ? monsters[i].attribute : monsters[i].getCard().attribute);
      if (monsters[i].getCard().subattribute) {
        pings[i + monsters.length] = new DamagePing(monsters[i], monsters[i].getCard().subattribute, true);
      }
    }
    pings = pings.filter((ping) => !!ping);

    // Sum combos.
    for (const c of 'rbgld') {
      for (const combo of this.combos.combos[c]) {
        let baseMultiplier = (combo.count + 1) * 0.25;
        // Handle enhances.
        if (combo.enhanced) {
          baseMultiplier *= (1 + 0.03 * combo.enhanced);
          baseMultiplier *= (1 + enhancedCounts[c] * 0.075);
        }
        // Handle Row
        if (combo.shape == Shape.ROW) {
          rowCounts[COLORS.indexOf(c)] += rowCount[COLORS.indexOf(c)]
        }
        for (const ping of pings) {
          if (ping.attribute != COLORS.indexOf(c)) {
            continue;
          }
          let multiplier = baseMultiplier;
          if (ping.isSub) {
            if (ping.attribute == ping.source.getCard().attribute) {
              multiplier /= 10;
            } else {
              multiplier /= 3;
            }
          }
          // Handle TPA
          if (combo.count == 4) {
            multiplier *= (1.5 ** ping.source.countAwakening(IdcAwakening.TPA, MP));
          }
          // Handle L
          if (combo.shape == Shape.L) {
            multiplier *= (1.5 ** ping.source.countAwakening(IdcAwakening.L_UNLOCK, MP));
          }
          // Handle VDP
          if (combo.shape == Shape.BOX) {
            multiplier *= (2.5 ** ping.source.countAwakening(IdcAwakening.VDP, MP));
            ping.vdp = true;
          }
          const baseAtk = ping.source.getAtk(MP, this.effects.awakenings);
          // When adding a single match of damage, the value is always rounded up.
          // e.g. A monster with 1atk making a 4-match (1.25x) will do 2 damage.
          ping.add(Math.ceil(baseAtk * multiplier));
        }
      }
    }

    pings = pings.filter((ping) => ping.amount > 0);

    // Sum healing combos.
    // TODO: Handle bonus attacks separately.
    let healing = 0;
    let teamRcvAwakenings = 0;
    const trueBonusAttacks = [0];

    // No matching conditionals for this recovery.
    const partialRcv = (lead, monster) => lead.rcv(monster, monsters, percent, this.skillUsed, MP);

    for (const combo of this.combos.combos['h']) {
      let multiplier = (combo.count + 1) * 0.25;
      if (combo.enhanced) {
        multiplier *= (1 + 0.03 * combo.enhanced);
        multiplier *= (1 + enhancedCounts.h * 0.075);
      }
      for (const monster of monsters) {
        let rcv = monster.getRcv();
        if (combo.count == 4) {
          rcv *= (1.5 ** monster.countAwakening(Idc.OE_HEART, MP));
        }
        if (combo.shape == Shape.COLUMN &&
            monster.countAwakening(IdcAwakening.BONUS_ATTACK, MP)) {
          bonusAttacks[0] += 1;
        }
        if (combo.shape == Shape.BOX) {
          bonusAttacks[0] += (99 * monster.countAwakening(IdcAwakening.BONUS_ATTACK_SUPER, MP));
        }
        const rcvMult = (
            partialRcv(lead, monster) *
            partialRcv(helper, monster));
        healing += Math.ceil(rcv * multiplier * rcvMult);
      }
    }

    // Add combos with Leader skill.
    this.combos.bonusCombos = (
      lead.plusCombo(monsters, percent, this.combos, this.skillUsed, MP) +
      helper.plusCombo(monsters, percent, this.combos, this.skillUsed, MP));

    const comboMultiplier = this.combos.comboCount() * 0.25 + 0.75;

    for (const ping of pings) {
      ping.multiply(comboMultiplier);
    }
    healing = Math.ceil(healing * comboMultiplier);

    // Apply awakenings.
    // For some reason, this is a Round.NEAREST for rows.
    // This may need to be split out if other things like SFua cause it to behave differently.
    const partialLead = (leader, ping) => leader.atk(ping, monsters, percent, this.combos, this.skillUsed, MP);
    for (const ping of pings) {
      ping.multiply(partialLead(awakeningLeaderSkill, ping), Round.NEAREST);
    }

    // Apply leader skills.
    for (const ping of pings) {
      const multiplier = partialLead(lead, ping) * partialLead(helper, ping);
      ping.multiply(multiplier, Round.NEAREST);
    }

    // Cleanup.
    this.combos.bonusCombos = 0;

    // TODO: Determine regular bonus attacks.
    return {
      pings: pings,
      healing: healing,
      trueBonusAttacks: trueBonusAttacks,  // TODO
      bonusAttacks: [], // TODO
    };
  }

  viewTeams() {
    this.saver.printTeams();
  }

  setPlayerMode(newMode) {
    if (newMode != 1 && newMode != 2 && newMode != 3) {
      throw `Invalid player mode, must be 1, 2, or 3, got ${newMode}`;
    }
    if (this.playerMode == 2) {
      /**
       0 1 2 3  4 6
       6 7 8 9 10 0
       x x x x x x
       ->
       0 1 2 3  4  5
       6 7 8 9 10 11
       x x x x  x  x
       */
      if (newMode == 3) {
        this.monsters[5].copyFrom(this.monsters[6]);
        this.monsters[11].copyFrom(this.monsters[0]);
      }
      if (newMode == 1) {
        this.monsters[5].copyFrom(this.monsters[6]);
      }
    } else if (this.playerMode == 3) {
    } else { // Handle 1P
      if (newMode == 2) {
        this.monsters[6].copyFrom(this.monsters[5]);
      }
    }

    this.playerMode = newMode;

    // TODO: Update UI to reflect this.
  }

  setActiveTeamIdx(idx) {
    if (idx >= this.playerMode || idx < 0) {
      throw `Index should be [0, ${this.players}]`;
    }
    this.activeTeamIdx = idx;
    // TODO: Update visuals and calculations when this happens.
  }

  getMonsterIdx(teamIdx, localIdx) {
    let idx = 6 * teamIdx + localIdx;
    if (this.playerMode == 2 &&
        ((teamIdx == 0 && localIdx == 5) || (teamIdx == 1 && localIdx == 5))) {
      idx = (1 - teamIdx) * 6;
    }
    return idx;
  }

  createTeamsForm() {
    const playerTeams = document.createElement('table');
    for (let i = 0; i < 3; i++) {
      const playerTeam = document.createElement('tr');
      playerTeam.id = `idc-team${i}`;
      for (let j = 0; j < 6; j++) {
        const playerMemberContainer = document.createElement('td');
        playerMemberContainer.id = `idc-team${i}-member-container-${j}`;
        const idx = this.getMonsterIdx(i, j);

        const inheritIcon = this.monsters[idx].createInheritIcon();
        playerMemberContainer.appendChild(inheritIcon);

        const icon = this.monsters[idx].createIcon();
        playerMemberContainer.appendChild(icon);
        const latentsIcon = this.monsters[idx].createLatentsIcon();
        playerMemberContainer.appendChild(latentsIcon);
        playerMemberContainer.onclick = () => {
          this.monsterEditingIndex = idx;
          this.reloadMonsterEditor();
          this.reloadSelector();
        }
        playerTeam.appendChild(playerMemberContainer);
      }
      playerTeams.appendChild(playerTeam);
    }
    this.teamForm = playerTeams;
    return playerTeams;
  }

  reloadAwakeningEditor() {
    // Awakenings
    const activeMonster = this.monsters[this.monsterEditingIndex];
    for (let i = 0; i < 9; i++) {
      const singleAwakeningSelector = document.getElementById(`idc-awakening-count-${i + 1}`);
      if (activeMonster.id == null || i >= activeMonster.getCard().awakenings.length) {
        singleAwakeningSelector.style.display = 'none';
      } else if (i >= activeMonster.awakenings){
        const awakening = activeMonster.getCard().awakenings[i];
        const [x, y] = getAwakeningOffsets(awakening);
        singleAwakeningSelector.style.backgroundPosition = `${x * AWAKENING_SCALE}px ${y * AWAKENING_SCALE}px`; // '0px -324px';
        singleAwakeningSelector.style.display = 'inline-block';
        singleAwakeningSelector.style.opacity = '0.5';
      } else {
        const awakening = activeMonster.getCard().awakenings[i];
        const [x, y] = getAwakeningOffsets(awakening);
        singleAwakeningSelector.style.backgroundPosition = `${x * AWAKENING_SCALE}px ${y * AWAKENING_SCALE}px`; // '0px -324px';
        singleAwakeningSelector.style.display = 'inline-block';
        singleAwakeningSelector.style.opacity = '1.0';
      }
    }

    // Super Awakenings
    for (let i = 0; i < 9; i++) {
      const saSelector = document.getElementById(`idc-super-awakening-${i + 1}`);
      let awakening = 0;
      if (activeMonster.id == null) {
        saSelector.style.display = 'none';
        continue;
      }
      const superAwakenings = activeMonster.getCard().superAwakenings;
      if (i > 0 && i <= superAwakenings.length) {
        awakening = superAwakenings[i - 1];
        const [x, y] = getAwakeningOffsets(awakening);
        saSelector.style.backgroundPosition = `${x * AWAKENING_SCALE}px ${y * AWAKENING_SCALE}px`;
      } else if (i > superAwakenings.length) {
        awakening = -1;
      }

      if (this.monsters[this.monsterEditingIndex].superAwakeningIdx == i - 1) {
        saSelector.style.opacity = 1.0;
      } else {
        saSelector.style.opacity = 0.5;
      }

      saSelector.style.display = awakening == -1 ? 'none' : 'inline-block';

    }

    // Latent Awakenings.

    let totalLatents = 0;
    for (let i = 0; i < 6; i++) {
      const currentLatentSelector = document.getElementById(`idc-selected-latent-awakening-${i}`);
      if (totalLatents >= 6) {
        currentLatentSelector.style.backgroundPosition = `0px 0px`;
        currentLatentSelector.style.display = 'none';
        continue;
      } else if (i >= activeMonster.latents.length) {
        currentLatentSelector.style.backgroundPosition = `0px 0px`;
        currentLatentSelector.style.width = `${36 * AWAKENING_SCALE}px`;
        currentLatentSelector.style.display = 'inline-block';
        totalLatents++;
        continue;
      }
      const latent = activeMonster.latents[i];
      const isSuper = latent >= 11;
      totalLatents += isSuper ? 2 : 1;
      let offsetWidth, offsetHeight;
      const x = isSuper ? (latent - 11) % 5 : latent;
      const y = isSuper ? Math.floor((latent - 11) / 5 + 2) : 1;
      if (isSuper) {
        offsetWidth = x * -80 - 2;
        offsetHeight = -36 * y;
      } else {
        offsetWidth = x * -36;
        offsetHeight = -36;
      }
      currentLatentSelector.style.display = 'inline-block';
      currentLatentSelector.style.width = `${(isSuper ? 76 : 36) * AWAKENING_SCALE}px`;
      currentLatentSelector.style.backgroundPosition = `${offsetWidth * AWAKENING_SCALE}px ${offsetHeight * AWAKENING_SCALE}px`;
    }

    // Enable/Disable Generic Killers. (Evo, Awakening, Enhance, Redeemable.)
    for (let i = 12; i < 16; i++) {
      const latentSelector = document.getElementById(`idc-latent-awakening-${i + 1}`);
      if (activeMonster.id > 0 && activeMonster.getCard().latentKillers.length > 0) {
        latentSelector.style.opacity = '1.0';        
      } else {
        latentSelector.style.opacity = '0.5';        
      }
    }
    // Enable/Disable Other Killers based on type availability.
    for (let i = 16; i <= 23; i++) {
      const latentSelector = document.getElementById(`idc-latent-awakening-${i + 1}`);
      if (activeMonster.id > 0 && activeMonster.getCard().latentKillers.includes(i - 11)) {
        latentSelector.style.opacity = '1.0';
      } else {
        latentSelector.style.opacity = '0.5';
      }
    }
  }

  reloadMonsterEditor() {
    // Reload Monster IDs
    const monsterSelector = document.getElementById('idc-selector-monster');
    const levelSelector = document.getElementById('idc-level-monster');
    const hpPlusSetting = document.getElementById('idc-hp-plus-monster');
    const atkPlusSetting = document.getElementById('idc-atk-plus-monster');
    const rcvPlusSetting = document.getElementById('idc-rcv-plus-monster');
    const activeMonster = this.monsters[this.monsterEditingIndex];
    if (activeMonster.id != null) {
      monsterSelector.value = activeMonster.getCard().name;
      levelSelector.value = activeMonster.level;
      hpPlusSetting.value = activeMonster.hpPlus;
      atkPlusSetting.value = activeMonster.atkPlus;
      rcvPlusSetting.value = activeMonster.rcvPlus;
    } else {
      monsterSelector.value = '';
      levelSelector.value = 1;
      hpPlusSetting.value = activeMonster.hpPlus;
      atkPlusSetting.value = activeMonster.atkPlus;
      rcvPlusSetting.value = activeMonster.rcvPlus;
    }
    const inheritSelector = document.getElementById('idc-selector-inherit');
    const inheritLevelSelector = document.getElementById('idc-level-inherit');
    const inheritPlussedCheckbox = document.getElementById('idc-plus-inherit');
    if (activeMonster.inheritId > 0) {
      inheritSelector.value = activeMonster.getInheritCard().name;
      inheritLevelSelector.value = activeMonster.inheritLevel;
      inheritPlussedCheckbox.checked = activeMonster.inheritPlussed;
    } else {
      inheritSelector.value = '';
      inheritLevelSelector.value = 1;
      inheritPlussedCheckbox.checked = false;
    }
    this.reloadAwakeningEditor();
  }

  reloadSelector() {
    for (let i = 0; i < this.playerMode; i++) {
      for (let j = 0; j < 6; j++) {
        const fullContainer = document.getElementById(`idc-team${i}-member-container-${j}`);
        const idx = this.getMonsterIdx(i, j); 
        if (idx == this.monsterEditingIndex && fullContainer.style.border != '1px solid white') {
          fullContainer.style.border = '1px solid white';
        } else {
          fullContainer.style.border = '';
        }
      }
    }
  }

  reloadTeamIcons() {
    for (let i = 0; i < this.playerMode; i++) {
      const teamRow = document.getElementById(`idc-team${i}`);
      teamRow.style.display = '';
      for (let j = 0; j < 6; j++) {
        const fullContainer = document.getElementById(`idc-team${i}-member-container-${j}`);
        const inheritContainer = fullContainer.firstChild;
        const monsterContainer = inheritContainer.nextSibling;
        const latentsContainer = monsterContainer.nextSibling;
        const idx = this.getMonsterIdx(i, j);
        this.monsters[idx].updateInheritIcon(inheritContainer);
        this.monsters[idx].updateIcon(monsterContainer, this.playerMode);
        this.monsters[idx].updateLatentsIcon(latentsContainer);
        fullContainer.onclick = () => {
          this.monsterEditingIndex = idx;
          this.reloadMonsterEditor();
          this.reloadSelector();
        }
      }
    }
    for (let i = this.playerMode; i < 3; i++) {
      const teamRow = document.getElementById(`idc-team${i}`);
      teamRow.style.display = 'none';
    }
  }

  createMonsterSelector() {
    const maxResults = 15;
    const monsterSelection = document.createElement('div');
    const monsterSelector = document.createElement('input'); // TODO: Make this input better.
    monsterSelector.style.width = '100%';
    monsterSelector.placeholder = 'Monster Search';
    const options = document.createElement('div');
    options.display = 'none';
    for (let i = 0; i < maxResults; i++) {
      const option = document.createElement('div');
      option.id = `idc-monster-select-option-${i}`;
      option.value = '0';
      option.style.display = 'none';
      options.style.fontSize = 'x-small';
      option.onmouseover = () => {
        option.style.border = '1px solid white';
      }
      option.onmouseleave = () => {
        option.style.border = '';
      }
      option.onclick = () => {
        options.style.display = 'none';
        monsterSelector.value = option.value;
        this.monsters[this.monsterEditingIndex].setId(monsterSelector.value);
        this.reloadTeamIcons();
        this.reloadMonsterEditor();        
      }
      options.appendChild(option);
    }
    monsterSelector.id = 'idc-selector-monster';
    monsterSelector.onkeyup = (e) => {
      if (e.keyCode == 13) {
        const value = document.getElementById(`idc-monster-select-option-0`).value;
        console.log(`Changing monster ${this.monsterEditingIndex} id to ${value}`);
        this.monsters[this.monsterEditingIndex].setId(value);
        this.reloadTeamIcons();
        this.reloadMonsterEditor();
        options.style.display = 'none';
        return;
      }
      const currentText = e.target.value.toLowerCase();
      if (currentText == '') {
        options.style.display = 'none';
        return;
      }
      options.style.display = 'block';
      const fuzzyMatches = fuzzyMonsterSearch(currentText, maxResults);
      for (let i = 0; i < fuzzyMatches.length && i < maxResults; i++) {
        const option = document.getElementById(`idc-monster-select-option-${i}`);
        const key = fuzzyMatches[i];
        option.innerText = `${key} - ${vm.model.cards[key].name}`;
        option.value = key;
        option.style.display = 'block';
      }
      for (let i = fuzzyMatches.length; i < maxResults; i++) {
        const option = document.getElementById(`idc-monster-select-option-${i}`);
        option.style.display = 'none';
      }
    }
    monsterSelection.appendChild(monsterSelector);
    monsterSelection.appendChild(document.createElement('br'));
    monsterSelection.appendChild(options);
    return monsterSelection;
  }

  createInheritSelector() {
    const maxResults = 15;
    const inheritSelection = document.createElement('div');
    // inheritSelection.appendChild(document.createTextNode('Inherit: '));
    const inheritSelector = document.createElement('input');
    inheritSelector.style.width = '100%';
    inheritSelector.placeholder = 'Inherit Search';
    const options = document.createElement('div');
    options.display = 'none';
    for (let i = 0; i < maxResults; i++) {
      const option = document.createElement('div');
      option.id = `idc-inherit-select-option-${i}`;
      option.value = '0';
      option.style.display = 'none';
      options.style.fontSize = 'x-small';
      option.onmouseover = () => {
        option.style.border = '1px solid white';
      }
      option.onmouseleave = () => {
        option.style.border = '';
      }
      option.onclick = () => {
        options.style.display = 'none';
        inheritSelector.value = option.value;
        this.monsters[this.monsterEditingIndex].inheritId = inheritSelector.value;
        this.reloadTeamIcons();
        this.reloadMonsterEditor();        
      }
      options.appendChild(option);
    }
    inheritSelector.onkeyup = (e) => {
      if (e.keyCode == 13) {
        const value = document.getElementById(`idc-inherit-select-option-0`).value;
        console.log(`Changing monster inherit ${this.monsterEditingIndex} id to ${value}`);
        this.monsters[this.monsterEditingIndex].inheritId = value;
        this.reloadTeamIcons();
        this.reloadMonsterEditor();
        options.style.display = 'none';
        return;
      }
      const currentText = e.target.value.toLowerCase();
      if (currentText == '') {
        options.style.display = 'none';
        return;
      }
      options.style.display = 'block';
      const fuzzyMatches = fuzzyMonsterSearch(currentText, maxResults, prioritizedInheritSearch);
      for (let i = 0; i < fuzzyMatches.length && i < maxResults; i++) {
        const option = document.getElementById(`idc-inherit-select-option-${i}`);
        const key = fuzzyMatches[i];
        option.innerText = `${key} - ${vm.model.cards[key].name}`;
        option.value = key;
        option.style.display = 'block';
      }
      for (let i = fuzzyMatches.length; i < maxResults; i++) {
        const option = document.getElementById(`idc-inherit-select-option-${i}`);
        option.style.display = 'none';
      }
    }
    inheritSelector.id = 'idc-selector-inherit';
    inheritSelection.appendChild(inheritSelector);
    inheritSelection.appendChild(options);
    return inheritSelection;
  }

  createLevelEditor() {
    const levelEditor = document.createElement('div');
    levelEditor.appendChild(document.createTextNode('Level: '));
    const monsterLevelEditor = document.createElement('input');
    monsterLevelEditor.id = 'idc-level-monster';
    monsterLevelEditor.type = 'number';
    monsterLevelEditor.style.width = '60px';
    monsterLevelEditor.style.marginRight = '10px';
    monsterLevelEditor.onblur = (e) => {
      this.monsters[this.monsterEditingIndex].setLevel(Number(e.target.value));
      this.reloadTeamIcons();
    }
    levelEditor.appendChild(monsterLevelEditor);

    levelEditor.appendChild(document.createTextNode('Inherit Level: '));
    const inheritLevelEditor = document.createElement('input');
    inheritLevelEditor.id = 'idc-level-inherit';
    inheritLevelEditor.type = 'number';
    inheritLevelEditor.style.width = '60px';
    inheritLevelEditor.style.marginRight = '10px';
    inheritLevelEditor.onblur = (e) => {
      this.monsters[this.monsterEditingIndex].inheritLevel = Number(e.target.value);
      this.reloadTeamIcons();
    }
    levelEditor.appendChild(inheritLevelEditor);

    return levelEditor;
  }

  createPlusEditor() {
    const plusEditor = document.createElement('div');
    const maxPlusButton = document.createElement('button');
    maxPlusButton.id = 'idc-297-plus-monster';
    maxPlusButton.type = 'button';
    maxPlusButton.innerText = '+297';
    maxPlusButton.onclick = (e) => {
      this.monsters[this.monsterEditingIndex].setHpPlus(99);
      this.monsters[this.monsterEditingIndex].setAtkPlus(99);
      this.monsters[this.monsterEditingIndex].setRcvPlus(99);
      this.reloadTeamIcons();
    }
    plusEditor.appendChild(maxPlusButton);

    const minPlusButton = document.createElement('button');
    minPlusButton.id = 'idc-0-plus-monster';
    minPlusButton.type = 'button';
    minPlusButton.innerText = '+0';
    minPlusButton.onclick = (e) => {
      this.monsters[this.monsterEditingIndex].setHpPlus(0);
      this.monsters[this.monsterEditingIndex].setAtkPlus(0);
      this.monsters[this.monsterEditingIndex].setRcvPlus(0);
      this.reloadTeamIcons();
    }
    plusEditor.appendChild(minPlusButton);

    plusEditor.appendChild(document.createElement('br'));

    const hpPlusSetting = document.createElement('input');
    hpPlusSetting.id = 'idc-hp-plus-monster';
    hpPlusSetting.type = 'number';
    hpPlusSetting.style.width = '50px';
    hpPlusSetting.style.marginRight = '10px';
    hpPlusSetting.onblur = (e) => {
      this.monsters[this.monsterEditingIndex].setHpPlus(e.target.value);
      this.reloadTeamIcons();
    }
    plusEditor.appendChild(document.createTextNode('HP+ '));
    plusEditor.appendChild(hpPlusSetting);

    const atkPlusSetting = document.createElement('input');
    atkPlusSetting.id = 'idc-atk-plus-monster';
    atkPlusSetting.type = 'number';
    atkPlusSetting.style.width = '50px';
    atkPlusSetting.style.marginRight = '10px';
    atkPlusSetting.onblur = (e) => {
      this.monsters[this.monsterEditingIndex].setAtkPlus(e.target.value);
      this.reloadTeamIcons();
    }
    plusEditor.appendChild(document.createTextNode('ATK+ '));
    plusEditor.appendChild(atkPlusSetting);

    const rcvPlusSetting = document.createElement('input');
    rcvPlusSetting.id = 'idc-rcv-plus-monster';
    rcvPlusSetting.type = 'number';
    rcvPlusSetting.style.width = '50px';
    rcvPlusSetting.style.marginRight = '10px';
    rcvPlusSetting.onblur = (e) => {
      this.monsters[this.monsterEditingIndex].setRcvPlus(e.target.value);
      this.reloadTeamIcons();
    }
    plusEditor.appendChild(document.createTextNode('RCV+ '));
    plusEditor.appendChild(rcvPlusSetting);

    plusEditor.appendChild(document.createElement('br'));

    const inheritPlussedCheckbox = document.createElement('input');
    inheritPlussedCheckbox.id = 'idc-plus-inherit';
    inheritPlussedCheckbox.type = 'checkbox';
    inheritPlussedCheckbox.onclick = (e) => {
      this.monsters[this.monsterEditingIndex].inheritPlussed = e.target.checked;
      this.reloadTeamIcons();
    }

    plusEditor.appendChild(document.createTextNode('Inherit Plussed: '))
    plusEditor.appendChild(inheritPlussedCheckbox);

    return plusEditor;
  }

  createAwakeningEditor() {
    const awakeningEditor = document.createElement('div');
    const awakeningSelector = document.createElement('div');
    awakeningSelector.appendChild(document.createTextNode('Awakenings:'));
    awakeningSelector.appendChild(document.createElement('br'));
    for (let i = 0; i < 9; i++) {
      const singleAwakeningSelector = document.createElement('a');
      singleAwakeningSelector.id = `idc-awakening-count-${i + 1}`;
      singleAwakeningSelector.style.display = 'none';
      singleAwakeningSelector.style.width = `${36 * AWAKENING_SCALE}px`;
      singleAwakeningSelector.style.height = `${36 * AWAKENING_SCALE}px`;
      singleAwakeningSelector.style.backgroundSize = `${400 * AWAKENING_SCALE}px ${580 * AWAKENING_SCALE}px`;
      singleAwakeningSelector.style.backgroundImage = 'url(https://s3.amazonaws.com/ilmina/custom/eggs.png)';
      singleAwakeningSelector.style.backgroundRepeat = 'no-repeat';
      // Position should be remapped whenever the monster changes.
      singleAwakeningSelector.style.backgroundPosition = `0px ${-324 * AWAKENING_SCALE}px`;
      singleAwakeningSelector.onclick = () => {
        this.monsters[this.monsterEditingIndex].awakenings = i + 1;
        this.reloadAwakeningEditor();
        this.reloadTeamIcons();
      };
      awakeningSelector.appendChild(singleAwakeningSelector);
    }

    awakeningEditor.appendChild(awakeningSelector);

    const superAwakeningSelector = document.createElement('div');
    superAwakeningSelector.appendChild(document.createTextNode('Super Awakening:'));
    superAwakeningSelector.appendChild(document.createElement('br'));

    for (let i = 0; i < 9; i++) {
      const saSelector = document.createElement('a');
      saSelector.id = `idc-super-awakening-${i + 1}`;
      saSelector.style.display = 'inline-block';
      saSelector.style.width = `${36 * AWAKENING_SCALE}px`;
      saSelector.style.height = `${36 * AWAKENING_SCALE}px`;
      saSelector.style.backgroundSize = `${400 * AWAKENING_SCALE}px ${580 * AWAKENING_SCALE}px`;
      saSelector.style.backgroundImage = 'url(https://s3.amazonaws.com/ilmina/custom/eggs.png)';
      saSelector.style.backgroundRepeat = 'no-repeat';
      // Position should be remapped whenever the monster changes.
      saSelector.style.backgroundPosition = `0px ${-324 * AWAKENING_SCALE}px`;
      saSelector.onclick = () => {
        this.monsters[this.monsterEditingIndex].superAwakeningIdx = i - 1;
        this.reloadAwakeningEditor();
        this.reloadTeamIcons();
      };
      superAwakeningSelector.appendChild(saSelector);
    }

    awakeningEditor.appendChild(superAwakeningSelector);

    const latentAwakeningEditor = document.createElement('div');
    latentAwakeningEditor.appendChild(document.createTextNode('Latents: '));

    for (let i = 0; i < 6; i++) {
      const currentLatentSelector = document.createElement('a');
      currentLatentSelector.id = `idc-selected-latent-awakening-${i}`;
      currentLatentSelector.style.display = 'none';
      // Width should be changed.
      currentLatentSelector.style.width = `${36 * AWAKENING_SCALE}px`;
      currentLatentSelector.style.height = `${36 * AWAKENING_SCALE}px`;
      currentLatentSelector.style.backgroundSize = `${400 * AWAKENING_SCALE}px ${580 * AWAKENING_SCALE}px`;
      currentLatentSelector.style.backgroundImage = 'url(https://s3.amazonaws.com/ilmina/custom/eggs.png)';
      currentLatentSelector.style.backgroundRepeat = 'no-repeat';
      // Position should be remapped whenever the monster changes.
      currentLatentSelector.style.backgroundPosition = '0px 0px';
      currentLatentSelector.onclick = () => {
        this.monsters[this.monsterEditingIndex].removeLatent(i);
        this.reloadAwakeningEditor();
        this.reloadTeamIcons();
      };
      latentAwakeningEditor.appendChild(currentLatentSelector);
    }

    latentAwakeningEditor.appendChild(document.createElement('br'));

    const PER_ROW = 11;
    let totalCurrentWidth = 0;
    let j = 1;
    let x = 0;
    for (let i = 0; i < 33; i++) {
      const isSuper = i >= PER_ROW;
      totalCurrentWidth += isSuper ? 2 : 1;
      x++;
      if (totalCurrentWidth > PER_ROW) {
        latentAwakeningEditor.appendChild(document.createElement('br'));
        totalCurrentWidth = isSuper ? 2 : 1;
        x = 0;
        j++;
      }
      const latentSelector = document.createElement('a');
      latentSelector.id = `idc-latent-awakening-${i + 1}`;
      latentSelector.style.display = 'inline-block';
      latentSelector.style.width = isSuper ? `${76 * AWAKENING_SCALE}px` : `${36 * AWAKENING_SCALE}px`;
      latentSelector.style.height = `${36 * AWAKENING_SCALE}px`;
      latentSelector.style.backgroundSize = `${400 * AWAKENING_SCALE}px ${580 * AWAKENING_SCALE}px`
      latentSelector.style.backgroundImage = 'url(https://s3.amazonaws.com/ilmina/custom/eggs.png)';
      latentSelector.style.backgroundRepeat = 'no-repeat';
      // Position should be remapped whenever the monster changes.
      const offsetX = (j > 1 ? (80 * x + 2) : 36 * x - 36) * AWAKENING_SCALE;
      latentSelector.style.backgroundPosition = `-${offsetX}px -${36 * j * AWAKENING_SCALE}px`;
      latentSelector.onclick = () => {
        this.monsters[this.monsterEditingIndex].addLatent(i);
        this.reloadAwakeningEditor();
        this.reloadTeamIcons();
      };
      latentAwakeningEditor.appendChild(latentSelector);
    }

    awakeningEditor.appendChild(latentAwakeningEditor);

    return awakeningEditor;
  }

  createMonsterEditor() {
    /**
     * Monster: [Search Box]
     * Inherit: [Search Box]
     * Level: [1-110] Inherit Level: [1-110]
     * [+297]  [+0]
     * HP+ [0-99] ATK+ [0-99] RCV+ [0-99]
     * Inherit +297d: [x]
     * Awakenings
     * [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
     * Super Awakening
     * [x] [ ] [ ]
     * Latents: [ ] [ ] [ ] [ ] [ ] [ ]
     */
    const monsterEditor = document.createElement('div');

    monsterEditor.appendChild(this.createMonsterSelector());
    monsterEditor.appendChild(this.createInheritSelector());
    monsterEditor.appendChild(this.createLevelEditor());
    monsterEditor.appendChild(this.createPlusEditor());
    monsterEditor.appendChild(this.createAwakeningEditor());

    return monsterEditor;
  }

  createForm() {
    // Remove the form if it doesn't already exist.
    const existingForm = document.getElementById(Id.CONTAINER);
    if (existingForm) {
      existingForm.parentElement.removeChild(existingForm);
    }

    const form = document.createElement('div');
    form.id = Id.CONTAINER

    const layout = document.createElement('table');
    layout.style.fontSize = 'small';
    const layoutTopRow = document.createElement('tr');
    const layoutLeft = document.createElement('td');
    layoutLeft.style.paddingRight = '10px';
    layoutLeft.style.verticalAlign = 'top';
    const layoutMiddle = document.createElement('td');
    layoutMiddle.id = 'team-builder';
    layoutMiddle.style.verticalAlign = 'top';
    const layoutRight = document.createElement('td');
    layoutRight.verticalAlign = 'top';
    layoutTopRow.appendChild(layoutLeft);
    layoutTopRow.appendChild(layoutMiddle);
    layoutTopRow.appendChild(layoutRight);
    layout.appendChild(layoutTopRow);

    const debugButton = document.createElement('button');
    debugButton.innerText = 'DEBUG';
    debugButton.onclick = () => {
      const mp = this.isMultiplayer();
      console.log(`Team HP: ${this.getHp()}`);
      for (const monster of this.getActiveTeam()) {
        console.log(monster.getCard().name);
        console.log(`HP: ${monster.getHp(mp)} ATK: ${monster.getAtk(mp)} RCV: ${monster.getRcv(mp)}`);
      }
      console.log(this.getDamagePre());
    }

    layoutLeft.appendChild(debugButton);

    // Player Mode controller.
    const playerModeRadio = document.createElement('div');
    for (let i = 0; i < 3; i++) {
      const modeInput = document.createElement('input');
      modeInput.type = 'radio';
      modeInput.id = `idc-team-mode-select${i + 1}`;
      if (i + 1 == this.playerMode) {
        modeInput.checked = true;
      }
      modeInput.name = 'idc-team-mode-select';
      modeInput.onclick = () => {
        this.monsterEditingIndex = 0;
        this.setPlayerMode(i + 1);
        this.reloadTeamIcons();
        this.reloadSelector();
      }
      playerModeRadio.appendChild(modeInput);
      const modeLabel = document.createElement('label');
      modeLabel.for = modeInput.id;
      modeLabel.innerText = `${i + 1}P`;
      playerModeRadio.appendChild(modeLabel)
    }
    layoutLeft.appendChild(playerModeRadio);
    layoutLeft.appendChild(this.createMonsterEditor());
    layoutLeft.appendChild(this.saver.createElement(this));
    // TODO: update (latent) elements so that when updated, their heights also change.
    // const zoomEl = document.createElement('input');
    // zoomEl.type = 'number';
    // zoomEl.value = 60;
    // zoomEl.width = '24px';
    // zoomEl.onblur = () => {
    //   teamScaling = Number(zoomEl.value) / 100;
    //   this.reloadTeamIcons();
    // }
    // layoutMiddle.appendChild(zoomEl);
    const titleElement = document.createElement('input');
    titleElement.id = 'idc-team-title';
    titleElement.value = 'Team Name';
    titleElement.setAttribute('style',
        'background-color: black; border: none; color: white; width: 100%; font-size: medium;');
    titleElement.onkeyup = () => {
      this.title = titleElement.value;
    };
    layoutMiddle.appendChild(titleElement);
    layoutMiddle.appendChild(this.createTeamsForm());
    const descriptionElement = document.createElement('textarea');
    descriptionElement.id = 'idc-team-description';
    descriptionElement.setAttribute('style',
        'background-color: black; border: none; color: white; width: 100%; height: 300px;');
    descriptionElement.value = 'Team Description';
    descriptionElement.onkeyup = () => {
      this.description = descriptionElement.value;
    };
    layoutMiddle.appendChild(descriptionElement);

    layoutRight.appendChild(this.combos.createElement(this));

    form.appendChild(layout);

    document.body.appendChild(form);
    this.reloadTeamIcons();
    this.reloadSelector();
  }

  // For no-skyfall leads, calculate remaining orbs on board.
  getRemainingOrbs() {
    return this.combos.reduce(
        (total, combo) => total - combo.count, this.boardWidth * (this.boardWidth - 1));
  }
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function awaitLoaded() {
  while (vm.page() == KoPage.LOADING) {
    await timeout(200);
  }
}

async function initIdc() {
  if (window.location.hash != '#/CARD/0') {
    return;
  }
  await awaitLoaded();
  annotateMonsterScaling();
  loadMonsterSearches();

  // Clear Ilmina.
  for (const element of document.getElementsByClassName('main-site-div')) {
    element.parentElement.removeChild(element);
  }
  const idc = new Idc();
  idc.createForm();
  console.log(idc);
}

const oldHashChange = window.onhashchange;
window.onhashchange = () => {
  oldHashChange();
  initIdc();
}
initIdc();

}