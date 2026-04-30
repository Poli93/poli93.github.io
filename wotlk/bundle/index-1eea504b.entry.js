import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-63791f5d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-64c92abc.chunk.js";
import { W as WarlockSimUI } from "./sim-9f036e3b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-1eea504b.entry.js.map
