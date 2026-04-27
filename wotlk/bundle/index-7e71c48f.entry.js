import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c8b5fc2a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-024ead3f.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-50a83786.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-7e71c48f.entry.js.map
