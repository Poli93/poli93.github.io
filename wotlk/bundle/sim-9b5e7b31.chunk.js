import { eP as Mage_Options_ArmorType, A as ActionId, eQ as Mage_Rotation_PrimaryFireSpell, T as TypedEvent, aU as Faction, eR as Mage_Rotation, S as Spec, bV as SavedTalents, N as Glyphs, M as MageMajorGlyph, c as MageMinorGlyph, eS as Mage_Options, aH as UnitReference, F as Consumes, dO as Flask, dR as Food, dT as Potions, dM as Conjured, $ as Profession, a2 as Stat, G as Stats, b5 as SPELL_HIT_RATING_PER_HIT_CHANCE, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, dF as APLPrepullAction, dy as APLAction, L as APLRotation, dG as APLListItem, g as getSpecIcon, u as Class, a6 as Race } from "./detailed_results-1f2cfac6.chunk.js";
import { t as makeSpecOptionsEnumIconInput, a as makeSpecOptionsNumberInput, G as makeRotationEnumInput, H as makeRotationBooleanInput, J as makeRotationNumberInput, b as makePresetGear, K as makePresetSimpleRotation, c as makePresetAPLRotation, r as registerSpecConfig, R as ReactionTime, D as DistanceFromTarget, T as TankAssignment, n as nibelungAverageCasts, I as IndividualSimUI } from "./preset_utils-6c9cf48c.chunk.js";
import { s as standardCooldownDefaults } from "./apl_utils-6c5744f5.chunk.js";
const Armor = makeSpecOptionsEnumIconInput({
  fieldName: "armor",
  values: [
    { value: Mage_Options_ArmorType.NoArmor, tooltip: "No Armor" },
    { actionId: ActionId.fromSpellId(43024), value: Mage_Options_ArmorType.MageArmor },
    { actionId: ActionId.fromSpellId(43046), value: Mage_Options_ArmorType.MoltenArmor }
  ]
});
const WaterElementalDisobeyChance = makeSpecOptionsNumberInput({
  fieldName: "waterElementalDisobeyChance",
  percent: true,
  label: "Water Ele Disobey %",
  labelTooltip: "Percent of Water Elemental actions which will fail. This represents the Water Elemental moving around or standing still instead of casting.",
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter]),
  showWhen: (player) => player.getTalents().summonWaterElemental
});
const FocusMagicUptime = makeSpecOptionsNumberInput({
  fieldName: "focusMagicPercentUptime",
  label: "Focus Magic Percent Uptime",
  labelTooltip: "Percent of uptime for Focus Magic Buddy",
  extraCssClasses: ["within-raid-sim-hide"]
});
const MageRotationConfig = {
  inputs: [
    makeRotationEnumInput({
      fieldName: "primaryFireSpell",
      label: "Primary Spell",
      values: [
        { name: "Fireball", value: Mage_Rotation_PrimaryFireSpell.Fireball },
        { name: "Frostfire Bolt", value: Mage_Rotation_PrimaryFireSpell.FrostfireBolt },
        { name: "Scorch", value: Mage_Rotation_PrimaryFireSpell.Scorch }
      ],
      showWhen: (player) => player.getTalentTree() == 1,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationBooleanInput({
      fieldName: "useIceLance",
      label: "Use Ice Lance",
      labelTooltip: "Casts Ice Lance at the end of Fingers of Frost, after using Deep Freeze.",
      showWhen: (player) => player.getTalentTree() == 2,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationNumberInput({
      fieldName: "only3ArcaneBlastStacksBelowManaPercent",
      percent: true,
      label: "Stack Arcane Blast to 3 below mana %",
      labelTooltip: "When below this mana %, AM/ABarr will be used at 3 stacks of AB instead of 4.",
      showWhen: (player) => player.getTalentTree() == 0,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationNumberInput({
      fieldName: "blastWithoutMissileBarrageAboveManaPercent",
      percent: true,
      label: "AB without Missile Barrage above mana %",
      labelTooltip: "When above this mana %, spam AB until a Missile Barrage proc occurs.",
      showWhen: (player) => player.getTalentTree() == 0,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationNumberInput({
      fieldName: "missileBarrageBelowManaPercent",
      percent: true,
      label: "Use Missile Barrage ASAP below mana %",
      labelTooltip: "When below this mana %, use Missile Barrage proc as soon as possible. Can be useful to conserve mana.",
      showWhen: (player) => player.getTalentTree() == 0,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationBooleanInput({
      fieldName: "useArcaneBarrage",
      label: "Use Arcane Barrage",
      labelTooltip: "Includes Arcane Barrage in the rotation.",
      enableWhen: (player) => player.getTalents().arcaneBarrage,
      showWhen: (player) => player.getTalentTree() == 0,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    }),
    makeRotationBooleanInput({
      fieldName: "maintainImprovedScorch",
      label: "Maintain Imp. Scorch",
      labelTooltip: "Always use Scorch when below 5 stacks, or < 4s remaining on debuff.",
      showWhen: (player) => player.getTalents().improvedScorch > 0,
      changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
    })
  ]
};
const items$m = [
  {
    id: 42553,
    enchant: 3820,
    gems: [
      41285,
      40049
    ]
  },
  {
    id: 39472
  },
  {
    id: 37673,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 41610,
    enchant: 3722
  },
  {
    id: 39492,
    enchant: 3832,
    gems: [
      39998,
      40049
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
    id: 39495,
    enchant: 3604,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 40696,
    gems: [
      40049,
      40026
    ]
  },
  {
    id: 37854,
    enchant: 3719
  },
  {
    id: 44202,
    enchant: 3606,
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
    id: 37873
  },
  {
    id: 40682
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
const PreraidArcaneGear = {
  items: items$m
};
const items$l = [
  {
    id: 40416,
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
    id: 40419,
    enchant: 3810,
    gems: [
      40051
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
    enchant: 3832,
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
    id: 40415,
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
    id: 40417,
    enchant: 3719,
    gems: [
      39998,
      40051
    ]
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
    id: 39229
  },
  {
    id: 40255
  },
  {
    id: 40396,
    enchant: 3834
  },
  {
    id: 40273
  },
  {
    id: 39426
  }
];
const P1ArcaneGear = {
  items: items$l
};
const items$k = [
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
    id: 46134,
    enchant: 3810,
    gems: [
      39998
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
    id: 46130,
    enchant: 3832,
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
    gems: [
      39998,
      39998,
      39998
    ]
  },
  {
    id: 45488,
    enchant: 3719,
    gems: [
      39998,
      40051,
      40026
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
    id: 46046,
    gems: [
      39998
    ]
  },
  {
    id: 45495,
    gems: [
      39998
    ]
  },
  {
    id: 45466
  },
  {
    id: 45518
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
const P2ArcaneGear = {
  items: items$k
};
const items$j = [
  {
    id: 47761,
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
    id: 47758,
    enchant: 3810,
    gems: [
      40133
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
    id: 46993,
    enchant: 3832,
    gems: [
      40133,
      40113,
      40155
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
    id: 47762,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 46973,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47760,
    enchant: 3719,
    gems: [
      40155,
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
    id: 47188
  },
  {
    id: 45518
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
    id: 47922
  }
];
const P3ArcaneAllianceGear = {
  items: items$j
};
const items$i = [
  {
    id: 47764,
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
    id: 47767,
    enchant: 3810,
    gems: [
      40133
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
    id: 47425,
    enchant: 3832,
    gems: [
      40133,
      40113,
      40155
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
    id: 47763,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47419,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47765,
    enchant: 3719,
    gems: [
      40155,
      40155
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
    id: 47477
  },
  {
    id: 45518
  },
  {
    id: 47422,
    enchant: 3834,
    gems: [
      40133
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
      40113
    ]
  }
];
const P3ArcaneHordeGear = {
  items: items$i
};
const items$h = [
  {
    id: 51281,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40133
    ]
  },
  {
    id: 51284,
    enchant: 3810,
    gems: [
      40153
    ]
  },
  {
    id: 50628,
    enchant: 3722,
    gems: [
      40153
    ]
  },
  {
    id: 51283,
    enchant: 3832,
    gems: [
      40113,
      40133
    ]
  },
  {
    id: 54582,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 50722,
    enchant: 3604,
    gems: [
      40153,
      40133,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 51282,
    enchant: 3872,
    gems: [
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
      40133
    ]
  },
  {
    id: 50398,
    gems: [
      40155
    ]
  },
  {
    id: 47188
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
const P4ArcaneAllianceGear = {
  items: items$h
};
const items$g = [
  {
    id: 51281,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40133
    ]
  },
  {
    id: 51284,
    enchant: 3810,
    gems: [
      40153
    ]
  },
  {
    id: 50628,
    enchant: 3722,
    gems: [
      40153
    ]
  },
  {
    id: 51283,
    enchant: 3832,
    gems: [
      40113,
      40133
    ]
  },
  {
    id: 54582,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 50722,
    enchant: 3604,
    gems: [
      40153,
      40133,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 51282,
    enchant: 3872,
    gems: [
      40133,
      40153
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
      40133
    ]
  },
  {
    id: 50398,
    gems: [
      40153
    ]
  },
  {
    id: 47188
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
const P4ArcaneHordeGear = {
  items: items$g
};
const items$f = [
  {
    id: 42553,
    enchant: 3820,
    gems: [
      41285,
      40014
    ]
  },
  {
    id: 39472
  },
  {
    id: 34210,
    enchant: 3810,
    gems: [
      40049,
      40014
    ]
  },
  {
    id: 41610,
    enchant: 3859
  },
  {
    id: 39492,
    enchant: 3832,
    gems: [
      40049,
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
    id: 39495,
    enchant: 3604,
    gems: [
      40049,
      0
    ]
  },
  {
    id: 40696,
    gems: [
      40014,
      40026
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
    id: 42644,
    gems: [
      40049
    ]
  },
  {
    id: 37873
  },
  {
    id: 40682
  },
  {
    id: 45085,
    enchant: 3834
  },
  {
    id: 40698
  },
  {
    id: 37177
  }
];
const PreraidFireGear = {
  items: items$f
};
const items$e = [
  {
    id: 40416,
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
    id: 40419,
    enchant: 3810,
    gems: [
      40049
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
    id: 40418,
    enchant: 3832,
    gems: [
      39998,
      40048
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
    id: 40415,
    enchant: 3604,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 40301,
    gems: [
      39998
    ]
  },
  {
    id: 40560,
    enchant: 3719
  },
  {
    id: 40246,
    enchant: 3606
  },
  {
    id: 40399
  },
  {
    id: 40719
  },
  {
    id: 40255
  },
  {
    id: 40432
  },
  {
    id: 40396,
    enchant: 3834
  },
  {
    id: 40273
  },
  {
    id: 39712
  }
];
const P1FireGear = {
  items: items$e
};
const items$d = [
  {
    id: 46129,
    enchant: 3820,
    gems: [
      41285,
      45883
    ]
  },
  {
    id: 45133,
    gems: [
      40048
    ]
  },
  {
    id: 46134,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 45242,
    enchant: 3722,
    gems: [
      39998
    ]
  },
  {
    id: 46130,
    enchant: 3832,
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
      40026,
      40048,
      0
    ]
  },
  {
    id: 45619,
    gems: [
      40048,
      40048,
      39998
    ]
  },
  {
    id: 46133,
    enchant: 3719,
    gems: [
      39998,
      39998
    ]
  },
  {
    id: 45537,
    enchant: 3606,
    gems: [
      39998,
      40026
    ]
  },
  {
    id: 45495,
    gems: [
      39998
    ]
  },
  {
    id: 46046,
    gems: [
      39998
    ]
  },
  {
    id: 45466
  },
  {
    id: 45518
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
const P2FireGear = {
  items: items$d
};
const items$c = [
  {
    id: 47761,
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
    id: 47758,
    enchant: 3810,
    gems: [
      40133
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
    enchant: 3832,
    gems: [
      40133,
      40153,
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
    id: 47762,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47084,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47760,
    enchant: 3719,
    gems: [
      40155,
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
    id: 47188
  },
  {
    id: 45518
  },
  {
    id: 47517,
    enchant: 3834,
    gems: [
      40155
    ]
  },
  {
    id: 47064
  },
  {
    id: 45294,
    gems: [
      40153
    ]
  }
];
const P3FireAllianceGear = {
  items: items$c
};
const items$b = [
  {
    id: 47764,
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
    id: 47767,
    enchant: 3810,
    gems: [
      40133
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
    enchant: 3832,
    gems: [
      40133,
      40155,
      40113
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
    id: 47763,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47447,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47765,
    enchant: 3719,
    gems: [
      40155,
      40155
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
    id: 47477
  },
  {
    id: 45518
  },
  {
    id: 47518,
    enchant: 3834,
    gems: [
      40155
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
const P3FireHordeGear = {
  items: items$b
};
const items$a = [
  {
    id: 51281,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40133
    ]
  },
  {
    id: 51284,
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
    id: 50629,
    enchant: 3832,
    gems: [
      40113,
      40133,
      40155
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
    id: 51280,
    enchant: 3604,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 51282,
    enchant: 3872,
    gems: [
      40133,
      40152
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
      40133
    ]
  },
  {
    id: 50398,
    gems: [
      40152
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
const P4FireAllianceGear = {
  items: items$a
};
const items$9 = [
  {
    id: 51281,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40133
    ]
  },
  {
    id: 51284,
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
    id: 50629,
    enchant: 3832,
    gems: [
      40113,
      40133,
      40152
    ]
  },
  {
    id: 50651,
    enchant: 2332,
    gems: [
      40152,
      0
    ]
  },
  {
    id: 51280,
    enchant: 3604,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 51282,
    enchant: 3872,
    gems: [
      40133,
      40152
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
      40133
    ]
  },
  {
    id: 50398,
    gems: [
      40152
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
      40152
    ]
  }
];
const P4FireHordeGear = {
  items: items$9
};
const items$8 = [
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
      40048
    ]
  },
  {
    id: 46134,
    enchant: 3810,
    gems: [
      39998
    ]
  },
  {
    id: 45618,
    enchant: 3722,
    gems: [
      39998
    ]
  },
  {
    id: 46130,
    enchant: 3832,
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
    gems: [
      40048,
      40048,
      39998
    ]
  },
  {
    id: 45488,
    enchant: 3719,
    gems: [
      39998,
      40048,
      40026
    ]
  },
  {
    id: 45537,
    enchant: 3606,
    gems: [
      39998,
      40026
    ]
  },
  {
    id: 45495,
    gems: [
      39998
    ]
  },
  {
    id: 46046,
    gems: [
      39998
    ]
  },
  {
    id: 45466
  },
  {
    id: 45518
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
const P2FfbGear = {
  items: items$8
};
const items$7 = [
  {
    id: 47761,
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
    id: 47758,
    enchant: 3810,
    gems: [
      40133
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
    id: 46993,
    enchant: 3832,
    gems: [
      40133,
      40113,
      40153
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
    id: 47762,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47084,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47760,
    enchant: 3719,
    gems: [
      40155,
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
    id: 47188
  },
  {
    id: 45518
  },
  {
    id: 47517,
    enchant: 3834,
    gems: [
      40155
    ]
  },
  {
    id: 47064
  },
  {
    id: 45294,
    gems: [
      40155
    ]
  }
];
const P3FfbAllianceGear = {
  items: items$7
};
const items$6 = [
  {
    id: 47764,
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
    id: 47767,
    enchant: 3810,
    gems: [
      40133
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
    id: 47425,
    enchant: 3832,
    gems: [
      40133,
      40113,
      40155
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
    id: 47763,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47447,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47765,
    enchant: 3719,
    gems: [
      40155,
      40155
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
    id: 47477
  },
  {
    id: 45518
  },
  {
    id: 47518,
    enchant: 3834,
    gems: [
      40155
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
const P3FfbHordeGear = {
  items: items$6
};
const items$5 = [
  {
    id: 51281,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40133
    ]
  },
  {
    id: 51284,
    enchant: 3810,
    gems: [
      40153
    ]
  },
  {
    id: 50628,
    enchant: 3722,
    gems: [
      40153
    ]
  },
  {
    id: 51283,
    enchant: 3832,
    gems: [
      40113,
      40133
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
    id: 51280,
    enchant: 3604,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 51282,
    enchant: 3872,
    gems: [
      40133,
      40152
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
      40133
    ]
  },
  {
    id: 50398,
    gems: [
      40152
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
      40152
    ]
  }
];
const P4FfbAllianceGear = {
  items: items$5
};
const items$4 = [
  {
    id: 51281,
    enchant: 3820,
    gems: [
      41285,
      40133
    ]
  },
  {
    id: 50724,
    gems: [
      40133
    ]
  },
  {
    id: 51284,
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
    id: 51283,
    enchant: 3832,
    gems: [
      40113,
      40133
    ]
  },
  {
    id: 50651,
    enchant: 2332,
    gems: [
      40152,
      0
    ]
  },
  {
    id: 51280,
    enchant: 3604,
    gems: [
      40133,
      0
    ]
  },
  {
    id: 50613,
    enchant: 3601,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 51282,
    enchant: 3872,
    gems: [
      40133,
      40152
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
      40133
    ]
  },
  {
    id: 50398,
    gems: [
      40152
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
      40152
    ]
  }
];
const P4FfbHordeGear = {
  items: items$4
};
const items$3 = [
  {
    id: 40416,
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
    id: 40419,
    enchant: 3810,
    gems: [
      40051
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
    id: 40418,
    enchant: 3832,
    gems: [
      39998,
      40048
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
    id: 40415,
    enchant: 3604,
    gems: [
      39998,
      0
    ]
  },
  {
    id: 40301,
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
    id: 40255
  },
  {
    id: 40432
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
const P1FrostGear = {
  items: items$3
};
const items$2 = [
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
    id: 46134,
    enchant: 3810,
    gems: [
      39998
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
    id: 46130,
    enchant: 3832,
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
    gems: [
      40049,
      40049,
      39998
    ]
  },
  {
    id: 45488,
    enchant: 3719,
    gems: [
      39998,
      40051,
      40026
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
    id: 46046,
    gems: [
      39998
    ]
  },
  {
    id: 45495,
    gems: [
      39998
    ]
  },
  {
    id: 45466
  },
  {
    id: 45518
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
const P2FrostGear = {
  items: items$2
};
const items$1 = [
  {
    id: 47761,
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
    id: 47758,
    enchant: 3810,
    gems: [
      40133
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
    enchant: 3832,
    gems: [
      40133,
      40153,
      40155
    ]
  },
  {
    id: 47208,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 47762,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 46973,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47760,
    enchant: 3719,
    gems: [
      40155,
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
      40133
    ]
  },
  {
    id: 46046,
    gems: [
      40155
    ]
  },
  {
    id: 47188
  },
  {
    id: 45518
  },
  {
    id: 47517,
    enchant: 3834,
    gems: [
      40155
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
      40113
    ]
  }
];
const P3FrostAllianceGear = {
  items: items$1
};
const items = [
  {
    id: 47764,
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
    id: 47767,
    enchant: 3810,
    gems: [
      40133
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
    enchant: 3832,
    gems: [
      40133,
      40155,
      40155
    ]
  },
  {
    id: 47485,
    enchant: 2332,
    gems: [
      40155,
      0
    ]
  },
  {
    id: 47763,
    enchant: 3604,
    gems: [
      40113,
      0
    ]
  },
  {
    id: 47419,
    gems: [
      40133,
      40113,
      40113
    ]
  },
  {
    id: 47765,
    enchant: 3719,
    gems: [
      40155,
      40155
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
    id: 46046,
    gems: [
      40113
    ]
  },
  {
    id: 47477
  },
  {
    id: 45518
  },
  {
    id: 47422,
    enchant: 3834,
    gems: [
      40155
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
      40113
    ]
  }
];
const P3FrostHordeGear = {
  items
};
const type$6 = "TypeAPL";
const prepullActions$6 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 55342
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
        not: {
          val: {
            auraIsActive: {
              auraId: {
                spellId: 12472
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26297
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
                spellId: 12472
              }
            }
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
        not: {
          val: {
            auraIsActive: {
              auraId: {
                spellId: 12472
              }
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
          op: "OpLt",
          lhs: {
            auraNumStacks: {
              auraId: {
                spellId: 36032
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
          spellId: 42897
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 44401
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42846
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
            currentManaPercent: {}
          },
          rhs: {
            "const": {
              val: "25%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 12051
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
            currentManaPercent: {}
          },
          rhs: {
            "const": {
              val: "25%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42897
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42846
        }
      }
    }
  }
];
const ArcaneApl = {
  type: type$6,
  prepullActions: prepullActions$6,
  priorityList: priorityList$6
};
const type$5 = "TypeAPL";
const prepullActions$5 = [];
const priorityList$5 = [
  {
    action: {
      autocastOtherCooldowns: {}
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42921
        }
      }
    }
  }
];
const ArcaneAoeApl = {
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
          spellId: 55342
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
        auraShouldRefresh: {
          auraId: {
            spellId: 12873
          },
          maxOverlap: {
            "const": {
              val: "4s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42859
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 44448
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42891
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
                    val: "12s"
                  }
                }
              }
            }
          ]
        }
      },
      multidot: {
        spellId: {
          spellId: 55360
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
          op: "OpLe",
          lhs: {
            remainingTime: {}
          },
          rhs: {
            spellCastTime: {
              spellId: {
                spellId: 42859
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42873
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
              val: "4s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42859
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42833
        }
      }
    }
  }
];
const FireApl = {
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
          spellId: 55342
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
        auraShouldRefresh: {
          auraId: {
            spellId: 12873
          },
          maxOverlap: {
            "const": {
              val: "4s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42859
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 44448
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42891
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
                      spellId: 55360
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
          spellId: 55360
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
            spellCastTime: {
              spellId: {
                spellId: 42859
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42873
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
              val: "3.5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42859
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 47610
        }
      }
    }
  }
];
const FrostFireApl = {
  type: type$3,
  prepullActions: prepullActions$3,
  priorityList: priorityList$3
};
const type$2 = "TypeAPL";
const prepullActions$2 = [];
const priorityList$2 = [
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
          spellId: 55360
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 54741
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 42926,
                      tag: 9
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
          spellId: 42926,
          tag: 9
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
                  spellId: 54741
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 42925,
                      tag: 8
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
          spellId: 42925,
          tag: 8
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
                  dotIsActive: {
                    spellId: {
                      spellId: 42926,
                      tag: 9
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
                      spellId: 42925,
                      tag: 8
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
          spellId: 42950
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
                  dotIsActive: {
                    spellId: {
                      spellId: 42926,
                      tag: 9
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
                      spellId: 42925,
                      tag: 8
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
          spellId: 42945
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
                spellId: 42926,
                tag: 9
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42926,
          tag: 9
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
                spellId: 42925,
                tag: 8
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42925,
          tag: 8
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 44448
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42891
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42921
        }
      }
    }
  }
];
const FireAoeApl = {
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
          spellId: 55342
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
            auraIsActive: {
              auraId: {
                spellId: 12472
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 26297
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
                spellId: 12472
              }
            }
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
        cmp: {
          op: "OpLe",
          lhs: {
            currentManaPercent: {}
          },
          rhs: {
            "const": {
              val: "25%"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 12051
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 44545
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 44572
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActiveWithReactionTime: {
          auraId: {
            spellId: 44549
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47610
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 42842
        }
      }
    }
  }
];
const FrostApl = {
  type: type$1,
  prepullActions: prepullActions$1,
  priorityList: priorityList$1
};
const type = "TypeAPL";
const prepullActions = [];
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
          spellId: 42939
        }
      }
    }
  }
];
const FrostAoeApl = {
  type,
  prepullActions,
  priorityList
};
const ARCANE_PRERAID_PRESET = makePresetGear("Arcane Preraid Preset", PreraidArcaneGear, { talentTree: 0 });
const ARCANE_P1_PRESET = makePresetGear("Arcane P1 Preset", P1ArcaneGear, { talentTree: 0 });
const ARCANE_P2_PRESET = makePresetGear("Arcane P2 Preset", P2ArcaneGear, { talentTree: 0 });
const ARCANE_P3_PRESET_ALLIANCE = makePresetGear("Arcane P3 Preset [A]", P3ArcaneAllianceGear, { talentTree: 0, faction: Faction.Alliance });
const ARCANE_P3_PRESET_HORDE = makePresetGear("Arcane P3 Preset [H]", P3ArcaneHordeGear, { talentTree: 0, faction: Faction.Horde });
const ARCANE_P4_PRESET_ALLIANCE = makePresetGear("Arcane P4 Preset [A]", P4ArcaneAllianceGear, { talentTree: 0, faction: Faction.Alliance });
const ARCANE_P4_PRESET_HORDE = makePresetGear("Arcane P4 Preset [H]", P4ArcaneHordeGear, { talentTree: 0, faction: Faction.Horde });
const FIRE_PRERAID_PRESET = makePresetGear("Fire Preraid Preset", PreraidFireGear, { talentTree: 1 });
const FIRE_P1_PRESET = makePresetGear("Fire P1 Preset", P1FireGear, { talentTree: 1 });
const FIRE_P2_PRESET = makePresetGear("Fire P2 Preset", P2FireGear, { talentTree: 1, customCondition: (player) => !player.getTalents().icyVeins });
const FIRE_P3_PRESET_ALLIANCE = makePresetGear("Fire P3 Preset [A]", P3FireAllianceGear, { talentTree: 1, faction: Faction.Alliance, customCondition: (player) => !player.getTalents().icyVeins });
const FIRE_P3_PRESET_HORDE = makePresetGear("Fire P3 Preset [H]", P3FireHordeGear, { talentTree: 1, faction: Faction.Horde, customCondition: (player) => !player.getTalents().icyVeins });
const FIRE_P4_PRESET_ALLIANCE = makePresetGear("Fire P4 Preset [A]", P4FireAllianceGear, { talentTree: 1, faction: Faction.Alliance, customCondition: (player) => !player.getTalents().icyVeins });
const FIRE_P4_PRESET_HORDE = makePresetGear("Fire P4 Preset [H]", P4FireHordeGear, { talentTree: 1, faction: Faction.Horde, customCondition: (player) => !player.getTalents().icyVeins });
const FFB_P2_PRESET = makePresetGear("FFB P2 Preset", P2FfbGear, { talentTree: 1, customCondition: (player) => player.getTalents().icyVeins });
const FFB_P3_PRESET_ALLIANCE = makePresetGear("FFB P3 Preset [A]", P3FfbAllianceGear, { talentTree: 1, customCondition: (player) => player.getTalents().icyVeins });
const FFB_P3_PRESET_HORDE = makePresetGear("FFB P3 Preset [H]", P3FfbHordeGear, { talentTree: 1, customCondition: (player) => player.getTalents().icyVeins });
const FFB_P4_PRESET_ALLIANCE = makePresetGear("FFB P4 Preset [A]", P4FfbAllianceGear, { talentTree: 1, customCondition: (player) => player.getTalents().icyVeins });
const FFB_P4_PRESET_HORDE = makePresetGear("FFB P4 Preset [H]", P4FfbHordeGear, { talentTree: 1, customCondition: (player) => player.getTalents().icyVeins });
const FROST_P1_PRESET = makePresetGear("Frost P1 Preset", P1FrostGear, { talentTree: 2 });
const FROST_P2_PRESET = makePresetGear("Frost P2 Preset", P2FrostGear, { talentTree: 2 });
const FROST_P3_PRESET_ALLIANCE = makePresetGear("Frost P3 Preset [A]", P3FrostAllianceGear, { talentTree: 2, faction: Faction.Alliance });
const FROST_P3_PRESET_HORDE = makePresetGear("Frost P3 Preset [H]", P3FrostHordeGear, { talentTree: 2, faction: Faction.Horde });
const DefaultSimpleRotation = Mage_Rotation.create({
  only3ArcaneBlastStacksBelowManaPercent: 0.15,
  blastWithoutMissileBarrageAboveManaPercent: 0.2,
  missileBarrageBelowManaPercent: 0,
  useArcaneBarrage: false,
  primaryFireSpell: Mage_Rotation_PrimaryFireSpell.Fireball,
  maintainImprovedScorch: false,
  useIceLance: false
});
const ROTATION_PRESET_SIMPLE = makePresetSimpleRotation("Simple Default", Spec.SpecMage, DefaultSimpleRotation);
const ARCANE_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Arcane", ArcaneApl, { talentTree: 0 });
const ARCANE_ROTATION_PRESET_AOE = makePresetAPLRotation("Arcane AOE", ArcaneAoeApl, { talentTree: 0 });
const FIRE_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Fire", FireApl, { talentTree: 1 });
const FROSTFIRE_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Frostfire", FrostFireApl, { talentTree: 1 });
const FIRE_ROTATION_PRESET_AOE = makePresetAPLRotation("Fire AOE", FireAoeApl, { talentTree: 1 });
const FROST_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Frost", FrostApl, { talentTree: 2 });
const FROST_ROTATION_PRESET_AOE = makePresetAPLRotation("Frost AOE", FrostAoeApl, { talentTree: 2 });
const ArcaneTalents = {
  name: "Arcane",
  data: SavedTalents.create({
    talentsString: "23000513310033015032310250532-03-023303001",
    glyphs: Glyphs.create({
      major1: MageMajorGlyph.GlyphOfArcaneBlast,
      major2: MageMajorGlyph.GlyphOfArcaneMissiles,
      major3: MageMajorGlyph.GlyphOfMoltenArmor,
      minor1: MageMinorGlyph.GlyphOfSlowFall,
      minor2: MageMinorGlyph.GlyphOfFrostWard,
      minor3: MageMinorGlyph.GlyphOfBlastWave
    })
  })
};
const FireTalents = {
  name: "Fire",
  data: SavedTalents.create({
    talentsString: "23000503110003-0055030012303331053120301351",
    glyphs: Glyphs.create({
      major1: MageMajorGlyph.GlyphOfFireball,
      major2: MageMajorGlyph.GlyphOfMoltenArmor,
      major3: MageMajorGlyph.GlyphOfLivingBomb,
      minor1: MageMinorGlyph.GlyphOfSlowFall,
      minor2: MageMinorGlyph.GlyphOfFrostWard,
      minor3: MageMinorGlyph.GlyphOfBlastWave
    })
  })
};
const Phase3FireTalents = {
  name: "Fire Phase 3",
  data: SavedTalents.create({
    talentsString: "23002303310003-0055030012303330053120300351",
    glyphs: Glyphs.create({
      major1: MageMajorGlyph.GlyphOfFireball,
      major2: MageMajorGlyph.GlyphOfMoltenArmor,
      major3: MageMajorGlyph.GlyphOfLivingBomb,
      minor1: MageMinorGlyph.GlyphOfArcaneIntellect,
      minor2: MageMinorGlyph.GlyphOfSlowFall
    })
  })
};
const FrostfireTalents = {
  name: "Frostfire",
  data: SavedTalents.create({
    talentsString: "-2305032012303331053120311351-023303031",
    glyphs: Glyphs.create({
      major1: MageMajorGlyph.GlyphOfFrostfire,
      major2: MageMajorGlyph.GlyphOfMoltenArmor,
      major3: MageMajorGlyph.GlyphOfLivingBomb,
      minor1: MageMinorGlyph.GlyphOfSlowFall,
      minor2: MageMinorGlyph.GlyphOfFrostWard,
      minor3: MageMinorGlyph.GlyphOfBlastWave
    })
  })
};
const FrostTalents = {
  name: "Frost",
  data: SavedTalents.create({
    talentsString: "23000503110003--0533030310233100030152231351",
    glyphs: Glyphs.create({
      major1: MageMajorGlyph.GlyphOfFrostbolt,
      major2: MageMajorGlyph.GlyphOfEternalWater,
      major3: MageMajorGlyph.GlyphOfMoltenArmor,
      minor1: MageMinorGlyph.GlyphOfSlowFall,
      minor2: MageMinorGlyph.GlyphOfFrostWard,
      minor3: MageMinorGlyph.GlyphOfBlastWave
    })
  })
};
const DefaultFFBOptions = Mage_Options.create({
  armor: Mage_Options_ArmorType.MoltenArmor
});
const DefaultFireOptions = Mage_Options.create({
  armor: Mage_Options_ArmorType.MoltenArmor,
  focusMagicPercentUptime: 99,
  focusMagicTarget: UnitReference.create()
});
const DefaultFireConsumes = Consumes.create({
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFirecrackerSalmon,
  defaultPotion: Potions.PotionOfSpeed,
  defaultConjured: Conjured.ConjuredFlameCap,
  prepopPotion: Potions.PotionOfSpeed
});
Mage_Options.create({
  armor: Mage_Options_ArmorType.MoltenArmor,
  focusMagicTarget: UnitReference.create(),
  waterElementalDisobeyChance: 0.1
});
Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  defaultConjured: Conjured.ConjuredFlameCap,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast
});
const DefaultArcaneOptions = Mage_Options.create({
  armor: Mage_Options_ArmorType.MoltenArmor,
  focusMagicPercentUptime: 99,
  focusMagicTarget: UnitReference.create()
});
const DefaultArcaneConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfSpeed,
  defaultConjured: Conjured.ConjuredDarkRune,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFirecrackerSalmon
});
const OtherDefaults = {
  distanceFromTarget: 20,
  profession1: Profession.Engineering,
  profession2: Profession.Tailoring,
  nibelungAverageCasts: 11
};
const SPEC_CONFIG = registerSpecConfig(Spec.SpecMage, {
  cssClass: "mage-sim-ui",
  cssScheme: "mage",
  knownIssues: [],
  epStats: [
    Stat.StatIntellect,
    Stat.StatSpirit,
    Stat.StatSpellPower,
    Stat.StatSpellHit,
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
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste,
    Stat.StatMP5,
    Stat.StatResilience
  ],
  modifyDisplayStats: (player) => {
    let stats = new Stats();
    if (player.getTalentTree() === 0) {
      stats = stats.addStat(Stat.StatSpellHit, player.getTalents().arcaneFocus * 1 * SPELL_HIT_RATING_PER_HIT_CHANCE);
    }
    return {
      talents: stats
    };
  },
  defaults: {
    gear: FIRE_P3_PRESET_HORDE.gear,
    epWeights: Stats.fromMap({
      [Stat.StatIntellect]: 0.48,
      [Stat.StatSpirit]: 0.42,
      [Stat.StatSpellPower]: 1,
      [Stat.StatSpellHit]: 0.38,
      [Stat.StatSpellCrit]: 0.58,
      [Stat.StatSpellHaste]: 0.94,
      [Stat.StatMP5]: 0.09
    }),
    consumes: DefaultFireConsumes,
    talents: Phase3FireTalents.data,
    specOptions: DefaultFireOptions,
    other: OtherDefaults,
    raidBuffs: RaidBuffs.create({
      giftOfTheWild: TristateEffect.TristateEffectImproved,
      bloodlust: true,
      manaSpringTotem: TristateEffect.TristateEffectImproved,
      wrathOfAirTotem: true,
      divineSpirit: true,
      swiftRetribution: true,
      sanctifiedRetribution: true,
      demonicPactSp: 500,
      moonkinAura: TristateEffect.TristateEffectImproved,
      arcaneBrilliance: true
    }),
    partyBuffs: PartyBuffs.create({
      manaTideTotems: 1
    }),
    individualBuffs: IndividualBuffs.create({
      blessingOfKings: true,
      blessingOfWisdom: TristateEffect.TristateEffectImproved,
      innervates: 0,
      vampiricTouch: true,
      focusMagic: true
    }),
    debuffs: Debuffs.create({
      judgementOfWisdom: true,
      misery: true,
      ebonPlaguebringer: true,
      shadowMastery: true,
      heartOfTheCrusader: true
    })
  },
  playerIconInputs: [
    Armor
  ],
  rotationInputs: MageRotationConfig,
  includeBuffDebuffInputs: [],
  excludeBuffDebuffInputs: [],
  otherInputs: {
    inputs: [
      FocusMagicUptime,
      WaterElementalDisobeyChance,
      ReactionTime,
      DistanceFromTarget,
      TankAssignment,
      nibelungAverageCasts
    ]
  },
  encounterPicker: {
    showExecuteProportion: true
  },
  presets: {
    rotations: [
      ROTATION_PRESET_SIMPLE,
      ARCANE_ROTATION_PRESET_DEFAULT,
      FIRE_ROTATION_PRESET_DEFAULT,
      FROSTFIRE_ROTATION_PRESET_DEFAULT,
      FROST_ROTATION_PRESET_DEFAULT,
      ARCANE_ROTATION_PRESET_AOE,
      FIRE_ROTATION_PRESET_AOE,
      FROST_ROTATION_PRESET_AOE
    ],
    talents: [
      ArcaneTalents,
      FireTalents,
      FrostfireTalents,
      FrostTalents,
      Phase3FireTalents
    ],
    gear: [
      ARCANE_PRERAID_PRESET,
      FIRE_PRERAID_PRESET,
      ARCANE_P1_PRESET,
      FIRE_P1_PRESET,
      FROST_P1_PRESET,
      ARCANE_P2_PRESET,
      FIRE_P2_PRESET,
      FROST_P2_PRESET,
      FFB_P2_PRESET,
      ARCANE_P3_PRESET_ALLIANCE,
      ARCANE_P3_PRESET_HORDE,
      FROST_P3_PRESET_ALLIANCE,
      FROST_P3_PRESET_HORDE,
      FIRE_P3_PRESET_ALLIANCE,
      FIRE_P3_PRESET_HORDE,
      FFB_P3_PRESET_ALLIANCE,
      FFB_P3_PRESET_HORDE,
      FIRE_P4_PRESET_HORDE,
      FIRE_P4_PRESET_ALLIANCE,
      FFB_P4_PRESET_HORDE,
      FFB_P4_PRESET_ALLIANCE,
      ARCANE_P4_PRESET_HORDE,
      ARCANE_P4_PRESET_ALLIANCE
    ]
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    const numTargets = player.sim.encounter.targets.length;
    if (numTargets > 3) {
      if (talentTree == 0) {
        return ARCANE_ROTATION_PRESET_AOE.rotation.rotation;
      } else if (talentTree == 1) {
        return FIRE_ROTATION_PRESET_AOE.rotation.rotation;
      } else {
        return FROST_ROTATION_PRESET_AOE.rotation.rotation;
      }
    } else if (talentTree == 0) {
      return ARCANE_ROTATION_PRESET_DEFAULT.rotation.rotation;
    } else if (talentTree == 1) {
      if (player.getTalents().iceShards > 0) {
        return FROSTFIRE_ROTATION_PRESET_DEFAULT.rotation.rotation;
      }
      return FIRE_ROTATION_PRESET_DEFAULT.rotation.rotation;
    } else {
      return FROST_ROTATION_PRESET_DEFAULT.rotation.rotation;
    }
  },
  simpleRotation: (player, simple, cooldowns) => {
    let [prepullActions2, actions] = standardCooldownDefaults(cooldowns);
    const prepullMirrorImage = APLPrepullAction.fromJsonString(`{"action":{"castSpell":{"spellId":{"spellId":55342}}},"doAtValue":{"const":{"val":"-2s"}}}`);
    const berserking = APLAction.fromJsonString(`{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"spellId":26297}}}`);
    const hyperspeedAcceleration = APLAction.fromJsonString(`{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"spellId":54758}}}`);
    const combatPot = APLAction.fromJsonString(`{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}`);
    const evocation = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpLe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"25%"}}}},"castSpell":{"spellId":{"spellId":12051}}}`);
    const arcaneBlastBelowStacks = APLAction.fromJsonString(`{"condition":{"or":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"auraId":{"spellId":36032}}},"rhs":{"const":{"val":"4"}}}},{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"auraId":{"spellId":36032}}},"rhs":{"const":{"val":"3"}}}},{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(simple.only3ArcaneBlastStacksBelowManaPercent * 100).toFixed(0)}%"}}}}]}}]}},"castSpell":{"spellId":{"spellId":42897}}}`);
    const arcaneMissilesWithMissileBarrageBelowMana = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44401}}},{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(simple.missileBarrageBelowManaPercent * 100).toFixed(0)}%"}}}}]}},"castSpell":{"spellId":{"spellId":42846}}}`);
    const arcaneMisslesWithMissileBarrage = APLAction.fromJsonString(`{"condition":{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44401}}},"castSpell":{"spellId":{"spellId":42846}}}`);
    const arcaneBlastAboveMana = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(simple.blastWithoutMissileBarrageAboveManaPercent * 100).toFixed(0)}%"}}}},"castSpell":{"spellId":{"spellId":42897}}}`);
    const arcaneMissiles = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":42846}}}`);
    const arcaneBarrage = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":44781}}}`);
    const maintainImpScorch = APLAction.fromJsonString(`{"condition":{"auraShouldRefresh":{"auraId":{"spellId":12873},"maxOverlap":{"const":{"val":"4s"}}}},"castSpell":{"spellId":{"spellId":42859}}}`);
    const pyroWithHotStreak = APLAction.fromJsonString(`{"condition":{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44448}}},"castSpell":{"spellId":{"spellId":42891}}}`);
    const livingBomb = APLAction.fromJsonString(`{"condition":{"and":{"vals":[{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"12s"}}}}]}},"multidot":{"spellId":{"spellId":55360},"maxDots":10,"maxOverlap":{"const":{"val":"0ms"}}}}`);
    const cheekyFireBlastFinisher = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"spellCastTime":{"spellId":{"spellId":42859}}}}},"castSpell":{"spellId":{"spellId":42873}}}`);
    const scorchFinisher = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"4s"}}}},"castSpell":{"spellId":{"spellId":42859}}}`);
    const fireball = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":42833}}}`);
    const frostfireBolt = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":47610}}}`);
    const scorch = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":42859}}}`);
    const deepFreeze = APLAction.fromJsonString(`{"condition":{"auraIsActive":{"auraId":{"spellId":44545}}},"castSpell":{"spellId":{"spellId":44572}}}`);
    const frostfireBoltWithBrainFreeze = APLAction.fromJsonString(`{"condition":{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44549}}},"castSpell":{"spellId":{"spellId":47610}}}`);
    const frostbolt = APLAction.fromJsonString(`{"castSpell":{"spellId":{"spellId":42842}}}`);
    const iceLance = APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"auraId":{"spellId":44545}}},"rhs":{"const":{"val":"1"}}}},"castSpell":{"spellId":{"spellId":42914}}}`);
    prepullActions2.push(prepullMirrorImage);
    if (player.getTalents().improvedScorch > 0 && simple.maintainImprovedScorch) {
      actions.push(maintainImpScorch);
    }
    const talentTree = player.getTalentTree();
    if (talentTree == 0) {
      actions.push(...[
        berserking,
        hyperspeedAcceleration,
        combatPot,
        simple.missileBarrageBelowManaPercent > 0 ? arcaneMissilesWithMissileBarrageBelowMana : null,
        arcaneBlastBelowStacks,
        arcaneMisslesWithMissileBarrage,
        evocation,
        arcaneBlastAboveMana,
        simple.useArcaneBarrage ? arcaneBarrage : null,
        arcaneMissiles
      ].filter((a) => a));
    } else if (talentTree == 1) {
      actions.push(...[
        pyroWithHotStreak,
        livingBomb,
        cheekyFireBlastFinisher,
        scorchFinisher,
        simple.primaryFireSpell == Mage_Rotation_PrimaryFireSpell.Fireball ? fireball : simple.primaryFireSpell == Mage_Rotation_PrimaryFireSpell.FrostfireBolt ? frostfireBolt : scorch
      ].filter((a) => a));
    } else if (talentTree == 2) {
      actions.push(...[
        berserking,
        hyperspeedAcceleration,
        evocation,
        deepFreeze,
        frostfireBoltWithBrainFreeze,
        simple.useIceLance ? iceLance : null,
        frostbolt
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
      spec: Spec.SpecMage,
      tooltip: "Arcane Mage",
      defaultName: "Arcane",
      iconUrl: getSpecIcon(Class.ClassMage, 0),
      talents: ArcaneTalents.data,
      specOptions: DefaultArcaneOptions,
      consumes: DefaultArcaneConsumes,
      otherDefaults: OtherDefaults,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceGnome,
        [Faction.Horde]: Race.RaceTroll
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: ARCANE_P1_PRESET.gear,
          2: ARCANE_P2_PRESET.gear,
          3: ARCANE_P3_PRESET_ALLIANCE.gear,
          4: ARCANE_P4_PRESET_ALLIANCE.gear
        },
        [Faction.Horde]: {
          1: ARCANE_P1_PRESET.gear,
          2: ARCANE_P2_PRESET.gear,
          3: ARCANE_P3_PRESET_HORDE.gear,
          4: ARCANE_P4_PRESET_HORDE.gear
        }
      }
    },
    {
      spec: Spec.SpecMage,
      tooltip: "TTW Fire Mage",
      defaultName: "TTW Fire",
      iconUrl: getSpecIcon(Class.ClassMage, 1),
      talents: FireTalents.data,
      specOptions: DefaultFireOptions,
      consumes: DefaultFireConsumes,
      otherDefaults: OtherDefaults,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceGnome,
        [Faction.Horde]: Race.RaceTroll
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: FIRE_P1_PRESET.gear,
          2: FIRE_P2_PRESET.gear,
          3: FIRE_P3_PRESET_ALLIANCE.gear,
          4: FIRE_P4_PRESET_ALLIANCE.gear
        },
        [Faction.Horde]: {
          1: FIRE_P1_PRESET.gear,
          2: FIRE_P2_PRESET.gear,
          3: FIRE_P3_PRESET_HORDE.gear,
          4: FIRE_P4_PRESET_HORDE.gear
        }
      }
    },
    {
      spec: Spec.SpecMage,
      tooltip: "FFB Fire Mage",
      defaultName: "FFB Fire",
      iconUrl: "https://wow.zamimg.com/images/wow/icons/medium/ability_mage_frostfirebolt.jpg",
      talents: FrostfireTalents.data,
      specOptions: DefaultFFBOptions,
      consumes: DefaultFireConsumes,
      otherDefaults: OtherDefaults,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceGnome,
        [Faction.Horde]: Race.RaceTroll
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: FIRE_P1_PRESET.gear,
          2: FFB_P2_PRESET.gear,
          3: FFB_P3_PRESET_ALLIANCE.gear,
          4: FFB_P4_PRESET_ALLIANCE.gear
        },
        [Faction.Horde]: {
          1: FIRE_P1_PRESET.gear,
          2: FFB_P2_PRESET.gear,
          3: FFB_P3_PRESET_HORDE.gear,
          4: FFB_P4_PRESET_HORDE.gear
        }
      }
    }
  ]
});
class MageSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  MageSimUI as M
};
//# sourceMappingURL=sim-9b5e7b31.chunk.js.map
