import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b1386cfe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ad4c2cb1.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-0ac4d175.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRestorationDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RestorationDruidSimUI(document.body, player);
//# sourceMappingURL=index-11cc6dc5.entry.js.map
