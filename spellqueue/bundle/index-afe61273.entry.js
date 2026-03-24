import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c43488ac.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b461eda0.chunk.js";
import { W as WarriorSimUI } from "./sim-44f1c20a.chunk.js";
import "./suggest_gems_action-d22d64fe.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-afe61273.entry.js.map
