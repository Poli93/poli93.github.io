import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7fac2714.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c0bb2c1f.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-bd600c55.chunk.js";
import "./totem_inputs-c0e08f26.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-2864252f.entry.js.map
