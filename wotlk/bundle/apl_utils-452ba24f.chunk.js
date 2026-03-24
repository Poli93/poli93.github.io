import { dE as APLPrepullAction, dx as APLAction, bZ as ActionID } from "./detailed_results-e3dc98df.chunk.js";
function prepullPotionAction(doAt) {
  return APLPrepullAction.fromJsonString(`{"action":{"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}},"doAtValue":{"const":{"val":"${doAt || "-1s"}"}}}`);
}
function autocastCooldownsAction(startAt) {
  if (startAt) {
    return APLAction.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"currentTime":{}},"rhs":{"const":{"val":"${startAt}"}}}},"autocastOtherCooldowns":{}}`);
  } else {
    return APLAction.fromJsonString(`{"autocastOtherCooldowns":{}}`);
  }
}
function scheduledCooldownAction(schedule, actionId) {
  return APLAction.fromJsonString(`{"schedule":{"schedule":"${schedule}","innerAction":{"castSpell":{"spellId":${ActionID.toJsonString(actionId)}}}}}`);
}
function simpleCooldownActions(cooldowns) {
  return cooldowns.cooldowns.filter((cd) => cd.id).map((cd) => {
    const schedule = cd.timings.map((timing) => timing.toFixed(1) + "s").join(", ");
    return scheduledCooldownAction(schedule, cd.id);
  });
}
function standardCooldownDefaults(cooldowns, prepotAt, startAutocastCDsAt) {
  return [
    [prepullPotionAction(prepotAt)],
    [
      autocastCooldownsAction(startAutocastCDsAt),
      simpleCooldownActions(cooldowns)
    ].flat()
  ];
}
export {
  standardCooldownDefaults as s
};
//# sourceMappingURL=apl_utils-452ba24f.chunk.js.map
