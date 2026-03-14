import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0c7a5318.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-0aa6a54e.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-c9267cf1.chunk.js";
import "./totem_inputs-5b41241e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-05101b75.entry.js.map
