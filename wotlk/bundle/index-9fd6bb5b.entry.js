import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4138557e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e8f85000.chunk.js";
import { S as SmitePriestSimUI } from "./sim-797a7680.chunk.js";
import "./presets-10187259.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-9fd6bb5b.entry.js.map
