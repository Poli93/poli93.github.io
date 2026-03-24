import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-709fa214.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-32617444.chunk.js";
import { H as HunterSimUI } from "./sim-fb085e72.chunk.js";
import "./suggest_gems_action-7b1231ac.chunk.js";
import "./apl_utils-0b1f81b7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-d95d9bc6.entry.js.map
