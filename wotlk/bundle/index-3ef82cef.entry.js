import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f36ec333.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-586df0b2.chunk.js";
import { H as HealingPriestSimUI } from "./sim-be0a4afd.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHealingPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HealingPriestSimUI(document.body, player);
//# sourceMappingURL=index-3ef82cef.entry.js.map
