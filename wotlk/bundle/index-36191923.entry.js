import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6881a4e3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4ea4a78a.chunk.js";
import { F as FeralDruidSimUI } from "./sim-a9019f60.chunk.js";
import "./suggest_gems_action-120ac3d4.chunk.js";
import "./apl_utils-e5278a2a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-36191923.entry.js.map
