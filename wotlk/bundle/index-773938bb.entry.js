import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f12779c5.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-7b46bbbd.chunk.js";
import "./totem_inputs-75cd999b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-773938bb.entry.js.map
