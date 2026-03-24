import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-07b3b5d1.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c2442ae5.chunk.js";
import { W as WarriorSimUI } from "./sim-df7dac5d.chunk.js";
import "./suggest_gems_action-e4fab47f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-cb397674.entry.js.map
