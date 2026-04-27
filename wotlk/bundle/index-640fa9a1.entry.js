import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a96a96f.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9b77de94.chunk.js";
import { W as WarriorSimUI } from "./sim-e6156bff.chunk.js";
import "./suggest_gems_action-dfcd95d0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-640fa9a1.entry.js.map
