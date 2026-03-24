import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7fac2714.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c0bb2c1f.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-d0c9e591.chunk.js";
import "./apl_utils-509afa8e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-7300079c.entry.js.map
