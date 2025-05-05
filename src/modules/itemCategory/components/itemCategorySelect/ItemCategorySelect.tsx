'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';
import { ChangeEvent } from 'react';
import useItemCategory from '../../useItemCategory';
import styles from './itemCategorySelect.module.scss';

interface IItemCategorySelectProps {
  className?: string;
  value?: string;
  onChange?: (cat: IAppItemCategory) => void;
}

function ItemCategorySelect(props: IItemCategorySelectProps) {
  const { data, isError, isLoading } = useItemCategory();

  const css = [styles.itemCategorySelect];
  props.className && css.push(props.className);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const cat = data?.find((f) => f.id === value);

    cat && props.onChange?.(cat);
  };

  return (
    <FormField
      children={
        <Select
          options={data ?? []}
          className={css.join(' ')}
          noValueDisplay="Catégories"
          value={props.value ?? ''}
          onChange={handleChange}
        />
      }
      name="category"
      label="Catégorie"
    />
  );
}

export default ItemCategorySelect;
