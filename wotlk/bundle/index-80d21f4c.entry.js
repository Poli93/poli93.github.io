import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0d67dd8d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2e8c760.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-a9dc5ba1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-80d21f4c.entry.js.map
