import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a96a96f.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9b77de94.chunk.js";
import { H as HealingPriestSimUI } from "./sim-1836b8ce.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-36d04b1b.entry.js.map
