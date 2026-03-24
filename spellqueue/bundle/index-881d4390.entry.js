import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7108515c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f8ea6bce.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-25909fce.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-881d4390.entry.js.map
