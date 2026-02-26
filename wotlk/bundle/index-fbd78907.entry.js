import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7fac2714.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c0bb2c1f.chunk.js";
import { D as DeathknightSimUI } from "./sim-bfcafef2.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-fbd78907.entry.js.map
