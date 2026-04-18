import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6ee98382.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b0122f6b.chunk.js";
import { F as FeralDruidSimUI } from "./sim-862518b3.chunk.js";
import "./suggest_gems_action-e8f2d0f1.chunk.js";
import "./apl_utils-81af3877.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-8d0b4e1c.entry.js.map
