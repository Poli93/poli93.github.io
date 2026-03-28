import "./index-6d46f689.chunk.js";
import { S as Sim, P as Player, a as Spec, T as TypedEvent } from "./preset_utils-4f0e8fc3.chunk.js";
import { W as WarlockSimUI } from "./sim-0727bfe6.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-344cd8df.entry.js.map
