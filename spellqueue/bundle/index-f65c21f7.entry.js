import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a1c0fc35.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-5bcac61a.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-2d516c87.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-f65c21f7.entry.js.map
