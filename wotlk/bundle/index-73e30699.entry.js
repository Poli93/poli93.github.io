import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-470c5606.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f54e38e1.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-ce49cd75.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-73e30699.entry.js.map
