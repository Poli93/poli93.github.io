import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fdaa2ac8.chunk.js";
import { S as SmitePriestSimUI } from "./sim-b9d462e8.chunk.js";
import "./presets-4f2610a5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-c769f4aa.entry.js.map
