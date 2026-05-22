import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6881a4e3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fccbd9e0.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-a49d23e8.chunk.js";
import "./totem_inputs-049f04a5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-b52c7946.entry.js.map
