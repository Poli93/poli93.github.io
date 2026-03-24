import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-470c5606.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f54e38e1.chunk.js";
import { F as FeralDruidSimUI } from "./sim-8a3b8383.chunk.js";
import "./suggest_gems_action-ea74df26.chunk.js";
import "./apl_utils-f19e921c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-69f89f59.entry.js.map
