import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a96a96f.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-9b77de94.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-6877899a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-52c4a64d.entry.js.map
