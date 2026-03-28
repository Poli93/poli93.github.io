import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-17d4b166.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ca375dac.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-92aa226a.chunk.js";
import "./apl_utils-0a664b27.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-4812a5fb.entry.js.map
