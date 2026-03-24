import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9f74df7a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-04a59d40.chunk.js";
import { H as HealingPriestSimUI } from "./sim-f79b40d2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-a82e30b3.entry.js.map
