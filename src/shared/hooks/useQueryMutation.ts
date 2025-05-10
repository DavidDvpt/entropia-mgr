import { axiosInstance } from '@/lib/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IUseQueryMutationProps<T> {
  onSuccess: () => void;
  queryKey: string[];
  url: string;
  parserSingle?: (data: any) => Promise<T>;
}
function useQueryMutation<T>(props: IUseQueryMutationProps<T>) {
  const queryClient = useQueryClient();

  const mutationSuccess = () => {
    queryClient.invalidateQueries({ queryKey: props.queryKey });
    props.onSuccess?.();
  };

  const createFnc = useMutation({
    mutationFn: async (body: Partial<Omit<T, 'id'>>) => {
      const { data } = await axiosInstance().post(props.url, body);
      return data;
    },
    onSuccess: () => mutationSuccess(),
  });

  const updateFnc = useMutation({
    mutationFn: async ({ id, body }: { id: string; body: T }) => {
      const { data } = await axiosInstance().put(`${props.url}/${id}`, body);
      return data;
    },
    onSuccess: () => mutationSuccess(),
  });

  const deleteFnc = useMutation({
    mutationFn: async (id: string) => {
      await axiosInstance().delete(`${props.url}/${id}`);
    },
    onSuccess: () => () => mutationSuccess(),
  });

  return {
    createFnc,
    updateFnc,
    deleteFnc,
  };
}

export default useQueryMutation;
