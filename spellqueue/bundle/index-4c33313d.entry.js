import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44bd0be2.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-011dd149.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-7c0e278a.chunk.js";
import "./apl_utils-1313fc57.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-4c33313d.entry.js.map
