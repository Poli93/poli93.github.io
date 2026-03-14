import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44be1b71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c314f7c.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-ff9d13bc.chunk.js";
import "./totem_inputs-3066a104.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-9f90866b.entry.js.map
