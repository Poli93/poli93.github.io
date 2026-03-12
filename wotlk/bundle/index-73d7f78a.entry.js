import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6051cfd6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-996ee62e.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-40a22a35.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-73d7f78a.entry.js.map
