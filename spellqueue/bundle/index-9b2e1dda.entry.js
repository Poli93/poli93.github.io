import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6051cfd6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-996ee62e.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-279c2a55.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-9b2e1dda.entry.js.map
