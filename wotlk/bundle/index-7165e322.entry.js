import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-18a548b6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ea1f2c9d.chunk.js";
import { H as HealingPriestSimUI } from "./sim-86e14511.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-7165e322.entry.js.map
