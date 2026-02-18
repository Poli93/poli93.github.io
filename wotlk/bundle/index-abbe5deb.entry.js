import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-e2875dd9.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b9b60f58.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-9d4c5503.chunk.js";
import "./presets-b9bafba8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-abbe5deb.entry.js.map
