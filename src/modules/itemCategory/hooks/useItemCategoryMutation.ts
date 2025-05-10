'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useItemCategoryMutation() {
  const queryClient = useQueryClient();

  const mutationSuccess = () =>
    queryClient.invalidateQueries({ queryKey: ['itemCategories'] });

  const createCategory = useMutation({
    mutationFn: async (newCategory: Partial<Omit<IAppItemCategory, 'id'>>) => {
      const { data } = await axiosInstance().post(
        '/api/itemCategories',
        newCategory
      );
      return data;
    },
    onSuccess: () => mutationSuccess(),
  });

  const updateCategory = useMutation({
    mutationFn: async ({
      id,
      updatedCategory,
    }: {
      id: string;
      updatedCategory: IAppItemCategory;
    }) => {
      const { data } = await axiosInstance().put(
        `/api/itemCategorie/${id}`,
        updatedCategory
      );
      return data;
    },
    onSuccess: () => mutationSuccess(),
  });

  const deleteCategory = useMutation({
    mutationFn: async (id: string) => {
      await axiosInstance().delete(`/api/itemCategories/${id}`);
    },
    onSuccess: () => () => mutationSuccess(),
  });

  return {
    createCategory,
    updateCategory,
    deleteCategory,
  };
}

export default useItemCategoryMutation;
