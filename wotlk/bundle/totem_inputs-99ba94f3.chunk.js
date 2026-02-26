import { C as ContentBlock, u as IconEnumPicker, v as makeBooleanIconInput, w as IconPicker } from "./preset_utils-01be8d3d.chunk.js";
import { I as Input, es as EarthTotem, A as ActionId, er as ShamanTotems, ev as WaterTotem, eu as FireTotem, et as AirTotem, S as Spec } from "./detailed_results-baa2d5bc.chunk.js";
function TotemsSection(parentElem, simUI) {
  let contentBlock = new ContentBlock(parentElem, "totems-settings", {
    header: { title: "Totems" }
  });
  let totemDropdownGroup = Input.newGroupContainer();
  totemDropdownGroup.classList.add("totem-dropdowns-container", "icon-group");
  let fireElementalContainer = document.createElement("div");
  fireElementalContainer.classList.add("fire-elemental-input-container");
  contentBlock.bodyElement.appendChild(totemDropdownGroup);
  contentBlock.bodyElement.appendChild(fireElementalContainer);
  new IconEnumPicker(totemDropdownGroup, simUI.player, {
    extraCssClasses: [
      "earth-totem-picker"
    ],
    numColumns: 1,
    values: [
      { color: "#ffdfba", value: EarthTotem.NoEarthTotem },
      { actionId: ActionId.fromSpellId(58643), value: EarthTotem.StrengthOfEarthTotem },
      { actionId: ActionId.fromSpellId(58753), value: EarthTotem.StoneskinTotem },
      { actionId: ActionId.fromSpellId(8143), value: EarthTotem.TremorTotem }
    ],
    equals: (a, b) => a == b,
    zeroValue: EarthTotem.NoEarthTotem,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().totems?.earth || EarthTotem.NoEarthTotem,
    setValue: (eventID, player, newValue) => {
      const newOptions = player.getSpecOptions();
      if (!newOptions.totems)
        newOptions.totems = ShamanTotems.create();
      newOptions.totems.earth = newValue;
      player.setSpecOptions(eventID, newOptions);
    }
  });
  new IconEnumPicker(totemDropdownGroup, simUI.player, {
    extraCssClasses: [
      "water-totem-picker"
    ],
    numColumns: 1,
    values: [
      { color: "#bae1ff", value: WaterTotem.NoWaterTotem },
      { actionId: ActionId.fromSpellId(58774), value: WaterTotem.ManaSpringTotem },
      { actionId: ActionId.fromSpellId(58757), value: WaterTotem.HealingStreamTotem }
    ],
    equals: (a, b) => a == b,
    zeroValue: WaterTotem.NoWaterTotem,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().totems?.water || WaterTotem.NoWaterTotem,
    setValue: (eventID, player, newValue) => {
      const newOptions = player.getSpecOptions();
      if (!newOptions.totems)
        newOptions.totems = ShamanTotems.create();
      newOptions.totems.water = newValue;
      player.setSpecOptions(eventID, newOptions);
    }
  });
  new IconEnumPicker(totemDropdownGroup, simUI.player, {
    extraCssClasses: [
      "fire-totem-picker"
    ],
    numColumns: 1,
    values: [
      { color: "#ffb3ba", value: FireTotem.NoFireTotem },
      { actionId: ActionId.fromSpellId(58734), value: FireTotem.MagmaTotem },
      { actionId: ActionId.fromSpellId(58704), value: FireTotem.SearingTotem },
      { actionId: ActionId.fromSpellId(57722), value: FireTotem.TotemOfWrath, showWhen: (player) => player.getTalents().totemOfWrath },
      { actionId: ActionId.fromSpellId(58656), value: FireTotem.FlametongueTotem }
    ],
    equals: (a, b) => a == b,
    zeroValue: FireTotem.NoFireTotem,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().totems?.fire || FireTotem.NoFireTotem,
    setValue: (eventID, player, newValue) => {
      const newOptions = player.getSpecOptions();
      if (!newOptions.totems)
        newOptions.totems = ShamanTotems.create();
      newOptions.totems.fire = newValue;
      player.setSpecOptions(eventID, newOptions);
    }
  });
  new IconEnumPicker(totemDropdownGroup, simUI.player, {
    extraCssClasses: [
      "air-totem-picker"
    ],
    numColumns: 1,
    values: [
      { color: "#baffc9", value: AirTotem.NoAirTotem },
      { actionId: ActionId.fromSpellId(8512), value: AirTotem.WindfuryTotem },
      { actionId: ActionId.fromSpellId(3738), value: AirTotem.WrathOfAirTotem }
    ],
    equals: (a, b) => a == b,
    zeroValue: AirTotem.NoAirTotem,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().totems?.air || AirTotem.NoAirTotem,
    setValue: (eventID, player, newValue) => {
      const newOptions = player.getSpecOptions();
      if (!newOptions.totems)
        newOptions.totems = ShamanTotems.create();
      newOptions.totems.air = newValue;
      player.setSpecOptions(eventID, newOptions);
    }
  });
  if (simUI.player.spec != Spec.SpecEnhancementShaman) {
    const fireElementalBooleanIconInput = makeBooleanIconInput({
      getModObject: (player) => player,
      getValue: (player) => player.getSpecOptions().totems || ShamanTotems.create(),
      setValue: (eventID, player, newVal) => {
        const newOptions = player.getSpecOptions();
        newOptions.totems = newVal;
        player.setSpecOptions(eventID, newOptions);
      },
      changeEmitter: (player) => player.specOptionsChangeEmitter
    }, ActionId.fromSpellId(2894), "useFireElemental");
    new IconPicker(fireElementalContainer, simUI.player, fireElementalBooleanIconInput);
  }
  return contentBlock;
}
export {
  TotemsSection as T
};
//# sourceMappingURL=totem_inputs-99ba94f3.chunk.js.map
