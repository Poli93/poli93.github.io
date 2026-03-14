import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e3dc98df.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ff90c1cb.chunk.js";
import { S as SmitePriestSimUI } from "./sim-bdb650bb.chunk.js";
import "./presets-6dcdbd43.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-de6b3f80.entry.js.map
