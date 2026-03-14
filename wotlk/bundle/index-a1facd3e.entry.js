import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e2875dd9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-964a534f.chunk.js";
import { H as HunterSimUI } from "./sim-1a4d9a08.chunk.js";
import "./suggest_gems_action-fe15e7b2.chunk.js";
import "./apl_utils-6a20dac4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-a1facd3e.entry.js.map
