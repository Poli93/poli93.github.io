import { f6 as TankDeathknight_Rotation_Presence, T as TypedEvent, f7 as TankDeathknight_Rotation_Opener, f8 as TankDeathknight_Rotation_OptimizationSetting, f9 as TankDeathknight_Rotation_BloodSpell, fa as TankDeathknight_Rotation_BloodTapPrio, bV as SavedTalents, N as Glyphs, q as DeathknightMajorGlyph, t as DeathknightMinorGlyph, fb as TankDeathknight_Options, F as Consumes, dN as Flask, dQ as Food, dS as Potions, a2 as Stat, a1 as PseudoStat, G as Stats, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { a as makeSpecOptionsNumberInput, G as makeRotationEnumInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, k as SpellDamageDebuff, T as TankAssignment, a0 as HpPercentForDefensives, X as IncomingHps, Y as HealingCadence, Z as HealingCadenceVariation, _ as BurstWindow, $ as InspirationUptime, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-1a99d43f.chunk.js";
const StartingRunicPower = makeSpecOptionsNumberInput({
  fieldName: "startingRunicPower",
  label: "Starting Runic Power",
  labelTooltip: "Initial RP at the start of each iteration."
});
makeSpecOptionsNumberInput({
  fieldName: "defensiveDelay",
  label: "Defensives Delay",
  labelTooltip: "Minimum delay between using more defensive cooldowns."
});
const TankDeathKnightRotationConfig = {
  inputs: [
    makeRotationEnumInput({
      fieldName: "presence",
      label: "Presence",
      labelTooltip: "Presence to be in during the encounter.",
      values: [
        { name: "Blood", value: TankDeathknight_Rotation_Presence.Blood },
        { name: "Frost", value: TankDeathknight_Rotation_Presence.Frost },
        { name: "Unholy", value: TankDeathknight_Rotation_Presence.Unholy }
      ],
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationEnumInput({
      fieldName: "opener",
      label: "Opener",
      labelTooltip: "Chose what opener to perform:<br>				<b>Regular</b>: Regular opener.<br>				<b>Threat</b>: Full IT spam for max threat.",
      values: [
        { name: "Regular", value: TankDeathknight_Rotation_Opener.Regular },
        { name: "Threat", value: TankDeathknight_Rotation_Opener.Threat }
      ],
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationEnumInput({
      fieldName: "optimizationSetting",
      label: "Optimization Setting",
      labelTooltip: "Chose what metric to optimize:<br>				<b>Hps</b>: Prioritizes holding runes for healing after damage taken.<br>				<b>Tps</b>: Prioritizes spending runes for icy touch spam.",
      values: [
        { name: "Hps", value: TankDeathknight_Rotation_OptimizationSetting.Hps },
        { name: "Tps", value: TankDeathknight_Rotation_OptimizationSetting.Tps }
      ],
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationEnumInput({
      fieldName: "bloodSpell",
      label: "Blood Spell",
      labelTooltip: "Chose what blood rune spender to use.",
      values: [
        { name: "Blood Strike", value: TankDeathknight_Rotation_BloodSpell.BloodStrike },
        { name: "Blood Boil", value: TankDeathknight_Rotation_BloodSpell.BloodBoil },
        { name: "Heart Strike", value: TankDeathknight_Rotation_BloodSpell.HeartStrike }
      ],
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationEnumInput({
      fieldName: "bloodTapPrio",
      label: "Blood Tap",
      labelTooltip: "Chose how to use Blood Tap:<br>				<b>Use as Defensive Cooldown</b>: Use as defined in Cooldowns (Requires T10 4pc).<br>				<b>Offensive</b>: Use Blood Tap for extra Icy Touches.",
      values: [
        { name: "Use as Defensive Cooldown", value: TankDeathknight_Rotation_BloodTapPrio.Defensive },
        { name: "Offensive", value: TankDeathknight_Rotation_BloodTapPrio.Offensive }
      ],
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    })
  ]
};
const items$5 = [
  {
    id: 40565,
    enchant: 3878,
    gems: [
      41380,
      36767
    ]
  },
  {
    id: 40387
  },
  {
    id: 39704,
    enchant: 3852,
    gems: [
      40008
    ]
  },
  {
    id: 40252,
    enchant: 3605
  },
  {
    id: 40559,
    gems: [
      40008,
      40022
    ]
  },
  {
    id: 40306,
    enchant: 3850,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 40563,
    enchant: 3860,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 39759,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 40567,
    enchant: 3822,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 40297,
    enchant: 3232
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
      36767
    ]
  },
  {
    id: 42341,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 40406,
    enchant: 3847
  },
  {},
  {
    id: 40207
  }
];
const P1BloodGear = {
  items: items$5
};
const items$4 = [
  {
    id: 46120,
    enchant: 3878,
    gems: [
      41380,
      36767
    ]
  },
  {
    id: 45485,
    gems: [
      40008
    ]
  },
  {
    id: 46122,
    enchant: 3852,
    gems: [
      40008
    ]
  },
  {
    id: 45496,
    enchant: 3605,
    gems: [
      40022
    ]
  },
  {
    id: 46118,
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
    id: 46119,
    enchant: 3860,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 45551,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45594,
    enchant: 3822,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45988,
    enchant: 3232,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 45471,
    gems: [
      40008
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
    id: 45533,
    enchant: 3370,
    gems: [
      40008,
      40008
    ]
  },
  {},
  {
    id: 45144
  }
];
const P2BloodGear = {
  items: items$4
};
const items$3 = [
  {
    id: 49467,
    enchant: 3878,
    gems: [
      41380,
      40119
    ]
  },
  {
    id: 47133,
    gems: [
      40119
    ]
  },
  {
    id: 47698,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 47549,
    enchant: 3294,
    gems: [
      40119
    ]
  },
  {
    id: 46968,
    enchant: 3297,
    gems: [
      40119,
      40119,
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
      40130,
      36767,
      36767
    ]
  },
  {
    id: 47061,
    enchant: 3327,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 47003,
    enchant: 3606,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 49489
  },
  {
    id: 47955,
    gems: [
      36767
    ]
  },
  {
    id: 47088
  },
  {
    id: 45158
  },
  {
    id: 47515,
    enchant: 3847,
    gems: [
      40119,
      40119
    ]
  },
  {},
  {
    id: 47672
  }
];
const P3BloodGear = {
  items: items$3
};
const items$2 = [
  {
    id: 50640,
    enchant: 3878,
    gems: [
      41380,
      40130
    ]
  },
  {
    id: 50682,
    gems: [
      40119
    ]
  },
  {
    id: 51309,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 50718,
    enchant: 3294,
    gems: [
      40119
    ]
  },
  {
    id: 51305,
    enchant: 3297,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 51901,
    enchant: 3757,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 51307,
    enchant: 3860,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 50691,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {
    id: 51308,
    enchant: 3327,
    gems: [
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
    id: 50404,
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
    id: 50344
  },
  {
    id: 50364
  },
  {
    id: 50735,
    enchant: 3847,
    gems: [
      40119,
      40119,
      40119
    ]
  },
  {},
  {
    id: 50462
  }
];
const P4BloodGear = {
  items: items$2
};
const items$1 = [
  {
    id: 40565,
    enchant: 3878,
    gems: [
      41380,
      36767
    ]
  },
  {
    id: 40387
  },
  {
    id: 40568,
    enchant: 3852,
    gems: [
      40008
    ]
  },
  {
    id: 40252,
    enchant: 3605
  },
  {
    id: 40559,
    gems: [
      40008,
      40022
    ]
  },
  {
    id: 40306,
    enchant: 3850,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 40563,
    enchant: 3860,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 39759,
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
    id: 40297,
    enchant: 3232
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
      36767
    ]
  },
  {
    id: 40257
  },
  {
    id: 40345,
    enchant: 3370
  },
  {
    id: 40345,
    enchant: 3368
  },
  {
    id: 40714
  }
];
const P1FrostGear = {
  items: items$1
};
const items = [
  {
    id: 46120,
    enchant: 3878,
    gems: [
      41380,
      36767
    ]
  },
  {
    id: 45485,
    gems: [
      40008
    ]
  },
  {
    id: 46122,
    enchant: 3852,
    gems: [
      40008
    ]
  },
  {
    id: 45496,
    enchant: 3605,
    gems: [
      40022
    ]
  },
  {
    id: 46118,
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
    id: 46119,
    enchant: 3860,
    gems: [
      40008,
      0
    ]
  },
  {
    id: 45551,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45594,
    enchant: 3822,
    gems: [
      40008,
      40008,
      40008
    ]
  },
  {
    id: 45988,
    enchant: 3232,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 45471,
    gems: [
      40008
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
    id: 46097,
    enchant: 3370,
    gems: [
      40008
    ]
  },
  {
    id: 46097,
    enchant: 3368,
    gems: [
      40008
    ]
  },
  {
    id: 45144
  }
];
const P2FrostGear = {
  items
};
const type$1 = "TypeAPL";
const prepullActions$1 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48263
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-10s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42650
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
      autocastOtherCooldowns: {}
    }
  },
  {
    action: {
      condition: {
        cmp: {
          op: "OpLe",
          lhs: {
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "40%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48792
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
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "40%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 55233
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
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "60%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48982
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
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "60%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48707
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
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "60%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48743
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
            currentRunicPower: {}
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
          spellId: 56815
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
                spellId: 55095
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 59131
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
                spellId: 55078
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49921
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
            dotRemainingTime: {
              spellId: {
                spellId: 55078
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
          spellId: 50842
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
                  currentNonDeathRuneCount: {
                    runeType: "RuneFrost"
                  }
                },
                rhs: {
                  "const": {
                    val: "0"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  currentNonDeathRuneCount: {
                    runeType: "RuneUnholy"
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
          tag: 1,
          spellId: 49924
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
            currentRuneCount: {
              runeType: "RuneDeath"
            }
          },
          rhs: {
            "const": {
              val: "0"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 59131
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
                op: "OpGt",
                lhs: {
                  currentNonDeathRuneCount: {
                    runeType: "RuneBlood"
                  }
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
                  spellId: 47568
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49930
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 46584
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47568
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
            currentRunicPower: {}
          },
          rhs: {
            "const": {
              val: "80"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49895
        }
      }
    }
  }
];
const BloodIcyTouchApl = {
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
          spellId: 48263
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-10s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42650
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
              cmp: {
                op: "OpLe",
                lhs: {
                  currentHealthPercent: {}
                },
                rhs: {
                  "const": {
                    val: "40%"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 55233
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
          spellId: 48792
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
                  currentHealthPercent: {}
                },
                rhs: {
                  "const": {
                    val: "40%"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 48792
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
          spellId: 55233
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
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "60%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48707
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
            currentHealthPercent: {}
          },
          rhs: {
            "const": {
              val: "60%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48743
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
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 49028
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentRunicPower: {}
                },
                rhs: {
                  "const": {
                    val: "80"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 56815
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
                spellId: 55095
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 59131
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
                spellId: 55078
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49921
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49016
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49028
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 55262
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49924
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 46584
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47568
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
            currentRunicPower: {}
          },
          rhs: {
            "const": {
              val: "80"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49895
        }
      }
    }
  }
];
const BloodAggroApl = {
  type,
  prepullActions,
  priorityList
};
const P1_BLOOD_PRESET = makePresetGear("P1 Blood", P1BloodGear);
const P2_BLOOD_PRESET = makePresetGear("P2 Blood", P2BloodGear);
const P3_BLOOD_PRESET = makePresetGear("P3 Blood", P3BloodGear);
const P4_BLOOD_PRESET = makePresetGear("P4 Blood", P4BloodGear);
const P1_FROST_PRESET = makePresetGear("P1 Frost", P1FrostGear);
const P2_FROST_PRESET = makePresetGear("P2 Frost", P2FrostGear);
const BLOOD_IT_SPAM_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Blood Icy Touch", BloodIcyTouchApl);
const BLOOD_AGGRO_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Blood Aggro", BloodAggroApl);
const BloodTalents = {
  name: "Blood",
  data: SavedTalents.create({
    talentsString: "005512153330030320102013-3050505000023-005",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfDisease,
      major2: DeathknightMajorGlyph.GlyphOfRuneStrike,
      major3: DeathknightMajorGlyph.GlyphOfDarkCommand,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfBloodTap,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const BloodAggroTalents = {
  name: "Blood Aggro",
  data: SavedTalents.create({
    talentsString: "0355220530303303201020131301--0052003050032",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfDancingRuneWeapon,
      major2: DeathknightMajorGlyph.GlyphOfRuneStrike,
      major3: DeathknightMajorGlyph.GlyphOfDarkCommand,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfBloodTap,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const DoubleBuffBloodTalents = {
  name: "2B Blood",
  data: SavedTalents.create({
    talentsString: "005512153330030320102013-3050505000023201-002",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfDisease,
      major2: DeathknightMajorGlyph.GlyphOfRuneStrike,
      major3: DeathknightMajorGlyph.GlyphOfDarkCommand,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfBloodTap,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const FrostTalents = {
  name: "Frost",
  data: SavedTalents.create({
    talentsString: "005510003-3050535000223301030023310035-005",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfDisease,
      major2: DeathknightMajorGlyph.GlyphOfRuneStrike,
      major3: DeathknightMajorGlyph.GlyphOfDarkCommand,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfBloodTap,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const DoubleBuffFrostTalents = {
  name: "2B Frost",
  data: SavedTalents.create({
    talentsString: "00551005303003002-305053510022330100002301-005",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfDisease,
      major2: DeathknightMajorGlyph.GlyphOfRuneStrike,
      major3: DeathknightMajorGlyph.GlyphOfDarkCommand,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfBloodTap,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const DefaultOptions = TankDeathknight_Options.create({
  startingRunicPower: 0
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfStoneblood,
  food: Food.FoodDragonfinFilet,
  defaultPotion: Potions.IndestructiblePotion,
  prepopPotion: Potions.IndestructiblePotion
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecTankDeathknight, {
  cssClass: "tank-deathknight-sim-ui",
  cssScheme: "death-knight",
  knownIssues: [
    "<p>Defensive CDs use is very basic and wip.</p>"
  ],
  epStats: [
    Stat.StatStamina,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatExpertise,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatHealth,
    Stat.StatArmor,
    Stat.StatBonusArmor,
    Stat.StatArmorPenetration,
    Stat.StatDefense,
    Stat.StatDodge,
    Stat.StatParry,
    Stat.StatResilience,
    Stat.StatSpellHit,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps,
    PseudoStat.PseudoStatOffHandDps
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
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatDefense,
    Stat.StatDodge,
    Stat.StatParry,
    Stat.StatResilience,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
  ],
  defaults: {
    gear: P2_BLOOD_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatArmor]: 0.05,
      [Stat.StatBonusArmor]: 0.03,
      [Stat.StatStamina]: 1,
      [Stat.StatStrength]: 0.33,
      [Stat.StatAgility]: 0.6,
      [Stat.StatAttackPower]: 0.06,
      [Stat.StatExpertise]: 0.67,
      [Stat.StatMeleeHit]: 0.67,
      [Stat.StatMeleeCrit]: 0.28,
      [Stat.StatMeleeHaste]: 0.21,
      [Stat.StatArmorPenetration]: 0.19,
      [Stat.StatDodge]: 0.7,
      [Stat.StatParry]: 0.58,
      [Stat.StatDefense]: 0.8
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 3.1,
      [PseudoStat.PseudoStatOffHandDps]: 0
    }),
    consumes: DefaultConsumes,
    talents: BloodTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      retributionAura: true,
      powerWordFortitude: TristateEffect.TristateEffectImproved,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      swiftRetribution: true,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      icyTalons: true,
      abominationsMight: true,
      leaderOfThePack: TristateEffect.TristateEffectRegular,
      sanctifiedRetribution: true,
      bloodlust: true,
      devotionAura: TristateEffect.TristateEffectImproved,
      stoneskinTotem: TristateEffect.TristateEffectImproved
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved,
      blessingOfSanctuary: true
    }),
    debuffs: Debuffs.create({
      bloodFrenzy: true,
      faerieFire: TristateEffect.TristateEffectRegular,
      sunderArmor: true,
      misery: true,
      ebonPlaguebringer: true,
      mangle: true,
      heartOfTheCrusader: true,
      demoralizingShout: TristateEffect.TristateEffectImproved,
      frostFever: TristateEffect.TristateEffectImproved,
      insectSwarm: true,
      judgementOfLight: true
    })
  },
  playerIconInputs: [],
  rotationInputs: TankDeathKnightRotationConfig,
  includeBuffDebuffInputs: [
    SpellDamageDebuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      TankAssignment,
      HpPercentForDefensives,
      IncomingHps,
      HealingCadence,
      HealingCadenceVariation,
      BurstWindow,
      InspirationUptime,
      InFrontOfTarget,
      StartingRunicPower
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    rotations: [
      BLOOD_IT_SPAM_ROTATION_PRESET_DEFAULT,
      BLOOD_AGGRO_ROTATION_PRESET_DEFAULT
    ],
    talents: [
      BloodTalents,
      BloodAggroTalents,
      DoubleBuffBloodTalents,
      FrostTalents,
      DoubleBuffFrostTalents
    ],
    gear: [
      P1_BLOOD_PRESET,
      P1_FROST_PRESET,
      P2_BLOOD_PRESET,
      P2_FROST_PRESET,
      P3_BLOOD_PRESET,
      P4_BLOOD_PRESET
    ]
  },
  autoRotation: (_player) => {
    return BLOOD_IT_SPAM_ROTATION_PRESET_DEFAULT.rotation.rotation;
  },
  raidSimPresets: [
    {
      spec: Spec.SpecTankDeathknight,
      tooltip: "Blood Tank Death Knight",
      defaultName: "Blood Tank",
      iconUrl: getSpecIcon(Class.ClassDeathknight, 0),
      talents: BloodTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceTroll
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_BLOOD_PRESET.gear,
          2: P2_BLOOD_PRESET.gear,
          3: P3_BLOOD_PRESET.gear,
          4: P4_BLOOD_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_BLOOD_PRESET.gear,
          2: P2_BLOOD_PRESET.gear,
          3: P3_BLOOD_PRESET.gear,
          4: P4_BLOOD_PRESET.gear
        }
      }
    }
  ]
});
class TankDeathknightSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  TankDeathknightSimUI as T
};
//# sourceMappingURL=sim-71770f59.chunk.js.map
