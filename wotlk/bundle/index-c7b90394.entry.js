import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7f428ee2.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-c74cc3f9.chunk.js";
import "./totem_inputs-2834f0f9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-c7b90394.entry.js.map
