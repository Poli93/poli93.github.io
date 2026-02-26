import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d9de8996.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-8066a19e.chunk.js";
import { D as DeathknightSimUI } from "./sim-ea2ff846.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-73d099b7.entry.js.map
