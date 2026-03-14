import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c59beab6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cc872ded.chunk.js";
import { D as DeathknightSimUI } from "./sim-e18f36b3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-07d0dbce.entry.js.map
