import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3c31b24b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-125f71ea.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-482a3448.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-0f47d1f2.entry.js.map
