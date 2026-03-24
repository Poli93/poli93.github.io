import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8bc265ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-219f9a28.chunk.js";
import { R as RogueSimUI } from "./sim-9f3b3b2b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-8b658a25.entry.js.map
