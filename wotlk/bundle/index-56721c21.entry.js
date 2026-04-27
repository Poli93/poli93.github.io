import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c8b5fc2a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-024ead3f.chunk.js";
import { F as FeralDruidSimUI } from "./sim-da3dcd58.chunk.js";
import "./suggest_gems_action-2182e9e0.chunk.js";
import "./apl_utils-299bd710.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-56721c21.entry.js.map
