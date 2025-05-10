'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import useQueryMutation from '@/shared/hooks/useQueryMutation';
import { useQueryClient } from '@tanstack/react-query';

interface IUseItemTypeMutationProps {
  isModal?: boolean;
}
function useItemTypeMutation({ isModal }: IUseItemTypeMutationProps) {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const closeModal = () => {
    if (isModal) {
      isModal && dispatch(modalActions.resetItemTypeForm());
    }
  };

  const result = useQueryMutation({
    queryKey: ['itemTypes'],
    url: '/api/itemTypes',
    onSuccess: closeModal,
  });

  return { ...result, closeModal };
}

export default useItemTypeMutation;
