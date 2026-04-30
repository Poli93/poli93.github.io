import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a280e993.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b73d15d3.chunk.js";
import { H as HunterSimUI } from "./sim-c4134a47.chunk.js";
import "./suggest_gems_action-ab4db2d2.chunk.js";
import "./apl_utils-aa8b37c5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-9e453965.entry.js.map
