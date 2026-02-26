import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c59beab6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc872ded.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-356bf886.chunk.js";
import "./apl_utils-80c7675c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-0ab4e2bd.entry.js.map
