import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e6efd6d6.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-396fe00d.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-e8c1c308.chunk.js";
import "./totem_inputs-608f766e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-4a2fd378.entry.js.map
