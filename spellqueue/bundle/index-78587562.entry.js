import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-109244c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-67324d2e.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-04f73858.chunk.js";
import "./suggest_gems_action-a49152ee.chunk.js";
import "./apl_utils-ee1e7685.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-78587562.entry.js.map
