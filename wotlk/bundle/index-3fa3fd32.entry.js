import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-6881a4e3.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b24c1154.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-17800037.chunk.js";
import "./totem_inputs-23adf245.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-3fa3fd32.entry.js.map
