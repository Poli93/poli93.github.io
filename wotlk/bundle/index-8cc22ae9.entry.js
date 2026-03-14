import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-12af51fa.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-1965e2ea.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-fa060312.chunk.js";
import "./totem_inputs-f0960082.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-8cc22ae9.entry.js.map
