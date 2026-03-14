import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-59497cd7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-663946ea.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-e1c8bf11.chunk.js";
import "./suggest_gems_action-ed99b675.chunk.js";
import "./apl_utils-69acc90a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-0bb4f4ad.entry.js.map
