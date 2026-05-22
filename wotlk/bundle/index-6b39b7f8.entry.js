import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e636ba95.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88c18280.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-afb988d1.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-6b39b7f8.entry.js.map
