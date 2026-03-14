import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-ed7677ed.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-21342c4c.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-8253c527.chunk.js";
import "./apl_utils-01e4a012.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-d2f59d8d.entry.js.map
