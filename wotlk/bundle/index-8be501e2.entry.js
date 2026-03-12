import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9f74df7a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-04a59d40.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-e6f52a30.chunk.js";
import "./suggest_gems_action-93632f67.chunk.js";
import "./apl_utils-d4e58fdb.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-8be501e2.entry.js.map
