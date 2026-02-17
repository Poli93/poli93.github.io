import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e3dc98df.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ff90c1cb.chunk.js";
import { R as RogueSimUI } from "./sim-9a93db68.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-ece36dde.entry.js.map
