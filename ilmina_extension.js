/**
 * Written by Scarlet#1115 on Discord.
 * Please do not redistribute yet... This is stil in Alpha.
 *
 * NOTE: Only do this if you trust the creator of this file.
 *   Doing this in general can be dangrous if you don't trust
 *   the source of the code.
 *
 * To install this extension...
 * 1) Download/clone folder from https://github.com/mtkwock/IDC
 * 2) In Chrome, open chrome://extensions, ensure Developer Mode is on (top right toggle).
 * 3) In the top left, click "Load unpacked"
 * 4) Navigate to the (uncompressed) folder of the download from GitHub
 * 5) Click "Select" when in the folder.
 * 6) Navigate to https://ilmina.com/#/ShowMeTheRopes
 * 7) This should begin the app.

 * To update
 * 1) git pull
 * 2) In chrome://extensions, click the Refresh button in the installed app.
 * 3) The next time you load this page, you should get this.
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

{

const AWAKENING_SCALE = 0.7;
const MONSTER_AWAKENING_SCALE = 0.43;
const AWAKENING_NUMBERS = '0123456789';
let teamScaling = 0.6;

const LatentToPdchu = new Map([
  [Latent.HP, 'hp'],
  [Latent.ATK, 'atk'],
  [Latent.RCV, 'rcv'],
  [Latent.HP_PLUS, 'hp+'],
  [Latent.ATK_PLUS, 'atk+'],
  [Latent.RCV_PLUS, 'rcv+'],
  [Latent.TIME, 'te'],
  [Latent.TIME_PLUS, 'te+'],
  [Latent.AUTOHEAL, 'ah'],
  [Latent.RESIST_FIRE, 'rres'],
  [Latent.RESIST_WATER, 'bres'],
  [Latent.RESIST_WOOD, 'gres'],
  [Latent.RESIST_LIGHT, 'lres'],
  [Latent.RESIST_DARK, 'dres'],
  [Latent.RESIST_FIRE_PLUS, 'rres+'],
  [Latent.RESIST_WATER_PLUS, 'bres+'],
  [Latent.RESIST_WOOD_PLUS, 'gres+'],
  [Latent.RESIST_LIGHT_PLUS, 'lres+'],
  [Latent.RESIST_DARK_PLUS, 'dres+'],
  [Latent.SDR, 'sdr'],
  [Latent.ALL_STATS, 'all'],
  [Latent.EVO, 'evk'],
  [Latent.AWOKEN, 'awk'],
  [Latent.ENHANCED, 'enk'],
  [Latent.REDEEMABLE, 'rek'],
  [Latent.GOD, 'gok'],
  [Latent.DEVIL, 'dek'],
  [Latent.DRAGON, 'drk'],
  [Latent.MACHINE, 'mak'],
  [Latent.BALANCED, 'bak'],
  [Latent.ATTACKER, 'aak'],
  [Latent.PHYSICAL, 'phk'],
  [Latent.HEALER, 'hek'],
]);

const PdchuToLatent = new Map([...LatentToPdchu.entries()].map((entry) => [entry[1], entry[0]]));

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

const AWAKENING_BONUS = new Map([
  [IdcAwakening.HP, 500],
  [IdcAwakening.HP_MINUS, -5000],
  [IdcAwakening.ATK, 100],
  [IdcAwakening.ATK_MINUS, -1000],
  [IdcAwakening.RCV, 200],
  [IdcAwakening.RCV_MINUS, -2000],
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

    this.bound = false;

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

  toPdchu() {
    let string = '';
    if (this.id in vm.model.cards) {
      string += String(this.id);
    } else {
      string += 'sdr';
    }

    if (this.inheritId in vm.model.cards) {
      string += ` (${this.inheritId} | lv${this.inheritLevel} +${this.inheritPlussed ? 297 : 0})`;
    }

    if (this.latents.length) {
      string += '[' + this.latents.map((latent) => LatentToPdchu.get(latent)).join(',') + ']';
    }

    string += ` | lv${this.level} aw${this.awakenings}`;
    if (this.hpPlus != 99 || this.atkPlus != 99 || this.rcvPlus != 99) {
      string += ` +H${this.hpPlus} +A${this.atkPlus} +R${this.rcvPlus}`;
    }

    if (this.superAwakeningIdx >= 0) {
      string += ` sa${this.superAwakeningIdx + 1}`;
    }
    return string;
  }

  fromPdchu(string) {
    let s = string.trim().toLowerCase();
    let monsterId = -1;
    let assistId = -1;
    let assistPlussed = false;
    let assistLevel = 1;
    let latents = [];
    let hpPlus = 99;
    let atkPlus = 99;
    let rcvPlus = 99;
    let awakeningLevel = 9;
    let superAwakeningIdx = -1;
    let level = 99;

    const MONSTER_NAME_REGEX = /^\s*((\"[^"]+\")|[^\(\[\|]+)/;
    const ASSIST_REGEX = /\(\s*("[^"]*")?[^\)]+\)/;
    const ASSIST_NAME_REGEX = /^\s*("[^"]+"|[^|]+)/;
    const LATENT_REGEX = /\[[^\]]*\]/;

    const monsterNameMatch = s.match(MONSTER_NAME_REGEX);
    if (!monsterNameMatch) {
      return 'Monster name is not matchable!';
    }
    let monsterName = monsterNameMatch[0].trim();
    if (monsterName.startsWith('"')) {
      monsterName = monsterName.substring(1);
    }
    if (monsterName.endsWith('"')) {
      monsterName = monsterNameMatch.substring(0, monsterName.length - 1);
    }
    // Remove monster name.
    s = s.replace(monsterNameMatch[0], '');

    // Handle assist.
    let assistName = '';
    const assistMatch = s.match(ASSIST_REGEX);
    if (assistMatch) {
      let assistString = assistMatch[0].substring(1, assistMatch[0].length - 1).trim();
      const assistNameMatch = assistString.match(ASSIST_NAME_REGEX);
      if (assistNameMatch) {
        assistName = assistNameMatch[0].trim();
        if (assistName.startsWith('"')) {
          assistName = assistName.substring(1);
        }
        if (assistName.endsWith('"')) {
          assistName = assistName.substring(0, assistName.length - 1);
        }

        const pieces = assistString.replace(assistNameMatch[0], '').split('|');
        if (pieces.length > 1) {
          const assistStatString = pieces.slice(1).join('');
          const lvMatch = assistStatString.match(/lv\d+/);
          if (lvMatch) {
            assistLevel = Number(lvMatch[0].substring(2));
          }
          const plusMatch = assistStatString.match(/\+297/);
          if (plusMatch) {
            assistPlussed = true;
          }
        }
      }
      s = s.replace(assistNameMatch[0], '').trim();
    }

    let latentMatch = s.match(LATENT_REGEX);
    if (latentMatch) {
      const latentPieces = latentMatch[0].substring(1, latentMatch[0].length - 1).trim().split(',').map((piece) => piece.trim()).filter((a) => !!a);
      for (const piece of latentPieces) {
        const latentName = piece.match(/\w+\+?/)[0];
        const latent = PdchuToLatent.get(latentName);
        if (latent == undefined) {
          continue;
        }
        if (piece.includes('*')) {
          for (let i = 0; i < Number(piece[piece.length - 1]); i++) {
            latents.push(latent)
          }
        } else {
          latents.push(latent);
        }
      }

      s.replace(latentMatch[0], '');
    }

    // Handle Stats.
    if (s.includes('|')) {
      s = s.substring(s.indexOf('|'));
      const saMatch = s.match(/sa\d/);
      if (saMatch) {
        superAwakeningIdx = Number(saMatch[0].substring(2)) - 1;
        level = 110;
      }
      const lvMatch = s.match(/lv\d+/);
      if (lvMatch) {
        level = Number(lvMatch[0].substring(2));
      }
      const awakeningMatch = s.match(/aw\d/)
      if (awakeningMatch) {
        awakeningLevel = Number(awakeningMatch[0].substring(2));
      }
      const plusMatch = s.match(/\+0/);
      if (plusMatch) {
        hpPlus = 0;
        atkPlus = 0;
        rcvPlus = 0;
      }
      const plusHpMatch = s.match(/\+h\d+/);
      if (plusHpMatch) {
        hpPlus = Number(plusHpMatch[0].substring(2));
      }
      const plusAtkMatch = s.match(/\+a\d+/);
      if (plusAtkMatch) {
        atkPlus = Number(plusAtkMatch[0].substring(2));
      }
      const plusRcvMatch = s.match(/\+r\d+/);
      if (plusRcvMatch) {
        rcvPlus = Number(plusRcvMatch[0].substring(2));
      }
    }

    const bestGuessIds = fuzzyMonsterSearch(monsterName, 20, prioritizedMonsterSearch);
    if (bestGuessIds.length == 0) {
      return 'No monsters matched';
    }

    this.inheritPlussed = assistPlussed;
    this.inheritLevel = assistLevel;
    this.latents.length = 0;
    this.awakenings = awakeningLevel;
    this.setId(bestGuessIds[0]);
    this.superAwakeningIdx = superAwakeningIdx;
    this.setLevel(level);
    for (const latent of latents) {
      this.addLatent(latent);
    }
    this.setHpPlus(hpPlus);
    this.setAtkPlus(atkPlus);
    this.setRcvPlus(rcvPlus);
    if (assistName) {
      const bestGuessInheritIds = fuzzyMonsterSearch(assistName, 20);
      if (bestGuessInheritIds.length == 0) {
        this.inheritId = -1;
        console.warn('No inherits matched');
      } else {
        this.inheritId = bestGuessInheritIds[0];
      }
    } else {
      this.inheritId = -1;
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
    if (this.id in vm.model.cards) {
      return vm.model.cards[this.id];
    }
    return {
      awakenings: [],
      maxHp: 0,
      minHp: 0,
      hpGrowth: 0,
      maxAtk: 0,
      minAtk: 0,
      atkGrowth: 0,
      maxRcv: 0,
      minRcv: 0,
      rcvGrowth: 0,
      maxLevel: 1,
      leaderSkillId: 0,
      attribute: -1,
      isLimitBreakable: false,
      superAwakenings: [],
      latentKillers: [],
    };
  }

  getInheritCard() {
    if (this.inheritId == -1) {
      return null;
    }
    return vm.model.cards[this.inheritId];
  }

  isSuperAwakeningActive(isMultiplayer) {
    return (!isMultiplayer && this.level > 99 &&
      this.hpPlus == 99 && this.atkPlus == 99 && this.rcvPlus == 99);
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
    const c = this.getCard() || {awakenings: []};
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
      const inheritSubattributeEl = inheritEl.getElementsByClassName('idc-monster-icon-inherit-subattribute')[0];
      inheritSubattributeEl.style.visibility = 'hidden';
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
    return this.attribute >= 0 ? this.attribute : this.getCard().attribute;
  }

  getSubattribute() {
    return this.getCard().subattribute == -1 || this.attribute == -1 ? this.getCard().subattribute : this.attribute;
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

const EnemySkillEffect = {
  NONE: 'None',
  // MULTI_HIT: 'multi-hit', // #hits
  // GRAVITY: 'gravity', // %Gravity
  STATUS_SHIELD: 'Status Shield', // config unused.
  DAMAGE_SHIELD: 'Shield', // %shield (e.g. 50, 75)
  // SELF_HEAL: 'enemy-heal', // %heal (e.g. 10, 50, 100)
  // PLAYER_HEAL: 'player-heal', // %heal
  DAMAGE_ABSORB: 'Damage Absorb', // Minimum value absorbed.
  ATTRIBUTE_ABSORB: 'Attribute Absorb', // Flags, 1: Fire, 2: Water, 4: Wood, 8: Light, 16: Dark
  COMBO_ABSORB: 'Combo Absorb', // Max combos of the absorb.
  // ENRAGE: 'enrage', // %Damage (e.g. 150, 200, 1000)
  DAMAGE_VOID: 'Damage Void', // Min damage voided
  // CLEAR_BUFFS: 'clear', // config unused.
  // RCV_BUFF: 'rcv', // Percent RCV (e.g. 0, 25, 50, 300)
  // TIME_BUFF_FLAT: 'time-flat', // Time delta (e.g. -5, -2, +1, +5)
  // TIME_BUFF_SCALE: 'time-scale', // Time multiplier (e.g. 0.25, 0.5, 3)
  // Not supporting.
  // ORB_CHANGE: 'orb-change',
  // BLIND: 'blind', // Unused config.
  // STICKY_BLIND: 'sticky-blind', // Config is [positions], turns
  // AWAKENING_BIND: 'awakening-bind',
};

class EnemySkill {
  constructor() {
    // Percentage.  After applying gravity, HP is rounded up.
    this.effect = EnemySkillEffect.NONE;
    this.config = 0;
    this.damagePercent = 0;  // If 0, no attack.
  }

  apply(idc, source) {
    // console.warn('Enemy Skills not handled yet');
    switch(this.effect) {
      case EnemySkillEffect.NONE:
        break;
      case EnemySkillEffect.STATUS_SHIELD:
        source.statusShield = true;
        break;
      case EnemySkillEffect.DAMAGE_SHIELD:
        source.shieldPercent = this.config;
        break;
      case EnemySkillEffect.DAMAGE_ABSORB:
        source.damageAbsorb = this.config;
        break;
      case EnemySkillEffect.ATTRIBUTE_ABSORB:
        source.attributeAbsorb = idxsFromBits(this.config);
        break;
      case EnemySkillEffect.DAMAGE_VOID:
        source.damageVoid = this.config;
        break;
      case EnemySkillEffect.COMBO_ABSORB:
        source.comboAbsorb = this.config;
        break;
      case EnemySkillEffect.ENRAGE:
        source.enrage = this.config;
        break;
      // case EnemySkillEffect.MULTI_HIT:
      // case EnemySkillEffect.GRAVITY:
      // case EnemySkillEffect.SELF_HEAL:
      // case EnemySkillEffect.PLAYER_HEAL:
      // case EnemySkillEffect.CLEAR_BUFFS:
      // case EnemySkillEffect.RCV_BUFF:
      // case EnemySkillEffect.TIME_BUFF_FLAT:
      // case EnemySkillEffect.TIME_BUFF_SCALE:
      default:
        console.warn('Unhandled type: ' + this.effect);
    }
  }

  toJson() {
    return {
      effect: this.effect,
      config: this.config,
      damagePercent: this.damagePercent,
    };
  }
}

EnemySkill.fromJson = (json) => {
  const skill = new EnemySkill();
  skill.damagePercent = json.damagePercent;
  skill.effect = json.effect;
  skill.config = json.config;
  return skill;
}

class EnemySkillset {
  constructor() {
    /**
     * @type {!Array<EnemySkillEffect>}
     */
    this.name = '';
    this.skills = [];
  }

  applySkillset(idc, source) {
    // console.warn('Enemy skillset application not supported yet.');
    for (const skill of this.skills) {
      skill.apply(idc, source);
    }
  }

  toJson() {
    return {
      name: this.name,
      skills: this.skills.map((skill) => skill.toJson()),
    };
  }
}

