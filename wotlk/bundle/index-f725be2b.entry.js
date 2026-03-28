import "./index-6d46f689.chunk.js";
import { S as Sim, P as Player, a as Spec, T as TypedEvent } from "./preset_utils-4f0e8fc3.chunk.js";
import { F as FeralDruidSimUI } from "./sim-6e463389.chunk.js";
import "./suggest_gems_action-fc324870.chunk.js";
import "./apl_utils-f1f275f8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralDruid, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralDruidSimUI(document.body, player);
//# sourceMappingURL=index-f725be2b.entry.js.map
