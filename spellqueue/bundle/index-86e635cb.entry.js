import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a1c0fc35.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5bcac61a.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-08436eb3.chunk.js";
import "./totem_inputs-f338fa15.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-86e635cb.entry.js.map
