import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d0099360.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89ac6fe3.chunk.js";
import { W as WarriorSimUI } from "./sim-f4ef5688.chunk.js";
import "./suggest_gems_action-109d7c7b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-7048c72a.entry.js.map
