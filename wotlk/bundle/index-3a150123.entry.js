import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-3604612a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-fb7b54ab.chunk.js";
import { M as MageSimUI } from "./sim-cb56ed31.chunk.js";
import "./apl_utils-a354af7a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-3a150123.entry.js.map
