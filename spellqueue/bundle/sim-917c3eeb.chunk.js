import { A as ActionId, aG as UnitReference_Type, aH as UnitReference, aU as Faction, bV as SavedTalents, N as Glyphs, D as DruidMajorGlyph, a as DruidMinorGlyph, el as BalanceDruid_Options, F as Consumes, dS as Potions, dN as Flask, dQ as Food, dM as Explosive, aE as RaidBuffs, bc as TristateEffect, E as IndividualBuffs, x as PartyBuffs, aF as Debuffs, $ as Profession, a2 as Stat, G as Stats, S as Spec, bo as specNames, g as getSpecIcon, u as Class, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { m as makeSpecOptionsBooleanIconInput, a as makeSpecOptionsNumberInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, M as MeleeHasteBuff, d as MeleeCritBuff, A as AttackPowerPercentBuff, e as AttackPowerBuff, f as MajorArmorDebuff, g as MinorArmorDebuff, h as PhysicalDamageDebuff, T as TankAssignment, R as ReactionTime, D as DistanceFromTarget, n as nibelungAverageCasts, I as IndividualSimUI } from "./preset_utils-4260fe3d.chunk.js";
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
const OkfUptime = makeSpecOptionsNumberInput({
  fieldName: "okfUptime",
  label: "Owlkin Frenzy Uptime (%)",
  labelTooltip: "Percentage of fight uptime for Owlkin Frenzy",
  percent: true
});
const items$6 = [
  {
    id: 42554,
    enchant: 3820,
    gems: [
      41285,
      40049
    ]
  },
  {
    id: 40680
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
    enchant: 3859
  },
  {
    id: 39547,
    enchant: 3832,
    gems: [
      42144,
      40026
    ]
  },
  {
    id: 37884,
    enchant: 2332,
    gems: [
      0
    ]
  },
  {
    id: 39544,
    enchant: 3604,
    gems: [
      42144,
      0
    ]
  },
  {
    id: 40696,
    enchant: 3601,
    gems: [
      40014,
      39998
    ]
  },
  {
    id: 37854,
    enchant: 3719
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      39998
    ]
  },
  {
    id: 40585
  },
  {
    id: 43253,
    gems: [
      40026
    ]
  },
  {
    id: 37873
  },
  {
    id: 40682
  },
  {
    id: 45085,
    enchant: 3834
  },
  {
    id: 40698
  },
  {
    id: 40712
  }
];
const PreraidGear = {
  items: items$6
};
const items$5 = [
  {
    id: 40467,
    enchant: 3820,
    gems: [
      41285,
      42144
    ]
  },
  {
    id: 44661,
    gems: [
      40026
    ]
  },
  {
    id: 40470,
    enchant: 3810,
    gems: [
      42144
    ]
  },
  {
    id: 44005,
    enchant: 3859,
    gems: [
      40026
    ]
  },
  {
    id: 40469,
    enchant: 3832,
    gems: [
      42144,
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
    id: 40466,
    enchant: 3604,
    gems: [
      39998,
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
    id: 40519,
    enchant: 3606
  },
  {
    id: 40399
  },
  {
    id: 40080
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
    id: 40192
  },
  {
    id: 40321
  }
];
const P1Gear = {
  items: items$5
};
const items$4 = [
  {
    id: 45497,
    enchant: 3820,
    gems: [
      41285,
      42144
    ]
  },
  {
    id: 45133,
    gems: [
      40048
    ]
  },
  {
    id: 46196,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 45242,
    enchant: 3859,
    gems: [
      40048
    ]
  },
  {
    id: 45519,
    enchant: 3832,
    gems: [
      40051,
      42144,
      40026
    ]
  },
  {
    id: 45446,
    enchant: 2332,
    gems: [
      42144,
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
    id: 45619,
    gems: [
      39998,
      39998,
      39998
    ]
  },
  {
    id: 46192,
    enchant: 3719,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45537,
    enchant: 3606,
    gems: [
      39998,
      40026
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
    id: 45466
  },
  {
    id: 45518
  },
  {
    id: 45620,
    enchant: 3834,
    gems: [
      39998
    ]
  },
  {
    id: 45617
  },
  {
    id: 40321
  }
];
const P2Gear = {
  items: items$4
};
const items$3 = [
  {
    id: 48171,
    enchant: 3820,
    gems: [
      41285,
      40153
    ]
  },
  {
    id: 47144,
    gems: [
      40153
    ]
  },
  {
    id: 48168,
    enchant: 3810,
    gems: [
      40153
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
    id: 48169,
    enchant: 3832,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 47066,
    enchant: 2332,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 48172,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47084,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47190,
    enchant: 3719,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 47097,
    enchant: 3606,
    gems: [
      40133,
      40113
    ]
  },
  {
    id: 47237,
    gems: [
      40113
    ]
  },
  {
    id: 46046,
    gems: [
      40113
    ]
  },
  {
    id: 45518
  },
  {
    id: 47188
  },
  {
    id: 47206,
    enchant: 3834
  },
  {
    id: 47064
  },
  {
    id: 47670
  }
];
const P3AllianceGear = {
  items: items$3
};
const items$2 = [
  {
    id: 48174,
    enchant: 3820,
    gems: [
      41285,
      40155
    ]
  },
  {
    id: 47468,
    gems: [
      40155
    ]
  },
  {
    id: 48177,
    enchant: 3810,
    gems: [
      40153
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
    id: 48176,
    enchant: 3832,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 47467,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 48173,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47447,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47479,
    enchant: 3719,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 47454,
    enchant: 3606,
    gems: [
      40133,
      40113
    ]
  },
  {
    id: 47489,
    gems: [
      40155
    ]
  },
  {
    id: 46046,
    gems: [
      40155
    ]
  },
  {
    id: 45518
  },
  {
    id: 47477
  },
  {
    id: 47483,
    enchant: 3834
  },
  {
    id: 47437
  },
  {
    id: 47670
  }
];
const P3HordeGear = {
  items: items$2
};
const items$1 = [
  {
    id: 51290,
    enchant: 3820,
    gems: [
      41285,
      40113
    ]
  },
  {
    id: 50724,
    gems: [
      40113
    ]
  },
  {
    id: 51292,
    enchant: 3810,
    gems: [
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
    id: 51294,
    enchant: 3832,
    gems: [
      40113,
      40155
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
    id: 51291,
    enchant: 3604,
    gems: [
      45883,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40113,
      45883,
      40113
    ]
  },
  {
    id: 50694,
    enchant: 3719,
    gems: [
      40113,
      40133,
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
    id: 50664,
    gems: [
      40113
    ]
  },
  {
    id: 50398,
    gems: [
      40152
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
    id: 50719
  },
  {
    id: 50457
  }
];
const P4AllianceGear = {
  items: items$1
};
const items = [
  {
    id: 51290,
    enchant: 3820,
    gems: [
      41285,
      40113
    ]
  },
  {
    id: 50724,
    gems: [
      40113
    ]
  },
  {
    id: 51292,
    enchant: 3810,
    gems: [
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
    id: 51294,
    enchant: 3832,
    gems: [
      40113,
      40155
    ]
  },
  {
    id: 50651,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 50663,
    enchant: 3604,
    gems: [
      40133,
      40113,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40113,
      45883,
      40113
    ]
  },
  {
    id: 51293,
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
    id: 50664,
    gems: [
      40113
    ]
  },
  {
    id: 50398,
    gems: [
      40152
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
    id: 50719
  },
  {
    id: 50457
  }
];
const P4HordeGear = {
  items
};
const type$2 = "TypeAPL";
const prepullActions$2 = [
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
        val: "-1.5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48461
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1.5s"
      }
    }
  }
];
const priorityList$2 = [
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
              val: "5s"
            }
          }
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
        cmp: {
          op: "OpLt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "0.5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48463
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
        cmp: {
          op: "OpGt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "20"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 65861
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
                spellId: 48463
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48463
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 53201
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          otherId: "OtherActionPotion"
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
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
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 48518
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48465
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 48517
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48461
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIcdIsReadyWithReactionTime: {
                    auraId: {
                      spellId: 48518
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
          spellId: 48468
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            auraIcdIsReadyWithReactionTime: {
              auraId: {
                spellId: 48518
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48465
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48461
        }
      }
    }
  }
];
const BasicP3AplJson = {
  type: type$2,
  prepullActions: prepullActions$2,
  priorityList: priorityList$2
};
const type$1 = "TypeAPL";
const prepullActions$1 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48470
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-2.3s"
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
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48461
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
        cmp: {
          op: "OpGt",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "5s"
            }
          }
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
        cmp: {
          op: "OpLt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48463
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
        cmp: {
          op: "OpGt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "20s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 65861
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
              val: "0s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53201
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
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
              cmp: {
                op: "OpGt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          otherId: "OtherActionPotion"
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "11s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48468
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48517
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48517
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48468
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
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48465
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
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48517
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48461
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
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
          spellId: 48468
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            auraIcdIsReadyWithReactionTime: {
              auraId: {
                spellId: 48518
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48465
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48461
        }
      }
    }
  }
];
const P4FocusAplJson = {
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
          spellId: 48470
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-2.3s"
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
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48461
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
      condition: {
        cmp: {
          op: "OpGt",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "5s"
            }
          }
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
        cmp: {
          op: "OpLt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48463
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
      autocastOtherCooldowns: {}
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
              val: "20s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 65861
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
              val: "0s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53201
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
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
              cmp: {
                op: "OpGt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          otherId: "OtherActionPotion"
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48518
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "11s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48468
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48517
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            },
            {
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48517
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48468
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
              auraIcdIsReadyWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 48517
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "0s"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 48463
                    }
                  }
                }
              }
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 16886
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48463
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
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48518
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48465
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
              auraIsActiveWithReactionTime: {
                auraId: {
                  spellId: 48517
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48461
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
                  dotIsActive: {
                    spellId: {
                      spellId: 48468
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
          spellId: 48468
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            auraIcdIsReadyWithReactionTime: {
              auraId: {
                spellId: 48518
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48465
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48461
        }
      }
    }
  }
];
const P4StarfireAplJson = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET = makePresetGear("Pre-raid Preset", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET_ALLI = makePresetGear("P3 Preset [A]", P3AllianceGear, { faction: Faction.Alliance });
const P3_PRESET_HORDE = makePresetGear("P3 Preset [H]", P3HordeGear, { faction: Faction.Horde });
const P4_PRESET_ALLI = makePresetGear("P4 Preset [A]", P4AllianceGear, { faction: Faction.Alliance });
const P4_PRESET_HORDE = makePresetGear("P4 Preset [H]", P4HordeGear, { faction: Faction.Horde });
const ROTATION_PRESET_P3_APL = makePresetAPLRotation("P3", BasicP3AplJson);
const ROTATION_PRESET_P4_FOCUS_APL = makePresetAPLRotation("P4 Focus Glyph", P4FocusAplJson);
const ROTATION_PRESET_P4_STARFIRE_APL = makePresetAPLRotation("P4 Starfire Glyph", P4StarfireAplJson);
const Phase1Talents = {
  name: "Phase 1",
  data: SavedTalents.create({
    talentsString: "5032003115331303213305311231--205003012",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfFocus,
      major2: DruidMajorGlyph.GlyphOfInsectSwarm,
      major3: DruidMajorGlyph.GlyphOfStarfall,
      minor1: DruidMinorGlyph.GlyphOfTyphoon,
      minor2: DruidMinorGlyph.GlyphOfUnburdenedRebirth,
      minor3: DruidMinorGlyph.GlyphOfTheWild
    })
  })
};
const Phase2Talents = {
  name: "Phase 2",
  data: SavedTalents.create({
    talentsString: "5012203115331303213305311231--205003012",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfStarfire,
      major2: DruidMajorGlyph.GlyphOfInsectSwarm,
      major3: DruidMajorGlyph.GlyphOfStarfall,
      minor1: DruidMinorGlyph.GlyphOfTyphoon,
      minor2: DruidMinorGlyph.GlyphOfUnburdenedRebirth,
      minor3: DruidMinorGlyph.GlyphOfTheWild
    })
  })
};
const Phase3Talents = {
  name: "Phase 3",
  data: SavedTalents.create({
    talentsString: "5102223115331303213305311031--205003012",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfStarfire,
      major2: DruidMajorGlyph.GlyphOfMoonfire,
      major3: DruidMajorGlyph.GlyphOfStarfall,
      minor1: DruidMinorGlyph.GlyphOfTyphoon,
      minor2: DruidMinorGlyph.GlyphOfUnburdenedRebirth,
      minor3: DruidMinorGlyph.GlyphOfTheWild
    })
  })
};
const Phase4Talents = {
  name: "Phase 4",
  data: SavedTalents.create({
    talentsString: "5102223115331303213305311031--205003012",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfFocus,
      major2: DruidMajorGlyph.GlyphOfInsectSwarm,
      major3: DruidMajorGlyph.GlyphOfStarfall,
      minor1: DruidMinorGlyph.GlyphOfTyphoon,
      minor2: DruidMinorGlyph.GlyphOfUnburdenedRebirth,
      minor3: DruidMinorGlyph.GlyphOfTheWild
    })
  })
};
const DefaultOptions = BalanceDruid_Options.create({
  innervateTarget: UnitReference.create()
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast,
  prepopPotion: Potions.PotionOfWildMagic,
  fillerExplosive: Explosive.ExplosiveSaroniteBomb
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
  wrathOfAirTotem: true,
  demonicPactSp: 500
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
  distanceFromTarget: 18,
  profession1: Profession.Engineering,
  profession2: Profession.Tailoring,
  nibelungAverageCasts: 11
};
const SPEC_CONFIG = registerSpecConfig(Spec.SpecBalanceDruid, {
  cssClass: "balance-druid-sim-ui",
  cssScheme: "druid",
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
  defaults: {
    gear: P3_PRESET_HORDE.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.43,
      [Stat.StatSpirit]: 0.34,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellCrit]: 0.82,
      [Stat.StatSpellHaste]: 0.8,
      [Stat.StatMP5]: 0
    }),
    consumes: DefaultConsumes,
    talents: Phase3Talents.data,
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
  includeBuffDebuffInputs: [
    MeleeHasteBuff,
    MeleeCritBuff,
    AttackPowerPercentBuff,
    AttackPowerBuff,
    MajorArmorDebuff,
    MinorArmorDebuff,
    PhysicalDamageDebuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      OkfUptime,
      TankAssignment,
      ReactionTime,
      DistanceFromTarget,
      nibelungAverageCasts
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      Phase1Talents,
      Phase2Talents,
      Phase3Talents,
      Phase4Talents
    ],
    rotations: [
      ROTATION_PRESET_P3_APL,
      ROTATION_PRESET_P4_FOCUS_APL,
      ROTATION_PRESET_P4_STARFIRE_APL
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET,
      P3_PRESET_HORDE,
      P3_PRESET_ALLI,
      P4_PRESET_HORDE,
      P4_PRESET_ALLI
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_PRESET_P3_APL.rotation.rotation;
  },
  raidSimPresets: [
    {
      spec: Spec.SpecBalanceDruid,
      tooltip: specNames[Spec.SpecBalanceDruid],
      defaultName: "Balance",
      iconUrl: getSpecIcon(Class.ClassDruid, 0),
      talents: Phase2Talents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      otherDefaults: OtherDefaults,
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
          3: P3_PRESET_ALLI.gear,
          4: P4_PRESET_ALLI.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET.gear,
          2: P2_PRESET.gear,
          3: P3_PRESET_HORDE.gear,
          4: P4_PRESET_HORDE.gear
        }
      }
    }
  ]
});
class BalanceDruidSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  BalanceDruidSimUI as B
};
//# sourceMappingURL=sim-917c3eeb.chunk.js.map
