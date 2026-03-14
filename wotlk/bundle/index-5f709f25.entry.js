import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-70dd77ea.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1a8b6832.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-e2afab4b.chunk.js";
import "./apl_utils-6e861b9d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-5f709f25.entry.js.map
