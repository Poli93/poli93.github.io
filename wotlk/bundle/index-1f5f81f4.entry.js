import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8cdd1db5.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-62d5464b.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-e72e7619.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-1f5f81f4.entry.js.map
