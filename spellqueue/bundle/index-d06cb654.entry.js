import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f9fcd582.chunk.js";
import { H as HunterSimUI } from "./sim-d223892d.chunk.js";
import "./suggest_gems_action-209188d4.chunk.js";
import "./apl_utils-4305ab4c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-d06cb654.entry.js.map
