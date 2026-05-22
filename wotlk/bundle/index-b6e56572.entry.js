import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-98aea73c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cb87a65c.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-530c93c8.chunk.js";
import "./apl_utils-9c8401a3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-b6e56572.entry.js.map
