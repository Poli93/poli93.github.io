import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-470c5606.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f54e38e1.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-5fa48203.chunk.js";
import "./totem_inputs-7216a982.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-12739ee1.entry.js.map
