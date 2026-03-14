import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f36ec333.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1fc40317.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-14771d6a.chunk.js";
import "./suggest_gems_action-cbc6bacc.chunk.js";
import "./apl_utils-86538fac.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-ea4a0fb0.entry.js.map
