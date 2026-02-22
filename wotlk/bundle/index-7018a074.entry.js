import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-141043ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-57ce044d.chunk.js";
import { H as HealingPriestSimUI } from "./sim-46bb8b36.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-7018a074.entry.js.map
