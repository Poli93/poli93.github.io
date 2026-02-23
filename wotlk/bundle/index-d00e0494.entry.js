import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c59beab6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc872ded.chunk.js";
import { S as SmitePriestSimUI } from "./sim-a6bd1298.chunk.js";
import "./presets-8db13069.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-d00e0494.entry.js.map
