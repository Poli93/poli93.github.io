import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3604612a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fb7b54ab.chunk.js";
import { H as HunterSimUI } from "./sim-ff8e5796.chunk.js";
import "./suggest_gems_action-dd1fae4f.chunk.js";
import "./apl_utils-a354af7a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-0c9a22f7.entry.js.map
