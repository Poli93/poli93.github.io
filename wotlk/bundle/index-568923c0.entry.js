import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e636ba95.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88c18280.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-cb9d778f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-568923c0.entry.js.map
