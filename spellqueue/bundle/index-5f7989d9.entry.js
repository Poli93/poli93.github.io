import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7108515c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f8ea6bce.chunk.js";
import { W as WarlockSimUI } from "./sim-73c9b01c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-5f7989d9.entry.js.map
