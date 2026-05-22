import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6a63acbd.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-814c7212.chunk.js";
import { F as FeralDruidSimUI } from "./sim-57c5f43c.chunk.js";
import "./suggest_gems_action-968202d1.chunk.js";
import "./apl_utils-7b99ad8c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-2f819028.entry.js.map
