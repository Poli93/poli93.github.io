import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-be2a7d40.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e661af5d.chunk.js";
import { S as SmitePriestSimUI } from "./sim-51270baf.chunk.js";
import "./presets-fb4da317.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-4a8fce67.entry.js.map
