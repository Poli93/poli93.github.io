import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-109244c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-67324d2e.chunk.js";
import { M as MageSimUI } from "./sim-92b326c4.chunk.js";
import "./apl_utils-ee1e7685.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-809a1fa2.entry.js.map
