import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a1c0fc35.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5bcac61a.chunk.js";
import { M as MageSimUI } from "./sim-0d3d3659.chunk.js";
import "./apl_utils-2b5b1ff4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-4acc27cb.entry.js.map
