import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-b23e354e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-a2c2e186.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-96b2912e.chunk.js";
import "./totem_inputs-3a8f648e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-2159f723.entry.js.map
