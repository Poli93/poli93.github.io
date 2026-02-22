import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a98d5a6e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e10092e3.chunk.js";
import { W as WarlockSimUI } from "./sim-63b532e1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-e5e13516.entry.js.map
