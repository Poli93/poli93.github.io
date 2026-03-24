import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e2875dd9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-964a534f.chunk.js";
import { F as FeralDruidSimUI } from "./sim-49147fce.chunk.js";
import "./suggest_gems_action-fe15e7b2.chunk.js";
import "./apl_utils-6a20dac4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-5dfa0ec2.entry.js.map
