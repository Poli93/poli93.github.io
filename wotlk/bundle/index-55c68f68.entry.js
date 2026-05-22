import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6881a4e3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b24c1154.chunk.js";
import { M as MageSimUI } from "./sim-21f95b10.chunk.js";
import "./apl_utils-e5278a2a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-55c68f68.entry.js.map
