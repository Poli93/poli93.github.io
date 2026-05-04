import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-56d5fee9.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-9743148a.chunk.js";
import "./presets-05b8cba8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-fa683cd0.entry.js.map
