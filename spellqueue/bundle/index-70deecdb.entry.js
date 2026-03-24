import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7108515c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f8ea6bce.chunk.js";
import { R as RogueSimUI } from "./sim-f453a066.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRogue, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RogueSimUI(document.body, player);
//# sourceMappingURL=index-70deecdb.entry.js.map
