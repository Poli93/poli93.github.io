import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8bc265ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-219f9a28.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-3e41f5df.chunk.js";
import "./totem_inputs-b6d27bc2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-f11e7f50.entry.js.map
