import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d65f1108.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-60b1785a.chunk.js";
import "./suggest_gems_action-434ba404.chunk.js";
import "./apl_utils-d7a38ada.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-0d6502ba.entry.js.map
