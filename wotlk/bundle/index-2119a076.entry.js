import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-63791f5d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-3e602214.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-cd2726b8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-2119a076.entry.js.map
