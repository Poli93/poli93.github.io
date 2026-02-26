import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7b88f697.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-855673bf.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-6ce4bcc0.chunk.js";
import "./totem_inputs-3d4ddbf3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationShamanSimUI(document.body, player);
//# sourceMappingURL=index-f2a67070.entry.js.map
