import { eH as PaladinAura, eT as PaladinSeal, eI as PaladinJudgement, bV as SavedTalents, P as PaladinMajorGlyph, d as PaladinMinorGlyph, eU as ProtectionPaladin_Options, F as Consumes, dO as Flask, dR as Food, dT as Potions, a2 as Stat, a1 as PseudoStat, G as Stats, T as TypedEvent, a9 as EXPERTISE_PER_QUARTER_PERCENT_REDUCTION, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, dF as APLPrepullAction, dy as APLAction, L as APLRotation, dG as APLListItem, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-40ebb67d.chunk.js";
import { x as makeSpecOptionsEnumInput, i as makeSpecOptionsBooleanInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, Q as HealthBuff, T as TankAssignment, X as IncomingHps, Y as HealingCadence, Z as HealingCadenceVariation, _ as BurstWindow, a0 as HpPercentForDefensives, $ as InspirationUptime, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-a778ab64.chunk.js";
import { s as standardCooldownDefaults } from "./apl_utils-d90203fd.chunk.js";
const AuraSelection = makeSpecOptionsEnumInput({
  fieldName: "aura",
  label: "Aura",
  values: [
    { name: "None", value: PaladinAura.NoPaladinAura },
    { name: "Devotion Aura", value: PaladinAura.DevotionAura },
    { name: "Retribution Aura", value: PaladinAura.RetributionAura }
  ]
});
const StartingSealSelection = makeSpecOptionsEnumInput({
  fieldName: "seal",
  label: "Seal",
  labelTooltip: "The seal active before encounter",
  values: [
    { name: "Vengeance", value: PaladinSeal.Vengeance },
    { name: "Command", value: PaladinSeal.Command }
  ]
});
const JudgementSelection = makeSpecOptionsEnumInput({
  fieldName: "judgement",
  label: "Judgement",
  labelTooltip: "Judgement debuff you will use on the target during the encounter.",
  values: [
    { name: "Wisdom", value: PaladinJudgement.JudgementOfWisdom },
    { name: "Light", value: PaladinJudgement.JudgementOfLight }
  ]
});
const UseAvengingWrath = makeSpecOptionsBooleanInput({
  fieldName: "useAvengingWrath",
  label: "Use Avenging Wrath"
});
const items$5 = [
  {
    id: 42549,
    enchant: 3818,
    gems: [
      41396,
      49110
    ]
  },
  {
    id: 40679
  },
  {
    id: 37635,
    enchant: 3852,
    gems: [
      40015
    ]
  },
  {
    id: 44188,
    enchant: 3605
  },
  {
    id: 39638,
    enchant: 1953,
    gems: [
      36767,
      40089
    ]
  },
  {
    id: 37682,
    enchant: 3850,
    gems: [
      0
    ]
  },
  {
    id: 39639,
    enchant: 3860,
    gems: [
      36767,
      0
    ]
  },
  {
    id: 37379,
    enchant: 3601,
    gems: [
      40022,
      40008
    ]
  },
  {
    id: 37292,
    enchant: 3822,
    gems: [
      40089
    ]
  },
  {
    id: 44243,
    enchant: 3606
  },
  {
    id: 37186
  },
  {
    id: 37257
  },
  {
    id: 44063,
    gems: [
      36767,
      40015
    ]
  },
  {
    id: 37220
  },
  {
    id: 37179,
    enchant: 2673
  },
  {
    id: 43085,
    enchant: 3849
  },
  {
    id: 40707
  }
];
const PreraidGear = {
  items: items$5
};
const items$4 = [
  {
    id: 48639,
    enchant: 3818,
    gems: [
      41380,
      40129
    ]
  },
  {
    id: 45485,
    gems: [
      40167
    ]
  },
  {
    id: 48637,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 45496,
    enchant: 1951,
    gems: [
      40119
    ]
  },
  {
    id: 48641,
    enchant: 1953,
    gems: [
      40166,
      40119
    ]
  },
  {
    id: 47570,
    enchant: 3850,
    gems: [
      40166,
      0
    ]
  },
  {
    id: 48640,
    enchant: 3860,
    gems: [
      40166,
      0
    ]
  },
  {
    id: 47072,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 49904,
    enchant: 3822,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 49907,
    enchant: 3606,
    gems: [
      40166,
      40119
    ]
  },
  {
    id: 45471,
    gems: [
      40119
    ]
  },
  {
    id: 47149
  },
  {
    id: 47080
  },
  {
    id: 46021
  },
  {
    id: 46097,
    enchant: 3788,
    gems: [
      40119
    ]
  },
  {
    id: 46963,
    enchant: 3849
  },
  {
    id: 47661
  }
];
const P4PreraidGear = {
  items: items$4
};
const items$3 = [
  {
    id: 40581,
    enchant: 3818,
    gems: [
      41380,
      36767
    ]
  },
  {
    id: 40387
  },
  {
    id: 40584,
    enchant: 3852,
    gems: [
      40008
    ]
  },
  {
    id: 40410,
    enchant: 3605
  },
  {
    id: 40579,
    enchant: 3832,
    gems: [
      36767,
      40022
    ]
  },
  {
    id: 39764,
    enchant: 3850,
    gems: [
      0
    ]
  },
  {
    id: 40580,
    enchant: 3860,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 39759,
    enchant: 3601,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 40589,
    enchant: 3822
  },
  {
    id: 39717,
    enchant: 3606,
    gems: [
      40089
    ]
  },
  {
    id: 40718
  },
  {
    id: 40107
  },
  {
    id: 44063,
    gems: [
      36767,
      40089
    ]
  },
  {
    id: 37220
  },
  {
    id: 40345,
    enchant: 3788
  },
  {
    id: 40400,
    enchant: 3849
  },
  {
    id: 40707
  }
];
const P1Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 46175,
    enchant: 3818,
    gems: [
      41380,
      40088
    ]
  },
  {
    id: 45485,
    gems: [
      40088
    ]
  },
  {
    id: 46177,
    enchant: 3852,
    gems: [
      40034
    ]
  },
  {
    id: 45496,
    enchant: 3605,
    gems: [
      40034
    ]
  },
  {
    id: 46039,
    enchant: 3832,
    gems: [
      36767,
      36767
    ]
  },
  {
    id: 45111,
    enchant: 3850,
    gems: [
      0
    ]
  },
  {
    id: 45487,
    enchant: 3860,
    gems: [
      40008,
      40008,
      0
    ]
  },
  {
    id: 45825,
    enchant: 3601,
    gems: [
      40008
    ]
  },
  {
    id: 45594,
    enchant: 3822,
    gems: [
      40034,
      45880,
      40088
    ]
  },
  {
    id: 45988,
    enchant: 3606,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 45471,
    gems: [
      40088
    ]
  },
  {
    id: 45326
  },
  {
    id: 45158
  },
  {
    id: 46021
  },
  {
    id: 45947,
    enchant: 3788,
    gems: [
      40088
    ]
  },
  {
    id: 45587,
    enchant: 3849,
    gems: [
      36767
    ]
  },
  {
    id: 45145
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 49475,
    enchant: 3878,
    gems: [
      41380,
      40129
    ]
  },
  {
    id: 47133,
    gems: [
      40119
    ]
  },
  {
    id: 48646,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 47549,
    enchant: 3605,
    gems: [
      40119
    ]
  },
  {
    id: 46968,
    enchant: 3832,
    gems: [
      40129,
      49110,
      40119
    ]
  },
  {
    id: 47111,
    enchant: 3850,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 45487,
    enchant: 3860,
    gems: [
      40119,
      40119,
      0
    ]
  },
  {
    id: 47076,
    gems: [
      40129,
      40119,
      40119
    ]
  },
  {
    id: 48645,
    enchant: 3822,
    gems: [
      40129,
      40119
    ]
  },
  {
    id: 47003,
    enchant: 3606,
    gems: [
      40129,
      40119
    ]
  },
  {
    id: 47157,
    gems: [
      40119
    ]
  },
  {
    id: 45471,
    gems: [
      40166
    ]
  },
  {
    id: 45158
  },
  {
    id: 47451
  },
  {
    id: 46097,
    enchant: 3788,
    gems: [
      40119
    ]
  },
  {
    id: 46964,
    enchant: 3849,
    gems: [
      40119
    ]
  },
  {
    id: 47661
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 50640,
    enchant: 3818,
    gems: [
      41380,
      40141
    ]
  },
  {
    id: 50682,
    gems: [
      40119
    ]
  },
  {
    id: 50660,
    enchant: 3852,
    gems: [
      40167,
      40119
    ]
  },
  {
    id: 50718,
    enchant: 3605,
    gems: [
      40119
    ]
  },
  {
    id: 51265,
    enchant: 3297,
    gems: [
      40141,
      40119
    ]
  },
  {
    id: 51901,
    enchant: 3850,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 51267,
    enchant: 3860,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 50991,
    enchant: 3601,
    gems: [
      40141,
      40119,
      40119
    ]
  },
  {
    id: 49904,
    enchant: 3822,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 50625,
    enchant: 3606,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 50642,
    gems: [
      40119
    ]
  },
  {
    id: 50622,
    gems: [
      40119
    ]
  },
  {
    id: 50364
  },
  {
    id: 50344
  },
  {
    id: 51893,
    enchant: 3788,
    gems: [
      40119
    ]
  },
  {
    id: 50729,
    enchant: 1071,
    gems: [
      40119
    ]
  },
  {
    id: 47661
  }
];
const P4Gear = {
  items
};
const type = "TypeAPL";
const prepullActions = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48952
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
          spellId: 54428
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1500ms"
      }
    }
  },
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
        cmp: {
          op: "OpLe",
          lhs: {
            spellTimeToReady: {
              spellId: {
                spellId: 53595
              }
            }
          },
          rhs: {
            "const": {
              val: "3s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 61411
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
            spellTimeToReady: {
              spellId: {
                spellId: 61411
              }
            }
          },
          rhs: {
            "const": {
              val: "3s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53595
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
      condition: {
        and: {
          vals: [
            {
              gcdIsReady: {}
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 61411
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 53595
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  min: {
                    vals: [
                      {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 61411
                          }
                        }
                      },
                      {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 53595
                          }
                        }
                      }
                    ]
                  }
                },
                rhs: {
                  "const": {
                    val: "350ms"
                  }
                }
              }
            }
          ]
        }
      },
      wait: {
        duration: {
          min: {
            vals: [
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 61411
                  }
                }
              },
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 53595
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48819
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48952
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
      condition: {
        and: {
          vals: [
            {
              gcdIsReady: {}
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 61411
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 53595
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 48819
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 48952
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 53408
                    }
                  }
                }
              }
            }
          ]
        }
      },
      wait: {
        duration: {
          min: {
            vals: [
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 61411
                  }
                }
              },
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 53595
                  }
                }
              },
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 48819
                  }
                }
              },
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 48952
                  }
                }
              },
              {
                spellTimeToReady: {
                  spellId: {
                    spellId: 53408
                  }
                }
              }
            ]
          }
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
const PRERAID_PRESET = makePresetGear("P1 PreRaid Preset", PreraidGear);
const P4_PRERAID_PRESET = makePresetGear("P4 PreRaid Preset", P4PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET = makePresetGear("P3 Preset", P3Gear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const ROTATION_DEFAULT = makePresetAPLRotation("Default (969)", DefaultApl);
const GenericAoeTalents = {
  name: "Baseline Example",
  data: SavedTalents.create({
    talentsString: "-05005135200132311333312321-511302012003",
    glyphs: {
      major1: PaladinMajorGlyph.GlyphOfSealOfVengeance,
      major2: PaladinMajorGlyph.GlyphOfRighteousDefense,
      major3: PaladinMajorGlyph.GlyphOfDivinePlea,
      minor1: PaladinMinorGlyph.GlyphOfSenseUndead,
      minor2: PaladinMinorGlyph.GlyphOfLayOnHands,
      minor3: PaladinMinorGlyph.GlyphOfBlessingOfKings
    }
  })
};
const DefaultOptions = ProtectionPaladin_Options.create({
  aura: PaladinAura.RetributionAura,
  judgement: PaladinJudgement.JudgementOfWisdom
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfStoneblood,
  food: Food.FoodDragonfinFilet,
  defaultPotion: Potions.IndestructiblePotion,
  prepopPotion: Potions.IndestructiblePotion
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecProtectionPaladin, {
  cssClass: "protection-paladin-sim-ui",
  cssScheme: "paladin",
  knownIssues: [],
  epStats: [
    Stat.StatStamina,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatSpellHit,
    Stat.StatMeleeCrit,
    Stat.StatExpertise,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatSpellPower,
    Stat.StatArmor,
    Stat.StatBonusArmor,
    Stat.StatDefense,
    Stat.StatBlock,
    Stat.StatBlockValue,
    Stat.StatDodge,
    Stat.StatParry,
    Stat.StatResilience,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps
  ],
  epReferenceStat: Stat.StatSpellPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatArmor,
    Stat.StatBonusArmor,
    Stat.StatStamina,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatExpertise,
    Stat.StatArmorPenetration,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatDefense,
    Stat.StatBlock,
    Stat.StatBlockValue,
    Stat.StatDodge,
    Stat.StatParry,
    Stat.StatResilience,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
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
    gear: P3_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatArmor]: 0.07,
      [Stat.StatBonusArmor]: 0.06,
      [Stat.StatStamina]: 1.14,
      [Stat.StatStrength]: 1,
      [Stat.StatAgility]: 0.62,
      [Stat.StatAttackPower]: 0.26,
      [Stat.StatExpertise]: 0.69,
      [Stat.StatMeleeHit]: 0.79,
      [Stat.StatMeleeCrit]: 0.3,
      [Stat.StatMeleeHaste]: 0.17,
      [Stat.StatArmorPenetration]: 0.04,
      [Stat.StatSpellPower]: 0.13,
      [Stat.StatBlock]: 0.52,
      [Stat.StatBlockValue]: 0.28,
      [Stat.StatDodge]: 0.46,
      [Stat.StatParry]: 0.61,
      [Stat.StatDefense]: 0.54
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 3.33
    }),
    consumes: DefaultConsumes,
    talents: GenericAoeTalents.data,
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
  includeBuffDebuffInputs: [
    HealthBuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment,
      IncomingHps,
      HealingCadence,
      HealingCadenceVariation,
      BurstWindow,
      HpPercentForDefensives,
      InspirationUptime,
      AuraSelection,
      UseAvengingWrath,
      JudgementSelection,
      StartingSealSelection,
      InFrontOfTarget
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      GenericAoeTalents
    ],
    rotations: [
      ROTATION_DEFAULT
    ],
    gear: [
      PRERAID_PRESET,
      P4_PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET,
      P4_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_DEFAULT.rotation.rotation;
  },
  simpleRotation: (player, simple, cooldowns) => {
    let [prepullActions2, actions] = standardCooldownDefaults(cooldowns);
    const holyShieldPrepull = APLPrepullAction.fromJsonString(`{"action":{"castSpell":{"spellId":{"spellId":48952}}},"doAtValue":{"const":{"val":"-3s"}}}`);
    const divinePlea = APLPrepullAction.fromJsonString(`{"action":{"castSpell":{"spellId":{"spellId":54428}}},"doAtValue":{"const":{"val":"-1500ms"}}}`);
    prepullActions2.push(holyShieldPrepull, divinePlea);
    const shieldOfRighteousness = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpLe","lhs":{"spellTimeToReady":{"spellId":{"spellId":53595}}},"rhs":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":61411}}}`);
    const hammerOfRighteousness = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpLe","lhs":{"spellTimeToReady":{"spellId":{"spellId":61411}}},"rhs":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":53595}}}`);
    const hammerOfWrath = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":48806}}}`);
    const waitPrimary = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":61411}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53595}}}}},{"cmp":{"op":"OpLe","lhs":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}}]}},"rhs":{"const":{"val":"350ms"}}}}]}},"wait":{"duration":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}}]}}}}`);
    const consecration = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":48819}}}`);
    const holyShield = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":48952}}}`);
    const judgementOfWisdom = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":53408}}}`);
    const waitSecondary = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":61411}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53595}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48819}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48952}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53408}}}}}]}},"wait":{"duration":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}},{"spellTimeToReady":{"spellId":{"spellId":48819}}},{"spellTimeToReady":{"spellId":{"spellId":48952}}},{"spellTimeToReady":{"spellId":{"spellId":53408}}}]}}}}`);
    actions.push(...[
      shieldOfRighteousness,
      hammerOfRighteousness,
      hammerOfWrath,
      waitPrimary,
      consecration,
      holyShield,
      judgementOfWisdom,
      waitSecondary
    ].filter((a) => a));
    return APLRotation.create({
      prepullActions: prepullActions2,
      priorityList: actions.map((action) => APLListItem.create({
        action
      }))
    });
  },
  raidSimPresets: [
    {
      spec: Spec.SpecProtectionPaladin,
      tooltip: "Protection Paladin",
      defaultName: "Protection",
      iconUrl: getSpecIcon(Class.ClassPaladin, 1),
      talents: GenericAoeTalents.data,
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
class ProtectionPaladinSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  ProtectionPaladinSimUI as P
};
//# sourceMappingURL=sim-bf5b8e4f.chunk.js.map
