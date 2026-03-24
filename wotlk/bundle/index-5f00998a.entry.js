import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-12af51fa.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1965e2ea.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-3f740760.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-5f00998a.entry.js.map
