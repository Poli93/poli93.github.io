import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a280e993.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b73d15d3.chunk.js";
import { W as WarlockSimUI } from "./sim-7538a2c3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-2ae29083.entry.js.map
