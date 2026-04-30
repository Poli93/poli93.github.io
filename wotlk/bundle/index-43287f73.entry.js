import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3c31b24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c5b239b8.chunk.js";
import { H as HunterSimUI } from "./sim-0db251f3.chunk.js";
import "./suggest_gems_action-d116c000.chunk.js";
import "./apl_utils-fbab9dd6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-43287f73.entry.js.map
