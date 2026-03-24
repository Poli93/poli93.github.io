import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a1c0fc35.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5bcac61a.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-9e403fcb.chunk.js";
import "./apl_utils-2b5b1ff4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-be4087d5.entry.js.map
