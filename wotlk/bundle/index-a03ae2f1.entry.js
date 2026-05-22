import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6a63acbd.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-814c7212.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-07e57b42.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-a03ae2f1.entry.js.map
