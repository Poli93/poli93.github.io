import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5587748d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-abb39774.chunk.js";
import { D as DeathknightSimUI } from "./sim-1bd59d62.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-449b558c.entry.js.map
