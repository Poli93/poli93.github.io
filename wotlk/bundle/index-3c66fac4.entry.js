import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-40ebb67d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-19a4e9ac.chunk.js";
import { H as HunterSimUI } from "./sim-683ffff0.chunk.js";
import "./suggest_gems_action-72f231bf.chunk.js";
import "./apl_utils-d90203fd.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-3c66fac4.entry.js.map
