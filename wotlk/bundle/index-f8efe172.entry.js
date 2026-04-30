import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3c31b24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-125f71ea.chunk.js";
import { H as HunterSimUI } from "./sim-e967795c.chunk.js";
import "./suggest_gems_action-d116c000.chunk.js";
import "./apl_utils-fbab9dd6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-f8efe172.entry.js.map
