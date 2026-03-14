import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a98d5a6e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e10092e3.chunk.js";
import { H as HealingPriestSimUI } from "./sim-2f68ec9a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-a5a6cb32.entry.js.map
