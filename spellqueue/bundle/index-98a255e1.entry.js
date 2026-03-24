import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d0099360.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89ac6fe3.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-b28ebdc3.chunk.js";
import "./totem_inputs-3d7ffce9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-98a255e1.entry.js.map
