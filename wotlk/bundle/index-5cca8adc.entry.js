import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b1386cfe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ad4c2cb1.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-04b4661c.chunk.js";
import "./apl_utils-719a0663.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-5cca8adc.entry.js.map
