'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';
import useItemCategory from '../../useItemCategory';
import styles from './itemCategorySelect.module.scss';

function ItemCategorySelect() {
  const { data, isError, isLoading } = useItemCategory();

  const options = data?.map((m) => ({ value: m.id, display: m.name }));
  if (isLoading || isError || !options) return null;

  return (
    <FormField
      className={styles.itemCategorySelect}
      children={<Select options={options} noValueDisplay="Catégories" />}
      name="category"
      label="Catégorie"
    />
  );
}

export default ItemCategorySelect;
