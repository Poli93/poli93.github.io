import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-1f2cfac6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6c9cf48c.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-d7c2ffe3.chunk.js";
import "./apl_utils-6c5744f5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-5409ac49.entry.js.map
