import DropdownElement from './DropdownElement';
import styles from './dropdown.module.scss';
interface IDropdownListProps {
  list?: DropDownElementsType;
  isSubMenu?: boolean;
}

function DropdownMenu({ list, isSubMenu }: IDropdownListProps) {
  return (
    <ul
      className={[styles.dropdownMenu, isSubMenu ? styles.subMenu : ''].join(
        ' '
      )}
    >
      {list?.map((m) => <DropdownElement key={m.label} {...m} />)}
    </ul>
  );
}

export default DropdownMenu;
