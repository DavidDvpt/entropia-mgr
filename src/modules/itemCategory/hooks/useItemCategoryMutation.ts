'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import useQueryMutation from '@/shared/hooks/useQueryMutation';

interface IUseItemCategoryMutationProps {
  isModal?: boolean;
}
function useItemCategoryMutation({ isModal }: IUseItemCategoryMutationProps) {
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
