import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b23e354e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2c2e186.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-e92a304d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-17305b19.entry.js.map
