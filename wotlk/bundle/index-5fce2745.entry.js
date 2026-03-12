import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6051cfd6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-996ee62e.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-2387b8e3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-5fce2745.entry.js.map
