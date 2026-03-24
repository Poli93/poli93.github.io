import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44bd0be2.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-011dd149.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-b1b03867.chunk.js";
import "./suggest_gems_action-7cca3ab3.chunk.js";
import "./apl_utils-1313fc57.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-de16b553.entry.js.map
