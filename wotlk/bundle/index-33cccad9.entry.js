import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-35762efe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5c52bd27.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-bc38a223.chunk.js";
import "./apl_utils-cd1ca910.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-33cccad9.entry.js.map
