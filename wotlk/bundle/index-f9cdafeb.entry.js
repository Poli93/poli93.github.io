import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-35762efe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2cd8c52b.chunk.js";
import { F as FeralDruidSimUI } from "./sim-0151d537.chunk.js";
import "./suggest_gems_action-b92a0af7.chunk.js";
import "./apl_utils-cd1ca910.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-f9cdafeb.entry.js.map
