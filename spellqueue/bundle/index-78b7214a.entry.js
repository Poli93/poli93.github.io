import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-707cf1d3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc2b76c3.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-9c60458c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-78b7214a.entry.js.map
