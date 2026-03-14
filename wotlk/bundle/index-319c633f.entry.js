import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-70dd77ea.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1a8b6832.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-00b0dc02.chunk.js";
import "./totem_inputs-7994abaf.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-319c633f.entry.js.map
