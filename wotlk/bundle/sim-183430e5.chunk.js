import { A as ActionId, aG as UnitReference_Type, aH as UnitReference, T as TypedEvent, bV as SavedTalents, N as Glyphs, h as PriestMajorGlyph, j as PriestMinorGlyph, eF as HealingPriest_Options, F as Consumes, dN as Flask, dQ as Food, dS as Potions, aE as RaidBuffs, bc as TristateEffect, E as IndividualBuffs, aF as Debuffs, a2 as Stat, G as Stats, x as PartyBuffs, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-8bc265ce.chunk.js";
import { m as makeSpecOptionsBooleanIconInput, a as makeSpecOptionsNumberInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, I as IndividualSimUI } from "./preset_utils-3408ddad.chunk.js";
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
const RapturesPerMinute = makeSpecOptionsNumberInput({
  fieldName: "rapturesPerMinute",
  label: "Raptures / Min",
  labelTooltip: "Number of times to proc Rapture each minute (due to a PWS being fully absorbed).",
  showWhen: (player) => player.getTalents().rapture > 0,
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter])
});
const items$9 = [
  {
    id: 37294,
    enchant: 3819,
    gems: [
      41401,
      39998
    ]
  },
  {
    id: 40681
  },
  {
    id: 37691,
    enchant: 3809
  },
  {
    id: 37630,
    enchant: 3859
  },
  {
    id: 39515,
    enchant: 3832,
    gems: [
      42144,
      42144
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
    id: 39519,
    enchant: 3246,
    gems: [
      42144,
      0
    ]
  },
  {
    id: 40697,
    enchant: 3601,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 37622,
    enchant: 3719
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      40027
    ]
  },
  {
    id: 44283
  },
  {
    id: 37195
  },
  {
    id: 37660
  },
  {
    id: 42413,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 37360,
    enchant: 3854
  },
  {},
  {
    id: 37238
  }
];
const PreraidDiscGear = {
  items: items$9
};
const items$8 = [
  {
    id: 42553,
    enchant: 3819,
    gems: [
      41401,
      42148
    ]
  },
  {
    id: 40681
  },
  {
    id: 37655,
    enchant: 3809
  },
  {
    id: 37291,
    enchant: 3831
  },
  {
    id: 39515,
    enchant: 3832,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 37361,
    enchant: 1119,
    gems: [
      0
    ]
  },
  {
    id: 39519,
    enchant: 3604,
    gems: [
      40012,
      0
    ]
  },
  {
    id: 40697,
    enchant: 3601,
    gems: [
      42148,
      42148
    ]
  },
  {
    id: 37189,
    enchant: 3719,
    gems: [
      40047,
      49110
    ]
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      40092
    ]
  },
  {
    id: 44283
  },
  {
    id: 37694
  },
  {
    id: 37111
  },
  {
    id: 42413,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 37360,
    enchant: 3854
  },
  {},
  {
    id: 37619
  }
];
const PreraidHolyGear = {
  items: items$8
};
const items$7 = [
  {
    id: 40456,
    enchant: 3819,
    gems: [
      41401,
      39998
    ]
  },
  {
    id: 44657,
    gems: [
      40047
    ]
  },
  {
    id: 40450,
    enchant: 3809,
    gems: [
      42144
    ]
  },
  {
    id: 40724,
    enchant: 3859
  },
  {
    id: 40194,
    enchant: 3832,
    gems: [
      42144
    ]
  },
  {
    id: 40741,
    enchant: 2332,
    gems: [
      0
    ]
  },
  {
    id: 40445,
    enchant: 3246,
    gems: [
      42144,
      0
    ]
  },
  {
    id: 40271,
    enchant: 3601,
    gems: [
      40027,
      39998
    ]
  },
  {
    id: 40398,
    enchant: 3719,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 40236,
    enchant: 3606
  },
  {
    id: 40108
  },
  {
    id: 40433
  },
  {
    id: 37835
  },
  {
    id: 40258
  },
  {
    id: 40395,
    enchant: 3834
  },
  {
    id: 40350
  },
  {
    id: 40245
  }
];
const P1DiscGear = {
  items: items$7
};
const items$6 = [
  {
    id: 40447,
    enchant: 3819,
    gems: [
      41401,
      40051
    ]
  },
  {
    id: 44657,
    gems: [
      40012
    ]
  },
  {
    id: 40450,
    enchant: 3809,
    gems: [
      40012
    ]
  },
  {
    id: 40723,
    enchant: 3831
  },
  {
    id: 40381,
    enchant: 3832,
    gems: [
      40012,
      49110
    ]
  },
  {
    id: 40741,
    enchant: 1119,
    gems: [
      0
    ]
  },
  {
    id: 40454,
    enchant: 3604,
    gems: [
      40051,
      0
    ]
  },
  {
    id: 40271,
    enchant: 3601,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 40398,
    enchant: 3719,
    gems: [
      42148,
      42148
    ]
  },
  {
    id: 40326,
    enchant: 3606,
    gems: [
      42148
    ]
  },
  {
    id: 40719
  },
  {
    id: 40375
  },
  {
    id: 37111
  },
  {
    id: 42413,
    gems: [
      40012,
      40012
    ]
  },
  {
    id: 40395,
    enchant: 3834
  },
  {
    id: 40350
  },
  {
    id: 40245
  }
];
const P1HolyGear = {
  items: items$6
};
const items$5 = [
  {
    id: 46197,
    enchant: 3819,
    gems: [
      41401,
      45883
    ]
  },
  {
    id: 45933,
    gems: [
      39998
    ]
  },
  {
    id: 45390,
    enchant: 3809,
    gems: [
      39998
    ]
  },
  {
    id: 45486,
    enchant: 3859,
    gems: [
      39998
    ]
  },
  {
    id: 46193,
    enchant: 3832,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45146,
    enchant: 3758,
    gems: [
      0
    ]
  },
  {
    id: 45520,
    enchant: 3246,
    gems: [
      39998,
      39998,
      0
    ]
  },
  {
    id: 45558,
    gems: [
      39998,
      40047,
      39998
    ]
  },
  {
    id: 45388,
    enchant: 3721,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 46050,
    enchant: 3606,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45946,
    gems: [
      39998
    ]
  },
  {
    id: 46096,
    gems: [
      39998
    ]
  },
  {
    id: 40432
  },
  {
    id: 45535
  },
  {
    id: 45612,
    enchant: 3834,
    gems: [
      40027
    ]
  },
  {
    id: 45314
  },
  {
    id: 45294,
    gems: [
      39998
    ]
  }
];
const P2DiscGear = {
  items: items$5
};
const items$4 = [
  {
    id: 46197,
    enchant: 3819,
    gems: [
      41401,
      45883
    ]
  },
  {
    id: 45447,
    gems: [
      40017
    ]
  },
  {
    id: 45390,
    enchant: 3809,
    gems: [
      40051
    ]
  },
  {
    id: 45486,
    enchant: 3859,
    gems: [
      40017
    ]
  },
  {
    id: 46193,
    enchant: 3832,
    gems: [
      40051,
      40017
    ]
  },
  {
    id: 44008,
    enchant: 3758,
    gems: [
      40051,
      0
    ]
  },
  {
    id: 45520,
    enchant: 3246,
    gems: [
      40017,
      40017,
      0
    ]
  },
  {
    id: 45558,
    gems: [
      40051,
      40017,
      40017
    ]
  },
  {
    id: 45388,
    enchant: 3721,
    gems: [
      40026,
      40017
    ]
  },
  {
    id: 46050,
    enchant: 3606,
    gems: [
      40026,
      40017
    ]
  },
  {
    id: 45946,
    gems: [
      40017
    ]
  },
  {
    id: 46323,
    gems: [
      40017
    ]
  },
  {
    id: 46051
  },
  {
    id: 45535
  },
  {
    id: 46035,
    enchant: 3834,
    gems: [
      40017
    ]
  },
  {
    id: 45271
  },
  {
    id: 45511
  }
];
const P2HolyGear = {
  items: items$4
};
const items$3 = [
  {
    id: 46197,
    enchant: 3820,
    gems: [
      41401,
      40113
    ]
  },
  {
    id: 47930,
    gems: [
      40113
    ]
  },
  {
    id: 46190,
    enchant: 3810,
    gems: [
      40113
    ]
  },
  {
    id: 47490,
    enchant: 3859,
    gems: [
      40134
    ]
  },
  {
    id: 46193,
    enchant: 3832,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 47587,
    enchant: 3758,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 46188,
    enchant: 3246,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 45619,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 47189,
    enchant: 3721,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 46050,
    enchant: 3606,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 46096,
    gems: [
      40113
    ]
  },
  {
    id: 47224,
    gems: [
      40151
    ]
  },
  {
    id: 40432
  },
  {
    id: 47059
  },
  {
    id: 47206,
    enchant: 3834
  },
  {
    id: 47146
  },
  {
    id: 45294,
    gems: [
      40113
    ]
  }
];
const P3DiscGear = {
  items: items$3
};
const items$2 = [
  {
    id: 49482,
    enchant: 3820,
    gems: [
      41401,
      40174
    ]
  },
  {
    id: 45443,
    gems: [
      40128
    ]
  },
  {
    id: 46068,
    enchant: 3810,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 46977,
    enchant: 3831,
    gems: [
      40128
    ]
  },
  {
    id: 47603,
    enchant: 3832,
    gems: [
      40128,
      40128,
      40128
    ]
  },
  {
    id: 47585,
    enchant: 3758,
    gems: [
      40128,
      0
    ]
  },
  {
    id: 47983,
    enchant: 3604,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 45619,
    gems: [
      40128,
      40128,
      40128
    ]
  },
  {
    id: 47985,
    enchant: 3721,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 45135,
    enchant: 3606,
    gems: [
      40155,
      40128
    ]
  },
  {
    id: 45946,
    gems: [
      40128
    ]
  },
  {
    id: 47224,
    gems: [
      40128
    ]
  },
  {
    id: 45535
  },
  {
    id: 47059
  },
  {
    id: 47206,
    enchant: 3834
  },
  {
    id: 47146
  },
  {
    id: 47922
  }
];
const P3HolyGear = {
  items: items$2
};
const items$1 = [
  {
    id: 51178,
    enchant: 3820,
    gems: [
      41401,
      40134
    ]
  },
  {
    id: 50700,
    gems: [
      40113
    ]
  },
  {
    id: 51175,
    enchant: 3810,
    gems: [
      40113
    ]
  },
  {
    id: 47551,
    enchant: 3859,
    gems: [
      40113
    ]
  },
  {
    id: 51176,
    enchant: 3832,
    gems: [
      40113,
      40151
    ]
  },
  {
    id: 51918,
    enchant: 3758,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 51179,
    enchant: 3246,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 50702,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 51823,
    enchant: 3721,
    gems: [
      40113,
      40113,
      40113
    ]
  },
  {
    id: 51850,
    enchant: 3606,
    gems: [
      40113,
      40113
    ]
  },
  {
    id: 50720,
    gems: [
      40113
    ]
  },
  {
    id: 50400,
    gems: [
      40113
    ]
  },
  {
    id: 50366
  },
  {
    id: 47059
  },
  {
    id: 51944,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 51922,
    gems: [
      40113
    ]
  },
  {
    id: 50631,
    gems: [
      40113
    ]
  }
];
const P4DiscGear = {
  items: items$1
};
const items = [
  {
    id: 49482,
    enchant: 3820,
    gems: [
      41401,
      40174
    ]
  },
  {
    id: 45443,
    gems: [
      40128
    ]
  },
  {
    id: 46068,
    enchant: 3810,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 46977,
    enchant: 3831,
    gems: [
      40128
    ]
  },
  {
    id: 47603,
    enchant: 3832,
    gems: [
      40128,
      40128,
      40128
    ]
  },
  {
    id: 47585,
    enchant: 3758,
    gems: [
      40128,
      0
    ]
  },
  {
    id: 47983,
    enchant: 3604,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 45619,
    gems: [
      40128,
      40128,
      40128
    ]
  },
  {
    id: 47985,
    enchant: 3721,
    gems: [
      40128,
      40128
    ]
  },
  {
    id: 45135,
    enchant: 3606,
    gems: [
      40155,
      40128
    ]
  },
  {
    id: 45946,
    gems: [
      40128
    ]
  },
  {
    id: 47224,
    gems: [
      40128
    ]
  },
  {
    id: 45535
  },
  {
    id: 47059
  },
  {
    id: 47206,
    enchant: 3834
  },
  {
    id: 47146
  },
  {
    id: 47922
  }
];
const P4HolyGear = {
  items
};
const type$1 = "TypeAPL";
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
          op: "OpLt",
          lhs: {
            spellCpm: {
              spellId: {
                spellId: 48066
              }
            }
          },
          rhs: {
            "const": {
              val: "18"
            }
          }
        }
      },
      multishield: {
        spellId: {
          spellId: 48066
        },
        maxShields: 10,
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
          op: "OpLt",
          lhs: {
            spellCpm: {
              spellId: {
                spellId: 53007
              }
            }
          },
          rhs: {
            "const": {
              val: "4"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 53007
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
            spellCpm: {
              spellId: {
                spellId: 48113
              }
            }
          },
          rhs: {
            "const": {
              val: "2"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48113
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
            spellCpm: {
              spellId: {
                spellId: 48063
              }
            }
          },
          rhs: {
            "const": {
              val: "1"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48063
        }
      }
    }
  }
];
const DiscApl = {
  type: type$1,
  priorityList: priorityList$1
};
const type = "TypeAPL";
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
          op: "OpLt",
          lhs: {
            spellCpm: {
              spellId: {
                spellId: 48063
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
      castSpell: {
        spellId: {
          spellId: 48063
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
            spellCpm: {
              spellId: {
                spellId: 48089
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
          spellId: 48089
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
            spellCpm: {
              spellId: {
                spellId: 48068
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
      multidot: {
        spellId: {
          spellId: 48068
        },
        maxDots: 10,
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
          op: "OpLt",
          lhs: {
            spellCpm: {
              spellId: {
                spellId: 48113
              }
            }
          },
          rhs: {
            "const": {
              val: "2"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48113
        }
      }
    }
  }
];
const HolyApl = {
  type,
  priorityList
};
const DISC_PRERAID_PRESET = makePresetGear("Disc Preraid Preset", PreraidDiscGear, { talentTree: 0 });
const HOLY_PRERAID_PRESET = makePresetGear("Holy Preraid Preset", PreraidHolyGear, { talentTree: 1 });
const DISC_P1_PRESET = makePresetGear("Disc P1 Preset", P1DiscGear, { talentTree: 0 });
const HOLY_P1_PRESET = makePresetGear("Holy P1 Preset", P1HolyGear, { talentTree: 1 });
const DISC_P2_PRESET = makePresetGear("Disc P2 Preset", P2DiscGear, { talentTree: 0 });
const HOLY_P2_PRESET = makePresetGear("Holy P2 Preset", P2HolyGear, { talentTree: 1 });
const DISC_P3_PRESET = makePresetGear("Disc P3 Preset", P3DiscGear, { talentTree: 0 });
const HOLY_P3_PRESET = makePresetGear("Holy P3 Preset", P3HolyGear, { talentTree: 1 });
const DISC_P4_PRESET = makePresetGear("Disc P4 Preset", P4DiscGear, { talentTree: 0 });
const HOLY_P4_PRESET = makePresetGear("Holy P4 Preset", P4HolyGear, { talentTree: 1 });
const ROTATION_PRESET_DISC = makePresetAPLRotation("Disc", DiscApl);
const ROTATION_PRESET_HOLY = makePresetAPLRotation("Holy", HolyApl);
const DiscTalents = {
  name: "Disc",
  data: SavedTalents.create({
    talentsString: "0503203130300512301313231251-2351010303",
    glyphs: Glyphs.create({
      major1: PriestMajorGlyph.GlyphOfPowerWordShield,
      major2: PriestMajorGlyph.GlyphOfFlashHeal,
      major3: PriestMajorGlyph.GlyphOfPenance,
      minor1: PriestMinorGlyph.GlyphOfFortitude,
      minor2: PriestMinorGlyph.GlyphOfShadowfiend,
      minor3: PriestMinorGlyph.GlyphOfFading
    })
  })
};
const HolyTalents = {
  name: "Holy",
  data: SavedTalents.create({
    talentsString: "05032031103-234051032002152530004311051",
    glyphs: Glyphs.create({
      major1: PriestMajorGlyph.GlyphOfPrayerOfHealing,
      major2: PriestMajorGlyph.GlyphOfRenew,
      major3: PriestMajorGlyph.GlyphOfCircleOfHealing,
      minor1: PriestMinorGlyph.GlyphOfFortitude,
      minor2: PriestMinorGlyph.GlyphOfShadowfiend,
      minor3: PriestMinorGlyph.GlyphOfFading
    })
  })
};
const DefaultOptions = HealingPriest_Options.create({
  useInnerFire: true,
  useShadowfiend: true,
  rapturesPerMinute: 5,
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
  vampiricTouch: true
});
const DefaultDebuffs = Debuffs.create({});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecHealingPriest, {
  cssClass: "healing-priest-sim-ui",
  cssScheme: "priest",
  knownIssues: [
    'Talents that apply to, "friendly targets at or below 50% health" are not implemented.',
    "Prayer of Mending always bounces the maximum number of times."
  ],
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
    gear: DISC_P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 2.73,
      [Stat.StatSpirit]: 1.63,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellCrit]: 0.75,
      [Stat.StatSpellHaste]: 0.28,
      [Stat.StatMP5]: 2.05
    }),
    consumes: DefaultConsumes,
    talents: DiscTalents.data,
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
      RapturesPerMinute
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      DiscTalents,
      HolyTalents
    ],
    rotations: [
      ROTATION_PRESET_DISC,
      ROTATION_PRESET_HOLY
    ],
    gear: [
      DISC_PRERAID_PRESET,
      DISC_P1_PRESET,
      DISC_P2_PRESET,
      DISC_P3_PRESET,
      DISC_P4_PRESET,
      HOLY_PRERAID_PRESET,
      HOLY_P1_PRESET,
      HOLY_P2_PRESET,
      HOLY_P3_PRESET,
      HOLY_P4_PRESET
    ]
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    if (talentTree == 0) {
      return ROTATION_PRESET_DISC.rotation.rotation;
    } else {
      return ROTATION_PRESET_HOLY.rotation.rotation;
    }
  },
  raidSimPresets: [
    {
      spec: Spec.SpecHealingPriest,
      tooltip: "Discipline Priest",
      defaultName: "Discipline",
      iconUrl: getSpecIcon(Class.ClassPriest, 0),
      talents: DiscTalents.data,
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
          1: DISC_P1_PRESET.gear,
          2: DISC_P2_PRESET.gear,
          3: DISC_P3_PRESET.gear,
          4: DISC_P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: DISC_P1_PRESET.gear,
          2: DISC_P2_PRESET.gear,
          3: DISC_P3_PRESET.gear,
          4: DISC_P4_PRESET.gear
        }
      }
    },
    {
      spec: Spec.SpecHealingPriest,
      tooltip: "Holy Priest",
      defaultName: "Holy",
      iconUrl: getSpecIcon(Class.ClassPriest, 1),
      talents: HolyTalents.data,
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
          1: HOLY_P1_PRESET.gear,
          2: HOLY_P2_PRESET.gear,
          3: HOLY_P3_PRESET.gear,
          4: HOLY_P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: HOLY_P1_PRESET.gear,
          2: HOLY_P2_PRESET.gear,
          3: HOLY_P3_PRESET.gear,
          4: HOLY_P4_PRESET.gear
        }
      }
    }
  ]
});
class HealingPriestSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  HealingPriestSimUI as H
};
//# sourceMappingURL=sim-183430e5.chunk.js.map
