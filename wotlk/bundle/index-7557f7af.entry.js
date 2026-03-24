import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7fac2714.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c0bb2c1f.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-535fc2a6.chunk.js";
import "./totem_inputs-c0e08f26.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-7557f7af.entry.js.map
