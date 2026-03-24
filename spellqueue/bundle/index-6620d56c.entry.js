import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d0099360.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89ac6fe3.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-882f1119.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-6620d56c.entry.js.map
