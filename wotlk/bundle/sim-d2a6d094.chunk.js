import { eG as PaladinAura, A as ActionId, eS as PaladinSeal, eH as PaladinJudgement, bV as SavedTalents, N as Glyphs, P as PaladinMajorGlyph, d as PaladinMinorGlyph, fg as RetributionPaladin_Options, F as Consumes, dS as Potions, dL as Conjured, dN as Flask, dQ as Food, a2 as Stat, a1 as PseudoStat, G as Stats, T as TypedEvent, a9 as EXPERTISE_PER_QUARTER_PERCENT_REDUCTION, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { t as makeSpecOptionsEnumIconInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, y as ReplenishmentBuff, T as TankAssignment, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-ebb2fdc9.chunk.js";
const AuraSelection = makeSpecOptionsEnumIconInput({
  fieldName: "aura",
  values: [
    { value: PaladinAura.NoPaladinAura, tooltip: "No Aura" },
    { actionId: ActionId.fromSpellId(54043), value: PaladinAura.RetributionAura }
  ]
});
const StartingSealSelection = makeSpecOptionsEnumIconInput({
  fieldName: "seal",
  values: [
    { actionId: ActionId.fromSpellId(42463), value: PaladinSeal.Vengeance },
    { actionId: ActionId.fromSpellId(20154), value: PaladinSeal.Righteousness },
    {
      actionId: ActionId.fromSpellId(20424),
      value: PaladinSeal.Command,
      showWhen: (player) => player.getTalents().sealOfCommand
    }
  ],
  changeEmitter: (player) => player.changeEmitter
});
const JudgementSelection = makeSpecOptionsEnumIconInput({
  fieldName: "judgement",
  values: [
    { actionId: ActionId.fromSpellId(53408), value: PaladinJudgement.JudgementOfWisdom },
    { actionId: ActionId.fromSpellId(20271), value: PaladinJudgement.JudgementOfLight }
  ]
});
const items$5 = [
  {
    id: 41386,
    enchant: 3817,
    gems: [
      41398,
      40022
    ]
  },
  {
    id: 40678
  },
  {
    id: 34388,
    enchant: 3875,
    gems: [
      39996,
      40037
    ]
  },
  {
    id: 37647,
    enchant: 3605
  },
  {
    id: 39633,
    enchant: 3832,
    gems: [
      39996,
      40038
    ]
  },
  {
    id: 41355,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 39634,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40694,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 37193,
    enchant: 3326,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 44297,
    enchant: 3606
  },
  {
    id: 40586
  },
  {
    id: 37685
  },
  {
    id: 42987
  },
  {
    id: 40684
  },
  {
    id: 37852,
    enchant: 3789
  },
  {},
  {
    id: 37574
  }
];
const PreraidGear = {
  items: items$5
};
const items$4 = [
  {
    id: 44006,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 44664,
    gems: [
      42142
    ]
  },
  {
    id: 40578,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 40403,
    enchant: 3605
  },
  {
    id: 40574,
    enchant: 3832,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40541,
    enchant: 3604,
    gems: [
      0
    ]
  },
  {
    id: 40278,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 44011,
    enchant: 3823,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 40075
  },
  {
    id: 40474
  },
  {
    id: 42987
  },
  {
    id: 40431
  },
  {
    id: 40384,
    enchant: 3789
  },
  {},
  {
    id: 42852
  }
];
const P1Gear = {
  items: items$4
};
const items$3 = [
  {
    id: 45472,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 45517,
    gems: [
      39996
    ]
  },
  {
    id: 45245,
    enchant: 3808,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 45461,
    enchant: 3605,
    gems: [
      39996
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      39996,
      39996,
      39996
    ]
  },
  {
    id: 45663,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 45444,
    enchant: 3604,
    gems: [
      39996,
      39996,
      0
    ]
  },
  {
    id: 46095,
    gems: [
      42142,
      42142,
      42142
    ]
  },
  {
    id: 45134,
    enchant: 3823,
    gems: [
      39996,
      39996,
      39996
    ]
  },
  {
    id: 45599,
    enchant: 3606,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 45608,
    gems: [
      39996
    ]
  },
  {
    id: 45534,
    gems: [
      39996
    ]
  },
  {
    id: 45609
  },
  {
    id: 42987
  },
  {
    id: 45516,
    enchant: 3789,
    gems: [
      39996,
      39996
    ]
  },
  {},
  {
    id: 42853
  }
];
const P2Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 48614,
    enchant: 3817,
    gems: [
      41398,
      40142
    ]
  },
  {
    id: 47110,
    gems: [
      40142
    ]
  },
  {
    id: 48612,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47548,
    enchant: 3605,
    gems: [
      40111
    ]
  },
  {
    id: 48616,
    enchant: 3832,
    gems: [
      49110,
      40111
    ]
  },
  {
    id: 47155,
    enchant: 3845,
    gems: [
      40111,
      40111,
      0
    ]
  },
  {
    id: 48615,
    enchant: 3604,
    gems: [
      40142,
      0
    ]
  },
  {
    id: 47002,
    gems: [
      40111,
      40111,
      40111
    ]
  },
  {
    id: 47132,
    enchant: 3823,
    gems: [
      42142,
      42142,
      42142
    ]
  },
  {
    id: 47154,
    enchant: 3606,
    gems: [
      40142,
      40111
    ]
  },
  {
    id: 47075,
    gems: [
      40111
    ]
  },
  {
    id: 46966,
    gems: [
      40142
    ]
  },
  {
    id: 47131
  },
  {
    id: 42987
  },
  {
    id: 47520,
    enchant: 3789,
    gems: [
      40111,
      40111
    ]
  },
  {},
  {
    id: 47661
  }
];
const P3MaceGear = {
  items: items$2
};
const items$1 = [
  {
    id: 51277,
    enchant: 3817,
    gems: [
      41398,
      40118
    ]
  },
  {
    id: 50633,
    gems: [
      40111
    ]
  },
  {
    id: 51279,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 50653,
    enchant: 3605,
    gems: [
      40111
    ]
  },
  {
    id: 51275,
    enchant: 3832,
    gems: [
      40118,
      49110
    ]
  },
  {
    id: 50659,
    enchant: 3845,
    gems: [
      42142,
      0
    ]
  },
  {
    id: 50690,
    enchant: 3604,
    gems: [
      40111,
      40111,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40111,
      40111,
      45862
    ]
  },
  {
    id: 51278,
    enchant: 3823,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 50604,
    gems: [
      40111
    ]
  },
  {
    id: 50402,
    gems: [
      40111
    ]
  },
  {
    id: 50706
  },
  {
    id: 47131
  },
  {
    id: 49623,
    enchant: 3789,
    gems: [
      40111,
      40111,
      40111
    ]
  },
  {},
  {
    id: 50455
  }
];
const P4Gear = {
  items: items$1
};
const items = [
  {
    id: 51277,
    enchant: 3817,
    gems: [
      41398,
      40111
    ]
  },
  {
    id: 54581,
    gems: [
      40146
    ]
  },
  {
    id: 51279,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 50677,
    enchant: 3605,
    gems: [
      40146
    ]
  },
  {
    id: 51275,
    enchant: 3832,
    gems: [
      40111,
      49110
    ]
  },
  {
    id: 54580,
    enchant: 3845,
    gems: [
      40111,
      0
    ]
  },
  {
    id: 50690,
    enchant: 3604,
    gems: [
      40146,
      40111,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40111,
      40111,
      40111
    ]
  },
  {
    id: 51278,
    enchant: 3823,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 54578,
    enchant: 3606,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 50402,
    gems: [
      40111
    ]
  },
  {
    id: 54576,
    gems: [
      40111
    ]
  },
  {
    id: 54590
  },
  {
    id: 50706
  },
  {
    id: 49623,
    enchant: 3789,
    gems: [
      42142,
      42142,
      42154
    ]
  },
  {},
  {
    id: 50455
  }
];
const P5Gear = {
  items
};
const type = "TypeAPL";
const prepullActions = [
  {
    action: {
      castSpell: {
        spellId: {
          otherId: "OtherActionPotion"
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1s"
      }
    }
  }
];
const priorityList = [
  {
    action: {
      autocastOtherCooldowns: {}
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 67485
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48806
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 53408
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 35395
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 53385
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 53488
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48801
        }
      }
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpGt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "4s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48819
        }
      }
    }
  }
];
const DefaultApl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET = makePresetGear("PreRaid", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET = makePresetGear("P3 Mace Preset", P3MaceGear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const P5_PRESET = makePresetGear("P5 Preset", P5Gear);
const ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Default", DefaultApl);
const AuraMasteryTalents = {
  name: "Aura Mastery",
  data: SavedTalents.create({
    talentsString: "050501-05-05232051203331302133231331",
    glyphs: Glyphs.create({
      major1: PaladinMajorGlyph.GlyphOfSealOfVengeance,
      major2: PaladinMajorGlyph.GlyphOfJudgement,
      major3: PaladinMajorGlyph.GlyphOfConsecration,
      minor1: PaladinMinorGlyph.GlyphOfSenseUndead,
      minor2: PaladinMinorGlyph.GlyphOfLayOnHands,
      minor3: PaladinMinorGlyph.GlyphOfBlessingOfKings
    })
  })
};
const DivineSacTalents = {
  name: "Divine Sacrifice & Guardian",
  data: SavedTalents.create({
    talentsString: "03-453201002-05222051203331302133201331",
    glyphs: Glyphs.create({
      major1: PaladinMajorGlyph.GlyphOfSealOfVengeance,
      major2: PaladinMajorGlyph.GlyphOfJudgement,
      major3: PaladinMajorGlyph.GlyphOfConsecration,
      minor1: PaladinMinorGlyph.GlyphOfSenseUndead,
      minor2: PaladinMinorGlyph.GlyphOfLayOnHands,
      minor3: PaladinMinorGlyph.GlyphOfBlessingOfKings
    })
  })
};
const DefaultOptions = RetributionPaladin_Options.create({
  aura: PaladinAura.RetributionAura,
  judgement: PaladinJudgement.JudgementOfWisdom
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  defaultConjured: Conjured.ConjuredDarkRune,
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodDragonfinFilet
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecRetributionPaladin, {
  cssClass: "retribution-paladin-sim-ui",
  cssScheme: "paladin",
  knownIssues: [],
  epStats: [
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatIntellect,
    Stat.StatMP5,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatExpertise,
    Stat.StatArmorPenetration,
    Stat.StatSpellPower,
    Stat.StatSpellCrit,
    Stat.StatSpellHit,
    Stat.StatSpellHaste
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps
  ],
  epReferenceStat: Stat.StatAttackPower,
  displayStats: [
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatIntellect,
    Stat.StatMP5,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatExpertise,
    Stat.StatArmorPenetration,
    Stat.StatSpellHaste,
    Stat.StatSpellPower,
    Stat.StatSpellCrit,
    Stat.StatSpellHit,
    Stat.StatMana,
    Stat.StatHealth,
    Stat.StatResilience
  ],
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    TypedEvent.freezeAllAndDo(() => {
      if (player.getMajorGlyphs().includes(PaladinMajorGlyph.GlyphOfSealOfVengeance) && player.getSpecOptions().seal == PaladinSeal.Vengeance) {
        stats = stats.addStat(Stat.StatExpertise, 10 * EXPERTISE_PER_QUARTER_PERCENT_REDUCTION);
      }
    });
    return {
      talents: stats
    };
  },
  defaults: {
    gear: P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatStrength]: 2.53,
      [Stat.StatAgility]: 1.13,
      [Stat.StatIntellect]: 0.15,
      [Stat.StatSpellPower]: 0.32,
      [Stat.StatSpellHit]: 0.41,
      [Stat.StatSpellCrit]: 0.01,
      [Stat.StatSpellHaste]: 0.12,
      [Stat.StatMP5]: 0.05,
      [Stat.StatAttackPower]: 1,
      [Stat.StatMeleeHit]: 1.96,
      [Stat.StatMeleeCrit]: 1.16,
      [Stat.StatMeleeHaste]: 1.44,
      [Stat.StatArmorPenetration]: 0.76,
      [Stat.StatExpertise]: 1.8
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 7.33
    }),
    consumes: DefaultConsumes,
    talents: AuraMasteryTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      arcaneBrilliance: true,
      divineSpirit: true,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      bloodlust: true,
      manaSpringTotem: TristateEffect.TristateEffectRegular,
      hornOfWinter: true,
      battleShout: TristateEffect.TristateEffectImproved,
      sanctifiedRetribution: true,
      swiftRetribution: true,
      elementalOath: true,
      rampage: true,
      trueshotAura: true,
      icyTalons: true,
      totemOfWrath: true,
      wrathOfAirTotem: true,
      demonicPactSp: 500
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      judgementsOfTheWise: true,
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved
    }),
    debuffs: Debuffs.create({
      shadowMastery: true,
      totemOfWrath: true,
      judgementOfWisdom: true,
      judgementOfLight: true,
      misery: true,
      curseOfElements: true,
      bloodFrenzy: true,
      exposeArmor: true,
      sunderArmor: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      curseOfWeakness: TristateEffect.TristateEffectRegular
    })
  },
  playerIconInputs: [
    AuraSelection,
    JudgementSelection,
    StartingSealSelection
  ],
  includeBuffDebuffInputs: [
    ReplenishmentBuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment,
      InFrontOfTarget
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    rotations: [
      ROTATION_PRESET_DEFAULT
    ],
    talents: [
      AuraMasteryTalents,
      DivineSacTalents
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET,
      P4_PRESET,
      P5_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_PRESET_DEFAULT.rotation.rotation;
  },
  raidSimPresets: [
    {
      spec: Spec.SpecRetributionPaladin,
      tooltip: "Retribution Paladin",
      defaultName: "Retribution",
      iconUrl: getSpecIcon(Class.ClassPaladin, 2),
      talents: AuraMasteryTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceBloodElf
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_PRESET.gear,
          2: P2_PRESET.gear,
          3: P3_PRESET.gear,
          4: P4_PRESET.gear,
          5: P5_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET.gear,
          2: P2_PRESET.gear,
          3: P3_PRESET.gear,
          4: P4_PRESET.gear,
          5: P5_PRESET.gear
        }
      }
    }
  ]
});
class RetributionPaladinSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  RetributionPaladinSimUI as R
};
//# sourceMappingURL=sim-d2a6d094.chunk.js.map
