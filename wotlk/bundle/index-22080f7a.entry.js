import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e3dc98df.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ff90c1cb.chunk.js";
import { H as HealingPriestSimUI } from "./sim-750f4769.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-22080f7a.entry.js.map
