import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0d67dd8d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2e8c760.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-091d4c7f.chunk.js";
import "./suggest_gems_action-85b1b471.chunk.js";
import "./apl_utils-5d857760.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-bb0c1d5c.entry.js.map
