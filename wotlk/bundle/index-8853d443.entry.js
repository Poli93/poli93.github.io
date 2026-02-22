import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-141043ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-57ce044d.chunk.js";
import { R as RogueSimUI } from "./sim-73f4d57b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-8853d443.entry.js.map
