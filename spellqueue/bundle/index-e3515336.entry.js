import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-141043ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-57ce044d.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-aa9687ae.chunk.js";
import "./presets-2e8d8cc4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-e3515336.entry.js.map
