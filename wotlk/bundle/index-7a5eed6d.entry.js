import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2d1eea1c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ae302dcc.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-d6ad70fb.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-7a5eed6d.entry.js.map
