import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-274ace4d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-78237b98.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-2db63fe9.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-1769f418.entry.js.map
