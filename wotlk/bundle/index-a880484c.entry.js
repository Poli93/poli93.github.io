import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-709fa214.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-32617444.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-e7f6862d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-a880484c.entry.js.map
