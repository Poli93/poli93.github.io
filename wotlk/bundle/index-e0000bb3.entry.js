import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d9de8996.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-8066a19e.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-fb5fd15c.chunk.js";
import "./totem_inputs-7c42ff8c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-e0000bb3.entry.js.map
