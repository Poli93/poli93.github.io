import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-07b3b5d1.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c2442ae5.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-3cd82567.chunk.js";
import "./presets-9e92ebfc.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-4b3ef016.entry.js.map
