import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c3bf53c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-dda269ad.chunk.js";
import { R as RogueSimUI } from "./sim-9aae9cc2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-e1ddbc26.entry.js.map
