import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6a63acbd.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-814c7212.chunk.js";
import { R as RogueSimUI } from "./sim-b1db2d0b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-e152a262.entry.js.map
