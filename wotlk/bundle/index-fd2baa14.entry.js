import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-707cf1d3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc2b76c3.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-a0646734.chunk.js";
import "./apl_utils-2a7b891d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-fd2baa14.entry.js.map
