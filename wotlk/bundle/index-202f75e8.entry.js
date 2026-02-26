import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-baa2d5bc.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-01be8d3d.chunk.js";
import { D as DeathknightSimUI } from "./sim-0692b903.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-202f75e8.entry.js.map
