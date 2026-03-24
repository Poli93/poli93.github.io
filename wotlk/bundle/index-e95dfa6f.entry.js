import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2944409a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d150ad87.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-a27f0d5a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-e95dfa6f.entry.js.map
