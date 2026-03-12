import { bV as SavedTalents, N as Glyphs, h as PriestMajorGlyph, j as PriestMinorGlyph, fn as ShadowPriest_Options, fh as ShadowPriest_Options_Armor, F as Consumes, dN as Flask, dQ as Food, dS as Potions, aE as RaidBuffs, bc as TristateEffect, E as IndividualBuffs, aF as Debuffs, $ as Profession } from "./detailed_results-4a530cbe.chunk.js";
import { b as makePresetGear, c as makePresetAPLRotation } from "./preset_utils-f6643d5a.chunk.js";
const items$4 = [
  {
    id: 42553,
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
    id: 34210,
    enchant: 3810,
    gems: [
      39998,
      40026
    ]
  },
  {
    id: 41610,
    enchant: 3722
  },
  {
    id: 43792,
    enchant: 1144,
    gems: [
      39998,
      40051
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
    id: 39530,
    enchant: 3604,
    gems: [
      40049,
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
    id: 40585
  },
  {
    id: 37694
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
  items: items$4
};
const items$3 = [
  {
    id: 40562,
    enchant: 3820,
    gems: [
      41285,
      39998
    ]
  },
  {
    id: 44661,
    gems: [
      40026
    ]
  },
  {
    id: 40459,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 44005,
    enchant: 3722,
    gems: [
      40026
    ]
  },
  {
    id: 44002,
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
    enchant: 3606
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
  items: items$3
};
const items$2 = [
  {
    id: 46172,
    enchant: 3820,
    gems: [
      41285,
      45883
    ]
  },
  {
    id: 45243,
    gems: [
      39998
    ]
  },
  {
    id: 46165,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 45242,
    enchant: 3722,
    gems: [
      40049
    ]
  },
  {
    id: 46168,
    enchant: 1144,
    gems: [
      39998,
      39998
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
    enchant: 3601,
    gems: [
      39998,
      39998,
      39998
    ]
  },
  {
    id: 46170,
    enchant: 3719,
    gems: [
      39998,
      40049
    ]
  },
  {
    id: 45135,
    enchant: 3606,
    gems: [
      39998,
      40049
    ]
  },
  {
    id: 45495,
    gems: [
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
    id: 45518
  },
  {
    id: 45466
  },
  {
    id: 45620,
    enchant: 3834,
    gems: [
      40026
    ]
  },
  {
    id: 45617
  },
  {
    id: 45294,
    gems: [
      39998
    ]
  }
];
const P2Gear = {
  items: items$2
};
const items$1 = [
  {
    id: 48088,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 47468,
    gems: [
      40155
    ]
  },
  {
    id: 48091,
    enchant: 3810,
    gems: [
      40155
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
    id: 48090,
    enchant: 1144,
    gems: [
      40113,
      40133
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
    id: 45665,
    enchant: 3604,
    gems: [
      40113,
      40113,
      0
    ]
  },
  {
    id: 47419,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 48089,
    enchant: 3719,
    gems: [
      40113,
      40133
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
    id: 45495,
    gems: [
      40113
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
    id: 47995
  }
];
const P3Gear = {
  items: items$1
};
const items = [
  {
    id: 51255,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40113
    ]
  },
  {
    id: 51257,
    enchant: 3810,
    gems: [
      40155
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
    id: 51259,
    enchant: 1144,
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
    id: 51256,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 50613,
    gems: [
      40133,
      40113,
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
      40155
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
    id: 50684,
    gems: [
      40155
    ]
  }
];
const P4Gear = {
  items
};
const type$2 = "TypeAPL";
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
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48160
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-0.97s"
      }
    }
  }
];
const priorityList$2 = [
  {
    action: {
      condition: {
        cmp: {
          op: "OpGe",
          lhs: {
            remainingTime: {}
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
          spellId: 34433
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
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      autocastOtherCooldowns: {}
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpGe",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "61s"
            }
          }
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
        cmp: {
          op: "OpLe",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "1.75s"
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
        and: {
          vals: [
            {
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
            {
              or: {
                vals: [
                  {
                    and: {
                      vals: [
                        {
                          cmp: {
                            op: "OpEq",
                            lhs: {
                              "const": {
                                val: "5"
                              }
                            },
                            rhs: {
                              auraNumStacks: {
                                auraId: {
                                  spellId: 15258
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
                                val: "75s"
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
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              "const": {
                                val: "3"
                              }
                            },
                            rhs: {
                              auraNumStacks: {
                                auraId: {
                                  spellId: 15258
                                }
                              }
                            }
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
                                val: "75s"
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
          spellId: 48125
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
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48160
                    }
                  }
                },
                rhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 48160
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
          spellId: 48160
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
    hide: true,
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
                      spellId: 48127
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "750ms"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 57669
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "5s"
                  }
                }
              }
            }
          ]
        }
      },
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
      condition: {
        cmp: {
          op: "OpGe",
          lhs: {
            spellCastTime: {
              spellId: {
                spellId: 48127
              }
            }
          },
          rhs: {
            "const": {
              val: "750ms"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48127
        }
      }
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpEq",
          lhs: {
            auraNumStacks: {
              auraId: {
                spellId: 15258
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
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 14751
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 48156
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
              cmp: {
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48300
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "200ms"
                  }
                }
              }
            }
          ]
        }
      },
      wait: {
        duration: {
          dotRemainingTime: {
            spellId: {
              spellId: 48300
            }
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
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 48160
                    }
                  }
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellCastTime: {
                        spellId: {
                          spellId: 48160
                        }
                      }
                    },
                    rhs: {
                      channelClipDelay: {}
                    }
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 48160
                }
              }
            },
            {
              spellIsChanneling: {
                spellId: {
                  spellId: 48156
                }
              }
            }
          ]
        }
      },
      wait: {
        duration: {
          math: {
            op: "OpSub",
            lhs: {
              dotRemainingTime: {
                spellId: {
                  spellId: 48160
                }
              }
            },
            rhs: {
              spellCastTime: {
                spellId: {
                  spellId: 48160
                }
              }
            }
          }
        }
      }
    }
  },
  {
    action: {
      channelSpell: {
        spellId: {
          spellId: 48156
        },
        interruptIf: {
          cmp: {
            op: "OpLe",
            lhs: {
              gcdTimeToReady: {}
            },
            rhs: {
              channelClipDelay: {}
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
          spellId: 47585
        }
      }
    }
  }
];
const DefaultApl = {
  type: type$2,
  prepullActions,
  priorityList: priorityList$2
};
const type$1 = "TypeAPL";
const priorityList$1 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 34433
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
          op: "OpLe",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "0.75s"
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
        and: {
          vals: [
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    targetUnit: {
                      type: "Target",
                      index: 2
                    },
                    spellId: {
                      spellId: 48125
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
            {
              dotIsActive: {
                targetUnit: {
                  type: "Target",
                  index: 2
                },
                spellId: {
                  spellId: 48125
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
                    val: "3s"
                  }
                }
              }
            }
          ]
        }
      },
      channelSpell: {
        spellId: {
          spellId: 48156
        },
        target: {
          type: "Target",
          index: 2
        },
        interruptIf: {
          "const": {
            val: "true"
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
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    targetUnit: {
                      type: "Target",
                      index: 1
                    },
                    spellId: {
                      spellId: 48125
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
            {
              dotIsActive: {
                targetUnit: {
                  type: "Target",
                  index: 1
                },
                spellId: {
                  spellId: 48125
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
                    val: "3s"
                  }
                }
              }
            }
          ]
        }
      },
      channelSpell: {
        spellId: {
          spellId: 48156
        },
        target: {
          type: "Target",
          index: 1
        },
        interruptIf: {
          "const": {
            val: "true"
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
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    targetUnit: {
                      type: "Target"
                    },
                    spellId: {
                      spellId: 48125
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "5s"
                  }
                }
              }
            },
            {
              dotIsActive: {
                targetUnit: {
                  type: "Target"
                },
                spellId: {
                  spellId: 48125
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
                    val: "3s"
                  }
                }
              }
            }
          ]
        }
      },
      channelSpell: {
        spellId: {
          spellId: 48156
        },
        target: {
          type: "Target"
        },
        interruptIf: {
          "const": {
            val: "true"
          }
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
              val: "5s"
            }
          }
        }
      },
      multidot: {
        spellId: {
          spellId: 48160
        },
        maxDots: 4,
        maxOverlap: {
          spellCastTime: {
            spellId: {
              spellId: 48160
            }
          }
        }
      }
    }
  },
  {
    action: {
      multidot: {
        spellId: {
          spellId: 48300
        },
        maxDots: 1,
        maxOverlap: {}
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
              val: "12s"
            }
          }
        }
      },
      multidot: {
        spellId: {
          spellId: 48125
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
        cmp: {
          op: "OpGt",
          lhs: {
            numberTargets: {}
          },
          rhs: {
            "const": {
              val: "2"
            }
          }
        }
      },
      channelSpell: {
        spellId: {
          spellId: 53023
        },
        interruptIf: {
          "const": {
            val: "true"
          }
        }
      }
    }
  },
  {
    action: {
      channelSpell: {
        spellId: {
          spellId: 48156
        },
        interruptIf: {
          "const": {
            val: "true"
          }
        }
      }
    }
  }
];
const AOE24Apl = {
  type: type$1,
  priorityList: priorityList$1
};
const type = "TypeAPL";
const priorityList = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 34433
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
          op: "OpGe",
          lhs: {
            numberTargets: {}
          },
          rhs: {
            "const": {
              val: "7"
            }
          }
        }
      },
      channelSpell: {
        spellId: {
          spellId: 53023
        },
        interruptIf: {
          "const": {
            val: "true"
          }
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
            "const": {
              val: "0.75s"
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
        cmp: {
          op: "OpGt",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            "const": {
              val: "5s"
            }
          }
        }
      },
      multidot: {
        spellId: {
          spellId: 48160
        },
        maxDots: 10,
        maxOverlap: {
          spellCastTime: {
            spellId: {
              spellId: 48160
            }
          }
        }
      }
    }
  },
  {
    action: {
      multidot: {
        spellId: {
          spellId: 48300
        },
        maxDots: 1,
        maxOverlap: {}
      }
    }
  },
  {
    action: {
      channelSpell: {
        spellId: {
          spellId: 53023
        },
        interruptIf: {
          "const": {
            val: "true"
          }
        }
      }
    }
  }
];
const AOE4PlusApl = {
  type,
  priorityList
};
const PRERAID_PRESET = makePresetGear("Preraid Preset", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET = makePresetGear("P2 Preset", P2Gear);
const P3_PRESET = makePresetGear("P3 Preset", P3Gear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Default", DefaultApl);
const ROTATION_PRESET_AOE24 = makePresetAPLRotation("AOE (2 to 4 targets)", AOE24Apl);
const ROTATION_PRESET_AOE4PLUS = makePresetAPLRotation("AOE (4+ targets)", AOE4PlusApl);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "05032031--325023051223010323151301351",
    glyphs: Glyphs.create({
      major1: PriestMajorGlyph.GlyphOfShadow,
      major2: PriestMajorGlyph.GlyphOfMindFlay,
      major3: PriestMajorGlyph.GlyphOfDispersion,
      minor1: PriestMinorGlyph.GlyphOfFortitude,
      minor2: PriestMinorGlyph.GlyphOfShadowProtection,
      minor3: PriestMinorGlyph.GlyphOfShadowfiend
    })
  })
};
const EnlightenmentTalents = {
  name: "Enlightenment",
  data: SavedTalents.create({
    talentsString: "05032031303005022--3250230012230101231513011",
    glyphs: Glyphs.create({
      major1: PriestMajorGlyph.GlyphOfShadow,
      major2: PriestMajorGlyph.GlyphOfMindFlay,
      major3: PriestMajorGlyph.GlyphOfShadowWordDeath,
      minor1: PriestMinorGlyph.GlyphOfFortitude,
      minor2: PriestMinorGlyph.GlyphOfShadowProtection,
      minor3: PriestMinorGlyph.GlyphOfShadowfiend
    })
  })
};
const DefaultOptions = ShadowPriest_Options.create({
  armor: ShadowPriest_Options_Armor.InnerFire
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast,
  defaultPotion: Potions.PotionOfSpeed,
  prepopPotion: Potions.PotionOfWildMagic
});
const DefaultRaidBuffs = RaidBuffs.create({
  giftOfTheWild: TristateEffect.TristateEffectImproved,
  powerWordFortitude: TristateEffect.TristateEffectImproved,
  strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
  arcaneBrilliance: true,
  divineSpirit: true,
  trueshotAura: true,
  leaderOfThePack: TristateEffect.TristateEffectImproved,
  icyTalons: true,
  totemOfWrath: true,
  moonkinAura: TristateEffect.TristateEffectImproved,
  wrathOfAirTotem: true,
  sanctifiedRetribution: true,
  bloodlust: true,
  demonicPactSp: 500
});
const DefaultIndividualBuffs = IndividualBuffs.create({
  blessingOfKings: true,
  blessingOfWisdom: TristateEffect.TristateEffectImproved,
  blessingOfMight: TristateEffect.TristateEffectImproved,
  vampiricTouch: true
});
const DefaultDebuffs = Debuffs.create({
  sunderArmor: true,
  faerieFire: TristateEffect.TristateEffectImproved,
  bloodFrenzy: true,
  ebonPlaguebringer: true,
  heartOfTheCrusader: true,
  judgementOfWisdom: true,
  shadowMastery: true
});
const OtherDefaults = {
  channelClipDelay: 100,
  profession1: Profession.Engineering,
  profession2: Profession.Tailoring,
  nibelungAverageCasts: 11
};
export {
  DefaultConsumes as D,
  EnlightenmentTalents as E,
  OtherDefaults as O,
  P4_PRESET as P,
  ROTATION_PRESET_DEFAULT as R,
  StandardTalents as S,
  DefaultOptions as a,
  DefaultRaidBuffs as b,
  DefaultIndividualBuffs as c,
  DefaultDebuffs as d,
  ROTATION_PRESET_AOE24 as e,
  ROTATION_PRESET_AOE4PLUS as f,
  PRERAID_PRESET as g,
  P1_PRESET as h,
  P2_PRESET as i,
  P3_PRESET as j
};
//# sourceMappingURL=presets-1e351125.chunk.js.map
