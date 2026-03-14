import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-73fc40c4.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d7b7d398.chunk.js";
import { H as HealingPriestSimUI } from "./sim-9fb38b79.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-31e8828a.entry.js.map
