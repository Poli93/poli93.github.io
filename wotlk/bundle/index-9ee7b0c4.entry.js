import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-75bc3b97.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2ccc9e15.chunk.js";
import { F as FeralDruidSimUI } from "./sim-3a2b2144.chunk.js";
import "./suggest_gems_action-7d3c1774.chunk.js";
import "./apl_utils-f88fb625.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-9ee7b0c4.entry.js.map
