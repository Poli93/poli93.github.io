import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5a4fc7d0.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6b56c262.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-a4e7a439.chunk.js";
import "./presets-64481c55.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-70d3d680.entry.js.map
