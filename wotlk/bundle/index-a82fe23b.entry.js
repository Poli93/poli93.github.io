import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-40ebb67d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a778ab64.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-50129668.chunk.js";
import "./presets-0c49b33e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-a82fe23b.entry.js.map
