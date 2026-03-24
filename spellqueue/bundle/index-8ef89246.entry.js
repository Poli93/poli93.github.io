import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2d1eea1c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ae302dcc.chunk.js";
import { M as MageSimUI } from "./sim-5c1425d0.chunk.js";
import "./apl_utils-629c71ee.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecMage, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new MageSimUI(document.body, player);
//# sourceMappingURL=index-8ef89246.entry.js.map
