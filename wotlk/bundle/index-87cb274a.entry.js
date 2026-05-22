import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-98aea73c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cb87a65c.chunk.js";
import { S as SmitePriestSimUI } from "./sim-a6556f55.chunk.js";
import "./presets-9d639dc9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-87cb274a.entry.js.map
