import { eo as ShamanShield, A as ActionId, ew as ShamanImbue, ex as ShamanSyncType, aU as Faction, bV as SavedTalents, N as Glyphs, l as ShamanMajorGlyph, ey as EnhancementShaman_Options, er as ShamanTotems, es as EarthTotem, eu as FireTotem, ev as WaterTotem, et as AirTotem, F as Consumes, dS as Potions, dN as Flask, dQ as Food, aE as RaidBuffs, bc as TristateEffect, aF as Debuffs, I as Input, bl as BooleanPicker, a2 as Stat, a1 as PseudoStat, G as Stats, x as PartyBuffs, E as IndividualBuffs, V as ItemSlot, S as Spec, bo as specNames, g as getSpecIcon, u as Class, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { t as makeSpecOptionsEnumIconInput, x as makeSpecOptionsEnumInput, b as makePresetGear, c as makePresetAPLRotation, C as ContentBlock, v as makeBooleanIconInput, w as IconPicker, N as NumberPicker, r as registerSpecConfig, y as ReplenishmentBuff, z as MP5Buff, B as SpellHasteBuff, E as SpiritBuff, F as BleedDebuff, T as TankAssignment, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-30a04788.chunk.js";
import { T as TotemsSection } from "./totem_inputs-6d0df744.chunk.js";
const ShamanShieldInput = makeSpecOptionsEnumIconInput({
  fieldName: "shield",
  values: [
    { value: ShamanShield.NoShield, tooltip: "No Shield" },
    { actionId: ActionId.fromSpellId(57960), value: ShamanShield.WaterShield },
    { actionId: ActionId.fromSpellId(49281), value: ShamanShield.LightningShield }
  ]
});
const ShamanImbueMH = makeSpecOptionsEnumIconInput({
  fieldName: "imbueMh",
  values: [
    { value: ShamanImbue.NoImbue, tooltip: "No Main Hand Enchant" },
    { actionId: ActionId.fromSpellId(58804), value: ShamanImbue.WindfuryWeapon },
    { actionId: ActionId.fromSpellId(58790), value: ShamanImbue.FlametongueWeapon, text: "R10" },
    { actionId: ActionId.fromSpellId(58789), value: ShamanImbue.FlametongueWeaponDownrank, text: "R9" },
    { actionId: ActionId.fromSpellId(58796), value: ShamanImbue.FrostbrandWeapon }
  ]
});
const ShamanImbueOH = makeSpecOptionsEnumIconInput({
  fieldName: "imbueOh",
  values: [
    { value: ShamanImbue.NoImbue, tooltip: "No Off Hand Enchant" },
    { actionId: ActionId.fromSpellId(58804), value: ShamanImbue.WindfuryWeapon },
    { actionId: ActionId.fromSpellId(58790), value: ShamanImbue.FlametongueWeapon, text: "R10" },
    { actionId: ActionId.fromSpellId(58789), value: ShamanImbue.FlametongueWeaponDownrank, text: "R9" },
    { actionId: ActionId.fromSpellId(58796), value: ShamanImbue.FrostbrandWeapon }
  ]
});
const SyncTypeInput = makeSpecOptionsEnumInput({
  fieldName: "syncType",
  label: "Sync/Stagger Setting",
  labelTooltip: `Choose your sync or stagger option Perfect
		<ul>
			<li><div>Auto: Will auto pick sync options based on your weapons attack speeds</div></li>
			<li><div>None: No Sync or Staggering, used for mismatched weapon speeds</div></li>
			<li><div>Perfect Sync: Makes your weapons always attack at the same time, for match weapon speeds</div></li>
			<li><div>Delayed Offhand: Adds a slight delay to the offhand attacks while staying within the 0.5s flurry ICD window</div></li>
		</ul>`,
  values: [
    { name: "Automatic", value: ShamanSyncType.Auto },
    { name: "None", value: ShamanSyncType.NoSync },
    { name: "Perfect Sync", value: ShamanSyncType.SyncMainhandOffhandSwings },
    { name: "Delayed Offhand", value: ShamanSyncType.DelayOffhandSwings }
  ]
});
const items$7 = [
  {
    id: 43311,
    enchant: 3817,
    gems: [
      41398,
      42156
    ]
  },
  {
    id: 40678
  },
  {
    id: 37373,
    enchant: 3808
  },
  {
    id: 37840,
    enchant: 3605
  },
  {
    id: 39597,
    enchant: 3832,
    gems: [
      40053,
      40088
    ]
  },
  {
    id: 43131,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 39601,
    enchant: 3604,
    gems: [
      40053,
      0
    ]
  },
  {
    id: 37407,
    gems: [
      42156
    ]
  },
  {
    id: 37669,
    enchant: 3823
  },
  {
    id: 37167,
    enchant: 3606,
    gems: [
      40053,
      42156
    ]
  },
  {
    id: 37685
  },
  {
    id: 37642
  },
  {
    id: 37390
  },
  {
    id: 40684
  },
  {
    id: 41384,
    enchant: 3789
  },
  {
    id: 40704,
    enchant: 3789
  },
  {
    id: 33507
  }
];
const PreraidGear = {
  items: items$7
};
const items$6 = [
  {
    id: 40543,
    enchant: 3817,
    gems: [
      41398,
      40014
    ]
  },
  {
    id: 44661,
    gems: [
      40014
    ]
  },
  {
    id: 40524,
    enchant: 3808,
    gems: [
      40014
    ]
  },
  {
    id: 40403,
    enchant: 3605
  },
  {
    id: 40523,
    enchant: 3832,
    gems: [
      40003,
      40014
    ]
  },
  {
    id: 40282,
    enchant: 3845,
    gems: [
      42702,
      0
    ]
  },
  {
    id: 40520,
    enchant: 3604,
    gems: [
      42154,
      0
    ]
  },
  {
    id: 40275,
    gems: [
      42156
    ]
  },
  {
    id: 40522,
    enchant: 3823,
    gems: [
      39999,
      42156
    ]
  },
  {
    id: 40367,
    enchant: 3606,
    gems: [
      40058
    ]
  },
  {
    id: 40474
  },
  {
    id: 40074
  },
  {
    id: 40684
  },
  {
    id: 37390
  },
  {
    id: 39763,
    enchant: 3789
  },
  {
    id: 39468,
    enchant: 3789
  },
  {
    id: 40322
  }
];
const P1Gear = {
  items: items$6
};
const items$5 = [
  {
    id: 45610,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 45517,
    gems: [
      39999
    ]
  },
  {
    id: 46203,
    enchant: 3808,
    gems: [
      39999
    ]
  },
  {
    id: 45461,
    enchant: 3831,
    gems: [
      40014
    ]
  },
  {
    id: 46205,
    enchant: 3832,
    gems: [
      40058,
      40053
    ]
  },
  {
    id: 45460,
    enchant: 3845,
    gems: [
      39999,
      0
    ]
  },
  {
    id: 46200,
    enchant: 3604,
    gems: [
      40014,
      0
    ]
  },
  {
    id: 45553,
    gems: [
      36766,
      36766,
      36766
    ]
  },
  {
    id: 46208,
    enchant: 3823,
    gems: [
      39999,
      39999
    ]
  },
  {
    id: 45989,
    enchant: 3606,
    gems: [
      40053,
      39999
    ]
  },
  {
    id: 45456,
    gems: [
      39999
    ]
  },
  {
    id: 46046,
    gems: [
      40053
    ]
  },
  {
    id: 45609
  },
  {
    id: 46038
  },
  {
    id: 45612,
    enchant: 3789,
    gems: [
      39999
    ]
  },
  {
    id: 46097,
    enchant: 3789,
    gems: [
      40003
    ]
  },
  {
    id: 40322
  }
];
const P2FtGear = {
  items: items$5
};
const items$4 = [
  {
    id: 45610,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 45517,
    gems: [
      39999
    ]
  },
  {
    id: 46203,
    enchant: 3808,
    gems: [
      39999
    ]
  },
  {
    id: 45461,
    enchant: 3831,
    gems: [
      40052
    ]
  },
  {
    id: 46205,
    enchant: 3832,
    gems: [
      40052,
      40052
    ]
  },
  {
    id: 45460,
    enchant: 3845,
    gems: [
      39999,
      0
    ]
  },
  {
    id: 46200,
    enchant: 3604,
    gems: [
      40053,
      0
    ]
  },
  {
    id: 45553,
    gems: [
      36766,
      36766,
      36766
    ]
  },
  {
    id: 46208,
    enchant: 3823,
    gems: [
      39999,
      39999
    ]
  },
  {
    id: 45989,
    enchant: 3606,
    gems: [
      40053,
      39999
    ]
  },
  {
    id: 45456,
    gems: [
      39999
    ]
  },
  {
    id: 45608,
    gems: [
      39999
    ]
  },
  {
    id: 45609
  },
  {
    id: 46038
  },
  {
    id: 45132,
    enchant: 3789,
    gems: [
      40052
    ]
  },
  {
    id: 46097,
    enchant: 3789,
    gems: [
      39999
    ]
  },
  {
    id: 40322
  }
];
const P2WfGear = {
  items: items$4
};
const items$3 = [
  {
    id: 48353,
    enchant: 3817,
    gems: [
      41398,
      40128
    ]
  },
  {
    id: 47060,
    gems: [
      40159
    ]
  },
  {
    id: 48351,
    enchant: 3808,
    gems: [
      40128
    ]
  },
  {
    id: 47552,
    enchant: 3722,
    gems: [
      40159
    ]
  },
  {
    id: 46965,
    enchant: 3832,
    gems: [
      40159,
      49110,
      40128
    ]
  },
  {
    id: 47916,
    enchant: 3845,
    gems: [
      40159,
      0
    ]
  },
  {
    id: 48354,
    enchant: 3604,
    gems: [
      40128,
      0
    ]
  },
  {
    id: 47112,
    enchant: 3599,
    gems: [
      40128,
      40159,
      40128
    ]
  },
  {
    id: 48352,
    enchant: 3823,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 47099,
    enchant: 3606,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 46046,
    gems: [
      40128
    ]
  },
  {
    id: 47075,
    gems: [
      40128
    ]
  },
  {
    id: 47188
  },
  {
    id: 45609
  },
  {
    id: 47206,
    enchant: 3789
  },
  {
    id: 47156,
    enchant: 3789,
    gems: [
      40128
    ]
  },
  {
    id: 47666
  }
];
const P3AllianceGear = {
  items: items$3
};
const items$2 = [
  {
    id: 48358,
    enchant: 3817,
    gems: [
      41398,
      40128
    ]
  },
  {
    id: 47433,
    gems: [
      40159
    ]
  },
  {
    id: 48360,
    enchant: 3808,
    gems: [
      40128
    ]
  },
  {
    id: 47551,
    enchant: 3722,
    gems: [
      40159
    ]
  },
  {
    id: 47412,
    enchant: 3832,
    gems: [
      40159,
      49110,
      40128
    ]
  },
  {
    id: 47989,
    enchant: 3845,
    gems: [
      40159,
      0
    ]
  },
  {
    id: 48357,
    enchant: 3604,
    gems: [
      40128,
      0
    ]
  },
  {
    id: 47460,
    enchant: 3599,
    gems: [
      40128,
      40159,
      40128
    ]
  },
  {
    id: 48359,
    enchant: 3823,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 47456,
    enchant: 3606,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 46046,
    gems: [
      40128
    ]
  },
  {
    id: 47443,
    gems: [
      40128
    ]
  },
  {
    id: 47477
  },
  {
    id: 45609
  },
  {
    id: 47483,
    enchant: 3789
  },
  {
    id: 47475,
    enchant: 3789,
    gems: [
      40128
    ]
  },
  {
    id: 47666
  }
];
const P3HordeGear = {
  items: items$2
};
const items$1 = [
  {
    id: 51242,
    enchant: 3817,
    gems: [
      41398,
      40118
    ]
  },
  {
    id: 50658,
    gems: [
      42156
    ]
  },
  {
    id: 51240,
    enchant: 3808,
    gems: [
      40128
    ]
  },
  {
    id: 50653,
    enchant: 3831,
    gems: [
      40128
    ]
  },
  {
    id: 51244,
    enchant: 3832,
    gems: [
      40118,
      49110
    ]
  },
  {
    id: 50687,
    enchant: 3845,
    gems: [
      40128,
      0
    ]
  },
  {
    id: 50619,
    enchant: 3604,
    gems: [
      40125,
      40118,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3599,
    gems: [
      40128,
      40118,
      40128
    ]
  },
  {
    id: 51241,
    enchant: 3823,
    gems: [
      40118,
      40128
    ]
  },
  {
    id: 50711,
    enchant: 3606,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 50604,
    gems: [
      42156
    ]
  },
  {
    id: 50402,
    gems: [
      42156
    ]
  },
  {
    id: 50343
  },
  {
    id: 45609
  },
  {
    id: 51939,
    enchant: 3789,
    gems: [
      40118
    ]
  },
  {
    id: 50710,
    enchant: 3789,
    gems: [
      40118
    ]
  },
  {
    id: 50458
  }
];
const P4FtGear = {
  items: items$1
};
const items = [
  {
    id: 51242,
    enchant: 3817,
    gems: [
      41398,
      40118
    ]
  },
  {
    id: 51890,
    gems: [
      40118
    ]
  },
  {
    id: 51240,
    enchant: 3808,
    gems: [
      40128
    ]
  },
  {
    id: 50653,
    enchant: 3831,
    gems: [
      40128
    ]
  },
  {
    id: 51244,
    enchant: 3832,
    gems: [
      40118,
      49110
    ]
  },
  {
    id: 51914,
    enchant: 3845,
    gems: [
      40118,
      0
    ]
  },
  {
    id: 50619,
    enchant: 3604,
    gems: [
      40128,
      40159,
      0
    ]
  },
  {
    id: 50993,
    gems: [
      42150,
      42150,
      42150
    ]
  },
  {
    id: 51241,
    enchant: 3823,
    gems: [
      40118,
      40159
    ]
  },
  {
    id: 50711,
    enchant: 3606,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 50604,
    gems: [
      40128
    ]
  },
  {
    id: 50402,
    gems: [
      40128
    ]
  },
  {
    id: 50355
  },
  {
    id: 50343
  },
  {
    id: 50692,
    enchant: 3789,
    gems: [
      40128
    ]
  },
  {
    id: 50710,
    enchant: 3789,
    gems: [
      40128
    ]
  },
  {
    id: 50458
  }
];
const P4WfGear = {
  items
};
const type$2 = "TypeAPL";
const prepullActions$2 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 66842
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
const priorityList$2 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 51533
        }
      }
    }
  },
  {
    action: {
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
      castSpell: {
        spellId: {
          spellId: 2825
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
          op: "OpEq",
          lhs: {
            auraNumStacks: {
              auraId: {
                spellId: 53817
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
          spellId: 17364
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
                spellId: 49233
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
      castSpell: {
        spellId: {
          spellId: 49233
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
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 17364
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 17364
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49231
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
            totemRemainingTime: {
              totemType: "Water"
            }
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
          spellId: 66842
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
                      spellId: 58734
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "100ms"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 58734
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61657
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
                spellId: 49281
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49281
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 60103
        }
      }
    }
  }
];
const DefaultFt = {
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
          spellId: 66842
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
      castSpell: {
        spellId: {
          spellId: 51533
        }
      }
    }
  },
  {
    action: {
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
      castSpell: {
        spellId: {
          spellId: 2825
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
          op: "OpEq",
          lhs: {
            auraNumStacks: {
              auraId: {
                spellId: 53817
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
      castSpell: {
        spellId: {
          spellId: 49238
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
                  auraNumStacks: {
                    auraId: {
                      spellId: 53817
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "3"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      "const": {
                        val: "300ms"
                      }
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
                rhs: {
                  autoTimeToNext: {}
                }
              }
            }
          ]
        }
      },
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
          spellId: 17364
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
                spellId: 49233
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
      castSpell: {
        spellId: {
          spellId: 49233
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49231
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
            totemRemainingTime: {
              totemType: "Water"
            }
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
          spellId: 66842
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
                      spellId: 58734
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "100ms"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 58734
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61657
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
                spellId: 49281
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49281
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 60103
        }
      }
    }
  }
];
const DefaultWf = {
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
          spellId: 66842
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
      castSpell: {
        spellId: {
          spellId: 51533
        }
      }
    }
  },
  {
    action: {
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
      castSpell: {
        spellId: {
          spellId: 2825
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
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 49233
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
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
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
          spellId: 49233
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
                spellId: 53817
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
      castSpell: {
        spellId: {
          spellId: 49238
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
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 17364
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 17364
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49231
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
            totemRemainingTime: {
              totemType: "Water"
            }
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
          spellId: 66842
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 17364
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
                      spellId: 58734
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "100ms"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 58734
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61657
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
                spellId: 49281
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49281
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 60103
        }
      }
    }
  }
];
const Phase3Apl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET = makePresetGear("Preraid Preset", PreraidGear);
const P1_PRESET = makePresetGear("P1 Preset", P1Gear);
const P2_PRESET_FT = makePresetGear("P2 Preset FT", P2FtGear);
const P2_PRESET_WF = makePresetGear("P2 Preset WF", P2WfGear);
const P3_PRESET_ALLIANCE = makePresetGear("P3 Preset [A]", P3AllianceGear, { faction: Faction.Alliance });
const P3_PRESET_HORDE = makePresetGear("P3 Preset [H]", P3HordeGear, { faction: Faction.Horde });
const P4_PRESET_FT = makePresetGear("P4 Preset FT", P4FtGear);
const P4_PRESET_WF = makePresetGear("P4 Preset WF", P4WfGear);
const ROTATION_FT_DEFAULT = makePresetAPLRotation("Default FT", DefaultFt);
const ROTATION_WF_DEFAULT = makePresetAPLRotation("Default WF", DefaultWf);
const ROTATION_PHASE_3 = makePresetAPLRotation("Phase 3", Phase3Apl);
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "053030152-30405003105021333031131031051",
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfFireNova,
      major2: ShamanMajorGlyph.GlyphOfFlametongueWeapon,
      major3: ShamanMajorGlyph.GlyphOfFeralSpirit
    })
  })
};
const Phase3Talents = {
  name: "Phase 3",
  data: SavedTalents.create({
    talentsString: "053030152-30505003105001333031131131051",
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfFireNova,
      major2: ShamanMajorGlyph.GlyphOfFlametongueWeapon,
      major3: ShamanMajorGlyph.GlyphOfFeralSpirit
    })
  })
};
const DefaultOptions = EnhancementShaman_Options.create({
  shield: ShamanShield.LightningShield,
  imbueMh: ShamanImbue.WindfuryWeapon,
  imbueOh: ShamanImbue.FlametongueWeapon,
  syncType: ShamanSyncType.Auto,
  totems: ShamanTotems.create({
    earth: EarthTotem.StrengthOfEarthTotem,
    fire: FireTotem.MagmaTotem,
    water: WaterTotem.ManaSpringTotem,
    air: AirTotem.WindfuryTotem
  })
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodFishFeast
});
const DefaultRaidBuffs = RaidBuffs.create({
  giftOfTheWild: TristateEffect.TristateEffectImproved,
  arcaneBrilliance: true,
  leaderOfThePack: TristateEffect.TristateEffectImproved,
  totemOfWrath: true,
  wrathOfAirTotem: true,
  moonkinAura: TristateEffect.TristateEffectImproved,
  sanctifiedRetribution: true,
  divineSpirit: true,
  battleShout: TristateEffect.TristateEffectImproved,
  demonicPactSp: 500
});
const DefaultDebuffs = Debuffs.create({
  bloodFrenzy: true,
  sunderArmor: true,
  curseOfWeakness: TristateEffect.TristateEffectRegular,
  curseOfElements: true,
  faerieFire: TristateEffect.TristateEffectImproved,
  judgementOfWisdom: true,
  misery: true,
  totemOfWrath: true,
  shadowMastery: true
});
function FireElementalSection(parentElem, simUI) {
  let contentBlock = new ContentBlock(parentElem, "fire-elemental-settings", {
    header: { title: "Fire Elemental" }
  });
  let fireElementalIconContainer = Input.newGroupContainer();
  fireElementalIconContainer.classList.add("fire-elemental-icon-container");
  contentBlock.bodyElement.appendChild(fireElementalIconContainer);
  const fireElementalBooleanIconInput = makeBooleanIconInput({
    getModObject: (player) => player,
    getValue: (player) => player.getSpecOptions().totems || ShamanTotems.create(),
    setValue: (eventID, player, newVal) => {
      const newOptions = player.getSpecOptions();
      newOptions.totems = newVal;
      player.setSpecOptions(eventID, newOptions);
      player.rotationChangeEmitter.emit(eventID);
    },
    changeEmitter: (player) => player.specOptionsChangeEmitter
  }, ActionId.fromSpellId(2894), "useFireElemental");
  new IconPicker(fireElementalIconContainer, simUI.player, fireElementalBooleanIconInput);
  new NumberPicker(contentBlock.bodyElement, simUI.player, {
    positive: true,
    label: "Bonus spell power",
    labelTooltip: "Bonus spell power to snapshot Fire Elemental with. Will prioritize dropping Fire Elemental if greater then 0",
    inline: true,
    getValue: (player) => player.getSpecOptions().totems?.bonusSpellpower || 0,
    setValue: (eventID, player, newVal) => {
      const newOptions = player.getSpecOptions();
      if (newOptions.totems) {
        newOptions.totems.bonusSpellpower = newVal;
      }
      player.setSpecOptions(eventID, newOptions);
    },
    changedEvent: (player) => player.specOptionsChangeEmitter
  });
  new BooleanPicker(contentBlock.bodyElement, simUI.player, {
    label: "Use Tier 10 (4pc)",
    labelTooltip: "Will use Tier 10 (4pc) to snapshot Fire Elemental.",
    inline: true,
    getValue: (player) => player.getSpecOptions().totems?.enhTierTenBonus || false,
    setValue: (eventID, player, newVal) => {
      const newOptions = player.getSpecOptions();
      if (newOptions.totems) {
        newOptions.totems.enhTierTenBonus = newVal;
      }
      player.setSpecOptions(eventID, newOptions);
    },
    changedEvent: (player) => player.currentStatsEmitter,
    showWhen: (player) => {
      const hasBonus = player.getCurrentStats().sets.includes("Frost Witch's Battlegear (4pc)");
      return hasBonus;
    }
  });
  return contentBlock;
}
const SPEC_CONFIG = registerSpecConfig(Spec.SpecEnhancementShaman, {
  cssClass: "enhancement-shaman-sim-ui",
  cssScheme: "shaman",
  knownIssues: [],
  epStats: [
    Stat.StatIntellect,
    Stat.StatAgility,
    Stat.StatStrength,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatExpertise,
    Stat.StatSpellPower,
    Stat.StatSpellCrit,
    Stat.StatSpellHit,
    Stat.StatSpellHaste
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps,
    PseudoStat.PseudoStatOffHandDps
  ],
  epReferenceStat: Stat.StatAttackPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatStamina,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatIntellect,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatExpertise,
    Stat.StatArmorPenetration,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatResilience
  ],
  defaults: {
    gear: P4_PRESET_WF.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 1.48,
      [Stat.StatAgility]: 1.59,
      [Stat.StatStrength]: 1.1,
      [Stat.StatSpellPower]: 1.13,
      [Stat.StatSpellHit]: 0,
      [Stat.StatSpellCrit]: 0.91,
      [Stat.StatSpellHaste]: 0.37,
      [Stat.StatAttackPower]: 1,
      [Stat.StatMeleeHit]: 1.38,
      [Stat.StatMeleeCrit]: 0.81,
      [Stat.StatMeleeHaste]: 1.61,
      [Stat.StatArmorPenetration]: 0.48,
      [Stat.StatExpertise]: 0
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 5.21,
      [PseudoStat.PseudoStatOffHandDps]: 2.21
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: DefaultRaidBuffs,
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfWisdom: TristateEffect.TristateEffectImproved,
      blessingOfMight: TristateEffect.TristateEffectImproved,
      judgementsOfTheWise: true
    }),
    debuffs: DefaultDebuffs
  },
  playerIconInputs: [
    ShamanShieldInput,
    ShamanImbueMH,
    ShamanImbueOH
  ],
  includeBuffDebuffInputs: [
    ReplenishmentBuff,
    MP5Buff,
    SpellHasteBuff,
    SpiritBuff
  ],
  excludeBuffDebuffInputs: [
    BleedDebuff
  ],
  otherInputs: {
    inputs: [
      SyncTypeInput,
      TankAssignment,
      InFrontOfTarget
    ]
  },
  itemSwapSlots: [ItemSlot.ItemSlotMainHand, ItemSlot.ItemSlotOffHand],
  customSections: [
    TotemsSection,
    FireElementalSection
  ],
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      StandardTalents,
      Phase3Talents
    ],
    rotations: [
      ROTATION_FT_DEFAULT,
      ROTATION_WF_DEFAULT,
      ROTATION_PHASE_3
    ],
    gear: [
      PRERAID_PRESET,
      P1_PRESET,
      P2_PRESET_FT,
      P2_PRESET_WF,
      P3_PRESET_ALLIANCE,
      P3_PRESET_HORDE,
      P4_PRESET_FT,
      P4_PRESET_WF
    ]
  },
  autoRotation: (player) => {
    const hasT94P = player.getCurrentStats().sets.includes("Triumphant Nobundo's Battlegear (4pc)") || player.getCurrentStats().sets.includes("Nobundo's Battlegear (4pc)") || player.getCurrentStats().sets.includes("Triumphant Thrall's Battlegear (4pc)") || player.getCurrentStats().sets.includes("Thrall's Battlegear (4pc)");
    const options = player.getSpecOptions();
    if (hasT94P) {
      console.log("has set");
      return ROTATION_PHASE_3.rotation.rotation;
    } else if (options.imbueMh == ShamanImbue.FlametongueWeapon) {
      return ROTATION_FT_DEFAULT.rotation.rotation;
    } else {
      return ROTATION_WF_DEFAULT.rotation.rotation;
    }
  },
  raidSimPresets: [
    {
      spec: Spec.SpecEnhancementShaman,
      tooltip: specNames[Spec.SpecEnhancementShaman],
      defaultName: "Enhancement",
      iconUrl: getSpecIcon(Class.ClassShaman, 1),
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
          2: P2_PRESET_FT.gear,
          3: P3_PRESET_ALLIANCE.gear,
          4: P4_PRESET_FT.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET.gear,
          2: P2_PRESET_FT.gear,
          3: P3_PRESET_HORDE.gear,
          4: P4_PRESET_FT.gear
        }
      }
    }
  ]
});
class EnhancementShamanSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  EnhancementShamanSimUI as E
};
//# sourceMappingURL=sim-5e1b13f4.chunk.js.map
