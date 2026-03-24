import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8cdd1db5.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-62d5464b.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-d9516b93.chunk.js";
import "./apl_utils-2e240f87.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-78607ddc.entry.js.map
