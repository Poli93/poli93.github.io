import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-34a2d4f9.chunk.js";
import { R as RogueSimUI } from "./sim-59e6ef68.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-21f575e8.entry.js.map
