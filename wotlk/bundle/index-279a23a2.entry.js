import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d9de8996.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-8066a19e.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-a9968612.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-279a23a2.entry.js.map
