import { fk as Warlock_Options_Armor, A as ActionId, fl as Warlock_Options_WeaponImbue, e$ as Warlock_Options_Summon, aU as Faction, bV as SavedTalents, N as Glyphs, W as WarlockMajorGlyph, n as WarlockMinorGlyph, fm as Warlock_Options, F as Consumes, dN as Flask, dQ as Food, dR as PetFood, dS as Potions, aE as RaidBuffs, bc as TristateEffect, E as IndividualBuffs, aF as Debuffs, $ as Profession, a2 as Stat, G as Stats, x as PartyBuffs, V as ItemSlot, S as Spec, g as getSpecIcon, u as Class, a6 as Race } from "./detailed_results-7fac2714.chunk.js";
import { t as makeSpecOptionsEnumIconInput, i as makeSpecOptionsBooleanInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, y as ReplenishmentBuff, f as MajorArmorDebuff, g as MinorArmorDebuff, h as PhysicalDamageDebuff, M as MeleeHasteBuff, d as MeleeCritBuff, z as MP5Buff, A as AttackPowerPercentBuff, e as AttackPowerBuff, am as StrengthAndAgilityBuff, l as StaminaBuff, j as SpicedMammothTreats, D as DistanceFromTarget, T as TankAssignment, al as ChannelClipDelay, n as nibelungAverageCasts, I as IndividualSimUI } from "./preset_utils-c0bb2c1f.chunk.js";
const ArmorInput = makeSpecOptionsEnumIconInput({
  fieldName: "armor",
  values: [
    { value: Warlock_Options_Armor.NoArmor, tooltip: "No Armor" },
    { actionId: ActionId.fromSpellId(47893), value: Warlock_Options_Armor.FelArmor },
    { actionId: ActionId.fromSpellId(47889), value: Warlock_Options_Armor.DemonArmor }
  ]
});
const WeaponImbueInput = makeSpecOptionsEnumIconInput({
  fieldName: "weaponImbue",
  values: [
    { value: Warlock_Options_WeaponImbue.NoWeaponImbue, tooltip: "No Weapon Stone" },
    { actionId: ActionId.fromItemId(41174), value: Warlock_Options_WeaponImbue.GrandFirestone },
    { actionId: ActionId.fromItemId(41196), value: Warlock_Options_WeaponImbue.GrandSpellstone }
  ]
});
const PetInput = makeSpecOptionsEnumIconInput({
  fieldName: "summon",
  values: [
    { value: Warlock_Options_Summon.NoSummon, tooltip: "No Pet" },
    { actionId: ActionId.fromSpellId(688), value: Warlock_Options_Summon.Imp },
    { actionId: ActionId.fromSpellId(712), value: Warlock_Options_Summon.Succubus },
    { actionId: ActionId.fromSpellId(691), value: Warlock_Options_Summon.Felhunter },
    {
      actionId: ActionId.fromSpellId(30146),
      value: Warlock_Options_Summon.Felguard,
      showWhen: (player) => player.getTalents().summonFelguard
    }
  ],
  changeEmitter: (player) => player.changeEmitter
});
const DetonateSeed = makeSpecOptionsBooleanInput({
  fieldName: "detonateSeed",
  label: "Detonate Seed on Cast",
  labelTooltip: "Simulates raid doing damage to targets such that seed detonates immediately on cast."
});
const items$f = [
  {
    id: 34340,
    enchant: 3002,
    gems: [
      34220,
      32215
    ]
  },
  {
    id: 34204
  },
  {
    id: 31054,
    enchant: 2982,
    gems: [
      32215,
      35760
    ]
  },
  {
    id: 34242,
    enchant: 2621,
    gems: [
      32196
    ]
  },
  {
    id: 34364,
    enchant: 2661,
    gems: [
      32196,
      35488,
      32196
    ]
  },
  {
    id: 34436,
    enchant: 2650,
    gems: [
      35760,
      0
    ]
  },
  {
    id: 34344,
    enchant: 2937,
    gems: [
      35760,
      32196,
      0
    ]
  },
  {
    id: 34541,
    gems: [
      35760,
      0
    ]
  },
  {
    id: 34181,
    enchant: 2748,
    gems: [
      32196,
      32196,
      35760
    ]
  },
  {
    id: 34564,
    enchant: 2940,
    gems: [
      35760
    ]
  },
  {
    id: 34362,
    enchant: 2928
  },
  {
    id: 34230,
    enchant: 2928
  },
  {
    id: 32483
  },
  {
    id: 34429
  },
  {
    id: 34336,
    enchant: 2672
  },
  {
    id: 34179
  },
  {
    id: 34347,
    gems: [
      35760
    ]
  }
];
const SwpGear = {
  items: items$f
};
const items$e = [
  {
    id: 44910,
    enchant: 3820,
    gems: [
      41285,
      39998
    ]
  },
  {
    id: 42647,
    gems: [
      39998
    ]
  },
  {
    id: 34210,
    enchant: 3810,
    gems: [
      39998,
      40051
    ]
  },
  {
    id: 41610,
    enchant: 3722
  },
  {
    id: 39497,
    enchant: 3832,
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
    id: 42113,
    enchant: 3604,
    gems: [
      0
    ]
  },
  {
    id: 40696,
    gems: [
      40051,
      39998
    ]
  },
  {
    id: 34181,
    enchant: 3719,
    gems: [
      39998,
      39998,
      40051
    ]
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      40026
    ]
  },
  {
    id: 43253,
    gems: [
      40026
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
    id: 45085,
    enchant: 3834
  },
  {
    id: 40698
  },
  {
    id: 34348,
    gems: [
      39998
    ]
  }
];
const PreraidAfflictionGear = {
  items: items$e
};
const items$d = [
  {
    id: 40421,
    enchant: 3820,
    gems: [
      41285,
      40051
    ]
  },
  {
    id: 44661,
    gems: [
      40026
    ]
  },
  {
    id: 40424,
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
    id: 40423,
    enchant: 3832,
    gems: [
      39998,
      40051
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
    id: 40420,
    enchant: 3604,
    gems: [
      39998,
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
    id: 40399
  },
  {
    id: 40719
  },
  {
    id: 40432
  },
  {
    id: 40255
  },
  {
    id: 40396,
    enchant: 3834
  },
  {
    id: 39766
  },
  {
    id: 39712
  }
];
const P1AfflictionGear = {
  items: items$d
};
const items$c = [
  {
    id: 45497,
    enchant: 3820,
    gems: [
      41285,
      45883
    ]
  },
  {
    id: 45133,
    gems: [
      40051
    ]
  },
  {
    id: 46068,
    enchant: 3810,
    gems: [
      39998,
      40049
    ]
  },
  {
    id: 45618,
    enchant: 3722,
    gems: [
      40026
    ]
  },
  {
    id: 46137,
    enchant: 1144,
    gems: [
      39998,
      40014
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
      40051,
      40051,
      39998
    ]
  },
  {
    id: 46139,
    enchant: 3872,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45135,
    enchant: 3606,
    gems: [
      39998,
      40051
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
      39998
    ]
  },
  {
    id: 45617
  },
  {
    id: 45294,
    gems: [
      40051
    ]
  }
];
const P2AfflictionGear = {
  items: items$c
};
const items$b = [
  {
    id: 47789,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 47144,
    gems: [
      40155
    ]
  },
  {
    id: 47792,
    enchant: 3810,
    gems: [
      40155
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
    id: 47129,
    enchant: 1144,
    gems: [
      40133,
      40155,
      40113
    ]
  },
  {
    id: 47208,
    enchant: 2332,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47788,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 46973,
    enchant: 3599,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47790,
    enchant: 3872,
    gems: [
      40113,
      40155
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
    id: 45495,
    gems: [
      40113
    ]
  },
  {
    id: 47237,
    gems: [
      40155
    ]
  },
  {
    id: 45518
  },
  {
    id: 45466
  },
  {
    id: 46980,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 47958,
    gems: [
      40155
    ]
  },
  {
    id: 45294,
    gems: [
      40155
    ]
  }
];
const P3AfflictionAllianceGear = {
  items: items$b
};
const items$a = [
  {
    id: 47796,
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
    id: 47793,
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
    id: 47462,
    enchant: 1144,
    gems: [
      40133,
      40155,
      40113
    ]
  },
  {
    id: 47485,
    enchant: 2332,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47797,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47419,
    enchant: 3599,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47795,
    enchant: 3872,
    gems: [
      40113,
      40153
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
    id: 45495,
    gems: [
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
    id: 45518
  },
  {
    id: 45466
  },
  {
    id: 47422,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 48032,
    gems: [
      40155
    ]
  },
  {
    id: 45294,
    gems: [
      40051
    ]
  }
];
const P3AfflictionHordeGear = {
  items: items$a
};
const items$9 = [
  {
    id: 51231,
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
    id: 51234,
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
    id: 51233,
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
    id: 51230,
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
    enchant: 3872,
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
    id: 50365
  },
  {
    id: 50348
  },
  {
    id: 50732,
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
const P4AfflictionGear = {
  items: items$9
};
const items$8 = [
  {
    id: 44910,
    enchant: 3820,
    gems: [
      41285,
      39998
    ]
  },
  {
    id: 42647,
    gems: [
      40049
    ]
  },
  {
    id: 34210,
    enchant: 3810,
    gems: [
      39998,
      40014
    ]
  },
  {
    id: 41610,
    enchant: 3722
  },
  {
    id: 39497,
    enchant: 3832,
    gems: [
      39998,
      40014
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
    id: 42113,
    enchant: 3604,
    gems: [
      0
    ]
  },
  {
    id: 40696,
    gems: [
      40014,
      39998
    ]
  },
  {
    id: 34181,
    enchant: 3719,
    gems: [
      39998,
      39998,
      40014
    ]
  },
  {
    id: 44202,
    enchant: 3606,
    gems: [
      40026
    ]
  },
  {
    id: 43253,
    gems: [
      40026
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
    id: 45085,
    enchant: 3834
  },
  {
    id: 40698
  },
  {
    id: 34348,
    gems: [
      39998
    ]
  }
];
const PreraidDemoDestroGear = {
  items: items$8
};
const items$7 = [
  {
    id: 40421,
    enchant: 3820,
    gems: [
      41285,
      40014
    ]
  },
  {
    id: 44661,
    gems: [
      40099
    ]
  },
  {
    id: 40424,
    enchant: 3810,
    gems: [
      40049
    ]
  },
  {
    id: 44005,
    enchant: 3722,
    gems: [
      40099
    ]
  },
  {
    id: 40423,
    enchant: 3832,
    gems: [
      40049,
      40014
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
    id: 40420,
    enchant: 3604,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 40561,
    gems: [
      40014
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
    id: 40399
  },
  {
    id: 40719
  },
  {
    id: 40432
  },
  {
    id: 40255
  },
  {
    id: 40396,
    enchant: 3834
  },
  {
    id: 39766
  },
  {
    id: 39712
  }
];
const P1DemoDestroGear = {
  items: items$7
};
const items$6 = [
  {
    id: 45497,
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
    id: 46068,
    enchant: 3810,
    gems: [
      39998,
      40051
    ]
  },
  {
    id: 45618,
    enchant: 3722,
    gems: [
      40026
    ]
  },
  {
    id: 46137,
    enchant: 1144,
    gems: [
      39998,
      40051
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
    id: 45520,
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
    id: 46139,
    enchant: 3872,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45135,
    enchant: 3606,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45495,
    gems: [
      40026
    ]
  },
  {
    id: 45297,
    gems: [
      39998
    ]
  },
  {
    id: 45518
  },
  {
    id: 45148
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
    id: 45294,
    gems: [
      39998
    ]
  }
];
const P2DemoDestroGear = {
  items: items$6
};
const items$5 = [
  {
    id: 47789,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 45243,
    gems: [
      40113
    ]
  },
  {
    id: 47792,
    enchant: 3810,
    gems: [
      40153
    ]
  },
  {
    id: 47553,
    enchant: 3722,
    gems: [
      40113
    ]
  },
  {
    id: 47791,
    enchant: 1144,
    gems: [
      40153,
      40133
    ]
  },
  {
    id: 47208,
    enchant: 2332,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 47788,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 46973,
    enchant: 3599,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47062,
    enchant: 3872,
    gems: [
      40113,
      40133,
      40133
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
    id: 45495,
    gems: [
      40133
    ]
  },
  {
    id: 47237,
    gems: [
      40153
    ]
  },
  {
    id: 45518
  },
  {
    id: 40255
  },
  {
    id: 46980,
    enchant: 3834,
    gems: [
      40133
    ]
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
const P3DemoAllianceGear = {
  items: items$5
};
const items$4 = [
  {
    id: 47796,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 45133,
    gems: [
      40153
    ]
  },
  {
    id: 47793,
    enchant: 3810,
    gems: [
      40113
    ]
  },
  {
    id: 47554,
    enchant: 3722,
    gems: [
      40113
    ]
  },
  {
    id: 47794,
    enchant: 1144,
    gems: [
      40113,
      40133
    ]
  },
  {
    id: 47485,
    enchant: 2332,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 47797,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47419,
    enchant: 3599,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47435,
    enchant: 3872,
    gems: [
      40113,
      40133,
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
    id: 45495,
    gems: [
      40133
    ]
  },
  {
    id: 47489,
    gems: [
      40113
    ]
  },
  {
    id: 45518
  },
  {
    id: 40255
  },
  {
    id: 47422,
    enchant: 3834,
    gems: [
      40133
    ]
  },
  {
    id: 47470
  },
  {
    id: 45294,
    gems: [
      40113
    ]
  }
];
const P3DemoHordeGear = {
  items: items$4
};
const items$3 = [
  {
    id: 51231,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50658,
    gems: [
      40153
    ]
  },
  {
    id: 51234,
    enchant: 3810,
    gems: [
      40153
    ]
  },
  {
    id: 50668,
    enchant: 3722,
    gems: [
      40133
    ]
  },
  {
    id: 50717,
    enchant: 1144,
    gems: [
      40133,
      40113,
      40153
    ]
  },
  {
    id: 50686,
    enchant: 2332,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 51230,
    enchant: 3604,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 50702,
    gems: [
      40153,
      40113,
      40113
    ]
  },
  {
    id: 51232,
    enchant: 3872,
    gems: [
      40113,
      40113
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
    id: 50398,
    gems: [
      40153
    ]
  },
  {
    id: 50636,
    gems: [
      40153
    ]
  },
  {
    id: 50365
  },
  {
    id: 50348
  },
  {
    id: 50732,
    enchant: 3834,
    gems: [
      40113
    ]
  },
  {
    id: 50635
  },
  {
    id: 50631,
    gems: [
      40153
    ]
  }
];
const P4DemoGear = {
  items: items$3
};
const items$2 = [
  {
    id: 47789,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 47144,
    gems: [
      40155
    ]
  },
  {
    id: 47792,
    enchant: 3810,
    gems: [
      40155
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
    id: 47129,
    enchant: 1144,
    gems: [
      40133,
      40155,
      40113
    ]
  },
  {
    id: 47208,
    enchant: 2332,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 47788,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 46973,
    enchant: 3599,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47790,
    enchant: 3872,
    gems: [
      40113,
      40155
    ]
  },
  {
    id: 47205,
    enchant: 3606,
    gems: [
      40133,
      40113
    ]
  },
  {
    id: 45495,
    gems: [
      40133
    ]
  },
  {
    id: 47237,
    gems: [
      40155
    ]
  },
  {
    id: 45518
  },
  {
    id: 47188
  },
  {
    id: 46980,
    enchant: 3834,
    gems: [
      40133
    ]
  },
  {
    id: 47958,
    gems: [
      40155
    ]
  },
  {
    id: 45294,
    gems: [
      40155
    ]
  }
];
const P3DestroAllianceGear = {
  items: items$2
};
const items$1 = [
  {
    id: 47796,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 47468,
    gems: [
      40153
    ]
  },
  {
    id: 47793,
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
    id: 47794,
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
      40153,
      0
    ]
  },
  {
    id: 47797,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47419,
    enchant: 3599,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47435,
    enchant: 3872,
    gems: [
      40113,
      40133,
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
    id: 45495,
    gems: [
      40133
    ]
  },
  {
    id: 47489,
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
    id: 47422,
    enchant: 3834,
    gems: [
      40133
    ]
  },
  {
    id: 47437
  },
  {
    id: 45294,
    gems: [
      40113
    ]
  }
];
const P3DestroHordeGear = {
  items: items$1
};
const items = [
  {
    id: 51231,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50658,
    gems: [
      40153
    ]
  },
  {
    id: 51234,
    enchant: 3810,
    gems: [
      40152
    ]
  },
  {
    id: 50628,
    enchant: 3722,
    gems: [
      40152
    ]
  },
  {
    id: 51233,
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
    id: 51230,
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
      40113,
      40113
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
    id: 50365
  },
  {
    id: 50348
  },
  {
    id: 50732,
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
      40153
    ]
  }
];
const P4DestroGear = {
  items
};
const type$2 = "TypeAPL";
const prepullActions$2 = [
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 71636
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-105s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 72416
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-65s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 55637
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-65s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 75473
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-55s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 64713
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 60492
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 60064
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 64741
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 60494
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          spellId: 67669
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      triggerIcd: {
        auraId: {
          itemId: 50348
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-50s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-23s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-21s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-19s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-17s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-15s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-13s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-11s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-9s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-7s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-4.5s"
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
        val: "-1.65s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47809
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1.65s"
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
            currentTime: {}
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
          spellId: 2825,
          tag: -1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 70840
          }
        }
      },
      sequence: {
        name: "tricks",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 57933,
                tag: -1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 50259
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
        isExecutePhase: {
          threshold: "E35"
        }
      },
      resetSequence: {
        sequenceName: "tricks"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 10060,
          tag: -1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 70840
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 50259
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "138"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          itemId: 45466
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "138"
                  }
                }
              }
            }
          ]
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
      condition: {
        or: {
          vals: [
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "138"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          itemId: 45148
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "138"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          itemId: 48722
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "138"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          itemId: 50357
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "70"
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    isExecutePhase: {
                      threshold: "E25"
                    }
                  },
                  {
                    or: {
                      vals: [
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
                              itemId: 50348
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
                              spellId: 60492
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
                              spellId: 64741
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
                              spellId: 67669
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 75473
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
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
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
      sequence: {
        name: "big snap",
        actions: [
          {
            castSpell: {
              spellId: {
                otherId: "OtherActionPotion"
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 45466
              }
            }
          },
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
                spellId: 54758
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
                itemId: 48722
              }
            }
          },
          {
            castSpell: {
              spellId: {
                itemId: 50357
              }
            }
          }
        ]
      }
    }
  },
  {
    action: {
      sequence: {
        name: "opener",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 47813
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 59164
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 47843
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 47864
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
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 71572
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellCastTime: {
                              spellId: {
                                spellId: 59164
                              }
                            }
                          },
                          rhs: {
                            math: {
                              op: "OpAdd",
                              lhs: {
                                spellTravelTime: {
                                  spellId: {
                                    spellId: 59164
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
                            spellId: 60486
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellCastTime: {
                              spellId: {
                                spellId: 59164
                              }
                            }
                          },
                          rhs: {
                            math: {
                              op: "OpAdd",
                              lhs: {
                                spellTravelTime: {
                                  spellId: {
                                    spellId: 59164
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
                            spellId: 65006
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellCastTime: {
                              spellId: {
                                spellId: 59164
                              }
                            }
                          },
                          rhs: {
                            math: {
                              op: "OpAdd",
                              lhs: {
                                spellTravelTime: {
                                  spellId: {
                                    spellId: 59164
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
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              isExecutePhase: {
                threshold: "E25"
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
                    val: "5"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 59164
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
                op: "OpLt",
                lhs: {
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 59164
                    }
                  }
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellCastTime: {
                        spellId: {
                          spellId: 59164
                        }
                      }
                    },
                    rhs: {
                      math: {
                        op: "OpAdd",
                        lhs: {
                          spellTravelTime: {
                            spellId: {
                              spellId: 59164
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
                    val: "5"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 59164
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
                    not: {
                      val: {
                        auraIsActive: {
                          auraId: {
                            spellId: 63321
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
                            spellId: 63321
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
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "27"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    }
  },
  {
    action: {
      condition: {
        warlockShouldRefreshCorruption: {}
      },
      castSpell: {
        spellId: {
          spellId: 47813
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
                op: "OpLt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 47843
                    }
                  }
                },
                rhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 47843
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
                    val: "10"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47843
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
              val: "64"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 1122
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
                      spellId: 47864
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
                    val: "22"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47864
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
                op: "OpLt",
                lhs: {
                  remainingTimePercent: {}
                },
                rhs: {
                  "const": {
                    val: "27%"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  isExecutePhase: {
                    threshold: "E25"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        name: "lifetap",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 57946
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
        warlockShouldRecastDrainSoul: {}
      },
      channelSpell: {
        spellId: {
          spellId: 47855
        },
        interruptIf: {}
      }
    }
  },
  {
    action: {
      condition: {
        isExecutePhase: {
          threshold: "E25"
        }
      },
      channelSpell: {
        spellId: {
          spellId: 47855
        },
        interruptIf: {
          "const": {
            val: "True"
          }
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47809
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    }
  }
];
const AfflictionApl = {
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
          spellId: 57946
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
          otherId: "OtherActionPotion"
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-2.5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47809
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-2.5s"
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
      castSpell: {
        spellId: {
          spellId: 50589
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
              val: "60s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47867
        }
      }
    }
  },
  {
    action: {
      multidot: {
        spellId: {
          spellId: 47813
        },
        maxDots: 1,
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
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 47867
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
                      spellId: 47864
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
                    val: "22s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47864
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
                op: "OpLt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 63321
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
              cmp: {
                op: "OpGt",
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
          spellId: 57946
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
                op: "OpLt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 47811
                    }
                  }
                },
                rhs: {
                  spellCastTime: {
                    spellId: {
                      spellId: 47811
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
                    val: "12s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47811
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 63167
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47825
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 71165
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47838
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47809
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    }
  }
];
const DemoApl = {
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
          spellId: 57946
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
          otherId: "OtherActionPotion"
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-3.5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47825
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-3.5s"
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
      castSpell: {
        spellId: {
          spellId: 17962
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
              val: "60s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47867
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
            dotRemainingTime: {
              spellId: {
                spellId: 47811
              }
            }
          },
          rhs: {
            spellCastTime: {
              spellId: {
                spellId: 47811
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47811
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
              val: "61s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 1122
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
                op: "OpLt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 63321
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
              cmp: {
                op: "OpGt",
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
          spellId: 57946
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 59172
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
                      spellId: 47867
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
                      spellId: 47864
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
                    val: "22s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47864
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47838
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57946
        }
      }
    }
  }
];
const DestroApl = {
  type,
  prepullActions,
  priorityList
};
const BIS_TOOLTIP = "This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/";
const SWP_BIS = makePresetGear("Straight Outa SWP", SwpGear);
const PRERAID_AFFLICTION_PRESET = makePresetGear("Preraid Affliction", PreraidAfflictionGear, { tooltip: BIS_TOOLTIP, talentTree: 0 });
const P1_AFFLICTION_PRESET = makePresetGear("P1 Affliction", P1AfflictionGear, { tooltip: BIS_TOOLTIP, talentTree: 0 });
const P2_AFFLICTION_PRESET = makePresetGear("P2 Affliction", P2AfflictionGear, { tooltip: BIS_TOOLTIP, talentTree: 0 });
const P3_AFFLICTION_ALLIANCE_PRESET = makePresetGear("P3 Affliction [A]", P3AfflictionAllianceGear, { tooltip: BIS_TOOLTIP, talentTree: 0, faction: Faction.Alliance });
const P3_AFFLICTION_HORDE_PRESET = makePresetGear("P3 Affliction [H]", P3AfflictionHordeGear, { tooltip: BIS_TOOLTIP, talentTree: 0, faction: Faction.Horde });
const P4_AFFLICTION_PRESET = makePresetGear("P4 Affliction", P4AfflictionGear, { tooltip: BIS_TOOLTIP, talentTree: 0 });
const PRERAID_DEMODESTRO_PRESET = makePresetGear("Preraid Demo/Destro", PreraidDemoDestroGear, { tooltip: BIS_TOOLTIP, talentTrees: [1, 2] });
const P1_DEMODESTRO_PRESET = makePresetGear("P1 Demo/Destro", P1DemoDestroGear, { tooltip: BIS_TOOLTIP, talentTrees: [1, 2] });
const P2_DEMODESTRO_PRESET = makePresetGear("P2 Demo/Destro", P2DemoDestroGear, { tooltip: BIS_TOOLTIP, talentTrees: [1, 2] });
const P3_DEMO_ALLIANCE_PRESET = makePresetGear("P3 Demo [A]", P3DemoAllianceGear, { tooltip: BIS_TOOLTIP, talentTree: 1, faction: Faction.Alliance });
const P3_DEMO_HORDE_PRESET = makePresetGear("P3 Demo [H]", P3DemoHordeGear, { tooltip: BIS_TOOLTIP, talentTree: 1, faction: Faction.Horde });
const P4_DEMO_PRESET = makePresetGear("P4 Demo", P4DemoGear, { tooltip: BIS_TOOLTIP, talentTree: 1 });
const P3_DESTRO_ALLIANCE_PRESET = makePresetGear("P3 Destro [A]", P3DestroAllianceGear, { tooltip: BIS_TOOLTIP, talentTree: 2, faction: Faction.Alliance });
const P3_DESTRO_HORDE_PRESET = makePresetGear("P3 Destro [H]", P3DestroHordeGear, { tooltip: BIS_TOOLTIP, talentTree: 2, faction: Faction.Horde });
const P4_DESTRO_PRESET = makePresetGear("P4 Destro", P4DestroGear, { tooltip: BIS_TOOLTIP, talentTree: 2 });
const APL_Affliction_Default = makePresetAPLRotation("Affliction", AfflictionApl, { talentTree: 0 });
const APL_Demo_Default = makePresetAPLRotation("Demo", DemoApl, { talentTree: 1 });
const APL_Destro_Default = makePresetAPLRotation("Destro", DestroApl, { talentTree: 2 });
const AfflictionTalents = {
  name: "Affliction",
  data: SavedTalents.create({
    talentsString: "2350002030023510253500331151--550000051",
    glyphs: Glyphs.create({
      major1: WarlockMajorGlyph.GlyphOfQuickDecay,
      major2: WarlockMajorGlyph.GlyphOfLifeTap,
      major3: WarlockMajorGlyph.GlyphOfHaunt,
      minor1: WarlockMinorGlyph.GlyphOfSouls,
      minor2: WarlockMinorGlyph.GlyphOfDrainSoul,
      minor3: WarlockMinorGlyph.GlyphOfSubjugateDemon
    })
  })
};
const DemonologyTalents = {
  name: "Demonology",
  data: SavedTalents.create({
    talentsString: "-203203301035012530135201351-550000052",
    glyphs: Glyphs.create({
      major1: WarlockMajorGlyph.GlyphOfLifeTap,
      major2: WarlockMajorGlyph.GlyphOfQuickDecay,
      major3: WarlockMajorGlyph.GlyphOfFelguard,
      minor1: WarlockMinorGlyph.GlyphOfSouls,
      minor2: WarlockMinorGlyph.GlyphOfDrainSoul,
      minor3: WarlockMinorGlyph.GlyphOfSubjugateDemon
    })
  })
};
const DestructionTalents = {
  name: "Destruction",
  data: SavedTalents.create({
    talentsString: "-03310030003-05203205210331051335230351",
    glyphs: Glyphs.create({
      major1: WarlockMajorGlyph.GlyphOfConflagrate,
      major2: WarlockMajorGlyph.GlyphOfLifeTap,
      major3: WarlockMajorGlyph.GlyphOfIncinerate,
      minor1: WarlockMinorGlyph.GlyphOfSouls,
      minor2: WarlockMinorGlyph.GlyphOfDrainSoul,
      minor3: WarlockMinorGlyph.GlyphOfSubjugateDemon
    })
  })
};
const AfflictionOptions = Warlock_Options.create({
  armor: Warlock_Options_Armor.FelArmor,
  summon: Warlock_Options_Summon.Felhunter,
  weaponImbue: Warlock_Options_WeaponImbue.GrandSpellstone,
  detonateSeed: true
});
const DemonologyOptions = Warlock_Options.create({
  armor: Warlock_Options_Armor.FelArmor,
  summon: Warlock_Options_Summon.Felguard,
  weaponImbue: Warlock_Options_WeaponImbue.GrandSpellstone,
  detonateSeed: true
});
const DestructionOptions = Warlock_Options.create({
  armor: Warlock_Options_Armor.FelArmor,
  summon: Warlock_Options_Summon.Imp,
  weaponImbue: Warlock_Options_WeaponImbue.GrandFirestone,
  detonateSeed: true
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast,
  petFood: PetFood.PetFoodSpicedMammothTreats,
  defaultPotion: Potions.PotionOfWildMagic,
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
IndividualBuffs.create({
  blessingOfKings: true,
  blessingOfWisdom: TristateEffect.TristateEffectImproved,
  blessingOfMight: TristateEffect.TristateEffectImproved
});
const DefaultDebuffs = Debuffs.create({
  sunderArmor: true,
  faerieFire: TristateEffect.TristateEffectImproved,
  bloodFrenzy: true,
  ebonPlaguebringer: true,
  heartOfTheCrusader: true,
  judgementOfWisdom: true
});
Debuffs.create({
  sunderArmor: true,
  faerieFire: TristateEffect.TristateEffectImproved,
  bloodFrenzy: true,
  ebonPlaguebringer: true,
  heartOfTheCrusader: true,
  judgementOfWisdom: true,
  shadowMastery: true
});
const OtherDefaults = {
  distanceFromTarget: 25,
  profession1: Profession.Engineering,
  profession2: Profession.Tailoring,
  channelClipDelay: 150,
  nibelungAverageCasts: 11
};
const SPEC_CONFIG = registerSpecConfig(Spec.SpecWarlock, {
  cssClass: "warlock-sim-ui",
  cssScheme: "warlock",
  knownIssues: [
    "Drain Soul is currently disabled for APL rotations"
  ],
  epStats: [
    Stat.StatIntellect,
    Stat.StatSpirit,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatStamina
  ],
  epReferenceStat: Stat.StatSpellPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatIntellect,
    Stat.StatSpirit,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatMP5,
    Stat.StatStamina,
    Stat.StatResilience
  ],
  defaults: {
    gear: P3_AFFLICTION_HORDE_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.18,
      [Stat.StatSpirit]: 0.54,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellHit]: 0.93,
      [Stat.StatSpellCrit]: 0.53,
      [Stat.StatSpellHaste]: 0.81,
      [Stat.StatStamina]: 0.01
    }),
    consumes: DefaultConsumes,
    talents: AfflictionTalents.data,
    specOptions: AfflictionOptions,
    raidBuffs: DefaultRaidBuffs,
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: DefaultIndividualBuffs,
    debuffs: DefaultDebuffs,
    other: OtherDefaults
  },
  playerIconInputs: [
    PetInput,
    ArmorInput,
    WeaponImbueInput
  ],
  includeBuffDebuffInputs: [
    ReplenishmentBuff,
    MajorArmorDebuff,
    MinorArmorDebuff,
    PhysicalDamageDebuff,
    MeleeHasteBuff,
    MeleeCritBuff,
    MP5Buff,
    AttackPowerPercentBuff,
    AttackPowerBuff,
    StrengthAndAgilityBuff,
    StaminaBuff
  ],
  excludeBuffDebuffInputs: [],
  petConsumeInputs: [
    SpicedMammothTreats
  ],
  otherInputs: {
    inputs: [
      DetonateSeed,
      DistanceFromTarget,
      TankAssignment,
      ChannelClipDelay,
      nibelungAverageCasts
    ]
  },
  itemSwapSlots: [ItemSlot.ItemSlotMainHand, ItemSlot.ItemSlotOffHand, ItemSlot.ItemSlotRanged],
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      AfflictionTalents,
      DemonologyTalents,
      DestructionTalents
    ],
    rotations: [
      APL_Affliction_Default,
      APL_Demo_Default,
      APL_Destro_Default
    ],
    gear: [
      SWP_BIS,
      PRERAID_AFFLICTION_PRESET,
      P1_AFFLICTION_PRESET,
      P2_AFFLICTION_PRESET,
      P3_AFFLICTION_ALLIANCE_PRESET,
      P3_AFFLICTION_HORDE_PRESET,
      P4_AFFLICTION_PRESET,
      PRERAID_DEMODESTRO_PRESET,
      P1_DEMODESTRO_PRESET,
      P2_DEMODESTRO_PRESET,
      P3_DEMO_ALLIANCE_PRESET,
      P3_DEMO_HORDE_PRESET,
      P4_DEMO_PRESET,
      P3_DESTRO_ALLIANCE_PRESET,
      P3_DESTRO_HORDE_PRESET,
      P4_DESTRO_PRESET
    ]
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    if (talentTree == 0) {
      return APL_Affliction_Default.rotation.rotation;
    } else if (talentTree == 1) {
      return APL_Demo_Default.rotation.rotation;
    } else {
      return APL_Destro_Default.rotation.rotation;
    }
  },
  raidSimPresets: [
    {
      spec: Spec.SpecWarlock,
      tooltip: "Affliction Warlock",
      defaultName: "Affliction",
      iconUrl: getSpecIcon(Class.ClassWarlock, 0),
      talents: AfflictionTalents.data,
      specOptions: AfflictionOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_AFFLICTION_PRESET.gear,
          2: P2_AFFLICTION_PRESET.gear,
          3: P3_AFFLICTION_ALLIANCE_PRESET.gear,
          4: P4_AFFLICTION_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_AFFLICTION_PRESET.gear,
          2: P2_AFFLICTION_PRESET.gear,
          3: P3_AFFLICTION_HORDE_PRESET.gear,
          4: P4_AFFLICTION_PRESET.gear
        }
      },
      otherDefaults: OtherDefaults
    },
    {
      spec: Spec.SpecWarlock,
      tooltip: "Demonology Warlock",
      defaultName: "Demonology",
      iconUrl: getSpecIcon(Class.ClassWarlock, 1),
      talents: DemonologyTalents.data,
      specOptions: DemonologyOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_DEMODESTRO_PRESET.gear,
          2: P2_DEMODESTRO_PRESET.gear,
          3: P3_DEMO_ALLIANCE_PRESET.gear,
          4: P4_DEMO_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_DEMODESTRO_PRESET.gear,
          2: P2_DEMODESTRO_PRESET.gear,
          3: P3_DEMO_HORDE_PRESET.gear,
          4: P4_DEMO_PRESET.gear
        }
      },
      otherDefaults: OtherDefaults
    },
    {
      spec: Spec.SpecWarlock,
      tooltip: "Destruction Warlock",
      defaultName: "Destruction",
      iconUrl: getSpecIcon(Class.ClassWarlock, 2),
      talents: DestructionTalents.data,
      specOptions: DestructionOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_DEMODESTRO_PRESET.gear,
          2: P2_DEMODESTRO_PRESET.gear,
          3: P3_DESTRO_ALLIANCE_PRESET.gear,
          4: P4_DESTRO_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_DEMODESTRO_PRESET.gear,
          2: P2_DEMODESTRO_PRESET.gear,
          3: P3_DESTRO_HORDE_PRESET.gear,
          4: P4_DESTRO_PRESET.gear
        }
      },
      otherDefaults: OtherDefaults
    }
  ]
});
class WarlockSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  WarlockSimUI as W
};
//# sourceMappingURL=sim-cb0740b6.chunk.js.map
