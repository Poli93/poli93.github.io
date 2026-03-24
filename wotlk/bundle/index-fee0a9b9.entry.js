import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5dd1f24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9f0ce7d5.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-1fd54665.chunk.js";
import "./presets-38ea85a2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-fee0a9b9.entry.js.map
