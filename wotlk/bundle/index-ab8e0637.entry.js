import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-baa2d5bc.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-01be8d3d.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-fa09f4f0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-ab8e0637.entry.js.map
