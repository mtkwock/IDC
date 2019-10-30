Extension Written by Scarlet#1115 on Discord.

**Please do not redistribute yet... This is stil in Beta.**

### Installation

1. Download/clone folder from https://github.com/mtkwock/IDC
2. In Chrome, open chrome://extensions, ensure Developer Mode is on (top right toggle).
3. In the top left, click "Load unpacked"
4. Navigate to the (uncompressed) folder of the download from GitHub
5. Click "Select" when in the folder.
6. Navigate to https://ilmina.com/#/ShowMeTheRopes
7. This should begin the app.

### Updating
1. Navigate into folder and `git pull`
2. In chrome://extensions, click the Refresh button in the installed app.
3. The next time you load this page, you should get this.

### Usage

#### Monster Editing

1. Click on the monster you wish to change on the team.  This should bring you to the Monster editing tab if you weren't already there.
2. On the left pane in the Monster field, change the ID to the monster you want.  You can use fuzzy searching for both the Monster and Inherit.
  * `fujin` will look for monsters with "Fujin" in their name.
  * `megakali` will prioritize Mega Kali because "mega" and "kali" are both in the name.
  * `gx sonia` will find monsters who match Green/None and have Sonia in their name.
  * `equip Durandalf` will find monsters that match Durandalf and prioritize their equip forms if they have any.
  * `ny Yomi`/`vonia` will search New Years and Valentines respectively.
3. The left pane will control all aspects of the monster.
  * I hope these are self-explanatory.  If not, please let me know.

#### Team Editing

You have the option to use a pdchu-like syntax to build your team.  You can also export your team as a pdchu format.

1P Yoh Team
```
yoh (equip trojan) | sa2 / ggzela (equip yoh) [dek * 2, sdr, sdr] | sa5 * 2/ odin dragon / gxfujin [sdr *6 ] / yoh (equip yoh) | sa2
```

2P Kaede Farming team
```
kaede / zeus-dios * 3 / raguel; kaede / zeus-dios * 3 / whaledor
```

If you click the Title area above the team, you can edit your team's name.  This is also used to save your team when going into the `Save/Load` tab.

If you click the `Description` tab underneath your team, you can edit a description.  This Description is saved when saving your team in the `Save/Load` tab.

By clicking `Save Team Screenshot`, you download a screenshot a part of the screen which shows your team and either `Stats` or `Description` depending on what you have selected.

### Dungeon Editing

**TODO**

### Damage Calculation

**TODO**

### View Monster Stats

## Command Editor syntax

### Start with:

1. `X`,`L`,`B`,`C` - A shape to choose the colors in.
2. `R`    - A row.  Can add any valid number of orbs after such as
   `R10`, `R11`, `R15`. Defaults to 6 on a 6x5 board.
4. \##   - Size of this Orb match. Must be between 3 and board size inclusive.
5. _ - Going straight to the attributes will assume a 3-match.

### Choose attributes

  * Must be at least one from "rgbldhpmjou", doing multiple will cause multiple of these to occur. e.g. 4rr will make 2x 4-matches of Red.
    * fire **R**ed
    * water **B**lue
    * wood **G**reen 
    * **L**ight
    * **D**ark
    * **H**eart
    * **P**oison
    * **M**ortal poison
    * **J**ammer
    * b**O**mb
    * **U**ncolored
  * Add Enhance
    * e#      - This will cause # orbs to be enhanced.

#### Examples:

|Input|Output|
|-----|---|
|`r`| Make a 3-match of reds. |
|`rrrr`| Make 4x 3-match of reds. |
|`4hle1`|Make a TPA of each heal and light with 1 enhanced orb.|
|`Rd`| Make a Row of 6 (on 6x5) dark orbs. |
|`R9rb`|Make a Row with 9 orbs of each red and blue.|
|`Bhg ggh`|Make a Box of hearts and greens, then two green 3-matches and one heart 3-match.|
|`Che1`|Make a Column of hearts with 1 enhanced orb.|
|`R30d`|Make a Roard with 30 darks.|


### Deleting combos
Start with:

 * `DA`  - Delete ALL combos of the given attribute(s).
 * `Da`  - Same as above.
 * `D`   - Delete combos of a given attribute and a give position.

Follow up with attributes to delete.

 * Must be at least one from "rgbldhpmjou", doing multiple will cause multiple deletions to occur.
 * If using DA/Da, you can use DAa/Daa to delete ALL combos that you've made.
 * Add an optional index to delete.
   * \##  - Will delete the #th combo, 0 or 1 indexed depending on settings.
   * -# - Will delete the #th combo from the end.
   * _  - No input will default to deleting the last combo.

#### Examples

|Input|Output|
|-----|---|
|`Dr`| Delete the last Red combo |
|`Dab`| Delete All Light and Dark combos. |
|`Dald`|Make a TPA of each heal and light with 1 enhanced orb.|
|`Du0`| Delete the first Uncolored Combo. (Invalid if Indexed 1) |
|`Dj1`|Delete the second Jammer combo. (First if Indexed 1)|
|`Dg-2`| Delete the 2nd from last Green combo.|
|`Drb2`| Delete, from reds and blues, the 3rd combo.|
|`Drr`| Delete the last TWO Red combos.|

