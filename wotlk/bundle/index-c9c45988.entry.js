import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3a46eb1b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7847edc6.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-5c55b4bd.chunk.js";
import "./totem_inputs-509b4887.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-c9c45988.entry.js.map
