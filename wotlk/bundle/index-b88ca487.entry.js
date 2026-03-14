import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-12af51fa.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1965e2ea.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-9bb49b6d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-b88ca487.entry.js.map
