import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-73fc40c4.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d7b7d398.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-009d142f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-e41842c5.entry.js.map
