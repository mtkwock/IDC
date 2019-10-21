var AwakeningAssets = /** @class */ (function () {
    function AwakeningAssets() {
    }
    AwakeningAssets.getLatent = function (latent, model) {
        var ret = new AwakeningDescription();
        ret.latent = latent;
        ret.icon = AwakeningAssets.getLatentIcon(latent, model);
        switch (latent) {
            case LatentAwakening.AllStats:
                ret.name = "All Stats";
                ret.description = "Increase all stats a little.";
                break;
            case LatentAwakening.AwakenKiller:
                ret.name = "Awaken Killer";
                ret.description = "1.5x ATK against 'woke enemies";
                break;
            case LatentAwakening.EnhancerKiller:
                ret.name = "Enhance Killer";
                ret.description = "1.5x ATK against enhanced type enemies";
                break;
            case LatentAwakening.RedeemableKiller:
                ret.name = "Redeemable Killer";
                ret.description = "1.5x ATK against Redeemable type enemies";
                break;
            case LatentAwakening.GodKiller:
                ret.name = "God Killer";
                ret.description = "1.5x ATK against God type enemies";
                break;
            case LatentAwakening.EvoKiller:
                ret.name = "Evo Killer";
                ret.description = "1.5x ATK against Evo type enemies";
                break;
            case LatentAwakening.DragonKiller:
                ret.name = "Dragon Killer";
                ret.description = "1.5x ATK against Dragon type enemies";
                break;
            case LatentAwakening.DevilKiller:
                ret.name = "Devil Killer";
                ret.description = "1.5x ATK against Devil type enemies";
                break;
            case LatentAwakening.MachineKiller:
                ret.name = "Machine Killer";
                ret.description = "1.5x ATK against Machine type enemies";
                break;
            case LatentAwakening.BalancedKiller:
                ret.name = "Balanced Killer";
                ret.description = "1.5x ATK against Balanced type enemies";
                break;
            case LatentAwakening.AttackerKiller:
                ret.name = "Attacker Killer";
                ret.description = "1.5x ATK against Attacker type enemies";
                break;
            case LatentAwakening.PhysicalKiller:
                ret.name = "Physical Killer";
                ret.description = "1.5x ATK against Physical type enemies";
                break;
            case LatentAwakening.HealerKiller:
                ret.name = "Healer Killer";
                ret.description = "1.5x ATK against Healer type enemies";
                break;
            case LatentAwakening.HpPlus:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.AtkPlus:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.RcvPlus:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.TimeExtendPlus:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.Hp:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.Atk:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.Rcv:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.TimeExtend:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.AutoHeal:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.FireResist:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.WaterResist:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.WoodResist:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.LightResist:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.DarkResist:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
            case LatentAwakening.SkillDelayResist:
                ret.name = "";
                ret.description = "";
                ret.detailedDescription = "";
                break;
        }
        // Some defaults
        if (!ret.name) {
            ret.name = LatentAwakening[latent] ? LatentAwakening[latent] : "UNKNOWN LATENT" + latent;
        }
        if (!ret.description) {
            ret.description = ret.name;
        }
        if (!ret.detailedDescription) {
            ret.detailedDescription = ret.description;
        }
        return ret;
    };
    AwakeningAssets.getAwakening = function (awakening) {
        var ret = new AwakeningDescription();
        ret.awakening = awakening;
        ret.icon = this.getIcon(awakening);
        // Set some defaults
        ret.name = Awakening[awakening] ? Awakening[awakening] : "UNKNOWN" + awakening;
        ret.description = ret.name;
        ret.detailedDescription = ret.name;
        // Fill in the specific awakening data
        switch (awakening) {
            case Awakening.Super:
                ret.name = "Super Awakening Enabled";
                ret.description = "This card is capable of a Super Awakening.";
                ret.detailedDescription = "This card is capable of a Super Awakening, which grants a bonus awakening in solo mode once unlocked. Only one Super Awakening is granted. A random Super Awakening can be unlocked by limit breaking a supported card and then feeding it 297 plusses after the base card is already at +297. A new random super awakening can be assigned by feeding another 297 plus eggs.";
                break;
            case Awakening.EnhancedHP:
                ret.name = "Enhanced HP";
                ret.description = "Increases HP by 500";
                ret.detailedDescription = ret.description;
                break;
            case Awakening.EnhancedATK:
                ret.name = "Enhanced Attack";
                ret.description = "Increases ATK by 100";
                ret.detailedDescription = ret.description;
                break;
            case Awakening.EnhancedRCV:
                ret.name = "Enhanced Heal";
                ret.description = "Increases RCV by 200";
                ret.detailedDescription = ret.description;
                break;
            case Awakening.FireResist:
                ret.name = "Reduce Fire Damage";
                ret.description = "Reduces Fire Att. damage";
                ret.detailedDescription = "Reduces Fire damage by 7% per awakening, stacking additively with other awakenings. Is multiplicative with Active and Leader skill effects";
                break;
            case Awakening.WaterResist:
                ret.name = "Reduce Water Damage";
                ret.description = "Reduces Water Att. damage";
                ret.detailedDescription = "Reduces Water damage by 7% per awakening, stacking additively with other awakenings. Is multiplicative with Active and Leader skill effects";
                break;
            case Awakening.WoodResist:
                ret.name = "Reduce Wood Damage";
                ret.description = "Reduces Wood Att. damage";
                ret.detailedDescription = "Reduces Wood damage by 7% per awakening, stacking additively with other awakenings. Is multiplicative with Active and Leader skill effects";
                ;
                break;
            case Awakening.LightResist:
                ret.name = "Reduce Light Damage";
                ret.description = "Reduces Light Att. damage";
                ret.detailedDescription = "Reduces Light damage by 7% per awakening, stacking additively with other awakenings. Is multiplicative with Active and Leader skill effects";
                break;
            case Awakening.DarkResist:
                ret.name = "Reduce Dark Damage";
                ret.description = "Reduces Dark Att. damage";
                ret.detailedDescription = "Reduces Dark damage by 7% per awakening, stacking additively with other awakenings. Is multiplicative with Active and Leader skill effects";
                break;
            case Awakening.Autoheal:
                ret.name = "Auto-Recover";
                ret.description = "Recovers HP each turn Orbs are erased";
                ret.detailedDescription = "Recover 1000 HP each turn orbs are erased";
                break;
            case Awakening.BindResist:
                ret.name = "Resistance-Bind";
                ret.description = "May block Bind attacks directed at itself";
                ret.detailedDescription = "50% chance to resist Bind attacks for this card only";
                break;
            case Awakening.BlindResist:
                ret.name = "Resistance-Dark";
                ret.description = "May block Blinding attacks";
                ret.detailedDescription = "20% chance to resist blind or superblind effects. Full immunity at 5 awakenings among entire team. This awakening is shared in 2 Player Mode";
                break;
            case Awakening.JammerResist:
                ret.name = "Resistance-Jammers";
                ret.description = "May block Jammer & Bomb attacks";
                ret.detailedDescription = "20% chance to resist enemy effects creating Jammers or Bombs. Does not block skyfall debuffs or player skills creating Jammers. Full immunity at 5 awakenings among entire team. This awakening is shared in 2 Player Mode";
                break;
            case Awakening.PoisonResist:
                ret.name = "Resistance-Poison";
                ret.description = "May block Poison attacks";
                ret.detailedDescription = "20% chance to resist enemy effects creating Poison or Lethal Poison orbs. Does not block skyfall debuffs or player skills creating either type of poison. Full immunity at 5 awakenings among entire team. This awakening is shared in 2 Player Mode";
                break;
            case Awakening.FireEnhance:
                ret.name = "Enhanced Fire Orbs";
                ret.description = "Enhanced Fire Orbs appear more frequently, and increases damage";
                ret.detailedDescription = "Increases chance of enhanced Fire Orbs appearing by 20% and increases enhanced Fire Orb damage by 7%, stacking additively. 100% chance for enhanced skyfall appearance at 5 awakenings among entire team";
                break;
            case Awakening.WaterEnhance:
                ret.name = "Enhanced Water Orbs";
                ret.description = "Enhanced Water Orbs appear more frequently, and increases damage";
                ret.detailedDescription = "Increases chance of enhanced Water Orbs appearing by 20% and increases enhanced Water Orb damage by 7%. 100% chance for enhanced skyfall appearance at 5 awakenings among entire team";
                break;
            case Awakening.WoodEnhance:
                ret.name = "Enhanced Wood Orbs";
                ret.description = "Enhanced Wood Orbs appear more frequently, and increases damage";
                ret.detailedDescription = "Increases chance of enhanced Wood Orbs appearing by 20% and increases enhanced Wood Orb damage by 7%. 100% chance for enhanced skyfall appearance at 5 awakenings among entire team";
                break;
            case Awakening.LightEnhance:
                ret.name = "Enhanced Light Orbs";
                ret.description = "Enhanced Light Orbs appear more frequently, and increases damage";
                ret.detailedDescription = "Increases chance of enhanced Light Orbs appearing by 20% and increases enhanced Light Orb damage by 7%. 100% chance for enhanced skyfall appearance at 5 awakenings among entire team";
                break;
            case Awakening.DarkEnhance:
                ret.name = "Enhanced Dark Orbs";
                ret.description = "Enhanced Dark Orbs appear more frequently, and increases damage";
                ret.detailedDescription = "Increases chance of enhanced Dark Orbs appearing by 20% and increases enhanced Dark Orb damage by 7%. 100% chance for enhanced skyfall appearance at 5 awakenings among entire team";
                break;
            case Awakening.TimeExtend:
                ret.name = "Extend Time";
                ret.description = "Slightly extends time to move Orbs";
                ret.detailedDescription = "Increases Orb movement time by 0.5 seconds";
                break;
            case Awakening.BindRecovery:
                ret.name = "Recover Bind";
                ret.description = "Matching a full row of Heal Orbs reduces Bind status by 3 turns";
                ret.detailedDescription = ret.description + ", including for subs on the other player's team in 2 Player Mode. Multiple awakenings on team will each reduce 3 turns";
                break;
            case Awakening.SkillBoost:
                ret.name = "Skillboost";
                ret.description = "Team starts with 1 less turn needed to activate skills";
                ret.detailedDescription = ret.description + ". This awakening is shared in 2 Player Mode";
                break;
            case Awakening.FireRow:
                ret.name = "Enhanced Fire Att.";
                ret.description = "Matching a full row of Fire Orbs increases Fire Att. ATK";
                ret.detailedDescription = "Matching a full row of Fire Orbs increases Fire attribute ATK by 15%, stacking additively";
                break;
            case Awakening.WaterRow:
                ret.name = "Enhanced Water Att.";
                ret.description = "Matching a full row of Water Orbs increases Water Att. ATK";
                ret.detailedDescription = "Matching a full row of Water Orbs increases Water attribute ATK by 15%, stacking additively";
                break;
            case Awakening.WoodRow:
                ret.name = "Enhanced Wood Att.";
                ret.description = "Matching a full row of Wood Orbs increases Wood Att. ATK";
                ret.detailedDescription = "Matching a full row of Wood Orbs increases Wood attribute ATK by 15%, stacking additively";
                break;
            case Awakening.LightRow:
                ret.name = "Enhanced Light Att.";
                ret.description = "Matching a full row of Light Orbs increases Light Att. ATK";
                ret.detailedDescription = "Matching a full row of Light Orbs increases Light attribute ATK by 15%, stacking additively";
                break;
            case Awakening.DarkRow:
                ret.name = "Enhanced Dark Att.";
                ret.description = "Matching a full row of Dark Orbs increases Dark Att. ATK";
                ret.detailedDescription = "Matching a full row of Dark Orbs increases Dark attribute ATK by 15%, stacking additively";
                break;
            case Awakening.TPA:
                ret.name = "Two-Pronged Attack";
                ret.description = "Matching 4 Orbs of the same Att. as this monster boosts ATK and launches an attack on two enemies";
                ret.detailedDescription = "Matching exactly 4 Orbs of either of this monster's attribute boosts its own attack by 1.5x, stacking multiplicatively, and attacks two enemies";
                break;
            case Awakening.SBR:
                ret.name = "Resistance-Skill Bind";
                ret.description = "May block Skill Bind attacks";
                ret.detailedDescription = "20% chance to resist enemy Skill Bind effects. Stacks additively to 100% when 5 are amongst whole team. This awakening is shared in 2 Player Mode";
                break;
            case Awakening.HeartEnhance:
                ret.name = "Enhanced Heal Orbs";
                ret.description = "Enhanced Heal orbs appear more frequently, and increases RCV. Increases RCV when matching 4 Heal Orbs";
                ret.detailedDescription = "Increases chance of enhanced Heal Orbs appearing by 20% and increases RCV when matching enhanced Heal Orbs by 5%. Matching exactly 4 Heal Orbs regardless of enhancements will result in 1.5x RCV for cards with this awakening, stacking multiplicatively";
                break;
            case Awakening.Multiboost:
                ret.name = "Multi Boost";
                ret.description = "Increases this ally's stats when playing with another player";
                ret.detailedDescription = "1.5x to all stats for cards with this awakening, stacking multiplicatively, when actively in 2 Player or 3 Player mode. Effect disppears when disconnecting back down to solo play";
                break;
            case Awakening.DragonKiller:
                ret.name = "Dragon Killer";
                ret.description = "Increases ATK against Dragon Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Dragon Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.GodKiller:
                ret.name = "God Killer";
                ret.description = "Increases ATK against God Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against God Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.DevilKiller:
                ret.name = "Devil Killer";
                ret.description = "Increases ATK against Devil Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Devil Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.MachineKiller:
                ret.name = "Machine Killer";
                ret.description = "Increases ATK against Machine Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Machine Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.BalancedKiller:
                ret.name = "Balanced Killer";
                ret.description = "Increases ATK against Balanced Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Balanced Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.AttackerKiller:
                ret.name = "Attacker Killer";
                ret.description = "Increases ATK against Attacker Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Attacker Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.PhysicalKiller:
                ret.name = "Physical Killer";
                ret.description = "Increases ATK against Physical Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Physical Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.HealerKiller:
                ret.name = "Healer Killer";
                ret.description = "Increases ATK against Healer Type enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Healer Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.EvoKiller:
                ret.name = "Evo Killer";
                ret.description = "Increases ATK against Evo Material enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Evo Material Type enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.AwakeningKiller:
                ret.name = "Awaken Killer";
                ret.description = "Increases ATK against Awaken Material enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Awaken Material enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.EnhanceKiller:
                ret.name = "Enhance Killer";
                ret.description = "Increases ATK against Enhance Material enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Enhance Material enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.RedeemableKiller:
                ret.name = "Redeemable Killer";
                ret.description = "Increases ATK against Redeemable Material enemies";
                ret.detailedDescription = "Cards with this awakening deal 3x damage against Redeemable Material enemies, stacking multiplicatively with all killers if enemy typing matches";
                break;
            case Awakening.SevenCombo:
                ret.name = "Enhanced Combos";
                ret.description = "ATK increases with 7+ combos";
                ret.detailedDescription = "Cards with this awakening gain 2x ATK when matching at least 7 combos, stacking multiplicatively";
                break;
            case Awakening.Guardbreak:
                ret.name = "Guard Break";
                ret.description = "Ignores enemies' DEF and inflicts damage when attacking with 5 Att.";
                ret.detailedDescription = "Cards with this awakening will completely ignore all enemy defense when all of Fire, Water, Wood, Dark and Light are attacking. All colours must be covered on the team to activate";
                break;
            case Awakening.FUA:
                ret.name = "Bonus Attack";
                ret.description = "Inflicts 1 bonus damage when erasing a column of Heal Orbs";
                ret.detailedDescription = "Deals 1 true damage to all enemies per awakening when a full isolated column of Heal Orbs are matched with no extra sections. Damage is applied after main damage but before enemy actions, allowing it to act through enemy Resolve";
                break;
            case Awakening.TeamHP:
                ret.name = "Enhanced Team HP";
                ret.description = "Increases Team HP by 5%";
                ret.detailedDescription = "Increases entire team's HP by 5%, stacking additively";
                break;
            case Awakening.TeamRCV:
                ret.name = "Enhanced Team RCV";
                ret.description = "Increases Team RCV by 10%";
                ret.detailedDescription = "Increases entire team's RCV by 10%, stacking additively";
                break;
            case Awakening.VDP:
                ret.name = "Damage Void Piercer";
                ret.description = "Matching a 3x3 Orb square of the same Att. as this monster boosts ATK and ignores damage-voiding status";
                ret.detailedDescription = "Matching an isolated 3x3 Orb square of the same attribute as a card with this awakening increases this card's attack by 2.5x, stacking multiplicatively, and ignores enemy damage void statuses for this card only";
                break;
            case Awakening.EquipAssist:
                ret.name = "Awoken Assist";
                ret.description = "This monster's Awoken Skills will be granted to another monster if it assists";
                ret.detailedDescription = ret.description + ". Latent awakenings are not included";
                break;
            case Awakening.SuperFUA:
                ret.name = "Super Bonus Attack";
                ret.description = "Matching a 3x3 Heal Orb square boosts attack & inflicts 2 points of bonus damage";
                ret.detailedDescription = "Deals 2 true damage to all enemies per awakening when an isolated 3x3 square of Heal Orbs is matched with no extra sections. Damage is applied after main damage but before enemy actions, allowing it to act through enemy Resolve. Cards with this awakening also gain 2x damage when activating.";
                break;
            case Awakening.RainbowHaste:
                ret.name = "Skill Charge";
                ret.description = "This monster's skills are charged by 1 turn when attacking with 5 Att.";
                ret.detailedDescription = "Cards with this awakening will charge their own active skill by 1 additional turn when all of Fire, Water, Wood, Light and Dark are attacking. All colours must be covered on the team to activate";
                break;
            case Awakening.UnbindablePlus:
                ret.name = "Resistance-Bind+";
                ret.description = "Blocks Bind attacks directed at itself";
                ret.detailedDescription = "100% chance to resist Bind attacks on self";
                break;
            case Awakening.TimeExtendPlus:
                ret.name = "Extended Move Time+";
                ret.description = "Extends Orb move time";
                ret.detailedDescription = "Increases Orb movement time by 1 second";
                break;
            case Awakening.CloudResist:
                ret.name = "Resistance-Clouds";
                ret.description = "Voids Cloud attacks";
                ret.detailedDescription = "Full resistance to enemy attacks creating clouds";
                break;
            case Awakening.ScrollResist:
                ret.name = "Resistance-Immobility";
                ret.description = "Prevents targeted Orbs from being immobilized";
                ret.detailedDescription = "Full resistance to enemy attacks preventing Orb movement with a scroll/tape";
                break;
            case Awakening.SkillBoostPlus:
                ret.name = "Skill Boost+";
                ret.description = "Team's skills charged by 2 turns";
                ret.detailedDescription = "Team starts with 2 less turns needed to activate skills";
                break;
            case Awakening.HP80:
                ret.name = "80% or more HP Enhanced";
                ret.description = "ATK increases when HP is 80% or more";
                ret.detailedDescription = "Increases ATK by 1.5x for this card alone when HP is at least 80%";
                break;
            case Awakening.HP50:
                ret.name = "50% or less HP Enhanced";
                ret.description = "ATK increases when HP is 50% or less";
                ret.detailedDescription = "Increases ATK by 2x for this card alone with HP is 50% or below";
                break;
            case Awakening.LShield:
                ret.name = "[L] Damage Reduction";
                ret.description = "Reduces damage when erasing an L shape of 5 Heal Orbs";
                ret.detailedDescription = "5% damage reduction, stacking additively, when erasing exactly 5 Heal Orbs in an L shape of any orientation";
                break;
            case Awakening.LUnlock:
                ret.name = "[L] Increased Attack";
                ret.description = "Increases ATK and unlocks Orbs when erasing an L shape of 5 Orbs the same as this monster's Att.";
                ret.detailedDescription = "Increases ATK by 1.5x for this card alone and unlocks all Orbs when erasing exactly 5 Orbs of this card's attribute in an L shape of any orientation";
                break;
            case Awakening.TenCombo:
                ret.name = "Super Enhanced Combos";
                ret.description = "Greatly increases ATK with 10+ combos";
                ret.detailedDescription = "Cards with this awakening gain 5x ATK when matching at least 10 combos, stacking multiplicatively";
                break;
            case Awakening.ComboOrb:
                ret.name = "Combo Orbs";
                ret.description = "Matching 12 Orbs of the same Attribute as this monster makes 1 Combo Orb appear (max 3 Orbs)";
                ret.detailedDescription = "Matching 12 connected orbs of any attribute of cards with this awakening causes 1 Combo Orb to spawn. The orb chosen is random and clearing this orb adds 1 combo. A maximum of 3 Combo Orbs can be onscreen, and a Combo Orb converted to a jammer, poison, lethal or bomb orb will remove the Combo Orb";
                break;
            case Awakening.Voice:
                ret.name = "Skill Voice";
                ret.description = "A voice will sound when Skill is used";
                ret.detailedDescription = "A card with this awakening will play a voice clip when their active skill is used, or when it the awakening is tapped on";
                break;
            case Awakening.Dungeon:
                ret.name = "Dungeon Bonus";
                ret.description = "Slightly increases Rank EXP, Monster EXP, Coins & Egg Drop rate in solo play";
                ret.detailedDescription = "Increases Rank EXP, Monster EXP, Coin amount & Egg Drop rate by 2% in solo play";
                break;
        }
        // The official name is always an alias of the awakening
        ret.alises.push(ret.name);
        return ret;
    };
    AwakeningAssets.getIcon = function (awakening) {
        if (awakening < 0 || awakening > Awakening.Unknown76) {
            return this.getIcon(Awakening.Unknown);
        }
        var row = 9;
        row += Math.floor(awakening / 11);
        var column = awakening % 11;
        return this.getSquareIcon(row, column);
    };
    AwakeningAssets.getLatentIcon = function (latent, model) {
        var row = 0;
        var column = 0;
        var doubleColumn = -1;
        switch (latent) {
            case LatentAwakening.AllStats:
            case LatentAwakening.EvoKiller:
            case LatentAwakening.AwakenKiller:
            case LatentAwakening.EnhancerKiller:
            case LatentAwakening.RedeemableKiller:
                row = 2;
                doubleColumn = latent - LatentAwakening.AllStats;
                break;
            case LatentAwakening.GodKiller:
            case LatentAwakening.DragonKiller:
            case LatentAwakening.DevilKiller:
            case LatentAwakening.MachineKiller:
            case LatentAwakening.BalancedKiller:
                row = 3;
                doubleColumn = latent - LatentAwakening.GodKiller;
                break;
            case LatentAwakening.AttackerKiller:
            case LatentAwakening.PhysicalKiller:
            case LatentAwakening.HealerKiller:
            case LatentAwakening.HpPlus:
            case LatentAwakening.AtkPlus:
                row = 4;
                doubleColumn = latent - LatentAwakening.AttackerKiller;
                break;
            case LatentAwakening.RcvPlus:
            case LatentAwakening.TimeExtendPlus:
            case LatentAwakening.FireResistPlus:
            case LatentAwakening.WaterResistPlus:
            case LatentAwakening.WoodResistPlus:
                row = 5;
                doubleColumn = latent - LatentAwakening.RcvPlus;
                break;
            case LatentAwakening.LightResistPlus:
            case LatentAwakening.DarkResistPlus:
                row = 6;
                doubleColumn = latent - LatentAwakening.LightResistPlus;
                break;
            default:
                row = 1;
                column = latent - LatentAwakening.Hp;
                break;
        }
        var ret = this.getSquareIcon(row, column);
        if (doubleColumn != -1) {
            ret.offsetX = doubleColumn * 80 + 2;
            ret.width = 76;
        }
        return ret;
    };
    AwakeningAssets.getSquareIcon = function (row, column) {
        var url = CardAssets.baseUrl + "custom/eggs.png";
        var ret = new GraphicDescription(url, 0, 0, 36, 36, 400, 580);
        ret.offsetY += row * 36;
        ret.offsetX += column * 36;
        return ret;
    };
    return AwakeningAssets;
}());
var AwakeningDescription = /** @class */ (function () {
    function AwakeningDescription() {
        this.alises = [];
    }
    return AwakeningDescription;
}());
var CardAliases = /** @class */ (function () {
    function CardAliases() {
        this.aliasById = {};
        this.aliasByName = {};
        var self = this;
        this.aliasByName[String.fromCharCode(225)] = ["a"]; // Ã¡
        this.aliasByName[String.fromCharCode(237)] = ["i"]; // Ã­
        this.aliasByName[String.fromCharCode(243)] = ["o"]; // Ã³
        this.aliasByName[String.fromCharCode(246)] = ["o"]; // Ã¶
        this.aliasByName["myr"] = ["miru"];
        this.aliasByName["ilmina"] = ["floofy tail", "floofytail", "fluffy tail", "fluffytail"];
        this.aliasByName["aizen"] = ["water daddy"];
        this.aliasByName["sopdet"] = ["sopdeath"];
        this.aliasByName["vishnu"] = ["shitnu", "shitnuu"];
        this.aliasByName["shuten-doji"] = ["shiten-doji", "shitendoji"];
        this.aliasByName["hexazeon"] = ["hexagon"];
        this.aliasByName["orpharion"] = ["exodia"];
        this.aliasByName["machine star"] = ["exodia"];
        this.aliasByName["echidna"] = ["snek"];
        this.aliasByName["j" + String.fromCharCode(246) + "rmungandr"] = ["snek"];
        this.aliasById[88] = ["snek"];
        this.aliasById[1324] = ["fat dragon"];
        this.aliasById[1790] = ["loli dragon"];
        this.aliasById[3112] = ["sniper at rest, myr"];
        this.aliasById[3896] = ["loli dragon"];
        this.aliasById[3948] = ["daunting dragonbound, rii", "daunting dragonbound, lii"];
        this.aliasById[3949] = ["daunting wraith dragonbound, rii", "daunting wraith dragonbound, lii"];
        this.aliasById[4283] = ["blonia"];
        this.aliasById[4284] = ["gronia"];
        this.aliasById[4428] = ["loli miru", "loli myr"];
        this.aliasById[4431] = ["blodin"];
        this.aliasById[4431] = ["rodin"];
        this.aliasById[4787] = ["blog"];
        this.aliasById[4791] = ["blujin"];
        this.aliasById[4788] = ["barber julie", "barbajulie", "bj"];
        this.aliasById[5278] = ["zello kitty, zkitty"];
        this.aliasById[5279] = ["zello kitty, zkitty"];
        this.aliasById[5352] = ["clang"];
        this.aliasById[5353] = ["clang"];
    }
    return CardAliases;
}());
var CardAssets = /** @class */ (function () {
    function CardAssets() {
    }
    CardAssets.isAlt = function (card) {
        return card.id > 10000;
    };
    CardAssets.getAltBaseId = function (card) {
        return card.id % 100000;
    };
    CardAssets.getCroppedPortrait = function (card) {
        var id = (card.id % 100000) + '';
        while (id.length < 5) {
            id = '0' + id;
        }
        return CardAssets.baseUrl + "extract/mons/MONS_" + id + ".PNG";
    };
    CardAssets.getUncroppedPortrait = function (card) {
        var id = (card.id % 100000) + '';
        while (id.length < 5) {
            id = '0' + id;
        }
        return CardAssets.baseUrl + "extract/mons2/MONS_" + id + ".PNG";
    };
    CardAssets.getIconImageData = function (card) {
        var idIndex = card.id - 1;
        var idSet = Math.floor(idIndex / 100) + 1;
        var idSetStr = "000" + idSet;
        var idSetFinal = idSetStr.substr(-3, 3);
        var fileName = "CARDS_" + idSetFinal + ".PNG";
        var url = CardAssets.baseUrl + "extract/cards2/" + fileName;
        // if (DataSource.isAprilFools() && !UserSettings.standardIcons()){
        //     replace url later
        // }
        var ret = new GraphicDescription(url, 0, 0, 102, 102);
        var iconOffsetInSet = idIndex % 100;
        ret.offsetX = (iconOffsetInSet % 10) * ret.width;
        ret.offsetY = Math.floor(iconOffsetInSet / 10) * ret.height;
        ret.baseHeight = 1024;
        ret.baseWidth = 1024;
        return ret;
    };
    CardAssets.getTypeImageData = function (cardType, model) {
        var ret = AwakeningAssets.getSquareIcon(7 + Math.floor(cardType / 11), cardType % 11);
        return ret;
    };
    CardAssets.getKillerLatent = function (awakening) {
        switch (awakening) {
            case Awakening.DragonKiller:
                return LatentAwakening.DragonKiller;
            case Awakening.GodKiller:
                return LatentAwakening.GodKiller;
            case Awakening.DevilKiller:
                return LatentAwakening.DevilKiller;
            case Awakening.MachineKiller:
                return LatentAwakening.MachineKiller;
            case Awakening.BalancedKiller:
                return LatentAwakening.BalancedKiller;
            case Awakening.AttackerKiller:
                return LatentAwakening.AttackerKiller;
            case Awakening.PhysicalKiller:
                return LatentAwakening.PhysicalKiller;
            case Awakening.HealerKiller:
                return LatentAwakening.HealerKiller;
        }
        return LatentAwakening.None;
    };
    CardAssets.getKillerAwakening = function (awakening) {
        switch (awakening) {
            case LatentAwakening.DragonKiller:
                return Awakening.DragonKiller;
            case LatentAwakening.GodKiller:
                return Awakening.GodKiller;
            case LatentAwakening.DevilKiller:
                return Awakening.DevilKiller;
            case LatentAwakening.MachineKiller:
                return Awakening.MachineKiller;
            case LatentAwakening.BalancedKiller:
                return Awakening.BalancedKiller;
            case LatentAwakening.AttackerKiller:
                return Awakening.AttackerKiller;
            case LatentAwakening.PhysicalKiller:
                return Awakening.PhysicalKiller;
            case LatentAwakening.HealerKiller:
                return Awakening.HealerKiller;
        }
        return Awakening.Unknown;
    };
    CardAssets.hasKillerAwakenings = function (card, awakenings) {
        // The awakenings on the card in question and whether or not each awakening has already been counted
        var cardAwakenings = card.awakenings;
        var alreadyCounted = {};
        var alreadyCountedLatents = false;
        var ret = true;
        awakenings.forEach(function (awakening) {
            var hasAwakening = false;
            for (var i = 0; i < cardAwakenings.length; i++) {
                if (alreadyCounted[i]) {
                    continue;
                }
                if (cardAwakenings[i] != awakening) {
                    continue;
                }
                alreadyCounted[i] = true;
                hasAwakening = true;
                break;
            }
            if (hasAwakening) {
                return;
            }
            // At this point they don't have this awakening.
            // Latents can save them - once
            if (!alreadyCountedLatents) {
                var requiredLatent = CardAssets.getKillerLatent(awakening);
                if (card.latentKillers.indexOf(requiredLatent) > -1) {
                    alreadyCountedLatents = true;
                    return;
                }
            }
            ret = false;
        });
        return ret;
    };
    CardAssets.countAwakenings = function (card, awakening, fuzzyMatch) {
        if (fuzzyMatch === void 0) { fuzzyMatch = false; }
        var ret = 0;
        card.awakenings.forEach(function (v) {
            if (v == awakening) {
                ret++;
            }
        });
        if (fuzzyMatch) {
            switch (awakening) {
                case Awakening.BindResist:
                    ret += this.countAwakenings(card, Awakening.UnbindablePlus, false) * 2;
                    break;
                case Awakening.TimeExtend:
                    ret += this.countAwakenings(card, Awakening.TimeExtendPlus, false) * 2;
                    break;
                case Awakening.SkillBoost:
                    ret += this.countAwakenings(card, Awakening.SkillBoostPlus, false) * 2;
                    break;
            }
        }
        return ret;
    };
    CardAssets.hasActiveSkill = function (card, model, type, acceptanceFunction) {
        return this.hasSkill(card, model, type, acceptanceFunction, card.activeSkillId);
    };
    CardAssets.hasLeaderSkill = function (card, model, type, acceptanceFunction) {
        return this.hasSkill(card, model, type, acceptanceFunction, card.leaderSkillId);
    };
    CardAssets.hasSkill = function (card, model, type, acceptanceFunction, skillId) {
        if (!skillId) {
            return false;
        }
        var skill = model.playerSkills[skillId];
        if (!skill) {
            return false;
        }
        var ret = false;
        skill.parsedEffects.forEach(function (effect) {
            if (effect.type != type) {
                return;
            }
            if (!acceptanceFunction(effect)) {
                return;
            }
            ret = true;
        });
        return ret;
    };
    CardAssets.hasAwakenings = function (card, testAwakenings, includeLatentKillers, includeSuperAwakenings, emulateEnhancedAwakenings, mixMatchKillers, customKillerCount) {
        var self = this;
        // Starter state
        var cardAwakeningsArray = [card.awakenings];
        var desiredAwakenings = testAwakenings;
        // Expand for even having super awakenings
        if (card.superAwakenings.length > 0) {
            cardAwakeningsArray = self.expandAwakeningsArrayForHavingSuperAwakenings(cardAwakeningsArray);
        }
        // Expand for super awakenings
        if (includeSuperAwakenings) {
            cardAwakeningsArray = self.expandAwakeningsArrayForSuperAwakenings(cardAwakeningsArray, card.superAwakenings);
        }
        // Expand for latent killers
        if (includeLatentKillers) {
            cardAwakeningsArray = self.expandAwakeningsArrayForLatentKillers(cardAwakeningsArray, card.latentKillers);
        }
        // Expand for emulated awakenings
        if (emulateEnhancedAwakenings) {
            cardAwakeningsArray = self.expandAwakeningsArrayForEmulatedPlus(cardAwakeningsArray);
            desiredAwakenings = self.expandAwakeningsArrayForEmulatedPlus([desiredAwakenings])[0];
        }
        // Do the final calculation
        var ret = false;
        cardAwakeningsArray.forEach(function (potentialAwakenings) {
            if (ret) {
                return;
            }
            if (self.hasAwakeningsInternal(potentialAwakenings, desiredAwakenings, mixMatchKillers, customKillerCount)) {
                ret = true;
                return;
            }
        });
        return ret;
    };
    CardAssets.expandAwakeningsArrayForHavingSuperAwakenings = function (awakenings) {
        var ret = [];
        awakenings.forEach(function (baseAttempt) {
            var newAry = JSON.parse(JSON.stringify(baseAttempt));
            newAry.push(Awakening.Super);
            ret.push(newAry);
        });
        return ret;
    };
    CardAssets.expandAwakeningsArrayForSuperAwakenings = function (awakenings, superAwakenings) {
        if (superAwakenings.length == 0) {
            return awakenings;
        }
        var ret = [];
        superAwakenings.forEach(function (superAwakening) {
            awakenings.forEach(function (baseAttempt) {
                var newAry = JSON.parse(JSON.stringify(baseAttempt));
                newAry.push(superAwakening);
                ret.push(newAry);
            });
        });
        return ret;
    };
    CardAssets.expandAwakeningsArrayForLatentKillers = function (awakenings, latentKillers) {
        var self = this;
        var ret = [];
        latentKillers.forEach(function (latentKiller) {
            var killerAwakening = self.getKillerAwakening(latentKiller);
            if (killerAwakening == Awakening.Unknown) {
                return;
            }
            awakenings.forEach(function (baseAttempt) {
                var newAry = JSON.parse(JSON.stringify(baseAttempt));
                newAry.push(killerAwakening);
                ret.push(newAry);
            });
        });
        if (ret.length == 0) {
            ret = awakenings;
        }
        return ret;
    };
    CardAssets.expandAwakeningsArrayForEmulatedPlus = function (awakenings) {
        var self = this;
        var ret = [];
        awakenings.forEach(function (awakeningArray) {
            var expandedAwakenings = [];
            awakeningArray.forEach(function (originalAwakening) {
                self.convertAdvancedAwakeningToSimple(originalAwakening).forEach(function (newAwakeningExpansion) {
                    expandedAwakenings.push(newAwakeningExpansion);
                });
            });
            ret.push(expandedAwakenings);
        });
        return ret;
    };
    CardAssets.convertAdvancedAwakeningToSimple = function (awakening) {
        switch (awakening) {
            case Awakening.UnbindablePlus:
                return [Awakening.BindResist, Awakening.BindResist];
            case Awakening.TimeExtendPlus:
                return [Awakening.TimeExtend, Awakening.TimeExtend];
            case Awakening.SkillBoostPlus:
                return [Awakening.SkillBoost, Awakening.SkillBoost];
            case Awakening.JammerResistPlus:
                return [Awakening.JammerResist, Awakening.JammerResist, Awakening.JammerResist, Awakening.JammerResist, Awakening.JammerResist];
            case Awakening.BlindResistPlus:
                return [Awakening.BlindResist, Awakening.BlindResist, Awakening.BlindResist, Awakening.BlindResist, Awakening.BlindResist];
            case Awakening.PoisonResistPlus:
                return [Awakening.PoisonResistPlus, Awakening.PoisonResistPlus, Awakening.PoisonResistPlus, Awakening.PoisonResistPlus, Awakening.PoisonResistPlus];
            default:
                return [awakening];
        }
    };
    CardAssets.isKillerAwakening = function (awakening) {
        switch (awakening) {
            case Awakening.BalancedKiller:
            case Awakening.PhysicalKiller:
            case Awakening.AttackerKiller:
            case Awakening.HealerKiller:
            case Awakening.GodKiller:
            case Awakening.DragonKiller:
            case Awakening.DevilKiller:
                return true;
            default:
                return false;
        }
    };
    CardAssets.hasAwakeningsInternal = function (cardAwakenings, awakenings, mixMatchKillers, customKillerCount) {
        var hasUsed = {};
        var desiredKillers = {};
        if (mixMatchKillers) {
            for (var i = 0; i < awakenings.length; i++) {
                if (CardAssets.isKillerAwakening(awakenings[i])) {
                    desiredKillers[awakenings[i]] = true;
                }
            }
        }
        customKillerCount = parseInt(customKillerCount + "") || 0;
        var skipKillerChecks = false;
        if (mixMatchKillers && !!customKillerCount) {
            var cardKillerCount = 0;
            for (var i = 0; i < cardAwakenings.length; i++) {
                var cardAwakening = cardAwakenings[i];
                if (desiredKillers[cardAwakening]) {
                    cardKillerCount++;
                }
            }
            if (cardKillerCount >= customKillerCount) {
                skipKillerChecks = true;
            }
        }
        for (var i = 0; i < awakenings.length; i++) {
            var found = false;
            for (var j = 0; j < cardAwakenings.length; j++) {
                if (hasUsed[j]) {
                    continue;
                }
                if (cardAwakenings[j] == awakenings[i]) {
                    hasUsed[j] = true;
                    found = true;
                    break;
                }
            }
            // If mix and match is enabled, see if any replacements can be made
            if (!found && mixMatchKillers && CardAssets.isKillerAwakening(awakenings[i])) {
                if (skipKillerChecks) {
                    continue;
                }
                for (var j = 0; j < cardAwakenings.length; j++) {
                    if (hasUsed[j]) {
                        continue;
                    }
                    var cardAwakening = cardAwakenings[j];
                    if (!desiredKillers[cardAwakening]) {
                        continue;
                    }
                    hasUsed[j] = true;
                    found = true;
                    break;
                }
            }
            if (found) {
                continue;
            }
            // We have nothing that can save us. rip.
            return false;
        }
        return true;
    };
    CardAssets.canPlus = function (card) {
        if (card.types.indexOf(CardType.Evo) > -1) {
            return false;
        }
        if (card.types.indexOf(CardType.Awakening) > -1) {
            return false;
        }
        if (card.types.indexOf(CardType.Enhance) > -1 && card.maxLevel == 1) {
            return false;
        }
        return true;
    };
    CardAssets.getLsse = function (card, model, considerHeartCross, effectiveShield, selfPair, colorCrosses, hp) {
        var ret = new LeaderSkillStatEffect();
        ret.hp = 1;
        ret.atk = 1;
        ret.rcv = 1;
        ret.shield = 0;
        var leaderSkillId = card.leaderSkillId;
        if (!leaderSkillId) {
            return ret;
        }
        var leaderSkill = model.playerSkills[leaderSkillId];
        if (!leaderSkill) {
            return ret;
        }
        var effects = leaderSkill.parsedEffects;
        if (!effects) {
            return ret;
        }
        var context = new LeaderSkillMaximumMultiplierContext();
        context.considerHeartCross = considerHeartCross;
        context.colorCrossCount = colorCrosses;
        context.colorCrossCountRemaining = context.colorCrossCount;
        context.healthPercent = hp;
        var hpLsse = [];
        for (var i = 0; i < effects.length; i++) {
            var effect = effects[i];
            var lsse = effect.calculateMaxMultiplier(context);
            if (hp == 0 && effect.type == PlayerSkillEffectType.HpConditional) {
                hpLsse.push(lsse);
                continue;
            }
            ret.multiply(lsse);
        }
        if (hpLsse.length > 0) {
            var hpRelatedLsse_1 = new LeaderSkillStatEffect();
            hpLsse.forEach(function (v) {
                if (v.hp > hpRelatedLsse_1.hp) {
                    hpRelatedLsse_1.hp = v.hp;
                }
                if (v.atk > hpRelatedLsse_1.atk) {
                    hpRelatedLsse_1.atk = v.atk;
                }
                if (v.rcv > hpRelatedLsse_1.rcv) {
                    hpRelatedLsse_1.rcv = v.rcv;
                }
                if (v.shield > hpRelatedLsse_1.shield) {
                    hpRelatedLsse_1.shield = v.shield;
                }
            });
            ret.multiply(hpRelatedLsse_1);
        }
        if (selfPair) {
            ret.multiply(ret);
        }
        if (effectiveShield && ret.shield != 0) {
            var trueShield = ret.shield / 100;
            ret.hp *= 1 / (1 - trueShield);
            ret.rcv *= 1 / (1 - trueShield);
        }
        return ret;
    };
    CardAssets.baseUrl = "https://s3.amazonaws.com/ilmina/";
    CardAssets.apkVersion = "PAD_16.0.0.apk";
    return CardAssets;
}());
/*
    This class is for Card related assets that are only on the UI and not really part of the card itself.
    For example Awakenings are really part of Cards while the "Skill" icon and background are not.
*/
var CardUiAssets = /** @class */ (function () {
    function CardUiAssets() {
    }
    CardUiAssets.tryAddApkMetadata = function (asset, model) {
        if (!model) {
            return false;
        }
        var apkMetadata = model.apkMetadata;
        if (!apkMetadata) {
            return false;
        }
        var fileName = asset.url;
        if (!fileName) {
            return false;
        }
        var expectedStart = CardAssets.baseUrl + "extract/" + CardAssets.apkVersion + "2/";
        if (fileName.indexOf(expectedStart) != 0) {
            console.error("Url " + fileName + " does not support metadata");
            return false;
        }
        fileName = fileName.substr(expectedStart.length);
        var assetMetadata = apkMetadata[fileName];
        if (!assetMetadata) {
            return false;
        }
        asset.baseHeight = assetMetadata.height;
        asset.baseWidth = assetMetadata.width;
        return true;
    };
    CardUiAssets.getSkillAsset = function (model) {
        var url = CardAssets.baseUrl + "extract/apk2/EGGS.PNG";
        var ret = new GraphicDescription(url, 447, 300, 88, 36);
        return ret;
    };
    CardUiAssets.getLeaderSkillAsset = function (model) {
        var url = CardAssets.baseUrl + "extract/apk2/EGGS.PNG";
        var ret = new GraphicDescription(url, 102, 158, 181, 36);
        return ret;
    };
    CardUiAssets.getIconBackground = function (model) {
        var url = CardAssets.baseUrl + "extract/" + CardAssets.apkVersion + "2/CARDFRAME.PNG";
        var ret = new GraphicDescription(url, 0, 104, 102, 102);
        CardUiAssets.tryAddApkMetadata(ret, model);
        return ret;
    };
    CardUiAssets.getFavoriteIcon = function (isEnabled, model) {
        var url = CardAssets.baseUrl + "extract/apk2/MENUONLY4.PNG";
        var ret = new GraphicDescription(url, 0, 340, 91, 78);
        if (isEnabled) {
            ret.offsetY += 76;
        }
        return ret;
    };
    CardUiAssets.getIconFrame = function (color, isSubAttribute, model) {
        var url = CardAssets.baseUrl + "extract/" + CardAssets.apkVersion + "2/CARDFRAME2.PNG";
        var ret = new GraphicDescription(url, 0, 0, 102, 102);
        var dx = -1;
        switch (color) {
            case ColorAttribute.Fire:
                dx = 0;
                break;
            case ColorAttribute.Water:
                dx = 1;
                break;
            case ColorAttribute.Wood:
                dx = 2;
                break;
            case ColorAttribute.Light:
                dx = 3;
                break;
            case ColorAttribute.Dark:
                dx = 4;
                break;
        }
        if (dx == -1) {
            return null;
        }
        ret.offsetX = dx * ret.width;
        ret.offsetY = (isSubAttribute ? ret.height + 2 : 0);
        CardUiAssets.tryAddApkMetadata(ret, model);
        return ret;
    };
    CardUiAssets.getCostFrame = function (model) {
        var url = CardAssets.baseUrl + "extract/apk2/MENUPARTS2.PNG";
        var ret = new GraphicDescription(url, 0, 356, 160, 56);
        return ret;
    };
    CardUiAssets.getAssistIcon = function (model) {
        var url = CardAssets.baseUrl + "extract/apk2/MENUPARTS1.PNG";
        var ret = new GraphicDescription(url, 708, 0, 32, 32);
        return ret;
    };
    CardUiAssets.getAssistanceText = function (model) {
        var url = CardAssets.baseUrl + "extract/apk2/EGGS.PNG";
        var ret = new GraphicDescription(url, 362, 340, 80, 32);
        return ret;
    };
    CardUiAssets.getFuzzySearch = function (isEnabled, model) {
        var url = CardAssets.baseUrl + "extract/apk2/EGGS.PNG";
        var ret = new GraphicDescription(url, 105, 241, 104, 49);
        if (isEnabled) {
            ret.offsetY += 52;
        }
        return ret;
    };
    CardUiAssets.getEvolutionUpDownIcon = function (up, model) {
        var url = CardAssets.baseUrl + "extract/apk2/MENUONLY4.PNG";
        var ret = new GraphicDescription(url, 493, 289, 16, 34);
        if (up) {
            ret.offsetX = 193;
            ret.offsetY = 417;
        }
        return ret;
    };
    return CardUiAssets;
}());
var DataSource = /** @class */ (function () {
    function DataSource(errorReporter) {
        this.errorReporter = errorReporter;
    }
    DataSource.isAprilFools = function () {
        var currentTime = new Date();
        // 3 = April
        // 1 = the actual date.
        // JS is weird.
        var isAprilFools = currentTime.getMonth() == 3 && currentTime.getDate() == 1;
        return isAprilFools;
    };
    DataSource.prototype.loadCardData = function (callback) {
        // TODO: Check local storage, check versions, etc.
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/api/download_card_data.json" });
        if (UserSettings.useJP()) {
            call = $.ajax({ url: CardAssets.baseUrl + "extract/api/jp/download_card_data.json" });
        }
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to load card data", error);
        });
    };
    DataSource.prototype.loadPlayerSkillData = function (callback) {
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/api/download_skill_data.json" });
        if (UserSettings.useJP()) {
            call = $.ajax({ url: CardAssets.baseUrl + "extract/api/jp/download_skill_data.json" });
        }
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to load player skill data", error);
        });
    };
    DataSource.prototype.loadEnemySkillData = function (callback) {
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/api/download_enemy_skill_data.json" });
        if (UserSettings.useJP()) {
            call = $.ajax({ url: CardAssets.baseUrl + "extract/api/jp/download_enemy_skill_data.json" });
        }
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to load enemy skill data", error);
        });
    };
    DataSource.prototype.loadApkMetadata = function (callback) {
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/metadata/" + CardAssets.apkVersion + ".json" });
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to load apk metadata", error);
        });
    };
    DataSource.prototype.loadMonsMetadata = function (callback) {
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/metadata/mons.json" });
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to load card metadata", error);
        });
    };
    DataSource.prototype.loadMonsterExchange = function (callback) {
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/api/mdatadl.json" });
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to monster exchange data", error);
        });
    };
    DataSource.prototype.loadDungeonData = function (callback) {
        var call = $.ajax({ url: CardAssets.baseUrl + "extract/api/download_dungeon_data.json" });
        call.done(function (data) {
            if (typeof data == "string") {
                data = JSON.parse(data);
            }
            callback(data);
        });
        call.fail(function (error) {
            this.errorReporter.onError("Failed to load dungeon data", error);
        });
    };
    return DataSource;
}());
var FdcAssets = /** @class */ (function () {
    function FdcAssets() {
    }
    FdcAssets.getMainBox = function (model) {
        var url = CardAssets.baseUrl + "extract/" + CardAssets.apkVersion + "2/MENUMULTINRDECK.PNG";
        var ret = new GraphicDescription(url, 0, 0, 640, 168);
        return ret;
    };
    FdcAssets.getP = function (model, num) {
        var url = CardAssets.baseUrl + "extract/" + CardAssets.apkVersion + "2/MENUMULTINRDECK.PNG";
        var ret = new GraphicDescription(url, 409, 336, 101, 38);
        if (num == 2) {
            return ret;
        }
        if (num == 3) {
            ret.offsetX += ret.width + 3;
            return ret;
        }
        if (num == 1) {
            ret.offsetX = 265;
            ret.offsetY = 456;
            return ret;
        }
        return ret;
    };
    return FdcAssets;
}());
var GraphicDescription = /** @class */ (function () {
    function GraphicDescription(url, offsetX, offsetY, width, height, baseWidth, baseHeight) {
        if (baseWidth === void 0) { baseWidth = 0; }
        if (baseHeight === void 0) { baseHeight = 0; }
        this.scale = 1;
        this.url = url;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.width = width;
        this.height = height;
        this.baseHeight = baseHeight;
        this.baseWidth = baseWidth;
    }
    return GraphicDescription;
}());
var GroupAssets = /** @class */ (function () {
    function GroupAssets() {
    }
    GroupAssets.getCollabDetails = function (collab) {
        switch (collab) {
            case CollabGroup.None:
                return { "name": "None", "aliases": [] };
            case CollabGroup.Ragnarok:
                return { "name": "Ragnarok", "aliases": [] };
            case CollabGroup.Taiko:
                return { "name": "Taiko no Tatsujin", "aliases": [] };
            case CollabGroup.ECO:
                return { "name": "Emil Chronicle Online", "aliases": [] };
            case CollabGroup.Gunma:
                return { "name": "Gunma no Yabou", "aliases": [] };
            case CollabGroup.FFCD:
                return { "name": "Final Fantasy Crystal Defenders", "aliases": ["FFCD"] };
            case CollabGroup.Necky:
                return { "name": "Famitsu", "aliases": ["Necky"] };
            case CollabGroup.Punt:
                return { "name": "Princess Punt", "aliases": [] };
            case CollabGroup.Android:
                return { "name": "Android", "aliases": [] };
            case CollabGroup.Shinrabansho:
                return { "name": "Shinra Bansho", "aliases": [] };
            case CollabGroup.Kapibara:
                return { "name": "Kapibara-San", "aliases": [] };
            case CollabGroup.CrazyTower:
                return { "name": "Crazy Tower", "aliases": ["Freak Tower"] };
            case CollabGroup.TenkaTrigger:
                return { "name": "Sangoku Tenka Trigger", "aliases": [] };
            case CollabGroup.EVA:
                return { "name": "Evangelion", "aliases": [] };
            case CollabGroup.SevenEleven:
                return { "name": "7-Eleven", "aliases": ["seven eleven", "7-11"] };
            case CollabGroup.ClashOfClans:
                return { "name": "Clash of Clans", "aliases": [] };
            case CollabGroup.GrooveCoaster:
                return { "name": "GROOVE COASTER", "aliases": [] };
            case CollabGroup.ROACE:
                return { "name": "Ragnarok Odyssey Ace", "aliases": [] };
            case CollabGroup.DragonsDogma:
                return { "name": "Dragon's Dogma", "aliases": [] };
            case CollabGroup.Takaoka:
                return { "name": "Takaoka City", "aliases": [] };
            case CollabGroup.BattleCats:
                return { "name": "Battle Cats", "aliases": [] };
            case CollabGroup.Batman:
                return { "name": "Batman", "aliases": [] };
            case CollabGroup.BaskinRobbins:
                return { "name": "Baskin Robbins", "aliases": [] };
            case CollabGroup.AngryBirds:
                return { "name": "Angry Birds", "aliases": [] };
            case CollabGroup.HxH:
                return { "name": "Hunter X Hunter", "aliases": [] };
            case CollabGroup.HelloKitty:
                return { "name": "Hello Kitty", "aliases": [] };
            case CollabGroup.PADBT:
                return { "name": "PAD Battle Tournament", "aliases": [] };
            case CollabGroup.BEAMS:
                return { "name": "BEAMS", "aliases": [] };
            case CollabGroup.Dragonball:
                return { "name": "Dragonball", "aliases": [] };
            case CollabGroup.SaintSeiya:
                return { "name": "Saint Seiya", "aliases": [] };
            case CollabGroup.RoadToDragons:
                return { "name": "Road To Dragons", "aliases": [] };
            case CollabGroup.DivineGate:
                return { "name": "Divine Gate", "aliases": [] };
            case CollabGroup.SummonsBoard:
                return { "name": "Summons Board", "aliases": [] };
            case CollabGroup.Picotto:
                return { "name": "Picotto Knights", "aliases": [] };
            case CollabGroup.Bikkuriman:
                return { "name": "Bikkuriman", "aliases": [] };
            case CollabGroup.AngryBirdsEpic:
                return { "name": "Angry Birds Epic", "aliases": [] };
            case CollabGroup.DC:
                return { "name": "DC Collab", "aliases": [] };
            case CollabGroup.Chibis1:
                return { "name": "Chibi Set 1", "aliases": [] };
            case CollabGroup.NorthStar:
                return { "name": "Fist of the North Star", "aliases": ["fotns"] };
            case CollabGroup.Chibis2:
                return { "name": "Chibi Set 2", "aliases": [] };
            case CollabGroup.Chibis3:
                return { "name": "Chibi Set 3", "aliases": [] };
            case CollabGroup.FinalFantasy:
                return { "name": "Final Fantasy", "aliases": [] };
            case CollabGroup.GhostInTheShell:
                return { "name": "Ghost in the Shell", "aliases": [] };
            case CollabGroup.DuelMasters:
                return { "name": "Duel Masters", "aliases": [] };
            case CollabGroup.AttackOnTitan:
                return { "name": "Attack on Titan", "aliases": [] };
            case CollabGroup.NinjaHattori:
                return { "name": "Ninja Hattori", "aliases": [] };
            case CollabGroup.ShohenSunday:
                return { "name": "Shohen Sunday", "aliases": [] };
            case CollabGroup.Bleach:
                return { "name": "Bleach", "aliases": [] };
            case CollabGroup.BatmanVSuperman:
                return { "name": "Batman v Superman", "aliases": [] };
            case CollabGroup.PhoenixWright:
                return { "name": "Phoenix Wright", "aliases": [] };
            case CollabGroup.Kenshin:
                return { "name": "Rurouni Kenshin", "aliases": [] };
            case CollabGroup.Pepper:
                return { "name": "Pepper", "aliases": [] };
            case CollabGroup.Kinnikuman:
                return { "name": "Kinnikuman", "aliases": [] };
            case CollabGroup.NappingPrincess:
                return { "name": "Napping Princess", "aliases": [] };
            case CollabGroup.Magazine:
                return { "name": "Magazine", "aliases": [] };
            case CollabGroup.MonsterHunter:
                return { "name": "Monster Hunter", "aliases": ["monsterhunter", "mh"] };
            case CollabGroup.Voltron:
                return { "name": "Voltron", "aliases": [] };
            case CollabGroup.DCUniverse:
                return { "name": "DC Universe", "aliases": [] };
            case CollabGroup.FMA:
                return { "name": "Fullmetal Alchemist", "aliases": ["fma"] };
            case CollabGroup.KOF:
                return { "name": "King of Fighters", "aliases": [] };
            case CollabGroup.YuYuHakusho:
                return { "name": "Yu Yu Hakusho", "aliases": ["yyh"] };
            case CollabGroup.Persona:
                return { "name": "Persona", "aliases": [] };
            case CollabGroup.CocaCola:
                return { "name": "Coca Cola", "aliases": [] };
            case CollabGroup.MTG:
                return { "name": "Magic the Gathering", "aliases": ["mtg"] };
            case CollabGroup.ChronoMaGia:
                return { "name": "Chrono Ma:Gia", "aliases": [] };
            case CollabGroup.SeventhRebirth:
                return { "name": "Seventh Rebirth", "aliases": [] };
            case CollabGroup.CalcioFantasista:
                return { "name": "Calcio Fantasista", "aliases": [] };
            case CollabGroup.PowerPro:
                return { "name": "Power Pros", "aliases": [] };
            case CollabGroup.Gintama:
                return { "name": "Gintama", "aliases": [] };
            case CollabGroup.DragonboundsDragoncallers:
                return { "name": "Dragonbounds & Dragon Callers", "aliases": [] };
            case CollabGroup.SAO:
                return { "name": "Sword Art Online", "aliases": ["sao"] };
            case CollabGroup.Fate:
                return { "name": "Fate/stay night: Heaven's Feel", "aliases": ["fate"] };
            case CollabGroup.StreetFighterV:
                return { "name": "Street Fighter V: Arcade Edition", "aliases": ["sf"] };
            case CollabGroup.ShamanKing:
                return { "name": "Shaman King", "aliases": ["sk"] };
        }
        return { "name": "Unknown Collab (" + collab + ")", "aliases": [] };
    };
    GroupAssets.customGroups = [
        { "collabId": -1, "name": "Dragonbounds & Dragon Callers Event", "aliases": ["dbdc"], "cards": [3930, 3932, 3934, 3940, 3946, 3948, 3936, 3938, 3942, 3944, 3950, 3952, 3956, 3957, 3958, 3959, 3960, 3961, 3962, 3963, 3964, 3965, 4186, 4188, 4190, 4796, 4798, 4800, 4802, 4804, 4806, 4810, 4808, 5425, 5427, 5429] },
        { "collabId": -1, "name": "Ex-Godfest Exclusive", "aliases": ["exgfe"], "cards": [362, 640, 911, 1130, 1241, 1243, 1359, 1372, 1374, 1585, 1669, 1671, 1946, 1952, 2141, 2143, 2149, 2440, 2562, 2640, 2710, 2944, 2992, 2994, 3643, 3783, 4059] },
        { "collabId": -1, "name": "Godfest Exclusives", "aliases": ["gfe"], "cards": [364, 642, 913, 1088, 1107, 1587, 1673, 1948, 1950, 2145, 2147, 2442, 2508, 2564, 2591, 2712, 2899, 2942, 2990, 2996, 2998, 3267, 3413, 3415, 3602, 3645, 3756, 3785, 3896, 4057, 4061, 4410, 4412, 4414, 4647, 4649, 4834, 4836, 4838, 5125, 5127, 5129, 5131, 5133, 5234, 5418, 5420, 5422] },
        { "collabId": -1, "name": "MP Dragons", "aliases": [], "cards": [2252, 2254, 2256, 2258, 2260, 2593] },
        { "collabId": -1, "name": "Puppetteers", "aliases": [], "cards": [2293, 2295, 2297] },
        { "collabId": -1, "name": "Four Noble Ones", "aliases": [], "cards": [2755, 2757, 2759, 2761] },
        { "collabId": -1, "name": "Legendary Heroes", "aliases": [], "cards": [2915, 2917, 2919, 2921, 2923] },
        { "collabId": -1, "name": "JP Armour Drop", "aliases": [], "cards": [3192, 3193, 3172, 3174, 3194, 3330, 3910] },
        { "collabId": -1, "name": "Heroine", "aliases": [], "cards": [3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3287, 3288, 3289, 3290, 3291, 3292, 3293, 3524, 3526, 4192, 4193, 4194, 4195, 4197, 4199, 4201, 4202, 4203, 4994, 4996] },
        { "collabId": -1, "name": "Three Kingdoms 2", "aliases": [], "cards": [3343, 3345, 3347, 3349, 3351] },
        { "collabId": -1, "name": "Heroic Warriors", "aliases": [], "cards": [3548, 3549, 3550, 3551, 3552] },
        { "collabId": -1, "name": "Samurai 2", "aliases": [], "cards": [3690, 3692, 3694, 3696, 3698] },
        { "collabId": -1, "name": "Greco-Roman 3", "aliases": [], "cards": [3746, 3748, 3750, 3752, 3754] },
        { "collabId": -1, "name": "Celtic", "aliases": [], "cards": [4176, 4178, 4180, 4182, 4184] },
        { "collabId": -1, "name": "Mesopotamian", "aliases": [], "cards": [4359, 4361, 4363, 4365, 4367] },
        { "collabId": -1, "name": "Greco-Roman 1", "aliases": [], "cards": [122, 124, 126, 128, 130] },
        { "collabId": -1, "name": "Japanese 1", "aliases": [], "cards": [132, 134, 136, 138, 140] },
        { "collabId": -1, "name": "Indian 1", "aliases": [], "cards": [236, 238, 240, 242, 244] },
        { "collabId": -1, "name": "Norse", "aliases": [], "cards": [368, 370, 372, 374, 376] },
        { "collabId": -1, "name": "Riders", "aliases": [], "cards": [378, 380, 382, 384, 386] },
        { "collabId": -1, "name": "Egyptian 1", "aliases": [], "cards": [490, 492, 494, 496, 498] },
        { "collabId": -1, "name": "Ninjas", "aliases": [], "cards": [555, 557, 559, 561, 563] },
        { "collabId": -1, "name": "Greco-Roman 2", "aliases": [], "cards": [567, 569, 571, 573, 575] },
        { "collabId": -1, "name": "Archangels", "aliases": [], "cards": [620, 622, 624, 626, 628] },
        { "collabId": -1, "name": "Archdemons", "aliases": [], "cards": [630, 632, 634, 636, 638] },
        { "collabId": -1, "name": "Chinese", "aliases": [], "cards": [745, 747, 749, 751, 753] },
        { "collabId": -1, "name": "Japanese 2", "aliases": [], "cards": [799, 801, 803, 805, 807] },
        { "collabId": -1, "name": "Heroes", "aliases": [], "cards": [1065, 1067, 1069, 1071, 1073] },
        { "collabId": -1, "name": "Three Kingdoms 1", "aliases": [], "cards": [1231, 1233, 1235, 1237, 1239] },
        { "collabId": -1, "name": "Indian 2", "aliases": [], "cards": [1330, 1332, 1334, 1336, 1338] },
        { "collabId": -1, "name": "Wizards", "aliases": [], "cards": [1614, 1616, 1618, 1620, 1622, 1624, 1626, 1704, 1706] },
        { "collabId": -1, "name": "Armoured Knights", "aliases": [], "cards": [1649, 1651, 1653, 1655, 1657] },
        { "collabId": -1, "name": "Egyptian 2", "aliases": [], "cards": [1659, 1661, 1663, 1665, 1667] },
        { "collabId": -1, "name": "Grimoires", "aliases": [], "cards": [1749, 1751, 1753, 1755, 1757] },
        { "collabId": -1, "name": "Angels 2", "aliases": [], "cards": [1826, 1828, 1830, 1832, 1834] },
        { "collabId": -1, "name": "Blade Braves", "aliases": [], "cards": [1881, 1882, 1883, 1884, 1885] },
        { "collabId": -1, "name": "Beast Riders", "aliases": [], "cards": [2093, 2095, 2097, 2099, 2101] },
        { "collabId": -1, "name": "Cyberdragons", "aliases": [], "cards": [2185, 2186, 2187, 2188, 2189] },
        { "collabId": -1, "name": "Cyberbeasts", "aliases": [], "cards": [2190, 2191, 2192, 2193, 2194] },
        { "collabId": -1, "name": "Samurai 1", "aliases": [], "cards": [2264, 2266, 2268, 2270, 2272] },
        { "collabId": -1, "name": "Mechanical Stars 1", "aliases": [], "cards": [2415, 2417, 2419, 2421, 2423] },
        { "collabId": -1, "name": "Mechanical Stars 2", "aliases": [], "cards": [2552, 2554, 2556, 2558, 2560] },
        { "collabId": -1, "name": "Gemstone Princesses", "aliases": [], "cards": [2665, 2667, 2669, 2671, 2673] },
        { "collabId": -1, "name": "Wisdom Kings", "aliases": [], "cards": [3197, 3199, 3201, 3203, 3205] },
        { "collabId": -1, "name": "Wisedragons", "aliases": [], "cards": [3538, 3540, 3542, 3544, 3546] },
        { "collabId": -1, "name": "Valkyries", "aliases": [], "cards": [225, 972, 982, 1270, 1516] },
        { "collabId": -1, "name": "Healer Girls", "aliases": [], "cards": [88, 90, 92, 94, 96] },
        { "collabId": -1, "name": "Starter Dragons", "aliases": [], "cards": [1929, 1930, 1931, 13, 17] },
        { "collabId": -1, "name": "Toy Dragons", "aliases": [], "cards": [288, 291, 294, 297, 300] },
        { "collabId": -1, "name": "Elemental Spirits", "aliases": [], "cards": [352, 354, 356, 358, 360] },
        { "collabId": -1, "name": "Mythical Beasts", "aliases": [], "cards": [398, 400, 402, 404, 406] },
        { "collabId": -1, "name": "Legendary Dragons", "aliases": [], "cards": [408, 409, 410, 411, 412] },
        { "collabId": -1, "name": "Sticker Girls", "aliases": [], "cards": [414, 417, 420, 423, 426] },
        { "collabId": -1, "name": "Ancient Dragons", "aliases": [], "cards": [441, 442, 443, 444, 445] },
        { "collabId": -1, "name": "Attack Stance", "aliases": [], "cards": [106, 110, 221, 223, 225, 972, 982, 1270, 1516] },
        { "collabId": -1, "name": "Snowglobes", "aliases": [], "cards": [517, 518, 519, 1003, 1004, 520, 521, 522, 1005, 1006, 3973] },
        { "collabId": -1, "name": "War Dragons", "aliases": [], "cards": [540, 541, 542, 543, 544] },
        { "collabId": -1, "name": "Jewel Dragons", "aliases": [], "cards": [176, 177, 178, 179, 180, 181, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 309, 429, 430, 617, 618, 619, 798, 1324, 3909] },
        { "collabId": -1, "name": "Mythic Stone Dragons", "aliases": [], "cards": [737, 738, 739, 740, 741] },
        { "collabId": -1, "name": "Sky Dragons", "aliases": [], "cards": [216, 217, 218, 219, 220] },
        { "collabId": -1, "name": "Mystic Dragons", "aliases": [], "cards": [782, 783, 784, 785, 786] },
        { "collabId": -1, "name": "Chasers", "aliases": [], "cards": [896, 898, 900, 902, 904] },
        { "collabId": -1, "name": "Fruit Dragons", "aliases": [], "cards": [1075, 1077, 1079, 1081, 1083] },
        { "collabId": -1, "name": "Flower Dragons", "aliases": [], "cards": [1166, 1167, 1168, 1169, 1170] },
        { "collabId": -1, "name": "Fairies", "aliases": [], "cards": [1178, 1180, 1182, 1184, 1186] },
        { "collabId": -1, "name": "Number Dragons", "aliases": [], "cards": [682, 1224, 1226, 1471, 1630, 2091, 2276, 2753, 3011, 3012, 3244, 3731] },
        { "collabId": -1, "name": "Dragon Knights", "aliases": [], "cards": [1361, 1362, 1363, 1364, 1365] },
        { "collabId": -1, "name": "Fairy Tale", "aliases": [], "cards": [1412, 1414, 1416, 1418, 1420] },
        { "collabId": -1, "name": "Dragon Swordsman", "aliases": [], "cards": [1502, 1504, 1506, 1896, 1898] },
        { "collabId": -1, "name": "Shieldras", "aliases": [], "cards": [1537, 1539, 1541, 1543, 1545] },
        { "collabId": -1, "name": "Pys", "aliases": [], "cards": [1547, 1548, 1549, 1550, 1551, 3891, 3974] },
        { "collabId": -1, "name": "Insect Dragons", "aliases": [], "cards": [1591, 1592, 1593, 1594, 1595] },
        { "collabId": -1, "name": "Bowl Dragons", "aliases": [], "cards": [1761, 1762, 1763, 1764, 1765] },
        { "collabId": -1, "name": "Mug Dragons", "aliases": [], "cards": [1766, 1767, 1768, 1769, 1770, 1771, 1773, 1775, 1777, 1779] },
        { "collabId": -1, "name": "Rogue Dungeons", "aliases": [], "cards": [1838, 1840, 1842, 1844, 1846, 2205, 2967] },
        { "collabId": -1, "name": "Cat Dragons", "aliases": [], "cards": [1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966] },
        { "collabId": -1, "name": "Monday Dungeon", "aliases": [], "cards": [2413, 2414] },
        { "collabId": -1, "name": "Tuesday Dungeon", "aliases": [], "cards": [147, 148, 149, 150, 151, 321, 1176] },
        { "collabId": -1, "name": "Wednesday Dungeon", "aliases": [], "cards": [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 234, 1294, 1295] },
        { "collabId": -1, "name": "Thursday Dungeon", "aliases": [], "cards": [152, 153, 154, 227, 1085, 1086, 1087, 3971] },
        { "collabId": -1, "name": "Friday Dungeon", "aliases": [], "cards": [155, 156, 157, 158, 159, 160, 246, 247, 248, 249, 250, 251, 915, 916, 3826] },
        { "collabId": -1, "name": "Latent Tamadras", "aliases": [], "cards": [2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2425, 3317, 3318, 3319, 3320, 3321, 3322, 3323, 3324, 3325, 3700, 3701, 3702, 3703, 3717, 3718, 3719, 3720, 4369, 4370, 4371, 4372, 4373] },
        { "collabId": -1, "name": "Puzzle & Dragons Z", "aliases": [], "cards": [962, 965, 968, 971, 1132, 1133, 1134, 1135] },
        { "collabId": -1, "name": "Spirit Jewels", "aliases": [], "cards": [1325, 1326, 1327, 1328, 1329, 3911] },
        { "collabId": -1, "name": "Christmas Event", "aliases": ["xmas"], "cards": [1781, 1782, 1783, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 3376, 3377, 3378, 3379, 3380, 3381, 3382, 4064, 4065, 4066, 4067, 4068, 4069, 4070, 4946, 4947, 4948] },
        { "collabId": -1, "name": "PAD Academy", "aliases": ["academy", "school"], "cards": [2014, 2015, 2017, 2018, 2019, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 3648, 3649, 3650, 3651, 4344, 4345, 4346, 4347, 4348, 4349, 4350, 4351, 5216, 5217, 5218, 5219, 5220, 5221, 5222] },
        { "collabId": -1, "name": "PAD Island", "aliases": ["beach", "bikini"], "cards": [2283, 2284, 2285, 2286, 2287, 2288, 2290, 2291, 2292, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3121, 3122, 3123, 3846, 3847, 3848, 3849, 4787, 4788, 4789, 4790] },
        { "collabId": -1, "name": "Armor Dragons", "aliases": [], "cards": [2333, 2334, 2335, 2336, 2337, 2338, 2529, 2530, 2531, 2532] },
        { "collabId": -1, "name": "Halloween Event", "aliases": ["halloween"], "cards": [2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 3222, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3994, 3995, 3996, 3997, 3998, 4830, 4831, 4832, 5621, 5623, 5624, 5625, 5626, 5627, 5628, 5629] },
        { "collabId": -1, "name": "Lunar New Year Event", "aliases": ["ny"], "cards": [2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2574, 3418, 3419, 3420, 3421, 4128, 4129, 4130, 4131, 4132, 4999, 5000] },
        { "collabId": -1, "name": "Multiplayer Ancient Dragons", "aliases": [], "cards": [2575, 2576, 2577, 2578, 2579, 2580, 2581, 2583, 2585, 2587, 2589] },
        { "collabId": -1, "name": "Metallic Star Dragons", "aliases": [], "cards": [2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656] },
        { "collabId": -1, "name": "Radar Dragons", "aliases": [], "cards": [2716, 2717, 2718, 2719, 2720, 2939, 2940, 2941] },
        { "collabId": -1, "name": "Contract Dragons", "aliases": [], "cards": [2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884] },
        { "collabId": -1, "name": "PAD X", "aliases": [], "cards": [2930, 2933, 2936, 2927, 2928, 2929, 2978, 3086, 3089, 3090, 3447, 3566] },
        { "collabId": -1, "name": "June (August) Bride", "aliases": ["wedding", "bride"], "cards": [2949, 3790, 4588, 4589, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 3791, 3792, 3793, 4590, 4591, 5380, 5381, 5382, 5384, 5385, 5386, 5387, 5388] },
        { "collabId": -1, "name": "Guardian Dragons", "aliases": [], "cards": [3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216] },
        { "collabId": -1, "name": "Lovecraftian Gods", "aliases": [], "cards": [3637, 3639, 3641, 3643, 3645] },
        { "collabId": -1, "name": "Orb Dragons", "aliases": [], "cards": [3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730] },
        { "collabId": -1, "name": "Warchief Dragons", "aliases": [], "cards": [3835, 3836, 3837, 3838, 3839] },
        { "collabId": -1, "name": "Valentines Event", "aliases": ["valentine", "v"], "cards": [4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 4212, 4213, 4215, 4216, 4217, 4218, 4219, 4220, 4221, 4222, 4223, 4224, 4225, 5116, 5117] },
        { "collabId": -1, "name": "Evo Gems", "aliases": [], "cards": [4453, 4454, 4455, 4456, 4457, 4458, 4459, 4460, 4461, 4462, 4463, 4464, 4465, 4466, 4467, 4468, 4469, 4470, 4471, 4472, 4473, 4474, 4475, 4476, 4477, 4478, 4479, 4480, 4481, 4482, 4483, 4484, 4485, 4486, 4487, 4488, 4489, 4490, 4491, 4492, 4493, 4494, 4495, 4496, 4497, 4498, 4499, 4500, 4501, 4502, 4503, 4504, 4505, 4506, 4507, 4508, 4509, 4510, 4511, 4512, 4513, 4514, 4515, 4516, 4517, 4518, 4519, 4520, 4521, 4522, 4523, 4524, 4525, 4526, 4527, 4528, 4529, 4530, 4531, 4532, 4533, 4534, 4535, 4536, 4537, 4538, 4539, 4540, 4541, 4542, 4543, 4544, 4545, 4546, 4547, 4548, 4549, 4550, 4551, 4552, 4553, 4554, 4555, 4556, 4557, 4558, 4559, 4560, 4561, 4562, 4563, 4564, 4565, 4566, 4567, 4568, 4569, 4570, 4571, 4572, 4573, 4574, 4575] },
        { "collabId": -1, "name": "Event Medals", "aliases": [], "cards": [3188, 3189, 3190] },
        { "collabId": -1, "name": "Spirit Numens", "aliases": [], "cards": [4352, 4353, 4354, 4355, 4356] },
        { "collabId": -1, "name": "Companion Dragons", "aliases": [], "cards": [4637, 4639, 4641, 4643, 4645] },
        { "collabId": -1, "name": "Samurai 3", "aliases": [], "cards": [4845, 4847, 4849, 4851, 4853] },
        { "collabId": -1, "name": "Draconic Orchestra", "aliases": [], "cards": [5328, 5330, 5332, 5334, 5336, 5338, 5340, 5342, 5344, 5346, 5348, 5350, 5352, 5354, 5356, 5357, 5358, 5359, 5360, 5361, 5362] },
        { "collabId": -1, "name": "Radar 5", "aliases": [], "cards": [5175, 5177, 5179, 5181, 5183] }
    ];
    return GroupAssets;
}());
var CollabAsset = /** @class */ (function () {
    function CollabAsset() {
    }
    return CollabAsset;
}());
var DisplayedLevel;
(function (DisplayedLevel) {
    DisplayedLevel[DisplayedLevel["Level1"] = 0] = "Level1";
    DisplayedLevel[DisplayedLevel["LevelMax"] = 1] = "LevelMax";
    DisplayedLevel[DisplayedLevel["LevelMaxLimitBroken"] = 2] = "LevelMaxLimitBroken";
})(DisplayedLevel || (DisplayedLevel = {}));
var KnockoutVM = /** @class */ (function () {
    // Initialization
    function KnockoutVM() {
        this.page = ko.observable(KoPage.LOADING);
        this.pageData = ko.observable(null);
        this.errorMessage = ko.observable("");
        this.searchPhrase = ko.observable("");
        this.searchResults = ko.observableArray([]);
        this.isSearching = ko.observable(false);
        this.advancedSearchPhrase = ko.observable("");
        this.advancedSearchPhraseHook = ko.observable(null);
        this.model = null;
        this.playerSkillParser = null;
        // Helpers
        this.searcher = null;
        UserSettings.init();
        this.setHooks();
        this.init();
    }
    // Public methods
    KnockoutVM.prototype.getMainFloofImage = function () {
        if (DataSource.isAprilFools() || Math.random() < 0.01) {
            return "url('https://s3.amazonaws.com/ilmina/MONS_03513_invade.PNG')";
        }
        if (Math.random() < 0.01) {
            return "url('https://s3.amazonaws.com/ilmina/MONS_03513_shade.PNG')";
        }
        if (Math.random() < 0.02) {
            return "url('https://s3.amazonaws.com/ilmina/MONS_03513_invade.PNG')";
        }
        return "url('https://s3.amazonaws.com/ilmina/MONS_03513.PNG')";
    };
    KnockoutVM.prototype.onError = function (simpleDescription, fullDescription) {
        console.error(fullDescription);
        this.errorMessage(simpleDescription);
        this.page(KoPage.ERROR);
    };
    KnockoutVM.prototype.navigateUrl = function (url) {
        this.searchPhrase("");
        window.location.href = "#/" + url;
    };
    KnockoutVM.prototype.loadPage = function () {
        if (this.page() == KoPage.LOADING) {
            console.error("The page is loading...");
            return;
        }
        var hash = window.location.hash || "";
        var extractor = new KoPageAndDataExtractor(this, this.model);
        extractor.process(hash);
        var page = extractor.page;
        var pageData = extractor.data;
        if (extractor.errorMessage) {
            console.error(extractor.errorMessage);
            page = KoPage.HOME;
            pageData = null;
        }
        this.page(KoPage.LOADING);
        this.pageData(pageData);
        this.page(page);
    };
    // Internals
    KnockoutVM.prototype.setHooks = function () {
        var self = this;
        self.searchPhrase.subscribe(function (v) {
            self.searchResults([]);
            if (v.length < 2 && isNaN(parseInt(v))) {
                self.isSearching(false);
                return;
            }
            self.isSearching(true);
            var searcher = new CardSearch(v.toLowerCase(), self.model);
            function performCardSearch(card) {
                var cardName = card.name.toLowerCase();
                var ret = searcher.doesMatch(card, cardName);
                card.aliases.forEach(function (alias) {
                    var ret2 = searcher.doesMatch(card, alias.toLowerCase());
                    if (!ret.doesMatch || (ret2.doesMatch && ret2.matchKey < ret.matchKey)) {
                        ret = ret2;
                    }
                });
                return ret;
            }
            var searchSorter = new SearchSorter();
            // Perform the actual search
            self.searcher.searchCards(function (card) {
                var ret = performCardSearch(card);
                return ret.doesMatch;
            }, function (card) {
                // It's kinda ineffecient to perform the search again just to get the match key... but I don't care for now
                var result = performCardSearch(card);
                var listEntry = new SearchResult(card.id + " - " + card.name, "CARD/" + card.id, result.matchKey);
                if (card.isAlt) {
                    listEntry.sortKey = "x" + listEntry.sortKey;
                }
                searchSorter.addResult(self.searchResults, listEntry, 1000, {});
            }, function () {
                // Perform skill search
                var searchey = v.toLowerCase();
                self.searcher.searchSkills(function (skill) {
                    var skillName = skill.name.toLowerCase();
                    return skillName.indexOf(searchey) >= 0;
                }, function (skill) {
                    self.searchResults.push(new SearchResult("[Skill] " + skill.id + " - " + skill.name, "SKILL/" + skill.id, "s"));
                }, function () {
                    self.isSearching(false);
                });
            });
        });
        self.advancedSearchPhrase.subscribe(function (v) {
            var f = self.advancedSearchPhraseHook();
            if (typeof f != "function") {
                return;
            }
            f(v);
        });
    };
    KnockoutVM.prototype.init = function () {
        console.log("Loading card data...");
        var dataSource = new DataSource(this);
        var modelBuilder = new ModelBuilder();
        var countRemaining = 0;
        var self = this;
        function decrementCount() {
            countRemaining--;
            if (countRemaining == 0) {
                self.finishedLoadingData(modelBuilder);
                ko.applyBindings(self);
            }
        }
        countRemaining++; // Card groups
        dataSource.loadCardData(function (x) {
            self.parseCardData(x, modelBuilder);
            decrementCount();
            setTimeout(function () { modelBuilder.buildCardGroups(); decrementCount(); }, 0);
        });
        countRemaining++;
        dataSource.loadMonsMetadata(function (x) { modelBuilder.buildMonsMetadata(x); decrementCount(); });
        countRemaining++;
        dataSource.loadApkMetadata(function (x) { modelBuilder.buildApkMetadata(x); decrementCount(); });
        countRemaining++;
        dataSource.loadPlayerSkillData(function (x) { self.parsePlayerSkillData(x, modelBuilder); decrementCount(); });
        countRemaining++;
        dataSource.loadMonsterExchange(function (x) { modelBuilder.buildExchange(x); decrementCount(); });
        countRemaining++;
        //dataSource.loadDungeonData(x => { modelBuilder.buildDungeonData(x); decrementCount(); }); countRemaining++;
        dataSource.loadEnemySkillData(function (x) { modelBuilder.buildEnemySkillsData(x); decrementCount(); });
        countRemaining++;
        var templateLoader = new TemplateLoader(function () { return countRemaining++; }, decrementCount, self);
        templateLoader.loadTemplates();
    };
    KnockoutVM.prototype.parseCardData = function (data, builder) {
        console.log("Parsing card data...");
        data.card.forEach(function (v) {
            builder.buildCard(v);
        });
    };
    KnockoutVM.prototype.parsePlayerSkillData = function (data, builder) {
        builder.buildPlayerSkillData(data.skill);
    };
    KnockoutVM.prototype.finishedLoadingData = function (builder) {
        var self = this;
        var model = builder.build();
        self.model = model;
        self.searcher = new Searcher(self, self.model);
        var playerSkillParser = new PlayerSkillParser(self.model);
        console.log("Parsing player skills...");
        var nextPlayerSkill = 0;
        var burstAwakenings = BurstPlayerSkillEffect.validAwakenings;
        var renderTask = setInterval(function () {
            for (var i = 0; i < 1000; i++) {
                var playerSkill = self.model.playerSkills[nextPlayerSkill++];
                if (!playerSkill) {
                    clearInterval(renderTask);
                    self.finishedDataRender();
                    return;
                }
                var playerSkillResult = playerSkillParser.parseSkill(playerSkill.id);
                playerSkill.parsedEffects = playerSkillResult.parsedEffects;
                playerSkill.parsedEffects.forEach(function (x) {
                    if (x.type != PlayerSkillEffectType.Burst) {
                        return;
                    }
                    var y = x;
                    y.awakenings.forEach(function (v) {
                        if (burstAwakenings.indexOf(v) == -1) {
                            burstAwakenings.push(v);
                        }
                    });
                });
            }
        }, 0);
    };
    KnockoutVM.prototype.finishedDataRender = function () {
        console.log("Loading UI");
        this.page(KoPage.HOME); // default page
        this.loadPage();
        this.setPixelTimer();
        this.setClockTimer();
    };
    KnockoutVM.prototype.setPixelTimer = function () {
        var on = false;
        setInterval(function () {
            if (on) {
                $(".pixel-portrait").removeClass("pixel-portrait-on");
            }
            else {
                $(".pixel-portrait").addClass("pixel-portrait-on");
            }
            on = !on;
        }, 300);
    };
    KnockoutVM.prototype.setClockTimer = function () {
        setInterval(function () {
            DateConverter.updateTime();
        }, 1000);
    };
    KnockoutVM.prototype.cardMatchesSearch = function (card, search) {
        // Name search
        var cardName = card.name.toLowerCase();
        var searchLower = search.toLowerCase();
        if (cardName.indexOf(searchLower) > -1) {
            return true;
        }
        // ID search
        if (card.id == Number(search).valueOf()) {
            return true;
        }
        return false;
    };
    KnockoutVM.prototype.handleSearchEnter = function () {
        var results = this.searchResults();
        if (results.length == 0) {
            return;
        }
        var result = results[0];
        this.navigateUrl(result.url);
    };
    return KnockoutVM;
}());
var KoPage;
(function (KoPage) {
    KoPage[KoPage["LOADING"] = 0] = "LOADING";
    KoPage[KoPage["ERROR"] = 1] = "ERROR";
    KoPage[KoPage["HOME"] = 2] = "HOME";
    KoPage[KoPage["CARD"] = 3] = "CARD";
    KoPage[KoPage["AWAKENING"] = 4] = "AWAKENING";
    KoPage[KoPage["SKILL"] = 5] = "SKILL";
    KoPage[KoPage["EVOLUTION_USES"] = 6] = "EVOLUTION_USES";
    KoPage[KoPage["EVOLUTION_SUMMARY"] = 7] = "EVOLUTION_SUMMARY";
    KoPage[KoPage["ADVANCED_SEARCH"] = 8] = "ADVANCED_SEARCH";
    KoPage[KoPage["STREAM_PULLS"] = 9] = "STREAM_PULLS";
    KoPage[KoPage["FDC"] = 10] = "FDC";
    KoPage[KoPage["ENEMY_SKILL_TREE"] = 11] = "ENEMY_SKILL_TREE";
    KoPage[KoPage["PULL_SIMULATOR"] = 12] = "PULL_SIMULATOR";
    KoPage[KoPage["GUIDE"] = 13] = "GUIDE";
})(KoPage || (KoPage = {}));
var KoPageAndDataExtractor = /** @class */ (function () {
    function KoPageAndDataExtractor(errorReporter, model) {
        this.errorReporter = null;
        if (!model) {
            throw "You must specify model";
        }
        this.model = model;
        this.errorReporter = errorReporter;
    }
    KoPageAndDataExtractor.prototype.process = function (url) {
        // Set defaults
        this.page = KoPage.HOME;
        this.data = null;
        this.errorMessage = null;
        document.title = "Ilmina";
        if (url.indexOf("#/") != 0) {
            return;
        }
        var splitUrls = url.split("/");
        if (splitUrls.length == 1) {
            return;
        }
        if (splitUrls[1] == "") {
            return;
        }
        var page = KoPage[splitUrls[1]];
        if (!page) {
            this.errorMessage = "Invalid page: " + splitUrls[1];
            return;
        }
        var data = null;
        if (page == KoPage.CARD || page == KoPage.EVOLUTION_USES || page == KoPage.EVOLUTION_SUMMARY || page == KoPage.ENEMY_SKILL_TREE) {
            if (splitUrls.length < 2) {
                this.errorMessage = "Invalid card page; unspecified card number.";
                return;
            }
            var cardId = parseInt(splitUrls[2]);
            var card = this.model.cards[cardId];
            if (!card) {
                this.errorMessage = "Invalid card page; card ID " + cardId + " not found.";
                return;
            }
            if (page == KoPage.CARD) {
                document.title = card.id + " - " + card.name + " - Ilmina";
            }
            var cardData = new KoPageCardData(this.model, card);
            this.page = page;
            this.data = cardData;
            return;
        }
        if (page == KoPage.AWAKENING) {
            if (splitUrls.length < 2) {
                this.errorMessage = "Invalid awakening page; unspecified awakening.";
                return;
            }
            var awakening = Awakening[Awakening[parseInt(splitUrls[2])]];
            if (!awakening) {
                this.errorMessage = "Invalid awakening page; awk ID " + awakening + " not found.";
                return;
            }
            var awakenData = new KoPageAwakeningData();
            awakenData.awakening = awakening;
            awakenData.searcher = new Searcher(this.errorReporter, this.model);
            this.page = page;
            this.data = awakenData;
            return;
        }
        if (page == KoPage.SKILL) {
            if (splitUrls.length < 2) {
                this.errorMessage = "Invalid skill page; unspecified skill.";
                return;
            }
            var skillId = parseInt(splitUrls[2]);
            if (isNaN(skillId)) {
                this.errorMessage = "Invalid skill page; nan skill id.";
                return;
            }
            var skill = this.model.playerSkills[skillId];
            if (!skill) {
                this.errorMessage = "Invalid skill page; skill ID " + skillId + " not found.";
                return;
            }
            var skillData = new KoPageSkillData();
            skillData.skill = skill;
            skillData.model = this.model;
            this.page = page;
            this.data = skillData;
            return;
        }
        if (page == KoPage.ADVANCED_SEARCH) {
            document.title = "Advanced Search - Ilmina";
            var defaultSettings = {};
            if (splitUrls.length >= 2) {
                var parser = new ObjectUrlParameterParser();
                defaultSettings = parser.parse(splitUrls[2]);
            }
            this.page = page;
            this.data = new KoPageAdvancedSearchData(defaultSettings);
            return;
        }
        if (page == KoPage.FDC) {
            var model = new FdcTeamSetup();
            if (splitUrls.length >= 2) {
                var parser = new FdcUrlSerializer();
                parser.convertFromUrl(model, splitUrls[2]);
            }
            this.page = page;
            this.data = new KoPageFdcData(model);
        }
        if (page == KoPage.GUIDE) {
            this.page = page;
        }
        this.page = page;
    };
    return KoPageAndDataExtractor;
}());
var KoPageUrl = /** @class */ (function () {
    function KoPageUrl() {
    }
    KoPageUrl.getCardUrl = function (card) {
        var url = "#/" + KoPage[KoPage.CARD] + "/" + card.id;
        return url;
    };
    KoPageUrl.getPlayerSkillUrl = function (skill) {
        var url = "#/" + KoPage[KoPage.SKILL] + "/" + skill.id;
        return url;
    };
    KoPageUrl.getEvolutionUsesUrl = function (card) {
        var url = "#/" + KoPage[KoPage.EVOLUTION_USES] + "/" + card.id;
        return url;
    };
    KoPageUrl.getEvolutionSummaryUrl = function (card) {
        var url = "#/" + KoPage[KoPage.EVOLUTION_SUMMARY] + "/" + card.id;
        return url;
    };
    KoPageUrl.getEnemySkillUrl = function (card) {
        var url = "#/" + KoPage[KoPage.ENEMY_SKILL_TREE] + "/" + card.id;
        return url;
    };
    return KoPageUrl;
}());
var ObjectUrlParameterParser = /** @class */ (function () {
    function ObjectUrlParameterParser() {
    }
    ObjectUrlParameterParser.prototype.parse = function (data) {
        if (!data) {
            return {};
        }
        try {
            var jsonData = decodeURIComponent(data);
            var obj = JSON.parse(jsonData);
            return obj;
        }
        catch (_a) {
            console.error("Invalid parameter provided - ignoring");
            return {};
        }
    };
    ObjectUrlParameterParser.prototype.buildFinal = function (finalObject, inputData, defaults) {
        var anyChanged = false;
        for (var key in inputData) {
            if (inputData[key] == defaults[key]) {
                continue;
            }
            if (typeof inputData[key] == "object" && typeof defaults[key] == "object") {
                var subobj = {};
                if (this.buildFinal(subobj, inputData[key], defaults[key])) {
                    finalObject[key] = subobj;
                    anyChanged = true;
                }
                continue;
            }
            finalObject[key] = inputData[key];
            anyChanged = true;
        }
        return anyChanged;
    };
    ObjectUrlParameterParser.prototype.stringify = function (data, defaults) {
        var finalObject = {};
        this.buildFinal(finalObject, data, defaults || {});
        return encodeURIComponent(JSON.stringify(finalObject));
    };
    return ObjectUrlParameterParser;
}());
var ParsedCardGroup = /** @class */ (function () {
    function ParsedCardGroup() {
    }
    return ParsedCardGroup;
}());
var PortraitType;
(function (PortraitType) {
    PortraitType[PortraitType["UNKNOWN"] = 0] = "UNKNOWN";
    PortraitType[PortraitType["NORMAL"] = 1] = "NORMAL";
    PortraitType[PortraitType["PIXEL"] = 2] = "PIXEL";
    PortraitType[PortraitType["ANIMATED"] = 3] = "ANIMATED";
})(PortraitType || (PortraitType = {}));
var SearchResult = /** @class */ (function () {
    function SearchResult(label, url, sortKey) {
        if (sortKey === void 0) { sortKey = ""; }
        this.label = label;
        this.url = url;
        this.sortKey = sortKey;
        this.filterKey = "";
    }
    return SearchResult;
}());
var TemplateLoader = /** @class */ (function () {
    function TemplateLoader(onStart, onSuccess, errorReporter) {
        this.onStart = onStart;
        this.onSuccess = onSuccess;
        this.errorReporter = errorReporter;
    }
    TemplateLoader.prototype.loadTemplates = function () {
        this.loadTemplate("card-details", "CardDetails");
        this.loadTemplate("card-icon", "CardIcon");
        this.loadTemplate("awakening-details", "AwakeningDetails");
        this.loadTemplate("evo-tree", "EvoTree");
        this.loadTemplate("skill-details", "SkillDetails");
        this.loadTemplate("card-page", "CardPage");
        this.loadTemplate("evolution-uses", "EvolutionUses");
        this.loadTemplate("evolution-summary", "EvolutionSummary");
        this.loadTemplate("evo-summary-tree", "EvoSummaryTree");
        this.loadTemplate("advanced-search", "AdvancedSearch");
        this.loadTemplate("stream-pulls", "StreamPulls");
        this.loadTemplate("floof-damage-calc", "FDC");
        this.loadTemplate("floof-damage-calc-card", "FDCCardUI");
        this.loadTemplate("enemy-skill-details", "EnemySkillDetails");
        this.loadTemplate("enemy-skill-tree", "EnemySkillTree");
        this.loadTemplate("pull-simulator", "PullSimulator");
        this.loadTemplate("guide", "Guide");
        this.setGraphicAsset();
    };
    TemplateLoader.prototype.setGraphicAsset = function () {
        var self = this;
        ko.bindingHandlers.asset = {
            init: function (elem, valueAccessor) {
                var jq = $(elem);
                var asset = ko.unwrap(valueAccessor());
                var scale = asset.scale;
                if (scale != 1 && (asset.baseHeight == 0 || asset.baseWidth == 0)) {
                    scale = 1;
                    console.error("Asset " + asset.url + " requires both base width and height in order to scale");
                }
                if (scale < 0.01) {
                    console.error("Scale " + scale + " not permitted on " + asset.url);
                    scale = 1;
                }
                jq.width(asset.width * scale);
                jq.height(asset.height * scale);
                jq.css('background-image', 'url(' + asset.url + ')');
                jq.css('background-repeat', 'no-repeat');
                jq.css('background-position-x', asset.offsetX * -1 * scale);
                jq.css('background-position-y', asset.offsetY * -1 * scale);
                if (scale != 1) {
                    jq.css('background-size', (asset.baseWidth * scale) + "px " + (asset.baseHeight * scale) + "px");
                }
            }
        };
    };
    TemplateLoader.prototype.loadTemplate = function (name, templateName) {
        var self = this;
        self.onStart();
        var templateViewModel = window[templateName];
        if (templateViewModel == null) {
            self.errorReporter.onError("Template VM [" + templateName + "] not found", "Template VM [" + templateName + "] not found");
            return;
        }
        $.ajax({
            url: '/components/' + templateName + ".html",
            type: 'GET',
            success: function (templateData) {
                ko.components.register(name, {
                    viewModel: templateViewModel,
                    template: templateData
                });
                self.onSuccess();
            },
            error: function (data) {
                self.errorReporter.onError("An error occured while loading template " + templateName, "Template loading error : " + templateName + " : " + data + "");
            }
        });
    };
    return TemplateLoader;
}());
var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    UserSettings.isGroupDisplayed = function (groupName) {
        var ret = UserSettings.groupsHidden[groupName];
        return !ret;
    };
    UserSettings.setGroupDisplayed = function (groupName, displayed) {
        var existing = UserSettings.groupsHidden[groupName];
        var currentValue = !existing;
        if (currentValue == displayed) {
            return;
        }
        if (displayed) {
            delete UserSettings.groupsHidden[groupName];
        }
        else {
            UserSettings.groupsHidden[groupName] = true;
        }
        UserSettings.save();
    };
    UserSettings.getOverwrittenEvoMaterials = function (id) {
        var ret = UserSettings.overwrittenEvoMaterials[id];
        return ret;
    };
    UserSettings.setOverwrittenEvoMaterials = function (id, values) {
        var existing = UserSettings.overwrittenEvoMaterials[id];
        if (values == null) {
            if (typeof existing != "undefined") {
                delete UserSettings.overwrittenEvoMaterials[id];
            }
        }
        else {
            UserSettings.overwrittenEvoMaterials[id] = values;
        }
        UserSettings.save();
    };
    UserSettings.init = function () {
        UserSettings.defaultEnumValues();
        UserSettings.loadSavedSettings();
        UserSettings.subscribeAll();
    };
    UserSettings.defaultEnumValues = function () {
        UserSettings.displayLevel(DisplayedLevel.LevelMax);
    };
    UserSettings.loadSavedSettings = function () {
        try {
            var savedSettings = JSON.parse(window.localStorage.getItem("savedSettings"));
            if (!savedSettings) {
                return;
            }
            if (typeof savedSettings.enablePlusses == "boolean") {
                UserSettings.enablePlusses(savedSettings.enablePlusses);
            }
            if (typeof savedSettings.useGungHoSkills == "boolean") {
                UserSettings.useGungHoSkills(savedSettings.useGungHoSkills);
            }
            if (typeof savedSettings.displayLevel == "number") {
                UserSettings.displayLevel(savedSettings.displayLevel);
            }
            if (typeof savedSettings.assisting == "boolean") {
                UserSettings.assisting(savedSettings.assisting);
            }
            if (typeof savedSettings.favoriteCards == "object") {
                UserSettings.favoriteCards(savedSettings.favoriteCards);
            }
            if (typeof savedSettings.displayedResultsAdvancedSearch == "number" || typeof savedSettings.displayedResultsAdvancedSearch == "string") {
                UserSettings.displayedResultsAdvancedSearch(parseInt(savedSettings.displayedResultsAdvancedSearch));
            }
            if (typeof savedSettings.displayAdvancedSearchDetails == "boolean") {
                UserSettings.displayAdvancedSearchDetails(savedSettings.displayAdvancedSearchDetails);
            }
            if (typeof savedSettings.groupsHidden == "object") {
                UserSettings.groupsHidden = savedSettings.groupsHidden;
            }
            if (typeof savedSettings.overwrittenEvoMaterials == "object") {
                UserSettings.overwrittenEvoMaterials = savedSettings.overwrittenEvoMaterials;
            }
            if (typeof savedSettings.useJP == "boolean") {
                UserSettings.useJP(savedSettings.useJP);
            }
        }
        catch (e) {
            console.error("Failed to load user settings");
            console.error(e);
        }
    };
    UserSettings.subscribeAll = function () {
        UserSettings.enablePlusses.subscribe(UserSettings.save);
        UserSettings.useGungHoSkills.subscribe(UserSettings.save);
        UserSettings.displayLevel.subscribe(UserSettings.save);
        UserSettings.assisting.subscribe(UserSettings.save);
        UserSettings.favoriteCards.subscribe(UserSettings.save);
        UserSettings.displayedResultsAdvancedSearch.subscribe(UserSettings.save);
        UserSettings.displayAdvancedSearchDetails.subscribe(UserSettings.save);
        UserSettings.useJP.subscribe(UserSettings.save);
    };
    UserSettings.save = function () {
        try {
            var obj = {};
            obj.enablePlusses = UserSettings.enablePlusses();
            obj.useGungHoSkills = UserSettings.useGungHoSkills();
            obj.displayLevel = UserSettings.displayLevel();
            obj.assisting = UserSettings.assisting();
            obj.favoriteCards = UserSettings.favoriteCards();
            obj.displayedResultsAdvancedSearch = UserSettings.displayedResultsAdvancedSearch();
            obj.displayAdvancedSearchDetails = UserSettings.displayAdvancedSearchDetails();
            obj.groupsHidden = UserSettings.groupsHidden;
            obj.overwrittenEvoMaterials = UserSettings.overwrittenEvoMaterials;
            obj.useJP = UserSettings.useJP();
            window.localStorage.setItem("savedSettings", JSON.stringify(obj));
        }
        catch (e) {
            console.error("Failed to save user settings");
            console.error(e);
        }
    };
    UserSettings.enablePlusses = ko.observable(true);
    UserSettings.useGungHoSkills = ko.observable(false);
    UserSettings.displayLevel = ko.observable(0);
    UserSettings.assisting = ko.observable(false);
    UserSettings.favoriteCards = ko.observable([]);
    UserSettings.displayedResultsAdvancedSearch = ko.observable(100);
    UserSettings.displayAdvancedSearchDetails = ko.observable(false);
    UserSettings.standardIcons = ko.observable(false);
    UserSettings.useJP = ko.observable(false);
    UserSettings.groupsHidden = {};
    UserSettings.overwrittenEvoMaterials = {};
    return UserSettings;
}());
var AdvancedSearch = /** @class */ (function () {
    function AdvancedSearch(params) {
        this.isSearching = ko.observable(false);
        this.totalSearchResults = ko.observable(0);
        this.isError = ko.observable(false);
        this.searchResults = ko.observableArray([]);
        this.activeSkills = [];
        this.leaderSkills = [];
        this.mpSearchOptions = [];
        this.collabOptions = [];
        this.activeSkillEffectTypes = [];
        this.leaderSkillEffectTypes = [];
        this.warnedAboutScripts = false;
        this.searchId = 0;
        this.lastSearch = "";
        this.defaultSettings = {};
        var self = this;
        var model = ko.unwrap(params.model);
        var searchText = params.searchText;
        var searchTextHook = params.searchTextHook;
        if (!model) {
            throw "AdvancedSearch requires model, found: " + params;
        }
        if (!searchText) {
            throw "AdvancedSearch requires searchText, found: " + params;
        }
        if (!searchTextHook) {
            throw "AdvancedSearch requires searchTextHook, found: " + params;
        }
        self.model = model;
        self.searchText = searchText;
        self.searcher = new Searcher(null, model);
        self.populateMpSearchOptions();
        self.populateCollabSearchOptions();
        self.populateSkillEffectOptions();
        self.populateLeaderSkillOptions();
        searchTextHook(function (x) { return self.onTextChange(x); });
        self.setConstants();
        UserSettings.displayedResultsAdvancedSearch.subscribe(function () { return self.onTextChange(self.lastSearch); });
        self.queryModel = new AdvancedSearchStandardQueryModel();
        self.queryModel.init(self.allColors, self.allTypes, self.allOrbColors);
        self.defaultSettings = self.queryModel.getSettings();
        self.automaticSearchText = ko.computed(function () {
            // Has to be done this way so 'this' is set correctly
            var ret = self.queryModel.getFormula();
            try {
                var url = "";
                if (ret != "") {
                    var currentSettings = self.queryModel.getSettings();
                    var urlParser = new ObjectUrlParameterParser();
                    url = "/" + urlParser.stringify(currentSettings, self.defaultSettings);
                }
                var baseUrl = "/#/ADVANCED_SEARCH";
                try {
                    window.history.replaceState({}, "", baseUrl + url);
                }
                catch (_a) {
                    window.history.replaceState({}, "", baseUrl);
                }
            }
            catch (_b) {
                // Yeah, whatever
                console.error("Failed to change URL for advanced search");
            }
            return ret;
        });
        self.automaticSearchText.subscribe(function (val) {
            self.searchText(val);
        });
        self.searchText("");
        var existingSettings = ko.unwrap(params.defaultSettings);
        self.queryModel.reset(existingSettings);
    }
    AdvancedSearch.prototype.populateMpSearchOptions = function () {
        var self = this;
        self.mpSearchOptions.push("<");
        self.mpSearchOptions.push("<=");
        self.mpSearchOptions.push(">");
        self.mpSearchOptions.push(">=");
        self.mpSearchOptions.push("==");
    };
    AdvancedSearch.prototype.populateCollabSearchOptions = function () {
        var self = this;
        var options = [];
        self.model.usedCollabs.forEach(function (c) {
            options.push(new CollabOption(c, GroupAssets.getCollabDetails(c).name));
        });
        options = _.sortBy(options, function (x) { return x.label; });
        self.collabOptions = options;
    };
    AdvancedSearch.prototype.populateSkillEffectOptions = function () {
        var self = this;
        var activeSkills = [];
        var leaderSkills = [];
        for (var item in PlayerSkillEffectType) {
            if (isNaN(Number(item))) {
                continue;
            }
            var type = PlayerSkillEffectType[PlayerSkillEffectType[item]];
            var activeSkillInstance = AdvancedSearch.createPlayerSkillEffectFromType(type, "PlayerSkillEffect");
            if (activeSkillInstance != null) {
                var option = new PlayerSkillEffectOption(type, activeSkillInstance);
                activeSkills.push(option);
            }
            var leaderSkillInstance = AdvancedSearch.createPlayerSkillEffectFromType(type, "LeaderSkillEffect");
            if (leaderSkillInstance != null) {
                var option = new PlayerSkillEffectOption(type, leaderSkillInstance);
                leaderSkills.push(option);
            }
        }
        leaderSkills.push(new PlayerSkillEffectOption(PlayerSkillEffectType.None, new NonePlayerSkillEffect()));
        activeSkills = _.sortBy(activeSkills, function (x) { return x.label; });
        leaderSkills = _.sortBy(leaderSkills, function (x) { return x.label; });
        self.activeSkillEffectTypes = activeSkills;
        self.leaderSkillEffectTypes = leaderSkills;
    };
    AdvancedSearch.createPlayerSkillEffectFromType = function (type, postfix) {
        var className = PlayerSkillEffectType[type] + postfix;
        if (!window[className]) {
            return null;
        }
        var instance = new window[className]();
        if (!instance) {
            console.error("Can't create class: " + className);
            return null;
        }
        if (instance.type != type) {
            console.error("Expecting type " + type + " but found " + instance.type);
            return null;
        }
        return instance;
    };
    AdvancedSearch.prototype.populateLeaderSkillOptions = function () {
        var self = this;
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSColourBoost, "Attribute Boost"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSTypeBoost, "Typing Boost"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSHPConditional, "HP Conditional"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSTeamConditional, "Team Composition"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSCollabConditional, "Collab/Grouping"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSColourmatch, "Colour Matching"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSLinkedOrbs, "Linked Orbs"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSCombo, "Combo Conditional"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSExactCombo, "Exact Combo"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSSkillUse, "Skill Use"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSUnconditional, "Unconditional"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSDetrimental, "Detrimental"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSCoop, "Multiplayer Boost"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSShield, "All Damage Reduction"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSElementalShield, "Attribute Damage Reduction"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSHeartcross, "Heart Cross"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSColourcross, "Colour Cross"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSBonusAttack, "Bonus Attack"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSAutoheal, "Autoheal"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSResolve, "Resolve"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSTimeExtend, "Time Extend"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSCounter, "Counterattack Chance"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSDropRate, "Drop Rate"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSCoinMult, "Coin Multiplier"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSExpMult, "EXP Multiplier"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LS5OE1, "5oe1"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LS4HeartRCV, "4 Heart RCV"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSMinimumMatch, "Minimum Match Change"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LS7X6, "7x6 Board"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSNoSkyfall, "No Skyfall"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSOrbRemain, "Orbs Remaining"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSFixedMovetime, "Fixed Movement Time"));
        self.leaderSkills.push(new SkillEffectOption(SkillEffect.LSTaiko, "Taiko Noises"));
    };
    AdvancedSearch.prototype.setConstants = function () {
        var allColors = [];
        allColors.push(ColorAttribute[ColorAttribute.Fire]);
        allColors.push(ColorAttribute[ColorAttribute.Water]);
        allColors.push(ColorAttribute[ColorAttribute.Wood]);
        allColors.push(ColorAttribute[ColorAttribute.Light]);
        allColors.push(ColorAttribute[ColorAttribute.Dark]);
        allColors.push(ColorAttribute[ColorAttribute.None]);
        this.allColors = allColors;
        var allOrbColors = [];
        allOrbColors.push(ColorAttribute[ColorAttribute.Fire]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Water]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Wood]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Light]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Dark]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Heal]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Jammer]);
        allOrbColors.push(ColorAttribute[ColorAttribute.Poison]);
        allOrbColors.push(ColorAttribute[ColorAttribute.MortalPoison]);
        this.allOrbColors = allOrbColors;
        var allTypes = [];
        allTypes.push(CardType[CardType.God]);
        allTypes.push(CardType[CardType.Dragon]);
        allTypes.push(CardType[CardType.Devil]);
        allTypes.push(CardType[CardType.Machine]);
        allTypes.push(CardType[CardType.Balanced]);
        allTypes.push(CardType[CardType.Attacker]);
        allTypes.push(CardType[CardType.Physical]);
        allTypes.push(CardType[CardType.Healer]);
        allTypes.push(CardType[CardType.Evo]);
        allTypes.push(CardType[CardType.Awakening]);
        allTypes.push(CardType[CardType.Enhance]);
        allTypes.push(CardType[CardType.Redeemable]);
        this.allTypes = allTypes;
        var allAwakenings = [];
        allAwakenings.push(Awakening[Awakening.Super]);
        allAwakenings.push(Awakening[Awakening.EnhancedHP]);
        allAwakenings.push(Awakening[Awakening.EnhancedATK]);
        allAwakenings.push(Awakening[Awakening.EnhancedRCV]);
        allAwakenings.push(Awakening[Awakening.FireResist]);
        allAwakenings.push(Awakening[Awakening.WaterResist]);
        allAwakenings.push(Awakening[Awakening.WoodResist]);
        allAwakenings.push(Awakening[Awakening.LightResist]);
        allAwakenings.push(Awakening[Awakening.DarkResist]);
        allAwakenings.push(Awakening[Awakening.Autoheal]);
        allAwakenings.push(Awakening[Awakening.BindResist]);
        allAwakenings.push(Awakening[Awakening.BlindResist]);
        allAwakenings.push(Awakening[Awakening.JammerResist]);
        allAwakenings.push(Awakening[Awakening.PoisonResist]);
        allAwakenings.push(Awakening[Awakening.FireEnhance]);
        allAwakenings.push(Awakening[Awakening.WaterEnhance]);
        allAwakenings.push(Awakening[Awakening.WoodEnhance]);
        allAwakenings.push(Awakening[Awakening.LightEnhance]);
        allAwakenings.push(Awakening[Awakening.DarkEnhance]);
        allAwakenings.push(Awakening[Awakening.TimeExtend]);
        allAwakenings.push(Awakening[Awakening.BindRecovery]);
        allAwakenings.push(Awakening[Awakening.SkillBoost]);
        allAwakenings.push(Awakening[Awakening.FireRow]);
        allAwakenings.push(Awakening[Awakening.WaterRow]);
        allAwakenings.push(Awakening[Awakening.WoodRow]);
        allAwakenings.push(Awakening[Awakening.LightRow]);
        allAwakenings.push(Awakening[Awakening.DarkRow]);
        allAwakenings.push(Awakening[Awakening.TPA]);
        allAwakenings.push(Awakening[Awakening.SBR]);
        allAwakenings.push(Awakening[Awakening.HeartEnhance]);
        allAwakenings.push(Awakening[Awakening.Multiboost]);
        allAwakenings.push(Awakening[Awakening.DragonKiller]);
        allAwakenings.push(Awakening[Awakening.GodKiller]);
        allAwakenings.push(Awakening[Awakening.DevilKiller]);
        allAwakenings.push(Awakening[Awakening.MachineKiller]);
        allAwakenings.push(Awakening[Awakening.BalancedKiller]);
        allAwakenings.push(Awakening[Awakening.AttackerKiller]);
        allAwakenings.push(Awakening[Awakening.PhysicalKiller]);
        allAwakenings.push(Awakening[Awakening.HealerKiller]);
        allAwakenings.push(Awakening[Awakening.EvoKiller]);
        allAwakenings.push(Awakening[Awakening.AwakeningKiller]);
        allAwakenings.push(Awakening[Awakening.EnhanceKiller]);
        allAwakenings.push(Awakening[Awakening.RedeemableKiller]);
        allAwakenings.push(Awakening[Awakening.SevenCombo]);
        allAwakenings.push(Awakening[Awakening.Guardbreak]);
        allAwakenings.push(Awakening[Awakening.FUA]);
        allAwakenings.push(Awakening[Awakening.TeamHP]);
        allAwakenings.push(Awakening[Awakening.TeamRCV]);
        allAwakenings.push(Awakening[Awakening.VDP]);
        allAwakenings.push(Awakening[Awakening.EquipAssist]);
        allAwakenings.push(Awakening[Awakening.SuperFUA]);
        allAwakenings.push(Awakening[Awakening.RainbowHaste]);
        allAwakenings.push(Awakening[Awakening.UnbindablePlus]);
        allAwakenings.push(Awakening[Awakening.TimeExtendPlus]);
        allAwakenings.push(Awakening[Awakening.CloudResist]);
        allAwakenings.push(Awakening[Awakening.ScrollResist]);
        allAwakenings.push(Awakening[Awakening.SkillBoostPlus]);
        allAwakenings.push(Awakening[Awakening.HP80]);
        allAwakenings.push(Awakening[Awakening.HP50]);
        allAwakenings.push(Awakening[Awakening.LShield]);
        allAwakenings.push(Awakening[Awakening.LUnlock]);
        allAwakenings.push(Awakening[Awakening.TenCombo]);
        allAwakenings.push(Awakening[Awakening.ComboOrb]);
        allAwakenings.push(Awakening[Awakening.Voice]);
        allAwakenings.push(Awakening[Awakening.Dungeon]);
        allAwakenings.push(Awakening[Awakening.HpMinus]);
        allAwakenings.push(Awakening[Awakening.AtkMinus]);
        allAwakenings.push(Awakening[Awakening.RcvMinus]);
        allAwakenings.push(Awakening[Awakening.BlindResistPlus]);
        allAwakenings.push(Awakening[Awakening.PoisonResistPlus]);
        allAwakenings.push(Awakening[Awakening.JammerResistPlus]);
        allAwakenings.push(Awakening[Awakening.JammerSkyfall]);
        allAwakenings.push(Awakening[Awakening.PoisonSkyfall]);
        this.allAwakenings = allAwakenings;
        var allKillers = [];
        allKillers.push(Awakening.DragonKiller);
        allKillers.push(Awakening.GodKiller);
        allKillers.push(Awakening.DevilKiller);
        allKillers.push(Awakening.MachineKiller);
        allKillers.push(Awakening.BalancedKiller);
        allKillers.push(Awakening.AttackerKiller);
        allKillers.push(Awakening.PhysicalKiller);
        allKillers.push(Awakening.HealerKiller);
        allKillers.push(Awakening.EvoKiller);
        allKillers.push(Awakening.AwakeningKiller);
        allKillers.push(Awakening.EnhanceKiller);
        allKillers.push(Awakening.RedeemableKiller);
        this.allKillers = allKillers;
    };
    AdvancedSearch.prototype.onTextChange = function (newText) {
        this.searchId++;
        this.lastSearch = newText;
        var mySearchId = this.searchId;
        var self = this;
        if (newText == "") {
            self.totalSearchResults(0);
            self.isSearching(false);
            self.isError(false);
            self.searchResults([]);
            return;
        }
        var expectedFormula = this.queryModel.getFormula();
        if (newText != expectedFormula && !this.warnedAboutScripts) {
            var result = confirm("WARNING: Scripts entered here will be executed. Only enter scripts from trusted sources. Are you sure?");
            if (!result) {
                this.searchText(expectedFormula);
                return;
            }
            this.warnedAboutScripts = true;
        }
        setTimeout(function () {
            if (mySearchId != self.searchId) {
                return;
            }
            var searchFunctionStringPart = newText;
            function removeBooleanFlag(searchText) {
                var realSearch = " " + searchText;
                var indx = searchFunctionStringPart.indexOf(realSearch);
                if (indx == -1) {
                    return false;
                }
                if (indx == searchFunctionStringPart.length - realSearch.length) {
                    searchFunctionStringPart = searchFunctionStringPart.substring(0, indx);
                    return true;
                }
                return false;
            }
            var filterSameSkillSameTree = removeBooleanFlag("SAME TREE");
            var filterSameSkill = removeBooleanFlag("FILTER SAME SKILL");
            var showAll = removeBooleanFlag("SHOW ALL");
            var orderByFunctionStringPart = "-1 * c.id";
            var orderByIndex = searchFunctionStringPart.lastIndexOf(" ORDER BY ");
            if (orderByIndex > -1) {
                orderByFunctionStringPart = searchFunctionStringPart.substring(orderByIndex + 10);
                searchFunctionStringPart = searchFunctionStringPart.substring(0, orderByIndex);
            }
            var searchFunctionString = "var q = function(c,model) { return " + searchFunctionStringPart + "; }; q;";
            var orderByFunctionString = "var q = function(c,model) { return " + orderByFunctionStringPart + "; }; q;";
            var searchFunction;
            var orderByFunction;
            try {
                searchFunction = eval(searchFunctionString);
                orderByFunction = eval(orderByFunctionString);
            }
            catch (e) {
                self.isSearching(false);
                self.isError(true);
                self.searchResults([]);
                console.log(searchFunctionString);
                console.error(e);
                return;
            }
            if (!showAll) {
                var currentSearchFunction_1 = searchFunction;
                searchFunction = function (c, model) {
                    if (c.imageMetadata == undefined) {
                        return false;
                    }
                    return currentSearchFunction_1(c, model);
                };
            }
            if (DataSource.isAprilFools()) {
                var currentSearchFunction_2 = searchFunction;
                var floofs = [3274, 3513, 4064, 4945];
                var hash = 0;
                for (var i = 0; i < searchFunctionString.length; i++) {
                    hash += searchFunctionString.charCodeAt(i) % floofs.length;
                }
                for (var i = 0; i < orderByFunctionString.length; i++) {
                    hash += orderByFunctionString.charCodeAt(i) % floofs.length;
                }
                var chosenFloof = Math.floor(hash % floofs.length);
                var floofId_1 = floofs[chosenFloof];
                searchFunction = function (c, model) {
                    if (c.id == floofId_1) {
                        return true;
                    }
                    return currentSearchFunction_2(c, model);
                };
            }
            var resultLimit = UserSettings.displayedResultsAdvancedSearch();
            var searchSorter = new SearchSorter();
            self.isSearching(true);
            self.totalSearchResults(0);
            self.isError(false);
            self.searchResults([]);
            var filterSet = {};
            // Perform the actual search
            self.searcher.searchCards(function (card) {
                if (card.isAlt) {
                    return false;
                }
                if (self.searchId != mySearchId) {
                    return;
                }
                try {
                    return searchFunction(card, self.model);
                }
                catch (e) {
                    self.searchId++;
                    self.isError(true);
                    self.isSearching(false);
                    console.log(searchFunctionString);
                    console.error(e);
                    return;
                }
            }, function (card) {
                if (mySearchId != self.searchId) {
                    return;
                }
                var result = new AdvancedSearchResult(card);
                result.filterKey = card.id + "";
                if (filterSameSkill) {
                    result.filterKey = card.activeSkillId + "";
                    if (filterSameSkillSameTree) {
                        result.filterKey = card.activeSkillId + "-" + card.evoTreeBaseId;
                    }
                }
                result.sortKey = orderByFunction(card, self.model);
                searchSorter.addResult(self.searchResults, result, resultLimit, filterSet);
                self.totalSearchResults(self.totalSearchResults() + 1);
            }, function () {
                if (mySearchId != self.searchId) {
                    return;
                }
                self.isSearching(false);
            });
        }, 500);
    };
    AdvancedSearch.prototype.togglePlusses = function () {
        UserSettings.enablePlusses(!UserSettings.enablePlusses());
        this.onTextChange(this.searchText());
    };
    AdvancedSearch.prototype.toggleLevel = function () {
        var currentDisplay = UserSettings.displayLevel();
        var newDisplay;
        if (currentDisplay == DisplayedLevel.Level1) {
            newDisplay = DisplayedLevel.LevelMax;
        }
        else if (currentDisplay == DisplayedLevel.LevelMax) {
            newDisplay = DisplayedLevel.LevelMaxLimitBroken;
        }
        else {
            newDisplay = DisplayedLevel.Level1;
        }
        UserSettings.displayLevel(newDisplay);
        this.onTextChange(this.searchText());
    };
    return AdvancedSearch;
}());
var AwakeningDetails = /** @class */ (function () {
    function AwakeningDetails(params) {
        this.isBuilding = ko.observable(true);
        var self = this;
        var awakening = ko.unwrap(params.awakening);
        var searcher = ko.unwrap(params.searcher);
        var model = ko.unwrap(params.model);
        if (!awakening) {
            throw "AwakeningDetails requires awakening, found: " + params;
        }
        if (!searcher) {
            throw "AwakeningDetails requires searcher, found: " + params;
        }
        if (!model) {
            throw "AwakeningDetails requires model, found: " + params;
        }
        self.awakening = awakening;
        self.assets = new AwakeningAssets();
        self.isBuilding(true);
        self.cardList = [];
        self.model = model;
        self.beginBuildCardList(searcher);
    }
    AwakeningDetails.prototype.beginBuildCardList = function (searcher) {
        var map = {};
        var self = this;
        var isSuper = self.awakening == Awakening.Super;
        searcher.searchCards(function (card) {
            if (CardAssets.isAlt(card)) {
                return false;
            }
            if (isSuper && card.superAwakenings.length > 0) {
                return true;
            }
            if ((card.awakenings.indexOf(self.awakening) != -1) || (card.superAwakenings.indexOf(self.awakening) != -1)) {
                return true;
            }
            return false;
        }, function (card) {
            var awakeningCount = 0;
            var superCount = 0;
            card.awakenings.forEach(function (v) {
                if (v == self.awakening) {
                    awakeningCount++;
                }
            });
            card.superAwakenings.forEach(function (v) {
                if (v == self.awakening) {
                    superCount++;
                }
            });
            if (isSuper) {
                superCount++;
            }
            if (awakeningCount == 0 && superCount == 0) {
                console.log(card);
                throw "Something doesn't make sense";
            }
            var identifier = awakeningCount + "+" + superCount;
            if (!map[identifier]) {
                map[identifier] = [];
            }
            map[identifier].push(card);
        }, function () {
            var overAllList = [];
            for (var key in map) {
                var keysplit = key.split("+");
                var aCount = parseInt(keysplit[0]);
                var sCount = parseInt(keysplit[1]);
                overAllList.push([aCount, sCount, map[key]]);
            }
            self.cardList = overAllList.sort(function (a, b) {
                if (a[0] > b[0]) {
                    return -1;
                }
                if (a[0] < b[0]) {
                    return 1;
                }
                if (a[1] > b[1]) {
                    return -1;
                }
                if (a[1] < b[1]) {
                    return 1;
                }
                return 0;
            });
            self.isBuilding(false);
        });
    };
    AwakeningDetails.prototype.getAwakeningAsset = function (awakening) {
        return AwakeningAssets.getIcon(awakening);
    };
    AwakeningDetails.prototype.getAwakeningName = function (awakening) {
        return AwakeningAssets.getAwakening(awakening).name;
    };
    AwakeningDetails.prototype.getAwakeningDescription = function (awakening) {
        return AwakeningAssets.getAwakening(awakening).description;
    };
    AwakeningDetails.prototype.getAwakeningDetailed = function (awakening) {
        return AwakeningAssets.getAwakening(awakening).detailedDescription;
    };
    AwakeningDetails.prototype.getDisplayKey = function (ary) {
        var ret = "Has ";
        ret += ary[0];
        if (ary[1]) {
            ret += " (";
            ret += (ary[0] + ary[1]);
            ret += " including Super awakenings)";
        }
        return ret;
    };
    AwakeningDetails.prototype.loadCardPage = function () {
        var url = "#/" + KoPage[KoPage.AWAKENING] + "/" + this.awakening;
        window.location.href = url;
    };
    return AwakeningDetails;
}());
var CardDetails = /** @class */ (function () {
    function CardDetails(params) {
        this.portraitType = PortraitType.UNKNOWN;
        this.isBuilding = ko.observable(true);
        this.showAnimation = ko.observable(false);
        var card = ko.unwrap(params.card);
        var model = ko.unwrap(params.model);
        if (!card) {
            throw "CardDetails required card, found: " + params;
        }
        if (!model) {
            throw "CardDetails required model, found: " + params;
        }
        this.card = card;
        this.model = model;
        this.playerSkillParser = new PlayerSkillParser(model);
        var portraitCard = card;
        if (DataSource.isAprilFools() && Math.random() < 0.3) {
            if (Math.random() < 0.5) {
                var replacements = [3274, 3513, 4064, 4945];
                var replacementCardId = replacements[card.id % replacements.length];
                portraitCard = model.cards[replacementCardId];
            }
            else {
                for (var i = 0; i < 100; i++) {
                    var replacementCardId = Math.ceil(Math.random() * 5200);
                    var replacementCard = model.cards[replacementCardId];
                    if (replacementCard && replacementCard.imageMetadata) {
                        portraitCard = replacementCard;
                        break;
                    }
                }
            }
        }
        if (portraitCard.imageMetadata) {
            var imageMetadata = portraitCard.imageMetadata[0];
            if (imageMetadata.height == imageMetadata.width || imageMetadata.height > 512 || imageMetadata.width > imageMetadata.height) {
                this.portraitType = PortraitType.NORMAL;
                this.portraitUrl = CardAssets.getCroppedPortrait(portraitCard);
            }
            else {
                this.portraitType = PortraitType.PIXEL;
                this.portraitUrl = CardAssets.getUncroppedPortrait(portraitCard);
            }
            if (imageMetadata.filename.indexOf("_000.PNG") > 0) {
                this.portraitType = PortraitType.ANIMATED;
            }
        }
        this.cardActiveSkill = this.model.playerSkills[card.activeSkillId];
        this.cardLeaderSkill = this.model.playerSkills[card.leaderSkillId];
        this.awakeningAssets = new AwakeningAssets();
        this.helper = new PlayerSkillDescriptionHelper();
    }
    CardDetails.prototype.toggleFavorite = function () {
        var ary = UserSettings.favoriteCards();
        var newAry = [];
        var addMe = true;
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] == this.card.id) {
                addMe = false;
            }
            else {
                newAry.push(ary[i]);
            }
        }
        if (addMe) {
            newAry.push(this.card.id);
        }
        UserSettings.favoriteCards(newAry);
    };
    CardDetails.prototype.getIsFavorite = function () {
        var ary = UserSettings.favoriteCards();
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] == this.card.id) {
                return true;
            }
        }
        return false;
    };
    CardDetails.prototype.getTypeAsset = function (cardType) {
        return CardAssets.getTypeImageData(cardType, this.model);
    };
    CardDetails.prototype.getAwakeningAsset = function (awakening) {
        return AwakeningAssets.getIcon(awakening);
    };
    CardDetails.prototype.getAwakeningTitle = function (awakening) {
        return AwakeningAssets.getAwakening(awakening).name;
    };
    CardDetails.prototype.getLatentAwakeningAsset = function (awakening) {
        return AwakeningAssets.getLatentIcon(awakening, this.model);
    };
    CardDetails.prototype.getLatentAwakeningTitle = function (awakening) {
        return AwakeningAssets.getLatent(awakening, this.model).name;
    };
    CardDetails.getHp = function (card, skipAssist) {
        var hp;
        if (card.maxLevel == 1) {
            hp = card.minHp;
        }
        else {
            if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
                hp = card.minHp;
            }
            else if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
                hp = card.maxHp;
            }
            else {
                hp = Math.round(card.maxHp * (1 + (card.limitBreakStatGain / 100)));
            }
        }
        if (UserSettings.enablePlusses() && CardAssets.canPlus(card)) {
            hp += 990;
        }
        if (!skipAssist && UserSettings.assisting() && ((card.inheritanceType == InheritanceType.Assistance1) || (card.inheritanceType == InheritanceType.Assistance2))) {
            hp = Math.round(hp * 0.1);
        }
        return hp;
    };
    CardDetails.prototype.getHp = function () {
        return CardDetails.getHp(this.card, false);
    };
    CardDetails.getAtk = function (card, skipAssist) {
        var atk;
        if (card.maxLevel == 1) {
            atk = card.minAtk;
        }
        else {
            if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
                atk = card.minAtk;
            }
            else if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
                atk = card.maxAtk;
            }
            else {
                atk = Math.round(card.maxAtk * (1 + (card.limitBreakStatGain / 100)));
            }
        }
        if (UserSettings.enablePlusses() && CardAssets.canPlus(card)) {
            atk += 495;
        }
        if (!skipAssist && UserSettings.assisting() && ((card.inheritanceType == InheritanceType.Assistance1) || (card.inheritanceType == InheritanceType.Assistance2))) {
            atk = Math.round(atk * 0.05);
        }
        return atk;
    };
    CardDetails.prototype.getAtk = function () {
        return CardDetails.getAtk(this.card, false);
    };
    CardDetails.getRcv = function (card, skipAssist) {
        var rcv;
        if (card.maxLevel == 1) {
            rcv = card.minRcv;
        }
        else {
            if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
                rcv = card.minRcv;
            }
            else if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
                rcv = card.maxRcv;
            }
            else {
                rcv = Math.round(card.maxRcv * (1 + (card.limitBreakStatGain / 100)));
            }
        }
        if (UserSettings.enablePlusses() && CardAssets.canPlus(card)) {
            rcv += 297;
        }
        if (!skipAssist && UserSettings.assisting() && ((card.inheritanceType == InheritanceType.Assistance1) || (card.inheritanceType == InheritanceType.Assistance2))) {
            rcv = Math.round(rcv * 0.15);
        }
        return rcv;
    };
    CardDetails.prototype.getRcv = function () {
        return CardDetails.getRcv(this.card, false);
    };
    CardDetails.prototype.getExp = function () {
        var exp = this.card.expCurve;
        if (this.card.maxLevel == 1) {
            return 0;
        }
        if (this.card.maxLevel < 99) {
            exp = Math.round(exp * Math.pow((this.card.maxLevel - 1) / 98, 2.5));
        }
        else if (this.card.isLimitBreakable) {
            if (UserSettings.displayLevel() == DisplayedLevel.LevelMaxLimitBroken) {
                exp += 50000000;
            }
        }
        if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
            exp = 0;
        }
        return exp;
    };
    CardDetails.prototype.getFeedExp = function () {
        return this.card.feedExpPerLevel * this.getLevel();
    };
    CardDetails.getLevel = function (card) {
        if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
            return 1;
        }
        if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
            return card.maxLevel;
        }
        return 110;
    };
    CardDetails.prototype.getLevel = function () {
        return CardDetails.getLevel(this.card);
    };
    CardDetails.prototype.getMaxLevel = function () {
        var maxLevel = this.card.maxLevel;
        if (this.card.isLimitBreakable) {
            maxLevel = 110;
        }
        return maxLevel;
    };
    CardDetails.prototype.getWeightedStats = function () {
        var ret = 0;
        ret += this.getHp() / 10;
        ret += this.getAtk() / 5;
        ret += this.getRcv() / 3;
        return Math.ceil(ret);
    };
    CardDetails.prototype.getActiveSkillDescription = function () {
        var ret = "";
        if (UserSettings.useGungHoSkills()) {
            var skill = this.model.playerSkills[this.card.activeSkillId];
            if (!skill) {
                return "";
            }
            ret = skill.description;
        }
        else {
            ret = this.playerSkillParser.parseSkill(this.card.activeSkillId).legacyText;
        }
        return this.helper.formatHtmlSkillDescription(ret);
    };
    CardDetails.prototype.getLeaderSkillDescription = function () {
        var ret = "";
        if (UserSettings.useGungHoSkills()) {
            var skill = this.model.playerSkills[this.card.leaderSkillId];
            if (!skill) {
                return "";
            }
            ret = skill.description;
        }
        else {
            ret = this.playerSkillParser.parseSkill(this.card.leaderSkillId).legacyText;
        }
        return this.helper.formatHtmlSkillDescription(ret);
    };
    CardDetails.prototype.togglePlusses = function () {
        UserSettings.enablePlusses(!UserSettings.enablePlusses());
    };
    CardDetails.prototype.toggleSkills = function () {
        UserSettings.useGungHoSkills(!UserSettings.useGungHoSkills());
    };
    CardDetails.prototype.toggleAssist = function () {
        UserSettings.assisting(!UserSettings.assisting());
    };
    CardDetails.prototype.toggleMaxLevel = function () {
        // Display mode of max level doesn't matter at all if you don't have a max level
        if (this.card.maxLevel == 1) {
            return;
        }
        var currentDisplay = UserSettings.displayLevel();
        var newDisplay;
        if (currentDisplay == DisplayedLevel.Level1) {
            newDisplay = DisplayedLevel.LevelMax;
        }
        else if (currentDisplay == DisplayedLevel.LevelMax) {
            if (this.card.isLimitBreakable) {
                newDisplay = DisplayedLevel.LevelMaxLimitBroken;
            }
            else {
                newDisplay = DisplayedLevel.Level1;
            }
        }
        else if (currentDisplay == DisplayedLevel.LevelMaxLimitBroken) {
            newDisplay = DisplayedLevel.Level1;
        }
        else {
            newDisplay = DisplayedLevel.LevelMax;
        }
        UserSettings.displayLevel(newDisplay);
    };
    CardDetails.prototype.cooldownText = function () {
        var skill = this.model.playerSkills[this.card.activeSkillId];
        var ret = "Lv ^00ffff^";
        if (!skill) {
            return "";
        }
        ret += skill.maxLevel + "^p Turn(s): ";
        ret += skill.maxCooldown + " (";
        ret += skill.initialCooldown;
        return this.helper.formatHtmlSkillDescription(ret + ")");
    };
    CardDetails.prototype.getAwakeningPage = function (awakening) {
        var url = "#/" + KoPage[KoPage.AWAKENING] + "/" + awakening;
        return url;
    };
    CardDetails.prototype.getLatentAwakeningPage = function (awakening) {
        var url = "#/todo";
        return url;
    };
    CardDetails.prototype.playVoice = function () {
        var pad = "000";
        var vid = (pad + this.card.voiceId).slice(-pad.length);
        var url = "https://s3.amazonaws.com/ilmina/extract/voices/padv" + vid + ".ogg";
        var audio = document.createElement("audio");
        audio.src = url;
        audio.play();
    };
    return CardDetails;
}());
var CardIcon = /** @class */ (function () {
    function CardIcon(params) {
        var model = ko.unwrap(params.model);
        var card = ko.unwrap(params.card);
        if (!model) {
            throw "CardIcon requires model, found: " + JSON.stringify(Object.keys(params));
        }
        if (!card) {
            throw "CardIcon requires card, found: " + params;
        }
        this.card = card;
        this.model = model;
        var scale = ko.unwrap(params.scale);
        if (!scale) {
            scale = 1;
        }
        this.scale = scale;
    }
    CardIcon.prototype.adjustScale = function (asset) {
        asset.scale = this.scale;
        return asset;
    };
    return CardIcon;
}());
var CardPage = /** @class */ (function () {
    function CardPage(params) {
        var card = ko.unwrap(params.card);
        var model = ko.unwrap(params.model);
        if (!card) {
            throw "CardPage requires card, found: " + params;
        }
        if (!model) {
            throw "CardPage requires model, found: " + params;
        }
        this.card = card;
        this.model = model;
        this.buildEvoTree();
        this.buildSameSkillCards();
        this.buildCardGroups();
    }
    CardPage.prototype.toggleCollapsedGroup = function (group) {
        group.collapsed(!group.collapsed());
        UserSettings.setGroupDisplayed(group.name, !group.collapsed());
    };
    CardPage.prototype.buildCardGroups = function () {
        var self = this;
        self.groups = [];
        var rawGroups = [];
        self.card.groups.forEach(function (cg) {
            rawGroups.push(cg);
        });
        self.model.cards[self.card.evoTreeBaseId].groups.forEach(function (cg) {
            if (rawGroups.indexOf(cg) > -1) {
                return;
            }
            rawGroups.push(cg);
        });
        if (!rawGroups) {
            return;
        }
        rawGroups.forEach(function (g) {
            var parsedGroup = new ParsedCardGroup();
            parsedGroup.name = g.name;
            parsedGroup.collapsed = ko.observable(!UserSettings.isGroupDisplayed(g.name));
            parsedGroup.cards = [];
            parsedGroup.collabId = g.collabId;
            g.cards.forEach(function (cardId) {
                var card = self.model.cards[cardId];
                if (!card) {
                    return;
                }
                parsedGroup.cards.push(card);
            });
            self.groups.push(parsedGroup);
        });
    };
    CardPage.prototype.buildSameSkillCards = function () {
        var ret = [];
        this.sameSkillCards = ret;
        var model = this.model;
        if (!this.card.activeSkillId) {
            return;
        }
        var skill = this.model.playerSkills[this.card.activeSkillId];
        if (!skill) {
            return;
        }
        skill.cardIds.forEach(function (cardId) {
            var card = model.cards[cardId];
            if (!card) {
                return;
            }
            if (CardAssets.isAlt(card)) {
                return;
            }
            ret.push(card);
        });
    };
    CardPage.prototype.buildEvoTree = function () {
        var cards = [];
        var self = this;
        self.evoTreeRoot = null;
        // Some cards have no trees at all QQ
        if (self.card.evoTreeBaseId == 0) {
            return;
        }
        // Some alts have trees, but lets ignore them.
        if (CardAssets.isAlt(self.card)) {
            return;
        }
        var treeBaseId = self.card.evoTreeBaseId;
        var rootNode = null;
        for (var _i = 0, _a = self.model.evoTrees[treeBaseId].cards; _i < _a.length; _i++) {
            var card = _a[_i];
            // Ignore all alt cards
            if (CardAssets.isAlt(card)) {
                continue;
            }
            var node = new EvoNode(card);
            cards.push(node);
            // Keep track of the root node if we find it
            if (card.id == treeBaseId) {
                rootNode = node;
            }
            // Add in all the materials
            card.evoMaterials.forEach(function (materialCardId) {
                var materialCard = self.model.cards[materialCardId];
                if (!materialCard) {
                    return;
                }
                node.materials.push(materialCard);
            });
        }
        // Find the parent and add it to its list of children
        for (var _b = 0, cards_1 = cards; _b < cards_1.length; _b++) {
            var node = cards_1[_b];
            for (var _c = 0, cards_2 = cards; _c < cards_2.length; _c++) {
                var node2 = cards_2[_c];
                if (node2.card.id == node.card.evoFromId) {
                    node2.children.push(node);
                }
            }
        }
        self.evoTreeRoot = rootNode;
    };
    return CardPage;
}());
var EnemySkillDetails = /** @class */ (function () {
    function EnemySkillDetails(params) {
        var card = ko.unwrap(params.card);
        var model = ko.unwrap(params.model);
        var self = this;
        if (!card) {
            throw "Evolution details requires card, found: " + params;
        }
        if (!model) {
            throw "Evolution details requires model, found: " + params;
        }
        window['vm2'] = this;
        this.card = card;
        this.model = model;
        var parser = new EnemySkillParser(model, card.unknownData[20], card.unknownData[21]);
        this.tree = parser.createEnemySkillTree(card.enemySkills);
        var additionalSkills = [];
        card.enemySkills.forEach(function (v) {
            var enemySkill = model.enemySkills[v.enemySkillId];
            if ((enemySkill.internalEffectId == 83) || (enemySkill.internalEffectId == 95)) {
                enemySkill.skillArgs.forEach(function (e) {
                    additionalSkills.push(model.enemySkills[e]);
                });
            }
        });
        self.additionalSkills = additionalSkills;
    }
    return EnemySkillDetails;
}());
var EnemySkillTree = /** @class */ (function () {
    function EnemySkillTree(params) {
        var node = ko.unwrap(params.node);
        if (!node) {
            throw "Enemy skill tree requires node, found: " + JSON.stringify(Object.getOwnPropertyNames(params));
        }
        this.node = node;
    }
    return EnemySkillTree;
}());
var EvolutionSummary = /** @class */ (function () {
    function EvolutionSummary(params) {
        var _this = this;
        this.summaryMaterials = ko.observable([]);
        var card = ko.unwrap(params.card);
        var model = ko.unwrap(params.model);
        if (!card) {
            throw "Evolution details requires card, found: " + params;
        }
        if (!model) {
            throw "Evolution details requires model, found: " + params;
        }
        this.card = card;
        this.model = model;
        this.recalculate = function () { return _this.recalculateSummaryMaterials(); };
        this.createTree();
        this.recalculateSummaryMaterials();
    }
    EvolutionSummary.prototype.createTree = function () {
        var rootNode = this.getEvoSummaryNode(this.card.id);
        rootNode.state(EvoSummaryState.Expand);
        if (rootNode.children.length == 0) {
            rootNode.state(EvoSummaryState.DontHave);
        }
        rootNode.scale = 1;
        this.rootNode = rootNode;
    };
    EvolutionSummary.prototype.expandAll = function () {
        this.setAllNodes(this.rootNode, EvoSummaryState.Expand, function (node) {
            return node.children.length > 0;
        });
        this.recalculate();
    };
    EvolutionSummary.prototype.collapseAll = function () {
        this.setAllNodes(this.rootNode, EvoSummaryState.DontHave, function () { return true; });
        this.recalculate();
    };
    EvolutionSummary.prototype.setAllNodes = function (node, state, shouldProcess) {
        var _this = this;
        if (!shouldProcess(node)) {
            return;
        }
        node.state(state);
        node.children.forEach(function (node) { return _this.setAllNodes(node, state, shouldProcess); });
    };
    EvolutionSummary.prototype.getEvoSummaryNode = function (id) {
        var self = this;
        var card = self.model.cards[id];
        if (!card) {
            throw "Invalid card: " + id;
        }
        var evoNode = new EvoSummaryTreeNode(card, self.model);
        evoNode.scale = 0.5;
        var overwritten = UserSettings.getOverwrittenEvoMaterials(id);
        if (overwritten != null) {
            overwritten.forEach(function (id2) {
                evoNode.children.push(self.getEvoSummaryNode(id2));
            });
            return evoNode;
        }
        if (!card.evoFromId) {
            if (card.types.indexOf(CardType.Evo) != -1) {
                var exchangeInfo_1 = null;
                var cnt_1 = 0;
                card.exchangesFrom.forEach(function (v) {
                    if (v.isOneTime) {
                        return;
                    }
                    if (!DateConverter.isForever(v.endTime)) {
                        return;
                    }
                    cnt_1++;
                    exchangeInfo_1 = v;
                });
                if (cnt_1 == 1 && exchangeInfo_1.tradeIdsAccepted.length == 1) {
                    evoNode.children.push(self.getEvoSummaryNode(exchangeInfo_1.tradeIdsAccepted[0]));
                }
            }
            return evoNode;
        }
        evoNode.children.push(self.getEvoSummaryNode(card.evoFromId));
        card.evoMaterials.forEach(function (id) {
            evoNode.children.push(self.getEvoSummaryNode(id));
        });
        return evoNode;
    };
    EvolutionSummary.prototype.overwriteEvolutionMaterials = function () {
        var subject = prompt("Please enter the subject ID / the card whose evo materials you are overwriting");
        if (subject == null) {
            return;
        }
        var subjectId = parseInt(subject);
        if (isNaN(subjectId)) {
            alert("'" + subject + "' is not an ID number");
            return;
        }
        var overwritten = prompt("Please enter what you would like the evolution materials to be. Seperate multiple materials with a comma. Please enter a blank to remove the overwritten.");
        if (overwritten == null) {
            return;
        }
        if (overwritten == "") {
            UserSettings.setOverwrittenEvoMaterials(subjectId, null);
        }
        else {
            var ary = overwritten.split(",");
            var ary2 = [];
            var verified = true;
            ary.forEach(function (obj) {
                if (!verified) {
                    return;
                }
                var obj2 = parseInt(obj);
                if (isNaN(obj2)) {
                    alert("'" + obj + "' is not an ID number");
                    verified = false;
                    return;
                }
                ary2.push(obj2);
            });
            if (!verified) {
                return;
            }
            UserSettings.setOverwrittenEvoMaterials(subjectId, ary2);
        }
        window.location.reload();
    };
    EvolutionSummary.prototype.recalculateSummaryMaterials = function () {
        var self = this;
        // Count up everything
        function addMaterials(node, counts) {
            var state = node.state();
            if (state == EvoSummaryState.DoHave) {
                return;
            }
            if (state == EvoSummaryState.DontHave) {
                counts[node.card.id] = (counts[node.card.id] ? counts[node.card.id] : 0) + 1;
                return;
            }
            if (state == EvoSummaryState.Expand) {
                node.children.forEach(function (child) {
                    addMaterials(child, counts);
                });
                return;
            }
            throw "Unknown state: " + state;
        }
        var counts = {};
        addMaterials(self.rootNode, counts);
        // Turn it into an array
        var data = {};
        // We have to add them now to get the order correct
        data["Evo Materials"] = [];
        data["Enhance Materials"] = [];
        data["Tradeable Materials"] = [];
        data["Untradeable Materials"] = [];
        // Populate all the arrays
        for (var id in counts) {
            var card = self.model.cards[id];
            var category = "";
            if (card.types.length == 1 && card.types[0] == CardType.Evo) {
                category = "Evo Materials";
            }
            else if (card.types.length == 1 && card.types[0] == CardType.Enhance) {
                category = "Enhance Materials";
            }
            else if (card.monsterPoints < 100) {
                category = "Tradeable Materials";
            }
            else {
                category = "Untradeable Materials";
            }
            data[category].push(new EvoSummaryTableEntry(card, counts[id]));
        }
        // Sort the arrays
        var summaryMaterials = [];
        for (var key in data) {
            var ary = _.sortBy(data[key], function (entry) {
                return entry.card.id;
            });
            // Skip entry sections
            if (ary.length == 0) {
                continue;
            }
            summaryMaterials.push(new EvoSummaryTableEntrySection(key, ary));
        }
        // Finally set the end result
        self.summaryMaterials(summaryMaterials);
    };
    return EvolutionSummary;
}());
var EvolutionUses = /** @class */ (function () {
    function EvolutionUses(params) {
        this.isLoading = ko.observable(true);
        this.evolutionLevels = ko.observableArray([]);
        var card = ko.unwrap(params.card);
        var model = ko.unwrap(params.model);
        if (!card) {
            throw "Evolution details requires card, found: " + params;
        }
        if (!model) {
            throw "Evolution details requires model, found: " + params;
        }
        this.card = card;
        this.model = model;
        this.startSearch();
    }
    EvolutionUses.prototype.startSearch = function () {
        var baseCard = this.card;
        var ary = ko.observableArray([]);
        ary.push(baseCard);
        this.evolutionLevels.push(ary);
        this.performSearch([baseCard], {});
    };
    EvolutionUses.prototype.performSearch = function (cards, alreadySeen) {
        var self = this;
        var ary = ko.observableArray([]);
        self.evolutionLevels.push(ary);
        var cardsInPreviousLevel = {};
        cards.forEach(function (card) {
            cardsInPreviousLevel[card.id] = true;
        });
        var searcher = new Searcher(null, self.model);
        searcher.searchCards(function (card) {
            if (alreadySeen[card.id]) {
                return false;
            }
            if (CardAssets.isAlt(card)) {
                return false;
            }
            // If the current card has something from the previous level as an evo material, it belongs in the level being processed
            var ret = false;
            card.evoMaterials.forEach(function (evoMatId) {
                if (cardsInPreviousLevel[evoMatId]) {
                    ret = true;
                }
            });
            // If the current card evolves from something in the previous level, it belongs in the level being processed
            if (cardsInPreviousLevel[card.evoFromId]) {
                ret = true;
            }
            // If the current card can be gotten via exchange from something from the previous level, it belongs in the level being processed
            card.exchangesFrom.forEach(function (exchangeInfo) {
                exchangeInfo.tradeIdsAccepted.forEach(function (tradeId) {
                    if (cardsInPreviousLevel[tradeId]) {
                        ret = true;
                    }
                });
            });
            return ret;
        }, function (card) {
            ary.push(card);
            alreadySeen[card.id] = true;
        }, function () {
            var cards = ary();
            if (cards.length == 0) {
                self.isLoading(false);
                return;
            }
            self.performSearch(cards, alreadySeen);
        });
    };
    return EvolutionUses;
}());
var EvoSummaryTree = /** @class */ (function () {
    function EvoSummaryTree(params) {
        var node = ko.unwrap(params.node);
        var recalculate = ko.unwrap(params.recalculate);
        if (!node) {
            throw "EvoSummaryTree requires node, found: " + params;
        }
        if (!recalculate) {
            throw "EvoSummaryTree requires recalculate";
        }
        this.node = node;
        this.recalculate = recalculate;
    }
    EvoSummaryTree.prototype.toggleState = function () {
        var currentState = this.node.state();
        var newState = EvoSummaryState.DontHave;
        if (currentState == EvoSummaryState.DoHave) {
            newState = EvoSummaryState.DontHave;
        }
        else if (currentState == EvoSummaryState.DontHave) {
            if (this.node.children.length > 0) {
                newState = EvoSummaryState.Expand;
            }
            else {
                newState = EvoSummaryState.DontHave;
            }
        }
        this.node.state(newState);
        this.recalculate();
        return false;
    };
    return EvoSummaryTree;
}());
var EvoTree = /** @class */ (function () {
    function EvoTree(params) {
        var node = ko.unwrap(params.node);
        var model = ko.unwrap(params.model);
        if (!node) {
            throw "EvoTree requires node, found: " + params;
        }
        if (!model) {
            throw "EvoTree requires model, found: " + params;
        }
        this.node = node;
        this.model = model;
    }
    return EvoTree;
}());
var Guide = /** @class */ (function () {
    function Guide() {
    }
    return Guide;
}());
var PullSimulator = /** @class */ (function () {
    function PullSimulator(params) {
        this.percentages = ko.observable("");
        this.pulls = ko.observableArray([]);
        this.pullData = [];
        var model = ko.unwrap(params.model);
        if (!model) {
            throw "Pull simulator details requires model, found: " + params;
        }
        this.model = model;
    }
    PullSimulator.prototype.performPulls = function () {
        var pullData = this.pullData;
        if (pullData.length == 0) {
            alert("No pulls loaded");
            return;
        }
        var totalPercent = 0;
        pullData.forEach(function (v) {
            totalPercent += v.percent;
        });
        var count = parseInt(prompt("How many pulls?", "10"));
        if (isNaN(count)) {
            return;
        }
        var pulls = [];
        for (var i = 0; i < count; i++) {
            var val = Math.random() * totalPercent;
            for (var j = 0; j < this.pullData.length; j++) {
                var thisData = pullData[j];
                val -= thisData.percent;
                if (val < 0) {
                    pulls.push(thisData);
                    break;
                }
            }
        }
        this.pulls.push(pulls);
    };
    PullSimulator.prototype.loadPercentages = function () {
        var rawData = this.percentages().split("\n");
        var ret = [];
        var totalPercent = 0;
        var lastId = -1;
        var lastName = "";
        for (var i = 0; i < rawData.length; i++) {
            var row = rawData[i].trim();
            if (row.indexOf("<td") != 0) {
                continue;
            }
            if (row.indexOf("&id=") != -1) {
                var startIndx = row.indexOf("&id=");
                var endIndx = row.indexOf("\"", startIndx);
                var id = row.substr(startIndx + 4, endIndx - startIndx - 4);
                var idNumber = parseInt(id);
                if (!isNaN(idNumber)) {
                    lastId = idNumber;
                }
            }
            var cleanRow = row.replace(/<[^>]+>/g, "").trim();
            if (cleanRow == "") {
                continue;
            }
            if (cleanRow.indexOf("%") == -1) {
                lastName = cleanRow;
                continue;
            }
            var percent = parseFloat(cleanRow);
            if (isNaN(percent)) {
                lastName = cleanRow;
                continue;
            }
            ret.push({
                name: lastName,
                id: lastId,
                percent: percent
            });
            lastName = "";
            lastId = -1;
            totalPercent += percent;
        }
        alert(ret.length + " rows loaded - total percent: " + totalPercent);
        this.pullData = ret;
    };
    return PullSimulator;
}());
var SkillDetails = /** @class */ (function () {
    function SkillDetails(params) {
        var self = this;
        var skill = ko.unwrap(params.skill);
        var model = ko.unwrap(params.model);
        if (!skill) {
            throw "AwakeningDetails required awakening, found: " + params;
        }
        if (!model) {
            throw "AwakeningDetails required searcher, found: " + params;
        }
        self.skill = skill;
        self.model = model;
        self.cards = [];
        skill.cardIds.forEach(function (cardId) {
            self.cards.push(self.model.cards[cardId]);
        });
    }
    return SkillDetails;
}());
var StreamPulls = /** @class */ (function () {
    function StreamPulls(params) {
        this.cards = ko.observableArray([]);
        this.queueMember = ko.observableArray([]);
        this.totalQueueMembers = ko.observable(0);
        this.timeRemaining = ko.observable("0:00:00");
        this.victoryCount = {};
        var model = ko.unwrap(params.model);
        if (!model) {
            throw "CardPage requires model, found: " + params;
        }
        var self = this;
        self.victoryCount = JSON.parse(localStorage.getItem("victories"));
        var end = moment("2018-09-19 21:27:00").unix();
        function fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s; }
        setInterval(function () {
            var text = "Ended";
            var now = moment().unix();
            if (end > now) {
                var timeLeft = end - now;
                text = fmtMSS(timeLeft);
            }
            self.timeRemaining(text);
        }, 500);
        window['pageVm'] = self;
        var functions = [];
        functions.push({ label: "Total pulls", doesMatch: function () { return true; }, color: "#990000" });
        functions.push({ label: "5*", doesMatch: function (c) { return c.starCount == 5; }, color: "#990000" });
        functions.push({ label: "6*", doesMatch: function (c) { return c.starCount == 6; }, color: "#009900" });
        self.labels = this.buildLabels(self, functions);
        self.labels.push({
            label: "Gold Train",
            count: function () {
                var ret = 0;
                var max = 0;
                var ary = self.cards();
                for (var i = ary.length - 1; i >= 0; i--) {
                    var card = ary[i];
                    if (functions[1].doesMatch(card)) {
                        ret++;
                        max = Math.max(ret, max);
                    }
                    else {
                        ret = 0;
                    }
                }
                return ret + " (" + max + " max)";
            }
        });
        self.labels.push({
            label: "Diamond Train",
            count: function () {
                var ret = 0;
                var max = 0;
                var ary = self.cards();
                for (var i = ary.length - 1; i >= 0; i--) {
                    var card = ary[i];
                    if (!functions[1].doesMatch(card)) {
                        ret++;
                        max = Math.max(ret, max);
                    }
                    else {
                        ret = 0;
                    }
                }
                return ret + " (" + max + " max)";
            }
        });
        self.getBackgroundColor = this.buildGetBackgroundColor(functions);
        self.model = model;
        var ary = self.loadCards();
        var ary2 = [];
        ary.forEach(function (id) {
            ary2.push(self.model.cards[id]);
        });
        self.cards(ary2);
        self.refreshQueue();
    }
    StreamPulls.prototype.getVictoryCount = function (member) {
        if (this.victoryCount[member]) {
            return this.victoryCount[member];
        }
        return 0;
    };
    StreamPulls.prototype.buildLabels = function (self, functions) {
        var ret = [];
        functions.forEach(function (f) {
            ret.push({
                label: f.label,
                count: function () {
                    var count = 0;
                    self.cards().forEach(function (c) {
                        if (f.doesMatch(c)) {
                            count++;
                        }
                    });
                    return count;
                }
            });
        });
        return ret;
    };
    StreamPulls.prototype.buildGetBackgroundColor = function (functions) {
        return function (c) {
            var ret = "#000000";
            functions.forEach(function (f) {
                if (f.color && f.doesMatch(c)) {
                    ret = f.color;
                }
            });
            return ret;
        };
    };
    StreamPulls.prototype.popQueue = function () {
        var self = this;
        var toRemove = self.queueMember()[0];
        self.removeFromQueue(toRemove);
    };
    StreamPulls.prototype.removeFromQueue = function (toRemove) {
        var url = "http://twitch.center/customapi/addquote?token=9a3715878238fbe4&data=";
        url += encodeURIComponent("r," + toRemove + "|");
        $.ajax(url);
    };
    StreamPulls.prototype.popQueueWon = function (whoWon) {
        var self = this;
        self.victoryCount[whoWon] = (self.victoryCount[whoWon] ? self.victoryCount[whoWon] : 0) + 1;
        localStorage.setItem("victories", JSON.stringify(self.victoryCount));
        self.removeFromQueue(whoWon);
    };
    StreamPulls.prototype.refreshQueue = function () {
        var self = this;
        var url = "http://twitch.center/customapi/quote/list?token=827c849d";
        console.log("Refresh");
        function parseData(data) {
            if (data == "There are no quotes added") {
                return [];
            }
            var ret = [];
            var data2 = data.split("\n");
            for (var i = 0; i < data2.length; i++) {
                var startIndex = data2[i].indexOf(" ");
                var action = data2[i].substr(startIndex + 1, 1);
                var name = data2[i].substr(startIndex + 3, data2[i].length - startIndex - 4);
                if (action == "a") {
                    ret.push(name);
                }
                else if (action == "r") {
                    var indx = ret.indexOf(name);
                    if (indx >= 0) {
                        ret.splice(indx, 1);
                    }
                }
                else {
                    console.log("Unknown command: " + data2[i] + " (" + action + " | " + name + ")");
                }
            }
            return ret;
        }
        $.ajax(url).then(function (data) {
            var currentPlayers = parseData(data);
            self.totalQueueMembers(currentPlayers.length);
            var ret = [];
            for (var i = 0; i < 10 && i < currentPlayers.length; i++) {
                ret.push(currentPlayers[i]);
            }
            ret = _.sortBy(ret, function (x) {
                return self.victoryCount[x] ? self.victoryCount[x] : 0;
            });
            self.queueMember(ret);
            setTimeout(function () {
                self.refreshQueue();
            }, 1000);
        }).fail(function () {
            console.error("Unable to retrieve list");
        });
    };
    StreamPulls.prototype.calculateCardCount = function (card, indx) {
        var self = this;
        var cards = self.cards();
        var count = 0;
        for (var i = cards.length - 1; i > indx; i--) {
            if (cards[i].id == card.id) {
                count++;
            }
        }
        return count + 1;
    };
    StreamPulls.prototype.isFeatured = function (card) {
        if (card.monsterPoints >= 50000) {
            return true;
        }
        if (card.starCount >= 7) {
            return true;
        }
        return false;
    };
    StreamPulls.prototype.getTotalFeatured = function () {
        var self = this;
        var cards = self.cards();
        var count = 0;
        cards.forEach(function (card) {
            if (self.isFeatured(card)) {
                count++;
            }
        });
        return count;
    };
    StreamPulls.prototype.promptAddCard = function () {
        var id = prompt("Id?");
        if (!id) {
            return;
        }
        var id2 = parseInt(id);
        if (isNaN(id2)) {
            return;
        }
        this.addCard(id2);
    };
    StreamPulls.prototype.addCard = function (id) {
        this.cards.unshift(this.model.cards[id]);
        this.saveCards();
    };
    StreamPulls.prototype.popCard = function () {
        if (this.cards().length == 0) {
            return;
        }
        this.cards.shift();
        this.saveCards();
    };
    StreamPulls.prototype.saveCards = function () {
        var localStorage = window.localStorage;
        if (!localStorage) {
            console.error("Local storage not allowed - unable to save pulls");
            return;
        }
        var ary = [];
        this.cards().forEach(function (card) {
            ary.push(card.id);
        });
        return localStorage.setItem("savedPulls", JSON.stringify(ary));
    };
    StreamPulls.prototype.loadCards = function () {
        var localStorage = window.localStorage;
        if (!localStorage) {
            console.error("Local storage not allowed - unable to load pulls");
            return [];
        }
        var d = localStorage.getItem("savedPulls");
        if (!d) {
            console.log("No saved pulls found - reset");
            d = JSON.stringify([]);
        }
        return JSON.parse(d);
    };
    return StreamPulls;
}());
var AdvancedSearchActiveSkillModel = /** @class */ (function () {
    function AdvancedSearchActiveSkillModel(postfix) {
        this.type = ko.observable();
        this.negate = ko.observable(false);
        var self = this;
        self.id = AdvancedSearchActiveSkillModel.nextId++;
        this.postfix = postfix;
        self.type(PlayerSkillEffectType.None);
        // It doesn't exist until after current render cycle finishes
        // so initial value needs to be set like this
        self.type.subscribe(function () {
            self.resetAndApplyTemplate();
        });
        setTimeout(function () {
            self.resetAndApplyTemplate();
        }, 1);
    }
    AdvancedSearchActiveSkillModel.prototype.resetAndApplyTemplate = function () {
        var self = this;
        var type = self.type();
        if (!self.instance || self.instance.type != type) {
            var instance = AdvancedSearch.createPlayerSkillEffectFromType(type, self.postfix);
            if (instance == null) {
                instance = new NonePlayerSkillEffect();
            }
            self.instance = instance;
            self.templateVm = instance.getAdvancedSearchTemplateVm();
            self.defaultTemplateVm = ko.toJS(self.templateVm);
        }
        var domRef = document.getElementById("advsearch_as_" + self.id);
        if (domRef == null) {
            return;
        }
        domRef.innerHTML = "<div>" + self.instance.getAdvancedSearchTemplate() + "</div>";
        ko.applyBindings(self.templateVm, domRef.firstChild);
    };
    AdvancedSearchActiveSkillModel.prototype.getAdvancedSearchString = function () {
        this.type();
        if (!this.instance) {
            return "";
        }
        var ret = this.instance.getAdvancedSearchString(this.templateVm);
        if (ret == "") {
            return ret;
        }
        if (this.negate()) {
            ret = "!" + ret;
        }
        return ret;
    };
    AdvancedSearchActiveSkillModel.nextId = 0;
    return AdvancedSearchActiveSkillModel;
}());
var AdvancedSearchResult = /** @class */ (function () {
    function AdvancedSearchResult(card) {
        this.card = card;
    }
    return AdvancedSearchResult;
}());
var AdvancedSearchStandardQueryModel = /** @class */ (function () {
    function AdvancedSearchStandardQueryModel() {
        this.splitMainSubAttribute = ko.observable(false);
        this.differentMainSubAttribute = ko.observable(false);
        this.totalColors = 0;
        this.mainAttributes = {};
        this.subAttributes = {};
        this.mainSubAttributes = {};
        this.totalTypes = 0;
        this.typesSelected = {};
        this.typeAnd = ko.observable(false);
        this.awakeningsSelected = ko.observableArray([]);
        this.emulateEnhancedAwakenings = ko.observable(true);
        this.mixMatchKillers = ko.observable(false);
        this.customKillerCount = ko.observable();
        this.emulateKillerAwakenings = ko.observable(false);
        this.includeSuperAwakenings = ko.observable(false);
        this.collab = ko.observable(null);
        this.assistable = ko.observable(false);
        this.orbColors = {};
        this.exactOrbColors = ko.observable(false);
        this.lowCD = ko.observable();
        this.highCD = ko.observable();
        this.mpDirection = ko.observable(">");
        this.mpValue = ko.observable();
        this.rarityDirection = ko.observable("<=");
        this.rarityValue = ko.observable();
        this.leaderSkillHpDirection = ko.observable(">=");
        this.leaderSkillHpValue = ko.observable(null);
        this.leaderSkillAtkDirection = ko.observable(">=");
        this.leaderSkillAtkValue = ko.observable(null);
        this.leaderSkillRcvDirection = ko.observable(">=");
        this.leaderSkillRcvValue = ko.observable(null);
        this.leaderSkillShieldDirection = ko.observable(">=");
        this.leaderSkillShieldValue = ko.observable(null);
        this.leaderSkillConsiderHeartCross = ko.observable(true);
        this.leaderSkillEffectiveShield = ko.observable(true);
        this.leaderSkillSelfPair = ko.observable(true);
        this.leaderSkillMaximumColorCrosses = ko.observable(2);
        this.leaderSkillHealthPercent = ko.observable(0);
        this.hpDirection = ko.observable(">");
        this.hpValue = ko.observable(null);
        this.atkDirection = ko.observable(">");
        this.atkValue = ko.observable(null);
        this.rcvDirection = ko.observable(">");
        this.rcvValue = ko.observable(null);
        this.statAccountAwakenings = ko.observable(false);
        this.statAccountMultiboost = ko.observable(false);
        this.activeSkillConditions = ko.observableArray([]);
        this.leaderSkillConditions = ko.observableArray([]);
        this.hideCardsWithoutMetadata = ko.observable(true);
        this.orderByMainOption = ko.observable("");
        this.orderByIncludeAwakening = {};
        this.orderBySuperAwakenings = ko.observable(false);
        this.orderByDescending = ko.observable(true);
        this.orderByKillers = ko.observable(false);
        this.multiplierExpanded = ko.observable(false);
        this.statsExpanded = ko.observable(false);
        this.filterOutSameSkill = ko.observable(false);
        this.filterOutSameSkillSameTree = ko.observable(false);
    }
    AdvancedSearchStandardQueryModel.prototype.init = function (allColors, allTypes, allOrbColors) {
        this.totalColors = allColors.length;
        for (var i = 0; i < allColors.length; i++) {
            this.mainAttributes[allColors[i]] = ko.observable(false);
            this.subAttributes[allColors[i]] = ko.observable(false);
            this.mainSubAttributes[allColors[i]] = ko.observable(false);
        }
        for (var i = 0; i < allOrbColors.length; i++) {
            this.orbColors[allOrbColors[i]] = ko.observable(false);
        }
        this.totalTypes = allTypes.length;
        for (var i = 0; i < allTypes.length; i++) {
            this.typesSelected[allTypes[i]] = ko.observable(false);
        }
        var supportedOrderByAwakenings = [Awakening.Multiboost, Awakening.SevenCombo, Awakening.HP80, Awakening.HP50, Awakening.TenCombo, Awakening.TPA, Awakening.VDP, Awakening.SuperFUA, Awakening.LUnlock, Awakening.HeartEnhance];
        supportedOrderByAwakenings.push(Awakening.GodKiller, Awakening.DragonKiller, Awakening.DevilKiller, Awakening.MachineKiller, Awakening.BalancedKiller, Awakening.AttackerKiller, Awakening.PhysicalKiller, Awakening.HealerKiller, Awakening.EvoKiller, Awakening.AwakeningKiller, Awakening.EnhanceKiller, Awakening.RedeemableKiller);
        var self = this;
        supportedOrderByAwakenings.forEach(function (a) {
            self.orderByIncludeAwakening[a] = ko.observable(false);
        });
        this.reset({});
        window['queryModel'] = this;
    };
    AdvancedSearchStandardQueryModel.prototype.getFormula = function () {
        // Ret is a list of all conditions that need to be met
        var conditionalFunctions = [];
        // Add in the color condition(s)   
        if (this.splitMainSubAttribute()) {
            var mainAttributes = this.getColors(this.mainAttributes);
            var subAttributes = this.getColors(this.subAttributes);
            conditionalFunctions.push(this.getAttributeCheckString("attribute", mainAttributes));
            conditionalFunctions.push(this.getAttributeCheckString("subattribute", subAttributes));
        }
        else {
            var colors_1 = this.getColors(this.mainSubAttributes);
            var mainAttr = this.getAttributeCheckString("attribute", colors_1);
            var subAttr = this.getAttributeCheckString("subattribute", colors_1);
            if (mainAttr != "") {
                // Smash the two conditions together with an OR between them
                var combined = "(" + mainAttr + " || " + subAttr + ")";
                conditionalFunctions.push(combined);
            }
        }
        if (this.splitMainSubAttribute() && this.differentMainSubAttribute()) {
            conditionalFunctions.push("c.attribute != c.subattribute");
        }
        // Add in the type conditions
        var cardTypes = this.getTypes();
        conditionalFunctions.push(this.getTypeCheckString(cardTypes));
        // rarities
        conditionalFunctions.push(this.getRarityString());
        this.pushAwakeningConditions(conditionalFunctions);
        this.pushCooldownConditions(conditionalFunctions);
        this.pushAssistableConditions(conditionalFunctions);
        this.pushMpConditions(conditionalFunctions);
        this.pushStatConditions(conditionalFunctions);
        this.pushCollabConditions(conditionalFunctions);
        var colors = this.getColors(this.orbColors);
        var orbCols = this.getOrbColorCheckString(colors);
        if (orbCols != "") {
            conditionalFunctions.push(orbCols);
        }
        this.activeSkillConditions().forEach(function (x) {
            conditionalFunctions.push(x.getAdvancedSearchString());
        });
        this.leaderSkillConditions().forEach(function (x) {
            conditionalFunctions.push(x.getAdvancedSearchString());
        });
        this.pushLeaderSkillMaximumMultipliers(conditionalFunctions);
        // Convert it to a string
        var ret = "";
        conditionalFunctions.forEach(function (condition) {
            // Skip blanks
            if (condition == "") {
                return;
            }
            // Deal with things like conditions that are a || b
            if (condition.indexOf('|') > -1) {
                condition = "(" + condition + ")";
            }
            // Add an && after every condition
            if (ret != "") {
                ret += " && ";
            }
            // Add it in
            ret += condition;
        });
        // Add in ORDER BY if needed
        if (this.orderByMainOption() != "" || !this.orderByDescending()) {
            if (ret == "") {
                ret = "true";
            }
            ret += " ORDER BY ";
            var orderByOption = this.orderByMainOption();
            var hasInvertedOrder = this.orderByDescending() && orderByOption != 'attribute';
            if (hasInvertedOrder) {
                ret += "-1 * (";
            }
            switch (orderByOption) {
                case '':
                    ret += "c.id";
                    break;
                case 'maxLevel':
                case 'cost':
                case 'starCount':
                    ret += "c." + orderByOption;
                    break;
                case 'attribute':
                    ret += "(c.attribute * 10) + (c.subattribute == ColorAttribute.None ? 9 : c.subattribute)";
                    break;
                case 'maxcd':
                    ret += "AdvancedSearchStandardQueryModel.getCd(c,model)";
                    break;
                case 'mincd':
                    ret += "AdvancedSearchStandardQueryModel.getCd(c,model, true)";
                    break;
                case 'stats':
                case 'atk':
                case 'rcv':
                case 'hp':
                    var any = false;
                    var awakenings = [];
                    for (var key in this.orderByIncludeAwakening) {
                        if ((!this.orderByIncludeAwakening[key]()) || ((Awakening[key].indexOf("Killer") > -1) && (!this.orderByKillers()))) {
                            continue;
                        }
                        awakenings.push("Awakening." + Awakening[key]);
                    }
                    var awakeningString = "[";
                    for (var i = 0; i < awakenings.length; i++) {
                        if (i != 0) {
                            awakeningString += ",";
                        }
                        awakeningString += awakenings[i];
                    }
                    awakeningString += "]";
                    var parts = [];
                    var includeSupers = this.orderBySuperAwakenings();
                    if (orderByOption == 'stats' || orderByOption == 'hp') {
                        parts.push("AdvancedSearchStandardQueryModel.getHp(c,model," + awakeningString + ", " + includeSupers + ") / 10");
                    }
                    if (orderByOption == 'stats' || orderByOption == 'atk') {
                        parts.push("AdvancedSearchStandardQueryModel.getAtk(c,model," + awakeningString + ", " + includeSupers + ") / 5");
                    }
                    if (orderByOption == 'stats' || orderByOption == 'rcv') {
                        parts.push("AdvancedSearchStandardQueryModel.getRcv(c,model," + awakeningString + ", " + includeSupers + ") / 3");
                    }
                    ret += "(";
                    for (var i = 0; i < parts.length; i++) {
                        if (i != 0) {
                            ret += ") + (";
                        }
                        ret += parts[i];
                    }
                    ret += ")";
                    break;
            }
            if (hasInvertedOrder) {
                ret += ")";
            }
        }
        if (ret != "") {
            if (!this.hideCardsWithoutMetadata()) {
                ret += " SHOW ALL";
            }
            if (this.filterOutSameSkill()) {
                ret += " FILTER SAME SKILL";
                if (this.filterOutSameSkillSameTree()) {
                    ret += " SAME TREE";
                }
            }
        }
        return ret;
    };
    AdvancedSearchStandardQueryModel.getHp = function (card, model, includeAwakenings, includeSupers) {
        var hp;
        if (card.maxLevel == 1) {
            hp = card.minHp;
        }
        else {
            if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
                hp = card.minHp;
            }
            else if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
                hp = card.maxHp;
            }
            else {
                hp = Math.round(card.maxHp * (1 + (card.limitBreakStatGain / 100)));
            }
        }
        if (UserSettings.enablePlusses() && CardAssets.canPlus(card)) {
            hp += 990;
        }
        for (var i = 0; i < card.awakenings.length; i++) {
            var a = card.awakenings[i];
            if (a == Awakening.EnhancedHP) {
                hp += 500;
            }
        }
        for (var i = 0; i < card.awakenings.length; i++) {
            var a = card.awakenings[i];
            if (a == Awakening.Multiboost && includeAwakenings.indexOf(Awakening.Multiboost) > -1) {
                hp *= 1.5;
            }
        }
        if (includeSupers) {
            var maxMultiplier = 1;
            for (var i = 0; i < card.superAwakenings.length; i++) {
                var a = card.superAwakenings[i];
                if (a == Awakening.Multiboost && includeAwakenings.indexOf(Awakening.Multiboost) > -1) {
                    maxMultiplier = Math.max(maxMultiplier, 1.5);
                }
            }
            hp *= maxMultiplier;
        }
        return hp;
    };
    AdvancedSearchStandardQueryModel.getAtk = function (card, model, includeAwakenings, includeSupers) {
        var atk;
        if (card.maxLevel == 1) {
            atk = card.minAtk;
        }
        else {
            if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
                atk = card.minAtk;
            }
            else if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
                atk = card.maxAtk;
            }
            else {
                atk = Math.round(card.maxAtk * (1 + (card.limitBreakStatGain / 100)));
            }
        }
        if (UserSettings.enablePlusses() && CardAssets.canPlus(card)) {
            atk += 495;
        }
        for (var i = 0; i < card.awakenings.length; i++) {
            var a = card.awakenings[i];
            if (a == Awakening.EnhancedATK) {
                atk += 100;
            }
        }
        function getMultiplier(a) {
            if (includeAwakenings.indexOf(a) < 0) {
                return 1;
            }
            switch (a) {
                case Awakening.TenCombo:
                    return 5;
                case Awakening.VDP:
                    return 2.5;
                case Awakening.SevenCombo:
                case Awakening.HP50:
                case Awakening.SuperFUA:
                    return 2;
                case Awakening.Multiboost:
                case Awakening.HP80:
                case Awakening.TPA:
                case Awakening.LUnlock:
                    return 1.5;
                case Awakening.AttackerKiller:
                case Awakening.PhysicalKiller:
                case Awakening.HealerKiller:
                case Awakening.BalancedKiller:
                case Awakening.DevilKiller:
                case Awakening.GodKiller:
                case Awakening.DragonKiller:
                case Awakening.EvoKiller:
                case Awakening.EnhanceKiller:
                case Awakening.RedeemableKiller:
                case Awakening.AwakeningKiller:
                case Awakening.MachineKiller:
                    return 3;
            }
            return 1;
        }
        for (var i = 0; i < card.awakenings.length; i++) {
            var a = card.awakenings[i];
            atk *= getMultiplier(a);
        }
        if (includeSupers) {
            var maxMultiplier = 1;
            for (var i = 0; i < card.superAwakenings.length; i++) {
                var a = card.superAwakenings[i];
                maxMultiplier = Math.max(maxMultiplier, getMultiplier(a));
            }
            atk *= maxMultiplier;
        }
        return Math.round(atk);
    };
    AdvancedSearchStandardQueryModel.getRcv = function (card, model, includeAwakenings, includeSupers) {
        var rcv;
        if (card.maxLevel == 1) {
            rcv = card.minRcv;
        }
        else {
            if (UserSettings.displayLevel() == DisplayedLevel.Level1) {
                rcv = card.minRcv;
            }
            else if (UserSettings.displayLevel() == DisplayedLevel.LevelMax || !card.isLimitBreakable) {
                rcv = card.maxRcv;
            }
            else {
                rcv = Math.round(card.maxRcv * (1 + (card.limitBreakStatGain / 100)));
            }
        }
        if (UserSettings.enablePlusses() && CardAssets.canPlus(card)) {
            rcv += 297;
        }
        for (var i = 0; i < card.awakenings.length; i++) {
            var a = card.awakenings[i];
            if (a == Awakening.EnhancedRCV) {
                rcv += 200;
            }
        }
        for (var i = 0; i < card.awakenings.length; i++) {
            var a = card.awakenings[i];
            if (a == Awakening.Multiboost && includeAwakenings.indexOf(Awakening.Multiboost) > -1) {
                rcv *= 1.5;
            }
            if (a == Awakening.HeartEnhance && includeAwakenings.indexOf(Awakening.HeartEnhance) > -1) {
                rcv *= 1.5;
            }
        }
        if (includeSupers) {
            var maxMultiplier = 1;
            for (var i = 0; i < card.superAwakenings.length; i++) {
                var a = card.superAwakenings[i];
                if (a == Awakening.Multiboost && includeAwakenings.indexOf(Awakening.Multiboost) > -1) {
                    maxMultiplier = Math.max(maxMultiplier, 1.5);
                }
                if (a == Awakening.HeartEnhance && includeAwakenings.indexOf(Awakening.HeartEnhance) > -1) {
                    maxMultiplier = Math.max(maxMultiplier, 1.5);
                }
            }
            rcv *= maxMultiplier;
        }
        return rcv;
    };
    AdvancedSearchStandardQueryModel.getCd = function (card, model, base) {
        if (base === void 0) { base = false; }
        if (!card) {
            return 0;
        }
        if (!model) {
            return 0;
        }
        if (!card.activeSkillId) {
            return 0;
        }
        var activeSkill = model.playerSkills[card.activeSkillId];
        if (!activeSkill) {
            return 0;
        }
        if (base) {
            return activeSkill.initialCooldown;
        }
        return activeSkill.maxCooldown;
    };
    AdvancedSearchStandardQueryModel.prototype.getColors = function (obj) {
        var ret = [];
        for (var key in obj) {
            if (obj[key]()) {
                ret.push(ColorAttribute[key]);
            }
        }
        return ret;
    };
    AdvancedSearchStandardQueryModel.prototype.getAttributeCheckString = function (variableName, colors) {
        if (colors.length == 0) {
            return "";
        }
        if (colors.length == this.totalColors) {
            return "";
        }
        var ret = "";
        var count = 0;
        colors.forEach(function (c) {
            if (count != 0) {
                ret += " || ";
            }
            ret += "(c." + variableName + " == ColorAttribute." + ColorAttribute[c] + ")";
            count++;
        });
        if (count == 1) {
            return ret;
        }
        return "(" + ret + ")";
    };
    AdvancedSearchStandardQueryModel.prototype.getOrbColorCheckString = function (colors) {
        var exact = this.exactOrbColors();
        if (colors.length == 0) {
            return "";
        }
        var ret = "";
        var count = 0;
        colors.forEach(function (c) {
            if (count != 0) {
                ret += " && ";
            }
            ret += "(vm.model.playerSkills[c.activeSkillId].orbColours.indexOf(" + c + ") > -1)";
            count++;
        });
        if (exact) {
            ret += " && (vm.model.playerSkills[c.activeSkillId].orbColours.length == " + colors.length + ")";
        }
        if (count == 1) {
            return ret;
        }
        return "(" + ret + ")";
    };
    AdvancedSearchStandardQueryModel.prototype.getTypes = function () {
        var ret = [];
        var obj = this.typesSelected;
        for (var key in obj) {
            if (obj[key]()) {
                ret.push(CardType[key]);
            }
        }
        return ret;
    };
    AdvancedSearchStandardQueryModel.prototype.getTypeCheckString = function (types) {
        var operator = " || ";
        if (this.typeAnd()) {
            operator = " && ";
        }
        if (types.length <= 0) {
            return "";
        }
        if (types.length >= this.totalTypes) {
            return "";
        }
        var ret = "";
        var count = 0;
        types.forEach(function (obj) {
            if (count != 0) {
                ret += operator;
            }
            ret += "(c.types.indexOf(CardType." + CardType[obj] + ") > -1)";
            count++;
        });
        if (count == 1) {
            return ret;
        }
        return "(" + ret + ")";
    };
    AdvancedSearchStandardQueryModel.prototype.getRarityString = function () {
        var rarityValue = this.rarityValue();
        if (!rarityValue) {
            return "";
        }
        return "c.starCount " + this.rarityDirection() + " " + rarityValue;
    };
    AdvancedSearchStandardQueryModel.prototype.pushAwakeningConditions = function (ary) {
        var awakenings = this.awakeningsSelected();
        //let countByAwakenings : _.Dictionary<Awakening[]> = _.groupBy(awakenings, function(v) { return v; });
        var emulateEnhancedAwakenings = this.emulateEnhancedAwakenings();
        var mixMatchKillers = this.mixMatchKillers();
        var customKillerCount = parseInt(this.customKillerCount() + "") || 0;
        var emulateKillerAwakenings = this.emulateKillerAwakenings();
        var includeSuperAwakenings = this.includeSuperAwakenings();
        if (awakenings.length == 0) {
            return;
        }
        var aryString = "[";
        awakenings.forEach(function (v) {
            if (aryString != "[") {
                aryString += ", ";
            }
            aryString += "Awakening." + Awakening[v];
        });
        aryString += "]";
        ary.push("CardAssets.hasAwakenings(c, " + aryString + ", " + emulateKillerAwakenings + ", " + includeSuperAwakenings + ", " + emulateEnhancedAwakenings + "," + mixMatchKillers + "," + customKillerCount + ")");
    };
    AdvancedSearchStandardQueryModel.prototype.pushLeaderSkillMaximumMultipliers = function (ary) {
        var self = this;
        if (!this.multiplierExpanded()) {
            return;
        }
        function process(value, comparison, name) {
            var val = value();
            if (val == null) {
                return;
            }
            var val2 = parseFloat(val + "");
            if (isNaN(val2)) {
                return;
            }
            var compare = comparison();
            if (compare == "=") {
                compare = "==";
            }
            var condition = "CardAssets.getLsse(c, vm.model, ";
            condition += self.leaderSkillConsiderHeartCross() ? "true" : "false";
            condition += ", ";
            condition += self.leaderSkillEffectiveShield() ? "true" : "false";
            condition += ", ";
            condition += self.leaderSkillSelfPair() ? "true" : "false";
            condition += ", ";
            var colorCrossCount = parseInt(self.leaderSkillMaximumColorCrosses() + "");
            if (isNaN(colorCrossCount)) {
                colorCrossCount = 0;
            }
            condition += colorCrossCount;
            condition += ", ";
            var hp = parseInt(self.leaderSkillHealthPercent() + "");
            if (isNaN(hp)) {
                hp = 0;
            }
            condition += hp;
            condition += ")." + name + " ";
            condition += compare;
            condition += " ";
            condition += val2;
            ary.push(condition);
        }
        process(self.leaderSkillHpValue, self.leaderSkillHpDirection, "hp");
        process(self.leaderSkillAtkValue, self.leaderSkillAtkDirection, "atk");
        process(self.leaderSkillRcvValue, self.leaderSkillRcvDirection, "rcv");
        process(self.leaderSkillShieldValue, self.leaderSkillShieldDirection, "shield");
    };
    AdvancedSearchStandardQueryModel.prototype.pushCollabConditions = function (ary) {
        var colgroup = this.collab();
        if (colgroup == null) {
            return;
        }
        ary.push("(c.collab == " + CollabGroup[CollabGroup[colgroup]] + ")");
    };
    AdvancedSearchStandardQueryModel.prototype.pushCooldownConditions = function (ary) {
        var low = this.lowCD();
        var high = this.highCD();
        if (!!low || !!high) {
            if (!low) {
                low = 1;
            }
            if (!high) {
                high = 1000;
            }
            ary.push("(c.activeSkillId != 0)");
            if (low != 1) {
                ary.push("(vm.model.playerSkills[c.activeSkillId].initialCooldown >= " + low + ")");
            }
            if (high != 1000) {
                ary.push("(vm.model.playerSkills[c.activeSkillId].maxCooldown <= " + high + ")");
            }
        }
    };
    AdvancedSearchStandardQueryModel.prototype.pushMpConditions = function (ary) {
        var mp = this.mpValue();
        var direction = this.mpDirection();
        if (!mp) {
            return;
        }
        if (direction == "=") {
            direction = "==";
        }
        ary.push("(c.monsterPoints " + direction + " " + mp + ")");
    };
    AdvancedSearchStandardQueryModel.prototype.pushStatConditions = function (ary) {
        var hp = this.hpValue();
        var hpDirection = this.hpDirection();
        var atk = this.atkValue();
        var atkDirection = this.atkDirection();
        var rcv = this.rcvValue();
        var rcvDirection = this.rcvDirection();
        if ((!this.statsExpanded()) || (!hp && !atk && !rcv)) {
            return;
        }
        var tempString = "";
        var awakes = [];
        if (hp > 0) {
            if (hpDirection == "=") {
                hpDirection = "==";
            }
            tempString = "AdvancedSearchStandardQueryModel.getHp(c,model, [";
            awakes = [];
            if (this.statAccountAwakenings()) {
                awakes.push(Awakening.EnhancedHP);
            }
            if (this.statAccountMultiboost()) {
                awakes.push(Awakening.Multiboost);
            }
            tempString += awakes.toString() + "], " + this.includeSuperAwakenings() + ") ";
            ary.push("(" + tempString + hpDirection + " " + hp + ")");
        }
        if (atk > 0) {
            if (atkDirection == "=") {
                atkDirection = "==";
            }
            tempString = "AdvancedSearchStandardQueryModel.getAtk(c,model, [";
            awakes = [];
            if (this.statAccountAwakenings()) {
                awakes.push(Awakening.EnhancedATK);
            }
            if (this.statAccountMultiboost()) {
                awakes.push(Awakening.Multiboost);
            }
            tempString += awakes.toString() + "], " + this.includeSuperAwakenings() + ") ";
            ary.push("(" + tempString + atkDirection + " " + atk + ")");
        }
        if (rcv != null) {
            if (rcvDirection == "=") {
                rcvDirection = "==";
            }
            tempString = "AdvancedSearchStandardQueryModel.getRcv(c,model, [";
            awakes = [];
            if (this.statAccountAwakenings()) {
                awakes.push(Awakening.EnhancedRCV);
            }
            if (this.statAccountMultiboost()) {
                awakes.push(Awakening.Multiboost);
            }
            tempString += awakes.toString() + "], " + this.includeSuperAwakenings() + ") ";
            ary.push("(" + tempString + rcvDirection + " " + rcv + ")");
        }
    };
    AdvancedSearchStandardQueryModel.prototype.pushAssistableConditions = function (ary) {
        if (!this.assistable()) {
            return;
        }
        ary.push("((c.inheritanceType == 3) || (c.inheritanceType == 7))");
    };
    AdvancedSearchStandardQueryModel.prototype.getSettings = function () {
        // We first get just the json in order to remove anything undesirable, i.e. the functions
        var json = ko.toJSON(this);
        var ret = JSON.parse(json);
        var objectParser = new ObjectUrlParameterParser();
        function deleteUnnecessarySettings(ary) {
            if (!ary || !ary.length) {
                return;
            }
            for (var i = 0; i < ary.length; i++) {
                var currentObj = ary[i];
                delete currentObj.id;
                delete currentObj.instance;
                delete currentObj.postfix;
                var newTemplateVm = {};
                objectParser.buildFinal(newTemplateVm, currentObj.templateVm, currentObj.defaultTemplateVm);
                currentObj.templateVm = newTemplateVm;
                delete currentObj.defaultTemplateVm;
                if (currentObj.templateVm.__ko_mapping__) {
                    delete currentObj.templateVm.__ko_mapping__;
                }
            }
        }
        deleteUnnecessarySettings(ret.activeSkillConditions);
        deleteUnnecessarySettings(ret.leaderSkillConditions);
        return ret;
    };
    AdvancedSearchStandardQueryModel.prototype.reset = function (settings) {
        // Defaults
        settings = settings || {};
        settings.mainAttributes = settings.mainAttributes || {};
        settings.subAttributes = settings.subAttributes || {};
        settings.mainSubAttributes = settings.mainSubAttributes || {};
        settings.typesSelected = settings.typesSelected || {};
        settings.raritiesSelected = settings.raritiesSelected || {};
        settings.awakeningsSelected = settings.awakeningsSelected || [];
        settings.orbColors = settings.orbColors || {};
        if (typeof settings.emulateEnhancedAwakenings == "undefined") {
            settings.emulateEnhancedAwakenings = true;
        }
        if (typeof settings.leaderSkillConsiderHeartCross == "undefined") {
            settings.leaderSkillConsiderHeartCross = true;
        }
        if (typeof settings.leaderSkillEffectiveShield == "undefined") {
            settings.leaderSkillEffectiveShield = true;
        }
        if (typeof settings.leaderSkillSelfPair == "undefined") {
            settings.leaderSkillSelfPair = true;
        }
        if (typeof settings.leaderSkillMaximumColorCrosses == "undefined") {
            settings.leaderSkillMaximumColorCrosses = 2;
        }
        if (typeof settings.leaderSkillHealthPercent == "undefined") {
            settings.leaderSkillHealthPercent = 0;
        }
        if (typeof settings.hideCardsWithoutMetadata == "undefined") {
            settings.hideCardsWithoutMetadata = true;
        }
        if (typeof settings.orderByDescending == "undefined") {
            settings.orderByDescending = true;
        }
        settings.orderByIncludeAwakening = settings.orderByIncludeAwakening || {};
        if (typeof settings.orderByIncludeAwakening[Awakening.Multiboost] == "undefined") {
            settings.orderByIncludeAwakening[Awakening.Multiboost] = true;
        }
        if (typeof settings.orderByIncludeAwakening[Awakening.SevenCombo] == "undefined") {
            settings.orderByIncludeAwakening[Awakening.SevenCombo] = true;
        }
        if (typeof settings.filterOutSameSkill == "undefined") {
            settings.filterOutSameSkill = false;
        }
        if (typeof settings.filterOutSameSkillSameTree == "undefined") {
            settings.filterOutSameSkillSameTree = false;
        }
        var validDirections = ["<", "<=", ">", ">=", "=="];
        // Actual code
        this.splitMainSubAttribute(!!settings.splitMainSubAttribute);
        this.differentMainSubAttribute(!!settings.differentMainSubAttribute);
        this.hideCardsWithoutMetadata(!!settings.hideCardsWithoutMetadata);
        this.typeAnd(!!settings.typeAnd);
        for (var c in this.mainAttributes) {
            var val = !!settings.mainAttributes[c];
            this.mainAttributes[c](val);
        }
        for (var c in this.subAttributes) {
            var val = !!settings.subAttributes[c];
            this.subAttributes[c](val);
        }
        for (var c in this.mainSubAttributes) {
            var val = !!settings.mainSubAttributes[c];
            this.mainSubAttributes[c](val);
        }
        for (var c in this.typesSelected) {
            var val = !!settings.typesSelected[c];
            this.typesSelected[c](val);
        }
        var awakenings = [];
        for (var i = 0; typeof settings.awakeningsSelected[i] != "undefined"; i++) {
            var val = settings.awakeningsSelected[i];
            if (typeof Awakening[val] != "string") {
                continue;
            }
            awakenings.push(Awakening[Awakening[val]]);
        }
        this.awakeningsSelected(awakenings);
        this.emulateEnhancedAwakenings(!!settings.emulateEnhancedAwakenings);
        this.mixMatchKillers(!!settings.mixMatchKillers);
        this.emulateKillerAwakenings(!!settings.emulateKillerAwakenings);
        this.includeSuperAwakenings(!!settings.includeSuperAwakenings);
        this.assistable(!!settings.assistable);
        for (var c in this.orbColors) {
            var val = !!settings.orbColors[c];
            this.orbColors[c](val);
        }
        this.exactOrbColors(!!settings.exactOrbColors);
        function numberOrNan(input) {
            if (typeof input == "undefined") {
                return null;
            }
            var ret = parseInt(input);
            if (isNaN(ret)) {
                return null;
            }
            return ret;
        }
        function whitelistCheck(input, valid, def) {
            if (typeof input == "undefined") {
                return def;
            }
            for (var i = 0; i < valid.length; i++) {
                if (input == valid[i]) {
                    return valid[i];
                }
            }
            return def;
        }
        this.customKillerCount(numberOrNan(settings.customKillerCount));
        this.lowCD(numberOrNan(settings.lowCD));
        this.highCD(numberOrNan(settings.highCD));
        this.mpValue(numberOrNan(settings.mpValue));
        this.rarityValue(numberOrNan(settings.rarityValue));
        this.leaderSkillHpDirection(whitelistCheck(settings.leaderSkillHpDirection, validDirections, ">="));
        this.leaderSkillHpValue(numberOrNan(settings.leaderSkillHpValue));
        this.leaderSkillAtkDirection(whitelistCheck(settings.leaderSkillAtkDirection, validDirections, ">="));
        this.leaderSkillAtkValue(numberOrNan(settings.leaderSkillAtkValue));
        this.leaderSkillRcvDirection(whitelistCheck(settings.leaderSkillRcvDirection, validDirections, ">="));
        this.leaderSkillRcvValue(numberOrNan(settings.leaderSkillRcvValue));
        this.leaderSkillShieldDirection(whitelistCheck(settings.leaderSkillShieldDirection, validDirections, ">="));
        this.leaderSkillShieldValue(numberOrNan(settings.leaderSkillShieldValue));
        this.leaderSkillConsiderHeartCross(!!settings.leaderSkillConsiderHeartCross);
        this.leaderSkillEffectiveShield(!!settings.leaderSkillEffectiveShield);
        this.leaderSkillSelfPair(!!settings.leaderSkillSelfPair);
        this.leaderSkillMaximumColorCrosses(numberOrNan(settings.leaderSkillMaximumColorCrosses));
        this.leaderSkillHealthPercent(numberOrNan(settings.leaderSkillHealthPercent));
        this.collab(numberOrNan(settings.collab));
        this.hpDirection(whitelistCheck(settings.hpDirection, validDirections, ">"));
        this.atkDirection(whitelistCheck(settings.atkDirection, validDirections, ">"));
        this.rcvDirection(whitelistCheck(settings.rcvDirection, validDirections, ">"));
        this.hpValue(numberOrNan(settings.hpValue));
        this.atkValue(numberOrNan(settings.atkValue));
        this.rcvValue(numberOrNan(settings.rcvValue));
        this.statAccountAwakenings(!!settings.statAccountAwakenings);
        this.statAccountMultiboost(!!settings.statAccountMultiboost);
        this.mpDirection(whitelistCheck(settings.mpDirection, validDirections, "<"));
        this.rarityDirection(whitelistCheck(settings.rarityDirection, validDirections, "<="));
        this.multiplierExpanded(!!settings.multiplierExpanded);
        this.statsExpanded(!!settings.statsExpanded);
        this.orderByDescending(!!settings.orderByDescending);
        this.orderByKillers(!!settings.orderByKillers);
        this.filterOutSameSkill(!!settings.filterOutSameSkill);
        this.filterOutSameSkillSameTree(!!settings.filterOutSameSkillSameTree);
        for (var key in this.orderByIncludeAwakening) {
            var val = !!settings.orderByIncludeAwakening[key];
            this.orderByIncludeAwakening[key](val);
        }
        this.orderByMainOption(whitelistCheck(settings.orderByMainOption, ["", "stats", "atk", "hp", "rcv", "maxLevel", "cost", "starCount", "attribute", "maxcd", "mincd"], ""));
        function parseAdvancedSearchActiveSkillModel(ary, postfix) {
            var ret = [];
            if (!ary) {
                return ret;
            }
            for (var key in ary) {
                var savedObjectState = ary[key];
                if (!savedObjectState || !savedObjectState.type) {
                    continue;
                }
                var model = new AdvancedSearchActiveSkillModel(postfix);
                model.negate(!!savedObjectState.negate);
                model.type(savedObjectState.type);
                ko.mapping.fromJS(savedObjectState.templateVm, {}, model.templateVm);
                ret.push(model);
            }
            return ret;
        }
        var actives = parseAdvancedSearchActiveSkillModel(settings.activeSkillConditions, "PlayerSkillEffect");
        this.activeSkillConditions(actives);
        var leaderSkills = parseAdvancedSearchActiveSkillModel(settings.leaderSkillConditions, "LeaderSkillEffect");
        this.leaderSkillConditions(leaderSkills);
    };
    return AdvancedSearchStandardQueryModel;
}());
var CollabOption = /** @class */ (function () {
    function CollabOption(collab, label) {
        this.collab = collab;
        this.label = label;
    }
    return CollabOption;
}());
var LeaderSkillMaximumMultiplierContext = /** @class */ (function () {
    function LeaderSkillMaximumMultiplierContext() {
        this.considerHeartCross = false;
        this.colorCrossCount = 0;
        this.colorCrossCountRemaining = 0;
        this.healthPercent = 0;
    }
    return LeaderSkillMaximumMultiplierContext;
}());
var PlayerSkillEffectOption = /** @class */ (function () {
    function PlayerSkillEffectOption(type, instance) {
        this.label = instance.label;
        this.value = type;
        this.instance = instance;
    }
    return PlayerSkillEffectOption;
}());
var PlayerSkillEffectOptionVariable = /** @class */ (function () {
    function PlayerSkillEffectOptionVariable() {
    }
    return PlayerSkillEffectOptionVariable;
}());
var SkillEffectOption = /** @class */ (function () {
    function SkillEffectOption(skillEffect, label) {
        this.skillEffect = skillEffect;
        this.label = label;
    }
    return SkillEffectOption;
}());
var EvoSummaryState;
(function (EvoSummaryState) {
    EvoSummaryState[EvoSummaryState["DontHave"] = 0] = "DontHave";
    EvoSummaryState[EvoSummaryState["DoHave"] = 1] = "DoHave";
    EvoSummaryState[EvoSummaryState["Expand"] = 2] = "Expand";
})(EvoSummaryState || (EvoSummaryState = {}));
var EvoSummaryTableEntry = /** @class */ (function () {
    function EvoSummaryTableEntry(card, quantity) {
        this.card = card;
        this.quantity = quantity;
    }
    return EvoSummaryTableEntry;
}());
var EvoSummaryTableEntrySection = /** @class */ (function () {
    function EvoSummaryTableEntrySection(name, entries) {
        this.name = name;
        this.entries = entries;
    }
    return EvoSummaryTableEntrySection;
}());
var EvoSummaryTreeNode = /** @class */ (function () {
    function EvoSummaryTreeNode(card, model) {
        this.scale = 1;
        // For state of the tree
        this.state = ko.observable(EvoSummaryState.DontHave);
        this.children = [];
        this.card = card;
        this.model = model;
    }
    return EvoSummaryTreeNode;
}());
var FDC = /** @class */ (function () {
    function FDC(params) {
        this.team = new FdcTeamSetup();
        this.serializer = new FdcUrlSerializer();
        var self = this;
        var model = ko.unwrap(params.model);
        if (!model) {
            throw "FDC requires model, found: " + params;
        }
        var team = ko.unwrap(params.team);
        if (!team) {
            throw "FDC requires team, found: " + params;
        }
        self.model = model;
        self.team = team;
        window['pageVm'] = self;
    }
    FDC.prototype.getUrl = function () {
        return this.serializer.convertToUrl(this.team);
    };
    return FDC;
}());
var FdcCard = /** @class */ (function () {
    function FdcCard() {
        this.cardId = ko.observable(0);
        // When it comes to level, 0 means "whatever the max level of the card is"
        this.level = ko.observable(0);
        this.inheritedCardId = ko.observable(0);
        // When it comes to level, 0 means "whatever the max level of the card is"
        this.inheritedCardLevel = ko.observable(0);
        // 1 if the inherited card is +297
        this.inheritedCardPlusBonus = ko.observable(0);
        this.latent1Id = ko.observable(0);
        this.latent2Id = ko.observable(0);
        this.latent3Id = ko.observable(0);
        this.latent4Id = ko.observable(0);
        this.latent5Id = ko.observable(0);
        this.latent6Id = ko.observable(0);
        this.superAwakeningId = ko.observable(0);
        this.awakenings = ko.observable(9);
        this.hpPlus = ko.observable(99);
        this.atkPlus = ko.observable(99);
        this.rcvPlus = ko.observable(99);
    }
    return FdcCard;
}());
var FDCCardUI = /** @class */ (function () {
    function FDCCardUI(params) {
        var model = ko.unwrap(params.model);
        var card = ko.unwrap(params.card);
        var self = this;
        if (!model) {
            throw "FDC Card requires model, found: " + params;
        }
        if (!card) {
            throw "FDC Card requires card, found: " + card;
        }
        self.model = model;
        self.card = card;
    }
    FDCCardUI.prototype.getPrimaryCard = function () {
        var self = this;
        var id = self.card.cardId();
        if (!id) {
            return null;
        }
        var ret = self.model.cards[id];
        if (!ret) {
            return null;
        }
        return ret;
    };
    FDCCardUI.prototype.getInheritedCard = function () {
        var self = this;
        var id = self.card.inheritedCardId();
        if (!id) {
            return null;
        }
        var ret = self.model.cards[id];
        if (!ret) {
            return null;
        }
        return ret;
    };
    FDCCardUI.prototype.inheritedCardIs297 = function () {
        var me = this.getPrimaryCard();
        var other = this.getInheritedCard();
        if (me == null || other == null) {
            return false;
        }
        if (me.attribute != other.attribute) {
            return false;
        }
        if (this.card.inheritedCardPlusBonus() == 0) {
            return false;
        }
        return true;
    };
    FDCCardUI.prototype.getPlusText = function () {
        var me = this.getPrimaryCard();
        if (me == null) {
            return "";
        }
        var totalPlusses = this.card.atkPlus() + this.card.hpPlus() + this.card.rcvPlus();
        if (totalPlusses <= 0) {
            return "";
        }
        if (totalPlusses > 297) {
            return "";
        }
        return "+" + totalPlusses;
    };
    return FDCCardUI;
}());
var FdcSingleTeam = /** @class */ (function () {
    function FdcSingleTeam() {
        this.leader = new FdcCard();
        this.friendLeader = new FdcCard();
        this.sub1 = new FdcCard();
        this.sub2 = new FdcCard();
        this.sub3 = new FdcCard();
        this.sub4 = new FdcCard();
    }
    return FdcSingleTeam;
}());
var FdcTeamSetup = /** @class */ (function () {
    function FdcTeamSetup() {
        this.players = ko.observable(1);
        this.selectedPlayer = ko.observable(1);
        this.team1 = new FdcSingleTeam();
        this.team2 = new FdcSingleTeam();
        this.team3 = new FdcSingleTeam();
    }
    return FdcTeamSetup;
}());
var FdcUrlSerializer = /** @class */ (function () {
    function FdcUrlSerializer() {
    }
    FdcUrlSerializer.prototype.convertToUrl = function (model) {
        var ret = [];
        ret.push(model.players() + "");
        var self = this;
        var retStack = [];
        function pushTeam(team) {
            var teamSplit = self.convertTeamToUrl(team);
            if (teamSplit.length == 0 && retStack.length == 0) {
                return;
            }
            var myRet = [];
            myRet.push(teamSplit.length + "");
            for (var i = 0; i < teamSplit.length; i++) {
                myRet.push(teamSplit[i]);
            }
            retStack.push(myRet);
        }
        // Also done in reverse for the same reasons as conertCard
        pushTeam(model.team3);
        pushTeam(model.team2);
        pushTeam(model.team1);
        for (var retStackIndex = retStack.length - 1; retStackIndex >= 0; retStackIndex--) {
            var ary = retStack[retStackIndex];
            for (var i = 0; i < ary.length; i++) {
                ret.push(ary[i]);
            }
        }
        return ret.join(",");
    };
    FdcUrlSerializer.prototype.convertTeamToUrl = function (team) {
        var retBuffer = [];
        retBuffer.push(this.convertCardToUrl(team.leader));
        retBuffer.push(this.convertCardToUrl(team.sub1));
        retBuffer.push(this.convertCardToUrl(team.sub2));
        retBuffer.push(this.convertCardToUrl(team.sub3));
        retBuffer.push(this.convertCardToUrl(team.sub4));
        retBuffer.push(this.convertCardToUrl(team.friendLeader));
        var maxCardIndex = -1;
        for (var i = 0; i < retBuffer.length; i++) {
            if (retBuffer[i].length != 0) {
                maxCardIndex = i;
            }
        }
        var ret = [];
        for (var i = 0; i <= maxCardIndex; i++) {
            ret.push(retBuffer[i]);
        }
        return ret;
    };
    FdcUrlSerializer.prototype.convertCardToUrl = function (card) {
        // ID is special. If it's 0 then fuck everything else in particular.
        var id = card.cardId();
        if (id == 0) {
            return "";
        }
        var ret = "";
        var self = this;
        function handle(val, def, length) {
            if (val == def) {
                if (ret.length == 0) {
                    return;
                }
            }
            ret = self.convertValueToUrl(val, length) + ret;
        }
        if (FdcUrlSerializer.defaultCardValues == null) {
            FdcUrlSerializer.defaultCardValues = ko.toJS(new FdcCard());
        }
        // These must be in reverse order.
        handle(card.rcvPlus(), FdcUrlSerializer.defaultCardValues.rcvPlus, 2);
        handle(card.atkPlus(), FdcUrlSerializer.defaultCardValues.atkPlus, 2);
        handle(card.hpPlus(), FdcUrlSerializer.defaultCardValues.hpPlus, 2);
        handle(card.awakenings(), FdcUrlSerializer.defaultCardValues.awakenings, 1);
        handle(card.inheritedCardPlusBonus(), FdcUrlSerializer.defaultCardValues.inheritedCardPlusBonus, 1);
        handle(card.inheritedCardLevel(), FdcUrlSerializer.defaultCardValues.inheritedCardLevel, 3);
        handle(card.inheritedCardId(), FdcUrlSerializer.defaultCardValues.inheritedCardId, 5);
        handle(card.level(), FdcUrlSerializer.defaultCardValues.level, 3);
        handle(card.cardId(), FdcUrlSerializer.defaultCardValues.cardId, 5);
        return ret;
    };
    FdcUrlSerializer.prototype.convertValueToUrl = function (val, len) {
        var ret = val + "";
        while (ret.length < len) {
            ret = "0" + ret;
        }
        return ret;
    };
    FdcUrlSerializer.prototype.convertFromUrl = function (model, url) {
        if (!url) {
            return;
        }
        var split = url.split(",");
        if (split.length == 0) {
            return;
        }
        var totalPlayers = parseInt(split[0]);
        if (isNaN(totalPlayers)) {
            console.error("Invalid total players: " + split[0]);
            return;
        }
        model.players(totalPlayers);
        var currentTeam = 1;
        for (var currentIndex = 1; currentIndex < split.length; currentIndex++) {
            var totalParameters = parseInt(split[currentIndex]);
            if (isNaN(totalParameters)) {
                console.error("Invalid paramters: " + split[currentIndex]);
                return;
            }
            var team = void 0;
            if (currentTeam == 1) {
                team = model.team1;
            }
            else if (currentTeam == 2) {
                team = model.team2;
            }
            else if (currentTeam == 3) {
                team = model.team3;
            }
            else {
                return;
            }
            currentTeam++;
            this.convertTeamFromUrl(team, split, currentIndex + 1, totalParameters);
            currentIndex += totalParameters;
        }
    };
    FdcUrlSerializer.prototype.convertTeamFromUrl = function (team, split, startIndex, totalParameters) {
        if (!team) {
            return;
        }
        for (var i = 0; i < totalParameters && i + startIndex < split.length; i++) {
            var card = void 0;
            switch (i) {
                case 0:
                    card = team.leader;
                    break;
                case 1:
                    card = team.sub1;
                    break;
                case 2:
                    card = team.sub2;
                    break;
                case 3:
                    card = team.sub3;
                    break;
                case 4:
                    card = team.sub4;
                    break;
                case 5:
                    card = team.friendLeader;
                    break;
                default:
                    return;
            }
            this.convertCardFromUrl(card, split[i + startIndex]);
        }
    };
    FdcUrlSerializer.prototype.convertCardFromUrl = function (card, data) {
        if (data == null) {
            return;
        }
        var offset = 0;
        function handle(property, length) {
            if (data.length < offset + length) {
                offset = 999;
                return;
            }
            var stringValue = data.substr(offset, length);
            offset += length;
            var val = parseInt(stringValue);
            if (isNaN(val)) {
                console.error("Invalid property (" + stringValue + " ): " + data);
                offset = 999;
                return;
            }
            property(val);
        }
        // Offset and order needs to match up with the convert to card data, of course
        handle(card.cardId, 5);
        handle(card.level, 3);
        handle(card.inheritedCardId, 5);
        handle(card.inheritedCardLevel, 3);
        handle(card.inheritedCardPlusBonus, 1);
        handle(card.awakenings, 1);
        handle(card.hpPlus, 2);
        handle(card.atkPlus, 2);
        handle(card.rcvPlus, 2);
    };
    FdcUrlSerializer.defaultCardValues = null;
    return FdcUrlSerializer;
}());
var KoPageAdvancedSearchData = /** @class */ (function () {
    function KoPageAdvancedSearchData(defaultSettings) {
        this.defaultSettings = defaultSettings;
    }
    return KoPageAdvancedSearchData;
}());
var KoPageAwakeningData = /** @class */ (function () {
    function KoPageAwakeningData() {
    }
    return KoPageAwakeningData;
}());
var KoPageCardData = /** @class */ (function () {
    function KoPageCardData(model, card) {
        this.card = card;
        this.model = model;
    }
    return KoPageCardData;
}());
var KoPageFdcData = /** @class */ (function () {
    function KoPageFdcData(model) {
        this.model = model;
    }
    return KoPageFdcData;
}());
var KoPageSkillData = /** @class */ (function () {
    function KoPageSkillData() {
    }
    return KoPageSkillData;
}());
var CardSearch = /** @class */ (function () {
    function CardSearch(searchPhrase, model, disallowedMatches) {
        if (disallowedMatches === void 0) { disallowedMatches = 0; }
        this.searchFunctions = [];
        var self = this;
        self.model = model;
        // Empty string search -- always true
        if (searchPhrase.length == 0) {
            self.searchFunctions.push(function (card, cardName, result) {
                result.doesMatch = true;
            });
            return;
        }
        // ID search
        if (/^[0-9]+$/.test(searchPhrase)) {
            var id_1 = parseInt(searchPhrase);
            self.searchFunctions.push(function (card, cardName, result) {
                result.doesMatch = card.id == id_1;
            });
        }
        // The regular matching
        self.registerTextSearch(searchPhrase);
        // Special matching
        self.registerStarMatch(disallowedMatches, searchPhrase);
        self.registerColorSearch(disallowedMatches, searchPhrase);
        self.registerGroupSearch(disallowedMatches, searchPhrase);
        self.registerTypeSearch(disallowedMatches, searchPhrase);
        self.registerEquipSearch(disallowedMatches, searchPhrase);
        self.registerCommonPhrases(disallowedMatches, searchPhrase);
    }
    CardSearch.prototype.doesMatch = function (card, cardName) {
        var ret = new CardSearchResult();
        for (var i = 0; i < this.searchFunctions.length; i++) {
            this.searchFunctions[i](card, cardName, ret);
            if (ret.doesMatch) {
                ret.matchKey = "" + i + ret.matchKey;
                return ret;
            }
        }
        return ret;
    };
    CardSearch.prototype.registerTextSearch = function (searchPhrase) {
        // Text search matching the beginning of words
        this.searchFunctions.push(function (card, cardName, result) {
            var indx = cardName.indexOf(searchPhrase);
            if (indx < 0) {
                return;
            }
            var indx2 = indx + searchPhrase.length;
            // Level is the power / how well it matches
            var level = 0;
            // The search matches the beginning of a word instead of just something random - e.x. Iza
            if ((indx == 0 || cardName[indx - 1] == " ")) {
                level++;
                // It also matches the entire word - e.x. Li
                if (indx2 >= cardName.length || cardName[indx2] == " " || cardName[indx2] == ",") {
                    level++;
                    // It's the entire fucking name - e.x. "King"
                    if (cardName == searchPhrase) {
                        level++;
                    }
                }
            }
            result.doesMatch = true;
            result.matchKey = (9 - level) + result.matchKey;
        });
    };
    CardSearch.prototype.registerStarMatch = function (disallowedMatches, searchPhrase) {
        if ((disallowedMatches & CardSearchFlag.StarSearch) != 0) {
            return;
        }
        var regex = /^([0-9]+)[ ]{0,1}(\*|stars|star)/;
        var matchedStarCount = 0;
        function onMatch(match, starCount) {
            matchedStarCount = starCount;
            return "";
        }
        var afterRarity = searchPhrase.replace(regex, onMatch);
        if (afterRarity == searchPhrase) {
            return;
        }
        var searcher = new CardSearch(afterRarity.trim(), this.model, disallowedMatches | CardSearchFlag.StarSearch);
        this.searchFunctions.push(function (card, cardName, result) {
            if (card.starCount != matchedStarCount) {
                return;
            }
            var result2 = searcher.doesMatch(card, cardName);
            if (!result2.doesMatch) {
                return;
            }
            result.doesMatch = true;
            result.matchKey = result2.matchKey;
        });
    };
    CardSearch.prototype.registerTypeSearch = function (disallowedMatches, searchPhrase) {
        if ((disallowedMatches & CardSearchFlag.TypeSearch) != 0) {
            return;
        }
        var self = this;
        var cardTypes = {};
        cardTypes["m"] = CardType.Machine;
        var _loop_1 = function () {
            if (searchPhrase.indexOf(alias) != 0) {
                return "continue";
            }
            var remainingSearch = searchPhrase.substr(alias.length);
            var type = cardTypes[alias];
            // Register the standard search, e.x. "MGoe"
            (function () {
                var searcher = new CardSearch(remainingSearch.trim(), self.model, disallowedMatches | CardSearchFlag.ColorSearch);
                var searchType = type;
                self.searchFunctions.push(function (card, cardName, result) {
                    if (card.types.indexOf(searchType) == -1) {
                        return;
                    }
                    var result2 = searcher.doesMatch(card, cardName);
                    if (!result2.doesMatch) {
                        return;
                    }
                    result.doesMatch = true;
                    result.matchKey = result2.matchKey;
                });
            })();
        };
        for (var alias in cardTypes) {
            _loop_1();
        }
    };
    CardSearch.prototype.registerColorSearch = function (disallowedMatches, searchPhrase) {
        if ((disallowedMatches & CardSearchFlag.ColorSearch) != 0) {
            return;
        }
        var self = this;
        var colorAlises = {};
        colorAlises["r"] = ColorAttribute.Fire;
        colorAlises["red"] = ColorAttribute.Fire;
        colorAlises["fire"] = ColorAttribute.Fire;
        colorAlises["g"] = ColorAttribute.Wood;
        colorAlises["gr"] = ColorAttribute.Wood;
        colorAlises["green"] = ColorAttribute.Wood;
        colorAlises["wood"] = ColorAttribute.Wood;
        colorAlises["b"] = ColorAttribute.Water;
        colorAlises["bl"] = ColorAttribute.Water;
        colorAlises["blue"] = ColorAttribute.Water;
        colorAlises["water"] = ColorAttribute.Water;
        colorAlises["l"] = ColorAttribute.Light;
        colorAlises["light"] = ColorAttribute.Light;
        colorAlises["d"] = ColorAttribute.Dark;
        colorAlises["dark"] = ColorAttribute.Dark;
        colorAlises["x"] = ColorAttribute.None;
        colorAlises["none"] = ColorAttribute.None;
        var _loop_2 = function () {
            if (searchPhrase.indexOf(alias) != 0) {
                return "continue";
            }
            var remainingSearch = searchPhrase.substr(alias.length);
            var color = colorAlises[alias];
            // Register the standard search, e.x. "RMyr"            
            (function () {
                var searcher = new CardSearch(remainingSearch.trim(), self.model, disallowedMatches | CardSearchFlag.ColorSearch);
                var searchColor = color;
                self.searchFunctions.push(function (card, cardName, result) {
                    if (card.attribute != searchColor) {
                        return;
                    }
                    var result2 = searcher.doesMatch(card, cardName);
                    if (!result2.doesMatch) {
                        return;
                    }
                    result.doesMatch = true;
                    result.matchKey = result2.matchKey;
                });
            })();
            // Register the Myrbot style, e.x. "g/x artemis"
            if (remainingSearch[0] == "/") {
                for (var alias2 in colorAlises) {
                    if (remainingSearch.indexOf(alias2) != 1) {
                        continue;
                    }
                    (function () {
                        var searcher = new CardSearch(remainingSearch.substr(alias2.length + 1).trim(), self.model, disallowedMatches | CardSearchFlag.ColorSearch);
                        var searchColor1 = color;
                        var searchColor2 = colorAlises[alias2];
                        self.searchFunctions.push(function (card, cardName, result) {
                            if (card.attribute != searchColor1) {
                                return;
                            }
                            if (card.subattribute != searchColor2) {
                                return;
                            }
                            var result2 = searcher.doesMatch(card, cardName);
                            if (!result2.doesMatch) {
                                return;
                            }
                            result.doesMatch = true;
                            result.matchKey = result2.matchKey;
                        });
                    })();
                }
            }
        };
        for (var alias in colorAlises) {
            _loop_2();
        }
    };
    CardSearch.prototype.registerGroupSearch = function (disallowedMatches, searchPhrase) {
        if ((disallowedMatches & CardSearchFlag.GroupSearch) != 0) {
            return;
        }
        var self = this;
        if (self.model == null) {
            console.error("Model not set - unable to search for collabs");
            return;
        }
        self.model.cardGroups.forEach(function (cardGroup) {
            var thisGroupsAlises = cardGroup.aliases;
            // Add in the real name if the real name isn't part of the aliases
            if (thisGroupsAlises.indexOf(cardGroup.name) < 0) {
                thisGroupsAlises.push(cardGroup.name.toLowerCase());
            }
            thisGroupsAlises.forEach(function (groupName) {
                if (searchPhrase.toLowerCase().indexOf(groupName) != 0) {
                    return;
                }
                var allowedIds = {};
                cardGroup.cards.forEach(function (id) {
                    allowedIds[id] = true;
                });
                var afterSearch = searchPhrase.substring(groupName.length);
                var searcher = new CardSearch(afterSearch.trim(), self.model, disallowedMatches | CardSearchFlag.GroupSearch);
                self.searchFunctions.push(function (card, cardName, result) {
                    if (!allowedIds[card.id]) {
                        if (card.evoFromId == 0 || !allowedIds[card.evoTreeBaseId]) {
                            return;
                        }
                    }
                    var result2 = searcher.doesMatch(card, cardName);
                    if (!result2.doesMatch) {
                        return;
                    }
                    result.doesMatch = true;
                    result.matchKey = result2.matchKey;
                });
            });
        });
    };
    CardSearch.prototype.registerEquipSearch = function (disallowedMatches, searchPhrase) {
        if ((disallowedMatches & CardSearchFlag.EquipSearch) != 0) {
            return;
        }
        var search = "equip";
        if (searchPhrase.indexOf(search) != 0) {
            return;
        }
        var afterSearch = searchPhrase.substring(search.length);
        var searcher = new CardSearch(afterSearch.trim(), this.model, disallowedMatches | CardSearchFlag.EquipSearch);
        this.searchFunctions.push(function (card, cardName, result) {
            if (card.awakenings.indexOf(Awakening.EquipAssist) < 0) {
                return;
            }
            var result2 = searcher.doesMatch(card, cardName);
            if (!result2.doesMatch) {
                return;
            }
            result.doesMatch = true;
            result.matchKey = result2.matchKey;
        });
    };
    CardSearch.prototype.registerCommonPhrases = function (disallowedMatches, searchPhrase) {
        // TODO: This needs to be a bit more robust when we want to support revo and something else too. 
        // For now it's fine
        if (searchPhrase.indexOf("revo") == 0 && (disallowedMatches & CardSearchFlag.CommonPhrases) == 0) {
            var afterSearch = searchPhrase.substring(4);
            var searcher = new CardSearch(afterSearch.trim(), this.model, disallowedMatches | CardSearchFlag.CommonPhrases);
            this.searchFunctions.push(function (card, cardName, result) {
                if (card.name.indexOf("Reincarnated") != 0) {
                    return;
                }
                var result2 = searcher.doesMatch(card, cardName);
                if (!result2.doesMatch) {
                    return;
                }
                result.doesMatch = true;
                result.matchKey = result2.matchKey;
            });
        }
    };
    return CardSearch;
}());
var CardSearchFlag;
(function (CardSearchFlag) {
    CardSearchFlag[CardSearchFlag["None"] = 0] = "None";
    CardSearchFlag[CardSearchFlag["ColorSearch"] = 1] = "ColorSearch";
    CardSearchFlag[CardSearchFlag["StarSearch"] = 2] = "StarSearch";
    CardSearchFlag[CardSearchFlag["TypeSearch"] = 4] = "TypeSearch";
    CardSearchFlag[CardSearchFlag["EquipSearch"] = 8] = "EquipSearch";
    CardSearchFlag[CardSearchFlag["CommonPhrases"] = 16] = "CommonPhrases";
    CardSearchFlag[CardSearchFlag["GroupSearch"] = 32] = "GroupSearch";
})(CardSearchFlag || (CardSearchFlag = {}));
var CardSearchResult = /** @class */ (function () {
    function CardSearchResult() {
        this.doesMatch = false;
        this.matchKey = "";
    }
    return CardSearchResult;
}());
var SearchSorter = /** @class */ (function () {
    function SearchSorter() {
    }
    SearchSorter.prototype.addResult = function (ary, result, limit, filter) {
        var ary2 = ary();
        function insertLocation(start, end) {
            var halfway = start + ((end - start) / 2);
            var pivot = Math.floor(halfway);
            if (start >= end) {
                return start;
            }
            if (result.sortKey < ary2[pivot].sortKey) {
                if (pivot == end) {
                    return pivot - 1;
                }
                return insertLocation(start, pivot);
            }
            else {
                return insertLocation(pivot + 1, end);
            }
        }
        var newItemLocation = insertLocation(0, ary2.length);
        var full = ary2.length >= limit;
        // Don't insert into end of a full array
        if (full && newItemLocation == ary2.length) {
            return;
        }
        // Handle filtering        
        if (typeof filter[result.filterKey] != "undefined" && filter[result.filterKey]) {
            var existingItemLocation = -1;
            for (var i = 0; i < ary2.length; i++) {
                if (ary2[i].filterKey == result.filterKey) {
                    existingItemLocation = i;
                    break;
                }
            }
            // Do not insert into if your filter key is already in the array
            // and there is someone ahead of you with the same key
            if (existingItemLocation < newItemLocation) {
                return;
            }
            // Otherwise removing the conflicting item
            // doing so means we're not full no matter what
            ary.splice(existingItemLocation, 1);
            full = false;
        }
        filter[result.filterKey] = true;
        ary.splice(newItemLocation, 0, result);
        if (full) {
            var removedElement = ary.pop();
            delete filter[removedElement.filterKey];
        }
    };
    return SearchSorter;
}());
var Awakening;
(function (Awakening) {
    Awakening[Awakening["Super"] = -1] = "Super";
    Awakening[Awakening["Unknown"] = 0] = "Unknown";
    Awakening[Awakening["EnhancedHP"] = 1] = "EnhancedHP";
    Awakening[Awakening["EnhancedATK"] = 2] = "EnhancedATK";
    Awakening[Awakening["EnhancedRCV"] = 3] = "EnhancedRCV";
    Awakening[Awakening["FireResist"] = 4] = "FireResist";
    Awakening[Awakening["WaterResist"] = 5] = "WaterResist";
    Awakening[Awakening["WoodResist"] = 6] = "WoodResist";
    Awakening[Awakening["LightResist"] = 7] = "LightResist";
    Awakening[Awakening["DarkResist"] = 8] = "DarkResist";
    Awakening[Awakening["Autoheal"] = 9] = "Autoheal";
    Awakening[Awakening["BindResist"] = 10] = "BindResist";
    Awakening[Awakening["BlindResist"] = 11] = "BlindResist";
    Awakening[Awakening["JammerResist"] = 12] = "JammerResist";
    Awakening[Awakening["PoisonResist"] = 13] = "PoisonResist";
    Awakening[Awakening["FireEnhance"] = 14] = "FireEnhance";
    Awakening[Awakening["WaterEnhance"] = 15] = "WaterEnhance";
    Awakening[Awakening["WoodEnhance"] = 16] = "WoodEnhance";
    Awakening[Awakening["LightEnhance"] = 17] = "LightEnhance";
    Awakening[Awakening["DarkEnhance"] = 18] = "DarkEnhance";
    Awakening[Awakening["TimeExtend"] = 19] = "TimeExtend";
    Awakening[Awakening["BindRecovery"] = 20] = "BindRecovery";
    Awakening[Awakening["SkillBoost"] = 21] = "SkillBoost";
    Awakening[Awakening["FireRow"] = 22] = "FireRow";
    Awakening[Awakening["WaterRow"] = 23] = "WaterRow";
    Awakening[Awakening["WoodRow"] = 24] = "WoodRow";
    Awakening[Awakening["LightRow"] = 25] = "LightRow";
    Awakening[Awakening["DarkRow"] = 26] = "DarkRow";
    Awakening[Awakening["TPA"] = 27] = "TPA";
    Awakening[Awakening["SBR"] = 28] = "SBR";
    Awakening[Awakening["HeartEnhance"] = 29] = "HeartEnhance";
    Awakening[Awakening["Multiboost"] = 30] = "Multiboost";
    Awakening[Awakening["DragonKiller"] = 31] = "DragonKiller";
    Awakening[Awakening["GodKiller"] = 32] = "GodKiller";
    Awakening[Awakening["DevilKiller"] = 33] = "DevilKiller";
    Awakening[Awakening["MachineKiller"] = 34] = "MachineKiller";
    Awakening[Awakening["BalancedKiller"] = 35] = "BalancedKiller";
    Awakening[Awakening["AttackerKiller"] = 36] = "AttackerKiller";
    Awakening[Awakening["PhysicalKiller"] = 37] = "PhysicalKiller";
    Awakening[Awakening["HealerKiller"] = 38] = "HealerKiller";
    Awakening[Awakening["EvoKiller"] = 39] = "EvoKiller";
    Awakening[Awakening["AwakeningKiller"] = 40] = "AwakeningKiller";
    Awakening[Awakening["EnhanceKiller"] = 41] = "EnhanceKiller";
    Awakening[Awakening["RedeemableKiller"] = 42] = "RedeemableKiller";
    Awakening[Awakening["SevenCombo"] = 43] = "SevenCombo";
    Awakening[Awakening["Guardbreak"] = 44] = "Guardbreak";
    Awakening[Awakening["FUA"] = 45] = "FUA";
    Awakening[Awakening["TeamHP"] = 46] = "TeamHP";
    Awakening[Awakening["TeamRCV"] = 47] = "TeamRCV";
    Awakening[Awakening["VDP"] = 48] = "VDP";
    Awakening[Awakening["EquipAssist"] = 49] = "EquipAssist";
    Awakening[Awakening["SuperFUA"] = 50] = "SuperFUA";
    Awakening[Awakening["RainbowHaste"] = 51] = "RainbowHaste";
    Awakening[Awakening["UnbindablePlus"] = 52] = "UnbindablePlus";
    Awakening[Awakening["TimeExtendPlus"] = 53] = "TimeExtendPlus";
    Awakening[Awakening["CloudResist"] = 54] = "CloudResist";
    Awakening[Awakening["ScrollResist"] = 55] = "ScrollResist";
    Awakening[Awakening["SkillBoostPlus"] = 56] = "SkillBoostPlus";
    Awakening[Awakening["HP80"] = 57] = "HP80";
    Awakening[Awakening["HP50"] = 58] = "HP50";
    Awakening[Awakening["LShield"] = 59] = "LShield";
    Awakening[Awakening["LUnlock"] = 60] = "LUnlock";
    Awakening[Awakening["TenCombo"] = 61] = "TenCombo";
    Awakening[Awakening["ComboOrb"] = 62] = "ComboOrb";
    Awakening[Awakening["Voice"] = 63] = "Voice";
    Awakening[Awakening["Dungeon"] = 64] = "Dungeon";
    Awakening[Awakening["HpMinus"] = 65] = "HpMinus";
    Awakening[Awakening["AtkMinus"] = 66] = "AtkMinus";
    Awakening[Awakening["RcvMinus"] = 67] = "RcvMinus";
    Awakening[Awakening["BlindResistPlus"] = 68] = "BlindResistPlus";
    Awakening[Awakening["JammerResistPlus"] = 69] = "JammerResistPlus";
    Awakening[Awakening["PoisonResistPlus"] = 70] = "PoisonResistPlus";
    Awakening[Awakening["JammerSkyfall"] = 71] = "JammerSkyfall";
    Awakening[Awakening["PoisonSkyfall"] = 72] = "PoisonSkyfall";
    Awakening[Awakening["Unknown73"] = 73] = "Unknown73";
    Awakening[Awakening["Unknown74"] = 74] = "Unknown74";
    Awakening[Awakening["Unknown75"] = 75] = "Unknown75";
    Awakening[Awakening["Unknown76"] = 76] = "Unknown76";
})(Awakening || (Awakening = {}));
var Card = /** @class */ (function () {
    function Card() {
        this.id = 0;
        this.name = "";
        this.aliases = [];
        this.attribute = ColorAttribute.None;
        this.subattribute = ColorAttribute.None;
        this.isEvoReversable = false;
        this.types = [];
        this.starCount = 0;
        this.cost = 0;
        this.maxLevel = 0;
        this.feedExpPerLevel = 0;
        this.sellPricePerLevel = 0;
        this.minHp = 0;
        this.maxHp = 0;
        this.minAtk = 0;
        this.maxAtk = 0;
        this.minRcv = 0;
        this.maxRcv = 0;
        this.expCurve = 0;
        this.activeSkillId = 0;
        this.leaderSkillId = 0;
        this.turnTimer = 0;
        this.evoFromId = 0;
        this.evoMaterials = [];
        this.devoMaterials = [];
        this.enemySkills = [];
        this.awakenings = [];
        this.superAwakenings = [];
        this.latentKillers = [];
        this.isLimitBreakable = false;
        this.limitBreakStatGain = 0;
        this.isAlt = false;
        this.alternateVersions = [];
        this.exchangesTo = [];
        this.exchangesFrom = [];
        this.voiceId = 0;
        this.orbSkin = 0;
        this.groups = [];
    }
    return Card;
}());
var CardEnemySkill = /** @class */ (function () {
    function CardEnemySkill() {
    }
    return CardEnemySkill;
}());
var CardGroup = /** @class */ (function () {
    function CardGroup() {
    }
    return CardGroup;
}());
var ImageMetadata = /** @class */ (function () {
    function ImageMetadata() {
    }
    return ImageMetadata;
}());
var CardType;
(function (CardType) {
    CardType[CardType["None"] = -1] = "None";
    CardType[CardType["Evo"] = 0] = "Evo";
    CardType[CardType["Balanced"] = 1] = "Balanced";
    CardType[CardType["Physical"] = 2] = "Physical";
    CardType[CardType["Healer"] = 3] = "Healer";
    CardType[CardType["Dragon"] = 4] = "Dragon";
    CardType[CardType["God"] = 5] = "God";
    CardType[CardType["Attacker"] = 6] = "Attacker";
    CardType[CardType["Devil"] = 7] = "Devil";
    CardType[CardType["Machine"] = 8] = "Machine";
    CardType[CardType["UNKNOWN9"] = 9] = "UNKNOWN9";
    CardType[CardType["UNKNOWN10"] = 10] = "UNKNOWN10";
    CardType[CardType["UNKNOWN11"] = 11] = "UNKNOWN11";
    CardType[CardType["Awakening"] = 12] = "Awakening";
    CardType[CardType["UNKNOWN13"] = 13] = "UNKNOWN13";
    CardType[CardType["Enhance"] = 14] = "Enhance";
    CardType[CardType["Redeemable"] = 15] = "Redeemable";
})(CardType || (CardType = {}));
var CollabGroup;
(function (CollabGroup) {
    CollabGroup[CollabGroup["None"] = 0] = "None";
    CollabGroup[CollabGroup["Ragnarok"] = 1] = "Ragnarok";
    CollabGroup[CollabGroup["Taiko"] = 2] = "Taiko";
    CollabGroup[CollabGroup["ECO"] = 3] = "ECO";
    CollabGroup[CollabGroup["UNKNOWN4"] = 4] = "UNKNOWN4";
    CollabGroup[CollabGroup["Gunma"] = 5] = "Gunma";
    CollabGroup[CollabGroup["FFCD"] = 6] = "FFCD";
    CollabGroup[CollabGroup["Necky"] = 7] = "Necky";
    CollabGroup[CollabGroup["Punt"] = 8] = "Punt";
    CollabGroup[CollabGroup["Android"] = 9] = "Android";
    CollabGroup[CollabGroup["Shinrabansho"] = 10] = "Shinrabansho";
    CollabGroup[CollabGroup["Kapibara"] = 11] = "Kapibara";
    CollabGroup[CollabGroup["CrazyTower"] = 12] = "CrazyTower";
    CollabGroup[CollabGroup["TenkaTrigger"] = 13] = "TenkaTrigger";
    CollabGroup[CollabGroup["EVA"] = 14] = "EVA";
    CollabGroup[CollabGroup["SevenEleven"] = 15] = "SevenEleven";
    CollabGroup[CollabGroup["ClashOfClans"] = 16] = "ClashOfClans";
    CollabGroup[CollabGroup["GrooveCoaster"] = 17] = "GrooveCoaster";
    CollabGroup[CollabGroup["ROACE"] = 18] = "ROACE";
    CollabGroup[CollabGroup["DragonsDogma"] = 19] = "DragonsDogma";
    CollabGroup[CollabGroup["Takaoka"] = 20] = "Takaoka";
    CollabGroup[CollabGroup["BattleCats"] = 21] = "BattleCats";
    CollabGroup[CollabGroup["Batman"] = 22] = "Batman";
    CollabGroup[CollabGroup["BaskinRobbins"] = 23] = "BaskinRobbins";
    CollabGroup[CollabGroup["AngryBirds"] = 24] = "AngryBirds";
    CollabGroup[CollabGroup["UNKNOWN25"] = 25] = "UNKNOWN25";
    CollabGroup[CollabGroup["HxH"] = 26] = "HxH";
    CollabGroup[CollabGroup["HelloKitty"] = 27] = "HelloKitty";
    CollabGroup[CollabGroup["PADBT"] = 28] = "PADBT";
    CollabGroup[CollabGroup["BEAMS"] = 29] = "BEAMS";
    CollabGroup[CollabGroup["Dragonball"] = 30] = "Dragonball";
    CollabGroup[CollabGroup["SaintSeiya"] = 31] = "SaintSeiya";
    CollabGroup[CollabGroup["RoadToDragons"] = 32] = "RoadToDragons";
    CollabGroup[CollabGroup["DivineGate"] = 33] = "DivineGate";
    CollabGroup[CollabGroup["SummonsBoard"] = 34] = "SummonsBoard";
    CollabGroup[CollabGroup["Picotto"] = 35] = "Picotto";
    CollabGroup[CollabGroup["Bikkuriman"] = 36] = "Bikkuriman";
    CollabGroup[CollabGroup["AngryBirdsEpic"] = 37] = "AngryBirdsEpic";
    CollabGroup[CollabGroup["DC"] = 38] = "DC";
    CollabGroup[CollabGroup["Chibis1"] = 39] = "Chibis1";
    CollabGroup[CollabGroup["NorthStar"] = 40] = "NorthStar";
    CollabGroup[CollabGroup["Chibis2"] = 41] = "Chibis2";
    CollabGroup[CollabGroup["UNKNOWN42"] = 42] = "UNKNOWN42";
    CollabGroup[CollabGroup["UNKNOWN43"] = 43] = "UNKNOWN43";
    CollabGroup[CollabGroup["Chibis3"] = 44] = "Chibis3";
    CollabGroup[CollabGroup["FinalFantasy"] = 45] = "FinalFantasy";
    CollabGroup[CollabGroup["GhostInTheShell"] = 46] = "GhostInTheShell";
    CollabGroup[CollabGroup["DuelMasters"] = 47] = "DuelMasters";
    CollabGroup[CollabGroup["AttackOnTitan"] = 48] = "AttackOnTitan";
    CollabGroup[CollabGroup["NinjaHattori"] = 49] = "NinjaHattori";
    CollabGroup[CollabGroup["ShohenSunday"] = 50] = "ShohenSunday";
    CollabGroup[CollabGroup["UNKNOWN51"] = 51] = "UNKNOWN51";
    CollabGroup[CollabGroup["Bleach"] = 52] = "Bleach";
    CollabGroup[CollabGroup["BatmanVSuperman"] = 53] = "BatmanVSuperman";
    CollabGroup[CollabGroup["UNKNOWN54"] = 54] = "UNKNOWN54";
    CollabGroup[CollabGroup["PhoenixWright"] = 55] = "PhoenixWright";
    CollabGroup[CollabGroup["Kenshin"] = 56] = "Kenshin";
    CollabGroup[CollabGroup["Pepper"] = 57] = "Pepper";
    CollabGroup[CollabGroup["Kinnikuman"] = 58] = "Kinnikuman";
    CollabGroup[CollabGroup["NappingPrincess"] = 59] = "NappingPrincess";
    CollabGroup[CollabGroup["Magazine"] = 60] = "Magazine";
    CollabGroup[CollabGroup["MonsterHunter"] = 61] = "MonsterHunter";
    CollabGroup[CollabGroup["CoroCoroMagaize"] = 62] = "CoroCoroMagaize";
    CollabGroup[CollabGroup["Voltron"] = 63] = "Voltron";
    CollabGroup[CollabGroup["DCUniverse"] = 64] = "DCUniverse";
    CollabGroup[CollabGroup["FMA"] = 65] = "FMA";
    CollabGroup[CollabGroup["KOF"] = 66] = "KOF";
    CollabGroup[CollabGroup["YuYuHakusho"] = 67] = "YuYuHakusho";
    CollabGroup[CollabGroup["Persona"] = 68] = "Persona";
    CollabGroup[CollabGroup["CocaCola"] = 69] = "CocaCola";
    CollabGroup[CollabGroup["MTG"] = 70] = "MTG";
    CollabGroup[CollabGroup["ChronoMaGia"] = 71] = "ChronoMaGia";
    CollabGroup[CollabGroup["SeventhRebirth"] = 72] = "SeventhRebirth";
    CollabGroup[CollabGroup["CalcioFantasista"] = 73] = "CalcioFantasista";
    CollabGroup[CollabGroup["PowerPro"] = 74] = "PowerPro";
    CollabGroup[CollabGroup["Gintama"] = 75] = "Gintama";
    CollabGroup[CollabGroup["SAO"] = 76] = "SAO";
    CollabGroup[CollabGroup["KamenRider"] = 77] = "KamenRider";
    CollabGroup[CollabGroup["YokaiWatch"] = 78] = "YokaiWatch";
    CollabGroup[CollabGroup["Fate"] = 79] = "Fate";
    CollabGroup[CollabGroup["StreetFighterV"] = 80] = "StreetFighterV";
    CollabGroup[CollabGroup["UNKNOWN81"] = 81] = "UNKNOWN81";
    CollabGroup[CollabGroup["UNKNOWN82"] = 82] = "UNKNOWN82";
    CollabGroup[CollabGroup["ShamanKing"] = 83] = "ShamanKing";
    CollabGroup[CollabGroup["UNKNOWN84"] = 84] = "UNKNOWN84";
    CollabGroup[CollabGroup["UNKNOWN85"] = 85] = "UNKNOWN85";
    CollabGroup[CollabGroup["UNKNOWN86"] = 86] = "UNKNOWN86";
    CollabGroup[CollabGroup["UNKNOWN87"] = 87] = "UNKNOWN87";
    CollabGroup[CollabGroup["UNKNOWN88"] = 88] = "UNKNOWN88";
    CollabGroup[CollabGroup["UNKNOWN89"] = 89] = "UNKNOWN89";
    CollabGroup[CollabGroup["Alts"] = 999] = "Alts";
    CollabGroup[CollabGroup["DragonboundsDragoncallers"] = 10001] = "DragonboundsDragoncallers";
})(CollabGroup || (CollabGroup = {}));
var ColorAttribute;
(function (ColorAttribute) {
    ColorAttribute[ColorAttribute["None"] = -1] = "None";
    ColorAttribute[ColorAttribute["Fire"] = 0] = "Fire";
    ColorAttribute[ColorAttribute["Water"] = 1] = "Water";
    ColorAttribute[ColorAttribute["Wood"] = 2] = "Wood";
    ColorAttribute[ColorAttribute["Light"] = 3] = "Light";
    ColorAttribute[ColorAttribute["Dark"] = 4] = "Dark";
    ColorAttribute[ColorAttribute["Heal"] = 5] = "Heal";
    ColorAttribute[ColorAttribute["Jammer"] = 6] = "Jammer";
    ColorAttribute[ColorAttribute["Poison"] = 7] = "Poison";
    ColorAttribute[ColorAttribute["MortalPoison"] = 8] = "MortalPoison";
    ColorAttribute[ColorAttribute["Bomb"] = 9] = "Bomb";
})(ColorAttribute || (ColorAttribute = {}));
var Dungeon = /** @class */ (function () {
    function Dungeon() {
        this.id = -1;
        this.name = "ERRORNO";
        this.floors = [];
    }
    return Dungeon;
}());
var DungeonDrop = /** @class */ (function () {
    function DungeonDrop() {
        this.id = -1;
        this.isRare = false;
    }
    return DungeonDrop;
}());
var DungeonFloor = /** @class */ (function () {
    function DungeonFloor() {
        this.floorNumber = -1;
        this.name = "ERRORNO";
        this.sta = 0;
        this.battles = 0;
        this.beginningData = [];
        this.drops = [];
        this.endingData = [];
    }
    return DungeonFloor;
}());
var EnemySkill = /** @class */ (function () {
    function EnemySkill() {
        this.skillArgs = [];
        this.ratio = 100;
        this.aiArgs = [100, 100, 10000, 0, 0];
    }
    return EnemySkill;
}());
var EvolutionTreeDetails = /** @class */ (function () {
    function EvolutionTreeDetails(baseId) {
        this.cards = [];
        this.baseId = baseId;
    }
    return EvolutionTreeDetails;
}());
var EvoNode = /** @class */ (function () {
    function EvoNode(card) {
        this.card = card;
        this.children = [];
        this.materials = [];
    }
    return EvoNode;
}());
var ExchangeInfo = /** @class */ (function () {
    function ExchangeInfo() {
    }
    return ExchangeInfo;
}());
var InheritanceType;
(function (InheritanceType) {
    InheritanceType[InheritanceType["None"] = 0] = "None";
    InheritanceType[InheritanceType["UNKNOWN1"] = 1] = "UNKNOWN1";
    InheritanceType[InheritanceType["Unassistable1"] = 2] = "Unassistable1";
    InheritanceType[InheritanceType["Assistance1"] = 3] = "Assistance1";
    InheritanceType[InheritanceType["UNKNOWN4"] = 4] = "UNKNOWN4";
    InheritanceType[InheritanceType["UNKNOWN5"] = 5] = "UNKNOWN5";
    InheritanceType[InheritanceType["Unassistable2"] = 6] = "Unassistable2";
    InheritanceType[InheritanceType["Assistance2"] = 7] = "Assistance2";
})(InheritanceType || (InheritanceType = {}));
var LatentAwakening;
(function (LatentAwakening) {
    // WARNING: There are official IDs that you can extract from player_info; however, I don't know what those are
    // Do not rely on any of these IDs being correct without doing research. For now they're arbitrary.
    LatentAwakening[LatentAwakening["None"] = -1] = "None";
    LatentAwakening[LatentAwakening["AllStats"] = 0] = "AllStats";
    LatentAwakening[LatentAwakening["EvoKiller"] = 1] = "EvoKiller";
    LatentAwakening[LatentAwakening["AwakenKiller"] = 2] = "AwakenKiller";
    LatentAwakening[LatentAwakening["EnhancerKiller"] = 3] = "EnhancerKiller";
    LatentAwakening[LatentAwakening["RedeemableKiller"] = 4] = "RedeemableKiller";
    LatentAwakening[LatentAwakening["GodKiller"] = 5] = "GodKiller";
    LatentAwakening[LatentAwakening["DragonKiller"] = 6] = "DragonKiller";
    LatentAwakening[LatentAwakening["DevilKiller"] = 7] = "DevilKiller";
    LatentAwakening[LatentAwakening["MachineKiller"] = 8] = "MachineKiller";
    LatentAwakening[LatentAwakening["BalancedKiller"] = 9] = "BalancedKiller";
    LatentAwakening[LatentAwakening["AttackerKiller"] = 10] = "AttackerKiller";
    LatentAwakening[LatentAwakening["PhysicalKiller"] = 11] = "PhysicalKiller";
    LatentAwakening[LatentAwakening["HealerKiller"] = 12] = "HealerKiller";
    LatentAwakening[LatentAwakening["HpPlus"] = 13] = "HpPlus";
    LatentAwakening[LatentAwakening["AtkPlus"] = 14] = "AtkPlus";
    LatentAwakening[LatentAwakening["RcvPlus"] = 15] = "RcvPlus";
    LatentAwakening[LatentAwakening["TimeExtendPlus"] = 16] = "TimeExtendPlus";
    LatentAwakening[LatentAwakening["FireResistPlus"] = 17] = "FireResistPlus";
    LatentAwakening[LatentAwakening["WaterResistPlus"] = 18] = "WaterResistPlus";
    LatentAwakening[LatentAwakening["WoodResistPlus"] = 19] = "WoodResistPlus";
    LatentAwakening[LatentAwakening["LightResistPlus"] = 20] = "LightResistPlus";
    LatentAwakening[LatentAwakening["DarkResistPlus"] = 21] = "DarkResistPlus";
    LatentAwakening[LatentAwakening["Hp"] = 22] = "Hp";
    LatentAwakening[LatentAwakening["Atk"] = 23] = "Atk";
    LatentAwakening[LatentAwakening["Rcv"] = 24] = "Rcv";
    LatentAwakening[LatentAwakening["TimeExtend"] = 25] = "TimeExtend";
    LatentAwakening[LatentAwakening["AutoHeal"] = 26] = "AutoHeal";
    LatentAwakening[LatentAwakening["FireResist"] = 27] = "FireResist";
    LatentAwakening[LatentAwakening["WaterResist"] = 28] = "WaterResist";
    LatentAwakening[LatentAwakening["WoodResist"] = 29] = "WoodResist";
    LatentAwakening[LatentAwakening["LightResist"] = 30] = "LightResist";
    LatentAwakening[LatentAwakening["DarkResist"] = 31] = "DarkResist";
    LatentAwakening[LatentAwakening["SkillDelayResist"] = 32] = "SkillDelayResist";
})(LatentAwakening || (LatentAwakening = {}));
var Model = /** @class */ (function () {
    function Model() {
        this.cards = {};
        this.cardMetadata = {};
        this.apkMetadata = {};
        this.evoTrees = {};
        this.enemySkills = {};
        this.playerSkills = [];
        this.cardGroups = [];
        this.usedCollabs = [];
        this.allExchanges = [];
        this.dungeons = {};
    }
    return Model;
}());
var PlayerSkill = /** @class */ (function () {
    function PlayerSkill() {
        this.cardIds = [];
        this.parsedEffects = [];
        // Deprecated
        this.Effects = [];
        this.orbColours = []; //dumb attribute to cater to orbchangers without redoing the skill system
    }
    return PlayerSkill;
}());
var SkillEffect;
(function (SkillEffect) {
    SkillEffect[SkillEffect["SingleTarget"] = 1] = "SingleTarget";
    SkillEffect[SkillEffect["AllTarget"] = 2] = "AllTarget";
    SkillEffect[SkillEffect["ElementalTarget"] = 3] = "ElementalTarget";
    SkillEffect[SkillEffect["Laser"] = 4] = "Laser";
    SkillEffect[SkillEffect["Drain"] = 5] = "Drain";
    SkillEffect[SkillEffect["Shield"] = 6] = "Shield";
    SkillEffect[SkillEffect["ElementalShield"] = 7] = "ElementalShield";
    SkillEffect[SkillEffect["Poison"] = 8] = "Poison";
    SkillEffect[SkillEffect["CTW"] = 9] = "CTW";
    SkillEffect[SkillEffect["Gravity"] = 10] = "Gravity";
    SkillEffect[SkillEffect["TrueGravity"] = 11] = "TrueGravity";
    SkillEffect[SkillEffect["HealInstant"] = 12] = "HealInstant";
    SkillEffect[SkillEffect["HealOverTime"] = 13] = "HealOverTime";
    SkillEffect[SkillEffect["OrbRefresh"] = 14] = "OrbRefresh";
    SkillEffect[SkillEffect["UniversalOrbChanging"] = 15] = "UniversalOrbChanging";
    SkillEffect[SkillEffect["OrbChange"] = 16] = "OrbChange";
    SkillEffect[SkillEffect["BoardChange"] = 17] = "BoardChange";
    SkillEffect[SkillEffect["ColumnChange"] = 18] = "ColumnChange";
    SkillEffect[SkillEffect["RowChange"] = 19] = "RowChange";
    SkillEffect[SkillEffect["OrbSpawn"] = 20] = "OrbSpawn";
    SkillEffect[SkillEffect["Delay"] = 21] = "Delay";
    SkillEffect[SkillEffect["DefenseReduction"] = 22] = "DefenseReduction";
    SkillEffect[SkillEffect["RCVBuff"] = 23] = "RCVBuff";
    SkillEffect[SkillEffect["ATKBuff"] = 24] = "ATKBuff";
    SkillEffect[SkillEffect["AttrBuff"] = 25] = "AttrBuff";
    SkillEffect[SkillEffect["TypeBuff"] = 26] = "TypeBuff";
    SkillEffect[SkillEffect["GemstoneBuff"] = 27] = "GemstoneBuff";
    SkillEffect[SkillEffect["MassAttack"] = 28] = "MassAttack";
    SkillEffect[SkillEffect["EnhanceOrb"] = 29] = "EnhanceOrb";
    SkillEffect[SkillEffect["Counterattack"] = 30] = "Counterattack";
    SkillEffect[SkillEffect["Suicide"] = 31] = "Suicide";
    SkillEffect[SkillEffect["Leadswap"] = 32] = "Leadswap";
    SkillEffect[SkillEffect["Bindclear"] = 33] = "Bindclear";
    SkillEffect[SkillEffect["ABindclear"] = 34] = "ABindclear";
    SkillEffect[SkillEffect["RandomSkill"] = 35] = "RandomSkill";
    SkillEffect[SkillEffect["Skyfall"] = 36] = "Skyfall";
    SkillEffect[SkillEffect["EnhancedSkyfall"] = 37] = "EnhancedSkyfall";
    SkillEffect[SkillEffect["NoSkyfall"] = 38] = "NoSkyfall";
    SkillEffect[SkillEffect["TE"] = 39] = "TE";
    SkillEffect[SkillEffect["SelfAttrChange"] = 40] = "SelfAttrChange";
    SkillEffect[SkillEffect["EnemyAttrChange"] = 41] = "EnemyAttrChange";
    SkillEffect[SkillEffect["Haste"] = 42] = "Haste";
    SkillEffect[SkillEffect["Lock"] = 43] = "Lock";
    SkillEffect[SkillEffect["Unlock"] = 44] = "Unlock";
    SkillEffect[SkillEffect["AddCombo"] = 45] = "AddCombo";
    SkillEffect[SkillEffect["AbsorbVoid"] = 46] = "AbsorbVoid";
    SkillEffect[SkillEffect["ColourVoid"] = 47] = "ColourVoid";
    SkillEffect[SkillEffect["GrudgeStrike"] = 48] = "GrudgeStrike";
    //LS Effects
    SkillEffect[SkillEffect["LSColourBoost"] = 49] = "LSColourBoost";
    SkillEffect[SkillEffect["LSTypeBoost"] = 50] = "LSTypeBoost";
    SkillEffect[SkillEffect["LSHPConditional"] = 51] = "LSHPConditional";
    SkillEffect[SkillEffect["LSTeamConditional"] = 52] = "LSTeamConditional";
    SkillEffect[SkillEffect["LSCollabConditional"] = 53] = "LSCollabConditional";
    SkillEffect[SkillEffect["LSColourmatch"] = 54] = "LSColourmatch";
    SkillEffect[SkillEffect["LSLinkedOrbs"] = 55] = "LSLinkedOrbs";
    SkillEffect[SkillEffect["LSCombo"] = 56] = "LSCombo";
    SkillEffect[SkillEffect["LSExactCombo"] = 57] = "LSExactCombo";
    SkillEffect[SkillEffect["LSSkillUse"] = 58] = "LSSkillUse";
    SkillEffect[SkillEffect["LSUnconditional"] = 59] = "LSUnconditional";
    SkillEffect[SkillEffect["LSDetrimental"] = 60] = "LSDetrimental";
    SkillEffect[SkillEffect["LSCoop"] = 61] = "LSCoop";
    SkillEffect[SkillEffect["LSShield"] = 62] = "LSShield";
    SkillEffect[SkillEffect["LSHeartcross"] = 63] = "LSHeartcross";
    SkillEffect[SkillEffect["LSColourcross"] = 64] = "LSColourcross";
    SkillEffect[SkillEffect["LSElementalShield"] = 65] = "LSElementalShield";
    SkillEffect[SkillEffect["LSBonusAttack"] = 66] = "LSBonusAttack";
    SkillEffect[SkillEffect["LSAutoheal"] = 67] = "LSAutoheal";
    SkillEffect[SkillEffect["LSResolve"] = 68] = "LSResolve";
    SkillEffect[SkillEffect["LSTimeExtend"] = 69] = "LSTimeExtend";
    SkillEffect[SkillEffect["LSCounter"] = 70] = "LSCounter";
    SkillEffect[SkillEffect["LSDropRate"] = 71] = "LSDropRate";
    SkillEffect[SkillEffect["LSCoinMult"] = 72] = "LSCoinMult";
    SkillEffect[SkillEffect["LSExpMult"] = 73] = "LSExpMult";
    SkillEffect[SkillEffect["LS5OE1"] = 74] = "LS5OE1";
    SkillEffect[SkillEffect["LS4HeartRCV"] = 75] = "LS4HeartRCV";
    SkillEffect[SkillEffect["LSMinimumMatch"] = 76] = "LSMinimumMatch";
    SkillEffect[SkillEffect["LS7X6"] = 77] = "LS7X6";
    SkillEffect[SkillEffect["LSNoSkyfall"] = 78] = "LSNoSkyfall";
    SkillEffect[SkillEffect["LSOrbRemain"] = 79] = "LSOrbRemain";
    SkillEffect[SkillEffect["LSFixedMovetime"] = 80] = "LSFixedMovetime";
    SkillEffect[SkillEffect["LSTaiko"] = 81] = "LSTaiko";
})(SkillEffect || (SkillEffect = {}));
var SpawnPattern;
(function (SpawnPattern) {
    SpawnPattern[SpawnPattern["L"] = 0] = "L";
    SpawnPattern[SpawnPattern["Cross"] = 1] = "Cross";
    SpawnPattern[SpawnPattern["VDP"] = 2] = "VDP";
    SpawnPattern[SpawnPattern["OuterRing"] = 3] = "OuterRing";
    SpawnPattern[SpawnPattern["Corners"] = 4] = "Corners";
})(SpawnPattern || (SpawnPattern = {}));
var DateConverter = /** @class */ (function () {
    function DateConverter() {
    }
    DateConverter.updateTime = function () {
        this.now(new Date().getTime());
    };
    DateConverter.isForever = function (time) {
        if (time.getUTCFullYear() > 2036) {
            return true;
        }
        return false;
    };
    DateConverter.convertToDate = function (input) {
        if (input == "") {
            return null;
        }
        var year = "20" + input.substr(0, 2);
        var month = input.substr(2, 2);
        var day = input.substr(4, 2);
        var hour = input.substr(6, 2);
        var minute = input.substr(8, 2);
        var second = input.substr(10, 2);
        var utcOffset = Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second), 0);
        return new Date(utcOffset + 8 * 60 * 60 * 1000);
    };
    DateConverter.shouldDisplayCountdown = function (end) {
        var time = end.getTime();
        var now = new Date().getTime(); // Using this to avoid recalculating if we should or shouldn't
        if (now > time) {
            // Already ended
            return false;
        }
        if (time > now + this.limit) {
            // More than 1 week
            return false;
        }
        return true;
    };
    DateConverter.getCountdown = function (end) {
        var time = end.getTime();
        time -= this.now();
        if (time < 0 || time > this.limit) {
            return "--:--:--";
        }
        var ret = "";
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var days = Math.floor(time / day);
        time -= day * days;
        var hours = Math.floor(time / hour);
        time -= hour * hours;
        var minutes = Math.floor(time / minute);
        time -= minute * minutes;
        var seconds = Math.floor(time / second);
        time -= second * seconds;
        if (days > 0) {
            ret += days;
            if (days == 1) {
                ret += " day";
            }
            else {
                ret += " days";
            }
            if (hour > 0) {
                ret += " and ";
                ret += hours;
                if (hour == 1) {
                    ret += " hour";
                }
                else {
                    ret += " hours";
                }
            }
            return ret;
        }
        function pad(time) {
            return ("00" + time).slice(-2);
        }
        return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    };
    DateConverter.now = ko.observable(new Date().getTime());
    DateConverter.limit = (90 * 24 * 60 * 60 * 1000);
    return DateConverter;
}());
var ModelBuilder = /** @class */ (function () {
    function ModelBuilder() {
        this.model = new Model();
        this.aliases = new CardAliases();
        this.cardIdsBySkillId = {};
    }
    ModelBuilder.prototype.buildCard = function (cardData) {
        try {
            var card = this.buildCardInternal(cardData);
            this.buildEvoTree(card);
        }
        catch (e) {
            throw "Failed to parse card data (" + JSON.stringify(cardData) + ") - " + e;
        }
    };
    ModelBuilder.prototype.buildPlayerSkillData = function (playerSkillData) {
        var playerSkills = new Array(playerSkillData.length);
        for (var i = 0; i < playerSkillData.length; i++) {
            var reader = new RawDataReader(playerSkillData[i]);
            var skill = new PlayerSkill();
            skill.id = i;
            skill.name = reader.readString();
            skill.description = reader.readString();
            skill.internalEffectId = reader.readNumber();
            skill.maxLevel = reader.readNumber();
            skill.initialCooldown = reader.readNumber();
            skill.maxCooldown = skill.initialCooldown - skill.maxLevel + 1;
            reader.readString(); // Seems always empty
            var data = new Array(reader.countRemaining());
            for (var j = 0; j < data.length; j++) {
                data[j] = reader.readNumber();
            }
            skill.internalEffectArguments = data;
            playerSkills[i] = skill;
        }
        // for (let i of playerSkills) {
        //     playerSkills[i.id].Effects = this.parseEffect(i.id, playerSkills);
        //     //dumb way of assigning orbchange colours without redoing the whole skill system
        //     if (playerSkills[i.id].Effects.indexOf(SkillEffect.UniversalOrbChanging) > -1){
        //         playerSkills[i.id].orbColours = this.parseOrbColours(i.id, playerSkills);
        //     }
        // }
        this.model.playerSkills = playerSkills;
    };
    //Todo, redo system, this is ugly af
    //Deprecated bullshit. Remove
    ModelBuilder.prototype.parseEffect = function (skillID, p) {
        var ret = [];
        var i = p[skillID].internalEffectId;
        if (i == 116 || i == 138) {
            for (var j = 0; j < p[skillID].internalEffectArguments.length; j++) {
                ret = ret.concat(this.parseEffect(p[skillID].internalEffectArguments[j], p));
            }
        }
        //Actives
        if (i == 2 || i == 35 || i == 37 || i == 55 || i == 59 || i == 84 || i == 86 || (i == 110 && p[skillID].internalEffectArguments[0] == 1) || i == 115 || (i == 144 && p[skillID].internalEffectArguments[2] == 1) || i == 188) {
            ret.push(SkillEffect[SkillEffect[1]]); //singletarget
        }
        if (i == 1 || i == 56 || i == 58 || i == 85 || i == 87 || (i == 110 && p[skillID].internalEffectArguments[0] == 0) || (i == 144 && p[skillID].internalEffectArguments[2] == 0)) {
            ret.push(SkillEffect[SkillEffect[2]]); //alltarget
        }
        if (i == 42) {
            ret.push(SkillEffect[SkillEffect[3]]); //elemental target
        }
        if (i == 55 || i == 56 || i == 188) {
            ret.push(SkillEffect[SkillEffect[4]]); //laser
        }
        if (i == 35 || i == 115) {
            ret.push(SkillEffect[SkillEffect[5]]); //drain
        }
        if (i == 3 || (i == 156 && p[skillID].internalEffectArguments[4] == 3)) {
            ret.push(SkillEffect[SkillEffect[6]]); //shield
        }
        if (i == 21) {
            ret.push(SkillEffect[SkillEffect[7]]); //elemental shield
        }
        if (i == 4) {
            ret.push(SkillEffect[SkillEffect[8]]); //poison
        }
        if (i == 5) {
            ret.push(SkillEffect[SkillEffect[9]]); //ctw
        }
        if (i == 6) {
            ret.push(SkillEffect[SkillEffect[10]]); //gravity
        }
        if (i == 161) {
            ret.push(SkillEffect[SkillEffect[11]]); //true grav
        }
        if (i == 7 || i == 8 || (i == 117 && (p[skillID].internalEffectArguments[1] > 0 || p[skillID].internalEffectArguments[2] > 0 || p[skillID].internalEffectArguments[3] > 0)) || i == 145 || (i == 156 && p[skillID].internalEffectArguments[4] == 1)) {
            ret.push(SkillEffect[SkillEffect[12]]); //instant heal
        }
        if (i == 179) {
            ret.push(SkillEffect[SkillEffect[13]]); //recover over turns
        }
        if (i == 10) {
            ret.push(SkillEffect[SkillEffect[14]]); //orb refresh
        }
        if (i == 9 || i == 20 || i == 154) {
            ret.push(SkillEffect[SkillEffect[15]]); //uni orbchange
            ret.push(SkillEffect[SkillEffect[16]]); //orbchange
        }
        if (i == 71) {
            ret.push(SkillEffect[SkillEffect[15]]); //uni orbchange
            ret.push(SkillEffect[SkillEffect[17]]); //boardchange
        }
        if (i == 127) {
            ret.push(SkillEffect[SkillEffect[15]]); //uni orbchange
            ret.push(SkillEffect[SkillEffect[18]]); //col change
        }
        if (i == 128) {
            ret.push(SkillEffect[SkillEffect[15]]); //uni orbchange
            ret.push(SkillEffect[SkillEffect[19]]); //rowchange
        }
        if (i == 141) {
            ret.push(SkillEffect[SkillEffect[15]]); //uni orbchange
            ret.push(SkillEffect[SkillEffect[20]]); //random spawn
        }
        if (i == 18) {
            ret.push(SkillEffect[SkillEffect[21]]); //delay
        }
        if (i == 19) {
            ret.push(SkillEffect[SkillEffect[22]]); //def reduction
        }
        if (i == 50 && p[skillID].internalEffectArguments[1] == 5) {
            ret.push(SkillEffect[SkillEffect[23]]); //rcv buff
        }
        if (i == 156 && p[skillID].internalEffectArguments[4] == 2) {
            ret.push(SkillEffect[SkillEffect[24]]); //atk buff
        }
        if ((i == 50 && p[skillID].internalEffectArguments[1] != 5) || i == 90) {
            ret.push(SkillEffect[SkillEffect[25]]); //attr buff
        }
        if (i == 88 || i == 92) {
            ret.push(SkillEffect[SkillEffect[26]]); //type buff
        }
        if (i == 156) {
            ret.push(SkillEffect[SkillEffect[27]]); //gemstone buff
        }
        if (i == 51) {
            ret.push(SkillEffect[SkillEffect[28]]); //mass attack
        }
        if (i == 52 || i == 91 || i == 140) {
            ret.push(SkillEffect[SkillEffect[29]]); //orb enhance
        }
        if (i == 60) {
            ret.push(SkillEffect[SkillEffect[30]]); //counterattack
        }
        if (i == 84 || i == 85 || i == 86 || i == 87) {
            ret.push(SkillEffect[SkillEffect[31]]); //suicide
        }
        if (i == 93) {
            ret.push(SkillEffect[SkillEffect[32]]); //leadswap
        }
        if (i == 117 && p[skillID].internalEffectArguments[0] > 0) {
            ret.push(SkillEffect[SkillEffect[33]]); //bindclear
        }
        if (i == 117 && p[skillID].internalEffectArguments[4] > 0) {
            ret.push(SkillEffect[SkillEffect[34]]); //awoken bindclear
        }
        if (i == 118) {
            ret.push(SkillEffect[SkillEffect[35]]); //random skill
        }
        if (i == 126) {
            ret.push(SkillEffect[SkillEffect[36]]); //skyfall buff
        }
        if (i == 180) {
            ret.push(SkillEffect[SkillEffect[37]]); //enhanced skyfall
        }
        if (i == 184) {
            ret.push(SkillEffect[SkillEffect[38]]); //no skyfall
        }
        if (i == 132) {
            ret.push(SkillEffect[SkillEffect[39]]); //TE
        }
        if (i == 142) {
            ret.push(SkillEffect[SkillEffect[40]]); //self attr change
        }
        if (i == 153) {
            ret.push(SkillEffect[SkillEffect[41]]); //enemy attrchange
        }
        if (i == 146) {
            ret.push(SkillEffect[SkillEffect[42]]); //haste
        }
        if (i == 152) {
            ret.push(SkillEffect[SkillEffect[43]]); //lock orbs
        }
        if (i == 172) {
            ret.push(SkillEffect[SkillEffect[44]]); //unlock orbs
        }
        if (i == 160) {
            ret.push(SkillEffect[SkillEffect[45]]); //combo+
        }
        if (i == 173 && p[skillID].internalEffectArguments[3] == 1) {
            ret.push(SkillEffect[SkillEffect[46]]); //fujin
        }
        if (i == 173 && p[skillID].internalEffectArguments[1] == 1) {
            ret.push(SkillEffect[SkillEffect[47]]); //color void
        }
        if (i == 110) {
            ret.push(SkillEffect[SkillEffect[48]]); //grudge strike
        }
        //Leaderskill
        if (i == 11 || i == 28 || i == 29 || i == 40 || i == 45 || i == 46 || i == 48 || i == 49 || i == 69 || i == 73 || i == 75 || i == 76 || i == 94 || i == 96 || i == 104 || i == 111 || i == 114 || i == 136 || ((i == 121 || i == 129 || i == 139 || i == 155 || i == 163 || i == 183 || i == 186) && (p[skillID].internalEffectArguments[2] > 100 || p[skillID].internalEffectArguments[3] > 100 || p[skillID].internalEffectArguments[4] > 100) && (p[skillID].internalEffectArguments[0] != 0 || p[skillID].internalEffectArguments[0] != 31)) || ((i == 122 || i == 123 || i == 130 || i == 131 || i == 158 || i == 185) && (p[skillID].internalEffectArguments[2] > 100 || p[skillID].internalEffectArguments[3] > 100 || p[skillID].internalEffectArguments[4] > 100) && (p[skillID].internalEffectArguments[1] != 0 || p[skillID].internalEffectArguments[1] != 31))) {
            ret.push(SkillEffect.LSColourBoost);
        }
        if (i == 22 || i == 23 || i == 24 || i == 30 || i == 31 || i == 62 || i == 63 || i == 64 || i == 65 || i == 67 || i == 69 || i == 73 || i == 75 || i == 76 || i == 77 || i == 79 || i == 95 || i == 97 || i == 108 || i == 137 || ((i == 121 || i == 129 || i == 139 || i == 155 || i == 163 || i == 183 || i == 186) && (p[skillID].internalEffectArguments[2] > 100 || p[skillID].internalEffectArguments[3] > 100 || p[skillID].internalEffectArguments[4] > 100) && (p[skillID].internalEffectArguments[1] != 0 || p[skillID].internalEffectArguments[1] != 65535)) || ((i == 122 || i == 123 || i == 130 || i == 131 || i == 158 || i == 185) && (p[skillID].internalEffectArguments[2] > 100 || p[skillID].internalEffectArguments[3] > 100 || p[skillID].internalEffectArguments[4] > 100) && (p[skillID].internalEffectArguments[2] != 0 || p[skillID].internalEffectArguments[2] != 65535))) {
            ret.push(SkillEffect.LSTypeBoost);
        }
        if (i == 39 || i == 44 || i == 94 || i == 95 || i == 96 || i == 97 || i == 122 || i == 123 || i == 130 || i == 131 || i == 139 || i == 183) {
            ret.push(SkillEffect.LSHPConditional);
        }
        if (i == 125) {
            ret.push(SkillEffect.LSTeamConditional);
        }
        if (i == 175) {
            ret.push(SkillEffect.LSCollabConditional);
        }
        if (i == 61 || i == 124 || i == 164 || i == 165 || i == 170 || i == 171) {
            ret.push(SkillEffect.LSColourmatch);
        }
        if (i == 109 || i == 119 || i == 159 || i == 167 || i == 182) {
            ret.push(SkillEffect.LSLinkedOrbs);
        }
        if (i == 66 || i == 98 || i == 103 || i == 104 || i == 166 || i == 169) {
            ret.push(SkillEffect.LSCombo);
        }
        if (i == 101) {
            ret.push(SkillEffect.LSExactCombo);
        }
        if (i == 100) {
            ret.push(SkillEffect.LSSkillUse);
        }
        if (i == 26 || (i == 121 && (p[skillID].internalEffectArguments[0] == 31 || p[skillID].internalEffectArguments[1] == 65535)) || (i == 129 && (p[skillID].internalEffectArguments[2] > 100 || p[skillID].internalEffectArguments[3] > 100 || p[skillID].internalEffectArguments[4] > 100) && (p[skillID].internalEffectArguments[0] == 31 || p[skillID].internalEffectArguments[1] == 65535))) {
            ret.push(SkillEffect.LSUnconditional); //possibly also include 107
        }
        if (i == 105 || i == 106 || i == 108) {
            ret.push(SkillEffect.LSDetrimental);
        }
        if (i == 155) {
            ret.push(SkillEffect.LSCoop);
        }
        if (i == 16 || i == 169 || i == 170 || i == 171 || i == 182 || i == 183 || ((i == 129 || i == 130 || i == 131 || i == 163) && (p[skillID].internalEffectArguments[5] == 31))) {
            ret.push(SkillEffect.LSShield);
        }
        if (i == 151) {
            ret.push(SkillEffect.LSHeartcross);
        }
        if (i == 157) {
            ret.push(SkillEffect.LSColourcross);
        }
        if (i == 17 || i == 36 || ((i == 129 || i == 130 || i == 131 || i == 163) && (p[skillID].internalEffectArguments[5]) && (p[skillID].internalEffectArguments[5] != 0 || p[skillID].internalEffectArguments[5] != 31))) {
            ret.push(SkillEffect.LSElementalShield);
        }
        if (i == 12) {
            ret.push(SkillEffect.LSBonusAttack);
        }
        if (i == 13) {
            ret.push(SkillEffect.LSAutoheal);
        }
        if (i == 14) {
            ret.push(SkillEffect.LSResolve);
        }
        if (i == 15) {
            ret.push(SkillEffect.LSTimeExtend);
        }
        if (i == 41) {
            ret.push(SkillEffect.LSCounter);
        }
        if (i == 53) {
            ret.push(SkillEffect.LSDropRate);
        }
        if (i == 54) {
            ret.push(SkillEffect.LSCoinMult);
        }
        if (i == 148) {
            ret.push(SkillEffect.LSExpMult);
        }
        if (i == 150) {
            ret.push(SkillEffect.LS5OE1);
        }
        if (i == 149) {
            ret.push(SkillEffect.LS4HeartRCV);
        }
        if (i == 158) {
            ret.push(SkillEffect.LSMinimumMatch);
        }
        if (i == 162) {
            ret.push(SkillEffect.LS7X6);
        }
        if (i == 163) {
            ret.push(SkillEffect.LSNoSkyfall);
        }
        if (i == 177) {
            ret.push(SkillEffect.LSNoSkyfall);
            ret.push(SkillEffect.LSOrbRemain);
        }
        if (i == 178) {
            ret.push(SkillEffect.LSFixedMovetime);
        }
        if (i == 33) {
            ret.push(SkillEffect.LSTaiko);
        }
        return ret;
    };
    ModelBuilder.prototype.parseOrbColours = function (skillID, p) {
        var ret = [];
        var filteredRet = [];
        var i = p[skillID].internalEffectId;
        var args = p[skillID].internalEffectArguments;
        var objValues = Object.keys(ColorAttribute).map(function (k) { return ColorAttribute[k]; });
        var values = objValues.filter(function (v) { return typeof v === "number"; });
        //case by case for orbchange, boardchange, colchange, rowchange, and spawn
        if (i == 116) {
            for (var k = 0; k < p[skillID].internalEffectArguments.length; k++) {
                ret = ret.concat(this.parseOrbColours(p[skillID].internalEffectArguments[k], p));
            }
        }
        //orbchanges are internal effects 9, 20 and 154
        if (i == 9) {
            ret.push(args[1] || 0);
        }
        if (i == 20) {
            ret.push(args[1]);
            ret.push(args[3] || 0);
        }
        if (i == 154) {
            values.forEach(function (v) {
                if (v < 0) {
                    return;
                }
                if (args[1] & (1 << v)) {
                    ret.push(ColorAttribute[ColorAttribute[v]]);
                }
            });
        }
        //boardchanges are internal effect 71
        if (i == 71) {
            for (var j = 0; j < args.length; j++) {
                if (args[j] != -1) {
                    ret.push(args[j]);
                }
            }
        }
        //colchanges are internal effect 127, rows are 128
        if ((i == 127) || (i == 128)) {
            var _loop_3 = function (j) {
                values.forEach(function (v) {
                    if (v < 0) {
                        return;
                    }
                    if (args[j + 1] & (1 << v)) {
                        ret.push(ColorAttribute[ColorAttribute[v]]);
                    }
                });
            };
            for (var j = 0; j < args.length; j += 2) {
                _loop_3(j);
            }
        }
        //spawn are internal effect 141
        if (i == 141) {
            values.forEach(function (v) {
                if (v < 0) {
                    return;
                }
                if (args[1] & (1 << v)) {
                    ret.push(ColorAttribute[ColorAttribute[v]]);
                }
            });
        }
        for (var j = 0; j < ret.length; j++) {
            if (ret.indexOf(ret[j]) == j) {
                filteredRet.push(ret[j]);
            }
        }
        return filteredRet;
    };
    ModelBuilder.prototype.pushIfNotZero = function (ary, val) {
        if (val == 0) {
            return;
        }
        ary.push(val);
    };
    ModelBuilder.prototype.buildEvoTree = function (card) {
        var evoTree = this.model.evoTrees[card.evoTreeBaseId];
        if (evoTree == null) {
            evoTree = new EvolutionTreeDetails(card.evoTreeBaseId);
            this.model.evoTrees[card.evoTreeBaseId] = evoTree;
        }
        evoTree.cards.push(card);
    };
    ModelBuilder.prototype.buildCardInternal = function (cardData) {
        var c = new Card();
        var reader = new RawDataReader(cardData);
        var unknownData = [];
        c.id = reader.readNumber(); // 0
        c.name = reader.readString(); // 1
        c.attribute = ColorAttribute[ColorAttribute[reader.readNumber()]]; // 2
        c.subattribute = ColorAttribute[ColorAttribute[reader.readNumber()]]; // 3
        c.isEvoReversable = reader.readNumber() == 1; // 4
        c.types.push(CardType[CardType[reader.readNumber()]]); // 5
        var type2 = CardType[CardType[reader.readNumber()]]; // 6
        if (type2 != CardType.None) {
            c.types.push(type2);
        }
        c.starCount = reader.readNumber(); // 7
        c.cost = reader.readNumber(); // 8
        unknownData.push(reader.readNumber()); // u0 ??? // 9
        c.maxLevel = reader.readNumber(); // 10
        c.feedExpPerLevel = reader.readNumber() / 4; // 11
        unknownData.push(reader.readNumber()); // u1 12 // ??? Seems to always be 100
        c.sellPricePerLevel = reader.readNumber() / 10; // 13
        c.minHp = reader.readNumber(); // 14
        c.maxHp = reader.readNumber(); // 15
        unknownData.push(reader.readNumber()); // u2 16 // ??? May be HP multiplier related
        c.minAtk = reader.readNumber(); // 17
        c.maxAtk = reader.readNumber(); // 18
        unknownData.push(reader.readNumber()); // u3 19 // ??? May be ATK multiplier related
        c.minRcv = reader.readNumber(); // 20
        c.maxRcv = reader.readNumber(); // 21
        unknownData.push(reader.readNumber()); // u4 22 // ??? May be RCV multiplier related
        c.expCurve = reader.readNumber(); // 23
        unknownData.push(reader.readNumber()); // u5 24 // ??? Mostly 2.5
        c.activeSkillId = reader.readNumber(); // 25
        c.leaderSkillId = reader.readNumber(); // 26
        c.turnTimer = reader.readNumber(); // 27
        unknownData.push(reader.readNumber()); // u6 28 // ??? Probably related to HP in dungeons
        unknownData.push(reader.readNumber()); // u7 29 // ???
        unknownData.push(reader.readNumber()); // u8 30 // ???
        unknownData.push(reader.readNumber()); // u9 31 // ??? Probably related to ATK in dungeons
        unknownData.push(reader.readNumber()); // u10 32 // ???
        unknownData.push(reader.readNumber()); // u11 33 // ???
        unknownData.push(reader.readNumber()); // u12 34 // ??? Probably related to DEF in dungeons
        unknownData.push(reader.readNumber()); // u13 35 // ???
        unknownData.push(reader.readNumber()); // u14 36 // ???
        unknownData.push(reader.readNumber()); // u15 37 // ???
        unknownData.push(reader.readNumber()); // u16 38 // ???
        unknownData.push(reader.readNumber()); // u17 39 // ???
        c.evoFromId = reader.readNumber(); // 40
        this.pushIfNotZero(c.evoMaterials, reader.readNumber()); // 41
        this.pushIfNotZero(c.evoMaterials, reader.readNumber()); // 42
        this.pushIfNotZero(c.evoMaterials, reader.readNumber()); // 43
        this.pushIfNotZero(c.evoMaterials, reader.readNumber()); // 44
        this.pushIfNotZero(c.evoMaterials, reader.readNumber()); // 45
        this.pushIfNotZero(c.devoMaterials, reader.readNumber()); // 46
        this.pushIfNotZero(c.devoMaterials, reader.readNumber()); // 47
        this.pushIfNotZero(c.devoMaterials, reader.readNumber()); // 48
        this.pushIfNotZero(c.devoMaterials, reader.readNumber()); // 49
        this.pushIfNotZero(c.devoMaterials, reader.readNumber()); // 50
        unknownData.push(reader.readNumber()); // 51 // ??? u18
        unknownData.push(reader.readNumber()); // 52 // ??? u19
        unknownData.push(reader.readNumber()); // 53 // ??? u20
        unknownData.push(reader.readNumber()); // 54 // ??? u21
        unknownData.push(reader.readNumber()); // 55 // ??? u22
        unknownData.push(reader.readNumber()); // 56 // ??? u23
        var skillCount = reader.readNumber(); // 57
        for (var i = 0; i < skillCount; i++) {
            var enemySkill = new CardEnemySkill();
            enemySkill.enemySkillId = reader.readNumber();
            enemySkill.ai = reader.readNumber();
            enemySkill.rnd = reader.readNumber();
            c.enemySkills.push(enemySkill);
        }
        var awakeningCount = reader.readNumber();
        for (var i = 0; i < awakeningCount; i++) {
            c.awakenings.push(Awakening[Awakening[reader.readNumber()]]);
        }
        var superAwakenings = reader.readString();
        if (superAwakenings != "") {
            var superAwakenings2 = superAwakenings.split(",");
            for (var i = 0; i < superAwakenings2.length; i++) {
                var superAwakening = superAwakenings2[i];
                c.superAwakenings.push(Awakening[Awakening[parseInt(superAwakening)]]);
            }
        }
        c.evoTreeBaseId = reader.readNumber();
        unknownData.push(reader.readNumber()); // ??? u24
        var type3 = CardType[CardType[reader.readNumber()]];
        if (type3 != CardType.None) {
            c.types.push(type3);
        }
        c.monsterPoints = reader.readNumber();
        unknownData.push(reader.readNumber()); // ??? u25
        c.collab = CollabGroup[CollabGroup[reader.readNumber()]];
        c.inheritanceType = InheritanceType[InheritanceType[reader.readNumber()]];
        c.japaneseName = reader.readString();
        c.limitBreakStatGain = reader.readNumber();
        c.isLimitBreakable = c.limitBreakStatGain > 0;
        c.voiceId = reader.readNumber();
        c.orbSkin = reader.readNumber();
        c.unknownData = unknownData;
        if (!reader.isEmpty()) {
            //throw "Excess data detected";
            console.log("excess data detected");
        }
        // Handle aliases
        if (this.aliases.aliasById[c.id]) {
            c.aliases = this.aliases.aliasById[c.id];
        }
        var lowerCardName = c.name.toLowerCase();
        var _loop_4 = function (aliasFrom) {
            if (lowerCardName.indexOf(aliasFrom) < 0) {
                return "continue";
            }
            this_1.aliases.aliasByName[aliasFrom].forEach(function (aliasTo) {
                c.aliases.push(lowerCardName.replace(aliasFrom, aliasTo));
            });
        };
        var this_1 = this;
        for (var aliasFrom in this.aliases.aliasByName) {
            _loop_4(aliasFrom);
        }
        // Handle skills
        this.registerSkillOwnedByCard(c.activeSkillId, c.id);
        this.registerSkillOwnedByCard(c.leaderSkillId, c.id);
        this.model.cards[c.id] = c;
        if (CardAssets.isAlt(c)) {
            c.isAlt = true;
            c.altBaseCardId = CardAssets.getAltBaseId(c);
            // For now this works. This may not work in the future.
            var baseCard = this.model.cards[c.altBaseCardId];
            if (baseCard) {
                baseCard.alternateVersions.push(c.id);
            }
            else {
                console.error("Alt " + c.id + " can't find base " + c.altBaseCardId);
            }
        }
        // Set latent killers
        var isBalanced = c.types.indexOf(CardType.Balanced) >= 0;
        if (isBalanced || c.types.indexOf(CardType.Healer) >= 0) {
            c.latentKillers.push(LatentAwakening.DragonKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.God) >= 0 || c.types.indexOf(CardType.Attacker) >= 0) {
            c.latentKillers.push(LatentAwakening.DevilKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.Dragon) >= 0 || c.types.indexOf(CardType.Physical) >= 0) {
            c.latentKillers.push(LatentAwakening.MachineKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.Devil) >= 0 || c.types.indexOf(CardType.Machine) >= 0) {
            c.latentKillers.push(LatentAwakening.GodKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.Machine) >= 0) {
            c.latentKillers.push(LatentAwakening.BalancedKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.Healer) >= 0) {
            c.latentKillers.push(LatentAwakening.AttackerKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.Attacker) >= 0) {
            c.latentKillers.push(LatentAwakening.PhysicalKiller);
        }
        if (isBalanced || c.types.indexOf(CardType.Dragon) >= 0 || c.types.indexOf(CardType.Physical) >= 0) {
            c.latentKillers.push(LatentAwakening.HealerKiller);
        }
        // All done
        return c;
    };
    ModelBuilder.prototype.registerSkillOwnedByCard = function (skillId, cardId) {
        var ary = this.cardIdsBySkillId[skillId];
        if (!ary) {
            ary = [];
            this.cardIdsBySkillId[skillId] = ary;
        }
        ary.push(cardId);
    };
    ModelBuilder.prototype.buildApkMetadata = function (data) {
        var apkMetadata = {};
        for (var key in data) {
            var dataArray = data[key].images;
            dataArray.forEach(function (data) {
                var metadata = new ImageMetadata();
                metadata.filename = data.filename;
                metadata.width = data.width;
                metadata.height = data.height;
                apkMetadata[metadata.filename] = metadata;
            });
        }
        this.model.apkMetadata = apkMetadata;
    };
    ModelBuilder.prototype.buildExchange = function (data) {
        var ret = [];
        var rawData = data.d.split("\n");
        var me = this;
        rawData.forEach(function (line) {
            var lineData = line.split(",");
            var obj = new ExchangeInfo();
            var indx = 0;
            if (lineData[indx++] != "A") {
                console.error("Unexpected exchange info: " + line);
                return;
            }
            obj.id1 = parseInt(lineData[indx++]);
            obj.id2 = parseInt(lineData[indx++]);
            obj.category = parseInt(lineData[indx++]);
            obj.tradeResultId = parseInt(lineData[indx++]);
            if (lineData[indx++] != "1") {
                if (lineData[indx - 1] == "99") {
                    // Don't know why, but 99 showed up for the GFE token trade. Shrug.
                }
                else {
                    console.error("Unexpected exchange info (2): " + line);
                }
            }
            if (lineData[indx++] != "0") {
                if (lineData[indx - 1] == "3") {
                    // Don't know why, but 3 showed up for the GFE token trade. Shrug.
                }
                else {
                    console.error("Unexpected exchange info (3): " + line);
                }
            }
            obj.startTime = DateConverter.convertToDate(lineData[indx++]);
            obj.endTime = DateConverter.convertToDate(lineData[indx++]);
            obj.startMessageTime = DateConverter.convertToDate(lineData[indx++]);
            obj.endMessageTime = DateConverter.convertToDate(lineData[indx++]);
            obj.message = lineData[indx++];
            obj.tradeCountRequired = parseInt(lineData[indx++]);
            var type = lineData[indx++];
            if (type == "0") {
                obj.isOneTime = false;
            }
            else if (type == "2") {
                obj.isOneTime = true;
            }
            else {
                console.error("Unexpected exchange info type: " + type + " -- " + line);
            }
            // Ends with all the IDs that can be accepted. Doesn't seem to have a limit.
            obj.tradeIdsAccepted = [];
            while (indx < lineData.length) {
                obj.tradeIdsAccepted.push(parseInt(lineData[indx]));
                indx++;
            }
            ret.push(obj);
        });
        this.model.allExchanges = ret;
    };
    ModelBuilder.prototype.buildDungeonData = function (data) {
        if (data.v != 6) {
            throw "Dungeon data version " + data.v + " - unsupported";
        }
        var self = this;
        var currentDungeon = null;
        var rawData = data.dungeons;
        rawData.split(/\n/).forEach(function (line) {
            if (!line) {
                return;
            }
            if (line.indexOf("d;") == 0) {
                currentDungeon = new Dungeon();
                var dungeonData = line.substring(2).split(",");
                if (dungeonData.length < 2) {
                    throw "Invalid dungeon line: " + line;
                }
                currentDungeon.id = parseInt(dungeonData[0]);
                currentDungeon.name = dungeonData[1];
                self.model.dungeons[currentDungeon.id] = currentDungeon;
                return;
            }
            if (line.indexOf("f;") == 0) {
                if (currentDungeon == null) {
                    throw "Floor data before a dungeon: " + line;
                }
                var floorData = line.substring(2).split(",");
                if (floorData.length < 2) {
                    throw "Invalid dungeon floor line: " + line;
                }
                var floor = new DungeonFloor();
                currentDungeon.floors.push(floor);
                floor.floorNumber = parseInt(floorData[0]);
                floor.name = floorData[1];
                floor.battles = parseInt(floorData[2]);
                floor.beginningData.push(floorData[3]);
                floor.sta = parseInt(floorData[4]);
                for (var i = 5; i < 8; i++) {
                    floor.beginningData.push(floorData[i]);
                }
                for (var i = 8;; i++) {
                    if (floorData[i] == "0") {
                        break;
                    }
                    var floorDrop = new DungeonDrop();
                    floorDrop.id = parseInt(floorData[i]);
                    if (floorDrop.id > 10000) {
                        floorDrop.id -= 10000;
                        floorDrop.isRare = true;
                    }
                    floor.drops.push(floorDrop);
                    self.model.cards[floorDrop.id].dropLocations[currentDungeon.id].push(floor);
                }
                for (var i = 8 + floor.drops.length; i < floorData.length; i++) {
                    floor.endingData.push(floorData[i]);
                }
                return;
            }
            if (line.indexOf("c;") == 0) {
                // Checksum probably, don't care
                return;
            }
            throw "Unsupported dungeon line: " + line;
        });
    };
    ModelBuilder.prototype.buildEnemySkillsData = function (data) {
        var self = this;
        var rawData = data.enemy_skills;
        if (!rawData) {
            console.error("Unexpected enemy skill data");
            console.error(data);
            return;
        }
        //skill params are id, name, effectid, param identifier, params...
        //param identifier determines what params you'll get
        //hex number, resolving to a set of params from 0-14
        //0 - small textbox text on use
        //1-8 - skill parameters 0-7
        //9 - ratio?
        //10-14 - AI parameters 0-4
        self.splitEvilRawData(rawData, function (lineSplit) {
            try {
                if (lineSplit[0] == "c") {
                    // Ignore the checksum
                    return;
                }
                var currentSkill = new EnemySkill();
                currentSkill.id = parseInt(lineSplit[0]);
                currentSkill.name = lineSplit[1];
                currentSkill.internalEffectId = parseInt(lineSplit[2]);
                var dec = parseInt(lineSplit[3], 16); //parse the paramidentifiers. It's in hex bitflags
                var skillParamsPresent = [];
                //skillparamspresent will result in an array of numbers from 0-14
                //determining what is given in the rest of the line
                for (var i = 0; i < 16; i++) {
                    if (((dec >> i) & 1) == 1) {
                        skillParamsPresent.push(i);
                    }
                }
                if (lineSplit.length != skillParamsPresent.length + 4) {
                    throw "Unexpected split";
                }
                //default values for arguments 0-14
                var args = ['', 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 10000, 0, 0];
                for (var i = 0; i < skillParamsPresent.length; i++) {
                    args[skillParamsPresent[i]] = lineSplit[i + 4];
                }
                currentSkill.usageText = args[0];
                for (var i = 1; i < 9; i++) {
                    if (typeof (args[i]) == "string") {
                        currentSkill.skillArgs[i - 1] = parseInt(args[i]);
                    }
                }
                currentSkill.ratio = parseInt(args[9]);
                for (var i = 10; i < 15; i++) {
                    currentSkill.aiArgs[i - 10] = parseInt(args[i]);
                }
                self.model.enemySkills[currentSkill.id] = currentSkill;
            }
            catch (e) {
                console.error("Failed to parse enemy skill line...");
                console.error(lineSplit);
                console.error(e);
            }
        });
    };
    ModelBuilder.prototype.splitEvilRawData = function (rawData, callback) {
        var currentLine = [];
        var cellBuffer = "";
        var inQuote = false;
        for (var i = 0; i < rawData.length; i++) {
            var currentCharacter = rawData[i];
            if (inQuote) {
                // You're allowed to have single quotes inside of the text :Nao:
                // Can only tell if you're done by looking ahead
                if (currentCharacter == "'" && i + 1 < rawData.length && (rawData[i + 1] == "," || rawData[i + 1] == "\n")) {
                    inQuote = false;
                    continue;
                }
                cellBuffer += currentCharacter;
                continue;
            }
            if (currentCharacter == "'") {
                inQuote = true;
                continue;
            }
            if (currentCharacter == ",") {
                currentLine.push(cellBuffer);
                cellBuffer = "";
                continue;
            }
            if (currentCharacter == "\n") {
                currentLine.push(cellBuffer);
                callback(currentLine);
                currentLine = [];
                cellBuffer = "";
                continue;
            }
            cellBuffer += currentCharacter;
        }
        currentLine.push(cellBuffer);
        callback(currentLine);
    };
    ModelBuilder.prototype.buildMonsMetadata = function (data) {
        if (typeof data != "object") {
            throw "Unexpected data: " + JSON.stringify(data);
        }
        var ret = {};
        for (var key in data) {
            // format: mons_001.bc
            var stringId = key.replace("mons_", "").replace(".bc", "");
            while (stringId.length > 1 && stringId[0] == "0") {
                stringId = stringId.substring(1);
            }
            var id = parseInt(stringId);
            var data2 = data[key].images;
            var metadata = [];
            for (var i = 0; i < data2.length; i++) {
                var meta = new ImageMetadata();
                meta.filename = data2[i].filename;
                meta.width = parseInt(data2[i].width);
                meta.height = parseInt(data2[i].height);
                metadata.push(meta);
            }
            ret[id] = metadata;
        }
        this.model.cardMetadata = ret;
    };
    ModelBuilder.prototype.connectMetadataToCards = function () {
        for (var id in this.model.cardMetadata) {
            var card = this.model.cards[id];
            if (!card) {
                console.error("Id not found: " + id);
                continue;
            }
            card.imageMetadata = this.model.cardMetadata[id];
            // Alternate versions have the same metadata as their bases
            for (var altIndx in card.alternateVersions) {
                var altId = card.alternateVersions[altIndx];
                var altCard = this.model.cards[altId];
                altCard.imageMetadata = card.imageMetadata;
            }
        }
        var model = this.model;
        var now = new Date();
        model.allExchanges.forEach(function (exchange) {
            // Ignore if it already finished
            if (now > exchange.endTime) {
                return;
            }
            model.cards[exchange.tradeResultId].exchangesFrom.push(exchange);
            exchange.tradeIdsAccepted.forEach(function (cardId) {
                model.cards[cardId].exchangesTo.push(exchange);
            });
        });
    };
    ModelBuilder.prototype.connectCardIdsToSkills = function () {
        for (var skillId in this.cardIdsBySkillId) {
            this.model.playerSkills[skillId].cardIds = this.cardIdsBySkillId[skillId];
        }
    };
    ModelBuilder.prototype.buildCardGroups = function () {
        console.log("Calculating card groups...");
        var groups = [];
        GroupAssets.customGroups.forEach(function (c) {
            groups.push(c);
        });
        var collabGroupById = {};
        for (var cardId in this.model.cards) {
            var card = this.model.cards[cardId];
            if (card.collab == 0) {
                continue;
            }
            if (CardAssets.isAlt(card)) {
                continue;
            }
            // Don't add a card to the collab group that has a base evo in the group
            if (card.evoTreeBaseId != card.id) {
                if (this.model.cards[card.evoTreeBaseId].collab == card.collab) {
                    continue;
                }
            }
            var cg = collabGroupById[card.collab];
            if (!cg) {
                cg = new CardGroup();
                var asset = GroupAssets.getCollabDetails(card.collab);
                cg.name = asset.name;
                cg.collabId = card.collab;
                cg.aliases = [];
                cg.aliases.push(cg.name);
                asset.aliases.forEach(function (v) {
                    cg.aliases.push(v);
                });
                cg.cards = [];
                collabGroupById[card.collab] = cg;
                groups.push(cg);
                this.model.usedCollabs.push(card.collab);
            }
            cg.cards.push(card.id);
        }
        var self = this;
        // Populate group membership on all cards
        groups.forEach(function (cg) {
            cg.cards.forEach(function (cardId) {
                var card = self.model.cards[cardId];
                card.groups.push(cg);
            });
        });
        this.model.cardGroups = groups;
    };
    ModelBuilder.prototype.build = function () {
        this.connectMetadataToCards();
        this.connectCardIdsToSkills();
        var ret = this.model;
        this.model = null;
        return ret;
    };
    return ModelBuilder;
}());
var PlayerSkillDescriptionHelper = /** @class */ (function () {
    function PlayerSkillDescriptionHelper() {
    }
    PlayerSkillDescriptionHelper.prototype.getHumanReadableAwakening = function (awks) {
        switch (awks) {
            case Awakening.EnhancedHP:
                return "Enhanced HP";
            case Awakening.EnhancedATK:
                return "Enhanced ATK";
            case Awakening.EnhancedRCV:
                return "Enhanced RCV";
            case Awakening.FireResist:
                return "Fire Resist";
            case Awakening.WaterResist:
                return "Water Resist";
            case Awakening.WoodResist:
                return "Wood Resist";
            case Awakening.LightResist:
                return "Light Resist";
            case Awakening.DarkResist:
                return "Dark Resist";
            case Awakening.Autoheal:
                return "Autoheal";
            case Awakening.BindResist:
                return "Bind Resist";
            case Awakening.BlindResist:
                return "Blind Resist";
            case Awakening.JammerResist:
                return "Jammer Resist";
            case Awakening.PoisonResist:
                return "Poison Resist";
            case Awakening.FireEnhance:
                return "Fire Enhance";
            case Awakening.WaterEnhance:
                return "Water Enhance";
            case Awakening.WoodEnhance:
                return "Wood Enhance";
            case Awakening.LightEnhance:
                return "Light Enhance";
            case Awakening.DarkEnhance:
                return "Dark Enhance";
            case Awakening.TimeExtend:
                return "Time Extend";
            case Awakening.BindRecovery:
                return "Bind Recovery";
            case Awakening.SkillBoost:
                return "Skillboost";
            case Awakening.FireRow:
                return "Fire Row";
            case Awakening.WaterRow:
                return "Water Row";
            case Awakening.WoodRow:
                return "Wood Row";
            case Awakening.LightRow:
                return "Light Row";
            case Awakening.DarkRow:
                return "Dark Row";
            case Awakening.TPA:
                return "TPA";
            case Awakening.SBR:
                return "SBR";
            case Awakening.HeartEnhance:
                return "Heart Enhance";
            case Awakening.Multiboost:
                return "Multiboost";
            case Awakening.DragonKiller:
                return "Dragon Killer";
            case Awakening.GodKiller:
                return "God Killer";
            case Awakening.DevilKiller:
                return "Devil Killer";
            case Awakening.MachineKiller:
                return "Machine Killer";
            case Awakening.BalancedKiller:
                return "Balanced Killer";
            case Awakening.AttackerKiller:
                return "Attacker Killer";
            case Awakening.PhysicalKiller:
                return "Physical Killer";
            case Awakening.HealerKiller:
                return "Healer Killer";
            case Awakening.EvoKiller:
                return "EvoMat Killer";
            case Awakening.AwakeningKiller:
                return "AwokenMat Killer";
            case Awakening.EnhanceKiller:
                return "EnhanceMat Killer";
            case Awakening.RedeemableKiller:
                return "Redeemable Killer";
            case Awakening.SevenCombo:
                return "7C";
            case Awakening.Guardbreak:
                return "Guardbreak";
            case Awakening.FUA:
                return "FUA";
            case Awakening.TeamHP:
                return "Team HP";
            case Awakening.TeamRCV:
                return "Team RCV";
            case Awakening.VDP:
                return "VDP";
            case Awakening.EquipAssist:
                return "Awoken Assist";
            case Awakening.SuperFUA:
                return "Super FUA";
            case Awakening.RainbowHaste:
                return "Rainbow Haste";
            case Awakening.UnbindablePlus:
                return "Bind Resist+";
            case Awakening.TimeExtendPlus:
                return "Time Extend+";
            case Awakening.CloudResist:
                return "Cloud Resist";
            case Awakening.ScrollResist:
                return "Scroll Resist";
            case Awakening.SkillBoostPlus:
                return "Skillboost+";
            case Awakening.HP80:
                return "HP>80";
            case Awakening.HP50:
                return "HP<50";
            case Awakening.LShield:
                return "L Shield";
            case Awakening.LUnlock:
                return "L Unlock";
            case Awakening.TenCombo:
                return "10C";
            case Awakening.ComboOrb:
                return "Combo Orb";
            case Awakening.Voice:
                return "Voice";
            case Awakening.Dungeon:
                return "Dungeon Boost";
            default:
                return "Unknown";
        }
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableAwakenings = function (awks, combinationWord) {
        if (combinationWord === void 0) { combinationWord = "and"; }
        var ary = new Array(awks.length);
        for (var i = 0; i < ary.length; i++) {
            ary[i] = this.getHumanReadableAwakening(awks[i]);
        }
        return this.getHumanReadableList(ary, combinationWord);
    };
    // All about the colors
    PlayerSkillDescriptionHelper.prototype.parseColorBitflags = function (bitflag) {
        var ret = [];
        var objValues = Object.keys(ColorAttribute).map(function (k) { return ColorAttribute[k]; });
        var values = objValues.filter(function (v) { return typeof v === "number"; });
        values.forEach(function (v) {
            if (v < 0) {
                return;
            }
            if (bitflag & (1 << v)) {
                ret.push(ColorAttribute[ColorAttribute[v]]);
            }
        });
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.parseBitflags = function (bitflag) {
        var ret = [];
        var objValues = Object.keys(ColorAttribute).map(function (k) { return ColorAttribute[k]; });
        var values = objValues.filter(function (v) { return typeof v === "number"; });
        values.forEach(function (v) {
            if (v < 0) {
                return;
            }
            if (bitflag & (1 << v)) {
                ret.push(v);
            }
        });
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.isAllAttributes = function (bitflag) {
        return (bitflag & 31) == 31;
    };
    PlayerSkillDescriptionHelper.prototype.getColorList = function (ary, startingIndex) {
        var ret = [];
        for (var i = 0; i < ary.length; i++) {
            var colorId = ary[i];
            if (colorId == -1) {
                break;
            }
            ret.push(ColorAttribute[ColorAttribute[colorId]]);
        }
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableColors = function (colors, combinationWord) {
        if (combinationWord === void 0) { combinationWord = "and"; }
        var ary = new Array(colors.length);
        for (var i = 0; i < ary.length; i++) {
            ary[i] = this.getHumanReadableColor(colors[i]);
        }
        return this.getHumanReadableList(ary, combinationWord);
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableColor = function (color) {
        switch (color) {
            case ColorAttribute.Fire:
                return "Fire";
            case ColorAttribute.Water:
                return "Water";
            case ColorAttribute.Wood:
                return "Wood";
            case ColorAttribute.Light:
                return "Light";
            case ColorAttribute.Dark:
                return "Dark";
            case ColorAttribute.Heal:
                return "Heal";
            case ColorAttribute.Jammer:
                return "Jammer";
            case ColorAttribute.Poison:
                return "Poison";
            case ColorAttribute.MortalPoison:
                return "Mortal Poison";
            case ColorAttribute.Bomb:
                return "Bomb";
            default:
                return "Unknown";
        }
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableRows = function (rows, combinationWord) {
        if (combinationWord === void 0) { combinationWord = "and"; }
        var ary = new Array(rows.length);
        for (var i = 0; i < ary.length; i++) {
            ary[i] = this.getHumanReadableRow(rows[i]);
        }
        return this.getHumanReadableList(ary, combinationWord);
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableRow = function (row) {
        switch (row) {
            case 0:
                return "top";
            case 1:
                return "second from the top";
            case 2:
                return "third from the top";
            case 3:
                return "second from the bottom";
            case 4:
                return "bottom";
            default:
                return "Unknown";
        }
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableColumns = function (cols, combinationWord) {
        if (combinationWord === void 0) { combinationWord = "and"; }
        var ary = new Array(cols.length);
        for (var i = 0; i < ary.length; i++) {
            ary[i] = this.getHumanReadableColumn(cols[i]);
        }
        return this.getHumanReadableList(ary, combinationWord);
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableColumn = function (col) {
        switch (col) {
            case 0:
                return "leftmost";
            case 1:
                return "second from the left";
            case 2:
                return "third from the left";
            case 3:
                return "third from the right";
            case 4:
                return "second from the right";
            case 5:
                return "rightmost";
            default:
                return "Unknown";
        }
    };
    // All about types
    PlayerSkillDescriptionHelper.prototype.parseTypeBitflags = function (bitflag) {
        var ret = [];
        var objValues = Object.keys(CardType).map(function (k) { return CardType[k]; });
        var values = objValues.filter(function (v) { return typeof v === "number"; });
        values.forEach(function (v) {
            if (v < 0) {
                return;
            }
            if (bitflag & (1 << v)) {
                ret.push(CardType[CardType[v]]);
            }
        });
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableTypes = function (types, combinationWord) {
        if (combinationWord === void 0) { combinationWord = "and"; }
        var ary = new Array(types.length);
        for (var i = 0; i < ary.length; i++) {
            ary[i] = this.getHumanReadableType(types[i]);
        }
        return this.getHumanReadableList(ary, combinationWord);
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableType = function (type) {
        switch (type) {
            case CardType.Evo:
                return "Evo";
            case CardType.Balanced:
                return "Balanced";
            case CardType.Physical:
                return "Physical";
            case CardType.Healer:
                return "Healer";
            case CardType.Dragon:
                return "Dragon";
            case CardType.God:
                return "God";
            case CardType.Attacker:
                return "Attacker";
            case CardType.Devil:
                return "Devil";
            case CardType.Machine:
                return "Machine";
            case CardType.Awakening:
                return "Awakening";
            case CardType.Enhance:
                return "Enhance";
            case CardType.Redeemable:
                return "Redeemable";
            default:
                return "Unknown";
        }
    };
    // Boosts
    PlayerSkillDescriptionHelper.prototype.getHumanReadableMultipliers = function (hpMultiplier, atkMultiplier, rcvMultiplier, divisor, showOneX) {
        if (divisor === void 0) { divisor = 100; }
        if (showOneX === void 0) { showOneX = true; }
        hpMultiplier = hpMultiplier || 0;
        atkMultiplier = atkMultiplier || 0;
        rcvMultiplier = rcvMultiplier || 0;
        if (!showOneX) {
            if (hpMultiplier == 1) {
                hpMultiplier = 0;
            }
            if (atkMultiplier == 1) {
                atkMultiplier = 0;
            }
            if (rcvMultiplier == 1) {
                rcvMultiplier = 0;
            }
        }
        var ret = "";
        if (hpMultiplier && hpMultiplier == atkMultiplier && atkMultiplier == rcvMultiplier) {
            return "All stats x" + (hpMultiplier / divisor);
        }
        if (hpMultiplier) {
            ret += "HP x" + (hpMultiplier / divisor);
        }
        if (atkMultiplier) {
            if (hpMultiplier) {
                ret += ", ";
            }
            ret += "ATK x" + (atkMultiplier / divisor);
        }
        if (rcvMultiplier) {
            if (hpMultiplier || atkMultiplier) {
                ret += ", ";
            }
            ret += "RCV x" + (rcvMultiplier / divisor);
        }
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableLsse = function (lsse, stack) {
        if (stack === void 0) { stack = false; }
        var ret = "";
        if (lsse.hp == 1 && lsse.atk == 1 && lsse.rcv == 1 && lsse.shield == 0) {
            ret += this.getHumanReadableMultipliers(lsse.hp, lsse.atk, lsse.rcv, 1, true);
        }
        else {
            ret += this.getHumanReadableMultipliers(lsse.hp, lsse.atk, lsse.rcv, 1, stack);
        }
        if (lsse.shield > 0) {
            if (ret != "") {
                ret += " and";
            }
            ret += " " + lsse.shield + "% damage reduction";
        }
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableMaxLsse = function (baseLsse, stackLsse, stacks) {
        var ret = "";
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = baseLsse.hp + stackLsse.hp * stacks;
        lsse.atk = baseLsse.atk + stackLsse.atk * stacks;
        lsse.rcv = baseLsse.rcv + stackLsse.rcv * stacks;
        lsse.shield = baseLsse.shield + stackLsse.shield * stacks;
        ret += this.getHumanReadableLsse(lsse);
        return ret;
    };
    // Other shit
    PlayerSkillDescriptionHelper.prototype.getHumanReadableNumberRange = function (min, max) {
        if (min == max) {
            return this.getHumanReadableNumber(min);
        }
        return this.getHumanReadableNumber(min) + " to " + this.getHumanReadableNumber(max);
    };
    PlayerSkillDescriptionHelper.getHumanReadableNumber = function (num) {
        if (typeof num == "undefined") {
            return "";
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableNumber = function (num) {
        return PlayerSkillDescriptionHelper.getHumanReadableNumber(num);
    };
    PlayerSkillDescriptionHelper.prototype.getHumanReadableList = function (ary, combinationWord) {
        if (combinationWord === void 0) { combinationWord = "and"; }
        if (ary.length == 0) {
            return "";
        }
        if (ary.length == 1) {
            return ary[0];
        }
        if (ary.length == 2) {
            return ary[0] + " " + combinationWord + " " + ary[1];
        }
        var ret = ary[0];
        for (var i = 1; i < ary.length - 1; i++) {
            ret += ", " + ary[i];
        }
        ret += ", " + combinationWord + " " + ary[ary.length - 1];
        return ret;
    };
    PlayerSkillDescriptionHelper.prototype.getAttributeTypeRestrictionText = function (attributeBitflag, typeBitflag) {
        if (this.isAllAttributes(attributeBitflag)) {
            return "";
        }
        var attributeRequirements = this.parseColorBitflags(attributeBitflag);
        var typeRequirements = this.parseTypeBitflags(typeBitflag);
        var ret = "";
        var hasAttributeRequirements = false;
        if (attributeRequirements.length > 0) {
            ret += this.getHumanReadableColors(attributeRequirements);
            ret += " attribute cards";
            hasAttributeRequirements = true;
        }
        if (typeRequirements.length > 0) {
            if (hasAttributeRequirements) {
                ret += " and ";
            }
            ret += this.getHumanReadableTypes(typeRequirements);
            ret += " type cards";
        }
        return ret;
    };
    //generic number bitflag parsing for things like column/row ids
    PlayerSkillDescriptionHelper.prototype.parseGenericBitflags = function (bitflag) {
        var ret = [];
        var remaining = bitflag;
        var i = 0;
        while (remaining > 0) {
            if (bitflag & (1 << i)) {
                ret.push(i);
                remaining -= (1 << i);
            }
            i++;
        }
        return ret;
    };
    //re-insert trailing 0s to parameters based on expected length
    PlayerSkillDescriptionHelper.prototype.cleanParams = function (params, len) {
        for (var i = 0; i < len; i++) {
            if (params[i] == null) {
                params[i] = 0;
            }
        }
        return params;
    };
    PlayerSkillDescriptionHelper.cleanNumber = function (num) {
        return parseInt(num, 10);
    };
    //compare arrays all equal
    PlayerSkillDescriptionHelper.prototype.arraysEqual = function () {
        var arrs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrs[_i] = arguments[_i];
        }
        for (var i = 0; i < arrs.length; i++) {
            if (arrs[i].length != arrs[0].length) {
                return false;
            }
            for (var j = 0; j < arrs[0].length; j++) {
                if (arrs[i][j] != arrs[0][j]) {
                    return false;
                }
            }
        }
        return true;
    };
    //returns Single if num is 1, plural otherwise. Use to properly add word to descriptions
    PlayerSkillDescriptionHelper.prototype.pluralize = function (num, single, plural, includeNum) {
        if (includeNum === void 0) { includeNum = false; }
        var ret = "";
        if (includeNum) {
            ret += num + " ";
        }
        if (num == 1) {
            return ret + single;
        }
        return plural + single;
    };
    PlayerSkillDescriptionHelper.prototype.formatHtmlSkillDescription = function (description) {
        if (description.indexOf("\n") != -1) {
            description = description.replace(/\r*\n/, "<br />");
        }
        if (description.indexOf("^") == -1) {
            return description;
        }
        return description.replace(/\^([0-9a-fA-F]{6})\^([^^]+)\^p/g, "<span style='color: #$1'>$2</span>");
    };
    return PlayerSkillDescriptionHelper;
}());
var PlayerSkillParser = /** @class */ (function () {
    function PlayerSkillParser(model) {
        this.model = null;
        this.parsers = {};
        this.model = model;
        this.setupParsers();
    }
    PlayerSkillParser.prototype.setupParsers = function () {
        var p = this.parsers;
        p[0] = new Effect0PlayerSkillParser();
        p[1] = new Effect1PlayerSkillParser();
        p[2] = new Effect2PlayerSkillParser();
        p[3] = new Effect3PlayerSkillParser();
        p[4] = new Effect4PlayerSkillParser();
        p[5] = new Effect5PlayerSkillParser();
        p[6] = new Effect6PlayerSkillParser();
        p[7] = new Effect7PlayerSkillParser();
        p[8] = new Effect8PlayerSkillParser();
        p[9] = new Effect9PlayerSkillParser();
        p[10] = new Effect10PlayerSkillParser();
        p[11] = new Effect11PlayerSkillParser();
        p[12] = new Effect12PlayerSkillParser();
        p[13] = new Effect13PlayerSkillParser();
        p[14] = new Effect14PlayerSkillParser();
        p[15] = new Effect15PlayerSkillParser();
        p[16] = new Effect16PlayerSkillParser();
        p[17] = new Effect17PlayerSkillParser();
        p[18] = new Effect18PlayerSkillParser();
        p[19] = new Effect19PlayerSkillParser();
        p[20] = new Effect20PlayerSkillParser();
        p[21] = new Effect21PlayerSkillParser();
        p[22] = new Effect22PlayerSkillParser();
        p[23] = new Effect23PlayerSkillParser();
        p[24] = new Effect24PlayerSkillParser();
        //25 is unknown. No uses in the data
        p[26] = new Effect26PlayerSkillParser();
        //27 is unknown. No uses in the data
        p[28] = new Effect28PlayerSkillParser();
        p[29] = new Effect29PlayerSkillParser();
        p[30] = new Effect30PlayerSkillParser();
        p[31] = new Effect31PlayerSkillParser();
        //32 doesn't exist yet
        p[33] = new Effect33PlayerSkillParser();
        //34 doesn't exist yet
        p[35] = new Effect35PlayerSkillParser();
        p[36] = new Effect36PlayerSkillParser();
        p[37] = new Effect37PlayerSkillParser();
        p[38] = new Effect38PlayerSkillParser();
        p[39] = new Effect39PlayerSkillParser();
        p[40] = new Effect40PlayerSkillParser();
        p[41] = new Effect41PlayerSkillParser();
        p[42] = new Effect42PlayerSkillParser();
        p[43] = new Effect43PlayerSkillParser();
        p[44] = new Effect44PlayerSkillParser();
        p[45] = new Effect45PlayerSkillParser();
        p[46] = new Effect46PlayerSkillParser();
        //47 doesn't exist yet
        p[48] = new Effect48PlayerSkillParser();
        p[49] = new Effect49PlayerSkillParser();
        p[50] = new Effect50PlayerSkillParser();
        p[51] = new Effect51PlayerSkillParser();
        p[52] = new Effect52PlayerSkillParser();
        p[53] = new Effect53PlayerSkillParser();
        p[54] = new Effect54PlayerSkillParser();
        p[55] = new Effect55PlayerSkillParser();
        p[56] = new Effect56PlayerSkillParser();
        //57 doesn't exist yet
        p[58] = new Effect58PlayerSkillParser();
        p[59] = new Effect59PlayerSkillParser();
        p[60] = new Effect60PlayerSkillParser();
        p[61] = new Effect61PlayerSkillParser();
        p[62] = new Effect62PlayerSkillParser();
        p[63] = new Effect63PlayerSkillParser();
        p[64] = new Effect64PlayerSkillParser();
        p[65] = new Effect65PlayerSkillParser();
        p[66] = new Effect66PlayerSkillParser();
        p[67] = new Effect67PlayerSkillParser();
        //68 doesn't exist yet
        p[69] = new Effect69PlayerSkillParser();
        //70 doesn't exist yet
        p[71] = new Effect71PlayerSkillParser();
        //72 doesn't exist yet
        p[73] = new Effect73PlayerSkillParser();
        //74 doesn't exist yet
        p[75] = new Effect75PlayerSkillParser();
        p[76] = new Effect76PlayerSkillParser();
        p[77] = new Effect77PlayerSkillParser();
        //78 doesn't exist yet
        p[79] = new Effect79PlayerSkillParser();
        //80 to 83 don't exist yet
        p[84] = new Effect84PlayerSkillParser();
        p[85] = new Effect85PlayerSkillParser();
        p[86] = new Effect86PlayerSkillParser();
        p[87] = new Effect87PlayerSkillParser();
        p[88] = new Effect88PlayerSkillParser();
        //89 exists but only in 1 unused skill with no description
        p[90] = new Effect90PlayerSkillParser();
        p[91] = new Effect91PlayerSkillParser();
        p[92] = new Effect92PlayerSkillParser();
        p[93] = new Effect93PlayerSkillParser();
        p[94] = new Effect94PlayerSkillParser();
        p[95] = new Effect95PlayerSkillParser();
        p[96] = new Effect96PlayerSkillParser();
        p[97] = new Effect97PlayerSkillParser();
        p[98] = new Effect98PlayerSkillParser();
        //99 doesn't exist yet
        p[100] = new Effect100PlayerSkillParser();
        p[101] = new Effect101PlayerSkillParser();
        //102 doesn't exist yet
        p[103] = new Effect103PlayerSkillParser();
        p[104] = new Effect104PlayerSkillParser();
        p[105] = new Effect105PlayerSkillParser();
        p[106] = new Effect106PlayerSkillParser();
        p[107] = new Effect107PlayerSkillParser();
        p[108] = new Effect108PlayerSkillParser();
        p[109] = new Effect109PlayerSkillParser();
        p[110] = new Effect110PlayerSkillParser();
        p[111] = new Effect111PlayerSkillParser();
        ///112-113 don't exist
        p[114] = new Effect114PlayerSkillParser();
        p[115] = new Effect115PlayerSkillParser();
        p[116] = new Effect116PlayerSkillParser(this);
        p[117] = new Effect117PlayerSkillParser();
        p[118] = new Effect118PlayerSkillParser(this.model);
        p[119] = new Effect119PlayerSkillParser();
        //120 doesn't exist
        p[121] = new Effect121PlayerSkillParser();
        p[122] = new Effect122PlayerSkillParser();
        p[123] = new Effect123PlayerSkillParser();
        p[124] = new Effect124PlayerSkillParser();
        p[125] = new Effect125PlayerSkillParser(this.model);
        p[126] = new Effect126PlayerSkillParser();
        p[127] = new Effect127PlayerSkillParser();
        p[128] = new Effect128PlayerSkillParser();
        p[129] = new Effect129PlayerSkillParser();
        p[130] = new Effect130PlayerSkillParser();
        p[131] = new Effect131PlayerSkillParser();
        p[132] = new Effect132PlayerSkillParser();
        p[133] = new Effect133PlayerSkillParser();
        //134 and 135 don't exist
        p[136] = new Effect136PlayerSkillParser();
        p[137] = new Effect137PlayerSkillParser();
        p[138] = p[116]; // Literally the same damn thing
        p[139] = new Effect139PlayerSkillParser();
        p[140] = new Effect140PlayerSkillParser();
        p[141] = new Effect141PlayerSkillParser();
        p[142] = new Effect142PlayerSkillParser();
        p[143] = new Effect143PlayerSkillParser();
        p[144] = new Effect144PlayerSkillParser();
        p[145] = new Effect145PlayerSkillParser();
        p[146] = new Effect146PlayerSkillParser();
        //147 doesn't exist yet
        p[148] = new Effect148PlayerSkillParser();
        p[149] = new Effect149PlayerSkillParser();
        p[150] = new Effect150PlayerSkillParser();
        p[151] = new Effect151PlayerSkillParser();
        p[152] = new Effect152PlayerSkillParser();
        p[153] = new Effect153PlayerSkillParser();
        p[154] = new Effect154PlayerSkillParser();
        p[155] = new Effect155PlayerSkillParser();
        p[156] = new Effect156PlayerSkillParser();
        p[157] = new Effect157PlayerSkillParser();
        p[158] = new Effect158PlayerSkillParser();
        p[159] = new Effect119PlayerSkillParser(); //159 is a copy of 119 for stacking
        p[160] = new Effect160PlayerSkillParser();
        p[161] = new Effect161PlayerSkillParser();
        p[162] = new Effect162PlayerSkillParser();
        p[163] = new Effect163PlayerSkillParser();
        p[164] = new Effect164PlayerSkillParser();
        p[165] = new Effect165PlayerSkillParser();
        p[166] = new Effect166PlayerSkillParser();
        p[167] = new Effect167PlayerSkillParser();
        //168 doesn't exist yet
        p[169] = new Effect169PlayerSkillParser();
        p[170] = new Effect170PlayerSkillParser();
        p[171] = new Effect171PlayerSkillParser();
        p[172] = new Effect172PlayerSkillParser();
        p[173] = new Effect173PlayerSkillParser();
        //174 doesn't exist yet
        p[175] = new Effect175PlayerSkillParser();
        p[176] = new Effect176PlayerSkillParser();
        p[177] = new Effect177PlayerSkillParser();
        p[178] = new Effect178PlayerSkillParser();
        p[179] = new Effect179PlayerSkillParser();
        p[180] = new Effect180PlayerSkillParser();
        //181 doesn't exist yet
        p[182] = new Effect182PlayerSkillParser();
        p[183] = new Effect183PlayerSkillParser();
        p[184] = new Effect184PlayerSkillParser();
        p[185] = new Effect185PlayerSkillParser();
        p[186] = new Effect186PlayerSkillParser();
        //187 doesn't exist yet
        p[188] = new Effect188PlayerSkillParser();
        p[189] = new Effect189PlayerSkillParser();
        p[191] = new Effect191PlayerSkillParser();
        p[192] = new Effect192PlayerSkillParser();
        p[193] = new Effect193PlayerSkillParser();
        p[194] = new Effect194PlayerSkillParser();
        p[195] = new Effect195PlayerSkillParser();
        p[196] = new Effect196PlayerSkillParser();
        p[197] = new Effect197PlayerSkillParser();
        p[198] = new Effect198PlayerSkillParser();
        p[199] = new Effect199PlayerSkillParser();
        p[200] = new Effect200PlayerSkillParser();
    };
    PlayerSkillParser.prototype.parseSkill = function (playerSkillId) {
        var skill = this.model.playerSkills[playerSkillId];
        if (!skill) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = "Unknown skill (" + playerSkillId + ")";
            return ret;
        }
        var ret = this.parseEffect(skill.internalEffectId, skill.internalEffectArguments);
        this.finalizeEffects(ret.parsedEffects);
        return ret;
    };
    PlayerSkillParser.prototype.getKey = function (obj) {
        var tmp = obj.numberOfAttacks;
        obj.numberOfAttacks = 1;
        var ret = JSON.stringify(obj);
        obj.numberOfAttacks = tmp;
        return ret;
    };
    PlayerSkillParser.prototype.finalizeEffects = function (effects) {
        var started = false;
        for (var i = 0; i < effects.length; i++) {
            if (effects[i].type != PlayerSkillEffectType.ImmediateDamage) {
                continue;
            }
            if (i >= effects.length - 1) {
                continue;
            }
            if (effects[i + 1].type != PlayerSkillEffectType.ImmediateDamage) {
                continue;
            }
            if (!started) {
                started = true;
            }
            var currEffect = effects[i];
            var nextEffect = effects[i + 1];
            if (this.getKey(currEffect) != this.getKey(nextEffect)) {
                continue;
            }
            currEffect.numberOfAttacks += nextEffect.numberOfAttacks;
            effects.splice(i + 1, 1);
            i--;
        }
    };
    PlayerSkillParser.prototype.parseEffect = function (internalEffectId, internalEffectParams) {
        var effectParser = this.parsers[internalEffectId];
        if (!effectParser) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = "Unknown effect (" + internalEffectId + ") - params: " + JSON.stringify(internalEffectParams);
            return ret;
        }
        return effectParser.parse(internalEffectParams);
    };
    return PlayerSkillParser;
}());
var PlayerSkillParserResult = /** @class */ (function () {
    function PlayerSkillParserResult() {
        this.legacyText = "";
        this.parsedEffects = [];
    }
    return PlayerSkillParserResult;
}());
var RawDataReader = /** @class */ (function () {
    function RawDataReader(data) {
        this.index = 0;
        this.data = data;
    }
    RawDataReader.prototype.read = function () {
        if (this.index >= this.data.length) {
            throw "Nothing left to read";
        }
        var ret = this.data[this.index];
        this.index++;
        return ret;
    };
    RawDataReader.prototype.readNumber = function () {
        var ret = this.read();
        if (typeof ret !== "number") {
            throw "Expected number, found " + typeof (ret) + " (" + ret + ") (index " + this.index + ")";
        }
        return ret;
    };
    RawDataReader.prototype.readString = function () {
        var ret = this.read();
        if (typeof ret !== "string") {
            throw "Expected string, found " + typeof (ret) + " (" + ret + ") (index " + this.index + ")";
        }
        return ret;
    };
    RawDataReader.prototype.countRemaining = function () {
        return this.data.length - this.index;
    };
    RawDataReader.prototype.isEmpty = function () {
        return this.index >= this.data.length;
    };
    return RawDataReader;
}());
var EnemySkillDecisionTree = /** @class */ (function () {
    function EnemySkillDecisionTree() {
    }
    return EnemySkillDecisionTree;
}());
var EnemySkillDecisionTreeNode = /** @class */ (function () {
    function EnemySkillDecisionTreeNode() {
        this.name = "";
        this.text = "MISSINGNO";
        this.children = [];
    }
    return EnemySkillDecisionTreeNode;
}());
var EnemySkillParser = /** @class */ (function () {
    function EnemySkillParser(model, u53, u54) {
        this.model = model;
        this.helper = new PlayerSkillDescriptionHelper();
        this.u53 = u53;
        this.u54 = u54;
    }
    EnemySkillParser.prototype.getEnemySkill = function (code) {
        return this.getEnemySkillById(code.enemySkillId);
    };
    EnemySkillParser.prototype.getEnemySkillById = function (enemySkillId) {
        var ret = this.model.enemySkills[enemySkillId];
        if (!ret) {
            throw "Enemy skill data for " + enemySkillId + " not found";
        }
        return ret;
    };
    EnemySkillParser.prototype.createEnemySkillTree = function (program) {
        var ret = new EnemySkillDecisionTree();
        if (program.length == 0) {
            ret.rootNode = new EnemySkillDecisionTreeNode();
            ret.rootNode.text = "No data available";
            return ret;
        }
        ret.preemptiveEnabled = this.getEnemySkill(program[0]).internalEffectId == 49;
        ret.rootNode = new EnemySkillDecisionTreeNode();
        ret.rootNode.text = "Start";
        if (this.u54 > 0) {
            ret.rootNode.text += " and increase onetime by 1, to a maximum of " + this.u53;
        }
        ret.rootNode.children.push(this.buildNode(ret.preemptiveEnabled ? 1 : 0, program));
        return ret;
    };
    EnemySkillParser.prototype.buildNode = function (programIndex, program) {
        if (programIndex >= program.length) {
            return this.endNode();
        }
        var nextInstruction = program[programIndex];
        var enemySkill = this.getEnemySkill(nextInstruction);
        //combine implicit HP checks with onetimes
        if ((enemySkill.aiArgs[1] != 100 && enemySkill.aiArgs[2] != 4) || (enemySkill.aiArgs[3] != 0)) {
            var ret = new EnemySkillDecisionTreeNode();
            if (enemySkill.aiArgs[1] != 100 && enemySkill.aiArgs[2] != 4) {
                ret.text = "If HP > " + enemySkill.aiArgs[1] + "%";
                if (enemySkill.aiArgs[3] == 0) {
                    ret.children.push(this.buildNodeIgnoreAi(programIndex, program));
                }
            }
            if (enemySkill.aiArgs[3] != 0) {
                //old version, wrapped in u54 !=0 because I was only looking at nonrefreshing onetimes
                /*    if (this.u54 != 0) {
                        let bitFlags = this.helper.parseBitflags(enemySkill.aiArgs[3]);
                        let text: string = "AlreadyUsed[" + bitFlags[0] + "]"; // TODO: support multiple?
    
                        if (enemySkill.aiArgs[1] != 100) {
                            ret.text += " and if " + text;
                        }
                        else{
                            ret.text = "If " + text;
                        }
    
                        let leftNode: EnemySkillDecisionTreeNode = new EnemySkillDecisionTreeNode();
                        ret.children.push(leftNode);
    
                        leftNode.text = "Set " + text;
    
                        leftNode.children.push(this.buildNodeIgnoreAi(programIndex, program));
    
                        ret.children.push(this.buildNode(programIndex + 1, program));
    
                        return ret;
                    } */
                //else {
                var aiNote = new EnemySkillDecisionTreeNode();
                aiNote.text = "Reduce onetime by " + enemySkill.aiArgs[3];
                if (enemySkill.aiArgs[1] != 100) {
                    ret.text += " and ";
                }
                else {
                    ret.text = "";
                }
                ret.text += "If onetime has less than " + enemySkill.aiArgs[3] + " remaining";
                ret.children.push(aiNote);
                console.log(enemySkill.aiArgs[3] + " " + programIndex);
                aiNote.children.push(this.buildNodeIgnoreAi(programIndex, program));
                // ret.children.push(this.buildNode(programIndex + 1, program));
                // }
                //return ret;
            }
            ret.children.push(this.buildNode(programIndex + 1, program));
            return ret;
        }
        // TODO: aiArgs[4] means do damage
        return this.buildNodeIgnoreAi(programIndex, program);
    };
    EnemySkillParser.prototype.buildNodeIgnoreAi = function (programIndex, program) {
        var nextInstruction = program[programIndex];
        return this.rawBuildSingleNode(nextInstruction.enemySkillId, nextInstruction.ai, nextInstruction.rnd, programIndex, program);
    };
    EnemySkillParser.prototype.rawBuildSingleNode = function (enemySkillId, ai, rnd, programIndex, program) {
        var enemySkill = this.getEnemySkillById(enemySkillId);
        var node = new EnemySkillDecisionTreeNode();
        if (enemySkill.name) {
            node.name = enemySkill.name;
        }
        // Force end path
        if (enemySkill.internalEffectId == 36) {
            return this.endNode();
        }
        // Jumping around and flag shit
        if (enemySkill.internalEffectId == 43) {
            var flags = this.helper.parseBitflags(ai);
            node.name = "";
            node.text = "If Flag[" + flags[0] + "]";
            if (flags.length > 1) {
                for (var i = 1; i < flags.length; i++) {
                    node.text += " and Flag[" + i + "]";
                }
            }
            // Add false
            node.children.push(this.buildNode(programIndex + 1, program));
            // Add true
            node.children.push(this.buildNode(rnd - 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 28 || enemySkill.internalEffectId == 29) {
            node.text = "If enemy HP " + (enemySkill.internalEffectId == 28 ? "<=" : ">=") + " " + ai + "%";
            node.name = "";
            // Add false
            node.children.push(this.buildNode(programIndex + 1, program));
            // Add true
            node.children.push(this.buildNode(rnd - 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 22 || enemySkill.internalEffectId == 24) {
            var flags = this.helper.parseBitflags(ai);
            node.name = "";
            node.text = (enemySkill.internalEffectId == 22 ? "Enable" : "Disable") + " Flag[" + flags[0] + "]";
            if (flags.length > 1) {
                for (var i = 1; i < flags.length; i++) {
                    node.text += " and Flag[" + flags[i] + "]";
                }
            }
            node.children.push(this.buildNode(programIndex + 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 30 || enemySkill.internalEffectId == 31 || enemySkill.internalEffectId == 32 || enemySkill.internalEffectId == 33 || enemySkill.internalEffectId == 34 || enemySkill.internalEffectId == 35) {
            node.text = "If " + (enemySkill.internalEffectId < 33 ? "counter" : "enemy level") + " " + (enemySkill.internalEffectId % 3 == 0 ? "below" : (enemySkill.internalEffectId % 3 == 1 ? "equal to" : "above")) + " " + ai;
            node.name = "";
            //add false
            node.children.push(this.buildNode(programIndex + 1, program));
            //add true
            node.children.push(this.buildNode(rnd - 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 52) {
            node.name = "";
            node.text = "If other enemies defeated";
            //add false
            node.children.push(this.buildNode(programIndex + 1, program));
            //add true
            var trueNode = new EnemySkillDecisionTreeNode();
            trueNode.name = enemySkill.name;
            trueNode.text = "Revive other enemy with " + enemySkill.skillArgs[0] + "% HP.";
            node.children.push(trueNode);
            return node;
        }
        if (enemySkill.internalEffectId == 90) {
            node.text = "If following cards on team:" + enemySkill.skillArgs.toString();
            //add false
            node.children.push(this.buildNode(programIndex + 1, program));
            //add true
            node.children.push(this.buildNode(rnd - 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 113) {
            node.text = "If at least " + ai + " combos made last turn";
            node.name = "";
            //add false
            node.children.push(this.buildNode(programIndex + 1, program));
            //add true
            node.children.push(this.buildNode(rnd - 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 120) {
            node.text = "If " + ai + " enemies remain";
            node.name = "";
            //add false
            node.children.push(this.buildNode(programIndex + 1, program));
            //add true
            node.children.push(this.buildNode(rnd - 1, program));
            return node;
        }
        // Actual effects
        if (enemySkill.internalEffectId == 1) {
            node.text = "Bind all?. params " + enemySkill.skillArgs[0] + enemySkill.skillArgs[1] + enemySkill.skillArgs[2];
            return node;
        }
        if (enemySkill.internalEffectId == 2) {
            node.text = "Bind attr?. params " + enemySkill.skillArgs[0] + enemySkill.skillArgs[1] + enemySkill.skillArgs[2];
            return node;
        }
        if (enemySkill.internalEffectId == 3) {
            node.text = "Bind type?. params " + enemySkill.skillArgs[0] + enemySkill.skillArgs[1] + enemySkill.skillArgs[2];
            return node;
        }
        if (enemySkill.internalEffectId == 4 || enemySkill.internalEffectId == 12 || enemySkill.internalEffectId == 13 || enemySkill.internalEffectId == 56) {
            node.text = "orb convert id " + enemySkill.internalEffectId + ". params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 5 || enemySkill.internalEffectId == 62) {
            node.text = "blind. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 6) {
            node.text = "Dispel. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 7 || enemySkill.internalEffectId == 86) {
            node.text = "Enemy recovers " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[0], enemySkill.skillArgs[1]) + "% HP.";
            return node;
        }
        if (enemySkill.internalEffectId == 8) {
            node.text = "Normal attack next turn, at " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[0], enemySkill.skillArgs[1]) + "% atk.";
            return node;
        }
        if (enemySkill.internalEffectId == 14) {
            node.text = "Skill bind for " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[0], enemySkill.skillArgs[1]) + "turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 15) {
            var minHits = enemySkill.skillArgs[0];
            var maxHits = enemySkill.skillArgs[1];
            var damage = enemySkill.skillArgs[2];
            node.text = "Deal " + this.helper.getHumanReadableNumber(damage) + "% damage " + this.helper.getHumanReadableNumberRange(minHits, maxHits) + " times.";
            return node;
        }
        if (enemySkill.internalEffectId == 16) {
            node.text = "Skip turn.";
            return node;
        }
        if (enemySkill.internalEffectId == 17 || enemySkill.internalEffectId == 18 || enemySkill.internalEffectId == 19) {
            node.text = "attack boost, id " + enemySkill.internalEffectId + ". params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 20) {
            var mainNode = new EnemySkillDecisionTreeNode();
            mainNode.text = "If no active status shield";
            node.text = "Status shield " + enemySkill.skillArgs[0] + "turns.";
            //false
            mainNode.children.push(this.buildNode(programIndex + 1, program));
            //true
            mainNode.children.push(node);
            return mainNode;
        }
        if (enemySkill.internalEffectId == 25) {
            node.text = "Set counter to " + ai;
            return node;
        }
        if (enemySkill.internalEffectId == 26) {
            node.text = "Increase counter by 1";
            return node;
        }
        if (enemySkill.internalEffectId == 27) {
            node.text = "Decrease counter by 1";
            return node;
        }
        if (enemySkill.internalEffectId == 39) {
            node.text = "time debuff. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 40) {
            node.text = "self destruct.";
            return node;
        }
        if (enemySkill.internalEffectId == 46) {
            node.text = "attribute change. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 47) {
            node.text = "Normal attack at " + enemySkill.skillArgs[0] + "% ATK.";
            return node;
        }
        if (enemySkill.internalEffectId == 48) {
            var damage = enemySkill.skillArgs[0];
            var fromColor = ColorAttribute[ColorAttribute[enemySkill.skillArgs[1]]];
            var toColor = ColorAttribute[ColorAttribute[enemySkill.skillArgs[2]]];
            node.text = "Convert " + this.helper.getHumanReadableColors([fromColor]) + " orbs to " + this.helper.getHumanReadableColors([toColor]) + ". Deal " + this.helper.getHumanReadableNumber(damage) + "% damage.";
            return node;
        }
        if (enemySkill.internalEffectId == 50) {
            var gravityAmount = enemySkill.skillArgs[0];
            node.text = this.helper.getHumanReadableNumber(gravityAmount) + "% Gravity";
            return node;
        }
        if (enemySkill.internalEffectId == 53) {
            var colors = this.helper.parseColorBitflags(enemySkill.skillArgs[2]);
            node.text = "Absorbs " + this.helper.getHumanReadableColors(colors) + " for " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[0], enemySkill.skillArgs[1]) + " turns.";
            node.children.push(this.buildNode(programIndex + 1, program));
            return node;
        }
        if (enemySkill.internalEffectId == 54) {
            node.text = "bind 54. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 55) {
            node.text = "Heals player HP by " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[0], enemySkill.skillArgs[1]) + "%.";
            return node;
        }
        if (enemySkill.internalEffectId == 60 || enemySkill.internalEffectId == 61 || enemySkill.internalEffectId == 64 || enemySkill.internalEffectId == 92 || enemySkill.internalEffectId == 102) {
            node.text = "orb spawn " + enemySkill.internalEffectId + ". params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 63) {
            var damage = enemySkill.skillArgs[0];
            var minDuration = enemySkill.skillArgs[1];
            var maxDuration = enemySkill.skillArgs[2];
            // Warning: enemySkill.skillArgs[3] may be null
            var cardCount = enemySkill.skillArgs[4];
            node.text = "Binds " + cardCount + " card(s) for " + this.helper.getHumanReadableNumberRange(minDuration, maxDuration) + " turns. Deal " + this.helper.getHumanReadableNumber(damage) + "% damage.";
            return node;
        }
        if (enemySkill.internalEffectId == 65) {
            node.text = "bind 65. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 66) {
            node.text = "Skip turn.";
            return node;
        }
        if (enemySkill.internalEffectId == 67) {
            node.text = "Absorbs " + enemySkill.skillArgs[2] + " or less combos for " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[0], enemySkill.skillArgs[1]) + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 68) {
            node.text = "Change skyfall. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 69) {
            node.text = "Ondeath transform.";
            return node;
        }
        if (enemySkill.internalEffectId == 71) {
            node.text = "Voids damage of " + enemySkill.skillArgs[2] + " for " + enemySkill.skillArgs[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 72) {
            node.text = "Passive attr shield " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 73) {
            node.text = "Resolve " + enemySkill.skillArgs[0] + "%";
            return node;
        }
        if (enemySkill.internalEffectId == 74) {
            node.text = "" + enemySkill.skillArgs[1] + "% shield for " + enemySkill.skillArgs[0] + " turn.";
            return node;
        }
        if (enemySkill.internalEffectId == 75) {
            node.text = "Leaderswap for " + enemySkill.skillArgs[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 76) {
            node.text = "colchange 76. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 77) {
            node.text = "colchange 77. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 78) {
            node.text = "rowchange 78. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 79) {
            node.text = "rowchange 79. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 81) {
            node.text = "boardchange 81. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 83) {
            // Combo skill
            var nodes = [];
            for (var i = 0; i < enemySkill.skillArgs.length; i++) {
                var node_1 = this.rawBuildSingleNode(enemySkill.skillArgs[i], ai, rnd, programIndex, program);
                if (node_1.children.length != 0) {
                    node_1.text = "bork";
                    //nodes.push(node);
                    //return node;
                    //throw "Unexpected: multi skill node (83) contains children";
                }
                nodes.push(node_1);
            }
            if (nodes.length == 0) {
                throw "Unexpected: multi skill node (83) has no skill args or failed to parse";
            }
            for (var i = 0; i < nodes.length - 1; i++) {
                nodes[i].children.push(nodes[i + 1]);
            }
            return nodes[0];
        }
        if (enemySkill.internalEffectId == 84) {
            node.text = "boardchange 84. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 85) {
            node.text = "boardchange 85. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 87) {
            node.text = "Damage absorb of " + enemySkill.skillArgs[1] + " for " + enemySkill.skillArgs[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 88) {
            node.text = "Awoken bind " + enemySkill.skillArgs[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 89) {
            node.text = "Skill delay " + enemySkill.skillArgs[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 94) {
            node.text = "Lock orbs. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 95) {
            node.text = "Ondeath trigger skill " + enemySkill.skillArgs[0];
            return node;
        }
        if (enemySkill.internalEffectId == 96) {
            node.text = "locked skyfall. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 97) {
            node.text = "Superblind random " + enemySkill.skillArgs[0] + " orbs for " + this.helper.getHumanReadableNumberRange(enemySkill.skillArgs[1], enemySkill.skillArgs[2]) + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 98) {
            node.text = "superblind specific pattern. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 99) {
            node.text = "tape row. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 100) {
            node.text = "tape column. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 101) {
            node.text = "??? 101. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 103) {
            node.text = "spawn bombs. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 104) {
            node.text = "Clouds. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 105) {
            node.text = "Player rcv " + enemySkill.skillArgs[1] + "x for " + enemySkill.skillArgs[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 106) {
            node.text = "Passive turnchange to " + enemySkill.skillArgs[1] + " at " + enemySkill.skillArgs[0] + "%";
            return node;
        }
        if (enemySkill.internalEffectId == 107) {
            node.text = "Unmatchable colours. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 108) {
            node.text = "orb convert 108. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 109) {
            node.text = "Random " + enemySkill.skillArgs[2] + " spinners at " + enemySkill.skillArgs[1] + " speed for " + enemySkill[0] + " turns.";
            return node;
        }
        if (enemySkill.internalEffectId == 110) {
            node.text = "Spinner pattern. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 112) {
            node.text = "Target fixed to self. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 118) {
            node.text = "resist damage from types. params " + enemySkill.skillArgs.toString();
            return node;
        }
        if (enemySkill.internalEffectId == 119) {
            node.text = "Invincible.";
            return node;
        }
        if (enemySkill.internalEffectId == 121) {
            node.text = "Remove invincible.";
            return node;
        }
        node.text = "UNKNOWN " + enemySkill.internalEffectId;
        return node;
    };
    EnemySkillParser.prototype.endNode = function () {
        var ret = new EnemySkillDecisionTreeNode();
        ret.text = "End";
        return ret;
    };
    return EnemySkillParser;
}());
var LeaderSkillStatEffect = /** @class */ (function () {
    function LeaderSkillStatEffect() {
        this.hp = 0;
        this.atk = 0;
        this.rcv = 0;
        this.shield = 0;
    }
    LeaderSkillStatEffect.prototype.multiply = function (other) {
        this.hp = this.hp * other.hp;
        this.atk = this.atk * other.atk;
        this.rcv = this.rcv * other.rcv;
        if (this.shield == 0 || other.shield == 0) {
            this.shield = this.shield + other.shield;
        }
        else {
            var newShield = 100 - ((100 - this.shield) * (100 - other.shield) / 100);
            this.shield = newShield;
        }
    };
    return LeaderSkillStatEffect;
}());
var PlayerSkillEffectType;
(function (PlayerSkillEffectType) {
    PlayerSkillEffectType[PlayerSkillEffectType["None"] = 0] = "None";
    PlayerSkillEffectType[PlayerSkillEffectType["ImmediateDamage"] = 1] = "ImmediateDamage";
    PlayerSkillEffectType[PlayerSkillEffectType["Burst"] = 2] = "Burst";
    PlayerSkillEffectType[PlayerSkillEffectType["Shield"] = 3] = "Shield";
    PlayerSkillEffectType[PlayerSkillEffectType["ImmediateHeal"] = 4] = "ImmediateHeal";
    PlayerSkillEffectType[PlayerSkillEffectType["HealOverTime"] = 5] = "HealOverTime";
    PlayerSkillEffectType[PlayerSkillEffectType["OrbChange"] = 6] = "OrbChange";
    PlayerSkillEffectType[PlayerSkillEffectType["Poison"] = 7] = "Poison";
    PlayerSkillEffectType[PlayerSkillEffectType["ChangeTheWorld"] = 8] = "ChangeTheWorld";
    PlayerSkillEffectType[PlayerSkillEffectType["Gravity"] = 9] = "Gravity";
    PlayerSkillEffectType[PlayerSkillEffectType["OrbRefresh"] = 10] = "OrbRefresh";
    PlayerSkillEffectType[PlayerSkillEffectType["Delay"] = 11] = "Delay";
    PlayerSkillEffectType[PlayerSkillEffectType["DefenseBreak"] = 12] = "DefenseBreak";
    PlayerSkillEffectType[PlayerSkillEffectType["RecoveryBuff"] = 13] = "RecoveryBuff";
    PlayerSkillEffectType[PlayerSkillEffectType["MassAttack"] = 14] = "MassAttack";
    PlayerSkillEffectType[PlayerSkillEffectType["EnhanceOrbs"] = 15] = "EnhanceOrbs";
    PlayerSkillEffectType[PlayerSkillEffectType["CounterAttack"] = 16] = "CounterAttack";
    PlayerSkillEffectType[PlayerSkillEffectType["Leaderswap"] = 17] = "Leaderswap";
    PlayerSkillEffectType[PlayerSkillEffectType["Bindclear"] = 18] = "Bindclear";
    PlayerSkillEffectType[PlayerSkillEffectType["AwokenBindClear"] = 19] = "AwokenBindClear";
    PlayerSkillEffectType[PlayerSkillEffectType["RandomSkill"] = 20] = "RandomSkill";
    PlayerSkillEffectType[PlayerSkillEffectType["IncreaseSkyfall"] = 21] = "IncreaseSkyfall";
    PlayerSkillEffectType[PlayerSkillEffectType["EnhancedSkyfall"] = 22] = "EnhancedSkyfall";
    PlayerSkillEffectType[PlayerSkillEffectType["NoSkyfall"] = 23] = "NoSkyfall";
    PlayerSkillEffectType[PlayerSkillEffectType["TimeExtend"] = 24] = "TimeExtend";
    PlayerSkillEffectType[PlayerSkillEffectType["SelfColorChange"] = 25] = "SelfColorChange";
    PlayerSkillEffectType[PlayerSkillEffectType["EnemyColorChange"] = 26] = "EnemyColorChange";
    PlayerSkillEffectType[PlayerSkillEffectType["Haste"] = 27] = "Haste";
    PlayerSkillEffectType[PlayerSkillEffectType["LockOrbs"] = 28] = "LockOrbs";
    PlayerSkillEffectType[PlayerSkillEffectType["UnlockOrbs"] = 29] = "UnlockOrbs";
    PlayerSkillEffectType[PlayerSkillEffectType["AddCombo"] = 30] = "AddCombo";
    PlayerSkillEffectType[PlayerSkillEffectType["Void"] = 31] = "Void";
    PlayerSkillEffectType[PlayerSkillEffectType["Suicide"] = 32] = "Suicide";
    PlayerSkillEffectType[PlayerSkillEffectType["PathTrace"] = 33] = "PathTrace";
    PlayerSkillEffectType[PlayerSkillEffectType["ReduceUnmatchable"] = 34] = "ReduceUnmatchable";
    PlayerSkillEffectType[PlayerSkillEffectType["PassiveBoost"] = 101] = "PassiveBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["TypeBoost"] = 102] = "TypeBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["AttributeBoost"] = 103] = "AttributeBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["TeamBoost"] = 104] = "TeamBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["CollabBoost"] = 105] = "CollabBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["MultiplayerBoost"] = 106] = "MultiplayerBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["SkillsUsedBoost"] = 107] = "SkillsUsedBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["OrbsRemaining"] = 108] = "OrbsRemaining";
    PlayerSkillEffectType[PlayerSkillEffectType["ColorMatches"] = 109] = "ColorMatches";
    PlayerSkillEffectType[PlayerSkillEffectType["ComboCount"] = 110] = "ComboCount";
    PlayerSkillEffectType[PlayerSkillEffectType["ComboCountExact"] = 111] = "ComboCountExact";
    PlayerSkillEffectType[PlayerSkillEffectType["ComboCountAttributeRestricted"] = 112] = "ComboCountAttributeRestricted";
    PlayerSkillEffectType[PlayerSkillEffectType["LinkedOrbs"] = 113] = "LinkedOrbs";
    PlayerSkillEffectType[PlayerSkillEffectType["BonusAttack"] = 114] = "BonusAttack";
    PlayerSkillEffectType[PlayerSkillEffectType["AutoHeal"] = 115] = "AutoHeal";
    PlayerSkillEffectType[PlayerSkillEffectType["Resolve"] = 116] = "Resolve";
    PlayerSkillEffectType[PlayerSkillEffectType["ColorShield"] = 117] = "ColorShield";
    PlayerSkillEffectType[PlayerSkillEffectType["TaikoNoises"] = 118] = "TaikoNoises";
    PlayerSkillEffectType[PlayerSkillEffectType["HpConditional"] = 119] = "HpConditional";
    PlayerSkillEffectType[PlayerSkillEffectType["PassiveCounterAttack"] = 120] = "PassiveCounterAttack";
    PlayerSkillEffectType[PlayerSkillEffectType["HeartTpa"] = 121] = "HeartTpa";
    PlayerSkillEffectType[PlayerSkillEffectType["FiveOrbOneEnhanced"] = 122] = "FiveOrbOneEnhanced";
    PlayerSkillEffectType[PlayerSkillEffectType["HeartCross"] = 123] = "HeartCross";
    PlayerSkillEffectType[PlayerSkillEffectType["ColorCross"] = 124] = "ColorCross";
    PlayerSkillEffectType[PlayerSkillEffectType["DropRate"] = 125] = "DropRate";
    PlayerSkillEffectType[PlayerSkillEffectType["CoinRate"] = 126] = "CoinRate";
    PlayerSkillEffectType[PlayerSkillEffectType["ExpRate"] = 127] = "ExpRate";
    PlayerSkillEffectType[PlayerSkillEffectType["MinimumOrbCount"] = 128] = "MinimumOrbCount";
    PlayerSkillEffectType[PlayerSkillEffectType["SevenBySixBoard"] = 129] = "SevenBySixBoard";
    PlayerSkillEffectType[PlayerSkillEffectType["PassiveNoSkyfall"] = 130] = "PassiveNoSkyfall";
    PlayerSkillEffectType[PlayerSkillEffectType["PassiveTimeExtend"] = 131] = "PassiveTimeExtend";
    PlayerSkillEffectType[PlayerSkillEffectType["FixedMoveTime"] = 132] = "FixedMoveTime";
    PlayerSkillEffectType[PlayerSkillEffectType["AttributeOrTypeBoost"] = 133] = "AttributeOrTypeBoost";
    PlayerSkillEffectType[PlayerSkillEffectType["AddComboLS"] = 134] = "AddComboLS";
    PlayerSkillEffectType[PlayerSkillEffectType["LMatch"] = 135] = "LMatch";
    PlayerSkillEffectType[PlayerSkillEffectType["HealThresh"] = 136] = "HealThresh";
    PlayerSkillEffectType[PlayerSkillEffectType["TrueBonusAttack"] = 137] = "TrueBonusAttack";
    PlayerSkillEffectType[PlayerSkillEffectType["VoidPoison"] = 138] = "VoidPoison";
})(PlayerSkillEffectType || (PlayerSkillEffectType = {}));
var AddComboPlayerSkillEffect = /** @class */ (function () {
    function AddComboPlayerSkillEffect() {
        this.label = "AddCombo";
        this.type = PlayerSkillEffectType.AddCombo;
        this.combos = 0;
        this.turns = 0;
        // Placeholder for future PDC
    }
    AddComboPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Add ";
        ret += this.combos;
        ret += " combo";
        if (this.combos > 1) {
            ret += "s";
        }
        ret += " for ";
        ret += this.turns;
        ret += " turn";
        if (this.turns > 1) {
            ret += "s";
        }
        ret += ".";
        return ret;
    };
    AddComboPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.AddCombo, function(x) { return x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber() + " && x.combos " + templateVm.countComparison() + " " + templateVm.countNumber() + "; })";
    };
    AddComboPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsNumber: ko.observable(0),
            turnsComparison: ko.observable('>'),
            countNumber: ko.observable(0),
            countComparison: ko.observable('>')
        };
    };
    AddComboPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t<br />\n\tNumber of combos added <select data-bind=\"value: countComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: countNumber\"></input>\n</div>\n\t\t";
    };
    AddComboPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return AddComboPlayerSkillEffect;
}());
var AwokenBindClearPlayerSkillEffect = /** @class */ (function () {
    function AwokenBindClearPlayerSkillEffect() {
        this.label = "AwokenBindClear";
        this.type = PlayerSkillEffectType.AwokenBindClear;
        this.turns = 0;
        // Placeholder for future PDC
    }
    AwokenBindClearPlayerSkillEffect.prototype.getDescription = function () {
        return this.turns + " turn awoken bind recovery.";
    };
    AwokenBindClearPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "(CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.AwokenBindClear, function(x) { return x.turns " + templateVm.turnText() + " " + templateVm.turnCount() + "; }))";
    };
    AwokenBindClearPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnCount: ko.observable(0),
            turnText: ko.observable('>')
        };
    };
    AwokenBindClearPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t\tNumber of turns <select data-bind=\"value: turnText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnCount\"></input>\n</div>\n\t\t";
    };
    AwokenBindClearPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return AwokenBindClearPlayerSkillEffect;
}());
var BindclearPlayerSkillEffect = /** @class */ (function () {
    function BindclearPlayerSkillEffect() {
        this.label = "Bindclear";
        this.type = PlayerSkillEffectType.Bindclear;
        this.turns = 0;
        // Placeholder for future PDC
    }
    BindclearPlayerSkillEffect.prototype.getDescription = function () {
        return this.turns + " turn bind recovery.";
    };
    BindclearPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "(CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Bindclear, function(x) { return x.turns " + templateVm.turnText() + " " + templateVm.turnCount() + "; }))";
    };
    BindclearPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnCount: ko.observable(0),
            turnText: ko.observable('>')
        };
    };
    BindclearPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t\tNumber of turns <select data-bind=\"value: turnText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnCount\"></input>\n</div>\n\t\t";
    };
    BindclearPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return BindclearPlayerSkillEffect;
}());
var BurstPlayerSkillEffect = /** @class */ (function () {
    function BurstPlayerSkillEffect() {
        this.label = "Burst";
        this.type = PlayerSkillEffectType.Burst;
        this.turns = 0;
        this.awakenings = [];
        this.multiplierPerAwakening = 0;
        this.colors = [];
        this.types = [];
        this.multiplier = 0;
        // Placeholder for future PDC
    }
    BurstPlayerSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "For " + this.turns + " turns, ";
        if (this.awakenings.length > 0) {
            ret += "1+(" + this.multiplierPerAwakening + "x) ATK for every ";
            ret += helper.getHumanReadableAwakenings(this.awakenings);
            ret += " awakening on team.";
        }
        else {
            ret += this.multiplier + "x ATK for ";
            if (this.colors.length > 0) {
                ret += helper.getHumanReadableColors(this.colors);
                ret += " attributes";
            }
            if (this.types.length > 0) {
                if (this.colors.length > 0) {
                    ret += " and ";
                }
                ret += helper.getHumanReadableTypes(this.types);
                ret += " types";
            }
            ret += ".";
        }
        return ret;
    };
    BurstPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var functions = [];
        functions.push("x.turns " + templateVm.turnsComparison() + " " + templateVm.turns());
        if (templateVm.type() == 'gemstone') {
            functions.push("x.multiplierPerAwakening " + templateVm.awakeningMultiplierComparison() + " " + templateVm.awakeningMultiplier());
            var awakenings = [];
            for (var x in templateVm.awakenings) {
                if (templateVm.awakenings[x]()) {
                    awakenings.push(x);
                }
            }
            if (awakenings.length > 0) {
                var awakeningCheck = "";
                awakenings.forEach(function (v) {
                    if (awakeningCheck != "") {
                        awakeningCheck += " || ";
                    }
                    awakeningCheck += "x.awakenings.indexOf(Awakening." + Awakening[v] + ") > -1";
                });
                functions.push("(" + awakeningCheck + ")");
            }
        }
        if (templateVm.type() == 'flat') {
            functions.push("x.multiplier " + templateVm.multiplierComparison() + " " + templateVm.multiplier());
            var types = [];
            for (var x in templateVm.types) {
                if (templateVm.types[x]()) {
                    types.push(x);
                }
            }
            var typeCheck = "";
            if (types.length > 0) {
                typeCheck = "(";
                types.forEach(function (v) {
                    if (typeCheck != "(") {
                        typeCheck += " || ";
                    }
                    typeCheck += "x.types.indexOf(CardType." + CardType[v] + ") > -1";
                });
                typeCheck += ")";
            }
            var colorCheck = "";
            var colors = [];
            for (var x in templateVm.colors) {
                if (templateVm.colors[x]()) {
                    colors.push(x);
                }
            }
            if (colors.length > 0) {
                colorCheck = "(";
                colors.forEach(function (v) {
                    if (colorCheck != "(") {
                        colorCheck += " || ";
                    }
                    colorCheck += "x.colors.indexOf(ColorAttribute." + ColorAttribute[v] + ") > -1";
                });
                colorCheck += ")";
            }
            if ((typeCheck != "") && (colorCheck != "")) {
                functions.push("(" + typeCheck + " || " + colorCheck + ")");
            }
            else if (typeCheck != "" || colorCheck != "") {
                functions.push(typeCheck + "" + colorCheck);
            }
        }
        // Build the final
        var final = "";
        functions.forEach(function (check) {
            if (check == "") {
                return;
            }
            if (final != "") {
                final += " && ";
            }
            final += check;
        });
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Burst, function(x) { return " + final + "; })";
    };
    BurstPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            turns: ko.observable(0),
            turnsComparison: ko.observable('>'),
            multiplier: ko.observable(0),
            multiplierComparison: ko.observable('>'),
            awakeningMultiplier: ko.observable(0),
            awakeningMultiplierComparison: ko.observable('>'),
            awakenings: {},
            allAwakenings: BurstPlayerSkillEffect.validAwakenings,
            type: ko.observable('any'),
            allTypes: BurstPlayerSkillEffect.validTypes,
            types: {},
            allColors: [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark],
            colors: {}
        };
        ret.allAwakenings.forEach(function (v) {
            ret.awakenings[v] = ko.observable(false);
        });
        ret.allTypes.forEach(function (v) {
            ret.types[v] = ko.observable(false);
        });
        ret.allColors.forEach(function (v) {
            ret.colors[v] = ko.observable(false);
        });
        return ret;
    };
    BurstPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turns\"></input>\n\t</div>\n\t<div>\n\t\tType:\n\t\t<select data-bind=\"value: type\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"gemstone\">Gemstone / Awakening based</option>\n\t\t\t<option value=\"flat\">Flat</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: type() == 'gemstone'\">\n\t\tMultiplier per awakening <select data-bind=\"value: awakeningMultiplierComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: awakeningMultiplier\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'gemstone'\">\n\t\tAwakenings (any):\n\t\t<div data-bind=\"foreach: allAwakenings\">\n\t\t\t<label data-bind=\"asset: AwakeningAssets.getIcon($data)\"><input type=\"checkbox\" data-bind=\"checked: $parent.awakenings[$data]\"></input></label>\n\t\t</div>\n\t</div>\n\t<div data-bind=\"visible: type() == 'flat'\">\n\t\tMust apply to (any):\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><span data-bind=\"text: ColorAttribute[$data]\"></span><input type=\"checkbox\" data-bind=\"checked:$parent.colors[$data]\"></input></label>\n\t\t</div>\n\t\t<div data-bind=\"foreach: allTypes\">\n\t\t\t<label data-bind=\"asset: CardAssets.getTypeImageData($data)\"><input type=\"checkbox\" data-bind=\"checked:$parent.types[$data]\"></input></label>\n\t\t</div>\n\t</div>\n\t<div data-bind=\"visible: type() == 'flat'\">\n\t\tMultiplier <select data-bind=\"value: multiplierComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multiplier\"></input>\n\t</div>\n</div>\n";
    };
    BurstPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    BurstPlayerSkillEffect.validAwakenings = [];
    BurstPlayerSkillEffect.validTypes = [CardType.God, CardType.Dragon, CardType.Devil, CardType.Machine, CardType.Balanced, CardType.Attacker, CardType.Physical, CardType.Healer, CardType.Evo, CardType.Awakening, CardType.Enhance, CardType.Redeemable];
    return BurstPlayerSkillEffect;
}());
var ChangeTheWorldPlayerSkillEffect = /** @class */ (function () {
    function ChangeTheWorldPlayerSkillEffect() {
        this.label = "ChangeTheWorld";
        this.type = PlayerSkillEffectType.ChangeTheWorld;
        this.seconds = 0;
        // Placeholder for future PDC
    }
    ChangeTheWorldPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Move Orbs freely for ";
        ret += this.seconds;
        return ret + " seconds.";
    };
    ChangeTheWorldPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.seconds " + templateVm.durationText() + " " + templateVm.seconds();
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.ChangeTheWorld, function(x) { return " + func + "; })";
    };
    ChangeTheWorldPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            seconds: ko.observable(0),
            durationText: ko.observable('>')
        };
    };
    ChangeTheWorldPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t\tSeconds <select data-bind=\"value: durationText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: seconds\"></input>\n</div>\n\t\t";
    };
    ChangeTheWorldPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return ChangeTheWorldPlayerSkillEffect;
}());
var CounterAttackPlayerSkillEffect = /** @class */ (function () {
    function CounterAttackPlayerSkillEffect() {
        this.label = "CounterAttack";
        this.type = PlayerSkillEffectType.CounterAttack;
        this.multiplier = 0;
        this.color = ColorAttribute.None;
        this.turns = 0;
        // Placeholder for future PDC
    }
    CounterAttackPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "";
        ret += this.multiplier;
        ret += "x ";
        ret += ColorAttribute[this.color];
        ret += " counterattack for ";
        ret += this.turns;
        return ret + " turns.";
    };
    CounterAttackPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        func += " && x.multiplier " + templateVm.multComparison() + " " + templateVm.multiplierAmount();
        if (templateVm.color() != "Any") {
            func += " && x.color == ColorAttribute." + templateVm.color();
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.CounterAttack, function(x) { return " + func + "; })";
    };
    CounterAttackPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsComparison: ko.observable(">"),
            turnsNumber: ko.observable(0),
            multComparison: ko.observable(">"),
            multiplierAmount: ko.observable(0),
            color: ko.observable("Any")
        };
    };
    CounterAttackPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t\t<br />\n\t\tMultiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multiplierAmount\"></input>\n\t\t<br />\n\t\tColor <select data-bind=\"value: color\">\n\t\t<option>Any</option>\n\t\t<option>Fire</option>\n\t\t<option>Water</option>\n\t\t<option>Wood</option>\n\t\t<option>Light</option>\n\t\t<option>Dark</option>\n\t\t</select>\n\t</div>\n\t\t";
    };
    CounterAttackPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return CounterAttackPlayerSkillEffect;
}());
var DefenseBreakPlayerSkillEffect = /** @class */ (function () {
    function DefenseBreakPlayerSkillEffect() {
        this.label = "DefenseBreak";
        this.type = PlayerSkillEffectType.DefenseBreak;
        this.reduction = 0;
        this.turns = 0;
        // Placeholder for future PDC
    }
    DefenseBreakPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Reduces enemy defense by ";
        ret += this.reduction;
        ret += "% for ";
        ret += this.turns;
        return ret + " turns.";
    };
    DefenseBreakPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        func += "&& x.reduction " + templateVm.redComparison() + " " + templateVm.redAmount();
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.DefenseBreak, function(x) { return " + func + "; })";
    };
    DefenseBreakPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsNumber: ko.observable(0),
            turnsComparison: ko.observable('>'),
            redAmount: ko.observable(0),
            redComparison: ko.observable('>')
        };
    };
    DefenseBreakPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t\t<br />\n\t\tReduction amount <select data-bind=\"value: redComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: redAmount\"></input>\n\t</div>\n\t\t";
    };
    DefenseBreakPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return DefenseBreakPlayerSkillEffect;
}());
var DelayPlayerSkillEffect = /** @class */ (function () {
    function DelayPlayerSkillEffect() {
        this.label = "Delay";
        this.type = PlayerSkillEffectType.Delay;
        this.turns = 0;
        // Placeholder for future PDC
    }
    DelayPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Delays enemies for  ";
        ret += this.turns;
        return ret + " turns.";
    };
    DelayPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Delay, function(x) { return " + func + "; })";
    };
    DelayPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsComparison: ko.observable(">"),
            turnsNumber: ko.observable(0)
        };
    };
    DelayPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t</div>\n\t\t";
    };
    DelayPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return DelayPlayerSkillEffect;
}());
var EnemyColorChangePlayerSkillEffect = /** @class */ (function () {
    function EnemyColorChangePlayerSkillEffect() {
        this.label = "EnemyColorChange";
        this.type = PlayerSkillEffectType.EnemyColorChange;
        this.color = ColorAttribute.None;
        this.unknownValue = 0;
        // Placeholder for future PDC
    }
    EnemyColorChangePlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Changes all enemies' attribute to ";
        ret += ColorAttribute[this.color];
        return ret + ". Bypasses status shields";
    };
    EnemyColorChangePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "true";
        if (templateVm.color() != "Any") {
            func = "x.color == ColorAttribute." + templateVm.color();
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.EnemyColorChange, function(x) { return " + func + "; })";
    };
    EnemyColorChangePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            color: ko.observable("Any")
        };
    };
    EnemyColorChangePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\tColor <select data-bind=\"value: color\">\n\t<option>Any</option>\n\t<option>Fire</option>\n\t<option>Water</option>\n\t<option>Wood</option>\n\t<option>Light</option>\n\t<option>Dark</option>\n\t</select>\n</div>\n\t\t";
    };
    EnemyColorChangePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return EnemyColorChangePlayerSkillEffect;
}());
var EnhancedSkyfallPlayerSkillEffect = /** @class */ (function () {
    function EnhancedSkyfallPlayerSkillEffect() {
        this.label = "EnhancedSkyfall";
        this.type = PlayerSkillEffectType.EnhancedSkyfall;
        this.turns = 0;
        this.chance = 0;
        // Placeholder for future PDC
    }
    EnhancedSkyfallPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "";
        ret += this.chance;
        ret += "% chance for enhanced skyfall orbs for ";
        ret += this.turns;
        return ret + " turns.";
    };
    EnhancedSkyfallPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        func += " && x.chance " + templateVm.chanceComparison() + " " + templateVm.chanceValue();
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.EnhancedSkyfall, function(x) { return " + func + "; })";
    };
    EnhancedSkyfallPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsNumber: ko.observable(0),
            turnsComparison: ko.observable('>'),
            chanceValue: ko.observable(0),
            chanceComparison: ko.observable('>')
        };
    };
    EnhancedSkyfallPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t\t<br />\n\t\t%chance <select data-bind=\"value: chanceComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: chanceValue\"></input>\n\t</div>\n\t\t";
    };
    EnhancedSkyfallPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return EnhancedSkyfallPlayerSkillEffect;
}());
var EnhanceOrbsPlayerSkillEffect = /** @class */ (function () {
    function EnhanceOrbsPlayerSkillEffect() {
        this.label = "EnhanceOrbs";
        this.type = PlayerSkillEffectType.EnhanceOrbs;
        this.colors = [];
        // Placeholder for future PDC
    }
    //note: enhances have an otherwise unused possible "potency" which currently are
    //all 6, for 6% per orb. There is 1 debug case with a 100 here with a name "enhanced heal"
    //but normal heal enhances are also 6%. Possible this could be used in future
    EnhanceOrbsPlayerSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Enhances ";
        ret += helper.getHumanReadableColors(this.colors);
        ret += " orbs; 6% per orb";
        return ret;
    };
    EnhanceOrbsPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.colors.length " + templateVm.numberOfColorsComparison() + " " + templateVm.numberOfColors();
        for (var obj in templateVm.enhanceColors) {
            if (templateVm.enhanceColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.EnhanceOrbs, function(x) { return " + func + "; })";
    };
    EnhanceOrbsPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            enhanceColors: [],
            numberOfColors: ko.observable(0),
            numberOfColorsComparison: ko.observable('>')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark, ColorAttribute.Heal];
        allColors.forEach(function (c) {
            ret.enhanceColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    EnhanceOrbsPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of colors <select data-bind=\"value: numberOfColorsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: numberOfColors\"></input>\n\t</div>\n\t<div class=\"adv-search-option\">\n\t\tMust enhance these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.enhanceColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t\t";
    };
    EnhanceOrbsPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return EnhanceOrbsPlayerSkillEffect;
}());
var GravityPlayerSkillEffect = /** @class */ (function () {
    function GravityPlayerSkillEffect() {
        this.label = "Gravity";
        this.type = PlayerSkillEffectType.Gravity;
        this.trueGrav = false;
        this.percentage = 0;
        // Placeholder for future PDC
    }
    GravityPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Reduce all enemies' current HP by ";
        ret += this.percentage;
        ret += "%";
        if (this.trueGrav) {
            ret += " of their max HP";
        }
        return ret + ".";
    };
    GravityPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.percentage " + templateVm.gravComparison() + " " + templateVm.gravAmount();
        if (templateVm.gravType() == "Gravity") {
            func += " && x.trueGrav == false";
        }
        if (templateVm.gravType() == "True Gravity") {
            func += " && x.trueGrav == true";
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Gravity, function(x) { return " + func + "; })";
    };
    GravityPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            gravComparison: ko.observable(">"),
            gravAmount: ko.observable(0),
            gravType: ko.observable("Any")
        };
    };
    GravityPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\nType <select data-bind=\"value: gravType\">\n<option>Any</option>\n<option>Gravity</option>\n<option>True Gravity</option>\n</select>\nPercentage <select data-bind=\"value: gravComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: gravAmount\"></input>\t\n</div>\n\t\t";
    };
    GravityPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return GravityPlayerSkillEffect;
}());
var HastePlayerSkillEffect = /** @class */ (function () {
    function HastePlayerSkillEffect() {
        this.label = "Haste";
        this.type = PlayerSkillEffectType.Haste;
        this.minTurns = 0;
        this.maxTurns = 0;
        // Placeholder for future PDC
    }
    HastePlayerSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Team skills charged by ";
        ret += helper.getHumanReadableNumberRange(this.minTurns, this.maxTurns);
        ret += " turns.";
        return ret;
    };
    HastePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var condition = "";
        if (templateVm.splitMinMax()) {
            var minPart = "x.minTurns " + templateVm.minTurnsComparison() + " " + templateVm.minTurnsNumber();
            var maxPart = "x.maxTurns " + templateVm.maxTurnsComparison() + " " + templateVm.maxTurnsNumber();
            condition = minPart + " && " + maxPart;
        }
        else {
            switch (templateVm.minTurnsComparison()) {
                case ">":
                case ">=":
                    condition = "x.minTurns " + templateVm.minTurnsComparison() + " ";
                    break;
                case "<":
                case "<=":
                    condition = "x.maxTurns " + templateVm.minTurnsComparison() + " ";
                    break;
                case "==":
                    condition = "x.minTurns == x.maxTurns && x.minTurns == ";
            }
            condition += templateVm.minTurnsNumber();
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Haste, function(x) { return " + condition + "; })";
    };
    HastePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            splitMinMax: ko.observable(false),
            minTurnsNumber: ko.observable(0),
            minTurnsComparison: ko.observable('>'),
            maxTurnsNumber: ko.observable(0),
            maxTurnsComparison: ko.observable('>')
        };
    };
    HastePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t<label>Split min / max? <input type=\"checkbox\" data-bind=\"checked: splitMinMax\"></input></label>\n\t<br />\n\t<div data-bind=\"visible: splitMinMax\">\n\t\tMinimum Number of turns <select data-bind=\"value: minTurnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: minTurnsNumber\"></input>\n\t\t<br />\n\t\tMaximum Number of turns <select data-bind=\"value: maxTurnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: maxTurnsNumber\"></input>\n\t</div>\n\t<div data-bind=\"visible: !splitMinMax()\">\n\t\tNumber of turns <select data-bind=\"value: minTurnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: minTurnsNumber\"></input>\n\t</div>\n</div>\n\t\t";
    };
    HastePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return HastePlayerSkillEffect;
}());
var HealOverTimePlayerSkillEffect = /** @class */ (function () {
    function HealOverTimePlayerSkillEffect() {
        this.label = "HealOverTime";
        this.type = PlayerSkillEffectType.HealOverTime;
        this.unknownValue = 0;
        this.maxHPPercentage = 0;
        this.turns = 0;
        // Placeholder for future PDC
    }
    HealOverTimePlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Heal ";
        ret += this.maxHPPercentage;
        ret += "% of max HP every turn for ";
        ret += this.turns;
        return ret + " turns.";
    };
    HealOverTimePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.HealOverTime, function(x) { return x.turns " + templateVm.turnsComparison() + " " + templateVm.turnCount() + " && x.maxHPPercentage " + templateVm.percentageText() + " " + templateVm.percentageHealed() + "; })";
    };
    HealOverTimePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnCount: ko.observable(0),
            turnsComparison: ko.observable(">"),
            percentageHealed: ko.observable(0),
            percentageText: ko.observable(">")
        };
    };
    HealOverTimePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnCount\"></input>\n\t<br />\n\tPercentage healed per turn <select data-bind=\"value: percentageText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: percentageHealed\"></input>\n</div>\n\t\t";
    };
    HealOverTimePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return HealOverTimePlayerSkillEffect;
}());
var ImmediateDamagePlayerSkillEffect = /** @class */ (function () {
    function ImmediateDamagePlayerSkillEffect() {
        this.label = "ImmediateDamage";
        this.type = PlayerSkillEffectType.ImmediateDamage;
        this.targetedColor = ColorAttribute.None;
        this.isMultiTarget = false;
        this.isTrueDamage = false;
        this.isCardElement = false; //this is True when color is the user's
        this.element = ColorAttribute.None; //left alone as None when above isCardElement is True
        this.damage = 0; //changed from FixedDamage. Rely on isTrueDamage to know if it's laser or not
        this.multiplier = 0;
        this.maxMultiplier = 0; //For ranges like hello kitty joker. When there's a range of damages, will use this
        this.atkMultiplierAtOneHp = 0;
        this.atkMultiplierAtFullHp = 0;
        this.teamAtkMultiplier = 0;
        this.teamAtkMultiplierColors = [];
        this.teamHpMultiplier = 0;
        this.numberOfAttacks = 1;
        this.drainPercentage = 0;
        // Placeholder for future PDC
    }
    ImmediateDamagePlayerSkillEffect.prototype.getDescription = function () {
        //is laser? State laser with Damage, also check atk count
        //is not laser? Check Damage and Element
        //if not damage, check Multiplier and Maxmultiplier
        //if none, check atkmultat1HP and atkmultfullhp
        //if none, check teamatk
        //check drain
        var ret = "Inflict ";
        var helper = new PlayerSkillDescriptionHelper();
        if (this.isTrueDamage == true) {
            ret += helper.getHumanReadableNumber(this.damage) + " true damage to ";
            if (this.isMultiTarget == true) {
                ret += "all enemies";
            }
            else {
                ret += "1 enemy";
            }
            if (this.numberOfAttacks > 1) {
                ret += " " + this.numberOfAttacks + " times";
            }
            ret += ".";
        }
        else {
            if (this.damage > 0) {
                //some nonlaser damage value. Either elemental target or element
                ret += helper.getHumanReadableNumber(this.damage) + " ";
                if (this.isCardElement == true) {
                    ret += "damage of this card's attribute to ";
                }
                else {
                    ret += helper.getHumanReadableColor(this.element) + " damage to ";
                }
                if (this.targetedColor != ColorAttribute.None) {
                    ret += helper.getHumanReadableColor(this.targetedColor);
                    ret += " enemies.";
                }
                else {
                    if (this.isMultiTarget == true) {
                        ret += "all enemies.";
                    }
                    else {
                        ret += "1 enemy.";
                    }
                }
            }
            else {
                //simple. Now either normal mult, team atk, or grudge strike
                ret += "a ";
                if (this.multiplier > 0) {
                    ret += this.multiplier + "x";
                    if (this.maxMultiplier > 0) {
                        ret += "-" + this.maxMultiplier + "x";
                    }
                    if (this.isCardElement == true) {
                        ret += " attack of this card's attribute to ";
                    }
                    else {
                        ret += " " + helper.getHumanReadableColor(this.element) + " attack to ";
                    }
                    if (this.isMultiTarget == true) {
                        ret += "all enemies.";
                    }
                    else {
                        ret += "1 enemy.";
                    }
                }
                if (this.atkMultiplierAtFullHp > 0) {
                    ret += helper.getHumanReadableColor(this.element) + " attack to ";
                    if (this.isMultiTarget == true) {
                        ret += "all enemies ";
                    }
                    else {
                        ret += "1 enemy ";
                    }
                    ret += "based on HP. ";
                    ret += this.atkMultiplierAtFullHp + "x at full HP, up to ";
                    ret += this.atkMultiplierAtOneHp + "x at 1 HP.";
                }
                if (this.teamAtkMultiplier > 0) {
                    ret += helper.getHumanReadableColor(this.element) + " attack to ";
                    if (this.isMultiTarget == true) {
                        ret += "all enemies ";
                    }
                    else {
                        ret += "1 enemy ";
                    }
                    ret += "equal to " + this.teamAtkMultiplier + "x of entire team's ";
                    ret += helper.getHumanReadableColors(this.teamAtkMultiplierColors) + " ATK.";
                }
                if (this.drainPercentage > 0) {
                    ret += "Recover " + this.drainPercentage + "% of the dealt damage as HP.";
                }
            }
        }
        return ret;
    };
    ImmediateDamagePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var functions = [];
        // Single / multi target
        if (templateVm.targetType() == 'single') {
            functions.push("x.isMultiTarget == false");
        }
        if (templateVm.targetType() == 'multi') {
            functions.push("x.isMultiTarget == true");
        }
        if (templateVm.targetType() == 'element') {
            functions.push("x.targetedColor != ColorAttribute.None");
        }
        // Target Element
        if (templateVm.targetType() == 'element') {
            var targetedElements_1 = [];
            templateVm.allColors.forEach(function (c) {
                if (templateVm.targetElement[c]()) {
                    targetedElements_1.push(c);
                }
            });
            if (targetedElements_1.length > 0) {
                var condition_1 = "";
                targetedElements_1.forEach(function (c) {
                    if (condition_1 != "") {
                        condition_1 += " || ";
                    }
                    condition_1 += "x.targetedColor == ColorAttribute." + ColorAttribute[c];
                });
                functions.push("(" + condition_1 + ")");
            }
        }
        // Add in the type restrictions
        if (templateVm.type() == 'laser') {
            functions.push('x.isTrueDamage == true');
            functions.push('x.damage > 0');
        }
        if (templateVm.type() == 'fixed') {
            functions.push('x.isTrueDamage == false');
            functions.push('x.damage > 0');
        }
        if (templateVm.type() == 'flat') {
            functions.push('x.multiplier > 0');
        }
        if (templateVm.type() == 'team') {
            functions.push('x.teamAtkMultiplier > 0');
        }
        if (templateVm.type() == 'hp') {
            functions.push('x.atkMultiplierAtOneHp > 0');
        }
        // Add in multiplier
        if (templateVm.type() == 'laser' || templateVm.type() == 'fixed') {
            functions.push('x.damage ' + templateVm.fixedDamageComparison() + " " + PlayerSkillDescriptionHelper.cleanNumber(templateVm.fixedDamage()));
        }
        if (templateVm.type() == 'flat') {
            functions.push('x.multiplier ' + templateVm.multiplierComparison() + ' ' + PlayerSkillDescriptionHelper.cleanNumber(templateVm.multiplier()));
        }
        if (templateVm.type() == 'hp') {
            functions.push('x.atkMultiplierAtOneHp ' + templateVm.atkMultiplierAtOneHpComparison() + ' ' + PlayerSkillDescriptionHelper.cleanNumber(templateVm.atkMultiplierAtOneHp()));
            functions.push('x.atkMultiplierAtFullHp ' + templateVm.atkMultiplierAtFullHpComparison() + ' ' + PlayerSkillDescriptionHelper.cleanNumber(templateVm.atkMultiplierAtFullHp()));
        }
        if (templateVm.type() == 'team') {
            functions.push('x.teamAtkMultiplier ' + templateVm.teamAtkMultiplierComparison() + ' ' + PlayerSkillDescriptionHelper.cleanNumber(templateVm.teamAtkMultiplier()));
            var teamAtkColors_1 = [];
            templateVm.allColors.forEach(function (c) {
                if (templateVm.teamAtkColor[c]()) {
                    teamAtkColors_1.push(c);
                }
            });
            if (teamAtkColors_1.length > 0) {
                var condition_2 = "";
                teamAtkColors_1.forEach(function (c) {
                    if (condition_2 != "") {
                        condition_2 += " && ";
                    }
                    condition_2 += "x.teamAtkMultiplierColors.indexOf(ColorAttribute." + ColorAttribute[c] + ") > -1";
                });
                functions.push("(" + condition_2 + ")");
            }
        }
        // Add in attackColor
        var color = templateVm.attackColor();
        if (color == 'any') {
            // Do nothing
        }
        else if (color == 'self') {
            functions.push("x.isCardElement == true");
        }
        else {
            functions.push("x.element == ColorAttribute." + color);
        }
        // Add in drain
        functions.push("x.drainPercentage " + templateVm.drainPercentComparison() + " " + PlayerSkillDescriptionHelper.cleanNumber(templateVm.drainPercent()));
        // Add in number of attacks
        functions.push("x.numberOfAttacks " + templateVm.numberOfAttacksComparison() + " " + PlayerSkillDescriptionHelper.cleanNumber(templateVm.numberOfAttacks()));
        // Build the final
        var final = "";
        functions.forEach(function (check) {
            if (check == "") {
                return;
            }
            if (final != "") {
                final += " && ";
            }
            final += check;
        });
        if (final == "") {
            final = "true";
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.ImmediateDamage, function(x) { return " + final + "; })";
    };
    ImmediateDamagePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            targetType: ko.observable(''),
            targetElement: {},
            type: ko.observable(''),
            numberOfAttacksComparison: ko.observable('>'),
            numberOfAttacks: ko.observable(0),
            attackColor: ko.observable('any'),
            drainPercentComparison: ko.observable('>='),
            drainPercent: ko.observable(0),
            isTrueDamage: ko.observable(false),
            multiplier: ko.observable(0),
            multiplierComparison: ko.observable('>'),
            atkMultiplierAtOneHp: ko.observable(0),
            atkMultiplierAtOneHpComparison: ko.observable('>'),
            atkMultiplierAtFullHp: ko.observable(0),
            atkMultiplierAtFullHpComparison: ko.observable('>'),
            teamAtkMultiplier: ko.observable(0),
            teamAtkMultiplierComparison: ko.observable('>'),
            teamAtkColor: {},
            fixedDamage: ko.observable(0),
            fixedDamageComparison: ko.observable('>'),
            allColors: []
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark];
        allColors.forEach(function (c) {
            ret.targetElement[c] = ko.observable(false);
            ret.teamAtkColor[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    ImmediateDamagePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t<div>\n\t\tTarget: \n\t\t<select data-bind=\"value: targetType\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"single\">Single Target</option>\n\t\t\t<option value=\"multi\">All Targets</option>\n\t\t\t<option value=\"element\">All Targets (Element)</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: targetType() == 'element'\">\n\t\tTargeted Elements (Any):\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.targetElement[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t<div>\n\t\tType:\n\t\t<select data-bind=\"value: type\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"laser\">Laser</option>\n\t\t\t<option value=\"fixed\">Fixed Damage</option>\n\t\t\t<option value=\"flat\">Flat Multiplier</option>\n\t\t\t<option value=\"team\">Team Multiplier</option>\n\t\t\t<option value=\"hp\">HP dependant Multiplier</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: type() == 'fixed' || type() == 'laser'\">\n\t\tDamage <select data-bind=\"value: fixedDamageComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: fixedDamage\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'flat'\">\n\t\tATK multiplier <select data-bind=\"value: multiplierComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multiplier\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'hp'\">\n\t\tATK multiplier (1 HP) <select data-bind=\"value: atkMultiplierAtOneHpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkMultiplierAtOneHp\"></input>\n\t\t<br />\n\t\tATK multiplier (Full HP) <select data-bind=\"value: atkMultiplierAtFullHpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkMultiplierAtFullHp\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'team'\">\n\t\tTeam ATK multiplier <select data-bind=\"value: teamAtkMultiplierComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: teamAtkMultiplier\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'team'\">\n\t\tTeam ATK Elements (All):\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.teamAtkColor[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t<div>\n\t\tNumber of attacks <select data-bind=\"value: numberOfAttacksComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: numberOfAttacks\"></input>\n\t</div>\n\t<div>\n\t\tAttack element:\n\t\t<select data-bind=\"value: attackColor\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"self\">Self</option>\n\t\t\t<option>None</option>\n\t\t\t<option>Fire</option>\n\t\t\t<option>Wood</option>\n\t\t\t<option>Water</option>\n\t\t\t<option>Light</option>\n\t\t\t<option>Dark</option>\t\t\t\n\t\t</select>\n\t</div>\n\t<div>\n\t\tDrain percent <select data-bind=\"value: drainPercentComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: drainPercent\"></input>\n\t</div>\n</div>\n\t\t";
    };
    ImmediateDamagePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return ImmediateDamagePlayerSkillEffect;
}());
var ImmediateHealPlayerSkillEffect = /** @class */ (function () {
    function ImmediateHealPlayerSkillEffect() {
        this.label = "ImmediateHeal";
        this.type = PlayerSkillEffectType.ImmediateHeal;
        this.awakenings = []; //narrowing functionality skipped for now
        this.amountPerAwakening = 0; //narrowing functionality skipped for now
        this.fixedAmount = 0;
        this.selfMultiplier = 0;
        this.teamMultiplier = 0;
        this.maxHPPercentage = 0;
        // Placeholder for future PDC
    }
    ImmediateHealPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Heal ";
        var helper = new PlayerSkillDescriptionHelper();
        if (this.amountPerAwakening > 0) {
            ret += this.amountPerAwakening + " HP for every ";
            ret += helper.getHumanReadableAwakenings(this.awakenings);
            ret += " Awakening on team.";
        }
        if (this.fixedAmount > 0) {
            ret += this.fixedAmount + " HP.";
        }
        if (this.selfMultiplier > 0) {
            ret += this.selfMultiplier + "x of this card's RCV.";
        }
        if (this.teamMultiplier > 0) {
            ret += this.teamMultiplier + "x of entire team's RCV.";
        }
        if (this.maxHPPercentage > 0) {
            ret += this.maxHPPercentage + "% of max HP.";
        }
        return ret;
    };
    ImmediateHealPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "true";
        if (templateVm.healType() == "Fixed Amount") {
            func = "x.fixedAmount " + templateVm.fixHealComparison() + " " + templateVm.fixedAmount() + " && x.fixedAmount != 0";
        }
        if (templateVm.healType() == "Percentage") {
            func = "x.maxHPPercentage " + templateVm.percentHealComparison() + " " + templateVm.percentHealed() + " && x.maxHPPercentage != 0";
        }
        if (templateVm.healType() == "Self Multiplier") {
            func = "x.selfMultiplier " + templateVm.selfMultHealComparison() + " " + templateVm.selfMult() + " && x.selfMultiplier != 0";
        }
        if (templateVm.healType() == "Team Multiplier") {
            func = "x.teamMultiplier " + templateVm.teamMultHealComparison() + " " + templateVm.teamMult() + " && x.teamMultiplier != 0";
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.ImmediateHeal, function(x) { return " + func + "; })";
    };
    ImmediateHealPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            healType: ko.observable("Any"),
            fixHealComparison: ko.observable(">"),
            fixedAmount: ko.observable(0),
            percentHealComparison: ko.observable(">"),
            percentHealed: ko.observable(0),
            selfMultHealComparison: ko.observable(">"),
            selfMult: ko.observable(0),
            teamMultHealComparison: ko.observable(">"),
            teamMult: ko.observable(0)
        };
    };
    ImmediateHealPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tType <select data-bind=\"value: healType\">\n\t\t<option>Any</option>\n\t\t<option>Fixed Amount</option>\n\t\t<option>Percentage</option>\n\t\t<option>Self Multiplier</option>\n\t\t<option>Team Multiplier</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: healType() == 'Fixed Amount'\">\n\t\tAmount healed <select data-bind=\"value: fixHealComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: fixedAmount\"></input>\n\t</div>\n\t<div data-bind=\"visible: healType() == 'Percentage'\">\n\t\tMax HP% healed <select data-bind=\"value: percentHealComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: percentHealed\"></input>\n\t</div>\n\t<div data-bind=\"visible: healType() == 'Self Multiplier'\">\n\t\tMultiplier <select data-bind=\"value: selfMultHealComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: selfMult\"></input>\n\t</div>\n\t<div data-bind=\"visible: healType() == 'Team Multiplier'\">\n\t\tMultiplier <select data-bind=\"value: teamMultHealComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: teamMult\"></input>\n\t</div>\n\t\t";
    };
    ImmediateHealPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return ImmediateHealPlayerSkillEffect;
}());
var IncreaseSkyfallPlayerSkillEffect = /** @class */ (function () {
    function IncreaseSkyfallPlayerSkillEffect() {
        this.label = "IncreaseSkyfall";
        this.type = PlayerSkillEffectType.IncreaseSkyfall;
        this.colors = [];
        this.percentage = 0;
        this.turns = 0;
        // Placeholder for future PDC
    }
    IncreaseSkyfallPlayerSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Increases skyfall of  ";
        ret += helper.getHumanReadableColors(this.colors);
        ret += " orbs by ";
        ret += this.percentage;
        ret += "% for ";
        ret += this.turns;
        return ret + " turns.";
    };
    IncreaseSkyfallPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.colors.length " + templateVm.numberOfColorsComparison() + " " + templateVm.numberOfColors();
        func += " && x.percentage " + templateVm.rateComparison() + " " + templateVm.rateAmount();
        func += " && x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        for (var obj in templateVm.boostColors) {
            if (templateVm.boostColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.IncreaseSkyfall, function(x) { return " + func + "; })";
    };
    IncreaseSkyfallPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            boostColors: [],
            numberOfColors: ko.observable(0),
            numberOfColorsComparison: ko.observable('>'),
            turnsComparison: ko.observable(">"),
            turnsNumber: ko.observable(0),
            rateComparison: ko.observable(">"),
            rateAmount: ko.observable(0)
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark, ColorAttribute.Heal, ColorAttribute.Jammer, ColorAttribute.Poison, ColorAttribute.MortalPoison, ColorAttribute.Bomb];
        allColors.forEach(function (c) {
            ret.boostColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    IncreaseSkyfallPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t</div>\n\t<div>\n\t\tIncrease% <select data-bind=\"value: rateComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rateAmount\"></input>\n\t</div>\n\t<div>\n\t\tNumber of colors <select data-bind=\"value: numberOfColorsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: numberOfColors\"></input>\n\t</div>\n\t<div class=\"adv-search-option\">\n\t\tBoosts these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.boostColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t\t";
    };
    IncreaseSkyfallPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return IncreaseSkyfallPlayerSkillEffect;
}());
var LeaderswapPlayerSkillEffect = /** @class */ (function () {
    function LeaderswapPlayerSkillEffect() {
        this.label = "Leaderswap";
        this.type = PlayerSkillEffectType.Leaderswap;
        // Placeholder for future PDC
    }
    LeaderswapPlayerSkillEffect.prototype.getDescription = function () {
        return "Switches places with leader. Use again to switch back.";
    };
    LeaderswapPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Leaderswap, function(x) { return true; })";
    };
    LeaderswapPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    LeaderswapPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "";
    };
    LeaderswapPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return LeaderswapPlayerSkillEffect;
}());
var LockOrbsPlayerSkillEffect = /** @class */ (function () {
    function LockOrbsPlayerSkillEffect() {
        this.label = "LockOrbs";
        this.type = PlayerSkillEffectType.LockOrbs;
        this.colors = [];
        this.unknownValue = 0;
        // Placeholder for future PDC
    }
    LockOrbsPlayerSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Locks ";
        ret += helper.getHumanReadableColors(this.colors);
        ret += " orbs.";
        return ret;
    };
    LockOrbsPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.colors.length " + templateVm.numberOfColorsComparison() + " " + templateVm.numberOfColors();
        for (var obj in templateVm.lockColors) {
            if (templateVm.lockColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.LockOrbs, function(x) { return " + func + "; })";
    };
    LockOrbsPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            lockColors: [],
            numberOfColors: ko.observable(0),
            numberOfColorsComparison: ko.observable('>')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark, ColorAttribute.Heal, ColorAttribute.Jammer, ColorAttribute.Poison, ColorAttribute.MortalPoison, ColorAttribute.Bomb];
        allColors.forEach(function (c) {
            ret.lockColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    LockOrbsPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of colors <select data-bind=\"value: numberOfColorsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: numberOfColors\"></input>\n\t</div>\n\t<div class=\"adv-search-option\">\n\t\tMust lock these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.lockColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t\t";
    };
    LockOrbsPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return LockOrbsPlayerSkillEffect;
}());
var MassAttackPlayerSkillEffect = /** @class */ (function () {
    function MassAttackPlayerSkillEffect() {
        this.label = "MassAttack";
        this.type = PlayerSkillEffectType.MassAttack;
        this.turns = 0;
        // Placeholder for future PDC
    }
    MassAttackPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Attacks become Mass Attacks for  ";
        ret += this.turns;
        return ret + " turns.";
    };
    MassAttackPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.MassAttack, function(x) { return " + func + "; })";
    };
    MassAttackPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsComparison: ko.observable(">"),
            turnsNumber: ko.observable(0)
        };
    };
    MassAttackPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t</div>\n\t\t";
    };
    MassAttackPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return MassAttackPlayerSkillEffect;
}());
var NonePlayerSkillEffect = /** @class */ (function () {
    function NonePlayerSkillEffect() {
        this.label = "";
        this.type = PlayerSkillEffectType.None;
        // Placeholder for future PDC
    }
    NonePlayerSkillEffect.prototype.getDescription = function () {
        return "";
    };
    NonePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "";
    };
    NonePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    NonePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "";
    };
    NonePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return NonePlayerSkillEffect;
}());
var NoSkyfallPlayerSkillEffect = /** @class */ (function () {
    function NoSkyfallPlayerSkillEffect() {
        this.label = "NoSkyfall";
        this.type = PlayerSkillEffectType.NoSkyfall;
        this.turns = 0;
        // Placeholder for future PDC
    }
    NoSkyfallPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "No skyfall for ";
        ret += this.turns;
        return ret + " turns.";
    };
    NoSkyfallPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.NoSkyfall, function(x) { return " + func + "; })";
    };
    NoSkyfallPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsComparison: ko.observable(">"),
            turnsNumber: ko.observable(0)
        };
    };
    NoSkyfallPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t</div>\n\t\t";
    };
    NoSkyfallPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return NoSkyfallPlayerSkillEffect;
}());
var OrbChangePlayerSkillEffect = /** @class */ (function () {
    function OrbChangePlayerSkillEffect() {
        this.label = "OrbChange";
        this.type = PlayerSkillEffectType.OrbChange;
        this.results = []; //result set. if all else empty, boardchange
        this.onlyChange = []; //X->Y change
        this.dontChange = [];
        this.rowNumbers = [];
        this.colNumbers = [];
        this.numberSpawned = 0;
        this.patterns = []; //e176. If exists, usually just 1 thing in here. If 2, they're the same colour due to how 176 works. Multicolour is multiple 176s
        // Placeholder for future PDC
    }
    OrbChangePlayerSkillEffect.prototype.getType = function () {
        if (this.rowNumbers.length != 0) {
            return "row";
        }
        if (this.colNumbers.length != 0) {
            return "col";
        }
        if (this.onlyChange.length > 0) {
            return "break";
        }
        if (this.dontChange.length == 0 && this.numberSpawned == 0 && this.patterns.length == 0) {
            return "board";
        }
        if (this.numberSpawned > 0) {
            return "random";
        }
        if (this.patterns.length > 0) {
            return "pattern";
        }
        return "unknown";
    };
    OrbChangePlayerSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "";
        if (this.onlyChange.length == 0 && this.rowNumbers.length == 0 && this.colNumbers.length == 0 && this.numberSpawned == 0 && this.patterns.length == 0) {
            //board change
            ret += "Changes all orbs to ";
            ret += helper.getHumanReadableColors(this.results);
            ret += ".";
        }
        if (this.onlyChange.length > 0) {
            //X->Y
            ret += "Changes ";
            ret += helper.getHumanReadableColors(this.onlyChange);
            ret += " orbs to ";
            if (this.results.length > 1) {
                ret += "a random mix of ";
            }
            ret += helper.getHumanReadableColors(this.results);
            ret += " orbs.";
        }
        if (this.rowNumbers.length > 0) {
            ret += "Changes ";
            ret += helper.getHumanReadableRows(this.rowNumbers);
            ret += " row into ";
            ret += helper.getHumanReadableColors(this.results);
            ret += " orbs.";
        }
        if (this.colNumbers.length > 0) {
            ret += "Changes ";
            ret += helper.getHumanReadableColumns(this.colNumbers);
            ret += " column into ";
            ret += helper.getHumanReadableColors(this.results);
            ret += " orbs.";
        }
        if (this.numberSpawned > 0) {
            ret += "Randomly spawns " + this.numberSpawned + " " + helper.getHumanReadableColors(this.results);
            if (this.dontChange.length > 0) {
                ret += " orbs from non " + helper.getHumanReadableColors(this.dontChange, "or");
            }
            ret += " orbs.";
        }
        return ret;
    };
    OrbChangePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var testFunction = [];
        testFunction.push([]);
        if (templateVm.type() != "any") {
            testFunction.forEach(function (ary) {
                ary.push("x.getType() == '" + templateVm.type() + "'");
            });
        }
        // Add in the "must include" colors
        var mustIncludeColors = [];
        for (var obj in templateVm.mustCreate) {
            var mustInclude = templateVm.mustCreate[obj]();
            if (!mustInclude) {
                continue;
            }
            var color = ColorAttribute[obj];
            mustIncludeColors.push(color);
        }
        if (mustIncludeColors.length > 0) {
            var newAry = [];
            mustIncludeColors.forEach(function (c) {
                testFunction.forEach(function (ary) {
                    var aryCopy = JSON.parse(JSON.stringify(ary));
                    aryCopy.push("x.results.indexOf(ColorAttribute." + c + ") > -1");
                    newAry.push(aryCopy);
                });
            });
            testFunction = newAry;
        }
        // Add in board orb color count
        if (templateVm.type() == 'board') {
            testFunction.forEach(function (ary) {
                ary.push("x.results.length " + templateVm.numberOfColorsComparison() + " " + templateVm.numberOfColors());
            });
        }
        // Add in random
        if (templateVm.type() == 'random') {
            testFunction.forEach(function (ary) {
                ary.push("x.numberSpawned " + templateVm.orbsSpawnedComparison() + " " + templateVm.orbsSpawned());
            });
        }
        // Add pattern
        if (templateVm.type() == 'pattern' && templateVm.spawnedPatterns() != "any") {
            testFunction.forEach(function (ary) {
                ary.push("x.patterns.indexOf(SpawnPattern." + templateVm.spawnedPatterns() + ") > -1");
            });
        }
        // Add in column
        if (templateVm.type() == 'col' && templateVm.colAffected() != "any") {
            testFunction.forEach(function (ary) {
                ary.push("x.colNumbers.indexOf(" + templateVm.colAffected() + ") > -1");
            });
        }
        // Add in Row
        if (templateVm.type() == 'row' && templateVm.rowAffected() != "any") {
            testFunction.forEach(function (ary) {
                ary.push("x.rowNumbers.indexOf(" + templateVm.rowAffected() + ") > -1");
            });
        }
        // Add in must-create
        if (templateVm.type() == 'break') {
            var _loop_5 = function () {
                var mustBreak = templateVm.mustBreak[obj]();
                if (!mustBreak) {
                    return "continue";
                }
                var color = ColorAttribute[obj];
                testFunction.forEach(function (ary) {
                    var check = "x.onlyChange.indexOf(ColorAttribute." + color + ") > -1";
                    ary.push(check);
                });
            };
            for (var obj in templateVm.mustBreak) {
                _loop_5();
            }
        }
        // Build level2, which is an array of final calls including CardAssets call
        var level2 = [];
        testFunction.forEach(function (ary) {
            var finalTestFunction = "";
            ary.forEach(function (condition) {
                // Add an && after every condition
                if (finalTestFunction != "") {
                    finalTestFunction += " && ";
                }
                // Add it in
                finalTestFunction += condition;
            });
            level2.push(finalTestFunction);
        });
        if (level2.length == 0) {
            level2.push("");
        }
        for (var i = 0; i < level2.length; i++) {
            if (level2[i] == "") {
                level2[i] = "true";
            }
            level2[i] = "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.OrbChange, function(x) { return " + level2[i] + "; })";
        }
        // Add in mustNotBreak
        if (templateVm.type() == 'break') {
            for (var obj in templateVm.mustNotBreak) {
                var mustNotBreak = templateVm.mustNotBreak[obj]();
                if (!mustNotBreak) {
                    continue;
                }
                var color = ColorAttribute[obj];
                // This must apply to all existing conditions and also apply by itself
                // There must be no active skills that break it
                var check = "x.onlyChange.indexOf(ColorAttribute." + color + ") > -1";
                level2.push("!CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.OrbChange, function(x) { return " + check + "; })");
            }
        }
        // Add in the mustNotCreate colors
        for (var obj in templateVm.mustNotCreate) {
            var mustNotInclude = templateVm.mustNotCreate[obj]();
            if (!mustNotInclude) {
                continue;
            }
            var color = ColorAttribute[obj];
            var check = "x.results.indexOf(ColorAttribute." + color + ") > -1";
            level2.push("!CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.OrbChange, function(x) { return " + check + "; })");
        }
        // Build level3, which is a monster
        var level3 = "";
        if (level2.length == 1) {
            level3 = level2[0];
        }
        else {
            level3 += "(";
            level2.forEach(function (check) {
                if (level3 != "(") {
                    level3 += " && ";
                }
                level3 += check;
            });
            level3 += ")";
        }
        return level3;
    };
    OrbChangePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            type: ko.observable('any'),
            mustCreate: {},
            mustBreak: {},
            mustNotCreate: {},
            mustNotBreak: {},
            allColors: [],
            spawnedPatterns: ko.observable('any'),
            numberOfColors: ko.observable(0),
            numberOfColorsComparison: ko.observable('>'),
            orbsSpawned: ko.observable(0),
            orbsSpawnedComparison: ko.observable('>'),
            colAffected: ko.observable('any'),
            rowAffected: ko.observable('any')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark, ColorAttribute.Heal, ColorAttribute.Jammer, ColorAttribute.Poison, ColorAttribute.MortalPoison, ColorAttribute.Bomb];
        allColors.forEach(function (c) {
            ret.mustCreate[c] = ko.observable(false);
            ret.mustBreak[c] = ko.observable(false);
            ret.mustNotCreate[c] = ko.observable(false);
            ret.mustNotBreak[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    OrbChangePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t<div>\n\t\tType: \n\t\t<select data-bind=\"value: type\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"row\">Row</option>\n\t\t\t<option value=\"col\">Column</option>\n\t\t\t<option value=\"break\">Change X to Y</option>\n\t\t\t<option value=\"board\">Full Board</option>\n\t\t\t<option value=\"random\">Random Spawn</option>\n\t\t\t<option value=\"pattern\">Pattern</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: type() == 'pattern'\">\n\t\tPattern spawned <select data-bind=\"value: spawnedPatterns\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"L\">L</option>\n\t\t\t<option value=\"Cross\">Cross</option>\n\t\t\t<option value=\"VDP\">Box</option>\n\t\t\t<option value=\"OuterRing\">Outer Ring</option>\n\t\t\t<option value=\"Corners\">Corners</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: type() == 'random'\">\n\t\tOrbs spawned <select data-bind=\"value: orbsSpawnedComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: orbsSpawned\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'board'\">\n\t\tNumber of colors <select data-bind=\"value: numberOfColorsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: numberOfColors\"></input>\n\t</div>\n\t<div data-bind=\"visible: type() == 'col'\">\n\t\tColumn affected \n\t\t<select data-bind=\"value: colAffected\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"0\">Leftmost</option>\n\t\t\t<option value=\"1\">Second from Left</option>\n\t\t\t<option value=\"2\">Third from Left</option>\n\t\t\t<option value=\"3\">Third from Right</option>\n\t\t\t<option value=\"4\">Second from Right</option>\n\t\t\t<option value=\"5\">Rightmost</option>\n\t\t</select>\n\t</div>\n\t<div data-bind=\"visible: type() == 'row'\">\n\t\tRow affected \n\t\t<select data-bind=\"value: rowAffected\">\n\t\t\t<option value=\"any\">Any</option>\n\t\t\t<option value=\"0\">Top</option>\n\t\t\t<option value=\"1\">Second from Top</option>\n\t\t\t<option value=\"2\">Third from Top</option>\n\t\t\t<option value=\"3\">Second from Bottom</option>\n\t\t\t<option value=\"4\">Bottom</option>\n\t\t</select>\n\t</div>\n\t<div class=\"adv-search-option\">\n\t\tMust create these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.mustCreate[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t<div class=\"adv-search-option\">\n\t\tMust not create these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.mustNotCreate[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t<div data-bind=\"visible: type() == 'break'\" class=\"adv-search-option\">\n\t\tMust convert away these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.mustBreak[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n\t<div data-bind=\"visible: type() == 'break'\" class=\"adv-search-option\">\n\t\tMust not convert away these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.mustNotBreak[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t</div>\n</div>\n\t\t";
    };
    OrbChangePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return OrbChangePlayerSkillEffect;
}());
var OrbRefreshPlayerSkillEffect = /** @class */ (function () {
    function OrbRefreshPlayerSkillEffect() {
        this.label = "OrbRefresh";
        this.type = PlayerSkillEffectType.OrbRefresh;
        // Placeholder for future PDC
    }
    OrbRefreshPlayerSkillEffect.prototype.getDescription = function () {
        return "Replaces all Orbs.";
    };
    OrbRefreshPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.OrbRefresh, function(x) { return true; })";
    };
    OrbRefreshPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    OrbRefreshPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "";
    };
    OrbRefreshPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return OrbRefreshPlayerSkillEffect;
}());
var PathTracePlayerSkillEffect = /** @class */ (function () {
    function PathTracePlayerSkillEffect() {
        //Right now there's no params, it's always 3C and normal+3link
        //if any new ones come out, then we can add filtering
        this.label = "PathTrace";
        this.type = PlayerSkillEffectType.PathTrace;
        // Placeholder for future PDC
    }
    PathTracePlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Traces a 3-combo path on Normal dungeons with 3-linked matches. ";
        return ret;
    };
    PathTracePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.PathTrace, function(x) { return true; })";
    };
    PathTracePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    PathTracePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    PathTracePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return PathTracePlayerSkillEffect;
}());
var PoisonPlayerSkillEffect = /** @class */ (function () {
    function PoisonPlayerSkillEffect() {
        this.label = "Poison";
        this.type = PlayerSkillEffectType.Poison;
        this.multiplier = 0;
        // Placeholder for future PDC
    }
    PoisonPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Poisons enemies with ";
        ret += this.multiplier + "x ATK.";
        return ret;
    };
    PoisonPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Poison, function(x) { return x.multiplier " + templateVm.multiplierText() + " " + templateVm.multiplier() + "; })";
    };
    PoisonPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            multiplier: ko.observable(0),
            multiplierText: ko.observable('>')
        };
    };
    PoisonPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\nPoison multiplier <select data-bind=\"value: multiplierText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" step=\"1\" data-bind=\"value: multiplier\"></input>\n\t\t";
    };
    PoisonPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return PoisonPlayerSkillEffect;
}());
var RandomSkillPlayerSkillEffect = /** @class */ (function () {
    function RandomSkillPlayerSkillEffect() {
        this.label = "RandomSkill";
        this.type = PlayerSkillEffectType.RandomSkill;
        this.skillPool = [];
        // Placeholder for future PDC
    }
    RandomSkillPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Randomly activate one of the following skill numbers: ";
        ret += this.skillPool.toString();
        return ret;
    };
    RandomSkillPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.RandomSkill, function(x) { return true; })";
    };
    RandomSkillPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    RandomSkillPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "";
    };
    RandomSkillPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return RandomSkillPlayerSkillEffect;
}());
var RecoveryBuffPlayerSkillEffect = /** @class */ (function () {
    function RecoveryBuffPlayerSkillEffect() {
        this.label = "RecoveryBuff";
        this.type = PlayerSkillEffectType.RecoveryBuff;
        this.multiplier = 0;
        this.turns = 0;
        // Placeholder for future PDC
    }
    RecoveryBuffPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "";
        ret += this.multiplier + "x RCV for ";
        ret += this.turns;
        return ret + " turns.";
    };
    RecoveryBuffPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        func += " && x.multiplier " + templateVm.multComparison() + " " + templateVm.multiplierAmount();
        return "(CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.RecoveryBuff, function(x) { return " + func + "; }))";
    };
    RecoveryBuffPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsComparison: ko.observable(">"),
            turnsNumber: ko.observable(0),
            multComparison: ko.observable(">"),
            multiplierAmount: ko.observable(0)
        };
    };
    RecoveryBuffPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t\t<br />\n\t\tMultiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multiplierAmount\"></input>\n\t</div>\n\t\t";
    };
    RecoveryBuffPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return RecoveryBuffPlayerSkillEffect;
}());
var ReduceUnmatchablePlayerSkillEffect = /** @class */ (function () {
    function ReduceUnmatchablePlayerSkillEffect() {
        this.label = "UnmatchableClear";
        this.type = PlayerSkillEffectType.ReduceUnmatchable;
        this.turns = 0;
        // Placeholder for future PDC
    }
    ReduceUnmatchablePlayerSkillEffect.prototype.getDescription = function () {
        return "Reduces orb unmatchable status by " + this.turns + " turns.";
    };
    ReduceUnmatchablePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "(CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.ReduceUnmatchable, function(x) { return x.turns " + templateVm.turnText() + " " + templateVm.turnCount() + "; }))";
    };
    ReduceUnmatchablePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnCount: ko.observable(0),
            turnText: ko.observable('>')
        };
    };
    ReduceUnmatchablePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\t\tNumber of turns <select data-bind=\"value: turnText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnCount\"></input>\n</div>\n\t\t";
    };
    ReduceUnmatchablePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return ReduceUnmatchablePlayerSkillEffect;
}());
var SelfColorChangePlayerSkillEffect = /** @class */ (function () {
    function SelfColorChangePlayerSkillEffect() {
        this.label = "SelfColorChange";
        this.type = PlayerSkillEffectType.SelfColorChange;
        this.turns = 0;
        this.color = ColorAttribute.None;
        // Placeholder for future PDC
    }
    SelfColorChangePlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Change own attribute to ";
        ret += ColorAttribute[this.color];
        ret += " for " + this.turns + " turns.";
        return ret;
    };
    SelfColorChangePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        if (templateVm.color() != "Any") {
            func += " && x.color == ColorAttribute." + templateVm.color();
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.SelfColorChange, function(x) { return " + func + "; })";
    };
    SelfColorChangePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            color: ko.observable("Any"),
            turnsNumber: ko.observable(0),
            turnsComparison: ko.observable(">")
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark];
        return ret;
    };
    SelfColorChangePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n\t<br />\n\tColor <select data-bind=\"value: color\">\n\t<option>Any</option>\n\t<option>Fire</option>\n\t<option>Water</option>\n\t<option>Wood</option>\n\t<option>Light</option>\n\t<option>Dark</option>\n\t</select>\n</div>\n\t\t";
    };
    SelfColorChangePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return SelfColorChangePlayerSkillEffect;
}());
var ShieldPlayerSkillEffect = /** @class */ (function () {
    function ShieldPlayerSkillEffect() {
        this.label = "Shield";
        this.type = PlayerSkillEffectType.Shield;
        this.awakenings = []; //narrowing functionality skipped for now
        this.reductionPerAwakening = 0; //narrowing functionality skipped for now
        this.colors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark];
        this.reduction = 0;
        this.turns = 0;
        // Placeholder for future PDC
    }
    ShieldPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "For " + this.turns + " turns, ";
        var helper = new PlayerSkillDescriptionHelper();
        if (this.awakenings.length > 0) {
            ret += this.reductionPerAwakening + "% damage reduction for every ";
            ret += helper.getHumanReadableAwakenings(this.awakenings);
            ret += " awakening on team.";
        }
        else {
            ret += this.reduction + "% damage reduction";
            if (this.colors.length < 5) {
                ret += " against ";
                ret += helper.getHumanReadableColors(this.colors);
                ret += " attacks";
            }
            ret += ".";
        }
        return ret;
    };
    ShieldPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsNumber();
        func += " && x.reduction " + templateVm.shieldComparison() + " " + templateVm.shieldAmount();
        if (templateVm.color() != "Any") {
            if (templateVm.color() == "All") {
                func += " && x.colors.length == 5";
            }
            else {
                func += " && x.colors.indexOf(ColorAttribute." + templateVm.color() + ") > -1";
            }
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Shield, function(x) { return " + func + "; })";
    };
    ShieldPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            turnsNumber: ko.observable(0),
            turnsComparison: ko.observable('>'),
            shieldAmount: ko.observable(0),
            shieldComparison: ko.observable('>'),
            color: ko.observable("Any")
        };
    };
    ShieldPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\tNumber of turns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsNumber\"></input>\n</div>\n<div>\n\tDamage reduction% <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldAmount\"></input>\n</div>\n<div>\n\tColor <select data-bind=\"value: color\">\n\t<option>Any</option>\n\t<option>All</option>\n\t<option>Fire</option>\n\t<option>Water</option>\n\t<option>Wood</option>\n\t<option>Light</option>\n\t<option>Dark</option>\n\t</select>\t\n</div>\n\t\t";
    };
    ShieldPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return ShieldPlayerSkillEffect;
}());
var SuicidePlayerSkillEffect = /** @class */ (function () {
    function SuicidePlayerSkillEffect() {
        this.label = "Suicide";
        this.type = PlayerSkillEffectType.Suicide;
        this.percentLost = 100;
        // Placeholder for future PDC
    }
    SuicidePlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Reduces own HP";
        if (this.percentLost == 100) {
            ret += " to 1.";
        }
        else {
            ret += this.percentLost + "%.";
        }
        return ret;
    };
    SuicidePlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Suicide, function(x) { return x.percentLost " + templateVm.percentText() + " " + templateVm.pLost() + "; })";
    };
    SuicidePlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            pLost: ko.observable(0),
            percentText: ko.observable('>=')
        };
    };
    SuicidePlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\tHP% lost <select data-bind=\"value: percentText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>=</option></select> <input type=\"number\" step=\"1\" data-bind=\"value: pLost\"></input>";
    };
    SuicidePlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return SuicidePlayerSkillEffect;
}());
var TimeExtendPlayerSkillEffect = /** @class */ (function () {
    function TimeExtendPlayerSkillEffect() {
        this.label = "TimeExtend";
        this.type = PlayerSkillEffectType.TimeExtend;
        this.turns = 0;
        this.seconds = 0;
        this.multiplier = 0;
        // Placeholder for future PDC
    }
    TimeExtendPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "";
        if (this.seconds < 0 || (this.multiplier < 1 && this.multiplier > 0)) {
            ret += "Decreases move time ";
        }
        else {
            ret += "Increases move time ";
        }
        if (this.seconds != 0) {
            ret += "by " + Math.abs(this.seconds) + " seconds ";
        }
        if (this.multiplier > 0) {
            ret += "to " + this.multiplier + "x ";
        }
        ret += "for " + this.turns + " turns.";
        return ret;
    };
    TimeExtendPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var testFunction = [];
        var finalFunction = "";
        testFunction.push("x.turns " + templateVm.turnText() + " " + templateVm.turnCount());
        if (templateVm.teType() == "Seconds") {
            testFunction.push("x.seconds " + templateVm.secondsText() + " " + templateVm.secondsAdded());
        }
        if (templateVm.teType() == "Multiplier") {
            testFunction.push("x.multiplier " + templateVm.multText() + " " + templateVm.multiplierAmount());
        }
        testFunction.forEach(function (condition) {
            // Add an && after every condition
            if (finalFunction != "") {
                finalFunction += " && ";
            }
            // Add it in
            finalFunction += condition;
        });
        if (finalFunction == "") {
            finalFunction = "true";
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.TimeExtend, function(x) { return " + finalFunction + "; })";
    };
    TimeExtendPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            teType: ko.observable("Any"),
            secondsText: ko.observable(">"),
            secondsAdded: ko.observable(0),
            multText: ko.observable(">"),
            multiplierAmount: ko.observable(0),
            turnText: ko.observable(">"),
            turnCount: ko.observable(0)
        };
    };
    TimeExtendPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div>\n\t\tNumber of turns <select data-bind=\"value: turnText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnCount\"></input>\n\t</div>\n\t<div>\n\t\tType <select data-bind=\"value: teType\"><option>Any</option><option>Seconds</option><option>Multiplier</option></select>\n\t\t<br />\n\t</div>\n\t<div data-bind=\"visible: teType() == 'Seconds'\">\n\t\tSeconds added <select data-bind=\"value: secondsText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select><input type=\"number\" data-bind=\"value: secondsAdded\"></input>\n\t</div>\n\t<div data-bind=\"visible: teType() == 'Multiplier'\">\n\t\tMultiplier <select data-bind=\"value: multText\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multiplierAmount\"></input>\n\t</div>\n\t\t";
    };
    TimeExtendPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return TimeExtendPlayerSkillEffect;
}());
var UnlockOrbsPlayerSkillEffect = /** @class */ (function () {
    function UnlockOrbsPlayerSkillEffect() {
        this.label = "UnlockOrbs";
        this.type = PlayerSkillEffectType.UnlockOrbs;
        // Placeholder for future PDC
    }
    UnlockOrbsPlayerSkillEffect.prototype.getDescription = function () {
        return "Unlock all orbs.";
    };
    UnlockOrbsPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.UnlockOrbs, function(x) { return true; })";
    };
    UnlockOrbsPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    UnlockOrbsPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "";
    };
    UnlockOrbsPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return UnlockOrbsPlayerSkillEffect;
}());
var VoidPlayerSkillEffect = /** @class */ (function () {
    function VoidPlayerSkillEffect() {
        this.label = "Void";
        this.type = PlayerSkillEffectType.Void;
        this.turns = 0;
        this.colorVoid = false;
        this.comboVoid = false;
        this.absorbVoid = false;
        this.nullVoid = false;
        // Placeholder for future PDC
    }
    VoidPlayerSkillEffect.prototype.getDescription = function () {
        var ret = "Voids ";
        var voids = [];
        var helper = new PlayerSkillDescriptionHelper();
        if (this.colorVoid) {
            voids.push("attribute absorption ");
        }
        if (this.comboVoid) {
            voids.push("something ");
        }
        if (this.absorbVoid) {
            voids.push("damage absorption ");
        }
        if (this.nullVoid) {
            voids.push("damage void ");
        }
        ret += helper.getHumanReadableList(voids);
        ret += "for ";
        ret += this.turns;
        ret += " turn";
        if (this.turns > 1) {
            ret += "s";
        }
        ret += ".";
        return ret;
    };
    VoidPlayerSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var typePart = '';
        switch (templateVm.type()) {
            case 'colorVoid':
                typePart = "x.colorVoid && ";
                break;
            case 'absorbVoid':
                typePart = "x.absorbVoid && ";
                break;
            case 'nullVoid':
                typePart = "x.nullVoid && ";
                break;
        }
        return "CardAssets.hasActiveSkill(c, model, PlayerSkillEffectType.Void, function(x) { return " + typePart + "x.turns " + templateVm.turnsComparison() + " " + templateVm.turnsCount() + "; })";
    };
    VoidPlayerSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {
            type: ko.observable(''),
            turnsCount: ko.observable(0),
            turnsComparison: ko.observable('>')
        };
    };
    VoidPlayerSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n<div>\n\tVoid type: <select data-bind=\"value: type\"><option value=''>Any</option><option value='colorVoid'>Attribute Absorb</option><option value='absorbVoid'>Damage Absorb</option><option value='nullVoid'>Damage Void</option></select>\n\t<br />\n\tTurns <select data-bind=\"value: turnsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: turnsCount\"></input>\n</div>\n\t\t";
    };
    VoidPlayerSkillEffect.prototype.calculateMaxMultiplier = function () {
        return null;
    };
    return VoidPlayerSkillEffect;
}());
var AddComboLSLeaderSkillEffect = /** @class */ (function () {
    function AddComboLSLeaderSkillEffect() {
        this.label = "Add Combo";
        this.type = PlayerSkillEffectType.AddComboLS;
        this.minLength = 3;
        this.requiredColours = [];
        this.minRequiredColours = 0;
        this.bonusCombos = 0;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    AddComboLSLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Increases combo count by ";
        ret += this.bonusCombos + " when ";
        if (this.minRequiredColours > 0) {
            ret += "matching ";
            if (this.minRequiredColours == this.requiredColours.length) {
                ret += "all";
            }
            else {
                ret += this.minRequiredColours;
            }
            ret += " of ";
            ret += helper.getHumanReadableColors(this.requiredColours);
        }
        else {
            ret += "matching " + this.minLength + "+ ";
            ;
            ret += helper.getHumanReadableColors(this.requiredColours, "and");
            ret += " orbs";
            if (this.requiredColours.length > 1) {
                ret += " each";
            }
            ret += ".";
        }
        return ret;
    };
    AddComboLSLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "true";
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.AddComboLS, function(x) { return " + func + "; })";
    };
    AddComboLSLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            comboNumber: ko.observable(0),
            comboComparison: ko.observable(">="),
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>=')
        };
        return ret;
    };
    AddComboLSLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        var inprog = "\n\t\t<div class=\"adv-search-option\">\n\t\t<div>\n\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t<br />\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t<br />\n\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t<br />\n\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t</div>\n\t</div>\n\t\t";
        return '';
    };
    AddComboLSLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return AddComboLSLeaderSkillEffect;
}());
var AttributeBoostLeaderSkillEffect = /** @class */ (function () {
    function AttributeBoostLeaderSkillEffect() {
        this.label = "Attribute Boost";
        this.type = PlayerSkillEffectType.AttributeBoost;
        this.colors = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.atk = 1;
        lsse.hp = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    AttributeBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " for ";
        ret += helper.getHumanReadableColors(this.colors);
        ret += " cards.";
        return ret;
    };
    AttributeBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        func += "x.lsse.hp " + templateVm.hpComparison() + " " + templateVm.hpNumber() + " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber();
        for (var obj in templateVm.boostColors) {
            if (templateVm.boostColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.AttributeBoost, function(x) { return " + func + "; }) || CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.AttributeOrTypeBoost, function(x) { return " + func + "; })";
    };
    AttributeBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            boostColors: [],
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>=')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark];
        allColors.forEach(function (c) {
            ret.boostColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    AttributeBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div class=\"adv-search-option\">\n\t\tMust boost these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.boostColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t\t<div>\n\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t<br />\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t<br />\n\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t</div>\n\t</div>\n\t\t";
    };
    AttributeBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return AttributeBoostLeaderSkillEffect;
}());
var AttributeOrTypeBoostLeaderSkillEffect = /** @class */ (function () {
    function AttributeOrTypeBoostLeaderSkillEffect() {
        this.label = "Attribute or Type Boost";
        this.type = PlayerSkillEffectType.AttributeOrTypeBoost;
        this.colors = [];
        this.types = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.atk = 1;
        lsse.hp = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    AttributeOrTypeBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " for ";
        ret += helper.getHumanReadableColors(this.colors);
        ret += " and ";
        ret += helper.getHumanReadableTypes(this.types);
        ret += " type cards.";
        return ret;
    };
    AttributeOrTypeBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.AttributeOrTypeBoost, function(x) { return true; })";
    };
    AttributeOrTypeBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    AttributeOrTypeBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "";
    };
    AttributeOrTypeBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return AttributeOrTypeBoostLeaderSkillEffect;
}());
var AutoHealLeaderSkillEffect = /** @class */ (function () {
    function AutoHealLeaderSkillEffect() {
        this.label = "Auto Heal";
        this.type = PlayerSkillEffectType.AutoHeal;
        this.multiplier = 0;
        // Placeholder for future PDC
    }
    AutoHealLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Heal " + this.multiplier + "x this card's RCV after matching orbs.";
        return ret;
    };
    AutoHealLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.multiplier " + templateVm.rcvComparison() + " " + templateVm.rcvNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.AutoHeal, function(x) { return " + func + "; })";
    };
    AutoHealLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>=')
        };
        return ret;
    };
    AutoHealLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tAutoheal Multiplier <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t</div>\n\t\t";
    };
    AutoHealLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return AutoHealLeaderSkillEffect;
}());
var BonusAttackLeaderSkillEffect = /** @class */ (function () {
    function BonusAttackLeaderSkillEffect() {
        this.label = "Bonus Attack";
        this.type = PlayerSkillEffectType.BonusAttack;
        this.multiplier = 0;
        // Placeholder for future PDC
    }
    BonusAttackLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Inflict a bonus attack to all enemies equal to " + this.multiplier + "x of this card's ATK after matching orbs.";
        ret += " Affected by defense, down to 0 damage.";
        return ret;
    };
    BonusAttackLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.multiplier " + templateVm.multComparison() + " " + templateVm.multNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.BonusAttack, function(x) { return " + func + "; })";
    };
    BonusAttackLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            multNumber: ko.observable(0),
            multComparison: ko.observable('>=')
        };
        return ret;
    };
    BonusAttackLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tBonus Multiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multNumber\"></input>\n\t</div>\n\t\t";
    };
    BonusAttackLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return BonusAttackLeaderSkillEffect;
}());
var CoinRateLeaderSkillEffect = /** @class */ (function () {
    function CoinRateLeaderSkillEffect() {
        this.label = "Multiply Coin Rate";
        this.type = PlayerSkillEffectType.CoinRate;
        // Placeholder for future PDC
    }
    CoinRateLeaderSkillEffect.prototype.getDescription = function () {
        var ret = this.multiplier + "x coins when entering dungeon as leader.";
        return ret;
    };
    CoinRateLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.multiplier " + templateVm.multComparison() + " " + templateVm.multNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.CoinRate, function(x) { return " + func + "; })";
    };
    CoinRateLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            multNumber: ko.observable(0),
            multComparison: ko.observable('>=')
        };
        return ret;
    };
    CoinRateLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tBonus Multiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multNumber\"></input>\n\t</div>\n\t\t";
    };
    CoinRateLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return CoinRateLeaderSkillEffect;
}());
var CollabBoostLeaderSkillEffect = /** @class */ (function () {
    function CollabBoostLeaderSkillEffect() {
        this.label = "Collab Boost";
        this.type = PlayerSkillEffectType.CollabBoost;
        this.collab = 0;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    CollabBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " when entire team is from ";
        ret += GroupAssets.getCollabDetails(this.collab).name + " collab.";
        return ret;
    };
    CollabBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.collab " + templateVm.collabComparison() + " " + templateVm.collabNumber();
        func += " && x.lsse.hp " + templateVm.hpComparison() + " " + templateVm.hpNumber() + " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.lsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.CollabBoost, function(x) { return " + func + "; })";
    };
    CollabBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            collabNumber: ko.observable(0),
            collabComparison: ko.observable('>='),
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>=')
        };
        return ret;
    };
    CollabBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t<div>\n\t\tCollab Number <select data-bind=\"value: collabComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: collabNumber\"></input>\n\t\t</div>\n\t\t<div>\n\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t<br />\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t<br />\n\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t<br />\n\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t</div>\n\t</div>\n\t\t";
    };
    CollabBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return CollabBoostLeaderSkillEffect;
}());
var ColorCrossLeaderSkillEffect = /** @class */ (function () {
    function ColorCrossLeaderSkillEffect() {
        this.label = "Colored Cross";
        this.type = PlayerSkillEffectType.ColorCross;
        this.colors = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.stackLsse = lsse;
    }
    ColorCrossLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.stackLsse);
        ret += " for every cross of " + helper.getHumanReadableColors(this.colors, "or");
        ret += " orbs.";
        return ret;
    };
    ColorCrossLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.colors.length " + templateVm.colorComparison() + " " + templateVm.colorAmount();
        func += " && x.stackLsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber();
        for (var obj in templateVm.usedColors) {
            if (templateVm.usedColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ColorCross, function(x) { return " + func + "; })";
    };
    ColorCrossLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            usedColors: [],
            colorAmount: ko.observable(0),
            colorComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>=')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark, ColorAttribute.Jammer, ColorAttribute.Poison, ColorAttribute.MortalPoison, ColorAttribute.Bomb];
        allColors.forEach(function (c) {
            ret.usedColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    ColorCrossLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tTotal colors: <select data-bind=\"value: colorComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: colorAmount\"></input>\n\t\t<br/>\n\t\tMust use these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.usedColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t\t<div>\n\tATK per cross <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t<br />\n\t</div>\n\t</div>\n\t\t";
    };
    ColorCrossLeaderSkillEffect.prototype.calculateMaxMultiplier = function (context) {
        var ret = new LeaderSkillStatEffect();
        ret.hp = 1;
        ret.atk = 1;
        ret.rcv = 1;
        if (context.colorCrossCountRemaining <= 0) {
            return ret;
        }
        var numberOfCrosses = context.colorCrossCountRemaining;
        for (var i = 0; i < numberOfCrosses; i++) {
            ret.multiply(this.stackLsse);
        }
        context.colorCrossCountRemaining -= numberOfCrosses;
        return ret;
    };
    return ColorCrossLeaderSkillEffect;
}());
var ColorMatchesLeaderSkillEffect = /** @class */ (function () {
    function ColorMatchesLeaderSkillEffect() {
        this.label = "Color Matches";
        this.type = PlayerSkillEffectType.ColorMatches;
        this.colorPool = [];
        this.minMatches = 0;
        this.maxStacks = 0;
        var blsse = new LeaderSkillStatEffect();
        blsse.hp = 1;
        blsse.atk = 1;
        blsse.rcv = 1;
        blsse.shield = 0;
        this.baseLsse = blsse;
        var slsse = new LeaderSkillStatEffect();
        slsse.hp = 0;
        slsse.atk = 0;
        slsse.rcv = 0;
        slsse.shield = 0;
        this.stackLsse = slsse;
    }
    ColorMatchesLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.baseLsse);
        ret += " when matching ";
        if (this.colorPool.length != this.minMatches) {
            ret += this.minMatches + " of ";
            ret += helper.getHumanReadableColors(this.colorPool, "or") + ".";
        }
        else {
            ret += helper.getHumanReadableColors(this.colorPool) + ".";
        }
        if (this.maxStacks > 0) {
            ret += " Additional " + helper.getHumanReadableLsse(this.stackLsse, true);
            ret += " for each extra colour, up to ";
            ret += helper.getHumanReadableMaxLsse(this.baseLsse, this.stackLsse, this.maxStacks);
            ret += " for " + this.maxStacks + " additional stacks.";
        }
        return ret;
    };
    ColorMatchesLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ColorMatches, function(x) { return true; })";
    };
    ColorMatchesLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    ColorMatchesLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\tColormatch filtering WIP\n\t\t";
    };
    ColorMatchesLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = this.baseLsse.hp + (this.stackLsse.hp * this.maxStacks);
        lsse.atk = this.baseLsse.atk + (this.stackLsse.atk * this.maxStacks);
        lsse.rcv = this.baseLsse.rcv + (this.stackLsse.rcv * this.maxStacks);
        lsse.shield = this.baseLsse.shield + (this.stackLsse.shield * this.maxStacks);
        return lsse;
    };
    return ColorMatchesLeaderSkillEffect;
}());
var ColorShieldLeaderSkillEffect = /** @class */ (function () {
    function ColorShieldLeaderSkillEffect() {
        this.label = "Reduce Attribute Damage";
        this.type = PlayerSkillEffectType.ColorShield;
        this.colors = [];
        this.percentage = 0;
        // Placeholder for future PDC
    }
    ColorShieldLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Reduce ";
        ret += helper.getHumanReadableColors(this.colors);
        ret += " damage by " + this.percentage + "%.";
        return ret;
    };
    ColorShieldLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        func += "x.percentage " + templateVm.resistComparison() + " " + templateVm.resistNumber();
        for (var obj in templateVm.resistColors) {
            if (templateVm.resistColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ColorShield, function(x) { return " + func + "; })";
    };
    ColorShieldLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            resistColors: [],
            resistNumber: ko.observable(0),
            resistComparison: ko.observable('>=')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark];
        allColors.forEach(function (c) {
            ret.resistColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    ColorShieldLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div class=\"adv-search-option\">\n\t\tMust resist these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.resistColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t\t<div>\n\t\tResistance <select data-bind=\"value: resistComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: resistNumber\"></input>\n\t\t</div>\n\t</div>\n\t\t";
    };
    ColorShieldLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return ColorShieldLeaderSkillEffect;
}());
var ComboCountAttributeRestrictedLeaderSkillEffect = /** @class */ (function () {
    function ComboCountAttributeRestrictedLeaderSkillEffect() {
        this.label = "Combo Count (Restricted Attribute)";
        this.type = PlayerSkillEffectType.ComboCountAttributeRestricted;
        this.minCombos = 0;
        this.colors = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    ComboCountAttributeRestrictedLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " for " + helper.getHumanReadableColors(this.colors);
        ret += " cards at " + this.minCombos + "+ combos.";
        return ret;
    };
    ComboCountAttributeRestrictedLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.minCombos " + templateVm.comboComparison() + " " + templateVm.comboNumber();
        func += " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber();
        for (var obj in templateVm.boostColors) {
            if (templateVm.boostColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ComboCountAttributeRestricted, function(x) { return " + func + "; })";
    };
    ComboCountAttributeRestrictedLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            boostColors: [],
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            comboNumber: ko.observable(0),
            comboComparison: ko.observable('>=')
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark];
        allColors.forEach(function (c) {
            ret.boostColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    ComboCountAttributeRestrictedLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tMust boost these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.boostColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t\t<div>\n\t\tMin Combos <select data-bind=\"value: comboComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: comboNumber\"></input>\n\t\t</div>\n\t\t<div>\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t</div>\n\t</div>\n\t\t";
    };
    ComboCountAttributeRestrictedLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return ComboCountAttributeRestrictedLeaderSkillEffect;
}());
var ComboCountExactLeaderSkillEffect = /** @class */ (function () {
    function ComboCountExactLeaderSkillEffect() {
        this.label = "Combo Count (Exact)";
        this.type = PlayerSkillEffectType.ComboCountExact;
        this.combos = 0;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    ComboCountExactLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " at exactly " + this.combos + " combos.";
        return ret;
    };
    ComboCountExactLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.combos " + templateVm.comboComparison() + " " + templateVm.comboNumber();
        func += " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ComboCountExact, function(x) { return " + func + "; })";
    };
    ComboCountExactLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            comboNumber: ko.observable(0),
            comboComparison: ko.observable('>=')
        };
        return ret;
    };
    ComboCountExactLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tCombo count <select data-bind=\"value: comboComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: comboNumber\"></input>\n\t<div>\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t</div>\n\t</div>\n\t\t";
    };
    ComboCountExactLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return ComboCountExactLeaderSkillEffect;
}());
var ComboCountLeaderSkillEffect = /** @class */ (function () {
    function ComboCountLeaderSkillEffect() {
        this.label = "Combo Count";
        this.type = PlayerSkillEffectType.ComboCount;
        this.minCombos = 0;
        this.maxStacks = 0;
        var blsse = new LeaderSkillStatEffect();
        blsse.hp = 1;
        blsse.atk = 1;
        blsse.rcv = 1;
        blsse.shield = 0;
        this.baseLsse = blsse;
        var slsse = new LeaderSkillStatEffect();
        slsse.hp = 0;
        slsse.atk = 0;
        slsse.rcv = 0;
        slsse.shield = 0;
        this.stackLsse = slsse;
    }
    ComboCountLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.baseLsse);
        ret += " at " + this.minCombos + " combos.";
        if (this.maxStacks > 0) {
            ret += " Additional " + helper.getHumanReadableLsse(this.stackLsse, true);
            ret += " for each extra combo, up to ";
            ret += helper.getHumanReadableMaxLsse(this.baseLsse, this.stackLsse, this.maxStacks);
            ret += " at " + (this.minCombos + this.maxStacks) + " combos.";
        }
        return ret;
    };
    ComboCountLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.minCombos " + templateVm.comboComparison() + " " + templateVm.comboNumber() + " && (x.minCombos + x.maxStacks) " + templateVm.maxComboComparison() + " " + templateVm.maxComboNumber();
        if ((templateVm.atkNumber() > 0) || (templateVm.rcvNumber() > 0) || (templateVm.shieldNumber() > 0)) {
            func += " && x.baseLsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.baseLsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.baseLsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        }
        if ((templateVm.specifyStack()) && ((templateVm.atkStackNumber() > 0) || (templateVm.rcvStackNumber() > 0))) {
            func += " && x.stackLsse.atk " + templateVm.atkStackComparison() + " " + templateVm.atkStackNumber() + " && x.stackLsse.rcv " + templateVm.rcvStackComparison() + " " + templateVm.rcvStackNumber();
        }
        func += " && (x.baseLsse.atk + (x.maxStacks * x.stackLsse.atk)) " + templateVm.atkTotalComparison() + " " + templateVm.atkTotalNumber();
        func += " && (x.baseLsse.rcv + (x.maxStacks * x.stackLsse.rcv)) " + templateVm.rcvTotalComparison() + " " + templateVm.rcvTotalNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ComboCount, function(x) { return " + func + "; })";
    };
    ComboCountLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>='),
            atkStackNumber: ko.observable(0),
            atkStackComparison: ko.observable('>='),
            rcvStackNumber: ko.observable(0),
            rcvStackComparison: ko.observable('>='),
            atkTotalNumber: ko.observable(0),
            atkTotalComparison: ko.observable('>='),
            rcvTotalNumber: ko.observable(0),
            rcvTotalComparison: ko.observable('>='),
            comboNumber: ko.observable(0),
            comboComparison: ko.observable('>='),
            maxComboNumber: ko.observable(0),
            maxComboComparison: ko.observable('>='),
            specifyStack: ko.observable(false)
        };
        return ret;
    };
    ComboCountLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t<div class=\"adv-search-option\">\n\t\t<div class=\"adv-search-option\">\n\t\tMin Combo <select data-bind=\"value: comboComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: comboNumber\"></input>\n\t\t<br/>\n\t\tMax Combo <select data-bind=\"value: maxComboComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: maxComboNumber\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tBase activation\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t<br/>\n\t\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t\t</div>\n\t\t<label><input type=\"checkbox\" data-bind=\"checked: specifyStack\"></input> Specify stack boosts</label>\n\t\t<div class=\"adv-search-option\" data-bind=\"visible: specifyStack() == true\">\n\t\tStack bonus\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkStackComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkStackNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvStackComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvStackNumber\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tMax activation\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkTotalComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkTotalNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvTotalComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvTotalNumber\"></input>\n\t\t</div>\n\t</div>\n\t\t";
    };
    ComboCountLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = this.baseLsse.hp + this.stackLsse.hp * this.maxStacks;
        lsse.atk = this.baseLsse.atk + this.stackLsse.atk * this.maxStacks;
        lsse.rcv = this.baseLsse.rcv + this.stackLsse.rcv * this.maxStacks;
        lsse.shield = this.baseLsse.shield + this.stackLsse.shield * this.maxStacks;
        return lsse;
    };
    return ComboCountLeaderSkillEffect;
}());
var DropRateLeaderSkillEffect = /** @class */ (function () {
    function DropRateLeaderSkillEffect() {
        this.label = "Multiply Drop Rate";
        this.type = PlayerSkillEffectType.DropRate;
        // Placeholder for future PDC
    }
    DropRateLeaderSkillEffect.prototype.getDescription = function () {
        var ret = this.multiplier + "x egg drop rate.";
        return ret;
    };
    DropRateLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.multiplier " + templateVm.multComparison() + " " + templateVm.multNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.DropRate, function(x) { return " + func + "; })";
    };
    DropRateLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            multNumber: ko.observable(0),
            multComparison: ko.observable('>=')
        };
        return ret;
    };
    DropRateLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tBonus Multiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multNumber\"></input>\n\t</div>\n\t\t";
    };
    DropRateLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return DropRateLeaderSkillEffect;
}());
var ExpRateLeaderSkillEffect = /** @class */ (function () {
    function ExpRateLeaderSkillEffect() {
        this.label = "Multiply Exp Rate";
        this.type = PlayerSkillEffectType.ExpRate;
        this.multiplier = 0;
        // Placeholder for future PDC
    }
    ExpRateLeaderSkillEffect.prototype.getDescription = function () {
        var ret = this.multiplier + "x EXP when entering dungeon as leader.";
        return ret;
    };
    ExpRateLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.multiplier " + templateVm.multComparison() + " " + templateVm.multNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.ExpRate, function(x) { return " + func + "; })";
    };
    ExpRateLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            multNumber: ko.observable(0),
            multComparison: ko.observable('>=')
        };
        return ret;
    };
    ExpRateLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tBonus Multiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multNumber\"></input>\n\t</div>\n\t\t";
    };
    ExpRateLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return ExpRateLeaderSkillEffect;
}());
var FiveOrbOneEnhancedLeaderSkillEffect = /** @class */ (function () {
    function FiveOrbOneEnhancedLeaderSkillEffect() {
        this.label = "5oe1";
        this.type = PlayerSkillEffectType.FiveOrbOneEnhanced;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    FiveOrbOneEnhancedLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Matched attribute ";
        ret += helper.getHumanReadableLsse(this.lsse);
        ret += " when clearing exactly 5 orbs with at least 1 enhanced orb.";
        return ret;
    };
    FiveOrbOneEnhancedLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        func += "x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.FiveOrbOneEnhanced, function(x) { return " + func + "; })";
    };
    FiveOrbOneEnhancedLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>=')
        };
        return ret;
    };
    FiveOrbOneEnhancedLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t<div>\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    FiveOrbOneEnhancedLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return FiveOrbOneEnhancedLeaderSkillEffect;
}());
var FixedMoveTimeLeaderSkillEffect = /** @class */ (function () {
    function FixedMoveTimeLeaderSkillEffect() {
        this.label = "Fixed Movement Time";
        this.type = PlayerSkillEffectType.FixedMoveTime;
        this.seconds = 0;
        // Placeholder for future PDC
    }
    FixedMoveTimeLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Fixes orb movement time at " + this.seconds + " seconds.";
        return ret;
    };
    FixedMoveTimeLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.seconds " + templateVm.timeComparison() + " " + templateVm.timeAmount();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.FixedMoveTime, function(x) { return " + func + "; })";
    };
    FixedMoveTimeLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            timeAmount: ko.observable(0),
            timeComparison: ko.observable('>=')
        };
        return ret;
    };
    FixedMoveTimeLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tFixed seconds <select data-bind=\"value: timeComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: timeAmount\"></input>\n\t</div>\n\t\t";
    };
    FixedMoveTimeLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return FixedMoveTimeLeaderSkillEffect;
}());
var HealThreshLeaderSkillEffect = /** @class */ (function () {
    function HealThreshLeaderSkillEffect() {
        this.label = "Heal Threshhold";
        this.type = PlayerSkillEffectType.HealThresh;
        this.thresh = 0;
        this.awokenTurns = 0;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    HealThreshLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "";
        if (this.awokenTurns > 0) {
            ret += "Recovers " + this.awokenTurns + " turns of Awoken Bind ";
        }
        else {
            ret += helper.getHumanReadableLsse(this.lsse);
        }
        ret += " when healing at least " + this.thresh + "HP with Heal Orbs.";
        return ret;
    };
    HealThreshLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "true";
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.HealThresh, function(x) { return " + func + "; })";
    };
    HealThreshLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>=')
        };
        return ret;
    };
    HealThreshLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    HealThreshLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return HealThreshLeaderSkillEffect;
}());
var HeartCrossLeaderSkillEffect = /** @class */ (function () {
    function HeartCrossLeaderSkillEffect() {
        this.label = "Heart Cross";
        this.type = PlayerSkillEffectType.HeartCross;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    HeartCrossLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " when matching a cross of 5 heart orbs.";
        return ret;
    };
    HeartCrossLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        func += "x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.HeartCross, function(x) { return " + func + "; })";
    };
    HeartCrossLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>=')
        };
        return ret;
    };
    HeartCrossLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t<div>\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br/>\n\t\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    HeartCrossLeaderSkillEffect.prototype.calculateMaxMultiplier = function (context) {
        if (!context.considerHeartCross) {
            var ret = new LeaderSkillStatEffect();
            ret.hp = 1;
            ret.atk = 1;
            ret.rcv = 1;
            return ret;
        }
        return this.lsse;
    };
    return HeartCrossLeaderSkillEffect;
}());
var HeartTpaLeaderSkillEffect = /** @class */ (function () {
    function HeartTpaLeaderSkillEffect() {
        this.label = "Heart TPA";
        this.type = PlayerSkillEffectType.HeartTpa;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    HeartTpaLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " when matching exactly 4 heal orbs.";
        return ret;
    };
    HeartTpaLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        func += "x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.HeartTpa, function(x) { return " + func + "; })";
    };
    HeartTpaLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>=')
        };
        return ret;
    };
    HeartTpaLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t<div>\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    HeartTpaLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return HeartTpaLeaderSkillEffect;
}());
var HpConditionalLeaderSkillEffect = /** @class */ (function () {
    function HpConditionalLeaderSkillEffect() {
        this.label = "HP Conditional";
        this.type = PlayerSkillEffectType.HpConditional;
        this.thresh = 0;
        this.direction = false; //false for <=, true for >=
        this.colors = [];
        this.typing = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    HpConditionalLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        if (this.colors.length > 0) {
            ret += " for " + helper.getHumanReadableColors(this.colors) + " cards";
        }
        if (this.typing.length > 0) {
            if (this.colors.length > 0) {
                ret += " and ";
            }
            else {
                ret += " for ";
            }
            ret += helper.getHumanReadableTypes(this.typing) + " types";
        }
        ret += " when HP equal to or ";
        if (this.direction == true) {
            ret += "above ";
        }
        else {
            ret += "below ";
        }
        ret += this.thresh + "%.";
        return ret;
    };
    HpConditionalLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        func += "x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.lsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        if (templateVm.threshType() != 'Any') {
            func += " && x.direction == ";
            if (templateVm.threshType() == 'Above or equal to') {
                func += " true";
            }
            else {
                func += " false";
            }
        }
        func += " && x.thresh " + templateVm.threshComparison() + " " + templateVm.threshNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.HpConditional, function(x) { return " + func + "; })";
    };
    HpConditionalLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            threshType: ko.observable('Any'),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>='),
            threshNumber: ko.observable(0),
            threshComparison: ko.observable('>=')
        };
        return ret;
    };
    HpConditionalLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t\t<div>\n\t\t\t\tTyping and attributes restrictions WIP\n\t\t\t</div>\n\t\t\t<div class=\"adv-search-option\">\n\t\t\t\tCondition direction :\n\t\t\t\t<select data-bind=\"value: threshType\">\n\t\t\t\t<option>Any</option>\n\t\t\t\t<option>Above or equal to</option>\n\t\t\t\t<option>Below or equal to</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"adv-search-option\">\n\t\t\t\tHP threshhold <select data-bind=\"value: threshComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: threshNumber\"></input>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t\t\t<br />\n\t\t\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t\t\t<br />\n\t\t\t\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t\t\t</div>\n\t\t</div>\n\t\t";
    };
    HpConditionalLeaderSkillEffect.prototype.calculateMaxMultiplier = function (context) {
        if (context.healthPercent == 0) {
            return this.lsse;
        }
        if (this.direction) {
            // >=
            if (context.healthPercent >= this.thresh) {
                return this.lsse;
            }
        }
        else {
            // <=
            if (context.healthPercent <= this.thresh) {
                return this.lsse;
            }
        }
        var ret = new LeaderSkillStatEffect();
        ret.hp = 1;
        ret.atk = 1;
        ret.rcv = 1;
        ret.shield = 0;
        return ret;
    };
    return HpConditionalLeaderSkillEffect;
}());
var LinkedOrbsLeaderSkillEffect = /** @class */ (function () {
    function LinkedOrbsLeaderSkillEffect() {
        this.label = "Linked Orbs";
        this.type = PlayerSkillEffectType.LinkedOrbs;
        this.colors = [];
        this.minLinked = 0;
        this.maxStacks = 0;
        this.requiresAll = false;
        var blsse = new LeaderSkillStatEffect();
        blsse.hp = 1;
        blsse.atk = 1;
        blsse.rcv = 1;
        blsse.shield = 0;
        this.baseLsse = blsse;
        var slsse = new LeaderSkillStatEffect();
        slsse.hp = 0;
        slsse.atk = 0;
        slsse.rcv = 0;
        slsse.shield = 0;
        this.stackLsse = slsse;
    }
    LinkedOrbsLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.baseLsse);
        ret += " when matching " + this.minLinked + "+ connected ";
        if (this.requiresAll) {
            ret += helper.getHumanReadableColors(this.colors, "or") + " orbs.";
        }
        else {
            ret += helper.getHumanReadableColors(this.colors, "and") + " orbs each.";
        }
        if (this.maxStacks > 0) {
            ret += " Additional" + helper.getHumanReadableLsse(this.stackLsse, true);
            ret += " for each extra orb, up to " + helper.getHumanReadableMaxLsse(this.baseLsse, this.stackLsse, this.maxStacks);
            ret += " at " + (this.minLinked + this.maxStacks) + " connected.";
        }
        return ret;
    };
    LinkedOrbsLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.minLinked " + templateVm.minComparison() + " " + templateVm.minNumber() + " && (x.minLinked + x.maxStacks) " + templateVm.maxComparison() + " " + templateVm.maxNumber();
        func += " && x.colors.length " + templateVm.colorComparison() + " " + templateVm.colorAmount();
        for (var obj in templateVm.usedColors) {
            if (templateVm.usedColors[obj]()) {
                func += " && x.colors.indexOf(ColorAttribute." + ColorAttribute[obj] + ") > -1";
            }
        }
        if ((templateVm.atkNumber() > 0) || (templateVm.rcvNumber() > 0) || (templateVm.shieldNumber() > 0)) {
            func += " && x.baseLsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.baseLsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.baseLsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        }
        if ((templateVm.specifyStack()) && ((templateVm.atkStackNumber() > 0) || (templateVm.rcvStackNumber() > 0))) {
            func += " && x.stackLsse.atk " + templateVm.atkStackComparison() + " " + templateVm.atkStackNumber() + " && x.stackLsse.rcv " + templateVm.rcvStackComparison() + " " + templateVm.rcvStackNumber();
        }
        func += " && (x.baseLsse.atk + (x.maxStacks * x.stackLsse.atk)) " + templateVm.atkTotalComparison() + " " + templateVm.atkTotalNumber();
        func += " && (x.baseLsse.rcv + (x.maxStacks * x.stackLsse.rcv)) " + templateVm.rcvTotalComparison() + " " + templateVm.rcvTotalNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.LinkedOrbs, function(x) { return " + func + "; })";
    };
    LinkedOrbsLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allColors: [],
            usedColors: [],
            colorAmount: ko.observable(0),
            colorComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>='),
            atkStackNumber: ko.observable(0),
            atkStackComparison: ko.observable('>='),
            rcvStackNumber: ko.observable(0),
            rcvStackComparison: ko.observable('>='),
            atkTotalNumber: ko.observable(0),
            atkTotalComparison: ko.observable('>='),
            rcvTotalNumber: ko.observable(0),
            rcvTotalComparison: ko.observable('>='),
            minNumber: ko.observable(0),
            minComparison: ko.observable('>='),
            maxNumber: ko.observable(0),
            maxComparison: ko.observable('>='),
            specifyStack: ko.observable(false)
        };
        var allColors = [ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light, ColorAttribute.Dark, ColorAttribute.Heal, ColorAttribute.Jammer, ColorAttribute.Poison, ColorAttribute.MortalPoison, ColorAttribute.Bomb];
        allColors.forEach(function (c) {
            ret.usedColors[c] = ko.observable(false);
        });
        ret.allColors = allColors;
        return ret;
    };
    LinkedOrbsLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t<div class=\"adv-search-option\">\n\t\tMin Linked <select data-bind=\"value: minComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: minNumber\"></input>\n\t\t<br/>\n\t\tMax Linked <select data-bind=\"value: maxComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: maxNumber\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tTotal colors: <select data-bind=\"value: colorComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: colorAmount\"></input>\n\t\t<br/>\n\t\tMust use these colors:\n\t\t<div data-bind=\"foreach: allColors\">\n\t\t\t<label><input type=\"checkbox\" data-bind=\"checked: $parent.usedColors[$data]\"></input> <span data-bind=\"text: ColorAttribute[$data]\"></span></label>\n\t\t</div>\n\t\t<div>\n\t\t<div class=\"adv-search-option\">\n\t\tBase activation\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t<br/>\n\t\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t\t</div>\n\t\t<label><input type=\"checkbox\" data-bind=\"checked: specifyStack\"></input> Specify stack boosts</label>\n\t\t<div class=\"adv-search-option\" data-bind=\"visible: specifyStack() == true\">\n\t\tStack bonus\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkStackComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkStackNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvStackComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvStackNumber\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tMax activation\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkTotalComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkTotalNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvTotalComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvTotalNumber\"></input>\n\t\t</div>\n\t</div>\n\t\t";
    };
    LinkedOrbsLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = this.baseLsse.hp + this.stackLsse.hp * this.maxStacks;
        lsse.atk = this.baseLsse.atk + this.stackLsse.atk * this.maxStacks;
        lsse.rcv = this.baseLsse.rcv + this.stackLsse.rcv * this.maxStacks;
        lsse.shield = this.baseLsse.shield + this.stackLsse.shield * this.maxStacks;
        return lsse;
    };
    return LinkedOrbsLeaderSkillEffect;
}());
var LMatchLeaderSkillEffect = /** @class */ (function () {
    function LMatchLeaderSkillEffect() {
        this.label = "L Match";
        this.type = PlayerSkillEffectType.LMatch;
        this.colours = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    LMatchLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "";
        ret += helper.getHumanReadableLsse(this.lsse);
        ret += " when matching an L of ";
        ret += helper.getHumanReadableColors(this.colours);
        return ret;
    };
    LMatchLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "";
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.LMatch, function(x) { return true; })";
    };
    LMatchLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>=')
        };
        return ret;
    };
    LMatchLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    LMatchLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return LMatchLeaderSkillEffect;
}());
var MinimumOrbCountLeaderSkillEffect = /** @class */ (function () {
    function MinimumOrbCountLeaderSkillEffect() {
        this.label = "Unable to match X orbs or less";
        this.type = PlayerSkillEffectType.MinimumOrbCount;
        this.minMatch = 0;
        // Placeholder for future PDC
    }
    MinimumOrbCountLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Unable to match fewer than " + this.minMatch + " orbs.";
        return ret;
    };
    MinimumOrbCountLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.minMatch " + templateVm.matchComparison() + " " + templateVm.matchNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.MinimumOrbCount, function(x) { return " + func + "; })";
    };
    MinimumOrbCountLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            matchNumber: ko.observable(0),
            matchComparison: ko.observable('>=')
        };
        return ret;
    };
    MinimumOrbCountLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tMinimum Match <select data-bind=\"value: matchComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: matchNumber\"></input>\n\t\t</div>\n\t\t";
    };
    MinimumOrbCountLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return MinimumOrbCountLeaderSkillEffect;
}());
var MultiplayerBoostLeaderSkillEffect = /** @class */ (function () {
    function MultiplayerBoostLeaderSkillEffect() {
        this.label = "Multiplayer Boost";
        this.type = PlayerSkillEffectType.MultiplayerBoost;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    MultiplayerBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " in Multiplayer mode.";
        return ret;
    };
    MultiplayerBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.lsse.hp " + templateVm.hpComparison() + " " + templateVm.hpNumber() + " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.lsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.MultiplayerBoost, function(x) { return " + func + "; })";
    };
    MultiplayerBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>=')
        };
        return ret;
    };
    MultiplayerBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t<br />\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t<br />\n\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t<br />\n\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t</div>\n\t\t";
    };
    MultiplayerBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return MultiplayerBoostLeaderSkillEffect;
}());
var OrbsRemainingLeaderSkillEffect = /** @class */ (function () {
    function OrbsRemainingLeaderSkillEffect() {
        this.label = "Orbs Remaining";
        this.type = PlayerSkillEffectType.OrbsRemaining;
        this.orbs = 0;
        this.maxStacks = 0;
        var blsse = new LeaderSkillStatEffect();
        blsse.hp = 1;
        blsse.atk = 1;
        blsse.rcv = 1;
        blsse.shield = 0;
        this.baseLsse = blsse;
        var slsse = new LeaderSkillStatEffect();
        slsse.hp = 0;
        slsse.atk = 0;
        slsse.rcv = 0;
        slsse.shield = 0;
        this.stackLsse = slsse;
    }
    OrbsRemainingLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.baseLsse);
        ret += " when " + this.orbs + " orbs or less remain on board.";
        if (this.maxStacks > 0) {
            ret += " Additional " + helper.getHumanReadableLsse(this.stackLsse, true);
            ret += " for each fewer, up to ";
            ret += helper.getHumanReadableMaxLsse(this.baseLsse, this.stackLsse, this.maxStacks);
            ret += " for an empty board.";
        }
        return ret;
    };
    OrbsRemainingLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.orbs " + templateVm.minOrbsComparison() + " " + templateVm.minOrbs();
        if ((templateVm.atkNumber() > 0) || (templateVm.rcvNumber() > 0) || (templateVm.shieldNumber() > 0)) {
            func += " && x.baseLsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.baseLsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.baseLsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        }
        if ((templateVm.specifyStack()) && ((templateVm.atkStackNumber() > 0) || (templateVm.rcvStackNumber() > 0))) {
            func += " && x.stackLsse.atk " + templateVm.atkStackComparison() + " " + templateVm.atkStackNumber() + " && x.stackLsse.rcv " + templateVm.rcvStackComparison() + " " + templateVm.rcvStackNumber();
        }
        func += " && (x.baseLsse.atk + (x.maxStacks * x.stackLsse.atk)) " + templateVm.atkTotalComparison() + " " + templateVm.atkTotalNumber();
        func += " && (x.baseLsse.rcv + (x.maxStacks * x.stackLsse.rcv)) " + templateVm.rcvTotalComparison() + " " + templateVm.rcvTotalNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.OrbsRemaining, function(x) { return " + func + "; })";
    };
    OrbsRemainingLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>='),
            atkStackNumber: ko.observable(0),
            atkStackComparison: ko.observable('>='),
            rcvStackNumber: ko.observable(0),
            rcvStackComparison: ko.observable('>='),
            atkTotalNumber: ko.observable(0),
            atkTotalComparison: ko.observable('>='),
            rcvTotalNumber: ko.observable(0),
            rcvTotalComparison: ko.observable('>='),
            minOrbs: ko.observable(0),
            minOrbsComparison: ko.observable('>='),
            specifyStack: ko.observable(false)
        };
        return ret;
    };
    OrbsRemainingLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\t<div class=\"adv-search-option\">\n\t\tMin Remaining <select data-bind=\"value: minOrbsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: minOrbs\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tBase activation\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t<br/>\n\t\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t\t</div>\n\t\t<label><input type=\"checkbox\" data-bind=\"checked: specifyStack\"></input> Specify stack boosts</label>\n\t\t<div class=\"adv-search-option\" data-bind=\"visible: specifyStack() == true\">\n\t\tStack bonus\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkStackComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkStackNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvStackComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvStackNumber\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tMax activation\n\t\t<br/>\n\t\tATK Boost <select data-bind=\"value: atkTotalComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkTotalNumber\"></input>\n\t\t<br/>\n\t\tRCV Boost <select data-bind=\"value: rcvTotalComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvTotalNumber\"></input>\n\t\t</div>\n\t</div>\n\t\t";
    };
    OrbsRemainingLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = this.baseLsse.hp + this.stackLsse.hp * this.maxStacks;
        lsse.atk = this.baseLsse.atk + this.stackLsse.atk * this.maxStacks;
        lsse.rcv = this.baseLsse.rcv + this.stackLsse.rcv * this.maxStacks;
        lsse.shield = this.baseLsse.shield + this.stackLsse.shield * this.maxStacks;
        return lsse;
    };
    return OrbsRemainingLeaderSkillEffect;
}());
var PassiveBoostLeaderSkillEffect = /** @class */ (function () {
    function PassiveBoostLeaderSkillEffect() {
        this.label = "Passive Boost";
        this.type = PlayerSkillEffectType.PassiveBoost;
        var lsse = new LeaderSkillStatEffect();
        lsse.atk = 1;
        lsse.hp = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    PassiveBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " for all allies.";
        return ret;
    };
    PassiveBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.lsse.hp " + templateVm.hpComparison() + " " + templateVm.hpNumber() + " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber() + " && x.lsse.shield " + templateVm.shieldComparison() + " " + templateVm.shieldNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.PassiveBoost, function(x) { return " + func + "; })";
    };
    PassiveBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            shieldNumber: ko.observable(0),
            shieldComparison: ko.observable('>=')
        };
        return ret;
    };
    PassiveBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t\t<br />\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br />\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t<br />\n\t\tShield <select data-bind=\"value: shieldComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: shieldNumber\"></input>\n\t\t</div>\n\t\t";
    };
    PassiveBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return PassiveBoostLeaderSkillEffect;
}());
var PassiveCounterAttackLeaderSkillEffect = /** @class */ (function () {
    function PassiveCounterAttackLeaderSkillEffect() {
        this.label = "Counter Attack";
        this.type = PlayerSkillEffectType.PassiveCounterAttack;
        this.chance = 0;
        this.mult = 0;
        this.color = ColorAttribute.None;
        // Placeholder for future PDC
    }
    PassiveCounterAttackLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = this.chance + "% chance for " + this.mult + "x " + helper.getHumanReadableColor(this.color);
        ret += " counterattack.";
        return ret;
    };
    PassiveCounterAttackLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.chance " + templateVm.chanceComparison() + " " + templateVm.chanceNumber();
        func += " && x.mult " + templateVm.multComparison() + " " + templateVm.multNumber();
        if (templateVm.color() != "Any") {
            func += " && x.color == ColorAttribute." + templateVm.color();
        }
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.PassiveCounterAttack, function(x) { return " + func + "; })";
    };
    PassiveCounterAttackLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            color: ko.observable('Any'),
            multNumber: ko.observable(0),
            multComparison: ko.observable('>='),
            chanceNumber: ko.observable(0),
            chanceComparison: ko.observable('>=')
        };
        return ret;
    };
    PassiveCounterAttackLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tCounterattack Color:\n\t\t<select data-bind=\"value: color\">\n\t\t<option>Any</option>\n\t\t<option>Fire</option>\n\t\t<option>Water</option>\n\t\t<option>Wood</option>\n\t\t<option>Light</option>\n\t\t<option>Dark</option>\n\t\t</select>\n\t\t<div>\n\t\tCounterattack Multiplier <select data-bind=\"value: multComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: multNumber\"></input>\n\t\t<br/>\n\t\tChance percent <select data-bind=\"value: chanceComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: chanceNumber\"></input>\n\t\t</div>\n\t</div>\n\t\t";
    };
    PassiveCounterAttackLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return PassiveCounterAttackLeaderSkillEffect;
}());
var PassiveNoSkyfallLeaderSkillEffect = /** @class */ (function () {
    function PassiveNoSkyfallLeaderSkillEffect() {
        this.label = "No Skyfall";
        this.type = PlayerSkillEffectType.PassiveNoSkyfall;
        // Placeholder for future PDC
    }
    PassiveNoSkyfallLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "No skyfall combos.";
        return ret;
    };
    PassiveNoSkyfallLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.PassiveNoSkyfall, function(x) { return true; })";
    };
    PassiveNoSkyfallLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    PassiveNoSkyfallLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    PassiveNoSkyfallLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return PassiveNoSkyfallLeaderSkillEffect;
}());
var PassiveTimeExtendLeaderSkillEffect = /** @class */ (function () {
    function PassiveTimeExtendLeaderSkillEffect() {
        this.label = "Time Extend";
        this.type = PlayerSkillEffectType.PassiveTimeExtend;
        this.seconds = 0;
        // Placeholder for future PDC
    }
    PassiveTimeExtendLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Increases orb movement time by " + this.seconds + " seconds.";
        return ret;
    };
    PassiveTimeExtendLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.seconds " + templateVm.secondsComparison() + " " + templateVm.secondsNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.PassiveTimeExtend, function(x) { return " + func + "; })";
    };
    PassiveTimeExtendLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            secondsNumber: ko.observable(0),
            secondsComparison: ko.observable('>=')
        };
        return ret;
    };
    PassiveTimeExtendLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tBonus Seconds <select data-bind=\"value: secondsComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: secondsNumber\"></input>\n\t\t</div>\n\t\t";
    };
    PassiveTimeExtendLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return PassiveTimeExtendLeaderSkillEffect;
}());
var ResolveLeaderSkillEffect = /** @class */ (function () {
    function ResolveLeaderSkillEffect() {
        this.label = "Resolve";
        this.type = PlayerSkillEffectType.Resolve;
        this.threshhold = 0;
        // Placeholder for future PDC
    }
    ResolveLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Survive a single hit when at least " + this.threshhold + "% HP remaining.";
        return ret;
    };
    ResolveLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.threshhold " + templateVm.threshComparison() + " " + templateVm.threshNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.Resolve, function(x) { return " + func + "; })";
    };
    ResolveLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            threshNumber: ko.observable(0),
            threshComparison: ko.observable('>=')
        };
        return ret;
    };
    ResolveLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tHP Threshhold <select data-bind=\"value: threshComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: threshNumber\"></input>\n\t\t</div>\n\t\t";
    };
    ResolveLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return ResolveLeaderSkillEffect;
}());
var SevenBySixBoardLeaderSkillEffect = /** @class */ (function () {
    function SevenBySixBoardLeaderSkillEffect() {
        this.label = "7x6 Board";
        this.type = PlayerSkillEffectType.SevenBySixBoard;
        // Placeholder for future PDC
    }
    SevenBySixBoardLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Board changes to 7x6.";
        return ret;
    };
    SevenBySixBoardLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.SevenBySixBoard, function(x) { return true; })";
    };
    SevenBySixBoardLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    SevenBySixBoardLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    SevenBySixBoardLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return SevenBySixBoardLeaderSkillEffect;
}());
var SkillsUsedBoostLeaderSkillEffect = /** @class */ (function () {
    function SkillsUsedBoostLeaderSkillEffect() {
        this.label = "Skills Used Boost";
        this.type = PlayerSkillEffectType.SkillsUsedBoost;
        this.types = [];
        this.colors = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    SkillsUsedBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        if (this.colors.length > 0) {
            ret += " for " + helper.getHumanReadableColors(this.colors);
            ret += " cards";
        }
        if (this.types.length > 0) {
            if (this.colors.length > 0) {
                ret += " and ";
            }
            else {
                ret += " for ";
            }
            ret += helper.getHumanReadableTypes(this.types);
            ret += " types";
        }
        ret += " when a skill is used on your turn.";
        return ret;
    };
    SkillsUsedBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.SkillsUsedBoost, function(x) { return " + func + "; })";
    };
    SkillsUsedBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>=')
        };
        return ret;
    };
    SkillsUsedBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\tColors and typing filter WIP\n\t\t<div class=\"adv-search-option\">\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br />\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t</div>\n\t\t";
    };
    SkillsUsedBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return SkillsUsedBoostLeaderSkillEffect;
}());
var TaikoNoisesLeaderSkillEffect = /** @class */ (function () {
    function TaikoNoisesLeaderSkillEffect() {
        this.label = "Taiko Noises";
        this.type = PlayerSkillEffectType.TaikoNoises;
        // Placeholder for future PDC
    }
    TaikoNoisesLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Taiko sounds when moving orbs.";
        return ret;
    };
    TaikoNoisesLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.TaikoNoises, function(x) { return true; })";
    };
    TaikoNoisesLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    TaikoNoisesLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    TaikoNoisesLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return TaikoNoisesLeaderSkillEffect;
}());
var TeamBoostLeaderSkillEffect = /** @class */ (function () {
    function TeamBoostLeaderSkillEffect() {
        this.label = "Specific Team Members Boost";
        this.type = PlayerSkillEffectType.TeamBoost;
        this.teamComp = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    TeamBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " when all the following cards are on team: ";
        ret += this.teamComp.toString();
        ret += ".";
        return ret;
    };
    TeamBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.lsse.hp " + templateVm.hpComparison() + " " + templateVm.hpNumber() + " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber();
        func += " && x.teamComp.length " + templateVm.countComparison() + " " + templateVm.countNumber();
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.TeamBoost, function(x) { return " + func + "; })";
    };
    TeamBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>='),
            countNumber: ko.observable(0),
            countComparison: ko.observable('>=')
        };
        return ret;
    };
    TeamBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tNumber of required members <select data-bind=\"value: countComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: countNumber\"></input>\n\t\t</div>\n\t\t<div class=\"adv-search-option\">\n\t\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t\t<br />\n\t\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t\t<br />\n\t\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t\t</div>\n\t\t";
    };
    TeamBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return TeamBoostLeaderSkillEffect;
}());
var TrueBonusAttackLeaderSkillEffect = /** @class */ (function () {
    function TrueBonusAttackLeaderSkillEffect() {
        this.label = "True Bonus Attack";
        this.type = PlayerSkillEffectType.TrueBonusAttack;
        this.colours = [];
        this.damage = 0;
        this.linked = 0;
        this.numColours = 0;
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    TrueBonusAttackLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = "Deals ";
        ret += this.damage;
        ret += " true damage when matching ";
        if (this.linked > 0) {
            ret += this.linked + "+ ";
            ret += helper.getHumanReadableColors(this.colours, "or");
        }
        else {
            ret += helper.getHumanReadableColors(this.colours, "and");
        }
        ret += " orbs.";
        return ret;
    };
    TrueBonusAttackLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "true";
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.TrueBonusAttack, function(x) { return " + func + "; })";
    };
    TrueBonusAttackLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>=')
        };
        return ret;
    };
    TrueBonusAttackLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    TrueBonusAttackLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    return TrueBonusAttackLeaderSkillEffect;
}());
var TypeBoostLeaderSkillEffect = /** @class */ (function () {
    function TypeBoostLeaderSkillEffect() {
        this.label = "Type Boost";
        this.type = PlayerSkillEffectType.TypeBoost;
        this.types = [];
        var lsse = new LeaderSkillStatEffect();
        lsse.atk = 1;
        lsse.hp = 1;
        lsse.rcv = 1;
        lsse.shield = 0;
        this.lsse = lsse;
    }
    TypeBoostLeaderSkillEffect.prototype.getDescription = function () {
        var helper = new PlayerSkillDescriptionHelper();
        var ret = helper.getHumanReadableLsse(this.lsse);
        ret += " for " + helper.getHumanReadableTypes(this.types);
        ret += " types.";
        return ret;
    };
    TypeBoostLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        var func = "x.lsse.hp " + templateVm.hpComparison() + " " + templateVm.hpNumber() + " && x.lsse.atk " + templateVm.atkComparison() + " " + templateVm.atkNumber() + " && x.lsse.rcv " + templateVm.rcvComparison() + " " + templateVm.rcvNumber();
        var types = [];
        for (var x in templateVm.types) {
            if (templateVm.types[x]()) {
                types.push(x);
            }
        }
        var typeCheck = " && ";
        if (types.length > 0) {
            typeCheck += "(";
            types.forEach(function (v) {
                if (typeCheck != " && (") {
                    typeCheck += " || ";
                }
                typeCheck += "x.types.indexOf(CardType." + CardType[v] + ") > -1";
            });
            typeCheck += ")";
            func += typeCheck;
        }
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.TypeBoost, function(x) { return " + func + "; }) || CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.AttributeOrTypeBoost, function(x) { return " + func + "; })";
    };
    TypeBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        var ret = {
            allTypes: BurstPlayerSkillEffect.validTypes,
            types: {},
            hpNumber: ko.observable(0),
            hpComparison: ko.observable('>='),
            atkNumber: ko.observable(0),
            atkComparison: ko.observable('>='),
            rcvNumber: ko.observable(0),
            rcvComparison: ko.observable('>=')
        };
        ret.allTypes.forEach(function (v) {
            ret.types[v] = ko.observable(false);
        });
        return ret;
    };
    TypeBoostLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t<div class=\"adv-search-option\">\n\t\tMust boost (any):\n\t\t<div data-bind=\"foreach: allTypes\">\n\t\t\t<label data-bind=\"asset: CardAssets.getTypeImageData($data)\"><input type=\"checkbox\" data-bind=\"checked:$parent.types[$data]\"></input></label>\n\t\t</div>\n\t\t<div>\n\tHP Boost <select data-bind=\"value: hpComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: hpNumber\"></input>\n\t<br />\n\tATK Boost <select data-bind=\"value: atkComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: atkNumber\"></input>\n\t<br />\n\tRCV Boost <select data-bind=\"value: rcvComparison\"><option>&gt;</option><option>&gt;=</option><option>&lt;</option><option>&lt;=</option><option>==</option></select> <input type=\"number\" data-bind=\"value: rcvNumber\"></input>\n\t</div>\n\t</div>\n\t\t";
    };
    TypeBoostLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        return this.lsse;
    };
    TypeBoostLeaderSkillEffect.validTypes = [CardType.God, CardType.Dragon, CardType.Devil, CardType.Machine, CardType.Balanced, CardType.Attacker, CardType.Physical, CardType.Healer, CardType.Evo, CardType.Awakening, CardType.Enhance, CardType.Redeemable];
    return TypeBoostLeaderSkillEffect;
}());
var VoidPoisonLeaderSkillEffect = /** @class */ (function () {
    function VoidPoisonLeaderSkillEffect() {
        this.label = "Void Poison";
        this.type = PlayerSkillEffectType.VoidPoison;
        // Placeholder for future PDC
    }
    VoidPoisonLeaderSkillEffect.prototype.getDescription = function () {
        var ret = "Voids poison damage.";
        return ret;
    };
    VoidPoisonLeaderSkillEffect.prototype.getAdvancedSearchString = function (templateVm) {
        return "CardAssets.hasLeaderSkill(c, model, PlayerSkillEffectType.VoidPoison, function(x) { return true; })";
    };
    VoidPoisonLeaderSkillEffect.prototype.getAdvancedSearchTemplateVm = function () {
        return {};
    };
    VoidPoisonLeaderSkillEffect.prototype.getAdvancedSearchTemplate = function () {
        return "\n\t\t";
    };
    VoidPoisonLeaderSkillEffect.prototype.calculateMaxMultiplier = function () {
        var lsse = new LeaderSkillStatEffect();
        lsse.hp = 1;
        lsse.atk = 1;
        lsse.rcv = 1;
        return lsse;
    };
    return VoidPoisonLeaderSkillEffect;
}());
var Effect0PlayerSkillParser = /** @class */ (function () {
    function Effect0PlayerSkillParser() {
    }
    //actually real. all target elemental attack    
    Effect0PlayerSkillParser.prototype.parse = function (params) {
        //attr id, mult x100
        if (params[0] == undefined) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = "";
            return ret;
        }
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflicts a ";
        legacyDescription += params[1] / 100;
        legacyDescription += "x ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " attack on all enemies.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isTrueDamage = false;
        effect.isMultiTarget = true;
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.multiplier = params[1] / 100;
        effect.numberOfAttacks = 1;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect0PlayerSkillParser;
}());
var Effect100PlayerSkillParser = /** @class */ (function () {
    function Effect100PlayerSkillParser() {
    }
    //atk and rcv mult on skill usage
    Effect100PlayerSkillParser.prototype.parse = function (params) {
        //atk flag, rcv flag, mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[0] && params[2], params[1] && params[2]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " for all allies when skills used.";
        var effect = new SkillsUsedBoostLeaderSkillEffect();
        if (params[0] == 1) {
            effect.lsse.atk = params[2] / 100;
        }
        if (params[1] == 2) {
            effect.lsse.rcv = params[2] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect100PlayerSkillParser;
}());
var Effect101PlayerSkillParser = /** @class */ (function () {
    function Effect101PlayerSkillParser() {
    }
    //atk at exactly x combos, no more no less
    Effect101PlayerSkillParser.prototype.parse = function (params) {
        //combo, mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[1], 0);
        legacyDescription += " for all allies at exactly ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " combos.";
        var effect = new ComboCountExactLeaderSkillEffect();
        effect.combos = params[0];
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect101PlayerSkillParser;
}());
var Effect103PlayerSkillParser = /** @class */ (function () {
    function Effect103PlayerSkillParser() {
    }
    //atk+rcv mult at x+ combos
    Effect103PlayerSkillParser.prototype.parse = function (params) {
        //combo, hpflag?, rcvflag?, mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[1] && params[3], params[2] && params[3]);
        legacyDescription += " for all allies at ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "+ combos.";
        var effect = new ComboCountLeaderSkillEffect();
        effect.minCombos = params[0];
        effect.maxStacks = 0;
        //all uses atk and rcv, but flags match other uses. Assuming flags.
        if (params[1] == 1) {
            effect.baseLsse.atk = params[3] / 100;
        }
        if (params[2] == 2) {
            effect.baseLsse.rcv = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect103PlayerSkillParser;
}());
var Effect104PlayerSkillParser = /** @class */ (function () {
    function Effect104PlayerSkillParser() {
    }
    //atk and possible rcv mult for color(s) at x+ combos
    Effect104PlayerSkillParser.prototype.parse = function (params) {
        //combo, colorbits, hpflag, rcvflag, mult. so far all are single colours
        //but parse bitflags anyway
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[1]);
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2] && params[4], params[3] && params[4]);
        legacyDescription += " for ";
        if (colors.length == 5) {
            legacyDescription += "all";
        }
        else {
            legacyDescription += helper.getHumanReadableColors(colors);
        }
        legacyDescription += " cards at ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "+ combos.";
        var effect = new ComboCountAttributeRestrictedLeaderSkillEffect();
        effect.minCombos = params[0];
        effect.colors = colors;
        //so far, all cases only boost atk, can't verify flags. Assume atk only
        effect.lsse.atk = params[4] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect104PlayerSkillParser;
}());
var Effect105PlayerSkillParser = /** @class */ (function () {
    function Effect105PlayerSkillParser() {
    }
    //atk mult but affects rcv
    Effect105PlayerSkillParser.prototype.parse = function (params) {
        //rcv mult, atk mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "All allies ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[1], 0);
        legacyDescription += " but RCV goes to ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new PassiveBoostLeaderSkillEffect();
        effect.lsse.atk = params[1] / 100;
        effect.lsse.rcv = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect105PlayerSkillParser;
}());
var Effect106PlayerSkillParser = /** @class */ (function () {
    function Effect106PlayerSkillParser() {
    }
    //atk mult but affects hp
    Effect106PlayerSkillParser.prototype.parse = function (params) {
        //hp mult, atk mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "All allies ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[1], 0);
        legacyDescription += " but HP goes to ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new PassiveBoostLeaderSkillEffect();
        effect.lsse.hp = params[0] / 100;
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect106PlayerSkillParser;
}());
var Effect107PlayerSkillParser = /** @class */ (function () {
    function Effect107PlayerSkillParser() {
    }
    //hp detriment. Only diza uses it
    Effect107PlayerSkillParser.prototype.parse = function (params) {
        //hp mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "HP goes to ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new PassiveBoostLeaderSkillEffect();
        effect.lsse.hp = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect107PlayerSkillParser;
}());
var Effect108PlayerSkillParser = /** @class */ (function () {
    function Effect108PlayerSkillParser() {
    }
    //atk boost for exactly 1 type while affecting HP. so far all detrimental
    Effect108PlayerSkillParser.prototype.parse = function (params) {
        //hp, type, atk
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2], 0);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        legacyDescription += " but HP goes to ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[1]);
        effect.lsse.hp = params[0] / 100;
        effect.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect108PlayerSkillParser;
}());
var Effect109PlayerSkillParser = /** @class */ (function () {
    function Effect109PlayerSkillParser() {
    }
    //atk mult for matching x+ orbs. only 2 uses
    Effect109PlayerSkillParser.prototype.parse = function (params) {
        //color bits, min match, mult
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2], 0);
        legacyDescription += " when matching at least ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColors(colors, "or");
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " orbs.";
        var effect = new LinkedOrbsLeaderSkillEffect();
        effect.colors = colors;
        effect.minLinked = params[1];
        effect.maxStacks = 0;
        effect.baseLsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect109PlayerSkillParser;
}());
var Effect10PlayerSkillParser = /** @class */ (function () {
    function Effect10PlayerSkillParser() {
    }
    //Orb refresh
    Effect10PlayerSkillParser.prototype.parse = function (params) {
        var ret = new PlayerSkillParserResult();
        ret.legacyText = "Replaces all orbs.";
        var effect = new OrbRefreshPlayerSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect10PlayerSkillParser;
}());
var Effect110PlayerSkillParser = /** @class */ (function () {
    function Effect110PlayerSkillParser() {
    }
    //grudge strike
    Effect110PlayerSkillParser.prototype.parse = function (params) {
        //targetflag, attr, fullHP multx100, 1HPmultx100, scaling?
        //so far all examples have 300 as scaling. targetflag 0 = alltarget, 1 = single
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflicts a ";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        legacyDescription += " attack to ";
        if (params[0]) {
            legacyDescription += "1 enemy based on HP. ";
        }
        else {
            legacyDescription += "all enemies based on HP. ";
        }
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x at full HP, up to ";
        legacyDescription += helper.getHumanReadableNumber(params[3] / 100);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x at 1 HP.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        if (params[0] == 0) {
            effect.isMultiTarget = true;
        }
        effect.element = ColorAttribute[ColorAttribute[params[1]]];
        effect.atkMultiplierAtFullHp = params[2] / 100;
        effect.atkMultiplierAtOneHp = params[3] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect110PlayerSkillParser;
}());
var Effect111PlayerSkillParser = /** @class */ (function () {
    function Effect111PlayerSkillParser() {
    }
    //HP+atk for exactly 2 colors
    Effect111PlayerSkillParser.prototype.parse = function (params) {
        //c1, c2, mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(params[2], params[2], 0);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableColors([params[0], params[1]]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0], params[1]);
        effect.lsse.hp = params[2] / 100;
        effect.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect111PlayerSkillParser;
}());
var Effect114PlayerSkillParser = /** @class */ (function () {
    function Effect114PlayerSkillParser() {
    }
    //allstat for exactly 2 colors
    Effect114PlayerSkillParser.prototype.parse = function (params) {
        //c1, c2, mult
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(params[2], params[2], params[2]);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableColors([params[0], params[1]]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0], params[1]);
        effect.lsse.hp = params[2] / 100;
        effect.lsse.atk = params[2] / 100;
        effect.lsse.rcv = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect114PlayerSkillParser;
}());
var Effect115PlayerSkillParser = /** @class */ (function () {
    function Effect115PlayerSkillParser() {
    }
    //single target drain attack. Choice of element which 35 did not have
    //attr, multx100, drain%
    Effect115PlayerSkillParser.prototype.parse = function (params) {
        //c, mult, drain
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict a ";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " attack to 1 enemy and recover ";
        legacyDescription += params[2];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% of the damage.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.multiplier = params[1] / 100;
        effect.drainPercentage = params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect115PlayerSkillParser;
}());
var Effect116PlayerSkillParser = /** @class */ (function () {
    function Effect116PlayerSkillParser(parser) {
        this.parser = null;
        this.parser = parser;
    }
    Effect116PlayerSkillParser.prototype.parse = function (params) {
        var ret = new PlayerSkillParserResult();
        var self = this;
        params.forEach(function (v) {
            // Insert a space between effects
            var thisOne = self.parser.parseSkill(v);
            if (ret.legacyText != "") {
                ret.legacyText += " ";
            }
            ret.legacyText += thisOne.legacyText;
            thisOne.parsedEffects.forEach(function (parsedEffect) {
                ret.parsedEffects.push(parsedEffect);
            });
        });
        return ret;
    };
    return Effect116PlayerSkillParser;
}());
var Effect117PlayerSkillParser = /** @class */ (function () {
    function Effect117PlayerSkillParser() {
    }
    //ultra versatile healing effects
    Effect117PlayerSkillParser.prototype.parse = function (params) {
        //CBind turns, rcv mult healedx100, flat hp heal, %HP heal, ABind heal. No trailings
        //all cards only have 1 kind of HP healed max, so no awkward strings like
        //"heal 4x own rcv. recover 100HP. 20% hp healed." should form. Max of one.
        //so far also nothing heals awoken and normal binds and not be same turns
        var legacyDecription = "";
        if (params[0]) {
            legacyDecription += params[0] + " turn bind ";
            if (params[4] == params[0]) {
                legacyDecription += "and awoken bind ";
            }
            legacyDecription += "recovery. ";
        }
        if (params[1]) {
            legacyDecription += "Heal " + params[1] / 100 + "x own RCV. ";
        }
        if (params[2]) {
            legacyDecription += "Recover " + params[2] + " HP. ";
        }
        if (params[3]) {
            legacyDecription += params[3] + "%HP healed. ";
        }
        if (params[4] && (params[4] != params[0])) {
            legacyDecription += params[4] + " turn awoken bind recovery.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDecription;
        if (params[0] > 0) {
            var unbind = new BindclearPlayerSkillEffect();
            unbind.turns = params[0];
            ret.parsedEffects.push(unbind);
        }
        if (params[1] > 0 || params[2] > 0 || params[3] > 0) {
            var heal = new ImmediateHealPlayerSkillEffect();
            if (params[1] > 0) {
                heal.selfMultiplier = params[1] / 100;
            }
            if (params[2]) {
                heal.fixedAmount = params[2];
            }
            if (params[3]) {
                heal.maxHPPercentage = params[3];
            }
            ret.parsedEffects.push(heal);
        }
        if (params[4]) {
            var abind = new AwokenBindClearPlayerSkillEffect();
            abind.turns = params[4];
            ret.parsedEffects.push(abind);
        }
        return ret;
    };
    return Effect117PlayerSkillParser;
}());
var Effect118PlayerSkillParser = /** @class */ (function () {
    function Effect118PlayerSkillParser(model) {
        this.model = model;
    }
    Effect118PlayerSkillParser.prototype.parse = function (params) {
        //list of skillIDs
        var legacyDescription = "Activates one of the following skills: ";
        var skillLinks = [];
        var helper = new PlayerSkillDescriptionHelper();
        for (var i = 0; params[i]; i++) {
            var skillId = params[i];
            var skill = this.model.playerSkills[skillId];
            if (!skill) {
                skillLinks.push("#" + skillId);
                continue;
            }
            var skillLink = "";
            skillLink += "<a title=\"" + skill.id + " - " + skill.name + "\" href=\"" + KoPageUrl.getPlayerSkillUrl(skill) + "\">";
            skillLink += skill.name;
            skillLink += "</a>";
            skillLinks.push(skillLink);
        }
        legacyDescription += helper.getHumanReadableList(skillLinks);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new RandomSkillPlayerSkillEffect();
        effect.skillPool = params;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect118PlayerSkillParser;
}());
var Effect119PlayerSkillParser = /** @class */ (function () {
    function Effect119PlayerSkillParser() {
    }
    //scaling atk mult with matching at least x orbs of color(s)
    //159 is a carbon copy of this for stacking purposes. If a 119 and a 159
    //are both satisfied, the multipliers stack like ninegaruda
    Effect119PlayerSkillParser.prototype.parse = function (params) {
        //cbits, min match, mult, [scale mult, max match]
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2], 0);
        legacyDescription += " when matching ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += "+ ";
        legacyDescription += helper.getHumanReadableColors(colors, "or");
        legacyDescription += " orbs.";
        if (params[3]) {
            legacyDescription += " +";
            legacyDescription += params[3] / 100;
            legacyDescription += "x ATK per additional orb up to ";
            legacyDescription += helper.getHumanReadableNumber(((params[4] - params[1]) * params[3] + params[2]) / 100);
            legacyDescription += "x at ";
            legacyDescription += params[4];
            legacyDescription += " orbs.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new LinkedOrbsLeaderSkillEffect();
        effect.colors = colors;
        effect.minLinked = params[1];
        if (params[4] != null) {
            effect.maxStacks = params[4] - params[1];
        }
        effect.baseLsse.atk = params[2] / 100;
        if (params[3] != null) {
            effect.stackLsse.atk = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect119PlayerSkillParser;
}());
var Effect11PlayerSkillParser = /** @class */ (function () {
    function Effect11PlayerSkillParser() {
    }
    //ATK mult for exactly 1 attribute LS
    //attribute id, multiplier
    Effect11PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " cards.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect11PlayerSkillParser;
}());
var Effect121PlayerSkillParser = /** @class */ (function () {
    function Effect121PlayerSkillParser() {
    }
    //attribute and types boosts. 129 without shields
    Effect121PlayerSkillParser.prototype.parse = function (params) {
        //cbits, tbits, HP,atk,rcv.no trailing 0
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(params[2], params[3], params[4]);
        //pys use 121 with [0,0] parameters
        if (legacyDescription == "") {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = "No effect. Probably a py";
            return ret;
        }
        legacyDescription += " for ";
        legacyDescription += helper.getAttributeTypeRestrictionText(params[0], params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        if (params[0] > 0) {
            var effect = new AttributeBoostLeaderSkillEffect();
            effect.colors = helper.parseColorBitflags(params[0]);
            if (params[2]) {
                effect.lsse.hp = params[2] / 100;
            }
            if (params[3]) {
                effect.lsse.atk = params[3] / 100;
            }
            if (params[4]) {
                effect.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(effect);
        }
        if (params[1] > 0) {
            var effect2 = new TypeBoostLeaderSkillEffect;
            effect2.types = helper.parseTypeBitflags(params[1]);
            if (params[2] > 0) {
                effect2.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                effect2.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                effect2.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(effect2);
        }
        return ret;
    };
    return Effect121PlayerSkillParser;
}());
var Effect122PlayerSkillParser = /** @class */ (function () {
    function Effect122PlayerSkillParser() {
    }
    //attribute and types boosts when <= HP thresh
    Effect122PlayerSkillParser.prototype.parse = function (params) {
        //thresh, cbits, tbits, atk, [rcv]
        var helper = new PlayerSkillDescriptionHelper();
        var restr = helper.getAttributeTypeRestrictionText(params[1], params[2]);
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[3], params[4]);
        //If something uses this with no boost for some reason
        if (legacyDescription == "") {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = "No effect. Using id 122";
            return ret;
        }
        if (restr != "") {
            legacyDescription += " for ";
            legacyDescription += restr;
        }
        legacyDescription += " when HP is ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% or below.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = false;
        effect.colors = helper.parseColorBitflags(params[1]);
        effect.typing = helper.parseTypeBitflags(params[2]);
        if (params[3] > 0) {
            effect.lsse.atk = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.lsse.rcv = params[4] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect122PlayerSkillParser;
}());
var Effect123PlayerSkillParser = /** @class */ (function () {
    function Effect123PlayerSkillParser() {
    }
    //attribute and types boosts when at least HP thresh
    Effect123PlayerSkillParser.prototype.parse = function (params) {
        //thresh, cbits, tbits, atk
        var helper = new PlayerSkillDescriptionHelper();
        var restr = helper.getAttributeTypeRestrictionText(params[1], params[2]);
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[3], 0);
        //If something uses this with no boost for some reason
        if (legacyDescription == "") {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = "No effect. Using id 123";
            return ret;
        }
        if (restr != "") {
            legacyDescription += " for ";
            legacyDescription += restr;
        }
        legacyDescription += " when HP is at least ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = true;
        effect.colors = helper.parseColorBitflags(params[1]);
        effect.typing = helper.parseTypeBitflags(params[2]);
        effect.lsse.atk = params[3] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect123PlayerSkillParser;
}());
var Effect124PlayerSkillParser = /** @class */ (function () {
    function Effect124PlayerSkillParser() {
    }
    //color match scaling, allows duplicate colors
    Effect124PlayerSkillParser.prototype.parse = function (params) {
        //c1,c2,c3,c4,c5,min matches,atk, [scale atk]. not all 5 colors need to be filled
        //4,4,0,0,0,2,300 for 2 wood combos 3x. Scale caps when non0 colors exhausted
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[6], 0);
        var colorpool = helper.parseColorBitflags(params[0]).concat(helper.parseColorBitflags(params[1])).concat(helper.parseColorBitflags(params[2])).concat(helper.parseColorBitflags(params[3])).concat(helper.parseColorBitflags(params[4]));
        legacyDescription += " when matching ";
        if (params[5] != colorpool.length) {
            legacyDescription += params[5];
            legacyDescription += " of the following colors: ";
        }
        legacyDescription += helper.getHumanReadableColors(colorpool);
        if (params[7]) {
            legacyDescription += ". +";
            legacyDescription += params[7] / 100;
            legacyDescription += "x per additional, up to ";
            legacyDescription += (params[6] + (params[7] * (colorpool.length - params[5]))) / 100;
            legacyDescription += "x for all ";
            legacyDescription += colorpool.length;
            legacyDescription += " orb types";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new ColorMatchesLeaderSkillEffect();
        effect.colorPool = colorpool;
        effect.minMatches = params[5];
        effect.maxStacks = colorpool.length - params[5];
        effect.baseLsse.atk = params[6] / 100;
        if (params[7]) {
            effect.stackLsse.atk = params[7] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect124PlayerSkillParser;
}());
var Effect125PlayerSkillParser = /** @class */ (function () {
    function Effect125PlayerSkillParser(model) {
        this.model = model;
    }
    // Stat boosts when all specified cards on team
    Effect125PlayerSkillParser.prototype.parse = function (params) {
        //m1,m2,m3,m4,m5,hp,atk,rcv. No trailing 0
        var helper = new PlayerSkillDescriptionHelper();
        var cardLinks = [];
        for (var i = 0; i < 5; i++) {
            // Ignore 0s
            if (params[i] == 0) {
                continue;
            }
            var cardId = params[i];
            var card = this.model.cards[cardId];
            if (!card) {
                cardLinks.push("#" + cardId);
                continue;
            }
            var cardLink = "";
            cardLink += "<a title=\"" + card.id + " - " + card.name + "\" href=\"" + KoPageUrl.getCardUrl(card) + "\">";
            cardLink += card.name;
            cardLink += "</a>";
            cardLinks.push(cardLink);
        }
        var legacyDescription = helper.getHumanReadableMultipliers(params[5], params[6], params[7]);
        legacyDescription += " when ";
        legacyDescription += helper.getHumanReadableList(cardLinks);
        if (cardLinks.length == 1) {
            legacyDescription += " is on team.";
        }
        else {
            legacyDescription += " are all on team.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new TeamBoostLeaderSkillEffect();
        for (var i = 0; i < 5; i++) {
            if (params[i] == 0) {
                continue;
            }
            effect.teamComp.push(params[i]);
        }
        if (params[5] > 0) {
            effect.lsse.hp = params[5] / 100;
        }
        if (params[6] > 0) {
            effect.lsse.atk = params[6] / 100;
        }
        if (params[7] > 0) {
            effect.lsse.rcv = params[7] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect125PlayerSkillParser;
}());
var Effect126PlayerSkillParser = /** @class */ (function () {
    function Effect126PlayerSkillParser() {
    }
    //increase skyfall AS
    ///attr bitflags, turns?, turns?, %increase. All examples have parm 2 and 3 equal
    Effect126PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var legacyDescription = "Increases the skyfall of ";
        legacyDescription += helper.getHumanReadableColors(colors);
        legacyDescription += " orbs by ";
        legacyDescription += params[3] + "%";
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableNumberRange(params[1], params[2]);
        legacyDescription += " turns.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new IncreaseSkyfallPlayerSkillEffect();
        effect.colors = colors;
        effect.percentage = params[3];
        effect.turns = params[1];
        //params[2] is probably max and it's a random range but so far all match.
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect126PlayerSkillParser;
}());
var Effect127PlayerSkillParser = /** @class */ (function () {
    function Effect127PlayerSkillParser() {
    }
    //column change
    Effect127PlayerSkillParser.prototype.parse = function (params) {
        //col bit(s), color bitflags, [repeat].
        //repeats can be duplicates (why). bartz is 1,4,32,4. Pixel is 33,4 which does
        //the same thing. Build array and combine col bits if output color exists already        
        var helper = new PlayerSkillDescriptionHelper();
        //colorattribute because lazy and don't want to make new type
        var cols = [];
        var colchange = [];
        var targetcolor = 0;
        var outputbits = [];
        var legacyDescription = "Changes the ";
        for (var i = 0; params[i]; i += 2) {
            var index = -1;
            targetcolor = params[i + 1] || 0;
            for (var k = 1; colchange[k]; k += 2) {
                if (colchange[k] == targetcolor)
                    index = k - 1;
            }
            if (index == -1) {
                colchange.push(params[i], targetcolor);
            }
            else {
                colchange[index] += params[i];
            }
        }
        for (var i = 0; colchange[i]; i += 2) {
            if (i > 0) {
                legacyDescription += " and the ";
            }
            cols = helper.parseColorBitflags(colchange[i]);
            for (var j = 0; j < cols.length; j++) {
                if (j > 0) {
                    legacyDescription += " and ";
                }
                switch (cols[j]) {
                    case ColorAttribute.Fire:
                        legacyDescription += "leftmost";
                        break;
                    case ColorAttribute.Water:
                        legacyDescription += "2nd from the left";
                        break;
                    case ColorAttribute.Wood:
                        legacyDescription += "3rd from the left";
                        break;
                    case ColorAttribute.Light:
                        legacyDescription += "3rd from the right";
                        break;
                    case ColorAttribute.Dark:
                        legacyDescription += "2nd from the right";
                        break;
                    case ColorAttribute.Heal:
                        legacyDescription += "rightmost";
                        break;
                    default:
                        legacyDescription += "Unknown";
                        break;
                }
            }
            legacyDescription += " column into ";
            outputbits = helper.parseColorBitflags(colchange[i + 1] || 0);
            legacyDescription += helper.getHumanReadableColors(outputbits);
            legacyDescription += " orbs";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        for (var i = 0; colchange[i]; i += 2) {
            var effect = new OrbChangePlayerSkillEffect();
            effect.results = helper.parseColorBitflags(colchange[i + 1]);
            effect.colNumbers = helper.parseGenericBitflags(colchange[i]);
            ret.parsedEffects.push(effect);
        }
        return ret;
    };
    return Effect127PlayerSkillParser;
}());
var Effect128PlayerSkillParser = /** @class */ (function () {
    function Effect128PlayerSkillParser() {
    }
    //row change
    Effect128PlayerSkillParser.prototype.parse = function (params) {
        //row bit(s), color bitflag, [repeat].
        //repeats can be duplicates (why). 
        //Build array and combine row bits if output color exists already        
        var helper = new PlayerSkillDescriptionHelper();
        //colorattribute because lazy and don't want to make new type
        var rows = [];
        var rowchange = [];
        var targetcolor = 0;
        var outputbits = [];
        var legacyDescription = "Changes the ";
        for (var i = 0; params[i]; i += 2) {
            var index = -1;
            targetcolor = params[i + 1] || 0;
            for (var k = 1; rowchange[k]; k += 2) {
                if (rowchange[k] == targetcolor)
                    index = k - 1;
            }
            if (index == -1) {
                rowchange.push(params[i], targetcolor);
            }
            else {
                rowchange[index] += params[i];
            }
        }
        for (var i = 0; rowchange[i]; i += 2) {
            if (i > 0) {
                legacyDescription += " and the ";
            }
            rows = helper.parseColorBitflags(rowchange[i]);
            for (var j = 0; j < rows.length; j++) {
                if (j > 0) {
                    legacyDescription += " and ";
                }
                switch (rows[j]) {
                    case ColorAttribute.Fire:
                        legacyDescription += "top";
                        break;
                    case ColorAttribute.Water:
                        legacyDescription += "2nd from the top";
                        break;
                    case ColorAttribute.Wood:
                        legacyDescription += "center";
                        break;
                    case ColorAttribute.Light:
                        legacyDescription += "2nd from the bottom";
                        break;
                    case ColorAttribute.Dark:
                        legacyDescription += "bottom";
                        break;
                    default:
                        legacyDescription += "Unknown";
                        break;
                }
            }
            legacyDescription += " row into ";
            outputbits = helper.parseColorBitflags(rowchange[i + 1] || 0);
            legacyDescription += helper.getHumanReadableColors(outputbits);
            legacyDescription += " orbs";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        for (var i = 0; rowchange[i]; i += 2) {
            var effect = new OrbChangePlayerSkillEffect();
            effect.results = helper.parseColorBitflags(rowchange[i + 1]);
            effect.rowNumbers = helper.parseGenericBitflags(rowchange[i]);
            ret.parsedEffects.push(effect);
        }
        return ret;
    };
    return Effect128PlayerSkillParser;
}());
var Effect129PlayerSkillParser = /** @class */ (function () {
    function Effect129PlayerSkillParser() {
    }
    //attribute and typeboosts. Supports resist  
    //attr bitflags, type bitflags, HPBoost, ATKBoost, RCVboost, [resist attr bitflags, resistance]
    Effect129PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var hp = params[2];
        var atk = params[3];
        var rcv = params[4];
        if (hp || atk || rcv) {
            legacyDescription = helper.getHumanReadableMultipliers(hp, atk, rcv);
            var restrictions = helper.getAttributeTypeRestrictionText(params[0], params[1]);
            if (restrictions == "") {
                // Implied
                legacyDescription += ".";
            }
            else {
                legacyDescription += " for ";
                legacyDescription += restrictions;
                legacyDescription += ".";
            }
        }
        var resistedAttributes = helper.parseColorBitflags(params[5]);
        if (resistedAttributes.length > 0) {
            if (legacyDescription != "") {
                legacyDescription += " ";
            }
            legacyDescription += "Reduce ";
            if (!helper.isAllAttributes(params[5])) {
                legacyDescription += helper.getHumanReadableColors(resistedAttributes) + " attribute ";
            }
            legacyDescription += "damage by " + (params[6] || 0) + "%.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        if (params[0] > 0 || params[1] > 0) {
            var effect = null;
            var lsse = null;
            if (params[0] == 31) {
                var peffect = new PassiveBoostLeaderSkillEffect();
                effect = peffect;
                lsse = peffect.lsse;
            }
            else if (params[1] == 0) {
                var aeffect = new AttributeBoostLeaderSkillEffect();
                aeffect.colors = helper.parseColorBitflags(params[0]);
                effect = aeffect;
                lsse = aeffect.lsse;
            }
            else if (params[0] == 0) {
                var teffect = new TypeBoostLeaderSkillEffect();
                teffect.types = helper.parseTypeBitflags(params[1]);
                effect = teffect;
                lsse = teffect.lsse;
            }
            else {
                var ateffect = new AttributeOrTypeBoostLeaderSkillEffect();
                ateffect.colors = helper.parseColorBitflags(params[0]);
                ateffect.types = helper.parseTypeBitflags(params[1]);
                effect = ateffect;
                lsse = ateffect.lsse;
            }
            if (params[2] > 0) {
                lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(effect);
        }
        if (params[5] > 0) {
            if (params[5] == 31) {
                var peffect2 = new PassiveBoostLeaderSkillEffect();
                peffect2.lsse.shield = params[6];
                ret.parsedEffects.push(peffect2);
            }
            else {
                var reffect = new ColorShieldLeaderSkillEffect();
                reffect.colors = helper.parseColorBitflags(params[5]);
                reffect.percentage = params[6];
                ret.parsedEffects.push(reffect);
            }
        }
        return ret;
    };
    return Effect129PlayerSkillParser;
}());
var Effect12PlayerSkillParser = /** @class */ (function () {
    function Effect12PlayerSkillParser() {
    }
    //Bonus final attack LS
    //multx100
    Effect12PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflicts a bonus ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        legacyDescription += "x attack after matching orbs.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new BonusAttackLeaderSkillEffect();
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect12PlayerSkillParser;
}());
var Effect130PlayerSkillParser = /** @class */ (function () {
    function Effect130PlayerSkillParser() {
    }
    //129 with no HP boost but at <= HP thresh
    Effect130PlayerSkillParser.prototype.parse = function (params) {
        //thresh, cbit, tbit, atk,rcv,[resist cbit, shield]        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var atk = params[3];
        var rcv = params[4];
        if (atk || rcv) {
            legacyDescription = helper.getHumanReadableMultipliers(0, atk, rcv);
            var restrictions = helper.getAttributeTypeRestrictionText(params[1], params[2]);
            if (restrictions != "") {
                legacyDescription += " for ";
                legacyDescription += restrictions;
            }
        }
        var resistedAttributes = helper.parseColorBitflags(params[5]);
        if (resistedAttributes.length > 0) {
            if (legacyDescription != "") {
                legacyDescription += " ";
            }
            legacyDescription += "Reduce ";
            if (!helper.isAllAttributes(params[5])) {
                legacyDescription += helper.getHumanReadableColors(resistedAttributes) + " attribute ";
            }
            legacyDescription += "damage by " + (params[6] || 0) + "%";
        }
        legacyDescription += " when HP is ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% or below.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.colors = helper.parseColorBitflags(params[1]);
        effect.typing = helper.parseTypeBitflags(params[2]);
        if (params[3] > 0) {
            effect.lsse.atk = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.lsse.rcv = params[4] / 100;
        }
        effect.thresh = params[0];
        effect.direction = false;
        if (params[5] > 0) {
            if (params[5] == 31) {
                effect.lsse.shield = params[6];
            }
            else {
                //if we reach here, it's an HP conditional color resist
                console.error("HP conditional color shield 130. Params: " + params.toString());
            }
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect130PlayerSkillParser;
}());
var Effect131PlayerSkillParser = /** @class */ (function () {
    function Effect131PlayerSkillParser() {
    }
    //129 with no HP boost but at >= HP thresh
    Effect131PlayerSkillParser.prototype.parse = function (params) {
        //thresh, cbit, tbit, atk,rcv,[resist cbit, shield]        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var atk = params[3];
        var rcv = params[4];
        if (atk || rcv) {
            legacyDescription = helper.getHumanReadableMultipliers(0, atk, rcv);
            var restrictions = helper.getAttributeTypeRestrictionText(params[1], params[2]);
            if (restrictions != "") {
                legacyDescription += " for ";
                legacyDescription += restrictions;
            }
        }
        var resistedAttributes = helper.parseColorBitflags(params[5]);
        if (resistedAttributes.length > 0) {
            if (legacyDescription != "") {
                legacyDescription += " ";
            }
            legacyDescription += "Reduce ";
            if (!helper.isAllAttributes(params[5])) {
                legacyDescription += helper.getHumanReadableColors(resistedAttributes) + " attribute ";
            }
            legacyDescription += "damage by " + (params[6] || 0) + "%";
        }
        legacyDescription += " when HP is at least ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.colors = helper.parseColorBitflags(params[1]);
        effect.typing = helper.parseTypeBitflags(params[2]);
        if (params[3] > 0) {
            effect.lsse.atk = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.lsse.rcv = params[4] / 100;
        }
        effect.thresh = params[0];
        effect.direction = true;
        if (params[5] > 0) {
            if (params[5] == 31) {
                effect.lsse.shield = params[6];
            }
            else {
                //if we reach here, it's an HP conditional color resist
                console.error("HP conditional color shield 131. Params: " + params.toString());
            }
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect131PlayerSkillParser;
}());
var Effect132PlayerSkillParser = /** @class */ (function () {
    function Effect132PlayerSkillParser() {
    }
    //extend move time AS
    Effect132PlayerSkillParser.prototype.parse = function (params) {
        //turns, secondsx10, [mult % x100]      
        var legacyDescription = "";
        if (params[1]) {
            if (params[1] > 0) {
                legacyDescription += "Extends move time by ";
            }
            else {
                legacyDescription += "Reduces move time by ";
            }
            legacyDescription += params[1] / 10;
            legacyDescription += " seconds ";
        }
        if (params[2]) {
            legacyDescription += params[2] / 100;
            legacyDescription += "x move time ";
        }
        legacyDescription += "for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new TimeExtendPlayerSkillEffect();
        effect.turns = params[0];
        if (params[1] != 0) {
            effect.seconds = params[1] / 10;
        }
        if (params.length > 1) {
            effect.multiplier = params[2] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect132PlayerSkillParser;
}());
var Effect133PlayerSkillParser = /** @class */ (function () {
    function Effect133PlayerSkillParser() {
    }
    //skillusage boost applicable to attributes or types. LS
    //attr bitflags, type bitflags, atk mult, [rcv mult]
    Effect133PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 4);
        var legacyDescription = "";
        var atk = params[2];
        var rcv = params[3];
        // ATK x2...
        legacyDescription += helper.getHumanReadableMultipliers(0, atk, rcv);
        // ... for Wood attribute cards
        var restrictions = helper.getAttributeTypeRestrictionText(params[0], params[1]);
        if (restrictions != "") {
            legacyDescription += " for " + restrictions;
        }
        // Implied
        legacyDescription += " if a skill is used during your turn.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new SkillsUsedBoostLeaderSkillEffect();
        effect.colors = helper.parseColorBitflags(params[0]);
        effect.types = helper.parseTypeBitflags(params[1]);
        if (params[2] != 0) {
            effect.lsse.atk = params[2] / 100;
        }
        if (params[3] != 0) {
            effect.lsse.rcv = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect133PlayerSkillParser;
}());
var Effect136PlayerSkillParser = /** @class */ (function () {
    function Effect136PlayerSkillParser() {
    }
    //stacking boosts for colors like grimoires
    Effect136PlayerSkillParser.prototype.parse = function (params) {
        //cbits, hp,atk,rcv, [repeat]. No trailing 0 on final set    
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var i = 0;
        //only the last set has no trailing 0s
        //if there's more than 1 set, all multipliers are included
        //so the only set that can be less than length 4 is the last one, and
        //all sets before it do contain all of hp/atk/rcv        
        for (i = 0; params[4 * i] != undefined; i++) {
            if (i > 0) {
                legacyDescription += "; ";
            }
            legacyDescription += helper.getHumanReadableMultipliers(params[4 * i + 1], params[4 * i + 2], params[4 * i + 3]);
            legacyDescription += " for ";
            legacyDescription += helper.getHumanReadableColors(helper.parseColorBitflags(params[4 * i]));
            legacyDescription += " cards";
        }
        if (i > 1) {
            legacyDescription += ". Effects stack if multiple colors satisfied";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors = helper.parseColorBitflags(params[0]);
        if (params[1] > 0) {
            effect.lsse.hp = params[1] / 100;
        }
        if (params[2] > 0) {
            effect.lsse.atk = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.lsse.rcv = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        if (params[4] > 0) {
            var effect2 = new AttributeBoostLeaderSkillEffect();
            effect2.colors = helper.parseColorBitflags(params[4]);
            if (params[5] > 0) {
                effect2.lsse.hp = params[5] / 100;
            }
            if (params[6] > 0) {
                effect2.lsse.atk = params[6] / 100;
            }
            if (params[7] > 0) {
                effect2.lsse.rcv = params[7] / 100;
            }
            ret.parsedEffects.push(effect2);
        }
        //in case there's ever a third set
        if (params[8]) {
            console.error("Extra color sets 136. params: " + params.toString());
        }
        return ret;
    };
    return Effect136PlayerSkillParser;
}());
var Effect137PlayerSkillParser = /** @class */ (function () {
    function Effect137PlayerSkillParser() {
    }
    //stacking boosts for types like polaris. 136 but with types not colors
    Effect137PlayerSkillParser.prototype.parse = function (params) {
        //tbits, hp,atk,rcv, [repeat]. No trailing 0 on final set    
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var i = 0;
        //only the last set has no trailing 0s
        //if there's more than 1 set, all multipliers are included
        //so the only set that can be less than length 4 is the last one, and
        //all sets before it do contain all of hp/atk/rcv        
        for (i = 0; params[4 * i] != undefined; i++) {
            if (i > 0) {
                legacyDescription += "; ";
            }
            legacyDescription += helper.getHumanReadableMultipliers(params[4 * i + 1], params[4 * i + 2], params[4 * i + 3]);
            legacyDescription += " for ";
            legacyDescription += helper.getHumanReadableTypes(helper.parseTypeBitflags(params[4 * i]));
            legacyDescription += " types";
        }
        if (i > 1) {
            legacyDescription += ". Effects stack if multiple types satisfied";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types = helper.parseTypeBitflags(params[0]);
        if (params[1] > 0) {
            effect.lsse.hp = params[1] / 100;
        }
        if (params[2] > 0) {
            effect.lsse.atk = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.lsse.rcv = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        if (params[4] > 0) {
            var effect2 = new TypeBoostLeaderSkillEffect();
            effect2.types = helper.parseTypeBitflags(params[4]);
            if (params[5] > 0) {
                effect2.lsse.hp = params[5] / 100;
            }
            if (params[6] > 0) {
                effect2.lsse.atk = params[6] / 100;
            }
            if (params[7] > 0) {
                effect2.lsse.rcv = params[7] / 100;
            }
            ret.parsedEffects.push(effect2);
        }
        //in case there's ever a third set
        if (params[8]) {
            console.error("Extra type sets 137. params: " + params.toString());
        }
        return ret;
    };
    return Effect137PlayerSkillParser;
}());
var Effect139PlayerSkillParser = /** @class */ (function () {
    function Effect139PlayerSkillParser() {
    }
    //2 clause statboosts for attributes/types with HP thresh
    Effect139PlayerSkillParser.prototype.parse = function (params) {
        //cbits, tbits, thresh1, <>=, atk, thresh2, <>=, atk. >= is 0, <= is 1
        var helper = new PlayerSkillDescriptionHelper();
        var restr = helper.getAttributeTypeRestrictionText(params[0], params[1]);
        var boost = "";
        var legacyDescription = "";
        for (var i = 0; params[3 * i + 4] != null; i++) {
            if (i > 0) {
                legacyDescription += "; ";
            }
            legacyDescription += helper.getHumanReadableMultipliers(0, params[3 * i + 4], 0);
            if (restr != "") {
                legacyDescription += " for ";
                legacyDescription += restr;
            }
            legacyDescription += " when HP is ";
            if (params[3 * i + 3]) {
                legacyDescription += "equal to or below ";
            }
            else {
                legacyDescription += "at least ";
            }
            legacyDescription += params[3 * i + 2];
            legacyDescription += "%";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new HpConditionalLeaderSkillEffect();
        var effect2 = new HpConditionalLeaderSkillEffect();
        var colors = helper.parseColorBitflags(params[0]);
        var types = helper.parseTypeBitflags(params[1]);
        if (colors.length != 5) {
            effect.colors = colors;
            effect2.colors = colors;
        }
        effect.typing = types; //not checking types, universals are so far all attr=31
        effect2.typing = types;
        effect.thresh = params[2];
        if (params[3] == 0) {
            effect.direction = true;
        }
        effect.lsse.atk = params[4] / 100;
        ret.parsedEffects.push(effect);
        if (params[5] != null) {
            effect2.thresh = params[5];
            if (params[6] == 0) {
                effect2.direction = true;
            }
            effect2.lsse.atk = params[7] / 100;
            ret.parsedEffects.push(effect2);
        }
        return ret;
    };
    return Effect139PlayerSkillParser;
}());
var Effect13PlayerSkillParser = /** @class */ (function () {
    function Effect13PlayerSkillParser() {
    }
    //Heal after every turn LS
    ///multx100
    Effect13PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Heal ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        legacyDescription += "x this card's RCV after matching orbs.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new AutoHealLeaderSkillEffect();
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect13PlayerSkillParser;
}());
var Effect140PlayerSkillParser = /** @class */ (function () {
    function Effect140PlayerSkillParser() {
    }
    //enhance orb types, supports color bits
    Effect140PlayerSkillParser.prototype.parse = function (params) {
        //cbits, potency? All potencies currently 6%
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Enhances ";
        var colors = helper.parseColorBitflags(params[0]);
        if (colors.length == 6) {
            legacyDescription += "all";
        }
        else {
            legacyDescription += helper.getHumanReadableColors(colors);
        }
        legacyDescription += " orbs; ";
        legacyDescription += params[1];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% per orb.";
        var effect = new EnhanceOrbsPlayerSkillEffect();
        effect.colors = colors;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect140PlayerSkillParser;
}());
var Effect141PlayerSkillParser = /** @class */ (function () {
    function Effect141PlayerSkillParser() {
    }
    //random orb spawn
    Effect141PlayerSkillParser.prototype.parse = function (params) {
        //orbs, target cbits, exclusion cbits
        var helper = new PlayerSkillDescriptionHelper();
        //right now it'll say "light from non light and heal"
        //so far all do not allow to spawn from own colors. If it sounds redundant to
        //say "2 dark and water from non dark and water" then subtract params[1] from
        //params[2] before sending to exclusion
        params = helper.cleanParams(params, 3);
        var results = helper.parseColorBitflags(params[1]);
        var exclusion = helper.parseColorBitflags(params[2]);
        var legacyDescription = "Randomly spawn ";
        legacyDescription += params[0] + " ";
        legacyDescription += helper.getHumanReadableColors(results);
        legacyDescription += " orbs ";
        if (results.length > 1) {
            legacyDescription += "each ";
        }
        if (exclusion.length > 0) {
            legacyDescription += "from non ";
            legacyDescription += helper.getHumanReadableColors(exclusion);
            legacyDescription += " orbs";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new OrbChangePlayerSkillEffect();
        effect.results = results;
        effect.dontChange = exclusion;
        effect.numberSpawned = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect141PlayerSkillParser;
}());
var Effect142PlayerSkillParser = /** @class */ (function () {
    function Effect142PlayerSkillParser() {
    }
    //change attributes
    Effect142PlayerSkillParser.prototype.parse = function (params) {
        //turns, attr id
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Change own attribute to ";
        legacyDescription += helper.getHumanReadableColor(params[1] || 0);
        legacyDescription += " for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new SelfColorChangePlayerSkillEffect();
        effect.turns = params[0];
        if (params[1] == null) {
            effect.color = ColorAttribute.Fire;
        }
        else {
            effect.color = ColorAttribute[ColorAttribute[params[1]]];
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect142PlayerSkillParser;
}());
var Effect143PlayerSkillParser = /** @class */ (function () {
    function Effect143PlayerSkillParser() {
    }
    //nuke based on team total HP
    Effect143PlayerSkillParser.prototype.parse = function (params) {
        //multx100, targetflag?, output attr id?. flag 0=all target, 1 = 1
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 3);
        var legacyDescription = "Inflicts a ";
        legacyDescription += helper.getHumanReadableColor(params[2] || 0);
        legacyDescription += " attack to ";
        if (params[1]) {
            legacyDescription += "1 enemy equal to ";
        }
        else {
            legacyDescription += "all enemies equal to ";
        }
        legacyDescription += params[0] / 100;
        legacyDescription += "x of entire team's HP.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateDamagePlayerSkillEffect();
        if (params[3] != 0) {
            effect.element = ColorAttribute[ColorAttribute[params[3]]];
        }
        else {
            effect.element = ColorAttribute.Fire;
        }
        if (params[2] == 0) {
            effect.isMultiTarget = true;
        }
        effect.teamHpMultiplier = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect143PlayerSkillParser;
}());
var Effect144PlayerSkillParser = /** @class */ (function () {
    function Effect144PlayerSkillParser() {
    }
    //nuke based on team total attribute attack
    Effect144PlayerSkillParser.prototype.parse = function (params) {
        //team attrbits, multx100, targetflag, output attr id. flag 0=all target, 1 = 1
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 4);
        var colors = helper.parseColorBitflags(params[0]);
        var legacyDescription = "Inflicts a ";
        legacyDescription += helper.getHumanReadableColor(params[3] || 0);
        legacyDescription += " attack to ";
        if (params[2]) {
            legacyDescription += "1 enemy equal to ";
        }
        else {
            legacyDescription += "all enemies equal to ";
        }
        legacyDescription += params[1] / 100;
        legacyDescription += "x of entire team's ";
        legacyDescription += helper.getHumanReadableColors(colors);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " ATK.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        if (params[3] != 0) {
            effect.element = ColorAttribute[ColorAttribute[params[3]]];
        }
        else {
            effect.element = ColorAttribute.Fire;
        }
        if (params[2] == 0) {
            effect.isMultiTarget = true;
        }
        effect.teamAtkMultiplier = params[1] / 100;
        effect.teamAtkMultiplierColors = colors;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect144PlayerSkillParser;
}());
var Effect145PlayerSkillParser = /** @class */ (function () {
    function Effect145PlayerSkillParser() {
    }
    //instantly heal based on entire team's total rcv
    Effect145PlayerSkillParser.prototype.parse = function (params) {
        //multx100
        var legacyDescription = "Heal ";
        legacyDescription += params[0] / 100;
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x of entire team's RCV.";
        var effect = new ImmediateHealPlayerSkillEffect();
        effect.teamMultiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect145PlayerSkillParser;
}());
var Effect146PlayerSkillParser = /** @class */ (function () {
    function Effect146PlayerSkillParser() {
    }
    //haste
    //minturns, maxturns
    Effect146PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var minTurns = params[0];
        var maxTurns = params[1];
        var legacyDescription = "Team skills charged by ";
        legacyDescription += helper.getHumanReadableNumberRange(minTurns, maxTurns);
        legacyDescription += " turns.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new HastePlayerSkillEffect();
        effect.minTurns = minTurns;
        effect.maxTurns = maxTurns;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect146PlayerSkillParser;
}());
var Effect148PlayerSkillParser = /** @class */ (function () {
    function Effect148PlayerSkillParser() {
    }
    //exp mult LS
    Effect148PlayerSkillParser.prototype.parse = function (params) {
        //mult
        var legacyDescription = "";
        legacyDescription += params[0] / 100;
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x EXP when entering dungeon as leader.";
        var effect = new ExpRateLeaderSkillEffect();
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect148PlayerSkillParser;
}());
var Effect149PlayerSkillParser = /** @class */ (function () {
    function Effect149PlayerSkillParser() {
    }
    //rcv mult for matching exactly 4 heal orbs LS
    Effect149PlayerSkillParser.prototype.parse = function (params) {
        //mult
        var legacyDescription = "";
        legacyDescription += params[0] / 100;
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x RCV when matching exactly 4 Heal orbs.";
        var effect = new HeartTpaLeaderSkillEffect();
        effect.lsse.rcv = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect149PlayerSkillParser;
}());
var Effect14PlayerSkillParser = /** @class */ (function () {
    function Effect14PlayerSkillParser() {
    }
    //Resolve LS
    //HP%, 100?
    Effect14PlayerSkillParser.prototype.parse = function (params) {
        //TODO, second param is always 100 so far but could be a max cap.
        //like, 40,70 could mean resolve when between 40 and 70% HP
        //for now, ignoring second parameter completely until certain
        var legacyDescription = "Survive a single hit when at least ";
        legacyDescription += params[0];
        legacyDescription += "% HP remaining.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ResolveLeaderSkillEffect();
        effect.threshhold = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect14PlayerSkillParser;
}());
var Effect150PlayerSkillParser = /** @class */ (function () {
    function Effect150PlayerSkillParser() {
    }
    //5oe1 LS
    Effect150PlayerSkillParser.prototype.parse = function (params) {
        //0?, mult. So far every case has param 1 = 0
        var legacyDescription = "Matched attributes ";
        legacyDescription += params[1] / 100;
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x ATK when clearing exactly 5 orbs with 1+ enhanced orbs.";
        var effect = new FiveOrbOneEnhancedLeaderSkillEffect();
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect150PlayerSkillParser;
}());
var Effect151PlayerSkillParser = /** @class */ (function () {
    function Effect151PlayerSkillParser() {
    }
    //heart cross LS
    Effect151PlayerSkillParser.prototype.parse = function (params) {
        //atk, rcv?, shield. nothing uses rcv yet, all 0. rcv most likely
        //TODO, code for rcv if it's used in the future
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[0], 0);
        if (params[2]) {
            if (legacyDescription != "") {
                legacyDescription += " and ";
            }
            legacyDescription += params[2];
            legacyDescription += "% damage reduction";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " when matching a heart cross.";
        var effect = new HeartCrossLeaderSkillEffect();
        if (params[0] > 0) {
            effect.lsse.atk = params[0] / 100;
        }
        effect.lsse.shield += params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect151PlayerSkillParser;
}());
var Effect152PlayerSkillParser = /** @class */ (function () {
    function Effect152PlayerSkillParser() {
    }
    //lock colors
    Effect152PlayerSkillParser.prototype.parse = function (params) {
        //cbits, 99. So far all cases are 99. Ignore for now
        //update, new ones all say 42, conveniently 7x6 on a 7x6 board. Could be Max Locked
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var legacyText = "Locks ";
        legacyText += helper.getHumanReadableColors(colors);
        legacyText += " orbs.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyText;
        var lockEffect = new LockOrbsPlayerSkillEffect();
        lockEffect.colors = colors;
        lockEffect.unknownValue = params[1];
        ret.parsedEffects.push(lockEffect);
        return ret;
    };
    return Effect152PlayerSkillParser;
}());
var Effect153PlayerSkillParser = /** @class */ (function () {
    function Effect153PlayerSkillParser() {
    }
    //change enemy color
    Effect153PlayerSkillParser.prototype.parse = function (params) {
        //color id, 1. So far all cases are 1. Ignore for now
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Changes all enemies' attribute to ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new EnemyColorChangePlayerSkillEffect();
        effect.color = ColorAttribute[ColorAttribute[params[0]]];
        effect.unknownValue = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect153PlayerSkillParser;
}());
var Effect154PlayerSkillParser = /** @class */ (function () {
    function Effect154PlayerSkillParser() {
    }
    //Multiple orb change
    Effect154PlayerSkillParser.prototype.parse = function (params) {
        //input cbits, output cbits. So far only Hel has output that's >1 colors
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Changes ";
        var input = helper.parseColorBitflags(params[0]);
        var output = helper.parseColorBitflags(params[1]);
        legacyDescription += helper.getHumanReadableColors(input);
        legacyDescription += " orbs into ";
        if (output.length > 1) {
            legacyDescription += "a random mix of ";
        }
        legacyDescription += helper.getHumanReadableColors(output);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " orbs.";
        var effect = new OrbChangePlayerSkillEffect();
        effect.onlyChange = input;
        effect.results = output;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect154PlayerSkillParser;
}());
var Effect155PlayerSkillParser = /** @class */ (function () {
    function Effect155PlayerSkillParser() {
    }
    //coop boost LS
    Effect155PlayerSkillParser.prototype.parse = function (params) {
        //cbits?,tbits?,hp,atk,rcv. No trailing 0
        //cbits and tbits are guesses, so far all are "unconditional" with
        //cbits?=31 which means tbits is probably a good guess but unused        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var hp = params[2];
        var atk = params[3];
        var rcv = params[4];
        var restrictions = helper.getAttributeTypeRestrictionText(params[0], params[1]);
        if (hp || atk || rcv) {
            legacyDescription = helper.getHumanReadableMultipliers(hp, atk, rcv);
            if (restrictions != "") {
                legacyDescription += " for ";
                legacyDescription += restrictions;
            }
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " in Multiplayer mode.";
        var effect = new MultiplayerBoostLeaderSkillEffect();
        if (params[0] != 31 || params[1] != 0) {
            console.error("nonuniversal coopboost 155. Params: " + params.toString());
        }
        if (params[2] > 0) {
            effect.lsse.hp = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.lsse.atk = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.lsse.rcv = params[4] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect155PlayerSkillParser;
}());
var Effect156PlayerSkillParser = /** @class */ (function () {
    function Effect156PlayerSkillParser() {
    }
    //gemstone burst
    Effect156PlayerSkillParser.prototype.parse = function (params) {
        //turns, awk1, awk2, awk3, flag, multx100
        var helper = new PlayerSkillDescriptionHelper();
        //flag1:recover mult HP per awk. Ignore turns if flag1, not a buff
        //flag2:atk boost 1+(mult-100)% per awk. (silk is 115, carat is 130)
        //flag3:shield. mult% per awk
        var legacyDescription = "";
        var awks = [params[1], params[2], params[3]].filter(Number);
        if (params[4] == 1) {
            legacyDescription += "Heal ";
            legacyDescription += params[5];
            legacyDescription += " HP";
        }
        if (params[4] == 2) {
            legacyDescription += "For " + params[0] + " turns, ";
            legacyDescription += "1+(";
            legacyDescription += (params[5] - 100) / 100;
            legacyDescription += "x) ATK";
        }
        if (params[4] == 3) {
            legacyDescription += "For " + params[0] + " turns, ";
            legacyDescription += params[5];
            legacyDescription += "% damage reduction";
        }
        legacyDescription += " for every ";
        legacyDescription += helper.getHumanReadableAwakenings(awks);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " awakening on team.";
        var awakenings = [];
        for (var i = 1; i < 4; i++) {
            if (params[i] > 0) {
                awakenings.push(params[i]);
            }
        }
        if (params[4] == 1) {
            var healEffect = new ImmediateHealPlayerSkillEffect();
            healEffect.awakenings = awakenings;
            healEffect.amountPerAwakening = params[5];
            ret.parsedEffects.push(healEffect);
        }
        if (params[4] == 2) {
            var burstEffect = new BurstPlayerSkillEffect();
            burstEffect.turns = params[0];
            burstEffect.awakenings = awakenings;
            burstEffect.multiplierPerAwakening = (params[5] - 100) / 100;
            ret.parsedEffects.push(burstEffect);
        }
        if (params[4] == 3) {
            var shieldEffect = new ShieldPlayerSkillEffect();
            shieldEffect.turns = params[0];
            shieldEffect.awakenings = awakenings;
            shieldEffect.reductionPerAwakening = params[5];
            ret.parsedEffects.push(shieldEffect);
        }
        return ret;
    };
    return Effect156PlayerSkillParser;
}());
var Effect157PlayerSkillParser = /** @class */ (function () {
    function Effect157PlayerSkillParser() {
    }
    //stacking color crosses
    Effect157PlayerSkillParser.prototype.parse = function (params) {
        //c id, mult, [repeat]. So far all mults are the same but it could be
        //possible to say 0,200,1,300 for 2x per fire cross and 3x per water.      
        var helper = new PlayerSkillDescriptionHelper();
        //grouped input will group all like multipliers together and combine their
        //colors into bitflags. 0,200,1,200 will turn into 3,200.
        //0,200,1,300 will be unchanged. So for all existing effects, it will
        //combine all of them since all mults are equal.
        var groupedinput = [];
        var groupedcolors = [];
        var legacyDescription = "";
        for (var i = 0; params[i] != undefined; i += 2) {
            if (groupedinput.indexOf(params[i + 1]) == -1) {
                groupedinput.push(Math.pow(2, params[i]), params[i + 1]);
            }
            else {
                groupedinput[groupedinput.indexOf(params[i + 1]) - 1] += Math.pow(2, params[i]);
            }
        }
        for (var i = 0; groupedinput[i]; i += 2) {
            if (i > 0) {
                legacyDescription += "; ";
            }
            groupedcolors = helper.parseColorBitflags(groupedinput[i]);
            legacyDescription += helper.getHumanReadableMultipliers(0, groupedinput[i + 1], 0);
            legacyDescription += " for every cross of ";
            legacyDescription += helper.getHumanReadableColors(groupedcolors, "or");
            legacyDescription += " orbs";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new ColorCrossLeaderSkillEffect();
        for (var i = 0; params[i] != undefined; i += 2) {
            effect.colors.push(params[i]);
        }
        effect.stackLsse.atk = params[1] / 100;
        for (var i = 3; params[i] != undefined; i += 2) {
            if (params[i] != params[1]) {
                console.error("colorcross noneven multipliers 157. params: " + params.toString());
            }
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect157PlayerSkillParser;
}());
var Effect158PlayerSkillParser = /** @class */ (function () {
    function Effect158PlayerSkillParser() {
    }
    //boost for colors/types but changes minimum match
    Effect158PlayerSkillParser.prototype.parse = function (params) {
        //minmatch, cbits, tbits, atk,hp,rcv. No trailing 0      
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        if ((params[4] == null) && (params[5] == null)) {
            legacyDescription += helper.getHumanReadableMultipliers(0, params[3], 0);
        }
        else {
            legacyDescription += helper.getHumanReadableMultipliers(params[4], params[3], params[5]);
        }
        var restrictions = helper.getAttributeTypeRestrictionText(params[1], params[2]);
        if (restrictions != "") {
            legacyDescription += " for ";
            legacyDescription += restrictions;
        }
        legacyDescription += " ^ff3600^but can no longer clear ";
        legacyDescription += params[0] - 1;
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " or less orbs.^p";
        var colors = helper.parseColorBitflags(params[1]);
        var types = helper.parseTypeBitflags(params[2]);
        //so far, all unconditionals are color=31. If 31, make unconditional.
        //otherwise make one for color and one for type.
        if (colors.length == 5) {
            var peffect = new PassiveBoostLeaderSkillEffect();
            if (params[4] > 0) {
                peffect.lsse.hp = params[4] / 100;
            }
            if (params[3] > 0) {
                peffect.lsse.atk = params[3] / 100;
            }
            if (params[5] > 0) {
                peffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(peffect);
        }
        else if (colors.length > 0) {
            var aeffect = new AttributeBoostLeaderSkillEffect();
            aeffect.colors = colors;
            if (params[4] > 0) {
                aeffect.lsse.hp = params[4] / 100;
            }
            if (params[3] > 0) {
                aeffect.lsse.atk = params[3] / 100;
            }
            if (params[5] > 0) {
                aeffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(aeffect);
        }
        if (types.length > 0) {
            var teffect = new TypeBoostLeaderSkillEffect();
            teffect.types = types;
            if (params[4] > 0) {
                teffect.lsse.hp = params[4] / 100;
            }
            if (params[3] > 0) {
                teffect.lsse.atk = params[3] / 100;
            }
            if (params[5] > 0) {
                teffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(teffect);
        }
        //finally the actual point of the effect
        var effect = new MinimumOrbCountLeaderSkillEffect();
        effect.minMatch = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect158PlayerSkillParser;
}());
var Effect15PlayerSkillParser = /** @class */ (function () {
    function Effect15PlayerSkillParser() {
    }
    //LS extra move time with no other bonuses
    //seconds x100
    Effect15PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Extra ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        legacyDescription += " seconds movement time.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new PassiveTimeExtendLeaderSkillEffect();
        effect.seconds = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect15PlayerSkillParser;
}());
var Effect160PlayerSkillParser = /** @class */ (function () {
    function Effect160PlayerSkillParser() {
    }
    //add combo AS
    //turns, combos
    Effect160PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Adds ";
        legacyDescription += params[1];
        legacyDescription += " combos for ";
        legacyDescription += params[0];
        legacyDescription += " turns.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new AddComboPlayerSkillEffect();
        effect.combos = params[1];
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect160PlayerSkillParser;
}());
var Effect161PlayerSkillParser = /** @class */ (function () {
    function Effect161PlayerSkillParser() {
    }
    //true gravity
    //%
    Effect161PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Reduce all enemies' current HP by  ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += "% of their max HP.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new GravityPlayerSkillEffect();
        effect.trueGrav = true;
        effect.percentage = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect161PlayerSkillParser;
}());
var Effect162PlayerSkillParser = /** @class */ (function () {
    function Effect162PlayerSkillParser() {
    }
    //7x6 LS
    Effect162PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "^FF3600^Puzzle becomes a 7x6 board.^p";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new SevenBySixBoardLeaderSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect162PlayerSkillParser;
}());
var Effect163PlayerSkillParser = /** @class */ (function () {
    function Effect163PlayerSkillParser() {
    }
    //noskyfall + boosts. If no parameters, just noskyfall.
    Effect163PlayerSkillParser.prototype.parse = function (params) {
        //cbits, tbits, hp,atk,rcv,[resist cbit, shield%] no trailing 0        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "^ff3600^No skyfall combos.^p ";
        var hp = params[2];
        var atk = params[3];
        var rcv = params[4];
        if (hp || atk || rcv) {
            legacyDescription += helper.getHumanReadableMultipliers(hp, atk, rcv);
            var restrictions = helper.getAttributeTypeRestrictionText(params[0], params[1]);
            if (restrictions == "") {
                // Implied
                legacyDescription += ".";
            }
            else {
                legacyDescription += " for ";
                legacyDescription += restrictions;
                legacyDescription += ".";
            }
        }
        var resistedAttributes = helper.parseColorBitflags(params[5]);
        if (resistedAttributes.length > 0) {
            if (legacyDescription != "") {
                legacyDescription += " ";
            }
            legacyDescription += "Reduce ";
            if (!helper.isAllAttributes(params[5])) {
                legacyDescription += helper.getHumanReadableColors(resistedAttributes) + " attribute ";
            }
            legacyDescription += "damage by " + (params[6] || 0) + "%.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        //noskyfall. Check colors and types to determine if unconditional, attr or typeboost
        //assuming unconditional means attr=31. If attr and type both 0, skip. Resist-only
        //for resist, check if allcolor. If so, it's unconditional shield. Else it's colorshield
        var nsfEffect = new PassiveNoSkyfallLeaderSkillEffect();
        ret.parsedEffects.push(nsfEffect);
        var colors = helper.parseColorBitflags(params[0]);
        var types = helper.parseTypeBitflags(params[1]);
        //assuming again that unconditional is color=31 and not type=whatever
        if (colors.length == 5) {
            var peffect = new PassiveBoostLeaderSkillEffect();
            if (params[2] > 0) {
                peffect.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                peffect.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                peffect.lsse.rcv = params[4] / 100;
            }
            //unconditional boost and unconditional shield. If shield is
            //unconditional elsewhere, it'll be made there and not here. This ensures
            //that this shield is included in unconditional if boosts are also
            //unconditional
            if (params[5] == 31) {
                peffect.lsse.shield = params[6];
            }
            ret.parsedEffects.push(peffect);
        }
        else if (colors.length > 0) {
            var aeffect = new AttributeBoostLeaderSkillEffect();
            aeffect.colors = colors;
            if (params[2] > 0) {
                aeffect.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                aeffect.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                aeffect.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(aeffect);
        }
        if (types.length > 0) {
            var teffect = new TypeBoostLeaderSkillEffect();
            teffect.types = types;
            if (params[2] > 0) {
                teffect.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                teffect.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                teffect.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(teffect);
        }
        if ((params[5] == 31) && (colors.length != 5)) {
            //unconditional resist and we didn't already take care of it in
            //colors=31 where it's already unconditional
            var catchpeffect = new PassiveBoostLeaderSkillEffect();
            catchpeffect.lsse.shield = params[6];
            ret.parsedEffects.push(catchpeffect);
        }
        else if (params[5] != null) {
            //at this point it's a color resist
            var resistColors = helper.parseColorBitflags(params[5]);
            var reffect = new ColorShieldLeaderSkillEffect();
            reffect.colors = resistColors;
            reffect.percentage = params[6];
            ret.parsedEffects.push(reffect);
        }
        return ret;
    };
    return Effect163PlayerSkillParser;
}());
var Effect164PlayerSkillParser = /** @class */ (function () {
    function Effect164PlayerSkillParser() {
    }
    //color match scales. 124 with one less in pool but rcv mult too.
    Effect164PlayerSkillParser.prototype.parse = function (params) {
        //c1,c2,c3,c4,min matches,atk,rcv, [scale]. not all 4 colors need to be filled
        //4,4,4,0,2,300,300,100 for 2 wood combos 3x atk and rcv with +1x to both per extra 
        //Scale caps when all non-0 colors exhausted
        var helper = new PlayerSkillDescriptionHelper();
        var finalatk = 0;
        var finalrcv = 0;
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[5], params[6]);
        var colorpool = helper.parseColorBitflags(params[0]).concat(helper.parseColorBitflags(params[1])).concat(helper.parseColorBitflags(params[2])).concat(helper.parseColorBitflags(params[3]));
        legacyDescription += " when matching ";
        if (params[4] != colorpool.length) {
            legacyDescription += params[4];
            legacyDescription += " of the following colors: ";
        }
        legacyDescription += helper.getHumanReadableColors(colorpool);
        if (params[7]) {
            legacyDescription += ". +";
            legacyDescription += params[7] / 100;
            legacyDescription += "x per additional, up to ";
            finalatk = params[5] + (params[7] * (colorpool.length - params[4]));
            finalrcv = params[6] + (params[7] * (colorpool.length - params[4]));
            legacyDescription += helper.getHumanReadableMultipliers(0, finalatk, finalrcv);
            legacyDescription += " for all ";
            legacyDescription += colorpool.length;
            legacyDescription += " orb types";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new ColorMatchesLeaderSkillEffect();
        for (var i = 0; i < 4; i++) {
            if (params[i] > 0) {
                effect.colorPool.push(params[i]);
            }
        }
        effect.minMatches = params[4];
        effect.maxStacks = effect.colorPool.length - params[4];
        if (params[5] > 0) {
            effect.baseLsse.atk = params[5] / 100;
        }
        if (params[6] > 0) {
            effect.baseLsse.rcv = params[6] / 100;
        }
        if (params[7] > 0) {
            effect.stackLsse.atk = params[7] / 100;
            effect.stackLsse.rcv = params[7] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect164PlayerSkillParser;
}());
var Effect165PlayerSkillParser = /** @class */ (function () {
    function Effect165PlayerSkillParser() {
    }
    //color match atk+rcv mult with scaling support. 61 but with rcv support.
    Effect165PlayerSkillParser.prototype.parse = function (params) {
        //attrbits, min color, base atk, base rcv, scale mult, max extra stacks
        var helper = new PlayerSkillDescriptionHelper();
        //get attr pool in array. If length = min colors, it's match all. Format as "matching xyz"
        //if < min, format as "matching <min> of xyz"
        //if scaling included, add "+\dx atk per additional color"
        //if scale cap not given, calculate pool count subtract min, that's max stacks
        //if given, check if it's more stacks than pool count allows (radra check)
        //if so, cap it at pool length. If not, proceed as normal
        var legacyDescription = "";
        var stacks = 0;
        var finalatk = 0;
        var finalrcv = 0;
        var colors = helper.parseColorBitflags(params[0]);
        //if stacks not given, or is more than pool length - min colors, set it as such
        if (!params[5] || params[5] > (colors.length - params[1])) {
            stacks = colors.length - params[1];
        }
        else {
            stacks = params[5];
        }
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2], params[3]);
        legacyDescription += " when matching ";
        //if need to match all colours, just list them out as matching all
        if (params[1] == colors.length) {
            legacyDescription += helper.getHumanReadableColors(colors);
            legacyDescription += ".";
        }
        else {
            legacyDescription += params[1];
            legacyDescription += " of ";
            legacyDescription += helper.getHumanReadableColors(colors);
            //if no scaling permitted
            if (!params[4]) {
                legacyDescription += ".";
            }
            else {
                //scaling. +x per addtional up to max. Calc max and show "all" if it's all colors
                legacyDescription += ". +";
                legacyDescription += params[4] / 100;
                legacyDescription += "x per additional color, up to ";
                finalatk = (stacks * params[4] + params[2]);
                finalrcv = (stacks * params[4] + params[3]);
                legacyDescription += helper.getHumanReadableMultipliers(0, finalatk, finalrcv);
                legacyDescription += " for ";
                if (stacks = colors.length - params[1]) {
                    legacyDescription += "all ";
                }
                legacyDescription += stacks + params[1] + " colors.";
            }
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ColorMatchesLeaderSkillEffect();
        effect.colorPool = colors;
        effect.minMatches = params[1];
        effect.maxStacks = stacks;
        if (params[2] > 0) {
            effect.baseLsse.atk = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.baseLsse.rcv = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.stackLsse.atk = params[4] / 100;
            effect.stackLsse.rcv = params[4] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect165PlayerSkillParser;
}());
var Effect166PlayerSkillParser = /** @class */ (function () {
    function Effect166PlayerSkillParser() {
    }
    //combo+ atk+rcv mult with scaling support
    Effect166PlayerSkillParser.prototype.parse = function (params) {
        //mincombo,atk,rcv,[atkscale,rcvscale,maxcombo]
        var helper = new PlayerSkillDescriptionHelper();
        var finalatk = 0;
        var finalrcv = 0;
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[1], params[2]);
        legacyDescription += " at ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        if (params[3] || params[4]) {
            legacyDescription += " combos.";
            if (params[3]) {
                legacyDescription += " +";
                legacyDescription += params[3] / 100;
                legacyDescription += "x ATK";
            }
            if (params[4]) {
                legacyDescription += " +";
                legacyDescription += params[4] / 100;
                legacyDescription += "x RCV";
            }
            legacyDescription += " for each additional, up to ";
            finalatk = params[1] + (params[5] - params[0]) * params[3];
            finalrcv = params[2] + (params[5] - params[0]) * params[4];
            legacyDescription += helper.getHumanReadableMultipliers(0, finalatk, finalrcv);
            legacyDescription += " at ";
            legacyDescription += helper.getHumanReadableNumber(params[5]);
            legacyDescription += " combos.";
        }
        else {
            legacyDescription += "+ combos.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ComboCountLeaderSkillEffect();
        effect.minCombos = params[0];
        if (params[5] > 0) {
            effect.maxStacks = params[5] - params[0];
        }
        else {
            effect.maxStacks = 0;
        }
        if (params[1] > 0) {
            effect.baseLsse.atk = params[1] / 100;
        }
        if (params[2] > 0) {
            effect.baseLsse.rcv = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.stackLsse.atk = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.stackLsse.rcv = params[4] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect166PlayerSkillParser;
}());
var Effect167PlayerSkillParser = /** @class */ (function () {
    function Effect167PlayerSkillParser() {
    }
    //scaling atk+rcv mult with matching at least x orbs of color(s)
    Effect167PlayerSkillParser.prototype.parse = function (params) {
        //cbits, min match, atk,rcv, [scale atk,scale rcv, max match]
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var finalatk = 0;
        var finalrcv = 0;
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2], params[3]);
        legacyDescription += " when matching ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += "+ ";
        legacyDescription += helper.getHumanReadableColors(colors, "or");
        legacyDescription += " orbs.";
        if (params[4] || params[5] || params[6]) {
            if (params[4]) {
                legacyDescription += " +";
                legacyDescription += params[4] / 100;
                legacyDescription += "x ATK";
            }
            if (params[5]) {
                legacyDescription += " +";
                legacyDescription += params[5] / 100;
                legacyDescription += "x RCV";
            }
            legacyDescription += " per additional orb up to ";
            finalatk = params[2] + (params[6] - params[1]) * params[4];
            finalrcv = params[3] + (params[6] - params[1]) * params[5];
            legacyDescription += helper.getHumanReadableMultipliers(0, finalatk, finalrcv);
            legacyDescription += " at ";
            legacyDescription += params[6];
            legacyDescription += " orbs.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new LinkedOrbsLeaderSkillEffect();
        effect.colors = colors;
        effect.minLinked = params[1];
        if (params[6] > 0) {
            effect.maxStacks = params[6] - params[1];
        }
        else {
            effect.maxStacks = 0;
        }
        if (params[2] > 0) {
            effect.baseLsse.atk = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.baseLsse.rcv = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.stackLsse.atk = params[4] / 100;
        }
        if (params[5] > 0) {
            effect.stackLsse.rcv = params[5] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect167PlayerSkillParser;
}());
var Effect169PlayerSkillParser = /** @class */ (function () {
    function Effect169PlayerSkillParser() {
    }
    //atk+shield at x+ combos no scaling
    Effect169PlayerSkillParser.prototype.parse = function (params) {
        //combos, atk, shield
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[1], 0);
        legacyDescription += " and ";
        legacyDescription += params[2];
        legacyDescription += "% damage reduction at ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "+ combos.";
        var effect = new ComboCountLeaderSkillEffect();
        effect.minCombos = params[0];
        effect.maxStacks = 0;
        if (params[1] > 0) {
            effect.baseLsse.atk = params[1] / 100;
        }
        effect.baseLsse.shield += params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect169PlayerSkillParser;
}());
var Effect16PlayerSkillParser = /** @class */ (function () {
    function Effect16PlayerSkillParser() {
    }
    //Shield LS against everything, super deprecated
    //reduction%
    Effect16PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Reduces all damage by ";
        legacyDescription += params[0];
        legacyDescription += "%.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new PassiveBoostLeaderSkillEffect();
        effect.lsse.shield = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect16PlayerSkillParser;
}());
var Effect170PlayerSkillParser = /** @class */ (function () {
    function Effect170PlayerSkillParser() {
    }
    //atk+shield at color matches
    Effect170PlayerSkillParser.prototype.parse = function (params) {
        //cbits, min match, atk, shield
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[2], 0);
        legacyDescription += " and ";
        legacyDescription += params[3];
        legacyDescription += "% damage reduction when matching ";
        if (params[1] == colors.length) {
            legacyDescription += helper.getHumanReadableColors(colors);
            legacyDescription += ".";
        }
        else {
            legacyDescription += params[1];
            legacyDescription += " of ";
            legacyDescription += helper.getHumanReadableColors(colors) + ".";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ColorMatchesLeaderSkillEffect();
        effect.colorPool = colors;
        effect.minMatches = params[1];
        effect.maxStacks = 0;
        if (params[2] > 0) {
            effect.baseLsse.atk = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.baseLsse.shield = params[3];
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect170PlayerSkillParser;
}());
var Effect171PlayerSkillParser = /** @class */ (function () {
    function Effect171PlayerSkillParser() {
    }
    //color match scales. 124 with 1 less in pool and shield. So far no actual scales
    Effect171PlayerSkillParser.prototype.parse = function (params) {
        //c1,c2,c3,c4,min match, atk, shield
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[5], 0);
        var colorpool = helper.parseColorBitflags(params[0]).concat(helper.parseColorBitflags(params[1])).concat(helper.parseColorBitflags(params[2])).concat(helper.parseColorBitflags(params[3]));
        legacyDescription += " and ";
        legacyDescription += params[6];
        legacyDescription += "% damage reduction when matching ";
        if (params[4] != colorpool.length) {
            legacyDescription += params[4];
            legacyDescription += " of the following colors: ";
        }
        legacyDescription += helper.getHumanReadableColors(colorpool);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new ColorMatchesLeaderSkillEffect();
        effect.colorPool = colorpool;
        effect.minMatches = params[4];
        effect.maxStacks = 0;
        if (params[5] > 0) {
            effect.baseLsse.atk = params[5] / 100;
        }
        if (params[6] > 0) {
            effect.baseLsse.shield = params[6];
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect171PlayerSkillParser;
}());
var Effect172PlayerSkillParser = /** @class */ (function () {
    function Effect172PlayerSkillParser() {
    }
    //unlock. no paramters
    Effect172PlayerSkillParser.prototype.parse = function (params) {
        var ret = new PlayerSkillParserResult();
        ret.legacyText = "Unlocks all orbs.";
        var effect = new UnlockOrbsPlayerSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect172PlayerSkillParser;
}());
var Effect173PlayerSkillParser = /** @class */ (function () {
    function Effect173PlayerSkillParser() {
    }
    //voids enemy absorbs. Damage/colour, and speculated combo shield absorbs
    //params: turns, color flag, combo flag?, damage flag
    Effect173PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Voids ";
        var helper = new PlayerSkillDescriptionHelper();
        var voids = [];
        if (params[1]) {
            voids.push("attribute absorption ");
        }
        if (params[2]) {
            voids.push("combo absorption ");
        }
        if (params[3]) {
            voids.push("damage absorption ");
        }
        legacyDescription += helper.getHumanReadableList(voids);
        legacyDescription += "for ";
        legacyDescription += params[0];
        legacyDescription += " turns.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new VoidPlayerSkillEffect();
        effect.colorVoid = !!params[1];
        effect.comboVoid = !!params[2];
        effect.absorbVoid = !!params[3];
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect173PlayerSkillParser;
}());
var Effect175PlayerSkillParser = /** @class */ (function () {
    function Effect175PlayerSkillParser() {
    }
    //collab boost
    Effect175PlayerSkillParser.prototype.parse = function (params) {
        //collab1, collab2?, collab3?, hp, atk, rcv. No trailing 0
        var helper = new PlayerSkillDescriptionHelper();
        //for now lets just only look at collab1 and ignore the others. So far none used.
        var legacyDescription = "";
        legacyDescription = helper.getHumanReadableMultipliers(params[3], params[4], params[5]);
        legacyDescription += " when entire team is from ";
        legacyDescription += GroupAssets.getCollabDetails(params[0]).name;
        legacyDescription += " collab.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new CollabBoostLeaderSkillEffect();
        effect.collab = params[0];
        if ((params[1] > 0) || (params[2] > 0)) {
            console.error("Multiple collabs in collabboost 175. params: " + params.toString());
        }
        if (params[3] > 0) {
            effect.lsse.hp = params[3] / 100;
        }
        if (params[4] > 0) {
            effect.lsse.atk = params[4] / 100;
        }
        if (params[5] > 0) {
            effect.lsse.rcv = params[5] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect175PlayerSkillParser;
}());
var Effect176PlayerSkillParser = /** @class */ (function () {
    function Effect176PlayerSkillParser() {
    }
    //gridlike orb spawn
    Effect176PlayerSkillParser.prototype.parse = function (params) {
        //row1 bits, row2 bits, row3, row4, row5, colour id. no trailing 0
        //7,7,7,0,0,4   0,0,16,56,16,5  0,0,1,1,7 trailing 0 fire omit
        //d d d . . .   . . . . . .     . . . . . .
        //d d d . . .   . . . . . .     . . . . . .
        //d d d . . .   . . . . h .     r . . . . .
        //. . . . . .   . . . h h h     r . . . . .
        //. . . . . .   . . . . h .     r r r . . .
        //
        //0,0,2,7,2,3   63,33,33,33,63  56,32,33,1,7,4
        //. . . . . .   r r r r r r     . . . d d d
        //. . . . . .   r . . . . r     . . . . . d
        //. l . . . .   r . . . . r     d . . . . d
        //l l l . . .   r . . . . r     d . . . . .
        //. l . . . .   r r r r r r     d d d . . .
        var helper = new PlayerSkillDescriptionHelper();
        var ret = new PlayerSkillParserResult();
        var effect = new OrbChangePlayerSkillEffect();
        effect.results.push(params[5]);
        //fully set parameters in case lower rows 0s and also fire
        // for (let i = 0; i <= 5; i++){
        //     if (params[i] == null) {
        //         params[i] = 0;
        //     }
        // }
        //clean params. parse out bits into a board
        //0,0,2,7,2,3   
        //. . . . . .   
        //. . . . . .   turns into [[0],[0],[2],[1,2,3],[2]]
        //. l . . . .   
        //l l l . . .  
        //. l . . . .   
        //x x x . . .   
        //x . . x x x   turns into [[0],[0],[2],[1,2,3],[2]]
        //x . x . . x   
        //. x x x . x  
        //. . x . . .  
        params = helper.cleanParams(params, 6);
        var board = [];
        for (var i = 0; i < 5; i++) {
            board[i] = helper.parseGenericBitflags(params[i]);
        }
        var outColour = helper.getHumanReadableColor(params[5]);
        var legacyDescription = "Spawns " + outColour + " orbs in an unknown pattern.";
        //list of patterns spawned, each in its own location
        var patterns = [];
        //hardcode outer ring
        if (params[0] == 63 && params[1] == 33 && params[2] == 33 && params[3] == 33 && params[4] == 63) {
            legacyDescription = "Turns the outer ring on the board into " + outColour + " orbs.";
            ret.legacyText = legacyDescription;
            effect.patterns.push(SpawnPattern.OuterRing);
            ret.parsedEffects.push(effect);
            return ret;
        }
        //hardcode corners
        if (params[0] == 33 && params[1] == 0 && params[2] == 0 && params[3] == 0 && params[4] == 33) {
            legacyDescription = "Turns the corner orbs on the board into " + outColour + " orbs.";
            ret.legacyText = legacyDescription;
            effect.patterns.push(SpawnPattern.Corners);
            ret.parsedEffects.push(effect);
            return ret;
        }
        //loop through rows in board. For each non 0, check towards right and downwards for patterns
        //let x be the number in boards being looked at
        //box: indexof x+1 and x+2 in current row exists. If x,x+1,x+2 all exist in row+1 and row+2. Then box with center row x+1, col x+1
        //L: x exists in row+1,row+2. x-1,x-2 exists in row+2 = horiz mirror L, center row+2, col x
        //          ""                x+1,x+2 exists in row+2 = regular L, center row+2, col x
        //          ""                x+1,x+2 exists in row = vert mirror L, center row, col x
        //   x+1,x+2 exists in row. x+2 exists in row x+1,x+2 = horiz+vert mirror L, center row, col x+2
        //cross: x exists in row+1,row+2. x-1, x+1 exists in row x+1. Center row+1, col x
        //when a pattern found, use func to remove all orbs used, so it can't proc anything else. An L exists in a box for example
        for (var row = 0; row < 5; row++) {
            //i is index of board's current row's element being looked at. Is not column necessarily
            for (var i = 0; i < board[row].length; i++) {
                var x = board[row][i];
                //box check. Do not check if row >=4
                if ((row <= 3) &&
                    (board[row].indexOf(x + 1) > -1) && (board[row].indexOf(x + 2) > -1)
                    && (board[row + 1].indexOf(x) > -1) && (board[row + 1].indexOf(x + 1) > -1) && (board[row + 1].indexOf(x + 2) > -1)
                    && (board[row + 2].indexOf(x) > -1) && (board[row + 1].indexOf(x + 2) > -1) && (board[row + 2].indexOf(x + 2) > -1)) {
                    patterns.push("a 3x3 box of " + outColour + " orbs with center at "
                        + helper.getHumanReadableRow(x + 1) + " row and " + helper.getHumanReadableColumn(x + 1) + " column");
                    board[row] = this.filterOut(board[row], [x, x + 1, x + 2]);
                    board[row + 1] = this.filterOut(board[row + 1], [x, x + 1, x + 2]);
                    board[row + 2] = this.filterOut(board[row + 2], [x, x + 1, x + 2]);
                    effect.patterns.push(SpawnPattern.VDP);
                }
                //L check
                //first 3 cases. Do not check if row >= 4
                if ((row <= 3) &&
                    (board[row + 1].indexOf(x) > -1) && (board[row + 2].indexOf(x) > -1)) {
                    //horiz mirror. 
                    if ((board[row + 2].indexOf(x - 1) > -1) && (board[row + 2].indexOf(x - 2) > -1)) {
                        patterns.push("a horizontally mirrored L of " + outColour + " orbs with corner at "
                            + helper.getHumanReadableRow(row + 2) + " row and " + helper.getHumanReadableColumn(x) + " column");
                        board[row] = this.filterOut(board[row], [x]);
                        board[row + 1] = this.filterOut(board[row + 1], [x]);
                        board[row + 2] = this.filterOut(board[row + 2], [x - 2, x - 1, x]);
                        effect.patterns.push(SpawnPattern.L);
                    }
                    //regular L.
                    if ((board[row + 2].indexOf(x + 1) > -1) && (board[row + 2].indexOf(x + 2) > -1)) {
                        patterns.push("an L of " + outColour + " orbs with corner at "
                            + helper.getHumanReadableRow(row + 2) + " row and " + helper.getHumanReadableColumn(x) + " column");
                        board[row] = this.filterOut(board[row], [x]);
                        board[row + 1] = this.filterOut(board[row + 1], [x]);
                        board[row + 2] = this.filterOut(board[row + 2], [x, x + 1, x + 2]);
                        effect.patterns.push(SpawnPattern.L);
                    }
                    //upsidedown L
                    if ((board[row].indexOf(x + 1) > -1) && (board[row].indexOf(x + 2) > -1)) {
                        patterns.push("an upside-down L of " + outColour + " orbs with corner at "
                            + helper.getHumanReadableRow(row) + " row and " + helper.getHumanReadableColumn(x) + " column");
                        board[row] = this.filterOut(board[row], [x, x + 1, x + 2]);
                        board[row + 1] = this.filterOut(board[row + 1], [x]);
                        board[row + 2] = this.filterOut(board[row + 2], [x]);
                        effect.patterns.push(SpawnPattern.L);
                    }
                }
                //upsidedown mirror L. Do not check if row >= 4
                if ((row <= 3) &&
                    (board[row].indexOf(x + 1) > -1) && (board[row].indexOf(x + 2) > -1)
                    && (board[row + 1].indexOf(x + 2) > -1)
                    && (board[row + 2].indexOf(x + 2) > -1)) {
                    patterns.push("an upside-down and horizontally mirrored L of " + outColour + " orbs with corner at "
                        + helper.getHumanReadableRow(row) + " row and " + helper.getHumanReadableColumn(x + 2) + " column");
                    board[row] = this.filterOut(board[row], [x, x + 1, x + 2]);
                    board[row + 1] = this.filterOut(board[row + 1], [x + 2]);
                    board[row + 2] = this.filterOut(board[row + 2], [x + 2]);
                    effect.patterns.push(SpawnPattern.L);
                }
                //cross. Do not check if row >= 4
                if ((row <= 3) &&
                    (board[row + 1].indexOf(x) > -1) && (board[row + 2].indexOf(x) > -1)
                    && (board[row + 1].indexOf(x - 1) > -1) && (board[row + 1].indexOf(x + 1) > -1)) {
                    patterns.push("a cross of " + outColour + " orbs with center at "
                        + helper.getHumanReadableRow(row + 1) + " row and " + helper.getHumanReadableColumn(x) + " column");
                    board[row] = this.filterOut(board[row], [x]);
                    board[row + 1] = this.filterOut(board[row + 1], [x - 1, x, x + 1]);
                    board[row + 2] = this.filterOut(board[row + 2], [x]);
                    effect.patterns.push(SpawnPattern.Cross);
                }
            }
        }
        if (patterns.length > 0) {
            legacyDescription = "Spawns " + helper.getHumanReadableList(patterns, "and") + ".";
        }
        ret.legacyText = legacyDescription;
        ret.parsedEffects.push(effect);
        return ret;
    };
    Effect176PlayerSkillParser.prototype.filterOut = function (row, discard) {
        return row.filter(function (v) {
            if (discard.indexOf(v) > -1) {
                return false;
            }
            return true;
        });
    };
    return Effect176PlayerSkillParser;
}());
var Effect177PlayerSkillParser = /** @class */ (function () {
    function Effect177PlayerSkillParser() {
    }
    //no skyfall but boosts atk based on remaining orbs
    Effect177PlayerSkillParser.prototype.parse = function (params) {
        //?,?,?,?,?,remaining,atk,[scale]. so far all cases have 5 leading 0s
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "^ff3600^No skyfall combos.^p ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[6], 0);
        legacyDescription += " when ";
        legacyDescription += params[5];
        legacyDescription += " or less orbs remaining after matching.";
        if (params[7]) {
            legacyDescription += " +" + (params[7] / 100) + "x for each fewer orb, up to ";
            legacyDescription += (params[6] + (params[7] * params[5])) / 100 + "x for an empty board.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var noSkyfallEffect = new PassiveNoSkyfallLeaderSkillEffect();
        ret.parsedEffects.push(noSkyfallEffect);
        var orbsRemainingEffect = new OrbsRemainingLeaderSkillEffect();
        orbsRemainingEffect.orbs = params[5];
        orbsRemainingEffect.baseLsse.atk = params[6] / 100;
        if (params[7] > 0) {
            orbsRemainingEffect.maxStacks = params[5];
            orbsRemainingEffect.stackLsse.atk = params[7] / 100;
        }
        ret.parsedEffects.push(orbsRemainingEffect);
        return ret;
    };
    return Effect177PlayerSkillParser;
}());
var Effect178PlayerSkillParser = /** @class */ (function () {
    function Effect178PlayerSkillParser() {
    }
    //boostpack but fixes orb movement time
    Effect178PlayerSkillParser.prototype.parse = function (params) {
        //seconds,cbits,tbits,hp,atk,rcv        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        var hp = params[3];
        var atk = params[4];
        var rcv = params[5];
        var restrictions = helper.getAttributeTypeRestrictionText(params[1], params[2]);
        if (hp || atk || rcv) {
            legacyDescription += helper.getHumanReadableMultipliers(hp, atk, rcv);
            if (restrictions != "") {
                legacyDescription += " for ";
                legacyDescription += restrictions;
            }
            legacyDescription += " but ";
        }
        legacyDescription += "^ff3600^fixes orb move time at ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " seconds.^p";
        var colors = helper.parseColorBitflags(params[1]);
        var types = helper.parseTypeBitflags(params[2]);
        //assuming unconditionals are color=31
        if (params[1] == 31) {
            var peffect = new PassiveBoostLeaderSkillEffect();
            if (params[3] > 0) {
                peffect.lsse.hp = params[3] / 100;
            }
            if (params[4] > 0) {
                peffect.lsse.atk = params[4] / 100;
            }
            if (params[5] > 0) {
                peffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(peffect);
        }
        else if (params[1] > 0) {
            var aeffect = new AttributeBoostLeaderSkillEffect();
            aeffect.colors = colors;
            if (params[3] > 0) {
                aeffect.lsse.hp = params[3] / 100;
            }
            if (params[4] > 0) {
                aeffect.lsse.atk = params[4] / 100;
            }
            if (params[5] > 0) {
                aeffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(aeffect);
        }
        if (types.length > 0) {
            var teffect = new TypeBoostLeaderSkillEffect();
            teffect.types = types;
            if (params[3] > 0) {
                teffect.lsse.hp = params[3] / 100;
            }
            if (params[4] > 0) {
                teffect.lsse.atk = params[4] / 100;
            }
            if (params[5] > 0) {
                teffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(teffect);
        }
        var effect = new FixedMoveTimeLeaderSkillEffect();
        effect.seconds = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect178PlayerSkillParser;
}());
var Effect179PlayerSkillParser = /** @class */ (function () {
    function Effect179PlayerSkillParser() {
    }
    //heal over turns
    Effect179PlayerSkillParser.prototype.parse = function (params) {
        //turns, flatHP?, maxHP. So far all param 2 are 0. Ignore for now
        var legacyDescription = "Heal ";
        legacyDescription += params[2];
        legacyDescription += "% HP every turn for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new HealOverTimePlayerSkillEffect();
        effect.turns = params[0];
        effect.maxHPPercentage = params[2];
        effect.unknownValue = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect179PlayerSkillParser;
}());
var Effect17PlayerSkillParser = /** @class */ (function () {
    function Effect17PlayerSkillParser() {
    }
    //Element resist to exactly 1 attribute LS
    //elem id, reduction%
    Effect17PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += "% ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " damage reduction.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ColorShieldLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.percentage = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect17PlayerSkillParser;
}());
var Effect180PlayerSkillParser = /** @class */ (function () {
    function Effect180PlayerSkillParser() {
    }
    //enhanced skyfall
    Effect180PlayerSkillParser.prototype.parse = function (params) {
        //turns, chance
        var legacyDescription = "";
        legacyDescription += params[1];
        legacyDescription += "% chance for enhanced skyfall orbs for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new EnhancedSkyfallPlayerSkillEffect();
        effect.turns = params[0];
        effect.chance = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect180PlayerSkillParser;
}());
var Effect182PlayerSkillParser = /** @class */ (function () {
    function Effect182PlayerSkillParser() {
    }
    //atk and shield when matching at least x of color(s)
    Effect182PlayerSkillParser.prototype.parse = function (params) {
        //cbits, min match, atk, shield
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.parseColorBitflags(params[0]);
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[2], 0);
        params = helper.cleanParams(params, 4);
        if (params[3] > 0) {
            legacyDescription += " and ";
            legacyDescription += params[3];
            legacyDescription += " % damage reduction";
        }
        legacyDescription += " when matching ";
        legacyDescription += params[1];
        legacyDescription += "+ connected ";
        legacyDescription += helper.getHumanReadableColors(colors, "or");
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " orbs.";
        var effect = new LinkedOrbsLeaderSkillEffect();
        effect.colors = colors;
        effect.minLinked = params[1];
        effect.maxStacks = 0;
        if (params[2] > 0) {
            effect.baseLsse.atk = params[2] / 100;
        }
        if (params[3] > 0) {
            effect.baseLsse.shield = params[3];
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect182PlayerSkillParser;
}());
var Effect183PlayerSkillParser = /** @class */ (function () {
    function Effect183PlayerSkillParser() {
    }
    //atk and shield for hp threshhold(s)
    Effect183PlayerSkillParser.prototype.parse = function (params) {
        //cbits, tbits, >=thresh, atk, shield, [<thresh,atk, rcv]
        var helper = new PlayerSkillDescriptionHelper();
        var restr = helper.getAttributeTypeRestrictionText(params[0], params[1]);
        var boost = "";
        var legacyDescription = "All allies";
        if (restr != "") {
            legacyDescription = restr;
        }
        if (params[3] || params[4]) {
            legacyDescription += " ";
            legacyDescription += helper.getHumanReadableMultipliers(0, params[3], 0);
            if (params[4]) {
                if (params[3]) {
                    legacyDescription += " and ";
                }
                legacyDescription += params[4];
                legacyDescription += "% damage reduction";
            }
            legacyDescription += " when HP at least ";
            legacyDescription += params[2];
            legacyDescription += "%.";
        }
        if (params[5]) {
            legacyDescription += " ";
            legacyDescription += helper.getHumanReadableMultipliers(0, params[6], params[7]);
            legacyDescription += " when HP below ";
            legacyDescription += params[5];
            legacyDescription += "%.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var aboveEffect = new HpConditionalLeaderSkillEffect();
        if (params[0] != 31) {
            aboveEffect.colors = helper.parseColorBitflags(params[0]);
        }
        aboveEffect.typing = helper.parseTypeBitflags(params[1]);
        aboveEffect.thresh = params[2];
        aboveEffect.direction = true;
        if (params[3] > 0) {
            aboveEffect.lsse.atk = params[3] / 100;
        }
        if (params[4] > 0) {
            aboveEffect.lsse.shield = params[4];
        }
        ret.parsedEffects.push(aboveEffect);
        if (params[5] > 0) {
            var belowEffect = new HpConditionalLeaderSkillEffect();
            if (params[0] != 31) {
                belowEffect.colors = helper.parseColorBitflags(params[0]);
            }
            belowEffect.typing = helper.parseTypeBitflags(params[1]);
            belowEffect.thresh = params[5];
            belowEffect.direction = false;
            if (params[6] > 0) {
                belowEffect.lsse.atk = params[6] / 100;
            }
            if (params[7] > 0) {
                belowEffect.lsse.rcv = params[7] / 100;
            }
            ret.parsedEffects.push(belowEffect);
        }
        return ret;
    };
    return Effect183PlayerSkillParser;
}());
var Effect184PlayerSkillParser = /** @class */ (function () {
    function Effect184PlayerSkillParser() {
    }
    //noskyfall buff
    Effect184PlayerSkillParser.prototype.parse = function (params) {
        //turns
        var legacyDescription = "No skyfall combos for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new NoSkyfallPlayerSkillEffect();
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect184PlayerSkillParser;
}());
var Effect185PlayerSkillParser = /** @class */ (function () {
    function Effect185PlayerSkillParser() {
    }
    //boostpack and addtional orb movement time
    Effect185PlayerSkillParser.prototype.parse = function (params) {
        //seconds*100,cbits,tbits,hp,atk,rcv        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Extra ";
        var hp = params[3];
        var atk = params[4];
        var rcv = params[5];
        var restrictions = helper.getAttributeTypeRestrictionText(params[1], params[2]);
        legacyDescription += params[0] / 100;
        legacyDescription += " seconds movement time.";
        if (hp || atk || rcv) {
            legacyDescription += " ";
            legacyDescription += helper.getHumanReadableMultipliers(hp, atk, rcv);
            if (restrictions != "") {
                legacyDescription += " for ";
                legacyDescription += restrictions;
            }
            else {
                legacyDescription += " for all allies";
            }
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var colors = helper.parseColorBitflags(params[1]);
        var types = helper.parseTypeBitflags(params[2]);
        //assuming unconditionals are color=31
        if (params[1] == 31) {
            var peffect = new PassiveBoostLeaderSkillEffect();
            if (params[3] > 0) {
                peffect.lsse.hp = params[3] / 100;
            }
            if (params[4] > 0) {
                peffect.lsse.atk = params[4] / 100;
            }
            if (params[5] > 0) {
                peffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(peffect);
        }
        else if (params[1] > 0) {
            var aeffect = new AttributeBoostLeaderSkillEffect();
            aeffect.colors = colors;
            if (params[3] > 0) {
                aeffect.lsse.hp = params[3] / 100;
            }
            if (params[4] > 0) {
                aeffect.lsse.atk = params[4] / 100;
            }
            if (params[5] > 0) {
                aeffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(aeffect);
        }
        if (types.length > 0) {
            var teffect = new TypeBoostLeaderSkillEffect();
            teffect.types = types;
            if (params[3] > 0) {
                teffect.lsse.hp = params[3] / 100;
            }
            if (params[4] > 0) {
                teffect.lsse.atk = params[4] / 100;
            }
            if (params[5] > 0) {
                teffect.lsse.rcv = params[5] / 100;
            }
            ret.parsedEffects.push(teffect);
        }
        var effect = new PassiveTimeExtendLeaderSkillEffect();
        effect.seconds = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect185PlayerSkillParser;
}());
var Effect186PlayerSkillParser = /** @class */ (function () {
    function Effect186PlayerSkillParser() {
    }
    //boostpack and 7x6 board
    Effect186PlayerSkillParser.prototype.parse = function (params) {
        //cbits,tbits,hp,atk,rcv        
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "^ff3600^Puzzle becomes a 7x6 board.^p";
        var hp = params[2];
        var atk = params[3];
        var rcv = params[4];
        var restrictions = helper.getAttributeTypeRestrictionText(params[0], params[1]);
        if (hp || atk || rcv) {
            legacyDescription += " ";
            legacyDescription += helper.getHumanReadableMultipliers(hp, atk, rcv);
            if (restrictions != "") {
                legacyDescription += " for ";
                legacyDescription += restrictions;
                legacyDescription += ".";
            }
            else {
                legacyDescription += " for all allies.";
            }
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var colors = helper.parseColorBitflags(params[0]);
        var types = helper.parseTypeBitflags(params[1]);
        //assuming unconditionals are color=31
        if (params[0] == 31) {
            var peffect = new PassiveBoostLeaderSkillEffect();
            if (params[2] > 0) {
                peffect.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                peffect.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                peffect.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(peffect);
        }
        else if (params[0] > 0) {
            var aeffect = new AttributeBoostLeaderSkillEffect();
            aeffect.colors = colors;
            if (params[2] > 0) {
                aeffect.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                aeffect.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                aeffect.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(aeffect);
        }
        if (types.length > 0) {
            var teffect = new TypeBoostLeaderSkillEffect();
            teffect.types = types;
            if (params[2] > 0) {
                teffect.lsse.hp = params[2] / 100;
            }
            if (params[3] > 0) {
                teffect.lsse.atk = params[3] / 100;
            }
            if (params[4] > 0) {
                teffect.lsse.rcv = params[4] / 100;
            }
            ret.parsedEffects.push(teffect);
        }
        var effect = new SevenBySixBoardLeaderSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect186PlayerSkillParser;
}());
var Effect188PlayerSkillParser = /** @class */ (function () {
    function Effect188PlayerSkillParser() {
    }
    Effect188PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyText = "Inflict ";
        legacyText += helper.getHumanReadableNumber(params[0]);
        legacyText += " true damage to 1 enemy.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyText;
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isTrueDamage = true;
        effect.damage = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect188PlayerSkillParser;
}());
var Effect189PlayerSkillParser = /** @class */ (function () {
    function Effect189PlayerSkillParser() {
    }
    //AS orb trace
    Effect189PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyText = "Unlocks all orbs. Change all orbs to Fire, Water, Wood and Light. Traces a 3-combo path on Normal dungeons with 3-linked matches.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyText;
        var effect = new OrbChangePlayerSkillEffect();
        effect.results.push(ColorAttribute.Fire, ColorAttribute.Water, ColorAttribute.Wood, ColorAttribute.Light);
        var effect2 = new UnlockOrbsPlayerSkillEffect();
        var effect3 = new PathTracePlayerSkillEffect();
        ret.parsedEffects.push(effect, effect2, effect3);
        return ret;
    };
    return Effect189PlayerSkillParser;
}());
var Effect18PlayerSkillParser = /** @class */ (function () {
    function Effect18PlayerSkillParser() {
    }
    //Delay
    //turns
    Effect18PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Delays ";
        legacyDescription += params[0];
        legacyDescription += " turns to all enemies.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new DelayPlayerSkillEffect();
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect18PlayerSkillParser;
}());
var Effect191PlayerSkillParser = /** @class */ (function () {
    function Effect191PlayerSkillParser() {
    }
    //void void
    Effect191PlayerSkillParser.prototype.parse = function (params) {
        //turns
        var legacyDescription = "Voids damage void for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new VoidPlayerSkillEffect();
        effect.turns = params[0];
        effect.nullVoid = true;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect191PlayerSkillParser;
}());
var Effect192PlayerSkillParser = /** @class */ (function () {
    function Effect192PlayerSkillParser() {
    }
    //LS combo+ for linked
    //orb id bits, minlinked, atkx100, combos
    //all orb idbits must be matched, not any. All.
    Effect192PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 4);
        var colours = helper.parseColorBitflags(params[0]);
        var legacyText = "Adds ";
        if (params[2] > 0) {
            legacyText = helper.getHumanReadableMultipliers(0, params[2], 0);
            if (params[3] > 0) {
                legacyText += " and adds ";
            }
        }
        if (params[3] > 0) {
            legacyText += params[3] + " combos";
        }
        legacyText += " when matching " + params[1] + "+ ";
        legacyText += helper.getHumanReadableColors(colours, "and") + " orbs";
        if (colours.length > 1) {
            legacyText += " each";
        }
        legacyText += ".";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyText;
        if (params[2] > 0) {
            var effect = new LinkedOrbsLeaderSkillEffect();
            effect.colors = colours;
            effect.minLinked = params[1];
            effect.maxStacks = 0;
            effect.baseLsse.atk = params[2] / 100;
            ret.parsedEffects.push(effect);
        }
        var effect2 = new AddComboLSLeaderSkillEffect();
        if (params[3] > 0) {
            effect2.bonusCombos = params[3];
            effect2.minLength = params[1];
            effect2.requiredColours = colours;
            ret.parsedEffects.push(effect2);
        }
        return ret;
    };
    return Effect192PlayerSkillParser;
}());
var Effect193PlayerSkillParser = /** @class */ (function () {
    function Effect193PlayerSkillParser() {
    }
    //LS L match
    //orb id bits, atk x100, rcv x100??, shield%
    Effect193PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 4);
        var colours = helper.parseColorBitflags(params[0]);
        var legacyText = helper.getHumanReadableMultipliers(0, params[1], params[2]);
        if (params[3] > 0) {
            legacyText += " and " + params[3] + "% shield";
        }
        legacyText += " when matching an L of " + helper.getHumanReadableColors(colours, "and") + " orbs";
        if (colours.length > 1) {
            legacyText += " each";
        }
        legacyText += ".";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyText;
        var effect = new LMatchLeaderSkillEffect();
        effect.colours = colours;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect193PlayerSkillParser;
}());
var Effect194PlayerSkillParser = /** @class */ (function () {
    function Effect194PlayerSkillParser() {
    }
    //LS combo+ for rainbow
    //orb id bits, colours reqed, atk x100, combo
    Effect194PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 4);
        var colours = helper.parseColorBitflags(params[0]);
        var legacyText = "Adds ";
        if (params[2] > 0) {
            legacyText = helper.getHumanReadableMultipliers(0, params[2], 0);
            if (params[3] > 0) {
                legacyText += " and adds ";
            }
        }
        if (params[3] > 0) {
            legacyText += helper.pluralize(params[3], "combo", "combos", true);
        }
        legacyText += " when matching at least " + params[1] + " of ";
        legacyText += helper.getHumanReadableColors(colours, "or") + " orbs.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyText;
        var effect = new ColorMatchesLeaderSkillEffect();
        if (params[2] > 0) {
            effect.colorPool = colours;
            effect.minMatches = params[1];
            effect.baseLsse.atk = params[2] / 100;
            ret.parsedEffects.push(effect);
        }
        var effect2 = new AddComboLSLeaderSkillEffect();
        if (params[3] > 0) {
            effect2.bonusCombos = params[3];
            effect2.requiredColours = colours;
            effect2.minRequiredColours = params[1];
            ret.parsedEffects.push(effect2);
        }
        return ret;
    };
    return Effect194PlayerSkillParser;
}());
var Effect195PlayerSkillParser = /** @class */ (function () {
    function Effect195PlayerSkillParser() {
    }
    //suicide with no other effects
    Effect195PlayerSkillParser.prototype.parse = function (params) {
        //percentage remaining
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Reduces own HP ";
        var ret = new PlayerSkillParserResult();
        helper.cleanParams(params, 1);
        if (params[0] > 0) {
            legacyDescription += "by " + params[0] + "%.";
        }
        else {
            legacyDescription += "to 1.";
        }
        ret.legacyText = legacyDescription;
        var effect = new SuicidePlayerSkillEffect();
        effect.percentLost = 100 - params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect195PlayerSkillParser;
}());
var Effect196PlayerSkillParser = /** @class */ (function () {
    function Effect196PlayerSkillParser() {
    }
    //reduce orb colour unmatchable
    Effect196PlayerSkillParser.prototype.parse = function (params) {
        //turns
        var legacyDescription = "Reduces unmatchable orb status by ";
        legacyDescription += (params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new ReduceUnmatchablePlayerSkillEffect();
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect196PlayerSkillParser;
}());
var Effect197PlayerSkillParser = /** @class */ (function () {
    function Effect197PlayerSkillParser() {
    }
    //Voids poison orb damage
    Effect197PlayerSkillParser.prototype.parse = function (params) {
        //No params
        var legacyDescription = "Voids all poison damage";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        //TODO, create effect
        var effect = new VoidPoisonLeaderSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect197PlayerSkillParser;
}());
var Effect198PlayerSkillParser = /** @class */ (function () {
    function Effect198PlayerSkillParser() {
    }
    //effects when healing at least X HP. Can affect atk, shield, awoken bind duration
    Effect198PlayerSkillParser.prototype.parse = function (params) {
        //heal amt, atkx100, 100-shield%, awoken turns
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 4);
        var descriptionList = [];
        var legacyDescription = "";
        var ret = new PlayerSkillParserResult();
        if (params[1] > 0) {
            descriptionList.push("ATK x" + params[1] / 100);
        }
        if (params[2] > 0) {
            descriptionList.push(100 - params[2] + "% shield");
        }
        if (params[3] > 0) {
            descriptionList.push(params[3] + " turn awoken bind clear");
        }
        legacyDescription = helper.getHumanReadableList(descriptionList, "and");
        legacyDescription += " when healing at least " + helper.getHumanReadableNumber(params[0]) + "HP with Heart orbs.";
        ret.legacyText = legacyDescription;
        //TODO, create effect
        var effect = new HealThreshLeaderSkillEffect();
        effect.awokenTurns = params[3];
        effect.thresh = params[0];
        if (params[1] > 0) {
            effect.lsse.atk = params[1] / 100;
        }
        if (params[2] > 0) {
            effect.lsse.shield = 100 - params[2];
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect198PlayerSkillParser;
}());
var Effect199PlayerSkillParser = /** @class */ (function () {
    function Effect199PlayerSkillParser() {
    }
    //true damage LS when matching x+ colours
    Effect199PlayerSkillParser.prototype.parse = function (params) {
        //colour bitflags, amount, damage
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 3);
        var colours = helper.parseColorBitflags(params[0]);
        var legacyDescription = "Inflicts ";
        legacyDescription += (params[2]);
        var ret = new PlayerSkillParserResult();
        legacyDescription += " true damage when matching ";
        if (params[1] < colours.length) {
            legacyDescription += params[1] + " of ";
        }
        legacyDescription += helper.getHumanReadableColors(colours, "and") + " orbs.";
        ret.legacyText = legacyDescription;
        //TODO, create effect
        var effect = new TrueBonusAttackLeaderSkillEffect();
        effect.colours = colours;
        effect.damage = params[2];
        effect.numColours = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect199PlayerSkillParser;
}());
var Effect19PlayerSkillParser = /** @class */ (function () {
    function Effect19PlayerSkillParser() {
    }
    //Enemy def reduction
    //turns, %reduction
    Effect19PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Reduce enemy defense by ";
        legacyDescription += params[1];
        legacyDescription += "% for ";
        legacyDescription += params[0];
        legacyDescription += " turns.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new DefenseBreakPlayerSkillEffect();
        effect.turns = params[0];
        effect.reduction = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect19PlayerSkillParser;
}());
var Effect1PlayerSkillParser = /** @class */ (function () {
    function Effect1PlayerSkillParser() {
    }
    //Elemental damage to all enemy
    //attr, damage non mult
    Effect1PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflicts ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " damage to all enemies.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isTrueDamage = false;
        effect.isMultiTarget = true;
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.damage = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect1PlayerSkillParser;
}());
var Effect200PlayerSkillParser = /** @class */ (function () {
    function Effect200PlayerSkillParser() {
    }
    //true damage LS when linking x+ of any of listed colours
    Effect200PlayerSkillParser.prototype.parse = function (params) {
        //colour bitflags, linked, damage
        var helper = new PlayerSkillDescriptionHelper();
        params = helper.cleanParams(params, 3);
        var colours = helper.parseColorBitflags(params[0]);
        var legacyDescription = "Inflicts ";
        legacyDescription += (params[2]);
        var ret = new PlayerSkillParserResult();
        legacyDescription += " true damage when linking " + params[1] + "+ ";
        legacyDescription += helper.getHumanReadableColors(colours, "or") + " orbs.";
        ret.legacyText = legacyDescription;
        //TODO, create effect
        var effect = new TrueBonusAttackLeaderSkillEffect();
        effect.colours = colours;
        effect.damage = params[2];
        effect.linked = params[1];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect200PlayerSkillParser;
}());
var Effect20PlayerSkillParser = /** @class */ (function () {
    function Effect20PlayerSkillParser() {
    }
    //Exactly double orb change
    //in1, out1, in2, out2. Trailing 0 omit. Ids.
    Effect20PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        if (!params[3] || 0) {
            params[3] = 0;
        }
        var colors = helper.getColorList(params, 0);
        var legacyDescription = "Changes ";
        //if both targets the same, format as "x and y orbs to z orbs"
        if (params[1] == params[3]) {
            legacyDescription += helper.getHumanReadableColors([colors[0], colors[2]]);
            legacyDescription += " orbs to ";
            legacyDescription += helper.getHumanReadableColor(colors[1]);
            legacyDescription += ".";
            var effect = new OrbChangePlayerSkillEffect();
            var color1 = ColorAttribute[ColorAttribute[params[0]]];
            var color2 = ColorAttribute[ColorAttribute[params[2]]];
            effect.onlyChange = [color1, color2];
            effect.results = [ColorAttribute[ColorAttribute[params[1]]]];
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription;
            ret.parsedEffects.push(effect);
            return ret;
        }
        //else format as "x orbs to y and z orbs to q"
        legacyDescription += helper.getHumanReadableColor(colors[0]);
        legacyDescription += " orbs to ";
        legacyDescription += helper.getHumanReadableColor(colors[1]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableColor(colors[2]);
        legacyDescription += " orbs to ";
        legacyDescription += helper.getHumanReadableColor(colors[3]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect1 = new OrbChangePlayerSkillEffect();
        effect1.onlyChange = [ColorAttribute[ColorAttribute[params[0]]]];
        effect1.results = [ColorAttribute[ColorAttribute[params[1]]]];
        var effect2 = new OrbChangePlayerSkillEffect();
        effect2.onlyChange = [ColorAttribute[ColorAttribute[params[2]]]];
        var result = params[3];
        if (!result) {
            result = 0;
        }
        effect2.results = [ColorAttribute[ColorAttribute[result]]];
        ret.parsedEffects.push(effect1);
        ret.parsedEffects.push(effect2);
        return ret;
    };
    return Effect20PlayerSkillParser;
}());
var Effect21PlayerSkillParser = /** @class */ (function () {
    function Effect21PlayerSkillParser() {
    }
    //reduce?/void elemental damage
    //turns, attr id, reduction?
    Effect21PlayerSkillParser.prototype.parse = function (params) {
        //turns, attr id, reduction?. Currently all reductions are 100% voids
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += params[2];
        legacyDescription += "% ";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        legacyDescription += " damage reduction for ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new ShieldPlayerSkillEffect();
        effect.turns = params[0];
        effect.colors = [ColorAttribute[ColorAttribute[params[1]]]];
        effect.reduction = params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect21PlayerSkillParser;
}());
var Effect22PlayerSkillParser = /** @class */ (function () {
    function Effect22PlayerSkillParser() {
    }
    //single type atk boost LS
    //type id, multx100
    Effect22PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect22PlayerSkillParser;
}());
var Effect23PlayerSkillParser = /** @class */ (function () {
    function Effect23PlayerSkillParser() {
    }
    //single type hp boost LS
    //type id, multx100
    Effect23PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x HP for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect23PlayerSkillParser;
}());
var Effect24PlayerSkillParser = /** @class */ (function () {
    function Effect24PlayerSkillParser() {
    }
    //single type rcv boost LS
    //type id, multx100
    Effect24PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x RCV for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect24PlayerSkillParser;
}());
var Effect26PlayerSkillParser = /** @class */ (function () {
    function Effect26PlayerSkillParser() {
    }
    //LS unused in real cards, atk mult for all cards unconditionally with no other effects
    //multx100
    Effect26PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x ATK for all allies.";
        var effect = new PassiveBoostLeaderSkillEffect();
        effect.lsse.atk = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect26PlayerSkillParser;
}());
var Effect28PlayerSkillParser = /** @class */ (function () {
    function Effect28PlayerSkillParser() {
    }
    //single attribute atk+rcv boost LS
    //attr id, multx100
    Effect28PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ATK & RCV for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect28PlayerSkillParser;
}());
var Effect29PlayerSkillParser = /** @class */ (function () {
    function Effect29PlayerSkillParser() {
    }
    //single color allstat boost LS
    //attr id, multx100
    Effect29PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x to all stats for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        effect.lsse.atk = params[1] / 100;
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect29PlayerSkillParser;
}());
var Effect2PlayerSkillParser = /** @class */ (function () {
    function Effect2PlayerSkillParser() {
    }
    //Elemental damage to 1 enemy based on multiplier to self ATK
    //multiplier x100, [ceiling? x100]. Uncertainty not pushed to Effect
    Effect2PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Inflicts a ";
        if (params[1]) {
            //if there's a second parameter and it's different from the first
            //so far none are but I'm assuming when they exist, it's a range.
            if (params[1] != params[0]) {
                legacyDescription += params[0] / 100;
                legacyDescription += "x-";
                legacyDescription += params[1] / 100;
                legacyDescription += "x attack to 1 enemy.";
                var effect_1 = new ImmediateDamagePlayerSkillEffect();
                effect_1.isTrueDamage = false;
                effect_1.isMultiTarget = false;
                effect_1.isCardElement = true;
                effect_1.multiplier = params[0] / 100;
                effect_1.maxMultiplier = params[1] / 100;
                ret.parsedEffects.push(effect_1);
                var ret = new PlayerSkillParserResult();
                ret.legacyText = legacyDescription;
                return ret;
            }
        }
        legacyDescription += params[0] / 100;
        legacyDescription += "x attack to 1 enemy.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isTrueDamage = false;
        effect.isMultiTarget = false;
        effect.isCardElement = true;
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect2PlayerSkillParser;
}());
var Effect30PlayerSkillParser = /** @class */ (function () {
    function Effect30PlayerSkillParser() {
    }
    //exactly 2 types HP boost LS
    //type1id, type2id, multx100
    Effect30PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x HP for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0], params[1]);
        effect.lsse.hp = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect30PlayerSkillParser;
}());
var Effect31PlayerSkillParser = /** @class */ (function () {
    function Effect31PlayerSkillParser() {
    }
    //exactly 2 type ATK boost LS
    //type1id, type2id, multx100
    Effect31PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0], params[1]);
        effect.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect31PlayerSkillParser;
}());
var Effect33PlayerSkillParser = /** @class */ (function () {
    function Effect33PlayerSkillParser() {
    }
    //taiko noises
    Effect33PlayerSkillParser.prototype.parse = function (params) {
        var ret = new PlayerSkillParserResult();
        ret.legacyText = "Taiko sounds when moving orbs.";
        var effect = new TaikoNoisesLeaderSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect33PlayerSkillParser;
}());
var Effect35PlayerSkillParser = /** @class */ (function () {
    function Effect35PlayerSkillParser() {
    }
    //single target attack + drain using self element
    //multx100, drain%
    Effect35PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflicts a ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        legacyDescription += "x attack to 1 enemy and recover ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% of the damage.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.multiplier = params[0] / 100;
        effect.drainPercentage = params[1];
        effect.isCardElement = true;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect35PlayerSkillParser;
}());
var Effect36PlayerSkillParser = /** @class */ (function () {
    function Effect36PlayerSkillParser() {
    }
    //exactly 2 elem damage reduction. LS
    //elem1id, elem2id, reduction%
    Effect36PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2]);
        legacyDescription += "% ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " damage reduction.";
        var effect = new ColorShieldLeaderSkillEffect();
        effect.colors.push(params[0], params[1]);
        effect.percentage = params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect36PlayerSkillParser;
}());
var Effect37PlayerSkillParser = /** @class */ (function () {
    function Effect37PlayerSkillParser() {
    }
    //single target multiplier attack with specified element
    //elemid, multx100
    Effect37PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflicts a ";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " attack on 1 enemy.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.multiplier = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect37PlayerSkillParser;
}());
var Effect38PlayerSkillParser = /** @class */ (function () {
    function Effect38PlayerSkillParser() {
    }
    //some wonky hp thresh shield LS
    Effect38PlayerSkillParser.prototype.parse = function (params) {
        //thresh, 100, reduction. If thresh 100, make it >=. Else <.        
        var legacyDescription = "";
        legacyDescription += params[2];
        legacyDescription += "% damage reduction when HP ";
        if (params[0] == 100) {
            legacyDescription += "at least " + params[0] + "%.";
        }
        else {
            legacyDescription += "is " + params[0] + "% or below.";
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        if (params[0] == 100) {
            effect.direction = true;
        }
        else {
            effect.direction = false;
        }
        effect.lsse.shield = params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect38PlayerSkillParser;
}());
var Effect39PlayerSkillParser = /** @class */ (function () {
    function Effect39PlayerSkillParser() {
    }
    //single HP Conditional <=
    Effect39PlayerSkillParser.prototype.parse = function (params) {
        //thresh, atk flag? rcv flag?, multx100
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[3] / 100);
        legacyDescription += "x ";
        if (params[1]) {
            legacyDescription += "ATK ";
        }
        if (params[2]) {
            if (params[1]) {
                legacyDescription += "& ";
            }
            legacyDescription += "RCV ";
        }
        legacyDescription += "when HP is ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% or below.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = false;
        if (params[1] > 0) {
            effect.lsse.atk = params[3] / 100;
        }
        if (params[2] > 0) {
            effect.lsse.rcv = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect39PlayerSkillParser;
}());
var Effect3PlayerSkillParser = /** @class */ (function () {
    function Effect3PlayerSkillParser() {
    }
    //shield AS
    //turns, %reduction
    Effect3PlayerSkillParser.prototype.parse = function (params) {
        var legacyDescription = "Reduces damage taken by ";
        legacyDescription += params[1];
        legacyDescription += "% for ";
        legacyDescription += params[0];
        legacyDescription += " turns.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ShieldPlayerSkillEffect();
        effect.reduction = params[1];
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect3PlayerSkillParser;
}());
var Effect40PlayerSkillParser = /** @class */ (function () {
    function Effect40PlayerSkillParser() {
    }
    //exactly 2 attributes atk boost LS
    //attr1id, attr2id, multx100
    Effect40PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0], params[1]);
        effect.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect40PlayerSkillParser;
}());
var Effect41PlayerSkillParser = /** @class */ (function () {
    function Effect41PlayerSkillParser() {
    }
    //counterattack LS
    Effect41PlayerSkillParser.prototype.parse = function (params) {
        //chance, multx100, elem id
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += "% chance for ";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ";
        legacyDescription += helper.getHumanReadableColor(params[2] || 0);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " counterattack.";
        var effect = new PassiveCounterAttackLeaderSkillEffect();
        effect.chance = params[0];
        if (params[2] > 0) {
            effect.color = ColorAttribute[ColorAttribute[params[2]]];
        }
        else {
            effect.color = ColorAttribute.Fire;
        }
        effect.mult = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect41PlayerSkillParser;
}());
var Effect42PlayerSkillParser = /** @class */ (function () {
    function Effect42PlayerSkillParser() {
    }
    //flat elemental attack to enemies of select element
    //target elem id, atk elem id, damage
    Effect42PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict ";
        legacyDescription += helper.getHumanReadableNumber(params[2]);
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        legacyDescription += " damage to ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " enemies.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.targetedColor = ColorAttribute[ColorAttribute[params[0]]];
        effect.element = ColorAttribute[ColorAttribute[params[1]]];
        effect.damage = params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect42PlayerSkillParser;
}());
var Effect43PlayerSkillParser = /** @class */ (function () {
    function Effect43PlayerSkillParser() {
    }
    //shield when at least x% HP LS
    Effect43PlayerSkillParser.prototype.parse = function (params) {
        //thresh%, chance, shield. 
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        params = helper.cleanParams(params, 3);
        if (params[1] != 100) {
            legacyDescription = params[1] + "% chance to reduce damage by ";
        }
        else {
            legacyDescription = "Reduce damage taken by ";
        }
        legacyDescription += helper.getHumanReadableNumber(params[2]);
        legacyDescription += "% when HP is at least ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = true;
        effect.lsse.shield = params[2];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect43PlayerSkillParser;
}());
var Effect44PlayerSkillParser = /** @class */ (function () {
    function Effect44PlayerSkillParser() {
    }
    //ATK and possible RCV multiplier when >= HP thresh LS
    Effect44PlayerSkillParser.prototype.parse = function (params) {
        //thresh, flag1, flag2, multx100
        //other eff ids have flag1 = 1 if attack is included, flag2 = 2 if rcv is included
        //But the 2 examples in our data boosting rcv have flag2=0 and flag1=2
        //These are translated FMA cards, but skyozora says these boost ATK not RCV
        //so I'm going to assume our data is wrong and go with skyozora
        //This means nothing in NA boosts rcv with this effect
        //Treating like other effects, going with flag1=attack=1, flag2=rcv=2
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "All allies ";
        legacyDescription += helper.getHumanReadableNumber(params[3] / 100);
        legacyDescription += "x ";
        if (params[1] == 1) {
            legacyDescription += "ATK ";
        }
        if (params[2] == 2) {
            legacyDescription += "RCV ";
        }
        legacyDescription += "when HP at least ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = true;
        if (params[1] == 1) {
            effect.lsse.atk = params[3] / 100;
        }
        if (params[1] == 2) {
            effect.lsse.rcv = params[3] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect44PlayerSkillParser;
}());
var Effect45PlayerSkillParser = /** @class */ (function () {
    function Effect45PlayerSkillParser() {
    }
    //attack + rcv boost for exactly 1 attribute LS
    //attr id, multx100
    Effect45PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ATK & HP for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.atk = params[1] / 100;
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect45PlayerSkillParser;
}());
var Effect46PlayerSkillParser = /** @class */ (function () {
    function Effect46PlayerSkillParser() {
    }
    //HP boost for exactly 2 elements
    //elem1id, elem2id, multx100
    Effect46PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x HP for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0], params[1]);
        effect.lsse.hp = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect46PlayerSkillParser;
}());
var Effect48PlayerSkillParser = /** @class */ (function () {
    function Effect48PlayerSkillParser() {
    }
    //exactly 1 attributes HP boost LS
    //elemid, multx100
    Effect48PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x HP for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect48PlayerSkillParser;
}());
var Effect49PlayerSkillParser = /** @class */ (function () {
    function Effect49PlayerSkillParser() {
    }
    //exactly 1 attribute rcv boost LS
    //elemid, multx100
    Effect49PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x RCV for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect49PlayerSkillParser;
}());
var Effect4PlayerSkillParser = /** @class */ (function () {
    function Effect4PlayerSkillParser() {
    }
    //Poison multiplier x100
    Effect4PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Poisons enemies with  ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        legacyDescription += "x ATK.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new PoisonPlayerSkillEffect();
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect4PlayerSkillParser;
}());
var Effect50PlayerSkillParser = /** @class */ (function () {
    function Effect50PlayerSkillParser() {
    }
    //boost an attribute atk for some turns. if attribute 5, boost rcv. Why.
    Effect50PlayerSkillParser.prototype.parse = function (params) {
        //turns, attr, buffx100
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        params = helper.cleanParams(params, 3);
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x ";
        if (params[1] == 5) {
            legacyDescription += "RCV ";
        }
        else {
            legacyDescription += helper.getHumanReadableColor(params[1]);
            legacyDescription += " ATK ";
        }
        legacyDescription += "for ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        if (params[1] == 5) {
            var effect = new RecoveryBuffPlayerSkillEffect();
            effect.turns = params[0];
            effect.multiplier = params[2] / 100;
            ret.parsedEffects.push(effect);
        }
        else {
            var effect2 = new BurstPlayerSkillEffect();
            effect2.turns = params[0];
            effect2.colors = [ColorAttribute[ColorAttribute[params[1]]]];
            effect2.multiplier = params[2] / 100;
            ret.parsedEffects.push(effect2);
        }
        return ret;
    };
    return Effect50PlayerSkillParser;
}());
var Effect51PlayerSkillParser = /** @class */ (function () {
    function Effect51PlayerSkillParser() {
    }
    //mass attack
    //turns
    Effect51PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Mass attacks for ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new MassAttackPlayerSkillEffect();
        effect.turns = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect51PlayerSkillParser;
}());
var Effect52PlayerSkillParser = /** @class */ (function () {
    function Effect52PlayerSkillParser() {
    }
    //enhances 1 orb type. Possibly with potency
    Effect52PlayerSkillParser.prototype.parse = function (params) {
        //elem, potency? All are 6 right now, for 6% per orb with one exception
        //being an unused test skill called Enhanced Heal with 100 as potency
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Enhances ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " orbs; ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% per orb.";
        var effect = new EnhanceOrbsPlayerSkillEffect();
        effect.colors = [ColorAttribute[ColorAttribute[params[0]]]];
        //leaving out potency until confirmed
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect52PlayerSkillParser;
}());
var Effect53PlayerSkillParser = /** @class */ (function () {
    function Effect53PlayerSkillParser() {
    }
    //drop rate boost LS
    //ratex100
    Effect53PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Drop rate ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x in solo play.";
        var effect = new DropRateLeaderSkillEffect();
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect53PlayerSkillParser;
}());
var Effect54PlayerSkillParser = /** @class */ (function () {
    function Effect54PlayerSkillParser() {
    }
    //coin drop multiplier LS
    //ratex100
    Effect54PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "x coins when entering as leader.";
        var effect = new CoinRateLeaderSkillEffect();
        effect.multiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect54PlayerSkillParser;
}());
var Effect55PlayerSkillParser = /** @class */ (function () {
    function Effect55PlayerSkillParser() {
    }
    //single target laser
    //damage
    Effect55PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += " True damage to 1 enemy.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isTrueDamage = true;
        effect.damage = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect55PlayerSkillParser;
}());
var Effect56PlayerSkillParser = /** @class */ (function () {
    function Effect56PlayerSkillParser() {
    }
    //all target laser
    //damage
    Effect56PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += " True damage to all enemies.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isTrueDamage = true;
        effect.isMultiTarget = true;
        effect.damage = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect56PlayerSkillParser;
}());
var Effect58PlayerSkillParser = /** @class */ (function () {
    function Effect58PlayerSkillParser() {
    }
    //attribute mass attack with range
    //elemid, floor multx100, ceil multx100
    Effect58PlayerSkillParser.prototype.parse = function (params) {
        //attribute, min mult, max mult. Max=min when fixed damage
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict a ";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x";
        if (params[1] != params[2]) {
            legacyDescription += "-";
            legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
            legacyDescription += "x";
        }
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " attack on all enemies.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.isMultiTarget = true;
        effect.multiplier = params[1] / 100;
        //at the moment, ignore ceiling if equal to floor. Who knows why they don't just use the standard elem mass attack effect instead
        if (params[1] != params[2]) {
            effect.maxMultiplier = params[2] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect58PlayerSkillParser;
}());
var Effect59PlayerSkillParser = /** @class */ (function () {
    function Effect59PlayerSkillParser() {
    }
    //attribute 1 target attack with range
    //elemid, floor multx100, ceil multx100
    Effect59PlayerSkillParser.prototype.parse = function (params) {
        //attribute, min mult, max mult. Max=min when fixed damage
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict a ";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x";
        if (params[1] != params[2]) {
            legacyDescription += "-";
            legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
            legacyDescription += "x";
        }
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " attack on 1 enemy.";
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.multiplier = params[1] / 100;
        //at the moment, ignore ceiling if equal to floor. Who knows why they don't just use the standard elem mass attack effect instead
        if (params[1] != params[2]) {
            effect.maxMultiplier = params[2] / 100;
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect59PlayerSkillParser;
}());
var Effect5PlayerSkillParser = /** @class */ (function () {
    function Effect5PlayerSkillParser() {
    }
    //CTW active
    //seconds not x100
    Effect5PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Move orbs freely for  ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += " seconds.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ChangeTheWorldPlayerSkillEffect();
        effect.seconds = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect5PlayerSkillParser;
}());
var Effect60PlayerSkillParser = /** @class */ (function () {
    function Effect60PlayerSkillParser() {
    }
    //AS elem counterattack
    Effect60PlayerSkillParser.prototype.parse = function (params) {
        //turns, multx100, attr no trailing
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ";
        legacyDescription += helper.getHumanReadableColor(params[2] || 0);
        legacyDescription += " counterattack for ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new CounterAttackPlayerSkillEffect();
        effect.turns = params[0];
        effect.multiplier = params[1] / 100;
        var elem = params[2];
        if (!elem) {
            elem = 0;
        }
        effect.color = ColorAttribute[ColorAttribute[elem]];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect60PlayerSkillParser;
}());
var Effect61PlayerSkillParser = /** @class */ (function () {
    function Effect61PlayerSkillParser() {
    }
    //color match atk mult with scaling support
    Effect61PlayerSkillParser.prototype.parse = function (params) {
        //attrbits, min color, base atk, scale mult, max extra stacks
        //radra says 6 extra stacks when it's probably supposed to be "cap at 6"
        //it's the only one that does this and is probably and error
        var helper = new PlayerSkillDescriptionHelper();
        //get attr pool in array. If length = min colors, it's match all. Format as "matching xyz"
        //if < min, format as "matching <min> of xyz"
        //if scaling included, add "+\dx atk per additional color"
        //if scale cap not given, calculate pool count subtract min, that's max stacks
        //if given, check if it's more stacks than pool count allows (radra check)
        //if so, cap it at pool length. If not, proceed as normal
        var legacyDescription = "";
        params = helper.cleanParams(params, 5);
        var stacks = 0;
        var colors = helper.parseColorBitflags(params[0]);
        //if stacks not given, or is more than pool length - min colors, set it as such
        if (params[3] == 0) {
            stacks = 0;
        }
        else if (!params[4] || params[4] > (colors.length - params[1])) {
            stacks = colors.length - params[1];
        }
        else {
            stacks = params[4];
        }
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x ATK when matching ";
        //if need to match all colours, just list them out as matching all
        if (params[1] == colors.length) {
            legacyDescription += helper.getHumanReadableColors(colors);
            legacyDescription += ".";
        }
        else {
            legacyDescription += params[1];
            legacyDescription += " of ";
            legacyDescription += helper.getHumanReadableColors(colors);
            //if no scaling permitted
            if (!params[3]) {
                legacyDescription += ".";
            }
            else {
                //scaling. +x per addtional up to max. Calc max and show "all" if it's all colors
                legacyDescription += ". +";
                legacyDescription += params[3] / 100;
                legacyDescription += "x per additional color, up to ";
                legacyDescription += (stacks * params[3] + params[2]) / 100;
                legacyDescription += "x for ";
                if (stacks = colors.length - params[1]) {
                    legacyDescription += "all ";
                }
                legacyDescription += stacks + params[1];
                legacyDescription += " colors.";
            }
        }
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ColorMatchesLeaderSkillEffect();
        effect.colorPool = colors;
        effect.minMatches = params[1];
        effect.maxStacks = stacks;
        effect.baseLsse.atk = params[2] / 100;
        effect.stackLsse.atk = params[3] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect61PlayerSkillParser;
}());
var Effect62PlayerSkillParser = /** @class */ (function () {
    function Effect62PlayerSkillParser() {
    }
    //HP+atk for exactly 1 typing LS
    //typeid, multx100
    Effect62PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(params[1], params[1], 0);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        effect.lsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect62PlayerSkillParser;
}());
var Effect63PlayerSkillParser = /** @class */ (function () {
    function Effect63PlayerSkillParser() {
    }
    //HP+rcv for exactly 1 typing
    //type, multx100
    Effect63PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(params[1], 0, params[1]);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect63PlayerSkillParser;
}());
var Effect64PlayerSkillParser = /** @class */ (function () {
    function Effect64PlayerSkillParser() {
    }
    //atk+rcv for exactly 1 typing
    //typeid, multx100
    Effect64PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[1], params[1]);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.atk = params[1] / 100;
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect64PlayerSkillParser;
}());
var Effect65PlayerSkillParser = /** @class */ (function () {
    function Effect65PlayerSkillParser() {
    }
    //allstat for exactly 1 typing
    //typeid, multx100
    Effect65PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x allstats for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        effect.lsse.atk = params[1] / 100;
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect65PlayerSkillParser;
}());
var Effect66PlayerSkillParser = /** @class */ (function () {
    function Effect66PlayerSkillParser() {
    }
    //atk at min combo with no scale LS
    //mincombo, multx100
    Effect66PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[1], 0);
        legacyDescription += " for all allies at ";
        legacyDescription += params[0];
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "+ combos.";
        var effect = new ComboCountLeaderSkillEffect();
        effect.minCombos = params[0];
        effect.maxStacks = 0;
        effect.baseLsse.atk = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect66PlayerSkillParser;
}());
var Effect67PlayerSkillParser = /** @class */ (function () {
    function Effect67PlayerSkillParser() {
    }
    //HP+rcv for exactly 1 color
    //attrid, multx100
    Effect67PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(params[1], 0, params[1]);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " cards.";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.hp = params[1] / 100;
        effect.lsse.rcv = params[1] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect67PlayerSkillParser;
}());
var Effect69PlayerSkillParser = /** @class */ (function () {
    function Effect69PlayerSkillParser() {
    }
    //atk for exactly 1 typing and 1 color
    //elemid, typeid, multx100
    Effect69PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[2], 0);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new AttributeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.lsse.atk = params[2] / 100;
        var effect2 = new TypeBoostLeaderSkillEffect();
        effect2.types.push(params[1]);
        effect2.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect, effect2);
        return ret;
    };
    return Effect69PlayerSkillParser;
}());
var Effect6PlayerSkillParser = /** @class */ (function () {
    function Effect6PlayerSkillParser() {
    }
    //Gravity
    //percentage
    Effect6PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Reduce all enemies' current HP by  ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += "%.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new GravityPlayerSkillEffect();
        effect.percentage = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect6PlayerSkillParser;
}());
var Effect71PlayerSkillParser = /** @class */ (function () {
    function Effect71PlayerSkillParser() {
    }
    //fullboard change
    //variable length. List of element ids, terminated by -1
    Effect71PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var colors = helper.getColorList(params, 0);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = "Change all orbs to " + helper.getHumanReadableColors(colors) + ".";
        var effect = new OrbChangePlayerSkillEffect();
        effect.results = [];
        for (var i = 0; i < params.length; i++) {
            if (params[i] == -1) {
                break;
            }
            effect.results.push(ColorAttribute[ColorAttribute[params[i]]]);
        }
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect71PlayerSkillParser;
}());
var Effect73PlayerSkillParser = /** @class */ (function () {
    function Effect73PlayerSkillParser() {
    }
    //atk+hp for exactly 1 typing and 1 color
    //attrid, typeid, multx100
    Effect73PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(params[2], params[2], 0);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new AttributeOrTypeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.types.push(params[1]);
        effect.lsse.hp = params[2] / 100;
        effect.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect73PlayerSkillParser;
}());
var Effect75PlayerSkillParser = /** @class */ (function () {
    function Effect75PlayerSkillParser() {
    }
    //atk+rcv for exactly 1 typing and 1 color
    //attrid, typeid, mult
    Effect75PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[2], params[2]);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new AttributeOrTypeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.types.push(params[1]);
        effect.lsse.atk = params[2] / 100;
        effect.lsse.rcv = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect75PlayerSkillParser;
}());
var Effect76PlayerSkillParser = /** @class */ (function () {
    function Effect76PlayerSkillParser() {
    }
    //allstat for exactly 1 typing and 1 color
    //attrid, typeid, mult
    Effect76PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x all stats for ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + ".";
        var effect = new AttributeOrTypeBoostLeaderSkillEffect();
        effect.colors.push(params[0]);
        effect.types.push(params[1]);
        effect.lsse.hp = params[2] / 100;
        effect.lsse.atk = params[2] / 100;
        effect.lsse.rcv = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect76PlayerSkillParser;
}());
var Effect77PlayerSkillParser = /** @class */ (function () {
    function Effect77PlayerSkillParser() {
    }
    //atk for exactly 2 typings
    //typeid1, typeid2, multx100
    Effect77PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[2], 0);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0], params[1]);
        effect.lsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect77PlayerSkillParser;
}());
var Effect79PlayerSkillParser = /** @class */ (function () {
    function Effect79PlayerSkillParser() {
    }
    //atk+rcv for exactly 2 typings
    //type1, type2, multx100
    Effect79PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = helper.getHumanReadableMultipliers(0, params[2], params[2]);
        legacyDescription += " for ";
        legacyDescription += helper.getHumanReadableType(params[0]);
        legacyDescription += " and ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " types.";
        var effect = new TypeBoostLeaderSkillEffect();
        effect.types.push(params[0], params[1]);
        effect.lsse.atk = params[2] / 100;
        effect.lsse.rcv = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect79PlayerSkillParser;
}());
var Effect7PlayerSkillParser = /** @class */ (function () {
    function Effect7PlayerSkillParser() {
    }
    //super deprecated heal by card's rcv
    ///multx100
    Effect7PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Heal ";
        legacyDescription += helper.getHumanReadableNumber(params[0] / 100);
        legacyDescription += "x this card's RCV.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateHealPlayerSkillEffect();
        effect.selfMultiplier = params[0] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect7PlayerSkillParser;
}());
var Effect84PlayerSkillParser = /** @class */ (function () {
    function Effect84PlayerSkillParser() {
    }
    //single target elemental suicide attack
    //attr, floor mult? x100, ceiling mult? x100, [HPremaining%]. 
    //could be floor/ceiling for random damage. So far all are floor=ceil
    //Unspecified suicide = HP fall to 1. Likely a later added parameter for newer skills
    Effect84PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict a ";
        if (params[1] != params[2]) {
            legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
            legacyDescription += "x-";
            legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
            legacyDescription += "x ";
        }
        else {
            legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
            legacyDescription += "x ";
        }
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " attack to 1 enemy but HP falls to ";
        if (!params[3]) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "1.";
        }
        else {
            legacyDescription += helper.getHumanReadableNumber(params[3]);
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "%.";
        }
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.multiplier = params[1] / 100;
        //leaving out ceiling unless confirmed. Using params[1] as mult
        var effect2 = new SuicidePlayerSkillEffect();
        if (params[3] != null) {
            effect2.percentLost = 100 - params[3];
        }
        else {
            //suicide percentage
            effect2.percentLost = 100;
        }
        ret.parsedEffects.push(effect);
        ret.parsedEffects.push(effect2);
        return ret;
    };
    return Effect84PlayerSkillParser;
}());
var Effect85PlayerSkillParser = /** @class */ (function () {
    function Effect85PlayerSkillParser() {
    }
    //all target elemental suicide attack
    //attr, floor mult?x100, ceiling mult?x100, [HPremaining%]. 
    Effect85PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict a ";
        if (params[1] != params[2]) {
            legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
            legacyDescription += "x-";
            legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
            legacyDescription += "x ";
        }
        else {
            legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
            legacyDescription += "x ";
        }
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " attack to all enemies but HP falls to ";
        if (!params[3]) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "1.";
        }
        else {
            legacyDescription += helper.getHumanReadableNumber(params[3]);
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "%.";
        }
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.isMultiTarget = true;
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.multiplier = params[1] / 100;
        //floor/ceiling not confirmed. For now, use only floor.
        var effect2 = new SuicidePlayerSkillEffect();
        if (params[3] != null) {
            effect2.percentLost = 100 - params[3];
        }
        else {
            effect2.percentLost = 100;
        }
        ret.parsedEffects.push(effect);
        ret.parsedEffects.push(effect2);
        return ret;
    };
    return Effect85PlayerSkillParser;
}());
var Effect86PlayerSkillParser = /** @class */ (function () {
    function Effect86PlayerSkillParser() {
    }
    //single target elemental suicide attack flat damage with no range like 84
    //attr, damage, [0?, hpremaining%]. So far, all param3s are 0
    Effect86PlayerSkillParser.prototype.parse = function (params) {
        //attr, damage, 0?, suicide%
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " damage to 1 enemy but HP falls to ";
        if (!params[3]) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "1.";
        }
        else {
            legacyDescription += helper.getHumanReadableNumber(params[3]);
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "%.";
        }
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.damage = params[1];
        var effect2 = new SuicidePlayerSkillEffect();
        if (params[3] != null) {
            effect2.percentLost = 100 - params[3];
        }
        else {
            effect2.percentLost = 100;
        }
        ret.parsedEffects.push(effect);
        ret.parsedEffects.push(effect2);
        return ret;
    };
    return Effect86PlayerSkillParser;
}());
var Effect87PlayerSkillParser = /** @class */ (function () {
    function Effect87PlayerSkillParser() {
    }
    //all target elemental suicide attack flat damage with no range like 84
    Effect87PlayerSkillParser.prototype.parse = function (params) {
        //attr, damage, 0?, suicide%?
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Inflict ";
        legacyDescription += helper.getHumanReadableNumber(params[1]);
        legacyDescription += " ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " damage to all enemies but HP falls to ";
        if (!params[3]) {
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "1.";
        }
        else {
            legacyDescription += helper.getHumanReadableNumber(params[3]);
            var ret = new PlayerSkillParserResult();
            ret.legacyText = legacyDescription + "%.";
        }
        var effect = new ImmediateDamagePlayerSkillEffect();
        effect.element = ColorAttribute[ColorAttribute[params[0]]];
        effect.isMultiTarget = true;
        effect.damage = params[1];
        var effect2 = new SuicidePlayerSkillEffect();
        if (params[3] != null) {
            effect2.percentLost = 100 - params[3];
        }
        else {
            effect2.percentLost = 100;
        }
        ret.parsedEffects.push(effect);
        ret.parsedEffects.push(effect2);
        return ret;
    };
    return Effect87PlayerSkillParser;
}());
var Effect88PlayerSkillParser = /** @class */ (function () {
    function Effect88PlayerSkillParser() {
    }
    //single type attack buff
    Effect88PlayerSkillParser.prototype.parse = function (params) {
        //turn, type, buffx100
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableType(params[1]);
        legacyDescription += " types for ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new BurstPlayerSkillEffect();
        effect.types = [CardType[CardType[params[1]]]];
        effect.turns = params[0];
        effect.multiplier = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect88PlayerSkillParser;
}());
var Effect8PlayerSkillParser = /** @class */ (function () {
    function Effect8PlayerSkillParser() {
    }
    //deprecated heal flat HP amount
    //amount
    Effect8PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Heal ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += "HP.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new ImmediateHealPlayerSkillEffect();
        effect.fixedAmount = params[0];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect8PlayerSkillParser;
}());
var Effect90PlayerSkillParser = /** @class */ (function () {
    function Effect90PlayerSkillParser() {
    }
    //atk buff for exactly 2 colors
    Effect90PlayerSkillParser.prototype.parse = function (params) {
        //turns, color1, color2, buffx100
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[3] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableColors([params[1], params[2]]);
        legacyDescription += " cards for ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new BurstPlayerSkillEffect();
        effect.turns = params[0];
        effect.multiplier = params[3] / 100;
        effect.colors = [ColorAttribute[ColorAttribute[params[1]]], ColorAttribute[ColorAttribute[params[2]]]];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect90PlayerSkillParser;
}());
var Effect91PlayerSkillParser = /** @class */ (function () {
    function Effect91PlayerSkillParser() {
    }
    //enhance orbs for exactly 2 colors
    Effect91PlayerSkillParser.prototype.parse = function (params) {
        //color1, color2, potency? currently all potencies are 6%
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Enhances ";
        legacyDescription += helper.getHumanReadableColors([params[0], params[1]]);
        legacyDescription += " orbs; ";
        legacyDescription += helper.getHumanReadableNumber(params[2]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% per orb.";
        var effect = new EnhanceOrbsPlayerSkillEffect();
        effect.colors = [ColorAttribute[ColorAttribute[params[0]]], ColorAttribute[ColorAttribute[params[1]]]];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect91PlayerSkillParser;
}());
var Effect92PlayerSkillParser = /** @class */ (function () {
    function Effect92PlayerSkillParser() {
    }
    //atk buff for exactly 2 types
    Effect92PlayerSkillParser.prototype.parse = function (params) {
        //turns, type1, type2, buffx100
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableNumber(params[3] / 100);
        legacyDescription += "x ATK for ";
        legacyDescription += helper.getHumanReadableTypes([params[1], params[2]]);
        legacyDescription += " types for ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " turns.";
        var effect = new BurstPlayerSkillEffect();
        effect.turns = params[0];
        effect.multiplier = params[3] / 100;
        effect.types = [CardType[CardType[params[1]]], CardType[CardType[params[2]]]];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect92PlayerSkillParser;
}());
var Effect93PlayerSkillParser = /** @class */ (function () {
    function Effect93PlayerSkillParser() {
    }
    //Leaderswap
    Effect93PlayerSkillParser.prototype.parse = function (params) {
        //no params
        var ret = new PlayerSkillParserResult();
        ret.legacyText = "Switches places with leader. Switch back when used again.";
        var effect = new LeaderswapPlayerSkillEffect();
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect93PlayerSkillParser;
}());
var Effect94PlayerSkillParser = /** @class */ (function () {
    function Effect94PlayerSkillParser() {
    }
    //atk and possible rcv mult for 1 color when strictly below HP thresh
    Effect94PlayerSkillParser.prototype.parse = function (params) {
        //thresh,color, atkflag?, rcvflag?, mult. So far, all flags are 1,0 for only boosting atk
        //but other skills suggest 1,2 for both, or 0,2 for just rcv. Implementing as such
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        legacyDescription += " cards ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2] && params[4], params[3] && params[4]);
        legacyDescription += " when HP is ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% or below.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = false;
        effect.colors.push(params[1]);
        //until problems arise, ignoring all flags and assuming atk increase
        effect.lsse.atk = params[4] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect94PlayerSkillParser;
}());
var Effect95PlayerSkillParser = /** @class */ (function () {
    function Effect95PlayerSkillParser() {
    }
    //atk and possible rcv mult for 1 type when strictly below HP thresh
    Effect95PlayerSkillParser.prototype.parse = function (params) {
        //thresh,type, atkflag?, rcvflag?, mult. So far, all flags are 1,0 for only boosting atk
        //but other skills suggest 1,2 for both, or 0,2 for just rcv. Implementing as such
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableType(params[1]);
        legacyDescription += " types ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2] && params[4], params[3] && params[4]);
        legacyDescription += " when HP is ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "% or below.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = false;
        effect.typing.push(params[1]);
        //until problems arise, 94-97 assume atk only
        effect.lsse.atk = params[4] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect95PlayerSkillParser;
}());
var Effect96PlayerSkillParser = /** @class */ (function () {
    function Effect96PlayerSkillParser() {
    }
    //atk and possible rcv mult for 1 color when >= HP thresh
    Effect96PlayerSkillParser.prototype.parse = function (params) {
        //thresh,color, atkflag?, rcvflag?, mult. So far, all flags are 1,0 for only boosting atk
        //but other skills suggest 1,2 for both, or 0,2 for just rcv. Implementing as such
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableColor(params[1]);
        legacyDescription += " cards ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2] && params[4], params[3] && params[4]);
        legacyDescription += " when HP is at least ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = true;
        effect.colors.push(params[1]);
        //until problems arise, 94-97 assume atk only
        effect.lsse.atk = params[4] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect96PlayerSkillParser;
}());
var Effect97PlayerSkillParser = /** @class */ (function () {
    function Effect97PlayerSkillParser() {
    }
    //atk and possible rcv mult for 1 type when >= HP thresh
    Effect97PlayerSkillParser.prototype.parse = function (params) {
        //thresh,type, atkflag?, rcvflag?, mult. So far, all flags are 1,0 for only boosting atk
        //but other skills suggest 1,2 for both, or 0,2 for just rcv. Implementing as such
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "";
        legacyDescription += helper.getHumanReadableType(params[1]);
        legacyDescription += " types ";
        legacyDescription += helper.getHumanReadableMultipliers(0, params[2] && params[4], params[3] && params[4]);
        legacyDescription += " when HP is at least ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + "%.";
        var effect = new HpConditionalLeaderSkillEffect();
        effect.thresh = params[0];
        effect.direction = true;
        effect.typing.push(params[1]);
        //until problems arise, 94-97 assume atk only
        effect.lsse.atk = params[4] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect97PlayerSkillParser;
}());
var Effect98PlayerSkillParser = /** @class */ (function () {
    function Effect98PlayerSkillParser() {
    }
    //scaling atk mult with combos
    Effect98PlayerSkillParser.prototype.parse = function (params) {
        //mincombo, base mult, scale mult, max combo
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "All allies ";
        legacyDescription += helper.getHumanReadableNumber(params[1] / 100);
        legacyDescription += "x ATK at ";
        legacyDescription += helper.getHumanReadableNumber(params[0]);
        legacyDescription += " combos. +";
        legacyDescription += helper.getHumanReadableNumber(params[2] / 100);
        legacyDescription += "x for each additional, up to ";
        legacyDescription += helper.getHumanReadableNumber((params[1] + (params[3] - params[0]) * params[2]) / 100);
        legacyDescription += "x ATK at ";
        legacyDescription += helper.getHumanReadableNumber(params[3]);
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription + " combos.";
        var effect = new ComboCountLeaderSkillEffect();
        effect.minCombos = params[0];
        effect.maxStacks = params[3] - params[0];
        effect.baseLsse.atk = params[1] / 100;
        effect.stackLsse.atk = params[2] / 100;
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect98PlayerSkillParser;
}());
var Effect9PlayerSkillParser = /** @class */ (function () {
    function Effect9PlayerSkillParser() {
    }
    //single orb change, x to y. Old
    //in id, out id. Trailing 0 omit
    Effect9PlayerSkillParser.prototype.parse = function (params) {
        var helper = new PlayerSkillDescriptionHelper();
        var legacyDescription = "Changes ";
        legacyDescription += helper.getHumanReadableColor(params[0]);
        legacyDescription += " orbs to ";
        legacyDescription += helper.getHumanReadableColor(params[1] || 0); // OR returns first non-undef
        legacyDescription += " orbs.";
        var ret = new PlayerSkillParserResult();
        ret.legacyText = legacyDescription;
        var effect = new OrbChangePlayerSkillEffect();
        effect.onlyChange = [ColorAttribute[ColorAttribute[params[0]]]];
        var result = params[1];
        if (!result) {
            result = 0;
        }
        effect.results = [ColorAttribute[ColorAttribute[result]]];
        ret.parsedEffects.push(effect);
        return ret;
    };
    return Effect9PlayerSkillParser;
}());
var Searcher = /** @class */ (function () {
    function Searcher(errorReporter, model) {
        this.searchDelay = 0;
        this.batchSize = 100;
        this.searchId = 1;
        this.allCards = null;
        this.allSkills = null;
        this.model = null;
        this.model = model;
        this.setAllCards();
        this.setAllSkills();
    }
    Searcher.prototype.setAllCards = function () {
        var allCards = [];
        var ary = this.model.cards;
        for (var key in ary) {
            var value = ary[key];
            allCards.push(value);
        }
        this.allCards = allCards;
    };
    Searcher.prototype.setAllSkills = function () {
        var ret = {};
        var everySingleSkill = this.model.playerSkills;
        for (var i = 0; i < this.allCards.length; i++) {
            var c = this.allCards[i];
            if (c.activeSkillId) {
                ret[c.activeSkillId] = everySingleSkill[c.activeSkillId];
            }
            if (c.leaderSkillId) {
                ret[c.leaderSkillId] = everySingleSkill[c.leaderSkillId];
            }
        }
        var skillsInArray = [];
        for (var id in ret) {
            skillsInArray.push(ret[id]);
        }
        _.sortBy(skillsInArray, function (x) { return x.id; });
        this.allSkills = skillsInArray;
    };
    Searcher.prototype.searchInternal = function (ary, searchCriteria, onResult, onComplete) {
        var self = this;
        if (!self.searchId) {
            throw "This doesn't work";
        }
        self.searchId++;
        var expectedSearchId = self.searchId;
        var indx = 0;
        var lastTime = new Date().getTime();
        function continueSearch() {
            if (expectedSearchId != self.searchId) {
                return;
            }
            var nowTime = new Date().getTime();
            var elapsed = nowTime - lastTime;
            lastTime = nowTime;
            // Throttle the batch size when things seem to be going slowly
            var thisBatchSize = self.batchSize;
            if (elapsed > 100) {
                thisBatchSize = Math.ceil(thisBatchSize * 100 / elapsed);
            }
            for (var i = 0; i < thisBatchSize; i++) {
                var obj = ary[indx++];
                if (searchCriteria(obj)) {
                    onResult(obj);
                }
                if (indx >= ary.length) {
                    onComplete();
                    return;
                }
            }
            setTimeout(continueSearch, self.searchDelay);
        }
        setTimeout(continueSearch, self.searchDelay);
    };
    Searcher.prototype.searchCards = function (searchCriteria, onResult, onComplete) {
        this.searchInternal(this.allCards, searchCriteria, onResult, onComplete);
    };
    Searcher.prototype.searchSkills = function (searchCriteria, onResult, onComplete) {
        this.searchInternal(this.allSkills, searchCriteria, onResult, onComplete);
    };
    return Searcher;
}());
//# sourceMappingURL=tsc.js.map