import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e426fb94.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-13aeb1bb.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-d30151b3.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-194a414b.entry.js.map
