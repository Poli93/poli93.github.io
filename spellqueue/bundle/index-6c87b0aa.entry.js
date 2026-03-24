import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5dd1f24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9f0ce7d5.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-04b2babf.chunk.js";
import "./totem_inputs-81d7737e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-6c87b0aa.entry.js.map
