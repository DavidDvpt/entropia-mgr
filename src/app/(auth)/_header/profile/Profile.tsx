'use client';

import { useSession } from 'next-auth/react';
import styles from './profile.module.scss';
function Profile() {
  const { data } = useSession();

  return (
    <div className={styles.profile}>
      <div className={styles.profileBtn}>Profil</div>
      {/* {data?.user.id && <ProfileMenu />} */}
    </div>
  );
}

export default Profile;
