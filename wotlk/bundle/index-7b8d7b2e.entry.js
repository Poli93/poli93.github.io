import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-52c21361.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c7ceafff.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-9b5de3eb.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecRetributionPaladin, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new RetributionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-7b8d7b2e.entry.js.map
