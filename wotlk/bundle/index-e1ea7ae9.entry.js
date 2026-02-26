import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-03128551.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-85c1d700.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-350fc659.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-e1ea7ae9.entry.js.map
