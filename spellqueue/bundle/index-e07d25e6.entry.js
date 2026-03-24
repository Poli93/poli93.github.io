import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9f74df7a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-04a59d40.chunk.js";
import { D as DeathknightSimUI } from "./sim-7be2bbe6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-e07d25e6.entry.js.map
