import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-109244c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-67324d2e.chunk.js";
import { F as FeralDruidSimUI } from "./sim-6c8e112c.chunk.js";
import "./suggest_gems_action-a49152ee.chunk.js";
import "./apl_utils-ee1e7685.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-ac4dc6c3.entry.js.map
