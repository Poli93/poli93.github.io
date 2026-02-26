import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2944409a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d150ad87.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-0b23617c.chunk.js";
import "./apl_utils-b3e086f3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-edbc7477.entry.js.map
