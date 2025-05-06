'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { genericArrayParser } from '@/shared/tools/parserTool';
import { useQuery } from '@tanstack/react-query';
import { itemCategoryParser } from '../itemCategoryParser';

interface IInitDataProps {
  initDatas?: AppItemCategories;
}
function useItemCategory({ initDatas }: IInitDataProps) {
  return useQuery<AppItemCategories>({
    queryKey: ['itemCategories'],
    queryFn: async () => {
      const { data } = await axiosInstance().get<any[]>('/api/itemCategories');
      const parsed = await genericArrayParser<IAppItemCategory>(
        data,
        itemCategoryParser
      );

      return parsed;
    },
    initialData: initDatas,
    refetchOnMount: !Boolean(initDatas),
  });
}

export default useItemCategory;
