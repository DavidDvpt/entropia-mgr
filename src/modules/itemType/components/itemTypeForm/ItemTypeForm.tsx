import { useAppDispatch } from '@/lib/redux/store';
import GenericForm from '@/shared/components/form/GenericForm';
import ObjectBaseForm from '@/shared/components/form/ObjectBaseForm/ObjectBaseForm';
import FormButtonContainer from '@/shared/components/form/formButtonContainer/FormButtonContainer';
import useItemTypeMutation from '../../hooks/useItemTypeMutation';
import {
  defaultItemTypeFormInitialValues,
  itemTypeformSchema,
} from './constants';
import styles from './itemTypeForm.module.scss';
interface IItemTypeFormProps {
  defaultValues: Partial<IAppItemType> | null;
  isModal?: boolean;
}

function ItemTypeForm({ defaultValues, isModal }: IItemTypeFormProps) {
  const dispatch = useAppDispatch();
  const { createFnc, updateFnc, closeModal } = useItemTypeMutation({
    isModal: true,
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
      defaultValues={defaultValues ?? defaultItemTypeFormInitialValues}
      externalError={null}
      onSubmit={handleSubmit}
      schema={itemTypeformSchema}
    >
      {error && (
        <div>{error.response.status + ' ' + error.response.statusText}</div>
      )}
      {!error && (
        <div className={styles.itemTypeForm}>
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

export default ItemTypeForm;
