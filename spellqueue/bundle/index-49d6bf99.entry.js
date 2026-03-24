import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-03128551.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-85c1d700.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-583a585d.chunk.js";
import "./apl_utils-9ba437a9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-49d6bf99.entry.js.map
