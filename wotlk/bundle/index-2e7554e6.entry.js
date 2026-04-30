import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a280e993.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b73d15d3.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-cdcec0f8.chunk.js";
import "./suggest_gems_action-ab4db2d2.chunk.js";
import "./apl_utils-aa8b37c5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-2e7554e6.entry.js.map
