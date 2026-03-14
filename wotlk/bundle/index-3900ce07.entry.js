import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-12af51fa.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1965e2ea.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-6ba9c0ee.chunk.js";
import "./totem_inputs-f0960082.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-3900ce07.entry.js.map
