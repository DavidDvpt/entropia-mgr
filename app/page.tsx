'use client';

import { SessionProvider, signIn, useSession } from 'next-auth/react';

export default function Home() {
  const { data, status, update } = useSession();
  console.log(data, status);

  if (status === 'unauthenticated') {
    signIn();
  }

  return (
    <SessionProvider>
      <main>app</main>
    </SessionProvider>
  );
}
