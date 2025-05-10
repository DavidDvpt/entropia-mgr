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
  const { createFnc, updateFnc, closeModal } = useItemCategoryMutation({
    isModal,
  });

  const error: any = createFnc.error ?? updateFnc.error ?? null;

  const handleSubmit = (values: Partial<IAppItemCategory>) => {
    if (defaultValues?.id) {
      updateFnc.mutate({
        id: defaultValues.id,
        body: values as IAppItemCategory,
      });
    } else {
      createFnc.mutate(values);
    }
  };

  return (
    <GenericForm
      defaultValues={defaultValues ?? defaultObjectBaseValue}
      externalError={null}
      onSubmit={handleSubmit}
      schema={objectBaseFormSchema}
    >
      {error && (
        <div>{error.response.status + ' ' + error.response.statusText}</div>
      )}
      {!error && (
        <div className={styles.itemCategoryForm}>
          <ObjectBaseForm />

          <FormButtonContainer
            onCancel={closeModal}
            type={defaultValues?.id ? 'update' : 'create'}
          />
        </div>
      )}
    </GenericForm>
  );
}

export default ItemCategoryForm;
