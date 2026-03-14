import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9f74df7a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-04a59d40.chunk.js";
import { W as WarlockSimUI } from "./sim-e52cf4a2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-a5734a30.entry.js.map
