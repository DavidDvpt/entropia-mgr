import Brand from './Brand';
import styles from './header.module.scss';
import Navigation from './navigation/Navigation';
import Profile from './profile/Profile';
function Header() {
  return (
    <header className={styles.header}>
      <Brand />

      <Navigation />
      <Profile />
    </header>
  );
}

export default Header;
