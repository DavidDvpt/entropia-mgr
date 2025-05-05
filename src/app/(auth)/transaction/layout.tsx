'use client';

import queryClient from '@/lib/reactQuery/queryClient';
import SearchItemEngine from '@/modules/searchItemEngine/SearchItemEngine';
import createGenericCtx from '@/shared/contexts/GenericContext';
import { useEffect } from 'react';

type SellBuyCtxType = {
  itemCategory: IAppItemCategory | null;
  itemType: IAppItemType | null;
  item: IAppItem | null;
};
const [ctx, SellBuyProvider] = createGenericCtx<SellBuyCtxType>({
  itemCategory: null,
  itemType: null,
  item: null,
});
export const sellBuyContext = ctx;

function layout({ children }: IChildren) {
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

export default layout;
