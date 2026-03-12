import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-109244c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-67324d2e.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-8a393436.chunk.js";
import "./apl_utils-ee1e7685.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-2e42f983.entry.js.map
