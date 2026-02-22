import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-57eefc71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-84fc69fa.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-b5062fca.chunk.js";
import "./totem_inputs-71d3483e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-1f686a17.entry.js.map
