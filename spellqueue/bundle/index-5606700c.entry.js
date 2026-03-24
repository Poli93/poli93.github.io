import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5a4fc7d0.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6b56c262.chunk.js";
import { F as FeralDruidSimUI } from "./sim-ad3742ef.chunk.js";
import "./suggest_gems_action-0507416e.chunk.js";
import "./apl_utils-ac33ac4f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-5606700c.entry.js.map
