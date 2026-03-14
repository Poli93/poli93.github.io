import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-73fc40c4.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d7b7d398.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-e8f6b9eb.chunk.js";
import "./apl_utils-48d32164.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-9cf5a205.entry.js.map
