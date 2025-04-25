'use client';

import queryClient from '@/lib/reactQuery/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => queryClient);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;
