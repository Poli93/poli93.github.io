import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6a9630f5.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-723f8784.chunk.js";
import "./totem_inputs-85974ac0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-79ecd2e8.entry.js.map
