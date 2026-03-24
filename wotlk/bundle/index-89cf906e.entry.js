import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c43488ac.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b461eda0.chunk.js";
import { F as FeralDruidSimUI } from "./sim-3c98cb69.chunk.js";
import "./suggest_gems_action-d22d64fe.chunk.js";
import "./apl_utils-442d206a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-89cf906e.entry.js.map
