import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4138557e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e8f85000.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-0f5ac024.chunk.js";
import "./presets-10187259.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-0c423335.entry.js.map
