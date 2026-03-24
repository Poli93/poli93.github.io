var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { bE as GemColor, $ as Profession, T as TypedEvent, G as Stats, a2 as Stat, V as ItemSlot } from "./detailed_results-470c5606.chunk.js";
const _GemOptimizer = class {
  constructor(simUI) {
    __publicField(this, "player");
    __publicField(this, "sim");
    __publicField(this, "gemPriorityByColor");
    __publicField(this, "epWeights");
    __publicField(this, "useJcGems");
    __publicField(this, "isBlacksmithing");
    __publicField(this, "numSocketedJcGems");
    __publicField(this, "jcUpgradePriority");
    this.player = simUI.player;
    this.sim = simUI.sim;
    this.gemPriorityByColor = {};
    for (var gemColor of _GemOptimizer.allGemColors) {
      this.gemPriorityByColor[gemColor] = new Array();
    }
    this.jcUpgradePriority = new Array();
    simUI.addAction("Suggest Gems", "suggest-gems-action", async () => {
      this.optimizeGems();
    });
  }
  async optimizeGems() {
    let optimizedGear = this.player.getGear().withoutGems();
    this.numSocketedJcGems = 0;
    this.epWeights = this.player.getEpWeights();
    this.useJcGems = this.player.hasProfession(Profession.Jewelcrafting);
    this.isBlacksmithing = this.player.isBlacksmithing();
    const ungemmedStats = await this.updateGear(optimizedGear);
    this.updateGemPriority(optimizedGear, ungemmedStats);
    optimizedGear = optimizedGear.withMetaGem(this.sim.db.lookupGem(this.metaGemID));
    optimizedGear = this.activateMetaGem(optimizedGear);
    await this.updateGear(optimizedGear);
    for (var gemColor of _GemOptimizer.allGemColors) {
      if (this.gemPriorityByColor[gemColor].length > 0) {
        optimizedGear = await this.fillGemsByColor(optimizedGear, gemColor);
        if (this.useJcGems) {
          optimizedGear = await this.substituteJcGems(optimizedGear);
        }
      }
    }
  }
  async updateGear(gear) {
    this.player.setGear(TypedEvent.nextEventID(), gear);
    await this.sim.updateCharacterStats(TypedEvent.nextEventID());
    return Stats.fromProto(this.player.getCurrentStats().finalStats);
  }
  findStrongestSocketBonus(gear, color, singleOnly, blacklistedColor) {
    let optimalSlot = null;
    let maxSocketBonusEP = 1e-8;
    for (var slot of gear.getItemSlots()) {
      const item = gear.getEquippedItem(slot);
      if (!item) {
        continue;
      }
      if (item.numSocketsOfColor(blacklistedColor) != 0) {
        continue;
      }
      const numSockets = item.numSocketsOfColor(color);
      if (numSockets == 0 || singleOnly && numSockets != 1) {
        continue;
      }
      const socketBonusEP = new Stats(item.item.socketBonus).computeEP(this.epWeights);
      const normalizedEP = socketBonusEP / numSockets;
      if (normalizedEP > maxSocketBonusEP) {
        optimalSlot = slot;
        maxSocketBonusEP = normalizedEP;
      }
    }
    return { itemSlot: optimalSlot, socketBonus: maxSocketBonusEP };
  }
  socketGemInFirstMatchingSocket(gear, itemSlot, colorToMatch, gemId) {
    if (itemSlot != null) {
      const item = gear.getEquippedItem(itemSlot);
      if (!item) {
        return gear;
      }
      for (const [socketIdx, socketColor] of item.allSocketColors().entries()) {
        if (socketColor == colorToMatch) {
          return gear.withEquippedItem(itemSlot, item.withGem(this.sim.db.lookupGem(gemId), socketIdx), true);
        }
      }
    }
    return gear;
  }
  async fillGemsByColor(gear, color) {
    const socketList = this.findSocketsByColor(gear, color);
    return await this.fillGemsToCaps(gear, socketList, this.gemPriorityByColor[color], 0, 0);
  }
  findSocketsByColor(gear, color) {
    const socketList = new Array();
    for (var slot of gear.getItemSlots()) {
      const item = gear.getEquippedItem(slot);
      if (!item) {
        continue;
      }
      for (const [socketIdx, socketColor] of item.curSocketColors(this.isBlacksmithing).entries()) {
        if (item.hasSocketedGem(socketIdx)) {
          continue;
        }
        if (this.allowGemInSocket(color, socketColor, slot, item)) {
          socketList.push({ itemSlot: slot, socketIdx });
        }
      }
    }
    return socketList;
  }
  async substituteJcGems(gear) {
    let updatedGear = gear;
    let gemIdx = 0;
    while (this.numSocketedJcGems < 3 && gemIdx < this.jcUpgradePriority.length) {
      const gemData = this.jcUpgradePriority[gemIdx];
      const baseGem = this.sim.db.lookupGem(gemData.gemId);
      if (!updatedGear.getAllGems(this.isBlacksmithing).includes(baseGem)) {
        gemIdx += 1;
        continue;
      }
      const upgradedGem = this.sim.db.lookupGem(_GemOptimizer.jcUpgradesById[gemData.gemId]);
      const testGear = updatedGear.withSingleGemSubstitution(baseGem, upgradedGem, this.isBlacksmithing);
      const newStats = await this.updateGear(testGear);
      if (newStats.belowCaps(gemData.statCaps)) {
        updatedGear = testGear;
        this.numSocketedJcGems += 1;
      } else {
        await this.updateGear(updatedGear);
        gemIdx += 1;
      }
    }
    return updatedGear;
  }
  async fillGemsToCaps(gear, socketList, gemCaps, numPasses, firstIdx) {
    let updatedGear = gear;
    const currentGem = this.sim.db.lookupGem(gemCaps[numPasses].gemId);
    if (numPasses == 0) {
      for (var socketData of socketList.slice(firstIdx)) {
        updatedGear = updatedGear.withGem(socketData.itemSlot, socketData.socketIdx, currentGem);
      }
    }
    let newStats = await this.updateGear(updatedGear);
    const currentCap = gemCaps[numPasses].statCaps;
    if (newStats.belowCaps(currentCap) || numPasses == gemCaps.length - 1) {
      return updatedGear;
    }
    const nextGem = this.sim.db.lookupGem(gemCaps[numPasses + 1].gemId);
    const nextCap = gemCaps[numPasses + 1].statCaps;
    let capForReplacement = currentCap.subtract(nextCap);
    if (currentCap.computeEP(capForReplacement) <= 0) {
      capForReplacement = currentCap;
    }
    for (var idx = socketList.length - 1; idx >= firstIdx; idx--) {
      if (newStats.belowCaps(capForReplacement)) {
        break;
      }
      updatedGear = updatedGear.withGem(socketList[idx].itemSlot, socketList[idx].socketIdx, nextGem);
      newStats = await this.updateGear(updatedGear);
    }
    let nextIdx = idx + 1;
    if (!newStats.belowCaps(currentCap)) {
      nextIdx = firstIdx;
    }
    return await this.fillGemsToCaps(updatedGear, socketList, gemCaps, numPasses + 1, nextIdx);
  }
};
let GemOptimizer = _GemOptimizer;
__publicField(GemOptimizer, "allGemColors", [GemColor.GemColorRed, GemColor.GemColorYellow, GemColor.GemColorBlue]);
__publicField(GemOptimizer, "jcUpgradesById", {
  40118: 42154,
  40125: 42156,
  40112: 42143,
  40111: 42142,
  40119: 36767
});
class PhysicalDPSGemOptimizer extends GemOptimizer {
  constructor(simUI, useArpGems, useExpGems, useAgiGems, useStrGems) {
    super(simUI);
    __publicField(this, "metaGemID", 41398);
    __publicField(this, "arpSlop", 11);
    __publicField(this, "expSlop", 4);
    __publicField(this, "hitTarget", 8 * 32.79);
    __publicField(this, "hitSlop", 4);
    __publicField(this, "useArpGems");
    __publicField(this, "useExpGems");
    __publicField(this, "useAgiGems");
    __publicField(this, "useStrGems");
    __publicField(this, "arpTarget");
    __publicField(this, "passiveArp");
    __publicField(this, "arpStackDetected");
    __publicField(this, "passiveHit");
    __publicField(this, "tearSlot");
    this.useArpGems = useArpGems;
    this.useExpGems = useExpGems;
    this.useAgiGems = useAgiGems;
    this.useStrGems = useStrGems;
  }
  updateGemPriority(ungemmedGear, passiveStats) {
    this.arpTarget = this.calcArpTarget(ungemmedGear);
    const critCap = this.calcCritCap(ungemmedGear);
    const expCap = new Stats().withStat(Stat.StatExpertise, this.calcExpTarget() + this.expSlop);
    this.passiveHit = passiveStats.getStat(Stat.StatMeleeHit);
    const hitCap = new Stats().withStat(Stat.StatMeleeHit, this.hitTarget + this.hitSlop);
    this.tearSlot = null;
    this.passiveArp = passiveStats.getStat(Stat.StatArmorPenetration);
    this.arpStackDetected = this.detectArpStackConfiguration(ungemmedGear);
    const arpSlop = this.arpStackDetected ? 4 : this.arpSlop;
    const arpCap = new Stats().withStat(Stat.StatArmorPenetration, this.arpTarget + arpSlop);
    const redGemCaps = new Array();
    if (this.useArpGems) {
      redGemCaps.push({ gemId: 40117, statCaps: arpCap });
    }
    if (this.useExpGems) {
      redGemCaps.push({ gemId: 40118, statCaps: expCap });
    }
    if (this.useAgiGems) {
      redGemCaps.push({ gemId: 40112, statCaps: critCap });
    }
    if (this.useStrGems) {
      redGemCaps.push({ gemId: 40111, statCaps: new Stats() });
    }
    this.gemPriorityByColor[GemColor.GemColorRed] = redGemCaps;
    const yellowGemCaps = new Array();
    if (this.useExpGems) {
      yellowGemCaps.push({ gemId: 40162, statCaps: hitCap.add(expCap) });
    }
    yellowGemCaps.push({ gemId: 40125, statCaps: hitCap });
    if (this.arpStackDetected) {
      yellowGemCaps.push({ gemId: 40117, statCaps: arpCap });
    }
    if (this.useExpGems) {
      yellowGemCaps.push({ gemId: 40162, statCaps: hitCap.add(expCap) });
    }
    if (this.useAgiGems) {
      yellowGemCaps.push({ gemId: 40148, statCaps: hitCap.add(critCap) });
    }
    if (this.useStrGems) {
      yellowGemCaps.push({ gemId: 40143, statCaps: hitCap });
    }
    if (this.useAgiGems) {
      yellowGemCaps.push({ gemId: 40147, statCaps: critCap });
    }
    if (this.useStrGems) {
      yellowGemCaps.push({ gemId: 40142, statCaps: critCap });
    }
    if (this.useStrGems) {
      yellowGemCaps.push({ gemId: 40146, statCaps: new Stats() });
    }
    this.gemPriorityByColor[GemColor.GemColorYellow] = yellowGemCaps;
    this.jcUpgradePriority = new Array();
    if (this.useExpGems) {
      this.jcUpgradePriority.push({ gemId: 40118, statCaps: expCap });
    }
    if (this.useAgiGems) {
      this.jcUpgradePriority.push({ gemId: 40112, statCaps: critCap });
    }
    if (this.useStrGems) {
      this.jcUpgradePriority.push({ gemId: 40111, statCaps: new Stats() });
    }
  }
  detectArpStackConfiguration(ungemmedGear) {
    if (!this.useArpGems) {
      return false;
    }
    const dummyRedSocketList = this.findSocketsByColor(ungemmedGear, GemColor.GemColorRed);
    const numRedSockets = dummyRedSocketList.length - 2;
    let projectedArp = this.passiveArp + 20 * numRedSockets;
    if (this.useJcGems) {
      projectedArp += 42;
    }
    return this.arpTarget > 1e3 && projectedArp > 648 && projectedArp + 20 < this.arpTarget + 4;
  }
  activateMetaGem(gear) {
    const blueSlotCandidate = this.findBlueTearSlot(gear);
    const yellowSlotCandidate = this.findYellowTearSlot(gear);
    let tearColor = GemColor.GemColorBlue;
    this.tearSlot = blueSlotCandidate.itemSlot;
    if (this.tearSlot == null || this.arpStackDetected && yellowSlotCandidate.socketBonus > blueSlotCandidate.socketBonus) {
      tearColor = GemColor.GemColorYellow;
      this.tearSlot = yellowSlotCandidate.itemSlot;
    }
    return this.socketTear(gear, tearColor);
  }
  socketTear(gear, tearColor) {
    return this.socketGemInFirstMatchingSocket(gear, this.tearSlot, tearColor, 49110);
  }
  findBlueTearSlot(gear) {
    const singleOnly = true;
    const blacklistedColor = this.arpStackDetected ? GemColor.GemColorYellow : null;
    return this.findStrongestSocketBonus(gear, GemColor.GemColorBlue, singleOnly, blacklistedColor);
  }
  findYellowTearSlot(gear) {
    return this.findStrongestSocketBonus(gear, GemColor.GemColorYellow, false, GemColor.GemColorBlue);
  }
  allowGemInSocket(gemColor, socketColor, itemSlot, item) {
    const ignoreYellowSockets = item.numSocketsOfColor(GemColor.GemColorBlue) > 0 && itemSlot != this.tearSlot;
    let matchYellowSocket = false;
    if (socketColor == GemColor.GemColorYellow && !ignoreYellowSockets) {
      matchYellowSocket = new Stats(item.item.socketBonus).computeEP(this.epWeights) > 1e-8;
    }
    return gemColor == GemColor.GemColorYellow && matchYellowSocket || gemColor == GemColor.GemColorRed && !matchYellowSocket;
  }
  findSocketsByColor(gear, color) {
    const socketList = super.findSocketsByColor(gear, color);
    if (this.arpStackDetected && color == GemColor.GemColorYellow) {
      this.sortYellowSockets(gear, socketList);
    }
    return socketList;
  }
  sortYellowSockets(gear, yellowSocketList) {
    yellowSocketList.sort((a, b) => {
      const slot1 = a.itemSlot;
      const slot2 = b.itemSlot;
      if (slot1 == slot2) {
        return 0;
      }
      if (slot1 == this.tearSlot) {
        return -1;
      }
      if (slot2 == this.tearSlot) {
        return 1;
      }
      const item1 = gear.getEquippedItem(slot1);
      const bonus1 = new Stats(item1.item.socketBonus).computeEP(this.epWeights);
      const item2 = gear.getEquippedItem(slot2);
      const bonus2 = new Stats(item2.item.socketBonus).computeEP(this.epWeights);
      return bonus2 / item2.numSocketsOfColor(GemColor.GemColorYellow) - bonus1 / item1.numSocketsOfColor(GemColor.GemColorYellow);
    });
  }
  calcArpTarget(gear) {
    let arpTarget = 1399;
    if (gear.hasTrinket(45931)) {
      arpTarget -= 665;
    } else if (gear.hasTrinket(50198)) {
      arpTarget -= 678;
    } else if (gear.hasTrinket(40256)) {
      arpTarget -= 612;
    }
    const weapon = gear.getEquippedItem(ItemSlot.ItemSlotMainHand);
    if (weapon?.enchant?.effectId == 3225) {
      arpTarget -= 120;
    }
    return arpTarget;
  }
  calcExpTarget() {
    return 6.5 * 32.79;
  }
  calcCritCap(gear) {
    return new Stats();
  }
  async fillGemsByColor(gear, color) {
    let updatedGear = gear;
    if (color == GemColor.GemColorRed && this.useArpGems && this.useJcGems) {
      updatedGear = this.optimizeJcArpGems(updatedGear);
    }
    if (color == GemColor.GemColorYellow && this.useJcGems && this.numSocketedJcGems < 3) {
      updatedGear = this.fillJcHitGems(updatedGear);
    }
    return await super.fillGemsByColor(updatedGear, color);
  }
  calcDistanceToArpTarget(numJcArpGems, numRedSockets) {
    const numNormalArpGems = Math.max(0, Math.min(numRedSockets - 3, Math.floor((this.arpTarget + this.arpSlop - this.passiveArp - 34 * numJcArpGems) / 20)));
    const projectedArp = this.passiveArp + 34 * numJcArpGems + 20 * numNormalArpGems;
    return Math.abs(projectedArp - this.arpTarget);
  }
  optimizeJcArpGems(gear) {
    const redSocketList = this.findSocketsByColor(gear, GemColor.GemColorRed);
    const numRedSockets = redSocketList.length;
    let optimalJcArpGems = [0, 1, 2, 3].reduce((m, x) => this.calcDistanceToArpTarget(m, numRedSockets) < this.calcDistanceToArpTarget(x, numRedSockets) ? m : x);
    optimalJcArpGems = Math.min(optimalJcArpGems, numRedSockets);
    let updatedGear = gear;
    for (let i = 0; i < optimalJcArpGems; i++) {
      updatedGear = updatedGear.withGem(redSocketList[i].itemSlot, redSocketList[i].socketIdx, this.sim.db.lookupGem(42153));
    }
    this.numSocketedJcGems = optimalJcArpGems;
    return updatedGear;
  }
  fillJcHitGems(gear) {
    const yellowSocketList = this.findSocketsByColor(gear, GemColor.GemColorYellow);
    const maxJcHitGems = Math.min(3 - this.numSocketedJcGems, yellowSocketList.length);
    const desiredJcHitGems = Math.max(0, Math.floor((this.hitTarget + this.hitSlop - this.passiveHit) / 34));
    const numJcHitGems = Math.min(desiredJcHitGems, maxJcHitGems);
    let updatedGear = gear;
    for (let i = 0; i < numJcHitGems; i++) {
      updatedGear = updatedGear.withGem(yellowSocketList[i].itemSlot, yellowSocketList[i].socketIdx, this.sim.db.lookupGem(42156));
    }
    this.numSocketedJcGems += numJcHitGems;
    return updatedGear;
  }
}
class TankGemOptimizer extends GemOptimizer {
  constructor() {
    super(...arguments);
    __publicField(this, "metaGemID", 41380);
  }
  updateGemPriority(ungemmedGear, passiveStats) {
    const blueGemCaps = new Array();
    blueGemCaps.push({ gemId: 40119, statCaps: new Stats() });
    this.gemPriorityByColor[GemColor.GemColorBlue] = blueGemCaps;
    this.jcUpgradePriority = blueGemCaps;
  }
  activateMetaGem(gear) {
    return this.socketGemInFirstMatchingSocket(gear, this.findStrongestSocketBonus(gear, GemColor.GemColorRed, true, GemColor.GemColorYellow).itemSlot, GemColor.GemColorRed, 40130);
  }
  allowGemInSocket(gemColor, socketColor, itemSlot, item) {
    return gemColor == GemColor.GemColorBlue;
  }
}
export {
  PhysicalDPSGemOptimizer as P,
  TankGemOptimizer as T
};
//# sourceMappingURL=suggest_gems_action-ea74df26.chunk.js.map