EnemySkillset.fromJson = (json) => {
  const skillset = new EnemySkillset();
  skillset.name = json.name;
  skillset.skills = json.skills.map((skillJson) => EnemySkill.fromJson(skillJson));
  return skillset;
}

function attributeMultiplier(attacker, defender) {
  if (attacker == 0 && defender == 1) {
    return 0.5;
  } else if (attacker == 0 && defender == 2) {
    return 2;
  } else if (attacker == 1 && defender == 2) {
    return 0.5;
  } else if (attacker == 1 && defender == 0) {
    return 2;
  } else if (attacker == 2 && defender == 0) {
    return 0.5;
  } else if (attacker == 2 && defender == 1) {
    return 2;
  } else if (attacker == 3 && defender == 4) {
    return 2;
  } else if (attacker == 4 && defender == 3) {
    return 2;
  }
  return 1;
}

const TypeToLatent = {
  0: Latent.EVO,
  1: Latent.BALANCED,
  2: Latent.PHYSICAL,
  3: Latent.HEALER,
  4: Latent.DRAGON,
  5: Latent.GOD,
  6: Latent.ATTACKER,
  7: Latent.DEVIL,
  8: Latent.MACHINE,
  9: -1,
  10: -1,
  11: -1,
  12: Latent.AWAKENING,
  13: -1,
  14: Latent.ENHANCED,
  15: Latent.REDEEMABLE,
};

const TypeToKiller = {
  0: IdcAwakening.EVO,
  1: IdcAwakening.BALANCED,
  2: IdcAwakening.PHYSICAL,
  3: IdcAwakening.HEALER,
  4: IdcAwakening.DRAGON,
  5: IdcAwakening.GOD,
  6: IdcAwakening.ATTACKER,
  7: IdcAwakening.DEVIL,
  8: IdcAwakening.MACHINE,
  9: -1,
  10: -1,
  11: -1,
  12: IdcAwakening.AWAKENING,
  13: -1,
  14: IdcAwakening.ENHANCED,
  15: IdcAwakening.REDEEMABLE,
};

class EnemyInstance {
  constructor() {
    // Passives that are always applied
    this.id = -1;
    this.maxHp = 1;
    this.attack = 1;
    this.defense = 0;
    this.resolvePercent = 0;
    this.attributesResisted = [];
    this.typesResisted = [];
    this.preemptiveSkillset = new EnemySkillset(); // Used when loading the monster.
    this.skillsets = [];
    this.turnCounter = 1; // Not to be used yet.

    // Values that can change during battle.
    this.currentHp = 1;
    this.currentAttribute = -1;
    this.statusShield = false;
    this.shieldPercent = 0; // Damage is multiplied by (100 - shieldPercent) / 100
    this.attributeAbsorb = []; // Each attribute absorbed.
    this.comboAbsorb = -1;
    this.damageAbsorb = -1;
    this.damageVoid = -1;
    this.attackMultiplier = 1; // Enrage
    this.turnsRemaining = 1; // Not to be used yet.
    this.turnCounterOverride = -1; // Not to be used yet.

    // Values that can be set by players.
    // this.ignoreAttributeAbsorb = false;
    // this.ignoreDamageAbsorb = false;
    // this.ignoreDamageVoid = false;
    this.ignoreDefensePercent = 0;
    this.poison = 0;
    this.delayed = false; // Not to be used yet.
  }

  getCard() {
    return vm.model.cards[this.id];
  }

  getAttribute() {
    if (this.id in vm.model.cards && this.currentAttribute == -1) {
      return vm.model.cards[this.id].attribute;
    }
    if (this.id in vm.model.cards && this.currentAttribute == -2) {
      return vm.model.cards[this.id].subattribute > -1 ? vm.model.cards[this.id].subattribute : vm.model.cards[this.id].attribute;
    }
    return this.currentAttribute;
  }

  calcDamage(ping, pings, comboContainer, isMultiplayer) {
    let currentDamage = ping.amount;
    const types = vm.model.cards[this.id] ? vm.model.cards[this.id].types : [];
    // Attribute Advantage
    currentDamage *= attributeMultiplier(ping.attribute, this.getAttribute());
    currentDamage = Math.ceil(currentDamage);

    if (!ping.isActive) {
      // Killers
      const killerCount = ping.source.getAwakenings(isMultiplayer, new Set(types.map((type) => TypeToKiller[type]))).length;
      currentDamage *= (3 ** killerCount);

      // Latent Killers
      const validLatents = types.map((type) => TypeToLatent[type]);
      const latentCount = ping.source.latents.filter((latent) => validLatents.includes(latent)).length;
      currentDamage *= (1.5 ** latentCount);
      currentDamage = Math.ceil(currentDamage);
      if (currentDamage >= 2147483648) {
        currentDamage = 2147483647;
      }      
    }

    if (ping.attribute != -1) {
      // Innate Resists (e.g. attribute and type)
      if (this.attributesResisted.includes(ping.attribute)) {
        currentDamage *= 0.5;
        currentDamage = Math.ceil(currentDamage);
      }
      if (this.typesResisted.some((type) => ping.source.getCard().types.includes(type))) {
        currentDamage *= 0.5;
        currentDamage = Math.ceil(currentDamage);
      }

      // Shield
      currentDamage = currentDamage * (100 - this.shieldPercent) / 100
      currentDamage = Math.ceil(currentDamage);

      // Defense + Guard Break, Damage afterward is minimum 1.
      if ((ping.source.countAwakening(IdcAwakening.GUARD_BREAK) == 0 ||
              (new Set(pings.map((ping) => ping.attribute))).size < 5)) {
        const defense = this.defense * (100 - this.ignoreDefensePercent) / 100;
        currentDamage -= defense;
        currentDamage = Math.ceil(currentDamage);

        currentDamage = Math.max(currentDamage, 1);
      }
    }

    // Void
    if (this.damageVoid > 0
        && currentDamage > this.damageVoid
        && !this.ignoreDamageVoid
        && (!(COLORS[ping.attribute] in comboContainer.combos) ||
            comboContainer.combos[COLORS[ping.attribute]].every((combo) => combo.shape != Shape.BOX))) {
      currentDamage = 0;
    }

    // Absorbs
    if (this.attributeAbsorb.includes(ping.attribute) && !this.ignoreAttributeAbsorb ||
        this.damageAbsorb > 0 && currentDamage >= this.damageAbsorb && !this.ignoreDamageAbsorb ||
        this.comboAbsorb > 0 && comboContainer.comboCount() <= this.comboAbsorb && !ping.isActive) {
      currentDamage *= -1;
    }

    return currentDamage;
  }

  setId(id) {
    if (!id in vm.model.cards) {
      return;
    }

    this.id = id;
  }

  getName() {
    if (this.id < 0 || !(this.id in vm.model.cards)) {
      return '-- Unset Enemy --';
    }
    return vm.model.cards[this.id].name;
  }

  reset(idc) {
    this.currentHp = this.maxHp;
    this.currentAttribute = -1;
    this.statusShield = false;
    this.shieldPercent = 0;
    this.attributeAbsorb.length = 0;
    this.comboAbsorb = -1;
    this.damageAbsorb = -1;
    this.damageVoid = -1;
    this.attackMultiplier = 1;
    this.turnsRemaining = this.turnCounter;
    this.turnCounterOverride = -1;
    this.ignoreAttributeAbsorb = false;
    this.ignoreDamageAbsorb = false;
    this.ignoreVoid = false;
    this.ignoreDefensePercent = 0;
    this.poison = 0;
    this.delayed = false;
    if (this.preemptiveSkillset) {
      this.preemptiveSkillset.applySkillset(idc, this);
    }
  }

  useSkillset(skillIdx, idc) {
    if (!skillIdx in this.skillsets) {
      console.warn(`Invalid idx: ${skillIdx}, not performing any.`)
      return;
    }
    this.skillsets[skillIdx].applySkillset(idc, this);
  }

  toJson() {
    return {
      id: this.id,
      maxHp: this.maxHp,
      defense: this.defense,
      resolvePercent: this.resolvePercent,
      attributesResisted: [...this.attributesResisted],
      typesResisted: [...this.typesResisted],
      preemptiveSkillset: this.preemptiveSkillset ? this.preemptiveSkillset.toJson() : null,
      skillsets: this.skillsets.map((skillset) => skillset.toJson()),
      turnCounter: this.turnCounter,
    };
  }
}

EnemyInstance.fromJson = (json) =>{
  const instance = new EnemyInstance();
  instance.id = Number(json.id);
  instance.maxHp = Number(json.maxHp);
  instance.defense = Number(json.defense);
  instance.resolvePercent = Number(json.resolvePercent);
  instance.attributesResisted = json.attributesResisted.map((a) => Number(a));
  instance.typesResisted = json.typesResisted.map((a) => Number(a));
  instance.preemptiveSkillset = json.preemptiveSkillset ?
      EnemySkillset.fromJson(json.preemptiveSkillset) : new EnemySkillset();
  instance.skillsets = json.skillsets.map(
      (skillsetJson) => EnemySkillset.fromJson(skillsetJson));
  instance.turnCounter = json.turnCount;
  instance.reset();
  return instance;
};

const FontColors = {
  0: 'red',
  1: 'cyan',
  2: 'lawngreen',
  3: 'yellow',
  4: 'fuchsia',
  5: 'gray',
};
FontColors[-1] = 'white';


class DungeonFloor {
  constructor() {
    this.enemies = [new EnemyInstance()];
    this.activeEnemy = 0;
  }

  createEditorElement(idx, isSelected = false) {
    const el = document.createElement('tr');
    el.id = `idc-dungeon-floor-${idx}`;

    const floorCell = document.createElement('td');
    const floorName = document.createElement('div');
    floorName.innerText = `F${idx + 1}`;
    floorName.style.minWidth = '25px';
    floorCell.appendChild(floorName);
    const addMonster = document.createElement('div');
    addMonster.className = 'idc-dungeon-floor-add-enemy';
    addMonster.innerText = '[+]';
    addMonster.onmouseover = () => {
      addMonster.style.border = BORDER_COLOR;
    };
    addMonster.onmouseleave = () => {
      addMonster.style.border = '';
    };
    addMonster.onclick = () => {
      this.enemies.length += 1;
      this.activeEnemy = this.enemies.length - 1;
      this.enemies[this.activeEnemy] = new EnemyInstance();
    }
    floorCell.appendChild(addMonster);
    el.appendChild(floorCell);

    const enemies = document.createElement('td');
    const enemiesTable = document.createElement('table');
    enemiesTable.className = 'idc-dungeon-floor-enemies';
    enemiesTable.style.fontSize = 'x-small';
    for (let i = 0; i < this.enemies.length; i++) {
      const enemyRow = document.createElement('tr');
      enemyRow.className = 'idc-dungeon-floor-enemy';

      const enemy = this.enemies[i];
      const enemyEl = document.createElement('td');
      enemyEl.innerText = `${enemy.getName()}`;
      enemyEl.onclick = () => {
        this.activeEnemy = i;
      };
      if (isSelected && i == this.activeEnemy) {
        enemyEl.style.border = BORDER_COLOR;
      }
      enemyRow.appendChild(enemyEl);

      // TODO: Add delete enemy here.
      enemiesTable.appendChild(enemyRow);
    }
    enemies.appendChild(enemiesTable);
    el.appendChild(enemies);
    const deleteEl = document.createElement('td');
    deleteEl.className = 'idc-dungeon-floor-delete';
    deleteEl.innerText = '[X]';
    el.appendChild(deleteEl);
    return el;
  }

  reloadEditorElement(el, isSelected) {
    const enemyTable = el.getElementsByClassName('idc-dungeon-floor-enemies')[0];
    const enemyRows = [...enemyTable.getElementsByClassName('idc-dungeon-floor-enemy')];
    for (let i = 0; i < this.enemies.length || i < enemyRows.length; i++) {
      if (i >= this.enemies.length) {
        enemyRows[i].style.display = 'none';
        continue;
      }
      if (i >= enemyRows.length) {
        const enemyRow = document.createElement('tr');
        enemyRow.className = 'idc-dungeon-floor-enemy';
        const enemy = this.enemies[i];

        const enemyEl = document.createElement('td');
        enemyEl.innerText = `${enemy.getName()}`;
        enemyEl.onclick = () => {
          this.activeEnemy = i;
        }
        if (isSelected && i == this.activeEnemy) {
          enemyEl.style.border = BORDER_COLOR;
        }
        enemyRow.appendChild(enemyEl);
        enemyTable.appendChild(enemyRow);
        // const deleteEl = document.createElement('td');
        // deleteEl.className = 'idc-dungeon-floor-delete';
        // deleteEl.innerText = '[X]';
        // el.appendChild(deleteEl);
        continue;
      }
      const enemyEl = enemyRows[i].getElementsByTagName('td')[0];
      enemyEl.innerText = `${this.enemies[i].getName()}`;
      if (isSelected && i == this.activeEnemy) {
        enemyEl.style.border = BORDER_COLOR;
      } else {
        enemyEl.style.border = '';
      }
      enemyRows[i].display = '';
    }
  }

  deleteEnemy(idx) {
    if (this.enemies.length <= 1 || !idx in this.enemies) {
      console.warn('Unable to delete enemy from floor.');
      return;
    }
    this.enemies.splice(idx, 1);
  }

  getActiveEnemy() {
    return this.enemies[this.activeEnemy];
  }

  toJson() {
    return {
      enemies: this.enemies.map((enemy) => enemy.toJson()),
    };
  }
}

DungeonFloor.fromJson = (json) => {
  const floor = new DungeonFloor();
  floor.enemies = json.enemies.map((enemy) => EnemyInstance.fromJson(enemy));
  return floor;
}

class DungeonInstance {
  constructor(idc) {
    this.idc = idc;
    this.title = '';
    // Ignoring 5x4 boards.
    this.bigBoard = false;
    this.fixedTime = 0;
    // Sets all of your monsters to level 1 temporarily.
    this.isRogue = false;
    this.allAttributesRequired = false;

    this.floors = [new DungeonFloor()];

    this.activeFloor = 0;
    this.editorElement = this.createEditorElement();
  }

  addFloor() {
    this.floors.push(new DungeonFloor());
    this.reloadEditorElement();
  }

