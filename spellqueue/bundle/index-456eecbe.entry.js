import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-709fa214.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-32617444.chunk.js";
import { F as FeralDruidSimUI } from "./sim-28d77a78.chunk.js";
import "./suggest_gems_action-7b1231ac.chunk.js";
import "./apl_utils-0b1f81b7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-456eecbe.entry.js.map
