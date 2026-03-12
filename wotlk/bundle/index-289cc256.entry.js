import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-470c5606.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f54e38e1.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-fd27114e.chunk.js";
import "./apl_utils-f19e921c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-289cc256.entry.js.map
