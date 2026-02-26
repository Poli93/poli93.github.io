import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-03128551.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-85c1d700.chunk.js";
import { H as HunterSimUI } from "./sim-be630108.chunk.js";
import "./suggest_gems_action-4c5c2d45.chunk.js";
import "./apl_utils-9ba437a9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-b204c810.entry.js.map
