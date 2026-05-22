import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5587748d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-abb39774.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-f42de070.chunk.js";
import "./totem_inputs-4c3ed19e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-77948676.entry.js.map
