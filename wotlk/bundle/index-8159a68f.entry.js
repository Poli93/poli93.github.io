import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-0c7a5318.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-0aa6a54e.chunk.js";
import { D as DeathknightSimUI } from "./sim-0125ce0a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-8159a68f.entry.js.map