  deleteFloor(idx) {
    if (this.floors.length <= 1 || !(idx in this.floors)) {
      console.warn('Unable to delete floor.');
      return;
    }
    this.floors.splice(idx, 1);
    if (this.activeFloor >= idx) {
      this.activeFloor = idx - 1;
    }
    this.reloadEditorElement();
    this.reloadBattleElement();
  }

  createEnemySelector() {
    const maxResults = 15;
    const enemySelection = document.createElement('div');
    const enemySelector = document.createElement('input');
    enemySelector.style.width = '100%';
    enemySelector.placeholder = 'Monster Search';
    const options = document.createElement('div');
    options.display = 'none';
    for (let i = 0; i < maxResults; i++) {
      const option = document.createElement('div');
      option.id = `idc-enemy-select-option-${i}`;
      option.value = '0';
      option.style.display = 'none';
      options.style.fontSize = 'x-small';
      option.onmouseover = () => {
        option.style.border = BORDER_COLOR;
      }
      option.onmouseleave = () => {
        option.style.border = '';
      }
      option.onclick = () => {
        options.style.display = 'none';
        enemySelector.value = option.value;
        this.getActiveEnemy().setId(enemySelector.value);
        this.reloadEditorElement();
        this.reloadBattleElement();
      }
      options.appendChild(option);
    }
    enemySelector.id = 'idc-selector-enemy';
    enemySelector.onkeyup = (e) => {
      if (e.keyCode == 13) {
        const value = document.getElementById(`idc-enemy-select-option-0`).value;
        console.log(`Changing monster id to ${value}`);
        this.getActiveEnemy().setId(value);
        options.style.display = 'none';
        this.reloadEditorElement();
        this.reloadBattleElement();
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
        const option = document.getElementById(`idc-enemy-select-option-${i}`);
        const key = fuzzyMatches[i];
        option.innerText = `${key} - ${vm.model.cards[key].name}`;
        option.value = key;
        option.style.display = 'block';
      }
      for (let i = fuzzyMatches.length; i < maxResults; i++) {
        const option = document.getElementById(`idc-enemy-select-option-${i}`);
        option.style.display = 'none';
      }
    }
    enemySelection.onblur = () => {
      options.style.display = 'none';
    }
    enemySelection.appendChild(enemySelector);
    enemySelection.appendChild(document.createElement('br'));
    enemySelection.appendChild(options);
    return enemySelection;
  }

  createSkillsetEditor(i) {
    const el = document.createElement('div');

    let skillset;
    if (i == -1) {
      skillset = this.getActiveEnemy().preemptiveSkillset;
      el.className = 'idc-enemy-skill-preemptive';
    } else {
      skillset = this.getActiveEnemy().skillsets[i];
    }

    const removeSkillset = document.createElement('div');
    if (i != -1) {
      removeSkillset.innerText = '[-]';
      removeSkillset.onclick = () => {
        this.getActiveEnemy().skillsets.splice(i, 1);
        this.reloadEditorElement();
      };
    }

    const skillsetNameEditor = document.createElement('input');
    skillsetNameEditor.placeholder = 'Skillset Name';
    skillsetNameEditor.value = skillset.name;
    skillsetNameEditor.onchange = () => {
      skillset.name = skillsetNameEditor.value;
      this.reloadBattleElement();
    };
    const addSkill = document.createElement('span');
    addSkill.innerText = 'Add Skill';
    addSkill.onclick = () => {
      skillset.skills.push(new EnemySkill());
      this.reloadEditorElement();
    }
    const skillsetTable = document.createElement('table');
    for (let j = 0; j < skillset.skills.length; j++) {
      const row = document.createElement('tr');

      const removeSkillCell = document.createElement('td');
      removeSkillCell.innerText = '[-]';
      removeSkillCell.onclick = () => {
        skillset.skills.splice(j, 1);
        this.reloadEditorElement();
      }
      row.appendChild(removeSkillCell);

      const skillTypeCell = document.createElement('td');
      const skillTypeSelect = document.createElement('select');
      skillTypeSelect.style.fontSize = 'small';
      for (const skillEffectType of Object.values(EnemySkillEffect)) {
        const skillOption = document.createElement('option');
        skillOption.innerText = skillEffectType;
        skillOption.value = skillEffectType;
        skillTypeSelect.appendChild(skillOption);
      }
      skillTypeSelect.onchange = () => {
        skillset.skills[j].effect = skillTypeSelect.value;
        this.reloadBattleElement();
      }
      skillTypeSelect.value = skillset.skills[j].effect;
      skillTypeCell.appendChild(skillTypeSelect);
      row.appendChild(skillTypeCell)

      const skillConfigCell = document.createElement('td');
      const skillConfigInput = document.createElement('input');
      skillConfigInput.type = 'number';
      skillConfigInput.onchange = () => {
        skillset.skills[j].config = Number(skillConfigInput.value);
        this.reloadBattleElement();
      }
      skillConfigInput.style.fontSize = 'small';
      skillConfigInput.value = skillset.skills[j].config;
      skillConfigCell.appendChild(skillConfigInput);
      row.appendChild(skillConfigCell);

      skillsetTable.appendChild(row);
    }

    el.appendChild(skillsetNameEditor);
    el.appendChild(addSkill);
    // el.appendChild(removeSkill);
    el.appendChild(skillsetTable);
    return el;
  }

  createEnemyEditor() {
    const enemyEditor = document.createElement('div');
    enemyEditor.appendChild(this.createEnemySelector());

    const enemyStatEditTable = document.createElement('table');
    enemyStatEditTable.style.fontSize = 'small';
    const hpRow = document.createElement('tr');
    const hpLabel = document.createElement('td');
    hpLabel.innerText = 'Max HP';
    hpRow.appendChild(hpLabel);
    const hpValue = document.createElement('td');
    const maxHpEditor = document.createElement('input');
    maxHpEditor.id = 'idc-enemy-maxhp';
    maxHpEditor.type = 'number';
    maxHpEditor.onchange = () => {
      this.getActiveEnemy().maxHp = Number(maxHpEditor.value);
      this.getActiveEnemy().currentHp = Number(maxHpEditor.value);
      this.reloadBattleElement();
    }
    hpValue.appendChild(maxHpEditor);
    hpRow.appendChild(hpValue);
    enemyStatEditTable.appendChild(hpRow);
    // Attack setter.
    const atkRow = document.createElement('tr');
    const atkLabel = document.createElement('td');
    atkLabel.innerText = 'Attack';
    atkRow.appendChild(atkLabel);
    const atkValue = document.createElement('td');
    const atkEditor = document.createElement('input');
    atkEditor.id = 'idc-enemy-attack';
    atkEditor.type = 'number';
    atkEditor.onchange = () => {
      this.getActiveEnemy().attack = atkEditor.value;
      this.reloadBattleElement();
    }
    atkValue.appendChild(atkEditor);
    atkRow.appendChild(atkValue);
    enemyStatEditTable.appendChild(atkRow);
    // Defense setter.
    const defenseRow = document.createElement('tr');
    const defenseLabel = document.createElement('td');
    defenseLabel.innerText = 'Defense';
    defenseRow.appendChild(defenseLabel);
    const defenseValue = document.createElement('td');
    const defenseEditor = document.createElement('input');
    defenseEditor.id = 'idc-enemy-defense';
    defenseEditor.type = 'number';
    defenseEditor.onchange = () => {
      this.getActiveEnemy().defense = Number(defenseEditor.value);
      this.reloadBattleElement();
    }
    defenseValue.appendChild(defenseEditor);
    defenseRow.appendChild(defenseValue);
    enemyStatEditTable.appendChild(defenseRow);
    // Resolve setter.
    const resolveRow = document.createElement('tr');
    const resolveLabel = document.createElement('td');
    resolveLabel.innerText = 'Resolve (%)';
    resolveRow.appendChild(resolveLabel);
    const resolveValue = document.createElement('td');
    const resolveEditor = document.createElement('input');
    resolveEditor.id = 'idc-enemy-resolve';
    resolveEditor.type = 'number';
    resolveEditor.onchange = () => {
      this.getActiveEnemy().resolvePercent = resolveEditor.value;
      this.reloadBattleElement();
    }
    resolveValue.appendChild(resolveEditor);
    resolveRow.appendChild(resolveValue);
    enemyStatEditTable.appendChild(resolveRow);
    // Resist Attribute Setter.
    const resistAttributeRow = document.createElement('tr');
    const resistAttributeLabel = document.createElement('td');
    resistAttributeLabel.innerText = 'Resist Attr';
    resistAttributeRow.appendChild(resistAttributeLabel);
    const resistAttributeValue = document.createElement('td');
    const resistAttributeEditor = document.createElement('table');
    const resistAttributesActualValues = document.createElement('tr');
    const resistAttributesLabelValues = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
      const cellUp = document.createElement('td');
      const elCheckbox = document.createElement('input');
      elCheckbox.id = `idc-enemy-resist-attributes-${i}`;
      elCheckbox.className = 'idc-enemy-resist-attributes';
      elCheckbox.value = i;
      elCheckbox.type = 'checkbox';
      elCheckbox.onclick = () => {
        this.getActiveEnemy().attributesResisted.length = 0;
        for (const checkbox of document.getElementsByClassName('idc-enemy-resist-attributes')) {
          if (checkbox.checked) {
            this.getActiveEnemy().attributesResisted.push(Number(checkbox.value));
          }
        }
        this.reloadBattleElement();
      }
      cellUp.appendChild(elCheckbox);
      resistAttributesActualValues.appendChild(cellUp);
      const cellDown = document.createElement('td');
      cellDown.innerText = COLORS[i].toUpperCase();
      resistAttributesLabelValues.appendChild(cellDown);
    }

    const resistTypesRow = document.createElement('tr');
    const resistTypesLabel = document.createElement('td');
    resistTypesLabel.innerText = 'Resist Type';
    resistTypesRow.appendChild(resistTypesLabel);
    const resistTypesCell = document.createElement('td');
    const resistType1Select = document.createElement('select');
    resistType1Select.id = 'idc-enemy-resist-type-1';
    const resistType2Select = document.createElement('select');
    resistType2Select.id = 'idc-enemy-resist-type-2';
    resistType1Select.onchange = () => {
      const resists = [Number(resistType1Select.value), Number(resistType2Select.value)];
      this.getActiveEnemy().typesResisted = resists.filter((value) => value > -1);
      this.reloadBattleElement();
    }
    for (const type of [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 14, 15]) {
      const typeOption1 = document.createElement('option');
      typeOption1.value = type;
      typeOption1.innerText = TypeToName[type];
      resistType1Select.appendChild(typeOption1);
      const typeOption2 = document.createElement('option');
      typeOption2.value = type;
      typeOption2.innerText = TypeToName[type];
      resistType2Select.appendChild(typeOption2);
    }
    resistTypesCell.appendChild(resistType1Select);
    resistTypesCell.appendChild(resistType2Select);
    resistTypesRow.appendChild(resistTypesCell);

    resistAttributeEditor.appendChild(resistAttributesActualValues);
    resistAttributeEditor.appendChild(resistAttributesLabelValues);
    resistAttributeValue.appendChild(resistAttributeEditor);
    resistAttributeRow.appendChild(resistAttributeValue);
    enemyStatEditTable.appendChild(resistAttributeRow);
    enemyStatEditTable.appendChild(resistTypesRow);
    // this.preemptiveSkillset = null; // Used when loading the monster.
    // this.skillsets = [];
    // this.turnCounter = 1; // Not to be used yet.
    enemyEditor.appendChild(enemyStatEditTable);

    const preemptiveLabel = document.createElement('div');
    preemptiveLabel.style.marginTop = '5px';
    preemptiveLabel.style.fontSize = 'medium';
    preemptiveLabel.innerText = 'Preemptive';
    enemyEditor.appendChild(preemptiveLabel);
    enemyEditor.appendChild(this.createSkillsetEditor(-1));

    const skillsetEditorLabel = document.createElement('div');
    skillsetEditorLabel.style.fontSize = 'medium';
    skillsetEditorLabel.style.marginTop = '5px';
    skillsetEditorLabel.innerText = 'Skillsets';
    enemyEditor.appendChild(skillsetEditorLabel);

    const addSkillset = document.createElement('div');
    addSkillset.style.fontSize = 'normal';
    addSkillset.innerText = 'Add Skillset';
    addSkillset.onclick = () => {
      this.getActiveEnemy().skillsets.push(new EnemySkillset());
      this.reloadEditorElement();
    }
    enemyEditor.appendChild(addSkillset);
    const skillEditorEl = document.createElement('div');
    skillEditorEl.id = 'idc-enemy-skills';
    enemyEditor.appendChild(skillEditorEl);

