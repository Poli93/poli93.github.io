import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a210603b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-248cfd49.chunk.js";
import { F as FeralDruidSimUI } from "./sim-cd905b61.chunk.js";
import "./suggest_gems_action-52dc3cf9.chunk.js";
import "./apl_utils-a64a368d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-c8df73ae.entry.js.map
