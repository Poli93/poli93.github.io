import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a0059948.chunk.js";
import { F as FeralDruidSimUI } from "./sim-979ced08.chunk.js";
import "./suggest_gems_action-434ba404.chunk.js";
import "./apl_utils-d7a38ada.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-eec8cba3.entry.js.map
