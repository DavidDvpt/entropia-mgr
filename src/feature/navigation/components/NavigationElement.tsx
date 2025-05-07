import { useRouter } from 'next/navigation';
import styles from './navigation.module.scss';
import NavigationSubMenu from './NavigationSubMenu';

function NavigationElement(props: NavigationElementType) {
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

      {props.childs && <NavigationSubMenu list={props.childs} isSubMenu />}
    </li>
  );
}

export default NavigationElement;
