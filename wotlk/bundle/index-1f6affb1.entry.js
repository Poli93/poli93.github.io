import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6ee98382.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b0122f6b.chunk.js";
import { S as SmitePriestSimUI } from "./sim-2cc0b43d.chunk.js";
import "./presets-ccdeb3b7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-1f6affb1.entry.js.map
