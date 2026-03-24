import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-964cf090.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-05e71d1e.chunk.js";
import { F as FeralDruidSimUI } from "./sim-f1f6d59d.chunk.js";
import "./suggest_gems_action-e7cf62bc.chunk.js";
import "./apl_utils-5d37fec7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-43a21343.entry.js.map
