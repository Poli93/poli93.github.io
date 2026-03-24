import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f31a1a5a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc93f9b1.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-12ffddb2.chunk.js";
import "./totem_inputs-00260350.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-d5158f9e.entry.js.map
