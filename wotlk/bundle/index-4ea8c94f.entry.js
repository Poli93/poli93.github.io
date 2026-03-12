import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-10baf22a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7dd82e71.chunk.js";
import { S as SmitePriestSimUI } from "./sim-66b907d3.chunk.js";
import "./presets-a8659064.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecSmitePriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new SmitePriestSimUI(document.body, player);
//# sourceMappingURL=index-4ea8c94f.entry.js.map
