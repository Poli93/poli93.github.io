import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-709fa214.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-32617444.chunk.js";
import { W as WarriorSimUI } from "./sim-525bb583.chunk.js";
import "./suggest_gems_action-7b1231ac.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-8c20b289.entry.js.map
