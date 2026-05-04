import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6c9cf48c.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-7a7040ae.chunk.js";
import "./totem_inputs-7a0d12c1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-27392a29.entry.js.map
