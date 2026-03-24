import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d9de8996.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-8066a19e.chunk.js";
import { H as HunterSimUI } from "./sim-0ca414d3.chunk.js";
import "./suggest_gems_action-61716fed.chunk.js";
import "./apl_utils-4975625a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-70c02e1a.entry.js.map
