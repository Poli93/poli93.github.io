import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0d67dd8d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2e8c760.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-45a0baf0.chunk.js";
import "./apl_utils-5d857760.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-52c9e05d.entry.js.map
