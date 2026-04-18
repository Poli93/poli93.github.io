import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6ee98382.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b0122f6b.chunk.js";
import { W as WarriorSimUI } from "./sim-3d3972cf.chunk.js";
import "./suggest_gems_action-e8f2d0f1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-1567b8c4.entry.js.map
