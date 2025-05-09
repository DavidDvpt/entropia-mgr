import GenericForm from '@/shared/components/form/GenericForm';
import Button from '@/shared/components/ui/button/Button';
import FormField from '@/shared/components/ui/formField/FormField';
import Input from '@/shared/components/ui/input/Input';
import { defaultItemCategoryValue, itemCategoryFormSchema } from './constants';
import styles from './itemCategoryForm.module.scss';

interface IItemCategoryFormProps {
  defaultValues: Partial<IAppItemCategory> | null;
}
function ItemCategoryForm({ defaultValues }: IItemCategoryFormProps) {
  const handleSublit = () => {};

  return (
    <GenericForm
      defaultValues={defaultValues ?? defaultItemCategoryValue}
      externalError={null}
      onSubmit={handleSublit}
      schema={itemCategoryFormSchema}
    >
      <div className={styles.itemCategoryform}>
        <FormField name="name" label="Nom de catégorie">
          <Input />
        </FormField>

        <Button variant="primary" type="submit">
          {defaultValues?.id ? 'Créer' : 'Modifier'}
        </Button>
      </div>
    </GenericForm>
  );
}

export default ItemCategoryForm;
