import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c8b5fc2a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-024ead3f.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-4e544dc9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecTankDeathknight, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new TankDeathknightSimUI(document.body, player);
//# sourceMappingURL=index-4884f0b1.entry.js.map
