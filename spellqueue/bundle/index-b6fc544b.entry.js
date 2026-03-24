import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-5a4fc7d0.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-6b56c262.chunk.js";
import { W as WarlockSimUI } from "./sim-9be7c71c.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-b6fc544b.entry.js.map
