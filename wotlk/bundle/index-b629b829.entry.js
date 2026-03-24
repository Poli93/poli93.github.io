import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-75bc3b97.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2ccc9e15.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-d3872626.chunk.js";
import "./totem_inputs-d4b0eff6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-b629b829.entry.js.map
