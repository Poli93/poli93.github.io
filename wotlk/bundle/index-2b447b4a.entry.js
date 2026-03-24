import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8bc265ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89080918.chunk.js";
import { H as HunterSimUI } from "./sim-0b8095f2.chunk.js";
import "./suggest_gems_action-484b8467.chunk.js";
import "./apl_utils-69c7856e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-2b447b4a.entry.js.map
