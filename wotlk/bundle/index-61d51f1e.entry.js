import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-70dd77ea.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1a8b6832.chunk.js";
import { H as HunterSimUI } from "./sim-aa298c08.chunk.js";
import "./suggest_gems_action-74dcb13e.chunk.js";
import "./apl_utils-6e861b9d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-61d51f1e.entry.js.map
