import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-70dd77ea.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1a8b6832.chunk.js";
import { D as DeathknightSimUI } from "./sim-e6af85a9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-b3af20b4.entry.js.map
