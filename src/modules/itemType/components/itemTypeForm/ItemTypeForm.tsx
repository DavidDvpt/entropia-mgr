import ItemCategorySelect from '@/modules/itemCategory/components/ItemCategorySelect';
import GenericForm from '@/shared/components/form/GenericForm';
import ObjectBaseForm from '@/shared/components/form/ObjectBaseForm/ObjectBaseForm';
import FormButtonContainer from '@/shared/components/form/formButtonContainer/FormButtonContainer';
import Checkbox from '@/shared/components/ui/checkbox/Checkbox';
import FormField from '@/shared/components/ui/formField/FormField';
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
  const { createFnc, updateFnc, closeModal } = useItemTypeMutation({
    isModal: true,
  });

  const error: any = createFnc.error ?? updateFnc.error ?? null;

  const handleSubmit = (values: Partial<IAppItemCategory>) => {
    console.log(defaultValues?.id, values);
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

          <FormField
            name="isStackable"
            label="Empilable : "
            labelPosition="left"
            childAlign="left"
          >
            <Checkbox />
          </FormField>

          <ItemCategorySelect
            label="Choix de catégorie"
            name="itemCategoryId"
          />

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
