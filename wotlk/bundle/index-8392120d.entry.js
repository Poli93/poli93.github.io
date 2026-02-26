import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a0059948.chunk.js";
import { M as MageSimUI } from "./sim-f39afc47.chunk.js";
import "./apl_utils-d7a38ada.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-8392120d.entry.js.map
