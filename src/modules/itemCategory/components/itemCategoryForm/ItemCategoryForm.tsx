import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import FormButtonContainer from '@/shared/components/form/formButtonContainer/FormButtonContainer';
import GenericForm from '@/shared/components/form/GenericForm';
import Checkbox from '@/shared/components/ui/checkbox/Checkbox';
import FormField from '@/shared/components/ui/formField/FormField';
import Input from '@/shared/components/ui/input/Input';
import useItemCategoryMutation from '../../hooks/useItemCategoryMutation';
import { defaultItemCategoryValue, itemCategoryFormSchema } from './constants';
import styles from './itemCategoryForm.module.scss';

interface IItemCategoryFormProps {
  defaultValues: Partial<IAppItemCategory> | null;
  isModal?: boolean;
}
function ItemCategoryForm({ defaultValues, isModal }: IItemCategoryFormProps) {
  const { createCategory, updateCategory } = useItemCategoryMutation();
  const dispatch = useAppDispatch();

  const closeModal = () =>
    isModal && dispatch(modalActions.resetItemCategoryForm());
  const handleCancel = () => closeModal();
  const handleSuccess = () => closeModal();
  const handleSublit = (values: Partial<IAppItemCategory>) => {
    if (defaultValues?.id) {
      updateCategory.mutate(
        { id: defaultValues.id, updatedCategory: values as IAppItemCategory },
        {
          onSuccess: () => handleSuccess(),
        }
      );
    } else {
      createCategory.mutate(values, {
        onSuccess: () => handleSuccess(),
      });
    }
  };

  return (
    <GenericForm
      defaultValues={defaultValues ?? defaultItemCategoryValue}
      externalError={null}
      onSubmit={handleSublit}
      schema={itemCategoryFormSchema}
    >
      <div className={styles.itemCategoryForm}>
        <FormField name="name" label="Nom de catégorie">
          <Input />
        </FormField>
        <FormField
          name="isActive"
          label="Actif"
          labelPosition="left"
          childAlign="left"
        >
          <Checkbox />
        </FormField>

        <FormButtonContainer
          onCancel={handleCancel}
          type={defaultValues?.id ? 'update' : 'create'}
        />
      </div>
    </GenericForm>
  );
}

export default ItemCategoryForm;
