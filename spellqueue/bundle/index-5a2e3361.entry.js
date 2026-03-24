import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5a4fc7d0.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6b56c262.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-a68f5b01.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-5a2e3361.entry.js.map
