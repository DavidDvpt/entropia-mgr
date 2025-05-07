import { axiosInstance } from '@/lib/axios/axios';
import { useQuery } from '@tanstack/react-query';
import { navigationParser } from './navigationParser';

function useNavigation() {
  return useQuery<NavigationElementsType>({
    queryKey: ['navigation'],
    queryFn: async () => {
      const { data } = await axiosInstance().get<any[]>('/api/navigation');

      const parsed = await Promise.all(data.map((m) => navigationParser(m)));

      return parsed;
    },
  });
}

export default useNavigation;
