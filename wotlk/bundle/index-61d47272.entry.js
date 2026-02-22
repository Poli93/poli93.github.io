import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-707cf1d3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc2b76c3.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-be99b87a.chunk.js";
import "./totem_inputs-e0686ac0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-61d47272.entry.js.map
