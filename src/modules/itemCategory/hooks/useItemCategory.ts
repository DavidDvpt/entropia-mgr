'use client';

import useQuerySelect from '@/shared/hooks/useQuerySelect';
import { itemCategoryParser } from '../itemCategoryParser';

interface IInitDataProps {
  initialDatas?: AppItemCategories;
}
function useItemCategory({ initialDatas }: IInitDataProps) {
  const result = useQuerySelect({
    initDatas: initialDatas,
    queryKey: ['itemCategories'],
    url: '/api/itemCategories',
    parserSingle: itemCategoryParser,
  });

  return result;
}

export default useItemCategory;
