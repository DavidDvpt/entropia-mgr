import { useAppSelector } from '@/lib/redux/store';
import GenericModalComponent from '@/modules/modal/components/GenericModalComponent';
import { getModalState } from '@/modules/modal/modalSlice';
import ItemCategoryForm from './itemCategoryForm/ItemCategoryForm';

function ItemCategoryFormModal() {
  const { itemCategoryFormModal } = useAppSelector(getModalState);
  const title = itemCategoryFormModal.item
    ? 'Modification de catégorie'
    : 'Création de catégorie';
  return (
    <GenericModalComponent title={title}>
      <ItemCategoryForm defaultValues={itemCategoryFormModal.item} isModal />
    </GenericModalComponent>
  );
}

export default ItemCategoryFormModal;
