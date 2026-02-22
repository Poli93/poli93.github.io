import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-a98d5a6e.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-e10092e3.chunk.js";
import { H as HunterSimUI } from "./sim-e06fb33d.chunk.js";
import "./suggest_gems_action-dcf03cbf.chunk.js";
import "./apl_utils-961a8bdf.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecHunter, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new HunterSimUI(document.body, player);
//# sourceMappingURL=index-7c741d29.entry.js.map
