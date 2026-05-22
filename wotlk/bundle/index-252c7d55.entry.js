import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e636ba95.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88c18280.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-344c3305.chunk.js";
import "./suggest_gems_action-e68867cf.chunk.js";
import "./apl_utils-e40bd5ea.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-252c7d55.entry.js.map
