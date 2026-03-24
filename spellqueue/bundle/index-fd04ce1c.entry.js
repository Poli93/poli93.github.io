import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-274ace4d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-78237b98.chunk.js";
import { M as MageSimUI } from "./sim-c891638d.chunk.js";
import "./apl_utils-1cce09b1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-fd04ce1c.entry.js.map
