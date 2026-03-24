import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-eacde86f.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-814b8bfb.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-2a93751f.entry.js.map
