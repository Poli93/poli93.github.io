import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2d1eea1c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ae302dcc.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-0b9183a6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-de146428.entry.js.map
