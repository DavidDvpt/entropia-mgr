function SelectOption(option: SelectOptionType) {
  return <option value={option.value}>{option.display}</option>;
}

export default SelectOption;
