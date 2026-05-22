import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5587748d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-abb39774.chunk.js";
import { H as HealingPriestSimUI } from "./sim-a964aaa6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-30511ecf.entry.js.map
