import { a8 as makeSpecOptionsEnumIconInput, cL as ShadowPriest_Options_Armor, A as ActionId, r as registerSpecConfig, p as Stat, q as Stats, aj as SPELL_HIT_RATING_PER_HIT_CHANCE, l as PartyBuffs, aw as ReplenishmentBuff, M as MeleeHasteBuff, s as MeleeCritBuff, ax as MP5Buff, t as AttackPowerPercentBuff, u as AttackPowerBuff, a3 as StaminaBuff, y as TankAssignment, cM as ChannelClipDelay, J as nibelungAverageCasts, a as Spec, K as specNames, L as getSpecIcon, N as Class, F as Faction, O as Race, Q as IndividualSimUI } from "./preset_utils-4f0e8fc3.chunk.js";
import { P as P4_PRESET, D as DefaultConsumes, S as StandardTalents, a as DefaultOptions, b as DefaultRaidBuffs, c as DefaultIndividualBuffs, d as DefaultDebuffs, O as OtherDefaults, E as EnlightenmentTalents, R as ROTATION_PRESET_DEFAULT, e as ROTATION_PRESET_AOE24, f as ROTATION_PRESET_AOE4PLUS, g as PRERAID_PRESET, h as P1_PRESET, i as P2_PRESET, j as P3_PRESET } from "./presets-3a297aa5.chunk.js";
const ArmorInput = makeSpecOptionsEnumIconInput({
  fieldName: "armor",
  values: [
    { value: ShadowPriest_Options_Armor.NoArmor, tooltip: "No Inner Fire" },
    { actionId: ActionId.fromSpellId(48168), value: ShadowPriest_Options_Armor.InnerFire }
  ]
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecShadowPriest, {
  cssClass: "shadow-priest-sim-ui",
  cssScheme: "priest",
  knownIssues: [],
  epStats: [
    Stat.StatIntellect,
    Stat.StatSpirit,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatMP5
  ],
  epReferenceStat: Stat.StatSpellPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatMana,
    Stat.StatStamina,
    Stat.StatIntellect,
    Stat.StatSpirit,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatMP5,
    Stat.StatResilience
  ],
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    stats = stats.addStat(Stat.StatSpellHit, player.getTalents().shadowFocus * 1 * SPELL_HIT_RATING_PER_HIT_CHANCE);
    return {
      talents: stats
    };
  },
  defaults: {
    gear: P4_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.11,
      [Stat.StatSpirit]: 0.47,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellHit]: 0.87,
      [Stat.StatSpellCrit]: 0.74,
      [Stat.StatSpellHaste]: 1.65,
      [Stat.StatMP5]: 0
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: DefaultRaidBuffs,
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: DefaultIndividualBuffs,
    debuffs: DefaultDebuffs,
    other: OtherDefaults
  },
  playerIconInputs: [
    ArmorInput
  ],
  includeBuffDebuffInputs: [
    ReplenishmentBuff,
    MeleeHasteBuff,
    MeleeCritBuff,
    MP5Buff,
    AttackPowerPercentBuff,
    AttackPowerBuff,
    StaminaBuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment,
      ChannelClipDelay,
      nibelungAverageCasts
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      StandardTalents,
      EnlightenmentTalents
    ],
    rotations: [
      ROTATION_PRESET_DEFAULT,
      ROTATION_PRESET_AOE24,
      ROTATION_PRESET_AOE4PLUS
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET,
      P4_PRESET
    ]
  },
  autoRotation: (player) => {
    const numTargets = player.sim.encounter.targets.length;
    if (numTargets > 4) {
      return ROTATION_PRESET_AOE4PLUS.rotation.rotation;
    } else if (numTargets > 1) {
      return ROTATION_PRESET_AOE24.rotation.rotation;
    } else {
      return ROTATION_PRESET_DEFAULT.rotation.rotation;
    }
  },
  raidSimPresets: [
    {
      spec: Spec.SpecShadowPriest,
      tooltip: specNames[Spec.SpecShadowPriest],
      defaultName: "Shadow",
      iconUrl: getSpecIcon(Class.ClassPriest, 2),
      talents: StandardTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceDwarf,
        [Faction.Horde]: Race.RaceUndead
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_PRESET.gear,
          2: P2_PRESET.gear,
          3: P3_PRESET.gear,
          4: P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET.gear,
          2: P2_PRESET.gear,
          3: P3_PRESET.gear,
          4: P4_PRESET.gear
        }
      }
    }
  ]
});
class ShadowPriestSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  ShadowPriestSimUI as S
};
//# sourceMappingURL=sim-9f790acd.chunk.js.map
