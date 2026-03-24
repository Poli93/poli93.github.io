import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-964cf090.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-05e71d1e.chunk.js";
import { W as WarlockSimUI } from "./sim-a85c08af.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-0d5e735e.entry.js.map
