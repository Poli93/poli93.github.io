import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-07b3b5d1.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c2442ae5.chunk.js";
import { F as FeralDruidSimUI } from "./sim-7e2a3133.chunk.js";
import "./suggest_gems_action-e4fab47f.chunk.js";
import "./apl_utils-e4b44df3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-7c432cf3.entry.js.map
