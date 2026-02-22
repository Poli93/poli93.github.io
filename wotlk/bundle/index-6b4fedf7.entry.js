import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8450f34b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-63120013.chunk.js";
import { D as DeathknightSimUI } from "./sim-977c1d78.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-6b4fedf7.entry.js.map
