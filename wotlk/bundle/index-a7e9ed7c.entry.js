import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c3bf53c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-dda269ad.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-63895cb7.chunk.js";
import "./apl_utils-3c525cee.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-a7e9ed7c.entry.js.map
