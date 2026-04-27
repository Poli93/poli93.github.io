import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a96a96f.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9b77de94.chunk.js";
import { F as FeralDruidSimUI } from "./sim-f9658a45.chunk.js";
import "./suggest_gems_action-dfcd95d0.chunk.js";
import "./apl_utils-c6e0d72d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-8dd6b40d.entry.js.map
