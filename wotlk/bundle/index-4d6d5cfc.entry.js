import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8bc265ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-3408ddad.chunk.js";
import { F as FeralDruidSimUI } from "./sim-4615e870.chunk.js";
import "./suggest_gems_action-484b8467.chunk.js";
import "./apl_utils-69c7856e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-4d6d5cfc.entry.js.map
