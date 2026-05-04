import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-34a2d4f9.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-c646890a.chunk.js";
import "./suggest_gems_action-92714657.chunk.js";
import "./apl_utils-6c5744f5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-0986f899.entry.js.map
