import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-274ace4d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-78237b98.chunk.js";
import { F as FeralDruidSimUI } from "./sim-7f76f19b.chunk.js";
import "./suggest_gems_action-0f079dd7.chunk.js";
import "./apl_utils-1cce09b1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-b5cf34ce.entry.js.map
