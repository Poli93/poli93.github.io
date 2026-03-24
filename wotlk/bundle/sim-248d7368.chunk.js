import { eo as ShamanShield, A as ActionId, ep as ElementalShaman_Options_ThunderstormRange, aU as Faction, bV as SavedTalents, N as Glyphs, l as ShamanMajorGlyph, m as ShamanMinorGlyph, eq as ElementalShaman_Options, er as ShamanTotems, es as EarthTotem, et as AirTotem, eu as FireTotem, ev as WaterTotem, $ as Profession, F as Consumes, dS as Potions, dN as Flask, dQ as Food, T as TypedEvent, a2 as Stat, G as Stats, b5 as SPELL_HIT_RATING_PER_HIT_CHANCE, b6 as SPELL_CRIT_RATING_PER_CRIT_CHANCE, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, S as Spec, bo as specNames, g as getSpecIcon, u as Class, a6 as Race } from "./detailed_results-5a4fc7d0.chunk.js";
import { i as makeSpecOptionsBooleanInput, t as makeSpecOptionsEnumIconInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, D as DistanceFromTarget, T as TankAssignment, n as nibelungAverageCasts, I as IndividualSimUI } from "./preset_utils-6b56c262.chunk.js";
import { T as TotemsSection } from "./totem_inputs-99067398.chunk.js";
const InThunderstormRange = makeSpecOptionsBooleanInput({
  fieldName: "thunderstormRange",
  label: "Thunderstorm In Range",
  labelTooltip: "When set to true, thunderstorm casts will cause damage.",
  getValue: (player) => player.getSpecOptions().thunderstormRange == ElementalShaman_Options_ThunderstormRange.TSInRange,
  setValue: (eventID, player, newValue) => {
    const newOptions = player.getSpecOptions();
    if (newValue) {
      newOptions.thunderstormRange = ElementalShaman_Options_ThunderstormRange.TSInRange;
    } else {
      newOptions.thunderstormRange = ElementalShaman_Options_ThunderstormRange.TSOutofRange;
    }
    player.setSpecOptions(eventID, newOptions);
  }
});
const ShamanShieldInput = makeSpecOptionsEnumIconInput({
  fieldName: "shield",
  values: [
    { value: ShamanShield.NoShield, tooltip: "No Shield" },
    { actionId: ActionId.fromSpellId(57960), value: ShamanShield.WaterShield },
    { actionId: ActionId.fromSpellId(49281), value: ShamanShield.LightningShield }
  ]
});
const items$5 = [
  {
    id: 37180,
    enchant: 3820,
    gems: [
      41285,
      42144
    ]
  },
  {
    id: 37595
  },
  {
    id: 37673,
    enchant: 3810,
    gems: [
      42144
    ]
  },
  {
    id: 41610,
    enchant: 3722
  },
  {
    id: 39592,
    enchant: 3832,
    gems: [
      42144,
      40025
    ]
  },
  {
    id: 37788,
    enchant: 2332,
    gems: [
      0
    ]
  },
  {
    id: 39593,
    enchant: 3246,
    gems: [
      40051,
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
    id: 37791,
    enchant: 3719
  },
  {
    id: 44202,
    enchant: 3826,
    gems: [
      39998
    ]
  },
  {
    id: 43253,
    gems: [
      40027
    ]
  },
  {
    id: 37694
  },
  {
    id: 40682
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
    id: 40708
  }
];
const PreraidGear = {
  items: items$5
};
const items$4 = [
  {
    id: 40516,
    enchant: 3820,
    gems: [
      41285,
      40027
    ]
  },
  {
    id: 44661,
    gems: [
      39998
    ]
  },
  {
    id: 40286,
    enchant: 3810
  },
  {
    id: 44005,
    enchant: 3722,
    gems: [
      40027
    ]
  },
  {
    id: 40514,
    enchant: 3832,
    gems: [
      42144,
      42144
    ]
  },
  {
    id: 40324,
    enchant: 2332,
    gems: [
      42144,
      0
    ]
  },
  {
    id: 40302,
    enchant: 3246,
    gems: [
      0
    ]
  },
  {
    id: 40301,
    gems: [
      40014
    ]
  },
  {
    id: 40560,
    enchant: 3721
  },
  {
    id: 40519,
    enchant: 3826
  },
  {
    id: 37694
  },
  {
    id: 40399
  },
  {
    id: 40432
  },
  {
    id: 40255
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
    id: 40267
  }
];
const P1Gear = {
  items: items$4
};
const items$3 = [
  {
    id: 46209,
    enchant: 3820,
    gems: [
      41285,
      40048
    ]
  },
  {
    id: 45933,
    gems: [
      39998
    ]
  },
  {
    id: 46211,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 45242,
    enchant: 3722,
    gems: [
      39998
    ]
  },
  {
    id: 46206,
    enchant: 3832,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45460,
    enchant: 2332,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 45665,
    enchant: 3604,
    gems: [
      39998,
      39998,
      0
    ]
  },
  {
    id: 45616,
    enchant: 3599,
    gems: [
      39998,
      39998,
      39998
    ]
  },
  {
    id: 46210,
    enchant: 3721,
    gems: [
      39998,
      40027
    ]
  },
  {
    id: 45537,
    enchant: 3606,
    gems: [
      39998,
      40027
    ]
  },
  {
    id: 46046,
    gems: [
      39998
    ]
  },
  {
    id: 45495,
    gems: [
      39998
    ]
  },
  {
    id: 45518
  },
  {
    id: 40255
  },
  {
    id: 45612,
    enchant: 3834,
    gems: [
      39998
    ]
  },
  {
    id: 45470,
    enchant: 1128,
    gems: [
      39998
    ]
  },
  {
    id: 40267
  }
];
const P2Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 48323,
    enchant: 3820,
    gems: [
      41285,
      40155
    ]
  },
  {
    id: 47144,
    gems: [
      40155
    ]
  },
  {
    id: 48321,
    enchant: 3810,
    gems: [
      40113
    ]
  },
  {
    id: 47552,
    enchant: 3722,
    gems: [
      40113
    ]
  },
  {
    id: 48325,
    enchant: 3832,
    gems: [
      40113,
      40132
    ]
  },
  {
    id: 45460,
    enchant: 2332,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 48324,
    enchant: 3604,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 47084,
    enchant: 3599,
    gems: [
      40132,
      40113,
      40113
    ]
  },
  {
    id: 47190,
    enchant: 3721,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 47099,
    enchant: 3606,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 46046,
    gems: [
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
    id: 47188
  },
  {
    id: 45518
  },
  {
    id: 46980,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 47085,
    enchant: 1128,
    gems: [
      40155
    ]
  },
  {
    id: 47666
  }
];
const P3AllianceGear = {
  items: items$2
};
const items$1 = [
  {
    id: 48328,
    enchant: 3820,
    gems: [
      41285,
      40153
    ]
  },
  {
    id: 47468,
    gems: [
      40155
    ]
  },
  {
    id: 48330,
    enchant: 3810,
    gems: [
      40113
    ]
  },
  {
    id: 47551,
    enchant: 3722,
    gems: [
      40113
    ]
  },
  {
    id: 48326,
    enchant: 3832,
    gems: [
      40113,
      40132
    ]
  },
  {
    id: 45460,
    enchant: 2332,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 48327,
    enchant: 3604,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 47447,
    enchant: 3599,
    gems: [
      40132,
      40113,
      40113
    ]
  },
  {
    id: 47479,
    enchant: 3721,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 47456,
    enchant: 3606,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 46046,
    gems: [
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
    id: 47477
  },
  {
    id: 45518
  },
  {
    id: 47422,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 47448,
    enchant: 1128,
    gems: [
      40155
    ]
  },
  {
    id: 47666
  }
];
const P3HordeGear = {
  items: items$1
};
const items = [
  {
    id: 51237,
    enchant: 3820,
    gems: [
      41285,
      40113
    ]
  },
  {
    id: 50658,
    gems: [
      40155
    ]
  },
  {
    id: 50698,
    enchant: 3810,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 50628,
    enchant: 3722,
    gems: [
      40155
    ]
  },
  {
    id: 51239,
    enchant: 3832,
    gems: [
      40113,
      40134
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
    id: 51238,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 50613,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 51236,
    enchant: 3721,
    gems: [
      40113,
      40155
    ]
  },
  {
    id: 50699,
    enchant: 3826,
    gems: [
      40134,
      40113
    ]
  },
  {
    id: 50398,
    gems: [
      40155
    ]
  },
  {
    id: 50664,
    gems: [
      40113
    ]
  },
  {
    id: 50348
  },
  {
    id: 50365
  },
  {
    id: 50734,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 50616,
    enchant: 1128,
    gems: [
      40155
    ]
  },
  {
    id: 50458
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
          spellId: 3738
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-6s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 58643
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 58774
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-4s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57722
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
          spellId: 58704
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-2s"
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
const priorityList$1 = [
  {
    action: {
      condition: {
        and: {
          vals: [
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            },
            {
              spellIsReady: {
                spellId: {
                  tag: -1,
                  spellId: 2825
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          tag: -1,
          spellId: 2825
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
                op: "OpGe",
                lhs: {
                  currentTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 2825
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 2825
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
              spellIsReady: {
                spellId: {
                  spellId: 26297
                }
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 16166
                }
              }
            }
          ]
        }
      },
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 26297
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 16166
              }
            }
          }
        ]
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
                      spellId: 26297
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
                      spellId: 16166
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 64701
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 26297
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
          spellId: 54758
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
              spellIsReady: {
                spellId: {
                  spellId: 2894
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 60494
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 60064
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        itemId: 37660
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 64713
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 75466
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 75473
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        itemId: 47213
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        itemId: 45490
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 71605
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 71636
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 71570
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 71572
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 72416
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpEq",
                      lhs: {
                        auraNumStacks: {
                          auraId: {
                            itemId: 50353
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "9"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpEq",
                      lhs: {
                        auraNumStacks: {
                          auraId: {
                            itemId: 50348
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "9"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpEq",
                      lhs: {
                        auraNumStacks: {
                          auraId: {
                            spellId: 60486
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "10"
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 33697
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 40212
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 37873
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 45148
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 48724
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 50357
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 2894
              }
            }
          }
        ]
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
                  auraIsActive: {
                    auraId: {
                      spellId: 2894
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 58704
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
          spellId: 58704
        }
      }
    }
  },
  {
    action: {
      multidot: {
        spellId: {
          spellId: 49233
        },
        maxDots: 3,
        maxOverlap: {
          "const": {
            val: "0ms"
          }
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
                op: "OpGt",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 49271
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49271
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
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 49233
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "2"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 60043
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49238
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
          spellId: 59159
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49238
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-3.5"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49271
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1.5"
      }
    }
  }
];
const priorityList = [
  {
    action: {
      condition: {
        and: {
          vals: [
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentTime: {}
                },
                rhs: {
                  "const": {
                    val: "0s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 2825,
          tag: -1
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
                op: "OpGe",
                lhs: {
                  currentTime: {}
                },
                rhs: {
                  "const": {
                    val: "0s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 2825
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
            spellCastTime: {
              spellId: {
                spellId: 49238
              }
            }
          },
          rhs: {
            "const": {
              val: "1.1s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 16166
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
            spellCastTime: {
              spellId: {
                spellId: 49238
              }
            }
          },
          rhs: {
            "const": {
              val: "1.1s"
            }
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
        cmp: {
          op: "OpGe",
          lhs: {
            spellCastTime: {
              spellId: {
                spellId: 49238
              }
            }
          },
          rhs: {
            "const": {
              val: "1.1s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26297
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
              or: {
                vals: [
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 60479
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 60064
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 60494
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 64741
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 64713
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 67669
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 71605
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 71636
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 75466
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 75473
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraNumStacks: {
                                auraId: {
                                  itemId: 40432
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraNumStacks: {
                                auraId: {
                                  itemId: 45308
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
                            op: "OpGe",
                            lhs: {
                              auraNumStacks: {
                                auraId: {
                                  itemId: 50340
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraNumStacks: {
                                auraId: {
                                  itemId: 50345
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraNumStacks: {
                                auraId: {
                                  itemId: 50353
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraNumStacks: {
                                auraId: {
                                  itemId: 50348
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 60479
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 60479
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 60064
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 60064
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 60494
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 60494
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 64741
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 64741
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 64713
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 64713
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 67669
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 67669
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 71605
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 71605
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 71636
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 71636
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 75466
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 75466
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 75473
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 75473
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              itemId: 50353
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  itemId: 50353
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              itemId: 50348
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  itemId: 50348
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "1s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          auraIsActive: {
                            auraId: {
                              itemId: 40212
                            }
                          }
                        },
                        {
                          or: {
                            vals: [
                              {
                                and: {
                                  vals: [
                                    {
                                      auraIsActive: {
                                        auraId: {
                                          spellId: 55637
                                        }
                                      }
                                    },
                                    {
                                      auraIsActive: {
                                        auraId: {
                                          spellId: 72416
                                        }
                                      }
                                    },
                                    {
                                      cmp: {
                                        op: "OpLe",
                                        lhs: {
                                          auraRemainingTime: {
                                            auraId: {
                                              itemId: 40212
                                            }
                                          }
                                        },
                                        rhs: {
                                          "const": {
                                            val: "1s"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                cmp: {
                                  op: "OpLe",
                                  lhs: {
                                    remainingTime: {}
                                  },
                                  rhs: {
                                    "const": {
                                      val: "120s"
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          or: {
                            vals: [
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 60479
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 60064
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 60494
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 64741
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 64713
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 67669
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 71605
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 71636
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 75466
                                  }
                                }
                              },
                              {
                                auraIsActive: {
                                  auraId: {
                                    spellId: 75473
                                  }
                                }
                              },
                              {
                                cmp: {
                                  op: "OpGe",
                                  lhs: {
                                    auraNumStacks: {
                                      auraId: {
                                        itemId: 40432
                                      }
                                    }
                                  },
                                  rhs: {
                                    "const": {
                                      val: "10"
                                    }
                                  }
                                }
                              },
                              {
                                cmp: {
                                  op: "OpGe",
                                  lhs: {
                                    auraNumStacks: {
                                      auraId: {
                                        itemId: 45308
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
                                  op: "OpGe",
                                  lhs: {
                                    auraNumStacks: {
                                      auraId: {
                                        itemId: 50340
                                      }
                                    }
                                  },
                                  rhs: {
                                    "const": {
                                      val: "10"
                                    }
                                  }
                                }
                              },
                              {
                                cmp: {
                                  op: "OpGe",
                                  lhs: {
                                    auraNumStacks: {
                                      auraId: {
                                        itemId: 50345
                                      }
                                    }
                                  },
                                  rhs: {
                                    "const": {
                                      val: "10"
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 33697
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 37873
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 45148
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 48724
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 50357
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 2894
              }
            }
          }
        ]
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
                  auraIsActive: {
                    auraId: {
                      spellId: 2894
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
                      spellId: 2894
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 58704
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 58734
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
          spellId: 58704
        }
      }
    }
  },
  {
    action: {
      multidot: {
        spellId: {
          spellId: 49233
        },
        maxDots: 3,
        maxOverlap: {
          "const": {
            val: "250ms"
          }
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
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 49233
                    }
                  }
                },
                rhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 60043
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 60043
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
          spellId: 60043
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
                op: "OpGe",
                lhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 49271
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: ".92s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 49271
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      remainingTimePercent: {}
                    },
                    rhs: {
                      "const": {
                        val: "4%"
                      }
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
          spellId: 49271
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
            spellCastTime: {
              spellId: {
                spellId: 49238
              }
            }
          },
          rhs: {
            "const": {
              val: "1.00s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 40211
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
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "60s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 33697
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          itemId: 42641
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          itemId: 41119
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
            remainingTime: {}
          },
          rhs: {
            spellCastTime: {
              spellId: {
                spellId: 49238
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49236
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49238
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 59159
        }
      }
    }
  }
];
const AdvancedApl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET = makePresetGear("Pre-raid Preset", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET_ALLI = makePresetGear("P3 Preset [A]", P3AllianceGear, { faction: Faction.Alliance });
const P3_PRESET_HORDE = makePresetGear("P3 Preset [H]", P3HordeGear, { faction: Faction.Horde });
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Default", DefaultApl);
const ROTATION_PRESET_ADVANCED = makePresetAPLRotation("Advanced", AdvancedApl);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "0533001523213351322301351-005050031",
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfFlametongueWeapon,
      major2: ShamanMajorGlyph.GlyphOfTotemOfWrath,
      major3: ShamanMajorGlyph.GlyphOfLightningBolt,
      minor1: ShamanMinorGlyph.GlyphOfThunderstorm,
      minor2: ShamanMinorGlyph.GlyphOfWaterShield,
      minor3: ShamanMinorGlyph.GlyphOfGhostWolf
    })
  })
};
const DefaultOptions = ElementalShaman_Options.create({
  shield: ShamanShield.WaterShield,
  totems: ShamanTotems.create({
    earth: EarthTotem.StrengthOfEarthTotem,
    air: AirTotem.WrathOfAirTotem,
    fire: FireTotem.TotemOfWrath,
    water: WaterTotem.ManaSpringTotem,
    useFireElemental: true
  })
});
const OtherDefaults = {
  distanceFromTarget: 20,
  profession1: Profession.Engineering,
  profession2: Profession.Tailoring,
  nibelungAverageCasts: 11
};
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfWildMagic,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecElementalShaman, {
  cssClass: "elemental-shaman-sim-ui",
  cssScheme: "shaman",
  knownIssues: [],
  warnings: [
    (simUI) => {
      return {
        updateOn: TypedEvent.onAny([simUI.player.rotationChangeEmitter, simUI.player.currentStatsEmitter]),
        getContent: () => {
          const hasT62P = simUI.player.getCurrentStats().sets.includes("Skyshatter Regalia (2pc)");
          const totems = simUI.player.getSpecOptions().totems;
          const hasAll4Totems = totems && totems.earth && totems.air && totems.fire && totems.water;
          if (hasT62P && !hasAll4Totems) {
            return "T6 2pc bonus is equipped, but inactive because not all 4 totem types are being used.";
          } else {
            return "";
          }
        }
      };
    }
  ],
  epStats: [
    Stat.StatIntellect,
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
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatMP5,
    Stat.StatResilience
  ],
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    stats = stats.addStat(Stat.StatSpellHit, player.getTalents().elementalPrecision * SPELL_HIT_RATING_PER_HIT_CHANCE);
    stats = stats.addStat(
      Stat.StatSpellCrit,
      player.getTalents().tidalMastery * 1 * SPELL_CRIT_RATING_PER_CRIT_CHANCE
    );
    return {
      talents: stats
    };
  },
  defaults: {
    gear: P3_PRESET_HORDE.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.22,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellCrit]: 0.67,
      [Stat.StatSpellHaste]: 1.29,
      [Stat.StatMP5]: 0.08
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    other: OtherDefaults,
    raidBuffs: RaidBuffs.create({
      arcaneBrilliance: true,
      divineSpirit: true,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      moonkinAura: TristateEffect.TristateEffectImproved,
      sanctifiedRetribution: true,
      demonicPactSp: 500,
      wrathOfAirTotem: true
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
      shadowMastery: true,
      heartOfTheCrusader: true
    })
  },
  playerIconInputs: [
    ShamanShieldInput
  ],
  includeBuffDebuffInputs: [],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      InThunderstormRange,
      DistanceFromTarget,
      TankAssignment,
      nibelungAverageCasts
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
      StandardTalents
    ],
    rotations: [
      ROTATION_PRESET_DEFAULT,
      ROTATION_PRESET_ADVANCED
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET_ALLI,
      P3_PRESET_HORDE,
      P4_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_PRESET_DEFAULT.rotation.rotation;
  },
  raidSimPresets: [
    {
      spec: Spec.SpecElementalShaman,
      tooltip: specNames[Spec.SpecElementalShaman],
      defaultName: "Elemental",
      iconUrl: getSpecIcon(Class.ClassShaman, 0),
      talents: StandardTalents.data,
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
          3: P3_PRESET_ALLI.gear,
          4: P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET.gear,
          2: P2_PRESET.gear,
          3: P3_PRESET_HORDE.gear,
          4: P4_PRESET.gear
        }
      }
    }
  ]
});
class ElementalShamanSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  ElementalShamanSimUI as E
};
//# sourceMappingURL=sim-248d7368.chunk.js.map
