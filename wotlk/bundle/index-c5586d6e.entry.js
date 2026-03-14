import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-274ace4d.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-78237b98.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-a85cf845.chunk.js";
import "./presets-a9643762.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-c5586d6e.entry.js.map
