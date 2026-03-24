import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-faf26c71.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-65a8ef5f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-2854a7bb.entry.js.map
