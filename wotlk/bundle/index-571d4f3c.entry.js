import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b23e354e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2c2e186.chunk.js";
import { W as WarlockSimUI } from "./sim-5d829683.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-571d4f3c.entry.js.map
