import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6881a4e3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b24c1154.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-5f7e7f01.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-5c844bc0.entry.js.map
