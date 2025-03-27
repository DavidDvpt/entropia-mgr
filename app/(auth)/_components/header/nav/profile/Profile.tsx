'use client';

import { useSession } from 'next-auth/react';
import styles from '../../header.module.scss';
import ProfileMenu from './ProfileMenu';
function Profile() {
  const { data } = useSession();

  return (
    <div className={styles.profile}>
      <div className={styles.profileBtn}>Profil</div>
      {data?.user.id && <ProfileMenu />}
    </div>
  );
}

export default Profile;
