import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3604612a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fb7b54ab.chunk.js";
import { S as SmitePriestSimUI } from "./sim-928057bd.chunk.js";
import "./presets-614140bf.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-750c53db.entry.js.map
