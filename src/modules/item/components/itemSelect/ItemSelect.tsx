'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';

import { ChangeEvent } from 'react';
import useItem from '../../useItem';
import styles from './itemSelect.module.scss';

interface IItemSelectProps {
  className?: string;
  value?: string;
  itemTypeId?: string;
  onChange?: (type: IAppItem) => void;
}
function ItemSelect(props: IItemSelectProps) {
  const { data, isError, isLoading } = useItem({
    itemTypeId: props.itemTypeId,
  });

  const options = data?.map((m) => ({ value: m.id, display: m.name })) ?? [];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const cat = data?.find((f) => f.id === value);

    cat && props.onChange?.(cat);
  };

  const css = [styles.itemSelect];
  props.className && css.push(props.className);

  return (
    <FormField
      children={
        <Select
          options={data}
          className={css.join(' ')}
          noValueDisplay="Items"
          value={props.value ?? ''}
          onChange={handleChange}
        />
      }
      name="type"
      label="Type :"
    />
  );
}

export default ItemSelect;
