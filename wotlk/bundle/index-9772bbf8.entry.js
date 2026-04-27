import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c8b5fc2a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-024ead3f.chunk.js";
import { W as WarriorSimUI } from "./sim-5735fe9d.chunk.js";
import "./suggest_gems_action-2182e9e0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-9772bbf8.entry.js.map
