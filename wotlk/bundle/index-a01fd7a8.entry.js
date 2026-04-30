import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3c31b24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c5b239b8.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-72216293.chunk.js";
import "./totem_inputs-d1275645.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-a01fd7a8.entry.js.map
