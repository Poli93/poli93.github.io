import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a210603b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-248cfd49.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-11b35aa3.chunk.js";
import "./apl_utils-a64a368d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-a3cf6df0.entry.js.map
