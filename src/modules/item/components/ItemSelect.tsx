'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';

import { ChangeEvent, SelectHTMLAttributes } from 'react';
import useItem from '../useItem';

interface IItemSelectProps {
  className?: string;
  value?: string;
  itemTypeId?: string;
  onChange?: (type: IAppItem) => void;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
}
function ItemSelect(props: IItemSelectProps) {
  const { data, isError, isLoading } = useItem({
    params: { itemTypeId: props.itemTypeId },
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const cat = data?.find((f) => f.id === value);

    cat && props.onChange?.(cat);
  };

  return (
    <FormField
      className={props.className}
      children={
        <Select
          {...props.selectProps}
          options={data}
          noValueDisplay="Items"
          value={props.value ?? ''}
          onChange={handleChange}
        />
      }
      name="type"
      label="Item :"
    />
  );
}

export default ItemSelect;
