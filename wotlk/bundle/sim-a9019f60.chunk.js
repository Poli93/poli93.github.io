import { A as ActionId, aG as UnitReference_Type, aH as UnitReference, c1 as FeralDruid_Rotation_AplType, T as TypedEvent, eA as FeralDruid_Rotation_BiteModeType, ac as APLRotation_Type, eB as FeralDruid_Rotation, eC as FeralDruid_Rotation_BearweaveType, S as Spec, bV as SavedTalents, N as Glyphs, D as DruidMajorGlyph, a as DruidMinorGlyph, eD as FeralDruid_Options, F as Consumes, dO as Flask, dR as Food, dT as Potions, a2 as Stat, a1 as PseudoStat, G as Stats, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, V as ItemSlot, dF as APLPrepullAction, dy as APLAction, L as APLRotation, dG as APLListItem, bo as specNames, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-6881a4e3.chunk.js";
import { m as makeSpecOptionsBooleanIconInput, a as makeSpecOptionsNumberInput, i as makeSpecOptionsBooleanInput, G as makeRotationEnumInput, H as makeRotationBooleanInput, J as makeRotationNumberInput, b as makePresetGear, c as makePresetAPLRotation, K as makePresetSimpleRotation, r as registerSpecConfig, L as IntellectBuff, z as MP5Buff, O as JudgementOfWisdom, T as TankAssignment, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-4ea4a78a.chunk.js";
import { P as PhysicalDPSGemOptimizer } from "./suggest_gems_action-120ac3d4.chunk.js";
import { s as standardCooldownDefaults } from "./apl_utils-e5278a2a.chunk.js";
makeSpecOptionsBooleanIconInput({
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
const LatencyMs = makeSpecOptionsNumberInput({
  fieldName: "latencyMs",
  label: "Latency",
  labelTooltip: "Player latency, in milliseconds. Adds a delay to actions that cannot be spell queued."
});
const AssumeBleedActive = makeSpecOptionsBooleanInput({
  fieldName: "assumeBleedActive",
  label: "Assume Bleed Always Active",
  labelTooltip: "Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",
  extraCssClasses: ["within-raid-sim-hide"]
});
const BearWeaveActive = makeSpecOptionsBooleanInput({
  fieldName: "bearWeaveActive",
  label: "Enables Lacerateweaving",
  labelTooltip: "Enables the Lacerateweaving rotation.",
  extraCssClasses: ["within-raid-sim-hide"]
});
const SnekWeaveActive = makeSpecOptionsBooleanInput({
  fieldName: "snekWeaveActive",
  label: "Enables Snakeweaving",
  labelTooltip: "Enables Snake/Idol/weapon weaving into the lacerateweaving rotation.",
  extraCssClasses: ["within-raid-sim-hide"]
});
const FlowerWeaveActive = makeSpecOptionsBooleanInput({
  fieldName: "flowerWeaveActive",
  label: "Enables Flowerweaving",
  labelTooltip: "Enables Gift of the Wild weaving into the monocat rotation.",
  extraCssClasses: ["within-raid-sim-hide"]
});
function ShouldShowAdvParamST(player) {
  let rot = player.getSimpleRotation();
  return rot.manualParams && rot.rotationType == FeralDruid_Rotation_AplType.SingleTarget;
}
function ShouldShowAdvParamAoe(player) {
  let rot = player.getSimpleRotation();
  return rot.manualParams && rot.rotationType == FeralDruid_Rotation_AplType.Aoe;
}
const FeralDruidRotationConfig = {
  inputs: [
    makeRotationEnumInput({
      fieldName: "rotationType",
      label: "Type",
      values: [
        { name: "Single Target", value: FeralDruid_Rotation_AplType.SingleTarget },
        { name: "AOE", value: FeralDruid_Rotation_AplType.Aoe }
      ]
    }),
    makeRotationBooleanInput({
      fieldName: "prePopOoc",
      label: "Pre-pop Clearcasting",
      labelTooltip: "Start fight with clearcasting",
      showWhen: (player) => player.getTalents().omenOfClarity,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationBooleanInput({
      fieldName: "prePopBerserk",
      label: "Pre-pop Berserk",
      labelTooltip: "Pre pop berserk 1 sec before fight",
      showWhen: (player) => player.getTalents().berserk,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationBooleanInput({
      fieldName: "manualParams",
      label: "Manual Advanced Parameters",
      labelTooltip: "Manually specify advanced parameters, otherwise will use preset defaults"
    }),
    makeRotationNumberInput({
      fieldName: "maxFfDelay",
      label: "Max FF Delay",
      labelTooltip: "Max allowed delay to wait for ff to come off CD in seconds",
      float: true,
      positive: true,
      showWhen: (player) => player.getSimpleRotation().manualParams
    }),
    makeRotationNumberInput({
      fieldName: "minRoarOffset",
      label: "Roar Offset",
      labelTooltip: "Targeted offset in Rip/Roar timings",
      showWhen: ShouldShowAdvParamST
    }),
    makeRotationNumberInput({
      fieldName: "ripLeeway",
      label: "Rip Leeway",
      labelTooltip: "Rip leeway when determining roar clips",
      showWhen: ShouldShowAdvParamST
    }),
    makeRotationBooleanInput({
      fieldName: "useRake",
      label: "Use Rake",
      labelTooltip: "Use rake during rotation",
      showWhen: ShouldShowAdvParamST
    }),
    makeRotationBooleanInput({
      fieldName: "useBite",
      label: "Bite during rotation",
      labelTooltip: "Use bite during rotation rather than just at end",
      showWhen: ShouldShowAdvParamST
    }),
    makeRotationNumberInput({
      fieldName: "biteTime",
      label: "Bite Time",
      labelTooltip: "Min seconds on Rip/Roar to bite",
      showWhen: (player) => ShouldShowAdvParamST(player) && player.getSimpleRotation().useBite == true && player.getSimpleRotation().biteModeType == FeralDruid_Rotation_BiteModeType.Emperical
    }),
    makeRotationBooleanInput({
      fieldName: "flowerWeave",
      label: "Flower Weave",
      labelTooltip: "Fish for clearcasting during rotation with gotw",
      showWhen: ShouldShowAdvParamAoe
    }),
    makeRotationNumberInput({
      extraCssClasses: ["used-in-apl"],
      fieldName: "raidTargets",
      label: "GotW Raid Targets",
      labelTooltip: "Raid size to assume for clearcast proc chance (can include pets as well, so 25 man raid potentically can be ~30)",
      showWhen: (player) => player.aplRotation.type != APLRotation_Type.TypeSimple || ShouldShowAdvParamAoe(player) && player.getSimpleRotation().flowerWeave == true
    }),
    makeRotationNumberInput({
      fieldName: "hotUptime",
      label: "Revitalize Hot Uptime",
      labelTooltip: "Hot uptime percentage to assume when theorizing energy gains",
      percent: true,
      showWhen: (player) => player.getSimpleRotation().useBite == true && player.getSimpleRotation().biteModeType == FeralDruid_Rotation_BiteModeType.Analytical
    })
  ]
};
const items$4 = [
  {
    id: 42550,
    enchant: 3817,
    gems: [
      41398,
      39996
    ]
  },
  {
    id: 40678
  },
  {
    id: 37139,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 37840,
    enchant: 3605
  },
  {
    id: 37219,
    enchant: 3832
  },
  {
    id: 44203,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 37409,
    enchant: 3604,
    gems: [
      0
    ]
  },
  {
    id: 40694,
    gems: [
      49110,
      39996
    ]
  },
  {
    id: 37644,
    enchant: 3823
  },
  {
    id: 44297,
    enchant: 3606
  },
  {
    id: 37642
  },
  {
    id: 37624
  },
  {
    id: 40684
  },
  {
    id: 37166
  },
  {
    id: 37883,
    enchant: 3827
  },
  {},
  {
    id: 40713
  }
];
const PreraidGear = {
  items: items$4
};
const items$3 = [
  {
    id: 40473,
    enchant: 3817,
    gems: [
      41398,
      39996
    ]
  },
  {
    id: 44664,
    gems: [
      39996
    ]
  },
  {
    id: 40494,
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
    id: 40539,
    enchant: 3832,
    gems: [
      39996
    ]
  },
  {
    id: 39765,
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
    id: 40205,
    gems: [
      39996
    ]
  },
  {
    id: 44011,
    enchant: 3823,
    gems: [
      39996,
      49110
    ]
  },
  {
    id: 40243,
    enchant: 3606,
    gems: [
      40014
    ]
  },
  {
    id: 40474
  },
  {
    id: 40717
  },
  {
    id: 42987
  },
  {
    id: 40256
  },
  {
    id: 40388,
    enchant: 3789
  },
  {},
  {
    id: 39757
  }
];
const P1Gear = {
  items: items$3
};
const items$2 = [
  {
    id: 46161,
    enchant: 3817,
    gems: [
      41398,
      40002
    ]
  },
  {
    id: 45517,
    gems: [
      40002
    ]
  },
  {
    id: 45245,
    enchant: 3808,
    gems: [
      40002,
      40002
    ]
  },
  {
    id: 46032,
    enchant: 3605,
    gems: [
      40002,
      40058
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      40002,
      40002,
      40002
    ]
  },
  {
    id: 45869,
    enchant: 3845,
    gems: [
      40037
    ]
  },
  {
    id: 46158,
    enchant: 3604,
    gems: [
      40002
    ]
  },
  {
    id: 46095,
    gems: [
      40002,
      40002,
      40002
    ]
  },
  {
    id: 45536,
    enchant: 3823,
    gems: [
      39996,
      39996,
      39996
    ]
  },
  {
    id: 45564,
    enchant: 3606,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 46048,
    gems: [
      45862
    ]
  },
  {
    id: 45608,
    gems: [
      39996
    ]
  },
  {
    id: 45931
  },
  {
    id: 46038
  },
  {
    id: 45613,
    enchant: 3789,
    gems: [
      40037,
      42702
    ]
  },
  {},
  {
    id: 40713
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 48204,
    enchant: 3817,
    gems: [
      41398,
      40146
    ]
  },
  {
    id: 47060,
    gems: [
      40117
    ]
  },
  {
    id: 48207,
    enchant: 3808,
    gems: [
      40146
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40117
    ]
  },
  {
    id: 48206,
    enchant: 3832,
    gems: [
      40117,
      40146
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40146,
      0
    ]
  },
  {
    id: 47945,
    enchant: 3604,
    gems: [
      40112,
      40117,
      0
    ]
  },
  {
    id: 47112,
    gems: [
      40146,
      40117,
      40117
    ]
  },
  {
    id: 48205,
    enchant: 3823,
    gems: [
      40117,
      49110
    ]
  },
  {
    id: 47077,
    enchant: 3606,
    gems: [
      40146,
      40117
    ]
  },
  {
    id: 47075,
    gems: [
      40117
    ]
  },
  {
    id: 45608,
    gems: [
      40117
    ]
  },
  {
    id: 45931
  },
  {
    id: 47131
  },
  {
    id: 47239,
    enchant: 3789,
    gems: [
      40146,
      40117
    ]
  },
  {},
  {
    id: 47668
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 51296,
    enchant: 3817,
    gems: [
      41398,
      40117
    ]
  },
  {
    id: 50633,
    gems: [
      40117
    ]
  },
  {
    id: 51299,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40117
    ]
  },
  {
    id: 51298,
    enchant: 3832,
    gems: [
      40117,
      40125
    ]
  },
  {
    id: 50670,
    enchant: 3845,
    gems: [
      40125,
      0
    ]
  },
  {
    id: 50675,
    enchant: 3604,
    gems: [
      40162,
      40117,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 51297,
    enchant: 3823,
    gems: [
      40117,
      40162
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40143,
      40143
    ]
  },
  {
    id: 50604,
    gems: [
      40143
    ]
  },
  {
    id: 50402,
    gems: [
      40143
    ]
  },
  {
    id: 50363
  },
  {
    id: 50343
  },
  {
    id: 50735,
    enchant: 3789,
    gems: [
      40117,
      49110,
      40143
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
const type$2 = "TypeAPL";
const prepullActions$2 = [
  {
    action: {
      activateAura: {
        auraId: {
          spellId: 16870
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
          spellId: 50334
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
const priorityList$2 = [
  {
    action: {
      autocastOtherCooldowns: {}
    }
  },
  {
    action: {
      condition: {
        "const": {
          val: "false"
        }
      },
      castSpell: {
        spellId: {
          spellId: 50334
        }
      }
    }
  },
  {
    action: {
      catOptimalRotationAction: {
        manualParams: false,
        maxFfDelay: 0.1,
        minRoarOffset: 25,
        ripLeeway: 4,
        useRake: true,
        useBite: true,
        biteTime: 4
      }
    }
  }
];
const DefaultApl = {
  type: type$2,
  prepullActions: prepullActions$2,
  priorityList: priorityList$2
};
const type$1 = "TypeAPL";
const prepullActions$1 = [
  {
    action: {
      activateAura: {
        auraId: {
          spellId: 16870
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
      autocastOtherCooldowns: {}
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
                      spellId: 9634
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  currentEnergy: {}
                },
                rhs: {
                  "const": {
                    val: "30"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 50213
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
              auraIsActive: {
                auraId: {
                  spellId: 9634
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        currentRage: {}
                      },
                      rhs: {
                        "const": {
                          val: "35"
                        }
                      }
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
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
              auraIsActive: {
                auraId: {
                  spellId: 9634
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 48568
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48568
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "3s"
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 9634
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        currentEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "70"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        currentRage: {}
                      },
                      rhs: {
                        "const": {
                          val: "10"
                        }
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 50334
                      }
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 49800
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "3s"
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
                              spellId: 16870
                            }
                          }
                        },
                        {
                          not: {
                            val: {
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
      },
      castSpell: {
        spellId: {
          spellId: 768
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
              auraIsActive: {
                auraId: {
                  spellId: 9634
                }
              }
            },
            {
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 9634
                }
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 48564
                }
              }
            }
          ]
        }
      },
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
        auraIsActive: {
          auraId: {
            spellId: 9634
          }
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
        and: {
          vals: [
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 9634
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
                      spellId: 16870
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "5"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 49800
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "10s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49800
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
                  auraIsActive: {
                    auraId: {
                      spellId: 9634
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 50213
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "15s"
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 49800
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
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
          spellId: 50334
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
                  auraIsActive: {
                    auraId: {
                      spellId: 9634
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    not: {
                      val: {
                        auraIsActive: {
                          auraId: {
                            spellId: 52610
                          }
                        }
                      }
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGt",
                            lhs: {
                              math: {
                                op: "OpSub",
                                lhs: {
                                  remainingTime: {}
                                },
                                rhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10s"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 52610
                                }
                              }
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "4s"
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              catNewSavageRoarDuration: {}
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "25s"
                                  }
                                }
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
      },
      castSpell: {
        spellId: {
          spellId: 52610
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
                  auraIsActive: {
                    auraId: {
                      spellId: 9634
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "5"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
                    }
                  }
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
                              spellId: 50334
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "25"
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
                          not: {
                            val: {
                              auraIsActive: {
                                auraId: {
                                  spellId: 50334
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "67"
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
            {
              or: {
                vals: [
                  {
                    and: {
                      vals: [
                        {
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 52610
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 49800
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10s"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 52610
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10s"
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
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              math: {
                                op: "OpSub",
                                lhs: {
                                  remainingTime: {}
                                },
                                rhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        remainingTime: {}
                      },
                      rhs: {
                        "const": {
                          val: "10s"
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
      castSpell: {
        spellId: {
          spellId: 48577
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
                  auraIsActive: {
                    auraId: {
                      spellId: 9634
                    }
                  }
                }
              }
            },
            {
              auraShouldRefresh: {
                auraId: {
                  spellId: 48566
                },
                maxOverlap: {
                  "const": {
                    val: "1s"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
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
          spellId: 48566
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
                  auraIsActive: {
                    auraId: {
                      spellId: 9634
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
                      spellId: 16870
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
                      spellId: 48574
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
                  "const": {
                    val: "9s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48574
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
              auraIsActive: {
                auraId: {
                  spellId: 768
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  autoTimeToNext: {}
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
      resetSwing: {}
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
                      spellId: 9634
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
                      spellId: 50334
                    }
                  }
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
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "38"
                              }
                            }
                          }
                        },
                        {
                          not: {
                            val: {
                              auraIsActive: {
                                auraId: {
                                  spellId: 16870
                                }
                              }
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
                                      dotIsActive: {
                                        spellId: {
                                          spellId: 49800
                                        }
                                      }
                                    },
                                    {
                                      cmp: {
                                        op: "OpGe",
                                        lhs: {
                                          dotRemainingTime: {
                                            spellId: {
                                              spellId: 49800
                                            }
                                          }
                                        },
                                        rhs: {
                                          "const": {
                                            val: "4500ms"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                not: {
                                  val: {
                                    dotIsActive: {
                                      spellId: {
                                        spellId: 49800
                                      }
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
                  {
                    and: {
                      vals: [
                        {
                          dotIsActive: {
                            spellId: {
                              spellId: 48568
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 48568
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "2600ms"
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
      },
      castSpell: {
        spellId: {
          spellId: 9634
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
                spellId: 9634
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48572
        }
      }
    }
  }
];
const LacerateweavingApl = {
  type: type$1,
  prepullActions: prepullActions$1,
  priorityList: priorityList$1
};
const type = "TypeAPL";
const prepullActions = [
  {
    action: {
      activateAura: {
        auraId: {
          spellId: 16870
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "30"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 50213
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
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "5"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 49800
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "10s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49800
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
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
                    }
                  }
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
                              spellId: 50334
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "15"
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
                          not: {
                            val: {
                              auraIsActive: {
                                auraId: {
                                  spellId: 50334
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "87"
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
      },
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
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 50213
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "15s"
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 49800
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
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
          spellId: 50334
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
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    not: {
                      val: {
                        auraIsActive: {
                          auraId: {
                            spellId: 52610
                          }
                        }
                      }
                    }
                  },
                  {
                    and: {
                      vals: [
                        {
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGt",
                            lhs: {
                              math: {
                                op: "OpSub",
                                lhs: {
                                  remainingTime: {}
                                },
                                rhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10s"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 52610
                                }
                              }
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "4s"
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 52610
                                }
                              }
                            },
                            rhs: {
                              remainingTime: {}
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              catNewSavageRoarDuration: {}
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "25s"
                                  }
                                }
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
      },
      castSpell: {
        spellId: {
          spellId: 52610
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
                op: "OpEq",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "5"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
                    }
                  }
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
                              spellId: 50334
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "25"
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
                          not: {
                            val: {
                              auraIsActive: {
                                auraId: {
                                  spellId: 50334
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              currentEnergy: {}
                            },
                            rhs: {
                              "const": {
                                val: "67"
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
            {
              or: {
                vals: [
                  {
                    and: {
                      vals: [
                        {
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 52610
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 49800
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "4s"
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGe",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 52610
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "4s"
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
                          dotIsActive: {
                            spellId: {
                              spellId: 49800
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              math: {
                                op: "OpSub",
                                lhs: {
                                  remainingTime: {}
                                },
                                rhs: {
                                  dotRemainingTime: {
                                    spellId: {
                                      spellId: 49800
                                    }
                                  }
                                }
                              }
                            },
                            rhs: {
                              "const": {
                                val: "10s"
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        remainingTime: {}
                      },
                      rhs: {
                        "const": {
                          val: "10s"
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
      castSpell: {
        spellId: {
          spellId: 48577
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
              auraShouldRefresh: {
                auraId: {
                  spellId: 48566
                },
                maxOverlap: {
                  "const": {
                    val: "1s"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
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
          spellId: 48566
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
                  auraIsActive: {
                    auraId: {
                      spellId: 16870
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
                      spellId: 48574
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
                  "const": {
                    val: "9s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48574
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
                    auraIsActive: {
                      auraId: {
                        spellId: 16870
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        catExcessEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "120"
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  "const": {
                    val: "1"
                  }
                },
                rhs: {
                  "const": {
                    val: "0"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48566
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
                    auraIsActive: {
                      auraId: {
                        spellId: 16870
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        catExcessEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "42s"
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
      castSpell: {
        spellId: {
          spellId: 48572
        }
      }
    }
  }
];
const CustomExampleApl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET = makePresetGear("Preraid Preset", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET = makePresetGear("P3 Preset", P3Gear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const APL_ROTATION_DEFAULT = makePresetAPLRotation("APL Default", DefaultApl);
const APL_ROTATION_LACERATEWEAVING = makePresetAPLRotation("Lacerateweaving", LacerateweavingApl);
const APL_ROTATION_CUSTOM_EXAMPLE = makePresetAPLRotation("Custom APL Example", CustomExampleApl);
const DefaultRotation = FeralDruid_Rotation.create({
  rotationType: FeralDruid_Rotation_AplType.SingleTarget,
  bearWeaveType: FeralDruid_Rotation_BearweaveType.None,
  minCombosForRip: 5,
  minCombosForBite: 5,
  useRake: true,
  useBite: true,
  mangleSpam: false,
  biteModeType: FeralDruid_Rotation_BiteModeType.Emperical,
  biteTime: 4,
  berserkBiteThresh: 25,
  berserkFfThresh: 15,
  powerbear: false,
  minRoarOffset: 12,
  ripLeeway: 3,
  maintainFaerieFire: true,
  hotUptime: 0,
  snekWeave: false,
  flowerWeave: false,
  raidTargets: 30,
  maxFfDelay: 0.1,
  prePopOoc: true
});
const SIMPLE_ROTATION_DEFAULT = makePresetSimpleRotation("Simple Default", Spec.SpecFeralDruid, DefaultRotation);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "-543202132322010053120030310511-203503012",
    glyphs: Glyphs.create({
      major1: DruidMajorGlyph.GlyphOfRip,
      major2: DruidMajorGlyph.GlyphOfSavageRoar,
      major3: DruidMajorGlyph.GlyphOfShred,
      minor1: DruidMinorGlyph.GlyphOfDash,
      minor2: DruidMinorGlyph.GlyphOfTheWild,
      minor3: DruidMinorGlyph.GlyphOfUnburdenedRebirth
    })
  })
};
const DefaultOptions = FeralDruid_Options.create({
  latencyMs: 100,
  assumeBleedActive: true,
  bearWeaveActive: false
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodDragonfinFilet,
  defaultPotion: Potions.PotionOfSpeed
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecFeralDruid, {
  cssClass: "feral-druid-sim-ui",
  cssScheme: "druid",
  knownIssues: [],
  warnings: [],
  epStats: [
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatExpertise
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps
  ],
  epReferenceStat: Stat.StatAttackPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatExpertise,
    Stat.StatMana,
    Stat.StatResilience
  ],
  defaults: {
    gear: P4_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatStrength]: 2.4,
      [Stat.StatAgility]: 2.39,
      [Stat.StatAttackPower]: 1,
      [Stat.StatMeleeHit]: 2.51,
      [Stat.StatMeleeCrit]: 2.23,
      [Stat.StatMeleeHaste]: 1.83,
      [Stat.StatArmorPenetration]: 2.08,
      [Stat.StatExpertise]: 2.44
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 16.5
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      arcaneBrilliance: true,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      bloodlust: true,
      manaSpringTotem: TristateEffect.TristateEffectRegular,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      battleShout: TristateEffect.TristateEffectImproved,
      unleashedRage: true,
      icyTalons: true,
      swiftRetribution: true,
      sanctifiedRetribution: true
    }),
    partyBuffs: PartyBuffs.create({
      heroicPresence: true
    }),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved
    }),
    debuffs: Debuffs.create({
      judgementOfWisdom: true,
      bloodFrenzy: true,
      giftOfArthas: true,
      exposeArmor: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      sunderArmor: true,
      curseOfWeakness: TristateEffect.TristateEffectRegular,
      heartOfTheCrusader: true
    })
  },
  playerIconInputs: [],
  rotationInputs: FeralDruidRotationConfig,
  includeBuffDebuffInputs: [
    IntellectBuff,
    MP5Buff,
    JudgementOfWisdom
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      LatencyMs,
      AssumeBleedActive,
      BearWeaveActive,
      SnekWeaveActive,
      FlowerWeaveActive,
      TankAssignment,
      InFrontOfTarget
    ]
  },
  itemSwapSlots: [ItemSlot.ItemSlotMainHand, ItemSlot.ItemSlotOffHand],
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      StandardTalents
    ],
    rotations: [
      SIMPLE_ROTATION_DEFAULT,
      APL_ROTATION_DEFAULT,
      APL_ROTATION_CUSTOM_EXAMPLE,
      APL_ROTATION_LACERATEWEAVING
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
    return APL_ROTATION_DEFAULT.rotation.rotation;
  },
  simpleRotation: (player, simple, cooldowns) => {
    let [prepullActions2, actions] = standardCooldownDefaults(cooldowns);
    const preOmen = APLPrepullAction.fromJsonString(`{"action":{"activateAura":{"auraId":{"spellId":16870}}},"doAtValue":{"const":{"val":"-1s"}}}`);
    const preZerk = APLPrepullAction.fromJsonString(`{"action":{"castSpell":{"spellId":{"spellId":50334}}},"doAtValue":{"const":{"val":"-1s"}}}`);
    const blockZerk = APLAction.fromJsonString(`{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":50334}}}`);
    const doRotation = APLAction.fromJsonString(`{"catOptimalRotationAction":{"rotationType":${simple.rotationType},"manualParams":${simple.manualParams},"maxFfDelay":${simple.maxFfDelay.toFixed(2)},"minRoarOffset":${simple.minRoarOffset.toFixed(2)},"ripLeeway":${simple.ripLeeway.toFixed(0)},"useRake":${simple.useRake},"useBite":${simple.useBite},"biteTime":${simple.biteTime.toFixed(2)},"flowerWeave":${simple.flowerWeave}}}`);
    prepullActions2.push(...[
      simple.prePopOoc ? preOmen : null,
      simple.prePopBerserk ? preZerk : null
    ].filter((a) => a));
    actions.push(...[
      blockZerk,
      doRotation
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
      spec: Spec.SpecFeralDruid,
      tooltip: specNames[Spec.SpecFeralDruid],
      defaultName: "Cat",
      iconUrl: getSpecIcon(Class.ClassDruid, 3),
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
class FeralDruidSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
    new FeralGemOptimizer(this);
  }
}
class FeralGemOptimizer extends PhysicalDPSGemOptimizer {
  constructor(simUI) {
    super(simUI, true, true, true, true);
  }
  calcCritCap(gear) {
    const baseCritCapPercentage = 77.8;
    let agiProcs = 0;
    if (gear.hasRelic(47668)) {
      agiProcs += 200;
    }
    if (gear.hasRelic(50456)) {
      agiProcs += 44 * 5;
    }
    if (gear.hasTrinket(47131) || gear.hasTrinket(47464)) {
      agiProcs += 510;
    }
    if (gear.hasTrinket(47115) || gear.hasTrinket(47303)) {
      agiProcs += 450;
    }
    if (gear.hasTrinket(44253) || gear.hasTrinket(42987)) {
      agiProcs += 300;
    }
    return new Stats().withStat(Stat.StatMeleeCrit, (baseCritCapPercentage - agiProcs * 1.1 * 1.06 * 1.02 / 83.33) * 45.91);
  }
}
export {
  FeralDruidSimUI as F
};
//# sourceMappingURL=sim-a9019f60.chunk.js.map
