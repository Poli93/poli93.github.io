import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3604612a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fb7b54ab.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-a99b4d2e.chunk.js";
import "./totem_inputs-83bda19b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-3973b17c.entry.js.map
