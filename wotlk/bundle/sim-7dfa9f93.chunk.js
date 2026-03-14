import { eD as FeralTankDruid_Rotation, S as Spec, bV as SavedTalents, N as Glyphs, D as DruidMajorGlyph, a as DruidMinorGlyph, eE as FeralTankDruid_Options, aH as UnitReference, F as Consumes, dO as BattleElixir, dP as GuardianElixir, dQ as Food, dS as Potions, dL as Conjured, dM as Explosive, a2 as Stat, a1 as PseudoStat, G as Stats, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, dx as APLAction, L as APLRotation, dF as APLListItem, bo as specNames, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-7b88f697.chunk.js";
import { a as makeSpecOptionsNumberInput, J as makeRotationNumberInput, H as makeRotationBooleanInput, b as makePresetGear, c as makePresetAPLRotation, K as makePresetSimpleRotation, r as registerSpecConfig, Q as HealthBuff, U as SpellCritBuff, V as SpellCritDebuff, W as SpellHitDebuff, k as SpellDamageDebuff, T as TankAssignment, X as IncomingHps, Y as HealingCadence, Z as HealingCadenceVariation, _ as BurstWindow, $ as InspirationUptime, a0 as HpPercentForDefensives, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-7c8f42f7.chunk.js";
import { T as TankGemOptimizer } from "./suggest_gems_action-434ba404.chunk.js";
import { s as standardCooldownDefaults } from "./apl_utils-d7a38ada.chunk.js";
const StartingRage = makeSpecOptionsNumberInput({
  fieldName: "startingRage",
  label: "Starting Rage",
  labelTooltip: "Initial rage at the start of each iteration."
});
const FeralTankDruidRotationConfig = {
  inputs: [
    makeRotationNumberInput({
      fieldName: "maulRageThreshold",
      label: "Maul Rage Threshold",
      labelTooltip: "Queue Maul when Rage is above this value."
    }),
    makeRotationNumberInput({
      fieldName: "lacerateTime",
      label: "Lacerate Refresh Leeway",
      labelTooltip: "Refresh Lacerate when remaining duration is less than this value (in seconds)."
    }),
    makeRotationBooleanInput({
      fieldName: "maintainDemoralizingRoar",
      label: "Maintain Demo Roar",
      labelTooltip: "Keep Demoralizing Roar active on the primary target. If a stronger debuff is active, will not cast."
    })
  ]
};
const items$3 = [
  {
    id: 40329,
    enchant: 67839,
    gems: [
      41339,
      40008
    ]
  },
  {
    id: 40387
  },
  {
    id: 40494,
    enchant: 44957,
    gems: [
      40008
    ]
  },
  {
    id: 40252,
    enchant: 3294
  },
  {
    id: 40471,
    enchant: 3832,
    gems: [
      42702,
      40088
    ]
  },
  {
    id: 40186,
    enchant: 3850,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 40472,
    enchant: 63770,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 43591,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 44011,
    enchant: 38373,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 40243,
    enchant: 55016,
    gems: [
      40008
    ]
  },
  {
    id: 40370
  },
  {
    id: 37784
  },
  {
    id: 44253
  },
  {
    id: 37220
  },
  {
    id: 40280,
    enchant: 2673
  },
  {},
  {
    id: 38365
  }
];
const P1Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 41678,
    enchant: 67839,
    gems: [
      41339,
      45880
    ]
  },
  {
    id: 45517,
    gems: [
      40008
    ]
  },
  {
    id: 45245,
    enchant: 44957,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 45496,
    enchant: 3294,
    gems: [
      42702
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45611,
    enchant: 3850,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 46043,
    enchant: 63770,
    gems: [
      40008,
      40008,
      0
    ]
  },
  {
    id: 46095,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45536,
    enchant: 38373,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45232,
    enchant: 55016,
    gems: [
      40008
    ]
  },
  {
    id: 45471,
    gems: [
      40091
    ]
  },
  {
    id: 45608,
    gems: [
      40008
    ]
  },
  {
    id: 45158
  },
  {
    id: 46021
  },
  {
    id: 45533,
    enchant: 3870,
    gems: [
      40008,
      40008
    ]
  },
  {},
  {
    id: 45509
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 48204,
    enchant: 3878,
    gems: [
      41339,
      40169
    ]
  },
  {
    id: 47133,
    gems: [
      49110
    ]
  },
  {
    id: 48207,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 47545,
    enchant: 3294,
    gems: [
      40119
    ]
  },
  {
    id: 47004,
    enchant: 3832,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 45611,
    enchant: 3850,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 48203,
    enchant: 3860,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 47112,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 46975,
    enchant: 3822,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 47077,
    enchant: 3606,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 47955,
    gems: [
      40119
    ]
  },
  {
    id: 47075,
    gems: [
      40119
    ]
  },
  {
    id: 47088
  },
  {
    id: 47131
  },
  {
    id: 47130,
    enchant: 3870,
    gems: [
      40119,
      40119
    ]
  },
  {},
  {
    id: 45509
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 51296,
    enchant: 3878,
    gems: [
      41380,
      40119
    ]
  },
  {
    id: 50682,
    gems: [
      40130
    ]
  },
  {
    id: 51299,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 50466,
    enchant: 3294,
    gems: [
      40119
    ]
  },
  {
    id: 50656,
    enchant: 3330,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 50670,
    enchant: 3850,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 51295,
    enchant: 3860,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 51297,
    enchant: 3822,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40119,
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
    id: 50404,
    gems: [
      40119
    ]
  },
  {
    id: 47088
  },
  {
    id: 50364
  },
  {
    id: 51432,
    enchant: 3870,
    gems: [
      40119,
      40119
    ]
  },
  {},
  {
    id: 50456
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
      schedule: {
        schedule: "0s",
        innerAction: {
          castSpell: {
            spellId: {
              itemId: 42641
            }
          }
        }
      }
    }
  },
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
              cmp: {
                op: "OpEq",
                lhs: {
                  auraNumStacks: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48568
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "5"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48568
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48568
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraShouldRefresh: {
          auraId: {
            spellId: 48560
          },
          maxOverlap: {
            "const": {
              val: "1.5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48560
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48564
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
                      spellId: 48564
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 48564
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.0s"
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
              spellId: 48564
            }
          }
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 16857
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
                      spellId: 48564
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 48564
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
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
              spellId: 48564
            }
          }
        }
      }
    }
  },
  {
    action: {
      condition: {
        or: {
          vals: [
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  auraNumStacks: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48568
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "5"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48568
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48568
        }
      }
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpGe",
          lhs: {
            currentRage: {}
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
          spellId: 48562
        }
      }
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpGe",
          lhs: {
            currentRage: {}
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
          spellId: 48480,
          tag: 1
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
                      spellId: 16857
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 16857
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
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
              spellId: 16857
            }
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
const P1_PRESET = makePresetGear("P1", P1Gear);
const P2_PRESET = makePresetGear("P2", P2Gear);
const P3_PRESET = makePresetGear("P3", P3Gear);
const P4_PRESET = makePresetGear("P4", P4Gear);
const DefaultSimpleRotation = FeralTankDruid_Rotation.create({
  maulRageThreshold: 25,
  maintainDemoralizingRoar: true,
  lacerateTime: 8
});
const ROTATION_DEFAULT = makePresetAPLRotation("APL Default", DefaultApl);
const ROTATION_PRESET_SIMPLE = makePresetSimpleRotation("Simple Default", Spec.SpecFeralTankDruid, DefaultSimpleRotation);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "-503232132322010353120300313511-20350001",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfMaul,
      major2: DruidMajorGlyph.GlyphOfSurvivalInstincts,
      major3: DruidMajorGlyph.GlyphOfFrenziedRegeneration,
      minor1: DruidMinorGlyph.GlyphOfChallengingRoar,
      minor2: DruidMinorGlyph.GlyphOfThorns,
      minor3: DruidMinorGlyph.GlyphOfUnburdenedRebirth
    })
  })
};
const DefaultOptions = FeralTankDruid_Options.create({
  innervateTarget: UnitReference.create(),
  startingRage: 20
});
const DefaultConsumes = Consumes.create({
  battleElixir: BattleElixir.GurusElixir,
  guardianElixir: GuardianElixir.GiftOfArthas,
  food: Food.FoodBlackenedDragonfin,
  prepopPotion: Potions.IndestructiblePotion,
  defaultPotion: Potions.IndestructiblePotion,
  defaultConjured: Conjured.ConjuredHealthstone,
  thermalSapper: true,
  fillerExplosive: Explosive.ExplosiveSaroniteBomb
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecFeralTankDruid, {
  cssClass: "feral-tank-druid-sim-ui",
  cssScheme: "druid",
  knownIssues: [],
  epStats: [
    Stat.StatStamina,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatExpertise,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmor,
    Stat.StatBonusArmor,
    Stat.StatArmorPenetration,
    Stat.StatDefense,
    Stat.StatDodge,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps
  ],
  epReferenceStat: Stat.StatAttackPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatArmor,
    Stat.StatBonusArmor,
    Stat.StatStamina,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatExpertise,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatDefense,
    Stat.StatDodge,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatResilience,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
  ],
  defaults: {
    gear: P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatArmor]: 3.5665,
      [Stat.StatBonusArmor]: 0.5187,
      [Stat.StatStamina]: 7.3021,
      [Stat.StatStrength]: 2.3786,
      [Stat.StatAgility]: 4.4974,
      [Stat.StatAttackPower]: 1,
      [Stat.StatExpertise]: 2.6597,
      [Stat.StatMeleeHit]: 2.9282,
      [Stat.StatMeleeCrit]: 1.5143,
      [Stat.StatMeleeHaste]: 2.0983,
      [Stat.StatArmorPenetration]: 1.584,
      [Stat.StatDefense]: 1.8171,
      [Stat.StatDodge]: 2.0196,
      [Stat.StatHealth]: 0.4465
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 0
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      powerWordFortitude: TristateEffect.TristateEffectImproved,
      shadowProtection: true,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      thorns: TristateEffect.TristateEffectImproved,
      bloodlust: true,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      battleShout: TristateEffect.TristateEffectImproved,
      unleashedRage: true,
      windfuryTotem: TristateEffect.TristateEffectImproved,
      arcaneEmpowerment: true,
      moonkinAura: TristateEffect.TristateEffectImproved
    }),
    partyBuffs: PartyBuffs.create({
      heroicPresence: true
    }),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved,
      renewedHope: true
    }),
    debuffs: Debuffs.create({
      savageCombat: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      exposeArmor: true,
      frostFever: TristateEffect.TristateEffectImproved,
      masterPoisoner: true,
      ebonPlaguebringer: true,
      shadowMastery: true
    })
  },
  playerIconInputs: [],
  rotationInputs: FeralTankDruidRotationConfig,
  includeBuffDebuffInputs: [
    HealthBuff,
    SpellCritBuff,
    SpellCritDebuff,
    SpellHitDebuff,
    SpellDamageDebuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment,
      IncomingHps,
      HealingCadence,
      HealingCadenceVariation,
      BurstWindow,
      InspirationUptime,
      HpPercentForDefensives,
      StartingRage,
      InFrontOfTarget
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
      ROTATION_PRESET_SIMPLE,
      ROTATION_DEFAULT
    ],
    gear: [
      P1_PRESET,
      P2_PRESET,
      P3_PRESET,
      P4_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_PRESET_SIMPLE.rotation.rotation;
  },
  simpleRotation: (player, simple, cooldowns) => {
    let [prepullActions2, actions] = standardCooldownDefaults(cooldowns);
    const emergencyLacerate = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":48568}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"spellId":{"spellId":48568}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"castSpell":{"spellId":{"spellId":48568}}}`);
    const demoRoar = APLAction.fromJsonString(`{"condition":{"auraShouldRefresh":{"auraId":{"spellId":48560},"maxOverlap":{"const":{"val":"1.5s"}}}},"castSpell":{"spellId":{"spellId":48560}}}`);
    const mangle = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":48564}}}`);
    const delayFaerieFireForMangle = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48564}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":48564}}},"rhs":{"const":{"val":"1.0s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":48564}}}}}`);
    const faerieFire = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":16857}}}`);
    const delayFillersForMangle = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48564}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":48564}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":48564}}}}}`);
    const lacerate = APLAction.fromJsonString(`{"condition":{"or":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":48568}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"spellId":{"spellId":48568}}},"rhs":{"const":{"val":"${simple.lacerateTime.toFixed(1)}s"}}}}]}},"castSpell":{"spellId":{"spellId":48568}}}`);
    const swipe = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"${(simple.maulRageThreshold + 15).toFixed(0)}"}}}},"castSpell":{"spellId":{"spellId":48562}}}`);
    const queueMaul = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"${simple.maulRageThreshold.toFixed(0)}"}}}},"castSpell":{"spellId":{"spellId":48480,"tag":1}}}`);
    const waitForFaerieFire = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":16857}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":16857}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":16857}}}}}`);
    actions.push(...[
      emergencyLacerate,
      simple.maintainDemoralizingRoar ? demoRoar : null,
      mangle,
      delayFaerieFireForMangle,
      faerieFire,
      delayFillersForMangle,
      lacerate,
      swipe,
      queueMaul,
      waitForFaerieFire
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
      spec: Spec.SpecFeralTankDruid,
      tooltip: specNames[Spec.SpecFeralTankDruid],
      defaultName: "Bear",
      iconUrl: getSpecIcon(Class.ClassDruid, 1),
      talents: StandardTalents.data,
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
class FeralTankDruidSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
    new TankGemOptimizer(this);
  }
}
export {
  FeralTankDruidSimUI as F
};
//# sourceMappingURL=sim-7dfa9f93.chunk.js.map
