import DropdownElement from './DropDownElement';

interface IDropdownListProps {
  list: DropDownElementsType;
}
function DropdownList({ list }: IDropdownListProps) {
  return (
    <ul>
      {list.map((m) => (
        <DropdownElement {...m} />
      ))}
    </ul>
  );
}

export default DropdownList;
