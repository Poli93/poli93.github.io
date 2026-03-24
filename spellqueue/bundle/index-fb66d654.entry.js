import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-52c21361.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-c7ceafff.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-67b753f1.chunk.js";
import "./presets-76b36d85.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecShadowPriest, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ShadowPriestSimUI(document.body, player);
//# sourceMappingURL=index-fb66d654.entry.js.map
