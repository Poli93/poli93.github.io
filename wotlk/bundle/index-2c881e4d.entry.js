import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6ee98382.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b0122f6b.chunk.js";
import { W as WarlockSimUI } from "./sim-a9ff40e1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-2c881e4d.entry.js.map
