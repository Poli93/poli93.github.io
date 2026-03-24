import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44be1b71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c314f7c.chunk.js";
import { W as WarlockSimUI } from "./sim-1f947477.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-c00e3d8f.entry.js.map
