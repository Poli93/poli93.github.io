import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8450f34b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-63120013.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-11fa3cb4.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-00b30972.entry.js.map
