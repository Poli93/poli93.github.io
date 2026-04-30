import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-63791f5d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fe282dcc.chunk.js";
import { F as FeralDruidSimUI } from "./sim-c29a81c9.chunk.js";
import "./suggest_gems_action-612c9cca.chunk.js";
import "./apl_utils-dc071f5a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-2f5b62ff.entry.js.map
