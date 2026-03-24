import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9b794584.chunk.js";
import { H as HunterSimUI } from "./sim-541541e9.chunk.js";
import "./suggest_gems_action-434ba404.chunk.js";
import "./apl_utils-d7a38ada.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-29c3517c.entry.js.map
