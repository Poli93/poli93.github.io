import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-98aea73c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cb87a65c.chunk.js";
import { F as FeralDruidSimUI } from "./sim-398a8be4.chunk.js";
import "./suggest_gems_action-41ae69f7.chunk.js";
import "./apl_utils-9c8401a3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-dc8b0d91.entry.js.map
