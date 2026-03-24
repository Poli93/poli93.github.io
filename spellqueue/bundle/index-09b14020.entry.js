import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-52c21361.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c7ceafff.chunk.js";
import { W as WarlockSimUI } from "./sim-d5f4855c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-09b14020.entry.js.map
