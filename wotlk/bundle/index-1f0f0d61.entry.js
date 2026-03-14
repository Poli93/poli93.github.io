import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-baa2d5bc.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-01be8d3d.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-af98b48e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-1f0f0d61.entry.js.map
