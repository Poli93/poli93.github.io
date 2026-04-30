import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-63791f5d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fe282dcc.chunk.js";
import { R as RogueSimUI } from "./sim-aecbd676.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-f4837d00.entry.js.map
