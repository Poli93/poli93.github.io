import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a98d5a6e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e10092e3.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-76af6e19.chunk.js";
import "./presets-89970e9a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-6e95f7e3.entry.js.map
