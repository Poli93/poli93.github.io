import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-10baf22a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7dd82e71.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-71aed712.chunk.js";
import "./apl_utils-758063f9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-53d06b03.entry.js.map
