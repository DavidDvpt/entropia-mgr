import DropdownMenu from './DropdownMenu';
import styles from './dropdown.module.scss';

function DropdownElement(props: DropDownElementType) {
  return (
    <li className={styles.dropdownElement}>
      <div
        className={[
          styles.label,
          props.isSubElement ? styles.subElement : '',
        ].join(' ')}
      >
        {props.label}
      </div>

      {props.childs && <DropdownMenu list={props.childs} isSubMenu />}
    </li>
  );
}

export default DropdownElement;
