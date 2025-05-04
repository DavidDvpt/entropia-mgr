'use client';

import SearchItemEngine from '@/modules/searchItemEngine/SearchItemEngine';
import createGenericCtx from '@/shared/components/GenericContext';

type SellBuyCtxType = {
  itemCategory: IAppItemCategory | null;
  itemType: IAppItemType | null;
  item: any | null;
};
const [ctx, SellBuyProvider] = createGenericCtx<SellBuyCtxType>({
  itemCategory: null,
  itemType: null,
  item: null,
});
export const sellBuyContext = ctx;

function layout({ children }: IChildren) {
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
