import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-30a04788.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-b5ccbb8c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-22d7f370.entry.js.map
