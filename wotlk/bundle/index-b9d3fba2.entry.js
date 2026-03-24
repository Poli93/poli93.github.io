import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-efbe915e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-484bfdab.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-a97c0ba1.chunk.js";
import "./presets-e6e3e5b4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-b9d3fba2.entry.js.map
