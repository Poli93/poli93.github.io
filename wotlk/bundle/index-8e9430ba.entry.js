import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-964cf090.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-05e71d1e.chunk.js";
import { H as HunterSimUI } from "./sim-a0d7e770.chunk.js";
import "./suggest_gems_action-e7cf62bc.chunk.js";
import "./apl_utils-5d37fec7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-8e9430ba.entry.js.map
