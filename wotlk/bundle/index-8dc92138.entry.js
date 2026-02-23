import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f36ec333.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-586df0b2.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-baa8178f.chunk.js";
import "./totem_inputs-df275431.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-8dc92138.entry.js.map
