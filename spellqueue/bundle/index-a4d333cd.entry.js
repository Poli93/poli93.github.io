import "./index-6d46f689.chunk.js";
import { S as Spec, T as TypedEvent } from "./detailed_results-2d1eea1c.chunk.js";
import { S as Sim, P as Player } from "./preset_utils-ae302dcc.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-0146325b.chunk.js";
import "./apl_utils-629c71ee.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecProtectionPaladin, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new ProtectionPaladinSimUI(document.body, player);
//# sourceMappingURL=index-a4d333cd.entry.js.map
