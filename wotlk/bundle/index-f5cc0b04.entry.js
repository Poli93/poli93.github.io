import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-709fa214.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-32617444.chunk.js";
import { H as HealingPriestSimUI } from "./sim-f2fa3ed0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-f5cc0b04.entry.js.map
