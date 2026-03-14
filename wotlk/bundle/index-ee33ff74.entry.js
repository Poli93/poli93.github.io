import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0d67dd8d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2e8c760.chunk.js";
import { W as WarriorSimUI } from "./sim-15617332.chunk.js";
import "./suggest_gems_action-85b1b471.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-ee33ff74.entry.js.map
