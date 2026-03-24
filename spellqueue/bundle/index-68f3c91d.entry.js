import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-707cf1d3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc2b76c3.chunk.js";
import { M as MageSimUI } from "./sim-04e50ca3.chunk.js";
import "./apl_utils-2a7b891d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-68f3c91d.entry.js.map
