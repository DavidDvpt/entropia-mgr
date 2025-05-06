import NavigationElement from './NavigationElement';

interface INavigationSubMenuProps {
  list: NavigationElementsType;
  isSubMenu: boolean;
}

function NavigationSubMenu({ list, isSubMenu }: INavigationSubMenuProps) {
  return (
    <ul>
      {list.map((m) => (
        <NavigationElement key={m.label} {...m} isSubElement />
      ))}
    </ul>
  );
}

export default NavigationSubMenu;
