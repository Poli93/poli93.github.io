import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-57eefc71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-84fc69fa.chunk.js";
import { D as DeathknightSimUI } from "./sim-336414c3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-8c53a683.entry.js.map
