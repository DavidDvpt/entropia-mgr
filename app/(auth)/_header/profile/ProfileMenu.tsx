import { signOut } from 'next-auth/react';
import styles from '../header.module.scss';
function ProfileMenu() {
  // handles
  const handleLogout = () => {
    signOut();
  };

  const handleDisplayMenu = () => {};

  return (
    <div className={styles.profileMenu}>
      <ul>
        <li onClick={handleDisplayMenu}>Ped Card</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}

export default ProfileMenu;
