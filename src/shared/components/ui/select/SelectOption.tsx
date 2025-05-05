function SelectOption(option: SelectOptionType) {
  return <option value={option.id}>{option.name}</option>;
}

export default SelectOption;
