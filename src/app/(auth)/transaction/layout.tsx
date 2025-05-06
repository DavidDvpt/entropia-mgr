'use client';

import queryClient from '@/lib/reactQuery/queryClient';
import { searchItemEngineCtxInitValue } from '@/modules/searchItemEngine/constants';
import SearchItemEngine from '@/modules/searchItemEngine/SearchItemEngine';
import createGenericCtx from '@/shared/contexts/GenericContext';
import { useEffect } from 'react';

const [ctx, SellBuyProvider] = createGenericCtx<SearchItemEngineCtxType>(
  searchItemEngineCtxInitValue
);
export const sellBuyContext = ctx;

function TransactionLayout({ children }: IChildren) {
  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['itemTypes'] });
      queryClient.removeQueries({ queryKey: ['items'] });
    };
  }, []);

  return (
    <div>
      <SellBuyProvider>
        <SearchItemEngine />
        {children}
      </SellBuyProvider>
    </div>
  );
}

export default TransactionLayout;
