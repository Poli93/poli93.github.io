import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-17d4b166.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c3dc7087.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-21f8a9c4.chunk.js";
import "./suggest_gems_action-5f097ada.chunk.js";
import "./apl_utils-0a664b27.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-2dfbd7f2.entry.js.map
