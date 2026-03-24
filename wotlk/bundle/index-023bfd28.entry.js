import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-18a548b6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ea1f2c9d.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-cbd07bb1.chunk.js";
import "./suggest_gems_action-f67aff7c.chunk.js";
import "./apl_utils-345cac98.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-023bfd28.entry.js.map
