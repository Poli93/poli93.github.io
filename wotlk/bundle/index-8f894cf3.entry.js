import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e6efd6d6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-396fe00d.chunk.js";
import { H as HunterSimUI } from "./sim-06ecf9e9.chunk.js";
import "./suggest_gems_action-360f3b95.chunk.js";
import "./apl_utils-2f955982.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-8f894cf3.entry.js.map
