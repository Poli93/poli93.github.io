import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9ce6d3b7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-615ad7c6.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-3bfb3462.chunk.js";
import "./totem_inputs-9bbff4af.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-ea0e3eb9.entry.js.map
