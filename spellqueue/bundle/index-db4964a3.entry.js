import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4138557e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e8f85000.chunk.js";
import { H as HunterSimUI } from "./sim-745d8c17.chunk.js";
import "./suggest_gems_action-7cdb53a6.chunk.js";
import "./apl_utils-c9c6eca2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-db4964a3.entry.js.map
