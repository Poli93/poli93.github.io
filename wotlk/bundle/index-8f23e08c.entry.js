import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44be1b71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c314f7c.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-6f49d370.chunk.js";
import "./totem_inputs-3066a104.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-8f23e08c.entry.js.map
