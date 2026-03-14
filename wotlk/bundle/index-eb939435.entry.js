import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-70dd77ea.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1a8b6832.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-a9e04f09.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-eb939435.entry.js.map
