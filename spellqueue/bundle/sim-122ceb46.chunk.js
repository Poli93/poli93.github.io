import { aG as UnitReference_Type, aH as UnitReference, T as TypedEvent, q as DeathknightMajorGlyph, bV as SavedTalents, N as Glyphs, t as DeathknightMinorGlyph, em as Deathknight_Options, F as Consumes, dN as Flask, dQ as Food, dS as Potions, dR as PetFood, dM as Explosive, a2 as Stat, a1 as PseudoStat, G as Stats, aE as RaidBuffs, bc as TristateEffect, x as PartyBuffs, E as IndividualBuffs, aF as Debuffs, V as ItemSlot, ax as HandType, S as Spec, g as getSpecIcon, u as Class, aU as Faction, a6 as Race } from "./detailed_results-4a530cbe.chunk.js";
import { i as makeSpecOptionsBooleanInput, a as makeSpecOptionsNumberInput, b as makePresetGear, c as makePresetAPLRotation, r as registerSpecConfig, j as SpicedMammothTreats, k as SpellDamageDebuff, l as StaminaBuff, o as AttackPowerDebuff, p as DamageReductionPercentBuff, q as MeleeAttackSpeedDebuff, T as TankAssignment, s as InFrontOfTarget, I as IndividualSimUI } from "./preset_utils-ebb2fdc9.chunk.js";
const SelfUnholyFrenzy = makeSpecOptionsBooleanInput({
  fieldName: "unholyFrenzyTarget",
  label: "Self Unholy Frenzy",
  labelTooltip: "Cast Unholy Frenzy on yourself.",
  extraCssClasses: [
    "within-raid-sim-hide"
  ],
  getValue: (player) => player.getSpecOptions().unholyFrenzyTarget?.type == UnitReference_Type.Player,
  setValue: (eventID, player, newValue) => {
    const newOptions = player.getSpecOptions();
    newOptions.unholyFrenzyTarget = UnitReference.create({
      type: newValue ? UnitReference_Type.Player : UnitReference_Type.Unknown,
      index: 0
    });
    player.setSpecOptions(eventID, newOptions);
  },
  showWhen: (player) => player.getTalents().hysteria,
  changeEmitter: (player) => TypedEvent.onAny([player.rotationChangeEmitter, player.talentsChangeEmitter])
});
const StartingRunicPower = makeSpecOptionsNumberInput({
  fieldName: "startingRunicPower",
  label: "Starting Runic Power",
  labelTooltip: "Initial RP at the start of each iteration."
});
const PetUptime = makeSpecOptionsNumberInput({
  fieldName: "petUptime",
  label: "Ghoul Uptime (%)",
  labelTooltip: "Percent of the fight duration for which your ghoul will be on target.",
  percent: true,
  showWhen: (player) => player.getTalents().masterOfGhouls
});
const DrwPestiApply = makeSpecOptionsBooleanInput({
  fieldName: "drwPestiApply",
  label: "DRW Pestilence Add",
  labelTooltip: "There is currently an interaction with DRW and pestilence where you can use pestilence to force DRW to apply diseases if they are already applied by the DK. It only works with Glyph of Disease and if there is an off target. This toggle forces the sim to assume there is an off target.",
  showWhen: (player) => player.getTalentTree() == 0 && (player.getGlyphs().major1 == DeathknightMajorGlyph.GlyphOfDisease || player.getGlyphs().major2 == DeathknightMajorGlyph.GlyphOfDisease || player.getGlyphs().major3 == DeathknightMajorGlyph.GlyphOfDisease),
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.rotationChangeEmitter, player.talentsChangeEmitter])
});
const UseAMSInput = makeSpecOptionsBooleanInput({
  fieldName: "useAms",
  label: "Use AMS",
  labelTooltip: "Use AMS around predicted damage for a RP gain.",
  showWhen: (player) => player.getTalents().howlingBlast,
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter])
});
const AvgAMSSuccessRateInput = makeSpecOptionsNumberInput({
  fieldName: "avgAmsSuccessRate",
  label: "Avg AMS Success %",
  labelTooltip: "Chance for damage to be taken during the 5 second window of AMS.",
  showWhen: (player) => player.getSpecOptions().useAms == true && player.getTalents().howlingBlast,
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter])
});
const AvgAMSHitInput = makeSpecOptionsNumberInput({
  fieldName: "avgAmsHit",
  label: "Avg AMS Hit",
  labelTooltip: "How much on average (+-10%) the character is hit for when AMS is successful.",
  showWhen: (player) => player.getSpecOptions().useAms == true && player.getTalents().howlingBlast,
  changeEmitter: (player) => TypedEvent.onAny([player.specOptionsChangeEmitter, player.talentsChangeEmitter])
});
const items$h = [
  {
    id: 44006,
    enchant: 3817,
    gems: [
      41398,
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
    id: 40557,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 40403,
    enchant: 3831
  },
  {
    id: 40550,
    enchant: 3832,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      42142,
      0
    ]
  },
  {
    id: 40552,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40278,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 40556,
    enchant: 3823,
    gems: [
      39996,
      40037
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 40075
  },
  {
    id: 39401
  },
  {
    id: 40256
  },
  {
    id: 42987
  },
  {
    id: 40384,
    enchant: 3368
  },
  {},
  {
    id: 40207
  }
];
const P1BloodGear = {
  items: items$h
};
const items$g = [
  {
    id: 46115,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 45459,
    gems: [
      39996
    ]
  },
  {
    id: 46117,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 46032,
    enchant: 3831,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 46111,
    enchant: 3832,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 45663,
    enchant: 3845,
    gems: [
      42142,
      0
    ]
  },
  {
    id: 46113,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 45241,
    gems: [
      39996,
      45862,
      39996
    ]
  },
  {
    id: 45134,
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
      39996,
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
    id: 46048,
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
    enchant: 3368,
    gems: [
      39996,
      39996
    ]
  },
  {},
  {
    id: 45254
  }
];
const P2BloodGear = {
  items: items$g
};
const items$f = [
  {
    id: 48493,
    enchant: 3817,
    gems: [
      41285,
      40142
    ]
  },
  {
    id: 47458,
    gems: [
      40142
    ]
  },
  {
    id: 48495,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47546,
    enchant: 3831,
    gems: [
      42142
    ]
  },
  {
    id: 47449,
    enchant: 3832,
    gems: [
      49110,
      42142,
      40142
    ]
  },
  {
    id: 48008,
    enchant: 3845,
    gems: [
      40111,
      0
    ]
  },
  {
    id: 48492,
    enchant: 3604,
    gems: [
      40142,
      0
    ]
  },
  {
    id: 47429,
    gems: [
      40142,
      40142,
      40111
    ]
  },
  {
    id: 48494,
    enchant: 3823,
    gems: [
      40142,
      40111
    ]
  },
  {
    id: 45599,
    enchant: 3606,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 47993,
    gems: [
      40111,
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
    id: 45931
  },
  {
    id: 47464
  },
  {
    id: 47446,
    enchant: 3368,
    gems: [
      42142,
      40141
    ]
  },
  {},
  {
    id: 47673
  }
];
const P3BloodGear = {
  items: items$f
};
const items$e = [
  {
    id: 51312,
    enchant: 3817,
    gems: [
      41398,
      40117
    ]
  },
  {
    id: 50728,
    gems: [
      40143
    ]
  },
  {
    id: 51314,
    enchant: 3808,
    gems: [
      40117
    ]
  },
  {
    id: 50677,
    enchant: 3831,
    gems: [
      42156
    ]
  },
  {
    id: 51310,
    enchant: 3832,
    gems: [
      40117,
      49110
    ]
  },
  {
    id: 50659,
    enchant: 3845,
    gems: [
      40162,
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
    id: 51313,
    enchant: 3823,
    gems: [
      40117,
      40117
    ]
  },
  {
    id: 50639,
    enchant: 3606,
    gems: [
      40125,
      40117
    ]
  },
  {
    id: 50693,
    gems: [
      40125
    ]
  },
  {
    id: 52572,
    gems: [
      40125
    ]
  },
  {
    id: 50363
  },
  {
    id: 47464
  },
  {
    id: 49623,
    enchant: 3368,
    gems: [
      40117,
      42153,
      42153
    ]
  },
  {},
  {
    id: 47673
  }
];
const P4BloodGear = {
  items: items$e
};
const items$d = [
  {
    id: 41386,
    enchant: 3817,
    gems: [
      41398,
      49110
    ]
  },
  {
    id: 42645,
    gems: [
      42142
    ]
  },
  {
    id: 34388,
    enchant: 3808,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 37647,
    enchant: 3831
  },
  {
    id: 39617,
    enchant: 3832,
    gems: [
      42142,
      39996
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
    id: 39618,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 37171,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 37193,
    enchant: 3823,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 44306,
    enchant: 3606,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 42642,
    gems: [
      39996
    ]
  },
  {
    id: 44935
  },
  {
    id: 40684
  },
  {
    id: 42987
  },
  {
    id: 41383,
    enchant: 3370
  },
  {
    id: 43611,
    enchant: 3368
  },
  {
    id: 40715
  }
];
const PreraidFrostGear = {
  items: items$d
};
const items$c = [
  {
    id: 44006,
    enchant: 3817,
    gems: [
      41398,
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
    id: 40557,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 40403,
    enchant: 3831
  },
  {
    id: 40550,
    enchant: 3832,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40552,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40278,
    gems: [
      39996,
      42142
    ]
  },
  {
    id: 40556,
    enchant: 3823,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 39401
  },
  {
    id: 40075
  },
  {
    id: 40256
  },
  {
    id: 42987
  },
  {
    id: 40189,
    enchant: 3370
  },
  {
    id: 40189,
    enchant: 3368
  },
  {
    id: 40207
  }
];
const P1FrostGear = {
  items: items$c
};
const items$b = [
  {
    id: 46115,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 45459,
    gems: [
      39996
    ]
  },
  {
    id: 46117,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 46032,
    enchant: 3831,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 46111,
    enchant: 3832,
    gems: [
      42142,
      42142
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
    id: 46113,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 45241,
    gems: [
      42142,
      45862,
      39996
    ]
  },
  {
    id: 45134,
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
      39996,
      39996
    ]
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
    id: 45931
  },
  {
    id: 42987
  },
  {
    id: 46097,
    enchant: 3370,
    gems: [
      39996
    ]
  },
  {
    id: 46097,
    enchant: 3368,
    gems: [
      39996
    ]
  },
  {
    id: 40207
  }
];
const P2FrostGear = {
  items: items$b
};
const items$a = [
  {
    id: 48493,
    enchant: 3817,
    gems: [
      41398,
      40142
    ]
  },
  {
    id: 45459,
    gems: [
      40111
    ]
  },
  {
    id: 48495,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47548,
    enchant: 3831,
    gems: [
      40111
    ]
  },
  {
    id: 48491,
    enchant: 3832,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 45663,
    enchant: 3845,
    gems: [
      40111,
      0
    ]
  },
  {
    id: 47492,
    enchant: 3604,
    gems: [
      49110,
      40111,
      0
    ]
  },
  {
    id: 45241,
    gems: [
      40111,
      42142,
      40111
    ]
  },
  {
    id: 48494,
    enchant: 3823,
    gems: [
      40142,
      40111
    ]
  },
  {
    id: 47473,
    enchant: 3606,
    gems: [
      40142,
      40111
    ]
  },
  {
    id: 46966,
    gems: [
      40111
    ]
  },
  {
    id: 45534,
    gems: [
      40111
    ]
  },
  {
    id: 47464
  },
  {
    id: 45931
  },
  {
    id: 47528,
    enchant: 3370,
    gems: [
      40111
    ]
  },
  {
    id: 47528,
    enchant: 3368,
    gems: [
      40111
    ]
  },
  {
    id: 40207
  }
];
const P3FrostGear = {
  items: items$a
};
const items$9 = [
  {
    id: 51312,
    enchant: 3817,
    gems: [
      41398,
      42153
    ]
  },
  {
    id: 50728,
    gems: [
      40117
    ]
  },
  {
    id: 51314,
    enchant: 3808,
    gems: [
      42153
    ]
  },
  {
    id: 47548,
    enchant: 3831,
    gems: [
      40117
    ]
  },
  {
    id: 51310,
    enchant: 3832,
    gems: [
      42153,
      40117
    ]
  },
  {
    id: 50659,
    enchant: 3845,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 51311,
    enchant: 3604,
    gems: [
      40117,
      0
    ]
  },
  {
    id: 50620,
    enchant: 3601,
    gems: [
      40143,
      40117,
      40117
    ]
  },
  {
    id: 51817,
    enchant: 3823,
    gems: [
      49110,
      40117,
      40143
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
    id: 52572,
    gems: [
      40117
    ]
  },
  {
    id: 50693,
    gems: [
      40117
    ]
  },
  {
    id: 50363
  },
  {
    id: 47464
  },
  {
    id: 50737,
    enchant: 3370,
    gems: [
      40117
    ]
  },
  {
    id: 50737,
    enchant: 3368,
    gems: [
      40117
    ]
  },
  {
    id: 40207
  }
];
const P4FrostGear = {
  items: items$9
};
const items$8 = [
  {
    id: 44006,
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
    id: 40557,
    enchant: 3808,
    gems: [
      40003
    ]
  },
  {
    id: 40403,
    enchant: 3831
  },
  {
    id: 40550,
    enchant: 3832,
    gems: [
      42142,
      40003
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40552,
    enchant: 3604,
    gems: [
      40058,
      0
    ]
  },
  {
    id: 40278,
    gems: [
      39996,
      42142
    ]
  },
  {
    id: 40556,
    enchant: 3823,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 39401
  },
  {
    id: 40075
  },
  {
    id: 40256
  },
  {
    id: 42987
  },
  {
    id: 40189,
    enchant: 3370
  },
  {
    id: 40189,
    enchant: 3368
  },
  {
    id: 40207
  }
];
const P1FrostSubUhGear = {
  items: items$8
};
const items$7 = [
  {
    id: 41386,
    enchant: 3817,
    gems: [
      41400,
      49110
    ]
  },
  {
    id: 37397
  },
  {
    id: 37627,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 37647,
    enchant: 3831
  },
  {
    id: 39617,
    enchant: 3832,
    gems: [
      42142,
      39996
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
    id: 39618,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40688,
    gems: [
      39996,
      42142
    ]
  },
  {
    id: 37193,
    enchant: 3823,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 44306,
    enchant: 3606,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 37642
  },
  {
    id: 44935
  },
  {
    id: 40684
  },
  {
    id: 42987
  },
  {
    id: 41257,
    enchant: 3368
  },
  {},
  {
    id: 40867
  }
];
const PreraidUh2hGear = {
  items: items$7
};
const items$6 = [
  {
    id: 44006,
    enchant: 3817,
    gems: [
      41400,
      49110
    ]
  },
  {
    id: 44664,
    gems: [
      39996
    ]
  },
  {
    id: 40557,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 40403,
    enchant: 3831
  },
  {
    id: 40550,
    enchant: 3832,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40552,
    enchant: 3604,
    gems: [
      40038,
      0
    ]
  },
  {
    id: 40278,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 40556,
    enchant: 3823,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 40591,
    enchant: 3606
  },
  {
    id: 39401
  },
  {
    id: 40075
  },
  {
    id: 40256
  },
  {
    id: 42987
  },
  {
    id: 40384,
    enchant: 3368
  },
  {},
  {
    id: 40207
  }
];
const P1Uh2hGear = {
  items: items$6
};
const items$5 = [
  {
    id: 51312,
    enchant: 3817,
    gems: [
      41398,
      40111
    ]
  },
  {
    id: 50647,
    gems: [
      40111
    ]
  },
  {
    id: 51314,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 50677,
    enchant: 3831,
    gems: [
      40146
    ]
  },
  {
    id: 51310,
    enchant: 3832,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 50659,
    enchant: 3845,
    gems: [
      40146,
      0
    ]
  },
  {
    id: 51311,
    enchant: 3604,
    gems: [
      40146,
      0
    ]
  },
  {
    id: 50620,
    gems: [
      40146,
      40111,
      40111
    ]
  },
  {
    id: 50624,
    enchant: 3823,
    gems: [
      40146,
      40111,
      49110
    ]
  },
  {
    id: 50639,
    enchant: 3606,
    gems: [
      40146,
      40111
    ]
  },
  {
    id: 50693,
    gems: [
      40146
    ]
  },
  {
    id: 52572,
    gems: [
      40146
    ]
  },
  {
    id: 47464
  },
  {
    id: 50363
  },
  {
    id: 49623,
    enchant: 3368,
    gems: [
      42142,
      42142,
      42142
    ]
  },
  {},
  {
    id: 47673
  }
];
const P4Uh2hGear = {
  items: items$5
};
const items$4 = [
  {
    id: 41386,
    enchant: 3817,
    gems: [
      41400,
      49110
    ]
  },
  {
    id: 37397
  },
  {
    id: 37627,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 37647,
    enchant: 3831
  },
  {
    id: 39617,
    enchant: 3832,
    gems: [
      42142,
      39996
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
    id: 39618,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40688,
    gems: [
      39996,
      42142
    ]
  },
  {
    id: 37193,
    enchant: 3823,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 44306,
    enchant: 3606,
    gems: [
      39996,
      39996
    ]
  },
  {
    id: 37642
  },
  {
    id: 44935
  },
  {
    id: 40684
  },
  {
    id: 42987
  },
  {
    id: 41383,
    enchant: 3368
  },
  {
    id: 40703,
    enchant: 3368
  },
  {
    id: 40867
  }
];
const PreraidUhDwGear = {
  items: items$4
};
const items$3 = [
  {
    id: 44006,
    enchant: 3817,
    gems: [
      41398,
      42702
    ]
  },
  {
    id: 39421
  },
  {
    id: 40557,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 40403,
    enchant: 3831
  },
  {
    id: 40550,
    enchant: 3832,
    gems: [
      42142,
      39996
    ]
  },
  {
    id: 40330,
    enchant: 3845,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40347,
    enchant: 3604,
    gems: [
      39996,
      0
    ]
  },
  {
    id: 40278,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 40294,
    enchant: 3823
  },
  {
    id: 39706,
    enchant: 3606,
    gems: [
      39996
    ]
  },
  {
    id: 39401
  },
  {
    id: 40075
  },
  {
    id: 37390
  },
  {
    id: 42987
  },
  {
    id: 40402,
    enchant: 3368
  },
  {
    id: 40491,
    enchant: 3368
  },
  {
    id: 42620
  }
];
const P1UhDwGear = {
  items: items$3
};
const items$2 = [
  {
    id: 45472,
    enchant: 3817,
    gems: [
      41398,
      40041
    ]
  },
  {
    id: 46040,
    gems: [
      39996
    ]
  },
  {
    id: 46117,
    enchant: 3808,
    gems: [
      39996
    ]
  },
  {
    id: 45588,
    enchant: 3831,
    gems: [
      39996
    ]
  },
  {
    id: 46111,
    enchant: 3832,
    gems: [
      42142,
      42142
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
    id: 45481,
    enchant: 3604,
    gems: [
      0
    ]
  },
  {
    id: 45241,
    gems: [
      42142,
      45862,
      39996
    ]
  },
  {
    id: 45134,
    enchant: 3823,
    gems: [
      40041,
      39996,
      40022
    ]
  },
  {
    id: 45599,
    enchant: 3606,
    gems: [
      39996,
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
    id: 45250
  },
  {
    id: 45609
  },
  {
    id: 42987
  },
  {
    id: 46097,
    enchant: 3368,
    gems: [
      39996
    ]
  },
  {
    id: 46036,
    enchant: 3368,
    gems: [
      39996
    ]
  },
  {
    id: 45254
  }
];
const P2UhDwGear = {
  items: items$2
};
const items$1 = [
  {
    id: 48493,
    enchant: 3817,
    gems: [
      41398,
      40146
    ]
  },
  {
    id: 47458,
    gems: [
      40146
    ]
  },
  {
    id: 48495,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 47548,
    enchant: 3831,
    gems: [
      40111
    ]
  },
  {
    id: 48491,
    enchant: 3832,
    gems: [
      42142,
      42142
    ]
  },
  {
    id: 45663,
    enchant: 3845,
    gems: [
      40111,
      0
    ]
  },
  {
    id: 48492,
    enchant: 3604,
    gems: [
      40146,
      0
    ]
  },
  {
    id: 47429,
    gems: [
      40111,
      45862,
      40111
    ]
  },
  {
    id: 47465,
    enchant: 3823,
    gems: [
      49110,
      40111,
      40146
    ]
  },
  {
    id: 45599,
    enchant: 3606,
    gems: [
      40111,
      40111
    ]
  },
  {
    id: 47413,
    gems: [
      40146
    ]
  },
  {
    id: 45534,
    gems: [
      42142
    ]
  },
  {
    id: 47464
  },
  {
    id: 45609
  },
  {
    id: 47528,
    enchant: 3368,
    gems: [
      40111
    ]
  },
  {
    id: 47528,
    enchant: 3368,
    gems: [
      40111
    ]
  },
  {
    id: 47673
  }
];
const P3UhDwGear = {
  items: items$1
};
const items = [
  {
    id: 51312,
    enchant: 3817,
    gems: [
      41398,
      40111
    ]
  },
  {
    id: 50647,
    gems: [
      40111
    ]
  },
  {
    id: 51314,
    enchant: 3808,
    gems: [
      40111
    ]
  },
  {
    id: 50677,
    enchant: 3831,
    gems: [
      40146
    ]
  },
  {
    id: 51310,
    enchant: 3832,
    gems: [
      42142,
      49110
    ]
  },
  {
    id: 50659,
    enchant: 3845,
    gems: [
      40146,
      0
    ]
  },
  {
    id: 51311,
    enchant: 3604,
    gems: [
      40146,
      0
    ]
  },
  {
    id: 50620,
    gems: [
      40146,
      40111,
      42142
    ]
  },
  {
    id: 50624,
    enchant: 3823,
    gems: [
      40111,
      42142,
      40111
    ]
  },
  {
    id: 50639,
    enchant: 3606,
    gems: [
      40146,
      40111
    ]
  },
  {
    id: 52572,
    gems: [
      40146
    ]
  },
  {
    id: 51855,
    gems: [
      40111
    ]
  },
  {
    id: 47131
  },
  {
    id: 50363
  },
  {
    id: 50737,
    enchant: 3368,
    gems: [
      40111
    ]
  },
  {
    id: 50737,
    enchant: 3368,
    gems: [
      40111
    ]
  },
  {
    id: 47673
  }
];
const P4UhDwGear = {
  items
};
const type$6 = "TypeAPL";
const prepullActions$6 = [
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48265
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
          spellId: 49938
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-16s"
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
        val: "-8.5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 50689
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
          spellId: 57623
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
        val: "-1s"
      }
    }
  }
];
const priorityList$6 = [
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
              val: "11s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 64382,
          tag: -1
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
              val: "97s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57933,
          tag: -1
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
                          }
                        }
                      },
                      rhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 49028
                          }
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
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        remainingTime: {}
                      },
                      rhs: {
                        "const": {
                          val: "9"
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
              and: {
                vals: [
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
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
                        auraRemainingTime: {
                          auraId: {
                            spellId: 49028
                          }
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
                  {
                    cmp: {
                      op: "OpGe",
                      lhs: {
                        remainingTime: {}
                      },
                      rhs: {
                        "const": {
                          val: "9"
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
          spellId: 49921,
          tag: 1
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
                    or: {
                      vals: [
                        {
                          spellIsReady: {
                            spellId: {
                              spellId: 46584
                            }
                          }
                        },
                        {
                          spellIsReady: {
                            spellId: {
                              spellId: 49028
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    gcdIsReady: {}
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55078
                      }
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55095
                      }
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
                    val: "15"
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
              or: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 46584
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 49028
                      }
                    }
                  }
                ]
              }
            },
            {
              gcdIsReady: {}
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55078
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49016
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
                  spellId: 49016
                }
              }
            }
          ]
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 46584
                      }
                    }
                  },
                  {
                    gcdIsReady: {}
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55078
                      }
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55095
                      }
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
                    val: "15"
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
              and: {
                vals: [
                  {
                    or: {
                      vals: [
                        {
                          spellIsReady: {
                            spellId: {
                              spellId: 46584
                            }
                          }
                        },
                        {
                          spellIsReady: {
                            spellId: {
                              spellId: 49028
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    or: {
                      vals: [
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              remainingTime: {}
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  spellTimeToReady: {
                                    spellId: {
                                      spellId: 49016
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "15"
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          auraIsActive: {
                            auraId: {
                              spellId: 49016
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    gcdIsReady: {}
                  }
                ]
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
                    val: "15"
                  }
                }
              }
            }
          ]
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
              gcdIsReady: {}
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentNonDeathRuneCount: {
                    runeType: "RuneBlood"
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
                op: "OpEq",
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
                op: "OpEq",
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
          spellId: 47568
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
                    auraIsActive: {
                      auraId: {
                        spellId: 54758
                      }
                    }
                  },
                  {
                    gcdIsReady: {}
                  },
                  {
                    not: {
                      val: {
                        spellIsReady: {
                          spellId: {
                            spellId: 47568
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
          spellId: 46584
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
                      spellId: 46584
                    }
                  }
                }
              }
            },
            {
              gcdIsReady: {}
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 47568
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
          spellId: 49028
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
                  nextRuneCooldown: {
                    runeType: "RuneFrost"
                  }
                },
                rhs: {
                  math: {
                    op: "OpSub",
                    lhs: {
                      auraRemainingTime: {
                        auraId: {
                          spellId: 71227
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
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  nextRuneCooldown: {
                    runeType: "RuneUnholy"
                  }
                },
                rhs: {
                  math: {
                    op: "OpSub",
                    lhs: {
                      auraRemainingTime: {
                        auraId: {
                          spellId: 71227
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
              }
            },
            {
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 71227
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
                    and: {
                      vals: [
                        {
                          cmp: {
                            op: "OpLe",
                            lhs: {
                              currentRuneCount: {
                                runeType: "RuneDeath"
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
                            op: "OpLe",
                            lhs: {
                              nextRuneCooldown: {
                                runeType: "RuneBlood"
                              }
                            },
                            rhs: {
                              "const": {
                                val: "6"
                              }
                            }
                          }
                        },
                        {
                          not: {
                            val: {
                              or: {
                                vals: [
                                  {
                                    auraIsActive: {
                                      auraId: {
                                        spellId: 67383
                                      }
                                    }
                                  },
                                  {
                                    cmp: {
                                      op: "OpEq",
                                      lhs: {
                                        auraRemainingTime: {
                                          auraId: {
                                            spellId: 67383
                                          }
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
          spellId: 49924,
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
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
                  {
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
                          val: "4"
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55078
                }
              }
            },
            {
              gcdIsReady: {}
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "9"
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
                      spellId: 49028
                    }
                  }
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
                op: "OpGe",
                lhs: {
                  runeSlotCooldown: {
                    runeSlot: "SlotLeftBlood"
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
              spellIsReady: {
                spellId: {
                  spellId: 45529
                }
              }
            },
            {
              gcdIsReady: {}
            },
            {
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 49028
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "40"
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
                                  spellId: 49028
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
                                  spellId: 49028
                                }
                              }
                            },
                            rhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 55095
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
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 47568
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
          spellId: 45529
        }
      }
    }
  },
  {
    action: {
      condition: {
        or: {}
      },
      castSpell: {
        spellId: {
          spellId: 55262,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {}
        }
      },
      castSpell: {
        spellId: {
          spellId: 49924,
          tag: 1
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
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneFrost"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneUnholy"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
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
                                  spellId: 49028
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
                        {
                          cmp: {
                            op: "OpEq",
                            lhs: {
                              currentRunicPower: {}
                            },
                            rhs: {
                              "const": {
                                val: "100"
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
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
                    not: {
                      val: {
                        cmp: {
                          op: "OpLe",
                          lhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 71227
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
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneBlood"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.3"
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
                                  spellId: 49028
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
                        {
                          cmp: {
                            op: "OpEq",
                            lhs: {
                              currentRunicPower: {}
                            },
                            rhs: {
                              "const": {
                                val: "100"
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
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
                    not: {
                      val: {
                        cmp: {
                          op: "OpLe",
                          lhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 71227
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
                    val: "9"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49895
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
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneFrost"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneUnholy"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
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
                  runeCooldown: {
                    runeType: "RuneBlood"
                  }
                },
                rhs: {
                  "const": {
                    val: "0.3"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
              not: {
                val: {
                  cmp: {
                    op: "OpLe",
                    lhs: {
                      auraRemainingTime: {
                        auraId: {
                          spellId: 71227
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
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 57623
        }
      }
    }
  }
];
const BloodDPSApl = {
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
          spellId: 48265
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
          spellId: 42650
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
          spellId: 50689
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
          spellId: 57623
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
          op: "OpGe",
          lhs: {
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "8.5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 64382,
          tag: -1
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
      resetSequence: {
        sequenceName: "IT"
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
      resetSequence: {
        sequenceName: "PS"
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
                    auraIsActive: {
                      auraId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpEq",
                      lhs: {
                        runeCooldown: {
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
                      op: "OpGe",
                      lhs: {
                        currentNonDeathRuneCount: {
                          runeType: "RuneFrost"
                        }
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
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 55095
                    }
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        name: "IT",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 59131
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    auraIsActive: {
                      auraId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpEq",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneUnholy"
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
                      op: "OpGe",
                      lhs: {
                        currentNonDeathRuneCount: {
                          runeType: "RuneUnholy"
                        }
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
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 55078
                    }
                  }
                }
              }
            }
          ]
        }
      },
      sequence: {
        name: "PS",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 49921,
                tag: 1
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
              auraIsActive: {
                auraId: {
                  spellId: 49028
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55078
                }
              }
            }
          ]
        }
      },
      sequence: {
        name: "Pesti",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 50842
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
        name: "Opener",
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 49016
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
                spellId: 26297
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
                spellId: 49924,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 50842
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 49941
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
                    dotIsActive: {
                      spellId: {
                        spellId: 55095
                      }
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55078
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
                    and: {
                      vals: [
                        {
                          cmp: {
                            op: "OpGt",
                            lhs: {
                              nextRuneCooldown: {
                                runeType: "RuneBlood"
                              }
                            },
                            rhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 55095
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpEq",
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
                        }
                      ]
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55095
                      }
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55078
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
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellTimeToReady: {
                              spellId: {
                                spellId: 46584
                              }
                            }
                          },
                          rhs: {
                            dotRemainingTime: {
                              spellId: {
                                spellId: 55095
                              }
                            }
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellTimeToReady: {
                              spellId: {
                                spellId: 49028
                              }
                            }
                          },
                          rhs: {
                            "const": {
                              val: "3s"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    not: {
                      val: {
                        auraIsActive: {
                          auraId: {
                            spellId: 49028
                          }
                        }
                      }
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55095
                      }
                    }
                  },
                  {
                    dotIsActive: {
                      spellId: {
                        spellId: 55078
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
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
                          }
                        }
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 49028
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
                    }
                  },
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 49028
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
                    auraIsActive: {
                      auraId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    sequenceIsComplete: {
                      sequenceName: "IT"
                    }
                  }
                ]
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
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 50842
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 49016
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 46584
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    gcdIsReady: {}
                  }
                ]
              }
            },
            {
              and: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 46584
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 49028
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
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellTimeToReady: {
                              spellId: {
                                spellId: 33697
                              }
                            }
                          },
                          rhs: {
                            "const": {
                              val: "15"
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
                        remainingTime: {}
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellTimeToReady: {
                              spellId: {
                                spellId: 26297
                              }
                            }
                          },
                          rhs: {
                            "const": {
                              val: "10"
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
              cmp: {
                op: "OpLt",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "15"
                  }
                }
              }
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 33697
                }
              }
            }
          ]
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
        or: {
          vals: [
            {
              and: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 46584
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    or: {
                      vals: [
                        {
                          cmp: {
                            op: "OpLt",
                            lhs: {
                              remainingTime: {}
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  spellTimeToReady: {
                                    spellId: {
                                      spellId: 33697
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "15"
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
                              remainingTime: {}
                            },
                            rhs: {
                              math: {
                                op: "OpAdd",
                                lhs: {
                                  spellTimeToReady: {
                                    spellId: {
                                      spellId: 49016
                                    }
                                  }
                                },
                                rhs: {
                                  "const": {
                                    val: "9"
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
                    gcdIsReady: {}
                  }
                ]
              }
            },
            {
              and: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 33697
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 46584
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 49028
                      }
                    }
                  },
                  {
                    gcdIsReady: {}
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
                    val: "12"
                  }
                }
              }
            },
            {
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 33697
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "55"
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
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellTimeToReady: {
                              spellId: {
                                spellId: 33697
                              }
                            }
                          },
                          rhs: {
                            "const": {
                              val: "20"
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
                        remainingTime: {}
                      },
                      rhs: {
                        math: {
                          op: "OpAdd",
                          lhs: {
                            spellTimeToReady: {
                              spellId: {
                                spellId: 49016
                              }
                            }
                          },
                          rhs: {
                            "const": {
                              val: "20"
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    gcdIsReady: {}
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 26297
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
              auraIsActive: {
                auraId: {
                  spellId: 54758
                }
              }
            },
            {
              gcdIsReady: {}
            }
          ]
        }
      },
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 54758
                }
              }
            },
            {
              gcdIsReady: {}
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49016
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
                  spellId: 54758
                }
              }
            },
            {
              gcdIsReady: {}
            }
          ]
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 54758
                }
              }
            },
            {
              gcdIsReady: {}
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 54758
                }
              }
            },
            {
              gcdIsReady: {}
            }
          ]
        }
      },
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 46584
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 49028
              }
            }
          },
          {
            resetSequence: {
              sequenceName: "Pesti"
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
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotLeftBlood"
                  }
                }
              }
            },
            {
              sequenceIsComplete: {
                sequenceName: "Opener"
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 45529
                }
              }
            },
            {
              gcdIsReady: {}
            },
            {
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 49028
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "40"
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
                                  spellId: 49028
                                }
                              }
                            }
                          }
                        },
                        {
                          cmp: {
                            op: "OpGt",
                            lhs: {
                              auraRemainingTime: {
                                auraId: {
                                  spellId: 49028
                                }
                              }
                            },
                            rhs: {
                              dotRemainingTime: {
                                spellId: {
                                  spellId: 55095
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 45529
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
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        nextRuneCooldown: {
                          runeType: "RuneBlood"
                        }
                      },
                      rhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
                          }
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        nextRuneCooldown: {
                          runeType: "RuneBlood"
                        }
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
            {
              not: {
                val: {
                  or: {
                    vals: [
                      {
                        cmp: {
                          op: "OpGe",
                          lhs: {
                            nextRuneCooldown: {
                              runeType: "RuneFrost"
                            }
                          },
                          rhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 71227
                              }
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpGe",
                          lhs: {
                            nextRuneCooldown: {
                              runeType: "RuneUnholy"
                            }
                          },
                          rhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 71227
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49941
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {}
        }
      },
      castSpell: {
        spellId: {
          spellId: 49924,
          tag: 1
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
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneFrost"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneUnholy"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
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
                                  spellId: 49028
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
                        {
                          cmp: {
                            op: "OpEq",
                            lhs: {
                              currentRunicPower: {}
                            },
                            rhs: {
                              "const": {
                                val: "100"
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
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
                    not: {
                      val: {
                        cmp: {
                          op: "OpLe",
                          lhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 71227
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
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneBlood"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.3"
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
                                  spellId: 49028
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
                        {
                          cmp: {
                            op: "OpEq",
                            lhs: {
                              currentRunicPower: {}
                            },
                            rhs: {
                              "const": {
                                val: "100"
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
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
                    not: {
                      val: {
                        cmp: {
                          op: "OpLe",
                          lhs: {
                            auraRemainingTime: {
                              auraId: {
                                spellId: 71227
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
          spellId: 49895
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
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneFrost"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneUnholy"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
            {
              and: {
                vals: [
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        runeCooldown: {
                          runeType: "RuneBlood"
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0.5"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        dotRemainingTime: {
                          spellId: {
                            spellId: 55095
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 57623
        }
      }
    }
  }
];
const BloodPestiAoeApl = {
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
          spellId: 48263
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
          spellId: 50689
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-11.5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48265
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
        val: "-8s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
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
          spellId: 50689
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
        cmp: {
          op: "OpLe",
          lhs: {
            remainingTime: {}
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
          spellId: 51425,
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
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneDeath"
                  }
                },
                rhs: {
                  "const": {
                    val: "2"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  runeSlotCooldown: {
                    runeSlot: "SlotRightBlood"
                  }
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
          spellId: 51425,
          tag: 1
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
              val: "5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 55268,
          tag: 1
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
              val: "5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51411
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
              val: "3s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49930,
          tag: 1
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
                  currentTime: {}
                },
                rhs: {
                  "const": {
                    val: "0"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 55095
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
          spellId: 49921,
          tag: 1
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
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "19s"
            }
          }
        }
      },
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51271
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
                spellId: 33697
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 26297
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 20594
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 50842
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 47568
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 46584
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
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
                      spellId: 55095
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            }
          ]
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
                op: "OpLe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 51271
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
              currentRuneDeath: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              currentRuneDeath: {
                runeSlot: "SlotRightBlood"
              }
            },
            {
              currentRuneActive: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  runeSlotCooldown: {
                    runeSlot: "SlotRightBlood"
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
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotLeftFrost"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotRightFrost"
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
                spellId: 50842
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51271
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
              auraIsActive: {
                auraId: {
                  spellId: 51271
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 33697
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 26297
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 20594
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
          otherId: "OtherActionPotion"
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 51271
          }
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
        auraIsActive: {
          auraId: {
            spellId: 51271
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
        auraIsActive: {
          auraId: {
            spellId: 51271
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 20594
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 51271
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
        and: {
          vals: [
            {
              currentRuneDeath: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              currentRuneDeath: {
                runeSlot: "SlotRightBlood"
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 45529
                }
              }
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 51271
                }
              }
            },
            {
              currentRuneActive: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              currentRuneActive: {
                runeSlot: "SlotRightBlood"
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
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 50842
              }
            }
          }
        ]
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
              auraIsActive: {
                auraId: {
                  spellId: 51271
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 51271
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "10s"
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 50842
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            waitUntil: {
              condition: {
                spellCanCast: {
                  spellId: {
                    spellId: 51425,
                    tag: 1
                  }
                }
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
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
              auraIsActive: {
                auraId: {
                  spellId: 59052
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
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
          spellId: 51411
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
                  spellId: 51130
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  runeGrace: {
                    runeType: "RuneFrost"
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
                op: "OpLe",
                lhs: {
                  runeGrace: {
                    runeType: "RuneUnholy"
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
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
          spellId: 55268,
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
                  currentRuneCount: {
                    runeType: "RuneFrost"
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
                  currentRuneCount: {
                    runeType: "RuneUnholy"
                  }
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
          spellId: 51425,
          tag: 1
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
              val: "115"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 55268,
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
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              currentRuneActive: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 51271
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
          spellId: 49930,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 59052
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51411
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
          spellId: 55268,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            or: {
              vals: [
                {
                  cmp: {
                    op: "OpLt",
                    lhs: {
                      runeCooldown: {
                        runeType: "RuneBlood"
                      }
                    },
                    rhs: {
                      "const": {
                        val: "0.5s"
                      }
                    }
                  }
                },
                {
                  cmp: {
                    op: "OpLt",
                    lhs: {
                      runeCooldown: {
                        runeType: "RuneFrost"
                      }
                    },
                    rhs: {
                      "const": {
                        val: "0.5s"
                      }
                    }
                  }
                },
                {
                  cmp: {
                    op: "OpLt",
                    lhs: {
                      runeCooldown: {
                        runeType: "RuneUnholy"
                      }
                    },
                    rhs: {
                      "const": {
                        val: "0.5s"
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 57623
        }
      }
    }
  }
];
const FrostBlPestiApl = {
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
          spellId: 48263
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
          spellId: 50689
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-11.5s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 48265
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
        val: "-8s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
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
          spellId: 50689
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
        cmp: {
          op: "OpLe",
          lhs: {
            remainingTime: {}
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
          spellId: 51425,
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
                op: "OpLe",
                lhs: {
                  remainingTime: {}
                },
                rhs: {
                  "const": {
                    val: "8s"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneDeath"
                  }
                },
                rhs: {
                  "const": {
                    val: "2"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  runeSlotCooldown: {
                    runeSlot: "SlotRightBlood"
                  }
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
          spellId: 51425,
          tag: 1
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
              val: "5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 55268,
          tag: 1
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
              val: "5s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 51411
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
              val: "3s"
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49930,
          tag: 1
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
                  currentTime: {}
                },
                rhs: {
                  "const": {
                    val: "0"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  dotIsActive: {
                    spellId: {
                      spellId: 55095
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
          spellId: 49921,
          tag: 1
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
            currentTime: {}
          },
          rhs: {
            "const": {
              val: "19s"
            }
          }
        }
      },
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 50842
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51271
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
                spellId: 33697
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 26297
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 20594
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 47568
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            cancelAura: {
              auraId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 46584
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 55268,
                tag: 1
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
              spellIsReady: {
                spellId: {
                  spellId: 51271
                }
              }
            },
            {
              currentRuneActive: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotRightFrost"
                  }
                }
              }
            },
            {
              currentRuneDeath: {
                runeSlot: "SlotRightBlood"
              }
            },
            {
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotRightFrost"
                  }
                }
              }
            },
            {
              currentRuneDeath: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "9s"
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
                spellId: 51271
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            cancelAura: {
              auraId: {
                spellId: 45529
              }
            }
          }
        ]
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
              spellIsReady: {
                spellId: {
                  spellId: 51271
                }
              }
            },
            {
              currentRuneActive: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotLeftFrost"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotRightFrost"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  currentRuneDeath: {
                    runeSlot: "SlotRightBlood"
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
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 50842
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 51271
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
              auraIsActive: {
                auraId: {
                  spellId: 51271
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 33697
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 26297
                      }
                    }
                  },
                  {
                    spellIsReady: {
                      spellId: {
                        spellId: 20594
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
          otherId: "OtherActionPotion"
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 51271
          }
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
        auraIsActive: {
          auraId: {
            spellId: 51271
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
        auraIsActive: {
          auraId: {
            spellId: 51271
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 20594
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 51271
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 59052
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
                op: "OpEq",
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 51411
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
                  spellId: 51130
                }
              }
            },
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  runeGrace: {
                    runeType: "RuneFrost"
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
                op: "OpLe",
                lhs: {
                  runeGrace: {
                    runeType: "RuneUnholy"
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
                op: "OpEq",
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 55268,
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
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneDeath"
                  }
                },
                rhs: {
                  "const": {
                    val: "2"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
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
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneUnholy"
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
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "9s"
                  }
                }
              }
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 45529
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
                spellId: 51425,
                tag: 1
              }
            }
          },
          {
            cancelAura: {
              auraId: {
                spellId: 45529
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
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneDeath"
                  }
                },
                rhs: {
                  "const": {
                    val: "2"
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
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
                op: "OpEq",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneUnholy"
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
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "9s"
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 45529
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
          spellId: 51425,
          tag: 1
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
              not: {
                val: {
                  currentRuneDeath: {
                    runeSlot: "SlotLeftBlood"
                  }
                }
              }
            },
            {
              currentRuneDeath: {
                runeSlot: "SlotRightBlood"
              }
            },
            {
              auraIsActive: {
                auraId: {
                  spellId: 45529
                }
              }
            }
          ]
        }
      },
      cancelAura: {
        auraId: {
          spellId: 45529
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
                      spellId: 55095
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
                spellId: {
                  spellId: 55095
                }
              }
            }
          ]
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "12s"
                  }
                }
              }
            },
            {
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        currentRuneCount: {
                          runeType: "RuneDeath"
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
                        runeSlotCooldown: {
                          runeSlot: "SlotLeftBlood"
                        }
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
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 49930,
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
                  currentRunicPower: {}
                },
                rhs: {
                  "const": {
                    val: "115"
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
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
          spellId: 55268,
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
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
                op: "OpGe",
                lhs: {
                  currentRuneCount: {
                    runeType: "RuneFrost"
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
                  currentRuneCount: {
                    runeType: "RuneUnholy"
                  }
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
          spellId: 51425,
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
              auraIsActive: {
                auraId: {
                  spellId: 59052
                }
              }
            },
            {
              not: {
                val: {
                  or: {
                    vals: [
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneBlood"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneFrost"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneUnholy"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 51411
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
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
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
          spellId: 46584
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
                  or: {
                    vals: [
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneBlood"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneFrost"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneUnholy"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
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
          spellId: 55268,
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
              not: {
                val: {
                  or: {
                    vals: [
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneBlood"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneFrost"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      },
                      {
                        cmp: {
                          op: "OpLt",
                          lhs: {
                            runeCooldown: {
                              runeType: "RuneUnholy"
                            }
                          },
                          rhs: {
                            "const": {
                              val: "0.5s"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              dotIsActive: {
                spellId: {
                  spellId: 55095
                }
              }
            },
            {
              cmp: {
                op: "OpGe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
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
          spellId: 57623
        }
      }
    }
  }
];
const FrostUhPestiApl = {
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
          spellId: 48265
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
          spellId: 63560
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-8s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
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
        cmp: {
          op: "OpLe",
          lhs: {
            dotRemainingTime: {
              spellId: {
                spellId: 55095
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
          spellId: 59131
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
          spellId: 49921,
          tag: 1
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
                spellId: 66803
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49930,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 49206
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
        or: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 49206
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "50s"
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
                  spellId: 49206
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                },
                rhs: {
                  remainingTime: {}
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
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 49206
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 47568
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
                lhs: {
                  currentNonDeathRuneCount: {
                    runeType: "RuneFrost"
                  }
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
          spellId: 42650
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
                      spellId: 67383
                    }
                  }
                }
              }
            },
            {
              spellIsReady: {
                spellId: {
                  spellId: 49206
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 55271,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49938
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 49206
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42650
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
            spellTimeToReady: {
              spellId: {
                spellId: 49938
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
      castSpell: {
        spellId: {
          spellId: 55271,
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
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpGt",
                      lhs: {
                        spellTimeToReady: {
                          spellId: {
                            spellId: 49938
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
                    spellIsReady: {
                      spellId: {
                        spellId: 47568
                      }
                    }
                  }
                ]
              }
            },
            {
              or: {
                vals: [
                  {
                    cmp: {
                      op: "OpLt",
                      lhs: {
                        auraRemainingTime: {
                          auraId: {
                            spellId: 66803
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "10s"
                        }
                      }
                    }
                  },
                  {
                    cmp: {
                      op: "OpLe",
                      lhs: {
                        auraInternalCooldown: {
                          auraId: {
                            spellId: 67117
                          }
                        }
                      },
                      rhs: {
                        "const": {
                          val: "0s"
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
          spellId: 49930,
          tag: 1
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49938
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
          spellId: 49941
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 49206
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47568
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49206
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            spellIsReady: {
              spellId: {
                spellId: 49206
              }
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
  },
  {
    action: {
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 63560
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
              auraIsActive: {
                auraId: {
                  spellId: 48265
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 49206
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
          spellId: 50689
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
        }
      }
    }
  }
];
const UhDwSsApl = {
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
          spellId: 49222
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
          spellId: 48265
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
          spellId: 63560
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-8s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
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
        and: {
          vals: [
            {
              cmp: {
                op: "OpLe",
                lhs: {
                  dotRemainingTime: {
                    spellId: {
                      spellId: 55095
                    }
                  }
                },
                rhs: {
                  nextRuneCooldown: {
                    runeType: "RuneFrost"
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
          spellId: 59131
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
                      spellId: 55078
                    }
                  }
                },
                rhs: {
                  nextRuneCooldown: {
                    runeType: "RuneUnholy"
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
          spellId: 49921,
          tag: 1
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
                spellId: 66803
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49930,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 49206
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
        or: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 49206
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "50s"
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
                  spellId: 49206
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                },
                rhs: {
                  remainingTime: {}
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
        auraIsActive: {
          auraId: {
            spellId: 49206
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42650
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
                      type: "Pet",
                      index: 1,
                      owner: {
                        type: "Self"
                      }
                    },
                    auraId: {
                      spellId: 63560
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  currentRuneActive: {
                    runeSlot: "SlotLeftBlood"
                  }
                }
              }
            }
          ]
        }
      },
      castSpell: {
        spellId: {
          spellId: 45529
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
              currentRuneDeath: {
                runeSlot: "SlotLeftBlood"
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    sourceUnit: {
                      type: "Pet",
                      index: 1,
                      owner: {
                        type: "Self"
                      }
                    },
                    auraId: {
                      spellId: 63560
                    }
                  }
                }
              }
            },
            {
              cmp: {
                op: "OpEq",
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
          spellId: 63560
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 55271,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49930,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 49206
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 47568
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49206
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            spellIsReady: {
              spellId: {
                spellId: 49206
              }
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
  },
  {
    action: {
      condition: {
        and: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 48265
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 49206
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
          spellId: 50689
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
        }
      }
    }
  }
];
const Uh2hSsApl = {
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
          spellId: 48265
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
          spellId: 63560
        }
      }
    },
    doAtValue: {
      "const": {
        val: "-8s"
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
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
        cmp: {
          op: "OpLe",
          lhs: {
            dotRemainingTime: {
              spellId: {
                spellId: 55095
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
          spellId: 59131
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
          spellId: 49921,
          tag: 1
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
                spellId: 66803
              }
            }
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 49930,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      condition: {
        auraIsActive: {
          auraId: {
            spellId: 49206
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
        or: {
          vals: [
            {
              auraIsActive: {
                auraId: {
                  spellId: 49206
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                },
                rhs: {
                  "const": {
                    val: "50s"
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
                  spellId: 49206
                }
              }
            },
            {
              cmp: {
                op: "OpGt",
                lhs: {
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                },
                rhs: {
                  remainingTime: {}
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
        auraIsActive: {
          auraId: {
            spellId: 49206
          }
        }
      },
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
        auraIsActive: {
          auraId: {
            spellId: 49206
          }
        }
      },
      castSpell: {
        spellId: {
          spellId: 42650
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49938
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
            spellTimeToReady: {
              spellId: {
                spellId: 49938
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
      castSpell: {
        spellId: {
          spellId: 55271,
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
              not: {
                val: {
                  dotIsActive: {
                    targetUnit: {
                      type: "Target",
                      index: 1
                    },
                    spellId: {
                      spellId: 55095
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
                  spellTimeToReady: {
                    spellId: {
                      spellId: 49938
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
                op: "OpLt",
                lhs: {
                  auraRemainingTime: {
                    auraId: {
                      spellId: 66803
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
          spellId: 49930,
          tag: 1
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 49206
        }
      }
    }
  },
  {
    action: {
      condition: {
        not: {
          val: {
            spellIsReady: {
              spellId: {
                spellId: 49206
              }
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
  },
  {
    action: {
      strictSequence: {
        actions: [
          {
            castSpell: {
              spellId: {
                spellId: 45529
              }
            }
          },
          {
            castSpell: {
              spellId: {
                spellId: 63560
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
              auraIsActive: {
                auraId: {
                  spellId: 48265
                }
              }
            },
            {
              not: {
                val: {
                  spellIsReady: {
                    spellId: {
                      spellId: 49206
                    }
                  }
                }
              }
            },
            {
              not: {
                val: {
                  auraIsActive: {
                    auraId: {
                      spellId: 49206
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
          spellId: 50689
        }
      }
    }
  },
  {
    action: {
      castSpell: {
        spellId: {
          spellId: 57623
        }
      }
    }
  }
];
const UhDndAoeApl = {
  type,
  prepullActions,
  priorityList
};
const P1_BLOOD_PRESET = makePresetGear("P1 Blood", P1BloodGear, { talentTree: 0 });
const P2_BLOOD_PRESET = makePresetGear("P2 Blood", P2BloodGear, { talentTree: 0 });
const P3_BLOOD_PRESET = makePresetGear("P3 Blood", P3BloodGear, { talentTree: 0 });
const P4_BLOOD_PRESET = makePresetGear("P4 Blood", P4BloodGear, { talentTree: 0 });
makePresetGear("Pre-Raid Frost", PreraidFrostGear, { talentTree: 1 });
const P1_FROST_PRESET = makePresetGear("P1 Frost", P1FrostGear, { talentTree: 1 });
const P2_FROST_PRESET = makePresetGear("P2 Frost", P2FrostGear, { talentTree: 1 });
const P3_FROST_PRESET = makePresetGear("P3 Frost", P3FrostGear, { talentTree: 1 });
const P4_FROST_PRESET = makePresetGear("P4 Frost", P4FrostGear, { talentTree: 1 });
makePresetGear("P1 Frost Sub Unh", P1FrostSubUhGear, { talentTree: 1 });
makePresetGear("Pre-Raid 2H Unholy", PreraidUh2hGear, { talentTree: 2 });
makePresetGear("P1 2H Unholy", P1Uh2hGear, { talentTree: 2 });
const P4_UNHOLY_2H_PRESET = makePresetGear("P4 2H Unholy", P4Uh2hGear, { talentTree: 2 });
makePresetGear("Pre-Raid DW Unholy", PreraidUhDwGear, { talentTree: 2 });
const P1_UNHOLY_DW_PRESET = makePresetGear("P1 DW Unholy", P1UhDwGear, { talentTree: 2 });
const P2_UNHOLY_DW_PRESET = makePresetGear("P2 DW Unholy", P2UhDwGear, { talentTree: 2 });
const P3_UNHOLY_DW_PRESET = makePresetGear("P3 DW Unholy", P3UhDwGear, { talentTree: 2 });
const P4_UNHOLY_DW_PRESET = makePresetGear("P4 DW Unholy", P4UhDwGear, { talentTree: 2 });
const BLOOD_DPS_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Blood DPS", BloodDPSApl, { talentTree: 0 });
const BLOOD_PESTI_AOE_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Blood Pesti AOE", BloodPestiAoeApl, { talentTree: 0 });
const FROST_BL_PESTI_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Frost BL Pesti", FrostBlPestiApl, { talentTree: 1 });
const FROST_UH_PESTI_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Frost UH Pesti", FrostUhPestiApl, { talentTree: 1 });
const UNHOLY_DW_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Unholy DW SS", UhDwSsApl, { talentTree: 2 });
const UNHOLY_2H_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Unholy 2H SS", Uh2hSsApl, { talentTree: 2 });
const UNHOLY_DND_AOE_ROTATION_PRESET_DEFAULT = makePresetAPLRotation("Unholy DND AOE", UhDndAoeApl, { talentTree: 2 });
const FrostTalents = {
  name: "Frost BL",
  data: SavedTalents.create({
    talentsString: "23050005-32005350352203012300033101351",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfObliterate,
      major2: DeathknightMajorGlyph.GlyphOfFrostStrike,
      major3: DeathknightMajorGlyph.GlyphOfDisease,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const FrostUnholyTalents = {
  name: "Frost UH",
  data: SavedTalents.create({
    talentsString: "01-32002350342203012300033101351-230200305003",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfObliterate,
      major2: DeathknightMajorGlyph.GlyphOfFrostStrike,
      major3: DeathknightMajorGlyph.GlyphOfDisease,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const UnholyDualWieldTalents = {
  name: "Unholy DW",
  data: SavedTalents.create({
    talentsString: "-320043500002-2300303050032152000150013133051",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfTheGhoul,
      major2: DeathknightMajorGlyph.GlyphOfIcyTouch,
      major3: DeathknightMajorGlyph.GlyphOfDeathAndDecay,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const UnholyDualWieldSSTalents = {
  name: "Unholy DW SS",
  data: SavedTalents.create({
    talentsString: "-320033500002-2301303050032151000150013133151",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfTheGhoul,
      major2: DeathknightMajorGlyph.GlyphOfIcyTouch,
      major3: DeathknightMajorGlyph.GlyphOfDeathAndDecay,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const Unholy2HTalents = {
  name: "Unholy 2H",
  data: SavedTalents.create({
    talentsString: "-320050500002-2302003350032052000150013133151",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfTheGhoul,
      major2: DeathknightMajorGlyph.GlyphOfIcyTouch,
      major3: DeathknightMajorGlyph.GlyphOfDarkDeath,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const UnholyAoeTalents = {
  name: "Unholy AOE",
  data: SavedTalents.create({
    talentsString: "-320050500002-2302303050032052000150013133151",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfTheGhoul,
      major2: DeathknightMajorGlyph.GlyphOfIcyTouch,
      major3: DeathknightMajorGlyph.GlyphOfDeathAndDecay,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const BloodTalents = {
  name: "Blood DPS",
  data: SavedTalents.create({
    talentsString: "2305120530003303231023001351--2302003050032",
    glyphs: Glyphs.create({
      major1: DeathknightMajorGlyph.GlyphOfDancingRuneWeapon,
      major2: DeathknightMajorGlyph.GlyphOfDeathStrike,
      major3: DeathknightMajorGlyph.GlyphOfDisease,
      minor1: DeathknightMinorGlyph.GlyphOfHornOfWinter,
      minor2: DeathknightMinorGlyph.GlyphOfPestilence,
      minor3: DeathknightMinorGlyph.GlyphOfRaiseDead
    })
  })
};
const DefaultUnholyOptions = Deathknight_Options.create({
  startingRunicPower: 0,
  petUptime: 1,
  unholyFrenzyTarget: UnitReference.create(),
  drwPestiApply: true
});
const DefaultFrostOptions = Deathknight_Options.create({
  startingRunicPower: 0,
  petUptime: 1,
  unholyFrenzyTarget: UnitReference.create(),
  drwPestiApply: true
});
Deathknight_Options.create({
  startingRunicPower: 0,
  petUptime: 1,
  unholyFrenzyTarget: UnitReference.create(),
  drwPestiApply: true
});
const OtherDefaults = {};
const DefaultConsumes = Consumes.create({
  flask: Flask.FlaskOfEndlessRage,
  food: Food.FoodDragonfinFilet,
  defaultPotion: Potions.PotionOfSpeed,
  petFood: PetFood.PetFoodSpicedMammothTreats,
  prepopPotion: Potions.PotionOfSpeed,
  thermalSapper: true,
  fillerExplosive: Explosive.ExplosiveSaroniteBomb
});
const SPEC_CONFIG = registerSpecConfig(Spec.SpecDeathknight, {
  cssClass: "deathknight-sim-ui",
  cssScheme: "death-knight",
  knownIssues: [
    "Rotation logic still behaves as Gargoyle scales dynamically, change in APL rotation logic is still needed."
  ],
  epStats: [
    Stat.StatStrength,
    Stat.StatArmor,
    Stat.StatAgility,
    Stat.StatAttackPower,
    Stat.StatExpertise,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatSpellHaste
  ],
  epPseudoStats: [
    PseudoStat.PseudoStatMainHandDps,
    PseudoStat.PseudoStatOffHandDps
  ],
  epReferenceStat: Stat.StatAttackPower,
  displayStats: [
    Stat.StatHealth,
    Stat.StatArmor,
    Stat.StatStrength,
    Stat.StatAgility,
    Stat.StatSpellHit,
    Stat.StatSpellCrit,
    Stat.StatAttackPower,
    Stat.StatMeleeHit,
    Stat.StatMeleeCrit,
    Stat.StatMeleeHaste,
    Stat.StatArmorPenetration,
    Stat.StatExpertise,
    Stat.StatResilience
  ],
  defaults: {
    gear: P2_UNHOLY_DW_PRESET.gear,
    epWeights: Stats.fromMap({
      [Stat.StatStrength]: 3.22,
      [Stat.StatAgility]: 0.62,
      [Stat.StatArmor]: 0.01,
      [Stat.StatAttackPower]: 1,
      [Stat.StatExpertise]: 1.13,
      [Stat.StatMeleeHaste]: 1.85,
      [Stat.StatMeleeHit]: 1.92,
      [Stat.StatMeleeCrit]: 0.76,
      [Stat.StatArmorPenetration]: 0.77,
      [Stat.StatSpellHit]: 0.8,
      [Stat.StatSpellCrit]: 0.34
    }, {
      [PseudoStat.PseudoStatMainHandDps]: 3.1,
      [PseudoStat.PseudoStatOffHandDps]: 1.79
    }),
    consumes: DefaultConsumes,
    talents: UnholyDualWieldTalents.data,
    specOptions: DefaultUnholyOptions,
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
      stoneskinTotem: TristateEffect.TristateEffectImproved,
      moonkinAura: TristateEffect.TristateEffectRegular,
      wrathOfAirTotem: true,
      powerWordFortitude: TristateEffect.TristateEffectImproved
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
      faerieFire: TristateEffect.TristateEffectImproved,
      sunderArmor: true,
      ebonPlaguebringer: true,
      mangle: true,
      heartOfTheCrusader: true,
      shadowMastery: true
    })
  },
  autoRotation: (player) => {
    const talentTree = player.getTalentTree();
    const numTargets = player.sim.encounter.targets.length;
    switch (talentTree) {
      case 0:
        if (player.getSpecOptions().drwPestiApply || numTargets > 1) {
          if (numTargets > 5) {
            return BLOOD_PESTI_AOE_ROTATION_PRESET_DEFAULT.rotation.rotation;
          } else {
            return BLOOD_DPS_ROTATION_PRESET_DEFAULT.rotation.rotation;
          }
        } else {
          return BLOOD_DPS_ROTATION_PRESET_DEFAULT.rotation.rotation;
        }
      case 1:
        const talentPoints = player.getTalentTreePoints();
        if (talentPoints[0] > talentPoints[2]) {
          return FROST_BL_PESTI_ROTATION_PRESET_DEFAULT.rotation.rotation;
        } else {
          return FROST_UH_PESTI_ROTATION_PRESET_DEFAULT.rotation.rotation;
        }
      default:
        if (numTargets > 1) {
          return UNHOLY_DND_AOE_ROTATION_PRESET_DEFAULT.rotation.rotation;
        } else {
          if (player.getEquippedItem(ItemSlot.ItemSlotMainHand).item.handType == HandType.HandTypeTwoHand) {
            return UNHOLY_2H_ROTATION_PRESET_DEFAULT.rotation.rotation;
          } else {
            return UNHOLY_DW_ROTATION_PRESET_DEFAULT.rotation.rotation;
          }
        }
    }
  },
  playerIconInputs: [],
  petConsumeInputs: [
    SpicedMammothTreats
  ],
  includeBuffDebuffInputs: [
    SpellDamageDebuff,
    StaminaBuff
  ],
  excludeBuffDebuffInputs: [
    AttackPowerDebuff,
    DamageReductionPercentBuff,
    MeleeAttackSpeedDebuff
  ],
  otherInputs: {
    inputs: [
      SelfUnholyFrenzy,
      StartingRunicPower,
      PetUptime,
      DrwPestiApply,
      UseAMSInput,
      AvgAMSSuccessRateInput,
      AvgAMSHitInput,
      TankAssignment,
      InFrontOfTarget
    ]
  },
  itemSwapSlots: [ItemSlot.ItemSlotMainHand, ItemSlot.ItemSlotOffHand],
  encounterPicker: {
    showExecuteProportion: false
  },
  presets: {
    talents: [
      BloodTalents,
      FrostTalents,
      FrostUnholyTalents,
      UnholyDualWieldTalents,
      UnholyDualWieldSSTalents,
      Unholy2HTalents,
      UnholyAoeTalents
    ],
    rotations: [
      BLOOD_DPS_ROTATION_PRESET_DEFAULT,
      BLOOD_PESTI_AOE_ROTATION_PRESET_DEFAULT,
      FROST_BL_PESTI_ROTATION_PRESET_DEFAULT,
      FROST_UH_PESTI_ROTATION_PRESET_DEFAULT,
      UNHOLY_DW_ROTATION_PRESET_DEFAULT,
      UNHOLY_2H_ROTATION_PRESET_DEFAULT,
      UNHOLY_DND_AOE_ROTATION_PRESET_DEFAULT
    ],
    gear: [
      P1_BLOOD_PRESET,
      P2_BLOOD_PRESET,
      P3_BLOOD_PRESET,
      P4_BLOOD_PRESET,
      P1_FROST_PRESET,
      P2_FROST_PRESET,
      P3_FROST_PRESET,
      P4_FROST_PRESET,
      P1_UNHOLY_DW_PRESET,
      P2_UNHOLY_DW_PRESET,
      P3_UNHOLY_DW_PRESET,
      P4_UNHOLY_DW_PRESET,
      P4_UNHOLY_2H_PRESET
    ]
  },
  raidSimPresets: [
    {
      spec: Spec.SpecDeathknight,
      tooltip: "Frost Death Knight",
      defaultName: "Frost",
      iconUrl: getSpecIcon(Class.ClassDeathknight, 1),
      talents: FrostTalents.data,
      specOptions: DefaultFrostOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceTroll
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_FROST_PRESET.gear,
          2: P2_FROST_PRESET.gear,
          3: P3_FROST_PRESET.gear,
          4: P4_FROST_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_FROST_PRESET.gear,
          2: P2_FROST_PRESET.gear,
          3: P3_FROST_PRESET.gear,
          4: P4_FROST_PRESET.gear
        }
      },
      otherDefaults: OtherDefaults
    },
    {
      spec: Spec.SpecDeathknight,
      tooltip: "Dual-Wield Unholy DK",
      defaultName: "Unholy",
      iconUrl: getSpecIcon(Class.ClassDeathknight, 2),
      talents: UnholyDualWieldTalents.data,
      specOptions: DefaultUnholyOptions,
      consumes: DefaultConsumes,
      defaultFactionRaces: {
        [Faction.Unknown]: Race.RaceUnknown,
        [Faction.Alliance]: Race.RaceHuman,
        [Faction.Horde]: Race.RaceTroll
      },
      defaultGear: {
        [Faction.Unknown]: {},
        [Faction.Alliance]: {
          1: P1_UNHOLY_DW_PRESET.gear,
          2: P2_UNHOLY_DW_PRESET.gear,
          3: P3_UNHOLY_DW_PRESET.gear,
          4: P4_UNHOLY_DW_PRESET.gear
        },
        [Faction.Horde]: {
          1: P1_UNHOLY_DW_PRESET.gear,
          2: P2_UNHOLY_DW_PRESET.gear,
          3: P3_UNHOLY_DW_PRESET.gear,
          4: P4_UNHOLY_DW_PRESET.gear
        }
      },
      otherDefaults: OtherDefaults
    }
  ]
});
class DeathknightSimUI extends IndividualSimUI {
  constructor(parentElem, player) {
    super(parentElem, player, SPEC_CONFIG);
  }
}
export {
  DeathknightSimUI as D
};
//# sourceMappingURL=sim-122ceb46.chunk.js.map
