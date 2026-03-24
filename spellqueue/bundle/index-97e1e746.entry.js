import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8bc265ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-3408ddad.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-1acf4f07.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-97e1e746.entry.js.map
