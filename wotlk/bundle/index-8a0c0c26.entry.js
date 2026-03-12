import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6051cfd6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-996ee62e.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-447d07c3.chunk.js";
import "./apl_utils-648a9cb1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-8a0c0c26.entry.js.map
