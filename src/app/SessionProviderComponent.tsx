'use client';

import ReduxProvider from '@/lib/redux/Provider';
import { SessionProvider } from 'next-auth/react';

function SessionProviderComponent({ children }: IChildren) {
  return (
    <SessionProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </SessionProvider>
  );
}

export default SessionProviderComponent;
