import { useAppSelector } from '@/lib/redux/store';
import GenericModalComponent from '@/modules/modal/components/GenericModalComponent';
import { getModalState } from '@/modules/modal/modalSlice';
import ItemCategoryForm from './itemCategoryForm/ItemCategoryForm';

function ItemCategoryFormModal() {
  const { itemCategoryFormModal } = useAppSelector(getModalState);
  return (
    <GenericModalComponent>
      <ItemCategoryForm defaultValues={itemCategoryFormModal.item} />
    </GenericModalComponent>
  );
}

export default ItemCategoryFormModal;
