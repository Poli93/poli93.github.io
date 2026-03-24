import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-ed7677ed.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-21342c4c.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-05e8a14f.chunk.js";
import "./totem_inputs-0a701f51.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-aca88832.entry.js.map
