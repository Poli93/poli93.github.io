import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5dd1f24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9f0ce7d5.chunk.js";
import { F as FeralDruidSimUI } from "./sim-22ec09e7.chunk.js";
import "./suggest_gems_action-1b05d548.chunk.js";
import "./apl_utils-d0a9fabe.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-6af818de.entry.js.map
