import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-271e4b09.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d572afca.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-c8d0184b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-aa576e5a.entry.js.map
