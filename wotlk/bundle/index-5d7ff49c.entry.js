import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8450f34b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-63120013.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-4b3f6992.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-5d7ff49c.entry.js.map
