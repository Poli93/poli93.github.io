import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-efbe915e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-484bfdab.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-d16b9b2a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-8d6db385.entry.js.map
