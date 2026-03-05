import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-84132a2b.chunk.js";
import { D as DeathknightSimUI } from "./sim-8043c5ab.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-28ebac90.entry.js.map
