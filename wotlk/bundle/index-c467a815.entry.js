import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c3bf53c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-dda269ad.chunk.js";
import { M as MageSimUI } from "./sim-6eae932b.chunk.js";
import "./apl_utils-3c525cee.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-c467a815.entry.js.map
