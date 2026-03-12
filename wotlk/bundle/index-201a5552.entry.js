import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8cdd1db5.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-62d5464b.chunk.js";
import { R as RogueSimUI } from "./sim-23bbd99b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-201a5552.entry.js.map
