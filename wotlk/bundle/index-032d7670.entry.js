import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-d0099360.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-89ac6fe3.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-08684e7d.chunk.js";
import "./presets-738d4971.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-032d7670.entry.js.map
