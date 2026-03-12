import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9ce6d3b7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-615ad7c6.chunk.js";
import { H as HunterSimUI } from "./sim-46f40e7e.chunk.js";
import "./suggest_gems_action-93f321d1.chunk.js";
import "./apl_utils-f7aae70e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-2b703cf7.entry.js.map
