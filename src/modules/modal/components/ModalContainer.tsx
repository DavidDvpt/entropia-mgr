import { useAppSelector } from '@/lib/redux/store';
import ItemCategoryFormModal from '@/modules/itemCategory/components/ItemCategoryFormModal';
import ItemTypeFormModal from '@/modules/itemType/components/ItemTypeFormModal';
import { getModalState } from '../modalSlice';

function ModalContainer() {
  const modalState = useAppSelector(getModalState);

  return (
    <div>
      {modalState.itemCategoryFormModal.display && <ItemCategoryFormModal />}
      {modalState.itemTypeFormModal.display && <ItemTypeFormModal />}
    </div>
  );
}

export default ModalContainer;
