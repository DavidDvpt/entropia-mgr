import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import FormButtonContainer from '@/shared/components/form/formButtonContainer/FormButtonContainer';
import GenericForm from '@/shared/components/form/GenericForm';
import {
  defaultObjectBaseValue,
  objectBaseFormSchema,
} from '@/shared/components/form/ObjectBaseForm/constants';
import ObjectBaseForm from '@/shared/components/form/ObjectBaseForm/ObjectBaseForm';
import useItemCategoryMutation from '../../hooks/useItemCategoryMutation';

import styles from './itemCategoryForm.module.scss';

interface IItemCategoryFormProps {
  defaultValues: Partial<IAppItemCategory> | null;
  isModal?: boolean;
}
function ItemCategoryForm({ defaultValues, isModal }: IItemCategoryFormProps) {
  const closeModal = () =>
    isModal && dispatch(modalActions.resetItemCategoryForm());
  const handleCancel = () => closeModal();
  const handleSuccess = () => closeModal();
  const { createFnc, updateFnc } = useItemCategoryMutation({
    isModal,
  });
  const dispatch = useAppDispatch();

  const error: any = createFnc.error ?? updateFnc.error ?? null;

  const handleSublit = (values: Partial<IAppItemCategory>) => {
    if (defaultValues?.id) {
      updateFnc.mutate(
        { id: defaultValues.id, body: values as IAppItemCategory },
        {
          onSuccess: () => handleSuccess(),
        }
      );
    } else {
      createFnc.mutate(values, {
        onSuccess: () => handleSuccess(),
      });
    }
  };

  return (
    <GenericForm
      defaultValues={defaultValues ?? defaultObjectBaseValue}
      externalError={null}
      onSubmit={handleSublit}
      schema={objectBaseFormSchema}
    >
      {error && (
        <div>{error.response.status + ' ' + error.response.statusText}</div>
      )}
      {!error && (
        <div className={styles.itemCategoryForm}>
          <ObjectBaseForm />

          <FormButtonContainer
            onCancel={handleCancel}
            type={defaultValues?.id ? 'update' : 'create'}
          />
        </div>
      )}
    </GenericForm>
  );
}

export default ItemCategoryForm;
