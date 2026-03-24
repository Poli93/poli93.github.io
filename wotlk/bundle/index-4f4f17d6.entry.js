import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7210bd62.chunk.js";
import { F as FeralDruidSimUI } from "./sim-13f2b911.chunk.js";
import "./suggest_gems_action-209188d4.chunk.js";
import "./apl_utils-4305ab4c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-4f4f17d6.entry.js.map
