import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7fac2714.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c0bb2c1f.chunk.js";
import { H as HunterSimUI } from "./sim-d01a8b05.chunk.js";
import "./suggest_gems_action-3d6bc725.chunk.js";
import "./apl_utils-509afa8e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-d85ecfd7.entry.js.map
