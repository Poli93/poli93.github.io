import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2944409a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d150ad87.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-6366964c.chunk.js";
import "./totem_inputs-25819899.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-5643af4f.entry.js.map
