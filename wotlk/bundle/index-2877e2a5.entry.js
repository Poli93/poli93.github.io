import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6a63acbd.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-814c7212.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-bb9c764c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-2877e2a5.entry.js.map
