import { useRouter } from 'next/navigation';
import DropdownMenu from './DropdownMenu';
import styles from './dropdown.module.scss';

function DropdownElement(props: DropDownElementType) {
  const router = useRouter();
  const handleClick = () => {
    props.url && router.push(props.url);
  };
  return (
    <li className={styles.dropdownElement}>
      <div
        className={[
          styles.label,
          props.isSubElement ? styles.subElement : '',
        ].join(' ')}
        onClick={handleClick}
      >
        {props.label}
      </div>

      {props.childs && <DropdownMenu list={props.childs} isSubMenu />}
    </li>
  );
}

export default DropdownElement;
