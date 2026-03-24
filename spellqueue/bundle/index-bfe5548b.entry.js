import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f31a1a5a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f4910b83.chunk.js";
import { F as FeralDruidSimUI } from "./sim-ebef372e.chunk.js";
import "./suggest_gems_action-1ebed706.chunk.js";
import "./apl_utils-8f9681b8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-bfe5548b.entry.js.map
