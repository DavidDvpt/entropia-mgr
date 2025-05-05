'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { genericArrayParser } from '@/shared/tools/parserTool';
import { useQuery } from '@tanstack/react-query';
import { itemParser } from './itemParser';

interface IUseItemProps {
  itemTypeId?: string;
  loadAll?: boolean;
}
function useItem({ itemTypeId, loadAll = false }: IUseItemProps) {
  return useQuery<AppItems>({
    queryKey: ['items', { itemTypeId, loadAll }],
    queryFn: async () => {
      if (loadAll || itemTypeId) {
        const { data } = await axiosInstance().get<any[]>('/api/items', {
          params: itemTypeId ? { itemTypeId } : undefined,
        });

        const parsed = await genericArrayParser<IAppItem>(data, itemParser);

        return parsed;
      } else {
        return [];
      }
    },
  });
}

export default useItem;
