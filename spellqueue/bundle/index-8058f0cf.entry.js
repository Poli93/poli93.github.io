import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f31a1a5a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-123b5e0b.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-6219d108.chunk.js";
import "./suggest_gems_action-1ebed706.chunk.js";
import "./apl_utils-8f9681b8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-8058f0cf.entry.js.map
