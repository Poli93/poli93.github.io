import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a98d5a6e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e10092e3.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-1f77a0ec.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-b1db92ca.entry.js.map
