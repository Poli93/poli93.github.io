import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-470c5606.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f54e38e1.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-7cfd19d5.chunk.js";
import "./totem_inputs-7216a982.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-13159f09.entry.js.map
