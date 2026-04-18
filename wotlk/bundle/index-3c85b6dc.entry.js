import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6ee98382.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b0122f6b.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-c27b0436.chunk.js";
import "./suggest_gems_action-e8f2d0f1.chunk.js";
import "./apl_utils-81af3877.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-3c85b6dc.entry.js.map
