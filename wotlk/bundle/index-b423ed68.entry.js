import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3a46eb1b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7847edc6.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-a268746e.chunk.js";
import "./presets-fff8ef39.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-b423ed68.entry.js.map
