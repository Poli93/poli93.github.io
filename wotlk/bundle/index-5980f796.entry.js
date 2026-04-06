import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-35762efe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e0dd76be.chunk.js";
import { W as WarriorSimUI } from "./sim-2d01a17e.chunk.js";
import "./suggest_gems_action-b92a0af7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-5980f796.entry.js.map
