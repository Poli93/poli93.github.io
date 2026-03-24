import { A as ActionId, aG as UnitReference_Type, aH as UnitReference, bV as SavedTalents, N as Glyphs, h as PriestMajorGlyph, j as PriestMinorGlyph, fi as SmitePriest_Options, F as Consumes, dN as Flask, dQ as Food, dS as Potions, aE as RaidBuffs, bc as TristateEffect, E as IndividualBuffs, aF as Debuffs, a2 as Stat, G as Stats, b5 as SPELL_HIT_RATING_PER_HIT_CHANCE, x as PartyBuffs, S as Spec, bo as specNames, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-5a4fc7d0.chunk.js";
import { m as makeSpecOptionsBooleanIconInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, T as TankAssignment, I as IndividualSimUI } from "./preset_utils-6b56c262.chunk.js";
import { i as P2_PRESET, j as P3_PRESET, P as P4_PRESET } from "./presets-64481c55.chunk.js";
const SelfPowerInfusion = makeSpecOptionsBooleanIconInput({
  fieldName: "powerInfusionTarget",
  id: ActionId.fromSpellId(10060),
  extraCssClasses: [
    "within-raid-sim-hide"
  ],
  getValue: (player) => player.getSpecOptions().powerInfusionTarget?.type == UnitReference_Type.Player,
  setValue: (eventID, player, newValue) => {
    const newOptions = player.getSpecOptions();
    newOptions.powerInfusionTarget = UnitReference.create({
      type: newValue ? UnitReference_Type.Player : UnitReference_Type.Unknown,
      index: 0
    });
    player.setSpecOptions(eventID, newOptions);
  }
});
const InnerFire = makeSpecOptionsBooleanIconInput({
  fieldName: "useInnerFire",
  id: ActionId.fromSpellId(48168)
});
const Shadowfiend = makeSpecOptionsBooleanIconInput({
  fieldName: "useShadowfiend",
  id: ActionId.fromSpellId(34433)
});
const items$1 = [
  {
    id: 42553,
    enchant: 3820,
    gems: [
      41333,
      40014
    ]
  },
  {
    id: 40680
  },
  {
    id: 34210,
    enchant: 3810,
    gems: [
      42144,
      40014
    ]
  },
  {
    id: 41610,
    enchant: 3859
  },
  {
    id: 43792,
    enchant: 1144,
    gems: [
      42144,
      40049
    ]
  },
  {
    id: 37361,
    enchant: 2332,
    gems: [
      0
    ]
  },
  {
    id: 39285,
    enchant: 3246,
    gems: [
      40014,
      0
    ]
  },
  {
    id: 40696,
    gems: [
      40049,
      39998
    ]
  },
  {
    id: 37854,
    enchant: 3719
  },
  {
    id: 44202,
    enchant: 3826,
    gems: [
      40026
    ]
  },
  {
    id: 43253,
    gems: [
      42144
    ]
  },
  {
    id: 39250
  },
  {
    id: 37835
  },
  {
    id: 37873
  },
  {
    id: 41384,
    enchant: 3834
  },
  {
    id: 40698
  },
  {
    id: 37177
  }
];
const PreraidGear = {
  items: items$1
};
const items = [
  {
    id: 40562,
    enchant: 3820,
    gems: [
      41333,
      42144
    ]
  },
  {
    id: 44661,
    gems: [
      39998
    ]
  },
  {
    id: 40459,
    enchant: 3810,
    gems: [
      42144
    ]
  },
  {
    id: 44005,
    enchant: 3859,
    gems: [
      42144
    ]
  },
  {
    id: 40234,
    enchant: 1144,
    gems: [
      39998,
      39998
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
    id: 40454,
    enchant: 3604,
    gems: [
      40049,
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
    id: 40560,
    enchant: 3719
  },
  {
    id: 40558,
    enchant: 3826
  },
  {
    id: 40719
  },
  {
    id: 40399
  },
  {
    id: 40255
  },
  {
    id: 40432
  },
  {
    id: 40395,
    enchant: 3834
  },
  {
    id: 40273
  },
  {
    id: 39712
  }
];
const P1Gear = {
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
      condition: {
        and: {
          vals: [
            {
              dotIsActive: {
                spellId: {
                  spellId: 48135
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 48123
                    }
                  }
                },
                rhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48135
                    }
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 14751
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
              dotIsActive: {
                spellId: {
                  spellId: 48135
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 48123
                    }
                  }
                },
                rhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48135
                    }
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48123
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            dotIsActive: {
              spellId: {
                spellId: 48300
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48300
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            dotIsActive: {
              spellId: {
                spellId: 48125
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48125
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48135
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
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 48135
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 48135
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "50ms"
                  }
                }
              }
            }
          ]
        }
      },
      wait: {
        duration: {
          spellTimeToReady: {
            spellId: {
              spellId: 48135
            }
          }
        }
      }
    }
  },
  {
    hide: true,
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 59e3
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48123
        }
      }
    }
  },
  {
    hide: true,
    action: {
      castSpell: {
        spellId: {
          spellId: 53007
        }
      }
    }
  },
  {
    hide: true,
    action: {
      castSpell: {
        spellId: {
          spellId: 48158
        }
      }
    }
  },
  {
    hide: true,
    action: {
      castSpell: {
        spellId: {
          spellId: 48127
        }
      }
    }
  },
  {
    hide: true,
    action: {
      castSpell: {
        spellId: {
          tag: 3,
          spellId: 48156
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48123
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
const PRERAID_PRESET = makePresetGear("Preraid Preset", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const ROTATION_PRESET_APL = makePresetAPLRotation("Default", DefaultApl);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "05332031013005023310001-005551002020152-00502",
    glyphs: Glyphs.create({
      major1: PriestMajorGlyph.GlyphOfSmite,
      major2: PriestMajorGlyph.GlyphOfShadowWordPain,
      major3: PriestMajorGlyph.GlyphOfShadowWordDeath,
      minor1: PriestMinorGlyph.GlyphOfFortitude,
      minor2: PriestMinorGlyph.GlyphOfShadowfiend,
      minor3: PriestMinorGlyph.GlyphOfFading
    })
  })
};
const DefaultOptions = SmitePriest_Options.create({
  useInnerFire: true,
  useShadowfiend: true,
  powerInfusionTarget: UnitReference.create()
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast,
  defaultPotion: Potions.RunicManaInjector,
  prepopPotion: Potions.PotionOfWildMagic
});
const DefaultRaidBuffs = RaidBuffs.create({
  giftOfTheWild: TristateEffect.TristateEffectImproved,
  arcaneBrilliance: true,
  divineSpirit: true,
  totemOfWrath: true,
  moonkinAura: TristateEffect.TristateEffectImproved,
  wrathOfAirTotem: true,
  sanctifiedRetribution: true,
  bloodlust: true
});
const DefaultIndividualBuffs = IndividualBuffs.create({
  blessingOfKings: true,
  blessingOfWisdom: TristateEffect.TristateEffectImproved,
  blessingOfMight: TristateEffect.TristateEffectImproved,
  vampiricTouch: true
});
const DefaultDebuffs = Debuffs.create({
  faerieFire: TristateEffect.TristateEffectImproved,
  ebonPlaguebringer: true,
  heartOfTheCrusader: true,
  judgementOfWisdom: true
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecSmitePriest, {
  cssClass: "smite-priest-sim-ui",
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
    gear: P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.38,
      [Stat.StatSpirit]: 0.38,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellHit]: 1.65,
      [Stat.StatSpellCrit]: 0.32,
      [Stat.StatSpellHaste]: 0.78,
      [Stat.StatMP5]: 0.35
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: DefaultRaidBuffs,
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: DefaultIndividualBuffs,
    debuffs: DefaultDebuffs
  },
  playerIconInputs: [
    SelfPowerInfusion,
    InnerFire,
    Shadowfiend
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
      StandardTalents
    ],
    rotations: [
      ROTATION_PRESET_APL
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_PRESET_APL.rotation.rotation;
  },
  raidSimPresets: [
    {
      spec: Spec.SpecSmitePriest,
      tooltip: specNames[Spec.SpecSmitePriest],
      defaultName: "Smite",
      iconUrl: getSpecIcon(Class.ClassPriest, 3),
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
class SmitePriestSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  SmitePriestSimUI as S
};
//# sourceMappingURL=sim-db53f376.chunk.js.map
