import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3c31b24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c5b239b8.chunk.js";
import { F as FeralDruidSimUI } from "./sim-b969925f.chunk.js";
import "./suggest_gems_action-d116c000.chunk.js";
import "./apl_utils-fbab9dd6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-f0e813c4.entry.js.map
