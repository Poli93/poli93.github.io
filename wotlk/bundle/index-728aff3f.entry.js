import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-40ebb67d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-83b57a2f.chunk.js";
import { F as FeralDruidSimUI } from "./sim-66190ab8.chunk.js";
import "./suggest_gems_action-72f231bf.chunk.js";
import "./apl_utils-d90203fd.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-728aff3f.entry.js.map
