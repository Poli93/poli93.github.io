import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f31a1a5a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-0420d4c2.chunk.js";
import { H as HealingPriestSimUI } from "./sim-0284a3ed.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-4e2d270f.entry.js.map
