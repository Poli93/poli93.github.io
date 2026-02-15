import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-75bc3b97.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2ccc9e15.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-18b4f36d.chunk.js";
import "./presets-dcdfe758.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-e95f0277.entry.js.map
