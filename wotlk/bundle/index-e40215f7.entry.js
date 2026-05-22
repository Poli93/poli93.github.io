import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6881a4e3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fccbd9e0.chunk.js";
import { W as WarriorSimUI } from "./sim-a8c9eb77.chunk.js";
import "./suggest_gems_action-120ac3d4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-e40215f7.entry.js.map
