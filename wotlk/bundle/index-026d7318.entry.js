import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8cdd1db5.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-62d5464b.chunk.js";
import { D as DeathknightSimUI } from "./sim-6594e2d0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-026d7318.entry.js.map
