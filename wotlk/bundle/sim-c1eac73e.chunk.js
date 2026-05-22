import { eo as ShamanShield, A as ActionId, T as TypedEvent, bV as SavedTalents, N as Glyphs, l as ShamanMajorGlyph, m as ShamanMinorGlyph, fd as RestorationShaman_Options, F as Consumes, dS as Potions, dN as Flask, dQ as Food, a2 as Stat, G as Stats, b6 as SPELL_CRIT_RATING_PER_CRIT_CHANCE, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, L as APLRotation, S as Spec, bo as specNames, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-98aea73c.chunk.js";
import { t as makeSpecOptionsEnumIconInput, a as makeSpecOptionsNumberInput, b as makePresetGear, r as registerSpecConfig, T as TankAssignment, I as IndividualSimUI } from "./preset_utils-cb87a65c.chunk.js";
import { T as TotemsSection } from "./totem_inputs-d57b1e67.chunk.js";
const ShamanShieldInput = makeSpecOptionsEnumIconInput({
  fieldName: "shield",
  values: [
    { value: ShamanShield.NoShield, tooltip: "No Shield" },
    { actionId: ActionId.fromSpellId(57960), value: ShamanShield.WaterShield },
    { actionId: ActionId.fromSpellId(49281), value: ShamanShield.LightningShield }
  ]
});
const TriggerEarthShield = makeSpecOptionsNumberInput({
  fieldName: "earthShieldPPM",
  label: "Earth Shield PPM",
  labelTooltip: "How many times Earth Shield should be triggered per minute.",
  showWhen: (player) => player.getTalents().earthShield,
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.rotationChangeEmitter, player.talentsChangeEmitter])
});
const items$4 = [
  {
    id: 42555,
    enchant: 3820,
    gems: [
      41401,
      40017
    ]
  },
  {
    id: 40681
  },
  {
    id: 37875,
    enchant: 3838,
    gems: [
      40017
    ]
  },
  {
    id: 37291,
    enchant: 3859
  },
  {
    id: 44180,
    enchant: 2381
  },
  {
    id: 37788,
    enchant: 3758,
    gems: [
      0
    ]
  },
  {
    id: 37623,
    enchant: 3604,
    gems: [
      0
    ]
  },
  {
    id: 40693,
    gems: [
      40051,
      0
    ]
  },
  {
    id: 37791,
    enchant: 3721
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      40105
    ]
  },
  {
    id: 44283
  },
  {
    id: 37694
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
    id: 40700,
    enchant: 1128
  },
  {
    id: 40709
  }
];
const PreraidGear = {
  items: items$4
};
const items$3 = [
  {
    id: 40510,
    enchant: 3820,
    gems: [
      41401,
      39998
    ]
  },
  {
    id: 44662,
    gems: [
      40051
    ]
  },
  {
    id: 40513,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 44005,
    enchant: 3831,
    gems: [
      40027
    ]
  },
  {
    id: 40508,
    enchant: 2381,
    gems: [
      39998,
      40051
    ]
  },
  {
    id: 40209,
    enchant: 2332,
    gems: [
      0
    ]
  },
  {
    id: 40564,
    enchant: 3246,
    gems: [
      0
    ]
  },
  {
    id: 40327,
    gems: [
      39998
    ]
  },
  {
    id: 40512,
    enchant: 3721,
    gems: [
      39998,
      40027
    ]
  },
  {
    id: 39734,
    enchant: 3244
  },
  {
    id: 40399
  },
  {
    id: 40375
  },
  {
    id: 37111
  },
  {
    id: 40685
  },
  {
    id: 40395,
    enchant: 3834
  },
  {
    id: 40401,
    enchant: 1128
  },
  {
    id: 40709
  }
];
const P1Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 46201,
    enchant: 3820,
    gems: [
      41401,
      40027
    ]
  },
  {
    id: 45443,
    gems: [
      40027
    ]
  },
  {
    id: 46204,
    enchant: 3810,
    gems: [
      45883
    ]
  },
  {
    id: 45486,
    enchant: 3831,
    gems: [
      40051
    ]
  },
  {
    id: 45867,
    enchant: 2381,
    gems: [
      40051,
      39998
    ]
  },
  {
    id: 45460,
    enchant: 2332,
    gems: [
      40027,
      0
    ]
  },
  {
    id: 46199,
    enchant: 3246,
    gems: [
      40051,
      0
    ]
  },
  {
    id: 45151,
    gems: [
      39998
    ]
  },
  {
    id: 46202,
    enchant: 3721,
    gems: [
      39998,
      40027
    ]
  },
  {
    id: 45615,
    enchant: 3232,
    gems: [
      39998,
      40027
    ]
  },
  {
    id: 45614,
    gems: [
      40051
    ]
  },
  {
    id: 46046,
    gems: [
      40051
    ]
  },
  {
    id: 45535
  },
  {
    id: 45466
  },
  {
    id: 46017,
    enchant: 3834
  },
  {
    id: 45470,
    enchant: 1128,
    gems: [
      40027
    ]
  },
  {
    id: 45114
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 46201,
    enchant: 3820,
    gems: [
      41401,
      40134
    ]
  },
  {
    id: 47468,
    gems: [
      40128
    ]
  },
  {
    id: 46204,
    enchant: 3810,
    gems: [
      40155
    ]
  },
  {
    id: 47551,
    enchant: 3831,
    gems: [
      40155
    ]
  },
  {
    id: 46198,
    enchant: 2381,
    gems: [
      40155,
      40155
    ]
  },
  {
    id: 45460,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 46199,
    enchant: 3246,
    gems: [
      40128,
      0
    ]
  },
  {
    id: 47426,
    gems: [
      40155,
      40155,
      40155
    ]
  },
  {
    id: 47479,
    enchant: 3721,
    gems: [
      40155,
      40155,
      40155
    ]
  },
  {
    id: 47456,
    enchant: 3232,
    gems: [
      40155,
      40155
    ]
  },
  {
    id: 45614,
    gems: [
      40128
    ]
  },
  {
    id: 47439,
    gems: [
      40128
    ]
  },
  {
    id: 45535
  },
  {
    id: 47059
  },
  {
    id: 46017,
    enchant: 3834
  },
  {
    id: 47448,
    enchant: 1128,
    gems: [
      40128
    ]
  },
  {
    id: 47665
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 51247,
    enchant: 3820,
    gems: [
      41401,
      40155
    ]
  },
  {
    id: 50724,
    gems: [
      40128
    ]
  },
  {
    id: 51245,
    enchant: 3810,
    gems: [
      40179
    ]
  },
  {
    id: 50628,
    enchant: 3831,
    gems: [
      40128
    ]
  },
  {
    id: 51249,
    enchant: 2381,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 50687,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 50703,
    enchant: 3246,
    gems: [
      40128,
      40128,
      0
    ]
  },
  {
    id: 50613,
    gems: [
      40128,
      40128,
      40128
    ]
  },
  {
    id: 51246,
    enchant: 3721,
    gems: [
      40155,
      40128
    ]
  },
  {
    id: 50699,
    enchant: 3232,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 50664,
    gems: [
      40128
    ]
  },
  {
    id: 50400,
    gems: [
      40128
    ]
  },
  {
    id: 50366
  },
  {
    id: 47059
  },
  {
    id: 46017,
    enchant: 3834
  },
  {
    id: 50616,
    enchant: 1128,
    gems: [
      40128
    ]
  },
  {
    id: 47665
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
const TankHealingTalents = {
  name: "Tank Healing",
  data: SavedTalents.create({
    talentsString: "-30205033-05005331335010501122331251",
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfEarthlivingWeapon,
      major2: ShamanMajorGlyph.GlyphOfEarthShield,
      major3: ShamanMajorGlyph.GlyphOfLesserHealingWave,
      minor2: ShamanMinorGlyph.GlyphOfWaterShield,
      minor1: ShamanMinorGlyph.GlyphOfRenewedLife,
      minor3: ShamanMinorGlyph.GlyphOfGhostWolf
    })
  })
};
const RaidHealingTalents = {
  name: "Raid Healing",
  data: SavedTalents.create({
    talentsString: "-3020503-50005331335310501122331251",
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfChainHeal,
      major2: ShamanMajorGlyph.GlyphOfEarthShield,
      major3: ShamanMajorGlyph.GlyphOfEarthlivingWeapon,
      minor2: ShamanMinorGlyph.GlyphOfWaterShield,
      minor1: ShamanMinorGlyph.GlyphOfRenewedLife,
      minor3: ShamanMinorGlyph.GlyphOfGhostWolf
    })
  })
};
const DefaultOptions = RestorationShaman_Options.create({
  shield: ShamanShield.WaterShield,
  earthShieldPPM: 0
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.RunicManaInjector,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecRestorationShaman, {
  cssClass: "restoration-shaman-sim-ui",
  cssScheme: "shaman",
  knownIssues: [],
  warnings: [],
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
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    stats = stats.addStat(Stat.StatSpellCrit, player.getTalents().tidalMastery * 1 * SPELL_CRIT_RATING_PER_CRIT_CHANCE);
    return {
      talents: stats
    };
  },
  defaults: {
    gear: P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.22,
      [Stat.StatSpirit]: 0.05,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellCrit]: 0.67,
      [Stat.StatSpellHaste]: 1.29,
      [Stat.StatMP5]: 0.08
    }),
    consumes: DefaultConsumes,
    talents: RaidHealingTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      arcaneBrilliance: true,
      divineSpirit: true,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      moonkinAura: TristateEffect.TristateEffectImproved,
      sanctifiedRetribution: true
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfWisdom: 2,
      vampiricTouch: true
    }),
    debuffs: Debuffs.create({
      faerieFire: TristateEffect.TristateEffectImproved,
      judgementOfWisdom: true,
      misery: true,
      curseOfElements: true,
      shadowMastery: true
    })
  },
  playerIconInputs: [
    ShamanShieldInput
  ],
  includeBuffDebuffInputs: [],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TriggerEarthShield,
      TankAssignment
    ]
  },
  customSections: [
    TotemsSection
  ],
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      RaidHealingTalents,
      TankHealingTalents
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
      spec: Spec.SpecRestorationShaman,
      tooltip: specNames[Spec.SpecRestorationShaman],
      defaultName: "Restoration",
      iconUrl: getSpecIcon(Class.ClassShaman, 2),
      talents: RaidHealingTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceDraenei,
        [Faction.Horde]: Race.RaceOrc
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
class RestorationShamanSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  RestorationShamanSimUI as R
};
//# sourceMappingURL=sim-c1eac73e.chunk.js.map
