import { A as ActionId, aG as UnitReference_Type, aH as UnitReference, bV as SavedTalents, N as Glyphs, D as DruidMajorGlyph, a as DruidMinorGlyph, fc as RestorationDruid_Options, F as Consumes, dS as Potions, dN as Flask, dQ as Food, aE as RaidBuffs, bc as TristateEffect, E as IndividualBuffs, x as PartyBuffs, aF as Debuffs, a2 as Stat, G as Stats, L as APLRotation, S as Spec, bo as specNames, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { m as makeSpecOptionsBooleanIconInput, b as makePresetGear, r as registerSpecConfig, T as TankAssignment, I as IndividualSimUI } from "./preset_utils-bab0e607.chunk.js";
const SelfInnervate = makeSpecOptionsBooleanIconInput({
  fieldName: "innervateTarget",
  id: ActionId.fromSpellId(29166),
  extraCssClasses: [
    "within-raid-sim-hide"
  ],
  getValue: (player) => player.getSpecOptions().innervateTarget?.type == UnitReference_Type.Player,
  setValue: (eventID, player, newValue) => {
    const newOptions = player.getSpecOptions();
    newOptions.innervateTarget = UnitReference.create({
      type: newValue ? UnitReference_Type.Player : UnitReference_Type.Unknown,
      index: 0
    });
    player.setSpecOptions(eventID, newOptions);
  }
});
const items$4 = [
  {
    id: 37149,
    enchant: 3819,
    gems: [
      41401,
      40051
    ]
  },
  {
    id: 42339,
    gems: [
      40026
    ]
  },
  {
    id: 37673,
    enchant: 3809,
    gems: [
      39998
    ]
  },
  {
    id: 41610,
    enchant: 3831
  },
  {
    id: 42102,
    enchant: 3832
  },
  {
    id: 37361,
    enchant: 2332,
    gems: [
      0
    ]
  },
  {
    id: 42113,
    enchant: 3246,
    gems: [
      0
    ]
  },
  {
    id: 37643,
    enchant: 3601,
    gems: [
      39998
    ]
  },
  {
    id: 37791,
    enchant: 3719
  },
  {
    id: 44202,
    enchant: 3232,
    gems: [
      39998
    ]
  },
  {
    id: 37694
  },
  {
    id: 37192
  },
  {
    id: 37111
  },
  {
    id: 37657
  },
  {
    id: 37169,
    enchant: 3834
  },
  {
    id: 40699
  },
  {
    id: 33508
  }
];
const PreraidGear = {
  items: items$4
};
const items$3 = [
  {
    id: 44007,
    enchant: 3819,
    gems: [
      41401,
      40017
    ]
  },
  {
    id: 40071
  },
  {
    id: 39719,
    enchant: 3809,
    gems: [
      39998
    ]
  },
  {
    id: 40723,
    enchant: 3859
  },
  {
    id: 44002,
    enchant: 3832,
    gems: [
      39998,
      40026
    ]
  },
  {
    id: 44008,
    enchant: 2332,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 40460,
    enchant: 3246,
    gems: [
      40017,
      0
    ]
  },
  {
    id: 40561,
    enchant: 3601,
    gems: [
      39998
    ]
  },
  {
    id: 40379,
    enchant: 3719,
    gems: [
      39998,
      40017
    ]
  },
  {
    id: 40558,
    enchant: 3606
  },
  {
    id: 40719
  },
  {
    id: 40375
  },
  {
    id: 37111
  },
  {
    id: 40432
  },
  {
    id: 40395,
    enchant: 3834
  },
  {
    id: 39766
  },
  {
    id: 40342
  }
];
const P1Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 46184,
    enchant: 3819,
    gems: [
      41401,
      39998
    ]
  },
  {
    id: 45243,
    gems: [
      39998
    ]
  },
  {
    id: 46187,
    enchant: 3809,
    gems: [
      39998
    ]
  },
  {
    id: 45618,
    enchant: 3831,
    gems: [
      39998
    ]
  },
  {
    id: 45519,
    enchant: 3832,
    gems: [
      40017,
      39998,
      40026
    ]
  },
  {
    id: 45446,
    enchant: 2332,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 46183,
    enchant: 3246,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 45616,
    gems: [
      39998,
      39998,
      39998
    ]
  },
  {
    id: 46185,
    enchant: 3719,
    gems: [
      40026,
      39998
    ]
  },
  {
    id: 45135,
    enchant: 3606,
    gems: [
      39998,
      40017
    ]
  },
  {
    id: 45495,
    gems: [
      40017
    ]
  },
  {
    id: 45946,
    gems: [
      40017
    ]
  },
  {
    id: 45703
  },
  {
    id: 45535
  },
  {
    id: 46017,
    enchant: 3834
  },
  {
    id: 45271
  },
  {
    id: 40342
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 48134,
    enchant: 3819,
    gems: [
      41401,
      40133
    ]
  },
  {
    id: 45243,
    gems: [
      40155
    ]
  },
  {
    id: 48137,
    enchant: 3809,
    gems: [
      40155
    ]
  },
  {
    id: 46977,
    enchant: 3859,
    gems: [
      40155
    ]
  },
  {
    id: 46993,
    enchant: 3832,
    gems: [
      40133,
      40113,
      40155
    ]
  },
  {
    id: 47066,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 48133,
    enchant: 3246,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47145,
    gems: [
      40155,
      40113,
      40113
    ]
  },
  {
    id: 48135,
    enchant: 3719,
    gems: [
      40155,
      40155
    ]
  },
  {
    id: 47097,
    enchant: 3606,
    gems: [
      40155,
      40155
    ]
  },
  {
    id: 45495,
    gems: [
      40113
    ]
  },
  {
    id: 47224,
    gems: [
      40155
    ]
  },
  {
    id: 47059
  },
  {
    id: 45535
  },
  {
    id: 47206,
    enchant: 3834
  },
  {
    id: 47958,
    gems: [
      40155
    ]
  },
  {
    id: 40342
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 51302,
    enchant: 3819,
    gems: [
      41401,
      40113
    ]
  },
  {
    id: 50609,
    gems: [
      40113
    ]
  },
  {
    id: 51304,
    enchant: 3809,
    gems: [
      40113
    ]
  },
  {
    id: 50668,
    enchant: 3859,
    gems: [
      40113
    ]
  },
  {
    id: 50717,
    enchant: 3832,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 50630,
    enchant: 2332,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 51301,
    enchant: 3246,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 50705,
    gems: [
      40155,
      40113,
      40113
    ]
  },
  {
    id: 51303,
    enchant: 3719,
    gems: [
      40113,
      40155
    ]
  },
  {
    id: 50699,
    enchant: 3606,
    gems: [
      40133,
      40113
    ]
  },
  {
    id: 50400,
    gems: [
      40113
    ]
  },
  {
    id: 50636,
    gems: [
      40155
    ]
  },
  {
    id: 47432
  },
  {
    id: 50366
  },
  {
    id: 46017,
    enchant: 3834
  },
  {
    id: 50635
  },
  {
    id: 50454
  }
];
const P4Gear = {
  items
};
const PRERAID_PRESET = makePresetGear("PreRaid", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET = makePresetGear("P3 Preset", P3Gear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const CelestialFocusTalents = {
  name: "Celestial Focus",
  data: SavedTalents.create({
    talentsString: "05320031103--230023312131502331050313051",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfWildGrowth,
      major2: DruidMajorGlyph.GlyphOfSwiftmend,
      major3: DruidMajorGlyph.GlyphOfNourish,
      minor2: DruidMinorGlyph.GlyphOfUnburdenedRebirth,
      minor3: DruidMinorGlyph.GlyphOfTheWild,
      minor1: DruidMinorGlyph.GlyphOfDash
    })
  })
};
const ThiccRestoTalents = {
  name: "Thicc Resto",
  data: SavedTalents.create({
    talentsString: "05320001--230023312331502531053313051",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfWildGrowth,
      major2: DruidMajorGlyph.GlyphOfSwiftmend,
      major3: DruidMajorGlyph.GlyphOfNourish,
      minor2: DruidMinorGlyph.GlyphOfUnburdenedRebirth,
      minor3: DruidMinorGlyph.GlyphOfTheWild,
      minor1: DruidMinorGlyph.GlyphOfDash
    })
  })
};
const DefaultOptions = RestorationDruid_Options.create({
  innervateTarget: UnitReference.create()
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.RunicManaPotion,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast
});
const DefaultRaidBuffs = RaidBuffs.create({
  arcaneBrilliance: true,
  bloodlust: true,
  divineSpirit: true,
  giftOfTheWild: TristateEffect.TristateEffectImproved,
  icyTalons: true,
  moonkinAura: TristateEffect.TristateEffectImproved,
  leaderOfThePack: TristateEffect.TristateEffectImproved,
  powerWordFortitude: TristateEffect.TristateEffectImproved,
  sanctifiedRetribution: true,
  strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
  trueshotAura: true,
  wrathOfAirTotem: true
});
const DefaultIndividualBuffs = IndividualBuffs.create({
  blessingOfKings: true,
  blessingOfMight: TristateEffect.TristateEffectImproved,
  blessingOfWisdom: TristateEffect.TristateEffectImproved,
  vampiricTouch: true
});
const DefaultPartyBuffs = PartyBuffs.create({
  heroicPresence: false
});
const DefaultDebuffs = Debuffs.create({
  bloodFrenzy: true,
  ebonPlaguebringer: true,
  faerieFire: TristateEffect.TristateEffectImproved,
  heartOfTheCrusader: true,
  judgementOfWisdom: true,
  shadowMastery: true,
  sunderArmor: true,
  totemOfWrath: true
});
const OtherDefaults = {
  distanceFromTarget: 18
};
const SPEC_CONFIG = registerSpecConfig(Spec.SpecRestorationDruid, {
  cssClass: "restoration-druid-sim-ui",
  cssScheme: "druid",
  knownIssues: [],
  epStats: [
    Stat.StatIntellect,
    Stat.StatSpirit,
    Stat.StatSpellPower,
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
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatMP5,
    Stat.StatResilience
  ],
  defaults: {
    gear: P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.38,
      [Stat.StatSpirit]: 0.34,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellCrit]: 0.69,
      [Stat.StatSpellHaste]: 0.77,
      [Stat.StatMP5]: 0
    }),
    consumes: DefaultConsumes,
    talents: CelestialFocusTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: DefaultRaidBuffs,
    partyBuffs: DefaultPartyBuffs,
    individualBuffs: DefaultIndividualBuffs,
    debuffs: DefaultDebuffs,
    other: OtherDefaults
  },
  playerIconInputs: [
    SelfInnervate
  ],
  includeBuffDebuffInputs: [],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      CelestialFocusTalents,
      ThiccRestoTalents
    ],
    rotations: [],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET,
      P4_PRESET
    ]
  },
  autoRotation: (_player) => {
    return APLRotation.create();
  },
  raidSimPresets: [
    {
      spec: Spec.SpecRestorationDruid,
      tooltip: specNames[Spec.SpecRestorationDruid],
      defaultName: "Restoration",
      iconUrl: getSpecIcon(Class.ClassDruid, 2),
      talents: CelestialFocusTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceNightElf,
        [Faction.Horde]: Race.RaceTauren
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
class RestorationDruidSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  RestorationDruidSimUI as R
};
//# sourceMappingURL=sim-0c5807e1.chunk.js.map
