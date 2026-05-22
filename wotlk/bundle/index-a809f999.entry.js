import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e636ba95.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88c18280.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-de0ffc42.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-a809f999.entry.js.map
