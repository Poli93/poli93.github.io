import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c59beab6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc872ded.chunk.js";
import { W as WarriorSimUI } from "./sim-20ffbaa6.chunk.js";
import "./suggest_gems_action-9691dd18.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarrior, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarriorSimUI(document.body, player);
//# sourceMappingURL=index-945bdd0f.entry.js.map
