import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-707cf1d3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc2b76c3.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-0bccbebe.chunk.js";
import "./totem_inputs-e0686ac0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-ea2e0542.entry.js.map
