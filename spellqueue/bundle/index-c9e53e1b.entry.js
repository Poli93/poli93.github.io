import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8bc265ce.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89080918.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-6c2ffa55.chunk.js";
import "./totem_inputs-6ae23826.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-c9e53e1b.entry.js.map
