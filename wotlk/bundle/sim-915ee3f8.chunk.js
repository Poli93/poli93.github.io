import { eV as WarriorShout, A as ActionId, eW as ProtectionWarrior_Rotation, S as Spec, bV as SavedTalents, N as Glyphs, o as WarriorMajorGlyph, p as WarriorMinorGlyph, eX as ProtectionWarrior_Options, F as Consumes, dP as BattleElixir, dQ as GuardianElixir, dR as Food, dT as Potions, dN as Explosive, a2 as Stat, a1 as PseudoStat, G as Stats, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, dF as APLPrepullAction, dy as APLAction, L as APLRotation, dG as APLListItem, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-a280e993.chunk.js";
import { a as makeSpecOptionsNumberInput, t as makeSpecOptionsEnumIconInput, m as makeSpecOptionsBooleanIconInput, b as makePresetGear, c as makePresetAPLRotation, K as makePresetSimpleRotation, r as registerSpecConfig, Q as HealthBuff, T as TankAssignment, X as IncomingHps, Y as HealingCadence, Z as HealingCadenceVariation, _ as BurstWindow, a0 as HpPercentForDefensives, $ as InspirationUptime, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-b73d15d3.chunk.js";
import { s as standardCooldownDefaults } from "./apl_utils-aa8b37c5.chunk.js";
const StartingRage = makeSpecOptionsNumberInput({
  fieldName: "startingRage",
  label: "Starting Rage",
  labelTooltip: "Initial rage at the start of each iteration."
});
const ShoutPicker = makeSpecOptionsEnumIconInput({
  fieldName: "shout",
  values: [
    { color: "c79c6e", value: WarriorShout.WarriorShoutNone },
    { actionId: ActionId.fromSpellId(47436), value: WarriorShout.WarriorShoutBattle },
    { actionId: ActionId.fromSpellId(469), value: WarriorShout.WarriorShoutCommanding }
  ]
});
const ShatteringThrow = makeSpecOptionsBooleanIconInput({
  fieldName: "useShatteringThrow",
  id: ActionId.fromSpellId(64382)
});
const Recklessness = makeSpecOptionsBooleanIconInput({
  fieldName: "useRecklessness",
  id: ActionId.fromSpellId(1719)
});
const Retaliation = makeSpecOptionsBooleanIconInput({
  fieldName: "useRetaliation",
  id: ActionId.fromSpellId(20230)
});
const items$5 = [
  {
    id: 42549,
    enchant: 3818,
    gems: [
      41380,
      40015
    ]
  },
  {
    id: 40679
  },
  {
    id: 37814,
    enchant: 3852
  },
  {
    id: 37728,
    enchant: 3605
  },
  {
    id: 39611,
    enchant: 1953,
    gems: [
      40008,
      40008
    ]
  },
  {
    id: 37620,
    enchant: 3850,
    gems: [
      0
    ]
  },
  {
    id: 39622,
    enchant: 3860,
    gems: [
      40034,
      0
    ]
  },
  {
    id: 37379,
    enchant: 3601,
    gems: [
      40034,
      36767
    ]
  },
  {
    id: 43500,
    enchant: 3822,
    gems: [
      40034
    ]
  },
  {
    id: 44201,
    enchant: 3232
  },
  {
    id: 37784
  },
  {
    id: 37186
  },
  {
    id: 37220
  },
  {
    id: 44063,
    gems: [
      36767,
      40089
    ]
  },
  {
    id: 37401,
    enchant: 3788
  },
  {
    id: 43085,
    enchant: 3849
  },
  {
    id: 41168,
    gems: [
      36767
    ]
  }
];
const PreraidBalancedGear = {
  items: items$5
};
const items$4 = [
  {
    id: 48430,
    enchant: 3818,
    gems: [
      41380,
      40130
    ]
  },
  {
    id: 47116
  },
  {
    id: 48454,
    enchant: 3852,
    gems: [
      40119
    ]
  },
  {
    id: 45496,
    enchant: 3605,
    gems: [
      40130
    ]
  },
  {
    id: 48450,
    enchant: 3832,
    gems: [
      40167,
      40119
    ]
  },
  {
    id: 47570,
    enchant: 3850,
    gems: [
      40167,
      0
    ]
  },
  {
    id: 48452,
    enchant: 3860,
    gems: [
      40167,
      0
    ]
  },
  {
    id: 47072,
    enchant: 3599,
    gems: [
      40130,
      36767
    ]
  },
  {
    id: 49904,
    enchant: 3822,
    gems: [
      40130,
      40167,
      36767
    ]
  },
  {
    id: 49907,
    enchant: 3232,
    gems: [
      40167,
      36767
    ]
  },
  {
    id: 45471,
    gems: [
      40167
    ]
  },
  {
    id: 47731
  },
  {
    id: 47216
  },
  {
    id: 47080
  },
  {
    id: 45876,
    enchant: 3788,
    gems: [
      40130
    ]
  },
  {
    id: 45877,
    enchant: 3849,
    gems: [
      40119,
      40119
    ]
  },
  {
    id: 47660
  }
];
const PreraidP4Gear = {
  items: items$4
};
const items$3 = [
  {
    id: 40546,
    enchant: 3818,
    gems: [
      41380,
      40034
    ]
  },
  {
    id: 40387
  },
  {
    id: 39704,
    enchant: 3852,
    gems: [
      40034
    ]
  },
  {
    id: 40722,
    enchant: 3605
  },
  {
    id: 44e3,
    enchant: 3832,
    gems: [
      40034,
      40015
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
    id: 40545,
    enchant: 3860,
    gems: [
      40034,
      0
    ]
  },
  {
    id: 39759,
    enchant: 3601,
    gems: [
      40008,
      36767
    ]
  },
  {
    id: 40589,
    enchant: 3822
  },
  {
    id: 39717,
    enchant: 3232,
    gems: [
      40089
    ]
  },
  {
    id: 40370
  },
  {
    id: 40718
  },
  {
    id: 40257
  },
  {
    id: 44063,
    gems: [
      36767,
      40089
    ]
  },
  {
    id: 40402,
    enchant: 3788
  },
  {
    id: 40400,
    enchant: 3849
  },
  {
    id: 41168,
    gems: [
      36767
    ]
  }
];
const P1BalancedGear = {
  items: items$3
};
const items$2 = [
  {
    id: 46166,
    enchant: 3818,
    gems: [
      41380,
      40008
    ]
  },
  {
    id: 45485,
    gems: [
      40008
    ]
  },
  {
    id: 46167,
    enchant: 3852,
    gems: [
      40008
    ]
  },
  {
    id: 45496,
    enchant: 3605,
    gems: [
      40023
    ]
  },
  {
    id: 46162,
    enchant: 3832,
    gems: [
      40008,
      40008
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
    id: 45139,
    enchant: 3601,
    gems: [
      40008
    ]
  },
  {
    id: 46169,
    enchant: 3822,
    gems: [
      40088,
      40008
    ]
  },
  {
    id: 45988,
    enchant: 3232,
    gems: [
      36767,
      36767
    ]
  },
  {
    id: 45471,
    gems: [
      45880
    ]
  },
  {
    id: 45247
  },
  {
    id: 45158
  },
  {
    id: 46021
  },
  {
    id: 45442,
    enchant: 3788,
    gems: [
      40034
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
    id: 45137,
    enchant: 3608
  }
];
const P2SurvivalGear = {
  items: items$2
};
const items$1 = [
  {
    id: 48433,
    enchant: 3818,
    gems: [
      41380,
      40130
    ]
  },
  {
    id: 47133,
    gems: [
      40130
    ]
  },
  {
    id: 48455,
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
      40130,
      49110,
      36767
    ]
  },
  {
    id: 47111,
    enchant: 3850,
    gems: [
      40130,
      0
    ]
  },
  {
    id: 48453,
    enchant: 3860,
    gems: [
      40167,
      0
    ]
  },
  {
    id: 47076,
    enchant: 3599,
    gems: [
      40130,
      36767,
      36767
    ]
  },
  {
    id: 48447,
    enchant: 3822,
    gems: [
      40130,
      40119
    ]
  },
  {
    id: 47003,
    enchant: 3232,
    gems: [
      40130,
      40119
    ]
  },
  {
    id: 45471,
    gems: [
      40167
    ]
  },
  {
    id: 47157,
    gems: [
      40130
    ]
  },
  {
    id: 45158
  },
  {
    id: 47088
  },
  {
    id: 47506,
    enchant: 3788,
    gems: [
      40167
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
    id: 47660
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
      40130
    ]
  },
  {
    id: 50682,
    gems: [
      40130
    ]
  },
  {
    id: 51224,
    enchant: 3852,
    gems: [
      40130
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
    id: 51220,
    enchant: 3832,
    gems: [
      40130,
      40119
    ]
  },
  {
    id: 50611,
    enchant: 3850,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 51222,
    enchant: 3860,
    gems: [
      40119,
      0
    ]
  },
  {
    id: 50691,
    enchant: 3599,
    gems: [
      40130,
      36767,
      0
    ]
  },
  {
    id: 51223,
    enchant: 3822,
    gems: [
      40167,
      40119
    ]
  },
  {
    id: 50625,
    enchant: 3232,
    gems: [
      40167,
      40119
    ]
  },
  {
    id: 50622,
    gems: [
      40130
    ]
  },
  {
    id: 50642,
    gems: [
      40130
    ]
  },
  {
    id: 50364
  },
  {
    id: 50344
  },
  {
    id: 50738,
    enchant: 3788,
    gems: [
      40119
    ]
  },
  {
    id: 50729,
    enchant: 3849,
    gems: [
      40130
    ]
  },
  {
    id: 51834,
    gems: [
      36767
    ]
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
          spellId: 47440
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
        schedule: "29s, 209s",
        innerAction: {
          castSpell: {
            spellId: {
              spellId: 12975
            }
          }
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
              val: "30"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 47450
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
      castSpell: {
        spellId: {
          spellId: 47488
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57823
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraShouldRefresh: {
          sourceUnit: {
            type: "Self"
          },
          auraId: {
            spellId: 47440
          },
          maxOverlap: {
            "const": {
              val: "3s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47440
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraShouldRefresh: {
          auraId: {
            spellId: 47502
          },
          maxOverlap: {
            "const": {
              val: "2s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47502
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraShouldRefresh: {
          auraId: {
            spellId: 47437
          },
          maxOverlap: {
            "const": {
              val: "2s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 25203
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47498
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
const PRERAID_BALANCED_PRESET = makePresetGear("P1 PreRaid Preset", PreraidBalancedGear);
const P4_PRERAID_PRESET = makePresetGear("P4 PreRaid Preset", PreraidP4Gear);
const P1_BALANCED_PRESET = makePresetGear("P1 Preset", P1BalancedGear);
const P2_SURVIVAL_PRESET = makePresetGear("P2 Preset", P2SurvivalGear);
const P3_PRESET = makePresetGear("P3 Preset", P3Gear);
const P4_PRESET = makePresetGear("P4 Preset", P4Gear);
const ROTATION_DEFAULT = makePresetAPLRotation("Default APL", DefaultApl);
const ROTATION_PRESET_SIMPLE = makePresetSimpleRotation("Simple Cooldowns", Spec.SpecProtectionWarrior, ProtectionWarrior_Rotation.create());
const StandardTalents = {
  name: "Standard",
  data: SavedTalents.create({
    talentsString: "2500030023-302-053351225000012521030113321",
    glyphs: Glyphs.create({
      major1: WarriorMajorGlyph.GlyphOfBlocking,
      major2: WarriorMajorGlyph.GlyphOfVigilance,
      major3: WarriorMajorGlyph.GlyphOfDevastate,
      minor1: WarriorMinorGlyph.GlyphOfCharge,
      minor2: WarriorMinorGlyph.GlyphOfThunderClap,
      minor3: WarriorMinorGlyph.GlyphOfCommand
    })
  })
};
const UATalents = {
  name: "UA",
  data: SavedTalents.create({
    talentsString: "35023301230051002020120002-2-05035122500000252",
    glyphs: Glyphs.create({
      major1: WarriorMajorGlyph.GlyphOfRevenge,
      major2: WarriorMajorGlyph.GlyphOfHeroicStrike,
      major3: WarriorMajorGlyph.GlyphOfSweepingStrikes,
      minor1: WarriorMinorGlyph.GlyphOfCharge,
      minor2: WarriorMinorGlyph.GlyphOfThunderClap,
      minor3: WarriorMinorGlyph.GlyphOfCommand
    })
  })
};
const DefaultOptions = ProtectionWarrior_Options.create({
  shout: WarriorShout.WarriorShoutCommanding,
  useShatteringThrow: false,
  useRecklessness: false,
  useRetaliation: false,
  startingRage: 0
});
const DefaultConsumes = Consumes.create({
  battleElixir: BattleElixir.ElixirOfExpertise,
  guardianElixir: GuardianElixir.ElixirOfProtection,
  food: Food.FoodDragonfinFilet,
  defaultPotion: Potions.IndestructiblePotion,
  prepopPotion: Potions.IndestructiblePotion,
  thermalSapper: true,
  fillerExplosive: Explosive.ExplosiveSaroniteBomb
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecProtectionWarrior, {
  cssClass: "protection-warrior-sim-ui",
  cssScheme: "warrior",
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
    Stat.StatBlock,
    Stat.StatBlockValue,
    Stat.StatDodge,
    Stat.StatParry,
    Stat.StatResilience,
    Stat.StatNatureResistance,
    Stat.StatShadowResistance,
    Stat.StatFrostResistance
  ],
  defaults: {
    gear: P3_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatArmor]: 0.174,
      [Stat.StatBonusArmor]: 0.155,
      [Stat.StatStamina]: 2.336,
      [Stat.StatStrength]: 1.555,
      [Stat.StatAgility]: 2.771,
      [Stat.StatAttackPower]: 0.32,
      [Stat.StatExpertise]: 1.44,
      [Stat.StatMeleeHit]: 1.432,
      [Stat.StatMeleeCrit]: 0.925,
      [Stat.StatMeleeHaste]: 0.431,
      [Stat.StatArmorPenetration]: 1.055,
      [Stat.StatBlock]: 1.32,
      [Stat.StatBlockValue]: 1.373,
      [Stat.StatDodge]: 2.606,
      [Stat.StatParry]: 2.649,
      [Stat.StatDefense]: 3.305
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 6.081
    }),
    consumes: DefaultConsumes,
    talents: StandardTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      powerWordFortitude: TristateEffect.TristateEffectImproved,
      abominationsMight: true,
      swiftRetribution: true,
      bloodlust: true,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      leaderOfThePack: TristateEffect.TristateEffectImproved,
      sanctifiedRetribution: true,
      devotionAura: TristateEffect.TristateEffectImproved,
      stoneskinTotem: TristateEffect.TristateEffectImproved,
      icyTalons: true,
      retributionAura: true,
      thorns: TristateEffect.TristateEffectImproved,
      shadowProtection: true
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved,
      blessingOfSanctuary: true
    }),
    debuffs: Debuffs.create({
      sunderArmor: true,
      mangle: true,
      vindication: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      insectSwarm: true,
      bloodFrenzy: true,
      judgementOfLight: true,
      heartOfTheCrusader: true,
      frostFever: TristateEffect.TristateEffectImproved
    })
  },
  playerIconInputs: [
    ShoutPicker,
    ShatteringThrow,
    Recklessness,
    Retaliation
  ],
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
      StartingRage,
      InFrontOfTarget
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      StandardTalents,
      UATalents
    ],
    rotations: [
      ROTATION_DEFAULT,
      ROTATION_PRESET_SIMPLE
    ],
    gear: [
      PRERAID_BALANCED_PRESET,
      P4_PRERAID_PRESET,
      P1_BALANCED_PRESET,
      P2_SURVIVAL_PRESET,
      P3_PRESET,
      P4_PRESET
    ]
  },
  autoRotation: (_player) => {
    return ROTATION_DEFAULT.rotation.rotation;
  },
  simpleRotation: (player, simple, cooldowns) => {
    let [prepullActions2, actions] = standardCooldownDefaults(cooldowns);
    const preShout = APLPrepullAction.fromJsonString(`{"action":{"castSpell":{"spellId":{"spellId":47440}}},"doAtValue":{"const":{"val":"-10s"}}}`);
    const heroicStrike = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"30"}}}},"castSpell":{"spellId":{"tag":1,"spellId":47450}}}`);
    const shieldSlam = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":47488}}}`);
    const revenge = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":57823}}}`);
    const refreshShout = APLAction.fromJsonString(`{"condition":{"auraShouldRefresh":{"sourceUnit":{"type":"Self"},"auraId":{"spellId":47440},"maxOverlap":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":47440}}}`);
    const refreshTclap = APLAction.fromJsonString(`{"condition":{"auraShouldRefresh":{"auraId":{"spellId":47502},"maxOverlap":{"const":{"val":"2s"}}}},"castSpell":{"spellId":{"spellId":47502}}}`);
    const refreshDemo = APLAction.fromJsonString(`{"condition":{"auraShouldRefresh":{"auraId":{"spellId":47437},"maxOverlap":{"const":{"val":"2s"}}}},"castSpell":{"spellId":{"spellId":25203}}}`);
    const devastate = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":47498}}}`);
    prepullActions2.push(preShout);
    actions.push(...[
      heroicStrike,
      shieldSlam,
      revenge,
      refreshShout,
      refreshTclap,
      refreshDemo,
      devastate
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
      spec: Spec.SpecProtectionWarrior,
      tooltip: "Protection Warrior",
      defaultName: "Protection",
      iconUrl: getSpecIcon(Class.ClassWarrior, 2),
      talents: StandardTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_BALANCED_PRESET.gear,
          2: P2_SURVIVAL_PRESET.gear,
          3: P3_PRESET.gear,
          4: P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_BALANCED_PRESET.gear,
          2: P2_SURVIVAL_PRESET.gear,
          3: P3_PRESET.gear,
          4: P4_PRESET.gear
        }
      }
    }
  ]
});
class ProtectionWarriorSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  ProtectionWarriorSimUI as P
};
//# sourceMappingURL=sim-915ee3f8.chunk.js.map
