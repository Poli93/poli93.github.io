import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c59beab6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc872ded.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-cedb053f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-ee00d537.entry.js.map
