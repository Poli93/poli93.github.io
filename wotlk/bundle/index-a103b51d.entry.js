import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-57eefc71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-84fc69fa.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-6567fe22.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-a103b51d.entry.js.map
