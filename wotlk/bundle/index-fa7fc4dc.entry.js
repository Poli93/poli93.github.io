import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-17d4b166.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88911a5d.chunk.js";
import { F as FeralDruidSimUI } from "./sim-cb1e2672.chunk.js";
import "./suggest_gems_action-5f097ada.chunk.js";
import "./apl_utils-0a664b27.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-fa7fc4dc.entry.js.map
