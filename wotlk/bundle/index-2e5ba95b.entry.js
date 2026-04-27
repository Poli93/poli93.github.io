import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b1386cfe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ad4c2cb1.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-d0bc8135.chunk.js";
import "./totem_inputs-a2ffad61.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-2e5ba95b.entry.js.map
