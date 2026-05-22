import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5587748d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-abb39774.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-e9593d9f.chunk.js";
import "./totem_inputs-4c3ed19e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-d8b33f73.entry.js.map
