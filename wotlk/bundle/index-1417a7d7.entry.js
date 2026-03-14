import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d9de8996.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-8066a19e.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-0aba8e6c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-1417a7d7.entry.js.map
