'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { useQuery } from '@tanstack/react-query';
import { itemCategoryParser } from './itemCategoryParser';

function useItemCategory() {
  return useQuery<AppItemCatgories>({
    queryKey: ['itemCategories'],
    queryFn: async () => {
      const { data } = await axiosInstance().get<any[]>('/api/itemCategories');

      const parsed = await Promise.all(data.map((m) => itemCategoryParser(m)));

      return parsed;
    },
  });
}

export default useItemCategory;
