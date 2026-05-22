import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e636ba95.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88c18280.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-339edd18.chunk.js";
import "./totem_inputs-b1d41892.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-ac7c0250.entry.js.map
