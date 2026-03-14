import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-07b3b5d1.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c2442ae5.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-90033212.chunk.js";
import "./totem_inputs-5d79da11.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-6486748a.entry.js.map
