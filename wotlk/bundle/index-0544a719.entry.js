import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5c83c94f.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-6ec3868a.chunk.js";
import "./totem_inputs-18e9d1bf.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-0544a719.entry.js.map
