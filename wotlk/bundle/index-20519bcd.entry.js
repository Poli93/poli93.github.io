import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-4a530cbe.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-990b270d.chunk.js";
import { M as MageSimUI } from "./sim-9320799f.chunk.js";
import "./apl_utils-4305ab4c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-20519bcd.entry.js.map
