import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-44be1b71.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-4c314f7c.chunk.js";
import { M as MageSimUI } from "./sim-39fd617d.chunk.js";
import "./apl_utils-2c85eb00.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-882b98e5.entry.js.map
