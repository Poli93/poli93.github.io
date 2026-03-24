import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a210603b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-248cfd49.chunk.js";
import { H as HealingPriestSimUI } from "./sim-7e32598c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-4e9fb4a8.entry.js.map
