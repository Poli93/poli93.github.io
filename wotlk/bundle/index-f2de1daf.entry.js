import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-be2a7d40.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e661af5d.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-16b72d69.chunk.js";
import "./totem_inputs-bbdf46e5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-f2de1daf.entry.js.map
