import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-ed7677ed.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-21342c4c.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-038d65fb.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHolyPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HolyPaladinSimUI(document.body, player);
//# sourceMappingURL=index-2492c926.entry.js.map
