'use client';

import { signIn, useSession } from 'next-auth/react';
import Header from './_header/Header';
import styles from './auth.module.scss';

function layout({ children }: IChildren) {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    signIn();
  }

  return (
    <main className={styles.auth}>
      <Header />
      <div className={styles.mainContent}>{children}</div>
    </main>
  );
}

export default layout;
