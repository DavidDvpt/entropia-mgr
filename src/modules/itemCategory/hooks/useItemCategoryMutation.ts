'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import useQueryMutation from '@/shared/hooks/useQueryMutation';
import { useQueryClient } from '@tanstack/react-query';

interface IUseItemCategoryMutationProps {
  isModal?: boolean;
}
function useItemCategoryMutation({ isModal }: IUseItemCategoryMutationProps) {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const closeModal = () => {
    if (isModal) {
      dispatch(modalActions.resetItemCategoryForm());
    }
  };

  const result = useQueryMutation({
    queryKey: ['itemCategories'],
    url: '/api/itemCategories',
    onSuccess: closeModal,
  });

  return { ...result, closeModal };
}

export default useItemCategoryMutation;
