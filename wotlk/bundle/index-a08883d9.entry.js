import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-7108515c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-f8ea6bce.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-bf0b1017.chunk.js";
import "./totem_inputs-841cbbe0.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecElementalShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ElementalShamanSimUI(document.body, player);
//# sourceMappingURL=index-a08883d9.entry.js.map
