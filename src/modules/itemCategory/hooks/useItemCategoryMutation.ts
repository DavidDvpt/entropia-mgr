'use client';

import useQueryMutation from '@/shared/hooks/useQueryMutation';
import { useQueryClient } from '@tanstack/react-query';

interface IUseItemCategoryMutationProps {
  isModal?: boolean;
}
function useItemCategoryMutation({ isModal }: IUseItemCategoryMutationProps) {
  const queryClient = useQueryClient();

  const onSuccess = () => {};

  const result = useQueryMutation({
    queryKey: ['itemCategories'],
    url: '/api/itemCategories',
    onSuccess,
  });

  return result;
}

export default useItemCategoryMutation;
