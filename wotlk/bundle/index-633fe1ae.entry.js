import "./index-6d46f689.chunk.js";
import { S as Sim, P as Player, a as Spec, T as TypedEvent } from "./preset_utils-4f0e8fc3.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-563500db.chunk.js";
import "./totem_inputs-02aae7ce.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-633fe1ae.entry.js.map
