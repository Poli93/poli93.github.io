import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a0059948.chunk.js";
import { R as RogueSimUI } from "./sim-c1622349.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-1b63e1e2.entry.js.map
