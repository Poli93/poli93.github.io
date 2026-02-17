import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e3dc98df.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ff90c1cb.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-a6d98aa4.chunk.js";
import "./apl_utils-452ba24f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionWarrior, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionWarriorSimUI(document.body, player);
//# sourceMappingURL=index-8b45cfdd.entry.js.map
