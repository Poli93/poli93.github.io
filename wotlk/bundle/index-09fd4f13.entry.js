import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-57eefc71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-84fc69fa.chunk.js";
import { H as HunterSimUI } from "./sim-fa028ffb.chunk.js";
import "./suggest_gems_action-af5939cb.chunk.js";
import "./apl_utils-173c99e1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-09fd4f13.entry.js.map
