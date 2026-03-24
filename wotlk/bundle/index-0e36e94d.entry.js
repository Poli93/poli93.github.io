import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-efbe915e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-484bfdab.chunk.js";
import { R as RogueSimUI } from "./sim-1b3a5c67.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-0e36e94d.entry.js.map
