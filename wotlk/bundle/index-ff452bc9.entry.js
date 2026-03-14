import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a1c0fc35.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5bcac61a.chunk.js";
import { W as WarriorSimUI } from "./sim-707a42ba.chunk.js";
import "./suggest_gems_action-762606c2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-ff452bc9.entry.js.map
