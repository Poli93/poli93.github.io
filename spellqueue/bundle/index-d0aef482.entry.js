import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d0099360.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89ac6fe3.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-a90fcca7.chunk.js";
import "./suggest_gems_action-109d7c7b.chunk.js";
import "./apl_utils-6ff66353.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-d0aef482.entry.js.map
