import Brand from './Brand';
import styles from './header.module.scss';
import HeaderNavigation from './nav/HeaderNavigation';
import Profile from './nav/profile/Profile';

function Header() {
  return (
    <header className={styles.header}>
      <Brand />
      <HeaderNavigation />
      <Profile />
    </header>
  );
}

export default Header;
