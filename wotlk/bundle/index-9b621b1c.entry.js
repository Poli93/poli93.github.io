import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-964cf090.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-05e71d1e.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-7565f813.chunk.js";
import "./totem_inputs-429762fe.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-9b621b1c.entry.js.map
