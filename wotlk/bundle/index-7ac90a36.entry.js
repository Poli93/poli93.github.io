import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-14b4011c.chunk.js";
import { W as WarlockSimUI } from "./sim-dfc78a3a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-7ac90a36.entry.js.map
