import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7108515c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f8ea6bce.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-9b87a3f5.chunk.js";
import "./apl_utils-d1de5df6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-be4c3fc4.entry.js.map
