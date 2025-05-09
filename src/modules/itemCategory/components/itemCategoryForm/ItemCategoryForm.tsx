import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import GenericForm from '@/shared/components/form/GenericForm';
import Button from '@/shared/components/ui/button/Button';
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

        <div className={styles.btnContainer}>
          <Button variant="error" onClick={handleCancel} type="reset">
            Annuler
          </Button>
          <Button variant="primary" type="submit">
            {defaultValues?.id ? 'Modifier' : 'Créer'}
          </Button>
        </div>
      </div>
    </GenericForm>
  );
}

export default ItemCategoryForm;
