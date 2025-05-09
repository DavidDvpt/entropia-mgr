'use client';

import ModalContainer from '@/modules/modal/components/ModalContainer';
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
      <ModalContainer />
    </main>
  );
}

export default layout;
