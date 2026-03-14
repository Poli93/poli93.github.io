import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-73fc40c4.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-d7b7d398.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-9c22c562.chunk.js";
import "./totem_inputs-e41cbb71.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecEnhancementShaman, sim);
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new EnhancementShamanSimUI(document.body, player);
//# sourceMappingURL=index-4749bdfc.entry.js.map
