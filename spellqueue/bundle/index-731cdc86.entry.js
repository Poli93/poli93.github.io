import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9f74df7a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-04a59d40.chunk.js";
import { W as WarriorSimUI } from "./sim-35ece8ab.chunk.js";
import "./suggest_gems_action-93632f67.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-731cdc86.entry.js.map
