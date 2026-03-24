import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-59497cd7.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-663946ea.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-04231fff.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-aa59b530.entry.js.map
