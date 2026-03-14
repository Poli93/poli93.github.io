import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8cdd1db5.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-62d5464b.chunk.js";
import { H as HunterSimUI } from "./sim-c5272121.chunk.js";
import "./suggest_gems_action-a4da58be.chunk.js";
import "./apl_utils-2e240f87.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-d281a26c.entry.js.map
