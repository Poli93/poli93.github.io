import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e426fb94.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-13aeb1bb.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-aadf9b16.chunk.js";
import "./apl_utils-78b76637.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-00b11779.entry.js.map
