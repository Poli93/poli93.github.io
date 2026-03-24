import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e426fb94.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-13aeb1bb.chunk.js";
import { F as FeralDruidSimUI } from "./sim-a30769da.chunk.js";
import "./suggest_gems_action-d455bf00.chunk.js";
import "./apl_utils-78b76637.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-4fefa9cc.entry.js.map
