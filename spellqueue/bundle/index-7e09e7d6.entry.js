import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-c43488ac.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-b461eda0.chunk.js";
import { W as WarlockSimUI } from "./sim-3a43aa8e.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecWarlock, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new WarlockSimUI(document.body, player);
//# sourceMappingURL=index-7e09e7d6.entry.js.map
