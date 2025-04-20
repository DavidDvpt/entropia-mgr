'use client';

import { signIn, useSession } from 'next-auth/react';

function layout({ children }: IChildren) {
  const { status } = useSession();
  console.log(status);
  if (status === 'unauthenticated') {
    signIn();
  }

  return (
    <main>
      {/* <Header /> */}
      {children}
    </main>
  );
}

export default layout;
