import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3604612a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fb7b54ab.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-92e857f7.chunk.js";
import "./totem_inputs-83bda19b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-887af33e.entry.js.map
