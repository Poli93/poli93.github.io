import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-ed7677ed.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-21342c4c.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-47f83b03.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-ff701186.entry.js.map
