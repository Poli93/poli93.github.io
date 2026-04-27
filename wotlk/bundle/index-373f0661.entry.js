import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3a46eb1b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7847edc6.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-31361929.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-373f0661.entry.js.map
