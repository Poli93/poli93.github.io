import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44bd0be2.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-011dd149.chunk.js";
import { R as RogueSimUI } from "./sim-b978c05f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-a380215e.entry.js.map
