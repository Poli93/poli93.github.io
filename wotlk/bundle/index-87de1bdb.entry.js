import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3a46eb1b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7847edc6.chunk.js";
import { H as HealingPriestSimUI } from "./sim-11dd4f0f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-87de1bdb.entry.js.map
