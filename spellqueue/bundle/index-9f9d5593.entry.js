import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-57eefc71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-84fc69fa.chunk.js";
import { W as WarriorSimUI } from "./sim-92c6acc6.chunk.js";
import "./suggest_gems_action-af5939cb.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-9f9d5593.entry.js.map
