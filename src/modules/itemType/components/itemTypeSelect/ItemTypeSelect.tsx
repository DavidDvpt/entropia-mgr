'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';

import { ChangeEvent } from 'react';
import useItemType from '../../useItemType';
import styles from './itemTypeSelect.module.scss';

interface IItemCategorySelectProps {
  className?: string;
  value?: string;
  itemCategoryId?: string;
  onChange?: (type: IAppItemType) => void;
}
function ItemTypeSelect(props: IItemCategorySelectProps) {
  const { data, isError, isLoading } = useItemType({
    itemCategoryId: props.itemCategoryId,
  });

  const options = data?.map((m) => ({ value: m.id, display: m.name }));
  if (isLoading || isError || !options) return null;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const cat = data?.find((f) => f.id === value);

    cat && props.onChange?.(cat);
  };

  const css = [styles.itemCategorySelect];
  props.className && css.push(props.className);

  return (
    <FormField
      children={
        <Select
          options={options}
          className={css.join(' ')}
          noValueDisplay="Types"
          value={props.value ?? ''}
          onChange={handleChange}
        />
      }
      name="type"
      label="Type :"
    />
  );
}

export default ItemTypeSelect;
