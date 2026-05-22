import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5587748d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-abb39774.chunk.js";
import { F as FeralDruidSimUI } from "./sim-17fc9dd0.chunk.js";
import "./suggest_gems_action-ae4fd5e7.chunk.js";
import "./apl_utils-da6847c0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-2de04d82.entry.js.map
