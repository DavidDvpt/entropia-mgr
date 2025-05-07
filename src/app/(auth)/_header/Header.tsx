import Navigation from '@/feature/navigation/components/Navigation';
import Brand from './Brand';
import styles from './header.module.scss';
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
