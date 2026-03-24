import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-efbe915e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-484bfdab.chunk.js";
import { W as WarlockSimUI } from "./sim-a91a6a7a.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-4c7a5fb8.entry.js.map
