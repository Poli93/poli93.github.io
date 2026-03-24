import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44bd0be2.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-011dd149.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-d643203d.chunk.js";
import "./totem_inputs-47516034.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-efa7c6d8.entry.js.map
