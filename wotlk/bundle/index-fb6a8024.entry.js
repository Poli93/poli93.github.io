import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-ed7677ed.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-21342c4c.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-a25fe03f.chunk.js";
import "./apl_utils-01e4a012.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-fb6a8024.entry.js.map
