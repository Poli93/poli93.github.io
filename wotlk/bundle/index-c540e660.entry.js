import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5dd1f24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9f0ce7d5.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-41bf48cf.chunk.js";
import "./totem_inputs-81d7737e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-c540e660.entry.js.map
