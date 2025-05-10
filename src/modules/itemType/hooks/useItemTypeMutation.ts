'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import useQueryMutation from '@/shared/hooks/useQueryMutation';

interface IUseItemTypeMutationProps {
  isModal?: boolean;
}
function useItemTypeMutation({ isModal }: IUseItemTypeMutationProps) {
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
