import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-efbe915e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-484bfdab.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-40d54bc5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-43f0db69.entry.js.map
