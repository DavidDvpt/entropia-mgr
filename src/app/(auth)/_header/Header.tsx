import DropDownItem from '@/shared/components/dropdownMenu/DropDownItem';
import Brand from './Brand';
import HeaderNavigation from './nav/HeaderNavigation';
import Profile from './profile/Profile';

function Header() {
  return (
    <header>
      <Brand />

      <DropDownItem
        label="Dudul"
        menuList={
          <ul>
            <li>choix 1</li>
            <li>choix 2</li>
            <li>choix 3</li>
          </ul>
        }
      />
      <HeaderNavigation />
      <Profile />
    </header>
  );
}

export default Header;
