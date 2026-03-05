import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-14b4011c.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-b5ca8802.chunk.js";
import "./totem_inputs-0f1b09b5.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-c3719c39.entry.js.map
