import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-63791f5d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c51c782.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-516effb6.chunk.js";
import "./suggest_gems_action-612c9cca.chunk.js";
import "./apl_utils-dc071f5a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-90551eb6.entry.js.map
