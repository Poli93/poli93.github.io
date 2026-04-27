import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b1386cfe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ad4c2cb1.chunk.js";
import { W as WarlockSimUI } from "./sim-db087566.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-21f2f39d.entry.js.map
