import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-271e4b09.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d572afca.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-7b3d3ee7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-3e618259.entry.js.map
