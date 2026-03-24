import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44bd0be2.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-011dd149.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-27bbf687.chunk.js";
import "./totem_inputs-47516034.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-b023709a.entry.js.map
