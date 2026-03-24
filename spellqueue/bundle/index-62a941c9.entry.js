import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-141043ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-57ce044d.chunk.js";
import { F as FeralDruidSimUI } from "./sim-4ffa5cdc.chunk.js";
import "./suggest_gems_action-78423fe6.chunk.js";
import "./apl_utils-d6b0e3d0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-62a941c9.entry.js.map
