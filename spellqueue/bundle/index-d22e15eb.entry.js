import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-12af51fa.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1965e2ea.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-96ac12a2.chunk.js";
import "./apl_utils-523b47f4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-d22e15eb.entry.js.map
