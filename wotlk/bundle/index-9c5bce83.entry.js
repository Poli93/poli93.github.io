import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2944409a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d150ad87.chunk.js";
import { H as HunterSimUI } from "./sim-a1700507.chunk.js";
import "./suggest_gems_action-3f4873d4.chunk.js";
import "./apl_utils-b3e086f3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-9c5bce83.entry.js.map
