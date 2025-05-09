import { getModalState, modalsActions } from '@/modules/modal/modalSlice';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';

import GenericModal from '@/shared/components/GenericModal/GenericModal';
import {
  GenericModalActionEnum,
  GenericModalEnum,
} from '@/shared/components/GenericModal/genericModalEnums';
import PedcardBalanceContainer from './profileModalContainer/PedcardBalanceContainer';

function ProfileModal() {
  const dispatch = useAppDispatch();
  const { pedCardUpdateModal } = useAppSelector(getModalState);

  const handleClose = () => {
    dispatch(modalsActions.profileWindowSet(false));
  };

  return (
    <>
      {pedCardUpdateModal && (
        <GenericModal
          actionType={GenericModalActionEnum.NONE}
          modalType={GenericModalEnum.INFO}
          closeModal={handleClose}
          hasIcon={false}
          title="Mise à jour Ped Card"
        >
          <PedcardBalanceContainer />
        </GenericModal>
      )}
    </>
  );
}

export default ProfileModal;
