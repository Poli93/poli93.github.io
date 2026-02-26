import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44be1b71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c314f7c.chunk.js";
import { R as RogueSimUI } from "./sim-ae1af600.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-06c847da.entry.js.map
