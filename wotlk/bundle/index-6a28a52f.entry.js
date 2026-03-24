import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-271e4b09.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d572afca.chunk.js";
import { W as WarriorSimUI } from "./sim-8dd379ce.chunk.js";
import "./suggest_gems_action-3d4fac50.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-6a28a52f.entry.js.map
