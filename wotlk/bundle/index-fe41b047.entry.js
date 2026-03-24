import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e6efd6d6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-396fe00d.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-159e7a2c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-fe41b047.entry.js.map
