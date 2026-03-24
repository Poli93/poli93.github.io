import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e6efd6d6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-396fe00d.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-95b9d069.chunk.js";
import "./apl_utils-2f955982.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-60b2a7b7.entry.js.map
