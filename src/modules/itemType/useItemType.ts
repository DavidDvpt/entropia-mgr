'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { useQuery } from '@tanstack/react-query';
import { itemTypeParser } from './itemTypeParser';

interface IUseItemTypeProps {
  itemCategoryId?: string;
  loadAll?: boolean;
}
function useItemType({ itemCategoryId, loadAll = false }: IUseItemTypeProps) {
  return useQuery<AppItemTypes>({
    queryKey: ['itemTypes', { itemCategoryId, loadAll }],
    queryFn: async () => {
      if (loadAll || itemCategoryId) {
        const { data } = await axiosInstance().get<any[]>('/api/itemTypes', {
          params: itemCategoryId ? { itemCategoryId } : undefined,
        });

        const parsed = await Promise.all(data.map((m) => itemTypeParser(m)));

        return parsed;
      } else {
        return [];
      }
    },
  });
}

export default useItemType;
