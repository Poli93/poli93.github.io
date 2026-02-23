import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b23e354e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2c2e186.chunk.js";
import { W as WarriorSimUI } from "./sim-b2d7c91f.chunk.js";
import "./suggest_gems_action-817dd80d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-6cf75d53.entry.js.map
