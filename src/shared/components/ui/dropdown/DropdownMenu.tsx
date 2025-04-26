import DropdownElement from './DropdownElement';
interface IDropdownListProps {
  list?: DropDownElementsType;
  isSubMenu?: boolean;
}

function DropdownMenu({ list, isSubMenu }: IDropdownListProps) {
  return (
    <ul className={''}>
      {list?.map((m) => <DropdownElement key={m.label} {...m} />)}
    </ul>
  );
}

export default DropdownMenu;
