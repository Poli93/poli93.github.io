import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-141043ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-57ce044d.chunk.js";
import { H as HunterSimUI } from "./sim-28a2cca8.chunk.js";
import "./suggest_gems_action-78423fe6.chunk.js";
import "./apl_utils-d6b0e3d0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-ffeeb75d.entry.js.map
