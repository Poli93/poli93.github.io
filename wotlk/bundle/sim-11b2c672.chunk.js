import { eG as PaladinAura, eH as PaladinJudgement, bV as SavedTalents, P as PaladinMajorGlyph, d as PaladinMinorGlyph, eI as HolyPaladin_Options, F as Consumes, dS as Potions, dN as Flask, dQ as Food, a2 as Stat, G as Stats, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-efbe915e.chunk.js";
import { x as makeSpecOptionsEnumInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, T as TankAssignment, $ as InspirationUptime, D as DistanceFromTarget, I as IndividualSimUI } from "./preset_utils-484bfdab.chunk.js";
const AuraSelection = makeSpecOptionsEnumInput({
  fieldName: "aura",
  label: "Aura",
  values: [
    { name: "None", value: PaladinAura.NoPaladinAura },
    { name: "Devotion Aura", value: PaladinAura.DevotionAura },
    { name: "Retribution Aura", value: PaladinAura.RetributionAura }
  ]
});
const JudgementSelection = makeSpecOptionsEnumInput({
  fieldName: "judgement",
  label: "Judgement",
  labelTooltip: "Judgement debuff you will use on the target during the encounter.",
  values: [
    { name: "None", value: PaladinJudgement.NoJudgement },
    { name: "Wisdom", value: PaladinJudgement.JudgementOfWisdom },
    { name: "Light", value: PaladinJudgement.JudgementOfLight }
  ]
});
const items$4 = [
  {
    id: 44949,
    enchant: 3819,
    gems: [
      41401,
      40012
    ]
  },
  {
    id: 42647,
    gems: [
      42702
    ]
  },
  {
    id: 37673,
    enchant: 3809,
    gems: [
      40012
    ]
  },
  {
    id: 41609,
    enchant: 3831
  },
  {
    id: 39629,
    enchant: 3832,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 37788,
    enchant: 1119,
    gems: [
      0
    ]
  },
  {
    id: 39632,
    enchant: 3604,
    gems: [
      40012,
      0
    ]
  },
  {
    id: 40691,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 37362,
    enchant: 3721,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      40094
    ]
  },
  {
    id: 44283
  },
  {
    id: 37694
  },
  {
    id: 44255
  },
  {
    id: 37111
  },
  {
    id: 37169,
    enchant: 2666
  },
  {
    id: 40700,
    enchant: 1128
  },
  {
    id: 40705
  }
];
const PreraidGear = {
  items: items$4
};
const items$3 = [
  {
    id: 40298,
    enchant: 3819,
    gems: [
      41401,
      40012
    ]
  },
  {
    id: 44662,
    gems: [
      40012
    ]
  },
  {
    id: 40573,
    enchant: 3809,
    gems: [
      40012
    ]
  },
  {
    id: 44005,
    enchant: 3831,
    gems: [
      40012
    ]
  },
  {
    id: 40569,
    enchant: 3832,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 40332,
    enchant: 1119,
    gems: [
      40012,
      0
    ]
  },
  {
    id: 40570,
    enchant: 3604,
    gems: [
      40012,
      0
    ]
  },
  {
    id: 40259,
    gems: [
      40012
    ]
  },
  {
    id: 40572,
    enchant: 3721,
    gems: [
      40027,
      40012
    ]
  },
  {
    id: 40592,
    enchant: 3606
  },
  {
    id: 40399
  },
  {
    id: 40375
  },
  {
    id: 44255
  },
  {
    id: 37111
  },
  {
    id: 40395,
    enchant: 2666
  },
  {
    id: 40401,
    enchant: 1128
  },
  {
    id: 40705
  }
];
const P1Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 46180,
    enchant: 3820,
    gems: [
      41401,
      40094
    ]
  },
  {
    id: 45443,
    gems: [
      40012
    ]
  },
  {
    id: 46182,
    enchant: 3810,
    gems: [
      40012
    ]
  },
  {
    id: 45486,
    enchant: 3831,
    gems: [
      40012
    ]
  },
  {
    id: 45445,
    enchant: 3832,
    gems: [
      42148,
      42148,
      42148
    ]
  },
  {
    id: 45460,
    enchant: 1119,
    gems: [
      40012,
      0
    ]
  },
  {
    id: 46179,
    enchant: 3604,
    gems: [
      40047,
      0
    ]
  },
  {
    id: 45616,
    gems: [
      40012,
      40012,
      40012
    ]
  },
  {
    id: 46181,
    enchant: 3721,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 45537,
    enchant: 3606,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 45614,
    gems: [
      45882
    ]
  },
  {
    id: 45946,
    gems: [
      40012
    ]
  },
  {
    id: 46051
  },
  {
    id: 37111
  },
  {
    id: 46017,
    enchant: 2666
  },
  {
    id: 45470,
    enchant: 1128,
    gems: [
      40012
    ]
  },
  {
    id: 40705
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 46180,
    enchant: 3820,
    gems: [
      41401,
      40123
    ]
  },
  {
    id: 47468,
    gems: [
      40123
    ]
  },
  {
    id: 46182,
    enchant: 3810,
    gems: [
      40123
    ]
  },
  {
    id: 47551,
    enchant: 3831,
    gems: [
      40123
    ]
  },
  {
    id: 47471,
    enchant: 3832,
    gems: [
      42148,
      42148,
      42148
    ]
  },
  {
    id: 45460,
    enchant: 1119,
    gems: [
      40123,
      0
    ]
  },
  {
    id: 46179,
    enchant: 3604,
    gems: [
      40151,
      0
    ]
  },
  {
    id: 47997,
    gems: [
      40175,
      40123
    ]
  },
  {
    id: 46181,
    enchant: 3721,
    gems: [
      40123,
      40123
    ]
  },
  {
    id: 47424,
    enchant: 3606,
    gems: [
      40123,
      40123
    ]
  },
  {
    id: 47439,
    gems: [
      40123
    ]
  },
  {
    id: 45614,
    gems: [
      40123
    ]
  },
  {
    id: 46051
  },
  {
    id: 37111
  },
  {
    id: 46017,
    enchant: 2666
  },
  {
    id: 47448,
    enchant: 1128,
    gems: [
      40123
    ]
  },
  {
    id: 40705
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 51272,
    enchant: 3820,
    gems: [
      41401,
      49110
    ]
  },
  {
    id: 51871,
    gems: [
      40123
    ]
  },
  {
    id: 51273,
    enchant: 3810,
    gems: [
      40123
    ]
  },
  {
    id: 51826,
    enchant: 3831,
    gems: [
      40123
    ]
  },
  {
    id: 50680,
    enchant: 3832,
    gems: [
      42148,
      42148,
      42148
    ]
  },
  {
    id: 50687,
    enchant: 1119,
    gems: [
      40123,
      0
    ]
  },
  {
    id: 50703,
    enchant: 3604,
    gems: [
      40123,
      40123,
      0
    ]
  },
  {
    id: 51919,
    gems: [
      40123,
      40123,
      40123
    ]
  },
  {
    id: 49891,
    enchant: 3721,
    gems: [
      40123,
      40123,
      40123
    ]
  },
  {
    id: 51920,
    enchant: 3606,
    gems: [
      40123,
      40123
    ]
  },
  {
    id: 50610,
    gems: [
      40123
    ]
  },
  {
    id: 50400,
    gems: [
      40123
    ]
  },
  {
    id: 46051
  },
  {
    id: 37111
  },
  {
    id: 46017,
    enchant: 2666
  },
  {
    id: 50616,
    enchant: 1128,
    gems: [
      40123
    ]
  },
  {
    id: 40705
  }
];
const P4Gear = {
  items
};
const type$1 = "TypeAPL";
const prepullActions$1 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 20166
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-3s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48782
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1s"
      }
    },
    hide: true
  }
];
const priorityList$1 = [
  {
    action: {
      condition: {
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 53563
              }
            }
          },
          rhs: {
            "const": {
              val: "2500ms"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53563
        }
      }
    }
  },
  {
    action: {
      condition: {
        and: {
          vals: [
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "75%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 54428
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 54428
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 54758
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            auraIsActive: {
              auraId: {
                spellId: 54155
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53408
        },
        target: {
          type: "Target"
        }
      }
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpLe",
          lhs: {
            spellCpm: {
              spellId: {
                spellId: 48782
              }
            }
          },
          rhs: {
            "const": {
              val: "25"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48782
        }
      }
    }
  }
];
const DefaultApl = {
  type: type$1,
  prepullActions: prepullActions$1,
  priorityList: priorityList$1
};
const type = "TypeAPL";
const prepullActions = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 20166
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-3s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48782
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1s"
      }
    },
    hide: true
  }
];
const priorityList = [
  {
    action: {
      condition: {
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 53563
              }
            }
          },
          rhs: {
            "const": {
              val: "2500ms"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53563
        }
      }
    }
  },
  {
    action: {
      condition: {
        and: {
          vals: [
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "75%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 54428
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 54428
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 54758
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            auraIsActive: {
              auraId: {
                spellId: 54155
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53408
        },
        target: {
          type: "Target"
        }
      }
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpLe",
          lhs: {
            spellCpm: {
              spellId: {
                spellId: 48782
              }
            }
          },
          rhs: {
            "const": {
              val: "40"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48782
        }
      }
    }
  }
];
const AoEDefaultApl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET = makePresetGear("PreRaid", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET = makePresetGear("P3 Preset", P3Gear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const ROTATION_DEFAULT = makePresetAPLRotation("Default", DefaultApl);
const ROTATION_AOEDEFAULT = makePresetAPLRotation("Default (AoE)", AoEDefaultApl);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "50350151020013053100515221-50023131203",
    glyphs: {
      major1: PaladinMajorGlyph.GlyphOfHolyLight,
      major2: PaladinMajorGlyph.GlyphOfSealOfWisdom,
      major3: PaladinMajorGlyph.GlyphOfBeaconOfLight,
      minor2: PaladinMinorGlyph.GlyphOfLayOnHands,
      minor1: PaladinMinorGlyph.GlyphOfSenseUndead,
      minor3: PaladinMinorGlyph.GlyphOfBlessingOfKings
    }
  })
};
const DefaultOptions = HolyPaladin_Options.create({
  aura: PaladinAura.DevotionAura,
  judgement: PaladinJudgement.NoJudgement
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.RunicManaPotion,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecHolyPaladin, {
  cssClass: "holy-paladin-sim-ui",
  cssScheme: "paladin",
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
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      powerWordFortitude: TristateEffect.TristateEffectImproved,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      arcaneBrilliance: true,
      unleashedRage: true,
      leaderOfThePack: TristateEffect.TristateEffectRegular,
      icyTalons: true,
      totemOfWrath: true,
      demonicPactSp: 500,
      swiftRetribution: true,
      moonkinAura: TristateEffect.TristateEffectRegular,
      sanctifiedRetribution: true,
      manaSpringTotem: TristateEffect.TristateEffectRegular,
      bloodlust: true,
      thorns: TristateEffect.TristateEffectImproved,
      devotionAura: TristateEffect.TristateEffectImproved,
      shadowProtection: true
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfSanctuary: true,
      blessingOfWisdom: TristateEffect.TristateEffectImproved,
      blessingOfMight: TristateEffect.TristateEffectImproved
    }),
    debuffs: Debuffs.create({
      judgementOfWisdom: true,
      judgementOfLight: true,
      misery: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      ebonPlaguebringer: true,
      totemOfWrath: true,
      shadowMastery: true,
      bloodFrenzy: true,
      mangle: true,
      exposeArmor: true,
      sunderArmor: true,
      vindication: true,
      thunderClap: TristateEffect.TristateEffectImproved,
      insectSwarm: true
    })
  },
  playerIconInputs: [],
  includeBuffDebuffInputs: [],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment,
      InspirationUptime,
      DistanceFromTarget,
      AuraSelection,
      JudgementSelection
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      StandardTalents
    ],
    rotations: [
      ROTATION_DEFAULT,
      ROTATION_AOEDEFAULT
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET,
      P4_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_DEFAULT.rotation.rotation;
  },
  raidSimPresets: [
    {
      spec: Spec.SpecHolyPaladin,
      tooltip: "Holy Paladin",
      defaultName: "Holy",
      iconUrl: getSpecIcon(Class.ClassPaladin, 0),
      talents: StandardTalents.data,
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
class HolyPaladinSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  HolyPaladinSimUI as H
};
//# sourceMappingURL=sim-11b2c672.chunk.js.map
