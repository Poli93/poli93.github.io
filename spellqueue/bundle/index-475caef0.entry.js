import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4138557e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e8f85000.chunk.js";
import { D as DeathknightSimUI } from "./sim-06f933b8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecDeathknight, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new DeathknightSimUI(document.body, player);
//# sourceMappingURL=index-475caef0.entry.js.map
