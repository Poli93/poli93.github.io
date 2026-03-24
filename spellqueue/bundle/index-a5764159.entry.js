import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f31a1a5a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-123b5e0b.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-9906b8d9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecBalanceDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new BalanceDruidSimUI(document.body, player);
//# sourceMappingURL=index-a5764159.entry.js.map
