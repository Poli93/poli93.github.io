import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b23e354e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2c2e186.chunk.js";
import { M as MageSimUI } from "./sim-987c84b4.chunk.js";
import "./apl_utils-442097ef.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-eb5caa6a.entry.js.map
