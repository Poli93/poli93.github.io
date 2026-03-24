var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { A as ActionId, eU as WarriorShout, aU as Faction, bV as SavedTalents, N as Glyphs, o as WarriorMajorGlyph, p as WarriorMinorGlyph, fj as Warrior_Options, F as Consumes, dN as Flask, dQ as Food, dS as Potions, a2 as Stat, a1 as PseudoStat, G as Stats, a9 as EXPERTISE_PER_QUARTER_PERCENT_REDUCTION, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, S as Spec, g as getSpecIcon, u as Class, a6 as Race } from "./detailed_results-75bc3b97.chunk.js";
import { m as makeSpecOptionsBooleanIconInput, a as makeSpecOptionsNumberInput, i as makeSpecOptionsBooleanInput, t as makeSpecOptionsEnumIconInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, k as SpellDamageDebuff, W as SpellHitDebuff, T as TankAssignment, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-2ccc9e15.chunk.js";
import { P as PhysicalDPSGemOptimizer } from "./suggest_gems_action-7d3c1774.chunk.js";
const Recklessness = makeSpecOptionsBooleanIconInput({
  fieldName: "useRecklessness",
  id: ActionId.fromSpellId(1719)
});
const ShatteringThrow = makeSpecOptionsBooleanIconInput({
  fieldName: "useShatteringThrow",
  id: ActionId.fromSpellId(64382)
});
const StartingRage = makeSpecOptionsNumberInput({
  fieldName: "startingRage",
  label: "Starting Rage",
  labelTooltip: "Initial rage at the start of each iteration."
});
const StanceSnapshot = makeSpecOptionsBooleanInput({
  fieldName: "stanceSnapshot",
  label: "Stance Snapshot",
  labelTooltip: "Ability that is cast at the same time as stance swap will benefit from the bonus of the stance before the swap."
});
const DisableExpertiseGemming = makeSpecOptionsBooleanInput({
  fieldName: "disableExpertiseGemming",
  label: "Disable expertise gemming",
  labelTooltip: "Disables auto gemming for expertise"
});
const ShoutPicker = makeSpecOptionsEnumIconInput({
  fieldName: "shout",
  values: [
    { color: "c79c6e", value: WarriorShout.WarriorShoutNone },
    { actionId: ActionId.fromSpellId(2048), value: WarriorShout.WarriorShoutBattle },
    { actionId: ActionId.fromSpellId(469), value: WarriorShout.WarriorShoutCommanding }
  ]
});
const items$f = [
  {
    id: 41386,
    enchant: 3817,
    gems: [
      41285,
      42702
    ]
  },
  {
    id: 42645,
    gems: [
      40002
    ]
  },
  {
    id: 44195,
    enchant: 3808
  },
  {
    id: 37647,
    enchant: 3605
  },
  {
    id: 39606,
    enchant: 3832,
    gems: [
      40002,
      40002
    ]
  },
  {
    id: 41355,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 39609,
    enchant: 3604,
    gems: [
      40037,
      0
    ]
  },
  {
    id: 40694,
    gems: [
      42149,
      42149
    ]
  },
  {
    id: 37193,
    enchant: 3823,
    gems: [
      40002,
      40037
    ]
  },
  {
    id: 44306,
    enchant: 3606,
    gems: [
      40086,
      40002
    ]
  },
  {
    id: 42642,
    gems: [
      42149
    ]
  },
  {
    id: 37642
  },
  {
    id: 42987
  },
  {
    id: 40684
  },
  {
    id: 37852,
    enchant: 3789
  },
  {},
  {
    id: 37191
  }
];
const PreraidArmsGear = {
  items: items$f
};
const items$e = [
  {
    id: 40528,
    enchant: 3817,
    gems: [
      41398,
      42153
    ]
  },
  {
    id: 44664,
    gems: [
      39996
    ]
  },
  {
    id: 40530,
    enchant: 3808,
    gems: [
      40038
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
      42153
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      40002,
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
      42153
    ]
  },
  {
    id: 40318,
    enchant: 3823,
    gems: [
      49110,
      40038
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 43993,
    gems: [
      40002
    ]
  },
  {
    id: 40474
  },
  {
    id: 42987
  },
  {
    id: 40256
  },
  {
    id: 40384,
    enchant: 3789
  },
  {},
  {
    id: 40385
  }
];
const P1ArmsGear = {
  items: items$e
};
const items$d = [
  {
    id: 46151,
    enchant: 3817,
    gems: [
      41398,
      42142
    ]
  },
  {
    id: 45459,
    gems: [
      40002
    ]
  },
  {
    id: 46149,
    enchant: 3808,
    gems: [
      42153
    ]
  },
  {
    id: 46032,
    enchant: 3605,
    gems: [
      39996,
      40037
    ]
  },
  {
    id: 46146,
    enchant: 3832,
    gems: [
      42153,
      39996
    ]
  },
  {
    id: 45663,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 46148,
    enchant: 3604,
    gems: [
      40037,
      0
    ]
  },
  {
    id: 45241,
    gems: [
      49110,
      40037,
      39996
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
    id: 45599,
    enchant: 3606,
    gems: [
      40002,
      40002
    ]
  },
  {
    id: 45608,
    gems: [
      39996
    ]
  },
  {
    id: 46322,
    gems: [
      39996
    ]
  },
  {
    id: 46038
  },
  {
    id: 45931
  },
  {
    id: 45533,
    enchant: 3789,
    gems: [
      39996,
      39996
    ]
  },
  {},
  {
    id: 45296,
    gems: [
      39996
    ]
  }
];
const P2ArmsGear = {
  items: items$d
};
const items$c = [
  {
    id: 49478,
    enchant: 3817,
    gems: [
      41398,
      40117
    ]
  },
  {
    id: 47915,
    gems: [
      40117
    ]
  },
  {
    id: 48381,
    enchant: 3808,
    gems: [
      42142
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
    id: 48385,
    enchant: 3832,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 47074,
    enchant: 3845,
    gems: [
      40143,
      0
    ]
  },
  {
    id: 47240,
    enchant: 3604,
    gems: [
      49110,
      40117,
      0
    ]
  },
  {
    id: 47153,
    gems: [
      40143,
      40117,
      40117
    ]
  },
  {
    id: 47191,
    enchant: 3823,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 47077,
    enchant: 3606,
    gems: [
      40143,
      40117
    ]
  },
  {
    id: 47934,
    gems: [
      40142
    ]
  },
  {
    id: 45608,
    gems: [
      40117
    ]
  },
  {
    id: 47131
  },
  {
    id: 46038
  },
  {
    id: 47078,
    enchant: 3789,
    gems: [
      40117,
      40117
    ]
  },
  {},
  {
    id: 45296,
    gems: [
      40117
    ]
  }
];
const P3Arms2pAllianceGear = {
  items: items$c
};
const items$b = [
  {
    id: 48383,
    enchant: 3817,
    gems: [
      41398,
      40117
    ]
  },
  {
    id: 47915,
    gems: [
      40117
    ]
  },
  {
    id: 48381,
    enchant: 3808,
    gems: [
      42153
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
    id: 48385,
    enchant: 3832,
    gems: [
      42153,
      42153
    ]
  },
  {
    id: 47074,
    enchant: 3845,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 47240,
    enchant: 3604,
    gems: [
      49110,
      40117,
      0
    ]
  },
  {
    id: 47153,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 48382,
    enchant: 3823,
    gems: [
      40142,
      40117
    ]
  },
  {
    id: 47077,
    enchant: 3606,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 47934,
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
    id: 46038
  },
  {
    id: 47131
  },
  {
    id: 47078,
    enchant: 3789,
    gems: [
      40117,
      40117
    ]
  },
  {},
  {
    id: 46995,
    gems: [
      40117
    ]
  }
];
const P3Arms4pAllianceGear = {
  items: items$b
};
const items$a = [
  {
    id: 49478,
    enchant: 3817,
    gems: [
      41398,
      40111
    ]
  },
  {
    id: 45459,
    gems: [
      40111
    ]
  },
  {
    id: 48400,
    enchant: 3808,
    gems: [
      42153
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      40111
    ]
  },
  {
    id: 48396,
    enchant: 3832,
    gems: [
      42153,
      42153
    ]
  },
  {
    id: 47442,
    enchant: 3845,
    gems: [
      40143,
      0
    ]
  },
  {
    id: 47492,
    enchant: 3604,
    gems: [
      49110,
      40117,
      0
    ]
  },
  {
    id: 47472,
    gems: [
      40143,
      40117,
      40117
    ]
  },
  {
    id: 47480,
    enchant: 3823,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 47445,
    enchant: 3606,
    gems: [
      40143,
      40117
    ]
  },
  {
    id: 48007,
    gems: [
      40143
    ]
  },
  {
    id: 45608,
    gems: [
      40117
    ]
  },
  {
    id: 47464
  },
  {
    id: 46038
  },
  {
    id: 47446,
    enchant: 3789,
    gems: [
      40111,
      40111
    ]
  },
  {},
  {
    id: 47428,
    gems: [
      40111
    ]
  }
];
const P3Arms2pHordeGear = {
  items: items$a
};
const items$9 = [
  {
    id: 48398,
    enchant: 3817,
    gems: [
      41398,
      40117
    ]
  },
  {
    id: 47988,
    gems: [
      40117
    ]
  },
  {
    id: 48400,
    enchant: 3808,
    gems: [
      42153
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      40117
    ]
  },
  {
    id: 48396,
    enchant: 3832,
    gems: [
      42153,
      42153
    ]
  },
  {
    id: 47442,
    enchant: 3845,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 47492,
    enchant: 3604,
    gems: [
      49110,
      40117,
      0
    ]
  },
  {
    id: 47472,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 48399,
    enchant: 3823,
    gems: [
      40142,
      40117
    ]
  },
  {
    id: 47445,
    enchant: 3606,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 48007,
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
    id: 46038
  },
  {
    id: 47464
  },
  {
    id: 47446,
    enchant: 3789,
    gems: [
      40117,
      40117
    ]
  },
  {},
  {
    id: 47428,
    gems: [
      40117
    ]
  }
];
const P3Arms4pHordeGear = {
  items: items$9
};
const items$8 = [
  {
    id: 51227,
    enchant: 3817,
    gems: [
      41398,
      40111
    ]
  },
  {
    id: 50728,
    gems: [
      40143
    ]
  },
  {
    id: 51229,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40111
    ]
  },
  {
    id: 51225,
    enchant: 3832,
    gems: [
      40111,
      49110
    ]
  },
  {
    id: 50670,
    enchant: 3845,
    gems: [
      40143,
      0
    ]
  },
  {
    id: 51226,
    enchant: 3604,
    gems: [
      40125,
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
    id: 50645,
    enchant: 3823,
    gems: [
      42153,
      42153,
      42142
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40125,
      40125
    ]
  },
  {
    id: 50402,
    gems: [
      40143
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 50343
  },
  {
    id: 50363
  },
  {
    id: 49623,
    enchant: 3789,
    gems: [
      40111,
      40111,
      40111
    ]
  },
  {},
  {
    id: 50733,
    enchant: 3608,
    gems: [
      40111
    ]
  }
];
const P4ArmsAllianceGear = {
  items: items$8
};
const items$7 = [
  {
    id: 51227,
    enchant: 3817,
    gems: [
      41398,
      40111
    ]
  },
  {
    id: 50728,
    gems: [
      40125
    ]
  },
  {
    id: 51229,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      40111
    ]
  },
  {
    id: 51225,
    enchant: 3832,
    gems: [
      40111,
      49110
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
    id: 51226,
    enchant: 3604,
    gems: [
      40125,
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
    id: 50645,
    enchant: 3823,
    gems: [
      42153,
      42153,
      42142
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40125,
      40125
    ]
  },
  {
    id: 50402,
    gems: [
      40125
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 47131
  },
  {
    id: 50363
  },
  {
    id: 49623,
    enchant: 3789,
    gems: [
      40111,
      40111,
      40111
    ]
  },
  {},
  {
    id: 50733,
    enchant: 3608,
    gems: [
      40111
    ]
  }
];
const P4ArmsHordeGear = {
  items: items$7
};
const items$6 = [
  {
    id: 41386,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 42645,
    gems: [
      40003
    ]
  },
  {
    id: 44195,
    enchant: 3808
  },
  {
    id: 37647,
    enchant: 3605
  },
  {
    id: 39606,
    enchant: 3832,
    gems: [
      40003,
      40003
    ]
  },
  {
    id: 44203,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 39609,
    enchant: 3604,
    gems: [
      40037,
      0
    ]
  },
  {
    id: 40694,
    gems: [
      42149,
      42149
    ]
  },
  {
    id: 44205,
    enchant: 3823
  },
  {
    id: 44306,
    enchant: 3606,
    gems: [
      40037,
      40037
    ]
  },
  {
    id: 42642,
    gems: [
      42149
    ]
  },
  {
    id: 37642
  },
  {
    id: 42987
  },
  {
    id: 40684
  },
  {
    id: 37852,
    enchant: 3789
  },
  {
    id: 37852,
    enchant: 3789
  },
  {
    id: 37191
  }
];
const PreraidFuryGear = {
  items: items$6
};
const items$5 = [
  {
    id: 44006,
    enchant: 3817,
    gems: [
      41285,
      42702
    ]
  },
  {
    id: 44664,
    gems: [
      39996
    ]
  },
  {
    id: 40530,
    enchant: 3808,
    gems: [
      40037
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
      42142
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
      42142
    ]
  },
  {
    id: 40529,
    enchant: 3823,
    gems: [
      39996,
      40022
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 43993,
    gems: [
      42142
    ]
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
    id: 40384,
    enchant: 3789
  },
  {
    id: 40384,
    enchant: 3789
  },
  {
    id: 40385
  }
];
const P1FuryGear = {
  items: items$5
};
const items$4 = [
  {
    id: 46151,
    enchant: 3817,
    gems: [
      41398,
      39996
    ]
  },
  {
    id: 45517,
    gems: [
      39996
    ]
  },
  {
    id: 46149,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 46032,
    enchant: 3605,
    gems: [
      39996,
      40037
    ]
  },
  {
    id: 46146,
    enchant: 3832,
    gems: [
      39996,
      42702
    ]
  },
  {
    id: 45611,
    enchant: 3845,
    gems: [
      40037,
      0
    ]
  },
  {
    id: 46148,
    enchant: 3604,
    gems: [
      40058
    ]
  },
  {
    id: 46095,
    gems: [
      42154,
      42142,
      42142
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
    id: 40591,
    enchant: 3606
  },
  {
    id: 45608,
    gems: [
      39996
    ]
  },
  {
    id: 45534,
    gems: [
      39996
    ]
  },
  {
    id: 42987
  },
  {
    id: 45931
  },
  {
    id: 45516,
    enchant: 3789,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 45516,
    enchant: 3789,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 45296,
    gems: [
      39996
    ]
  }
];
const P2FuryGear = {
  items: items$4
};
const items$3 = [
  {
    id: 48383,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 47060,
    gems: [
      40117
    ]
  },
  {
    id: 48381,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47545,
    enchant: 3831,
    gems: [
      40111
    ]
  },
  {
    id: 48385,
    enchant: 3832,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 47074,
    enchant: 3845,
    gems: [
      40143,
      0
    ]
  },
  {
    id: 47240,
    enchant: 3604,
    gems: [
      40111,
      40111,
      0
    ]
  },
  {
    id: 47002,
    gems: [
      40143,
      40143,
      40111
    ]
  },
  {
    id: 48382,
    enchant: 3823,
    gems: [
      40142,
      40117
    ]
  },
  {
    id: 47154,
    enchant: 3606,
    gems: [
      40142,
      40117
    ]
  },
  {
    id: 46966,
    gems: [
      40143
    ]
  },
  {
    id: 47075,
    gems: [
      40111
    ]
  },
  {
    id: 45931
  },
  {
    id: 47131
  },
  {
    id: 47078,
    enchant: 3789,
    gems: [
      42142,
      40111
    ]
  },
  {
    id: 47078,
    enchant: 3789,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 46995,
    gems: [
      40111
    ]
  }
];
const P3FuryAllianceGear = {
  items: items$3
};
const items$2 = [
  {
    id: 48398,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 47433,
    gems: [
      40111
    ]
  },
  {
    id: 48400,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 47546,
    enchant: 3831,
    gems: [
      40111
    ]
  },
  {
    id: 48396,
    enchant: 3832,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 47414,
    enchant: 3845,
    gems: [
      40142,
      0
    ]
  },
  {
    id: 47240,
    enchant: 3604,
    gems: [
      40111,
      40111,
      0
    ]
  },
  {
    id: 47429,
    gems: [
      40142,
      40142,
      42142
    ]
  },
  {
    id: 48399,
    enchant: 3823,
    gems: [
      40142,
      40111
    ]
  },
  {
    id: 47445,
    enchant: 3606,
    gems: [
      40142,
      45862
    ]
  },
  {
    id: 47413,
    gems: [
      40142
    ]
  },
  {
    id: 47443,
    gems: [
      40111
    ]
  },
  {
    id: 45931
  },
  {
    id: 47464
  },
  {
    id: 47446,
    enchant: 3789,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 47446,
    enchant: 3789,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 47428,
    gems: [
      40117
    ]
  }
];
const P3FuryHordeGear = {
  items: items$2
};
const items$1 = [
  {
    id: 51227,
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
    id: 51229,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 47545,
    enchant: 3831,
    gems: [
      40117
    ]
  },
  {
    id: 51225,
    enchant: 3832,
    gems: [
      40117,
      49110
    ]
  },
  {
    id: 50670,
    enchant: 3845,
    gems: [
      42156,
      0
    ]
  },
  {
    id: 50675,
    enchant: 3604,
    gems: [
      40143,
      40117,
      0
    ]
  },
  {
    id: 50620,
    gems: [
      40143,
      40111,
      40111
    ]
  },
  {
    id: 51228,
    enchant: 3823,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 50639,
    enchant: 3606,
    gems: [
      40143,
      40117
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 50402,
    gems: [
      40143
    ]
  },
  {
    id: 50343
  },
  {
    id: 50363
  },
  {
    id: 49623,
    enchant: 3789,
    gems: [
      40111,
      42153,
      42153
    ]
  },
  {
    id: 50730,
    enchant: 3789,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {
    id: 50733,
    gems: [
      40111
    ]
  }
];
const P4FuryAllianceGear = {
  items: items$1
};
const items = [
  {
    id: 51227,
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
    id: 51229,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 47546,
    enchant: 3831,
    gems: [
      40117
    ]
  },
  {
    id: 51225,
    enchant: 3832,
    gems: [
      40117,
      49110
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
      40143,
      40117,
      0
    ]
  },
  {
    id: 50620,
    gems: [
      40125,
      40117,
      40117
    ]
  },
  {
    id: 51228,
    enchant: 3823,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 50639,
    enchant: 3606,
    gems: [
      42156,
      40143
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 50402,
    gems: [
      40143
    ]
  },
  {
    id: 50343
  },
  {
    id: 50363
  },
  {
    id: 49623,
    enchant: 3789,
    gems: [
      40117,
      42153,
      42153
    ]
  },
  {
    id: 50730,
    enchant: 3789,
    gems: [
      40117,
      40111,
      40111
    ]
  },
  {
    id: 50733,
    gems: [
      40111
    ]
  }
];
const P4FuryHordeGear = {
  items
};
const type$3 = "TypeAPL";
const prepullActions$3 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 2458
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-20s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 2687
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
          spellId: 18499
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
          spellId: 1719
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
          spellId: 12292
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
          otherId: "OtherActionPotion"
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-0.5s"
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
              auraIsActive: {
                auraId: {
                  spellId: 2458
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "20"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 2687
        }
      }
    }
  },
  {
    hide: true,
    action: {
      condition: {
        auraShouldRefresh: {
          auraId: {
            spellId: 47467
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
          spellId: 47467
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 12292
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
                    val: "12"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47520,
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
              cmp: {
                op: "OpGe",
                lhs: {
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "12"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47450,
          tag: 1
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
              val: "1"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 1680
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 23881
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 1680
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
              val: "6s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 64382
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
              gcdIsReady: {}
            },
            {
              or: {
                vals: [
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 46916
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 70847
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
          spellId: 47475
        }
      }
    }
  },
  {
    hide: true,
    action: {
      condition: {
        auraShouldRefresh: {
          auraId: {
            spellId: 47467
          },
          maxOverlap: {
            "const": {
              val: "8s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47467
        }
      }
    }
  },
  {
    action: {
      condition: {
        isExecutePhase: {
          threshold: "E20"
        }
      },
      castSpell: {
        spellId: {
          spellId: 47471
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
              gcdIsReady: {}
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 47465
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
                      spellId: 23881
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 1680
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
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
                spellId: 2457
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 47465
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 2458
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
              gcdIsReady: {}
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 68051
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 23881
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 1680
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
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
                spellId: 2457
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 7384
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 2458
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
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 23881
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 1680
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 57755
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
                spellId: 2458
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 2458
        }
      }
    }
  }
];
const FuryApl = {
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
          spellId: 2458
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-20s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 2687
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
          spellId: 18499
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
          spellId: 1719
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
          spellId: 12292
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
          otherId: "OtherActionPotion"
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-0.5s"
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
              auraIsActive: {
                auraId: {
                  spellId: 2458
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "20"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 2687
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
                  spellId: 47467
                },
                maxOverlap: {
                  "const": {
                    val: "3s"
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
                      spellId: 8647
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
          spellId: 47467
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 12292
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
                    val: "12"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47520,
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
              cmp: {
                op: "OpGe",
                lhs: {
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "12"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47450,
          tag: 1
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
              val: "1"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 1680
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 23881
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 1680
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
              val: "6s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 64382
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
              gcdIsReady: {}
            },
            {
              or: {
                vals: [
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 46916
                      }
                    }
                  },
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 70847
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
          spellId: 47475
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
                  spellId: 47467
                },
                maxOverlap: {
                  "const": {
                    val: "8s"
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
                      spellId: 8647
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
          spellId: 47467
        }
      }
    }
  },
  {
    action: {
      condition: {
        isExecutePhase: {
          threshold: "E20"
        }
      },
      castSpell: {
        spellId: {
          spellId: 47471
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
              gcdIsReady: {}
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 47465
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
                      spellId: 23881
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 1680
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
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
                spellId: 2457
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 47465
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 2458
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
              gcdIsReady: {}
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 68051
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 23881
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 1680
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
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
                spellId: 2457
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 7384
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 2458
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
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 23881
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 1680
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "1.5s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 57755
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
                spellId: 2458
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 2458
        }
      }
    }
  }
];
const FurySunderApl = {
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
          spellId: 2687
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
          spellId: 1719
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
          spellId: 2457
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
        val: "-0.1s"
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
          op: "OpLt",
          lhs: {
            currentRage: {}
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
          spellId: 2687
        }
      }
    }
  },
  {
    action: {
      condition: {
        isExecutePhase: {
          threshold: "E20"
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
              cmp: {
                op: "OpLe",
                lhs: {
                  autoTimeToNext: {}
                },
                rhs: {
                  "const": {
                    val: "1ms"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47520,
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
              cmp: {
                op: "OpGe",
                lhs: {
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "40"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  autoTimeToNext: {}
                },
                rhs: {
                  "const": {
                    val: "1ms"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47450,
          tag: 1
        }
      }
    }
  },
  {
    hide: true,
    action: {
      condition: {
        auraShouldRefresh: {
          auraId: {
            spellId: 47467
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
          spellId: 47467
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
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 47465
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
                    val: "7s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47465
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 68051
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 7384
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
              val: "3.5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 46924
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
          spellId: 47486
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
              val: "15"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47471
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
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "15"
                  }
                }
              }
            },
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
            }
          ]
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
        cmp: {
          op: "OpGe",
          lhs: {
            currentRage: {}
          },
          rhs: {
            "const": {
              val: "15"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47475
        }
      }
    }
  }
];
const ArmsApl = {
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
          spellId: 2687
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
          spellId: 1719
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
          spellId: 2457
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
        val: "-0.1s"
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
          op: "OpLt",
          lhs: {
            currentRage: {}
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
          spellId: 2687
        }
      }
    }
  },
  {
    action: {
      condition: {
        isExecutePhase: {
          threshold: "E20"
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
              cmp: {
                op: "OpLe",
                lhs: {
                  autoTimeToNext: {}
                },
                rhs: {
                  "const": {
                    val: "1ms"
                  }
                }
              }
            },
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47520,
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
              cmp: {
                op: "OpGe",
                lhs: {
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "40"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  autoTimeToNext: {}
                },
                rhs: {
                  "const": {
                    val: "1ms"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  numberTargets: {}
                },
                rhs: {
                  "const": {
                    val: "1"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47450,
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
              auraShouldRefresh: {
                auraId: {
                  spellId: 47467
                },
                maxOverlap: {
                  "const": {
                    val: "3s"
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
                      spellId: 8647
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
          spellId: 47467
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
                    sourceUnit: {
                      type: "CurrentTarget"
                    },
                    auraId: {
                      spellId: 47465
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
                    val: "7s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 47465
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 68051
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 7384
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
              val: "3.5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 46924
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
          spellId: 47486
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
              val: "15"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47471
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
                  currentRage: {}
                },
                rhs: {
                  "const": {
                    val: "15"
                  }
                }
              }
            },
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
            }
          ]
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
        cmp: {
          op: "OpGe",
          lhs: {
            currentRage: {}
          },
          rhs: {
            "const": {
              val: "15"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47475
        }
      }
    }
  }
];
const ArmsSunderApl = {
  type,
  prepullActions,
  priorityList
};
const PRERAID_ARMS_PRESET = makePresetGear("Preraid Arms", PreraidArmsGear, { talentTree: 0 });
const P1_ARMS_PRESET = makePresetGear("P1 Arms", P1ArmsGear, { talentTree: 0 });
const P2_ARMS_PRESET = makePresetGear("P2 Arms", P2ArmsGear, { talentTree: 0 });
const P3_ARMS_2P_PRESET_ALLIANCE = makePresetGear("P3 Arms 2p [A]", P3Arms2pAllianceGear, { talentTree: 0, faction: Faction.Alliance });
const P3_ARMS_4P_PRESET_ALLIANCE = makePresetGear("P3 Arms 4p [A]", P3Arms4pAllianceGear, { talentTree: 0, faction: Faction.Alliance });
const P3_ARMS_2P_PRESET_HORDE = makePresetGear("P3 Arms 2p [H]", P3Arms2pHordeGear, { talentTree: 0, faction: Faction.Horde });
const P3_ARMS_4P_PRESET_HORDE = makePresetGear("P3 Arms 4p [H]", P3Arms4pHordeGear, { talentTree: 0, faction: Faction.Horde });
const P4_ARMS_PRESET_ALLIANCE = makePresetGear("P4 Arms [A]", P4ArmsAllianceGear, { talentTree: 0, faction: Faction.Alliance });
const P4_ARMS_PRESET_HORDE = makePresetGear("P4 Arms [H]", P4ArmsHordeGear, { talentTree: 0, faction: Faction.Horde });
const PRERAID_FURY_PRESET = makePresetGear("Preraid Fury", PreraidFuryGear, { talentTrees: [1, 2] });
const P1_FURY_PRESET = makePresetGear("P1 Fury", P1FuryGear, { talentTrees: [1, 2] });
const P2_FURY_PRESET = makePresetGear("P2 Fury", P2FuryGear, { talentTrees: [1, 2] });
const P3_FURY_PRESET_ALLIANCE = makePresetGear("P3 Fury [A]", P3FuryAllianceGear, { talentTrees: [1, 2], faction: Faction.Alliance });
const P3_FURY_PRESET_HORDE = makePresetGear("P3 Fury [H]", P3FuryHordeGear, { talentTrees: [1, 2], faction: Faction.Horde });
const P4_FURY_PRESET_ALLIANCE = makePresetGear("P4 Fury [A]", P4FuryAllianceGear, { talentTrees: [1, 2], faction: Faction.Alliance });
const P4_FURY_PRESET_HORDE = makePresetGear("P4 Fury [H]", P4FuryHordeGear, { talentTrees: [1, 2], faction: Faction.Horde });
const ROTATION_FURY = makePresetAPLRotation("Fury", FuryApl, { talentTree: 1 });
const ROTATION_FURY_SUNDER = makePresetAPLRotation("Fury + Sunder", FurySunderApl, { talentTree: 1 });
const ROTATION_ARMS = makePresetAPLRotation("Arms", ArmsApl, { talentTree: 0 });
const ROTATION_ARMS_SUNDER = makePresetAPLRotation("Arms + Sunder", ArmsSunderApl, { talentTree: 0 });
const ArmsTalents = {
  name: "Arms",
  data: SavedTalents.create({
    talentsString: "3022032023335100102012213231251-305-2033",
    glyphs: Glyphs.create({
      major1: WarriorMajorGlyph.GlyphOfRending,
      major2: WarriorMajorGlyph.GlyphOfMortalStrike,
      major3: WarriorMajorGlyph.GlyphOfExecution,
      minor1: WarriorMinorGlyph.GlyphOfThunderClap,
      minor2: WarriorMinorGlyph.GlyphOfCommand,
      minor3: WarriorMinorGlyph.GlyphOfBattle
    })
  })
};
const FuryTalents = {
  name: "Fury",
  data: SavedTalents.create({
    talentsString: "32002301233-305053000520310053120500351",
    glyphs: Glyphs.create({
      major1: WarriorMajorGlyph.GlyphOfWhirlwind,
      major2: WarriorMajorGlyph.GlyphOfHeroicStrike,
      major3: WarriorMajorGlyph.GlyphOfExecution,
      minor1: WarriorMinorGlyph.GlyphOfCommand,
      minor2: WarriorMinorGlyph.GlyphOfBattle,
      minor3: WarriorMinorGlyph.GlyphOfCharge
    })
  })
};
const DefaultOptions = Warrior_Options.create({
  startingRage: 0,
  useRecklessness: true,
  useShatteringThrow: true,
  disableExpertiseGemming: false,
  shout: WarriorShout.WarriorShoutCommanding
});
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodSpicedWormBurger,
  defaultPotion: Potions.IndestructiblePotion,
  prepopPotion: Potions.PotionOfSpeed
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecWarrior, {
  cssClass: "warrior-sim-ui",
  cssScheme: "warrior",
  knownIssues: [],
  epStats: [
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatExpertise,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatArmor
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
    Stat.StatAttackPower,
    Stat.StatExpertise,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatArmor,
    Stat.StatResilience
  ],
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    if (!player.getInFrontOfTarget()) {
      stats = stats.addStat(Stat.StatExpertise, player.getTalents().weaponMastery * 4 * EXPERTISE_PER_QUARTER_PERCENT_REDUCTION);
    }
    return {
      talents: stats
    };
  },
  defaults: {
    gear: P3_FURY_PRESET_ALLIANCE.gear,
    epWeights: Stats.fromMap({
      [Stat.StatStrength]: 2.72,
      [Stat.StatAgility]: 1.82,
      [Stat.StatAttackPower]: 1,
      [Stat.StatExpertise]: 2.55,
      [Stat.StatMeleeHit]: 0.79,
      [Stat.StatMeleeCrit]: 2.12,
      [Stat.StatMeleeHaste]: 1.72,
      [Stat.StatArmorPenetration]: 2.17,
      [Stat.StatArmor]: 0.03
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 6.29,
      [PseudoStat.PseudoStatOffHandDps]: 3.58
    }),
    consumes: DefaultConsumes,
    talents: FuryTalents.data,
    specOptions: DefaultOptions,
    raidBuffs: RaidBuffs.create({
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
    partyBuffs: PartyBuffs.create({
      heroicPresence: false
    }),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfMight: TristateEffect.TristateEffectImproved
    }),
    debuffs: Debuffs.create({
      bloodFrenzy: true,
      heartOfTheCrusader: true,
      mangle: true,
      sunderArmor: true,
      curseOfWeakness: TristateEffect.TristateEffectRegular,
      faerieFire: TristateEffect.TristateEffectImproved,
      ebonPlaguebringer: true
    })
  },
  playerIconInputs: [
    ShoutPicker,
    Recklessness,
    ShatteringThrow
  ],
  includeBuffDebuffInputs: [
    SpellDamageDebuff,
    SpellHitDebuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      StartingRage,
      StanceSnapshot,
      DisableExpertiseGemming,
      TankAssignment,
      InFrontOfTarget
    ]
  },
  encounterPicker: {
    showExecuteProportion: true
  },
  presets: {
    talents: [
      ArmsTalents,
      FuryTalents
    ],
    rotations: [
      ROTATION_FURY,
      ROTATION_FURY_SUNDER,
      ROTATION_ARMS,
      ROTATION_ARMS_SUNDER
    ],
    gear: [
      PRERAID_FURY_PRESET,
      P1_FURY_PRESET,
      P2_FURY_PRESET,
      P3_FURY_PRESET_ALLIANCE,
      P3_FURY_PRESET_HORDE,
      P4_FURY_PRESET_ALLIANCE,
      P4_FURY_PRESET_HORDE,
      PRERAID_ARMS_PRESET,
      P1_ARMS_PRESET,
      P2_ARMS_PRESET,
      P3_ARMS_2P_PRESET_ALLIANCE,
      P3_ARMS_4P_PRESET_ALLIANCE,
      P3_ARMS_2P_PRESET_HORDE,
      P3_ARMS_4P_PRESET_HORDE,
      P4_ARMS_PRESET_ALLIANCE,
      P4_ARMS_PRESET_HORDE
    ]
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    if (talentTree == 0) {
      return ROTATION_ARMS_SUNDER.rotation.rotation;
    } else {
      return ROTATION_FURY_SUNDER.rotation.rotation;
    }
  },
  raidSimPresets: [
    {
      spec: Spec.SpecWarrior,
      tooltip: "Arms Warrior",
      defaultName: "Arms",
      iconUrl: getSpecIcon(Class.ClassWarrior, 0),
      talents: ArmsTalents.data,
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
          1: P1_ARMS_PRESET.gear,
          2: P2_ARMS_PRESET.gear,
          3: P3_ARMS_4P_PRESET_ALLIANCE.gear,
          4: P4_ARMS_PRESET_ALLIANCE.gear
        },
        [Faction.Horde]: {
          1: P1_ARMS_PRESET.gear,
          2: P2_ARMS_PRESET.gear,
          3: P3_ARMS_4P_PRESET_HORDE.gear,
          4: P4_ARMS_PRESET_HORDE.gear
        }
      }
    },
    {
      spec: Spec.SpecWarrior,
      tooltip: "Fury Warrior",
      defaultName: "Fury",
      iconUrl: getSpecIcon(Class.ClassWarrior, 1),
      talents: FuryTalents.data,
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
          1: P1_FURY_PRESET.gear,
          2: P2_FURY_PRESET.gear,
          3: P3_FURY_PRESET_ALLIANCE.gear,
          4: P4_FURY_PRESET_ALLIANCE.gear
        },
        [Faction.Horde]: {
          1: P1_FURY_PRESET.gear,
          2: P2_FURY_PRESET.gear,
          3: P3_FURY_PRESET_HORDE.gear,
          4: P4_FURY_PRESET_HORDE.gear
        }
      }
    }
  ]
});
class WarriorSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
    new WarriorGemOptimizer(this);
  }
}
class WarriorGemOptimizer extends PhysicalDPSGemOptimizer {
  constructor(simUI) {
    super(simUI, true, true, false, true);
    __publicField(this, "player");
    this.player = simUI.player;
  }
  updateGemPriority(ungemmedGear, passiveStats) {
    this.useExpGems = !this.player.getSpecOptions().disableExpertiseGemming;
    super.updateGemPriority(ungemmedGear, passiveStats);
  }
  calcExpTarget() {
    let expTarget = super.calcExpTarget();
    const weaponMastery = this.player.getTalents().weaponMastery;
    const hasWeaponMasteryTalent = !!weaponMastery;
    if (hasWeaponMasteryTalent) {
      expTarget -= weaponMastery * 4 * EXPERTISE_PER_QUARTER_PERCENT_REDUCTION;
    }
    return expTarget;
  }
}
export {
  WarriorSimUI as W
};
//# sourceMappingURL=sim-58e98167.chunk.js.map
