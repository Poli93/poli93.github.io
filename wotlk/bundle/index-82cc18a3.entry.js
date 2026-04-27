import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-be2a7d40.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e661af5d.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-c5ea1ea5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-82cc18a3.entry.js.map
