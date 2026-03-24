import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-f36ec333.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-593a3865.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-581a8f5e.chunk.js";
import "./presets-976bfd1b.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-a61d90b6.entry.js.map
