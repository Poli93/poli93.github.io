import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e2875dd9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-964a534f.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-f544aabe.chunk.js";
import "./presets-b4e1cba3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-a92061b8.entry.js.map
