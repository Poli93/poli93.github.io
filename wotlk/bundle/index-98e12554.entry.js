import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-18a548b6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ea1f2c9d.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-84ad50e5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-98e12554.entry.js.map
