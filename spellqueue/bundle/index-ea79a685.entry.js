import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-271e4b09.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d572afca.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-58e9aff0.chunk.js";
import "./suggest_gems_action-3d4fac50.chunk.js";
import "./apl_utils-81e4470a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-ea79a685.entry.js.map
