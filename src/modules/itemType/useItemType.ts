'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { useQuery } from '@tanstack/react-query';
import { itemTypeParser } from './itemTypeParser';

function useItemType() {
  return useQuery<AppItemTypes>({
    queryKey: ['itemTypes'],
    queryFn: async () => {
      const { data } = await axiosInstance().get<any[]>('/api/itemTypes');

      const parsed = await Promise.all(data.map((m) => itemTypeParser(m)));

      return parsed;
    },
  });
}

export default useItemType;
