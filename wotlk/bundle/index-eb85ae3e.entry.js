import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c43488ac.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b461eda0.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-d2f04f82.chunk.js";
import "./apl_utils-442d206a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-eb85ae3e.entry.js.map
