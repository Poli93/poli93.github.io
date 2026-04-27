import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a96a96f.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9b77de94.chunk.js";
import { R as RogueSimUI } from "./sim-0e5895e8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-959f382c.entry.js.map
