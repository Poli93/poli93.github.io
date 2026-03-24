import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6051cfd6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-996ee62e.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-23cafe2f.chunk.js";
import "./totem_inputs-8edd5680.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-44011c35.entry.js.map
