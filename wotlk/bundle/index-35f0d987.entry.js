import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-274ace4d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-78237b98.chunk.js";
import { W as WarlockSimUI } from "./sim-7de6cdd7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-35f0d987.entry.js.map
