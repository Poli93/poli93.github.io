import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e426fb94.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-13aeb1bb.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-d2ac45be.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-c221d5da.entry.js.map
