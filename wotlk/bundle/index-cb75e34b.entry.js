import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-75bc3b97.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2ccc9e15.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-549618a0.chunk.js";
import "./totem_inputs-d4b0eff6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-cb75e34b.entry.js.map
