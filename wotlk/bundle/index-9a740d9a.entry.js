import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e6efd6d6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-396fe00d.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-f4de3891.chunk.js";
import "./suggest_gems_action-360f3b95.chunk.js";
import "./apl_utils-2f955982.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-9a740d9a.entry.js.map
