import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-10baf22a.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-7dd82e71.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-2d229a1b.chunk.js";
import "./presets-a8659064.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-1d193f02.entry.js.map
