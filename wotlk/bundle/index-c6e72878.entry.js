import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8450f34b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-63120013.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-23f4e405.chunk.js";
import "./totem_inputs-07a1e4e7.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-c6e72878.entry.js.map
