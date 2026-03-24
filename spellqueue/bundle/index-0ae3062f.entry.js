import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-59497cd7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-663946ea.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-3c29db84.chunk.js";
import "./totem_inputs-9f494757.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-0ae3062f.entry.js.map
