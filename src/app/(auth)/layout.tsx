'use client';

import { signIn, useSession } from 'next-auth/react';
import Header from './_header/Header';

function layout({ children }: IChildren) {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    signIn();
  }

  return (
    <main>
      <Header />

      {children}
    </main>
  );
}

export default layout;
