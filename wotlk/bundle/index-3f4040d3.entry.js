import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-52c21361.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c7ceafff.chunk.js";
import { H as HunterSimUI } from "./sim-6611e358.chunk.js";
import "./suggest_gems_action-56cdbcfc.chunk.js";
import "./apl_utils-95a27238.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-3f4040d3.entry.js.map
