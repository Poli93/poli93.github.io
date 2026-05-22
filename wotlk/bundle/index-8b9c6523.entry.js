import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6a63acbd.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-814c7212.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-ae7fc8d1.chunk.js";
import "./presets-0b485b8d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-8b9c6523.entry.js.map
