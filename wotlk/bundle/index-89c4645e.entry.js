import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-17d4b166.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ca375dac.chunk.js";
import { H as HunterSimUI } from "./sim-540f83ac.chunk.js";
import "./suggest_gems_action-5f097ada.chunk.js";
import "./apl_utils-0a664b27.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-89c4645e.entry.js.map
