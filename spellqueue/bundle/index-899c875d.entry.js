import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a210603b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-248cfd49.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-24877da5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-899c875d.entry.js.map