    return enemyEditor
  }

  createEditorElement() {
    const dungeonContainer = document.createElement('div');
    dungeonContainer.id = 'idc-dungeon-editor';
    dungeonContainer.style.padding = '5px';
    const titleSetter = document.createElement('input');
    titleSetter.id = 'idc-dungeon-editor-title'
    titleSetter.style.width = '100%';
    titleSetter.onkeyup = () => {
      this.title = titleSetter.value;
    };
    dungeonContainer.appendChild(titleSetter);

    const floorAdder = document.createElement('div');
    floorAdder.id = 'idc-dungeon-editor-addfloor';
    floorAdder.innerText = 'Add Floor';
    floorAdder.onclick = () => {
      this.addFloor();
    };
    floorAdder.onmouseover = () => {
      floorAdder.style.border = BORDER_COLOR;
    };
    floorAdder.onmouseleave = () => {
      floorAdder.style.border = '';
    };
    dungeonContainer.appendChild(floorAdder);

    const floorsEditor = document.createElement('table');
    floorsEditor.id = 'idc-dungeon-editor-floors'
    floorsEditor.style.fontSize = 'small';
    for (let i = 0; i < this.floors.length; i++) {
      const floorEditor = this.floors[i].createEditorElement(i, i == this.activeFloor);
      floorEditor.onclick = () => {
        this.getActiveEnemy().reset();
        this.activeFloor = i;
        this.getActiveEnemy().reset();
        this.reloadEditorElement();
        this.reloadBattleElement();
      }
      const floorDelete = floorEditor.getElementsByClassName('idc-dungeon-floor-delete')[0];
      floorDelete.onclick = () => {
        this.deleteFloor(i, idc);
      }

      floorsEditor.appendChild(floorEditor);
    }
    dungeonContainer.appendChild(floorsEditor);

    dungeonContainer.appendChild(this.createEnemyEditor());

    return dungeonContainer;
  }

  reloadEditorElement() {
    document.getElementById('idc-dungeon-editor-title').value = this.title;
    const floorsEditor = document.getElementById('idc-dungeon-editor-floors');
    while (floorsEditor.firstChild) {
      floorsEditor.removeChild(floorsEditor.firstChild);
    }

    for (let i = 0; i < this.floors.length; i++) {
      const floorEditor = this.floors[i].createEditorElement(i, i == this.activeFloor);
      floorEditor.onclick = () => {
        this.getActiveEnemy().reset();
        this.activeFloor = i;
        this.getActiveEnemy().reset();
        this.reloadEditorElement();
        this.reloadBattleElement();
      }
      floorsEditor.appendChild(floorEditor);
      const floorDelete = floorEditor.getElementsByClassName('idc-dungeon-floor-delete')[0];
      floorDelete.onclick = () => {
        this.deleteFloor(i);
      }
    }

    const enemy = this.getActiveEnemy();
    document.getElementById('idc-selector-enemy').value = enemy.getName();
    document.getElementById('idc-enemy-maxhp').value = enemy.maxHp;
    document.getElementById('idc-enemy-attack').value = enemy.attack;
    document.getElementById('idc-enemy-defense').value = enemy.defense;
    document.getElementById('idc-enemy-resolve').value = enemy.resolvePercent;
    for (const el of document.getElementsByClassName('idc-enemy-resist-attributes')) {
      el.checked = enemy.attributesResisted.includes(Number(el.value));
    }
    document.getElementById('idc-enemy-resist-type-1').value = enemy.typesResisted.length ? enemy.typesResisted[0] : -1;
    document.getElementById('idc-enemy-resist-type-2').value = enemy.typesResisted.length > 1 ? enemy.typesResisted[1] : -1;

    const preemptiveEl = document.getElementsByClassName('idc-enemy-skill-preemptive')[0];
    preemptiveEl.parentElement.insertBefore(this.createSkillsetEditor(-1), preemptiveEl);
    preemptiveEl.parentElement.removeChild(preemptiveEl);

    const skillsetEl = document.getElementById('idc-enemy-skills');
    while (skillsetEl.firstChild) {
      skillsetEl.removeChild(skillsetEl.firstChild);
    }
    for (let i = 0; i < enemy.skillsets.length; i++) {
      skillsetEl.appendChild(this.createSkillsetEditor(i));
    }
  }

  createEnemyHpEl() {
    const enemyHpEl = document.createElement('div');
    enemyHpEl.style.paddingTop = '5px';
    enemyHpEl.style.paddingBottom = '10px';
    enemyHpEl.style.paddingLeft = '5%';
    enemyHpEl.style.paddingRight = '5%';
    const enemyHpSlider = document.createElement('input');
    enemyHpSlider.id = 'idc-battle-opponent-hp-slider';
    enemyHpSlider.type = 'range';
    enemyHpSlider.min = 0;
    enemyHpSlider.max = 1;
    enemyHpSlider.style.webkitAppearance = 'none';
    enemyHpSlider.style.width = '100%';
    enemyHpSlider.style.height = '5px';
    enemyHpSlider.style.marginBottom = '5px';
    enemyHpSlider.onchange = () => {
      this.getActiveEnemy().currentHp = Math.round(Number(enemyHpSlider.value));
      this.reloadBattleElement();
    };
    enemyHpEl.appendChild(enemyHpSlider);

    const enemyHpInput = document.createElement('input');
    enemyHpInput.id = 'idc-battle-opponent-hp-input';
    enemyHpInput.type = 'number';
    enemyHpInput.style.width = '100px';
    enemyHpInput.onchange = () => {
      const enemy = this.getActiveEnemy();
      enemy.currentHp = Number(enemyHpInput.value);
      if (enemy.currentHp > enemy.maxHp) {
        enemy.currentHp = enemy.maxHp;
      }
      if (enemy.currentHp < 0) {
        enemy.currentHp = 0;
      }
      this.reloadBattleElement();
    };
    enemyHpEl.appendChild(enemyHpInput);

    const divisionSpan = document.createElement('span');
    divisionSpan.innerText = '/';
    enemyHpEl.appendChild(divisionSpan);

    const enemyHpMax = document.createElement('span');
    enemyHpMax.id = 'idc-battle-opponent-hp-max';
    enemyHpMax.innerText = '1';
    enemyHpMax.style.marginRight = '15px';
    enemyHpEl.appendChild(enemyHpMax);

    const enemyHpPercent = document.createElement('span');
    enemyHpPercent.id = 'idc-battle-opponent-hp-percent';
    enemyHpPercent.innerText = '100%';
    enemyHpEl.appendChild(enemyHpPercent);
    return enemyHpEl;
  }

  createOpponentSetter() {
    const opponentSetterTable = document.createElement('table');
    opponentSetterTable.style.fontSize = 'small';
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
      }
      opponentSetterTable.appendChild(row);
    }
    const opponentSetterCells = opponentSetterTable.getElementsByTagName('td');
    // Status Shield, Damage Shield, Current Attribute
    const statusCheckbox = document.createElement('input');
    statusCheckbox.id = 'idc-battle-opponent-status';
    statusCheckbox.type = 'checkbox';
    statusCheckbox.onclick = () => {
      this.getActiveEnemy().statusShield = statusCheckbox.checked;
      this.reloadBattleElement();
    };
    const shieldInput = document.createElement('input');
    shieldInput.id = 'idc-battle-opponent-shield';
    shieldInput.type = 'number';
    shieldInput.value = 0;
    shieldInput.style.width = '45px';
    shieldInput.onchange = () => {
      let value = Number(shieldInput.value);
      if (value < 0) {
        value = 0;
      }
      if (value > 100) {
        value = 100;
      }
      this.getActiveEnemy().shieldPercent = value;
      this.reloadBattleElement();
    };
    const opponentAttributeSetter = document.createElement('select');
    opponentAttributeSetter.id = 'idc-battle-opponent-attribute';
    opponentAttributeSetter.onchange = () => {
      this.getActiveEnemy().currentAttribute = opponentAttributeSetter.value;
      this.reloadBattleElement();
    }
    const optionMain = document.createElement('option');
    optionMain.innerText = 'Main';
    optionMain.value = -1;
    optionMain.selected = true;
    opponentAttributeSetter.appendChild(optionMain);
    const optionSub = document.createElement('option');
    optionSub.innerText = 'Sub';
    optionSub.value = -2;
    opponentAttributeSetter.appendChild(optionSub);
    const optionFire = document.createElement('option');
    optionFire.innerText = 'Fire';
    optionFire.value = 0;
    opponentAttributeSetter.appendChild(optionFire);
    const optionWater = document.createElement('option');
    optionWater.innerText = 'Water';
    optionWater.value = 1;
    opponentAttributeSetter.appendChild(optionWater);
    const optionWood = document.createElement('option');
    optionWood.innerText = 'Wood';
    optionWood.value = 2;
    opponentAttributeSetter.appendChild(optionWood);
    const optionLight = document.createElement('option');
    optionLight.innerText = 'Light';
    optionLight.value = 3;
    opponentAttributeSetter.appendChild(optionLight);
    const optionDark = document.createElement('option');
    optionDark.innerText = 'Dark';
    optionDark.value = 4;
    opponentAttributeSetter.appendChild(optionDark);

    opponentSetterCells[0].innerText = 'Status';
    opponentSetterCells[1].appendChild(statusCheckbox);
    opponentSetterCells[2].innerText = 'Shield';
    opponentSetterCells[3].appendChild(shieldInput);
    opponentSetterCells[4].innerText = 'Attribute';
    opponentSetterCells[5].appendChild(opponentAttributeSetter);
    // Damage, Combo, Attribute Absorb
    const damageAbsorbInput = document.createElement('input');
    damageAbsorbInput.id = 'idc-battle-opponent-absorb-damage';
    damageAbsorbInput.type = 'number';
    damageAbsorbInput.value = -1;
    damageAbsorbInput.style.width = '100px';

    damageAbsorbInput.onchange = () => {
      let value = Number(damageAbsorbInput.value);
      if (value <= 0) {
        value = -1;
      }
      this.getActiveEnemy().damageAbsorb = value;
      this.reloadBattleElement();
    };

    const comboAbsorbInput = document.createElement('input');
    comboAbsorbInput.type = 'number';
    comboAbsorbInput.id = 'idc-battle-opponent-absorb-combo';
    comboAbsorbInput.type = 'number';
    comboAbsorbInput.value = 0;
    comboAbsorbInput.style.width = '45px';
    comboAbsorbInput.onchange = () => {
      let value = Number(comboAbsorbInput.value);
      if (value <= 0) {
        value = -1;
      }
      this.getActiveEnemy().comboAbsorb = value;
      this.reloadBattleElement();
    };

    const attrAbsorbEl = document.createElement('div');
    for (let i = 0; i < 5; i++) {
      const absorbSpan = document.createElement('span');
      absorbSpan.id = `idc-battle-opponent-absorb-attr-${i}`;
      absorbSpan.style.cursor = 'pointer';
      absorbSpan.selected = false;
      absorbSpan.innerText = COLORS[i].toUpperCase();
      absorbSpan.onmouseover = () => {
        absorbSpan.style.backgroundColor = 'darkgray';
      };
      absorbSpan.onmouseleave = () => {
        absorbSpan.style.backgroundColor = '';
      };
      absorbSpan.onclick = () => {
        const absorbed = this.getActiveEnemy().attributeAbsorb;
        if (absorbed.includes(i)) {
          absorbed.splice(absorbed.indexOf(i), 1);
        } else {
          absorbed.push(i);
        }
        this.reloadBattleElement();
      };
      attrAbsorbEl.appendChild(absorbSpan);
    }

    opponentSetterCells[6].innerText = '>=Absorb';
    opponentSetterCells[7].appendChild(damageAbsorbInput);
    opponentSetterCells[8].innerText = '<=Combo';
    opponentSetterCells[9].appendChild(comboAbsorbInput)
    opponentSetterCells[10].innerText = 'Attr Absorb';
    opponentSetterCells[11].appendChild(attrAbsorbEl);
    // Damage Void, Defense Break, Enrage
    const voidInput = document.createElement('input');
    voidInput.id = 'idc-battle-opponent-void';
    voidInput.type = 'number';
    voidInput.value = 0;
    voidInput.style.width = '100px';
    voidInput.onchange = () => {
      let value = Number(voidInput.value);
      if (value <= 0) {
        value = -1;
      }
      this.getActiveEnemy().damageVoid = value;
      this.reloadBattleElement();
    };
    const defBreakInput = document.createElement('input');
    defBreakInput.id = 'idc-battle-opponent-defbreak';
    defBreakInput.type = 'number';
    defBreakInput.style.width = '45px';
    defBreakInput.value = 0;
    defBreakInput.onchange = () => {
      let value = Number(defBreakInput.value);
      if (value < 0) {
        value = 0;
      }
      if (value > 100) {
        value = 100;
      }
      this.getActiveEnemy().ignoreDefensePercent = value;
      this.reloadBattleElement();
    };

    const enrageInput = document.createElement('input');
    enrageInput.id = 'idc-battle-opponent-enrage';
    enrageInput.type = 'number';
    enrageInput.style.width = '45px';
    enrageInput.value = 100;
    enrageInput.onchange = () => {
      console.warn('Enrage set to ' + enrageInput.value + ' but not used!');
    };

    opponentSetterCells[12].innerText = '>=Void';
    opponentSetterCells[13].appendChild(voidInput);
    opponentSetterCells[14].innerText = '%DefBreak';
    opponentSetterCells[15].appendChild(defBreakInput);
    opponentSetterCells[16].innerText = 'Enrage%';
    opponentSetterCells[17].appendChild(enrageInput);
    return opponentSetterTable;
  }

  createActionOptions() {
    let validIdxs = [];
    switch(this.idc.playerMode) {
      case 1: validIdxs = [0, 1, 2, 3, 4, 5];
        break;
      case 2: validIdxs = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
        break;
      case 3: validIdxs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        break;
    }
    const options = [];

    // const actionSelect = document.createElement('select');
    const comboOption = document.createElement('option');
    comboOption.id = `idc-battle-team-action-combo`;
    comboOption.innerText = 'Combos';
    comboOption.value = 0;
    options.push(comboOption);
    for (let i = 0; i < this.idc.playerMode * 12; i++) {
      const monsterIdx = Math.floor(i / 2);
      if (!validIdxs.includes(monsterIdx)) {
        continue;
      }
      const actionOption = document.createElement('option');
      if (i % 2 == 0) {
        const asId = this.idc.monsters[monsterIdx].getCard().activeSkillId;
        if (!(asId in vm.model.playerSkills)) {
          continue;
        }
        actionOption.id = `idc-battle-team-action-active-main-${monsterIdx}`;
        actionOption.innerText = `P${Math.floor(i / 12) + 1}-${monsterIdx % 6 + 1} ` + getActiveSkillEffects(asId).description;
      } else {
        const inherit = this.idc.monsters[monsterIdx].getInheritCard();
        if (!inherit) {
          continue;
        }
        const asId = inherit.activeSkillId;
        if (!(asId in vm.model.playerSkills)) {
          continue;
        }
        actionOption.id = `idc-battle-team-action-active-inherit-${monsterIdx}`;
        actionOption.innerText = `P${Math.floor(i / 12) + 1}-${monsterIdx % 6 + 1}i ` + getActiveSkillEffects(asId).description;
      }
      actionOption.value = i + 1;
      options.push(actionOption);
      // actionSelect.appendChild(actionOption)
    }
    return options;
  }

  createDamageTable() {
    const damageTable = document.createElement('table');
    damageTable.style.fontSize = 'small';
    damageTable.style.textAlign = 'right';
    damageTable.style.marginTop = '5px';
    const damageHeader = document.createElement('tr');
    const idHeader = document.createElement('th');
    idHeader.innerText = 'id';
    damageHeader.appendChild(idHeader);
    const boundHeader = document.createElement('th');
    boundHeader.innerText = 'Bound';
    damageHeader.appendChild(boundHeader);
    const attrHeader = document.createElement('th');
    attrHeader.innerText = 'Attr';
    damageHeader.appendChild(attrHeader);
    const baseDamageHeader = document.createElement('th');
    baseDamageHeader.innerText = 'Base';
    baseDamageHeader.style.minWidth = '70px';
    damageHeader.appendChild(baseDamageHeader);
    const hitDamageHeader = document.createElement('th');
    hitDamageHeader.innerText = 'Hit';
    hitDamageHeader.style.minWidth = '70px';
    damageHeader.appendChild(hitDamageHeader);
    const actualDamageHeader = document.createElement('th');
    actualDamageHeader.innerText = 'Actual';
    actualDamageHeader.style.minWidth = '70px';
    damageHeader.appendChild(actualDamageHeader);
    damageTable.appendChild(damageHeader);
    for (let i = 0; i < 6; i++) {
      const damageRow = document.createElement('tr');
      const idCell = document.createElement('td');
      idCell.id = `idc-battle-damage-id-${i}`;
      idCell.innerText = '-';
      idCell.style.height = '32px';
      damageRow.appendChild(idCell);
      const bindCell = document.createElement('td');
      const bindCheckbox = document.createElement('input');
      bindCheckbox.id = `idc-battle-damage-bound-${i}`;
      bindCheckbox.type = 'checkbox';
      bindCheckbox.onclick = () => {
        this.idc.getActiveTeam()[i].bound = bindCheckbox.checked;
        this.reloadBattleElement();
      }
      bindCell.appendChild(bindCheckbox);
      damageRow.appendChild(bindCell);
      const attributeOverride = document.createElement('td');
      const attributeSelector = document.createElement('select');
      attributeSelector.id = `idc-battle-damage-attr-${i}`;
      attributeSelector.style.fontSize = 'small';
      attributeSelector.onchange = (e) => {
        this.idc.getActiveTeam()[i].attribute = Number(attributeSelector.value);
        this.reloadBattleElement();
      }
      const optionNone = document.createElement('option');
      optionNone.selected = true;
      const optionFire = document.createElement('option');
      const optionWater = document.createElement('option');
      const optionWood = document.createElement('option');
      const optionLight = document.createElement('option');
      const optionDark = document.createElement('option');
      optionNone.innerText = 'Self';
      optionFire.innerText = 'Fire';
      optionWater.innerText = 'Water';
      optionWood.innerText = 'Wood';
      optionLight.innerText = 'Light';
      optionDark.innerText = 'Dark';
      optionNone.value = -1;
      optionFire.value = 0;
      optionWater.value = 1;
      optionWood.value = 2;
      optionLight.value = 3;
      optionDark.value = 4;
      attributeSelector.appendChild(optionNone);
      attributeSelector.appendChild(optionFire);
      attributeSelector.appendChild(optionWater);
      attributeSelector.appendChild(optionWood);
      attributeSelector.appendChild(optionLight);
      attributeSelector.appendChild(optionDark);
      attributeOverride.appendChild(attributeSelector);
      damageRow.appendChild(attributeOverride);

      const preDamageCell = document.createElement('td');
      const postDamageCell = document.createElement('td');
      const effectiveDamageCell = document.createElement('td');

      preDamageCell.id = `idc-battle-damage-pre-${i}`;
      postDamageCell.id = `idc-battle-damage-post-${i}`;
      effectiveDamageCell.id = `idc-battle-damage-effective-${i}`;

      preDamageCell.style.padding = '3px';
      postDamageCell.style.padding = '3px';
      effectiveDamageCell.style.padding = '3px';

      preDamageCell.style.border = '1px solid white';
      postDamageCell.style.border = '1px solid white';
      effectiveDamageCell.style.border = '1px solid white';

      const preDamageMain = document.createElement('div');
      const postDamageMain = document.createElement('div');
      const effectiveDamageMain = document.createElement('div');
      preDamageMain.id = `idc-battle-damage-pre-main-${i}`;
      postDamageMain.id = `idc-battle-damage-post-main-${i}`;
      effectiveDamageMain.id = `idc-battle-damage-effective-main-${i}`;
      preDamageMain.innerText = '0';
      postDamageMain.innerText = '0';
      effectiveDamageMain.innerText = '0';
      preDamageCell.appendChild(preDamageMain);
      postDamageCell.appendChild(postDamageMain);
      effectiveDamageCell.appendChild(effectiveDamageMain);

      const preDamageSub = document.createElement('div');
      const postDamageSub = document.createElement('div');
      const effectiveDamageSub = document.createElement('div');
      preDamageSub.id = `idc-battle-damage-pre-sub-${i}`;
      postDamageSub.id = `idc-battle-damage-post-sub-${i}`;
      effectiveDamageSub.id = `idc-battle-damage-effective-sub-${i}`;
      preDamageSub.innerText = '0';
      postDamageSub.innerText = '0';
      effectiveDamageSub.innerText = '0';
      preDamageCell.appendChild(preDamageSub);
      postDamageCell.appendChild(postDamageSub);
      effectiveDamageCell.appendChild(effectiveDamageSub);

      damageRow.appendChild(preDamageCell);
      damageRow.appendChild(postDamageCell);
      damageRow.appendChild(effectiveDamageCell);

      damageTable.appendChild(damageRow);
    }

    const totalRow = document.createElement('tr');
    // Unused padding cells.
    const td1 = document.createElement('td');
    totalRow.appendChild(td1);
    const td2 = document.createElement('td');
    totalRow.appendChild(td2);
    const td3 = document.createElement('td');
    totalRow.appendChild(td3);
    const preDamageTotal = document.createElement('td');
    const postDamageTotal = document.createElement('td');
    const effectiveDamage = document.createElement('td');
    const effectiveDamageTotal = document.createElement('div');
    const effectiveDamagePercent = document.createElement('div');
    preDamageTotal.id = 'idc-battle-damage-pre-total';
    postDamageTotal.id = 'idc-battle-damage-post-total';
    effectiveDamageTotal.id = 'idc-battle-damage-effective-total';
    effectiveDamagePercent.id = 'idc-battle-damage-effective-percent';
    preDamageTotal.innerText = '0';
    postDamageTotal.innerText = '0';
    effectiveDamageTotal.innerText = '0';
    effectiveDamagePercent.innerText = '(0%)';
    totalRow.appendChild(preDamageTotal);
    totalRow.appendChild(postDamageTotal);
    effectiveDamage.appendChild(effectiveDamageTotal);
    effectiveDamage.appendChild(effectiveDamagePercent);
    totalRow.appendChild(effectiveDamage);
    damageTable.appendChild(totalRow);
    return damageTable;
  }

  createBattleElement() {
    const el = document.createElement('div');
    el.id = 'idc-battle-opponent';
    el.style.width = '400px';
    // Opponent Name.
    const opponentName = document.createElement('div');
    opponentName.id = 'idc-battle-opponent-name';
    opponentName.style.fontSize = 'large';
    opponentName.innerText = 'Battle Master Dragon Caller, Valeria';
    el.appendChild(opponentName);

    // Opponent Image.
    const opponentImage = document.createElement('img');
    opponentImage.id = 'idc-battle-opponent-img';
    const enemyId = this.getActiveEnemy().id;
    opponentImage.src = CardAssets.getCroppedPortrait(vm.model.cards[(enemyId in vm.model.cards) ? enemyId : 4800]);
    opponentImage.style.maxWidth = '350px';
    opponentImage.style.display = 'block';
    opponentImage.style.marginLeft = 'auto';
    opponentImage.style.marginRight = 'auto';
    el.appendChild(opponentImage);

    // HP Controller
    el.appendChild(this.createEnemyHpEl());

    // Setter for various opponent values
    el.appendChild(this.createOpponentSetter());

    // What action to take.  0 is Combos, 1-36 are actives.
    const actionLabel = document.createElement('div');
    actionLabel.style.display = 'inline-block';
    actionLabel.style.marginTop = '5px';
    actionLabel.innerText = 'Action: ';

    const actionSelect = document.createElement('select');
    actionSelect.id = 'idc-battle-action-select';
    actionSelect.style.fontSize = 'x-small';
    for (const option of this.createActionOptions()) {
      actionSelect.appendChild(option);
    }
    actionSelect.onchange = () => {
      console.log(actionSelect.value);
      this.idc.action = Number(actionSelect.value);
      this.reloadBattleElement();
    }

    el.appendChild(actionLabel);
    el.appendChild(actionSelect);

    // Ping by ping damage.
    el.appendChild(this.createDamageTable());
    return el;
  }

  reloadBattleElement() {
    // Update image.
    let enemy = this.getActiveEnemy();
    if (!(enemy.id in vm.model.cards)) {
      enemy = new EnemyInstance();
      enemy.setId(4800);
    }
    document.getElementById('idc-battle-opponent-name').innerText = enemy.getCard().name;
    const opponentImage = document.getElementById('idc-battle-opponent-img');
    opponentImage.src = CardAssets.getCroppedPortrait(vm.model.cards[enemy.id]);

    // Update HP elements.
    const hpSlider = document.getElementById('idc-battle-opponent-hp-slider');
    hpSlider.style.background = FontColors[enemy.getAttribute()];
    hpSlider.max = enemy.maxHp;
    hpSlider.value = enemy.currentHp;
    const hpInput = document.getElementById('idc-battle-opponent-hp-input');
    hpInput.value = enemy.currentHp;
    const hpMax = document.getElementById('idc-battle-opponent-hp-max');
    hpMax.innerText = enemy.maxHp;
    const hpPercent = document.getElementById('idc-battle-opponent-hp-percent');
    hpPercent.innerText = `${enemy.currentHp * 100 / enemy.maxHp}`.substring(0, 5) + '%';

    // Update opponent setters.
    const statusShield = document.getElementById('idc-battle-opponent-status');
    statusShield.checked = enemy.statusShield;
    const damageShield = document.getElementById('idc-battle-opponent-shield');
    damageShield.value = enemy.shieldPercent;
    const attributeInput = document.getElementById('idc-battle-opponent-attribute');
    attributeInput.value = enemy.currentAttribute;
    const damageAbsorbInput = document.getElementById('idc-battle-opponent-absorb-damage');
    damageAbsorbInput.value = enemy.damageAbsorb;
    document.getElementById('idc-battle-opponent-absorb-combo');
    const comboAbsorbInput = document.getElementById('idc-battle-opponent-absorb-combo');
    comboAbsorbInput.value = enemy.comboAbsorb;
    for (let i = 0; i < 5; i++) {
      const attributeAbsorbEl = document.getElementById(`idc-battle-opponent-absorb-attr-${i}`);
      if (enemy.attributeAbsorb.includes(i)) {
        attributeAbsorbEl.selected = true;
        attributeAbsorbEl.style.border = BORDER_COLOR;
      } else {
        attributeAbsorbEl.selected = false;
        attributeAbsorbEl.style.border = '';
      }
    }
    const damageVoid = document.getElementById('idc-battle-opponent-void');
    damageVoid.value = enemy.damageVoid;
    const defBreak = document.getElementById('idc-battle-opponent-defbreak');
    defBreak.value = enemy.ignoreDefensePercent;

    // Reload Action Select.
    const actionSelect = document.getElementById('idc-battle-action-select');
    while (actionSelect.firstChild) {
      actionSelect.removeChild(actionSelect.firstChild);
    }
    for (const option of this.createActionOptions()) {
      actionSelect.appendChild(option);
    }
    actionSelect.value = this.idc.action;

    const activeTeam = this.idc.getActiveTeam();

    // Reload Damage Table.
    const {pings, bonusAttacks, healing, trueBonusAttack} = this.idc.getDamagePre();
    if (trueBonusAttack) {
      const bonusAttack = new DamagePing();
      bonusAttack.amount = trueBonusAttack;
      bonusAttack.attribute = -1;
      bonusAttack.isActive = true;
      bonusAttack.isSub = true;
      bonusAttack.source = activeTeam[5];
      pings.push(bonusAttack);
    }

    let currentHp = enemy.currentHp;
    // TODO: Figure out this precisely.
    const resolveActive = enemy.resolvePercent > 0 && (100 * enemy.currentHp / enemy.maxHp) > enemy.resolvePercent;
    for (const ping of pings) {
      ping.rawDamage = enemy.calcDamage(ping, pings, this.idc.combos, this.idc.isMultiplayer());
      let next = currentHp - ping.rawDamage;
      if (next < 0) { next = 0; }
      if (next < 1 && resolveActive) {
        next = 1;
        ping.resolveTriggered = true;
      }
      if (next > enemy.maxHp) { next = enemy.maxHp; }
      ping.actualDamage = currentHp - next;
      currentHp = next;
    }

    if (trueBonusAttack) {
      const bonusAttack = pings[pings.length - 1];
      if (bonusAttack.resolveTriggered) {
        bonusAttack.actualDamage++;
        currentHp = 0;
      }
    }


    for (let i = 0; i < 6; i++) {
      const mainColor = FontColors[activeTeam[i].getAttribute()];
      const subColor = FontColors[activeTeam[i].getSubattribute()] ;

      const idEl = document.getElementById(`idc-battle-damage-id-${i}`);
      idEl.innerText = activeTeam[i].id in vm.model.cards ? activeTeam[i].id : '-';
      const boundEl = document.getElementById(`idc-battle-damage-bound-${i}`);
      boundEl.checked = activeTeam[i].bound;
      const attrEl = document.getElementById(`idc-battle-damage-attr-${i}`);
      attrEl.value = String(activeTeam[i].attribute);

      const preDamageMain = document.getElementById(`idc-battle-damage-pre-main-${i}`);
      preDamageMain.innerText = '';
      preDamageMain.style.color = FontColors[5];
      const postDamageMain = document.getElementById(`idc-battle-damage-post-main-${i}`);
      postDamageMain.innerText = '';
      postDamageMain.style.color = FontColors[5];
      const effectiveDamageMain = document.getElementById(`idc-battle-damage-effective-main-${i}`);
      effectiveDamageMain.innerText = '';
      effectiveDamageMain.style.color = FontColors[5];

      const preDamageSub = document.getElementById(`idc-battle-damage-pre-sub-${i}`);
      preDamageSub.innerText = '';
      preDamageSub.style.color = FontColors[5];
      const postDamageSub = document.getElementById(`idc-battle-damage-post-sub-${i}`);
      postDamageSub.innerText = '';
      postDamageSub.style.color = FontColors[5];
      const effectiveDamageSub = document.getElementById(`idc-battle-damage-effective-sub-${i}`);
      effectiveDamageSub.innerText = '';
      effectiveDamageSub.style.color = FontColors[5];

      for (const ping of pings.filter((ping) => ping.source == activeTeam[i])) {
        const preDamage = ping.isSub ? preDamageSub : preDamageMain;
        const postDamage = ping.isSub ? postDamageSub : postDamageMain;
        const effectiveDamage = ping.isSub ? effectiveDamageSub : effectiveDamageMain;

        preDamage.style.color = FontColors[ping.attribute];
        postDamage.style.color = FontColors[ping.attribute];
        effectiveDamage.style.color = FontColors[ping.attribute];

        if (preDamage.innerText) {
          preDamage.innerText += ' +' + numberWithCommas(ping.amount);
          postDamage.innerText += ' +' + numberWithCommas(ping.rawDamage);
          if (ping.actualDamage != ping.rawDamage) {
            effectiveDamage.innerText += ' +' + (ping.actualDamage == 0 ? '0' : numberWithCommas(ping.actualDamage));
          }
        } else {
          preDamage.innerText = numberWithCommas(ping.amount);
          postDamage.innerText = numberWithCommas(ping.rawDamage);
          if (ping.actualDamage != ping.rawDamage) {
            effectiveDamage.innerText = (ping.actualDamage == 0 ? '0' : numberWithCommas(ping.actualDamage));
          }
        }
      }
    }

    const preDamageTotal = document.getElementById('idc-battle-damage-pre-total');
    const postDamageTotal = document.getElementById('idc-battle-damage-post-total');
    const effectiveDamageTotal = document.getElementById('idc-battle-damage-effective-total');
    const effectiveDamagePercent = document.getElementById('idc-battle-damage-effective-percent');
    preDamageTotal.innerText = numberWithCommas(pings.reduce((total, ping) => total + ping.amount, 0));
    postDamageTotal.innerText = numberWithCommas(pings.reduce((total, ping) => total + ping.rawDamage, 0));
    effectiveDamageTotal.innerText = `${numberWithCommas(enemy.currentHp - currentHp)}`;
    effectiveDamagePercent.innerText = `(${String((enemy.currentHp - currentHp) * 100 / enemy.maxHp).substring(0, 5)}%)`;
  }

  getActiveEnemy() {
    return this.floors[this.activeFloor].getActiveEnemy();
  }

  toJson() {
    return {
      title: this.title,
      floors: this.floors.map((floor) => floor.toJson()),
    };
  }

  loadJson(json, idc) {
    this.title = json.title;
    this.floors = json.floors.map((floor) => DungeonFloor.fromJson(floor));
    this.activeFloor = 0;
    this.reloadEditorElement();
    this.reloadBattleElement();
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
    this.onUpdate = [];
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
    el.style.padding = '5px';

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
    for (const update of this.onUpdate) {
      update();
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

class TabbedComponent {
  constructor(tabNames, defaultTab = undefined) {
    if (!defaultTab || !tabNames.includes(defaultTab)) {
      defaultTab = tabNames[0];
    }
    // Overall containing div.
    this.element_ = document.createElement('div');

    this.tabNames_ = [...tabNames];

    this.labelTable_ = document.createElement('table');
    this.labelTable_.style.width = '100%';
    this.labelRow_ = document.createElement('tr');
    this.labelTable_.appendChild(this.labelRow_);
    this.element_.appendChild(this.labelTable_);

    this.tabLabelEls_ = {};
    this.tabEls_ = {};

    for (const tabName of tabNames) {
      const label = document.createElement('td');
      label.innerText = tabName;
      label.style.borderLeft = BORDER_COLOR;
      label.style.borderTop = BORDER_COLOR;
      label.style.borderRight = BORDER_COLOR;
      if (defaultTab != tabName) {
        label.style.borderBottom = BORDER_COLOR;
        label.style.cursor = 'pointer';
      }
      label.onclick = () => this.setActiveTab(tabName);
      this.labelRow_.appendChild(label);
      this.tabLabelEls_[tabName] = label;

      const tab = document.createElement('div');
      tab.style.borderLeft = BORDER_COLOR;
      tab.style.borderRight = BORDER_COLOR;
      tab.style.borderBottom = BORDER_COLOR;
      if (defaultTab != tabName) {
        tab.style.display = 'none';
      }
      this.element_.appendChild(tab);
      this.tabEls_[tabName] = tab;
    }
  }

  getElement() {
    return this.element_;
  }

  setActiveTab(tabNameToActivate) {
    for (const tabName of this.tabNames_) {
      const label = this.tabLabelEls_[tabName];
      const tab = this.tabEls_[tabName];
      if (tabName == tabNameToActivate) {
        label.style.borderBottom = '';
        label.style.cursor = '';
        tab.style.display = '';
      } else {
        label.style.borderBottom = BORDER_COLOR;
        label.style.cursor = 'pointer';
        tab.style.display = 'none';
      }
    }
  }

  getTab(tabName) {
    return this.tabEls_[tabName];
  }
}

// To be loaded.
let prioritizedMonsterSearch;
let prioritizedInheritSearch;
let prefixToCardIds = {};

function loadMonsterSearches() {
  prioritizedMonsterSearch = Object.values(vm.model.cards).filter((card) => {
    return Number(card.id) < 6000;
  }).sort((card1, card2) => {
    if (card2.awakenings[0] == IdcAwakening.AWOKEN_ASSIST) {
      return -1;
    }
    if (card1.awakenings[0] == IdcAwakening.AWOKEN_ASSIST) {
      return 1;
    }
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
    // return card.inheritanceType == 3 || card.inheritanceType == 7;
    return true;
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

  for (const group of vm.model.cardGroups) {
    for (const alias of group.aliases.filter(
        (alias) => alias.indexOf(' ') == -1 && alias == alias.toLowerCase())) {
      prefixToCardIds[alias] = group.cards;
      if (alias == 'halloween') {
        prefixToCardIds['h'] = group.cards;
      }
    }
  }
}

/**
 * Given text, finds the top maxResults monster IDs that match
 * the text in priority order:
 * 1) Exact ID
 * 2) Name Contains Substring
 *    a) Priotize where substrings are at the beginning or follow a space.
 * 4) Fuzzily matches (All letters are present in order in name) 
 *    a) Prioritizes consecutive letters.
 * @param {string} text
 * @param {number=} maxResults
 * @returns {!Array<number>}
 */
function fuzzyMonsterSearch(text, maxResults = 15, searchArray = undefined, filtered = false) {
  searchArray = searchArray || prioritizedMonsterSearch;
  text = text.toLowerCase();
  let toEquip = false;
  if (text.startsWith('equip')) {
    text = text.substring('equip'.length).trimLeft();
    toEquip = true;
  }
  const result = [];
  // Test for exact match.
  if (text in vm.model.cards) {
    result.push(text);
  }
  let lowerPriority = [];
  // Search for monsters whose substrings work.
  for (const card of searchArray) {
    if (result.length >= maxResults) {
      break;
    }
    const idx = card.name.toLowerCase().indexOf(text);
    if (idx < 0) {
      continue;
    }
    if (idx == 0 || card.name[idx - 1] == ' ')  {
      result.push(card.id);
    } else {
      lowerPriority.push(card.id);
    }
  }
  for (const id of lowerPriority) {
    if (result.length < maxResults) {
      result.push(id);
    }
  }
  if (!filtered && result.length < maxResults) {
    let collabMatches = [];
    for (const prefix in prefixToCardIds) {
      if (text.startsWith(prefix)) {
        for (const match of fuzzyMonsterSearch(text.substring(prefix.length).trimLeft(), maxResults, searchArray.filter((card) => prefixToCardIds[prefix].includes(card.id)))) {
          if (!collabMatches.includes(match)) {
            collabMatches.push(match);
          }
        }
      }
    }
    for (const match of collabMatches) {
      if (result.length < maxResults && !result.includes(match)) {
        result.push(match);
      }
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
    if (subattributeText) {
      const filteredSub = searchArray.filter((card) => card.attribute == attribute && card.subattribute == subattribute);
      const matches = fuzzyMonsterSearch(subattributeText, maxResults, filteredSub, true);
      for (const match of matches) {
        if (result.length < maxResults && !result.includes(match)) {
          result.push(match);
        }
      }
    }
    if (attributeText) {
      const filteredAttr = searchArray.filter((card) => card.attribute == attribute);
      const matches = fuzzyMonsterSearch(attributeText, maxResults, filteredAttr, true);
      for (const match of matches) {
        if (result.length < maxResults && !result.includes(match)) {
          result.push(match);
        }
      }
    }
  }

  lowerPriority.length = 0;
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
    let score = 0;
    let scoreDelta = 1;
    for (const c of text) {
      const nextIdx = name.indexOf(c, currentStringIdx + 1);
      if (nextIdx == currentStringIdx + 1) {
        scoreDelta *= 2;
      } else {
        scoreDelta = 1;
      }
      score += scoreDelta;
      currentStringIdx = nextIdx;
      if (currentStringIdx < 0) {
        break;
      }
    }
    if (currentStringIdx >= 0) {
      lowerPriority.push([card.id, score]);
      continue;
    }
  }
  lowerPriority.sort((a, b) => b[1] - a[1]);
  for (const match of lowerPriority) {
    if (result.length > maxResults) {
      break;
    }
    result.push(match[0]);
  }
  if (toEquip) {
    let equips = [];
    for (const id of result) {
      const treeId = vm.model.cards[id].evoTreeBaseId;
      if (treeId in vm.model.evoTrees) {
        for (const card of vm.model.evoTrees[treeId].cards) {
          if (!equips.includes(card.id) && card.awakenings[0] == IdcAwakening.AWOKEN_ASSIST) {
            equips.push(card.id);
          }
        }
      }
    }
    for (const id of result) {
      if (!equips.includes(id)) {
        equips.push(id);
      }
    }
    if (equips.length > maxResults) {
      equips.length = maxResults;
    }
    result.length = 0;
    for (const id of equips) {
      result.push(id);
    }
  }
  return result;
}

class StoredTeams {
  constructor() {
    this.mode = 'teams';
    this.teams = {};
    // TODO: Add dungeon loading/saving.
    this.dungeons = {};
    if (window.localStorage.idcStoredTeams) {
      this.teams = JSON.parse(window.localStorage.idcStoredTeams);
    }
    if (window.localStorage.idcStoredDungeons) {
      this.dungeons = JSON.parse(window.localStorage.idcStoredDungeons);
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

  loadDungeon(name) {
    if (name in this.dungeons) {
      return this.dungeons[name];
    }
  }

  saveDungeon(dungeonJson) {
    this.dungeons[dungeonJson.title] = dungeonJson;
    window.localStorage.idcStoredDungeons = JSON.stringify(this.dungeons);
  }

  deleteDungeon(name) {
    delete this.dungeons[name];
    window.localStorage.idcStoredDungeons = JSON.stringify(this.dungeons);
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
    el.style.padding = '5px';
    el.id = 'idc-save-load';
    const saveTeamEl = document.createElement('div');
    saveTeamEl.id = 'idc-save-team';
    saveTeamEl.innerText = 'Save Team';
    saveTeamEl.style.fontSize = 'large';
    saveTeamEl.onmouseover = () => saveTeamEl.style.border = BORDER_COLOR;
    saveTeamEl.onmouseleave = () => saveTeamEl.style.border = '';

    saveTeamEl.onclick = () => {
      idc.saveTeam();
      this.reload(idc);
    }
    el.appendChild(saveTeamEl);
    for (const teamName in this.teams) {
      const teamEl = document.createElement('div');
      const loadEl = document.createElement('div');
      loadEl.innerText = teamName;
      loadEl.style.width = '95%';
      loadEl.style.display = 'inline-block';
      loadEl.onmouseover = () => loadEl.style.border = BORDER_COLOR;
      loadEl.onmouseleave = () => loadEl.style.border = '';
      loadEl.onclick = () => {
        idc.load(teamName);
      }
      teamEl.appendChild(loadEl);
      const deleteEl = document.createElement('a');
      deleteEl.innerText = 'x';
      deleteEl.onmouseover = () => deleteEl.style.border = BORDER_COLOR;
      deleteEl.onmouseleave = () => deleteEl.style.border = '';
      deleteEl.onclick = () => {
        this.deleteTeam(teamName);
        this.reload(idc);
      }
      teamEl.appendChild(deleteEl);
      el.appendChild(teamEl);
    }

    const saveDungeonEl = document.createElement('div');
    saveDungeonEl.id = 'idc-save-dungeon';
    saveDungeonEl.innerText = 'Save Dungeon';
    saveDungeonEl.style.fontSize = 'large';
    saveDungeonEl.style.paddingTop = '10px';
    saveDungeonEl.onmouseover = () => saveDungeonEl.style.border = BORDER_COLOR;
    saveDungeonEl.onmouseleave = () => saveDungeonEl.style.border = '';

    saveDungeonEl.onclick = () => {
      idc.saveDungeon();
      this.reload(idc);
    }
    el.appendChild(saveDungeonEl);
    for (const dungeonName in this.dungeons) {
      const dungeonEl = document.createElement('div');
      const loadEl = document.createElement('div');
      loadEl.innerText = dungeonName;
      loadEl.style.width = '95%';
      loadEl.style.display = 'inline-block';
      loadEl.onmouseover = () => loadEl.style.border = BORDER_COLOR;
      loadEl.onmouseleave = () => loadEl.style.border = '';
      loadEl.onclick = () => {
        idc.dungeon.loadJson(this.dungeons[dungeonName]);
      }
      dungeonEl.appendChild(loadEl);
      const deleteEl = document.createElement('a');
      deleteEl.innerText = 'x';
      deleteEl.onmouseover = () => deleteEl.style.border = BORDER_COLOR;
      deleteEl.onmouseleave = () => deleteEl.style.border = '';
      deleteEl.onclick = () => {
        this.deleteDungeon(dungeonName);
        this.reload(idc);
      }
      dungeonEl.appendChild(deleteEl);
      el.appendChild(dungeonEl);
    }
    return el;
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

    this.dungeon = new DungeonInstance(this);

    this.playerMode = 2;
    this.activeTeamIdx = 0;

    this.awakeningsActive = true;

    // Set to 7 for 7x6 and 5 for 5x4. Defaults to 6x5.
    this.boardWidth = 6;

    this.combos = new ComboContainer();
    this.combos.onUpdate.push(() => this.reloadStatDisplay());

    this.monsterEditingIndex = 0;

    this.teamForm = null;

    this.title = '';

    // TODO: Consider making this into an object with structuring.
    this.description = '';

    this.saver = new StoredTeams();

    // TODO: Make this updatable.
    this.effects = {
      awakenings: true,
      skillUsed: true,
      damageMult: 1, // Resist.
      burst: {
        attrRestrictions: [],
        typeRestrictions: [],
        multiplier: 1,
      },
      ignoreDamageAbsorb: false,
      ignoreAttributeAbsorb: false,
      ignoreDamageVoid: false,
      ignoreAttributeDamage: [], // 100% damage resist.
      rcvMult: 1,
      fixedHp: -1,
    };

    // Action 0 is a combo.
    // 
    this.action = 0;

    // TODO: Make this updatable.
    this.skillUsed = true;

    this.hpPercent = 100;
  }

  toPdchu() {
    const strings = this.monsters.map((monster) => monster.toPdchu());
    switch (this.playerMode) {
      case 1:
        return strings.slice(0, 6).join(' / ');
      case 2:
        return strings.slice(0, 5).join(' / ') + ' ; ' + strings.slice(6, 11).join(' / ');
      case 3:
        const team1 = strings.slice(0, 6).join(' / ');
        const team2 = strings.slice(6, 12).join(' / ');
        const team3 = strings.slice(12, 18).join(' / ');
        return [team1, team2, team3].join(' ; ');
    }
    return '';
  }

  fromPdchu(string) {
    const teamStrings = string.split(';');
    // We don't support >3P.
    if (teamStrings.length > 3) {
      teamStrings.length = 3;
    }
    this.setPlayerMode(teamStrings.length);
    const defaultMonster = '1929 | +0aw0lv1'
    for (let i = 0; i < teamStrings.length; i++) {
      const multiplierRegex = /\*\s*\d$/;
      if (!teamStrings[i]) {
        teamStrings[i] = defaultMonster;
      }
      let monsterStrings = teamStrings[i].split('/')
          .map((s) => s.trim())
          .reduce((allStrings, monsterString) => {
            const multiply = monsterString.match(multiplierRegex);
            let count = 1;
            if (multiply) {
              count = Number(multiply[0][multiply[0].length - 1]);
              monsterString = monsterString.substring(0, multiply.index);
            }
            for (let j = 0; j < count; j++) {
              allStrings = allStrings.concat([monsterString])
            }
            return allStrings;
          }, []);
      if (this.playerMode == 2) {
        if (monsterStrings.length > 5) {
          monsterStrings.length = 5;
        }
        while(monsterStrings.length < 5) {
          monsterStrings.push(defaultMonster);
        }
      } else {
        if (monsterStrings.length > 6) {
          monsterStrings.length = 6;
        }
        while(monsterStrings.length < 6) {
          monsterStrings.push(defaultMonster);
        }
      }

      const team = this.getTeamAt(i);
      for (let j = 0; j < monsterStrings.length; j++) {
        team[j].fromPdchu(monsterStrings[j]);
      }
    }
  }

  getHpPercent() {
    return this.hpPercent;  // TODO: Make this value changeable.
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

  saveTeam() {
    this.saver.saveTeam(this.toJson());
  }

  saveDungeon() {
    this.saver.saveDungeon(this.dungeon.toJson());
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
    return this.playerMode != 1;
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
          lead(monster, monsters, this.isMultiplayer()) * 
          helper(monster, monsters, this.isMultiplayer()));
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
            lead(monster, monsters, this.isMultiplayer()) * 
            helper(monster, monsters, this.isMultiplayer()));
        const hpBase = monster.getHp(this.isMultiplayer(), this.effects.awakenings);
        totalHp += Math.round(hpBase * hpMult);
        teamHpAwakenings += monster.getAwakenings(this.isMultiplayer(), new Set([IdcAwakening.TEAM_HP])).length;
      }
    }
    return Math.round(totalHp * (1 + 0.05 * teamHpAwakenings));
  }

  getRcv() {
    const monsters = this.getActiveTeam();
    const lead = getLeaderSkillEffects(monsters[0].getCard().leaderSkillId).rcv;
    const helper = getLeaderSkillEffects(monsters[5].getCard().leaderSkillId).rcv;
    let totalRcv = 0;
    let teamRcvAwakenings = 0;
    for (const monster of monsters) {
      if (!monster.id || monster.id <= 0) {
        continue;
      }
      const rcvMult = (
          lead(monster, monsters, this.isMultiplayer()) * 
          helper(monster, monsters, this.isMultiplayer()));
      const rcvBase = monster.getRcv(this.isMultiplayer(), this.effects.awakenings);
      totalRcv += Math.round(rcvBase * rcvMult);
      teamRcvAwakenings += monster.getAwakenings(this.isMultiplayer(), new Set([IdcAwakening.TEAM_RCV])).length;
    }

    return Math.round(totalRcv * (1 + 0.1 * teamRcvAwakenings));
  }

  getDamagePre() {
    if (this.action == 0) {
      return this.getDamageCombos();
    }

    const activeIdx = Math.floor((this.action - 1) / 2);    
    const card = (this.action - 1) % 2 == 0 ?
        this.monsters[activeIdx].getCard() :
        this.monsters[activeIdx].getInheritCard();
    const effects = getActiveSkillEffects(card.activeSkillId);
    return {
      pings: effects.damage(
        this.monsters[activeIdx],
        this.getActiveTeam(),
        this.effects.awakenings,
        this.isMultiplayer(),
        this.dungeon.getActiveEnemy(),
        this.getHpPercent() * this.getHp(),
        this.getHp()),
      healing: 0, // TODO
      trueBonusAttack: 0,
      bonusAttacks: [],
    }
  }

  // Get all pings of damage along with healing and bonus attacks.
  // This is damage before hitting an opponent.
  getDamageCombos() {
    // Cleanup.
    this.combos.bonusCombos = 0;

    let monsters = this.getActiveTeam();
    const lead = monsters[0].bound ? copyBaseLeader() : getLeaderSkillEffects(monsters[0].getCard().leaderSkillId);
    const helper = monsters[5].bound ? copyBaseLeader() : getLeaderSkillEffects(monsters[5].getCard().leaderSkillId);
    const MP = this.isMultiplayer();
    const percent = this.getHpPercent();
    function countAwakenings(awakening){
      return monsters.reduce((total, monster) => total + (monster.bound ? 0 : monster.countAwakening(awakening, MP)), 0);
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

    // Row Leader skill?
    // 7c Leader skill?
    monsters = monsters.filter((monster) => monster.id && monster.id >= 0);
    let pings = Array(2 * monsters.length);

    // Set up pings.
    for (let i = 0; i < monsters.length; i++) {
      if (monsters[i].bound) {
        continue;
      }
      pings[i] = new DamagePing(monsters[i], monsters[i].attribute >= 0 ? monsters[i].attribute : monsters[i].getCard().attribute);
      if (monsters[i].getCard().subattribute >= 0) {
        pings[i + monsters.length] = new DamagePing(monsters[i], monsters[i].getSubattribute(), true);
      }
    }
    pings = pings.filter((ping) => !!ping);

    // Sum combos.
    for (const c of 'rbgld') {
      for (const combo of this.combos.combos[c]) {
        let baseMultiplier = (combo.count + 1) * 0.25;
        // Handle enhances.
        if (combo.enhanced) {
          baseMultiplier *= (1 + 0.06 * combo.enhanced);
          baseMultiplier *= (1 + enhancedCounts[c] * 0.07);
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
            if (ping.attribute == ping.source.getAttribute()) {
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
    let trueBonusAttack = 0;

    // No matching conditionals for this recovery.
    const partialRcv = (lead, monster) => lead.rcv(monster, monsters, percent, this.skillUsed, MP);

    for (const combo of this.combos.combos['h']) {
      let multiplier = (combo.count + 1) * 0.25;
      if (combo.enhanced) {
        multiplier *= (1 + 0.06 * combo.enhanced);
        multiplier *= (1 + enhancedCounts.h * 0.07);
      }
      for (const monster of monsters) {
        let rcv = monster.getRcv();
        if (combo.count == 4) {
          rcv *= (1.5 ** monster.countAwakening(Idc.OE_HEART, MP));
        }
        if (combo.shape == Shape.COLUMN &&
            monster.countAwakening(IdcAwakening.BONUS_ATTACK, MP)) {
          trueBonusAttack += 1;
        }
        if (combo.shape == Shape.BOX) {
          trueBonusAttack += (99 * monster.countAwakening(IdcAwakening.BONUS_ATTACK_SUPER, MP));
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
      ping.multiply(comboMultiplier, Round.UP);
    }
    healing = Math.ceil(healing * comboMultiplier);

    // Apply awakenings.
    // Known order according to PDC:
    // (7c/10c), (80%/50%), Rows, Sfua, L-Guard
    // Poison Blessing occurs after rows.  Unknown relative to L-Guard as it's impossible to get both.
    // Jammer applies after Sfua.
    // Assuming:
    // (7c/10c), (80%/50%), Rows, Sfua, L-Guard, JammerBless, PoisonBless

    // 7c + 10c. Order does not matter since they are both whole number multiplications.
    for (const ping of pings) {
      const count = this.combos.comboCount();
      let multiplier = 1;
      if (count >= 7) {
        multiplier *= 2 ** ping.source.countAwakening(IdcAwakening.COMBO_7);
        if (count >- 10) {
          multiplier *= 5 ** ping.source.countAwakening(IdcAwakening.COMBO_10);
        }
      }
      ping.multiply(multiplier);
    }

    // <=50%, >=80%. Order does not matter since they are mutually exclusive.
    for (const ping of pings) {
      const percent = this.getHpPercent();
      let multiplier = 1;
      if (percent <= 50) {
        multiplier *= 2 ** ping.source.countAwakening(IdcAwakening.HP_LESSER);
      }
      if (percent >= 80) {
        multiplier *= 1.5 ** ping.source.countAwakening(IdcAwakening.HP_GREATER);
      }
      ping.multiply(multiplier, Round.NEAREST);
    }

    // Rows
    for (const ping of pings) {
      if (rowCounts[ping.attribute]) {
        ping.multiply(1 + 0.15 * rowCounts[ping.attribute], Round.NEAREST);
      }
    }

    // SFua
    if (this.combos.combos['h'].some((combo) => combo.shape == Shape.BOX)) {
      for (const ping of pings) {
        ping.multiply(2 ** ping.source.countAwakening(IdcAwakening.BONUS_ATTACK_SUPER));
      }
    }

    // L-Guard
    if (this.combos.combos['h'].some((combo) => combo.shape == Shape.L)) {
      for (const ping of pings) {
        ping.multiply(1.5 ** ping.source.countAwakening(IdcAwakening.L_GUARD), Round.NEAREST);
      }
    }

    // Jammer-Blessing, Poison-Blessing
    if (this.combos.combos['j'].length) {
      for (const ping of pings) {
        ping.multiply(1.5 ** ping.source.countAwakening(IdcAwakening.JAMMER_BOOST), Round.NEAREST);
      }
    }

    // Poison-Blessing
    if (this.combos.combos['p'].length || this.combos.combos['m'].length) {
      for (const ping of pings) {
        ping.multiply(2 ** ping.source.countAwakening(IdcAwakening.POISON_BOOST));
      }
    }

    const partialLead = (leader, ping) => leader.atk(ping, monsters, percent, this.combos, this.skillUsed, MP);
    // Apply leader skills.
    for (const ping of pings) {
      const multiplier = partialLead(lead, ping) * partialLead(helper, ping);
      ping.multiply(multiplier, Round.NEAREST);
    }

    trueBonusAttack += lead.trueBonusAttack(monsters[0], monsters, percent, this.combos, this.skillUsed, MP);
    trueBonusAttack += helper.trueBonusAttack(monsters[0], monsters, percent, this.combos, this.skillUsed, MP);

    // Handle damage cap.
    for (const ping of pings) {
      if (ping.amount >= 2147483648) {
        ping.amount = 2147483647;
      }
    }

    // TODO: Determine regular bonus attacks.
    return {
      pings: pings,
      healing: healing,
      trueBonusAttack: trueBonusAttack,  // TODO
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
    if (this.activeTeamIdx >= newMode) {
      this.setActiveTeamIdx(newMode - 1);
    }
    // TODO: Update UI to reflect this.
  }

  setActiveTeamIdx(idx) {
    if (idx >= this.playerMode || idx < 0) {
      throw `Index should be [0, ${this.players}]`;
    }
    this.activeTeamIdx = idx;
    this.reloadStatDisplay();
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
          this.setActiveTeamIdx(i);
          this.reloadStatDisplay();
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
    document.getElementById(`idc-team-mode-select${this.playerMode}`).checked = true;
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
        if (idx == this.monsterEditingIndex && fullContainer.style.border != BORDER_COLOR) {
          fullContainer.style.border = BORDER_COLOR;
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
          this.layoutLeftTabs.setActiveTab('Monster');
          this.setActiveTeamIdx(i);
          this.reloadMonsterEditor();
          this.reloadSelector();
          const selector = document.getElementById('idc-selector-monster');
          selector.focus();
          selector.select();
        }
      }
    }
    for (let i = this.playerMode; i < 3; i++) {
      const teamRow = document.getElementById(`idc-team${i}`);
      teamRow.style.display = 'none';
    }
    this.reloadStatDisplay();
  }

  reloadStatDisplay() {
    const team = this.getActiveTeam();
    const mp = this.isMultiplayer();
    const awoke = this.effects.awakenings;
    const atkTotals = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};

    for (let i = 0; i < 6; i++) {
      // const iconEl = document.getElementById(`idc-stat-icon-${i}`);
      const baseStatEl = document.getElementById(`idc-stat-base-${i}`);
      const attackBase = team[i].getAtk(mp, awoke);
      const card = team[i].getCard();
      atkTotals[card.attribute] += attackBase;
      if (card.subattribute > -1) {
        atkTotals[card.subattribute] += Math.ceil(attackBase / (card.attribute == card.subattribute ? 10 : 3));
      }
      baseStatEl.getElementsByClassName('idc-stat-base-hp')[0].innerText = `${team[i].getHp(mp, awoke)}`;
      baseStatEl.getElementsByClassName('idc-stat-base-atk')[0].innerText = `${team[i].getAtk(mp, awoke)}`;
      baseStatEl.getElementsByClassName('idc-stat-base-rcv')[0].innerText = `${team[i].getRcv(mp, awoke)}`;

    }

    document.getElementById('idc-stat-total-hp').innerText = `${this.getHp()}`;
    document.getElementById('idc-stat-total-rcv').innerText = `${this.getRcv()}`;
    for (let i = 0; i < 5; i++) {
      document.getElementById(`idc-stat-atk-${i}`).innerText = atkTotals[i];
    }

    this.dungeon.reloadBattleElement();
  }

  createMonsterSelector() {
    const maxResults = 15;
    const monsterSelection = document.createElement('div');
    const monsterSelector = document.createElement('input');
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
        option.style.border = BORDER_COLOR;
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
    monsterSelection.onblur = () => {
      options.style.display = 'none';
    }
    monsterSelection.appendChild(monsterSelector);
    monsterSelection.appendChild(document.createElement('br'));
    monsterSelection.appendChild(options);
    return monsterSelection;
  }

  createInheritSelector() {
    const maxResults = 15;
    const inheritSelection = document.createElement('div');
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
        option.style.border = BORDER_COLOR;
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
    inheritSelection.onblur = () => {
      options.style.display = 'none';
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
    monsterEditor.id = 'idc-monster-editor';
    monsterEditor.style.padding = '5px';
    // monsterEditor.style.borderLeft = BORDER_COLOR;
    // monsterEditor.style.borderRight = BORDER_COLOR;

    const pdchuIO = document.createElement('div');
    const ioArea = document.createElement('textarea');
    ioArea.style.width = '100%';
    ioArea.placeholder = 'pdchu Import + Export';
    pdchuIO.appendChild(ioArea);
    const exportButton = document.createElement('button');
    exportButton.onclick = () => {
      ioArea.value = this.toPdchu();
    };
    exportButton.innerText = 'Export pdchu';
    pdchuIO.appendChild(exportButton);
    const importButton = document.createElement('button');
    importButton.innerText = 'Import pdchu';
    importButton.onclick = () => {
      this.fromPdchu(ioArea.value);
      this.reloadMonsterEditor();
      this.reloadTeamIcons();
    };
    pdchuIO.appendChild(importButton);
    monsterEditor.appendChild(pdchuIO);

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

    monsterEditor.appendChild(playerModeRadio);
    monsterEditor.appendChild(this.createMonsterSelector());
    monsterEditor.appendChild(this.createInheritSelector());
    monsterEditor.appendChild(this.createLevelEditor());
    monsterEditor.appendChild(this.createPlusEditor());
    monsterEditor.appendChild(this.createAwakeningEditor());

    return monsterEditor;
  }

  createLayoutLeft() {
    const layoutLeft = document.createElement('td');
    layoutLeft.style.paddingRight = '10px';
    layoutLeft.style.verticalAlign = 'top';

    // const debugInput = document.createElement('textarea');
    // layoutLeft.appendChild(debugInput);
    // const debugButton = document.createElement('button');
    // debugButton.innerText = 'DEBUG';
    // debugButton.onclick = () => {
    //   console.log(this.toPdchu());
    //   this.fromPdchu(debugInput.value);
    //   // this.monsters[0].fromPdchu();
    // }

    // layoutLeft.appendChild(debugButton);

    const monsterEditorElement = this.createMonsterEditor();
    const comboEditorElement = this.combos.createElement(this);
    const dungeonEditorElement = this.dungeon.createEditorElement();

    this.layoutLeftTabs = new TabbedComponent(['Monster', 'Combo', 'Dungeon', 'Save/Load'], 'Monster');
    this.layoutLeftTabs.getTab('Monster').appendChild(monsterEditorElement);
    this.layoutLeftTabs.getTab('Combo').appendChild(comboEditorElement);
    this.layoutLeftTabs.getTab('Dungeon').appendChild(dungeonEditorElement);
    this.layoutLeftTabs.getTab('Save/Load').appendChild(this.saver.createElement(this));

    layoutLeft.appendChild(this.layoutLeftTabs.getElement());

    return layoutLeft;
  }

  createLayoutMiddle() {
    const layoutMiddle = document.createElement('td');
    layoutMiddle.style.verticalAlign = 'top';

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
    // Already loaded from injector.js.
    const screenshotButton = document.getElementById('idc-screenshot-button');
    screenshotButton.style.display = '';
    layoutMiddle.appendChild(screenshotButton);

    const teamBuilderEl = document.createElement('div');
    teamBuilderEl.id = 'team-builder';

    const titleElement = document.createElement('input');
    titleElement.id = 'idc-team-title';
    titleElement.value = 'Team Name';
    titleElement.setAttribute('style',
        'background-color: black; border: none; color: white; width: 100%; font-size: medium;');
    titleElement.onkeyup = () => {
      this.title = titleElement.value;
    };
    teamBuilderEl.appendChild(titleElement);
    teamBuilderEl.appendChild(this.createTeamsForm());
    const layoutMiddleTabs = new TabbedComponent(['Description', 'Stats'], 'Stats');
    const descriptionElement = document.createElement('textarea');
    descriptionElement.id = 'idc-team-description';
    descriptionElement.setAttribute('style',
        'background-color: black; border: none; color: white; width: 100%; height: 300px;');
    descriptionElement.value = 'Team Description';
    descriptionElement.onkeyup = () => {
      this.description = descriptionElement.value;
    };
    layoutMiddleTabs.getTab('Description').appendChild(descriptionElement);
    layoutMiddleTabs.getTab('Stats').appendChild(this.createStatDisplay());
    teamBuilderEl.appendChild(layoutMiddleTabs.getElement());
    teamBuilderEl.style.width = '100%';
    layoutMiddle.appendChild(teamBuilderEl);

    return layoutMiddle;
  }

  createStatDisplay() {
    // 7 rows showing stats of the currently active team.
    const el = document.createElement('div');
    const statDisplayEl = document.createElement('table');
    statDisplayEl.id = 'idc-stat-display';
    statDisplayEl.style.fontSize = 'small';
    statDisplayEl.style.width = '100%';
    // for (let i = 0; i < 7; i++) {
    //   const row = document.createElement('tr');
    //   statDisplayEl.appendChild(row);
    // }
    const rows = [...statDisplayEl.getElementsByTagName('tr')];
    // const iconRow = document.createElement('tr');
    // for (let i = 0; i < 7; i++) {
    //   const statIconContainer = document.createElement('td');
    //   statIconContainer.id = `idc-stat-icon-${i}`;
    //   if (i == 6) {
    //     statIconContainer.innerText = 'Total';
    //   }
    //   rows[i].appendChild(statIconContainer);
    // }
    // statDisplayEl.appendChild(iconRow);
    // Includes HP, ATK, RCV of the current team..
    const baseStatRow = document.createElement('tr');
    for (let i = 0; i < 6; i++) {
      const statCell = document.createElement('td');
      statCell.style.width = '16.66%';
      statCell.id = `idc-stat-base-${i}`;
      const statContainer = document.createElement('div');
      const miniStatTable = document.createElement('table');
      miniStatTable.width = '100%';
      miniStatTable.style.fontSize = 'small';
      const hpRow = document.createElement('tr');
      const atkRow = document.createElement('tr');
      const rcvRow = document.createElement('tr');
      if (i == 0) {
        const hpLabel = document.createElement('td');
        const atkLabel = document.createElement('td');
        const rcvLabel = document.createElement('td');
        hpLabel.style.fontSize = 'x-small';
        atkLabel.style.fontSize = 'x-small';
        rcvLabel.style.fontSize = 'x-small';
        hpLabel.innerText = 'HP:';
        atkLabel.innerText = 'ATK:';
        rcvLabel.innerText = 'RCV:';
        hpRow.appendChild(hpLabel);
        atkRow.appendChild(atkLabel);
        rcvRow.appendChild(rcvLabel);        
      }

      const hpEl = document.createElement('td');
      const atkEl = document.createElement('td');
      const rcvEl = document.createElement('td');
      hpEl.className = 'idc-stat-base-hp';
      atkEl.className = 'idc-stat-base-atk';
      rcvEl.className = 'idc-stat-base-rcv';
      hpEl.style.textAlign = 'right';
      atkEl.style.textAlign = 'right';
      rcvEl.style.textAlign = 'right';
      hpEl.innerText = '0';
      if (i != 6) {
        atkEl.innerText = '0';
      }
      rcvEl.innerText = '0';
      hpRow.appendChild(hpEl)
      atkRow.appendChild(atkEl);
      rcvRow.appendChild(rcvEl)
      miniStatTable.appendChild(hpRow);
      miniStatTable.appendChild(atkRow);
      miniStatTable.appendChild(rcvRow);

      statContainer.appendChild(miniStatTable);
      statCell.appendChild(statContainer);
      baseStatRow.appendChild(statCell);
    }
    statDisplayEl.appendChild(baseStatRow);
    // const preDamageRow = document.createElement('tr');
    // for (let i = 0; i < 6; i++) {
    //   const preDamageContainer = document.createElement('td');
    //   preDamageContainer.id = `idc-stat-damage-pre-${i}`;
    //   preDamageContainer.style.textAlign = 'right';
    //   if (i < 6) {
    //     const mainAttr = document.createElement('div');
    //     mainAttr.className = 'idc-stat-damage-pre-main';
    //     mainAttr.innerText = '0';
    //     preDamageContainer.appendChild(mainAttr);
    //     const subAttr = document.createElement('div');
    //     subAttr.className = 'idc-stat-damage-pre-sub';
    //     subAttr.innerText = '0';
    //     preDamageContainer.appendChild(subAttr);
    //   } else {
    //     // TODO: Total value.
    //     const totalEl = document.createElement('div');
    //     totalEl.id = 'idc-stat-damage-pre-total';
    //     totalEl.innerText = '0';
    //     preDamageContainer.appendChild(totalEl);
    //   }
    //   preDamageRow.appendChild(preDamageContainer);
    // }
    // statDisplayEl.appendChild(preDamageRow);

    // // const postDamageRow = document.createElement('tr');
    // for (let i = 0; i < 7; i++) {
    //   const postDamageContainer = document.createElement('td');
    //   postDamageContainer.id = `idc-stat-damage-post-${i}`;
    //   postDamageContainer.style.textAlign = 'right';
    //   if (i < 6) {
    //     const mainAttr = document.createElement('div');
    //     mainAttr.className = 'idc-stat-damage-post-main';
    //     mainAttr.innerText = '0';
    //     postDamageContainer.appendChild(mainAttr);
    //     const mainAttrActual = document.createElement('div');
    //     mainAttrActual.className = 'idc-stat-damage-post-main-actual';
    //     mainAttrActual.innerText = '';
    //     postDamageContainer.appendChild(mainAttrActual);
    //     const subAttr = document.createElement('div');
    //     subAttr.className = 'idc-stat-damage-post-sub';
    //     subAttr.innerText = '0';
    //     postDamageContainer.appendChild(subAttr);
    //     const subAttrActual = document.createElement('div');
    //     subAttrActual.className = 'idc-stat-damage-post-sub-actual';
    //     subAttrActual.innerText = '';
    //     postDamageContainer.appendChild(subAttrActual);
    //   } else {
    //     const totalEl = document.createElement('div');
    //     totalEl.id = 'idc-stat-damage-post-total';
    //     totalEl.innerText = '0';
    //     postDamageContainer.appendChild(totalEl);
    //     const totalActualEl = document.createElement('div');
    //     totalActualEl.id = 'idc-stat-damage-post-total-actual';
    //     totalActualEl.innerText = '';
    //     postDamageContainer.appendChild(totalActualEl);
    //   }
    //   rows[i].appendChild(postDamageContainer);
    // }
    // statDisplayEl.appendChild(postDamageRow);
    // SB
    // OEs + Rows
    // Hazards (Poison, jammer, blind, SBR)
    // Special Hazards (clouds, immobility)
    // True Damage (Bonus Attack, GB)
    // Team HP/RCV
    // Attribute Resists
    // const aggregatedAwakeningsRow = document.createElement('tr');
    // Determines total time to move.
    // const timeRow = document.createElement('tr');
    // Autoheal
    el.appendChild(statDisplayEl);
    const totalBaseStatEl = document.createElement('div');

    const totalHpLabel = document.createElement('div');
    totalHpLabel.style.display = 'inline-block';
    totalHpLabel.innerText = 'Total HP: ';
    totalBaseStatEl.appendChild(totalHpLabel);
    const totalHpEl = document.createElement('div');
    totalHpEl.id = 'idc-stat-total-hp';
    totalHpEl.style.display = 'inline-block';
    totalHpEl.style.padding = '10px';
    totalHpEl.innerText = '0';
    totalBaseStatEl.appendChild(totalHpEl);
    const totalRcvLabel = document.createElement('div');
    totalRcvLabel.style.display = 'inline-block';
    totalRcvLabel.innerText = 'Total RCV: ';
    totalBaseStatEl.appendChild(totalRcvLabel);
    const totalRcvEl = document.createElement('div');
    totalRcvEl.id = 'idc-stat-total-rcv';
    totalRcvEl.style.display = 'inline-block';
    totalRcvEl.style.padding = '10px';
    totalRcvEl.innerText = '0';
    totalBaseStatEl.appendChild(totalRcvEl);

    totalBaseStatEl.appendChild(document.createElement('br'));
    const totalAtkLabel = document.createElement('div');
    totalAtkLabel.style.display = 'inline-block';
    totalAtkLabel.innerText = 'Total Attribute ATK: ';
    totalBaseStatEl.appendChild(totalAtkLabel);
    for (let i = 0; i < 5; i++) {
      const totalAtkEl = document.createElement('div');
      totalAtkEl.id = `idc-stat-atk-${i}`;
      totalAtkEl.innerText = '0';
      totalAtkEl.style.color = FontColors[i];
      totalAtkEl.style.display = 'inline-block';
      totalAtkEl.style.padding = '3px';
      totalBaseStatEl.appendChild(totalAtkEl);
    }

    el.appendChild(totalBaseStatEl);
    return el;
  }

  createLayoutRight() {
    const layoutRight = document.createElement('td');
    layoutRight.style.fontSize = 'small';
    layoutRight.style.verticalAlign = 'top';

    // const playerActiveRadio = document.createElement('div');
    // for (let i = 0; i < 3; i++) {
    //   const modeInput = document.createElement('input');
    //   modeInput.type = 'radio';
    //   modeInput.id = `idc-team-active-select${i + 1}`;
    //   if (i == this.activeTeamIdx) {
    //     modeInput.checked = true;
    //   }
    //   // modeInput.name = 'idc-team-active-select';
    //   // modeInput.onclick = () => {
    //   //   this.setActiveTeamIdx(i);
    //   //   this.reloadStatDisplay();
    //   // }
    //   playerActiveRadio.appendChild(modeInput);
    //   const modeLabel = document.createElement('label');
    //   modeLabel.for = modeInput.id;
    //   modeLabel.innerText = `${i + 1}P`;
    //   playerActiveRadio.appendChild(modeLabel)
    // }

    // layoutRight.appendChild(playerActiveRadio);

    const hpPercentInput = document.createElement('input');
    hpPercentInput.type = 'number';
    hpPercentInput.id = 'idc-team-hp-percent';
    hpPercentInput.value = this.hpPercent;
    hpPercentInput.style.width = '50px';
    hpPercentInput.onkeyup = () => {
      let hpPercent = hpPercentInput.value;
      if (!hpPercent || hpPercent <= 0) {
        hpPercent = 1;
      }
      if (hpPercent > 100) {
        hpPercent = 100;
      }
      this.hpPercent = hpPercent;
      hpPercentInput.value = hpPercent;
      this.reloadStatDisplay();
    }
    layoutRight.appendChild(hpPercentInput);


    // layoutRight.appendChild(statDisplayEl);

    const battleEl = this.dungeon.createBattleElement();
    layoutRight.appendChild(battleEl);

    return layoutRight;
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
    layoutTopRow.appendChild(this.createLayoutLeft());
    layoutTopRow.appendChild(this.createLayoutMiddle());
    layoutTopRow.appendChild(this.createLayoutRight());
    layout.appendChild(layoutTopRow);


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
  return ;
}

async function awaitLoaded(conditionFn, waitMs = 50) {
  while (!conditionFn()) {
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }
}

async function initIdc() {
  if (window.location.hash != '#/ShowMeTheRopes') {
    for (const element of document.getElementsByClassName('main-site-div')) {
      element.style.display = '';
    }
    return;
  }
  await awaitLoaded(() => vm.page() != KoPage.LOADING);
  // Clear Ilmina.
  for (const element of document.getElementsByClassName('main-site-div')) {
    element.style.display = 'none';
  }
  annotateMonsterScaling();
  loadMonsterSearches();

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