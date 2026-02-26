import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e426fb94.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-13aeb1bb.chunk.js";
import { S as SmitePriestSimUI } from "./sim-0fd321d1.chunk.js";
import "./presets-524a80dd.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-4e827835.entry.js.map
