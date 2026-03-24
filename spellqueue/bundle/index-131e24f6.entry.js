import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-10baf22a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7dd82e71.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-5465885e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-131e24f6.entry.js.map
