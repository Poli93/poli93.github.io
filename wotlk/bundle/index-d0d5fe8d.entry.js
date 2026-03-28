import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-17d4b166.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a94d9d11.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-90f7f3e4.chunk.js";
import "./totem_inputs-20d699c8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-d0d5fe8d.entry.js.map
