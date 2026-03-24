import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-9ce6d3b7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-615ad7c6.chunk.js";
import { D as DeathknightSimUI } from "./sim-fb91ccdd.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-b58211ca.entry.js.map
