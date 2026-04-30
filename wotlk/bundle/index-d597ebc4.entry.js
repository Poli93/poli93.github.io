import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a280e993.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b73d15d3.chunk.js";
import { M as MageSimUI } from "./sim-741abc59.chunk.js";
import "./apl_utils-aa8b37c5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-d597ebc4.entry.js.map
