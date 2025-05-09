import { useAppSelector } from '@/lib/redux/store';
import ItemCategoryFormModal from '@/modules/itemCategory/components/ItemCategoryFormModal';
import { getModalState } from '../modalSlice';

function ModalContainer() {
  const modalState = useAppSelector(getModalState);

  return (
    <div>
      {modalState.itemCategoryFormModal.display && <ItemCategoryFormModal />}
    </div>
  );
}

export default ModalContainer;
