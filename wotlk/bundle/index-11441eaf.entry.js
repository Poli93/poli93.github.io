import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3a46eb1b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7847edc6.chunk.js";
import { F as FeralDruidSimUI } from "./sim-7a466018.chunk.js";
import "./suggest_gems_action-42d30a74.chunk.js";
import "./apl_utils-3bd1f0b4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-11441eaf.entry.js.map
