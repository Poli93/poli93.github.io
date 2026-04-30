import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-63791f5d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-3e602214.chunk.js";
import { W as WarriorSimUI } from "./sim-81303b5e.chunk.js";
import "./suggest_gems_action-612c9cca.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-b4070be9.entry.js.map
