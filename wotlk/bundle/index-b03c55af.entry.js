import "./index-6d46f689.chunk.js";
import { S as Sim, P as Player, a as Spec, T as TypedEvent } from "./preset_utils-4f0e8fc3.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-2edaa34c.chunk.js";
import "./suggest_gems_action-fc324870.chunk.js";
import "./apl_utils-f1f275f8.chunk.js";
const index = "";
const sim = new Sim();
const player = new Player(Spec.SpecFeralTankDruid, sim);
player.enableHealing();
sim.raid.setPlayer(TypedEvent.nextEventID(), 0, player);
new FeralTankDruidSimUI(document.body, player);
//# sourceMappingURL=index-b03c55af.entry.js.map
