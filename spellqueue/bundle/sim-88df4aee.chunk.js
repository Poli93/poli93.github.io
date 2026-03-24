import { fe as Rogue_Options_PoisonImbue, A as ActionId, bV as SavedTalents, N as Glyphs, R as RogueMajorGlyph, ff as Rogue_Options, F as Consumes, dS as Potions, dL as Conjured, dN as Flask, dQ as Food, G as Stats, a2 as Stat, V as ItemSlot, b1 as WeaponType, a1 as PseudoStat, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { t as makeSpecOptionsEnumIconInput, a as makeSpecOptionsNumberInput, i as makeSpecOptionsBooleanInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, U as SpellCritBuff, V as SpellCritDebuff, W as SpellHitDebuff, k as SpellDamageDebuff, T as TankAssignment, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-f6643d5a.chunk.js";
const MainHandImbue = makeSpecOptionsEnumIconInput({
  fieldName: "mhImbue",
  numColumns: 1,
  values: [
    { value: Rogue_Options_PoisonImbue.NoPoison, tooltip: "No Main Hand Poison" },
    { actionId: ActionId.fromItemId(43233), value: Rogue_Options_PoisonImbue.DeadlyPoison },
    { actionId: ActionId.fromItemId(43231), value: Rogue_Options_PoisonImbue.InstantPoison },
    { actionId: ActionId.fromItemId(43235), value: Rogue_Options_PoisonImbue.WoundPoison },
    { actionId: ActionId.fromItemId(43237), value: Rogue_Options_PoisonImbue.AnestheticPoison },
    { actionId: ActionId.fromItemId(5237), value: Rogue_Options_PoisonImbue.MindNumbingPoison },
    { actionId: ActionId.fromItemId(3775), value: Rogue_Options_PoisonImbue.CripplingPoison }
  ]
});
const OffHandImbue = makeSpecOptionsEnumIconInput({
  fieldName: "ohImbue",
  numColumns: 1,
  values: [
    { value: Rogue_Options_PoisonImbue.NoPoison, tooltip: "No Off Hand Poison" },
    { actionId: ActionId.fromItemId(43233), value: Rogue_Options_PoisonImbue.DeadlyPoison },
    { actionId: ActionId.fromItemId(43231), value: Rogue_Options_PoisonImbue.InstantPoison },
    { actionId: ActionId.fromItemId(43235), value: Rogue_Options_PoisonImbue.WoundPoison },
    { actionId: ActionId.fromItemId(43237), value: Rogue_Options_PoisonImbue.AnestheticPoison },
    { actionId: ActionId.fromItemId(5237), value: Rogue_Options_PoisonImbue.MindNumbingPoison },
    { actionId: ActionId.fromItemId(3775), value: Rogue_Options_PoisonImbue.CripplingPoison }
  ]
});
const StartingOverkillDuration = makeSpecOptionsNumberInput({
  fieldName: "startingOverkillDuration",
  label: "Starting Overkill duration",
  labelTooltip: "Initial Overkill buff duration at the start of each iteration.",
  showWhen: (player) => player.getTalents().overkill || player.getTalents().masterOfSubtlety > 0
});
const VanishBreakTime = makeSpecOptionsNumberInput({
  fieldName: "vanishBreakTime",
  label: "Vanish Break Time",
  labelTooltip: "Time it takes to start attacking after casting Vanish.",
  extraCssClasses: ["experimental"],
  showWhen: (player) => player.getTalents().overkill || player.getTalents().masterOfSubtlety > 0
});
const AssumeBleedActive = makeSpecOptionsBooleanInput({
  fieldName: "assumeBleedActive",
  label: "Assume Bleed Always Active",
  labelTooltip: "Assume bleed always exists for 'Hunger for Blood' activation. Otherwise will only calculate based on own garrote/rupture.",
  extraCssClasses: ["within-raid-sim-hide"],
  showWhen: (player) => player.getTalents().hungerForBlood
});
const HonorOfThievesCritRate = makeSpecOptionsNumberInput({
  fieldName: "honorOfThievesCritRate",
  label: "Honor of Thieves Crit Rate",
  labelTooltip: "Number of crits other group members generate within 100 seconds",
  showWhen: (player) => player.getTalents().honorAmongThieves > 0
});
const ApplyPoisonsManually = makeSpecOptionsBooleanInput({
  fieldName: "applyPoisonsManually",
  label: "Configure poisons manually",
  labelTooltip: "Prevent automatic poison configuration that is based on equipped weapons."
});
const items$g = [
  {
    id: 42550,
    enchant: 3817,
    gems: [
      41398,
      40058
    ]
  },
  {
    id: 40678
  },
  {
    id: 43481,
    enchant: 3808
  },
  {
    id: 38614,
    enchant: 3605
  },
  {
    id: 39558,
    enchant: 3832,
    gems: [
      40003,
      42702
    ]
  },
  {
    id: 34448,
    enchant: 3845,
    gems: [
      40003,
      0
    ]
  },
  {
    id: 39560,
    enchant: 3604,
    gems: [
      40058,
      0
    ]
  },
  {
    id: 40694,
    gems: [
      40003,
      40003
    ]
  },
  {
    id: 37644,
    enchant: 3823
  },
  {
    id: 34575,
    enchant: 3606,
    gems: [
      40003
    ]
  },
  {
    id: 40586
  },
  {
    id: 37642
  },
  {
    id: 40684
  },
  {
    id: 44253
  },
  {
    id: 37856,
    enchant: 3789
  },
  {
    id: 37667,
    enchant: 3789
  },
  {
    id: 43612
  }
];
const PreraidAssassinationGear = {
  items: items$g
};
const items$f = [
  {
    id: 40499,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 44664,
    gems: [
      40003
    ]
  },
  {
    id: 40502,
    enchant: 3808,
    gems: [
      40003
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
      40003
    ]
  },
  {
    id: 39765,
    enchant: 3845,
    gems: [
      40003,
      0
    ]
  },
  {
    id: 40496,
    enchant: 3604,
    gems: [
      40053,
      0
    ]
  },
  {
    id: 40260,
    gems: [
      39999
    ]
  },
  {
    id: 40500,
    enchant: 3823,
    gems: [
      40003,
      40003
    ]
  },
  {
    id: 39701,
    enchant: 3606
  },
  {
    id: 40074
  },
  {
    id: 40474
  },
  {
    id: 40684
  },
  {
    id: 44253
  },
  {
    id: 39714,
    enchant: 3789
  },
  {
    id: 40386,
    enchant: 3789
  },
  {
    id: 40385
  }
];
const P1AssassinationGear = {
  items: items$f
};
const items$e = [
  {
    id: 46125,
    enchant: 3817,
    gems: [
      41398,
      39999
    ]
  },
  {
    id: 45517,
    gems: [
      39999
    ]
  },
  {
    id: 45245,
    enchant: 3808,
    gems: [
      39999,
      39999
    ]
  },
  {
    id: 45461,
    enchant: 3605,
    gems: [
      40053
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      40053,
      42702,
      39999
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40053,
      0
    ]
  },
  {
    id: 46124,
    enchant: 3604,
    gems: [
      40003,
      0
    ]
  },
  {
    id: 46095,
    enchant: 3599,
    gems: [
      39999,
      39999,
      39999
    ]
  },
  {
    id: 45536,
    enchant: 3823,
    gems: [
      39999,
      39999,
      39999
    ]
  },
  {
    id: 45564,
    enchant: 3606,
    gems: [
      39999,
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
    id: 45456,
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
    id: 45484,
    enchant: 3789,
    gems: [
      40003
    ]
  },
  {
    id: 45484,
    enchant: 3789,
    gems: [
      40003
    ]
  },
  {
    id: 45570,
    enchant: 3608
  }
];
const P2AssassinationGear = {
  items: items$e
};
const items$d = [
  {
    id: 48230,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 47060,
    gems: [
      40114
    ]
  },
  {
    id: 48228,
    enchant: 3808,
    gems: [
      40114
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40114
    ]
  },
  {
    id: 48232,
    enchant: 3832,
    gems: [
      40114,
      40114
    ]
  },
  {
    id: 47155,
    enchant: 3845,
    gems: [
      40114,
      40114,
      0
    ]
  },
  {
    id: 48231,
    enchant: 3604,
    gems: [
      40114,
      0
    ]
  },
  {
    id: 47112,
    enchant: 3599,
    gems: [
      40156,
      40114,
      40114
    ]
  },
  {
    id: 46975,
    enchant: 3823,
    gems: [
      40118,
      40118,
      40118
    ]
  },
  {
    id: 47077,
    enchant: 3606,
    gems: [
      40156,
      40114
    ]
  },
  {
    id: 47075,
    gems: [
      40114
    ]
  },
  {
    id: 45608,
    gems: [
      40114
    ]
  },
  {
    id: 47131
  },
  {
    id: 45609
  },
  {
    id: 46969,
    enchant: 3789,
    gems: [
      40156
    ]
  },
  {
    id: 46969,
    enchant: 3789,
    gems: [
      40156
    ]
  },
  {
    id: 47521,
    gems: [
      40156
    ]
  }
];
const P3AssassinationGear = {
  items: items$d
};
const items$c = [
  {
    id: 51252,
    enchant: 3817,
    gems: [
      41398,
      40114
    ]
  },
  {
    id: 50633,
    gems: [
      40114
    ]
  },
  {
    id: 51254,
    enchant: 3808,
    gems: [
      40114
    ]
  },
  {
    id: 50653,
    enchant: 3605,
    gems: [
      40159
    ]
  },
  {
    id: 50656,
    enchant: 3832,
    gems: [
      40114,
      49110,
      40157
    ]
  },
  {
    id: 50670,
    enchant: 3845,
    gems: [
      40159,
      0
    ]
  },
  {
    id: 51251,
    enchant: 3604,
    gems: [
      40114,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40114,
      40114,
      40114
    ]
  },
  {
    id: 51253,
    enchant: 3823,
    gems: [
      40114,
      40159
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40159,
      40159
    ]
  },
  {
    id: 50402,
    gems: [
      40159
    ]
  },
  {
    id: 50604,
    gems: [
      40159
    ]
  },
  {
    id: 50343
  },
  {
    id: 50706
  },
  {
    id: 50621,
    enchant: 3789,
    gems: [
      40159
    ]
  },
  {
    id: 50736,
    enchant: 3789,
    gems: [
      40114
    ]
  },
  {
    id: 50733,
    gems: [
      40114
    ]
  }
];
const P4AssassinationGear = {
  items: items$c
};
const items$b = [
  {
    id: 51252,
    enchant: 3817,
    gems: [
      41398,
      40114
    ]
  },
  {
    id: 50633,
    gems: [
      40114
    ]
  },
  {
    id: 51254,
    enchant: 3808,
    gems: [
      40114
    ]
  },
  {
    id: 50653,
    enchant: 3605,
    gems: [
      40159
    ]
  },
  {
    id: 50656,
    enchant: 3832,
    gems: [
      40114,
      49110,
      40159
    ]
  },
  {
    id: 54580,
    enchant: 3845,
    gems: [
      40114,
      0
    ]
  },
  {
    id: 51251,
    enchant: 3604,
    gems: [
      40114,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40114,
      40114,
      40114
    ]
  },
  {
    id: 51253,
    enchant: 3823,
    gems: [
      40114,
      40157
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40157,
      40157
    ]
  },
  {
    id: 50402,
    gems: [
      40157
    ]
  },
  {
    id: 54576,
    gems: [
      40157
    ]
  },
  {
    id: 50363
  },
  {
    id: 54590
  },
  {
    id: 50621,
    enchant: 3789,
    gems: [
      40157
    ]
  },
  {
    id: 50736,
    enchant: 3789,
    gems: [
      40114
    ]
  },
  {
    id: 50733,
    gems: [
      40114
    ]
  }
];
const P5AssassinationGear = {
  items: items$b
};
const items$a = [
  {
    id: 42550,
    enchant: 3817,
    gems: [
      41398,
      40014
    ]
  },
  {
    id: 40678
  },
  {
    id: 37139,
    enchant: 3808,
    gems: [
      39999
    ]
  },
  {
    id: 34241,
    enchant: 3605,
    gems: [
      40014
    ]
  },
  {
    id: 39558,
    enchant: 3832,
    gems: [
      39999,
      40014
    ]
  },
  {
    id: 34448,
    enchant: 3845,
    gems: [
      39999,
      0
    ]
  },
  {
    id: 39560,
    enchant: 3604,
    gems: [
      40014,
      0
    ]
  },
  {
    id: 40694,
    gems: [
      42702,
      39999
    ]
  },
  {
    id: 37644,
    enchant: 3823
  },
  {
    id: 34575,
    enchant: 3606,
    gems: [
      39999
    ]
  },
  {
    id: 40586
  },
  {
    id: 37642
  },
  {
    id: 40684
  },
  {
    id: 44253
  },
  {
    id: 37693,
    enchant: 3789
  },
  {
    id: 37856,
    enchant: 3789
  },
  {
    id: 44504,
    gems: [
      40053
    ]
  }
];
const PreraidCombatGear = {
  items: items$a
};
const items$9 = [
  {
    id: 40499,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 44664,
    gems: [
      39999
    ]
  },
  {
    id: 40502,
    enchant: 3808,
    gems: [
      39999
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
      39999
    ]
  },
  {
    id: 39765,
    enchant: 3845,
    gems: [
      39999,
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
      39999
    ]
  },
  {
    id: 44011,
    enchant: 3823,
    gems: [
      39999,
      39999
    ]
  },
  {
    id: 39701,
    enchant: 3606
  },
  {
    id: 40074
  },
  {
    id: 40474
  },
  {
    id: 40684
  },
  {
    id: 44253
  },
  {
    id: 40383,
    enchant: 3789
  },
  {
    id: 39714,
    enchant: 3789
  },
  {
    id: 40385
  }
];
const P1CombatGear = {
  items: items$9
};
const items$8 = [
  {
    id: 46125,
    enchant: 3817,
    gems: [
      41398,
      39999
    ]
  },
  {
    id: 45517,
    gems: [
      39999
    ]
  },
  {
    id: 46127,
    enchant: 3808,
    gems: [
      39999
    ]
  },
  {
    id: 45461,
    enchant: 3605,
    gems: [
      40053
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      40053,
      42702,
      39999
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40044,
      0
    ]
  },
  {
    id: 46043,
    enchant: 3604,
    gems: [
      39999,
      40053,
      0
    ]
  },
  {
    id: 46095,
    enchant: 3599,
    gems: [
      39999,
      39999,
      39999
    ]
  },
  {
    id: 45536,
    enchant: 3823,
    gems: [
      39999,
      39999,
      39999
    ]
  },
  {
    id: 45564,
    enchant: 3606,
    gems: [
      39999,
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
    id: 46048,
    gems: [
      39999
    ]
  },
  {
    id: 45609
  },
  {
    id: 45931
  },
  {
    id: 45132,
    enchant: 3789,
    gems: [
      40053
    ]
  },
  {
    id: 45484,
    enchant: 3789,
    gems: [
      40003
    ]
  },
  {
    id: 45296,
    gems: [
      40053
    ]
  }
];
const P2CombatGear = {
  items: items$8
};
const items$7 = [
  {
    id: 48230,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 47060,
    gems: [
      40114
    ]
  },
  {
    id: 48228,
    enchant: 3808,
    gems: [
      40114
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40114
    ]
  },
  {
    id: 48232,
    enchant: 3832,
    gems: [
      40114,
      40114
    ]
  },
  {
    id: 47155,
    enchant: 3845,
    gems: [
      40114,
      40114,
      0
    ]
  },
  {
    id: 48231,
    enchant: 3604,
    gems: [
      40114,
      0
    ]
  },
  {
    id: 47112,
    enchant: 3599,
    gems: [
      40157,
      40114,
      40114
    ]
  },
  {
    id: 46975,
    enchant: 3823,
    gems: [
      40114,
      40114,
      40114
    ]
  },
  {
    id: 47077,
    enchant: 3606,
    gems: [
      40157,
      40114
    ]
  },
  {
    id: 47075,
    gems: [
      40114
    ]
  },
  {
    id: 47934,
    gems: [
      40157
    ]
  },
  {
    id: 47131
  },
  {
    id: 45609
  },
  {
    id: 47156,
    enchant: 3789,
    gems: [
      40157
    ]
  },
  {
    id: 47001,
    enchant: 3789,
    gems: [
      40157
    ]
  },
  {
    id: 47521,
    gems: [
      40157
    ]
  }
];
const P3CombatGear = {
  items: items$7
};
const items$6 = [
  {
    id: 51252,
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
    id: 51254,
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
    id: 50656,
    enchant: 3832,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 50670,
    enchant: 3845,
    gems: [
      40117,
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
      49110,
      40117,
      40117
    ]
  },
  {
    id: 50697,
    enchant: 3823,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 50402,
    gems: [
      40162
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 50363
  },
  {
    id: 50343
  },
  {
    id: 50737,
    enchant: 3789,
    gems: [
      40117
    ]
  },
  {
    id: 50654,
    enchant: 3789,
    gems: [
      40162
    ]
  },
  {
    id: 50733,
    gems: [
      40117
    ]
  }
];
const P4CombatGear = {
  items: items$6
};
const items$5 = [
  {
    id: 51252,
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
    id: 51254,
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
    id: 50656,
    enchant: 3832,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 54580,
    enchant: 3845,
    gems: [
      40117,
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
      49110,
      40117,
      40117
    ]
  },
  {
    id: 50697,
    enchant: 3823,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 50402,
    gems: [
      40162
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 50363
  },
  {
    id: 54590
  },
  {
    id: 50737,
    enchant: 3789,
    gems: [
      40117
    ]
  },
  {
    id: 50654,
    enchant: 3789,
    gems: [
      40162
    ]
  },
  {
    id: 50733,
    gems: [
      40117
    ]
  }
];
const P5CombatGear = {
  items: items$5
};
const items$4 = [
  {
    id: 40499,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 44664,
    gems: [
      40029
    ]
  },
  {
    id: 40502,
    enchant: 3808,
    gems: [
      40003
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
      39999
    ]
  },
  {
    id: 40186,
    enchant: 3845,
    gems: [
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
      40003
    ]
  },
  {
    id: 44011,
    enchant: 3823,
    gems: [
      40003,
      40034
    ]
  },
  {
    id: 39701,
    enchant: 3606
  },
  {
    id: 40074
  },
  {
    id: 40474
  },
  {
    id: 40256
  },
  {
    id: 44253
  },
  {
    id: 40383,
    enchant: 3789
  },
  {
    id: 39714,
    enchant: 3789
  },
  {
    id: 40385
  }
];
const P1HemoSubGear = {
  items: items$4
};
const items$3 = [
  {
    id: 46125,
    enchant: 3817,
    gems: [
      41398,
      42143
    ]
  },
  {
    id: 45517,
    gems: [
      49110
    ]
  },
  {
    id: 45245,
    enchant: 3808,
    gems: [
      40023,
      40003
    ]
  },
  {
    id: 45461,
    enchant: 3605,
    gems: [
      40044
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      40044,
      40023,
      40003
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40044,
      0
    ]
  },
  {
    id: 46124,
    enchant: 3604,
    gems: [
      39997,
      0
    ]
  },
  {
    id: 46095,
    enchant: 3599,
    gems: [
      42143,
      42143,
      39997
    ]
  },
  {
    id: 45536,
    enchant: 3823,
    gems: [
      40044,
      39997,
      40023
    ]
  },
  {
    id: 45564,
    enchant: 3606,
    gems: [
      40023,
      40003
    ]
  },
  {
    id: 45608,
    gems: [
      39997
    ]
  },
  {
    id: 46048,
    gems: [
      39997
    ]
  },
  {
    id: 45609
  },
  {
    id: 45931
  },
  {
    id: 45132,
    enchant: 3789,
    gems: [
      40044
    ]
  },
  {
    id: 45484,
    enchant: 3789,
    gems: [
      39997
    ]
  },
  {
    id: 45296,
    gems: [
      39997
    ]
  }
];
const P2HemoSubGear = {
  items: items$3
};
const items$2 = [
  {
    id: 48235,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 47060,
    gems: [
      40112
    ]
  },
  {
    id: 48237,
    enchant: 3808,
    gems: [
      40112
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      40112
    ]
  },
  {
    id: 47431,
    enchant: 3832,
    gems: [
      40148,
      40130,
      40112
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40148,
      0
    ]
  },
  {
    id: 48234,
    enchant: 3604,
    gems: [
      40112,
      0
    ]
  },
  {
    id: 47460,
    gems: [
      40148,
      40112,
      40162
    ]
  },
  {
    id: 47420,
    enchant: 3823,
    gems: [
      40112,
      40112,
      40148
    ]
  },
  {
    id: 47445,
    enchant: 3606,
    gems: [
      40148,
      40112
    ]
  },
  {
    id: 47443,
    gems: [
      40112
    ]
  },
  {
    id: 46048,
    gems: [
      40112
    ]
  },
  {
    id: 45609
  },
  {
    id: 47131
  },
  {
    id: 47475,
    enchant: 3789,
    gems: [
      40148
    ]
  },
  {
    id: 47416,
    enchant: 3789,
    gems: [
      40148
    ]
  },
  {
    id: 45296,
    gems: [
      40112
    ]
  }
];
const P3HemoSubGear = {
  items: items$2
};
const items$1 = [
  {
    id: 48235,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 47060,
    gems: [
      40112
    ]
  },
  {
    id: 48237,
    enchant: 3808,
    gems: [
      40112
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      40112
    ]
  },
  {
    id: 47431,
    enchant: 3832,
    gems: [
      40148,
      40130,
      40112
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40148,
      0
    ]
  },
  {
    id: 48234,
    enchant: 3604,
    gems: [
      40112,
      0
    ]
  },
  {
    id: 47460,
    gems: [
      40148,
      40112,
      40162
    ]
  },
  {
    id: 47420,
    enchant: 3823,
    gems: [
      40112,
      40112,
      40148
    ]
  },
  {
    id: 47445,
    enchant: 3606,
    gems: [
      40148,
      40112
    ]
  },
  {
    id: 47443,
    gems: [
      40112
    ]
  },
  {
    id: 46048,
    gems: [
      40112
    ]
  },
  {
    id: 45609
  },
  {
    id: 47131
  },
  {
    id: 47416,
    enchant: 3789,
    gems: [
      40148
    ]
  },
  {
    id: 47416,
    enchant: 3789,
    gems: [
      40148
    ]
  },
  {
    id: 45296,
    gems: [
      40112
    ]
  }
];
const P3DanceSubGear = {
  items: items$1
};
const items = [
  {
    id: 51494,
    enchant: 3795,
    gems: [
      41381,
      40127
    ]
  },
  {
    id: 54557,
    gems: [
      40127
    ]
  },
  {
    id: 51496,
    enchant: 3793,
    gems: [
      42158
    ]
  },
  {
    id: 47545,
    enchant: 3256,
    gems: [
      40127
    ]
  },
  {
    id: 50656,
    enchant: 3245,
    gems: [
      40158,
      49110,
      42158
    ]
  },
  {
    id: 50670,
    enchant: 3845,
    gems: [
      40127,
      0
    ]
  },
  {
    id: 51493,
    enchant: 3603,
    gems: [
      40127,
      0
    ]
  },
  {
    id: 50707,
    gems: [
      40127,
      40127,
      42158
    ]
  },
  {
    id: 51495,
    enchant: 3823,
    gems: [
      40127,
      40127
    ]
  },
  {
    id: 50607,
    enchant: 2939,
    gems: [
      40127,
      40127
    ]
  },
  {
    id: 50678,
    gems: [
      40127
    ]
  },
  {
    id: 50402,
    gems: [
      40127
    ]
  },
  {
    id: 54590
  },
  {
    id: 51377
  },
  {
    id: 50736,
    enchant: 3789,
    gems: [
      40127
    ]
  },
  {
    id: 50621,
    enchant: 3731,
    gems: [
      40127
    ]
  },
  {
    id: 51880,
    gems: [
      40127
    ]
  }
];
const P5PvPSubGear = {
  items
};
const type$9 = "TypeAPL";
const prepullActions$9 = [
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
      activateAura: {
        auraId: {
          spellId: 58426
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
const priorityList$9 = [
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
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
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
          spellId: 6774
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
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48666
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              auraId: {
                spellId: 51662
              }
            }
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
          spellId: 51662
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
                spellId: 58426
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26889
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
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
          spellId: 14177
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
                    val: "4"
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
                            spellId: 57993
                          }
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        currentEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "85"
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
          spellId: 57993
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
            currentComboPoints: {}
          },
          rhs: {
            "const": {
              val: "3"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48666
        }
      }
    }
  }
];
const MutilateApl = {
  type: type$9,
  prepullActions: prepullActions$9,
  priorityList: priorityList$9
};
const type$8 = "TypeAPL";
const prepullActions$8 = [
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
      activateAura: {
        auraId: {
          spellId: 58426
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
const priorityList$8 = [
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
            auraRemainingTime: {
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 8647
              }
            }
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
          spellId: 8647
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
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
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
          spellId: 6774
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
            auraRemainingTime: {
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 8647
              }
            }
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48666
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 8647
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
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48666
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              auraId: {
                spellId: 51662
              }
            }
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
          spellId: 51662
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
                spellId: 58426
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26889
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
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
          spellId: 14177
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
                    val: "4"
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
                            spellId: 57993
                          }
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        currentEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "85"
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
          spellId: 57993
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
            currentComboPoints: {}
          },
          rhs: {
            "const": {
              val: "3"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48666
        }
      }
    }
  }
];
const MutilateExposeApl = {
  type: type$8,
  prepullActions: prepullActions$8,
  priorityList: priorityList$8
};
const type$7 = "TypeAPL";
const prepullActions$7 = [
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
      activateAura: {
        auraId: {
          spellId: 58426
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
const priorityList$7 = [
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
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
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
          spellId: 6774
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
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48666
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              auraId: {
                spellId: 51662
              }
            }
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
          spellId: 51662
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
                spellId: 58426
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26889
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
                    val: "4"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48672
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
          spellId: 48672
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
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
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
          spellId: 14177
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
                    val: "4"
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
                            spellId: 57993
                          }
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        currentEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "85"
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
          spellId: 57993
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
            currentComboPoints: {}
          },
          rhs: {
            "const": {
              val: "3"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48666
        }
      }
    }
  }
];
const RuptureMutilateApl = {
  type: type$7,
  prepullActions: prepullActions$7,
  priorityList: priorityList$7
};
const type$6 = "TypeAPL";
const prepullActions$6 = [
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
      activateAura: {
        auraId: {
          spellId: 58426
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
const priorityList$6 = [
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
            auraRemainingTime: {
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 8647
              }
            }
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
          spellId: 8647
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
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
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
          spellId: 6774
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
            auraRemainingTime: {
              sourceUnit: {
                type: "CurrentTarget"
              },
              auraId: {
                spellId: 8647
              }
            }
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48666
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 8647
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
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              auraId: {
                spellId: 6774
              }
            }
          },
          rhs: {
            "const": {
              val: "1s"
            }
          }
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48666
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
        cmp: {
          op: "OpLe",
          lhs: {
            auraRemainingTime: {
              auraId: {
                spellId: 51662
              }
            }
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
          spellId: 51662
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
                spellId: 58426
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26889
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
                    val: "4"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48672
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
          spellId: 48672
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
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
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
          spellId: 14177
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
                    val: "4"
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
                            spellId: 57993
                          }
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        currentEnergy: {}
                      },
                      rhs: {
                        "const": {
                          val: "85"
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
          spellId: 57993
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
            currentComboPoints: {}
          },
          rhs: {
            "const": {
              val: "3"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48666
        }
      }
    }
  }
];
const RuptureMutilateExposeApl = {
  type: type$6,
  prepullActions: prepullActions$6,
  priorityList: priorityList$6
};
const type$5 = "TypeAPL";
const prepullActions$5 = [
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
const priorityList$5 = [
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 6774
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1s"
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
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48638
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
                    }
                  }
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      dotRemainingTime: {
                        spellId: {
                          spellId: 48672
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
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "3"
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 48672
                }
              }
            },
            {
              not: {
                val: {
                  cmp: {
                    op: "OpLe",
                    lhs: {
                      math: {
                        op: "OpAdd",
                        lhs: {
                          remainingTime: {}
                        },
                        rhs: {
                          "const": {
                            val: "2s"
                          }
                        }
                      }
                    },
                    rhs: {
                      auraRemainingTime: {
                        auraId: {
                          spellId: 6774
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
      castSpell: {
        spellId: {
          spellId: 6774
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
                      spellId: 48672
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
          spellId: 48672
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
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 6774
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
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 6774
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
              cmp: {
                op: "OpGe",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "4"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 48672
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
          spellId: 48672
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
                    val: "4"
                  }
                }
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
                    val: "4s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48668
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "4"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48672
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "6s"
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
                      spellId: 13750
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
      castSpell: {
        spellId: {
          spellId: 48668
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "4"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48672
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
      castSpell: {
        spellId: {
          spellId: 48668
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "57s"
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              }
            }
          ]
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
          op: "OpLe",
          lhs: {
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51690
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
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
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 51690
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
              cmp: {
                op: "OpLe",
                lhs: {
                  currentEnergy: {}
                },
                rhs: {
                  "const": {
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48638
        }
      }
    }
  }
];
const CombatApl = {
  type: type$5,
  prepullActions: prepullActions$5,
  priorityList: priorityList$5
};
const type$4 = "TypeAPL";
const prepullActions$4 = [
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
const priorityList$4 = [
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 6774
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
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 8647
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
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 8647
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1s"
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
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48638
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 8647
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1s"
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
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48638
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 8647
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
                    }
                  }
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      dotRemainingTime: {
                        spellId: {
                          spellId: 48672
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
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "3"
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 48672
                }
              }
            },
            {
              not: {
                val: {
                  cmp: {
                    op: "OpLe",
                    lhs: {
                      math: {
                        op: "OpAdd",
                        lhs: {
                          remainingTime: {}
                        },
                        rhs: {
                          "const": {
                            val: "2s"
                          }
                        }
                      }
                    },
                    rhs: {
                      auraRemainingTime: {
                        auraId: {
                          spellId: 6774
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
      castSpell: {
        spellId: {
          spellId: 6774
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
                      spellId: 48672
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
          spellId: 48672
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
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 6774
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
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 6774
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
              cmp: {
                op: "OpGe",
                lhs: {
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "4"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 48672
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
          spellId: 48672
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
                    val: "4"
                  }
                }
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
                    val: "4s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48668
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "4"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48672
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "6s"
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
                      spellId: 13750
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
      castSpell: {
        spellId: {
          spellId: 48668
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "4"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 48672
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
      castSpell: {
        spellId: {
          spellId: 48668
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "57s"
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              }
            }
          ]
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
          op: "OpLe",
          lhs: {
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51690
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
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
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 51690
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
              cmp: {
                op: "OpLe",
                lhs: {
                  currentEnergy: {}
                },
                rhs: {
                  "const": {
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48638
        }
      }
    }
  }
];
const CombatExposeApl = {
  type: type$4,
  prepullActions: prepullActions$4,
  priorityList: priorityList$4
};
const type$3 = "TypeAPL";
const prepullActions$3 = [
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
const priorityList$3 = [
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 6774
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1s"
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
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48638
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "57s"
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              }
            }
          ]
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
          op: "OpLe",
          lhs: {
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51690
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
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
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 51690
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
              cmp: {
                op: "OpLe",
                lhs: {
                  currentEnergy: {}
                },
                rhs: {
                  "const": {
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 6774
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpSub",
                          lhs: {
                            remainingTime: {}
                          },
                          rhs: {
                            "const": {
                              val: "2s"
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
      },
      castSpell: {
        spellId: {
          spellId: 48638
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 51723
        }
      }
    }
  }
];
const CombatCleaveSndApl = {
  type: type$3,
  prepullActions: prepullActions$3,
  priorityList: priorityList$3
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
        and: {
          vals: [
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 8647
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
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 8647
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
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
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 6774
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
                  auraRemainingTime: {
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 8647
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1s"
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
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48638
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 8647
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
                  auraRemainingTime: {
                    auraId: {
                      spellId: 6774
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1s"
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
                    val: "2s"
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 48638
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 6774
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
        auraIsActive: {
          auraId: {
            spellId: 6774
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 13877
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 13877
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "57s"
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
              auraIsActive: {
                auraId: {
                  spellId: 13877
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  math: {
                    op: "OpAdd",
                    lhs: {
                      spellTimeToReady: {
                        spellId: {
                          spellId: 13877
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
              }
            }
          ]
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
          op: "OpLe",
          lhs: {
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51690
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
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
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
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
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "196s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 51690
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
              cmp: {
                op: "OpLe",
                lhs: {
                  currentEnergy: {}
                },
                rhs: {
                  "const": {
                    val: "50"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 13750
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 6774
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpSub",
                          lhs: {
                            remainingTime: {}
                          },
                          rhs: {
                            "const": {
                              val: "2s"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        auraRemainingTime: {
                          sourceUnit: {
                            type: "CurrentTarget"
                          },
                          auraId: {
                            spellId: 8647
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpSub",
                          lhs: {
                            remainingTime: {}
                          },
                          rhs: {
                            "const": {
                              val: "2s"
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
      },
      castSpell: {
        spellId: {
          spellId: 48638
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 51723
        }
      }
    }
  }
];
const CombatCleaveSndExposeApl = {
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
      activateAura: {
        auraId: {
          spellId: 58426
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
        not: {
          val: {
            spellIsReady: {
              spellId: {
                spellId: 57934
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57934
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
            currentEnergy: {}
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
          spellId: 13750
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
                  currentEnergy: {}
                },
                rhs: {
                  "const": {
                    val: "65"
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
                      spellId: 58426
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
      castSpell: {
        spellId: {
          spellId: 26889
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 7676
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
            currentEnergy: {}
          },
          rhs: {
            "const": {
              val: "50"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51690
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
                spellId: 16551
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 14177
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 51723
        }
      }
    }
  }
];
const FanAoeApl = {
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
          spellId: 1787
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
          spellId: 14183
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
      sequence: {
        name: "Opener",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 1833
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 48668
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51713
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 54757
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 36554
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 48691
              }
            }
          },
          {
            wait: {
              duration: {
                "const": {
                  val: "1950ms"
                }
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 8643
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
        cmp: {
          op: "OpGe",
          lhs: {
            currentComboPoints: {}
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
          spellId: 48668
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
                  currentComboPoints: {}
                },
                rhs: {
                  "const": {
                    val: "3"
                  }
                }
              }
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 51713
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 48691
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
            currentComboPoints: {}
          },
          rhs: {
            "const": {
              val: "3"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 48657
        }
      }
    }
  }
];
const SubPvPApl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_PRESET_ASSASSINATION = makePresetGear("PreRaid Assassination", PreraidAssassinationGear, { talentTree: 0 });
const P1_PRESET_ASSASSINATION = makePresetGear("P1 Assassination", P1AssassinationGear, { talentTree: 0 });
const P2_PRESET_ASSASSINATION = makePresetGear("P2 Assassination", P2AssassinationGear, { talentTree: 0 });
const P3_PRESET_ASSASSINATION = makePresetGear("P3 Assassination", P3AssassinationGear, { talentTree: 0 });
const P4_PRESET_ASSASSINATION = makePresetGear("P4 Assassination", P4AssassinationGear, { talentTree: 0 });
const P5_PRESET_ASSASSINATION = makePresetGear("P5 Assassination", P5AssassinationGear, { talentTree: 0 });
const PRERAID_PRESET_COMBAT = makePresetGear("PreRaid Combat", PreraidCombatGear, { talentTree: 1 });
const P1_PRESET_COMBAT = makePresetGear("P1 Combat", P1CombatGear, { talentTree: 1 });
const P2_PRESET_COMBAT = makePresetGear("P2 Combat", P2CombatGear, { talentTree: 1 });
const P3_PRESET_COMBAT = makePresetGear("P3 Combat", P3CombatGear, { talentTree: 1 });
const P4_PRESET_COMBAT = makePresetGear("P4 Combat", P4CombatGear, { talentTree: 1 });
const P5_PRESET_COMBAT = makePresetGear("P5 Combat", P5CombatGear, { talentTree: 1 });
const P1_PRESET_HEMO_SUB = makePresetGear("P1 Hemo Sub", P1HemoSubGear, { talentTree: 2 });
const P2_PRESET_HEMO_SUB = makePresetGear("P2 Hemo Sub", P2HemoSubGear, { talentTree: 2 });
const P3_PRESET_HEMO_SUB = makePresetGear("P3 Hemo Sub", P3HemoSubGear, { talentTree: 2 });
const P3_PRESET_DANCE_SUB = makePresetGear("P3 Dance Sub", P3DanceSubGear, { talentTree: 2 });
const P5_PRESET_SUB_PVP = makePresetGear("P5 PvP Sub", P5PvPSubGear, { talentTree: 2 });
const ROTATION_PRESET_MUTILATE = makePresetAPLRotation("Mutilate", MutilateApl, { talentTree: 0 });
const ROTATION_PRESET_RUPTURE_MUTILATE = makePresetAPLRotation("Rupture Mutilate", RuptureMutilateApl, { talentTree: 0 });
const ROTATION_PRESET_MUTILATE_EXPOSE = makePresetAPLRotation("Mutilate w/ Expose", MutilateExposeApl, { talentTree: 0 });
const ROTATION_PRESET_RUPTURE_MUTILATE_EXPOSE = makePresetAPLRotation("Rupture Mutilate w/ Expose", RuptureMutilateExposeApl, { talentTree: 0 });
const ROTATION_PRESET_COMBAT = makePresetAPLRotation("Combat", CombatApl, { talentTree: 1 });
const ROTATION_PRESET_COMBAT_EXPOSE = makePresetAPLRotation("Combat w/ Expose", CombatExposeApl, { talentTree: 1 });
const ROTATION_PRESET_COMBAT_CLEAVE_SND = makePresetAPLRotation("Combat Cleave SND", CombatCleaveSndApl, { talentTree: 1 });
const ROTATION_PRESET_COMBAT_CLEAVE_SND_EXPOSE = makePresetAPLRotation("Combat Cleave SND w/ Expose", CombatCleaveSndExposeApl, { talentTree: 1 });
const ROTATION_PRESET_AOE = makePresetAPLRotation("Fan AOE", FanAoeApl);
const ROTATION_PRESET_SUB_PVP = makePresetAPLRotation("Sub PvP", SubPvPApl, { talentTree: 2 });
const CombatHackTalents = {
  name: "Combat Axes/Swords",
  data: SavedTalents.create({
    talentsString: "00532010414-0252051000035015223100501251",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfKillingSpree,
      major2: RogueMajorGlyph.GlyphOfTricksOfTheTrade,
      major3: RogueMajorGlyph.GlyphOfRupture
    })
  })
};
const CombatCQCTalents = {
  name: "Combat Fists",
  data: SavedTalents.create({
    talentsString: "00532010414-0252051050035010223100501251",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfKillingSpree,
      major2: RogueMajorGlyph.GlyphOfTricksOfTheTrade,
      major3: RogueMajorGlyph.GlyphOfRupture
    })
  })
};
const AssassinationTalents137 = {
  name: "Assassination 13/7",
  data: SavedTalents.create({
    talentsString: "005303104352100520103331051-005005003-502",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfMutilate,
      major2: RogueMajorGlyph.GlyphOfTricksOfTheTrade,
      major3: RogueMajorGlyph.GlyphOfHungerForBlood
    })
  })
};
const AssassinationTalents182 = {
  name: "Assassination 18/2",
  data: SavedTalents.create({
    talentsString: "005303104352100520103331051-005005005003-2",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfMutilate,
      major2: RogueMajorGlyph.GlyphOfTricksOfTheTrade,
      major3: RogueMajorGlyph.GlyphOfHungerForBlood
    })
  })
};
const AssassinationTalentsBF = {
  name: "Assassination Blade Flurry",
  data: SavedTalents.create({
    talentsString: "005303104352100520103231-005205005003001-501",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfMutilate,
      major2: RogueMajorGlyph.GlyphOfTricksOfTheTrade,
      major3: RogueMajorGlyph.GlyphOfBladeFlurry
    })
  })
};
const SubtletyTalents = {
  name: "Subtlety",
  data: SavedTalents.create({
    talentsString: "30532010114--5022012030321121350115031151",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfEviscerate,
      major2: RogueMajorGlyph.GlyphOfRupture,
      major3: RogueMajorGlyph.GlyphOfTricksOfTheTrade
    })
  })
};
const SubPvPTalents = {
  name: "Sub PvP",
  data: SavedTalents.create({
    talentsString: "3023031-3-5320212030322121130135231251",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfPreparation,
      major2: RogueMajorGlyph.GlyphOfSprint,
      major3: RogueMajorGlyph.GlyphOfShadowDance
    })
  })
};
const HemoSubtletyTalents = {
  name: "Hemo Sub",
  data: SavedTalents.create({
    talentsString: "30532010135--502201203032112135011503122",
    glyphs: Glyphs.create({
      major1: RogueMajorGlyph.GlyphOfEviscerate,
      major2: RogueMajorGlyph.GlyphOfRupture,
      major3: RogueMajorGlyph.GlyphOfTricksOfTheTrade
    })
  })
};
const DefaultOptions = Rogue_Options.create({
  mhImbue: Rogue_Options_PoisonImbue.DeadlyPoison,
  ohImbue: Rogue_Options_PoisonImbue.InstantPoison,
  applyPoisonsManually: false,
  startingOverkillDuration: 20,
  vanishBreakTime: 0.1,
  honorOfThievesCritRate: 400,
  assumeBleedActive: true
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  prepopPotion: Potions.PotionOfSpeed,
  defaultConjured: Conjured.ConjuredRogueThistleTea,
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodMegaMammothMeal
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecRogue, {
  cssClass: "rogue-sim-ui",
  cssScheme: "rogue",
  knownIssues: [
    "Rotations are not fully optimized, especially for non-standard setups."
  ],
  warnings: [
    (simUI) => {
      return {
        updateOn: simUI.sim.encounter.changeEmitter,
        getContent: () => {
          let hasNoArmor = false;
          for (const target of simUI.sim.encounter.targets) {
            if (new Stats(target.stats).getStat(Stat.StatArmor) <= 0) {
              hasNoArmor = true;
              break;
            }
          }
          if (hasNoArmor) {
            return "One or more targets have no armor. Check advanced encounter settings.";
          } else {
            return "";
          }
        }
      };
    },
    (simUI) => {
      return {
        updateOn: simUI.player.changeEmitter,
        getContent: () => {
          if (simUI.player.getTalents().mutilate && (simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponType != WeaponType.WeaponTypeDagger || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponType != WeaponType.WeaponTypeDagger)) {
            return '"Mutilate" talent selected, but daggers not equipped in both hands.';
          } else {
            return "";
          }
        }
      };
    },
    (simUI) => {
      return {
        updateOn: simUI.player.changeEmitter,
        getContent: () => {
          if (simUI.player.getTalents().hackAndSlash) {
            if (simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponType == WeaponType.WeaponTypeSword || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponType == WeaponType.WeaponTypeAxe || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponType == WeaponType.WeaponTypeSword || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponType == WeaponType.WeaponTypeAxe) {
              return "";
            } else {
              return '"Hack and Slash" talent selected, but swords or axes not equipped.';
            }
          } else {
            return "";
          }
        }
      };
    },
    (simUI) => {
      return {
        updateOn: simUI.player.changeEmitter,
        getContent: () => {
          if (simUI.player.getTalents().closeQuartersCombat) {
            if (simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponType == WeaponType.WeaponTypeFist || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponType == WeaponType.WeaponTypeDagger || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponType == WeaponType.WeaponTypeFist || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponType == WeaponType.WeaponTypeDagger) {
              return "";
            } else {
              return '"Close Quarters Combat" talent selected, but fists or daggers not equipped.';
            }
          } else {
            return "";
          }
        }
      };
    },
    (simUI) => {
      return {
        updateOn: simUI.player.changeEmitter,
        getContent: () => {
          if (simUI.player.getTalents().maceSpecialization) {
            if (simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponType == WeaponType.WeaponTypeMace || simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponType == WeaponType.WeaponTypeMace) {
              return "";
            } else {
              return '"Mace Specialization" talent selected, but maces not equipped.';
            }
          } else {
            return "";
          }
        }
      };
    },
    (simUI) => {
      return {
        updateOn: simUI.player.changeEmitter,
        getContent: () => {
          const mhWeaponSpeed = simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponSpeed;
          const ohWeaponSpeed = simUI.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponSpeed;
          const mhImbue = simUI.player.getSpecOptions().mhImbue;
          const ohImbue = simUI.player.getSpecOptions().ohImbue;
          if (typeof mhWeaponSpeed == "undefined" || typeof ohWeaponSpeed == "undefined" || !simUI.player.getSpecOptions().applyPoisonsManually) {
            return "";
          }
          if (mhWeaponSpeed < ohWeaponSpeed && ohImbue == Rogue_Options_PoisonImbue.DeadlyPoison) {
            return "Deadly poison applied to slower (off hand) weapon.";
          }
          if (ohWeaponSpeed < mhWeaponSpeed && mhImbue == Rogue_Options_PoisonImbue.DeadlyPoison) {
            return "Deadly poison applied to slower (main hand) weapon.";
          }
          return "";
        }
      };
    }
  ],
  epStats: [
    Stat.StatAgility,
    Stat.StatStrength,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatExpertise
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps,
    PseudoStat.PseudoStatOffHandDps
  ],
  epReferenceStat: Stat.StatAttackPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatStamina,
    Stat.StatAgility,
    Stat.StatStrength,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatSpellHit,
    Stat.StatMeleeCrit,
    Stat.StatSpellCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatExpertise,
    Stat.StatResilience
  ],
  defaults: {
    gear: PRERAID_PRESET_ASSASSINATION.gear,
    epWeights: Stats.fromMap({
      [Stat.StatAgility]: 1.86,
      [Stat.StatStrength]: 1.14,
      [Stat.StatAttackPower]: 1,
      [Stat.StatSpellCrit]: 0.28,
      [Stat.StatSpellHit]: 0.08,
      [Stat.StatMeleeHit]: 1.39,
      [Stat.StatMeleeCrit]: 1.32,
      [Stat.StatMeleeHaste]: 1.48,
      [Stat.StatArmorPenetration]: 0.84,
      [Stat.StatExpertise]: 0.98
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 2.94,
      [PseudoStat.PseudoStatOffHandDps]: 2.45
    }),
    consumes: DefaultConsumes,
    talents: AssassinationTalents137.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      bloodlust: true,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      icyTalons: true,
      leaderOfThePack: TristateEffect.TristateEffectImproved,
      abominationsMight: true,
      swiftRetribution: true,
      elementalOath: true,
      sanctifiedRetribution: true
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved
    }),
    debuffs: Debuffs.create({
      heartOfTheCrusader: true,
      mangle: true,
      sunderArmor: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      shadowMastery: true,
      earthAndMoon: true,
      bloodFrenzy: true
    })
  },
  playerInputs: {
    inputs: [
      ApplyPoisonsManually
    ]
  },
  playerIconInputs: [
    MainHandImbue,
    OffHandImbue
  ],
  includeBuffDebuffInputs: [
    SpellCritBuff,
    SpellCritDebuff,
    SpellHitDebuff,
    SpellDamageDebuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      StartingOverkillDuration,
      VanishBreakTime,
      AssumeBleedActive,
      HonorOfThievesCritRate,
      TankAssignment,
      InFrontOfTarget
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      AssassinationTalents137,
      AssassinationTalents182,
      AssassinationTalentsBF,
      CombatHackTalents,
      CombatCQCTalents,
      SubtletyTalents,
      HemoSubtletyTalents,
      SubPvPTalents
    ],
    rotations: [
      ROTATION_PRESET_MUTILATE,
      ROTATION_PRESET_MUTILATE_EXPOSE,
      ROTATION_PRESET_RUPTURE_MUTILATE,
      ROTATION_PRESET_RUPTURE_MUTILATE_EXPOSE,
      ROTATION_PRESET_COMBAT,
      ROTATION_PRESET_COMBAT_EXPOSE,
      ROTATION_PRESET_COMBAT_CLEAVE_SND,
      ROTATION_PRESET_COMBAT_CLEAVE_SND_EXPOSE,
      ROTATION_PRESET_AOE,
      ROTATION_PRESET_SUB_PVP
    ],
    gear: [
      PRERAID_PRESET_ASSASSINATION,
      PRERAID_PRESET_COMBAT,
      P1_PRESET_ASSASSINATION,
      P1_PRESET_COMBAT,
      P1_PRESET_HEMO_SUB,
      P2_PRESET_ASSASSINATION,
      P2_PRESET_COMBAT,
      P3_PRESET_ASSASSINATION,
      P3_PRESET_COMBAT,
      P4_PRESET_ASSASSINATION,
      P4_PRESET_COMBAT,
      P5_PRESET_ASSASSINATION,
      P5_PRESET_COMBAT,
      P2_PRESET_HEMO_SUB,
      P3_PRESET_HEMO_SUB,
      P3_PRESET_DANCE_SUB,
      P5_PRESET_SUB_PVP
    ]
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    const numTargets = player.sim.encounter.targets.length;
    if (numTargets >= 5) {
      return ROTATION_PRESET_AOE.rotation.rotation;
    } else if (talentTree == 0) {
      return ROTATION_PRESET_MUTILATE_EXPOSE.rotation.rotation;
    } else if (talentTree == 1) {
      return ROTATION_PRESET_COMBAT_EXPOSE.rotation.rotation;
    } else {
      return ROTATION_PRESET_MUTILATE_EXPOSE.rotation.rotation;
    }
  },
  raidSimPresets: [
    {
      spec: Spec.SpecRogue,
      tooltip: "Assassination Rogue",
      defaultName: "Assassination",
      iconUrl: getSpecIcon(Class.ClassRogue, 0),
      talents: AssassinationTalents137.data,
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
          1: P1_PRESET_ASSASSINATION.gear,
          2: P2_PRESET_ASSASSINATION.gear,
          3: P3_PRESET_ASSASSINATION.gear,
          4: P4_PRESET_ASSASSINATION.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET_ASSASSINATION.gear,
          2: P2_PRESET_ASSASSINATION.gear,
          3: P3_PRESET_ASSASSINATION.gear,
          4: P4_PRESET_ASSASSINATION.gear
        }
      }
    },
    {
      spec: Spec.SpecRogue,
      tooltip: "Combat Rogue",
      defaultName: "Combat",
      iconUrl: getSpecIcon(Class.ClassRogue, 1),
      talents: CombatCQCTalents.data,
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
          1: P1_PRESET_COMBAT.gear,
          2: P2_PRESET_COMBAT.gear,
          3: P3_PRESET_COMBAT.gear,
          4: P4_PRESET_COMBAT.gear
        },
        [Faction.Horde]: {
          1: P1_PRESET_COMBAT.gear,
          2: P2_PRESET_COMBAT.gear,
          3: P3_PRESET_COMBAT.gear,
          4: P4_PRESET_COMBAT.gear
        }
      }
    }
  ]
});
class RogueSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
    this.player.changeEmitter.on((c) => {
      const options = this.player.getSpecOptions();
      const encounter = this.sim.encounter;
      if (!options.applyPoisonsManually) {
        const mhWeaponSpeed = this.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponSpeed;
        const ohWeaponSpeed = this.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponSpeed;
        if (typeof mhWeaponSpeed == "undefined" || typeof ohWeaponSpeed == "undefined") {
          return;
        }
        if (encounter.targets.length > 3) {
          options.mhImbue = Rogue_Options_PoisonImbue.InstantPoison;
          options.ohImbue = Rogue_Options_PoisonImbue.InstantPoison;
        } else {
          if (mhWeaponSpeed <= ohWeaponSpeed) {
            options.mhImbue = Rogue_Options_PoisonImbue.DeadlyPoison;
            options.ohImbue = Rogue_Options_PoisonImbue.InstantPoison;
          } else {
            options.mhImbue = Rogue_Options_PoisonImbue.InstantPoison;
            options.ohImbue = Rogue_Options_PoisonImbue.DeadlyPoison;
          }
        }
      }
      this.player.setSpecOptions(c, options);
    });
    this.sim.encounter.changeEmitter.on((c) => {
      const options = this.player.getSpecOptions();
      const encounter = this.sim.encounter;
      if (!options.applyPoisonsManually) {
        const mhWeaponSpeed = this.player.getGear().getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.weaponSpeed;
        const ohWeaponSpeed = this.player.getGear().getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.weaponSpeed;
        if (typeof mhWeaponSpeed == "undefined" || typeof ohWeaponSpeed == "undefined") {
          return;
        }
        if (encounter.targets.length > 3) {
          options.mhImbue = Rogue_Options_PoisonImbue.InstantPoison;
          options.ohImbue = Rogue_Options_PoisonImbue.InstantPoison;
        } else {
          if (mhWeaponSpeed <= ohWeaponSpeed) {
            options.mhImbue = Rogue_Options_PoisonImbue.DeadlyPoison;
            options.ohImbue = Rogue_Options_PoisonImbue.InstantPoison;
          } else {
            options.mhImbue = Rogue_Options_PoisonImbue.InstantPoison;
            options.ohImbue = Rogue_Options_PoisonImbue.DeadlyPoison;
          }
        }
      }
      this.player.setSpecOptions(c, options);
    });
  }
}
export {
  RogueSimUI as R
};
//# sourceMappingURL=sim-88df4aee.chunk.js.map
