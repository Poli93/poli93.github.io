import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5dd1f24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9f0ce7d5.chunk.js";
import { M as MageSimUI } from "./sim-cba0dd7a.chunk.js";
import "./apl_utils-d0a9fabe.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-6b48f2be.entry.js.map
