import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2d1eea1c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ae302dcc.chunk.js";
import { H as HealingPriestSimUI } from "./sim-5be11b53.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-1e561ea9.entry.js.map
