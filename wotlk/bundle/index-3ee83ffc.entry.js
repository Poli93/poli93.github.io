import "./index-6d46f689.chunk.js";
import { S as Sim, P as Player, a as Spec, T as TypedEvent } from "./preset_utils-4f0e8fc3.chunk.js";
import { H as HunterSimUI } from "./sim-11402666.chunk.js";
import "./suggest_gems_action-fc324870.chunk.js";
import "./apl_utils-f1f275f8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-3ee83ffc.entry.js.map
