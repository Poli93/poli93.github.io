import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a210603b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-248cfd49.chunk.js";
import { M as MageSimUI } from "./sim-a358d74f.chunk.js";
import "./apl_utils-a64a368d.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-e36e5229.entry.js.map
