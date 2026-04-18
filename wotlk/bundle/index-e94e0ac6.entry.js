import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6ee98382.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b0122f6b.chunk.js";
import { M as MageSimUI } from "./sim-9e2c432a.chunk.js";
import "./apl_utils-81af3877.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-e94e0ac6.entry.js.map
