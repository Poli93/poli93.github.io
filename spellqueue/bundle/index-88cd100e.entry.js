import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-52c21361.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c7ceafff.chunk.js";
import { F as FeralDruidSimUI } from "./sim-fac52c90.chunk.js";
import "./suggest_gems_action-56cdbcfc.chunk.js";
import "./apl_utils-95a27238.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-88cd100e.entry.js.map
