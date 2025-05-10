import { useAppSelector } from '@/lib/redux/store';
import GenericModalComponent from '@/modules/modal/components/GenericModalComponent';
import { getModalState } from '@/modules/modal/modalSlice';
import ItemTypeForm from './itemTypeForm/ItemTypeForm';

function ItemTypeFormModal() {
  const { itemTypeFormModal } = useAppSelector(getModalState);
  const title = itemTypeFormModal.item
    ? 'Modification du type'
    : "Création d'un type";
  return (
    <GenericModalComponent title={title}>
      <ItemTypeForm defaultValues={itemTypeFormModal.item} isModal />
    </GenericModalComponent>
  );
}

export default ItemTypeFormModal;
