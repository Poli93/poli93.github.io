import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e2875dd9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-964a534f.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-769fc64b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-6b3b3006.entry.js.map
