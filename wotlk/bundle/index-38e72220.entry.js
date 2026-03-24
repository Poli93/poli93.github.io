import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5a4fc7d0.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6b56c262.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-ddc55cda.chunk.js";
import "./apl_utils-ac33ac4f.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-38e72220.entry.js.map
