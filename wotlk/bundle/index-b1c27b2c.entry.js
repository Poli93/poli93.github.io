var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { T as Tooltip } from "./index-6d46f689.chunk.js";
import { S as Spec, eY as naturalSpecOrder, aU as Faction, C as Component, bH as formatDeltaTextElem, T as TypedEvent, z as Player, B as playerToSpec, eZ as cssClassForClass, a_ as getEnumValues, u as Class, w as specToClass, N as Glyphs, $ as Profession, at as isTankSpec, ap as newUnitReference, dg as isHealingSpec, e_ as isMeleeDpsSpec, e$ as isRangedDpsSpec, A as ActionId, ev as FireTotem, eu as AirTotem, dX as Hunter_Options_PetType, eH as PaladinAura, et as EarthTotem, f0 as Warlock_Options_Summon, eV as WarriorShout, ew as WaterTotem, s as sum, ed as textCssClassForClass, f1 as SavedRaid, aI as Raid, f2 as BlessingsAssignments, I as Input, aH as UnitReference, ao as emptyUnitReference, f3 as makeDefaultBlessings, Y as classColors, f4 as Blessings, ec as titleIcons, bo as specNames, dU as SavedEncounter, a6 as Race, f5 as RaidSimSettings, br as raceNames, c5 as bucket, a0 as raceToFaction, bI as professionNames, f6 as distinct, aA as Encounter, y as Party, bh as EquipmentSpec, bi as ItemSpec, ae as getTalentTreePoints, aG as UnitReference_Type, ej as addRaidSimAction, ek as EmbeddedDetailedResults, bc as TristateEffect } from "./detailed_results-63791f5d.chunk.js";
import { a6 as getSpecConfig, a7 as EnumPicker, a8 as MAX_PARTY_SIZE, P as Player$1, a9 as BaseModal, aa as SimTab, ab as SavedDataManager, u as IconEnumPicker, ac as memeSpecs, C as ContentBlock, ad as EncounterPicker, ae as BLESSINGS_SECTION, w as IconPicker, af as Importer, ag as Exporter, ah as Encounter$1, ai as MAX_NUM_PARTIES, aj as SimUI, S as Sim, ak as raidSimStatus } from "./preset_utils-4c51c782.chunk.js";
import { T as TankDeathknightSimUI } from "./sim-617ba3e6.chunk.js";
import { D as DeathknightSimUI } from "./sim-ca75db4d.chunk.js";
import { B as BalanceDruidSimUI } from "./sim-f4ee7a0e.chunk.js";
import { F as FeralDruidSimUI } from "./sim-1ff9c15d.chunk.js";
import { F as FeralTankDruidSimUI } from "./sim-516effb6.chunk.js";
import { R as RestorationDruidSimUI } from "./sim-91594002.chunk.js";
import { E as ElementalShamanSimUI } from "./sim-2c3ad83f.chunk.js";
import { E as EnhancementShamanSimUI } from "./sim-8fb1baac.chunk.js";
import { R as RestorationShamanSimUI } from "./sim-bcfaf85d.chunk.js";
import { H as HunterSimUI } from "./sim-5c8fe77c.chunk.js";
import { M as MageSimUI } from "./sim-b001de4d.chunk.js";
import { R as RogueSimUI } from "./sim-210b4dbf.chunk.js";
import { H as HolyPaladinSimUI } from "./sim-e12f78a9.chunk.js";
import { P as ProtectionPaladinSimUI } from "./sim-6f51cf50.chunk.js";
import { R as RetributionPaladinSimUI } from "./sim-6887bd8a.chunk.js";
import { H as HealingPriestSimUI } from "./sim-fbdeba18.chunk.js";
import { S as ShadowPriestSimUI } from "./sim-e12bef36.chunk.js";
import { S as SmitePriestSimUI } from "./sim-db7f9ed9.chunk.js";
import { W as WarriorSimUI } from "./sim-1184ae0b.chunk.js";
import { P as ProtectionWarriorSimUI } from "./sim-25999afe.chunk.js";
import { W as WarlockSimUI } from "./sim-4feffd20.chunk.js";
import "./suggest_gems_action-612c9cca.chunk.js";
import "./apl_utils-dc071f5a.chunk.js";
import "./totem_inputs-3ce03aa2.chunk.js";
import "./presets-4a004b18.chunk.js";
const index = "";
const specSimFactories = {
  [Spec.SpecTankDeathknight]: (parentElem, player) => new TankDeathknightSimUI(parentElem, player),
  [Spec.SpecDeathknight]: (parentElem, player) => new DeathknightSimUI(parentElem, player),
  [Spec.SpecBalanceDruid]: (parentElem, player) => new BalanceDruidSimUI(parentElem, player),
  [Spec.SpecFeralDruid]: (parentElem, player) => new FeralDruidSimUI(parentElem, player),
  [Spec.SpecFeralTankDruid]: (parentElem, player) => new FeralTankDruidSimUI(parentElem, player),
  [Spec.SpecRestorationDruid]: (parentElem, player) => new RestorationDruidSimUI(parentElem, player),
  [Spec.SpecElementalShaman]: (parentElem, player) => new ElementalShamanSimUI(parentElem, player),
  [Spec.SpecEnhancementShaman]: (parentElem, player) => new EnhancementShamanSimUI(parentElem, player),
  [Spec.SpecRestorationShaman]: (parentElem, player) => new RestorationShamanSimUI(parentElem, player),
  [Spec.SpecHunter]: (parentElem, player) => new HunterSimUI(parentElem, player),
  [Spec.SpecMage]: (parentElem, player) => new MageSimUI(parentElem, player),
  [Spec.SpecRogue]: (parentElem, player) => new RogueSimUI(parentElem, player),
  [Spec.SpecHolyPaladin]: (parentElem, player) => new HolyPaladinSimUI(parentElem, player),
  [Spec.SpecProtectionPaladin]: (parentElem, player) => new ProtectionPaladinSimUI(parentElem, player),
  [Spec.SpecRetributionPaladin]: (parentElem, player) => new RetributionPaladinSimUI(parentElem, player),
  [Spec.SpecHealingPriest]: (parentElem, player) => new HealingPriestSimUI(parentElem, player),
  [Spec.SpecShadowPriest]: (parentElem, player) => new ShadowPriestSimUI(parentElem, player),
  [Spec.SpecSmitePriest]: (parentElem, player) => new SmitePriestSimUI(parentElem, player),
  [Spec.SpecWarrior]: (parentElem, player) => new WarriorSimUI(parentElem, player),
  [Spec.SpecProtectionWarrior]: (parentElem, player) => new ProtectionWarriorSimUI(parentElem, player),
  [Spec.SpecWarlock]: (parentElem, player) => new WarlockSimUI(parentElem, player)
};
const playerPresets = naturalSpecOrder.map(getSpecConfig).map((config) => {
  const indSimUiConfig = config;
  return indSimUiConfig.raidSimPresets;
}).flat();
const implementedSpecs = [...new Set(playerPresets.map((preset) => preset.spec))];
const NEW_PLAYER = -1;
const LATEST_PHASE_WITH_ALL_PRESETS = Math.min(...playerPresets.map((preset) => Math.max(...Object.keys(preset.defaultGear[Faction.Alliance]).map((k) => parseInt(k)))));
class RaidPicker extends Component {
  constructor(parent, raidSimUI) {
    super(parent, "raid-picker-root");
    __publicField(this, "raidSimUI");
    __publicField(this, "raid");
    __publicField(this, "partyPickers");
    __publicField(this, "newPlayerPicker");
    __publicField(this, "currentDragPlayer", null);
    __publicField(this, "currentDragPlayerFromIndex", NEW_PLAYER);
    __publicField(this, "currentDragType", 1);
    __publicField(this, "currentDragParty", null);
    this.raidSimUI = raidSimUI;
    this.raid = raidSimUI.sim.raid;
    const raidControls = document.createElement("div");
    raidControls.classList.add("raid-controls");
    this.rootElem.appendChild(raidControls);
    this.newPlayerPicker = new NewPlayerPicker(this.rootElem, this);
    new EnumPicker(raidControls, this.raidSimUI.sim.raid, {
      label: "Raid Size",
      labelTooltip: "Number of players participating in the sim.",
      values: [
        { name: "5", value: 1 },
        { name: "10", value: 2 },
        { name: "25", value: 5 },
        { name: "40", value: 8 }
      ],
      changedEvent: (raid) => raid.numActivePartiesChangeEmitter,
      getValue: (raid) => raid.getNumActiveParties(),
      setValue: (eventID, raid, newValue) => {
        raid.setNumActiveParties(eventID, newValue);
      }
    });
    new EnumPicker(raidControls, this.newPlayerPicker, {
      label: "Default Faction",
      labelTooltip: "Default faction for newly-created players.",
      values: [
        { name: "Alliance", value: Faction.Alliance },
        { name: "Horde", value: Faction.Horde }
      ],
      changedEvent: (_picker) => this.raid.sim.factionChangeEmitter,
      getValue: (_picker) => this.raid.sim.getFaction(),
      setValue: (eventID, picker, newValue) => {
        this.raid.sim.setFaction(eventID, newValue);
      }
    });
    new EnumPicker(raidControls, this.newPlayerPicker, {
      label: "Default Gear",
      labelTooltip: "Newly-created players will start with approximate BIS gear from this phase.",
      values: [...Array(LATEST_PHASE_WITH_ALL_PRESETS).keys()].map((val) => {
        const phase = val + 1;
        return { name: "Phase " + phase, value: phase };
      }),
      changedEvent: (_picker) => this.raid.sim.phaseChangeEmitter,
      getValue: (_picker) => this.raid.sim.getPhase(),
      setValue: (eventID, picker, newValue) => {
        this.raid.sim.setPhase(eventID, newValue);
      }
    });
    const partiesContainer = document.createElement("div");
    partiesContainer.classList.add("parties-container");
    this.rootElem.appendChild(partiesContainer);
    this.partyPickers = this.raid.getParties().map((party, i) => new PartyPicker(partiesContainer, party, i, this));
    const updateActiveParties = () => {
      this.partyPickers.forEach((partyPicker) => {
        if (partyPicker.index < this.raidSimUI.sim.raid.getNumActiveParties()) {
          partyPicker.rootElem.classList.add("active");
        } else {
          partyPicker.rootElem.classList.remove("active");
        }
      });
    };
    this.raidSimUI.sim.raid.numActivePartiesChangeEmitter.on(updateActiveParties);
    updateActiveParties();
    this.rootElem.ondragend = (_event) => {
      this.clearDragPlayer();
      this.clearDragParty();
    };
  }
  getCurrentFaction() {
    return this.raid.sim.getFaction();
  }
  getCurrentPhase() {
    return this.raid.sim.getPhase();
  }
  getPlayerPicker(raidIndex) {
    return this.partyPickers[Math.floor(raidIndex / MAX_PARTY_SIZE)].playerPickers[raidIndex % MAX_PARTY_SIZE];
  }
  getPlayerPickers() {
    return [...new Array(25).keys()].map((i) => this.getPlayerPicker(i));
  }
  setDragPlayer(player, fromIndex, type) {
    this.clearDragPlayer();
    this.currentDragPlayer = player;
    this.currentDragPlayerFromIndex = fromIndex;
    this.currentDragType = type;
    if (fromIndex != NEW_PLAYER) {
      const playerPicker = this.getPlayerPicker(fromIndex);
      playerPicker.rootElem.classList.add("dragfrom");
    }
  }
  clearDragPlayer() {
    if (this.currentDragPlayerFromIndex != NEW_PLAYER) {
      const playerPicker = this.getPlayerPicker(this.currentDragPlayerFromIndex);
      playerPicker.rootElem.classList.remove("dragfrom");
    }
    this.currentDragPlayer = null;
    this.currentDragPlayerFromIndex = NEW_PLAYER;
    this.currentDragType = 1;
  }
  setDragParty(party) {
    this.currentDragParty = party;
    party.rootElem.classList.add("dragfrom");
  }
  clearDragParty() {
    if (this.currentDragParty) {
      this.currentDragParty.rootElem.classList.remove("dragfrom");
      this.currentDragParty = null;
    }
  }
}
class PartyPicker extends Component {
  constructor(parent, party, index2, raidPicker) {
    super(parent, "party-picker-root");
    __publicField(this, "party");
    __publicField(this, "index");
    __publicField(this, "raidPicker");
    __publicField(this, "playerPickers");
    this.party = party;
    this.index = index2;
    this.raidPicker = raidPicker;
    this.rootElem.setAttribute("draggable", "true");
    this.rootElem.innerHTML = `
			<div class="party-header">
				<label class="party-label form-label">Group ${index2 + 1}</label>
				<div class="party-results">
					<span class="party-results-dps"></span>
					<span class="party-results-reference-delta"></span>
				</div>
			</div>
			<div class="players-container">
			</div>
		`;
    const playersContainer = this.rootElem.getElementsByClassName("players-container")[0];
    this.playerPickers = [...Array(MAX_PARTY_SIZE).keys()].map((i) => new PlayerPicker(playersContainer, this, i));
    const dpsResultElem = this.rootElem.getElementsByClassName("party-results-dps")[0];
    const referenceDeltaElem = this.rootElem.getElementsByClassName("party-results-reference-delta")[0];
    this.raidPicker.raidSimUI.referenceChangeEmitter.on(() => {
      const currentData = this.raidPicker.raidSimUI.getCurrentData();
      const referenceData = this.raidPicker.raidSimUI.getReferenceData();
      const partyDps = currentData?.simResult.raidMetrics.parties[this.index]?.dps.avg || 0;
      const referenceDps = referenceData?.simResult.raidMetrics.parties[this.index]?.dps.avg || 0;
      if (partyDps == 0 && referenceDps == 0) {
        dpsResultElem.textContent = "";
        referenceDeltaElem.textContent = "";
        return;
      }
      dpsResultElem.textContent = `${partyDps.toFixed(1)} DPS`;
      if (!referenceData) {
        referenceDeltaElem.textContent = "";
        return;
      }
      formatDeltaTextElem(referenceDeltaElem, referenceDps, partyDps, 1);
    });
    this.rootElem.ondragstart = (event) => {
      if (event.target == this.rootElem) {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.effectAllowed = "all";
        this.raidPicker.setDragParty(this);
      }
    };
    let dragEnterCounter = 0;
    this.rootElem.ondragenter = (event) => {
      event.preventDefault();
      if (!this.raidPicker.currentDragParty) {
        return;
      }
      dragEnterCounter++;
      this.rootElem.classList.add("dragto");
    };
    this.rootElem.ondragleave = (event) => {
      event.preventDefault();
      if (!this.raidPicker.currentDragParty) {
        return;
      }
      dragEnterCounter--;
      if (dragEnterCounter <= 0) {
        this.rootElem.classList.remove("dragto");
      }
    };
    this.rootElem.ondragover = (event) => {
      event.preventDefault();
    };
    this.rootElem.ondrop = (event) => {
      if (!this.raidPicker.currentDragParty) {
        return;
      }
      event.preventDefault();
      dragEnterCounter = 0;
      this.rootElem.classList.remove("dragto");
      const eventID = TypedEvent.nextEventID();
      TypedEvent.freezeAllAndDo(() => {
        const srcPartyPicker = this.raidPicker.currentDragParty;
        for (let i = 0; i < MAX_PARTY_SIZE; i++) {
          const srcPlayerPicker = srcPartyPicker.playerPickers[i];
          const dstPlayerPicker = this.playerPickers[i];
          const srcPlayer = srcPlayerPicker.player;
          const dstPlayer = dstPlayerPicker.player;
          srcPlayerPicker.setPlayer(eventID, dstPlayer, 3);
          dstPlayerPicker.setPlayer(eventID, srcPlayer, 3);
        }
      });
      this.raidPicker.clearDragParty();
    };
  }
}
class PlayerPicker extends Component {
  constructor(parent, partyPicker, index2) {
    super(parent, "player-picker-root");
    __publicField(this, "index");
    __publicField(this, "raidIndex");
    __publicField(this, "player");
    __publicField(this, "partyPicker");
    __publicField(this, "raidPicker");
    __publicField(this, "labelElem");
    __publicField(this, "iconElem");
    __publicField(this, "nameElem");
    __publicField(this, "resultsElem");
    __publicField(this, "dpsResultElem");
    __publicField(this, "referenceDeltaElem");
    this.index = index2;
    this.raidIndex = partyPicker.index * MAX_PARTY_SIZE + index2;
    this.player = null;
    this.partyPicker = partyPicker;
    this.raidPicker = partyPicker.raidPicker;
    this.labelElem = null;
    this.iconElem = null;
    this.nameElem = null;
    this.resultsElem = null;
    this.dpsResultElem = null;
    this.referenceDeltaElem = null;
    this.rootElem.classList.add("player");
    this.partyPicker.party.compChangeEmitter.on((eventID) => {
      const newPlayer = this.partyPicker.party.getPlayer(this.index);
      if (newPlayer != this.player)
        this.setPlayer(eventID, newPlayer, 0);
    });
    this.raidPicker.raidSimUI.referenceChangeEmitter.on(() => {
      const currentData = this.raidPicker.raidSimUI.getCurrentData();
      const referenceData = this.raidPicker.raidSimUI.getReferenceData();
      const playerDps = currentData?.simResult.getPlayerWithRaidIndex(this.raidIndex)?.dps.avg || 0;
      const referenceDps = referenceData?.simResult.getPlayerWithRaidIndex(this.raidIndex)?.dps.avg || 0;
      if (this.player) {
        this.resultsElem?.classList.remove("hide");
        this.dpsResultElem.textContent = `${playerDps.toFixed(1)} DPS`;
        if (referenceData)
          formatDeltaTextElem(this.referenceDeltaElem, referenceDps, playerDps, 1);
      }
    });
    let dragEnterCounter = 0;
    this.rootElem.ondragenter = (event) => {
      event.preventDefault();
      if (this.raidPicker.currentDragParty) {
        return;
      }
      dragEnterCounter++;
      this.rootElem.classList.add("dragto");
    };
    this.rootElem.ondragleave = (event) => {
      event.preventDefault();
      if (this.raidPicker.currentDragParty) {
        return;
      }
      dragEnterCounter--;
      if (dragEnterCounter <= 0) {
        this.rootElem.classList.remove("dragto");
      }
    };
    this.rootElem.ondragover = (event) => event.preventDefault();
    this.rootElem.ondrop = (event) => {
      if (this.raidPicker.currentDragParty) {
        return;
      }
      var dropData = event.dataTransfer.getData("text/plain");
      event.preventDefault();
      dragEnterCounter = 0;
      this.rootElem.classList.remove("dragto");
      const eventID = TypedEvent.nextEventID();
      TypedEvent.freezeAllAndDo(() => {
        if (this.raidPicker.currentDragPlayer == null && dropData.length == 0) {
          return;
        }
        if (this.raidPicker.currentDragPlayerFromIndex == this.raidIndex) {
          this.raidPicker.clearDragPlayer();
          return;
        }
        const dragType = this.raidPicker.currentDragType;
        if (this.raidPicker.currentDragPlayerFromIndex != NEW_PLAYER) {
          const fromPlayerPicker = this.raidPicker.getPlayerPicker(this.raidPicker.currentDragPlayerFromIndex);
          if (dragType == 3) {
            fromPlayerPicker.setPlayer(eventID, this.player, dragType);
          } else if (dragType == 2) {
            fromPlayerPicker.setPlayer(eventID, null, dragType);
          }
        } else if (this.raidPicker.currentDragPlayer == null) {
          const binary = atob(dropData);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < bytes.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          const playerProto = Player.fromBinary(bytes);
          var localPlayer = new Player$1(playerToSpec(playerProto), this.raidPicker.raidSimUI.sim);
          localPlayer.fromProto(eventID, playerProto);
          this.raidPicker.currentDragPlayer = localPlayer;
        }
        if (dragType == 4) {
          this.setPlayer(eventID, this.raidPicker.currentDragPlayer.clone(eventID), dragType);
        } else {
          this.setPlayer(eventID, this.raidPicker.currentDragPlayer, dragType);
        }
        this.raidPicker.clearDragPlayer();
      });
    };
    this.update();
  }
  setPlayer(eventID, newPlayer, dragType) {
    if (newPlayer == this.player) {
      return;
    }
    TypedEvent.freezeAllAndDo(() => {
      this.player = newPlayer;
      if (newPlayer) {
        this.partyPicker.party.setPlayer(eventID, this.index, newPlayer);
        if (dragType == 1) {
          applyNewPlayerAssignments(eventID, newPlayer, this.raidPicker.raid);
        }
      } else {
        this.partyPicker.party.setPlayer(eventID, this.index, newPlayer);
        this.partyPicker.party.compChangeEmitter.emit(eventID);
      }
    });
    this.update();
  }
  update() {
    if (this.player == null) {
      this.rootElem.className = "player-picker-root player";
      this.rootElem.innerHTML = "";
      this.labelElem = null;
      this.iconElem = null;
      this.nameElem = null;
      this.resultsElem = null;
      this.dpsResultElem = null;
      this.referenceDeltaElem = null;
    } else {
      const classCssClass = cssClassForClass(this.player.getClass());
      this.rootElem.className = `player-picker-root player bg-${classCssClass}-dampened`;
      this.rootElem.innerHTML = `
				<div class="player-label">
					<img class="player-icon" src="${this.player.getSpecIcon()}" draggable="true" />
					<div class="player-details">
						<input
							class="player-name text-${classCssClass}"
							type="text"
							value="${this.player.getName()}"
							spellcheck="false"
							maxlength="15"
						/>
						<div class="player-results hide">
							<span class="player-results-dps"></span>
							<span class="player-results-reference-delta"></span>
						</div>
					</div>
				</div>
				<div class="player-options">
					<a
						href="javascript:void(0)"
						class="player-edit"
						role="button"
						data-bs-toggle="tooltip"
						data-bs-title="Click to Edit"
					>
						<i class="fa fa-edit fa-lg"></i>
					</a>
					<a
						href="javascript:void(0)"
						class="player-copy link-warning"
						role="button"
						draggable="true"
						data-bs-toggle="tooltip"
						data-bs-title="Drag to Copy"
					>
						<i class="fa fa-copy fa-lg"></i>
					</a>
					<a
						href="javascript:void(0)"
						class="player-delete link-danger"
						role="button"
						data-bs-toggle="tooltip"
						data-bs-title="Click to Delete"
					>
						<i class="fa fa-times fa-lg"></i>
					</a>
				</div>
			`;
      this.labelElem = this.rootElem.querySelector(".player-label");
      this.iconElem = this.rootElem.querySelector(".player-icon");
      this.nameElem = this.rootElem.querySelector(".player-name");
      this.resultsElem = this.rootElem.querySelector(".player-results");
      this.dpsResultElem = this.rootElem.querySelector(".player-results-dps");
      this.referenceDeltaElem = this.rootElem.querySelector(".player-results-reference-delta");
      this.bindPlayerEvents();
    }
  }
  bindPlayerEvents() {
    this.nameElem?.addEventListener("input", (_event) => {
      this.player?.setName(TypedEvent.nextEventID(), this.nameElem?.value || "");
    });
    this.nameElem?.addEventListener("mousedown", (_event) => {
      this.partyPicker.rootElem.setAttribute("draggable", "false");
    });
    this.nameElem?.addEventListener("mouseup", (_event) => {
      this.partyPicker.rootElem.setAttribute("draggable", "true");
    });
    const emptyName = "Unnamed";
    this.nameElem?.addEventListener("focusout", (_event) => {
      if (this.nameElem && !this.nameElem.value) {
        this.nameElem.value = emptyName;
        this.player?.setName(TypedEvent.nextEventID(), emptyName);
      }
    });
    const dragStart = (event, type) => {
      if (this.player == null) {
        event.preventDefault();
        return;
      }
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "all";
      if (this.player) {
        var playerDataProto = this.player.toProto(true);
        event.dataTransfer.setData("text/plain", btoa(String.fromCharCode(...Player.toBinary(playerDataProto))));
      }
      this.raidPicker.setDragPlayer(this.player, this.raidIndex, type);
    };
    const editElem = this.rootElem.querySelector(".player-edit");
    const copyElem = this.rootElem.querySelector(".player-copy");
    const deleteElem = this.rootElem.querySelector(".player-delete");
    Tooltip.getOrCreateInstance(editElem);
    Tooltip.getOrCreateInstance(copyElem);
    const deleteTooltip = Tooltip.getOrCreateInstance(deleteElem);
    this.iconElem.ondragstart = (event) => {
      event.dataTransfer.setDragImage(this.rootElem, 20, 20);
      dragStart(event, 3);
    };
    editElem.onclick = (_event) => {
      new PlayerEditorModal(this.player);
    };
    copyElem.ondragstart = (event) => {
      event.dataTransfer.setDragImage(this.rootElem, 20, 20);
      dragStart(event, 4);
    };
    deleteElem.onclick = (_event) => {
      deleteTooltip.hide();
      this.setPlayer(TypedEvent.nextEventID(), null, 0);
    };
  }
}
class PlayerEditorModal extends BaseModal {
  constructor(player) {
    super(document.body, "player-editor-modal", {
      closeButton: { fixed: true },
      header: false
    });
    this.rootElem.id = "playerEditorModal";
    this.body.insertAdjacentHTML("beforeend", `
			<div class="player-editor within-raid-sim"></div>
		`);
    const editorRoot = this.rootElem.getElementsByClassName("player-editor")[0];
    specSimFactories[player.spec](editorRoot, player);
  }
}
class NewPlayerPicker extends Component {
  constructor(parent, raidPicker) {
    super(parent, "new-player-picker-root");
    __publicField(this, "raidPicker");
    this.raidPicker = raidPicker;
    getEnumValues(Class).forEach((wowClass) => {
      if (wowClass == Class.ClassUnknown) {
        return;
      }
      const matchingPresets = playerPresets.filter((preset) => specToClass[preset.spec] == wowClass);
      if (matchingPresets.length == 0) {
        return;
      }
      const classPresetsContainer = document.createElement("div");
      classPresetsContainer.classList.add("class-presets-container", `bg-${cssClassForClass(wowClass)}-dampened`);
      this.rootElem.appendChild(classPresetsContainer);
      matchingPresets.forEach((matchingPreset) => {
        const presetElemFragment = document.createElement("fragment");
        presetElemFragment.innerHTML = `
					<a
						href="javascript:void(0)"
						role="button"
						draggable="true"
						data-bs-toggle="tooltip"
						data-bs-title="${matchingPreset.tooltip}"
						data-bs-html="true"
					>
						<img class="preset-picker-icon player-icon" src="${matchingPreset.iconUrl}"/>
					</a>
				`;
        const presetElem = presetElemFragment.children[0];
        classPresetsContainer.appendChild(presetElem);
        Tooltip.getOrCreateInstance(presetElem);
        presetElem.ondragstart = (event) => {
          const eventID = TypedEvent.nextEventID();
          TypedEvent.freezeAllAndDo(() => {
            const dragImage = new Image();
            dragImage.src = matchingPreset.iconUrl;
            event.dataTransfer.setDragImage(dragImage, 30, 30);
            event.dataTransfer.setData("text/plain", "");
            event.dataTransfer.dropEffect = "copy";
            const newPlayer = new Player$1(matchingPreset.spec, this.raidPicker.raid.sim);
            newPlayer.applySharedDefaults(eventID);
            newPlayer.setRace(eventID, matchingPreset.defaultFactionRaces[this.raidPicker.getCurrentFaction()]);
            newPlayer.setTalentsString(eventID, matchingPreset.talents.talentsString);
            newPlayer.setGlyphs(eventID, matchingPreset.talents.glyphs || Glyphs.create());
            newPlayer.setSpecOptions(eventID, matchingPreset.specOptions);
            newPlayer.setConsumes(eventID, matchingPreset.consumes);
            newPlayer.setName(eventID, matchingPreset.defaultName);
            newPlayer.setProfession1(eventID, matchingPreset.otherDefaults?.profession1 || Profession.Engineering);
            newPlayer.setProfession2(eventID, matchingPreset.otherDefaults?.profession2 || Profession.Jewelcrafting);
            newPlayer.setDistanceFromTarget(eventID, matchingPreset.otherDefaults?.distanceFromTarget || 0);
            this.raidPicker.raid.sim.waitForInit().then(() => {
              const phase = Math.min(this.raidPicker.getCurrentPhase(), LATEST_PHASE_WITH_ALL_PRESETS);
              const gearSet = matchingPreset.defaultGear[this.raidPicker.getCurrentFaction()][phase];
              newPlayer.setGear(eventID, this.raidPicker.raid.sim.db.lookupEquipmentSpec(gearSet));
            });
            this.raidPicker.setDragPlayer(newPlayer, NEW_PLAYER, 1);
          });
        };
      });
    });
  }
}
function applyNewPlayerAssignments(eventID, newPlayer, raid) {
  if (isTankSpec(newPlayer.spec)) {
    const tanks = raid.getTanks();
    const emptyIdx = tanks.findIndex((tank) => raid.getPlayerFromUnitReference(tank) == null);
    if (emptyIdx == -1) {
      if (tanks.length < 3) {
        raid.setTanks(eventID, tanks.concat([newPlayer.makeUnitReference()]));
      }
    } else {
      tanks[emptyIdx] = newPlayer.makeUnitReference();
      raid.setTanks(eventID, tanks);
    }
  }
  if (newPlayer.spec == Spec.SpecBalanceDruid) {
    const newOptions = newPlayer.getSpecOptions();
    newOptions.innervateTarget = newUnitReference(newPlayer.getRaidIndex());
    newPlayer.setSpecOptions(eventID, newOptions);
  } else if (newPlayer.spec == Spec.SpecSmitePriest) {
    const newOptions = newPlayer.getSpecOptions();
    newOptions.powerInfusionTarget = newUnitReference(newPlayer.getRaidIndex());
    newPlayer.setSpecOptions(eventID, newOptions);
  } else if (newPlayer.spec == Spec.SpecMage) {
    const newOptions = newPlayer.getSpecOptions();
    newOptions.focusMagicTarget = newUnitReference(newPlayer.getRaidIndex());
    newPlayer.setSpecOptions(eventID, newOptions);
  }
}
class RaidStats extends Component {
  constructor(parent, raidSimUI) {
    super(parent, "raid-stats");
    __publicField(this, "categories");
    let categories = [];
    RAID_STATS_OPTIONS.sections.forEach((section) => {
      const sectionElem = document.createElement("div");
      sectionElem.classList.add("raid-stats-section");
      this.rootElem.appendChild(sectionElem);
      sectionElem.innerHTML = `
				<div class="raid-stats-section-header">
					<label class="raid-stats-section-label form-label">${section.label}</label>
				</div>
				<div class="raid-stats-section-content"></div>
			`;
      const contentElem = sectionElem.getElementsByClassName("raid-stats-section-content")[0];
      section.categories.forEach((categoryOptions) => {
        categories.push(new RaidStatsCategory(contentElem, raidSimUI, categoryOptions));
      });
    });
    this.categories = categories;
    raidSimUI.changeEmitter.on((eventID) => this.categories.forEach((c) => c.update()));
  }
}
class RaidStatsCategory extends Component {
  constructor(parent, raidSimUI, options) {
    super(parent, "raid-stats-category-root");
    __publicField(this, "raidSimUI");
    __publicField(this, "options");
    __publicField(this, "effects");
    __publicField(this, "counterElem");
    __publicField(this, "tooltipElem");
    this.raidSimUI = raidSimUI;
    this.options = options;
    this.rootElem.innerHTML = `
			<a href="javascript:void(0)" role="button" class="raid-stats-category">
				<span class="raid-stats-category-counter"></span>
				<span class="raid-stats-category-label">${options.label}</span>
			</a>
		`;
    this.counterElem = this.rootElem.querySelector(".raid-stats-category-counter");
    this.tooltipElem = document.createElement("div");
    this.tooltipElem.innerHTML = `
			<label class="raid-stats-category-label">${options.label}</label>
		`;
    this.effects = options.effects.map((opt) => new RaidStatsEffect(this.tooltipElem, raidSimUI, opt));
    if (options.effects.length != 1 || options.effects[0].playerData?.class) {
      const statsLink = this.rootElem.querySelector(".raid-stats-category");
      Tooltip.getOrCreateInstance(statsLink, {
        customClass: "raid-stats-category-tooltip",
        html: true,
        placement: "right",
        title: this.tooltipElem
      });
    }
  }
  update() {
    this.effects.forEach((effect) => effect.update());
    const total = sum(this.effects.map((effect) => effect.count));
    this.counterElem.textContent = String(total);
    const statsLink = this.rootElem.querySelector(".raid-stats-category");
    if (total == 0) {
      statsLink?.classList.remove("active");
    } else {
      statsLink?.classList.add("active");
    }
  }
}
class RaidStatsEffect extends Component {
  constructor(parent, raidSimUI, options) {
    super(parent, "raid-stats-effect");
    __publicField(this, "raidSimUI");
    __publicField(this, "options");
    __publicField(this, "counterElem");
    __publicField(this, "curPlayers");
    __publicField(this, "count");
    this.raidSimUI = raidSimUI;
    this.options = options;
    this.curPlayers = [];
    this.count = 0;
    this.rootElem.innerHTML = `
			<span class="raid-stats-effect-counter"></span>
			<img class="raid-stats-effect-icon"></img>
			<span class="raid-stats-effect-label">${options.label}</span>
		`;
    this.counterElem = this.rootElem.querySelector(".raid-stats-effect-counter");
    if (this.options.playerData?.class) {
      const labelElem = this.rootElem.querySelector(".raid-stats-effect-label");
      const playerCssClass = textCssClassForClass(this.options.playerData.class);
      labelElem.classList.add(playerCssClass);
    }
    const iconElem = this.rootElem.querySelector(".raid-stats-effect-icon");
    if (options.actionId) {
      options.actionId.fill().then((actionId) => iconElem.src = actionId.iconUrl);
    } else {
      iconElem.remove();
    }
  }
  update() {
    if (this.options.playerData) {
      this.curPlayers = this.raidSimUI.getActivePlayers().filter((p) => this.options.playerData.condition(p));
    }
    const raidData = this.options.raidData && this.options.raidData(this.raidSimUI.sim.raid);
    this.count = this.curPlayers.length + (raidData ? 1 : 0);
    this.counterElem.textContent = String(this.count);
    if (this.count == 0) {
      this.rootElem.classList.remove("active");
    } else {
      this.rootElem.classList.add("active");
    }
  }
}
function negateIf(val, cond) {
  return cond ? !val : val;
}
function playerClass(clazz, extraCondition) {
  return {
    class: clazz,
    condition: (player) => {
      return player.isClass(clazz) && (!extraCondition || extraCondition(player));
    }
  };
}
function playerClassAndTalentInternal(clazz, talentName, negateTalent, extraCondition) {
  return {
    class: clazz,
    condition: (player) => {
      return player.isClass(clazz) && negateIf(Boolean(player.getTalents()[talentName]), negateTalent) && (!extraCondition || extraCondition(player));
    }
  };
}
function playerClassAndTalent(clazz, talentName, extraCondition) {
  return playerClassAndTalentInternal(clazz, talentName, false, extraCondition);
}
function playerClassAndMissingTalent(clazz, talentName, extraCondition) {
  return playerClassAndTalentInternal(clazz, talentName, true, extraCondition);
}
function playerSpecAndTalentInternal(spec, talentName, negateTalent, extraCondition) {
  return {
    class: specToClass[spec],
    condition: (player) => {
      return player.isSpec(spec) && negateIf(Boolean(player.getTalents()[talentName]), negateTalent) && (!extraCondition || extraCondition(player));
    }
  };
}
function playerSpecAndTalent(spec, talentName, extraCondition) {
  return playerSpecAndTalentInternal(spec, talentName, false, extraCondition);
}
function playerSpecAndMissingTalent(spec, talentName, extraCondition) {
  return playerSpecAndTalentInternal(spec, talentName, true, extraCondition);
}
function raidBuff(buffName) {
  return (raid) => {
    return Boolean(raid.getBuffs()[buffName]);
  };
}
const RAID_STATS_OPTIONS = {
  sections: [
    {
      label: "Roles",
      categories: [
        {
          label: "Tanks",
          effects: [
            {
              label: "Tanks",
              playerData: { condition: (player) => isTankSpec(player.spec) }
            }
          ]
        },
        {
          label: "Healers",
          effects: [
            {
              label: "Healers",
              playerData: { condition: (player) => isHealingSpec(player.spec) }
            }
          ]
        },
        {
          label: "Melee",
          effects: [
            {
              label: "Melee",
              playerData: { condition: (player) => isMeleeDpsSpec(player.spec) }
            }
          ]
        },
        {
          label: "Ranged",
          effects: [
            {
              label: "Ranged",
              playerData: { condition: (player) => isRangedDpsSpec(player.spec) }
            }
          ]
        }
      ]
    },
    {
      label: "Buffs",
      categories: [
        {
          label: "Bloodlust",
          effects: [
            {
              label: "Bloodlust",
              actionId: ActionId.fromSpellId(2825),
              playerData: playerClass(Class.ClassShaman)
            }
          ]
        },
        {
          label: "Stats",
          effects: [
            {
              label: "Improved Gift of the Wild",
              actionId: ActionId.fromSpellId(17051),
              playerData: playerClassAndTalent(Class.ClassDruid, "improvedMarkOfTheWild")
            },
            {
              label: "Gift of the Wild",
              actionId: ActionId.fromSpellId(48470),
              playerData: playerClassAndMissingTalent(Class.ClassDruid, "improvedMarkOfTheWild")
            },
            {
              label: "Drums of the Wild",
              actionId: ActionId.fromItemId(49634),
              raidData: raidBuff("drumsOfTheWild")
            }
          ]
        },
        {
          label: "Stats %",
          effects: [
            {
              label: "Blessing of Kings",
              actionId: ActionId.fromSpellId(25898),
              playerData: playerClass(Class.ClassPaladin)
            },
            {
              label: "Drums of Forgotten Kings",
              actionId: ActionId.fromItemId(49633),
              raidData: raidBuff("drumsOfForgottenKings")
            },
            {
              label: "Blessing of Sanctuary",
              actionId: ActionId.fromSpellId(25899),
              playerData: playerClass(Class.ClassPaladin)
            }
          ]
        },
        {
          label: "Armor",
          effects: [
            {
              label: "Improved Devotion Aura",
              actionId: ActionId.fromSpellId(20140),
              playerData: playerClassAndTalent(Class.ClassPaladin, "improvedDevotionAura", (player) => player.getSpecOptions().aura == PaladinAura.DevotionAura)
            },
            {
              label: "Devotion Aura",
              actionId: ActionId.fromSpellId(48942),
              playerData: playerClassAndMissingTalent(Class.ClassPaladin, "improvedDevotionAura", (player) => player.getSpecOptions().aura == PaladinAura.DevotionAura)
            },
            {
              label: "Improved Stoneskin Totem",
              actionId: ActionId.fromSpellId(16293),
              playerData: playerClassAndTalent(Class.ClassShaman, "guardianTotems", (player) => player.getSpecOptions().totems?.earth == EarthTotem.StoneskinTotem)
            },
            {
              label: "Stoneskin Totem",
              actionId: ActionId.fromSpellId(58753),
              playerData: playerClassAndMissingTalent(Class.ClassShaman, "guardianTotems", (player) => player.getSpecOptions().totems?.earth == EarthTotem.StoneskinTotem)
            },
            {
              label: "Scroll of Protection",
              actionId: ActionId.fromItemId(43468),
              raidData: raidBuff("scrollOfProtection")
            }
          ]
        },
        {
          label: "Stamina",
          effects: [
            {
              label: "Improved Power Word Fortitude",
              actionId: ActionId.fromSpellId(14767),
              playerData: playerClassAndTalent(Class.ClassPriest, "improvedPowerWordFortitude")
            },
            {
              label: "Power Word Fortitude",
              actionId: ActionId.fromSpellId(48161),
              playerData: playerClassAndMissingTalent(Class.ClassPriest, "improvedPowerWordFortitude")
            },
            {
              label: "Scroll of Stamina",
              actionId: ActionId.fromItemId(37094),
              raidData: raidBuff("scrollOfStamina")
            }
          ]
        },
        {
          label: "Str + Agi",
          effects: [
            {
              label: "Improved Strength of Earth Totem",
              actionId: ActionId.fromSpellId(52456),
              playerData: playerClassAndTalent(Class.ClassShaman, "enhancingTotems", (player) => player.getSpecOptions().totems?.earth == EarthTotem.StrengthOfEarthTotem)
            },
            {
              label: "Strength of Earth Totem",
              actionId: ActionId.fromSpellId(58643),
              playerData: playerClassAndMissingTalent(Class.ClassShaman, "enhancingTotems", (player) => player.getSpecOptions().totems?.earth == EarthTotem.StrengthOfEarthTotem)
            },
            {
              label: "Horn of Winter",
              actionId: ActionId.fromSpellId(57623),
              playerData: playerClass(Class.ClassDeathknight)
            },
            {
              label: "Scroll of Strength",
              actionId: ActionId.fromItemId(43466),
              raidData: raidBuff("scrollOfStrength")
            },
            {
              label: "Scroll of Agility",
              actionId: ActionId.fromItemId(43464),
              raidData: raidBuff("scrollOfAgility")
            }
          ]
        },
        {
          label: "Intellect",
          effects: [
            {
              label: "Arcane Brilliance",
              actionId: ActionId.fromSpellId(43002),
              playerData: playerClass(Class.ClassMage)
            },
            {
              label: "Improved Fel Intelligence",
              actionId: ActionId.fromSpellId(54038),
              playerData: playerClassAndTalent(Class.ClassWarlock, "improvedFelhunter", (player) => player.getSpecOptions().summon == Warlock_Options_Summon.Felhunter)
            },
            {
              label: "Fel Intelligence",
              actionId: ActionId.fromSpellId(57567),
              playerData: playerClassAndMissingTalent(Class.ClassWarlock, "improvedFelhunter", (player) => player.getSpecOptions().summon == Warlock_Options_Summon.Felhunter)
            },
            {
              label: "Scroll of Intellect",
              actionId: ActionId.fromItemId(37092),
              raidData: raidBuff("scrollOfIntellect")
            }
          ]
        },
        {
          label: "Spirit",
          effects: [
            {
              label: "Divine Spirit",
              actionId: ActionId.fromSpellId(48073),
              playerData: playerClass(Class.ClassPriest)
            },
            {
              label: "Improved Fel Intelligence",
              actionId: ActionId.fromSpellId(54038),
              playerData: playerClassAndTalent(Class.ClassWarlock, "improvedFelhunter", (player) => player.getSpecOptions().summon == Warlock_Options_Summon.Felhunter)
            },
            {
              label: "Fel Intelligence",
              actionId: ActionId.fromSpellId(57567),
              playerData: playerClassAndMissingTalent(Class.ClassWarlock, "improvedFelhunter", (player) => player.getSpecOptions().summon == Warlock_Options_Summon.Felhunter)
            },
            {
              label: "Scroll of Spirit",
              actionId: ActionId.fromItemId(37098),
              raidData: raidBuff("scrollOfSpirit")
            }
          ]
        },
        {
          label: "Atk Pwr",
          effects: [
            {
              label: "Improved Blessing of Might",
              actionId: ActionId.fromSpellId(20045),
              playerData: playerClass(Class.ClassPaladin)
            },
            {
              label: "Blessing of Might",
              actionId: ActionId.fromSpellId(48934),
              playerData: playerClass(Class.ClassPaladin)
            },
            {
              label: "Improved Battle Shout",
              actionId: ActionId.fromSpellId(12861),
              playerData: playerClassAndTalent(Class.ClassWarrior, "commandingPresence", (player) => player.getSpecOptions().shout == WarriorShout.WarriorShoutBattle)
            },
            {
              label: "Battle Shout",
              actionId: ActionId.fromSpellId(47436),
              playerData: playerClassAndMissingTalent(Class.ClassWarrior, "commandingPresence", (player) => player.getSpecOptions().shout == WarriorShout.WarriorShoutBattle)
            }
          ]
        },
        {
          label: "Atk Pwr %",
          effects: [
            {
              label: "Abomination's Might",
              actionId: ActionId.fromSpellId(53138),
              playerData: playerClassAndTalent(Class.ClassDeathknight, "abominationsMight")
            },
            {
              label: "Unleashed Rage",
              actionId: ActionId.fromSpellId(30809),
              playerData: playerClassAndTalent(Class.ClassShaman, "unleashedRage")
            },
            {
              label: "Trueshot Aura",
              actionId: ActionId.fromSpellId(19506),
              playerData: playerClassAndTalent(Class.ClassHunter, "trueshotAura")
            }
          ]
        },
        {
          label: "Damage %",
          effects: [
            {
              label: "Sanctified Retribution",
              actionId: ActionId.fromSpellId(31869),
              playerData: playerClassAndTalent(Class.ClassPaladin, "sanctifiedRetribution")
            },
            {
              label: "Arcane Empowerment",
              actionId: ActionId.fromSpellId(31583),
              playerData: playerClassAndTalent(Class.ClassMage, "arcaneEmpowerment")
            },
            {
              label: "Ferocious Inspiration",
              actionId: ActionId.fromSpellId(34460),
              playerData: playerClassAndTalent(Class.ClassHunter, "ferociousInspiration")
            }
          ]
        },
        {
          label: "Mit %",
          effects: [
            {
              label: "Renewed Hope",
              actionId: ActionId.fromSpellId(57472),
              playerData: playerClassAndTalent(Class.ClassPriest, "renewedHope")
            },
            {
              label: "Blessing Of Sanctuary",
              actionId: ActionId.fromSpellId(25899),
              playerData: playerClass(Class.ClassPaladin)
            },
            {
              label: "Vigilance",
              actionId: ActionId.fromSpellId(50720),
              playerData: playerClassAndTalent(Class.ClassWarrior, "vigilance")
            }
          ]
        },
        {
          label: "Haste %",
          effects: [
            {
              label: "Swift Retribution",
              actionId: ActionId.fromSpellId(53648),
              playerData: playerClassAndTalent(Class.ClassPaladin, "swiftRetribution")
            },
            {
              label: "Improved Moonkin Form",
              actionId: ActionId.fromSpellId(48396),
              playerData: playerClassAndTalent(Class.ClassDruid, "improvedMoonkinForm")
            }
          ]
        },
        {
          label: "MP5",
          effects: [
            {
              label: "Improved Blessing of Wisdom",
              actionId: ActionId.fromSpellId(20245),
              playerData: playerClassAndTalent(Class.ClassPaladin, "improvedBlessingOfWisdom")
            },
            {
              label: "Blessing of Wisdom",
              actionId: ActionId.fromSpellId(48938),
              playerData: playerClassAndMissingTalent(Class.ClassPaladin, "improvedBlessingOfWisdom")
            },
            {
              label: "Improved Mana Spring Totem",
              actionId: ActionId.fromSpellId(16206),
              playerData: playerClassAndTalent(Class.ClassShaman, "restorativeTotems", (player) => player.getSpecOptions().totems?.water == WaterTotem.ManaSpringTotem)
            },
            {
              label: "Mana Spring Totem",
              actionId: ActionId.fromSpellId(58774),
              playerData: playerClassAndMissingTalent(Class.ClassShaman, "restorativeTotems", (player) => player.getSpecOptions().totems?.water == WaterTotem.ManaSpringTotem)
            }
          ]
        },
        {
          label: "Melee Crit",
          effects: [
            {
              label: "Leader of the Pack",
              actionId: ActionId.fromSpellId(17007),
              playerData: playerClassAndTalent(Class.ClassDruid, "leaderOfThePack")
            },
            {
              label: "Rampage",
              actionId: ActionId.fromSpellId(29801),
              playerData: playerClassAndTalent(Class.ClassWarrior, "rampage")
            }
          ]
        },
        {
          label: "Melee Haste",
          effects: [
            {
              label: "Improved Icy Talons",
              actionId: ActionId.fromSpellId(55610),
              playerData: playerClassAndTalent(Class.ClassDeathknight, "improvedIcyTalons")
            },
            {
              label: "Improved Windfury Totem",
              actionId: ActionId.fromSpellId(29193),
              playerData: playerClassAndTalent(Class.ClassShaman, "improvedWindfuryTotem", (player) => player.getSpecOptions().totems?.air == AirTotem.WindfuryTotem)
            },
            {
              label: "Windfury Totem",
              actionId: ActionId.fromSpellId(65990),
              playerData: playerClassAndMissingTalent(Class.ClassShaman, "improvedWindfuryTotem", (player) => player.getSpecOptions().totems?.air == AirTotem.WindfuryTotem)
            }
          ]
        },
        {
          label: "Spell Power",
          effects: [
            {
              label: "Demonic Pact",
              actionId: ActionId.fromSpellId(47240),
              playerData: playerClassAndTalent(Class.ClassWarlock, "demonicPact")
            },
            {
              label: "Totem of Wrath",
              actionId: ActionId.fromSpellId(57722),
              playerData: playerClassAndTalent(Class.ClassShaman, "totemOfWrath", (player) => player.getSpecOptions().totems?.fire == FireTotem.TotemOfWrath)
            },
            {
              label: "Flametongue Totem",
              actionId: ActionId.fromSpellId(58656),
              playerData: playerClass(Class.ClassShaman, (player) => player.getSpecOptions().totems?.fire == FireTotem.FlametongueTotem)
            }
          ]
        },
        {
          label: "Spell Crit",
          effects: [
            {
              label: "Moonkin Form",
              actionId: ActionId.fromSpellId(24907),
              playerData: playerSpecAndTalent(Spec.SpecBalanceDruid, "moonkinForm")
            },
            {
              label: "Elemental Oath",
              actionId: ActionId.fromSpellId(51470),
              playerData: playerClassAndTalent(Class.ClassShaman, "elementalOath")
            }
          ]
        },
        {
          label: "Spell Haste",
          effects: [
            {
              label: "Wrath of Air Totem",
              actionId: ActionId.fromSpellId(3738),
              playerData: playerClass(Class.ClassShaman, (player) => player.getSpecOptions().totems?.air == AirTotem.WrathOfAirTotem)
            }
          ]
        },
        {
          label: "Health",
          effects: [
            {
              label: "Improved Commanding Shout",
              actionId: ActionId.fromSpellId(12861),
              playerData: playerClassAndTalent(Class.ClassWarrior, "commandingPresence", (player) => player.getSpecOptions().shout == WarriorShout.WarriorShoutCommanding)
            },
            {
              label: "Commanding Shout",
              actionId: ActionId.fromSpellId(47440),
              playerData: playerClassAndMissingTalent(Class.ClassWarrior, "commandingPresence", (player) => player.getSpecOptions().shout == WarriorShout.WarriorShoutCommanding)
            },
            {
              label: "Improved Imp",
              actionId: ActionId.fromSpellId(18696),
              playerData: playerClassAndTalent(Class.ClassWarlock, "improvedImp", (player) => player.getSpecOptions().summon == Warlock_Options_Summon.Imp)
            },
            {
              label: "Blood Pact",
              actionId: ActionId.fromSpellId(47982),
              playerData: playerClassAndMissingTalent(Class.ClassWarlock, "improvedImp", (player) => player.getSpecOptions().summon == Warlock_Options_Summon.Imp)
            }
          ]
        },
        {
          label: "Replenishment",
          effects: [
            {
              label: "Vampiric Touch",
              actionId: ActionId.fromSpellId(48160),
              playerData: playerSpecAndTalent(Spec.SpecShadowPriest, "vampiricTouch")
            },
            {
              label: "Judgements of the Wise",
              actionId: ActionId.fromSpellId(31878),
              playerData: playerSpecAndTalent(Spec.SpecRetributionPaladin, "judgementsOfTheWise")
            },
            {
              label: "Hunting Party",
              actionId: ActionId.fromSpellId(53292),
              playerData: playerSpecAndTalent(Spec.SpecHunter, "huntingParty")
            },
            {
              label: "Improved Soul Leech",
              actionId: ActionId.fromSpellId(54118),
              playerData: playerSpecAndTalent(Spec.SpecWarlock, "improvedSoulLeech")
            },
            {
              label: "Enduring Winter",
              actionId: ActionId.fromSpellId(44561),
              playerData: playerSpecAndTalent(Spec.SpecMage, "enduringWinter")
            }
          ]
        }
      ]
    },
    {
      label: "External Buffs",
      categories: [
        {
          label: "Innervate",
          effects: [
            {
              label: "Innervate",
              actionId: ActionId.fromSpellId(29166),
              playerData: playerClass(Class.ClassDruid)
            }
          ]
        },
        {
          label: "Power Infusion",
          effects: [
            {
              label: "Power Infusion",
              actionId: ActionId.fromSpellId(10060),
              playerData: playerClassAndTalent(Class.ClassPriest, "powerInfusion")
            }
          ]
        },
        {
          label: "Focus Magic",
          effects: [
            {
              label: "Focus Magic",
              actionId: ActionId.fromSpellId(54648),
              playerData: playerClassAndTalent(Class.ClassMage, "focusMagic")
            }
          ]
        },
        {
          label: "Tricks of the Trade",
          effects: [
            {
              label: "Tricks of the Trade",
              actionId: ActionId.fromSpellId(57933),
              playerData: playerClass(Class.ClassRogue)
            }
          ]
        },
        {
          label: "Unholy Frenzy",
          effects: [
            {
              label: "Unholy Frenzy",
              actionId: ActionId.fromSpellId(49016),
              playerData: playerClassAndTalent(Class.ClassDeathknight, "hysteria")
            }
          ]
        },
        {
          label: "Pain Suppression",
          effects: [
            {
              label: "Pain Suppression",
              actionId: ActionId.fromSpellId(33206),
              playerData: playerClassAndTalent(Class.ClassPriest, "painSuppression")
            }
          ]
        },
        {
          label: "Divine Guardian",
          effects: [
            {
              label: "Divine Guardian",
              actionId: ActionId.fromSpellId(53530),
              playerData: playerClassAndTalent(Class.ClassPaladin, "divineGuardian")
            }
          ]
        }
      ]
    },
    {
      label: "DPS Debuffs",
      categories: [
        {
          label: "Major ArP",
          effects: [
            {
              label: "Sunder Armor",
              actionId: ActionId.fromSpellId(47467),
              playerData: playerClass(Class.ClassWarrior)
            },
            {
              label: "Expose Armor",
              actionId: ActionId.fromSpellId(8647),
              playerData: playerClass(Class.ClassRogue)
            },
            {
              label: "Acid Spit",
              actionId: ActionId.fromSpellId(55754),
              playerData: playerClass(Class.ClassHunter, (player) => player.getSpecOptions().petType == Hunter_Options_PetType.Worm)
            }
          ]
        },
        {
          label: "Minor ArP",
          effects: [
            {
              label: "Faerie Fire",
              actionId: ActionId.fromSpellId(770),
              playerData: playerClass(Class.ClassDruid, (player) => player.spec != Spec.SpecRestorationDruid)
            },
            {
              label: "Curse of Weakness",
              actionId: ActionId.fromSpellId(50511),
              playerData: playerClass(Class.ClassWarlock)
            },
            {
              label: "Sting",
              actionId: ActionId.fromSpellId(56631),
              playerData: playerClass(Class.ClassHunter, (player) => player.getSpecOptions().petType == Hunter_Options_PetType.Wasp)
            },
            {
              label: "Spore Cloud",
              actionId: ActionId.fromSpellId(53598),
              playerData: playerClass(Class.ClassHunter, (player) => player.getSpecOptions().petType == Hunter_Options_PetType.Bat)
            }
          ]
        },
        {
          label: "Phys Vuln",
          effects: [
            {
              label: "Blood Frenzy",
              actionId: ActionId.fromSpellId(29859),
              playerData: playerClassAndTalent(Class.ClassWarrior, "bloodFrenzy")
            },
            {
              label: "Savage Combat",
              actionId: ActionId.fromSpellId(58413),
              playerData: playerClassAndTalent(Class.ClassRogue, "savageCombat")
            }
          ]
        },
        {
          label: "Bleed",
          effects: [
            {
              label: "Mangle",
              actionId: ActionId.fromSpellId(16862),
              playerData: playerClass(Class.ClassDruid, (player) => [Spec.SpecFeralDruid, Spec.SpecFeralTankDruid].includes(player.spec))
            },
            {
              label: "Trauma",
              actionId: ActionId.fromSpellId(46855),
              playerData: playerClassAndTalent(Class.ClassWarrior, "trauma")
            },
            {
              label: "Stampede",
              actionId: ActionId.fromSpellId(57393),
              playerData: playerClass(Class.ClassHunter, (player) => player.getSpecOptions().petType == Hunter_Options_PetType.Rhino)
            }
          ]
        },
        {
          label: "Crit",
          effects: [
            {
              label: "Totem of Wrath",
              actionId: ActionId.fromSpellId(30706),
              playerData: playerClassAndTalent(Class.ClassShaman, "totemOfWrath", (player) => player.getSpecOptions().totems?.fire == FireTotem.TotemOfWrath)
            },
            {
              label: "Heart of the Crusader",
              actionId: ActionId.fromSpellId(20337),
              playerData: playerClassAndTalent(Class.ClassPaladin, "heartOfTheCrusader", (player) => [Spec.SpecRetributionPaladin, Spec.SpecProtectionPaladin].includes(player.spec))
            },
            {
              label: "Master Poisoner",
              actionId: ActionId.fromSpellId(58410),
              playerData: playerClassAndTalent(Class.ClassRogue, "masterPoisoner")
            }
          ]
        },
        {
          label: "Spell Crit",
          effects: [
            {
              label: "Improved Shadow Bolt",
              actionId: ActionId.fromSpellId(17803),
              playerData: playerClassAndTalent(Class.ClassWarlock, "improvedShadowBolt")
            },
            {
              label: "Improved Scorch",
              actionId: ActionId.fromSpellId(12873),
              playerData: playerClassAndTalent(Class.ClassMage, "improvedScorch")
            },
            {
              label: "Winter's Chill",
              actionId: ActionId.fromSpellId(28593),
              playerData: playerClassAndTalent(Class.ClassMage, "wintersChill")
            }
          ]
        },
        {
          label: "Spell Hit",
          effects: [
            {
              label: "Misery",
              actionId: ActionId.fromSpellId(33198),
              playerData: playerSpecAndTalent(Spec.SpecShadowPriest, "misery")
            },
            {
              label: "Improved Faerie Fire",
              actionId: ActionId.fromSpellId(33602),
              playerData: playerSpecAndTalent(Spec.SpecBalanceDruid, "improvedFaerieFire")
            }
          ]
        },
        {
          label: "Spell Dmg",
          effects: [
            {
              label: "Ebon Plaguebringer",
              actionId: ActionId.fromSpellId(51161),
              playerData: playerClassAndTalent(Class.ClassDeathknight, "ebonPlaguebringer")
            },
            {
              label: "Earth and Moon",
              actionId: ActionId.fromSpellId(48511),
              playerData: playerSpecAndTalent(Spec.SpecBalanceDruid, "earthAndMoon")
            },
            {
              label: "Curse of Elements",
              actionId: ActionId.fromSpellId(47865),
              playerData: playerClass(Class.ClassWarlock)
            }
          ]
        }
      ]
    },
    {
      label: "Mitigation Debuffs",
      categories: [
        {
          label: "Atk Pwr",
          effects: [
            {
              label: "Vindication",
              actionId: ActionId.fromSpellId(26016),
              playerData: playerClassAndTalent(Class.ClassPaladin, "vindication", (player) => [Spec.SpecRetributionPaladin, Spec.SpecProtectionPaladin].includes(player.spec))
            },
            {
              label: "Improved Demoralizing Shout",
              actionId: ActionId.fromSpellId(12879),
              playerData: playerClassAndTalent(Class.ClassWarrior, "improvedDemoralizingShout")
            },
            {
              label: "Demoralizing Shout",
              actionId: ActionId.fromSpellId(47437),
              playerData: playerClassAndMissingTalent(Class.ClassWarrior, "improvedDemoralizingShout")
            },
            {
              label: "Improved Demoralizing Roar",
              actionId: ActionId.fromSpellId(16862),
              playerData: playerSpecAndTalent(Spec.SpecFeralTankDruid, "feralAggression")
            },
            {
              label: "Demoralizing Roar",
              actionId: ActionId.fromSpellId(48560),
              playerData: playerSpecAndMissingTalent(Spec.SpecFeralTankDruid, "feralAggression")
            },
            {
              label: "Improved Curse of Weakness",
              actionId: ActionId.fromSpellId(18180),
              playerData: playerClassAndTalent(Class.ClassWarlock, "improvedCurseOfWeakness")
            },
            {
              label: "Curse of Weakness",
              actionId: ActionId.fromSpellId(50511),
              playerData: playerClassAndMissingTalent(Class.ClassWarlock, "improvedCurseOfWeakness")
            },
            {
              label: "Demoralizing Screech",
              actionId: ActionId.fromSpellId(55487),
              playerData: playerClass(Class.ClassHunter, (player) => player.getSpecOptions().petType == Hunter_Options_PetType.CarrionBird)
            }
          ]
        },
        {
          label: "Atk Speed",
          effects: [
            {
              label: "Improved Thunder Clap",
              actionId: ActionId.fromSpellId(12666),
              playerData: playerClassAndTalent(Class.ClassWarrior, "improvedThunderClap")
            },
            {
              label: "Thunder Clap",
              actionId: ActionId.fromSpellId(47502),
              playerData: playerClassAndMissingTalent(Class.ClassWarrior, "improvedThunderClap")
            },
            {
              label: "Improved Frost Fever",
              actionId: ActionId.fromSpellId(51456),
              playerData: playerClassAndTalent(Class.ClassDeathknight, "improvedIcyTouch")
            },
            {
              label: "Frost Fever",
              actionId: ActionId.fromSpellId(51456),
              playerData: playerClassAndMissingTalent(Class.ClassDeathknight, "improvedIcyTouch")
            },
            {
              label: "Judgements of the Just",
              actionId: ActionId.fromSpellId(53696),
              playerData: playerClassAndTalent(Class.ClassPaladin, "judgementsOfTheJust")
            },
            {
              label: "Infected Wounds",
              actionId: ActionId.fromSpellId(48485),
              playerData: playerClassAndTalent(Class.ClassDruid, "infectedWounds", (player) => [Spec.SpecFeralDruid, Spec.SpecFeralTankDruid].includes(player.spec))
            }
          ]
        },
        {
          label: "Miss",
          effects: [
            {
              label: "Insect Swarm",
              actionId: ActionId.fromSpellId(65855),
              playerData: playerSpecAndTalent(Spec.SpecBalanceDruid, "insectSwarm")
            },
            {
              label: "Scorpid Sting",
              actionId: ActionId.fromSpellId(3043),
              playerData: playerClass(Class.ClassHunter)
            }
          ]
        }
      ]
    }
  ]
};
class RaidTab extends SimTab {
  constructor(parentElem, simUI) {
    super(parentElem, simUI, { identifier: "raid-tab", title: "Raid" });
    __publicField(this, "simUI");
    __publicField(this, "leftPanel");
    __publicField(this, "rightPanel");
    this.simUI = simUI;
    this.rootElem.classList.add("active", "show");
    this.leftPanel = document.createElement("div");
    this.leftPanel.classList.add("raid-tab-left", "tab-panel-left");
    this.rightPanel = document.createElement("div");
    this.rightPanel.classList.add("raid-tab-right", "tab-panel-right");
    this.contentContainer.appendChild(this.leftPanel);
    this.contentContainer.appendChild(this.rightPanel);
    this.buildTabContent();
  }
  buildTabContent() {
    this.simUI.raidPicker = new RaidPicker(this.leftPanel, this.simUI);
    new RaidStats(this.leftPanel, this.simUI);
    const savedRaidManager = new SavedDataManager(
      this.rightPanel,
      this.simUI,
      {
        label: "Raid",
        header: { title: "Saved Raid Groups" },
        storageKey: this.simUI.getSavedRaidStorageKey(),
        getData: (raidSimUI) => SavedRaid.create({
          raid: this.simUI.sim.raid.toProto(),
          blessings: this.simUI.blessingsPicker.getAssignments(),
          faction: this.simUI.sim.getFaction(),
          phase: this.simUI.sim.getPhase()
        }),
        setData: (eventID, raidSimUI, newRaid) => {
          TypedEvent.freezeAllAndDo(() => {
            this.simUI.sim.raid.fromProto(eventID, newRaid.raid || Raid.create());
            this.simUI.blessingsPicker.setAssignments(eventID, newRaid.blessings || BlessingsAssignments.create());
            if (newRaid.faction)
              this.simUI.sim.setFaction(eventID, newRaid.faction);
            if (newRaid.phase)
              this.simUI.sim.setPhase(eventID, newRaid.phase);
          });
        },
        changeEmitters: [this.simUI.changeEmitter, this.simUI.sim.changeEmitter],
        equals: (a, b) => {
          return SavedRaid.equals(a, b);
        },
        toJson: (a) => SavedRaid.toJson(a),
        fromJson: (obj) => SavedRaid.fromJson(obj)
      }
    );
    this.simUI.sim.waitForInit().then(() => {
      savedRaidManager.loadUserData();
    });
  }
}
class UnitReferencePicker extends Input {
  constructor(parent, raid, modObj, config) {
    super(parent, "raid-target-picker-root", modObj, config);
    __publicField(this, "config");
    __publicField(this, "raid");
    __publicField(this, "curPlayer");
    __publicField(this, "curUnitReference");
    __publicField(this, "currentOptions");
    __publicField(this, "buttonElem");
    __publicField(this, "dropdownElem");
    this.rootElem.classList.add("dropdown");
    this.config = config;
    this.raid = raid;
    this.curPlayer = this.raid.getPlayerFromUnitReference(config.getValue(modObj));
    this.curUnitReference = this.getInputValue();
    this.rootElem.innerHTML = `
			<a
				class="raid-target-picker-button"
				href="javascript:void(0)"
				role="button"
				data-bs-toggle="dropdown"
			></a>
			<div class="dropdown-menu"></div>
    `;
    this.buttonElem = this.rootElem.querySelector(".raid-target-picker-button");
    this.dropdownElem = this.rootElem.querySelector(".dropdown-menu");
    this.buttonElem.addEventListener("click", (event) => event.preventDefault());
    this.currentOptions = [];
    this.updateOptions(TypedEvent.nextEventID());
    config.compChangeEmitter.on((eventID) => this.updateOptions(eventID));
    this.init();
  }
  makeTargetOptions() {
    const unassignedOption = { player: null, isDropdown: true };
    const playerOptions = this.raid.getPlayers().filter((player) => player != null).map((player) => {
      return { player, isDropdown: true };
    });
    return [unassignedOption, ...playerOptions];
  }
  updateOptions(eventID) {
    this.currentOptions = this.makeTargetOptions();
    this.dropdownElem.innerHTML = "";
    this.currentOptions.forEach((option) => this.dropdownElem.appendChild(this.makeOption(option)));
    const prevUnitReference = this.curUnitReference;
    this.curUnitReference = this.getInputValue();
    if (!UnitReference.equals(prevUnitReference, this.curUnitReference)) {
      this.inputChanged(eventID);
    } else {
      this.setInputValue(this.curUnitReference);
    }
  }
  makeOption(data) {
    const option = UnitReferencePicker.makeOptionElem(data);
    option.addEventListener("click", (event) => {
      event.preventDefault();
      this.curPlayer = data.player;
      this.curUnitReference = this.getInputValue();
      this.inputChanged(TypedEvent.nextEventID());
    });
    return option;
  }
  getInputElem() {
    return this.buttonElem;
  }
  getInputValue() {
    if (this.curPlayer) {
      return this.curPlayer.makeUnitReference();
    } else {
      return emptyUnitReference();
    }
  }
  setInputValue(newValue) {
    this.curUnitReference = UnitReference.clone(newValue);
    this.curPlayer = this.raid.getPlayerFromUnitReference(this.curUnitReference);
    const optionData = this.currentOptions.find((optionData2) => optionData2.player == this.curPlayer);
    if (optionData)
      this.buttonElem.innerHTML = UnitReferencePicker.makeOptionElem({ player: optionData.player }).outerHTML;
  }
  static makeOptionElem(data) {
    const classCssClass = data.player ? cssClassForClass(data.player.getClass()) : "";
    let playerFragment = document.createElement("fragment");
    playerFragment.innerHTML = `
			<div class="player ${classCssClass ? `bg-${classCssClass}-dampened` : ""}">
				<div class="player-label">
					${data.player ? `<img class="player-icon" src="${data.player.getSpecIcon()}" draggable="false"/>` : ""}
					<div class="player-details">
						<span class="player-name ${classCssClass ? `text-${classCssClass}` : ""}">
							${data.player ? data.player.getName() : "Unassigned"}
						</span>
					</div>
				</div>
			</div>
		`;
    if (data.isDropdown) {
      playerFragment.innerHTML = `
				<a class="dropdown-option" href="javascript:void(0) role="button">${playerFragment.innerHTML}</a>
			`;
    }
    return playerFragment.children[0];
  }
}
class AssignmentsPicker extends Component {
  constructor(parentElem, raidSimUI) {
    super(parentElem, "assignments-picker-root");
    __publicField(this, "raidSimUI");
    __publicField(this, "changeEmitter", new TypedEvent());
    __publicField(this, "innervatesPicker");
    __publicField(this, "powerInfusionsPicker");
    __publicField(this, "tricksOfTheTradesPicker");
    __publicField(this, "unholyFrenzyPicker");
    __publicField(this, "focusMagicsPicker");
    this.raidSimUI = raidSimUI;
    this.innervatesPicker = new InnervatesPicker(this.rootElem, raidSimUI);
    this.powerInfusionsPicker = new PowerInfusionsPicker(this.rootElem, raidSimUI);
    this.tricksOfTheTradesPicker = new TricksOfTheTradesPicker(this.rootElem, raidSimUI);
    this.unholyFrenzyPicker = new UnholyFrenzyPicker(this.rootElem, raidSimUI);
    this.focusMagicsPicker = new FocusMagicsPicker(this.rootElem, raidSimUI);
  }
}
class AssignedBuffPicker extends Component {
  constructor(parentElem, raidSimUI) {
    super(parentElem, "assigned-buff-picker-root");
    __publicField(this, "raidSimUI");
    __publicField(this, "changeEmitter", new TypedEvent());
    __publicField(this, "playersContainer");
    __publicField(this, "targetPickers");
    this.raidSimUI = raidSimUI;
    this.targetPickers = [];
    this.playersContainer = document.createElement("div");
    this.playersContainer.classList.add("assigned-buff-container");
    this.rootElem.appendChild(this.playersContainer);
    this.raidSimUI.changeEmitter.on((eventID) => this.update());
    this.update();
  }
  update() {
    this.playersContainer.innerHTML = `
			<label class="assignmented-buff-label form-label">${this.getTitle()}</label>
		`;
    const sourcePlayers = this.getSourcePlayers();
    if (sourcePlayers.length == 0)
      this.rootElem.classList.add("hide");
    else
      this.rootElem.classList.remove("hide");
    this.targetPickers = sourcePlayers.map((sourcePlayer, sourcePlayerIndex) => {
      const row = document.createElement("div");
      row.classList.add("assigned-buff-player", "input-inline");
      this.playersContainer.appendChild(row);
      let sourceElem = document.createElement("div");
      sourceElem.classList.add("raid-target-picker-root");
      sourceElem.appendChild(
        UnitReferencePicker.makeOptionElem({ player: sourcePlayer, isDropdown: false })
      );
      row.appendChild(sourceElem);
      const arrow = document.createElement("i");
      arrow.classList.add("assigned-buff-arrow", "fa", "fa-arrow-right");
      row.appendChild(arrow);
      const raidTargetPicker = new UnitReferencePicker(row, this.raidSimUI.sim.raid, sourcePlayer, {
        extraCssClasses: ["assigned-buff-target-picker"],
        noTargetLabel: "Unassigned",
        compChangeEmitter: this.raidSimUI.sim.raid.compChangeEmitter,
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => this.getPlayerValue(player),
        setValue: (eventID, player, newValue) => this.setPlayerValue(eventID, player, newValue)
      });
      const targetPickerData = {
        player: sourcePlayer,
        targetPicker: raidTargetPicker,
        targetPlayer: this.raidSimUI.sim.raid.getPlayerFromUnitReference(raidTargetPicker.getInputValue())
      };
      raidTargetPicker.changeEmitter.on((eventID) => {
        targetPickerData.targetPlayer = this.raidSimUI.sim.raid.getPlayerFromUnitReference(raidTargetPicker.getInputValue());
      });
      return targetPickerData;
    });
  }
}
class InnervatesPicker extends AssignedBuffPicker {
  getTitle() {
    return "Innervate";
  }
  getSourcePlayers() {
    return this.raidSimUI.getActivePlayers().filter((player) => player.isClass(Class.ClassDruid));
  }
  getPlayerValue(player) {
    return player.getSpecOptions().innervateTarget || emptyUnitReference();
  }
  setPlayerValue(eventID, player, newValue) {
    const newOptions = player.getSpecOptions();
    newOptions.innervateTarget = newValue;
    player.setSpecOptions(eventID, newOptions);
  }
}
class PowerInfusionsPicker extends AssignedBuffPicker {
  getTitle() {
    return "Power Infusion";
  }
  getSourcePlayers() {
    return this.raidSimUI.getActivePlayers().filter((player) => player.isClass(Class.ClassPriest) && player.getTalents().powerInfusion);
  }
  getPlayerValue(player) {
    return player.getSpecOptions().powerInfusionTarget || emptyUnitReference();
  }
  setPlayerValue(eventID, player, newValue) {
    const newOptions = player.getSpecOptions();
    newOptions.powerInfusionTarget = newValue;
    player.setSpecOptions(eventID, newOptions);
  }
}
class TricksOfTheTradesPicker extends AssignedBuffPicker {
  getTitle() {
    return "Tricks of the Trade";
  }
  getSourcePlayers() {
    return this.raidSimUI.getActivePlayers().filter((player) => player.isClass(Class.ClassRogue));
  }
  getPlayerValue(player) {
    return player.getSpecOptions().tricksOfTheTradeTarget || emptyUnitReference();
  }
  setPlayerValue(eventID, player, newValue) {
    const newOptions = player.getSpecOptions();
    newOptions.tricksOfTheTradeTarget = newValue;
    player.setSpecOptions(eventID, newOptions);
  }
}
class UnholyFrenzyPicker extends AssignedBuffPicker {
  getTitle() {
    return "Unholy Frenzy";
  }
  getSourcePlayers() {
    return this.raidSimUI.getActivePlayers().filter((player) => player.isClass(Class.ClassDeathknight) && player.getTalents().hysteria);
  }
  getPlayerValue(player) {
    return player.getSpecOptions().unholyFrenzyTarget || emptyUnitReference();
  }
  setPlayerValue(eventID, player, newValue) {
    const newOptions = player.getSpecOptions();
    newOptions.unholyFrenzyTarget = newValue;
    player.setSpecOptions(eventID, newOptions);
  }
}
class FocusMagicsPicker extends AssignedBuffPicker {
  getTitle() {
    return "Focus Magic";
  }
  getSourcePlayers() {
    return this.raidSimUI.getActivePlayers().filter((player) => player.isClass(Class.ClassMage));
  }
  getPlayerValue(player) {
    return player.getSpecOptions().focusMagicTarget || emptyUnitReference();
  }
  setPlayerValue(eventID, player, newValue) {
    const newOptions = player.getSpecOptions();
    newOptions.focusMagicTarget = newValue;
    player.setSpecOptions(eventID, newOptions);
  }
}
const MAX_PALADINS = 4;
class BlessingsPicker extends Component {
  constructor(parentElem, raidSimUI) {
    super(parentElem, "blessings-picker-root");
    __publicField(this, "simUI");
    __publicField(this, "changeEmitter", new TypedEvent());
    __publicField(this, "pickers", []);
    __publicField(this, "assignments");
    this.simUI = raidSimUI;
    this.assignments = BlessingsAssignments.clone(makeDefaultBlessings(4));
    const specs = naturalSpecOrder.filter((spec) => implementedSpecs.includes(spec)).filter((spec) => !memeSpecs.includes(spec));
    const paladinIndexes = [...Array(MAX_PALADINS).keys()];
    specs.map((spec) => {
      const row = document.createElement("div");
      row.classList.add("blessings-picker-row");
      this.rootElem.appendChild(row);
      row.append(this.buildSpecIcon(spec));
      const container = document.createElement("div");
      container.classList.add("blessings-picker-container");
      row.appendChild(container);
      paladinIndexes.forEach((paladinIdx) => {
        if (!this.pickers[paladinIdx])
          this.pickers.push([]);
        const blessingPicker = new IconEnumPicker(container, this, {
          extraCssClasses: ["blessing-picker"],
          numColumns: 1,
          values: [
            { color: classColors[Class.ClassPaladin], value: Blessings.BlessingUnknown },
            { actionId: ActionId.fromSpellId(25898), value: Blessings.BlessingOfKings },
            { actionId: ActionId.fromSpellId(48934), value: Blessings.BlessingOfMight },
            { actionId: ActionId.fromSpellId(48938), value: Blessings.BlessingOfWisdom },
            { actionId: ActionId.fromSpellId(25899), value: Blessings.BlessingOfSanctuary }
          ],
          equals: (a, b) => a == b,
          zeroValue: Blessings.BlessingUnknown,
          enableWhen: (_picker) => {
            const numPaladins = Math.min(this.simUI.getClassCount(Class.ClassPaladin), MAX_PALADINS);
            return paladinIdx < numPaladins;
          },
          changedEvent: (picker) => picker.changeEmitter,
          getValue: (picker) => picker.assignments.paladins[paladinIdx]?.blessings[spec] || Blessings.BlessingUnknown,
          setValue: (eventID, picker, newValue) => {
            const currentValue = picker.assignments.paladins[paladinIdx].blessings[spec];
            if (currentValue != newValue) {
              picker.assignments.paladins[paladinIdx].blessings[spec] = newValue;
              this.changeEmitter.emit(eventID);
            }
          }
        });
        this.pickers[paladinIdx].push(blessingPicker);
      });
      return row;
    });
    this.updatePickers();
    this.simUI.compChangeEmitter.on((_eventID) => this.updatePickers());
  }
  updatePickers() {
    for (let i = 0; i < MAX_PALADINS; i++) {
      this.pickers[i].forEach((picker) => picker.update());
    }
  }
  buildSpecIcon(spec) {
    let fragment = document.createElement("fragment");
    fragment.innerHTML = `
			<div class="blessings-picker-spec">
				<img
					src="${titleIcons[spec]}"
					class="blessings-spec-icon"
				/>
			</div>
		`;
    const icon = fragment.querySelector(".blessings-spec-icon");
    Tooltip.getOrCreateInstance(icon, { title: specNames[spec] });
    return fragment.children[0];
  }
  getAssignments() {
    return BlessingsAssignments.clone(this.assignments);
  }
  setAssignments(eventID, newAssignments) {
    this.assignments = BlessingsAssignments.clone(newAssignments);
    this.changeEmitter.emit(eventID);
  }
}
const MAX_TANKS = 4;
class TanksPicker extends Component {
  constructor(parentElem, raidSimUI) {
    super(parentElem, "tanks-picker-root");
    __publicField(this, "raidSimUI");
    this.raidSimUI = raidSimUI;
    const raid = this.raidSimUI.sim.raid;
    for (let i = 0; i < MAX_TANKS; i++) {
      const row = document.createElement("div");
      row.classList.add("tank-picker-row", "input-inline");
      this.rootElem.appendChild(row);
      const labelElem = document.createElement("label");
      labelElem.textContent = i == 0 ? "Main Tank" : `Tank ${i + 1}`;
      labelElem.classList.add("tank-picker-label", "form-label");
      row.appendChild(labelElem);
      new UnitReferencePicker(row, raid, raid, {
        extraCssClasses: ["tank-picker"],
        noTargetLabel: "Unassigned",
        compChangeEmitter: raid.compChangeEmitter,
        changedEvent: (raid2) => raid2.tanksChangeEmitter,
        getValue: (raid2) => raid2.getTanks()[i] || emptyUnitReference(),
        setValue: (eventID, raid2, newValue) => {
          const tanks = raid2.getTanks();
          for (let j = 0; j < i; j++) {
            if (!tanks[j]) {
              tanks.push(emptyUnitReference());
            }
          }
          tanks[i] = newValue;
          raid2.setTanks(eventID, tanks);
        }
      });
    }
  }
}
class SettingsTab extends SimTab {
  constructor(parentElem, simUI) {
    super(parentElem, simUI, { identifier: "raid-settings-tab", title: "Settings" });
    __publicField(this, "simUI");
    __publicField(this, "leftPanel");
    __publicField(this, "rightPanel");
    __publicField(this, "column1", this.buildColumn(1, "raid-settings-col"));
    __publicField(this, "column2", this.buildColumn(2, "raid-settings-col"));
    __publicField(this, "column3", this.buildColumn(3, "raid-settings-col"));
    this.simUI = simUI;
    this.leftPanel = document.createElement("div");
    this.leftPanel.classList.add("raid-settings-tab-left", "tab-panel-left");
    this.leftPanel.appendChild(this.column1);
    this.leftPanel.appendChild(this.column2);
    this.leftPanel.appendChild(this.column3);
    this.rightPanel = document.createElement("div");
    this.rightPanel.classList.add("raid-settings-tab-right", "tab-panel-right", "within-raid-sim-hide");
    this.contentContainer.appendChild(this.leftPanel);
    this.contentContainer.appendChild(this.rightPanel);
    this.buildTabContent();
  }
  buildTabContent() {
    this.buildEncounterSettings();
    this.buildConsumesSettings();
    this.buildTankSettings();
    this.buildAssignmentSettings();
    this.buildOtherSettings();
    this.buildBlessingsPicker();
    this.buildSavedDataPickers();
  }
  buildEncounterSettings() {
    const contentBlock = new ContentBlock(this.column1, "encounter-settings", {
      header: { title: "Encounter" }
    });
    new EncounterPicker(contentBlock.bodyElement, this.simUI.sim.encounter, { showExecuteProportion: true }, this.simUI);
  }
  buildConsumesSettings() {
    const contentBlock = new ContentBlock(this.column1, "consumes-settings", {
      header: { title: "Consumables" }
    });
    let container = document.createElement("div");
    container.classList.add("consumes-container");
    contentBlock.bodyElement.appendChild(container);
    this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(37094), "scrollOfStamina"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(43466), "scrollOfStrength"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(43464), "scrollOfAgility"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(37092), "scrollOfIntellect"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(37098), "scrollOfSpirit"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(43468), "scrollOfProtection"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(49633), "drumsOfForgottenKings"), this.makeBooleanRaidIconBuffInput(container, ActionId.fromItemId(49634), "drumsOfTheWild");
  }
  buildOtherSettings() {
    const contentBlock = new ContentBlock(this.column2, "other-settings", {
      header: { title: "Other" }
    });
    this.makeBooleanRaidIconBuffInput(contentBlock.bodyElement, ActionId.fromSpellId(73828), "strengthOfWrynn");
  }
  buildTankSettings() {
    const contentBlock = new ContentBlock(this.column2, "tanks-settings", {
      header: { title: "Tanks" }
    });
    new TanksPicker(contentBlock.bodyElement, this.simUI);
  }
  buildAssignmentSettings() {
    const contentBlock = new ContentBlock(this.column2, "assignments-settings", {
      header: { title: "External Buffs" }
    });
    new AssignmentsPicker(contentBlock.bodyElement, this.simUI);
  }
  buildBlessingsPicker() {
    const contentBlock = new ContentBlock(this.column3, "blessings-settings", {
      header: { title: "Blessings", tooltip: BLESSINGS_SECTION }
    });
    this.simUI.blessingsPicker = new BlessingsPicker(contentBlock.bodyElement, this.simUI);
    this.simUI.blessingsPicker.changeEmitter.on((eventID) => this.simUI.changeEmitter.emit(eventID));
  }
  buildSavedDataPickers() {
    const savedEncounterManager = new SavedDataManager(this.rightPanel, this.simUI.sim.encounter, {
      label: "Encounter",
      header: { title: "Saved Encounters" },
      storageKey: this.simUI.getSavedEncounterStorageKey(),
      getData: (encounter) => SavedEncounter.create({ encounter: encounter.toProto() }),
      setData: (eventID, encounter, newEncounter) => encounter.fromProto(eventID, newEncounter.encounter),
      changeEmitters: [this.simUI.sim.encounter.changeEmitter],
      equals: (a, b) => SavedEncounter.equals(a, b),
      toJson: (a) => SavedEncounter.toJson(a),
      fromJson: (obj) => SavedEncounter.fromJson(obj)
    });
    this.simUI.sim.waitForInit().then(() => {
      savedEncounterManager.loadUserData();
    });
  }
  makeBooleanRaidIconBuffInput(parent, actionId, field) {
    const raid = this.simUI.sim.raid;
    return new IconPicker(parent, raid, {
      actionId,
      states: 2,
      changedEvent: (raid2) => raid2.buffsChangeEmitter,
      getValue: (raid2) => raid2.getBuffs()[field],
      setValue: (eventID, raid2, newValue) => {
        const newBuffs = raid2.getBuffs();
        newBuffs[field] = newValue;
        raid2.setBuffs(eventID, newBuffs);
      }
    });
  }
}
class RaidJsonImporter extends Importer {
  constructor(parent, simUI) {
    super(parent, simUI, "JSON Import", true);
    __publicField(this, "simUI");
    this.simUI = simUI;
    this.descriptionElem.innerHTML = `
			<p>
				Import settings from a JSON text file, which can be created using the JSON Export feature of this site.
			</p>
			<p>
				To import, paste the JSON text below and click, 'Import'.
			</p>
		`;
  }
  async onImport(data) {
    const settings = RaidSimSettings.fromJsonString(data, { ignoreUnknownFields: true });
    this.simUI.fromProto(TypedEvent.nextEventID(), settings);
    this.close();
  }
}
class RaidJsonExporter extends Exporter {
  constructor(parent, simUI) {
    super(parent, simUI, { title: "JSON Export", allowDownload: true });
    __publicField(this, "simUI");
    this.simUI = simUI;
    this.init();
  }
  getData() {
    return JSON.stringify(RaidSimSettings.toJson(this.simUI.toProto()), null, 2);
  }
}
class RaidWCLImporter extends Importer {
  constructor(parent, simUI) {
    super(parent, simUI, "WCL Import", false);
    __publicField(this, "queryCounter", 0);
    __publicField(this, "simUI");
    __publicField(this, "token", "");
    this.simUI = simUI;
    this.textElem.classList.add("small-textarea");
    this.descriptionElem.innerHTML = `
			<p>
				Imports the entire raid from a WCL report.<br>
			</p>
			<p>
				To import, paste the WCL report and fight link (https://classic.warcraftlogs.com/reports/REPORTID#fight=FIGHTID).<br>
				Include the fight ID or else the first fight in the report will be used.<br>
			</p>
			<p>
				The following are imported directly from the report:
				<ul>
					<li>Player Name</li>
					<li>Equipment (items, enchants, and gems)</li>
					<li>Faction (Alliance / Horde)</li>
					<li>Encounter: If the import link has a fight ID we try to match with a preset Encounter. Note that many Encounters are still unimplemented.</li>
				</ul>

				The following are not available directly from the report data, but we try to infer them:
				<ul>
					<li>Talents: Log data only gives us the tree summary (e.g. '51/20/0') so we match this with the closest preset talent build.</li>
					<li>Glyphs: Glyphs are absent from log data, but we pair them with the inferred Talents.</li>
					<li>Race: Inferred from Race-specific abilties used in any fight if possible, or defaults to Spec-specific Race.</li>
					<li>Professions: Inferred from profession-locked items/enchants/gems.</li>
					<li>Buff assignments (Innervate, Unholy Frenzy, etc): Inferred from casts.</li>
					<li>Party Composition: Inferred from party-only effects, such as Heroic Presence, Prayer of Healing, or Vampiric Touch.</li>
				</ul>

				The following are not imported, and instead use spec-specific defaults:
				<ul>
					<li>Rotation / Spec-specific options</li>
					<li>Consumes</li>
					<li>Paladin Blessings</li>
				</ul>
			</p>
		`;
  }
  async getWCLBearerToken() {
    if (this.token == "") {
      const response = await fetch("https://classic.warcraftlogs.com/oauth/token", {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa("963d31c8-7efa-4dde-87cf-1b254a8a2f8c:lRJVhujEEnF96xfUoxVHSpnqKN9v8bTqGEjutsO3")
        },
        body: new URLSearchParams({
          grant_type: "client_credentials"
        })
      });
      const json = await response.json();
      this.token = json.access_token;
    }
    return this.token;
  }
  async queryWCL(query) {
    const token = await this.getWCLBearerToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    };
    const queryURL = `https://classic.warcraftlogs.com/api/v2/client?query=${query}`;
    this.queryCounter++;
    const res = await fetch(encodeURI(queryURL), {
      method: "GET",
      headers
    });
    const result = await res.json();
    if (result?.errors?.length) {
      const errorStr = result.errors.map((e) => e.message).join("\n");
      throw new Error(`GraphQL error: ${errorStr}

Query: ${query}`);
    } else {
      console.debug(`WCL query: ${query}

Result: ${JSON.stringify(result)}`);
    }
    return result;
  }
  async parseURL(url) {
    const match = url.match(/classic\.warcraftlogs\.com\/reports\/([a-zA-Z0-9:]+)\/?(#.*fight=((\d+)|(last)))?/);
    if (!match) {
      throw new Error(`Invalid WCL URL ${url}, must look like "classic.warcraftlogs.com/reports/XXXX"`);
    }
    const urlData = {
      reportID: match[1],
      fightID: ""
    };
    if (match[2] && match[3] && match[3] != "last") {
      urlData.fightID = match[3];
    } else {
      const fightDataQuery = `{
				reportData {
					report(code: "${urlData.reportID}") {
						fights(killType: Kills, translate: true) {
							id, name
						}
					}
				}
			}`;
      const fightData = await this.queryWCL(fightDataQuery);
      const fights = fightData.data.reportData.report.fights;
      if (match[3] == "last") {
        urlData.fightID = String(fights[fights.length - 1].id);
      } else {
        urlData.fightID = String(fights[0].id);
      }
    }
    console.debug(`Importing WCL report: ${JSON.stringify(urlData)}`);
    return urlData;
  }
  async getRateLimit() {
    const query = `{
	    rateLimitData {
	      limitPerHour, pointsSpentThisHour, pointsResetIn
	    }
	  }`;
    const result = await this.queryWCL(query);
    const data = result["data"]["rateLimitData"];
    return data;
  }
  async onImport(importLink) {
    this.importButton.disabled = true;
    this.rootElem.style.cursor = "wait";
    try {
      await this.doImport(importLink);
    } catch (error) {
      console.error(error);
      alert("Failed import from WCL: " + error);
    }
    this.importButton.disabled = false;
    this.rootElem.style.removeProperty("cursor");
  }
  async doImport(importLink) {
    if (!importLink.length) {
      throw new Error("No import link provided!");
    }
    const urlData = await this.parseURL(importLink);
    await this.getRateLimit();
    const reportDataQuery = `{
			reportData {
				report(code: "${urlData.reportID}") {
					guild {
						name faction {id}
					}
					playerDetails: table(fightIDs: [${urlData.fightID}], dataType: Casts, killType: All, viewBy: Default)
					combatantInfoEvents: events(fightIDs: [${urlData.fightID}], dataType:CombatantInfo, limit: 50) { data }
					fights(fightIDs: [${urlData.fightID}]) {
						startTime, endTime, id, name
					}

					reportCastEvents: events(dataType:Casts, endTime: 99999999, filterExpression: "${[racialSpells, professionSpells].flat().map((spell) => spell.id).map((id) => `ability.id = ${id}`).join(" OR ")}", limit: 10000) { data }

					fightCastEvents: events(fightIDs: [${urlData.fightID}], dataType:Casts, filterExpression: "${[externalCDSpells].flat().map((spell) => spell.id).map((id) => `ability.id = ${id}`).join(" OR ")}", limit: 10000) { data }

					fightHealEvents: events(fightIDs: [${urlData.fightID}], dataType:Healing, filterExpression: "${[samePartyHealingSpells, otherPartyHealingSpells].flat().map((spell) => spell.id).map((id) => `ability.id = ${id}`).join(" OR ")}", limit: 10000) { data }

					manaTideTotem: events(fightIDs: [${urlData.fightID}], dataType:Resources, filterExpression: "ability.id = 39609", limit: 100) { data }
				}
			}
		}`;
    const reportData = await this.queryWCL(reportDataQuery);
    const wclData = reportData.data.reportData.report;
    const playerData = wclData.playerDetails.data.entries;
    TypedEvent.freezeAllAndDo(() => {
      const eventID = TypedEvent.nextEventID();
      const wclPlayers = playerData.map((wclPlayer) => new WCLSimPlayer(wclPlayer, this.simUI, eventID));
      this.inferRace(eventID, wclData, wclPlayers);
      this.inferProfessions(eventID, wclData, wclPlayers);
      this.inferAssignments(eventID, wclData, wclPlayers);
      this.inferPartyComposition(eventID, wclData, wclPlayers);
      const numPaladins = wclPlayers.filter((player) => player.player.getClass() == Class.ClassPaladin).length;
      const settings = RaidSimSettings.create({
        encounter: this.getEncounterProto(wclData),
        raid: this.getRaidProto(wclPlayers),
        blessings: makeDefaultBlessings(numPaladins)
      });
      this.simUI.clearRaid(eventID);
      this.simUI.fromProto(eventID, settings);
    });
    this.close();
  }
  inferRace(eventID, wclData, wclPlayers) {
    wclPlayers.forEach((p) => p.player.setRace(eventID, Race.RaceUnknown));
    let faction = wclData.guild?.faction?.id || this.simUI.raidPicker?.getCurrentFaction() || Faction.Horde;
    wclData.combatantInfoEvents.data.forEach((combatantInfo) => {
      combatantInfo.auras.filter((aura) => aura.ability == 28878).forEach((aura) => {
        const sourcePlayer = wclPlayers.find((player) => player.id == aura.source);
        if (sourcePlayer && sourcePlayer.player.getRace() != Race.RaceDraenei) {
          console.log(`Inferring player ${sourcePlayer.name} has race ${raceNames.get(Race.RaceDraenei)} from Heroic Presence aura event`);
          sourcePlayer.player.setRace(eventID, Race.RaceDraenei);
          faction = Faction.Alliance;
        }
      });
    });
    const castEventsBySpellId = bucket(wclData.reportCastEvents.data, (event) => String(event.abilityGameID));
    racialSpells.forEach((spell) => {
      const spellEvents = castEventsBySpellId[spell.id] || [];
      spellEvents.forEach((event) => {
        const sourcePlayer = wclPlayers.find((player) => player.id == event.sourceID);
        if (sourcePlayer) {
          console.log(`Inferring player ${sourcePlayer.name} has race ${raceNames.get(spell.race)} from ${spell.name} event`);
          sourcePlayer.player.setRace(eventID, spell.race);
          faction = raceToFaction[spell.race];
        }
      });
    });
    wclPlayers.forEach((p) => {
      if (p.player.getRace() == Race.RaceUnknown) {
        p.player.setRace(eventID, p.preset.defaultFactionRaces[faction]);
      }
    });
  }
  inferProfessions(eventID, wclData, wclPlayers) {
    const castEventsBySpellId = bucket(wclData.reportCastEvents.data, (event) => String(event.abilityGameID));
    professionSpells.forEach((spell) => {
      const spellEvents = castEventsBySpellId[spell.id] || [];
      spellEvents.forEach((event) => {
        const sourcePlayer = wclPlayers.find((player) => player.id == event.sourceID);
        if (sourcePlayer && !sourcePlayer.inferredProfessions.includes(spell.profession)) {
          console.log(`Inferring player ${sourcePlayer.name} has profession ${professionNames.get(spell.profession)} from ${spell.name} event`);
          sourcePlayer.inferredProfessions.push(spell.profession);
        }
      });
    });
    wclPlayers.forEach((player) => {
      let professions = distinct(player.inferredProfessions.concat(player.player.getGear().getProfessionRequirements()));
      if (professions.length == 0) {
        professions = [Profession.Engineering, Profession.Jewelcrafting];
      } else if (professions.length == 1) {
        if (professions[0] != Profession.Engineering) {
          professions.push(Profession.Engineering);
        } else {
          professions.push(Profession.Jewelcrafting);
        }
      }
      player.player.setProfessions(eventID, professions);
    });
  }
  inferAssignments(eventID, wclData, wclPlayers) {
    const castEventsBySpellId = bucket(wclData.fightCastEvents.data, (event) => String(event.abilityGameID));
    externalCDSpells.forEach((spell) => {
      const spellEvents = castEventsBySpellId[spell.id] || [];
      spellEvents.forEach((event) => {
        const sourcePlayer = wclPlayers.find((player) => player.id == event.sourceID);
        const targetPlayer = wclPlayers.find((player) => player.id == event.targetID);
        if (sourcePlayer && targetPlayer && sourcePlayer.player.getClass() == spell.class) {
          const specOptions = spell.applyFunc(sourcePlayer.player, targetPlayer.toUnitReference());
          sourcePlayer.player.setSpecOptions(eventID, specOptions);
          console.log(`Inferring player ${sourcePlayer.name} is targeting ${targetPlayer.name} with ${spell.name} from cast event`);
        }
      });
    });
  }
  inferPartyComposition(eventID, wclData, wclPlayers) {
    const setPlayersInParty = (player1, player2, reason) => {
      if (player1.addPlayerInParty(player2) || player2.addPlayerInParty(player1)) {
        console.log(`Inferring players ${player1.name} and ${player2.name} in same party from ${reason} event`);
      }
    };
    const healEventsBySpellId = bucket(wclData.fightHealEvents.data, (event) => String(event.abilityGameID));
    samePartyHealingSpells.forEach((spell) => {
      const spellEvents = healEventsBySpellId[spell.id] || [];
      spellEvents.forEach((event) => {
        const sourcePlayer = wclPlayers.find((player) => player.id == event.sourceID);
        const targetPlayer = wclPlayers.find((player) => player.id == event.targetID);
        if (sourcePlayer && targetPlayer) {
          setPlayersInParty(sourcePlayer, targetPlayer, spell.name);
        }
      });
    });
    otherPartyHealingSpells.forEach((spell) => {
      const spellEvents = healEventsBySpellId[spell.id] || [];
      const spellEventsByTimestamp = bucket(spellEvents, (event) => String(event.timestamp) + String(event.sourceID));
      for (const [_timestamp, eventsAtTime] of Object.entries(spellEventsByTimestamp)) {
        const spellTargets = eventsAtTime.map((event) => wclPlayers.find((player) => player.id == event.targetID));
        for (let i = 0; i < spellTargets.length; i++) {
          for (let j = 0; j < spellTargets.length; j++) {
            if (i != j && spellTargets[i] && spellTargets[j]) {
              setPlayersInParty(spellTargets[i], spellTargets[j], spell.name);
            }
          }
        }
      }
    });
    wclData.combatantInfoEvents.data.forEach((combatantInfo) => {
      const targetPlayer = wclPlayers.find((player) => player.id == combatantInfo.sourceID);
      combatantInfo.auras.filter((aura) => aura.ability == 28878).forEach((aura) => {
        const sourcePlayer = wclPlayers.find((player) => player.id == aura.source);
        if (sourcePlayer && targetPlayer) {
          setPlayersInParty(sourcePlayer, targetPlayer, "Heroic Presence");
        }
      });
    });
    let inferredPlayers = wclPlayers.filter((player) => player.playersInParty.length > 0);
    let nextEmptyPartyIdx = 0;
    while (inferredPlayers.length > 0) {
      let partyMembers = [inferredPlayers[0]].concat(inferredPlayers[0].playersInParty);
      let numMembers = 0;
      while (partyMembers.length != numMembers) {
        numMembers = partyMembers.length;
        partyMembers = distinct(partyMembers.map((member) => [member].concat(member.playersInParty)).flat());
      }
      const partyIdx = nextEmptyPartyIdx;
      nextEmptyPartyIdx++;
      partyMembers.forEach((member, i) => {
        member.raidIndex = partyIdx * 5 + i;
      });
      inferredPlayers = inferredPlayers.filter((player) => !partyMembers.includes(player));
    }
    const allRaidIndexes = [...Array(40).keys()];
    const nextFreeIndex = () => allRaidIndexes.find((idx) => !wclPlayers.some((p) => p.raidIndex == idx)) ?? -1;
    wclPlayers.filter((player) => player.raidIndex == -1).forEach((player) => {
      const nextIdx = nextFreeIndex();
      if (nextIdx == -1) {
        throw new Error("Invalid next idx");
      }
      player.raidIndex = nextIdx;
    });
  }
  getEncounterProto(wclData) {
    const fight = wclData.fights[0];
    const encounter = Encounter.create({
      duration: (fight.endTime - fight.startTime) / 1e3,
      targets: []
    });
    const closestEncounterPreset = this.simUI.sim.db.getAllPresetEncounters().find((enc) => enc.path.includes(fight.name));
    if (closestEncounterPreset && closestEncounterPreset.targets.length) {
      closestEncounterPreset.targets.map((mob) => mob.target).filter((target) => target !== void 0).forEach((target) => encounter.targets.push(target));
    }
    if (encounter.targets.length === 0) {
      encounter.targets.push(Encounter$1.defaultTargetProto());
    }
    return encounter;
  }
  getRaidProto(wclPlayers) {
    const raid = Raid.create({
      parties: [...new Array(MAX_NUM_PARTIES).keys()].map(
        (_party) => Party.create({
          players: [...new Array(5).keys()].map((_player) => Player.create())
        })
      )
    });
    wclPlayers.forEach((player) => {
      const positionInParty = player.raidIndex % 5;
      const partyIdx = (player.raidIndex - positionInParty) / 5;
      const playerProto = player.player.toProto();
      raid.parties[partyIdx].players[positionInParty] = playerProto;
      if (isTankSpec(playerToSpec(playerProto))) {
        raid.tanks.push(player.toUnitReference());
      }
    });
    return raid;
  }
}
class WCLSimPlayer {
  constructor(data, simUI, eventID) {
    __publicField(this, "data");
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "type");
    __publicField(this, "raidIndex", -1);
    __publicField(this, "simUI");
    __publicField(this, "fullType");
    __publicField(this, "spec");
    __publicField(this, "player");
    __publicField(this, "preset");
    __publicField(this, "inferredProfessions", []);
    __publicField(this, "playersInParty", []);
    this.simUI = simUI;
    this.data = data;
    this.name = data.name;
    this.id = data.id;
    this.type = data.type;
    const wclSpec = data.icon.split("-")[1];
    this.fullType = this.type + wclSpec;
    console.log(`WCL spec: ${this.fullType}`);
    const foundSpec = fullTypeToSpec[this.fullType] ?? null;
    if (foundSpec == null) {
      throw new Error("Player type not implemented: " + this.fullType);
    }
    this.spec = foundSpec;
    this.player = new Player$1(this.spec, simUI.sim);
    this.preset = WCLSimPlayer.getMatchingPreset(foundSpec, data.talents);
    if (this.preset === void 0) {
      throw new Error(
        "Could not find matching preset: " + JSON.stringify({
          name: this.name,
          type: this.fullType,
          talents: data.talents
        }).toString()
      );
    }
    this.player.applySharedDefaults(eventID);
    this.player.setTalentsString(eventID, this.preset.talents.talentsString);
    this.player.setGlyphs(eventID, this.preset.talents.glyphs);
    this.player.setConsumes(eventID, this.preset.consumes);
    this.player.setSpecOptions(eventID, this.preset.specOptions);
    this.player.setProfessions(eventID, [Profession.Engineering, Profession.Jewelcrafting]);
    this.player.setName(eventID, data.name);
    this.player.setGear(
      eventID,
      simUI.sim.db.lookupEquipmentSpec(
        EquipmentSpec.create({
          items: data.gear.map(
            (gear) => ItemSpec.create({
              id: gear.id,
              enchant: gear.permanentEnchant,
              gems: gear.gems ? gear.gems.map((gemInfo) => gemInfo.id) : []
            })
          )
        })
      )
    );
  }
  static getMatchingPreset(spec, talents) {
    const matchingPresets = playerPresets.filter((preset) => preset.spec == spec);
    let presetIdx = 0;
    if (matchingPresets && matchingPresets.length > 1) {
      let distance = 999;
      matchingPresets.forEach((preset, i) => {
        const presetTalents = getTalentTreePoints(preset.talents.talentsString);
        const newDistance = presetTalents.reduce((acc, v, i2) => acc += Math.abs(talents[i2]?.guid - presetTalents[i2]), 0);
        if (newDistance < distance) {
          presetIdx = i;
          distance = newDistance;
        }
      });
    }
    return matchingPresets[presetIdx];
  }
  toUnitReference() {
    return UnitReference.create({
      type: UnitReference_Type.Player,
      index: this.raidIndex
    });
  }
  addPlayerInParty(other) {
    if (other != this && !this.playersInParty.includes(other)) {
      this.playersInParty.push(other);
      return true;
    }
    return false;
  }
}
const fullTypeToSpec = {
  DeathKnightBlood: Spec.SpecTankDeathknight,
  DeathKnightLichborne: Spec.SpecTankDeathknight,
  DeathKnightRuneblade: Spec.SpecDeathknight,
  DeathKnightBloodDPS: Spec.SpecDeathknight,
  DeathKnightFrost: Spec.SpecDeathknight,
  DeathKnightUnholy: Spec.SpecDeathknight,
  DruidBalance: Spec.SpecBalanceDruid,
  DruidFeral: Spec.SpecFeralDruid,
  DruidWarden: Spec.SpecFeralTankDruid,
  DruidGuardian: Spec.SpecFeralTankDruid,
  DruidRestoration: Spec.SpecRestorationDruid,
  HunterBeastMastery: Spec.SpecHunter,
  HunterSurvival: Spec.SpecHunter,
  HunterMarksmanship: Spec.SpecHunter,
  MageArcane: Spec.SpecMage,
  MageFire: Spec.SpecMage,
  MageFrost: Spec.SpecMage,
  PaladinHoly: Spec.SpecHolyPaladin,
  PaladinJusticar: Spec.SpecProtectionPaladin,
  PaladinProtection: Spec.SpecProtectionPaladin,
  PaladinRetribution: Spec.SpecRetributionPaladin,
  PriestHoly: Spec.SpecHealingPriest,
  PriestDiscipline: Spec.SpecHealingPriest,
  PriestShadow: Spec.SpecShadowPriest,
  PriestSmite: Spec.SpecSmitePriest,
  RogueAssassination: Spec.SpecRogue,
  RogueCombat: Spec.SpecRogue,
  RogueSubtlety: Spec.SpecRogue,
  ShamanElemental: Spec.SpecElementalShaman,
  ShamanEnhancement: Spec.SpecEnhancementShaman,
  ShamanRestoration: Spec.SpecRestorationShaman,
  WarlockDestruction: Spec.SpecWarlock,
  WarlockAffliction: Spec.SpecWarlock,
  WarlockDemonology: Spec.SpecWarlock,
  WarriorArms: Spec.SpecWarrior,
  WarriorFury: Spec.SpecWarrior,
  WarriorChampion: Spec.SpecWarrior,
  WarriorWarrior: Spec.SpecWarrior,
  WarriorGladiator: Spec.SpecWarrior,
  WarriorProtection: Spec.SpecProtectionWarrior
};
const racialSpells = [
  { id: 25046, name: "Arcane Torrent (Energy)", race: Race.RaceBloodElf },
  { id: 28730, name: "Arcane Torrent (Mana)", race: Race.RaceBloodElf },
  { id: 50613, name: "Arcane Torrent (Runic Power)", race: Race.RaceBloodElf },
  { id: 26297, name: "Berserking", race: Race.RaceTroll },
  { id: 20572, name: "Blood Fury (AP)", race: Race.RaceOrc },
  { id: 33697, name: "Blood Fury (AP+SP)", race: Race.RaceOrc },
  { id: 33702, name: "Blood Fury (SP)", race: Race.RaceOrc },
  { id: 20589, name: "Escape Artist", race: Race.RaceGnome },
  { id: 20594, name: "Stoneform", race: Race.RaceDwarf },
  { id: 20549, name: "War Stomp", race: Race.RaceTauren },
  { id: 7744, name: "Will of the Forsaken", race: Race.RaceUndead },
  { id: 59752, name: "Will to Survive", race: Race.RaceHuman }
];
const professionSpells = [
  { id: 55503, name: "Lifeblood", profession: Profession.Herbalism },
  { id: 50305, name: "Skinning", profession: Profession.Skinning }
];
const externalCDSpells = [
  {
    id: 29166,
    name: "Innervate",
    class: Class.ClassDruid,
    applyFunc: (player, raidTarget) => {
      const options = player.getSpecOptions();
      options.innervateTarget = raidTarget;
      return options;
    }
  },
  {
    id: 10060,
    name: "Power Infusion",
    class: Class.ClassPriest,
    applyFunc: (player, raidTarget) => {
      const options = player.getSpecOptions();
      options.powerInfusionTarget = raidTarget;
      return options;
    }
  },
  {
    id: 57933,
    name: "Tricks of the Trade",
    class: Class.ClassRogue,
    applyFunc: (player, raidTarget) => {
      const options = player.getSpecOptions();
      options.tricksOfTheTradeTarget = raidTarget;
      return options;
    }
  },
  {
    id: 49016,
    name: "Unholy Frenzy",
    class: Class.ClassDeathknight,
    applyFunc: (player, raidTarget) => {
      const options = player.getSpecOptions();
      options.unholyFrenzyTarget = raidTarget;
      return options;
    }
  }
];
const samePartyHealingSpells = [
  { id: 52042, name: "Healing Stream Totem" },
  { id: 48076, name: "Holy Nova" },
  { id: 48445, name: "Tranquility" },
  { id: 15290, name: "Vampiric Embrace" }
];
const otherPartyHealingSpells = [{ id: 48072, name: "Prayer of Healing" }];
const extraKnownIssues = [];
class RaidSimUI extends SimUI {
  constructor(parentElem, config) {
    super(parentElem, new Sim(), {
      cssClass: "raid-sim-ui",
      cssScheme: "raid",
      spec: null,
      launchStatus: raidSimStatus,
      knownIssues: (config.knownIssues || []).concat(extraKnownIssues)
    });
    __publicField(this, "config");
    __publicField(this, "raidSimResultsManager", null);
    __publicField(this, "raidPicker", null);
    __publicField(this, "blessingsPicker", null);
    __publicField(this, "compChangeEmitter", new TypedEvent());
    __publicField(this, "changeEmitter", new TypedEvent());
    __publicField(this, "referenceChangeEmitter", new TypedEvent());
    this.config = config;
    this.sim.raid.compChangeEmitter.on((eventID) => this.compChangeEmitter.emit(eventID));
    [
      this.compChangeEmitter,
      this.sim.changeEmitter
    ].forEach((emitter) => emitter.on((eventID) => this.changeEmitter.emit(eventID)));
    this.changeEmitter.on(() => this.recomputeSettingsLayout());
    this.sim.setModifyRaidProto((raidProto) => this.modifyRaidProto(raidProto));
    this.sim.waitForInit().then(() => this.loadSettings());
    this.addSidebarComponents();
    this.addTopbarComponents();
    this.addRaidTab();
    this.addSettingsTab();
    this.addDetailedResultsTab();
  }
  loadSettings() {
    const initEventID = TypedEvent.nextEventID();
    TypedEvent.freezeAllAndDo(() => {
      let loadedSettings = false;
      const savedSettings = window.localStorage.getItem(this.getSettingsStorageKey());
      if (savedSettings != null) {
        try {
          const settings = RaidSimSettings.fromJsonString(savedSettings);
          this.fromProto(initEventID, settings);
          loadedSettings = true;
        } catch (e) {
          console.warn("Failed to parse saved settings: " + e);
        }
      }
      if (!loadedSettings) {
        this.applyDefaults(initEventID);
      }
      this.changeEmitter.on((eventID) => {
        const jsonStr = RaidSimSettings.toJsonString(this.toProto());
        window.localStorage.setItem(this.getSettingsStorageKey(), jsonStr);
      });
    });
  }
  addSidebarComponents() {
    this.raidSimResultsManager = addRaidSimAction(this);
    this.raidSimResultsManager.changeEmitter.on((eventID) => this.referenceChangeEmitter.emit(eventID));
  }
  addTopbarComponents() {
    this.simHeader.addImportLink("JSON", (parent) => new RaidJsonImporter(this.rootElem, this));
    this.simHeader.addImportLink("WCL", (parent) => new RaidWCLImporter(this.rootElem, this));
    this.simHeader.addExportLink("JSON", (parent) => new RaidJsonExporter(this.rootElem, this));
  }
  addRaidTab() {
    new RaidTab(this.simTabContentsContainer, this);
  }
  addSettingsTab() {
    new SettingsTab(this.simTabContentsContainer, this);
  }
  addDetailedResultsTab() {
    this.addTab("Results", "detailed-results-tab", `
			<div class="detailed-results">
			</div>
		`);
    new EmbeddedDetailedResults(this.rootElem.getElementsByClassName("detailed-results")[0], this, this.raidSimResultsManager);
  }
  recomputeSettingsLayout() {
    window.dispatchEvent(new Event("resize"));
  }
  modifyRaidProto(raidProto) {
    const numPaladins = this.getClassCount(Class.ClassPaladin);
    const blessingsAssignments = this.blessingsPicker.getAssignments();
    implementedSpecs.forEach((spec) => {
      const playerProtos = raidProto.parties.map((party) => party.players.filter((player) => player.class != Class.ClassUnknown && playerToSpec(player) == spec)).flat();
      blessingsAssignments.paladins.forEach((paladin, i) => {
        if (i >= numPaladins) {
          return;
        }
        if (paladin.blessings[spec] == Blessings.BlessingOfKings) {
          playerProtos.forEach((playerProto) => playerProto.buffs.blessingOfKings = true);
        } else if (paladin.blessings[spec] == Blessings.BlessingOfMight) {
          playerProtos.forEach((playerProto) => playerProto.buffs.blessingOfMight = TristateEffect.TristateEffectImproved);
        } else if (paladin.blessings[spec] == Blessings.BlessingOfWisdom) {
          playerProtos.forEach((playerProto) => playerProto.buffs.blessingOfWisdom = TristateEffect.TristateEffectImproved);
        } else if (paladin.blessings[spec] == Blessings.BlessingOfSanctuary) {
          playerProtos.forEach((playerProto) => playerProto.buffs.blessingOfSanctuary = true);
        }
      });
    });
  }
  getCurrentData() {
    if (this.raidSimResultsManager) {
      return this.raidSimResultsManager.getCurrentData();
    } else {
      return null;
    }
  }
  getReferenceData() {
    if (this.raidSimResultsManager) {
      return this.raidSimResultsManager.getReferenceData();
    } else {
      return null;
    }
  }
  getActivePlayers() {
    return this.sim.raid.getActivePlayers();
  }
  getClassCount(playerClass2) {
    return this.getActivePlayers().filter((player) => player.isClass(playerClass2)).length;
  }
  applyDefaults(eventID) {
    TypedEvent.freezeAllAndDo(() => {
      this.sim.raid.fromProto(eventID, Raid.create({
        numActiveParties: 5
      }));
      this.sim.setPhase(eventID, 1);
      this.sim.encounter.applyDefaults(eventID);
      this.sim.applyDefaults(eventID, true, true);
      this.sim.setShowDamageMetrics(eventID, true);
    });
  }
  toProto() {
    return RaidSimSettings.create({
      settings: this.sim.toProto(),
      raid: this.sim.raid.toProto(true),
      blessings: this.blessingsPicker.getAssignments(),
      encounter: this.sim.encounter.toProto()
    });
  }
  toLink() {
    const proto = this.toProto();
    proto.settings = void 0;
    const protoBytes = RaidSimSettings.toBinary(proto);
    const deflated = pako.deflate(protoBytes, { to: "string" });
    const encoded = btoa(String.fromCharCode(...deflated));
    const linkUrl = new URL(window.location.href);
    linkUrl.hash = encoded;
    return linkUrl.toString();
  }
  fromProto(eventID, settings) {
    TypedEvent.freezeAllAndDo(() => {
      if (settings.settings) {
        this.sim.fromProto(eventID, settings.settings);
      }
      this.sim.raid.fromProto(eventID, settings.raid || Raid.create());
      this.sim.encounter.fromProto(eventID, settings.encounter || Encounter.create());
      this.blessingsPicker.setAssignments(eventID, settings.blessings || BlessingsAssignments.create());
    });
  }
  clearRaid(eventID) {
    this.sim.raid.clear(eventID);
  }
  getStorageKey(keyPart) {
    return "__wotlk_raid__" + keyPart;
  }
  getSavedRaidStorageKey() {
    return this.getStorageKey("__savedRaid__");
  }
}
new RaidSimUI(document.body, {});
//# sourceMappingURL=index-b1c27b2c.entry.js.map
