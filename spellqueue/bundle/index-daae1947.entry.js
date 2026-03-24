import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-18a548b6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ea1f2c9d.chunk.js";
import { M as MageSimUI } from "./sim-a0a6c78b.chunk.js";
import "./apl_utils-345cac98.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-daae1947.entry.js.map
