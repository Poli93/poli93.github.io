import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-be2a7d40.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e661af5d.chunk.js";
import { F as FeralDruidSimUI } from "./sim-87e18eda.chunk.js";
import "./suggest_gems_action-23325eb1.chunk.js";
import "./apl_utils-a819d6ed.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-738e2ca9.entry.js.map
