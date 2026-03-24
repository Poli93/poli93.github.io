var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { eJ as Hunter_Options_Ammo, A as ActionId, eK as Hunter_Rotation_RotationType, eL as Hunter_Rotation_StingType, T as TypedEvent, eM as Hunter_Rotation, S as Spec, bV as SavedTalents, N as Glyphs, H as HunterMajorGlyph, b as HunterMinorGlyph, eN as Hunter_Options, dW as Hunter_Options_PetType, F as Consumes, dS as Potions, dN as Flask, dQ as Food, dR as PetFood, dX as HunterPetTalents, eh as getTalentPoints, a2 as Stat, a1 as PseudoStat, G as Stats, a7 as MELEE_CRIT_RATING_PER_CRIT_CHANCE, V as ItemSlot, a6 as Race, b2 as RangedWeaponType, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, dx as APLAction, L as APLRotation, dF as APLListItem, g as getSpecIcon, u as Class, aU as Faction } from "./detailed_results-4a530cbe.chunk.js";
import { t as makeSpecOptionsEnumIconInput, a1 as makePetTypeInputConfig, a as makeSpecOptionsNumberInput, m as makeSpecOptionsBooleanIconInput, G as makeRotationEnumInput, H as makeRotationBooleanInput, J as makeRotationNumberInput, b as makePresetGear, K as makePresetSimpleRotation, c as makePresetAPLRotation, a2 as ferocityDefault, a3 as ferocityBMDefault, r as registerSpecConfig, a4 as protoToTalentString, a5 as getPetTalentsConfig, j as SpicedMammothTreats, l as StaminaBuff, k as SpellDamageDebuff, T as TankAssignment, D as DistanceFromTarget, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-fdaa2ac8.chunk.js";
import { P as PhysicalDPSGemOptimizer } from "./suggest_gems_action-209188d4.chunk.js";
import { s as standardCooldownDefaults } from "./apl_utils-4305ab4c.chunk.js";
const WeaponAmmo = makeSpecOptionsEnumIconInput({
  fieldName: "ammo",
  numColumns: 2,
  values: [
    { value: Hunter_Options_Ammo.AmmoNone, tooltip: "No Ammo" },
    { actionId: ActionId.fromItemId(52021), value: Hunter_Options_Ammo.IcebladeArrow },
    { actionId: ActionId.fromItemId(41165), value: Hunter_Options_Ammo.SaroniteRazorheads },
    { actionId: ActionId.fromItemId(41586), value: Hunter_Options_Ammo.TerrorshaftArrow },
    { actionId: ActionId.fromItemId(31737), value: Hunter_Options_Ammo.TimelessArrow },
    { actionId: ActionId.fromItemId(34581), value: Hunter_Options_Ammo.MysteriousArrow },
    { actionId: ActionId.fromItemId(33803), value: Hunter_Options_Ammo.AdamantiteStinger },
    { actionId: ActionId.fromItemId(28056), value: Hunter_Options_Ammo.BlackflightArrow }
  ]
});
const PetTypeInput = makePetTypeInputConfig();
const PetUptime = makeSpecOptionsNumberInput({
  fieldName: "petUptime",
  label: "Pet Uptime (%)",
  labelTooltip: "Percent of the fight duration for which your pet will be alive.",
  percent: true
});
const UseHuntersMark = makeSpecOptionsBooleanIconInput({
  fieldName: "useHuntersMark",
  id: ActionId.fromSpellId(53338)
});
const SniperTrainingUptime = makeSpecOptionsNumberInput({
  fieldName: "sniperTrainingUptime",
  label: "ST Uptime (%)",
  labelTooltip: "Uptime for the Sniper Training talent, as a percent of the fight duration.",
  percent: true,
  showWhen: (player) => player.getTalents().sniperTraining > 0,
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter])
});
const TimeToTrapWeaveMs = makeSpecOptionsNumberInput({
  fieldName: "timeToTrapWeaveMs",
  label: "Trap Weave Time",
  labelTooltip: "Amount of time for Explosive Trap, in milliseconds, between when you start moving towards the boss and when you re-engage your ranged autos."
});
const TimeToMeleeWeaveMs = makeSpecOptionsNumberInput({
  fieldName: "timeToMeleeWeaveMs",
  label: "Melee Weave Time",
  labelTooltip: "Amount of time for Melee Weaving, in milliseconds, between when you start moving towards the boss and when you re-engage your ranged autos."
});
const HunterRotationConfig = {
  inputs: [
    makeRotationEnumInput({
      fieldName: "type",
      label: "Type",
      values: [
        { name: "Single Target", value: Hunter_Rotation_RotationType.SingleTarget },
        { name: "AOE", value: Hunter_Rotation_RotationType.Aoe }
      ]
    }),
    makeRotationEnumInput({
      fieldName: "sting",
      label: "Sting",
      labelTooltip: "Maintains the selected Sting on the primary target.",
      values: [
        { name: "None", value: Hunter_Rotation_StingType.NoSting },
        { name: "Scorpid Sting", value: Hunter_Rotation_StingType.ScorpidSting },
        { name: "Serpent Sting", value: Hunter_Rotation_StingType.SerpentSting }
      ],
      showWhen: (player) => player.getSimpleRotation().type == Hunter_Rotation_RotationType.SingleTarget
    }),
    makeRotationBooleanInput({
      fieldName: "trapWeave",
      label: "Trap Weave",
      labelTooltip: "Uses Explosive Trap at appropriate times. Note that selecting this will disable Black Arrow because they share a CD."
    }),
    makeRotationBooleanInput({
      fieldName: "allowExplosiveShotDownrank",
      label: "Allow ES Downrank",
      labelTooltip: "Weaves Explosive Shot Rank 3 during LNL procs. This works because the rank 3 and rank 4 dots can stack.",
      showWhen: (player) => player.getSimpleRotation().type != Hunter_Rotation_RotationType.Custom && player.getTalents().explosiveShot && player.getTalents().lockAndLoad > 0,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationBooleanInput({
      fieldName: "multiDotSerpentSting",
      label: "Multi-Dot Serpent Sting",
      labelTooltip: "Casts Serpent Sting on multiple targets",
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationNumberInput({
      fieldName: "viperStartManaPercent",
      label: "Viper Start Mana %",
      labelTooltip: "Switch to Aspect of the Viper when mana goes below this amount.",
      percent: true
    }),
    makeRotationNumberInput({
      fieldName: "viperStopManaPercent",
      label: "Viper Stop Mana %",
      labelTooltip: "Switch back to Aspect of the Hawk when mana goes above this amount.",
      percent: true
    })
  ]
};
const items$b = [
  {
    id: 42551,
    enchant: 3817,
    gems: [
      41398,
      42143
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
    id: 43566,
    enchant: 3605
  },
  {
    id: 39579,
    enchant: 3832,
    gems: [
      39997,
      49110
    ]
  },
  {
    id: 37170,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 39582,
    enchant: 3604,
    gems: [
      40014,
      0
    ]
  },
  {
    id: 37407,
    enchant: 3601,
    gems: [
      42143
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
      42143,
      39997
    ]
  },
  {
    id: 37685
  },
  {
    id: 42642,
    gems: [
      40044
    ]
  },
  {
    id: 40684
  },
  {
    id: 44253
  },
  {
    id: 44249,
    enchant: 3827
  },
  {},
  {
    id: 37191,
    enchant: 3608
  }
];
const PreraidMMGear = {
  items: items$b
};
const items$a = [
  {
    id: 40543,
    enchant: 3817,
    gems: [
      41398,
      42143
    ]
  },
  {
    id: 44664,
    gems: [
      42143
    ]
  },
  {
    id: 40507,
    enchant: 3808,
    gems: [
      39997
    ]
  },
  {
    id: 40403,
    enchant: 3605
  },
  {
    id: 43998,
    enchant: 3832,
    gems: [
      42143,
      39997
    ]
  },
  {
    id: 40282,
    enchant: 3845,
    gems: [
      39997,
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
    id: 40275,
    enchant: 3601,
    gems: [
      39997
    ]
  },
  {
    id: 40506,
    enchant: 3823,
    gems: [
      39997,
      49110
    ]
  },
  {
    id: 40549,
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
    id: 40388,
    enchant: 3827
  },
  {},
  {
    id: 40385,
    enchant: 3608
  }
];
const P1MMGear = {
  items: items$a
};
const items$9 = [
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
      42143
    ]
  },
  {
    id: 45300,
    enchant: 3808,
    gems: [
      40043
    ]
  },
  {
    id: 46032,
    enchant: 3605,
    gems: [
      42143,
      40043
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      39997,
      39997,
      39997
    ]
  },
  {
    id: 45869,
    enchant: 3845,
    gems: [
      40044,
      0
    ]
  },
  {
    id: 45444,
    enchant: 3604,
    gems: [
      42143,
      39997,
      0
    ]
  },
  {
    id: 45467,
    enchant: 3601,
    gems: [
      39997
    ]
  },
  {
    id: 45536,
    enchant: 3823,
    gems: [
      39997,
      39997,
      39997
    ]
  },
  {
    id: 45244,
    enchant: 3606,
    gems: [
      39997,
      39997
    ]
  },
  {
    id: 45608,
    gems: [
      39997
    ]
  },
  {
    id: 46322,
    gems: [
      39997
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
    enchant: 3827,
    gems: [
      45879,
      39997
    ]
  },
  {},
  {
    id: 45570,
    enchant: 3608
  }
];
const P2MMGear = {
  items: items$9
};
const items$8 = [
  {
    id: 48262,
    enchant: 3817,
    gems: [
      41398,
      40147
    ]
  },
  {
    id: 47060,
    gems: [
      42143
    ]
  },
  {
    id: 48260,
    enchant: 3808,
    gems: [
      40112
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40112
    ]
  },
  {
    id: 46965,
    enchant: 3832,
    gems: [
      40112,
      40112,
      40112
    ]
  },
  {
    id: 47074,
    enchant: 3845,
    gems: [
      40147,
      0
    ]
  },
  {
    id: 48263,
    enchant: 3604,
    gems: [
      40148,
      0
    ]
  },
  {
    id: 47153,
    gems: [
      40148,
      42143,
      42143
    ]
  },
  {
    id: 48261,
    enchant: 3823,
    gems: [
      49110,
      40112
    ]
  },
  {
    id: 47109,
    enchant: 3606,
    gems: [
      40147,
      40147
    ]
  },
  {
    id: 47075,
    gems: [
      40112
    ]
  },
  {
    id: 45608,
    gems: [
      40112
    ]
  },
  {
    id: 47131
  },
  {
    id: 45931
  },
  {
    id: 47239,
    enchant: 3827,
    gems: [
      40147,
      40112
    ]
  },
  {},
  {
    id: 47521,
    enchant: 3608,
    gems: [
      40147
    ]
  }
];
const P3MMGear = {
  items: items$8
};
const items$7 = [
  {
    id: 51286,
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
    id: 51288,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      42153
    ]
  },
  {
    id: 51289,
    enchant: 3832,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 50655,
    enchant: 3845,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 51285,
    enchant: 3604,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 50688,
    enchant: 3601,
    gems: [
      40148,
      42153,
      42153
    ]
  },
  {
    id: 50645,
    enchant: 3823,
    gems: [
      49110,
      40117,
      40147
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40148,
      40148
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
      40148
    ]
  },
  {
    id: 50363
  },
  {
    id: 47131
  },
  {
    id: 50735,
    enchant: 3827,
    gems: [
      40117,
      40117,
      40117
    ]
  },
  {},
  {
    id: 50733,
    enchant: 3608,
    gems: [
      40117
    ]
  }
];
const P4MMGear = {
  items: items$7
};
const items$6 = [
  {
    id: 51286,
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
    id: 51288,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      42153
    ]
  },
  {
    id: 51289,
    enchant: 3832,
    gems: [
      40112,
      40112
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
    id: 51285,
    enchant: 3604,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 50688,
    enchant: 3601,
    gems: [
      40148,
      42153,
      42153
    ]
  },
  {
    id: 50645,
    enchant: 3823,
    gems: [
      49110,
      40112,
      40147
    ]
  },
  {
    id: 54577,
    enchant: 3606,
    gems: [
      40148,
      40148
    ]
  },
  {
    id: 50618,
    gems: [
      40117
    ]
  },
  {
    id: 54576,
    gems: [
      40148
    ]
  },
  {
    id: 50363
  },
  {
    id: 54590
  },
  {
    id: 50735,
    enchant: 3247,
    gems: [
      40112,
      40112,
      40112
    ]
  },
  {},
  {
    id: 50733,
    enchant: 3608,
    gems: [
      40117
    ]
  }
];
const P5MMGear = {
  items: items$6
};
const items$5 = [
  {
    id: 42551,
    enchant: 3817,
    gems: [
      41398,
      42143
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
    id: 43406,
    enchant: 3605
  },
  {
    id: 39579,
    enchant: 3832,
    gems: [
      39997,
      49110
    ]
  },
  {
    id: 37170,
    enchant: 3845,
    gems: [
      0
    ]
  },
  {
    id: 39582,
    enchant: 3604,
    gems: [
      39997,
      0
    ]
  },
  {
    id: 37407,
    enchant: 3601,
    gems: [
      42143
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
      42143,
      39997
    ]
  },
  {
    id: 37685
  },
  {
    id: 42642,
    gems: [
      39997
    ]
  },
  {
    id: 40684
  },
  {
    id: 44253
  },
  {
    id: 44249,
    enchant: 3827
  },
  {},
  {
    id: 37191,
    enchant: 3608
  }
];
const PreraidSVGear = {
  items: items$5
};
const items$4 = [
  {
    id: 40505,
    enchant: 3817,
    gems: [
      41398,
      42143
    ]
  },
  {
    id: 44664,
    gems: [
      42143
    ]
  },
  {
    id: 40507,
    enchant: 3808,
    gems: [
      39997
    ]
  },
  {
    id: 40403,
    enchant: 3605
  },
  {
    id: 43998,
    enchant: 3832,
    gems: [
      42143,
      39997
    ]
  },
  {
    id: 40282,
    enchant: 3845,
    gems: [
      39997,
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
    id: 39762,
    enchant: 3601,
    gems: [
      39997
    ]
  },
  {
    id: 40331,
    enchant: 3823,
    gems: [
      39997,
      49110
    ]
  },
  {
    id: 40549,
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
    id: 40388,
    enchant: 3827
  },
  {},
  {
    id: 40385,
    enchant: 3608
  }
];
const P1SVGear = {
  items: items$4
};
const items$3 = [
  {
    id: 45610,
    enchant: 3817,
    gems: [
      41398,
      40023
    ]
  },
  {
    id: 45517,
    gems: [
      39997
    ]
  },
  {
    id: 45300,
    enchant: 3808,
    gems: [
      39997
    ]
  },
  {
    id: 46032,
    enchant: 3605,
    gems: [
      39997,
      40044
    ]
  },
  {
    id: 45473,
    enchant: 3832,
    gems: [
      39997,
      39997,
      45879
    ]
  },
  {
    id: 45869,
    enchant: 3845,
    gems: [
      40043,
      0
    ]
  },
  {
    id: 45444,
    enchant: 3604,
    gems: [
      39997,
      40023,
      0
    ]
  },
  {
    id: 46095,
    gems: [
      42143,
      42143,
      42143
    ]
  },
  {
    id: 45536,
    enchant: 3823,
    gems: [
      39997,
      39997,
      39997
    ]
  },
  {
    id: 45244,
    enchant: 3606,
    gems: [
      39997,
      40023
    ]
  },
  {
    id: 45608,
    gems: [
      39997
    ]
  },
  {
    id: 46322,
    gems: [
      39997
    ]
  },
  {
    id: 44253
  },
  {
    id: 45931
  },
  {
    id: 45613,
    enchant: 3827,
    gems: [
      39997,
      39997
    ]
  },
  {},
  {
    id: 45570,
    enchant: 3608
  }
];
const P2SVGear = {
  items: items$3
};
const items$2 = [
  {
    id: 48262,
    enchant: 3817,
    gems: [
      41398,
      40147
    ]
  },
  {
    id: 47060,
    gems: [
      42143
    ]
  },
  {
    id: 48260,
    enchant: 3808,
    gems: [
      40112
    ]
  },
  {
    id: 47545,
    enchant: 3605,
    gems: [
      40112
    ]
  },
  {
    id: 48264,
    enchant: 3832,
    gems: [
      40112,
      40147
    ]
  },
  {
    id: 47074,
    enchant: 3845,
    gems: [
      40148,
      0
    ]
  },
  {
    id: 48263,
    enchant: 3604,
    gems: [
      40148,
      0
    ]
  },
  {
    id: 47153,
    gems: [
      40147,
      42143,
      42143
    ]
  },
  {
    id: 47191,
    enchant: 3823,
    gems: [
      49110,
      40147,
      40112
    ]
  },
  {
    id: 47109,
    enchant: 3606,
    gems: [
      40112,
      40112
    ]
  },
  {
    id: 47075,
    gems: [
      40112
    ]
  },
  {
    id: 45608,
    gems: [
      40112
    ]
  },
  {
    id: 47131
  },
  {
    id: 44253
  },
  {
    id: 47239,
    enchant: 3827,
    gems: [
      40147,
      40112
    ]
  },
  {},
  {
    id: 47521,
    enchant: 3608,
    gems: [
      40112
    ]
  }
];
const P3SVGear = {
  items: items$2
};
const items$1 = [
  {
    id: 51286,
    enchant: 3817,
    gems: [
      41398,
      40112
    ]
  },
  {
    id: 50633,
    gems: [
      40112
    ]
  },
  {
    id: 51288,
    enchant: 3808,
    gems: [
      40112
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      42143
    ]
  },
  {
    id: 51289,
    enchant: 3832,
    gems: [
      40112,
      40112
    ]
  },
  {
    id: 50655,
    enchant: 3845,
    gems: [
      40112,
      0
    ]
  },
  {
    id: 51285,
    enchant: 3604,
    gems: [
      40112,
      0
    ]
  },
  {
    id: 50688,
    enchant: 3601,
    gems: [
      40148,
      42143,
      42143
    ]
  },
  {
    id: 50645,
    enchant: 3823,
    gems: [
      49110,
      40112,
      40150
    ]
  },
  {
    id: 50607,
    enchant: 3606,
    gems: [
      40148,
      40148
    ]
  },
  {
    id: 50618,
    gems: [
      45879
    ]
  },
  {
    id: 50402,
    gems: [
      40148
    ]
  },
  {
    id: 50363
  },
  {
    id: 47131
  },
  {
    id: 50735,
    enchant: 3827,
    gems: [
      40112,
      40112,
      40112
    ]
  },
  {},
  {
    id: 50733,
    enchant: 3608,
    gems: [
      40112
    ]
  }
];
const P4SVGear = {
  items: items$1
};
const items = [
  {
    id: 51286,
    enchant: 3817,
    gems: [
      41398,
      40112
    ]
  },
  {
    id: 50633,
    gems: [
      40112
    ]
  },
  {
    id: 51288,
    enchant: 3808,
    gems: [
      40112
    ]
  },
  {
    id: 47546,
    enchant: 3605,
    gems: [
      42143
    ]
  },
  {
    id: 51289,
    enchant: 3832,
    gems: [
      40112,
      40112
    ]
  },
  {
    id: 50655,
    enchant: 3845,
    gems: [
      40112,
      0
    ]
  },
  {
    id: 51285,
    enchant: 3604,
    gems: [
      40112,
      0
    ]
  },
  {
    id: 50688,
    enchant: 3601,
    gems: [
      40148,
      42143,
      42143
    ]
  },
  {
    id: 50645,
    enchant: 3823,
    gems: [
      49110,
      40112,
      40150
    ]
  },
  {
    id: 54577,
    enchant: 3606,
    gems: [
      40148,
      40148
    ]
  },
  {
    id: 50618,
    gems: [
      45879
    ]
  },
  {
    id: 54576,
    gems: [
      40148
    ]
  },
  {
    id: 50363
  },
  {
    id: 54590
  },
  {
    id: 50735,
    enchant: 3827,
    gems: [
      40112,
      40112,
      40112
    ]
  },
  {},
  {
    id: 50733,
    enchant: 3608,
    gems: [
      40112
    ]
  }
];
const P5SVGear = {
  items
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
      condition: {
        cmp: {
          op: "OpGt",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "10s"
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
        and: {
          vals: [
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 34074
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "10%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 34074
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
                      spellId: 61847
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "30%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 61847
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61006
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
                spellId: 49067
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49067
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
                      spellId: 49001
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
                    val: "6s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49001
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49050
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49048
        }
      }
    }
  },
  {
    hide: true,
    action: {
      castSpell: {
        spellId: {
          spellId: 49045
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    }
  }
];
const BmApl = {
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
      condition: {
        cmp: {
          op: "OpGt",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "10s"
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
        and: {
          vals: [
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 34074
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "10%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 34074
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
                      spellId: 61847
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "30%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 61847
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 34490
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61006
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
                spellId: 49001
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49001
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
                spellId: 49067
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49067
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 53209
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49050
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49048
        }
      }
    }
  },
  {
    hide: true,
    action: {
      castSpell: {
        spellId: {
          spellId: 49045
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    }
  }
];
const MmApl = {
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
          spellId: 61847
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-25s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49067
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
          spellId: 53517
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
        val: "-1.401s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1.4s"
      }
    }
  }
];
const priorityList$3 = [
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
              val: "1.35s"
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
          op: "OpGt",
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
      castSpell: {
        spellId: {
          itemId: 42641
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
              val: "61s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 41119
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
              val: "10s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 34026
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
              val: "1.35s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 34490
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
          itemId: 41119
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
                      spellId: 53209
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
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 49050
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
                      op: "OpGt",
                      lhs: {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 49048
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "6s"
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 3045
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "167s"
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
                      spellId: 34490
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "13s"
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
                      spellId: 49067
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "23s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 23989
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
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "15%"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 61847
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
          spellId: 61847
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
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "10%"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 34074
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
          spellId: 34074
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
            currentManaPercent: {}
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
          itemId: 20520
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
            spellTimeToReady: {
              spellId: {
                spellId: 61006
              }
            }
          },
          rhs: {
            "const": {
              val: "0.21s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 61006
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
                spellId: 49001
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49001
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
                spellId: 49067
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49067
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
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 53209
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "0.15s"
                  }
                }
              }
            },
            {
              spellCanCast: {
                spellId: {
                  spellId: 53209
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 53209
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
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49050
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "0.15s"
                  }
                }
              }
            },
            {
              spellCanCast: {
                spellId: {
                  spellId: 49050
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49050
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    }
  },
  {
    hide: true,
    action: {
      condition: {
        or: {
          vals: [
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49045
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "0.2s"
                  }
                }
              }
            },
            {
              spellCanCast: {
                spellId: {
                  spellId: 49045
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49045
        }
      }
    }
  }
];
const MmAdvApl = {
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
      condition: {
        cmp: {
          op: "OpGt",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "10s"
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
        and: {
          vals: [
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 34074
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "10%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 34074
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
                      spellId: 61847
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "30%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 61847
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61006
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
                spellId: 60053
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 60053
        }
      }
    }
  },
  {
    action: {
      condition: {
        dotIsActive: {
          spellId: {
            spellId: 60053
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 60052
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
                spellId: 49067
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49067
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
                      spellId: 49001
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
                    val: "6s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49001
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 63672
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49050
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49048
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    }
  }
];
const SvApl = {
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
          spellId: 49067
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-24s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 61847
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
          otherId: "OtherActionPotion"
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1.4s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-1.4s"
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
          op: "OpLt",
          lhs: {
            currentManaPercent: {}
          },
          rhs: {
            "const": {
              val: "20%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          itemId: 20520
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
                      spellId: 61847
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "15%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 61847
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
                      spellId: 34074
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "5%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 34074
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
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 61006
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "250ms"
                  }
                }
              }
            }
          ]
        }
      },
      waitUntil: {
        condition: {
          spellIsReady: {
            spellId: {
              spellId: 61006
            }
          }
        }
      }
    }
  },
  {
    action: {
      condition: {
        spellIsReady: {
          spellId: {
            spellId: 61006
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 61006
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
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 60053
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "500ms"
                  }
                }
              }
            }
          ]
        }
      },
      waitUntil: {
        condition: {
          spellIsReady: {
            spellId: {
              spellId: 60053
            }
          }
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
                spellId: 60053
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 60053
        }
      }
    }
  },
  {
    action: {
      condition: {
        dotIsActive: {
          spellId: {
            spellId: 60053
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 60052
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
                spellId: 49067
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49067,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        spellIsReady: {
          spellId: {
            spellId: 63672
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 63672
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
                      spellId: 49001
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
                    val: "6s"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49001
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
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49050
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "250ms"
                  }
                }
              }
            }
          ]
        }
      },
      waitUntil: {
        condition: {
          spellIsReady: {
            spellId: {
              spellId: 49050
            }
          }
        }
      }
    }
  },
  {
    action: {
      condition: {
        spellIsReady: {
          spellId: {
            spellId: 49050
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49050
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
                op: "OpLt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49048
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
      waitUntil: {
        condition: {
          spellIsReady: {
            spellId: {
              spellId: 49048
            }
          }
        }
      }
    }
  },
  {
    action: {
      condition: {
        spellIsReady: {
          spellId: {
            spellId: 49048
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49048
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49052
        }
      }
    }
  }
];
const SvAdvApl = {
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
      condition: {
        cmp: {
          op: "OpGt",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "10s"
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
        and: {
          vals: [
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 34074
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "10%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 34074
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
                      spellId: 61847
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  currentManaPercent: {}
                },
                rhs: {
                  "const": {
                    val: "30%"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 61847
        }
      }
    }
  },
  {
    hide: true,
    action: {
      multidot: {
        spellId: {
          spellId: 49001
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
        not: {
          val: {
            dotIsActive: {
              spellId: {
                spellId: 49067
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          tag: 1,
          spellId: 49067
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 58434
        }
      }
    }
  }
];
const AoeApl = {
  type,
  prepullActions,
  priorityList
};
const MM_PRERAID_PRESET = makePresetGear("MM PreRaid Preset", PreraidMMGear, { talentTrees: [0, 1] });
const MM_P1_PRESET = makePresetGear("MM P1 Preset", P1MMGear, { talentTrees: [0, 1] });
const MM_P2_PRESET = makePresetGear("MM P2 Preset", P2MMGear, { talentTrees: [0, 1] });
const MM_P3_PRESET = makePresetGear("MM P3 Preset", P3MMGear, { talentTrees: [0, 1] });
const MM_P4_PRESET = makePresetGear("MM P4 Preset", P4MMGear, { talentTrees: [0, 1] });
const MM_P5_PRESET = makePresetGear("MM P5 Preset", P5MMGear, { talentTrees: [0, 1] });
const SV_PRERAID_PRESET = makePresetGear("SV PreRaid Preset", PreraidSVGear, { talentTree: 2 });
const SV_P1_PRESET = makePresetGear("SV P1 Preset", P1SVGear, { talentTree: 2 });
const SV_P2_PRESET = makePresetGear("SV P2 Preset", P2SVGear, { talentTree: 2 });
const SV_P3_PRESET = makePresetGear("SV P3 Preset", P3SVGear, { talentTree: 2 });
const SV_P4_PRESET = makePresetGear("SV P4 Preset", P4SVGear, { talentTree: 2 });
const SV_P5_PRESET = makePresetGear("SV P5 Preset", P5SVGear, { talentTree: 2 });
const DefaultSimpleRotation = Hunter_Rotation.create({
  type: Hunter_Rotation_RotationType.SingleTarget,
  sting: Hunter_Rotation_StingType.SerpentSting,
  trapWeave: true,
  viperStartManaPercent: 0.1,
  viperStopManaPercent: 0.3,
  multiDotSerpentSting: true,
  allowExplosiveShotDownrank: true
});
const ROTATION_PRESET_SIMPLE_DEFAULT = makePresetSimpleRotation("Simple Default", Spec.SpecHunter, DefaultSimpleRotation);
const ROTATION_PRESET_BM = makePresetAPLRotation("BM", BmApl, { talentTree: 0 });
const ROTATION_PRESET_MM = makePresetAPLRotation("MM", MmApl, { talentTree: 1 });
const ROTATION_PRESET_MM_ADVANCED = makePresetAPLRotation("MM (Advanced)", MmAdvApl, { talentTree: 1 });
const ROTATION_PRESET_SV = makePresetAPLRotation("SV", SvApl, { talentTree: 2 });
const ROTATION_PRESET_SV_ADVANCED = makePresetAPLRotation("SV (Advanced)", SvAdvApl, { talentTree: 2 });
const ROTATION_PRESET_AOE = makePresetAPLRotation("AOE", AoeApl);
const BeastMasteryTalents = {
  name: "Beast Mastery",
  data: SavedTalents.create({
    talentsString: "51200201505112243120531251-025305101",
    glyphs: Glyphs.create({
      major1: HunterMajorGlyph.GlyphOfBestialWrath,
      major2: HunterMajorGlyph.GlyphOfSteadyShot,
      major3: HunterMajorGlyph.GlyphOfSerpentSting,
      minor1: HunterMinorGlyph.GlyphOfFeignDeath,
      minor2: HunterMinorGlyph.GlyphOfRevivePet,
      minor3: HunterMinorGlyph.GlyphOfMendPet
    })
  })
};
const MarksmanTalents = {
  name: "Marksman",
  data: SavedTalents.create({
    talentsString: "502-025335101030013233135031051-5000032",
    glyphs: Glyphs.create({
      major1: HunterMajorGlyph.GlyphOfSerpentSting,
      major2: HunterMajorGlyph.GlyphOfSteadyShot,
      major3: HunterMajorGlyph.GlyphOfExplosiveTrap,
      minor1: HunterMinorGlyph.GlyphOfFeignDeath,
      minor2: HunterMinorGlyph.GlyphOfRevivePet,
      minor3: HunterMinorGlyph.GlyphOfMendPet
    })
  })
};
const SurvivalTalents = {
  name: "Survival",
  data: SavedTalents.create({
    talentsString: "-005305101-5000032500033330531135301331",
    glyphs: Glyphs.create({
      major1: HunterMajorGlyph.GlyphOfSerpentSting,
      major2: HunterMajorGlyph.GlyphOfExplosiveTrap,
      major3: HunterMajorGlyph.GlyphOfKillShot,
      minor1: HunterMinorGlyph.GlyphOfFeignDeath,
      minor2: HunterMinorGlyph.GlyphOfRevivePet,
      minor3: HunterMinorGlyph.GlyphOfMendPet
    })
  })
};
const DefaultOptions = Hunter_Options.create({
  ammo: Hunter_Options_Ammo.SaroniteRazorheads,
  useHuntersMark: true,
  petType: Hunter_Options_PetType.Wolf,
  petTalents: ferocityDefault,
  petUptime: 1,
  sniperTrainingUptime: 0.9,
  timeToTrapWeaveMs: 2e3,
  timeToMeleeWeaveMs: 200
});
const BMDefaultOptions = Hunter_Options.create({
  ammo: Hunter_Options_Ammo.SaroniteRazorheads,
  useHuntersMark: true,
  petType: Hunter_Options_PetType.Wolf,
  petTalents: ferocityBMDefault,
  petUptime: 1,
  sniperTrainingUptime: 0.9,
  timeToTrapWeaveMs: 2e3,
  timeToMeleeWeaveMs: 200
});
const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodFishFeast,
  petFood: PetFood.PetFoodSpicedMammothTreats
});
const OtherDefaults = {
  distanceFromTarget: 20
};
const SPEC_CONFIG = registerSpecConfig(Spec.SpecHunter, {
  cssClass: "hunter-sim-ui",
  cssScheme: "hunter",
  knownIssues: [],
  warnings: [
    (simUI) => {
      return {
        updateOn: TypedEvent.onAny([simUI.player.talentsChangeEmitter, simUI.player.specOptionsChangeEmitter]),
        getContent: () => {
          const petIsExotic = [
            Hunter_Options_PetType.Chimaera,
            Hunter_Options_PetType.CoreHound,
            Hunter_Options_PetType.Devilsaur,
            Hunter_Options_PetType.Silithid,
            Hunter_Options_PetType.SpiritBeast,
            Hunter_Options_PetType.Worm
          ].includes(simUI.player.getSpecOptions().petType);
          const isBM = simUI.player.getTalents().beastMastery;
          if (petIsExotic && !isBM) {
            return "Cannot use exotic pets without the Beast Mastery talent.";
          } else {
            return "";
          }
        }
      };
    },
    (simUI) => {
      return {
        updateOn: TypedEvent.onAny([simUI.player.talentsChangeEmitter, simUI.player.specOptionsChangeEmitter]),
        getContent: () => {
          const specOptions = simUI.player.getSpecOptions();
          const petTalents = specOptions.petTalents || HunterPetTalents.create();
          const petTalentString = protoToTalentString(petTalents, getPetTalentsConfig(specOptions.petType));
          const talentPoints = getTalentPoints(petTalentString);
          const isBM = simUI.player.getTalents().beastMastery;
          const maxPoints = isBM ? 20 : 16;
          if (talentPoints == 0) {
            return "";
          } else if (talentPoints < maxPoints) {
            return "Unspent pet talent points.";
          } else if (talentPoints > maxPoints) {
            return "More than 16 points spent in pet talents, but Beast Mastery is not talented.";
          } else {
            return "";
          }
        }
      };
    }
  ],
  epStats: [
    Stat.StatStamina,
    Stat.StatIntellect,
    Stat.StatAgility,
    Stat.StatRangedAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatMP5
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatRangedDps
  ],
  epReferenceStat: Stat.StatRangedAttackPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatStamina,
    Stat.StatAgility,
    Stat.StatIntellect,
    Stat.StatRangedAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatMP5,
    Stat.StatResilience
  ],
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    stats = stats.addStat(Stat.StatMeleeCrit, player.getTalents().lethalShots * 1 * MELEE_CRIT_RATING_PER_CRIT_CHANCE);
    const rangedWeapon = player.getEquippedItem(ItemSlot.ItemSlotRanged);
    if (rangedWeapon?.enchant?.effectId == 3608) {
      stats = stats.addStat(Stat.StatMeleeCrit, 40);
    }
    if (player.getRace() == Race.RaceDwarf && rangedWeapon?.item.rangedWeaponType == RangedWeaponType.RangedWeaponTypeGun) {
      stats = stats.addStat(Stat.StatMeleeCrit, 1 * MELEE_CRIT_RATING_PER_CRIT_CHANCE);
    }
    if (player.getRace() == Race.RaceTroll && rangedWeapon?.item.rangedWeaponType == RangedWeaponType.RangedWeaponTypeBow) {
      stats = stats.addStat(Stat.StatMeleeCrit, 1 * MELEE_CRIT_RATING_PER_CRIT_CHANCE);
    }
    return {
      talents: stats
    };
  },
  defaults: {
    gear: SV_P1_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatStamina]: 0.5,
      [Stat.StatAgility]: 2.65,
      [Stat.StatIntellect]: 1.1,
      [Stat.StatRangedAttackPower]: 1,
      [Stat.StatMeleeHit]: 2,
      [Stat.StatMeleeCrit]: 1.5,
      [Stat.StatMeleeHaste]: 1.39,
      [Stat.StatArmorPenetration]: 1.32
    }, {
      [PseudoStat.PseudoStatRangedDps]: 6.32
    }),
    consumes: DefaultConsumes,
    talents: SurvivalTalents.data,
    specOptions: DefaultOptions,
    other: OtherDefaults,
    raidBuffs: RaidBuffs.create({
      arcaneBrilliance: true,
      powerWordFortitude: TristateEffect.TristateEffectImproved,
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      bloodlust: true,
      strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
      windfuryTotem: TristateEffect.TristateEffectImproved,
      battleShout: TristateEffect.TristateEffectImproved,
      leaderOfThePack: TristateEffect.TristateEffectImproved,
      sanctifiedRetribution: true,
      unleashedRage: true,
      moonkinAura: TristateEffect.TristateEffectImproved
    }),
    partyBuffs: PartyBuffs.create({}),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfWisdom: 2,
      blessingOfMight: 2,
      vampiricTouch: true
    }),
    debuffs: Debuffs.create({
      sunderArmor: true,
      faerieFire: TristateEffect.TristateEffectImproved,
      judgementOfWisdom: true,
      curseOfElements: true,
      heartOfTheCrusader: true,
      savageCombat: true
    })
  },
  playerIconInputs: [
    PetTypeInput,
    WeaponAmmo,
    UseHuntersMark
  ],
  rotationInputs: HunterRotationConfig,
  petConsumeInputs: [
    SpicedMammothTreats
  ],
  includeBuffDebuffInputs: [
    StaminaBuff,
    SpellDamageDebuff
  ],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      PetUptime,
      TimeToTrapWeaveMs,
      TimeToMeleeWeaveMs,
      SniperTrainingUptime,
      TankAssignment,
      DistanceFromTarget,
      InFrontOfTarget
    ]
  },
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      BeastMasteryTalents,
      MarksmanTalents,
      SurvivalTalents
    ],
    rotations: [
      ROTATION_PRESET_SIMPLE_DEFAULT,
      ROTATION_PRESET_BM,
      ROTATION_PRESET_MM,
      ROTATION_PRESET_MM_ADVANCED,
      ROTATION_PRESET_SV,
      ROTATION_PRESET_SV_ADVANCED,
      ROTATION_PRESET_AOE
    ],
    gear: [
      MM_PRERAID_PRESET,
      MM_P1_PRESET,
      MM_P2_PRESET,
      MM_P3_PRESET,
      MM_P4_PRESET,
      MM_P5_PRESET,
      SV_PRERAID_PRESET,
      SV_P1_PRESET,
      SV_P2_PRESET,
      SV_P3_PRESET,
      SV_P4_PRESET,
      SV_P5_PRESET
    ]
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    const numTargets = player.sim.encounter.targets.length;
    if (numTargets >= 4) {
      return ROTATION_PRESET_AOE.rotation.rotation;
    } else if (talentTree == 0) {
      return ROTATION_PRESET_BM.rotation.rotation;
    } else if (talentTree == 1) {
      return ROTATION_PRESET_MM.rotation.rotation;
    } else {
      return ROTATION_PRESET_SV.rotation.rotation;
    }
  },
  simpleRotation: (player, simple, cooldowns) => {
    let [prepullActions2, actions] = standardCooldownDefaults(cooldowns);
    const serpentSting = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6s"}}}},"multidot":{"spellId":{"spellId":49001},"maxDots":${simple.multiDotSerpentSting ? 3 : 1},"maxOverlap":{"const":{"val":"0ms"}}}}`);
    const scorpidSting = APLAction.fromJsonString(`{"condition":{"auraShouldRefresh":{"auraId":{"spellId":3043},"maxOverlap":{"const":{"val":"0ms"}}}},"castSpell":{"spellId":{"spellId":3043}}}`);
    const trapWeave = APLAction.fromJsonString(`{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":49067}}}}},"castSpell":{"spellId":{"tag":1,"spellId":49067}}}`);
    const volley = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":58434}}}`);
    const killShot = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":61006}}}`);
    const aimedShot = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":49050}}}`);
    const multiShot = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":49048}}}`);
    const steadyShot = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":49052}}}`);
    const silencingShot = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":34490}}}`);
    const chimeraShot = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":53209}}}`);
    const blackArrow = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":63672}}}`);
    const explosiveShot4 = APLAction.fromJsonString(`{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":60053}}}}},"castSpell":{"spellId":{"spellId":60053}}}`);
    const explosiveShot3 = APLAction.fromJsonString(`{"condition":{"dotIsActive":{"spellId":{"spellId":60053}}},"castSpell":{"spellId":{"spellId":60052}}}`);
    if (simple.viperStartManaPercent != 0) {
      actions.push(APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":34074}}}}},{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(simple.viperStartManaPercent * 100).toFixed(0)}%"}}}}]}},"castSpell":{"spellId":{"spellId":34074}}}`));
    }
    if (simple.viperStopManaPercent != 0) {
      actions.push(APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":61847}}}}},{"cmp":{"op":"OpGt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(simple.viperStopManaPercent * 100).toFixed(0)}%"}}}}]}},"castSpell":{"spellId":{"spellId":61847}}}`));
    }
    const talentTree = player.getTalentTree();
    if (simple.type == Hunter_Rotation_RotationType.Aoe) {
      actions.push(...[
        simple.sting == Hunter_Rotation_StingType.ScorpidSting ? scorpidSting : null,
        simple.sting == Hunter_Rotation_StingType.SerpentSting ? serpentSting : null,
        simple.trapWeave ? trapWeave : null,
        volley
      ].filter((a) => a));
    } else if (talentTree == 0) {
      actions.push(...[
        killShot,
        simple.trapWeave ? trapWeave : null,
        simple.sting == Hunter_Rotation_StingType.ScorpidSting ? scorpidSting : null,
        simple.sting == Hunter_Rotation_StingType.SerpentSting ? serpentSting : null,
        aimedShot,
        multiShot,
        steadyShot
      ].filter((a) => a));
    } else if (talentTree == 1) {
      actions.push(...[
        silencingShot,
        killShot,
        simple.sting == Hunter_Rotation_StingType.ScorpidSting ? scorpidSting : null,
        simple.sting == Hunter_Rotation_StingType.SerpentSting ? serpentSting : null,
        simple.trapWeave ? trapWeave : null,
        chimeraShot,
        aimedShot,
        multiShot,
        steadyShot
      ].filter((a) => a));
    } else if (talentTree == 2) {
      actions.push(...[
        killShot,
        explosiveShot4,
        simple.allowExplosiveShotDownrank ? explosiveShot3 : null,
        simple.trapWeave ? trapWeave : null,
        simple.sting == Hunter_Rotation_StingType.ScorpidSting ? scorpidSting : null,
        simple.sting == Hunter_Rotation_StingType.SerpentSting ? serpentSting : null,
        blackArrow,
        aimedShot,
        multiShot,
        steadyShot
      ].filter((a) => a));
    }
    return APLRotation.create({
      prepullActions: prepullActions2,
      priorityList: actions.map((action) => APLListItem.create({
        action
      }))
    });
  },
  raidSimPresets: [
    {
      spec: Spec.SpecHunter,
      tooltip: "Beast Mastery Hunter",
      defaultName: "Beast Mastery",
      iconUrl: getSpecIcon(Class.ClassHunter, 0),
      talents: BeastMasteryTalents.data,
      specOptions: BMDefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceNightElf,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: MM_P1_PRESET.gear,
          2: MM_P2_PRESET.gear,
          3: MM_P3_PRESET.gear,
          4: MM_P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: MM_P1_PRESET.gear,
          2: MM_P2_PRESET.gear,
          3: MM_P3_PRESET.gear,
          4: MM_P4_PRESET.gear
        }
      }
    },
    {
      spec: Spec.SpecHunter,
      tooltip: "Marksmanship Hunter",
      defaultName: "Marksmanship",
      iconUrl: getSpecIcon(Class.ClassHunter, 1),
      talents: MarksmanTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceNightElf,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: MM_P1_PRESET.gear,
          2: MM_P2_PRESET.gear,
          3: MM_P3_PRESET.gear,
          4: MM_P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: MM_P1_PRESET.gear,
          2: MM_P2_PRESET.gear,
          3: MM_P3_PRESET.gear,
          4: MM_P4_PRESET.gear
        }
      }
    },
    {
      spec: Spec.SpecHunter,
      tooltip: "Survival Hunter",
      defaultName: "Survival",
      iconUrl: getSpecIcon(Class.ClassHunter, 2),
      talents: SurvivalTalents.data,
      specOptions: DefaultOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceNightElf,
        [Faction.Horde]: Race.RaceOrc
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: SV_P1_PRESET.gear,
          2: SV_P2_PRESET.gear,
          3: SV_P3_PRESET.gear,
          4: SV_P4_PRESET.gear
        },
        [Faction.Horde]: {
          1: SV_P1_PRESET.gear,
          2: SV_P2_PRESET.gear,
          3: SV_P3_PRESET.gear,
          4: SV_P4_PRESET.gear
        }
      }
    }
  ]
});
class HunterSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
    new HunterGemOptimizer(this);
  }
}
class HunterGemOptimizer extends PhysicalDPSGemOptimizer {
  constructor(simUI) {
    super(simUI, true, false, true, false);
    __publicField(this, "player");
    __publicField(this, "arpSlop", 4);
    __publicField(this, "hitSlop", 11);
    this.player = simUI.player;
  }
  detectArpStackConfiguration(ungemmedGear) {
    this.useArpGems = this.player.getTalentTree() === 1 && this.arpTarget > 1e3 && this.passiveArp > 648;
    return super.detectArpStackConfiguration(ungemmedGear);
  }
}
export {
  HunterSimUI as H
};
//# sourceMappingURL=sim-f1f73b1e.chunk.js.map
