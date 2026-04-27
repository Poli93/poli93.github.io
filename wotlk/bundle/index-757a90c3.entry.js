import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c8b5fc2a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-024ead3f.chunk.js";
import { W as WarlockSimUI } from "./sim-de3161bd.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-757a90c3.entry.js.map
