import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b1386cfe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ad4c2cb1.chunk.js";
import { W as WarriorSimUI } from "./sim-edb71505.chunk.js";
import "./suggest_gems_action-028be518.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-1a133476.entry.js.map
