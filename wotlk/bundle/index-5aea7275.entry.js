import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-17d4b166.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-88911a5d.chunk.js";
import { W as WarlockSimUI } from "./sim-d7b78d11.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-5aea7275.entry.js.map
