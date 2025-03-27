'use client';

import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data, status, update } = useSession();

  if (status === 'unauthenticated') {
    signIn();
  }

  // signOut();
  return (
    <SessionProvider>
      <main>
        <button onClick={() => signOut()}>logout</button>
      </main>
    </SessionProvider>
  );
}
