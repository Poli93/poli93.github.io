import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0c7a5318.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-0aa6a54e.chunk.js";
import { F as FeralDruidSimUI } from "./sim-28288e04.chunk.js";
import "./suggest_gems_action-17d0fad0.chunk.js";
import "./apl_utils-d7088b3a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-4ebd4bc2.entry.js.map
