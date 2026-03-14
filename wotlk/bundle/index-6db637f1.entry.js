import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-109244c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-67324d2e.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-a2588779.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-6db637f1.entry.js.map
