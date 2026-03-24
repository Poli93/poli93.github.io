import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f36ec333.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-586df0b2.chunk.js";
import { F as FeralDruidSimUI } from "./sim-3b1c5236.chunk.js";
import "./suggest_gems_action-cbc6bacc.chunk.js";
import "./apl_utils-86538fac.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-d47f7f95.entry.js.map
