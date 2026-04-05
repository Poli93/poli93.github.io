import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-35762efe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2cd8c52b.chunk.js";
import { H as HunterSimUI } from "./sim-e2f0f96c.chunk.js";
import "./suggest_gems_action-b92a0af7.chunk.js";
import "./apl_utils-cd1ca910.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-4c1e79e4.entry.js.map
