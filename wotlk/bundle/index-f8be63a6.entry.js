import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6c9cf48c.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-1c308503.chunk.js";
import "./suggest_gems_action-92714657.chunk.js";
import "./apl_utils-6c5744f5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-f8be63a6.entry.js.map
