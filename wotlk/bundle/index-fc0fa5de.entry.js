import "./index-6d46f689.chunk.js";
import { S as Sim, P as Player, a as Spec, T as TypedEvent } from "./preset_utils-4f0e8fc3.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-9f790acd.chunk.js";
import "./presets-3a297aa5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-fc0fa5de.entry.js.map
