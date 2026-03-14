import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-59497cd7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-663946ea.chunk.js";
import { H as HealingPriestSimUI } from "./sim-16bd620b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-3d47b401.entry.js.map
