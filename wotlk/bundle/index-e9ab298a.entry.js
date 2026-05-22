import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-98aea73c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-cb87a65c.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-4765bc22.chunk.js";
import "./totem_inputs-d57b1e67.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-e9ab298a.entry.js.map
