import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-baa2d5bc.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-01be8d3d.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-278792ea.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-08c62b61.entry.js.map
