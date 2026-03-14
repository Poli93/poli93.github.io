import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e2875dd9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b9b60f58.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-469cd1fe.chunk.js";
import "./suggest_gems_action-fe15e7b2.chunk.js";
import "./apl_utils-6a20dac4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-b7e57744.entry.js.map
