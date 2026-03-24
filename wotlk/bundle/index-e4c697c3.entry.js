import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-59497cd7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-663946ea.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-b75f8e33.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-e4c697c3.entry.js.map
