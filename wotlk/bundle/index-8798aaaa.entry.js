import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e3dc98df.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ff90c1cb.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-eb38a454.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-8798aaaa.entry.js.map
