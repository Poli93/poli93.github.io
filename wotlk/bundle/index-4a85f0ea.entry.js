import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a280e993.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b73d15d3.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-ee2f3359.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-4a85f0ea.entry.js.map
