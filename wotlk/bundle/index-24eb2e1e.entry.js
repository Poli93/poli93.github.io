import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c4e6d28.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-29fb0e54.chunk.js";
import "./totem_inputs-bc7c9c72.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-24eb2e1e.entry.js.map
