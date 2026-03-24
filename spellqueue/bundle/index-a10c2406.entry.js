import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c3bf53c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-dda269ad.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-b5e1cf93.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-a10c2406.entry.js.map
