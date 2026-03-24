import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-75bc3b97.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-2ccc9e15.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-14710871.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-f8b22530.entry.js.map
