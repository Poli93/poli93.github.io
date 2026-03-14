import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-8450f34b.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-63120013.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-ecf89734.chunk.js";
import "./presets-bccf1a0b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-deb23cad.entry.js.map
