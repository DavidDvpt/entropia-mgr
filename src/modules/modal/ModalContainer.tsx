import { useAppSelector } from '@/lib/redux/store';
import { getModalState } from './modalSlice';

function ModalContainer() {
  const modalState = useAppSelector(getModalState);

  return <div>{modalState.itemCategoryFormModal && <div></div>}</div>;
}

export default ModalContainer;
