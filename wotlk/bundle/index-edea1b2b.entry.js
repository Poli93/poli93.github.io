import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-03128551.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-85c1d700.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-5052752f.chunk.js";
import "./apl_utils-9ba437a9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-edea1b2b.entry.js.map
