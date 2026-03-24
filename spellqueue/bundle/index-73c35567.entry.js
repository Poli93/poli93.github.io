import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0d67dd8d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2e8c760.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-29267b14.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-73c35567.entry.js.map
