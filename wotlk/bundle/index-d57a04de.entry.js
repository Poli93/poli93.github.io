import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-35762efe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2cd8c52b.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-40aa3532.chunk.js";
import "./totem_inputs-9de55d1b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-d57a04de.entry.js.map
