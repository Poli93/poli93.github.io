import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-56d5fee9.chunk.js";
import { W as WarriorSimUI } from "./sim-f9d504ac.chunk.js";
import "./suggest_gems_action-92714657.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-ffdb199b.entry.js.map
