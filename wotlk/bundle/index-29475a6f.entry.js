import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c3bf53c9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-dda269ad.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-9abae76b.chunk.js";
import "./totem_inputs-a3b22458.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-29475a6f.entry.js.map
