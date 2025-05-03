import { axiosInstance } from '@/lib/axios/axios';
import { useQuery } from '@tanstack/react-query';

function useItemCategories() {
  return useQuery<DropDownElementsType>({
    queryKey: ['navigation'],
    queryFn: async () => {
      const { data } = await axiosInstance().get<any[]>('/api/item-category');

      const parsed = await Promise.all(data.map((m) => navigationParser(m)));

      return parsed;
    },
  });
}

export default useItemCategories;
