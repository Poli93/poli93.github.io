import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0c7a5318.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-0aa6a54e.chunk.js";
import { R as RogueSimUI } from "./sim-f0e07b7f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-45c8080b.entry.js.map
